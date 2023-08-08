import React, { useState } from "react";

const ProdForm = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
    const [prodDetails, setProdDetails] = useState({
        title: "",
        price: "",
        description: "",
    });

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

    const handleOnChangeProdDetails = (e) => {
        let prodToUpdate = { ...prodDetails };
        prodToUpdate[e.target.name] = e.target.value;
        setProdDetails(prodToUpdate);
        console.log(prodDetails)
    };

    const handleOnSubmitCreateProd = (e) => {
        e.preventDefault();
        let { title, price, description } = prodDetails;
        const newProd = { title, price, description };
        console.log("New product:", newProd);
        setProdDetails({
            title: "",
            price: "",
            description: "",
    });
    };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleOnSubmitCreateProd}>
                <div className="mb-3">
                    <label className="form-label">Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        name = "title"
                        value={prodDetails.title}
                        onChange={handleOnChangeProdDetails}
                    />
                </div>

                <div className="mb-3">
                <label className="form-label">Price: </label>
                <input
                    type="number"
                    className="form-control"
                    name = "price"
                    value={prodDetails.price}
                    onChange={handleOnChangeProdDetails}
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Description: </label>
                <input
                    type="text"
                    className="form-control"
                    name = "description"
                    value={prodDetails.description}
                    onChange={handleOnChangeProdDetails}
                />
                </div>

                <input type="submit" value="Create Product" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default ProdForm;