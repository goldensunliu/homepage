import React, { Component } from 'react'
import Color from 'color'
import colors from '../utils/colors'

export default class Button extends Component {
    static defaultProps = {
        color: 'blue'
    }
    render() {
        const color = colors[this.props.color]
        return (
            <div className={`btn ${ this.props.pressed && ' pressed'}`} onClick={this.props.onClick} onTouchStart={this.props.onClick}>
                { /*language=CSS*/ }
                <style jsx>{`
.btn {
  border-radius: 5px;
  padding: 10px 18px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.5em;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  transition: all .5s;
  ${this.props.style}
}

.btn:active, .btn.pressed {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0 1px 0 0;
  background-color: #FBC02D;
}

.btn {
  background-color: ${color};
  box-shadow: 0 5px 0 0 ${Color(color).darken(.5).hsl().string()};
}

.btn:hover {
  background-color: ${Color("#FBC02D").lighten(.2).hsl().string()};
}
            `}</style>
                {this.props.children}
            </div>
        )
    }
}