const routes = require.context('@/view', true, /router.js$/)
export default routes.keys().map(key => (routes(key).default || routes(key)))