const formats = { // Locale dump -- https://stackoverflow.com/a/9893752
  'af-ZA': 'yyyy/MM/dd', // SOME OF THESE MAY BE OUTDATED
  'am-ET': 'd/M/yyyy',
  'ar-AE': 'dd/MM/yyyy',
  'ar-BH': 'dd/MM/yyyy',
  'ar-DZ': 'dd-MM-yyyy',
  'ar-EG': 'dd/MM/yyyy',
  'ar-IQ': 'dd/MM/yyyy',
  'ar-JO': 'dd/MM/yyyy',
  'ar-KW': 'dd/MM/yyyy',
  'ar-LB': 'dd/MM/yyyy',
  'ar-LY': 'dd/MM/yyyy',
  'ar-MA': 'dd-MM-yyyy',
  'ar-OM': 'dd/MM/yyyy',
  'ar-QA': 'dd/MM/yyyy',
  'ar-SA': 'dd/MM/yy',
  'ar-SY': 'dd/MM/yyyy',
  'ar-TN': 'dd-MM-yyyy',
  'ar-YE': 'dd/MM/yyyy',
  'arn-CL': 'dd-MM-yyyy',
  'as-IN': 'dd-MM-yyyy',
  'az-Cyrl-AZ': 'dd.MM.yyyy',
  'az-Latn-AZ': 'dd.MM.yyyy',
  'ba-RU': 'dd.MM.yy',
  'be-BY': 'dd.MM.yyyy',
  'bg-BG': 'dd.M.yyyy',
  'bn-BD': 'dd-MM-yy',
  'bn-IN': 'dd-MM-yy',
  'bo-CN': 'yyyy/M/d',
  'br-FR': 'dd/MM/yyyy',
  'bs-Cyrl-BA': 'd.M.yyyy',
  'bs-Latn-BA': 'd.M.yyyy',
  'ca-ES': 'dd/MM/yyyy',
  'co-FR': 'dd/MM/yyyy',
  'cs-CZ': 'd.M.yyyy',
  'cy-GB': 'dd/MM/yyyy',
  'da-DK': 'dd-MM-yyyy',
  'de-AT': 'dd.MM.yyyy',
  'de-CH': 'dd.MM.yyyy',
  'de-DE': 'dd.MM.yyyy',
  'de-LI': 'dd.MM.yyyy',
  'de-LU': 'dd.MM.yyyy',
  'dsb-DE': 'd. M. yyyy',
  'dv-MV': 'dd/MM/yy',
  'el-GR': 'd/M/yyyy',
  'en-029': 'MM/dd/yyyy',
  'en-AU': 'd/MM/yyyy',
  'en-BZ': 'dd/MM/yyyy',
  'en-CA': 'dd/MM/yyyy',
  'en-GB': 'dd/MM/yyyy',
  'en-IE': 'dd/MM/yyyy',
  'en-IN': 'dd-MM-yyyy',
  'en-JM': 'dd/MM/yyyy',
  'en-MY': 'd/M/yyyy',
  'en-NZ': 'd/MM/yyyy',
  'en-PH': 'M/d/yyyy',
  'en-SG': 'd/M/yyyy',
  'en-TT': 'dd/MM/yyyy',
  'en-US': 'M/d/yyyy',
  'en-ZA': 'yyyy/MM/dd',
  'en-ZW': 'M/d/yyyy',
  'es-AR': 'dd/MM/yyyy',
  'es-BO': 'dd/MM/yyyy',
  'es-CL': 'dd-MM-yyyy',
  'es-CO': 'dd/MM/yyyy',
  'es-CR': 'dd/MM/yyyy',
  'es-DO': 'dd/MM/yyyy',
  'es-EC': 'dd/MM/yyyy',
  'es-ES': 'dd/MM/yyyy',
  'es-GT': 'dd/MM/yyyy',
  'es-HN': 'dd/MM/yyyy',
  'es-MX': 'dd/MM/yyyy',
  'es-NI': 'dd/MM/yyyy',
  'es-PA': 'MM/dd/yyyy',
  'es-PE': 'dd/MM/yyyy',
  'es-PR': 'dd/MM/yyyy',
  'es-PY': 'dd/MM/yyyy',
  'es-SV': 'dd/MM/yyyy',
  'es-US': 'M/d/yyyy',
  'es-UY': 'dd/MM/yyyy',
  'es-VE': 'dd/MM/yyyy',
  'et-EE': 'd.MM.yyyy',
  'eu-ES': 'yyyy/MM/dd',
  'fa-IR': 'MM/dd/yyyy',
  'fi-FI': 'd.M.yyyy',
  'fil-PH': 'M/d/yyyy',
  'fo-FO': 'dd-MM-yyyy',
  'fr-BE': 'd/MM/yyyy',
  'fr-CA': 'yyyy-MM-dd',
  'fr-CH': 'dd.MM.yyyy',
  'fr-FR': 'dd/MM/yyyy',
  'fr-LU': 'dd/MM/yyyy',
  'fr-MC': 'dd/MM/yyyy',
  'fy-NL': 'd-M-yyyy',
  'ga-IE': 'dd/MM/yyyy',
  'gd-GB': 'dd/MM/yyyy',
  'gl-ES': 'dd/MM/yy',
  'gsw-FR': 'dd/MM/yyyy',
  'gu-IN': 'dd-MM-yy',
  'ha-Latn-NG': 'd/M/yyyy',
  'he-IL': 'dd/MM/yyyy',
  'hi-IN': 'dd-MM-yyyy',
  'hr-BA': 'd.M.yyyy.',
  'hr-HR': 'd.M.yyyy',
  'hsb-DE': 'd. M. yyyy',
  'hu-HU': 'yyyy. MM. dd.',
  'hy-AM': 'dd.MM.yyyy',
  'id-ID': 'dd/MM/yyyy',
  'ig-NG': 'd/M/yyyy',
  'ii-CN': 'yyyy/M/d',
  'is-IS': 'd.M.yyyy',
  'it-CH': 'dd.MM.yyyy',
  'it-IT': 'dd/MM/yyyy',
  'iu-Cans-CA': 'd/M/yyyy',
  'iu-Latn-CA': 'd/MM/yyyy',
  'ja-JP': 'yyyy/MM/dd',
  'ka-GE': 'dd.MM.yyyy',
  'kk-KZ': 'dd.MM.yyyy',
  'kl-GL': 'dd-MM-yyyy',
  'km-KH': 'yyyy-MM-dd',
  'kn-IN': 'dd-MM-yy',
  'ko-KR': 'yyyy. MM. dd',
  'kok-IN': 'dd-MM-yyyy',
  'ky-KG': 'dd.MM.yy',
  'lb-LU': 'dd/MM/yyyy',
  'lo-LA': 'dd/MM/yyyy',
  'lt-LT': 'yyyy.MM.dd',
  'lv-LV': 'yyyy.MM.dd.',
  'mi-NZ': 'dd/MM/yyyy',
  'mk-MK': 'dd.MM.yyyy',
  'ml-IN': 'dd-MM-yy',
  'mn-MN': 'yy.MM.dd',
  'mn-Mong-CN': 'yyyy/M/d',
  'moh-CA': 'M/d/yyyy',
  'mr-IN': 'dd-MM-yyyy',
  'ms-BN': 'dd/MM/yyyy',
  'ms-MY': 'dd/MM/yyyy',
  'mt-MT': 'dd/MM/yyyy',
  'nb-NO': 'dd.MM.yyyy',
  'ne-NP': 'M/d/yyyy',
  'nl-BE': 'd/MM/yyyy',
  'nl-NL': 'd-M-yyyy',
  'nn-NO': 'dd.MM.yyyy',
  'nso-ZA': 'yyyy/MM/dd',
  'oc-FR': 'dd/MM/yyyy',
  'or-IN': 'dd-MM-yy',
  'pa-IN': 'dd-MM-yy',
  'pl-PL': 'dd.MM.yyyy',
  'prs-AF': 'dd/MM/yy',
  'ps-AF': 'dd/MM/yy',
  'pt-BR': 'd/M/yyyy',
  'pt-PT': 'dd-MM-yyyy',
  'qut-GT': 'dd/MM/yyyy',
  'quz-BO': 'dd/MM/yyyy',
  'quz-EC': 'dd/MM/yyyy',
  'quz-PE': 'dd/MM/yyyy',
  'rm-CH': 'dd/MM/yyyy',
  'ro-RO': 'dd.MM.yyyy',
  'ru-RU': 'dd.MM.yyyy',
  'rw-RW': 'M/d/yyyy',
  'sa-IN': 'dd-MM-yyyy',
  'sah-RU': 'MM.dd.yyyy',
  'se-FI': 'd.M.yyyy',
  'se-NO': 'dd.MM.yyyy',
  'se-SE': 'yyyy-MM-dd',
  'si-LK': 'yyyy-MM-dd',
  'sk-SK': 'd. M. yyyy',
  'sl-SI': 'd.M.yyyy',
  'sma-NO': 'dd.MM.yyyy',
  'sma-SE': 'yyyy-MM-dd',
  'smj-NO': 'dd.MM.yyyy',
  'smj-SE': 'yyyy-MM-dd',
  'smn-FI': 'd.M.yyyy',
  'sms-FI': 'd.M.yyyy',
  'sq-AL': 'yyyy-MM-dd',
  'sr-Cyrl-BA': 'd.M.yyyy',
  'sr-Cyrl-CS': 'd.M.yyyy',
  'sr-Cyrl-ME': 'd.M.yyyy',
  'sr-Cyrl-RS': 'd.M.yyyy',
  'sr-Latn-BA': 'd.M.yyyy',
  'sr-Latn-CS': 'd.M.yyyy',
  'sr-Latn-ME': 'd.M.yyyy',
  'sr-Latn-RS': 'd.M.yyyy',
  'sv-FI': 'd.M.yyyy',
  'sv-SE': 'yyyy-MM-dd',
  'sw-KE': 'M/d/yyyy',
  'syr-SY': 'dd/MM/yyyy',
  'ta-IN': 'dd-MM-yyyy',
  'te-IN': 'dd-MM-yy',
  'tg-Cyrl-TJ': 'dd.MM.yy',
  'th-TH': 'd/M/yyyy',
  'tk-TM': 'dd.MM.yy',
  'tn-ZA': 'yyyy/MM/dd',
  'tr-TR': 'dd.MM.yyyy',
  'tt-RU': 'dd.MM.yyyy',
  'tzm-Latn-DZ': 'dd-MM-yyyy',
  'ug-CN': 'yyyy-M-d',
  'uk-UA': 'dd.MM.yyyy',
  'ur-PK': 'dd/MM/yyyy',
  'uz-Cyrl-UZ': 'dd.MM.yyyy',
  'uz-Latn-UZ': 'dd/MM yyyy',
  'vi-VN': 'dd/MM/yyyy',
  'wo-SN': 'dd/MM/yyyy',
  'xh-ZA': 'yyyy/MM/dd',
  'yo-NG': 'd/M/yyyy',
  'zh-CN': 'yyyy/M/d',
  'zh-HK': 'd/M/yyyy',
  'zh-MO': 'd/M/yyyy',
  'zh-SG': 'd/M/yyyy',
  'zh-TW': 'yyyy/M/d',
  'zu-ZA': 'yyyy/MM/dd',
};

const GAME_MODES = [
  'Standard',
  'Verify',
  'Blitz',
];

var GAME_START = null;
var GAME_DURATION = null;
var GAME_DATE = null;
var GAME_MIN = new Date(1900, 0, 1);
var GAME_MAX = new Date();
var GAME_LOCALE = navigator.language;
var GAME_MODE = GAME_MODES[0];
var GAME_SCORES = [];

var MODE_LIMIT = 1;
var MODE_ITERATOR = 0;

// https://www.w3schools.com/js/js_cookies.asp
function setCookie(key, value) {
  const end = new Date();
  end.setTime(end.getTime() + 400 * 24 * 60 * 60 * 1000); // Chrome's limit for cookies?
  let expires = 'expires=' + end.toUTCString();
  document.cookie = key + '=' + value + ';' + expires + ';path=/';
}

// https://www.w3schools.com/js/js_cookies.asp
function getCookie(key) {
  key = key + '=';
  let cookies = decodeURIComponent(document.cookie).split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(key) == 0) {
      return cookie.substring(key.length, cookie.length);
    }
  }
  return '';
}

function removeCookie(key) {
  if (getCookie(key)) {
    document.cookie = key + '=' + ';path=/;expires=' + (new Date(1970, 1, 1)).toUTCString();
  }
}

function loadBounds() {
  let min = getCookie('GAME_MIN');
  let max = getCookie('GAME_MAX');
  let locale = getCookie('GAME_LOCALE');
  if (min) {
    GAME_MIN = new Date(parseInt(min));
  }
  if (max) {
    GAME_MAX = new Date(parseInt(max));
  }
  if (locale) {
    GAME_LOCALE = locale;
  }
}

function saveMin(min = document.getElementById('min').valueAsDate.getTime()) {
  if (min) {
    setCookie('GAME_MIN', min);
  } else {
    removeCookie('GAME_MIN');
  }
}

function saveMax(max = document.getElementById('max').valueAsDate.getTime()) {
  if (max) {
    setCookie('GAME_MAX', max);
  } else {
    removeCookie('GAME_MAX');
  }
}

function saveLocale(locale = Object.keys(formats)[document.getElementById('locale').value]) {
  if (locale) {
    setCookie('GAME_LOCALE', locale);
  } else {
    removeCookie('GAME_LOCALE');
  }
}

function resetMin() {
  saveMin(null);

  location.reload();
}

function resetMax() {
  saveMax(null);

  location.reload();
}

function resetLocale() {
  saveLocale(null);

  location.reload();
}

function setDates() {
  loadBounds();

  document.getElementById('min').valueAsDate = GAME_MIN;
  document.getElementById('max').valueAsDate = GAME_MAX;

  let locale = document.getElementById('locale');
  let i = 0;
  for (const [key, value] of Object.entries(formats)) {
    let option = document.createElement('option');
    option.text = key + ' --- ' + value;
    option.value = i;
    locale.add(option);
    if (key == GAME_LOCALE) {
      locale.value = i;
    }
    i++;
  }
}

function randomDate(min = GAME_MIN, max = GAME_MAX) {
  min = min.getTime();
  max = max.getTime();

  if (min > max) {
    saveMin(null);
    resetMax();
  }

  return new Date(min + Math.random() * (max - min));
}

function getDay(date) {
  let n;
  if (Number.isInteger(date)) {
    n = date;
  } else {
    n = date.getDay();
  }
  switch (n) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Not a date.'
  }
}

function match(day) {
  if (GAME_START) {
    MODE_ITERATOR++;
    GAME_DURATION = new Date().getTime() - GAME_START;
    GAME_START = null;
    let header = document.getElementById('date');
    if (day == GAME_DATE.getDay()) {
      header.textContent = `Great job -- ${GAME_DATE.toLocaleDateString(GAME_LOCALE)} was ${getDay(GAME_DATE)}! Your time was ${GAME_DURATION / 1000} seconds!`;
      GAME_SCORES.push(GAME_DURATION);
    } else {
      header.textContent = `Sorry, ${GAME_DATE.toLocaleDateString(GAME_LOCALE)} was not a ${getDay(day)}...`;
    }
    if (['Blitz', 'Verify'].includes(GAME_MODE)) {
      if (MODE_ITERATOR != MODE_LIMIT) {
        if (GAME_SCORES.length == MODE_ITERATOR || GAME_MODE == 'Blitz') {
          setTimeout(round, 3000);
        }
      } else if (GAME_MODE == 'Verify') {
        setTimeout(verify, 3000);
      }
    }
  }
}

function startGame() {
  loadBounds();

  loadMode();

  round();
}

function round() {
  clearTimeout(round);
  resetGame();

  GAME_START = new Date().getTime();

  GAME_DATE = randomDate();

  document.getElementById('date').textContent = GAME_DATE.toLocaleDateString(GAME_LOCALE);
}

function verify(scores = GAME_SCORES) {
  clearTimeout(verify);

  let finalTime = 0;
  for (let score of GAME_SCORES) {
    finalTime += score;
  }
  finalTime /= MODE_LIMIT;

  let header = document.getElementById('date');
  header.textContent = `Congratulations, you've verified your average time of ${finalTime / 1000}!`;
}

function resetGame() {
  GAME_START = null;
  GAME_DURATION = null;
  GAME_DATE = null;
}

function loadMode() {
  const url = new URLSearchParams(window.location.search);
  const mode = url.get('mode');

  if (mode && GAME_MODES.includes(mode)) {
    GAME_MODE = mode;
    MODE_ITERATOR = 0;
  }
  switch (GAME_MODE) {
    case 'Standard':
      MODE_LIMIT = 1;
      break;
    case 'Verify':
      MODE_LIMIT = 7;
      break;
    case 'Blitz':
      MODE_LIMIT = -1;
  }
}

function play() {
  let element = document.getElementById('game-mode');
  let mode = element.value;
  window.location.href = `./play.html?mode=${mode}`;
}
