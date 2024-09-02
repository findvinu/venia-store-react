import React from "react";

interface FilterProps {
    id: string;
    label: string;
    value: string;
}

const Filter: React.FC<FilterProps> = ({ id, label }) => {
    return (
        <div className="filter__categories">
            <input type="checkbox" id={ id } name={ id } value={ id } className="filter__checkbox" />
            <label htmlFor={ id } className="filter__label">{ label }</label>
        </div>
    );
}

export default Filter;