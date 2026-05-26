class BirdWatcher {
    //ideally the constant value would be into an external config file.
    private static final int DEFAULT_BUSY_DAY_MINIMAL_COUNT = 5;
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public static int[] getLastWeek() {
        int[] lastWeekCount = new int[]{0, 2, 5, 3, 7, 8, 4 };
        return lastWeekCount;
    }

    public int getToday() {
        return this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        int lastIndex = this.birdsPerDay.length - 1;
        this.birdsPerDay[lastIndex] += 1;
    }

    public boolean hasDayWithoutBirds() {
        boolean hasNoBirdsDay = false;
        for(int i = 0; i < this.birdsPerDay.length; i++){
            if(this.birdsPerDay[i] == 0){
                hasNoBirdsDay = true;
                break;
            }
        }
        return hasNoBirdsDay;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int counter = 0;
        int length = numberOfDays <= 7 ? numberOfDays: 7;
        
        for(int i = 0; i < length; i++){
            counter += this.birdsPerDay[i];
        }
        
        return counter;
    }

    public int getBusyDays() {
        int counter = 0;
        for(int i = 0; i < this.birdsPerDay.length; i++){
            if(this.birdsPerDay[i] >= DEFAULT_BUSY_DAY_MINIMAL_COUNT){
                counter += 1;
            }
        }
        return counter;
    }
}