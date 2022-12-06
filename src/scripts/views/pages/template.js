import CONFIG from '../../globals/config';

const TemplateRestaurantDetail = (restaurant) => `
  
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img loading="lazy" class="restaurant__poster" src="${CONFIG.IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3 class="restaurant__info__header">Information</h3>
      <h4 class="restaurant__info__header">Address</h4>
      <p>${restaurant.address} , Kota : ${restaurant.city}</p>
      <h4 class="restaurant__info__header">Rating</h4>
      <p>⭐️ ${restaurant.rating}</p>
      <h4 class="restaurant__info__header">Categories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
      <h4 class="restaurant__info__header">Foods</h4>
      <ol>
          ${restaurant.menus.foods.map((food) => `
          <li><p>${food.name}</p></li>`).join('')}
      </ol>
      <h4 class="restaurant__info__header">Drinks</h4>
      <ol>
          ${restaurant.menus.drinks.map((drink) => `
          <li><p>${drink.name}</p></li>`).join('')}
      </ol>
    </div>
    <div class="restaurant__description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__reviews">
      <h3>Customer Reviews</h3>
      <div class="reviews">
      ${restaurant.customerReviews.map((customer, list) => `
          <h4 class="reviewer_name">${list + 1}.  ${customer.name} (${customer.date})</h4>
          <p class="reviewer_review">${customer.review}</p>
          `).join('')}
      </div>
    </div>
   
`;

const TemplateCardRestaurant = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
        src="${CONFIG.IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const TemplateLikeBtn = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const TemplateLikedBtn = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  TemplateCardRestaurant,
  TemplateLikeBtn,
  TemplateLikedBtn,
  TemplateRestaurantDetail,
};
