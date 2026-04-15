public class Lasagna {

    public int expectedMinutesInOven(){
        return 40;
    } 

    public int remainingMinutesInOven(int timeCooked){
        return expectedMinutesInOven() - timeCooked;
    }
    
    public int preparationTimeInMinutes(int layers){
        return layers * 2;
    }

    public int totalTimeInMinutes(int layers, int remainingMins){
        return preparationTimeInMinutes(layers) + remainingMins;
    }
}
