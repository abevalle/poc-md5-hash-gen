const { md5 } = require("hash-wasm");

// const alphDict = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
const alphDict = "abcdefghijklmnopqrstuvwxyz";

const generateStrings = (len) => {
  const alphArr = alphDict.split("");
  const generate = async (prefix, n) => {
    if (n === 0) {
      console.log([prefix, await md5(prefix)]);
      return;
    }
    alphArr.forEach(char => {
      generate(prefix + char, n - 1);
    });
  };
  generate('', len);
};

generateStrings(3)