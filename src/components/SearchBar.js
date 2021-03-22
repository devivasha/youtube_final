import React, {Component} from 'react';


class SearchBar extends Component {
    state = {
        term:''
    };
    onInputSearch = event =>{
        this.setState({term: event.target.value})
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label htmlFor="">Video Search</label>
                    <input
                        value={this.state.term}
                        type="text"
                        onChange={this.onInputSearch}
                    />
                </form>
            </div>
        );
    }

}
export default SearchBar;
