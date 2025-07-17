// index.js
const sqlite3 = require("sqlite3").verbose();

// Create or open a database file named "test.db"
const db = new sqlite3.Database("test.db");

// Run DB operations
db.serialize(() => {
  // Create table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
  )`);

  // Insert a row
  const stmt = db.prepare("INSERT INTO users (name, age) VALUES (?, ?)");
  stmt.run("Alice", 30);
  stmt.run("Bob", 25);
  stmt.finalize();

  // Query and print all users
  db.all("SELECT id, name, age FROM users", (err, rows) => {
    if (err) {
      console.error("Error querying users:", err.message);
      return;
    }

    console.log("Users:");
    rows.forEach((row) => {
      console.log(`${row.id}: ${row.name} (${row.age} years old)`);
    });
  });
});

// Close DB when done
db.close((err) => {
  if (err) {
    console.error("Error closing DB:", err.message);
  } else {
    console.log("Database closed.");
  }
});
