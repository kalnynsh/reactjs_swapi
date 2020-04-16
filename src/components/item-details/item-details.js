import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            });
    }

    render() {
        const { item, image } = this.state;

        if (!item) {
            return <span>Select a item from a list</span>;
        }

        const { id, name, gender, birthYear, eyeColor } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="character"
                />

                <div className="card-body">
                    <h4>{name}: {id}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
