import { useParams } from "react-router-dom";
import { useState } from "react";

function TourDetails(props) {
  let { id } = useParams();
  let myElement = props.jsonData.filter((ele, index) => ele.id === id);

  const [text, setText] = useState(true);

  function handleText() {
    setText(!text);
  }

  return (
    <>
      <h1> {myElement[0].name} </h1>
      {text ? (
        <p> {myElement[0].info.substring(0, 250)} </p>
      ) : (
        <p> {myElement[0].info} </p>
      )}
      <button onClick={handleText}> Show more</button>
      <img src={myElement[0].image} alt="this is the destination" />
      <h4> {myElement[0].price}</h4>
    </>
  );
}

export default TourDetails;
