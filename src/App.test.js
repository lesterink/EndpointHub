// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EndpointHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EndpointHub/i);
    expect(titleElement).toBeInTheDocument();
});
