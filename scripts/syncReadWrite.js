// copying the files is going to the take 2 seconds
const copyFiles = () => {
  console.log("Copying files...");
  let success = true;
  setTimeout(() => {
    if (success) {
      console.log("Files copied successfully!");
    } else {
      console.log("Could not copy the files.");
    }
  }, 2000);
};

const readFiles = () => {
  copyFiles();
  console.log("Trying to read the copied files...");
};

readFiles();
