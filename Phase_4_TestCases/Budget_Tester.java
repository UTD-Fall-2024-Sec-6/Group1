package ce3354_phase4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Budget_Tester 
{
    @Test 
    void UC7_TC1() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(14, "weekly", true), "Trends displayed successfully");
    }

    @Test 
    void UC7_TC2() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(14, "weekly", false), "Transaction canceled");
    }

    @Test 
    void UC7_TC5() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(3, "weekly", true), "Error: Insufficient Data");
    }

    @Test 
    void UC7_TC3() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(3, "hourly", true), "Error: Invalid frequency");
    }

    @Test 
    void UC7_TC9() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createInsight(30, "weekly", true), "Error: Data processing issue");
    }

    @Test 
    void UC9_TC1() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(500.00, "short-term", true), "Financial goal set successfully");
    }

    @Test 
    void UC9_TC2() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(500.00, "short-term", false), "Transaction canceled");
    }

    @Test 
    void UC9_TC5() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(-100.00, "short-term", true), "Error: Invalid financial goal amount");
    }

    @Test 
    void UC9_TC9() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(100000000.00, "long-term", true), "Error: Financial goal exceeds limit");
    }

    @Test 
    void UC9_TC3() 
    {
        Budget budget = new Budget(1000.00);
        assertEquals(budget.createGoal(500.00, "weekly", true), "Error: Invalid goal timeframe");
    }
}
