export const SearchField = ({handleChange, value}) => {
    <div className="from-row">
        <label htmlFor="search">Search for Villain</label>
        <input
            className="form-control"
            name="search"
            onChange={handleChange}
            value={value}
        />
    </div>
}