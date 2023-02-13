import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-label">
        search:
      </label>
      <input
        className="search-input"
        name="search"
        type="text"
        // value={formFields.email}
        // onChange={onFormChange}
      />
    </div>
  );
};

export default SearchBar;
