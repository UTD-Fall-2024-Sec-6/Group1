public class Goal {
    private float goal;
    private float savings;

    public Goal(float goal, float savings) {
        this.goal = goal;
    }

    public void setGoal(float goal) {
        this.goal = goal;
    }

    public float getGoal() {
        return goal;
    }

    public void getSavings(float savings) {
        this.savings = savings;
    }

    public float getSavings() {
        return savings;
    }

    public boolean validateGoal(float goal) {
        return false;
    }

}
