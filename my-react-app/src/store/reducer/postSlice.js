import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";


const postState = createEntityAdapter({
  selectId :(ele)=> ele.id
})
const initialState = postState.getInitialState({
  loading :"idle",
  error : null
})

export const getPost = createAsyncThunk("getPost", async () => {

  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    if(Array.isArray(data)){
      return data
    }else{
      return {err : "some err"}
    }

});

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    updatePost: postState.updateOne
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending , (state , action)=>{
       state.loading = 'pending'
    })
    builder.addCase(getPost.fulfilled,(state,action)=>{
      if(action.payload.err){
        state.loading = 'faild'

      }else{

        state.loading = 'completed'
        postState.addMany(state,action.payload)
      }
    })
    builder.addCase(getPost.rejected , (state , action)=>{
      state.loading= 'rejected'
    })
  },
});


export const {
  selectIds,
  selectAll,
  selectById,
  selectEntities,
  selectTotal
} = postState.getSelectors((store)=> store.post)

export const selectPostLoading = createSelector([store=> store.post.loading],(loading)=>loading)

export const {updatePost}= postSlice.actions
export default postSlice.reducer



