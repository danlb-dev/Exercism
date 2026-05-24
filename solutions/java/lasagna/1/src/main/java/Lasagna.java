public class Lasagna {
    private final int defaultTimeInOven = 40;
    private final int defaultPrepTimeByLayer = 2;

    public Lasagna(){}

    public int expectedMinutesInOven(){
        return this.defaultTimeInOven;
    }

    public int remainingMinutesInOven(int actualMinutes){
        int remainingMinutes = this.expectedMinutesInOven() - actualMinutes;
        return (remainingMinutes > 0) ? remainingMinutes : 0;
    }

    public int preparationTimeInMinutes(int numberOfLayers){
        return numberOfLayers*this.defaultPrepTimeByLayer;
    }

    public int totalTimeInMinutes(int numberOfLayers, int actualMinutes){
        int prepTime = this.preparationTimeInMinutes(numberOfLayers);
        int totalPrepTime = prepTime + actualMinutes;
        return totalPrepTime;
    }
}