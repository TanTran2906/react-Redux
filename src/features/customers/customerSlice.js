import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName: "",
    nationalID: "",
    createAt: "",
}

//////=======   REDUX TOOLKIT


const customerSlice = createSlice({
    name: "customer", //Action sẽ là : account/deposit
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return {
                    payload: { fullName, nationalID, createAt: new Date().toISOString() }
                }
            },

            //vì new Date().toISOString() là sideEffect cho nên không để trong reducer
            reducer(state, action) {
                state.fullName = action.payload.fullName
                state.nationalID = action.payload.nationalID
                state.createAt = action.payload.createAt
            }
        },
        updateName(state, action) {
            state.fullName = action.payload.fullName
        }
    }
})

export const { createCustomer, updateName } = customerSlice.actions
export default customerSlice.reducer

//////=======   REDUX

// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case "customer/createCustomer":
//             return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createAt: action.payload.createAt }
//         case "customer/updateName":
//             return { ...state, fullName: action.payload }
//         default: return state
//     }
// }

// //==========Customer
// export function createCustomer(fullName, nationalID) {
//     return {
//         type: "customer/createCustomer",
//         payload: { fullName, nationalID, createAt: new Date().toISOString() }
//     }
// }

// export function updateName(fullName) {
//     return { type: 'customer/updateName', payload: fullName }
// }

// store.dispatch(createCustomer('jonas', '12345'))
