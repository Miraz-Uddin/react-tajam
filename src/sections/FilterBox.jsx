const FilterBox = ({ filters, updateFilters }) => {
  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters(
      filters.map((f) => {
        return {
          ...f,
          isChecked: value === "all" ? true : f.label === value,
        };
      })
    );
  };

  return (
    <div className="full-wrapper port">
      <div className="wrapper">
        <div className="sameHead port-head">
          <h2>OUR WORKS</h2>
          <h3>Lorem ipsum dolor sit amet proin gravida nibh vel velit</h3>
        </div>
        <div className="port-menu">
          {/* <div className="filter-box"> */}
          <ul>
            {filters.map((f) => (
              <li key={`${f.label}_key`}>
                <input
                  id={f.label}
                  type="checkbox"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                  style={{ display: "none" }}
                />
                <label htmlFor={f.label}>{f.title}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FilterBox;
