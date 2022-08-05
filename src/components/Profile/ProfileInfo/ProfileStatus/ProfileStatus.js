import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    statusText: this.props.userStatus,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        statusText: this.props.userStatus,
      });
    }
    console.log("bam");
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div
            onDoubleClick={() => {
              this.activateEditMode();
            }}
          >
            {this.state.statusText}
          </div>
        ) : (
          <div>
            <input
              value={this.state.statusText}
              autoFocus={true}
              onBlur={() => {
                this.deactivateEditMode();
              }}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
