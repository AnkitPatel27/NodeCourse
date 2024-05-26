// const fs = require('fs');
// const path = require('path');

// // 1: Create a folder named 'abc'
// const folderPath = path.join(__dirname, 'abc');
// fs.mkdirSync(folderPath);

// // 2: Create a file 'bio.txt' and write data to it
// const filePath = path.join(folderPath, 'bio.txt');
// const initialData = 'This is my bio.\n';
// fs.writeFileSync(filePath, initialData);

// // 3: Append more data to the file
// const additionalData = 'I am a software engineer.\n';
// fs.appendFileSync(filePath, additionalData);

// // 4: Read the data without getting the buffer data at first
// const fileData = fs.readFileSync(filePath, 'utf8');
// console.log(fileData);

// // 5: Rename the file to 'mybio.txt'
// const newFilePath = path.join(folderPath, 'mybio.txt');
// fs.renameSync(filePath, newFilePath);

// // // 6: Delete the file and the folder
// fs.unlinkSync(newFilePath);
// fs.rmdirSync(folderPath);



// // Asynchronous version of the above code
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'abc');
const filePath = path.join(folderPath, 'bio.txt');
const newFilePath = path.join(folderPath, 'mybio.txt');

// 1: Create a folder named 'abc'
fs.mkdir(folderPath, (err) => {
  if (err) throw err;

  // 2: Create a file 'bio.txt' and write data to it
  const initialData = 'This is my bio.\n';
  fs.writeFile(filePath, initialData, (err) => {
    if (err) throw err;

    // 3: Append more data to the file
    const additionalData = 'I am a software engineer.\n';
    fs.appendFile(filePath, additionalData, (err) => {
      if (err) throw err;

      // 4: Read the data without getting the buffer data 
      fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) throw err;
        console.log(fileData);

        // 5: Rename the file to 'mybio.txt'
        fs.rename(filePath, newFilePath, (err) => {
          if (err) throw err;

          // 6: Delete the file and the folder
          fs.unlink(newFilePath, (err) => {
            if (err) throw err;
            fs.rmdir(folderPath, (err) => {
              if (err) throw err;
              console.log('File and folder deleted successfully!');
            });
          });
        });
      });
    });
  });
});