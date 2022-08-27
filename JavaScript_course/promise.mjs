const myPromise = new Promise((value, reject) => {});

myPromise.then((value) => {}).catch((error) => {});

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

const getDataAsync = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

// try {
//   const data = await getData("https://jsonplaceholder.typicode.com/todos");
// } catch (error) {
//   console.log(error.message);
// }

// getData("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const myAsFn = async () => {
  return "success";
};

// myAsFn().then((data) => console.log(data));

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 5000));

const asyncForTimer = async () => {
  console.log("timer start");
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log("timer ended", endTime - startTime);
};

// asyncForTimer();
