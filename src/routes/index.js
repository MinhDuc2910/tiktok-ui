// Layouts

import LiveLayout from '~/pages/LiveLayout';
import config from '~/config';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: LiveLayout },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
