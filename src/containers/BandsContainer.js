import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Bands from '../components/Bands'
// import {addBand} from '../actions/index'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/> 
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({
      type: 'ADD_BAND',
      band
    })
  }
}

export default connect(state => ({bands: state.bands}), mapDispatchToProps)(BandsContainer)
