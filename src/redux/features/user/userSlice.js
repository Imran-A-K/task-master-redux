const initialState = {
  name: "imran",
  email: "asd@gmail.com",
};

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
