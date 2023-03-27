import React from "react";

function PizzaTypes() {
  return (
    <div className="row type" id="pizzatypes">
      <h2 className="text-center">Pizza type</h2>
      <div className="col-md-3 col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/anastasiia-chepinska-FZTwpjRUr38-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Vegetables Pizza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/pexels-engin-akyurt-1435903.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Vegans Pizza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/pexels-muffin-creatives-1653877.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Peperoni Pizza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="images/faizan-saeed-mwYTNZO0WhA-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Special-treat Pizza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PizzaTypes;
