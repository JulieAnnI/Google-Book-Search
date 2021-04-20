import React from "react";
import Buttons from "../Buttons"


function SearchBar(props) {
  return (
    <section className="border my-color pb-2 mb-3">
      <div className="col-md-10 col-sm-12 mx-auto ">
        <div className="p-2 rounded">
          <h5 className=" mb-2 text-white">Book</h5>
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              onChange={props.handleInputChange}
              value={props.value}
              type="search"
              placeholder="Search books..."
              aria-label="Search"
            />
            <Buttons
              onClick={props.handleFormSubmit}
              type="submit"
            >
              Search 
            </Buttons>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;