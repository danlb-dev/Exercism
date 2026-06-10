class SquareRoot {
    public int squareRoot(int radicand) {
        if(radicand < 2){
            return radicand;
        }

        //binary search
        int low = 1;
        int high = radicand;

        while(low <= high){
            int mid = low + (high - low)/2;
            long square = (long) mid*mid;

            if(square == radicand){
                return mid;
            }
            else if(square < radicand){
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }

        return high;
    }
}