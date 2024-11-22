package ce3354_phase4;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class Budget_Tester 
{
    DB testBase;
    DBMgr databaseManager;
    @BeforeEach
    void setUp()
    {
        testBase = new DB();
        testBase.addUser(new User("abcMan", "abc@yahoo.com", "abc123", "testUser", 100.00));
        databaseManager = new DBMgr(testBase);
    }
    
    // Phase 4

    @Test 
    void UC7_TC1() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(14, "weekly"), "Trends displayed successfully");
    }

    @Test 
    void UC7_TC5() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(3, "weekly"), "Error: Data processing issue");
    }

    @Test 
    void UC7_TC3() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(3, "hourly"), "Error: Insufficient Data");
    }

    @Test 
    void UC7_TC9() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(30, "weekly"), "Error: Data processing issue");
    }

    @Test 
    void UC9_TC1() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(500.00, "short-term"), "Financial goal set successfully");
    }

    @Test 
    void UC9_TC5() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(-100.00, "short-term"), "Error: Invalid financial goal amount");
    }

    @Test 
    void UC9_TC9() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(100000000.00, "long-term"), "Error: Financial goal exceeds limit");
    }

    @Test 
    void UC9_TC3() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(500.00, "weekly"), "Error: Invalid goal timeframe");
    }

    // Phase 5
    @Test
    void UC1_TC1()
    {
        assertEquals(databaseManager.verifyLogin("testUser", "abc123"), "User logged in successfully");
    }

    @Test
    void UC1_TC2()
    {
        assertEquals(databaseManager.verifyLogin("testUser", "zbc123"), "Error: Invalid password");
    }

    @Test
    void UC1_TC3()
    {
        assertEquals(databaseManager.verifyLogin("fakeUser", "abc123"), "Error: Invalid username");
    }

    @Test 
    void UC10_TC1() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.setIncomeExpense(100.00 , "income", "weekly"),
             "Entry saved successfully");
    }

    @Test 
    void UC10_TC2() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.setIncomeExpense(100.00 , "income", "hourly"),
             "Error: Invalid frequency");
    }

    @Test 
    void UC10_TC3() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.setIncomeExpense(100.00 , "salary", "weekly"),
             "Error: Invalid type");
    }

    @Test 
    void UC10_TC4() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.setIncomeExpense(-50.00 , "income", "weekly"),
             "Error: Invalid amount");
    }

    @Test 
    void UC10_TC7() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.setIncomeExpense(1e9 , "expense", "monthly"),
             "Error: Overflow issue");
    }

    @Test 
    void UC11_TC1() 
    {
        assertEquals(databaseManager.getBudgetInfo("testUser"),
             "Budget summary displayed");
    }

    @Test 
    void UC11_TC2() 
    {
        User user = databaseManager.getUser("testUser");
        user.setBudget(null);

        assertEquals(databaseManager.getBudgetInfo("testUser"),
             "Error: No data found");
    }

    @Test 
    void UC11_TC3() 
    {
        databaseManager = new DBMgr(null);
        assertEquals(databaseManager.getBudgetInfo("testUser"),
             "Error: Database unavailable");
    }
}
