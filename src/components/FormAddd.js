
const openModalToFire = () => {
  const modalNewElement = document.getElementById('modalNewElement');
  modalNewElement.style.cssText = 'visibility: visible; opacity: 100%;transition-duration:1s;transform: translateY(0px);width: 90vw;height: auto;';

  const addDataNewElementTec = document.getElementById('addDataNewElementTec');
  addDataNewElementTec.style.cssText = 'visibility: hidden; display:none';

  setTimeout(() => {
    document.getElementById('elementName').focus({ preventScroll: false });
  }, 600);

};

const closedModalToFire = () => {
  const modalNewElement = document.getElementById('modalNewElement');
  modalNewElement.style.cssText = 'visibility: hidden; opacity: 0%;transition-duration:1s;transform: translateY(-1000px);width: 0vw;height: 0vh;';
};

const addDataNewElementTec = () => {
  const addDataTecNewElement = document.getElementById('addDataTecNewElement');
  const menos = '/';
  const mas = '+';
  addDataTecNewElement.addEventListener('mouseover', () => {
    addDataTecNewElement.style.cssText = 'transform: rotate(25deg);';
  });
  let estadoCssNewElement = 'none';
  const addDataNewElementTec = document.getElementById('addDataNewElementTec');
  estadoCssNewElement = addDataNewElementTec.style.display;

  if (estadoCssNewElement === 'grid') {
    addDataNewElementTec.style.cssText = 'visibility: hidden; display: none;';
    addDataTecNewElement.style.cssText = ' transition-duration:.3s;color: rgb(19, 208, 255);border: 1px solid rgb(19, 208, 255);box-shadow: 0px 0px 2px rgb(19, 208, 255);';
    addDataTecNewElement.innerHTML = mas;
    addDataTecNewElement.addEventListener('mouseover', () => {
      addDataTecNewElement.style.cssText = 'transform: rotate(30deg) scale(1.2);color: rgb(19, 208, 255);border: 1px solid rgb(19, 208, 255);box-shadow: 0px 0px 6px rgb(19, 208, 255); transition-duration:.3s;';
    });
    addDataTecNewElement.addEventListener('mouseout', () => { addDataTecNewElement.style.cssText = ' transition-duration:.3s;color: rgb(19, 208, 255);border: 1px solid rgb(19, 208, 255);box-shadow: 0px 0px 2px rgb(19, 208, 255); transform: rotate(0deg) scale(1);'; });
  } else if (estadoCssNewElement === 'none') {
    addDataNewElementTec.style.cssText = 'visibility: visible; display: grid;';
    addDataTecNewElement.style.cssText = ' transition-duration:2s;color: rgb(255, 66, 19);border: 1px solid rgb(255, 66, 19);box-shadow: 0px 0px 2px rgb(255, 66, 19); transform: rotate(75deg);';
    addDataTecNewElement.innerHTML = menos;
    addDataTecNewElement.addEventListener('mouseover', () => {
      addDataTecNewElement.style.cssText = 'transform: rotate(25deg) scale(1.2);color: rgb(255, 66, 19);border: 1px solid rgb(255, 66, 19);box-shadow: 0px 0px 6px rgb(255, 66, 19); transition-duration:.4s;';

    });
    addDataTecNewElement.addEventListener('mouseout', () => { addDataTecNewElement.style.cssText = ' transition-duration:.4s;color: rgb(255, 66, 19);border: 1px solid rgb(255, 66, 19);box-shadow: 0px 0px 2px rgb(255, 66, 19); transform: rotate(75deg) scale(1);'; });
  }
};

export { openModalToFire, closedModalToFire, addDataNewElementTec };
