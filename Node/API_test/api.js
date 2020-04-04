// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require Module
const https = require("https");

function getProfileData(username) {
  // Connect to the API URL
  try {
    const request = https.get(
      `https://teamtreehouse.com/${username}.json`,
      (response) => {
        console.log(response.statusCode);
        // Read the Data
        let body = "";
        response.on("data", (data) => {
          body += data.toString();
        });

        // Parse Data
        response.on("end", () => {
          const profile = JSON.parse(body);
          // StdOut Data
          printMessage(
            username,
            profile.badges.length,
            profile.points.JavaScript
          );
        });
      }
    );
    //Check Error
    request.on("error:", (err) => {
      console.error(`Problem with Request: ${err.message}`);
    });
  } catch (err) {
    console.error(err.message);
  }
}

// helper funtcion
function printMessage(username, badges, points) {
  const msg = `${username} has ${badges} badge and ${points} points in JavaScript`;
  console.log(msg);
}

// Export Module
module.exports.get = getProfileData;
