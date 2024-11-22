import java.util.HashMap;

public class DBMgr {
    private DB db;

    public DBMgr(DB db) {
        this.db = db;
    }

    public User getUser(String uid) {
        return db.getUserByID(uid);
    }

    public User getUserByUsername(String username) {
        return db.getUserByID(db.getUIDByUsername(username));
    }

    public String getUIDByUsername(String username) {
        return db.getUIDByUsername(username);
    }

    public boolean saveUser(User user) {
        return db.addUser(user);
    }

    public boolean saveBudget(String uid, Budget budget) {
        User user = db.getUserByID(uid);
        if (user != null) {
            user.setBudget(budget);
            return true;
        }
        return false;
    }

    public boolean savePassword(String uid, String newPassword) {
        User user = db.getUserByID(uid);
        if (user != null) {
            user.setPassword(newPassword);
            return true;
        }
        return false;
    }

    public String getBalance(String username) {
        User user = db.getUserByID(db.getUIDByUsername(username));
        if (user != null) {
            return user.getBudget().getIncome() + "";
        }
        return "Error retrieving budget";
    }

    public Budget getBudget(String uid) {
        User user = db.getUserByID(uid);
        if (user != null) {
            return user.getBudget();
        }
        return null;
    }
}
