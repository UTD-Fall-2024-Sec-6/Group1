public class BudgetController {
    private DBMgr dbMgr;

    public BudgetController(DBMgr dbMgr) {
        this.dbMgr = dbMgr;
    }

    public boolean editBudget(String username, Budget newBudget) {
        User user = dbMgr.getUserByUsername(username);

        if (user != null) {
            user.setBudget(newBudget);
            return dbMgr.saveBudget(dbMgr.getUIDByUsername(username), user.getBudget());
        }

        return false;
    }

    public void requestBudgetSummary(String username) {
        System.out.println("Fetching budget for user: " + username);

        // Retrieve the user's UID from the DB
        String uid = dbMgr.getUIDByUsername(username);
        if (uid == null) {
            System.out.println("Error: No user found with the provided username.");
            return;
        }

        // Retrieve budget data
        Budget budgetData = dbMgr.getBudget(uid);
        if (budgetData == null) {
            System.out.println("Error: No Budget Data Found.");
            return;
        }

        // Process budget summary
        String summaryData = budgetData.processBudgetSummary();
        if (summaryData != null) {
            System.out.println("Budget Summary Displayed:\n" + summaryData);
        } else {
            System.out.println("Error: Failed to process budget summary.");
        }
    }
}
