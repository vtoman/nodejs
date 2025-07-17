# sqlite3

Initialize and run

```bash
npm install
npm start
```

Expected output:

```
Users:
1: Alice (30 years old)
2: Bob (25 years old)
Database closed.
```

## Notes

- The database file `test.db` will be created in the working directory.
- This example:

  - Creates a table (if it doesn't exist)
  - Inserts two users
  - Selects and logs them

- File `test.db` can be opened using tools like [DB Browser for SQLite](https://sqlitebrowser.org/) or [DBeaver](https://dbeaver.io)

---
