const element = (
  <div className="greeting-container">
    <h1 className="greeting-heading">Congratulations</h1>
    <div className="greeting-container2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />
      <h1 className="greeting-heading2">Kiran V</h1>
      <p className="greeting-para">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
