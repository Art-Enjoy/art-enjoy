import ExpDetail from "../pages/ExpDetail";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
        product: {
            id: 1,
            title: 'La Alhambra',
            description: 'This is a test item',
            location: 'Granada',
            price: 10,
            image: './src/assets/img-slider4.jpg'
        },
    })),
}));
describe("product", () => {
    beforeEach(() => {
        render(<ExpDetail />);
    })

    test('should render product title', () => {
        const titleElement = screen.getByText(/test product/i);
        expect(titleElement).toBeInTheDocument();
    });
    test('should render product description', () => {
        const descriptionElement = screen.getByText(/this is a test item/i);
        expect(descriptionElement).toBeInTheDocument();
    });
});
