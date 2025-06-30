import car from "../assets/car.jpg";
import { carImage } from "../assets/images";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageComponent = () => {
  return (
    <>
      <p>Hello Image Component</p>

      <p>Image Via Local Storage</p>
      <img src={car} alt="car-image" />

      <p>Image Via CDN Storage</p>
      <img src={carImage} alt="car-image" />

      <LazyLoadImage
        alt={carImage}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "0.5s" },
        }}
        src={carImage}
      />
    </>
  );
};

export default ImageComponent;
