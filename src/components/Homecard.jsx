import "../styles/home-card.css";
import { useNavigate } from "react-router-dom";

export default function Homecard(props) {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/component-page/${id}`);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {props.dataValues.map((element, index) => {
            let newImagePath = element.imagePath.split("/").pop();
            return (
              <div key={index} className="card col-lg-3 mt-3 mr-6">
                <img src={`/assets/images/${newImagePath}`} alt="hello" />
                <div className="card__content">
                  <p className="card__title">{element.name}</p>
                  <p className="card__description">{element.description}</p>
                  <div className="card__buttons">
                    <button className="card__button">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={element["video-link"]}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        See Demo
                      </a>
                    </button>
                    <button
                      className="card__button"
                      onClick={() => handleSelect(element.id)}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
