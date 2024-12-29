import { combineReducers, createStore } from "redux";

const initialState = {
    Empty: {
        id: "",
        name: "",
        email: "",
        mobile: "",
        account: "",
        nominee: "",
        amount: ""
    },
    Data: []
}

function PersonalData(state = initialState, action) {
    switch (action.type) {
        case "DELETE":
            const remaining = state.Data.filter((eachobj) => {
                return eachobj.id !== action.payload;
            })
            return { ...state, Data: remaining };
        case "GET_DATA":
            return { ...state, Empty: action.payload };
        case "EDIT_DATA":
            return { ...state, Empty: action.payload };
        case "EDITED":
            const EditedData = state.Data.map((eachobj) => {
                if (eachobj.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        email: action.payload.email,
                        account: action.payload.account,
                        mobile: action.payload.mobile,
                        nominee: action.payload.nominee,
                        amount: action.payload.amount
                    }
                }
                else {
                    return eachobj;
                }
            })
            return {
                Empty: {
                    name: "",
                    id: "",
                    email: "",
                    mobile: "",
                    account: "",
                    amount: "",
                    nominee: ""
                }, Data: EditedData
            }
        case "ADD_DATA":
            return {
                Empty: {
                    name: "",
                    id: "",
                    email: "",
                    mobile: "",
                    account: "",
                    amount: "",
                    nominee: ""
                }, Data: [...state.Data, action.payload]
            }
        default:
            return state;
    }
}

function ProfessionalData(state = {status:""}, action) {
    switch(action.type){
        case "STATUS":
            return {status:action.payload}
        default:
            return state;
    }
}

const finalState = combineReducers({
    personal: PersonalData,
    professional: ProfessionalData
})

const store = createStore(finalState);

export default store;