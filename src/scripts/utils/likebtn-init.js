import Restoidb from '../data/restoidb';
import { TemplateLikeBtn, TemplateLikedBtn } from '../views/pages/template';

/* eslint-disable no-underscore-dangle */
const LikeButtonInitiator = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked(id);
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await Restoidb.getFavRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButton.innerHTML = TemplateLikeBtn();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await Restoidb.putFavRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked(id) {
    this._likeButton.innerHTML = TemplateLikedBtn();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await Restoidb.deleteFavRestaurant(id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
