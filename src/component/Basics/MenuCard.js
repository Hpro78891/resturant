import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section>
        {menuData.map((curElem) => {
          const { id, name, image, category, description } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="cardId">{id}</div>
                <div className="title">
                  <h2>{name} </h2>
                </div>
                <div className="image">
                  <img
                    src={image}
                    alt="food"
                    height={"200px"}
                    width={"200px"}
                  />
                </div>
                <div className="desc">
                  <p>{description} </p>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </section>
    </>
  );
};

export default MenuCard;
