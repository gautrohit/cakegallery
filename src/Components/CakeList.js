import CakeItem from "./CakeItem";

let cake1 = {
  Name: "Fruit cake",
  Price: 550,
  Image: "image1.jpg",
};
let cake2 = {
  Name: "BlackBerry Cake",
  Price: 650,
  Image: "image2.jpg",
};
let cake3 = {
  Name: "Red Forest",
  Price: 680,
  Image: "image3.jpg",
};
let cake4 = {
  Name: "Mango Cake",
  Price: 380,
  Image: "image3.jpg",
};
function CakeList() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3">
          <CakeItem data={cake1} />
        </div>
        <div className="col-sm-3">
          <CakeItem data={cake2} />
        </div>
        <div className="col-sm-3">
          <CakeItem data={cake3} />
        </div>
        <div className="col-sm-3">
          <CakeItem data={cake4} />
        </div>
      </div>
    </div>
  );
}
export default CakeList;
