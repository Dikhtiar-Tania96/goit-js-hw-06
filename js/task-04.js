let counterValue = 0;

let counterValueEl = document.querySelector("#value");

function decrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener("click", decrement);

const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", increment);
