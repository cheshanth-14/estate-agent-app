import { filterProperties } from '../utils/filterUtils';

const mockProperties = [
    { id: '1', type: 'house', price: 100000, bedrooms: 3, postcodeArea: 'OX1', dateAdded: '2023-01-01' },
    { id: '2', type: 'flat', price: 200000, bedrooms: 2, postcodeArea: 'E1', dateAdded: '2023-06-01' },
    { id: '3', type: 'house', price: 300000, bedrooms: 4, postcodeArea: 'OX2', dateAdded: '2023-12-01' },
];

describe('Search Filter Logic', () => {
    const defaultFilters = {
        type: 'any',
        minPrice: 0,
        maxPrice: 2000000,
        minBedrooms: 0,
        maxBedrooms: 10,
        postcodeArea: '',
        dateAdded: null
    };

    test('should filter by property type', () => {
        const filters = { ...defaultFilters, type: 'house' };
        const results = filterProperties(mockProperties, filters);
        expect(results).toHaveLength(2);
        expect(results[0].type).toBe('house');
        expect(results[1].type).toBe('house');
    });

    test('should filter by min/max price', () => {
        const filters = { ...defaultFilters, minPrice: 150000, maxPrice: 250000 };
        const results = filterProperties(mockProperties, filters);
        expect(results).toHaveLength(1);
        expect(results[0].id).toBe('2');
    });

    test('should filter by min bedrooms', () => {
        const filters = { ...defaultFilters, minBedrooms: 3 };
        const results = filterProperties(mockProperties, filters);
        expect(results).toHaveLength(2); // ID 1 (3 beds) & ID 3 (4 beds)
    });

    test('should filter by multiple criteria (type + price)', () => {
        const filters = { ...defaultFilters, type: 'house', minPrice: 0, maxPrice: 150000 };
        const results = filterProperties(mockProperties, filters);
        expect(results).toHaveLength(1);
        expect(results[0].id).toBe('1');
    });

    test('should handle date added (after)', () => {
        const filters = { ...defaultFilters, dateAdded: new Date('2023-11-01') };
        const results = filterProperties(mockProperties, filters);
        expect(results).toHaveLength(1); // Only ID 3 (Dec 2023)
    });
});
