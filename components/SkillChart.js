import React, { Component } from 'react'
import {VictoryPolarAxis, VictoryBar, VictoryChart } from 'victory'
import Button from './Button'
import {orange} from "../utils/colors";

const FrontEndSkills = [
    { x: 0, y: 28, name: "UI/UX Design" },
    { x: 1, y: 55, name: "HTML/CSS" },
    { x: 2, y: 58, name: "React" },
    { x: 3, y: 48, name: "SPA & PWA" },
    { x: 4, y: 45, name: "Webpack" },
    { x: 5, y: 59, name: "Javascript" }
]

const BackendSkills = [
    { x: 0, y: 51, name: "Microservices" },
    { x: 1, y: 60, name: "Node" },
    { x: 2, y: 60, name: "Java" },
    { x: 3, y: 38, name: "Cloud Services" },
    { x: 4, y: 43, name: "DB Design" },
    { x: 5, y: 49, name: "API Dev" }
]

export default class SkillChart extends Component {
    state = {
        backend: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounted: true }), 1000)
    }

    renderControls() {
        return (
        <div className="controls">
            <Button pressed={this.state.mounted && !this.state.backend} onClick={() => this.setState({ backend : false })}>Frontend</Button>
            <Button pressed={this.state.mounted && this.state.backend} onClick={() => this.setState({ backend : true })}>Backend</Button>
              { /*language=CSS*/ }
              <style jsx>{`
                  .controls {
                      display: flex;
                      align-items: center;
                      position: relative;
                  }
              `}</style>
        </div>
        )
    }

    renderPolarGraph() {
        const data = this.state.backend ? BackendSkills : FrontEndSkills
        return (
            <div>
                <VictoryChart polar
                >
                    {
                        data.map(({name}, i) => {
                            return (
                                <VictoryPolarAxis dependentAxis
                                                  key={i}
                                                  label={name}
                                                  labelPlacement="perpendicular"
                                                  style={{ tickLabels: { fill: "none" }, axisLabel: { fontSize: 20 } }}
                                                  axisValue={i}
                                />
                            );
                        })
                    }
                    <VictoryBar
                        style={{ data: { fill: orange, width: 25 } }}
                        data={data}
                        animate={{ duration: 500, easing: "elasticInOut" }}
                        key={this.state.backend ? 1 : 2}
                    />
                </VictoryChart>
            </div>
        )
    }

    render() {
        return (
            <div className="chart">
                { /*language=CSS*/ }
                <style jsx>{`
                    .chart {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                `}</style>
                {this.renderControls()}
                {
                    this.renderPolarGraph()
                }
            </div>
        )
    }
}