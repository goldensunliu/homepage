import React, {Component} from 'react'
import Layout from '../components/Layout'
import Tab from '../components/Tab'
import SocialIcons from "../components/SocialIcons";
import {darkerShade, lightAccent, lightShade, mainBrand, mainBrandText} from "../utils/colors";

class Card extends Component {
  state = {}
  render() {
    return (
      <div className="iamcard card">
        <div className="info iamsection">
          <div className="iam">I am</div>
          <div className="name">Sitian Liu</div>
          <div className="icons">
            <SocialIcons/>
          </div>
          <div>Web Tinker</div>
        </div>
        <img src="/static/profilepic2.jpg"/>

        { /*language=CSS*/ }
        <style jsx>{`
            .iamcard {
                display: flex;
                align-items: center;
                color: ${darkerShade};
                max-width: 400px;
                height: 15em;
                margin-top: 3em;
                margin-bottom: 4.5em;
                background-color: ${lightShade};
            }
            img {
                height: 20em;
                margin-right: -30px;
                border-radius: 6px;
                box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            }
            @media screen and (max-width: 472px) {
                img {
                    margin-right: 0;
                }
            }
            @media screen and (max-width: 370px) {
                img {
                    height: 16em;
                }
            }
            .info {
                flex: 1;
                margin-right: .4em;
            }
            .iamsection {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: .5em;
                text-align: right;
            }
            .iam {
                font-size: 1.2em;
                color: ${mainBrandText};
            }
            .name {
                font-size: 2rem;
                line-height: 1.2;
                font-weight: 700;
                color: ${mainBrandText};
            }
            .bullets {
                margin-left: .5em;
                margin-bottom: .3em;
            }
            .icons {
            }
        `}</style>
      </div>
    )
  }
}

export default class HomePage extends Component {
    state = { openMenu: false }
    render() {
        return (
          <Layout>
            <div className="container">
              <Card/>
              <div className="below">
              <Tab/>
              </div>
            </div>
            { /*language=CSS*/ }
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 30px;
                }
            @media screen and (max-width: 400px) {
                .container {
                    padding: 8px;
                }
            }
                .below {
                    width: 100%;
                }
            `}</style>
          </Layout>
        )
    }
}