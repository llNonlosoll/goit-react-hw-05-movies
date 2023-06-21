import noImgAvailable from '../../images/no_image_available.jpg';

const CastComp = ({ movieCast }) => {
  if (!movieCast) {
    return;
  }

  return (
    <ul>
      {movieCast.map(({ id, profile_path, original_name, name, character }) => (
        <li key={id}>
          <img
            width="200px"
            src={
              profile_path ? (
                `https://image.tmdb.org/t/p/w500${profile_path}`
              ) : (
                <img src={noImgAvailable} alt="not available" />
              )
            }
            alt={original_name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastComp;
