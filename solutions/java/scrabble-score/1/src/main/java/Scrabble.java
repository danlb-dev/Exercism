public class Scrabble {
    private final char[] chars;
    
    Scrabble(String word) {
        this.chars = word.toUpperCase().toCharArray();
    }

    public int getScore() {
        int score = 0;
        for(char c: this.chars){
            score += this.getLetterValue(c);
        }
        return score;
    }
    
    private int getLetterValue(char c){
        int value = 0;
        
        switch (c){
            case 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T':
                value = 1;
                break;
            case 'D', 'G':
                value = 2;
                break;
            case 'B', 'C', 'M', 'P':
                value = 3;
                break;
            case 'F', 'H', 'V', 'W', 'Y':
                value = 4;
                break;
            case 'K':
                value = 5;
                break;
            case 'J', 'X':
                value = 8;
                break;
            case 'Q', 'Z':
                value = 10;
                break;
            default:
                break;
        }
        
        return value;
    }

}