import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the copyright notice with the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Ghaith Jridi. All rights reserved.`;
    expect(screen.getByText(expectedText, { exact: false })).toBeInTheDocument();
  });
});
