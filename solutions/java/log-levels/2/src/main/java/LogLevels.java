public class LogLevels {
    
    public static String message(String logLine) {
        String output = logLine.split(": ", 2)[1].trim();
        return output;
    }

    public static String logLevel(String logLine) {
        String output = logLine.split(": ", 2)[0].replaceAll("[\\[\\]]", "").toLowerCase();
        return output;
    }

    public static String reformat(String logLine) {
        return (message(logLine) + " (" + logLevel(logLine) + ")");
    }
}
