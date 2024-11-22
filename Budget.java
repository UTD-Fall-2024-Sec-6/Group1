import java.time.LocalDate;
import java.time.Month;
import java.time.temporal.ChronoUnit;

public class Budget {
    private BudgetItem rootItem;
    private double income;
    private Goal shortTermGoal;
    private Goal longTermGoal;
    private double savings;
    private LocalDate dateCreated;
    private final double MAX_GOAL = 1000000;
    private int frequency;

    public Budget(double income) {
        this.income = income;
        rootItem = new BudgetItem("Income", income, false, "Income");
        dateCreated = LocalDate.now();
    }

    public void addBudgetItem(String name, double amount, boolean flexible, String category) {
        BudgetItem item = new BudgetItem(name, amount, flexible, category);
        BudgetItem current = rootItem;
        while (current.getNextItem() != null) {
            current = current.getNextItem();
        }
        current.setNextItem(item);
    }

    public boolean deleteBudgetItem(BudgetItem item) {
        boolean found = false;
        BudgetItem parent = rootItem;
        BudgetItem current = parent.getNextItem();
        while (current != null && current != item) {
            parent = current;
            current = current.getNextItem();
        }
        if (current != null) {
            parent.setNextItem(current.getNextItem());
            found = true;
        }
        return found;
    }

    public String createGoal(double amount, String timespan) {
        if (amount <= 0) {
            return "Error: Invalid financial goal amount";
        } else if (amount > MAX_GOAL) {
            return "Error: Financial goal exceeds limit";
        }

        switch (timespan) {
            case "short-term":
                shortTermGoal = new Goal(amount, 0);
                return "Financial goal set successfully";
            case "long-term":
                longTermGoal = new Goal(amount, 0);
                return "Financial goal set successfully";
            default:
                return "Error: Invalid goal timeframe";
        }
    }

    public String createInsight(int trendDuration, String timeSlice) {
        LocalDate currentDate = LocalDate.of(2024, Month.DECEMBER, 3);
        long diffInDays = ChronoUnit.DAYS.between(dateCreated, currentDate);

        if (trendDuration >= 0 && (timeSlice.equals("weekly") || timeSlice.equals("monthly"))) {
            // Valid case
        } else {
            return "Error: Insufficient Data";
        }

        if (timeSlice.equals("weekly") && trendDuration % 7 != 0) {
            return "Error: Data processing issue";
        }

        if (diffInDays < trendDuration) {
            return "Error: Data processing issue";
        }

        return "Trends displayed successfully";
    }
    public boolean validateRecurring(float incomeAmount, int frequency) {
        if (incomeAmount > 0 && (frequency > 0)) {
            return true;
        }
        return false;
    }

    public String processBudgetSummary() {
        return String.format("Income: %.2f, Savings: %.2f", income, savings);
    }

    // Set recurring income
    public boolean setIncome(double incomeAmount) {
        try {
            this.income = incomeAmount;
            return true;
        } catch (Exception e) {
            System.out.println("Error setting recurring income: " + e.getMessage());
            return false;
        }
    }

    public double getIncome() {
        return income;
    }
}
