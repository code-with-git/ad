!function (_0x3a2c07, _0x1bdd5d, _0x2fa315) {
  'use strict';

  var _0x573dce = [];
  var _0x304306 = [];
  var _0x92e14d = _0x2fa315.documentElement;
  var _0x2cd2c8 = 0x0;
  var _0x45aa11 = 0x0;
  var _0x250696 = {
    'isEmulate': function () {
      var _0x538a8f = _0x2503ae();
      var _0x198e8f = _0x2cac12();
      var _0x310f78 = Boolean(_0x3a2c07.MSInputMethodContext) && Boolean(_0x2fa315.documentMode) || undefined !== _0x3a2c07 && "[object OperaMini]" === Object.prototype.toString.call(_0x3a2c07.operamini);
      var _0x25c067 = _0x497588();
      return _0x310f78 || _0x538a8f && !_0x198e8f || _0x25c067;
    },
    'addTest': function (_0x1dda96, _0x47911b, _0x214dc6, _0xa3211b) {
      _0x573dce.push({
        'name': _0x1dda96,
        'truePoints': _0x47911b,
        'falsePoints': _0x214dc6,
        'fn': _0xa3211b
      });
    },
    'runTests': function () {
      var _0x2d7363;
      var _0xc41296;
      _0x573dce.forEach(function (_0x3f0ef3, _0x5920ee) {
        try {
          if (_0x2d7363 = "function" == typeof _0x3f0ef3.fn ? _0x3f0ef3.fn() : _0x3f0ef3.fn) {
            _0x2cd2c8 |= 0x1 << _0x5920ee;
          }
          _0xc41296 = _0x2d7363 ? _0x3f0ef3.truePoints : _0x3f0ef3.falsePoints;
          _0x304306.push({
            'name': _0x3f0ef3.name,
            'result': _0xc41296
          });
          if ("function" == typeof printResult) {
            printResult("ld_results", {
              'name': _0x3f0ef3.name,
              'result': _0x2d7363
            });
          }
        } catch (_0x4a8a74) {
          _0x45aa11 |= 0x1 << _0x5920ee;
        }
      });
      return this;
    },
    'getResults': function () {
      return "14." + _0x2cd2c8 + (0x0 < _0x45aa11 ? '.' + _0x45aa11 : '');
    }
  };
  function _0x2cac12() {
    var _0x12c3e9 = 0x0;
    var _0x26b361 = 0x0;
    _0x304306.forEach(function (_0x54637c) {
      if (_0x54637c.result.hasOwnProperty('d')) {
        _0x12c3e9 += _0x54637c.result.d;
      }
      if (_0x54637c.result.hasOwnProperty('m')) {
        _0x26b361 += _0x54637c.result.m;
      }
    });
    return _0x12c3e9 < _0x26b361;
  }
  function _0x2503ae() {
    var _0x1ed364;
    return !/SmartTV/.test(_0x1bdd5d.userAgent) && (_0x1ed364 = _0x1bdd5d.userAgent || _0x1bdd5d.vendor || _0x3a2c07.opera, !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x1ed364) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x1ed364.substr(0x0, 0x4))) || false);
  }
  function _0x497588() {
    return _0x304306.some(function (_0x56bc01) {
      return 0x0 < _0x56bc01.result.e;
    });
  }
  function _0x4604cb(_0x47f2d8, _0x168583, _0x343e3b, _0xe944a8) {
    var _0x275958;
    var _0x275958;
    var _0x5ed3fb;
    var _0x15f554;
    var _0x2476ea = _0x2fa315.createElement("div");
    var _0x6ae4ba = _0x345091();
    if (parseInt(_0x343e3b, 0xa)) {
      for (; _0x343e3b--;) {
        (_0x5ed3fb = _0x2fa315.createElement("div")).id = _0xe944a8 ? _0xe944a8[_0x343e3b] : "LieDetector" + (_0x343e3b + 0x1);
        _0x2476ea.appendChild(_0x5ed3fb);
      }
    }
    (_0x275958 = _0x2fa315.createElement('style')).type = 'text/css';
    _0x275958.id = "sLieDetector";
    (_0x6ae4ba.fake ? _0x6ae4ba : _0x2476ea).appendChild(_0x275958);
    _0x6ae4ba.appendChild(_0x2476ea);
    if (_0x275958.styleSheet) {
      _0x275958.styleSheet.cssText = _0x47f2d8;
    } else {
      _0x275958.appendChild(_0x2fa315.createTextNode(_0x47f2d8));
    }
    _0x2476ea.id = "LieDetector";
    if (_0x6ae4ba.fake) {
      _0x6ae4ba.style.background = '';
      _0x6ae4ba.style.overflow = 'hidden';
      _0x15f554 = _0x92e14d.style.overflow;
      _0x92e14d.style.overflow = 'hidden';
      _0x92e14d.appendChild(_0x6ae4ba);
    }
    _0x275958 = _0x168583(_0x2476ea, _0x47f2d8);
    if (_0x6ae4ba.fake) {
      _0x6ae4ba.parentNode.removeChild(_0x6ae4ba);
      _0x92e14d.style.overflow = _0x15f554;
      _0x92e14d.offsetHeight;
    } else {
      _0x2476ea.parentNode.removeChild(_0x2476ea);
    }
    Boolean(_0x275958);
  }
  function _0x345091() {
    var _0x6e5435 = _0x2fa315.body;
    if (!_0x6e5435) {
      (_0x6e5435 = _0x2fa315.createElement("body")).fake = true;
    }
    return _0x6e5435;
  }
  _0x250696.addTest("hasFileInputMultiple", {}, {
    'm': 0x5
  }, function () {
    return "multiple" in _0x2fa315.createElement("input");
  });
  _0x250696.addTest('hasCustomProtocolHandler', {
    'd': 0x7
  }, {}, function () {
    return Boolean(_0x1bdd5d.registerProtocolHandler);
  });
  _0x250696.addTest("hasCrypto", {}, {
    'm': 0x14
  }, function () {
    return Boolean(_0x3a2c07.crypto);
  });
  _0x250696.addTest("hasNotification", {
    'd': 0x7
  }, {}, function () {
    if (!_0x3a2c07.Notification || !_0x3a2c07.Notification.requestPermission) {
      return false;
    }
    if ("granted" !== _0x3a2c07.Notification.permission) {
      try {
        new _0x3a2c07.Notification('');
      } catch (_0x5365fc) {
        if ("TypeError" === _0x5365fc.name) {
          return false;
        }
      }
    }
    return true;
  });
  _0x250696.addTest("hasSharedWorkers", {
    'd': 0xa
  }, {}, function () {
    return "SharedWorker" in _0x3a2c07;
  });
  _0x250696.addTest('hasInputCapture', {
    'm': 0xa
  }, {}, function () {
    return 'capture' in _0x2fa315.createElement('input');
  });
  _0x250696.addTest("hasTouchEvents", {
    'm': 0x5
  }, {
    'd': 0x5
  }, function () {
    var _0xc3149c;
    if ('ontouchstart' in _0x3a2c07 || _0x3a2c07.DocumentTouch && _0x2fa315 instanceof DocumentTouch) {
      _0xc3149c = true;
    } else {
      _0x4604cb("@media (touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled){#liedetector{top:7px;position:absolute}}", function (_0xee379a) {
        _0xc3149c = 0x7 === _0xee379a.offsetTop;
      });
    }
    return _0xc3149c;
  });
  _0x250696.addTest("hasWindowOrientationProperty", {
    'm': 0x14
  }, {
    'd': 0xa
  }, function () {
    return undefined !== _0x3a2c07.orientation;
  });
  _0x250696.addTest("hasDevToolsOpen", {
    'd': 0x3e8
  }, {}, function () {
    var _0x4fef01 = {
      'isOpen': false,
      'orientation': undefined
    };
    var _0x4b1d47 = 0xa0;
    var _0x318a28 = globalThis.outerWidth - globalThis.innerWidth > _0x4b1d47;
    var _0x4b1d47 = globalThis.outerHeight - globalThis.innerHeight > _0x4b1d47;
    var _0x4b56ba = _0x318a28 ? "vertical" : "horizontal";
    return _0x4b1d47 && _0x318a28 || !(globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized || _0x318a28 || _0x4b1d47) ? (_0x4fef01.orientation = undefined, false) : (_0x4fef01.orientation = _0x4b56ba, true);
  });
  _0x250696.addTest("hasLiedResolution", {
    'e': 0x0
  }, {}, function () {
    return _0x3a2c07.screen.width < _0x3a2c07.screen.availWidth || _0x3a2c07.screen.height < _0x3a2c07.screen.availHeight;
  });
  _0x250696.addTest("hasLiedOs", {
    'e': 0x1
  }, {}, function () {
    var _0xa20092 = _0x1bdd5d.userAgent.toLowerCase();
    var _0x765afa = _0x1bdd5d.oscpu;
    var _0x31b7b3 = _0x1bdd5d.platform.toLowerCase();
    var _0xa20092;
    var _0xa20092 = 0x0 <= _0xa20092.indexOf("windows phone") ? "Windows Phone" : 0x0 <= _0xa20092.indexOf('xbox') ? 'Xbox' : 0x0 <= _0xa20092.indexOf("win") ? "Windows" : 0x0 <= _0xa20092.indexOf("android") ? "Android" : 0x0 <= _0xa20092.indexOf("cros") ? "Chrome OS" : 0x0 <= _0xa20092.indexOf("linux") ? "Linux" : 0x0 <= _0xa20092.indexOf("iphone") || 0x0 <= _0xa20092.indexOf("ipad") ? "iOS" : 0x0 <= _0xa20092.indexOf("mac") ? 'Mac' : 'Other';
    if (("ontouchstart" in _0x3a2c07 || 0x0 < _0x1bdd5d.maxTouchPoints || 0x0 < _0x1bdd5d.msMaxTouchPoints) && -0x1 === ["Android", "Chrome OS", "iOS", "Other", "Windows Phone"].indexOf(_0xa20092)) {
      return true;
    }
    if (undefined !== _0x765afa) {
      if (0x0 <= (_0x765afa = _0x765afa.toLowerCase()).indexOf("win") && "Windows" !== _0xa20092 && "Windows Phone" !== _0xa20092) {
        return true;
      }
      if (0x0 <= _0x765afa.indexOf("linux") && -0x1 === ['Android', "Chrome OS", 'Linux'].indexOf(_0xa20092)) {
        return true;
      }
      if (0x0 <= _0x765afa.indexOf("mac") && "Mac" !== _0xa20092 && "iOS" !== _0xa20092) {
        return true;
      }
      if (/win|linux|mac/.test(_0x765afa) === ("Other" === _0xa20092)) {
        return true;
      }
    }
    return 0x0 <= _0x31b7b3.indexOf("win") && "Windows" !== _0xa20092 && "Windows Phone" !== _0xa20092 || !(!/linux|android|pike/.test(_0x31b7b3) || -0x1 !== ["Android", "Chrome OS", "Linux"].indexOf(_0xa20092)) || !(!/mac|ipad|ipod|iphone/.test(_0x31b7b3) || "Mac" === _0xa20092 || "iOS" === _0xa20092) || /win|linux|mac|iphone|ipad/.test(_0x31b7b3) === ("Other" === _0xa20092) || undefined === _0x1bdd5d.plugins && "Windows" !== _0xa20092 && "Windows Phone" !== _0xa20092;
  });
  _0x250696.addTest("hasLiedBrowser", {
    'e': 0x1
  }, {}, function () {
    var _0x359502 = _0x1bdd5d.userAgent.toLowerCase();
    var _0x5f2bae = _0x1bdd5d.productSub;
    var _0x359502;
    var _0x359502 = 0x0 <= _0x359502.indexOf("firefox") ? "Firefox" : 0x0 <= _0x359502.indexOf("edge") ? "Edge" : 0x0 <= _0x359502.indexOf("opera") && 0x0 <= _0x359502.indexOf("presto") ? "Opera Presto" : 0x0 <= _0x359502.indexOf("opera") || 0x0 <= _0x359502.indexOf("opr") ? "Opera" : 0x0 <= _0x359502.indexOf("chrome") ? "Chrome" : 0x0 <= _0x359502.indexOf("safari") ? "Safari" : 0x0 <= _0x359502.indexOf("trident") ? "Internet Explorer" : "Other";
    var _0x56cef2 = !!!document.documentMode && !!window.StyleMedia;
    if (-0x1 !== ["Chrome", "Safari", 'Opera', "Opera Presto"].indexOf(_0x359502) && "20030107" !== _0x5f2bae) {
      return true;
    }
    if ('Opera' === _0x359502 && !window.opr) {
      return true;
    }
    if ('Chrome' === _0x359502 && (window.chrome && window.chrome.search || _0x56cef2)) {
      return true;
    }
    if ("Firefox" === _0x359502 && "undefined" == typeof InstallTrigger) {
      return true;
    }
    if ("Edge" === _0x359502 && !_0x56cef2) {
      return true;
    }
    var _0x5f2bae = eval.toString().length;
    var _0x7893c8;
    if (0x25 === _0x5f2bae && -0x1 === ['Firefox', "Other", "Safari"].indexOf(_0x359502)) {
      return true;
    }
    if (0x27 === _0x5f2bae && -0x1 === ["Internet Explorer", 'Other'].indexOf(_0x359502)) {
      return true;
    }
    if (0x21 === _0x5f2bae && -0x1 === ['Chrome', 'Edge', "Opera", "Other"].indexOf(_0x359502)) {
      return true;
    }
    try {
      throw 'a';
    } catch (_0x214e54) {
      try {
        _0x214e54.toSource();
        _0x7893c8 = true;
      } catch (_0x2fdaed) {
        _0x7893c8 = false;
      }
    }
    return _0x7893c8 && "Firefox" !== _0x359502 && 'Other' !== _0x359502;
  });
  _0x250696.addTest("hasLiedLanguage", {
    'e': 0x0
  }, {}, function () {
    if (_0x1bdd5d.languages) {
      try {
        return _0x1bdd5d.languages[0x0].substr(0x0, 0x2) !== _0x1bdd5d.language.substr(0x0, 0x2);
      } catch (_0x498321) {
        return true;
      }
    }
    return false;
  });
  _0x3a2c07.LieDetector = _0x250696;
}(window, navigator, document);
!function () {
  function _0x2dd244(_0x5cbf13) {
    var _0x22e738 = {
      0x22: true,
      0x40: true,
      0xc2: true,
      0x3d: true,
      0x6d: true,
      0x10a: true,
      0xbe: true,
      0xe5: true,
      0xf8: true
    };
    var _0x307572 = {
      0x2: true,
      0x10: true,
      0x20: true,
      0x26: true
    };
    function _0x56ef74(_0x1145ba) {
      var _0x46d88a = document.cookie.toString().split("; ");
      for (var _0x23faca = 0x0; _0x23faca < _0x46d88a.length; _0x23faca++) {
        var _0x248c87 = _0x46d88a[_0x23faca].split('=');
        if (_0x248c87[0x0] === _0x1145ba) {
          return _0x248c87[0x1];
        }
      }
      return 0x0;
    }
    function _0x5c2cdf() {
      var _0x3a5f27 = Number('');
      if (!_0x3a5f27) {
        var _0x3a5f27 = window !== window.top || document !== top.document || self.location !== top.location;
        if (!_0x3a5f27) {
          var _0x437971 = JSON.parse("[4,12,31,32,35,55,60,68,73,74,80,89,188,190]");
          var _0x1d3052 = 0x0;
          for (var _0x363c88; _0x1d3052 < _0x437971.length; _0x1d3052++) {
            if (_0x22e738[_0x437971[_0x1d3052]]) {
              return;
            }
          }
          if (document.referrer && new URL(document.referrer).hostname !== new URL(document.URL).hostname && !_0x56ef74("hu8935j4i9fq3hpuj9q39")) {
            if (!!_0x307572["1"]) {
              _0x363c88 = "https://dresserderange.com/dnn2hkn8?key=c69ed5cafac1a2486cfa00ac4a744bea&psid=3eddcc0414113dd793b311e33be472fb";
              _0xc73f93("c69ed5cafac1a2486cfa00ac4a744bea");
            } else {
              _0x363c88 = "https://dresserderange.com/dnn2hkn8?key=f24b0aaf975ee65a83aae9b19316ec90&psid=3eddcc0414113dd793b311e33be472fb";
              _0xc73f93("f24b0aaf975ee65a83aae9b19316ec90");
            }
            Object.defineProperty(window, "backButtonData", {
              'get'() {
                return {
                  'redirectUrl': _0x363c88
                };
              },
              'configurable': true
            });
          }
        }
      }
    }
    function _0x517311(_0x52dd56, _0x5ebd86) {
      var _0x4f7deb = document.createElement("script");
      var _0x6260ce = false;
      var _0x4322f9 = function () {
        var _0x3fd45b;
        if (!_0x6260ce && (_0x6260ce = true, _0x3fd45b = document.getElementById(_0x52dd56))) {
          _0x3fd45b.appendChild(_0x4f7deb);
        }
      };
      var _0x18e2fe;
      _0x4f7deb.async = true;
      _0x4f7deb.defer = true;
      _0x4f7deb.src = _0x5ebd86;
      if ("complete" === document.readyState) {
        _0x4322f9();
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", _0x4322f9, false);
        window.addEventListener("load", _0x4322f9, false);
      } else if (document.attachEvent) {
        document.attachEvent("onload", _0x4322f9);
        window.attachEvent("onload", _0x4322f9);
      } else {
        _0x18e2fe = window.onload;
        window.onload = function () {
          if (_0x18e2fe instanceof Function && _0x18e2fe.constructor === Function) {
            _0x18e2fe();
          }
          _0x4322f9();
        };
      }
    }
    function _0x5e07f9(_0x1c6986, _0x3f239d) {
      for (var _0x7d10a4 in _0x3f239d) if (_0x3f239d.hasOwnProperty(_0x7d10a4)) {
        try {
          _0x1c6986.setAttribute(_0x7d10a4, _0x3f239d[_0x7d10a4]);
        } catch (_0x39233d) {
          _0x1c6986[_0x7d10a4] = _0x3f239d[_0x7d10a4];
        }
      }
    }
    function _0x45f30c(_0x2307ea) {
      var _0x532cae = document.cookie;
      var _0x398650 = _0x532cae.indexOf("dom3ic8zudi28v8lr6fgphwffqoz0j6c=");
      var _0x516da3 = _0x532cae.charAt(_0x398650 - 0x1);
      if (0x0 === _0x398650 || 0x0 < _0x398650 && (';' === _0x516da3 || " " === _0x516da3)) {
        var _0x516da3 = _0x532cae.indexOf(';', _0x398650);
        _0x2307ea(_0x532cae.substring(_0x398650 + 0x21, -0x1 === _0x516da3 ? undefined : _0x516da3));
      } else {
        try {
          var _0x35e5a6 = new XMLHttpRequest();
          var _0x22668a = setTimeout(function () {
            _0x35e5a6.abort();
          }, 0x3e8);
          if ("withCredentials" in _0x35e5a6) {
            _0x35e5a6.withCredentials = true;
          }
          _0x35e5a6.open("GET", "https://proftrafficcounter.com/stats");
          _0x35e5a6.onload = function () {
            clearTimeout(_0x22668a);
            var _0x97717 = encodeURIComponent(_0x35e5a6.responseText.trim());
            var _0x47b9a7 = new Date();
            _0x47b9a7.setTime(_0x47b9a7.getTime() + 604800000);
            var _0x47b9a7 = ["dom3ic8zudi28v8lr6fgphwffqoz0j6c=" + _0x97717, 'expires=' + _0x47b9a7.toUTCString(), 'path=/', 'SameSite=Lax'];
            document.cookie = _0x47b9a7.join(';');
            _0x2307ea(_0x97717);
          };
          _0x35e5a6.onerror = _0x35e5a6.onabort = function () {
            _0x2307ea('');
          };
          _0x35e5a6.send();
        } catch (_0x342feb) {
          _0x2307ea('');
        }
      }
    }
    function _0x268a1f(_0x291437) {
      var _0x54b4f9 = document.querySelectorAll("script[src $= \"" + _0x291437 + "/invoke.js\"]");
      var _0x129a09 = document.querySelectorAll("script[src $= \"invoke.js\"]");
      var _0x31476c;
      var _0x31476c = _0x54b4f9.length ? _0x54b4f9 : _0x129a09;
      var _0x47f7db = 0x0;
      for (var _0x320adf = _0x31476c.length; _0x47f7db < _0x320adf; _0x47f7db++) {
        var _0xbb12d7 = _0x31476c[_0x47f7db].className;
        var _0xf9da0c = "atScript";
        var _0x453286 = "atScript" + (_0x54b4f9.length ? _0x291437 : '') + '_' + _0x47f7db;
        if (_0xbb12d7.indexOf(_0x453286) < 0x0 && _0xbb12d7.indexOf("atScript") < 0x0) {
          _0x31476c[_0x47f7db].className += _0x453286;
          return _0x31476c[_0x47f7db];
        }
      }
    }
    function _0xd7f297(_0x2ccada) {
      if (null !== _0x2ccada.key && ('js' === _0x2ccada.format || "iframe" === _0x2ccada.format && !isNaN(_0x2ccada.height = Math.floor(_0x2ccada.height)) && isFinite(_0x2ccada.height) && !isNaN(_0x2ccada.width = Math.floor(_0x2ccada.width)) && isFinite(_0x2ccada.width))) {
        var _0x3f4b9a = new Date();
        var _0x48ce90 = function () {
          var _0x31bccc = [];
          if (_0x2ccada.params instanceof Object && _0x2ccada.params.constructor === Object) {
            for (var _0x34dfb6 in _0x2ccada.params) if (_0x2ccada.params.hasOwnProperty(_0x34dfb6)) {
              _0x31bccc.push("\"" + _0x34dfb6 + "\":\"" + _0x2ccada.params[_0x34dfb6] + "\"");
            }
          }
          return _0x31bccc;
        }();
        var _0x3ebafe = function () {
          var _0xd4ae9b = '';
          var _0xd4ae9b;
          var _0x4b2dbf;
          var _0x32e0c8;
          try {
            if (parent !== window) {
              _0xd4ae9b = document.referrer;
              if ((_0x4b2dbf = window.location.ancestorOrigins) && (_0x32e0c8 = _0x4b2dbf[_0x4b2dbf.length - 0x1]) && _0xd4ae9b.substring(0x0, _0x32e0c8.length) !== _0x32e0c8) {
                _0xd4ae9b = _0x32e0c8;
              }
            } else {
              _0xd4ae9b = top.location.href;
            }
          } catch (_0x27b4f2) {}
          return _0xd4ae9b;
        }();
        var _0x2c3684 = Math.ceil(_0x3f4b9a.getTime() * Math.random());
        var _0x3f4b9a = _0x3f4b9a.getTimezoneOffset() / -0x3c;
        var _0x55a556 = "https://dresserderange.com/watch." + _0x2c3684 + ".js?key=" + _0x2ccada.key + "&kw=" + encodeURIComponent(JSON.stringify(_0x5cbf13)) + "&refer=" + encodeURIComponent(_0x3ebafe) + (_0x48ce90.length ? "&custom=" + encodeURIComponent('{' + _0x48ce90.join(',') + '}') : '') + "&tz=" + _0x3f4b9a + '&dev=' + (window.LieDetector.runTests().isEmulate() ? 'e' : 'r') + "&res=" + window.LieDetector.getResults();
        var _0x50bb3c = "https://dresserderange.com/watch." + _0x2c3684 + "?key=" + _0x2ccada.key + "&kw=" + encodeURIComponent(JSON.stringify(_0x5cbf13)) + "&refer=" + encodeURIComponent(_0x3ebafe) + (_0x48ce90.length ? "&custom=" + encodeURIComponent('{' + _0x48ce90.join(',') + '}') : '') + "&tz=" + _0x3f4b9a + '&dev=' + (window.LieDetector.runTests().isEmulate() ? 'e' : 'r') + '&res=' + window.LieDetector.getResults();
        var _0x57a84c = new ("onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest)();
        var _0x104c05 = _0x268a1f(_0x2ccada.key);
        var _0x4b2dc5 = _0x104c05.parentNode.nodeName;
        var _0x1a3dd9 = document.createElement("iframe");
        var _0x1856d6 = {
          'allowtransparency': 'true',
          'scrolling': 'no',
          'frameborder': 0x0,
          'framespacing': 0x0
        };
        var _0x3c2d91 = document.createElement('div');
        var _0xa7629e = function (_0x897527, _0x200f3b) {
          var _0x2c9ce8;
          if (null !== window.frameElement && "HEAD" === _0x4b2dc5) {
            if (undefined !== (_0x2c9ce8 = document.getElementsByTagName('body')[0x0])) {
              if (!_0x2c9ce8.childNodes.length) {
                if (_0x200f3b) {
                  _0x2c9ce8.appendChild(_0x200f3b);
                }
                _0x2c9ce8.appendChild(_0x897527);
              }
            } else {
              document.addEventListener('DOMContentLoaded', function () {
                if (!(_0x2c9ce8 = document.getElementsByTagName("body")[0x0]).childNodes.length) {
                  if (_0x200f3b) {
                    _0x2c9ce8.appendChild(_0x200f3b);
                  }
                  _0x2c9ce8.appendChild(_0x897527);
                }
              });
            }
          } else {
            if (_0x200f3b) {
              _0x104c05.parentNode.insertBefore(_0x200f3b, _0x104c05);
            }
            _0x104c05.parentNode.insertBefore(_0x897527, _0x104c05);
          }
        };
        var _0x1656d2 = function () {
          var _0x295b21;
          if (undefined !== _0x2ccada.height && undefined !== _0x2ccada.width) {
            _0x1856d6.width = _0x2ccada.width;
            _0x1856d6.height = _0x2ccada.height;
            _0x45f30c(function (_0x48eece) {
              _0x1a3dd9.src = _0x50bb3c + "&uuid=" + _0x48eece;
            });
            _0x5e07f9(_0x1a3dd9, _0x1856d6);
            if (_0x2ccada.async) {
              document.getElementById(_0x2ccada.container).appendChild(_0x1a3dd9);
            } else {
              _0xa7629e(_0x1a3dd9);
            }
          } else {
            _0x295b21 = "string" == typeof _0x2ccada.container ? _0x2ccada.container : "atContainer-" + _0x2ccada.key;
            window.atAsyncContainers[_0x2ccada.key] = _0x295b21;
            if (!_0x2ccada.async) {
              _0x3c2d91.id = _0x295b21;
              _0xa7629e(_0x3c2d91);
            }
            _0x45f30c(function (_0x4ca980) {
              _0x517311(_0x295b21, _0x55a556 + "&uuid=" + _0x4ca980);
            });
          }
        };
        try {
          _0x45f30c(function (_0x48e55d) {
            if ("withCredentials" in _0x57a84c) {
              _0x57a84c.withCredentials = true;
            }
            _0x57a84c.onload = function () {
              var _0xfb233e;
              var _0x373aa4;
              var _0x3f49c4;
              var _0x477370;
              var _0x4810a0;
              var _0x9bdede;
              var _0xfb233e;
              var _0x477370;
              var _0x4810a0;
              var _0x3f49c4;
              var _0x17898;
              var _0x2d462d;
              var _0x200640;
              var _0x200640;
              var _0x373aa4;
              var _0x5301d4;
              if (_0x57a84c.readyState === XMLHttpRequest.DONE && 0xc8 === _0x57a84c.status) {
                _0x373aa4 = "<!--video_banner=1;-->";
                _0x3f49c4 = "var dfc221c35e";
                _0x477370 = (_0xfb233e = _0x57a84c.responseText).match(/frame_width=([0-9]{1,});/);
                _0x4810a0 = _0xfb233e.match(/frame_height=([0-9]{1,});/);
                _0x9bdede = _0xfb233e.match(/<script>([\s\S]+(?:openerUrl)[\s\S]*?)<\/script>/g);
                if (null !== _0x477370 && null !== _0x4810a0) {
                  _0x1856d6.width = _0x477370[_0x477370.length - 0x1];
                  _0x1856d6.height = _0x4810a0[_0x4810a0.length - 0x1];
                  _0xfb233e = _0xfb233e.replace(/frame_width=([0-9]{1,});/, '').replace(/frame_height=([0-9]{1,});/, '');
                } else if ("iframe" === _0x2ccada.format) {
                  _0x1856d6.width = _0x2ccada.width;
                  _0x1856d6.height = _0x2ccada.height;
                }
                if ('js' === _0x2ccada.format || 0x0 <= _0xfb233e.indexOf(_0x373aa4) || 0x0 <= _0xfb233e.indexOf(_0x3f49c4)) {
                  _0xfb233e = _0xfb233e.replace(_0x373aa4, '');
                  _0x477370 = "string" == typeof _0x2ccada.container ? _0x2ccada.container : "atContainer-" + _0x2ccada.key;
                  window.atAsyncContainers[_0x2ccada.key] = _0x477370;
                  if (!_0x2ccada.async) {
                    _0x3c2d91.id = _0x477370;
                    _0xa7629e(_0x3c2d91);
                  }
                  (_0x4810a0 = document.createElement("script")).innerHTML += _0xfb233e;
                  document.getElementById(_0x477370).appendChild(_0x4810a0);
                } else {
                  _0x3f49c4 = document.getElementById(_0x2ccada.container);
                  _0x17898 = document.createElement("script");
                  _0x2d462d = document.createElement("script");
                  _0x1856d6.src = "about:blank";
                  _0x5e07f9(_0x1a3dd9, _0x1856d6);
                  if (_0x9bdede) {
                    _0x200640 = document.createElement("script");
                    _0x373aa4 = _0x9bdede[0x0].replace(/<\/?script>/g, '').trim();
                    _0xfb233e = _0xfb233e.replace(/<script>([\s\S]+(?:openerUrl)[\s\S]*?)<\/script>/g, '');
                    _0x200640.innerHTML = _0x373aa4;
                  }
                  _0x2d462d.innerHTML += _0xfb233e;
                  _0x3c2d91.id = 'atContainer-' + _0x2ccada.key;
                  _0x17898.innerHTML += "window[\"atAsyncContainers\"]={}; window[\"atAsyncContainers\"][\"" + _0x2ccada.key + "\"] = \"" + "atContainer-" + _0x2ccada.key + "\";";
                  if (_0x2ccada.async) {
                    if (_0x9bdede) {
                      _0x3f49c4.appendChild(_0x200640);
                    }
                    _0x3f49c4.appendChild(_0x1a3dd9);
                  } else {
                    _0xa7629e(_0x1a3dd9, _0x200640);
                  }
                  _0x5301d4 = setInterval(function () {
                    var _0x5a51f6 = _0x1a3dd9.contentDocument || _0x1a3dd9.contentWindow.document;
                    if ("complete" === _0x5a51f6.readyState) {
                      clearInterval(_0x5301d4);
                      _0x5a51f6.body.style.margin = 0x0;
                      _0x5a51f6.body.appendChild(_0x17898);
                      _0x5a51f6.body.appendChild(_0x3c2d91);
                      _0x5a51f6.body.appendChild(_0x2d462d);
                    }
                  }, 0xa);
                }
              }
            };
            _0x57a84c.onerror = _0x57a84c.onabort = function () {
              _0x1656d2();
            };
            _0x57a84c.open("GET", _0x55a556 + "&uuid=" + _0x48e55d);
            another = _0x57a84c;
            another.send();
            _0x57a84c.send();
          });
        } catch (_0x3d401f) {
          _0x1656d2();
        }
      } else if (window.console && window.console.error instanceof Function && window.console.error.constructor === Function) {
        window.console.error("Invalid invocation parameters passed");
      }
    }
    _0x5c2cdf();
    if (!(window.atAsyncContainers instanceof Object && window.atAsyncContainers.constructor === Object)) {
      window.atAsyncContainers = {};
    }
    if (window.atOptions instanceof Object && window.atOptions.constructor === Object) {
      _0xd7f297(window.atOptions);
      delete window.atOptions;
    } else {
      if (window.atAsyncOptions instanceof Array && window.atAsyncOptions.constructor === Array) {
        var _0x2b4fa = 0x0;
        for (var _0xa73d25 = window.atAsyncOptions.length; _0x2b4fa < _0xa73d25; _0x2b4fa++) {
          if (window.atAsyncOptions[_0x2b4fa] instanceof Object && window.atAsyncOptions[_0x2b4fa].constructor === Object) {
            _0xd7f297(window.atAsyncOptions.splice(_0x2b4fa, 0x1)[0x0]);
          }
        }
      }
    }
  }
  var _0x25d890;
  function _0xc73f93(_0x5cec38) {
    var _0x3bcb87;
    if (_0x5cec38) {
      (_0x3bcb87 = document.createElement("script")).async = true;
      _0x3bcb87.src = "//dresserderange.com/" + _0x5cec38.substr(0x0, 0x2) + '/' + _0x5cec38.substr(0x2, 0x2) + '/' + _0x5cec38.substr(0x4, 0x2) + '/' + _0x5cec38 + ".js";
      document.head.appendChild(_0x3bcb87);
    }
  }
  (_0x25d890 = _0x2dd244)((null !== (_0x25d890 = function () {
    try {
      return window.top.document.getElementsByTagName("head")[0x0];
    } catch (_0x17b704) {
      return document.getElementsByTagName('head')[0x0];
    }
  }()) && null != (_0x25d890 = _0x25d890.getElementsByTagName("title")[0x0]) ? "textContent" in _0x25d890 ? _0x25d890.textContent : "innerText" in _0x25d890 ? _0x25d890.innerText : '' : '').toLowerCase().replace(/[^a-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF+-]+/g, " ").split(" ").filter(function (_0x168d33) {
    return !!_0x168d33;
  }));
  var _0x25d890 = '';
}();
