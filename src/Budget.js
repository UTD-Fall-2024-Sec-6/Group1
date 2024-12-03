import BudgetItem from './BudgetItem';
import Goal from './Goal';

const MAX_GOAL = 1000000;

class Budget {
    constructor(income) {
        this.income = income;
        this.rootItem = new BudgetItem("Income", income, false, "Income");
        this.dateCreated = new Date();
        this.shortTermGoal = null;
        this.longTermGoal = null;
        this.savings = 0;
        this.frequency = 0;
    }

    addBudgetItem(name, amount, flexible, category) {
        const item = new BudgetItem(name, amount, flexible, category);
        let current = this.rootItem;
        while (current.nextItem !== null) {
            current = current.nextItem;
        }
        current.nextItem = item;
    }

    getBudgetItems() {
        const items = [];
        let current = this.rootItem;
        while (current) {
            items.push(current); // Add the current item to the array
            current = current.getNextItem(); // Move to the next item
        }
        return items;
    }

    deleteBudgetItem(item) {
        let found = false;
        let parent = this.rootItem;
        let current = parent.nextItem;

        while (current !== null && current !== item) {
            parent = current;
            current = current.nextItem;
        }

        if (current !== null) {
            parent.nextItem = current.nextItem;
            found = true;
        }

        return found;
    }

    createGoal(amount, timespan) {
        if (amount <= 0) {
            return "Error: Invalid financial goal amount";
        } else if (amount > MAX_GOAL) {
            return "Error: Financial goal exceeds limit";
        }

        switch (timespan) {
            case "short-term":
                this.shortTermGoal = new Goal(amount, 0);
                return "Financial goal set successfully";
            case "long-term":
                this.longTermGoal = new Goal(amount, 0);
                return "Financial goal set successfully";
            default:
                return "Error: Invalid goal timeframe";
        }
    }

    createInsight(trendDuration, timeSlice) {
        const currentDate = new Date(2024, 11, 3); // JavaScript months are 0-indexed
        const diffInDays = Math.floor((currentDate - this.dateCreated) / (1000 * 60 * 60 * 24));

        if (trendDuration >= 0 && (timeSlice === "weekly" || timeSlice === "monthly")) {
            // Valid case
        } else {
            return "Error: Insufficient Data";
        }

        if (timeSlice === "weekly" && trendDuration % 7 !== 0) {
            return "Error: Data processing issue";
        }

        if (diffInDays < trendDuration) {
            return "Error: Data processing issue";
        }

        return "Trends displayed successfully";
    }

    validateRecurring(incomeAmount, frequency) {
        return incomeAmount > 0 && frequency > 0;
    }

    processBudgetSummary() {
        return `Income: ${this.income.toFixed(2)}, Savings: ${this.savings.toFixed(2)}`;
    }

    setIncome(incomeAmount) {
        try {
            this.income = incomeAmount;
            return true;
        } catch (error) {
            console.error("Error setting recurring income:", error.message);
            return false;
        }
    }

    getIncome() {
        return this.income;
    }
}

export default Budget;