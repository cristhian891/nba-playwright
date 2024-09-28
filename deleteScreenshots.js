const fs = require('fs');
const path = require('path');

// Path to the directory where screenshots are stored
const screenshotsDir = path.join(__dirname, 'screenshots');

// Function to delete all files in the directory
function deleteScreenshots() {
    fs.readdir(screenshotsDir, (err, files) => {
        if (err) {
            console.error(`Error reading screenshot directory: ${err}`);
            return;
        }

        // Iterate over each file and delete it
        files.forEach(file => {
            const filePath = path.join(screenshotsDir, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error(`Error deleting file: ${filePath}, ${err}`);
                } else {
                    console.log(`Deleted file: ${filePath}`);
                }
            });
        });
    });
}

deleteScreenshots();
