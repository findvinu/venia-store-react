const Sort = () => {
    return (

        <select
            name="sort"
            title="sort"
            id="sort"
            className="product-list__sort"
        >
            <option value="price">Sort by Price</option>
            <option value="category">Sort by Category</option>
            <option value="range">Sort by Range</option>
            <option value="availability">Sort by Availability</option>
        </select>
    );
}

export default Sort;