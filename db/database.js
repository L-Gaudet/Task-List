import sqlite3 from 'sqlite3'

export class database {
  #db;

  constructor() {
    this.#db = new sqlite3.Database('./TaskApp.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
      if (err && err.code == "SQLITE_CANTOPEN") {
          this.#createDatabase();
          return;
          } else if (err) {
              console.log("Getting error " + err);
              exit(1);
      }
    });
    this.insertTask();
  }

  #createDatabase() { 
    this.#db = new sqlite3.Database('TaskApp.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        this.#createTables();
    }); 
  }

  #createTables() {
    this.#db.exec(`
    create table task (
        task_id INT PRIMARY KEY NOT NULL AUTOINCREMENT,
        Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        task_description TEXT
    );`)
  }

  insertTask(description) {
    this.#db.exec(`
    INSERT INTO task (description)
      VALUES('this is a test')
    );`)
    this.#db.all(`select * from task;`, (err, rows) => {
        rows.forEach(row => {
            console.log(row.description);
        });
    });
  }

}