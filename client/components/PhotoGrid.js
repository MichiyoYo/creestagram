import React from "react";
import Photo from "./Photo";

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} {...this.props} i={index} post={post} />
        ))}
      </div>
    );
  },
});

export default PhotoGrid;
