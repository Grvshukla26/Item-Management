import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import productService from '../service/product.service';
import { useState } from 'react';

const EditItem = () => {
    const [products,setProduct]= useState({
        id:"",
        productName:"",
        description:"",
        price:"",
        status:""
    });

    const {id}=useParams();
    console.log(id);

    const[msg, setMsg]=useState("");

    useEffect(()=>{
        productService.getAllProductById(id).then((res)=>{
            setProduct(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    const handleChange=(e)=>{
        const value = e.target.value;
        setProduct({...products,[e.target.name]:value});
    };
    
    const ProductRegister=(e)=>{
        e.preventDefault();

        productService
        .saveProduct(products)
        .then((res)=>{
            console.log("Item Edited Successfully");
            setMsg("Item Edited Successfully");
            setProduct({
                productName:"",
                description:"",
                price:"",
                status:""
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <>


            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card header fs-3 text-center">
                                Edit Item
                            </div>
                            {
                                msg &&

                                <p className="fs-4 text-center text-success">{msg}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e)=>ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Item Name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            className="form-control" 
                                            onChange={(e)=>handleChange(e)}
                                            value = {products.productName}
                                            />
                                    </div>

                                    <div className="mb-3">
                                        <label>Enter Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            className="form-control" 
                                            onChange={(e)=>handleChange(e)}
                                            value = {products.description}
                                            />
                                    </div>

                                    <div className="mb-3">
                                        <label>Enter Price</label>
                                        <input
                                            type="text"
                                            name="price"
                                            className="form-control" 
                                            onChange={(e)=>handleChange(e)}
                                            value = {products.price}
                                            />
                                    </div>

                                    <div className="mb-3">
                                        <label>Enter Status</label>
                                        <input
                                            type="text"
                                            name="status"
                                            className="form-control" 
                                            onChange={(e)=>handleChange(e)}
                                            value = {products.status}
                                            />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Submit</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};


export default EditItem;