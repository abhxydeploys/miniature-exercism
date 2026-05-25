public class SalaryCalculator {

    // Task 1: Salary multiplier based on days skipped
    public double salaryMultiplier(int daysSkipped) {
        return (daysSkipped < 5) ? 1.00 : 0.85;
    }

    // Task 2a: Bonus multiplier based on products sold
    public int bonusMultiplier(int productsSold) {
        return (productsSold >= 20) ? 13 : 10;
    }

    // Task 2b: Bonus calculation using multiplier
    public double bonusForProductsSold(int productsSold) {
        return productsSold * bonusMultiplier(productsSold);
    }

    // Task 3: Final salary calculation with cap at 2000
    public double finalSalary(int daysSkipped, int productsSold) {
        double baseSalary = 1000.00 * salaryMultiplier(daysSkipped);
        double totalSalary = baseSalary + bonusForProductsSold(productsSold);
        return (totalSalary > 2000.00) ? 2000.00 : totalSalary;
    }
}
