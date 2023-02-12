const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search">search:</label>
      <input
        name="search"
        type="text"
        // value={formFields.email}
        // onChange={onFormChange}
      />
    </div>
  );
};

export default SearchBar;
