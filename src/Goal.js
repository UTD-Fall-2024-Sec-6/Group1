class Goal {
    constructor(goal, savings) {
        this.goal = goal;
        this.savings = savings;
    }

    setGoal(goal) {
        this.goal = goal;
    }

    getGoal() {
        return this.goal;
    }

    setSavings(savings) {
        this.savings = savings;
    }

    getSavings() {
        return this.savings;
    }

    validateGoal(goal) {
        return false; 
    }
}

export default Goal;
