# Estate Agent React App

A fully client-side Estate Agent web application built with React and Vite.

## Features
- **Search**: Filter by type, price, bedrooms, date, and postcode.
- **Favorites**: Drag and drop properties to your favorites list. Persisted locally.
- **Property Details**: View image galleries, floor plans, and location maps.
- **Responsive**: Optimised for desktop and mobile.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Testing
To run the Jest test suite:
```bash
npm test
```
(Note: Ensure your environment supports JSDOM and standard Jest configuration).

## Architecture
- **Tech Stack**: React 19, Vite, React Router 7.
- **Styling**: Vanilla CSS with comprehensive CSS Variables design system.
- **Data**: Loaded from `public/products.json`.
- **Security**: CSP implemented in `index.html`.
