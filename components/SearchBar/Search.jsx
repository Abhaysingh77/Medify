import Style from "./Search.module.css";
import { LuMapPin } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { getCities, getStates, getMedicalCenters } from "../../api/api";
import styled from "styled-components";

const SlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
`;

const SlotButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #2aa7ff;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-size: 0.9em;
  appearance: none;
  -moz-appearance: none; /* For Firefox */
  outline: none;
  color: "#2AA7FF";

  &:hover {
    background-color: #2aa7ff;
    color: #ffffff;
  }
`;

function Card({ name, city, state, type }) {
  const [isClick, setIsClick] = useState(false);

  const handleBookClick = () => {
    setIsClick(true);
  };

  const handleSlotClick = (slot, date) => {
    const bookingData = {
      name,
      city,
      state,
      type,
      date,
      slot,
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setIsClick(false);
    alert(`Appointment booked for ${slot} on ${date}`);
  };

  return (
    <>
      <div className={Style.card}>
        <div className={Style.logo}></div>
        <div className={Style.desc}>
          <h3 style={{ color: "#14bef0" }}>{name}</h3>
          <h5 style={{ marginTop: "10px" }}>
            {city}, {state}
          </h5>
          <p>{type}</p>
          <p>
            <span style={{ color: "#02a401", fontWeight: "700" }}>FREE</span>{" "}
            Consultation fee at clinic
          </p>
        </div>
        <div className={Style.avail}>
          <h4 style={{ color: "#01a400", fontWeight: "500" }}>
            Available Today
          </h4>
          <button onClick={handleBookClick}>Book FREE Center Visit</button>
        </div>
      </div>
      <div className={Style.appointment}>
        {isClick && (
          <SlotsContainer>
            <p>Available Slots</p>
            <h4>Today</h4>
            <div>
              {[
                "11:30 AM",
                "12:00 PM",
                "12:30 PM",
                "01:30 PM",
                "02:00 PM",
                "02:30 PM",
                "06:00 PM",
                "06:30 PM",
                "07:00 PM",
                "07:30 PM",
              ].map((slot) => (
                <SlotButton
                  key={slot}
                  onClick={() => handleSlotClick(slot, "Today")}
                >
                  {slot}
                </SlotButton>
              ))}
            </div>
            <h4>Tomorrow</h4>
            <div>
              {[
                "11:30 AM",
                "12:00 PM",
                "12:30 PM",
                "01:30 PM",
                "02:00 PM",
                "02:30 PM",
                "06:00 PM",
                "06:30 PM",
                "07:00 PM",
                "07:30 PM",
              ].map((slot) => (
                <SlotButton
                  key={slot}
                  onClick={() => handleSlotClick(slot, "Tomorrow")}
                >
                  {slot}
                </SlotButton>
              ))}
            </div>
            <h4>Fri, 5 May</h4>
            <div>
              {[
                "11:30 AM",
                "12:00 PM",
                "12:30 PM",
                "01:30 PM",
                "02:00 PM",
                "02:30 PM",
                "06:00 PM",
                "06:30 PM",
                "07:00 PM",
                "07:30 PM",
              ].map((slot) => (
                <SlotButton
                  key={slot}
                  onClick={() => handleSlotClick(slot, "Fri, 24 zMay")}
                >
                  {slot}
                </SlotButton>
              ))}
            </div>
          </SlotsContainer>
        )}
      </div>
    </>
  );
}
function Search({ text }) {
  let city = useRef("");
  let state = useRef("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const handleStateChange = async (e) => {
    state.current = e.target.value;
    console.log(state.current);
    const data = await getCities(state.current);
    console.log(data);
    setCities(data);
  };
  const handleCityChange = (e) => {
    city.current = e.target.value;
  };

  const handleSearch = async () => {
    const data = await getMedicalCenters(state.current, city.current);
    setHospitals(data);
    console.log(data);
  };
  useEffect(() => {
    (async () => {
      const data = await getStates();
      setStates(data);
    })();
  }, []);
  return text === "hero" ? (
    <>
      <div className={Style.heroSearch}>
        <div>
          <IoMdSearch />
          <select name="state" id="state" onChange={handleStateChange}>
            <option>States</option>
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
            <option>Cities</option>
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
    </>
  ) : (
    <>
      <div className={Style.search}>
        <div>
          <LuMapPin />
          <select name="state" id="state" onChange={handleStateChange}>
            <option>States</option>
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
          <LuMapPin />
          <select name="city" id="city" onChange={handleCityChange}>
            <option>Cities</option>
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
      <div className={Style.cards}>
        {hospitals.map((item) => {
          return (
            <Card
              key={item["Provider ID"]}
              name={item["Hospital Name"]}
              address={item.Address}
              state={item.State}
              city={item.City}
              type={item["Hospital Type"]}
            />
          );
        })}
      </div>
    </>
  );
}
Search.propTypes = {
  text: PropTypes.string.isRequired,
};
Card.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Search;
