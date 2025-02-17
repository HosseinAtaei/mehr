"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk برای لاگین کاربر
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://zah1377.pythonanywhere.com/api/token/",
        userData
      );
      const userRole = response.data.role || "user"; // نقش را از پاسخ بگیرید
      return { accessToken: response.data.access, role: userRole };
    } catch (error) {
      return thunkAPI.rejectWithValue("نام کاربری یا رمز عبور نادرست است");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    role: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.accessToken;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
