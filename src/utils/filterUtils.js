export const filterProperties = (properties, filters) => {
    return properties.filter(prop => {
        if (filters.type && filters.type !== 'any' && prop.type.toLowerCase() !== filters.type.toLowerCase()) return false;

        // Price Range
        if (prop.price < filters.minPrice) return false;
        if (prop.price > filters.maxPrice) return false;

        // Bedrooms Range
        if (prop.bedrooms < filters.minBedrooms) return false;
        if (filters.maxBedrooms > 0 && filters.maxBedrooms < 10 && prop.bedrooms > filters.maxBedrooms) return false;

        const searchTerm = filters.postcodeArea.trim().toLowerCase();
        if (searchTerm) {
            const propType = (prop.type || '').toLowerCase();
            const propLocation = (prop.location || '').toLowerCase();
            const propPostcodeArea = (prop.postcodeArea || '').toLowerCase();
            const propPostcode = (prop.postcode || '').toLowerCase();

            if (!propType.includes(searchTerm) &&
                !propLocation.includes(searchTerm) &&
                !propPostcodeArea.includes(searchTerm) &&
                !propPostcode.startsWith(searchTerm)) {
                return false;
            }
        }

        // Date Added (After)
        if (filters.dateAdded) {
            const propDate = new Date(prop.dateAdded);
            // filters.dateAdded is a Date object from React DatePicker
            const filterDate = new Date(filters.dateAdded);
            // Reset time for comparison
            propDate.setHours(0, 0, 0, 0);
            filterDate.setHours(0, 0, 0, 0);
            if (propDate < filterDate) return false;
        }

        return true;
    });
};
