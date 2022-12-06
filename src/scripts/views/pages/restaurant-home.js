/* eslint-disable import/named */
import TheRestaurantSource from '../../data/source';
import { TemplateCardRestaurant } from './template';

const HomeResto = {
  async render() {
    return `
          <div class="hero">
            <div class="hero__inner">
              <h1 class="hero__title">Restaurant Ku Apps</h1>
              <p class="hero__tagline">List Restaurant Terbaik</p>
            </div>
          </div>
          <div class="home-container">
            <h2>List All Restaurant</h2>
            <div class="restaurants"></div>         
          </div>
        `;
  },

  async afterRender() {
    const allresto = document.querySelector('.restaurants');
    try {
      const restaurant = await TheRestaurantSource.allRestaurant();
      console.log(restaurant);
      restaurant.forEach((restaurantt) => {
        allresto.innerHTML += TemplateCardRestaurant(restaurantt);
      });
    } catch (error) {
      console.log(error.message);
      allresto.innerHTML += `You have an Error, Message : ${error.message}`;
    }
  },
};

export default HomeResto;
