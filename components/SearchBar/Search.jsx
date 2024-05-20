import Style from "./Search.module.css";
import { LuMapPin } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import PropTypes from "prop-types";

function Search({ text }) {
  return text === "hero" ? (
    <div className={Style.heroSearch}>
      <div>
        <IoMdSearch/>
        <input type="text" name="state" id="state" placeholder="State" />
      </div>
      <div>
        <IoMdSearch/>
        <input type="text" name="city" id="city" placeholder="City" />
      </div>
      <button>Search</button>
    </div>
  ) : (
    <div className={Style.search}>
      <div>
        <LuMapPin/>
        <input type="text" name="state" id="state" placeholder="State" />
      </div>
      <div>
        <LuMapPin/>
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
