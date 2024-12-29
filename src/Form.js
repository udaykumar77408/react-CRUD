import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {

    const data = useSelector((state) => {
        return state.personal.Empty;
    })

    const status = useSelector((state) => {
        return state.professional;
    })

    const dispatch = useDispatch();

  return (
    <div>
        <h2><b>Account Holder's Details</b></h2><br/>
      <div className='w-75'>
        <form className='bg-light rounded p-4'>
            <div className="row justify-content-center">
                <div className="my-2 col-12">
                    <input type="text" value={data.name} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,name:e.target.value}})}} className='form-control' placeholder='Enter your name...'/>
                </div>
                <div className="my-2 col-6">
                    <input type="email" value={data.email} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,email:e.target.value}})}} className='form-control' placeholder='Enter your email...'/>
                </div>
                <div className="my-2 col-6">
                    <input type="number" value={data.mobile} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,mobile:e.target.value}})}} className='form-control' placeholder='Enter your number...'/>
                </div>
                <div className="my-2 col-7">
                    <input type="number" value={data.account} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,account:e.target.value}})}} className='form-control' placeholder='Enter your account number...'/>
                </div>
                <div className="my-2 col-5">
                    <input type="text" value={data.nominee} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,nominee:e.target.value}})}} className='form-control' placeholder='Enter your nominee name...'/>
                </div>
                <div className="my-2 col-12">
                    <input type="number" value={data.amount} onChange={(e) => {dispatch({type:"EDIT_DATA",payload:{...data,amount:e.target.value}})}} className='form-control' placeholder='Enter your amount...'/>
                </div>
                <div className="col-6">
                    { status.status === "Active" ?
                    <button className='btn btn-danger mt-2' onClick={(e) => {
                        dispatch({type:"STATUS",payload:""})
                        e.preventDefault();
                        dispatch({type:"EDITED", payload:{
                            id:data.id,
                            name:data.name,
                            email:data.email,
                            mobile:data.mobile,
                            account:data.account,
                            nominee:data.nominee,
                            amount:data.amount
                        }})
                    }}>Edit</button>:
                    <button className='btn btn-success mt-2 mx-2' onClick={(e) => {
                        e.preventDefault();
                        dispatch({type:"ADD_DATA", payload:{
                            id:new Date().getTime(),
                            name:data.name,
                            email:data.email,
                            amount:data.amount,
                            account:data.account,
                            nominee:data.nominee,
                            mobile:data.mobile
                        }})
                    }}>Add Data</button>
                    }
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
