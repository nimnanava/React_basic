import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('user/getUser' , async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  if(Array.isArray(data)){
    return data
  }else{
    return  ({
      err : "some err"
    })
  }
})

const userState = createEntityAdapter({
  selectId: (user)=>user.id
})
const initialState=userState.getInitialState({
  loading : 'idle'
})

 const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
      builder.addCase(getUsers.pending, (state , action)=>{

        state.loading =' pending'
        
      })
      builder.addCase(getUsers.fulfilled, (state , action)=>{
          state.loading = ' completed'
          if(action.payload.err === undefined){

            userState.addMany(state, action.payload)
          }else{
            state.loading = 'faild'
          }
      })
      builder.addCase(getUsers.rejected, (state , action)=>{
           
        state.error = 'some error'
      })
  }
 })


 export const {
  selectAll: selectAllUser,
  selectById: selectByIdUser,
  selectEntities: selectEntitiesUsre,
  selectTotal : selectTotalUser,
  selectIds : selectIdsUser
 } = userState.getSelectors((store) => store.user)

export const userLoadingSelecter = createSelector([store=>store.user.loading] , (loading)=>loading)

 export default userSlice.reducer