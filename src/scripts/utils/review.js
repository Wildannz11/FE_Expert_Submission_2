import TheRestaurantSource from '../data/source';

const Review = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewrestaurant = document.querySelector('.restaurant__reviews');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newreview = `
    <div class="reviews">
        <h4 class="reviewer_name">${name} (${date})</h4>
        <p class="reviewer_review">${review}</p>
    </div>
  `;

  const reviewResponse = await TheRestaurantSource.postReviewRestaurant(dataInput);
  console.log(reviewResponse);

  reviewrestaurant.innerHTML += newreview;
};

export default Review;
