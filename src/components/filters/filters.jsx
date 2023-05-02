import './filters.scss'

const Filters = () => {
  const buttonsData = [
    {name: 'brazil', label: 'Brazil'},
    {name: 'kenya', label: 'Kenya'},
    {name: 'columbia', label: 'Columbia'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    /* const active = props.filter === name;
    const clazz = active ? 'filters__button filters__button--active' : 'filters__button'; */
    return (
      <button 
        className="filters__button"
        type="button"
        key={name}>
        {label}
      </button>
    )
  })

  return (  
    <div className="filters">
      <div className="container">
        <div className="filters-wrapper">
          <div className="filters-search">
            <label className="filters-search__label" htmlFor="filters-search-input">Lookiing for</label>
            <input className="filters-search__input" id="filters-search-input" type="text" placeholder='start typing here...' />
          </div>
          <div className="filters-buttons">
            <div className="filters-buttons__label">Or filter</div>
            <div className="filters-buttons-wrapper">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Filters;