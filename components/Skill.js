import { Component } from 'react';
import Popover from 'react-popover';
import Transition from 'react-transition-group/Transition';

import {darkAccent, darkerShade, darkShade, lightAccent, mainBrand, mainBrandText} from "../utils/colors";
import {darkerShadeEyes} from "../images/svgBackgrounds";

const duration = 600;


const getWidth = (state) => {
  if (state === 'entering' || state === 'exited') {
    return 0;
  }
  if (state === 'entered' || state === 'exiting') {
    return 100;
  }
};

const getOpacity = (state) => {
  if (state === 'entering' || state === 'exited') {
    return 0;
  }
  if (state === 'entered' || state === 'exiting') {
    return 1;
  }
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration} appear>
    {(state) => (
      <div className="default container">
        {children}
        { /*language=CSS*/ }
        <style jsx>{`
            .default {
                transition: all ${duration}ms ease-in-out;
            }
            .container {

                width: ${getWidth(state)}%;
                opacity: ${getOpacity(state)}
            }
        `}</style>
      </div>
    )}
  </Transition>
);


export default class Skill extends Component {
  state = { };
  toggleOpen = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  close = () => {
    this.setState({ open: false });
  }

  open = () => {
    this.setState({ open: true });
  }

  render() {
    return (
      <div className="row" onClick={this.toggleOpen} onMouseEnter={this.open}
            onMouseLeave={this.close} >
        <div className="name-and-level">
          <Popover
            isOpen={this.state.open}
            preferPlace="right"
            body={this.props.tip}
          >
          <div className="name">{this.props.name}</div>
          </Popover>
          <Fade in key={this.props.name}>
              <div className="level"/>
            </Fade>

        </div>
        { /*language=CSS*/ }
        <style jsx>{`
            .level {
                background: ${darkerShadeEyes};
                width: ${this.props.level}%;
                height: 10px;
                margin: .2em 0;
border-radius: 2px;
                box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            }
            .name {
                display: inline-block;
            }
            .row {
                display: flex;
                align-items: center;
                margin-top: .4em;
                color: ${darkerShade};
            }
            .withTip {
                cursor: pointer;
            }

            .name-and-level {
                width: 90%;
                font-weight: bold;
            }
        `}</style>
      </div>
    );
  }
}
