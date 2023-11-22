import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterStateType = {
  value: number;
};

//กำหนดค่าเริ่มต้น
const initialState: CounterStateType = {
  value: 0,
};

//createSlice ใช้สำหรับสร้าง slice ของ state ใน Redux Toolkit และ state ทั้งหมดของแอปพลิเคชันที่จัดการโดย reducer
export const counterState = createSlice({
  // ชื่อของ slice, ใช้เพื่อระบุ slice
  name: "counter",
  //  กำหนด state โดยนำ initialState เข้ามาใช้งาน
  initialState,
  // กำหนด functions ที่จะจัดการกับ actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //การเพิ่มตัว incrementByAmount ใช้ PayloadAction<number> เพื่อระบุว่า action นี้รับ payload เป็น number
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment,decrement,incrementByAmount} = counterState.actions

export default counterState.reducer