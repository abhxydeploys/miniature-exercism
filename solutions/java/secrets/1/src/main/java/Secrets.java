public class Secrets {
    // 1. Shift bits back to the right (logical shift)
    public static int shiftBack(int value, int amount) {
        return value >>> amount;
    }

    // 2. Set bits to 1 wherever mask has 1s
    public static int setBits(int value, int mask) {
        return value | mask;
    }

    // 3. Flip bits wherever mask has 1s
    public static int flipBits(int value, int mask) {
        return value ^ mask;
    }

    // 4. Clear bits (set to 0) wherever mask has 1s
    public static int clearBits(int value, int mask) {
        return value & ~mask;
    }
}
