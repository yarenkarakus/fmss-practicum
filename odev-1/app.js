import getData from "./index.js";

(async () => {
  const result = await getData(1);
  console.log(result);
})();
