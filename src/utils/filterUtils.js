export const filterProperties = (properties, filters) => {
    return properties.filter(prop => {
        // Type (React Select creates objects {value, label})
        // filters.type is now passed as string 'any', 'house' etc. from SearchForm
        if (filters.type && filters.type !== 'any' && prop.type.toLowerCase() !== filters.type.toLowerCase()) return false;

        // Price Range
        // properties.json has 'price'
        if (prop.price < filters.minPrice) return false;
        if (prop.price > filters.maxPrice) return false;

        // Bedrooms Range
        // properties.json has 'bedrooms'
        if (prop.bedrooms < filters.minBedrooms) return false;
        // If maxBedrooms is 10+, treat as "10+" (unlimited) or strictly enforce? 
        // Usually "10" is max in slider, so maybe effectively no max. 
        // Let's enforce it strictly for now as per "Max Bedrooms" logic.
        if (filters.maxBedrooms > 0 && filters.maxBedrooms < 10 && prop.bedrooms > filters.maxBedrooms) return false;

        // Search keywords (Fuzzy)
        // filters.postcodeArea now acts as a general search term
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
