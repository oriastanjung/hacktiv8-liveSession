//Buatlah sebuah fungsi dengan nama makeAllCaps yang menerima
//sebuah parameter yang adalah array dan me-return promise baru
//yang membuat semua komponen array menjadi huruf kapital semua.
//Gunakan fungsi map untuk membuat fungsi makeAllCaps.\ Buat satu buah
// fungsi lagi dengan nama sortWords yang menerima sebuah parameter
// dalam bentuk array yang akan me-return promise baru yang
//mensortir array tersebut.

const arrayOfWords = ["cucumber", "tomatoes", "avocado"];
const complicatedArray = ["cucumber", 44, true];



const checkAllIsString = (input) => {
  const isString = input.every(
    (item) => typeof item === "string" || item instanceof String
  );
  return isString;
};




const sortWords = (array) => {
    return array.sort();
};
  


const makeAllCaps = (inputArray) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(inputArray) && checkAllIsString(inputArray)) {
      const data = inputArray.map((item) => {
        return item.toUpperCase();
      });
      resolve(data);
    } else {
      reject("input is not an array of strings");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));

  //dengan async await

  const makeAllToCaps = async (input) => {
    try {
        const data = await makeAllCaps(input);
        const results = sortWords(data);
        console.log(results)
    } catch (error) {
        console.log(error);
    }
  }
  
  setTimeout(() => {
    console.log("\n\ndengan async await\n\n");
    makeAllToCaps(arrayOfWords)
    makeAllToCaps(complicatedArray)
  }, 2000)