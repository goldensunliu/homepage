import css from 'styled-jsx/css'
import colors from '../utils/colors'
import Color from 'color'

const backGroundMenuColor = Color(colors.blue).darken(.5).hsl().string();
{ /*language=CSS*/ }
const styles = css`
body {
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif;
}
.bm-burger-button * {
    fill: ${backGroundMenuColor}
}

.Typist .Cursor {
  display: inline-block;
}
.Typist .Cursor--blinking {
  opacity: 1;
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

export default styles