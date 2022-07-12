import React from "react";
import IsoTopeGrid from "react-isotope";
import FilterBox from "./FilterBox";

const cardsLayout = [
  {
    id: "a",
    row: 0,
    col: 0,
    w: 1,
    h: 1,
    filter: ["Graphic Design"],
  },
  {
    id: "b",
    row: 0,
    col: 1,
    w: 1,
    h: 1,
    filter: ["Web Design", "Web Development"],
  },
  {
    id: "c",
    row: 0,
    col: 2,
    w: 1,
    h: 1,
    filter: ["Graphic Design"],
  },
  {
    id: "d",
    row: 0,
    col: 3,
    w: 1,
    h: 1,
    filter: ["Web Design", "Web Development"],
  },
  {
    id: "e",
    row: 0,
    col: 4,
    w: 1,
    h: 1,
    filter: ["Web Development"],
  },
  {
    id: "f",
    row: 0,
    col: 5,
    w: 1,
    h: 1,
    filter: ["Web Design"],
  },
  {
    id: "g",
    row: 1,
    col: 0,
    w: 1,
    h: 1,
    filter: ["Web Development", "Graphic Design"],
  },
  {
    id: "h",
    row: 1,
    col: 1,
    w: 1,
    h: 1,
    filter: ["Web Development"],
  },
  {
    id: "i",
    row: 1,
    col: 2,
    w: 1,
    h: 1,
    filter: ["Graphic Design"],
  },
  {
    id: "j",
    row: 1,
    col: 3,
    w: 1,
    h: 1,
    filter: ["Web Design", "Graphic Design"],
  },
  {
    id: "k",
    row: 1,
    col: 4,
    w: 1,
    h: 1,
    filter: ["Web Design"],
  },
  {
    id: "l",
    row: 1,
    col: 5,
    w: 1,
    h: 1,
    filter: ["Web Development"],
  },
];

const filtersDefault = [
  { label: "all", isChecked: true, title: "All Together" },
  { label: "Web Design", isChecked: false, title: "Web Design" },
  { label: "Web Development", isChecked: false, title: "Web Development" },
  { label: "Graphic Design", isChecked: false, title: "Graphic Design" },
];

export default function PortFolios() {
  const [filters, updateFilters] = React.useState(filtersDefault);
  return (
    <>
      <FilterBox filters={filters} updateFilters={updateFilters} />

      <div className="full-wrapper ">
        <div
          className="portfolio-item"
          style={{ height: "400px", marginLeft: "-10px" }}
        >
          <IsoTopeGrid
            gridLayout={cardsLayout} // gridlayout of cards
            noOfCols={6} // number of columns show in one row
            unitWidth={307} // card width of 1 unit
            unitHeight={185} // card height of 1 unit
            filters={filters} // list of selected filters
          >
            {cardsLayout.map((card, index) => {
              return (
                <div key={card.id} className={`${card.filter[0]} port-item`}>
                  {card.id}
                  <br />
                  -------
                  <br />
                  {card.filter.map((f, index) => {
                    return (
                      <>
                        <span key={index}>{f}</span>
                        <br />
                      </>
                    );
                  })}
                </div>
              );
            })}
          </IsoTopeGrid>
        </div>
      </div>
    </>
  );
}
