const express = require('express'); 
const fs = require('fs');
const path = require('path'); // Add the 'path' module
const app = express();
const port = 3001;

app.use(express.json());

// Correctly resolve the file path relative to the current file
const filePath = path.join(__dirname, "budgetData.json");

// Helper to read and write JSON file
const readData = () => {
  try {
    if (!fs.existsSync(filePath)) {
      // If file doesn't exist, initialize it
      fs.writeFileSync(filePath, JSON.stringify({ entries: [] }, null, 2));
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent.trim() ? JSON.parse(fileContent) : { entries: [] }; // Handle empty file gracefully
  } catch (err) {
    console.error("Error reading the data file:", err);
    return { entries: [] }; // Return an empty structure on error
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing to the data file:", err);
  }
};

// Get all entries
app.get('/entries', (req, res) => {
  const data = readData();
  res.json(data.entries || []);
});

// Add a new entry
app.post('/entries', (req, res) => {
  const data = readData();
  const newEntry = req.body;
  data.entries.push(newEntry);
  writeData(data);
  res.status(201).json(newEntry);
});

// Edit an entry
app.put('/entries/:id', (req, res) => {
  const { id } = req.params;
  const updatedEntry = req.body;
  const data = readData();

  const index = data.entries.findIndex((entry) => entry.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Entry not found' });
  }

  data.entries[index] = updatedEntry;
  writeData(data);
  res.json(updatedEntry);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Delete an entry
app.delete('/entries/:id', (req, res) => {
  const { id } = req.params;
  const data = readData();

  const updatedEntries = data.entries.filter((entry) => entry.id !== parseInt(id));
  if (data.entries.length === updatedEntries.length) {
    return res.status(404).json({ error: 'Entry not found' });
  }

  data.entries = updatedEntries;
  writeData(data);
  res.status(204).send(); // No content
});

