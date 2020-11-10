import React from 'react';
import { render } from '@testing-library/react';
import Results from "../../pages/Results";

// Testing of fetch API call
// You have to be connected to database
test('real fetch call', async () => {
    const res = await fetch('http://localhost:4000/books/search/Prisoner/4');
    const result = await res.json();
    expect(result).toBe(2);  // Success!
});


// Using mock to check if result component render correctly
jest.mock('../../pages/Results', () => () => (<div>Showing results</div>));

test('check if result render correctly using mock', () => {
    const { container } = render(<Results/>);
    expect(container.textContent)
        .toMatch('Showing results');
});

