const Sitian = () => (
  <div className="word word--swing">
    Sitian
    { /*language=CSS*/ }
    <style jsx>{`
        .word {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0;
            cursor: default;
            user-select: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            margin-top: .5em;
        }
        div { margin-bottom: .2em; }
        .word--swing {
            font-size: 11vw;
            font-family: 'Londrina Solid', serif;
            font-weight: 400;
            text-transform: uppercase;
            color: #0e0e19;
            line-height: 0.725;
            perspective: 800px;
        }

        .word--swing > :global(span:first-child) {
            color: #f44336;
        }

        .word--swing > :global(span:nth-child(2)) {
            color: #9C27B0;
        }

        .word--swing > :global(span:nth-child(3)) {
            color: #4CAF50;
        }

        .word--swing > :global(span:nth-child(4)) {
            color: #FFEB3B;
        }

        .word--swing > :global(span:nth-child(5)) {
            color: #FF9800;
        }

        .word--swing > :global(span:nth-child(6)) {
            color: #9C27B0;
        }

        .word--swing :global(svg) {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 450px;
            height: 510px;
            margin: -255px 0 0 -225px;
            pointer-events: none;
        }

        .word--swing :global(svg circle ){
            fill: currentColor;
            opacity: 0;
            transform-origin: 50% 50%;
        }

        .word--swing :global(span) {
            display: block;
            position: relative;
        }

        .word--swing :global(span span:first-of-type) {
            position: absolute;
        }

        .word--swing :global(span span:last-of-type) {
            transform-style: preserve-3d;
        }

        @media screen and (max-width: 50em) {
            .word.word--swing {
                font-size: 6em;
            }
        }
        @media (max-height: 660px) {
            div { margin-bottom: .1em; }
        }
    `}</style>
  </div>
);

export default Sitian