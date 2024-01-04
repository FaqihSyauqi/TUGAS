public class SquareRootExample {
    public static void main(String[] args) {
        double number = 128.0;
        double guess = number / 2; 
        while (Math.abs(guess * guess - number) > 0.0001) {
            guess = (guess + (number / guess)) / 2;
        }

        System.out.println("The square root of " + number + " adalah " + guess);
    }
}