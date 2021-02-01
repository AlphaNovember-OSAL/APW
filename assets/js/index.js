import { routes } from './routes.js';
import { Router } from './router.js';
import { Modal } from './modal.js';

/* Router */
const router = new Router(routes);

document.querySelectorAll('.link').forEach(item =>
    item.addEventListener('click', event =>
        router.loadRoute(event.target.id)
    )
);

/* MODAL */
const modal = new Modal();

document.addEventListener('contextmenu', event => modal.openModal(event));
window.onclick = () => modal.closeModal();