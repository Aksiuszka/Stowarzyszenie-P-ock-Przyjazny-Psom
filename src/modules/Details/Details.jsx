import React from 'react'
import { Component } from 'react';
import {useParams} from 'react-router-dom';

class Details extends Component {
constructor(props){
  super(props);
  this.state = { loading: true};
}
render(){
    if(this.state.loading){
      return <h2>Ładuje się</h2>
    }
    const {animal, breed, description, name} = this.state;
    return(
      <div>
        <h2>{name}</h2>
        <h2>{animal} - {breed} - </h2>
      </div>
    )
}
}

export default Details