import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchproducts = createAsyncThunk("products/fetchproducts" , async () => {
    const res =  await fetch("https://fakestoreapi.com/products");
    const data = await res.json()
    return data
})
const productslice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducer: {

    },
    extraReducers:(builder) =>  {
       builder.addCase(fetchproducts.pending, (state) => {
        state.status = "loading";
        state.error = null
       }).addCase(fetchproducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
       }).addCase(fetchproducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = "ERROR 404";
       })
    }

});
export default productslice.reducer;