let alphDict =
  "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";

const str2arr = async (str) => {
  return alphDict.split("");
};

const stringIterator = async (len) => {
  let generatedString = [];
  for (let i = 0; i <= len; i++) {
    let seedStr = `${i}`;
    let seed = seedStr.split("");
    let strArr = [];
    seed.map((id) => {
      strArr.push(alphDict[id]);
    });
    let str = strArr.join("");
    console.log(str);
  }
};

const main = async () => {
  let alphArr = await str2arr(alphDict);
  let strings = await stringIterator(100);
  console.log(alphArr);
  console.log(strings);
};

// main();
stringIterator(9999999);
