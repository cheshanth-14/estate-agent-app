import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Slider from 'rc-slider';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-slider/assets/index.css';
import { FaSearch, FaFilter, FaUndo } from 'react-icons/fa';
import propertiesData from '../data/properties.json';

const defaultFilters = {
    type: null,
    minPrice: 50000,
    maxPrice: 2000000,
    minBedrooms: 0,
    maxBedrooms: 10,
    dateAdded: null,
    postcodeArea: ''
};

const SearchForm = ({ onFilterChange }) => {
    const [filters, setFilters] = useState(defaultFilters);

    const typeOptions = [
        { value: 'any', label: 'Any' },
        { value: 'house', label: 'House' },
        { value: 'flat', label: 'Flat' }
    ];

    const handleTypeChange = (selectedOption) => {
        setFilters(prev => ({ ...prev, type: selectedOption }));
    };

    const handlePriceChange = (value) => {
        setFilters(prev => ({ ...prev, minPrice: value[0], maxPrice: value[1] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setFilters(prev => ({ ...prev, dateAdded: date }));
    };

    const resetFilters = () => {
        setFilters(defaultFilters);
    };

    // Check if any filters are active (not default)
    const hasActiveFilters =
        filters.type !== null ||
        filters.minPrice !== defaultFilters.minPrice ||
        filters.maxPrice !== defaultFilters.maxPrice ||
        filters.minBedrooms !== defaultFilters.minBedrooms ||
        filters.maxBedrooms !== defaultFilters.maxBedrooms ||
        filters.dateAdded !== null ||
        filters.postcodeArea !== '';

    useEffect(() => {
        onFilterChange({
            ...filters,
            type: filters.type ? filters.type.value : 'any'
        });
    }, [filters, onFilterChange]);

    return (
        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaFilter color="var(--accent)" />
                    <h3 style={{ margin: 0, color: 'var(--primary)' }}>Find your home</h3>
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={resetFilters}
                        className="btn btn-outline"
                        title="Reset all filters"
                        style={{
                            fontSize: '0.8rem',
                            padding: '0.4rem 0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            borderColor: 'var(--accent)',
                            color: 'var(--accent)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <FaUndo size={12} /> Reset Filters
                    </button>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>

                {/* Type - React Select */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Property Type</label>
                    <Select
                        options={typeOptions}
                        value={filters.type}
                        onChange={handleTypeChange}
                        placeholder="Select Type..."
                        styles={{
                            control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 'var(--radius-sm)' }),
                            menuPortal: (base) => ({ ...base, zIndex: 9999 })
                        }}
                        menuPortalTarget={document.body}
                    />
                </div>

                {/* Price Range - RC Slider */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        Price: £{filters.minPrice.toLocaleString()} - £{filters.maxPrice.toLocaleString()}
                    </label>
                    <div style={{ padding: '0 0.5rem' }}>
                        <Slider
                            range
                            min={50000}
                            max={2000000}
                            step={10000}
                            value={[filters.minPrice, filters.maxPrice]}
                            onChange={handlePriceChange}
                            trackStyle={[{ backgroundColor: 'var(--accent)' }]}
                            handleStyle={[{ borderColor: 'var(--accent)', backgroundColor: 'white' }, { borderColor: 'var(--accent)', backgroundColor: 'white' }]}
                            railStyle={{ backgroundColor: 'var(--border)' }}
                        />
                    </div>
                </div>

                {/* Bedrooms - Number Inputs */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Min Beds</label>
                        <input
                            type="number"
                            name="minBedrooms"
                            min="0"
                            max="10"
                            value={filters.minBedrooms}
                            onChange={handleChange}
                            className="form-input"
                            style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', width: '100%', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Max Beds</label>
                        <input
                            type="number"
                            name="maxBedrooms"
                            min="0"
                            max="10"
                            value={filters.maxBedrooms}
                            onChange={handleChange}
                            className="form-input"
                            style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', width: '100%', boxSizing: 'border-box' }}
                        />
                    </div>
                </div>

                {/* Postcode Area - Dropdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Postcode Area</label>
                    <Select
                        options={[
                            { value: '', label: 'Any Area' },
                            ...[...new Set(propertiesData.map(p => p.postcodeArea))].sort().map(pc => ({
                                value: pc,
                                label: pc
                            }))
                        ]}
                        value={filters.postcodeArea ? { value: filters.postcodeArea, label: filters.postcodeArea } : { value: '', label: 'Any Area' }}
                        onChange={(option) => handleChange({ target: { name: 'postcodeArea', value: option ? option.value : '' } })}
                        placeholder="Select Area..."
                        isClearable
                        styles={{
                            control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 'var(--radius-sm)' }),
                            menuPortal: (base) => ({ ...base, zIndex: 9999 })
                        }}
                        menuPortalTarget={document.body}
                    />
                </div>

                {/* Date Added - React DatePicker */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Added After</label>
                    <DatePicker
                        selected={filters.dateAdded}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select date"
                        className="form-input"
                        wrapperClassName="date-picker-wrapper"
                    />
                </div>

            </div>
            <style>{`
        .date-picker-wrapper { width: 100%; }
        .date-picker-wrapper input { 
          width: 100%; 
          padding: 0.5rem; 
          border-radius: var(--radius-sm); 
          border: 1px solid var(--border);
          box-sizing: border-box;
          font-family: inherit;
        }
      `}</style>
        </div>
    );
};

SearchForm.propTypes = {
    onFilterChange: PropTypes.func.isRequired
};

export default SearchForm;
