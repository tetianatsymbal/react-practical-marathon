//TASK 1

// Implement the getPromise(delay, message) function, which takes an integer number delay  (between 0 and 2000)
// and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.

function getPromise(delay, message) {
  return new Promise(function (resolve, reject) {
    if (delay < 0 || delay > 2000) {
      reject("Error!");
    }

    setTimeout(() => resolve(message), delay);
  });
}

// getPromise(5000, "test")
// .then((value) => console.log(value))
// .catch((err) => console.log(err));

//
//
//
//

//TASK2

//Write an add(x, y) function that takes two arguments x and y. The function should
//return a Promise that resolves with the sum of the two arguments if they are
//Numbers, or rejects with the message "Error!" otherwise.
function add(x, y) {
  return new Promise(function (resolve, reject) {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("Error!");
    }

    resolve(x + y);
  });
}
// add("fd", 5);
// add("2", 5)
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

//
//
//

//TASK3

// Implement the getAge() function to get user age.
// To find his age you need to call a getUser() async function that returns a user object in format {role: "somerole", id: 1}.
// To get the actual user info you need to call another async function getUserProfile(id),
// which uses id returned from the previous function and returns user info as an object
// {name: "Petro", age: 15}. The getAge() must return the age of the user.
// const {getUser, getUserProfile} = require('./Helper.js');

async function getUser() {
  return {
    role: "somerole",
    id: 1,
  };
}

async function getUserProfile(id) {
  return {
    name: "Petro",
    age: 15,
  };
}

async function getAge() {
  const age = getUser().then((user) => {
    return getUserProfile(user.id).then((userProfile) => {
      return userProfile.age;
    });
  });

  return age;
}

// getAge().then((a) => console.log(a));

//
//
//
//
//
//

//TASK3

function* take(n, iterable) {
  iterable.length = n;
  yield* iterable;
}
const arr = ["a", "b", "c", "d"];

// console.log(take(2, arr));
// for (const x of take(2, arr)) {
//   console.log(x);
// }
// Output:
// a
// b

//TASK5

function accountPatients(countBads) {
  let freeBads = countBads;
  return [
    function addPatient() {
      if (freeBads <= 0) {
        console.log(`Can not admit a patient, no beds available`);
      } else {
        freeBads -= 1;
        console.log(`A patient was admitted, ${freeBads} beds are available`);
      }
      return freeBads;
    },
    function dischargePatient() {
      if (freeBads >= countBads) {
        console.log(`There are no patients to discharge`);
      } else {
        freeBads += 1;
        console.log(`A patient was discharged, ${freeBads} beds are available`);
      }
      return freeBads;
    },
  ];
}

// const [admit, discharge] = accountPatients(3);
// admit();
// admit();
// admit();
// admit();
// discharge();
// discharge();
// discharge();
// discharge();

//
//
//
//
//
//

//TASK6
function checkAdult(age) {
  try {
    if (!age) {
      throw new Error("Please, enter your age");
    } else if (age < 0) {
      throw new Error("Please, enter positive number");
    } else if (!(typeof age == "number")) {
      throw new Error("Please, enter number");
    } else if (!Number.isInteger(age)) {
      throw new Error("Please, enter Integer number");
    } else if (age < 18) {
      throw new Error("Access denied - you are too young!");
    } else {
      console.log("Access allowed");
    }
  } catch (e) {
    console.log(`${e.name} ${e.message}`);
  } finally {
    console.log("Age verification complete");
  }
}
checkAdult(10);
