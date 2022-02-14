import { Link, useParams } from "react-router-dom";

function Tour(props) {
  let { id } = useParams();

  return (
    <>
      <Link to={`/city/${props.tour.id}`}>
        <div className="cards">
          <h4> {props.tour.name}</h4>
          <img src={props.tour.image} alt="" />
          <hr />
        </div>
      </Link>
    </>
  );
}

export default Tour;
