public class SquareRootNewton {
    public static double sqrt(double x) {
        if (x == 0 || x == 1) {
            return x;
        }
        
        double guess = x / 2;
        
        while (true) {
            double newGuess = 0.5 * (guess + x / guess);
            
            if (Math.abs(guess - newGuess) < 0.00001) {
                return newGuess;
            }
            
            guess = newGuess;
        }
    }
    
    public static void main(String[] args) {
        double number = 128.0;
        double squareRoot = sqrt(number);
        System.out.println("Square root of " + number + " adalah " + squareRoot);
    }
}