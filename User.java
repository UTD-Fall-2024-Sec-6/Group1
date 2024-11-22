public class User {
    private String name;
    private String email;
    private String password;
    private String userID;
    private Budget budget;

    public User(String name, String email, String password, String userID) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userID = userID;
        this.budget = new Budget();
    }

    // Getter and setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and setter for userID
    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    // Getter for budget
    public Budget getBudget() {
        return budget;
    }
}
