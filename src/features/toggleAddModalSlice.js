import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAddOpen: false
}

export const addModalSlice = createSlice({
  name: 'addModal',
  initialState,
  reducers: {
    openAddModal: (state, action) => {
      state.isAddOpen = true;
    },
    closeAddModal: (state, action) => {
      state.isAddOpen = false;
    },

  },
})

// Action creators are generated for each case reducer function
export const { openAddModal, closeAddModal } = addModalSlice.actions;

export default addModalSlice.reducer