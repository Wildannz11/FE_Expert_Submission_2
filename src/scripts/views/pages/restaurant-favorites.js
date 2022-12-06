/* eslint-disable import/named */
import { TemplateCardRestaurant } from './template';
import Restoidb from '../../data/restoidb';

const FavoriteResto = {
  async render() {
    return `
    <div class="home-container">
      <h2>List Favorite Restaurant</h2>
      <div class="restaurants"></div>         
    </div>
      `;
  },

  async afterRender() {
    const favresto = document.querySelector('.restaurants');
    try {
      const datarestaurant = await Restoidb.getAllFavRestaurants();
      console.log(datarestaurant);

      datarestaurant.forEach((restaurant) => {
        favresto.innerHTML += TemplateCardRestaurant(restaurant);
      });
    } catch (error) {
      console.log(error.message);
      favresto.innerHTML += `You have an Error, Message : ${error.message}`;
    }
  },
};

export default FavoriteResto;
