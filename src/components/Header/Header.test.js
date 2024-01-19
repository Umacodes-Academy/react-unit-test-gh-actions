import { cleanup, render, screen } from "@testing-library/react";
import Header from './Header';
afterEach(cleanup);

describe('Header Component', () => {

    /**
     * getByLabelText()
     */
    test('should check the menu icon', () => {
        render(<Header />);
        expect(screen.getByLabelText("menu")).toBeInTheDocument();
    })

    /**
     * getByText()
     */
    test('should check the header component title', () => {
        render(<Header />);
        expect(screen.getByText(/React Unit Testing/i)).toBeInTheDocument();
    })

    /**
     * toHaveStyle(): using Accessibility
     */
    // test('should have a login button', () => {
    //     render(<Header />);
    //     const loginButton = screen.getByRole('button', {
    //         name: 'Login'
    //     })
    //     console.log(loginButton.style.backgroundColor)
    //     expect(loginButton).toHaveStyle({ backgroundColor: 'transparent' });
    // })

})