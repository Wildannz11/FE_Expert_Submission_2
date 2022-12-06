import DetailResto from '../views/pages/restaurant-detail';
import FavoriteResto from '../views/pages/restaurant-favorites';
import HomeResto from '../views/pages/restaurant-home';

const routes = {
  '/': HomeResto, // default page
  '/home': HomeResto,
  '/favorite': FavoriteResto,
  '/detail/:id': DetailResto,
};

export default routes;
