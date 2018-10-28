import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {darkerShade, darkShade, lightShade, mainBrand} from "../utils/colors";
import { withRouter } from 'next/router'

const DEFAULT_TITLE = "Software Engineer, Sitian Liu, Somerville, MA, USA";

const DEFAULT_DESCP = "Sitian Liu's home page. A lead web software engineer with years of experience building products for start-up and corporation. Contact me at goldensunliu@gmail.com for collaborations and opportunities";

const Header = ({router}) => (
      <div className="container">
        <div className="sitian">
        <Link href="/"><a className={router.pathname === "/" ? "active" : ""}>SitianLiu</a></Link>
        </div>
        <a className="link" href="https://medium.com/@sitianliu_57680">Blogs</a>
        <Link href="/projects"><a className={`link ${router.pathname === "/projects" ? "active" : ""}`}>Projects</a></Link>
        { /*language=CSS*/ }
        <style jsx>{`
            .container {
                display: flex;
                align-items: baseline;
                font-weight: 700;
                padding: .5em .5em;
                position: sticky;
                    top: 0;
                        margin-bottom: .3em;
                        background-color: ${mainBrand};
                        color: white;

            }
            .container :global(a) {
                color: white;
                text-decoration: none;
                margin-right: .75em;
            }
            .link {
                text-transform: uppercase;
            }
            .sitian {
                font-size: 1.5em;
                text-transform: capitalize;
            }
            .name {
                flex: 1;
            }
            .container .active {
                border-bottom: 2px solid white;
            }
        `}</style>
      </div>
    );

const RoutedHeader = withRouter(Header)


export default class Layout extends Component {
  static defaultProps = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCP
  };
  state = {}

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <link rel="icon" type="image/png" href="/static/favicon-16x16.png"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet"/>
          <meta name="description" content={this.props.description}/>
          <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <RoutedHeader/>
        <div className="body">
          {this.props.children}
        </div>
        { /*language=CSS*/ }
        <style jsx>{`
            .body {
                max-width: 1200px;
                margin: auto;
            }
        `}</style>
        { /*language=CSS*/ }
        <style jsx global>{`
            body {
                font-family: 'Roboto Slab', serif;
                color: #222222;
                background-color: ${darkShade};
                margin: 0;
            }
            .card {
                border-radius: 6px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            }
            .Popover {
                z-index: 2000;
            }
            .Popover-body {
                display: inline-flex;
                flex-direction: column;
                padding: .5rem 1rem;
                background: white;
                border-radius: 0.3rem;
                opacity: .95;
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
                font-size: 14px;
                color: ${darkerShade};
            }

            .Popover-tipShape {
                fill: ${mainBrand};
            }

            .Popover-white .Popover-tipShape {
                fill: #00bcd4;
            }

            .Popover-white .Popover-body {
                background: ${lightShade};
            }
        `}</style>
      </div>
    )
  }
}

