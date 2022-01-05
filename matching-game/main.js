import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import './style.css';

import ScoreBoard from './src/object/ScoreBoard';
import BoardGame from './src/object/BoardGame';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforebegin',
  `
        ${ScoreBoard()}
        ${BoardGame(2)}
    `
);
