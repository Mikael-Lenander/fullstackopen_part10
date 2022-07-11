import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const mockOnSubmit = jest.fn()
      const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={mockOnSubmit} />) 

      fireEvent.changeText(getByPlaceholderText('username'), 'kalle');
      fireEvent.changeText(getByPlaceholderText('password'), 'password');
      fireEvent.press(getByText('Sign In'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(mockOnSubmit).toHaveBeenCalledTimes(1)
        expect(mockOnSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        }, { timeOut: 2000 });

      });
    });
  });
});