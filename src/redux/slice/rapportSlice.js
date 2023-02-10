import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredRapports: []
};

const rapportSlice = createSlice({
  name: "rapports",
  initialState,
  reducers: {
    FILTER_BY_SEARCH: (state, action) => {
      const { rapports, search } = action.payload
      // console.log('r', rapports)
      // console.log('s', search)
      // const tempRapports = []
      // rapports.map(rap => {
      //   if(rap.title.toLowerCase().includes(search.toLowerCase())) {
      //     tempRapports.push(rap)
      //   }
      // })
      const tempRapports = rapports.filter(rap => rap.title.toLowerCase().includes(search.toLowerCase()))
      console.log('temp', tempRapports)

      state.filteredRapports = tempRapports
    }
  },
});

export const { FILTER_BY_SEARCH } = rapportSlice.actions;

export const selectFilteredRapports = (state) => state.rapports.filteredRapports;

export default rapportSlice.reducer;