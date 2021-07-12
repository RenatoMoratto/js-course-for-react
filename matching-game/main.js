import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import './style.css';

import BoardGame from './src/object/BoardGame';
import ScoreBoard from './src/object/ScoreBoard';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    'beforebegin', 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);
