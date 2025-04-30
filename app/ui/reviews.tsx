import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

const Reviews = () => {
  const featurableWidgetId = 'bd987386-05b2-406d-b230-baa0c45ef76b';

  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId={featurableWidgetId}
      carouselSpeed={8000}
      maxCharacters={100}
      maxItems={1}
      carouselClassName="carousel"
      carouselBtnClassName="carousel_btn"
      carouselBtnLeftClassName="carousel_btn_left"
      carouselBtnRightClassName="carousel_btn_right"
    />
  );
};

export default Reviews;
