import React, { Component } from "react";

import Teacher from "./Teacher";
// React 16 lets you decide if state gets updated via setState to prevent unnecessary re-renders.
// In your events, you can check if the new value of state is the same as the existing one.
// If the values are the same, you can return null and it won’t re-render a component.

class App extends Component {
  state = {
    teacher: "",
  };

  // the state of teacher is only updated in setState if teacher has changed.
  // If not, the Teacher component is not rendered.
  updateTeacher = (teacher) => {
    const newTeacher = teacher;
    this.setState((state) => {
      if (state.teacher === newTeacher) {
        return null;
      } else {
        return { teacher };
      }
    });
  };

  render() {
    const teachers = ["jay", "vivianne", "ecma", "json"];

    return (
      <div className="App">
        <header>
          <h1>Meet the Teachers</h1>
          {teachers.map((teacher, i) => (
            <button
              key={teacher}
              type="button"
              value={teacher}
              onClick={(e) => this.updateTeacher(e.target.value)}
            >
              {teacher}
            </button>
          ))}
        </header>

        <Teacher teacher={this.state.teacher} />
      </div>
    );
  }
}

export default App;
