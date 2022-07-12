import React from 'react'


class Card extends React.Component {
  render() {
    return (
      <div className="card col-5">
        <img src={this.props.picture} className="card-img-top" alt="User" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.about}</p>
        </div>
      </div>
    )
  }
}

export default Card 