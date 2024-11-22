import java.util.HashMap;

public class DB {
    private HashMap<String, User> users;

    public DB() {
        this.users = new HashMap<>();
    }

    public User getUserByID(String uid) {
        return users.get(uid);
    }

    public String getUIDByUsername(String username) {
        for (User user : users.values()) {
            if (user.getName().equals(username)) {
                return user.getUserID();
            }
        }
        return null;
    }

    public boolean addUser(User user) {
        if (users.containsKey(user.getUserID())) {
            return false; // User already exists
        }
        users.put(user.getUserID(), user);
        return true;
    }

    public boolean deleteUser(String uid) {
        return users.remove(uid) != null;
    }
}
