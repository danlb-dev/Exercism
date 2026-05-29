class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) throws IllegalOperationException {
        Integer result = null;

        switch (operation){
            case "+":
                result = operand1 + operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                try {
                    result = operand1/operand2;
                }catch (ArithmeticException e){
                    throw new IllegalOperationException("Division by zero is not allowed", e);
                }
                break;
            case null:
                throw new IllegalArgumentException("Operation cannot be null");
            case "":
                throw new IllegalArgumentException("Operation cannot be empty");
            default:
                String message = String.format("Operation '%s' does not exist", operation);
                throw new IllegalOperationException(message);
        }

        String returnMessage = String.format("%d %s %d = %d", operand1, operation,operand2, result);

        return returnMessage;
    }
}