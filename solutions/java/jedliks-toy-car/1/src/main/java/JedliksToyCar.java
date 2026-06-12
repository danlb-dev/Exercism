public class JedliksToyCar {
    private int distanceDriven;
    private int batteryLevel;

    public JedliksToyCar(){
        this.distanceDriven = 0;
        this.batteryLevel = 100;
    }

    public static JedliksToyCar buy() {
        JedliksToyCar car = new JedliksToyCar();
        return car;
    }

    public String distanceDisplay() {
        String message = String.format("Driven %d meters", this.distanceDriven);
        return message;
    }

    public String batteryDisplay() {
        String message = "Battery empty";
        if(this.batteryLevel > 0){
            message = "Battery at " + Integer.toString(this.batteryLevel) + "%";
        }
        return message;
    }

    public void drive() {
        if(this.batteryLevel > 0){
            this.distanceDriven += 20;
            this.batteryLevel -= 1;
        }
    }
}