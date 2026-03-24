const gray = "rgb(228, 230, 235)";
const green = "rgb(73, 251, 53)";
const black = "rgb(40, 40, 40)";
var board = [];
var pickSet = [];
var pickSetCounter = 0;
var isOneTileSelected = false;
var currentTile = 0;
const currentStreak = document.getElementById("currentStreak");
var currentStreakNum = 0;
const longestStreak = document.getElementById("longestStreak");
var longestStreakNum = 0;
var level = 1;

var emojis = [];

// 1
const emojisFaces = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "😚",
  "😙",
  "🥲",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "😮‍",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "😴",
  "😷",
  "🤒",
  "🤕",
  "🤮",
  "🤧",
  "🥴",
  "😵",
  "😵‍",
  "🤯",
  "🤠",
  "🥳",
  "🥸",
  "😎",
  "🤓",
  "🧐",
  "😕",
  "😟",
  "🙁",
  "☹️",
  "😮",
  "😯",
  "😲",
  "😳",
  "🥺",
  "😦",
  "😧",
  "😨",
  "😰",
  "😥",
  "😢",
  "😭",
  "😱",
  "😖",
  "😣",
  "😞",
  "😓",
  "😩",
  "😫",
  "🥱",
  "😤",
  "😡",
  "😠",
  "🤬",
  "😈",
  "👿",
  "💀",
  "☠️",
  "💩",
  "🤡",
  "👹",
  "👺",
  "👻",
  "👽",
  "👾",
  "🤖"
];

// 2
const emojisHands = [
  "👋",
  "🤚",
  "🖐️",
  "✋",
  "🖖",
  "👌",
  "🤌",
  "🤏",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍️"
];

// 3
const emojisClocks = [
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕡",
  "🕖",
  "🕢",
  "🕗",
  "🕣",
  "🕘",
  "🕤",
  "🕙",
  "🕥",
  "🕚",
  "🕦"
];

// 4
const emojisAnimalFaces = [
  "🙈",
  "🙉",
  "🙊",
  "🐵",
  "🦧",
  "🐶",
  "🐺",
  "🦊",
  "🦝",
  "🐱",
  "🦁",
  "🐯",
  "🐴",
  "🦄",
  "🐮",
  "🐷",
  "🐗",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐻",
  "🐨",
  "🐼",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾"
];

// 5
const emojisAnimalBodies = [
  "🐒",
  "🦍",
  "🐕",
  "🦮",
  "🐕‍",
  "🐩",
  "🐈",
  "🐅",
  "🐆",
  "🐎",
  "🦓",
  "🦌",
  "🦬",
  "🐂",
  "🐃",
  "🐄",
  "🐖",
  "🐏",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🐇",
  "🐿️",
  "🦫",
  "🦔",
  "🦇",
  "🦥",
  "🦦",
  "🦨",
  "🦘",
  "🦡"
];

// 6
const emojisBirds = [
  "🦃",
  "🐔",
  "🐓",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🕊️",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦤",
  "🦩",
  "🦚",
  "🦜"
];

// 7
const emojisReptiles = ["🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖"];

// 8
const emojisFish = [
  "🐳",
  "🐋",
  "🐬",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🦀",
  "🦞",
  "🦐",
  "🦑"
];

// 9
const emojisInsects = [
  "🐚",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🪲",
  "🐞",
  "🦗",
  "🪳",
  "🕷️",
  "🕸️",
  "🦂",
  "🦟",
  "🪰",
  "🪱"
];

// 10
const emojisFlowersTrees = [
  "💐",
  "🌸",
  "💮",
  "🏵️",
  "🌹",
  "🥀",
  "🌺",
  "🌻",
  "🌼",
  "🌷",
  "🌱",
  "🪴",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘️",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🍄",
  "🌰",
  "🎄",
  "🎋",
  "🎍"
];

// 11
const emojisSpace = [
  "🌍",
  "🌎",
  "🌏",
  "🌐",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🌚",
  "🌛",
  "🌜",
  "☀️",
  "🌞",
  "⭐",
  "🌟",
  "🌠",
  "☄️"
];

// 12
const emojisWeather = [
  "☁️",
  "⛅",
  "⛈️",
  "🌤️",
  "🌥️",
  "🌦️",
  "🌧️",
  "🌨️",
  "🌩️",
  "🌪️",
  "🌫️",
  "🌬️",
  "🌈",
  "☂️",
  "☔",
  "⚡",
  "❄️",
  "☃️",
  "⛄",
  "🔥",
  "💧",
  "🌊"
];

// 13
const emojisPeopleFantasy = [
  "🦸‍♂️",
  "🦸‍♀️",
  "🦹‍♂️",
  "🦹‍♀️",
  "🧙‍♂️",
  "🧙‍♀️",
  "🧚‍♂️",
  "🧛‍",
  "🧜‍♂️",
  "🧜‍♀️",
  "🧝‍♂️",
  "🧝‍♀️",
  "🧞‍♂️",
  "🧞‍♀️",
  "🧟‍♂️",
  "💆‍",
  "💇‍"
];

// 14
const emojisItems = [
  "🧳",
  "🌂",
  "☂️",
  "🎃",
  "🧵",
  "🧶",
  "👓",
  "🕶️",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🎒",
  "🩴",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "🪖",
  "⛑️",
  "💄",
  "💍",
  "💼"
];

// 15
const emojisGames = [
  "🎪",
  "🛹",
  "🛼",
  "🛶",
  "🎗️",
  "🎟️",
  "🎫",
  "🎖️",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🎳",
  "🏒",
  "🥍",
  "🏓",
  "🏸",
  "🥊",
  "🥋",
  "🥅",
  "⛳",
  "⛸️",
  "🎣",
  "🎽",
  "🎿",
  "🛷",
  "🥌",
  "🎯",
  "🎱",
  "🎮",
  "🎰",
  "🎲",
  "🧩",
  "♟️",
  "🎭",
  "🎨",
  "🧵",
  "🧶",
  "🎼",
  "🏹"
];

// 16
const emojisHearts = [
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣️",
  "💔",
  "❤️‍🩹",
  "❤️‍🔥",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍"
];

// 17
const emojisSigns = [
  "⚠️",
  "🚸",
  "⛔",
  "🚫",
  "🚳",
  "🚭",
  "🚯",
  "🚱",
  "🚷",
  "📵",
  "🔞",
  "☢️",
  "☣️"
];

// 18
const emojisArrows = [
  "⬆️",
  "↗️",
  "➡️",
  "↘️",
  "⬇️",
  "↙️",
  "⬅️",
  "↖️",
  "↩️",
  "↪️",
  "⤴️",
  "⤵️",
  "🔃"
];

// 19
const emojisPurpleSigns = [
  "🛐",
  "⚛️",
  "🕉️",
  "✡️",
  "☸️",
  "☯️",
  "✝️",
  "☦️",
  "☪️",
  "☮️",
  "🕎",
  "🔯",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎"
];

// 20
const emojisPlayButtons = [
  "🔀",
  "🔁",
  "🔂",
  "▶️",
  "⏩",
  "⏭️",
  "⏯️",
  "◀️",
  "⏪",
  "⏮️",
  "🔼",
  "⏫",
  "🔽",
  "⏬",
  "⏸️",
  "⏹️",
  "⏺️",
  "⏏️",
  "🎦"
];

// 21
const emojisDrinks = [
  "🍯",
  "🍼",
  "🥛",
  "☕",
  "🫖",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🥤",
  "🧋",
  "🧃"
];

// 22
const emojisFruits = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🫐",
  "🥝",
  "🍅",
  "🫒",
  "🥥",
  "🥑",
  "🍆"
];

// 23
const emojisOtherFoods = [
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🫑",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🍄",
  "🥜",
  "🍞",
  "🥐",
  "🥖",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🥚",
  "🍿"
];

// 24
const emojisDesserts = [
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭"
];

function initializeBoard() {
  for (let i = 1; i <= 42; i++) {
    let x = "tile" + i;
    let y = document.getElementById(x);
    y.innerHTML = "";
    y.style.backgroundColor = gray;
    y.style.borderColor = gray;
    y.classList.toggle("fade");
  }
}

function initializeBoardFirst() {
  for (let i = 1; i <= 42; i++) {
    let x = "tile" + i;
    let y = document.getElementById(x);
    y.innerHTML = "";
    y.style.backgroundColor = gray;
    y.style.borderColor = gray;
  }
// Now shuffle emoji classes and prevent repeats for Cam
  for (let j = 0; j < 24; j++) {
    pickSet[j] = j;
  }
  for (let i = pickSet.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pickSet[i];
    pickSet[i] = pickSet[j];
    pickSet[j] = temp;
  }
}

function getRandEmoji() {
  do {
    rand = Math.floor(Math.random() * (emojis.length + 1));
  } while (emojis[rand] === undefined);
  return emojis[rand];
}

function randomizeEmojiSet() {
  switch (pickSet[pickSetCounter]) {
    case 0:
      emojis = emojisFaces;
      break;
    case 1:
      emojis = emojisHands;
      break;
    case 2:
      emojis = emojisClocks;
      break;
    case 3:
      emojis = emojisAnimalFaces;
      break;
    case 4:
      emojis = emojisAnimalBodies;
      break;
    case 5:
      emojis = emojisBirds;
      break;
    case 6:
      emojis = emojisReptiles;
      break;
    case 7:
      emojis = emojisFish;
      break;
    case 8:
      emojis = emojisInsects;
      break;
    case 9:
      emojis = emojisFlowersTrees;
      break;
    case 10:
      emojis = emojisSpace;
      break;
    case 11:
      emojis = emojisWeather;
      break;
    case 12:
      emojis = emojisPeopleFantasy;
      break;
    case 13:
      emojis = emojisItems;
      break;
    case 14:
      emojis = emojisGames;
      break;
    case 15:
      emojis = emojisHearts;
      break;
    case 16:
      emojis = emojisSigns;
      break;
    case 17:
      emojis = emojisArrows;
      break;
    case 18:
      emojis = emojisPurpleSigns;
      break;
    case 19:
      emojis = emojisPlayButtons;
      break;
    case 20:
      emojis = emojisDrinks;
      break;
    case 21:
      emojis = emojisFruits;
      break;
    case 22:
      emojis = emojisOtherFoods;
      break;
    case 23:
      emojis = emojisDesserts;
      break;
    default:
      emojis = emojisFaces;
  }
}

function setBoard() {
  randomizeEmojiSet();
  for (let i = 0; i <= 20; i++) {
    board[i] = getRandEmoji();
    board[i + 21] = board[i];
  }
  shuffleBoard(board);
  for (let j = 1; j <= 42; j++) {
    let x = "tile" + j;
    let y = document.getElementById(x);
    y.innerHTML = board[j - 1];
  }
}

function shuffleBoard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  isOneTileSelected = false;
  currentTile = 0;
}

function play(tile) {
  let x = "tile" + tile;
  let selectedTile = document.getElementById(x);
  if (selectedTile.innerHTML === "") {
    return;
  }
  if (tile === currentTile) {
    return;
  }
  if (isOneTileSelected === false) {
    selectedTile.style.borderColor = green;
    isOneTileSelected = true;
    currentTile = tile;
    return;
  }
  let y = "tile" + currentTile;
  let tileToCheck = document.getElementById(y);
  if (selectedTile.innerHTML === tileToCheck.innerHTML) {
    selectedTile.style.borderColor = green;
    selectedTile.classList.toggle("fade");
    // selectedTile.innerHTML = "";
    tileToCheck.classList.toggle("fade");
    currentStreakNum++;
    updateScoreboard();
    isOneTileSelected = false;
    currentTile = 0;
    return;
  } else if (selectedTile.innerHTML !== tileToCheck.innerHTML) {
    tileToCheck.style.borderColor = gray;
    currentStreakNum = 0;
    updateScoreboard();
    currentTile = 0;
    isOneTileSelected = false;
    return;
  }
}

function updateScoreboard() {
  currentStreak.innerHTML = currentStreakNum;
  if (currentStreakNum > longestStreakNum) {
    longestStreakNum++;
    longestStreak.innerHTML = longestStreakNum;
  }
}

function testLevelComplete() {
  for (let i = 1; i <= 42; i++) {
    let x = "tile" + i;
    let y = document.getElementById(x);
    let z = window.getComputedStyle(y).getPropertyValue("opacity");
    if (z !== "0") {
      return;
    }
  }
  level++;
  if (pickSetCounter === 23) pickSetCounter = 0;
  else pickSetCounter++;
  let newLevel = document.getElementById("level");
  newLevel.innerHTML = "Level: " + level;
  isOneTileSelected = false;
  initializeBoard();
  setBoard();
  return;
}

for (let i = 1; i <= 42; i++) {
  document.getElementById("tile" + i).addEventListener("click", function () {
    play(i);
  });
}

initializeBoardFirst();
setBoard();
setInterval(testLevelComplete, 100);
