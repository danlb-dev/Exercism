import java.util.*;

class ArmstrongNumbers {
    public boolean isArmstrongNumber(int numberToCheck) {
        int[] digits = Arrays.stream(Integer.toString(numberToCheck)
                .split(""))
                .mapToInt(x -> Integer.parseInt(x))
                .toArray();

        int numberOfDigits = digits.length;
        int sumOfDigits = Arrays.stream(digits)
                .map(x -> Math.powExact(x, numberOfDigits))
                .sum();

        return (numberToCheck == sumOfDigits);
    }
}