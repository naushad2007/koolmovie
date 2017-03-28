import React from 'react';
import Classnames from 'classnames';
import css from '../../css/material-icons.pcss';
import loadercss from '../../css/loader.pcss';
import Styles from '../../css/MovieFull.pcss';
import GenreList from './GenreList';
import Details from './Details';

class FullView extends React.Component {
  constructor() {
    super();
    this.state = {
      img_loaded: false,
    }
  }

  render() {
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = this.props.config.images.backdrop_sizes[3];
    const { title, tagline, overview, backdrop_path, genres, vote_average} = this.props.data;

    let imageClasses = Classnames({
      [Styles.image]: true,
      [Styles.loaded]: this.state.img_loaded,
    });

    return (
      <div>
        <div className={Styles.imagecontainer}>
          {!this.state.img_loaded && <div className="loader"></div>}
          <img onLoad={ e => this.setState({ img_loaded: true })}
            onError={ e => this.setState({ img_loaded: true })}
            className={imageClasses}
            src={imageBaseUrl + fileSize + backdrop_path}
          />
        </div>
        <div className="container">
          <h1 className={Styles.title}>{title}</h1>
          <h2 className={Styles.tagline}>{tagline}</h2>
          <div className={Styles.info}>
            <GenreList genres={genres} />
            <div className={Styles.overview}>
              <p>{overview}</p>
            </div>
            <Details details={this.props.data}/>
            <div className={Styles.score}>
              <span>{vote_average}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FullView;