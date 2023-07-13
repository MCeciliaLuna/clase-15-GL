import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await axios.get('https://phrasesapi.onrender.com/getSufferingAndHope');
      set(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useStore