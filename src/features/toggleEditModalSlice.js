import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isEditOpen: false
}

export const editModalSlice = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditOpen = true;
    },
    closeEditModal: (state, action) => {
      state.isEditOpen = false;
    },

  },
})

// Action creators are generated for each case reducer function
export const { openEditModal, closeEditModal } = editModalSlice.actions;

export default editModalSlice.reducer