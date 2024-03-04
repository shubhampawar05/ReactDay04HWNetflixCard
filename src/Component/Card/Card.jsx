import "./Card.css";
import "remixicon/fonts/remixicon.css";

export default function Card({ Data }) {
  console.log(Data);
  return (
    <>
      <div className="Card">
        <div
          className="innerDiv"
          style={{
            backgroundImage: `linear-gradient(to right, black 50%, transparent),
         url(${Data.Images})`,
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="Details-section">
            <div className="movieName">
              <div className="imgdiv">
                <img src={Data.Poster} alt="" width={"100%"} height={"100%"} />
              </div>
              <div className="movieTitels">
                <h4>{Data.Title}</h4>
                <p className="year">
                  <span className="text">{Data.Year}</span>,
                  <span className="text"> {Data.Directior} </span>
                </p>
                <div>
                  <span className="time">{Data.Runtime} </span>
                  <span> {Data.Genre}</span>
                </div>
              </div>
            </div>
            <div className="movieDisc">{Data.Plot}</div>
            <div className="icons">
              <i className="ri-share-fill"></i>
              <i className="ri-heart-fill"></i>
              <i className="ri-chat-4-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
