const ratings = document.querySelectorAll('.rating input');

ratings.forEach(rating => {
  rating.addEventListener('change', (event) => {
    const ratingValue = event.target.value;
    console.log(`User rated: ${ratingValue} stars`);
    // You can send this data to your server here
  });
});
const submitRating = (ratingValue) => {
  fetch('/submit-rating', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rating: ratingValue }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

ratings.forEach(rating => {
  rating.addEventListener('change', (event) => {
    const ratingValue = event.target.value;
    submitRating(ratingValue);
  });
});
