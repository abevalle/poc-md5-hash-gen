// let alphDict = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
let alphDict = "abcdefghijklmnopqrstuvwxyz";
let maxChar = (alphDict.length)-1

const str2arr = async (str) => {
  return alphDict.split("");
};

const stringGen = async (len) => {
  let stringArr = await setUpArray(len)
  id = 0
  stringArr.map((char) => {
      for(i = 0; i <= maxChar; i++) {
       stringArr[id] = alphDict[i]
       console.log(stringArr)
      }
    id++
  })
}

const setUpArray = async (len) => {
  if (len < 1) {console.error('Length is too short')}
  let arr = []
  for (let i = 1; i <= len; i++) {
    arr.push(0)
  }
  return arr
}

const main = async () => {
  
};


stringGen(3)