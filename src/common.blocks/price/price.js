import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

const COST_OF_GOLD = {
  375: 1580,
  500: 2100,
  583: 2590,
  585: 2590,
  750: 3150,
  900: 3780,
  958: 4020,
  999: 4200,
};

const priceAmountOnHand = document.querySelector('.price__amount-on-hand');
const priceSamplesList = document.querySelector('.price__samples-list');
const priceInputs = document.querySelectorAll('.price__input');
const priceRange = document.getElementById('price-range');

let goldAmount = null;
let rate = null;
let amountOnHand = null;

const moneyFormat = wNumb({
  thousand: ' ',
  suffix: ' ₽',
  decimals: 0,
});

function renderAmount() {
  amountOnHand = rate * goldAmount;
  priceAmountOnHand.textContent = moneyFormat.to(amountOnHand);
}

priceInputs.forEach((input) => {
  if (input.checked) {
    rate = COST_OF_GOLD[input.dataset.value];
  }
});

priceSamplesList.addEventListener('click', (event) => {
  if (event.target.nodeName === 'INPUT') {
    rate = COST_OF_GOLD[event.target.dataset.value];
    renderAmount();
  }
});

noUiSlider.create(priceRange, {
  start: 38,
  step: 0.5,
  connect: [true, false],
  range: {
    min: 1,
    max: 99.9,
  },
  tooltips: [
    wNumb({
      mark: ',',
      decimals: 1,
    }),
  ],
});

function onUpdate(unencoded) {
  const diff = Math.round(Number(unencoded).toFixed(1)) - Number(unencoded).toFixed(1);
  const tooltips = document.querySelector('.noUi-tooltip');

  if (diff === 0) {
    tooltips.textContent = `${Math.round(Number(unencoded).toFixed(1))}`;
  }

  goldAmount = Number(unencoded).toFixed(1);
  amountOnHand = rate * goldAmount;

  renderAmount();
}

priceRange.noUiSlider.on('update', onUpdate);

