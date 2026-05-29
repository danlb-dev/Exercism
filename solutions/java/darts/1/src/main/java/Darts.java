class Darts {
    int score(double xOfDart, double yOfDart) {
        int score = 0;
        double radius = this.calculateRadius(xOfDart, yOfDart);
        
        if(radius <= 1){
            score = 10;
        }
        else if(radius <= 5){
            score = 5;
        }
        else if(radius <= 10){
            score = 1;
        }
        
        return score;
    }

    private double calculateRadius (double x, double y){
        return Math.sqrt(x*x + y*y);
    }
}