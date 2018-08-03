import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppSpec from './AppSpec';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            apps: props.apps
        };
    }
    updateSearch(event) {
        this.setState({search: event.target.value});
      }
    render(){
        let filteredApps = this.state.apps.filter(
            (app) => {
              return app.toLowerCase().indexOf(
                this.state.search.toLowerCase()) !== -1;
            }
          );
        return (
        <div>
            <input type="text"
            placeholder = "Search" value = {this.state.search} onChange={this.updateSearch.bind(this)}/>
            <Button bsStyle = "primary">Go!</Button>
            <ul>
                {filteredApps.map((app) => {
                return <AppSpec app = {app} key ={app.id}/>;
                })}
            </ul>
        </div>
        );
    }
}

SearchBar.propTypes = {
    search: PropTypes.string,
    apps: PropTypes.array,
    
};


export default SearchBar;