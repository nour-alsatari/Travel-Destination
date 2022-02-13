import toursStyle from "./Tours.css";

function Tours(props) {
  return (
    <div>
      {props.lol.map((ele) => {
        return (
          <div className="cards">
            <h4> {ele.name}</h4>
            <img src={ele.image} alt="" />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
