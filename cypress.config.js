const { defineConfig } = require("cypress");
const sqlite3 = require('sqlite3').verbose();

module.exports = defineConfig({
  chromeWebSecurity: false,
  
  experimentalNetworkStubbing: true,
  defaultCommandTimeout: 10000, 
  pageLoadTimeout: 120000,  
  execTimeout: 120000, // 2 minutes
  

  e2e: {
    testIsolation: false,
    baseUrl: 'https://www.dezlearn.com', // Base URL
    env: {
      parentUrl: '/multiple-browser-windows/', // Parent URL as environment variable
      
    },
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase(query) {
          return new Promise((resolve, reject) => {
            const dbPath = "C:/Users/Admin/AppData/Roaming/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db";
            
            let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
              if (err) {
                console.error(err.message);
                reject(err);
              }
            });

            db.all(query, [], (err, rows) => {
              if (err) {
                reject(err);
              }
              resolve(rows);
            });

            db.close((err) => {
              if (err) {
                console.error(err.message);
              }
            });
          });
        }
      });
    }
  }
});