import "./index.scss";
import searchIcon from "../../../assets/Search.svg";

const Search: React.FC<{
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearchValue }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search home here"
        style={{
          backgroundImage: `url(${searchIcon})`,
          backgroundPosition: "10px center",
          backgroundSize: "20px 20px",
          backgroundRepeat: "no-repeat",
          paddingLeft: "40px",
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
export default Search;
