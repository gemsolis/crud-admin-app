import { configureStore } from '@reduxjs/toolkit'
import addModalReducer  from './features/toggleAddModalSlice'
import editModalReducer from './features/toggleEditModalSlice'
import validAlertReducer from './features/validationSlice'

export const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    editModal: editModalReducer,
    validAlert: validAlertReducer,

  },
})