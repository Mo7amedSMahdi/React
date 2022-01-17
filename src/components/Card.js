import star from "../images/star.png";

export default function Card(props) {
    return(
        <div className="card-container">
            <img src={props.cardImage} className="card--image"/>
            <div className="card--stats">
                <img className="card--star" src={star}/>
                <span >{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / {props.priceUnit}</p>
        </div>
    )
}