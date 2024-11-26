import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images?.map((image) => (
        <li key={image.id}>
          <ImageCard img={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
