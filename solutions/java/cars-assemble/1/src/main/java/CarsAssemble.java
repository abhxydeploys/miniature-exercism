public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        int carsProducedEachHr = 221;
        double result = 0;
        if(speed <= 4) {
            result = carsProducedEachHr * speed;
        } else if(speed <= 8) {
            result = (carsProducedEachHr * speed) * 0.9;
        } else if(speed == 9) {
            result = (carsProducedEachHr * speed) * 0.8;
        } else {
            result = (carsProducedEachHr * speed) * 0.77;
        }
        return result;
    }

    public int workingItemsPerMinute(int speed) {
        double perHour = productionRatePerHour(speed);
        double perMin = perHour/60;
        return (int) perMin;
    }
}
