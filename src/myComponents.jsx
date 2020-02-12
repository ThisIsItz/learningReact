import React, { Component } from 'react';

class UserComponents extends Component {
    render(){
        return (
            <div class="col-md-3 col-sm-6">
            <figure class="card " data-name="Jada Foulks">
              <img src={this.props.image} class="card-img-top" alt="Derrek Gaskin" />
              <div class="card-body">
                <h2 class="card-title">{this.props.name}</h2>
                <address class="card-text">{this.props.email}</address>
              </div>
              <button class="btn btn-primary">Greeting <span aria-label="greeting" role="img">  ✋ </span></button>
            </figure>
          </div>
        );
    }
}



export default UserComponents;