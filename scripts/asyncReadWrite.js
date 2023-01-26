// copying the files is going to the take 2 seconds
const copyFiles = new Promise((resolve, reject) => {
  console.log("Copying files...");
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Files copied successfully!");
    } else {
      reject("Could not copy the files");
    }
  }, 2000);
});

// console.log(copyFiles); // Pending promise

const readFiles = () => {
  copyFiles
    .then((msg) => {
      console.log(msg);
      console.log("Trying to read the copied files...");
    })
    .catch((err) => {
      console.log(err);
      console.log("No files to read");
    })
    .finally(() => {
      console.log("Program Ended");
    });
};

const readFiles2 = async () => {
  try {
    const msg = await copyFiles;
    console.log(msg);
    console.log("Trying to read the copied files...");
  } catch (err) {
    console.log(err);
    console.log("No files to read");
  } finally {
    console.log("Program Ended");
  }
};

readFiles2();
