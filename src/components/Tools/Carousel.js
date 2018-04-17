import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Slider from 'react-slick';
import AppTile from '../AppPage/AppTile.js';
// import { connect, Provider, bindActionCreators } from 'react-redux';

// import PhoneAuthTest from './Components/phoneAuthTest'

// mapDispatchToProps = dispatch => bindActionCreators({
//     toAbout: () => push('/')
//   }, dispatch)

const dummyState = {
  tiles: [
    {
      name: 'Firehose',
      img: 'firehose.png',
      url: 'https://firehose.mit.edu',
    },
    {
      name: 'TurboVote',
      img: 'turbovote.jpeg',
      url: 'https://mit.turbovote.org',
    },
    {
      name: 'Planner',
      img: 'planner.png',
      url: 'https://planner.mit.edu',
    },
  ],
};
// eslint won't like the require notation, but this is the only way to serve images dynamically
function appTile(object) {
  return (
    <div className="container">
      <img src={require(`../public/${object.img}`)} 
        onClick={() => {
          // launch a page from an image
          window.location.href = object.url;
        }}
      />
      <span>
        {object.name}
      </span>
    </div>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: dummyState.tiles,
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

    if (!this.state.tiles) {
      return (
        <div>
          <h2>Browse Student Apps</h2>
          <Slider {...settings}>
            <div className="tile-preview">Loading...</div>
          </Slider>
        </div>
      );
    }

    if (this.state.tiles.length === 0) {
      return (
        <div>
          <h2>Browse Student Apps</h2>
          <Slider {...settings}>
            <div className="tile-preview">No articles are here... yet.</div>
          </Slider>
        </div>
      );
    }
    return (
      <div>
        <h2>Browse Student Apps</h2>
        <Slider {...settings}>
          {this.state.tiles.map(tile => appTile(tile))}
        </Slider>
      </div>
    );
  }
}

// TODO figure out how to for looop the tags/ nest a component in another (probably just make a map state to props function)
// var element  = <div><h2>Browse Student Apps</h2> </div>;
// element += ;
// element += this.state.tiles.map((tile) => appTile(tile));
// element += </Slider>

//     return (

//         <script>
//             ReactDom.render(element, document.getElementById('root'));

//         </script>
//         </Slider>

//       </div>
//     );
//   }
// }

export default Carousel;

// export default connect(
//     mapStateToProps,
//     null
//   )(carouselComponent);

//   const mapStateToProps = state => ({
//     ...state,
//     tiles: state.tiles
//     // profile: state.profile
//   });
