import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
 //import { persistStore, persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from "redux-persist/lib/storage";
import EncryptedStorage from 'react-native-encrypted-storage';

const persistConfig = {
  key: "root",
  storage:EncryptedStorage
};



const persistedReducer = persistReducer(persistConfig, todoSlice);

export default todoStore= configureStore({

 

    reducer:{
      todo : persistedReducer,
       
    },
    middleware: (
      getDefaultMiddleware, // non- serilizer error
    ) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),

    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
   
})

export const persistor = persistStore(todoStore);