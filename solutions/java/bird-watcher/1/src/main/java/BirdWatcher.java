
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        int[] lastWeekCount = {0, 2, 5, 3, 7, 8, 4};
        return lastWeekCount;
    }

    public int getToday() {
        return birdsPerDay[birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        birdsPerDay[birdsPerDay.length - 1]++;
    }
    public boolean hasDayWithoutBirds() {
        for(int count: birdsPerDay){
            if(count == 0) return true;
        }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int count = 0;
        if(numberOfDays>birdsPerDay.length){
            for(int birdCount: birdsPerDay){
                count += birdCount;
            }
        } else {
            for(int i = 0; i<numberOfDays; i++){
                count += birdsPerDay[i];
            }
        }
        return count;
    }

    public int getBusyDays() {
        int busyDayCount = 0;
        for(int birdCount: birdsPerDay){
            if(birdCount >= 5) busyDayCount++;
        }
        return busyDayCount;
    }
}
