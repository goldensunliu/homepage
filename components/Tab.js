import React, {Component} from 'react'

import Skills from './Skills'
import {darkerShade, lightShade} from "../utils/colors";
import {darkerBoard} from "../images/svgBackgrounds";

const Exp = (
  <div className="info">
    <div><b>Experienced in:</b></div>
    <div className="bullets">Developing high-performance scalable services handling millions of users</div>
    <div className="bullets">Building and designing fast responsive delightful web applications</div>
    <div className="bullets">Leading and managing agile development in both start-up and corporate environments</div>
    { /*language=CSS*/ }
    <style jsx>{`
        .bullets {
            margin-left: .5em;
            margin-bottom: .3em;
        }
    `}</style>
  </div>

);

export default class Tab extends Component {
  state = { details: true }
  render() {
    return (
      <div className="container">
        <div className="summary card">
          <div className="whoami">
             Who Am I?
          </div>
          <div className="descr">
            <div className="loves">
              A lead web software engineer with years of experience building products for start-up and corporation loves:
            </div>
            <div className="passion">Creating user-center designs</div>
            <div className="passion">Building delightful and rich UX</div>
            <div className="passion">Developing open-source software</div>
          </div>
        </div>
        <div className="skills card">
          <Skills/>
        </div>
        { /*language=CSS*/ }
        <style jsx>{`
            .container {
                display: flex;
                justify-content: space-around;
            }
            .loves {
                margin-bottom: .5em;
            }

            .passion {
                border-bottom: 2px solid white;
                padding: .5em 1em;
            }

            .summary {
                width: 500px;
                flex: 1;
                box-sizing: border-box;
                margin-right: 1.5em;
                padding: 20px;
                font-weight: 700;
                color: white;
                background: ${darkerBoard}
            }

            .whoami {
                font-size: 1.825em;
                margin-bottom: .6em;
                font-weight: 700;
                display: flex;
                justify-content: space-between;
            }

            .descr {
                line-height: 1.5;
                font-size: 1.2em;
            }

            .skills {
                flex: 1;
                width: 500px;
                font-size: 1.1em;
                overflow: hidden;
                background-color: ${lightShade};
            }

            @media screen and (max-width: 900px) {
                .container {
                    flex-direction: column;
                    align-items: center;
                }

                .summary {
                    margin-right: 0;
                    margin-bottom: 1.5em;
                    max-width: 100%;
                }

                .skills {
                    max-width: 100%;
                }
            }

            @media screen and (max-width: 500px) {
                .summary {
                    font-size: 14px;
                }
            }
        `}</style>
      </div>
    )
  }
}