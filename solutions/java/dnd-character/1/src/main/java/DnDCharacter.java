import java.util.List;
import java.util.ArrayList;

class DnDCharacter {
    private final static int HITPOINTS_BASE_CALCULATION_VALUE = 10;
    private final static int MODIFIER_BASE_CALCULATION_VALUE = 10;

    private final int strength;
    private final int dexterity;
    private final int constitution;
    private final int intelligence;
    private final int wisdom;
    private final int charisma;

    public DnDCharacter(){
        this.strength = this.generateScore();
        this.dexterity = this.generateScore();
        this.constitution = this.generateScore();
        this.intelligence = this.generateScore();
        this.wisdom = this.generateScore();
        this.charisma = this.generateScore();
    }

    public List<Integer> rollDice() {
        List<Integer> results = new ArrayList<>();
        for(int i = 0; i < 4; i++){
            results.add((int) (Math.random()*6) + 1);
        }
        return results;
    }
    
    public int ability(List<Integer> scores) {
        //I do a copy as 'scores' may be an immutable list
        //which will throw an exception when we try to sort it
        var copyList = new ArrayList<>(scores);
        
        //Sorts 'copyList' in descending order
        copyList.sort((x, y) -> Integer.compare(y, x));
        
        int val = copyList.get(0) + copyList.get(1) + copyList.get(2);
        
        return val;
    }
    
    private int generateScore(){
        return this.ability(this.rollDice());
    }

    public int modifier(int input) {
        double num = Double.parseDouble(Integer.toString(input - MODIFIER_BASE_CALCULATION_VALUE));
        return (int)Math.floor(num/2);
    }
    
    public int getHitpoints() {
        int hitPoints = this.HITPOINTS_BASE_CALCULATION_VALUE + this.modifier(this.getConstitution());
        return hitPoints;
    }

    //Getters
    public int getStrength() {
        return this.strength;
    }
    
    public int getDexterity() {
        return this.dexterity;
    }
    
    public int getConstitution() {
        return this.constitution;
    }
    
    public int getIntelligence() {
        return this.intelligence;
    }
    
    public int getWisdom() {
        return this.wisdom;
    }
    
    public int getCharisma() {
        return this.charisma;
    }
}