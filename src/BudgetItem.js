class BudgetItem {
    constructor(name, amount, flexible, category) {
        this.name = name;
        this.amount = amount;
        this.flexible = flexible;
        this.category = category;
        this.nextItem = null;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setName(name) {
        this.name = name;
    }

    setCategory(category) {
        this.category = category;
    }

    setFlexible(flexible) {
        this.flexible = flexible;
    }

    getAmount() {
        return this.amount;
    }

    getName() {
        return this.name;
    }

    getCategory() {
        return this.category;
    }

    isFlexible() {
        return this.flexible;
    }

    setNextItem(nextItem) {
        this.nextItem = nextItem;
    }

    getNextItem() {
        return this.nextItem;
    }
}

export default BudgetItem;