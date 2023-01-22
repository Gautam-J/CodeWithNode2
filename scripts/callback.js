const greet = (username) => {
  console.log(`Hello ${username}!`);
};

const processUserInput = (callback) => {
  const username = "Gautam";
  callback(username);
};

processUserInput(greet);
