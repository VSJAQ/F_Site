import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const { title, image_url, id, removeItem } = this.props;
        return (
            <div className="Section">
            <div className="Section-head">
            <h2>{title}</h2>
            <button className="Button" onClick={() => removeItem(id)}>delete</button>
            </div>
            <img className="Second"
        src={image_url}
        alt="Картинка"/>
            </div>
    );
    }
}
