import java.math.BigInteger;

class Grains {
    private final static int SQUARES_ON_BOARD = 64;

    private final BigInteger totalOfGrainsOnBoard;

    public Grains(){
        this.totalOfGrainsOnBoard = this.getTotalOfGrainsOnBoard();
    }

    public BigInteger grainsOnSquare(final int square) {
        if(square <= 0 || square > 64){
            throw new IllegalArgumentException("square must be between 1 and 64");
        }

        return BigInteger.ONE.shiftLeft(square - 1);
    }

    public BigInteger grainsOnBoard() {
        return this.totalOfGrainsOnBoard;
    }
    
    private BigInteger getTotalOfGrainsOnBoard(){
        return BigInteger.ONE.shiftLeft(SQUARES_ON_BOARD).subtract(BigInteger.ONE);
    }
}
