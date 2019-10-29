import React from 'react';

import './detail.style.css';

import DataService from '../../services/DataService';
import LoadOverlay from '../../components/LoadOverlay/loadOverlay.component';

const url = "https://apps.aecom-digital.com/excellence";
class DetailContainer extends React.Component {
    render() {
        let { project } = this.props;
        return (<div className="detail-dialog">
            <h1>{project.title}</h1>
            <p>{project.project_text}</p>
            <div
                className="project-image"
                style={{ backgroundImage: 'url("' + url + project.image.url + '")' }}
            ></div>
        </div>)
    }
}

export default DetailContainer;