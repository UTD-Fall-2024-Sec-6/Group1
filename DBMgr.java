import java.util.HashMap;

public class DBMgr {
    private DB db;

    public DBMgr(DB db) {
        this.db = db;
    }

    public User getUser(String uid) {
        return db.getUserByID(uid);
    }

    public boolean saveUser(User user) {
        return db.addUser(user);
    }

    public boolean saveBudget(String uid, Budget budget) {
        User user = db.getUserByID(uid);
        if (user != null) {
            user.getBudget().setBudget(budget);
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
}
