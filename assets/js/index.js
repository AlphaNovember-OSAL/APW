import { routes } from './routes.js';
import { Router } from './router.js';

/* Router */
const router = new Router(routes);

document.querySelectorAll('.link').forEach(item =>
    item.addEventListener('click', event =>
        router.loadRoute(event.target.id)
    )
);