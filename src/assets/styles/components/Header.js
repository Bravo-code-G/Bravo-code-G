
const AbrirModal = () => {
    const modalIniciar = document.getElementById('modalIniciar');
    modalIniciar.style.cssText = 'visibility: visible; opacity: 100%;transition-duration2s;'
}
const CerrarModal = () => {
    const modalIniciar = document.getElementById('modalIniciar');
    modalIniciar.style.cssText = 'visibility: hidden; opacity: 0%;transition-duration2s;'
}


export {AbrirModal};
export {CerrarModal};