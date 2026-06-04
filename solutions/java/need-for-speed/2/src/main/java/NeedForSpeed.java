class NeedForSpeed {
    private final int carSpeed;
    private final int batteryDrainPerc;

    private int batteryLevel;
    private int distanceDriven;

    public NeedForSpeed(int speed, int batteryDrain) {
        this.carSpeed = speed;
        this.batteryDrainPerc = batteryDrain;
        this.distanceDriven = 0;
        this.batteryLevel = 100;
    }

    public int getCarSpeed() {
        return this.carSpeed;
    }

    public int getBatteryDrainPerc() {
        return this.batteryDrainPerc;
    }

    public boolean batteryDrained() {
        return this.batteryLevel < this.batteryDrainPerc;
    }

    public int distanceDriven() {
        return this.distanceDriven;
    }

    public void drive() {
        if(!this.batteryDrained()){
            this.distanceDriven += this.carSpeed;
            this.batteryLevel = this.batteryLevel - this.batteryDrainPerc;
        }
    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }
}

class RaceTrack {
    private final int distance;

    public RaceTrack(int distance) {
        this.distance = distance;
    }

    public boolean canFinishRace(NeedForSpeed car) {
        double dist = Double.parseDouble(Integer.toString(this.distance));
        double carSpeed = Double.parseDouble(Integer.toString(car.getCarSpeed()));
        double carBatteryDrain = Double.parseDouble(Integer.toString(car.getBatteryDrainPerc()));

        boolean canFinish = (dist/carSpeed)*carBatteryDrain <= 100;

        return canFinish;
    }
}