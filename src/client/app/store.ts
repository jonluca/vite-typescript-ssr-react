import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducers from "./rootReducers";

const isDev = process.env.NODE_ENV === "development";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["darkmode"],
};

const rootReducer = combineReducers(rootReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareLogger: any = !!isDev ? logger : [];

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewareLogger),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
