import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import './App.css';

import DataService from '../../services/DataService';
import LoadOverlay from '../../components/LoadOverlay/loadOverlay.component';
import ProjectTile from '../../components/ProjectTile/ProjectTile.component';
import Detail from '../Detail/detail.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: true,
      data: [],
      selectedData: {},
      dialogState: false
    }
  }

  async componentDidMount() {
    let data = await DataService.getProjects();
    console.log(data);
    if (data === {}) {
      // Data didn't load
    } else {
      // Data loaded
      console.log(data);
      this.setState({ loadState: false, data: data });
    }
  }

  _clickData = (data) => {
    this.setState({ selectedData: data, dialogState: true });
    console.log("called");
  }

  _closeDialog = () => {
    this.setState({ dialogState: false });
  }

  render() {
    let { loadState, data, dialogState, selectedData } = this.state;
    return (
      <div className="App">
        {loadState ? <LoadOverlay /> : null}
        {
          data.map(category => (
            <div className="category">
              <h1>{category.Category_title}</h1>
              <p>{category.Category_intro}</p>
              <div className="projects">
                {
                  category.projects.map(project => (
                    <ProjectTile onClick={() => this._clickData(project)} name={project.project_short_title} image={project.image.url} />
                  ))
                }
              </div>
            </div>
          ))
        }

        <Dialog
          open={dialogState}
          onClose={this._closeDialog}
        >
          <Detail project={selectedData} />
        </Dialog>

      </div>
    );
  }
}

export default App;
