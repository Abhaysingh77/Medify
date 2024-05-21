import axios from "axios";
async function getStates() {
  const URL = "https://meddata-backend.onrender.com/states";
  try {
    const res = await axios.get(URL);
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}
async function getCities(state) {
  const URL = `https://meddata-backend.onrender.com/cities/${state}`;
  try {
    const res = await axios.get(URL);
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getMedicalCenters(state, city) {
  const URL = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
  try {
    const res = await axios.get(URL);
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}
export { getCities, getStates, getMedicalCenters} 
