/* eslint-disable indent */
import TheRestaurantSource from '../../data/source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/likebtn-init';
import Review from '../../utils/review';
import { sendDatatoWebSocket } from '../../utils/websocket.init';
import { TemplateRestaurantDetail } from './template';

const DetailResto = {
  async render() {
    return `
    <div>
      <div class="detail-container">
        <div class="restaurant" id="restaurant"></div>
        
        <div id="likebtn"></div>
        
        <form class="form-post-review">
          <h3>Post Review</h3>
        
          <div class="inputname">
            <label for="nameinput" class="form-label">Nama Reviewer</label>
            <input type="text" class="form-input" id="nameinput" minlength="3" placeholder="Name" required>
          </div>

          <div class="inputreview">
            <label for="reviewinput" class="form-label">Review</label>
            <input type="text" class="form-input" id="reviewinput" minlength="3" placeholder="Review" required>
          </div>              

          <button id="submitreview" type="submit" class="btn">Kirim Review</button>
        </form>
          
      </div>         
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resttemplate = document.querySelector('.restaurant');
    // try {
      const restaurantt = await TheRestaurantSource.detailRestaurant(url.id);

      resttemplate.innerHTML = TemplateRestaurantDetail(restaurantt.restaurant);
      const liketemplate = document.querySelector('#likebtn');

      const btnpostreview = document.querySelector('#submitreview');
      const namepostreview = document.querySelector('#nameinput');
      const postreview = document.querySelector('#reviewinput');

      LikeButtonInitiator.init({
        likeButton: liketemplate,
        restaurant: {
          id: restaurantt.restaurant.id,
          name: restaurantt.restaurant.name,
          city: restaurantt.restaurant.city,
          pictureId: restaurantt.restaurant.pictureId,
          rating: restaurantt.restaurant.rating,
          description: restaurantt.restaurant.description,
        },
      });

      btnpostreview.addEventListener('click', async (event) => {
        event.preventDefault();

        await Review(url, namepostreview.value, postreview.value);

        sendDatatoWebSocket({
          name: namepostreview.value,
          review: postreview.value,
        });
      });
    // } catch (error) {
    //   console.log(error.message);
    //   resttemplate.innerHTML += `You have an Error, Message : ${error.message}`;
    // }
  },
};

export default DetailResto;
