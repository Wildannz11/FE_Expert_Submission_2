import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async allRestaurant() {
    const response = await fetch(API_ENDPOINT.ALL_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postReviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    return response.json();
  }
}

export default TheRestaurantSource;
