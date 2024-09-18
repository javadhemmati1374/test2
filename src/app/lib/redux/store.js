// import { configureStore } from "@reduxjs/toolkit";
// import formReducer from "./formSlice";

// // بازیابی state از localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("reduxState");
//     return serializedState ? JSON.parse(serializedState) : undefined;
//   } catch (e) {
//     return undefined;
//   }
// };

// // ذخیره کردن state در localStorage
// const saveState = (state) => {
//   try {
//     localStorage.setItem("reduxState", JSON.stringify(state));
//   } catch (e) {
//     console.error("Could not save state", e);
//   }
// };

// const preloadedState = loadState();

// const store = configureStore({
//   reducer: { form: formReducer },
//   preloadedState,
// });

// // هر بار که state تغییر کرد، آن را ذخیره کنید
// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
