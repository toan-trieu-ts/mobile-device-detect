module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEVICE_TYPES = {
  MOBILE: "mobile",
  TABLET: "tablet",
  SMART_TV: "smarttv",
  CONSOLE: "console",
  WEARABLE: "wearable",
  BROWSER: undefined
};

var BROWSER_TYPES = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: "IE",
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium"
};

var OS_TYPES = {
  IOS: "iOS",
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: "Windows",
  MAC_OS: "Mac OS"
};

var defaultData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

module.exports = { BROWSER_TYPES: BROWSER_TYPES, DEVICE_TYPES: DEVICE_TYPES, OS_TYPES: OS_TYPES, defaultData: defaultData };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UAParser = __webpack_require__(2);

var _require = __webpack_require__(0),
    BROWSER_TYPES = _require.BROWSER_TYPES,
    OS_TYPES = _require.OS_TYPES,
    DEVICE_TYPES = _require.DEVICE_TYPES;

var _require2 = __webpack_require__(4),
    checkType = _require2.checkType,
    broPayload = _require2.broPayload,
    mobilePayload = _require2.mobilePayload,
    wearPayload = _require2.wearPayload,
    consolePayload = _require2.consolePayload,
    stvPayload = _require2.stvPayload,
    getNavigatorInstance = _require2.getNavigatorInstance,
    isIOS13Check = _require2.isIOS13Check;

var UA = new UAParser();

var browser = UA.getBrowser();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var CHROME = BROWSER_TYPES.CHROME,
    CHROMIUM = BROWSER_TYPES.CHROMIUM,
    IE = BROWSER_TYPES.IE,
    INTERNET_EXPLORER = BROWSER_TYPES.INTERNET_EXPLORER,
    OPERA = BROWSER_TYPES.OPERA,
    FIREFOX = BROWSER_TYPES.FIREFOX,
    SAFARI = BROWSER_TYPES.SAFARI,
    EDGE = BROWSER_TYPES.EDGE,
    YANDEX = BROWSER_TYPES.YANDEX,
    MOBILE_SAFARI = BROWSER_TYPES.MOBILE_SAFARI;
var MOBILE = DEVICE_TYPES.MOBILE,
    TABLET = DEVICE_TYPES.TABLET,
    SMART_TV = DEVICE_TYPES.SMART_TV,
    BROWSER = DEVICE_TYPES.BROWSER,
    WEARABLE = DEVICE_TYPES.WEARABLE,
    CONSOLE = DEVICE_TYPES.CONSOLE;
var ANDROID = OS_TYPES.ANDROID,
    WINDOWS_PHONE = OS_TYPES.WINDOWS_PHONE,
    IOS = OS_TYPES.IOS,
    WINDOWS = OS_TYPES.WINDOWS,
    MAC_OS = OS_TYPES.MAC_OS;


var isMobileType = function isMobileType() {
  return device.type === MOBILE;
};
var isTabletType = function isTabletType() {
  return device.type === TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  if (os.name === OS_TYPES.WINDOWS && os.version === '10') {
    return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
  }

  return false;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === SMART_TV;
};
var isBrowserType = function isBrowserType() {
  return device.type === BROWSER;
};
var isWearableType = function isWearableType() {
  return device.type === WEARABLE;
};
var isConsoleType = function isConsoleType() {
  return device.type === CONSOLE;
};
var isAndroidType = function isAndroidType() {
  return os.name === ANDROID;
};
var isWindowsType = function isWindowsType() {
  return os.name === WINDOWS;
};
var isMacOsType = function isMacOsType() {
  return os.name === MAC_OS;
};
var isWinPhoneType = function isWinPhoneType() {
  return os.name === WINDOWS_PHONE;
};
var isIOSType = function isIOSType() {
  return os.name === IOS;
};
var isChromeType = function isChromeType() {
  return browser.name === CHROME;
};
var isFirefoxType = function isFirefoxType() {
  return browser.name === FIREFOX;
};
var isChromiumType = function isChromiumType() {
  return browser.name === CHROMIUM;
};
var isEdgeType = function isEdgeType() {
  return browser.name === EDGE;
};
var isYandexType = function isYandexType() {
  return browser.name === YANDEX;
};
var isSafariType = function isSafariType() {
  return browser.name === SAFARI || browser.name === MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === MOBILE_SAFARI;
};
var isOperaType = function isOperaType() {
  return browser.name === OPERA;
};
var isIEType = function isIEType() {
  return browser.name === INTERNET_EXPLORER || browser.name === IE;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return browser.major;
};
var getBrowserVersion = function getBrowserVersion() {
  return browser.version;
};
var getOsVersion = function getOsVersion() {
  return os.version ? os.version : "none";
};
var getOsName = function getOsName() {
  return os.name ? os.name : "none";
};
var getBrowserName = function getBrowserName() {
  return browser.name;
};
var getMobileVendor = function getMobileVendor() {
  return device.vendor ? device.vendor : "none";
};
var getMobileModel = function getMobileModel() {
  return device.model ? device.model : "none";
};
var getEngineName = function getEngineName() {
  return engine.name;
};
var getEngineVersion = function getEngineVersion() {
  return engine.version;
};
var getUseragent = function getUseragent() {
  return ua;
};
var getDeviceType = function getDeviceType() {
  return device.type;
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
};

module.exports = {
  deviceDetect: deviceDetect,
  isSmartTV: isSmartTV,
  isConsole: isConsole,
  isWearable: isWearable,
  isMobileSafari: isMobileSafari,
  isChromium: isChromium,
  isMobile: isMobile,
  isMobileOnly: isMobileOnly,
  isTablet: isTablet,
  isBrowser: isBrowser,
  isAndroid: isAndroid,
  isWinPhone: isWinPhone,
  isIOS: isIOS,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isOpera: isOpera,
  isIE: isIE,
  osVersion: osVersion,
  osName: osName,
  fullBrowserVersion: fullBrowserVersion,
  browserVersion: browserVersion,
  browserName: browserName,
  mobileVendor: mobileVendor,
  mobileModel: mobileModel,
  engineName: engineName,
  engineVersion: engineVersion,
  getUA: getUA,
  isEdge: isEdge,
  isYandex: isYandex,
  deviceType: deviceType,
  isIOS13: isIOS13,
  isIPad13: isIPad13,
  isIPhone13: isIPhone13,
  isIPod13: isIPod13,
  isElectron: isElectron,
  isEdgeChromium: isEdgeChromium,
  isLegacyEdge: isLegacyEdge,
  isWindows: isWindows,
  isMacOs: isMacOs
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* UAParser.js v1.0.37
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
(function(window,undefined){"use strict";var LIBVERSION="1.0.37",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=500;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SHARP="Sharp",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook",CHROMIUM_OS="Chromium OS",MAC_OS="Mac OS";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){if(!regex[j]){break}matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[VERSION,[NAME,"Smart Lenovo "+BROWSER]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/samsungbrowser\/([\w\.]+)/i],[VERSION,[NAME,SAMSUNG+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/metasr[\/ ]?([\d\.]+)/i],[VERSION,[NAME,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[NAME,"Sogou Mobile"],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[VERSION,[NAME,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[NAME,VERSION],[/(cobalt)\/([\w\.]+)/i],[NAME,[VERSION,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,SHARP],[TYPE,MOBILE]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[MODEL,[VENDOR,"Ulefone"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w+)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[MODEL,[VENDOR,SHARP],[TYPE,SMARTTV]],[/(bravia[\w ]+)( bui|\))/i],[MODEL,[VENDOR,SONY],[TYPE,SMARTTV]],[/(mitv-\w{5}) bui/i],[MODEL,[VENDOR,XIAOMI],[TYPE,SMARTTV]],[/Hbbtv.*(technisat) (.*);/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[MODEL,[VENDOR,APPLE],[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2| pro)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/(aeobc)\b/i],[MODEL,[VENDOR,AMAZON],[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[VERSION,strMapper,windowsVersionMap],[NAME,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,MAC_OS],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[VERSION,[NAME,"watchOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[NAME,CHROMIUM_OS],VERSION],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _navigator=typeof window!==UNDEF_TYPE&&window.navigator?window.navigator:undefined;var _ua=ua||(_navigator&&_navigator.userAgent?_navigator.userAgent:EMPTY);var _uach=_navigator&&_navigator.userAgentData?_navigator.userAgentData:undefined;var _rgxmap=extensions?extend(regexes,extensions):regexes;var _isSelfNav=_navigator&&_navigator.userAgent==_ua;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined;_browser[VERSION]=undefined;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser[MAJOR]=majorize(_browser[VERSION]);if(_isSelfNav&&_navigator&&_navigator.brave&&typeof _navigator.brave.isBrave==FUNC_TYPE){_browser[NAME]="Brave"}return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined;_device[MODEL]=undefined;_device[TYPE]=undefined;rgxMapper.call(_device,_ua,_rgxmap.device);if(_isSelfNav&&!_device[TYPE]&&_uach&&_uach.mobile){_device[TYPE]=MOBILE}if(_isSelfNav&&_device[MODEL]=="Macintosh"&&_navigator&&typeof _navigator.standalone!==UNDEF_TYPE&&_navigator.maxTouchPoints&&_navigator.maxTouchPoints>2){_device[MODEL]="iPad";_device[TYPE]=TABLET}return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined;_engine[VERSION]=undefined;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined;_os[VERSION]=undefined;rgxMapper.call(_os,_ua,_rgxmap.os);if(_isSelfNav&&!_os[NAME]&&_uach&&_uach.platform!="Unknown"){_os[NAME]=_uach.platform.replace(/chrome os/i,CHROMIUM_OS).replace(/macos/i,MAC_OS)}return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(3)){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = __webpack_require__(0),
    DEVICE_TYPES = _require.DEVICE_TYPES,
    defaultData = _require.defaultData;

var checkType = function checkType(type) {
    switch (type) {
        case DEVICE_TYPES.MOBILE:
            return { isMobile: true };
        case DEVICE_TYPES.TABLET:
            return { isTablet: true };
        case DEVICE_TYPES.SMART_TV:
            return { isSmartTV: true };
        case DEVICE_TYPES.CONSOLE:
            return { isConsole: true };
        case DEVICE_TYPES.WEARABLE:
            return { isWearable: true };
        case DEVICE_TYPES.BROWSER:
            return { isBrowser: true };
        default:
            return defaultData;
    }
};

var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
    return {
        isBrowser: isBrowser,
        browserMajorVersion: browser.major,
        browserFullVersion: browser.version,
        browserName: browser.name,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var mobilePayload = function mobilePayload(type, device, os, ua) {
    return _extends({}, type, {
        vendor: device.vendor,
        model: device.model,
        os: os.name,
        osVersion: os.version,
        ua: ua
    });
};

var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
    return {
        isSmartTV: isSmartTV,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var consolePayload = function consolePayload(isConsole, engine, os, ua) {
    return {
        isConsole: isConsole,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var wearPayload = function wearPayload(isWearable, engine, os, ua) {
    return {
        isWearable: isWearable,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var getNavigatorInstance = exports.getNavigatorInstance = function getNavigatorInstance() {
    if (typeof window !== 'undefined') {
        if (window.navigator || navigator) {
            return window.navigator || navigator;
        }
    }

    return false;
};

var isIOS13Check = exports.isIOS13Check = function isIOS13Check(type) {
    var nav = getNavigatorInstance();
    return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

module.exports = {
    checkType: checkType,
    broPayload: broPayload,
    mobilePayload: mobilePayload,
    stvPayload: stvPayload,
    consolePayload: consolePayload,
    wearPayload: wearPayload,
    getNavigatorInstance: getNavigatorInstance,
    isIOS13Check: isIOS13Check
};

/***/ })
/******/ ]);