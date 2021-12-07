import { useParams } from "react-router-dom";

const Character = ({ allCharacters }) => {
  const { characters } = allCharacters;
  const { id } = useParams();
  // console.log(characters);
  const currentCharacter = characters.filter(
    (character) => character.id === Number(id)
  );
  console.log(currentCharacter);
  return (
    <div>
      <h1> One character</h1>
      {
        <div>
          <h2>{currentCharacter[0].name}</h2>
          <h3> Status: {currentCharacter[0].status}</h3>
          <img src={currentCharacter[0].image} alt={currentCharacter[0].name} />
        </div>
      }
    </div>
  );
};

export default Character;
