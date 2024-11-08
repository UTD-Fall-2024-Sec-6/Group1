import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Budget {
    private BudgetItem rootItem;
    private Goal shortTermGoal;
    private Goal longTermGoal;
    private float Savings;
    private LocalDate dateCreated;

    public Budget() {
        rootItem = new BudgetItem("", 0, false, "");
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

    public void addCategory(String category) {

    }

    public boolean editCategory(String category) {
        return false;
    }

    public boolean deleteCategory(String category) {
        return false;
    }

    public boolean createGoal(float amount, String timespan) {
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

    public String insight(String timespan) {
        boolean validIncrement = false;
        LocalDate currentDate = LocalDate.now();
        long diffInDays = ChronoUnit.DAYS.between(dateCreated, currentDate);

        if (timespan.equals("daily") || timespan.equals("weekly") || timespan.equals("monthly")) {
            validIncrement = true;
        }

        if (validIncrement && diffInDays >= 7) {
            return "Trend Successfully displayed";
        }
        if (diffInDays < 7) {
            return "Error: Insufficient Data";
        }

        return "";
    }



}
