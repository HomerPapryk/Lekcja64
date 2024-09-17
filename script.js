document.querySelector(".start-button").addEventListener("click", function () {
  const counterElement = document.querySelector(".counter");
  let count = 0;

  function updateCounter() {
    count++;
    counterElement.innerHTML = count;
  }

  const interval = setInterval(updateCounter, 1000);
});
