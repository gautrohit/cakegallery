import React from "react";

export default function CakeDetails() {
  return (
    <div class="container mt-3 bg-color">
      <form>
        <h2 className="txt-cnt">Add Cake Details</h2>
        <br></br>
        <h5 className="d-flex">Product Image:</h5>
        <br></br>
        <br></br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Choose file</span>
          </div>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
            />
            <label class="custom-file-label" for="inputGroupFile01">
              No file Chosen
            </label>
          </div>
          <div class="input-group-append ml-5">
            <button class="btn btn-primary" type="button">
              Upload
            </button>
          </div>
        </div>
        <br />
        <br />
        <h5>Cake Name:</h5>
        <input type="text" class="form-control" placeholder="Enter full name" />
        <br />
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <h5 class="col-md-2">Price:</h5>
              <span>$</span>
              <input
                type="text"
                class="form-control col-md-9"
                placeholder=""
                id="first"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group row">
              <h5 class="col-md-2">Weight:</h5>
              <input
                type="text"
                class="form-control col-md-9"
                placeholder=""
                id="last"
              />
              <span>KG</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h5>Discription:</h5>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your addres"
        />
        <br />
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <h5 class="col-md-2">Type:</h5>
              <select class="custom-select custom-select-sm col-md-10">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group row">
              <h5 class="col-md-2">Eggless:</h5>
              <div
                class="custom-control custom-checkbox my-1 mr-sm-2 col-md-9"
                style={{ textAlign: "center" }}
              >
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlInline"
                />
                <label
                  class="custom-control-label"
                  for="customControlInline"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h5>Flavour:</h5>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your cake flavour"
        />
        <br />
        <br />
        <h5>Ingredients:</h5>
        <br />
        <br />
        <button class="btn btn-primary" type="button">
          Add Product
        </button>
      </form>
    </div>
  );
}
