

const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv.slice(4).join(' ');

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}':`, err.message);
      return;
    }
    console.log(`Contents of '${filePath}':\n${data}`);
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' deleted`);
  });
}

function createFile(filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' created`);
  });
}

function appendToFile(filePath, content) {
  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file '${filePath}':`, err.message);
      return;
    }
    console.log(`Content appended to the file '${filePath}'`);
  });
}

function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file from '${oldPath}' to '${newPath}':`, err.message);
      return;
    }
    console.log(`File '${oldPath}' renamed to '${newPath}'`);
  });
}

function listDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${directoryPath}':`, err.message);
      return;
    }
    console.log(`Contents of directory '${directoryPath}':`);
    files.forEach(file => {
      console.log(file);
    });
  });
}

switch (operation) {
  case 'read':
    if (!file) {
      console.log("write node index.js read <file>");
    } else {
      readFile(file);
    }
    break;
  case 'delete':
    if (!file) {
      console.log("write node index.js delete <file>");
    } else {
      deleteFile(file);
    }
    break;
  case 'create':
    if (!file) {
      console.log("write node index.js create <file>");
    } else {
      createFile(file);
    }
    break;
  case 'append':
    if (!file || !content) {
      console.log("write node index.js append <file> <content>");
    } else {
      appendToFile(file, content);
    }
    break;
  case 'rename':
    if (!file || !content) {
      console.log("write node index.js rename <oldFile> <newFile>");
    } else {
      renameFile(file, content);
    }
    break;
  case 'list':
    if (!file) {
      console.log("write node index.js list <directory>");
    } else {
      listDirectory(file);
    }
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
