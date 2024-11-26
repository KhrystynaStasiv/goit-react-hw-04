const ImageCard = ({ img }) => {
  return (
    <div className={css.imageBox}>
      <img src={img.url.small} alt={img.alt_description} />
      <div className={css.details}>
        <div>{img.user.instagram_username}</div>
        <div>{img.likes}</div>
        <div>{img.links.download}</div>
      </div>
    </div>
  );
};
export default ImageCard;
