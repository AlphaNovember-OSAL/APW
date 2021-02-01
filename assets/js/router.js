export class Router {

    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    loadRoute(...urlSegments) {
        const matchedRoute = this._matchUrlToRoute(urlSegments);

        const url = `/${urlSegments.join('/')}`;

        history.pushState({}, '', url);

        const routerOutletElement = document.querySelector('[data-router-outlet]');
        routerOutletElement.innerHTML = this._getHTML(matchedRoute.template);
    }

    _getHTML(path) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", './pages/' + path + '.html', false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    _matchUrlToRoute(urlSegments) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegments = route.path.split('/').slice(1);

            if (routePathSegments.length !== urlSegments.length) {
                return false;
            }

            return routePathSegments
                .every((routePathSegment, i) => routePathSegment === urlSegments[i]);
        });
        return matchedRoute;
    }

    _loadInitialRoute() {
        const pathnameSplit = window.location.pathname.split('/');
        const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';

        this.loadRoute(...pathSegments);
    }
}