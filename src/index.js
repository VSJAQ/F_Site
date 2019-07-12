import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './Item';
import items from './Items';
import Icon from './icon/Icon';
import Modal from './modal/Modal';

class Root extends React.Component {
    state = {
        items: items,
        isOpen: false,
    };

    openModal = () => {
        this.setState({isOpen: true});
    };

    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({isOpen: false});
    };

    removeItem = (id) => {
        this.setState( ({items}) => ({
            items: items.filter(el => el.id !== id)
        }))
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    addItem = () => {
        console.log('Add function!');
        this.setState(state => {

           const items = [{image_url: (this.state.image_url), title: (this.state.title)}, ...state.items];

           return {
               items,
           };




        });

        this.setState({isOpen: false});
    };


    render() {
        const {items} = this.state;

        return (
            <div className="Telo">
            <div className="Header">
            <img className="first"
        src={"https://media.wired.com/photos/5a970eb4927dc94e67685b0e/master/pass/matterhorn-802950172.jpg"}
        alt="Аватар"/>
            <h1>Images</h1>
            </div>
                {/* <Icon size={2} onClick={() => { console.log('!!!'); }} name="times" /> */}
            <div className="Add-Section">
            <button className="Add-Button" onClick={this.openModal}>New</button>
                <Modal
                    title="New image"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    onSubmit={this.addItem}
                    >
                     <input
                        type="title"
                        className="title-control"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleUserInput}
                    />
                     <input
                        type="image_url"
                        className="image_url-control"
                        name="image_url"
                        placeholder="URL"
                        value={this.state.image_url}
                        onChange={this.handleUserInput}
                    />
                    </Modal>
        </div>
        {items.map( el => <Item removeItem={this.removeItem} {...el}/>)}
            </div>
        )
    }
}



ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);
