import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAlphaValid: false,
  isAlphaNumValid: false
}

export const validationSlice = createSlice({
  name: 'validAlert',
  initialState,
  reducers: {
    alphaValid: (state, action) => {
      state.isAlphaValid = false
    },
    notAlphaValid: (state, action) => {
      state.isAlphaValid = true;
    },
    alphaNumValid: (state, action) => {
        state.isAlphaNumValid = false;
    },
    notAlphaNumValid: (state, action) => {
        state.isAlphaNumValid = true;
    },
  },

})

// Action creators are generated for each case reducer function
export const { alphaValid, notAlphaValid, alphaNumValid, notAlphaNumValid } = validationSlice.actions;

export default validationSlice.reducer