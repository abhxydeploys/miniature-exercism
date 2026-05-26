import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

class AppointmentScheduler {

    // 1. Parse textual representation into LocalDateTime
    public LocalDateTime schedule(String appointmentDateDescription) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("M/d/yyyy HH:mm:ss");
        return LocalDateTime.parse(appointmentDateDescription, formatter);
    }

    // 2. Check if appointment has passed
    public boolean hasPassed(LocalDateTime appointmentDate) {
        return appointmentDate.isBefore(LocalDateTime.now());
    }

    // 3. Check if appointment is in the afternoon (>= 12:00 and < 18:00)
    public boolean isAfternoonAppointment(LocalDateTime appointmentDate) {
        int hour = appointmentDate.getHour();
        return hour >= 12 && hour < 18;
    }

    // 4. Return description of appointment
    public String getDescription(LocalDateTime appointmentDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy, 'at' h:mm a");
        return "You have an appointment on " + appointmentDate.format(formatter) + ".";
    }

    // 5. Return this year's anniversary date (Sept 15)
    public LocalDate getAnniversaryDate() {
        int currentYear = LocalDate.now().getYear();
        return LocalDate.of(currentYear, 9, 15);
    }
}
