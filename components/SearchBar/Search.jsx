import Style from "./Search.module.css";
import { LuMapPin } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { getCities, getStates, getMedicalCenters } from "../../api/api";
function Search({ text }) {
  let city = useRef("");
  let state = useRef("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleStateChange = async (e) => {
    state.current = e.target.value;
    console.log(state.current)
    const data = await getCities(state.current);
    console.log(data);
    setCities(data);
  };
  const handleCityChange = (e) =>{
    city.current = e.target.value;
  }

  const handleSearch = async() =>{
    const data = await getMedicalCenters(state.current, city.current);
    console.log(data[0]);
  }
  useEffect(() => {
    (async () => {
      const data = await getStates();
      setStates(data);
    })();
  }, []);
  return text === "hero" ? (
    <div className={Style.heroSearch}>
      <div>
        <IoMdSearch />
        <select name="state" id="state" onChange={handleStateChange}>
          <option value="states">States</option>
          {console.log(states)}
          {states.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <IoMdSearch />
        <select name="city" id="city" onChange={handleCityChange}>
          <option value="city">Cities</option>
          {cities.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  ) : (
    <div className={Style.search}>
      <div>
        <LuMapPin />
        <input type="text" name="state" id="state" placeholder="State" />
      </div>
      <div>
        <LuMapPin />
        <input type="text" name="city" id="city" placeholder="City" />
      </div>
      <button>Search</button>
    </div>
  );
}
Search.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Search;
