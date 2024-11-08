public class BudgetItem {
    private boolean flexible;
    private String name;
    private float amount;
    private BudgetItem nextItem;
    private String category;

    public BudgetItem(String name, float amount, boolean flexible, String category) {
        this.name = name;
        this. amount = amount;
        this.flexible = flexible;
        this.category = category;
        this.nextItem = null;
    }

    public void setAmount(float f) {
        this.amount = f;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setFlexible(boolean f) {
        this.flexible = f;
    }

    public float getAmount() {
        return amount;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public boolean isFlexible() {
        return flexible;
    }

    public void setNextItem(BudgetItem nextItem) {
        this.nextItem = nextItem;
    }

    public BudgetItem getNextItem() {
        return this.nextItem;
    }

}
