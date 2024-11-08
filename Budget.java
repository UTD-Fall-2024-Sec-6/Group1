import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Budget {
    private BudgetItem rootItem;
    private float income;
    private Goal shortTermGoal;
    private Goal longTermGoal;
    private float Savings;
    private LocalDate dateCreated;
    private final float MAX_GOAL = 1000000;

    public Budget(float income) {
        rootItem = new BudgetItem("Income", income, false, "Income");
        dateCreated = LocalDate.now();
    }

    public void addBudgetItem(String name, float amount, boolean flexible, String category) {
        BudgetItem item = new BudgetItem(name, amount, flexible, category);
        BudgetItem current = rootItem;
        while(current.getNextItem() != null) {
            current = current.getNextItem();
        }

        current.setNextItem(item);
    }

    public boolean deleteBudgetItem(BudgetItem item) {
        boolean found = false;
        BudgetItem parent = rootItem;
        BudgetItem current = parent.getNextItem();
        while(current != item && current.getNextItem() != null) {
            current = current.getNextItem();
            parent = parent.getNextItem();
            if (current.getNextItem() == item) {
                found = true;
            }
        }
        if (found) {
            parent.setNextItem(current.getNextItem());
            return true;
        }

        return false;
    }

    public boolean createGoal(float amount, String timespan) {
        if (amount <= 0) {
            System.out.println("Error: Invalid financial goal amount");
            return false;
        }
        else if (amount > MAX_GOAL) {
            System.out.println("Error: Financial goal exceeds limit");
            return false;
        }

        if (timespan.equals("short-term")) {
            try {
                shortTermGoal = new Goal(amount, 0);
                return true;
            } catch (Exception e) {
                System.out.println("Error creating short goal: " + e.getMessage());
                return false;
            }
        }
        else if (timespan.equals("long-term")) {
            try {
                longTermGoal = new Goal(amount, 0);
                return true;
            } catch (Exception e) {
                System.out.println("Error creating long goal: " + e.getMessage());
                return false;
            }
        }

        return false;
    }

    public String createInsight(int trendDuration, String timeSlice) {
        boolean validIncrement = false;
        LocalDate currentDate = LocalDate.now();
        long diffInDays = ChronoUnit.DAYS.between(dateCreated, currentDate);

        if (timeSlice.equals("weekly") || timeSlice.equals("monthly")) {
            validIncrement = true;
        }

        if (validIncrement && diffInDays >= trendDuration) {
            return "Trend Successfully displayed";
        }
        if (diffInDays < 7) {
            return "Error: Insufficient Data";
        }

        return "";
    }
}
