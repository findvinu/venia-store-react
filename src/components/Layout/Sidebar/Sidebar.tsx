import Filter from '../../Filter/Filter';
import './Sidebar.scss';

const filterUI = [
    { id: 'jewelery', label: 'Jewellery' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'mens', label: "Men's Clothing" },
    { id: 'women', label: "Women's Clothing" }
]

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="breadcrumb">
                <ul className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Clothing</a>
                    </li>
                    <li className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Women’s</a>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--current">
                        <span className="breadcrumb__text">Outerwear</span>
                    </li>
                </ul>
            </nav>
            <div className="filter">
                <h2 className="filter__title">Filters</h2>
                <h2 className="filter__subtitle">Categories</h2>
                { filterUI.map(filter => <Filter key={ filter.id } id={ filter.id } label={ filter.label } value={ filter.id } />) }
            </div>

        </aside>);
}

export default Sidebar;