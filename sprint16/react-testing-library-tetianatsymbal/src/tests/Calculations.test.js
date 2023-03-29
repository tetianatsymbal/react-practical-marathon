import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculations from "../components/Calculations";

describe('Calculations component', () => {
  it('displays initial result of 0', async () => {
    render(<Calculations />);
    const result = await waitFor(() => screen.getByText('0'));
    expect(result).toBeInTheDocument();
  });

  it('correctly evaluates addition', async () => {
    render(<Calculations />);
    const firstInput = screen.getByLabelText('first number');
    const secondInput = screen.getByLabelText('second number');
    const evaluateButton = screen.getByText('Evaluate');

    fireEvent.input(firstInput, { target: { value: '2' } });
    fireEvent.input(secondInput, { target: { value: '3' } });
    fireEvent.click(evaluateButton);

    const result = await waitFor(() => screen.getByText('5'));
    expect(result).toBeInTheDocument();
  });

  it('correctly evaluates subtraction', async () => {
    render(<Calculations />);
    const firstInput = screen.getByLabelText('first number');
    const secondInput = screen.getByLabelText('second number');
    const subtractionButton = screen.getByText('-');
    const evaluateButton = screen.getByText('Evaluate');

    fireEvent.input(firstInput, { target: { value: '5' } });
    fireEvent.input(secondInput, { target: { value: '2' } });
    fireEvent.click(subtractionButton);
    fireEvent.click(evaluateButton);

    const result = await waitFor(() => screen.getByText('3'));
    expect(result).toBeInTheDocument();
  });
});
