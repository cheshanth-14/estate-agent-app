import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

// Test Component to access context
const TestFavoritesComponent = () => {
    const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
    const testProp = { id: '1', shortDescription: 'Test Prop', images: ['test.jpg'], price: 100000 };

    return (
        <div>
            <div data-testid="fav-count">{favorites.length}</div>
            <button onClick={() => addFavorite(testProp)}>Add</button>
            <button onClick={() => removeFavorite('1')}>Remove</button>
            <div data-testid="is-fav">{isFavorite('1') ? 'Yes' : 'No'}</div>
        </div>
    );
};

describe('Favorites System', () => {
    test('should add a property to favorites and prevent duplicates', () => {
        render(
            <FavoritesProvider>
                <TestFavoritesComponent />
            </FavoritesProvider>
        );

        const count = screen.getByTestId('fav-count');
        const addBtn = screen.getByText('Add');

        // Initial state
        expect(count.textContent).toBe('0');

        // Add Once
        fireEvent.click(addBtn);
        expect(count.textContent).toBe('1');

        // Add Duplicate
        fireEvent.click(addBtn);
        expect(count.textContent).toBe('1'); // Should still be 1
    });

    test('should remove a property from favorites', () => {
        render(
            <FavoritesProvider>
                <TestFavoritesComponent />
            </FavoritesProvider>
        );

        const addBtn = screen.getByText('Add');
        const removeBtn = screen.getByText('Remove');
        const count = screen.getByTestId('fav-count');

        // Add then Remove
        fireEvent.click(addBtn);
        expect(count.textContent).toBe('1');
        fireEvent.click(removeBtn);
        expect(count.textContent).toBe('0');
    });
});
