document.getElementById("startInterval").addEventListener("click", function () {
  var counterElement = document.getElementById("counter");
  var count = 0;

  function updateCounter() {
    count++;
    counterElement.innerHTML = count;
  }

  var interval = setInterval(updateCounter, 1000);

  setTimeout(function () {
    clearInterval(interval);
  }, 10000);
});
