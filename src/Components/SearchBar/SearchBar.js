import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => (
  <div class="wrap">
    <div class="search">
      <input
        placeholder="What are you looking for?"
        // value={this.state.input}
        // onChange={(event) => this.setState({ input: event.target.value })}
        type="text"
        className="searchTerm"
        id="input_text"
      ></input>
      <button type="submit" className="searchButton">
        <SearchIcon />
      </button>
    </div>
  </div>
);

export default SearchBar;
