import { cleanup, render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from './Events'
afterEach(cleanup);

describe('Events Component', () => {

    /**
    * getByText()
    */
    test('Screen should have a title', () => {
        render(<Events />);
        expect(screen.getByText(/Event Testing/i)).toBeInTheDocument();
    })

    /**
     * getByText(): initial Value
     */
    test('Should have initial value 0', () => {
        render(<Events />)
        expect(screen.getByText(0)).toBeInTheDocument();
    })

    /**
    * userEvent(): increment value
    */
    test('Value should increment upon pressing increment button', async () => {
        const user = userEvent.setup();
        render(<Events />)

        const incrementBtn = screen.getByRole("button", {
            name: /Increment/i
        })
   
        
        await user.click(incrementBtn);
        expect(screen.getByText(1)).toBeInTheDocument();
    })


})