const greet = (username) => {
  console.log(`Hello ${username}!`);
};

const processUserInput = (callback) => {
  console.log("Inside processUserInput");
  callback("Gautam");
};

processUserInput(greet);

processUserInput(() => {
  console.log("Inside Callback function");
});
