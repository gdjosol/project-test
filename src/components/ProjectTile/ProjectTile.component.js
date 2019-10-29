import React from 'react';

import './ProjectTile.style.css';

const url = "https://apps.aecom-digital.com/excellence";


class ProjectTile extends React.Component {
    render() {
        return ( 
            <div className="project-tile" onClick={this.props.onClick}>
                <p>{this.props.name}</p>
                <div
                    className="project-image"
                    style={{ backgroundImage: 'url("' + url + this.props.image + '")' }}
                ></div>
            </div>
        )
    }
}

export default ProjectTile;