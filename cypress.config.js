// // const { defineConfig } = require("cypress");
// // const sqlite3 = require('sqlite3').verbose();

// // module.exports = defineConfig({
// //   chromeWebSecurity: false,
  
// //   experimentalNetworkStubbing: true,
// //   defaultCommandTimeout: 10000, 
// //   pageLoadTimeout: 120000,  
// //   execTimeout: 120000, // 2 minutes
  

// //   e2e: {
// //     testIsolation: false,
// //     baseUrl: 'https://www.dezlearn.com', // Base URL
// //     env: {
// //       parentUrl: '/multiple-browser-windows/', // Parent URL as environment variable
      
// //     },
// //     setupNodeEvents(on, config) {
// //       on('task', {
// //         queryDatabase(query) {
// //           return new Promise((resolve, reject) => {
// //             const dbPath = "C:/Users/Admin/AppData/Roaming/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db";
            
// //             let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
// //               if (err) {
// //                 console.error(err.message);
// //                 reject(err);
// //               }
// //             });

// //             db.all(query, [], (err, rows) => {
// //               if (err) {
// //                 reject(err);
// //               }
// //               resolve(rows);
// //             });

// //             db.close((err) => {
// //               if (err) {
// //                 console.error(err.message);
// //               }
// //             });
// //           });
// //         }
// //       });
// //     }
// //   }
// // });


// const { defineConfig } = require("cypress");
// const sqlite3 = require('sqlite3').verbose();

// module.exports = defineConfig({
//   chromeWebSecurity: false,
//   experimentalNetworkStubbing: true,
//   defaultCommandTimeout: 10000,
//   pageLoadTimeout: 120000,
//   execTimeout: 120000,

//   video: true, // ✅ Enable video recording
//   videoUploadOnPasses: true, // ✅ Save video even for passing tests
//   screenshotsFolder: "cypress/screenshots", // ✅ Set folder for screenshots
//   videosFolder: "cypress/videos", // ✅ Set folder for videos

//   reporter: 'mochawesome', // ✅ Optional: Add if using Mochawesome
//   reporterOptions: {
//     reportDir: 'cypress/reports', // ✅ Custom report folder
//     overwrite: false,
//     html: true,
//     json: true
//   },

//   e2e: {
//     testIsolation: false,
//     baseUrl: 'https://www.dezlearn.com',
//     env: {
//       parentUrl: '/multiple-browser-windows/',
//     },
//     setupNodeEvents(on, config) {
//       on('task', {
//         queryDatabase(query) {
//           return new Promise((resolve, reject) => {
//             const dbPath = "C:/Users/Admin/AppData/Roaming/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db";

//             let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
//               if (err) {
//                 console.error(err.message);
//                 reject(err);
//               }
//             });

//             db.all(query, [], (err, rows) => {
//               if (err) {
//                 reject(err);
//               }
//               resolve(rows);
//             });

//             db.close((err) => {
//               if (err) {
//                 console.error(err.message);
//               }
//             });
//           });
//         }
//       });
//     }
//   }
// });


const { defineConfig } = require("cypress");
const sqlite3 = require('sqlite3').verbose();

module.exports = defineConfig({
  chromeWebSecurity: false, // Disable Chrome web security for iframes and cross-origin requests
  experimentalNetworkStubbing: true, // Enable experimental network stubbing
  defaultCommandTimeout: 10000, // Set the default timeout for commands
  pageLoadTimeout: 120000, // Set the page load timeout to 2 minutes
  execTimeout: 120000, // Set the command execution timeout to 2 minutes

  // ✅ Enable video & screenshot paths
  video: true,
  videoUploadOnPasses: true, // Upload video even if tests pass
  screenshotsFolder: "cypress/screenshots", // Folder where screenshots will be saved
  videosFolder: "cypress/videos", // Folder where videos will be saved

  // ✅ Mochawesome Reporter Integration
  reporter: 'mochawesome', // Use mochawesome reporter for HTML and JSON reports
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory to save the reports
    overwrite: false, // Don't overwrite previous reports
    html: true, // Enable HTML report
    json: true, // Enable JSON report
    charts: true, // Enable charts in the report
    reportTitle: "Cypress Test Report" // Set a custom title for the report
  },

  e2e: {
    testIsolation: false, // Disable test isolation for cross-test state sharing
    baseUrl: 'https://www.dezlearn.com', // Set the base URL for tests
    env: {
      parentUrl: '/multiple-browser-windows/', // Set custom environment variables (e.g., URLs)
    },
    setupNodeEvents(on, config) {
      // Set up custom tasks (e.g., database queries)
      on('task', {
        queryDatabase(query) {
          return new Promise((resolve, reject) => {
            const dbPath = "C:/Users/Admin/AppData/Roaming/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db"; // Path to SQLite database

            // Open the database
            let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
              if (err) {
                console.error(err.message);
                reject(err);
              }
            });

            // Execute the query
            db.all(query, [], (err, rows) => {
              if (err) {
                reject(err); // Reject if there's an error in query execution
              } else {
                resolve(rows); // Resolve with the query results
              }
            });

            // Close the database connection
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
