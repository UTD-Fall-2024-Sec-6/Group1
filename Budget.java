import java.time.LocalDate;

public class Budget {
    private BudgetItem rootItem;
    private Goal shortTermGoal;
    private Goal longTermGoal;
    private float Savings;
    private LocalDate dayCreated;

    public Budget() {
        rootItem = new BudgetItem("", 0, false, "");
        dayCreated = LocalDate.now();
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
            shortTermGoal = new Goal(amount, 0);
            return true;
        }
        else if (timespan.equals("long-term")) {
            longTermGoal = new Goal(amount, 0);
            return true;
        }

        return false;
    }

    public String insight() {

        return "";
    }



}
