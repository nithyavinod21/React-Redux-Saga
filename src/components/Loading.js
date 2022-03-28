import imgSrc from '../logo.svg';

import {connect} from 'react-redux'

let Loading = ({loading}) =>{
  return(
    loading
    ?
    <div>
    <h1>Data is Loading...</h1>
    <img src={imgSrc} alt="loader image" width="100" height="100" />
    </div>
    :null

  )
}

const mapStateToProps = (state) => (
    {
        loading:state.loading
    }
)

Loading = connect(mapStateToProps,null) (Loading);

export default Loading;