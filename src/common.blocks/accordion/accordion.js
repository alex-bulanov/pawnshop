const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTriggers = document.querySelectorAll('.accordion__trigger');

function onAccordionTrigger() {
  const currentAccordionTrigger = this;
  const currentAccordionItem = currentAccordionTrigger.parentNode;
  const currentAccordionContent = currentAccordionTrigger.nextElementSibling;

  if (currentAccordionItem.dataset.open === 'false') {
    currentAccordionItem.dataset.open = 'true';
    currentAccordionItem.classList.add('accordion__item--show');
    currentAccordionContent.style.maxHeight = `${currentAccordionContent.scrollHeight}px`;
  } else {
    currentAccordionItem.dataset.open = 'false';
    currentAccordionItem.classList.remove('accordion__item--show');
    currentAccordionContent.style.maxHeight = null;
  }
}

function accordionsInit() {
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', onAccordionTrigger);
  });

  accordionItems.forEach((item) => {
    if (item.dataset.open === 'true') {
      item.classList.add('accordion__item--show');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  accordionsInit();
});
