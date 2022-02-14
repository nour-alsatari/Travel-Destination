import toursStyle from "./Tours.css";
import Tour from './tour/Tour.js';

function Tours(props) {
  return (
    <div>
      {props.lol.map((ele) => {
        return (
          <Tour tour={ele} key={ele.id} />
        );
      })}
    </div>
  );
}

export default Tours;
