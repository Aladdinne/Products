import React, { useState } from "react";
import produitService from "../service/produit.service";
import { redirect } from "react-router-dom";


const AddProduct = () => {
    const [emp, setEmp] = useState({
        name: "",
        category: "",
        email: "",
        prix: "",
        quantity: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmp({ ...emp, [e.target.name]: value });
    };

    const submitProd = (e) => {
        e.preventDefault();
        try {
            produitService.saveProduit(emp);
            console.log(emp);
            // redirect("https://www.facebook.com/")
            // window.location.replace("https://www.facebook.com/")
        } catch (err) {
            console.error("error", err);
            console.log("fg")
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-2">
                    <div className="card-header text-center fs-3">Add Produit</div>
                    <div className="card-body">
                        <form onSubmit={(e)=>submitProd(e)}>
                            <div className="mb-3">
                                <label>Enter Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Enter Gategory:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Enter Email:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Enter Price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="unitPrice"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Enter Quantity:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantity"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">Submit</button>
                                <input type="Reset" className="btn btn-danger ms-2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
