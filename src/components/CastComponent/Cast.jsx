import noImgAvailable from '../../images/no_image_available.jpg';

import { CastList, CastItem, ItalicText, Image } from './Cast.styled';

const CastComp = ({ movieCast }) => {
  if (!movieCast) {
    return;
  }

  return (
    <CastList>
      {movieCast.map(({ id, profile_path, original_name, name, character }) => (
        <CastItem key={id}>
          {profile_path ? (
            <Image
              alt={original_name}
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            />
          ) : (
            <Image src={noImgAvailable} alt="not available" />
          )}
          <div>
            <h4>{name}</h4>
            <ItalicText>Character: {character}</ItalicText>
          </div>
        </CastItem>
      ))}
    </CastList>
  );
};

export default CastComp;
