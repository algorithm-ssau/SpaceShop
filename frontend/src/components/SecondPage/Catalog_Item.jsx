import React from "react";
import PropTypes from "prop-types";

function Catalog_Item({id, title, price, image}) {
    return(
        <div className = "catalog_item">
            <div>
                <img src={image}/>
            </div>
            <div className="item_title">{title}</div>
            <div className="bottom_aligner">
                <div className="item_stars">★5.0</div>
                <div className="item_price">{price}</div>

            </div>
        </div>
    );
}

Catalog_Item.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Catalog_Item;