const CardPhrase = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-25 rounded-0">
        <img
          src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/14104549/NegroPensante10-1024x576.jpg"
          className="card-img-top"
          alt="meme pensante"
        />
        <div className="card-body">
          <h5 className="card-title">Autor</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPhrase;
