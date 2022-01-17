import Card from "./Card";
import cardImage from "../images/card-img.png";

const cards = [
  {
    title: "Life lessons with Katie Zaferes",
    rating: "5.0",
    reviewCount: "6",
    location: "USA",
    price: "136",
    priceUnit: "person",
  },
  {
    title: "Learn wedding photography",
    rating: "5.0",
    reviewCount: "30",
    location: "USA",
    price: "125",
    priceUnit: "person",
  },
  {
    title: "Group Mountain Biking",
    rating: "4.8",
    reviewCount: "2",
    location: "USA",
    price: "50",
    priceUnit: "person",
  },
];
export default function Content() {
  return (
    <div className="cards">
      <Card
        cardImage={cardImage}
        title={cards[0].title}
        rating={cards[0].rating}
        reviewCount={cards[0].reviewCount}
        location={cards[0].location}
        price={cards[0].price}
        priceUnit={cards[0].priceUnit}
      />
       <Card
        cardImage={cardImage}
        title={cards[1].title}
        rating={cards[1].rating}
        reviewCount={cards[1].reviewCount}
        location={cards[1].location}
        price={cards[1].price}
        priceUnit={cards[1].priceUnit}
      />
       <Card
        cardImage={cardImage}
        title={cards[2].title}
        rating={cards[2].rating}
        reviewCount={cards[2].reviewCount}
        location={cards[2].location}
        price={cards[2].price}
        priceUnit={cards[2].priceUnit}
      />
    </div>
  );
}
