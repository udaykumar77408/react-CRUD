import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const DataBar = () => {

    const data = useSelector((state) => {
        return state.personal;
    });
    
    // console.log(data)

    const dispatch = useDispatch();

    return (
        <>
            {
                data.Data.map(({id,name,email,mobile,account,nominee,amount}) => {
                    return (
                        <div key={id} className='my-3 w-75 p-4 bg-light rounded data-bar'>
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <div className="text-box mb-3">
                                        <h6><b>{name}</b></h6>
                                    </div>
                                    <div className="text-box mb-3">
                                        <h6><b>{email}</b></h6>
                                    </div>
                                    <div className="text-box mb-3">
                                        <h6><b>{mobile}</b></h6>
                                    </div>
                                    <div className="text-box">
                                        <h6><b>{account}</b></h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-box mb-3">
                                        <h6><b>{nominee}</b></h6>
                                    </div>
                                    <div className="text-box mb-3">
                                        <h6><b>{amount}</b></h6>
                                    </div>
                                    <div className='d-flex'>
                                        <button className='btn btn-success' onClick={() => {
                                            dispatch({type:"STATUS",payload:"Active"})
                                            dispatch({type:"GET_DATA",payload:{id:id, account:account, amount:amount, email:email, mobile:mobile, name:name, nominee:nominee}})}}>Edit</button>
                                        <button className='btn btn-danger mx-2' onClick={() => {dispatch({type:"DELETE", payload:id})}}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default DataBar
