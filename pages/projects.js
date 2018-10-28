import React, {Component} from 'react'
import Layout from '../components/Layout'
import {darkerShade, lightAccent, lightShade} from "../utils/colors";
import {darkerBoard} from "../images/svgBackgrounds";

export default class HomePage extends Component {
    state = { openMenu: false }
    render() {
        return (
          <Layout>
            <div className="container">
              <div className="card">
                <a className="title" href="https://soundforspotify.com/">
                  Sound For Spotify
                </a>
                <div className="body">
                  <div className="bullet">
                    Discover musical listening preferences
                  </div>
                  <div className="bullet">
                    Explore genres and their algorithmically-generated playlists
                  </div>
                  <div className="bullet">
                    Powered by Spotify Data
                  </div>
                  <a className="bullet" href="https://medium.com/p/4f516836e4ec">
                    Blog post
                  </a>
                  </div>
              </div>
              <div className="card">
                <a className="title" href="https://out-bqkxoqnwce.now.sh/">
                  Optimal Color Palette Picker
                </a>
                <div className="body">
                   <div className="bullet">Picks the optimal color palette of any image</div>
                  <div className="bullet">Mobile-first</div>
                  <div className="bullet">Accounts for human perceived difference in colors</div>
                  <div className="bullet">Powered by clustering algorithm</div>
                  <a className="bullet" href="https://medium.com/p/ef1342da8b4f">
                    Blog post
                  </a>
                </div>
              </div>
              <div className="card">
                <a className="title" href="https://sudoku.sitianliu.com/">
                  Best Sudoku Game
                </a>
                <div className="body">
                  <div className="bullet">Offline ready</div>
                  <div className="bullet">Dynamic board generation</div>
                  <div className="bullet">Packed with user-friendly features</div>
                  <a className="bullet" href="https://medium.com/p/ca663915712">
                    Blog post
                  </a>
                </div>
              </div>
              <div className="card">
                <a className="title" href="https://spotify-recommendation.sitianliu.com/">
                  Spotify Playlist Generator
                </a>
                <div className="body">
                  <div className="bullet">Create a playlist-style listening experience on the go</div>
                  <div className="bullet">Search Spotify catalog for seed artists and tracks</div>
                  <div className="bullet">Tunable targeting track attributes like energy and danceability</div>
                </div>
              </div>
              <div className="card">
                <a className="title" href="https://github.com/goldensunliu">
                  Node Packages
                </a>
                <div className="body">
                  <div className="bullet"><a href="https://github.com/goldensunliu">graphql-spotify</a> - GraphQL Schema And Resolvers For Spotify Web API</div>
                  <div className="bullet"><a href="https://github.com/goldensunliu">major-colors</a> - Color quantization using kmeans+++ and CIEDE2000 </div>
                </div>
              </div>
            </div>
            { /*language=CSS*/ }
            <style jsx>{`
                .card {
                    background: ${lightShade};
                    padding: 20px;
                    width: 300px;
                   color: ${darkerShade};
                   margin: 1.5em;
                }
                .body {
                    min-height: 100px;
                    overflow-y: auto;
                }
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    margin-top: 20px;
                }
                .below {
                    width: 100%;
                }
                .bullet {
                    padding: .25em .5em;
                    font-size: .85em;
                    display: block;
                    border-bottom: 1px solid ${lightAccent};
                }
                .bullet:last-child {
                    border-bottom: none;
                }
                .title {
                color: white;
                font-weight: bold;
                display: block;
                text-decoration: none;
                background: ${darkerBoard} ;
                text-align: center;
    padding: 10px;
    border-radius: 6px;
    font-size: 1.75em;
                        box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    margin-top: -35px;
    margin-bottom: 15px;
                }
            `}</style>
          </Layout>
        )
    }
}