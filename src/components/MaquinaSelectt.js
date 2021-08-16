
const ventanaA = () => {
  let estadoCss = 'hidden';
  const desplegar = document.getElementById('BoxPbaA');
  estadoCss = desplegar.style.visibility;

  if (estadoCss == 'hidden') {
    desplegar.style.cssText = 'visibility: visible; display:grid';

  } else if (estadoCss = 'visible') {
    desplegar.style.cssText = 'visibility: hidden; display:none';
  }
};
const ventanaB = () => {
  let estadoCss = 'hidden';
  const desplegar = document.getElementById('BoxPbaB');
  estadoCss = desplegar.style.visibility;

  if (estadoCss == 'hidden') {
    desplegar.style.cssText = 'visibility: visible; display:grid';

  } else if (estadoCss = 'visible') {
    desplegar.style.cssText = 'visibility: hidden; display:none';
  }
};
const ventanaC = () => {
  let estadoCss = 'hidden';
  const desplegar = document.getElementById('BoxPbaC');
  estadoCss = desplegar.style.visibility;

  if (estadoCss == 'hidden') {
    desplegar.style.cssText = 'visibility: visible; display:grid';

  } else if (estadoCss = 'visible') {
    desplegar.style.cssText = 'visibility: hidden; display:none';
  }
};
const ventanaD = () => {
  let estadoCss = 'hidden';
  const desplegar = document.getElementById('BoxPbaD');
  estadoCss = desplegar.style.visibility;

  if (estadoCss == 'hidden') {
    desplegar.style.cssText = 'visibility: visible; display:grid';

  } else if (estadoCss = 'visible') {
    desplegar.style.cssText = 'visibility: hidden; display:none';
  }
};

export { ventanaA, ventanaB, ventanaC, ventanaD };
