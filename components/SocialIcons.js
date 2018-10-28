import React, {Component} from 'react'
import GitIcon from '../images/github.svg'
import LinkedInIcon from '../images/linkedin.svg'
import TwitterIcon from '../images/twitter.svg'
import GmailIcon from '../images/gmail.svg'

const SocialIcons = () => (
  <div className="container">
    <a href="https://github.com/goldensunliu" className="icon github">
      <GitIcon/>
    </a>
    <a href="https://www.linkedin.com/in/sitian-liu/" className="icon linkedin">
      <LinkedInIcon/>
    </a>
    <a href="https://twitter.com/SitianLiu" className="icon twitter">
      <TwitterIcon/>
    </a>
    <a href="mailto:goldensunliu@gmail.com" className="icon gmail">
      <GmailIcon/>
    </a>
    { /*language=CSS*/ }
    <style jsx>{`
        .linkedin {
            background-color: #0077B5;
        }
        .github {
            background-color: #181717;
        }
        .twitter {
            background-color: #1DA1F2;
        }
        .gmail {
            background-color: #D14836;
        }
        .icon {
            height: 2rem;
            width: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .2em;
            border-radius: 2px;
            box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
        }
        .icon :global(svg){
            fill: white;
            height: 1.5rem;
            width: 1.5rem;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row-reverse;
        }
    `}</style>
  </div>
);

export default SocialIcons