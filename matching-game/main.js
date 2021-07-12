import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import './style.css';

import BoardGame from './src/object/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
// const $hmtlPlayerName = PlayerName(1) + PlayerName(2);

// $root.insertAdjacentHTML('beforebegin', $hmtlPlayerName);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

