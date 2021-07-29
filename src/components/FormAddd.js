
const openModalToFire = () => {
  const modalNewElement = document.getElementById('modalNewElement');
  modalNewElement.style.cssText = 'visibility: visible; opacity: 100%;transition-duration:1s;transform: translateY(0px);width: 90vw;height: auto;';
};
const closedModalToFire = () => {
  const modalNewElement = document.getElementById('modalNewElement');
  modalNewElement.style.cssText = 'visibility: hidden; opacity: 0%;transition-duration:1s;transform: translateY(-1000px);width: 0vw;height: 0vh;';
};

export { openModalToFire, closedModalToFire };
