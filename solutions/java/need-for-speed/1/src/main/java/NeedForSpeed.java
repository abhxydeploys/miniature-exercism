class NeedForSpeed {
    private final int speed;
    private final int batteryDrain;
    private int distanceDriven;
    private int battery;

    // Constructor
    NeedForSpeed(int speed, int batteryDrain) {
        this.speed = speed;
        this.batteryDrain = batteryDrain;
        this.distanceDriven = 0;
        this.battery = 100;
    }

    // Drive the car
    public void drive() {
        if (!batteryDrained()) {
            distanceDriven += speed;
            battery -= batteryDrain;
            if (battery < 0) battery = 0;
        }
    }

    // Distance driven
    public int distanceDriven() {
        return distanceDriven;
    }

    // Battery drained check
    public boolean batteryDrained() {
        return battery < batteryDrain || battery == 0;
    }

    // Static Nitro car
    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }

    // ✅ Getter methods
    public int getSpeed() {
        return speed;
    }

    public int getBatteryDrain() {
        return batteryDrain;
    }
}

class RaceTrack {
    private final int distance;

    // Constructor
    RaceTrack(int distance) {
        this.distance = distance;
    }

    // Can car finish race?
    public boolean canFinishRace(NeedForSpeed car) {
        int maxDrives = 100 / car.getBatteryDrain();
        int maxDistance = maxDrives * car.getSpeed();
        return maxDistance >= distance;
    }
}
