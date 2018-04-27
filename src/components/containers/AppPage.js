import React from 'react';
import Carousel from '../carousel';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
import * as helperFuncs from '../../actions/AppPageActions'; // TODO
// import { connect } from 'react-redux'
// TODO Add react redux to stack

export class AppPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.app.name,
      author: this.props.app.author,
      type:  this.props.app.type,
      reivews: this.props.app.reivews,
      url: this.props.app.url,
      rating: this.props.app.rating,
      img: this.props.app.img,
      tags: this.props.app.tags,
      saving: false,
      isEditing: false
    };
  }

  render() {
    return (
      <section>
        <h1> this.props.name </h1>
        <h3> this.props.author </h3>
        <img src={require(`../../public/${this.state.img}`)} className="app-tile" onClick={helperFuncs.toAppUrl()} alt="loading..." />
        <Carousel />
      </section>
    );
  }
}

AppPage.propTypes = {
  // actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
  // name: PropTypes.String.isRequired,
  // author: PropTypes.object.isRequired,
  // type: PropTypes.String.isRequired,
  // reivews: PropTypes.object.isRequired,
  // url: PropTypes.String.isRequired,
  // rating: PropTypes.number.isRequired,
  // img: PropTypes.String.isRequired,
  // tags: PropTypes.arrayOf(PropTypes.number)
};

// function mapStateToProps(state) {
//   return {
//     name: state.app.name,
//     author: state.app.author,
//     type:  state.app.type,
//     reivews: state.app.reivews,
//     url: state.app.url,
//     rating: state.app.rating,
//     img: state.app.img,
//     tags: state.app.tags,
//     saving: false,
//     isEditing: false
//   }
  // return {
  //   name: state.name,
  //   author: state.author,
  //   type: state.type,
  //   url: state.url,
  //   rating: state.rating,
  //   img: state.img,
  //   tags: state.tags
  // };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(AppPage);
export default AppPage;

