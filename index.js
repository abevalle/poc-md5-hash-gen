import { md5 } from "hash-wasm";
import { insertRecord } from "./db.js";

// const alphDict = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
const alphDict = "abcdefghijklmnopqrstuvwxyz";

const getPermutations = (len) => {
  const dictLen = alphDict.length
  return (dictLen)^len
}

const permutationRemaining = (count, len) => {
  let permutations = getPermutations(len)
  return permutations
}

const generateStrings = async (len) => {
  const startTime = Date.now();
  const alphArr = alphDict.split("");
  let counter = 0;

  const generate = async (prefix, n) => {
      if (n === 0) {
          try {
              let hash = await md5(prefix);
              await insertRecord(prefix, hash);
              counter++;

              // Log progress every 100 operations, for example
              if (counter % 100 === 0) {
                  let remaing = await permutationRemaining(counter, len)
                  console.log(`Processed ${counter} strings. Strings Left ${remaing}`);
              }
          } catch (error) {
              console.error('Error in generate:', error);
          }
          return;
      }
      for (const char of alphArr) {
          await generate(prefix + char, n - 1);
      }
  };

  await generate('', len);
  const endTime = Date.now();
  console.log(`Execution time: ${endTime - startTime} ms`);
  console.log(`Total strings processed: ${counter}`);
};



const main = (arg) => {
  generateStrings(arg)
}

main(process.argv[2])