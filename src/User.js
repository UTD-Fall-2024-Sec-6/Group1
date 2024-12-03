import Budget from './Budget'; // Import the Budget class

class User {
    constructor(name, email, password, userID, income) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userID = userID;
        this.budget = new Budget(income); // Create a new Budget instance
    }

    // Getter and setter for name
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    // Getter and setter for email
    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    // Getter and setter for password
    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    // Getter and setter for userID
    getUserID() {
        return this.userID;
    }

    setUserID(userID) {
        this.userID = userID;
    }

    // Getter and setter for budget
    getBudget() {
        return this.budget;
    }

    setBudget(budget) {
        this.budget = budget;
    }
}

export default User;
