import { Component } from 'react';
import Skill from "./Skill";
import {chineseViolet, darkerShade, lightShade} from "../utils/colors";
import {darkerBoard} from "../images/svgBackgrounds";

export default class Skills extends Component {
  state = {
    value: 0,
  };

  renderFrontEndSkills() {
    return (
      <div>
        <Skill
          level={100}
          name="HTML/CSS"
          tip="6 years of experience"
        />
        <Skill
          level={95}
          name="Javascript"
          tip="6 years of experience"
        />
        <Skill
          level={94}
          name="React"
          tip="5 years of experience"
        />
        <Skill
          level={90}
          name="Webpack"
          tip="5 years of experience"
        />
        <Skill
          level={85}
          name="SPA & PWA"
          tip="5 years of experience"
        />
        <Skill
          level={50}
          name="React Native"
          tip="1 year of experience"
        />
        <Skill
          level={20}
          name="UI/UX Design"
          tip="Self taught & 1 year of experience"
        />
      </div>
    )
  }

  renderBackend() {
    return (
      <div>
        <Skill
          level={95}
          name="Node.js"
          tip="5 years of experience"
        />
        <Skill
          level={94}
          name="Java"
          tip="7 years of experience"
        />
        <Skill
          level={90}
          name="Service-oriented Architecture"
          tip="3 years of experience"
        />
        <Skill
          level={85}
          name="Cloud Services"
          tip="Google/Firebase, Now, AWS. 3 years of experience"
        />
        <Skill
          level={50}
          name="Machine Learning"
          tip="Master of Science in AI & 2 years of experience"
        />
        <Skill
          level={50}
          name="Database Design"
          tip="MySQL, PostgreSQL, MongoDB, Firebase"
        />
      </div>
    )
  }

  renderGeneral() {
    return (
      <div>
        <Skill
          level={85}
          name="Document-driven Development"
          tip="5 years of experience"
        />
        <Skill
          level={60}
          name="Test-driven Development"
          tip="5 years of experience"
        />
        <Skill
          level={50}
          name="Agile Development Leadership/Management"
          tip="2 years of experience"
        />
        <Skill
          level={20}
          name="User-driven Development"
          tip="2 years of experience"
        />
      </div>
    )
  }

  condRenderInner() {
    if (this.state.value === 0) {
      return this.renderFrontEndSkills()
    } else if (this.state.value === 1) {
      return this.renderBackend()
    } else if (this.state.value === 2) {
      return this.renderGeneral()
    }
  }

  renderControl(value, label) {
    const isActive = this.state.value === value;
    const isRightAdjacentToActive = this.state.value - value === 1;
    const isLeftAdjacentToActive = value - this.state.value === 1;
    return (
      <span className="control" onClick={() => { this.setState({ value })}}>
        {label}
        { /*language=CSS*/ }
        <style jsx>
          {`
              .control {
              font-size: 1.2rem;
              padding: .5em 0;
              display: flex;
                  justify-content: center;
                  align-items: center;
                  flex: 1;
                  cursor: pointer;
                  background: ${ isActive ? lightShade : darkerShade};
                  transition: all 300ms;
                  color: ${ isActive ? darkerShade : lightShade};
                  border-radius: 0 0 ${isRightAdjacentToActive ? "5px" : 0 } ${isLeftAdjacentToActive ? "5px" : 0 };
              }
              ${ value === 1 ? `border-left: 1px solid white;
                                border-right: 1px solid white;` : ""}
          `}
        </style>
      </span>
    )
  }

  render() {

    return (
      <div className="container">
        <div className="top">
          <div className="controls">
            {this.renderControl(0, "Front End")}
            {this.renderControl(1, "Back End")}
            {this.renderControl(2, "General")}
          </div>
        </div>
        <div className="inner">
          {this.condRenderInner()}
        </div>
        { /*language=CSS*/ }
        <style jsx>
          {`
              .container {
              }
              .controls {
                  display: flex;
                  justify-content: space-around;
                  flex: 1;
                  font-weight: 700;
              }
              .skill-title {
                  font-size: 1.75rem;
                  margin-bottom: .2em;
                  font-weight: 500;
                  line-height: 1.2;
              }
              .inner {
                  padding: 10px 20px;
                  background-color: ${lightShade};
              }
              .top {
                  display: flex;
              }
          `}
        </style>
      </div>
    );
  }
}
