import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loadOverlay.style.css';

class LoadOverlay extends React.Component{

    render(){
        return(
            <div className="load-overlay">
                <CircularProgress />
            </div>
        )
    }
}

export default LoadOverlay;