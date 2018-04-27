import React from 'react';
import Carousel from '../carousel';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/AppPageActions'; // TODO
import { connect } from 'react-redux'
// TODO Add react redux to stack

export class AppPage extends React.Component {
  render() {
    return (
      <section>
        <h1> this.props.name </h1>
        <h3> this.props.author </h3>
        <img src={require(`../../public/${this.props.img}`)} className="app-tile" onClick={this.props.actions.toAppUrl()} alt="loading..." />
        <Carousel />
      </section>
    );
  }
}

AppPage.propTypes = {
  actions: PropTypes.object.isRequired,
  name: PropTypes.String.isRequired,
  author: PropTypes.object.isRequired,
  type: PropTypes.String.isRequired,
  reivews: PropTypes.object.isRequired,
  url: PropTypes.String.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.String.isRequired,
  tags: PropTypes.arrayOf(PropTypes.number)
};

function mapStateToProps(state) {
  return {
    name: state.name,
    author: state.author,
    type: state.type,
    url: state.url,
    rating: state.rating,
    img: state.img,
    tags: state.tags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);


