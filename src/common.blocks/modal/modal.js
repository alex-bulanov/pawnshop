import MicroModal from 'micromodal';
import cardSlider from '../slider/slider';

MicroModal.init({
  openTrigger: 'data-micromodal-open',
  closeTrigger: 'data-micromodal-close',
  disableFocus: true,
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  onShow: (modal) => {
    if (modal.id === 'modal-2') {
      cardSlider.update();
    }
  },
});
