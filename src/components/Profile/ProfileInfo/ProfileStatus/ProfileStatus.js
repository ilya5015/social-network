import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    statusText: "Hi there",
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

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
