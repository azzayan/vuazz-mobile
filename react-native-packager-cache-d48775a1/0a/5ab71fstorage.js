/*! @license Firebase v3.8.0
Build: rev-69367dd
Terms: https://firebase.google.com/terms/ */

var firebase = require('./app');
(function () {
  (function () {
    for (var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    }, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, n = ["Number", "MIN_SAFE_INTEGER"], ba = 0; ba < n.length - 1; ba++) {
      var ca = n[ba];ca in l || (l[ca] = {});l = l[ca];
    }var da = n[n.length - 1];
    -9007199254740991 != l[da] && aa(l, da, { configurable: !0, writable: !0, value: -9007199254740991 });
    var p = this,
        q = function q(a) {
      return void 0 !== a;
    },
        ea = function ea(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    };var r = function r(a, b) {
      this.code = "storage/" + a;this.message = "Firebase Storage: " + b;this.serverResponse = null;this.name = "FirebaseError";
    };(function () {
      var a = Error;function b() {}b.prototype = a.prototype;r.b = a.prototype;r.prototype = new b();r.a = function (b, d, e) {
        for (var c = Array(arguments.length - 2), f = 2; f < arguments.length; f++) {
          c[f - 2] = arguments[f];
        }return a.prototype[d].apply(b, c);
      };
    })();
    var fa = function fa() {
      return new r("unknown", "An unknown error occurred, please check the error payload for server response.");
    },
        ga = function ga() {
      return new r("canceled", "User canceled the upload/download.");
    },
        ha = function ha() {
      return new r("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
    },
        ia = function ia(a, b, c) {
      return new r("invalid-argument", "Invalid argument in `" + b + "` at index " + a + ": " + c);
    },
        ja = function ja() {
      return new r("app-deleted", "The Firebase app was deleted.");
    },
        t = function t(a, b) {
      return new r("invalid-format", "String does not match format '" + a + "': " + b);
    },
        u = function u(a) {
      throw new r("internal-error", "Internal error: " + a);
    };var v = "https://firebasestorage.googleapis.com";var ka = function ka(a) {
      if ("undefined" !== typeof firebase) return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");
    };var la = function la(a, b) {
      return -1 !== a.indexOf(b);
    };var ma = function ma(a, b, c) {
      function d() {
        C || (C = !0, b.apply(null, arguments));
      }function e(b) {
        m = setTimeout(function () {
          m = null;a(g, 2 === y);
        }, b);
      }function g(a, b) {
        if (!C) if (a) d.apply(null, arguments);else if (2 === y || z) d.apply(null, arguments);else {
          64 > k && (k *= 2);var c;1 === y ? (y = 2, c = 0) : c = 1E3 * (k + Math.random());e(c);
        }
      }function f(a) {
        Pa || (Pa = !0, C || (null !== m ? (a || (y = 2), clearTimeout(m), e(0)) : a || (y = 1)));
      }var k = 1,
          m = null,
          z = !1,
          y = 0,
          C = !1,
          Pa = !1;e(0);setTimeout(function () {
        z = !0;f(!0);
      }, c);return f;
    };var na = function na(a, b) {
      for (var c in a) {
        Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
      }
    },
        oa = function oa(a) {
      var b = {};na(a, function (a, d) {
        b[a] = d;
      });return b;
    };var w = function w(a, b, c, d) {
      this.l = a;this.b = {};this.method = b;this.headers = {};this.body = null;this.m = c;this.c = this.a = null;this.f = [200];this.i = [];this.timeout = d;this.g = !0;
    };var pa = function pa(a) {
      var b = encodeURIComponent,
          c = "?";na(a, function (a, e) {
        a = b(a) + "=" + b(e);c = c + a + "&";
      });return c = c.slice(0, -1);
    };var ra = function ra(a, b, c, d, e, g, f, k, m, z, y) {
      this.F = a;this.D = b;this.A = c;this.u = d;this.B = e.slice();this.s = g.slice();this.m = this.o = this.c = this.b = null;this.g = this.i = !1;this.v = f;this.l = k;this.f = z;this.G = y;this.C = m;var C = this;this.w = ka(function (a, b) {
        C.o = a;C.m = b;qa(C);
      });
    },
        sa = function sa(a, b, c) {
      this.b = a;this.c = b;this.a = !!c;
    },
        qa = function qa(a) {
      function b(a, b) {
        function c(a) {
          d.f(a.loaded, a.lengthComputable ? a.total : -1);
        }b ? a(!1, new sa(!1, null, !0)) : (b = new ta(), b.h.withCredentials = d.G, d.b = b, null !== d.f && q(b.h.upload) && b.h.upload.addEventListener("progress", c), ua(b, d.F, d.D, d.u, d.A).then(function (b) {
          null !== d.f && q(b.h.upload) && b.h.upload.removeEventListener("progress", c);d.b = null;var e = 0 === va(b),
              f = x(b);if (!(e = !e)) var e = la([408, 429], f),
              g = la(d.s, f),
              e = 500 <= f && 600 > f || e || g;e ? (b = 2 === va(b), a(!1, new sa(!1, null, b))) : a(!0, new sa(la(d.B, f), b));
        }));
      }function c(a, b) {
        var c = d.o;a = d.m;var e = b.c;if (b.b) try {
          var g = d.v(e, wa(e));q(g) ? c(g) : c();
        } catch (z) {
          a(z);
        } else null !== e ? (b = fa(), g = wa(e), b.serverResponse = g, d.l ? a(d.l(e, b)) : a(b)) : (b = b.a ? d.g ? ja() : ga() : new r("retry-limit-exceeded", "Max retry time for operation exceeded, please try again."), a(b));
      }var d = a;a.i ? c(0, new sa(!1, null, !0)) : a.c = ma(b, c, a.C);
    };ra.prototype.a = function () {
      return this.w;
    };ra.prototype.cancel = function (a) {
      this.i = !0;this.g = a || !1;null !== this.c && (0, this.c)(!1);null !== this.b && this.b.abort();
    };
    var xa = function xa(a, b, c) {
      var d = pa(a.b),
          d = a.l + d,
          e = a.headers ? oa(a.headers) : {};null !== b && 0 < b.length && (e.Authorization = "Firebase " + b);e["X-Firebase-Storage-Version"] = "webjs/" + ("undefined" !== typeof firebase ? firebase.SDK_VERSION : "AppManager");return new ra(d, a.method, e, a.body, a.f, a.i, a.m, a.a, a.timeout, a.c, c);
    };var ya = function ya(a) {
      this.b = firebase.Promise.reject(a);
    };ya.prototype.a = function () {
      return this.b;
    };ya.prototype.cancel = function () {};var A = function A(a, b) {
      this.bucket = a;this.path = b;
    },
        za = function za(a) {
      var b = encodeURIComponent;return "/b/" + b(a.bucket) + "/o/" + b(a.path);
    },
        Ba = function Ba(a) {
      var b;try {
        b = Aa(a);
      } catch (c) {
        return new A(a, "");
      }if ("" === b.path) return b;throw new r("invalid-default-bucket", "Invalid default bucket '" + a + "'.");
    },
        Aa = function Aa(a) {
      for (var b = null, c = [{ M: /^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i, H: { bucket: 1, path: 3 }, L: function L(a) {
          "/" === a.path.charAt(a.path.length - 1) && (a.path = a.path.slice(0, -1));
        } }, { M: /^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
        H: { bucket: 1, path: 3 }, L: function L(a) {
          a.path = decodeURIComponent(a.path);
        } }], d = 0; d < c.length; d++) {
        var e = c[d],
            g = e.M.exec(a);if (g) {
          b = g[e.H.bucket];(g = g[e.H.path]) || (g = "");b = new A(b, g);e.L(b);break;
        }
      }if (null == b) throw new r("invalid-url", "Invalid URL '" + a + "'.");return b;
    };var Ca = function Ca() {
      this.a = {};this.b = Number.MIN_SAFE_INTEGER;
    },
        Da = function Da(a, b) {
      function c() {
        delete e.a[d];
      }var d = a.b;a.b++;a.a[d] = b;var e = a;b.a().then(c, c);
    },
        Ea = function Ea(a) {
      na(a.a, function (a, c) {
        c && c.cancel(!0);
      });a.a = {};
    };var B = function B(a) {
      return q(a) && null !== a;
    },
        Fa = function Fa(a) {
      return "string" === typeof a || a instanceof String;
    },
        Ga = function Ga() {
      return "undefined" !== typeof Blob;
    };var Ha = function Ha(a, b, c, d, e) {
      this.a = a;this.g = null;null !== this.a && (a = this.a.options, B(a) && (a = a.storageBucket || null, this.g = null == a ? null : Ba(a).bucket));this.s = b;this.o = c;this.l = e;this.m = d;this.c = 12E4;this.b = 6E4;this.i = new Ca();this.f = !1;
    },
        Ia = function Ia(a) {
      return null !== a.a && B(a.a.INTERNAL) && B(a.a.INTERNAL.getToken) ? a.a.INTERNAL.getToken().then(function (a) {
        return B(a) ? a.accessToken : null;
      }, function () {
        return null;
      }) : firebase.Promise.resolve(null);
    };Ha.prototype.bucket = function () {
      if (this.f) throw ja();return this.g;
    };
    var D = function D(a, b, c) {
      if (a.f) return new ya(ja());b = a.o(b, c, null === a.a, a.l);Da(a.i, b);return b;
    };var Ja = function Ja(a, b) {
      b = b.split("/").filter(function (a) {
        return 0 < a.length;
      }).join("/");return 0 === a.length ? b : a + "/" + b;
    },
        Ka = function Ka(a) {
      var b = a.lastIndexOf("/", a.length - 2);return -1 === b ? a : a.slice(b + 1);
    };var La = function La(a, b) {
      return b;
    },
        E = function E(a, b, c, d) {
      this.c = a;this.b = b || a;this.writable = !!c;this.a = d || La;
    },
        Ma = null,
        Na = function Na() {
      if (Ma) return Ma;var a = [];a.push(new E("bucket"));a.push(new E("generation"));a.push(new E("metageneration"));a.push(new E("name", "fullPath", !0));var b = new E("name");b.a = function (a, b) {
        return !Fa(b) || 2 > b.length ? b : Ka(b);
      };a.push(b);b = new E("size");b.a = function (a, b) {
        return B(b) ? +b : b;
      };a.push(b);a.push(new E("timeCreated"));a.push(new E("updated"));a.push(new E("md5Hash", null, !0));
      a.push(new E("cacheControl", null, !0));a.push(new E("contentDisposition", null, !0));a.push(new E("contentEncoding", null, !0));a.push(new E("contentLanguage", null, !0));a.push(new E("contentType", null, !0));a.push(new E("metadata", "customMetadata", !0));a.push(new E("downloadTokens", "downloadURLs", !1, function (a, b) {
        if (!(Fa(b) && 0 < b.length)) return [];var c = encodeURIComponent;return b.split(",").map(function (b) {
          var d = a.fullPath,
              d = "https://firebasestorage.googleapis.com/v0" + ("/b/" + c(a.bucket) + "/o/" + c(d));b = pa({ alt: "media",
            token: b });return d + b;
        });
      }));return Ma = a;
    },
        Oa = function Oa(a, b) {
      Object.defineProperty(a, "ref", { get: function get() {
          return b.s(b, new A(a.bucket, a.fullPath));
        } });
    },
        Qa = function Qa(a, b) {
      for (var c = {}, d = b.length, e = 0; e < d; e++) {
        var g = b[e];g.writable && (c[g.c] = a[g.b]);
      }return JSON.stringify(c);
    },
        Ra = function Ra(a) {
      if (!a || "object" !== typeof a) throw "Expected Metadata object.";for (var b in a) {
        var c = a[b];if ("customMetadata" === b) {
          if ("object" !== typeof c) throw "Expected object for 'customMetadata' mapping.";
        } else if (null != c && "object" === typeof c) throw "Mapping for '" + b + "' cannot be an object.";
      }
    };var F = function F(a, b, c) {
      for (var d = b.length, e = b.length, g = 0; g < b.length; g++) {
        if (b[g].b) {
          d = g;break;
        }
      }if (!(d <= c.length && c.length <= e)) throw d === e ? (b = d, d = 1 === d ? "argument" : "arguments") : (b = "between " + d + " and " + e, d = "arguments"), new r("invalid-argument-count", "Invalid argument count in `" + a + "`: Expected " + b + " " + d + ", received " + c.length + ".");for (g = 0; g < c.length; g++) {
        try {
          b[g].a(c[g]);
        } catch (f) {
          if (f instanceof Error) throw ia(g, a, f.message);throw ia(g, a, f);
        }
      }
    },
        G = function G(a, b) {
      var c = this;this.a = function (b) {
        c.b && !q(b) || a(b);
      };
      this.b = !!b;
    },
        Sa = function Sa(a, b) {
      return function (c) {
        a(c);b(c);
      };
    },
        H = function H(a, b) {
      function c(a) {
        if (!("string" === typeof a || a instanceof String)) throw "Expected string.";
      }var d;a ? d = Sa(c, a) : d = c;return new G(d, b);
    },
        Ta = function Ta() {
      return new G(function (a) {
        if (!(a instanceof Uint8Array || a instanceof ArrayBuffer || Ga() && a instanceof Blob)) throw "Expected Blob or File.";
      });
    },
        Ua = function Ua() {
      return new G(function (a) {
        if (!(("number" === typeof a || a instanceof Number) && 0 <= a)) throw "Expected a number 0 or greater.";
      });
    },
        Va = function Va(a, b) {
      return new G(function (b) {
        if (!(null === b || B(b) && b instanceof Object)) throw "Expected an Object.";B(a) && a(b);
      }, b);
    },
        I = function I() {
      return new G(function (a) {
        if (null !== a && "function" != ea(a)) throw "Expected a Function.";
      }, !0);
    };var J = function J(a) {
      return function () {
        var b = [];Array.prototype.push.apply(b, arguments);firebase.Promise.resolve(!0).then(function () {
          a.apply(null, b);
        });
      };
    };var Wa = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        Xa = function Xa(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var K;a: {
      var Ya = p.navigator;if (Ya) {
        var Za = Ya.userAgent;if (Za) {
          K = Za;break a;
        }
      }K = "";
    };var ab = function ab(a, b) {
      var c = $a;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var bb = -1 != K.indexOf("Opera"),
        cb = -1 != K.indexOf("Trident") || -1 != K.indexOf("MSIE"),
        db = -1 != K.indexOf("Edge"),
        eb = -1 != K.indexOf("Gecko") && !(-1 != K.toLowerCase().indexOf("webkit") && -1 == K.indexOf("Edge")) && !(-1 != K.indexOf("Trident") || -1 != K.indexOf("MSIE")) && -1 == K.indexOf("Edge"),
        fb = -1 != K.toLowerCase().indexOf("webkit") && -1 == K.indexOf("Edge"),
        gb;
    a: {
      var hb = "",
          ib = function () {
        var a = K;if (eb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (db) return (/Edge\/([\d\.]+)/.exec(a)
        );if (cb) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (fb) return (/WebKit\/(\S+)/.exec(a)
        );if (bb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();ib && (hb = ib ? ib[1] : "");if (cb) {
        var jb,
            kb = p.document;jb = kb ? kb.documentMode : void 0;if (null != jb && jb > parseFloat(hb)) {
          gb = String(jb);break a;
        }
      }gb = hb;
    }
    var lb = gb,
        $a = {},
        mb = function mb(a) {
      return ab(a, function () {
        for (var b = 0, c = Wa(String(lb)).split("."), d = Wa(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
          var f = c[g] || "",
              k = d[g] || "";do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == f[0].length && 0 == k[0].length) break;b = Xa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Xa(0 == f[2].length, 0 == k[2].length) || Xa(f[2], k[2]);f = f[3];k = k[3];
          } while (0 == b);
        }return 0 <= b;
      });
    };var nb = function nb(a) {
      var b = p.BlobBuilder || p.WebKitBlobBuilder;if (q(b)) {
        for (var b = new b(), c = 0; c < arguments.length; c++) {
          b.append(arguments[c]);
        }return b.getBlob();
      }b = Array.prototype.slice.call(arguments);c = p.BlobBuilder || p.WebKitBlobBuilder;if (q(c)) {
        for (var c = new c(), d = 0; d < b.length; d++) {
          c.append(b[d], void 0);
        }b = c.getBlob(void 0);
      } else if (q(p.Blob)) b = new Blob(b, {});else throw Error("This browser doesn't seem to support creating Blobs");return b;
    },
        ob = function ob(a, b, c) {
      q(c) || (c = a.size);return a.webkitSlice ? a.webkitSlice(b, c) : a.mozSlice ? a.mozSlice(b, c) : a.slice ? eb && !mb("13.0") || fb && !mb("537.1") ? (0 > b && (b += a.size), 0 > b && (b = 0), 0 > c && (c += a.size), c < b && (c = b), a.slice(b, c - b)) : a.slice(b, c) : null;
    };var L = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" },
        pb = function pb(a) {
      switch (a) {case "raw":case "base64":case "base64url":case "data_url":
          break;default:
          throw "Expected one of the event types: [raw, base64, base64url, data_url].";}
    },
        qb = function qb(a, b) {
      this.data = a;this.a = b || null;
    },
        ub = function ub(a, b) {
      switch (a) {case "raw":
          return new qb(rb(b));case "base64":case "base64url":
          return new qb(sb(a, b));case "data_url":
          a = new tb(b);var c;if (a.a) c = sb("base64", a.c);else {
            try {
              c = decodeURIComponent(a.c);
            } catch (d) {
              throw t("data_url", "Malformed data URL.");
            }c = rb(c);
          }return new qb(c, new tb(b).b);}throw fa();
    },
        rb = function rb(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);if (127 >= d) b.push(d);else if (2047 >= d) b.push(192 | d >> 6, 128 | d & 63);else if (55296 == (d & 64512)) {
          if (c < a.length - 1 && 56320 == (a.charCodeAt(c + 1) & 64512)) {
            var e = a.charCodeAt(++c),
                d = 65536 | (d & 1023) << 10 | e & 1023;b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63);
          } else b.push(239, 191, 189);
        } else 56320 == (d & 64512) ? b.push(239, 191, 189) : b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63);
      }return new Uint8Array(b);
    },
        sb = function sb(a, b) {
      switch (a) {case "base64":
          var c = -1 !== b.indexOf("-"),
              d = -1 !== b.indexOf("_");if (c || d) throw t(a, "Invalid character '" + (c ? "-" : "_") + "' found: is it base64url encoded?");break;case "base64url":
          c = -1 !== b.indexOf("+");d = -1 !== b.indexOf("/");if (c || d) throw t(a, "Invalid character '" + (c ? "+" : "/") + "' found: is it base64 encoded?");b = b.replace(/-/g, "+").replace(/_/g, "/");}var e;try {
        e = atob(b);
      } catch (g) {
        throw t(a, "Invalid character found");
      }a = new Uint8Array(e.length);for (b = 0; b < e.length; b++) {
        a[b] = e.charCodeAt(b);
      }return a;
    },
        tb = function tb(a) {
      var b = a.match(/^data:([^,]+)?,/);if (null === b) throw t("data_url", "Must be formatted 'data:[<mediatype>][;base64],<data>");b = b[1] || null;this.a = !1;this.b = null;if (null != b) {
        var c = b.length - 7;this.b = (this.a = 0 <= c && b.indexOf(";base64", c) == c) ? b.substring(0, b.length - 7) : b;
      }this.c = a.substring(a.indexOf(",") + 1);
    };var M = function M(a, b) {
      Ga() && a instanceof Blob ? (this.j = a, b = a.size, a = a.type) : (a instanceof ArrayBuffer ? (b ? this.j = new Uint8Array(a) : (this.j = new Uint8Array(a.byteLength), this.j.set(new Uint8Array(a))), b = this.j.length) : (b ? this.j = a : (this.j = new Uint8Array(a.length), this.j.set(a)), b = a.length), a = "");this.a = b;this.b = a;
    };M.prototype.type = function () {
      return this.b;
    };
    M.prototype.slice = function (a, b) {
      if (Ga() && this.j instanceof Blob) return a = ob(this.j, a, b), null === a ? null : new M(a);a = new Uint8Array(this.j.buffer, a, b - a);return new M(a, !0);
    };
    var vb = function vb(a) {
      var b = [];Array.prototype.push.apply(b, arguments);if (Ga()) return b = b.map(function (a) {
        return a instanceof M ? a.j : a;
      }), new M(nb.apply(null, b));var b = b.map(function (a) {
        return Fa(a) ? ub("raw", a).data : a.j;
      }),
          c = 0;b.forEach(function (a) {
        c += a.byteLength;
      });var d = new Uint8Array(c),
          e = 0;b.forEach(function (a) {
        for (var b = 0; b < a.length; b++) {
          d[e++] = a[b];
        }
      });return new M(d, !0);
    };var wb = function wb(a, b, c) {
      "function" == ea(a) || B(b) || B(c) ? (this.b = a, this.error = b || null, this.a = c || null) : (this.b = a.next || null, this.error = a.error || null, this.a = a.complete || null);
    };var N = function N(a) {
      if (!a) throw fa();
    },
        xb = function xb(a, b) {
      return function (c, d) {
        var e;a: {
          try {
            e = JSON.parse(d);
          } catch (k) {
            e = null;break a;
          }c = typeof e;e = "object" == c && null != e || "function" == c ? e : null;
        }if (null === e) e = null;else {
          c = { type: "file" };d = b.length;for (var g = 0; g < d; g++) {
            var f = b[g];c[f.b] = f.a(c, e[f.c]);
          }Oa(c, a);e = c;
        }N(null !== e);return e;
      };
    },
        O = function O(a) {
      return function (b, c) {
        b = 401 === x(b) ? new r("unauthenticated", "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === x(b) ? new r("quota-exceeded", "Quota for bucket '" + a.bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.") : 403 === x(b) ? new r("unauthorized", "User does not have permission to access '" + a.path + "'.") : c;b.serverResponse = c.serverResponse;return b;
      };
    },
        yb = function yb(a) {
      var b = O(a);return function (c, d) {
        var e = b(c, d);404 === x(c) && (e = new r("object-not-found", "Object '" + a.path + "' does not exist."));e.serverResponse = d.serverResponse;return e;
      };
    },
        zb = function zb(a, b, c) {
      var d = za(b);a = new w(v + "/v0" + d, "GET", xb(a, c), a.c);a.a = yb(b);return a;
    },
        Ab = function Ab(a, b) {
      var c = za(b);a = new w(v + "/v0" + c, "DELETE", function () {}, a.c);a.f = [200, 204];a.a = yb(b);return a;
    },
        Bb = function Bb(a, b, c) {
      c = c ? oa(c) : {};c.fullPath = a.path;c.size = b.a;c.contentType || (a = b && b.type() || "application/octet-stream", c.contentType = a);return c;
    },
        Cb = function Cb(a, b, c, d, e) {
      var g = "/b/" + encodeURIComponent(b.bucket) + "/o",
          f = { "X-Goog-Upload-Protocol": "multipart" },
          k;k = "";for (var m = 0; 2 > m; m++) {
        k += Math.random().toString().slice(2);
      }f["Content-Type"] = "multipart/related; boundary=" + k;e = Bb(b, d, e);m = Qa(e, c);d = vb("--" + k + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + m + "\r\n--" + k + "\r\nContent-Type: " + e.contentType + "\r\n\r\n", d, "\r\n--" + k + "--");if (null === d) throw ha();a = new w(v + "/v0" + g, "POST", xb(a, c), a.b);a.b = { name: e.fullPath };a.headers = f;a.body = d.j;a.a = O(b);return a;
    },
        Db = function Db(a, b, c, d) {
      this.current = a;this.total = b;this.I = !!c;this.metadata = d || null;
    },
        Eb = function Eb(a, b) {
      var c;try {
        c = a.h.getResponseHeader("X-Goog-Upload-Status");
      } catch (d) {
        N(!1);
      }N(la(b || ["active"], c));return c;
    },
        Fb = function Fb(a, b, c, d, e) {
      var g = "/b/" + encodeURIComponent(b.bucket) + "/o",
          f = Bb(b, d, e);e = { name: f.fullPath };g = v + "/v0" + g;d = { "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": d.a, "X-Goog-Upload-Header-Content-Type": f.contentType, "Content-Type": "application/json; charset=utf-8" };c = Qa(f, c);a = new w(g, "POST", function (a) {
        Eb(a);var b;try {
          b = a.h.getResponseHeader("X-Goog-Upload-URL");
        } catch (z) {
          N(!1);
        }N(Fa(b));return b;
      }, a.b);a.b = e;a.headers = d;a.body = c;a.a = O(b);
      return a;
    },
        Gb = function Gb(a, b, c, d) {
      a = new w(c, "POST", function (a) {
        var b = Eb(a, ["active", "final"]),
            c;try {
          c = a.h.getResponseHeader("X-Goog-Upload-Size-Received");
        } catch (k) {
          N(!1);
        }a = c;isFinite(a) && (a = String(a));a = "string" == typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;N(!isNaN(a));return new Db(a, d.a, "final" === b);
      }, a.b);a.headers = { "X-Goog-Upload-Command": "query" };a.a = O(b);a.g = !1;return a;
    },
        Hb = function Hb(a, b, c, d, e, g, f, k) {
      var m = new Db(0, 0);f ? (m.current = f.current, m.total = f.total) : (m.current = 0, m.total = d.a);if (d.a !== m.total) throw new r("server-file-wrong-size", "Server recorded incorrect upload file size, please retry the upload.");var z = f = m.total - m.current;0 < e && (z = Math.min(z, e));var y = m.current;e = { "X-Goog-Upload-Command": z === f ? "upload, finalize" : "upload", "X-Goog-Upload-Offset": m.current };f = d.slice(y, y + z);if (null === f) throw ha();c = new w(c, "POST", function (a, c) {
        var e = Eb(a, ["active", "final"]),
            f = m.current + z,
            k = d.a,
            y;"final" === e ? y = xb(b, g)(a, c) : y = null;return new Db(f, k, "final" === e, y);
      }, b.b);c.headers = e;c.body = f.j;c.c = k || null;c.a = O(a);c.g = !1;return c;
    };var Ib = { STATE_CHANGED: "state_changed" },
        P = { RUNNING: "running", PAUSED: "paused", SUCCESS: "success", CANCELED: "canceled", ERROR: "error" },
        Jb = function Jb(a) {
      switch (a) {case "running":case "pausing":case "canceling":
          return "running";case "paused":
          return "paused";case "success":
          return "success";case "canceled":
          return "canceled";case "error":
          return "error";default:
          return "error";}
    };var ta = function ta() {
      var a = this;this.h = new XMLHttpRequest();this.b = 0;this.c = ka(function (b) {
        a.h.addEventListener("abort", function () {
          a.b = 2;b(a);
        });a.h.addEventListener("error", function () {
          a.b = 1;b(a);
        });a.h.addEventListener("load", function () {
          b(a);
        });
      });this.a = !1;
    },
        ua = function ua(a, b, c, d, e) {
      if (a.a) throw u("cannot .send() more than once");a.a = !0;a.h.open(c, b, !0);B(e) && na(e, function (b, c) {
        a.h.setRequestHeader(b, c.toString());
      });B(d) ? a.h.send(d) : a.h.send();return a.c;
    },
        va = function va(a) {
      if (!a.a) throw u("cannot .getErrorCode() before sending");
      return a.b;
    },
        x = function x(a) {
      if (!a.a) throw u("cannot .getStatus() before sending");try {
        return a.h.status;
      } catch (b) {
        return -1;
      }
    },
        wa = function wa(a) {
      if (!a.a) throw u("cannot .getResponseText() before sending");return a.h.responseText;
    };ta.prototype.abort = function () {
      this.h.abort();
    };var Kb = function Kb() {};var Q = function Q(a, b, c, d, e, g) {
      this.b = a;this.i = b;this.f = c;this.a = d;this.g = e;this.c = g;
    };h = Q.prototype;h.X = function () {
      return this.b;
    };h.sa = function () {
      return this.i;
    };h.pa = function () {
      return this.f;
    };h.ka = function () {
      return this.a;
    };h.Y = function () {
      if (B(this.a)) {
        var a = this.a.downloadURLs;return B(a) && B(a[0]) ? a[0] : null;
      }return null;
    };h.ra = function () {
      return this.g;
    };h.na = function () {
      return this.c;
    };var T = function T(a, b, c, d, e, g) {
      var f = this;this.O = a;this.c = b;this.o = c;this.f = e;this.i = void 0 === g ? null : g;this.u = d;this.l = 0;this.G = this.w = !1;this.B = [];this.U = 262144 < this.f.a;this.b = "running";this.a = this.A = this.g = null;this.m = 1;this.s = function (a) {
        f.a = null;f.m = 1;"storage/canceled" === a.code ? (f.w = !0, R(f)) : (f.g = a, S(f, "error"));
      };this.N = function (a) {
        f.a = null;"storage/canceled" === a.code ? R(f) : (f.g = a, S(f, "error"));
      };this.D = this.v = null;this.F = ka(function (a, b) {
        f.v = a;f.D = b;Lb(f);
      });this.F.then(null, function () {});
    },
        Nb = function Nb(a) {
      var b = a.l;return function (c) {
        Mb(a, b + c);
      };
    },
        Lb = function Lb(a) {
      "running" === a.b && null === a.a && (a.U ? null === a.A ? Ob(a) : a.w ? Pb(a) : a.G ? Qb(a) : Rb(a) : Sb(a));
    },
        U = function U(a, b) {
      Ia(a.c).then(function (c) {
        switch (a.b) {case "running":
            b(c);break;case "canceling":
            S(a, "canceled");break;case "pausing":
            S(a, "paused");}
      });
    },
        Ob = function Ob(a) {
      U(a, function (b) {
        var c = Fb(a.c, a.o, a.u, a.f, a.i);a.a = D(a.c, c, b);a.a.a().then(function (b) {
          a.a = null;a.A = b;a.w = !1;R(a);
        }, a.s);
      });
    },
        Pb = function Pb(a) {
      var b = a.A;U(a, function (c) {
        var d = Gb(a.c, a.o, b, a.f);a.a = D(a.c, d, c);
        a.a.a().then(function (b) {
          a.a = null;Mb(a, b.current);a.w = !1;b.I && (a.G = !0);R(a);
        }, a.s);
      });
    },
        Rb = function Rb(a) {
      var b = 262144 * a.m,
          c = new Db(a.l, a.f.a),
          d = a.A;U(a, function (e) {
        var g;try {
          g = Hb(a.o, a.c, d, a.f, b, a.u, c, Nb(a));
        } catch (f) {
          a.g = f;S(a, "error");return;
        }a.a = D(a.c, g, e);a.a.a().then(function (b) {
          33554432 > 262144 * a.m && (a.m *= 2);a.a = null;Mb(a, b.current);b.I ? (a.i = b.metadata, S(a, "success")) : R(a);
        }, a.s);
      });
    },
        Qb = function Qb(a) {
      U(a, function (b) {
        var c = zb(a.c, a.o, a.u);a.a = D(a.c, c, b);a.a.a().then(function (b) {
          a.a = null;a.i = b;S(a, "success");
        }, a.N);
      });
    },
        Sb = function Sb(a) {
      U(a, function (b) {
        var c = Cb(a.c, a.o, a.u, a.f, a.i);a.a = D(a.c, c, b);a.a.a().then(function (b) {
          a.a = null;a.i = b;Mb(a, a.f.a);S(a, "success");
        }, a.s);
      });
    },
        Mb = function Mb(a, b) {
      var c = a.l;a.l = b;a.l !== c && V(a);
    },
        S = function S(a, b) {
      if (a.b !== b) switch (b) {case "canceling":
          a.b = b;null !== a.a && a.a.cancel();break;case "pausing":
          a.b = b;null !== a.a && a.a.cancel();break;case "running":
          var c = "paused" === a.b;a.b = b;c && (V(a), Lb(a));break;case "paused":
          a.b = b;V(a);break;case "canceled":
          a.g = ga();a.b = b;V(a);break;case "error":
          a.b = b;V(a);break;case "success":
          a.b = b, V(a);}
    },
        R = function R(a) {
      switch (a.b) {case "pausing":
          S(a, "paused");break;case "canceling":
          S(a, "canceled");break;case "running":
          Lb(a);}
    };T.prototype.C = function () {
      return new Q(this.l, this.f.a, Jb(this.b), this.i, this, this.O);
    };
    T.prototype.P = function (a, b, c, d) {
      function e(a) {
        try {
          f(a);return;
        } catch (C) {}try {
          if (k(a), !(q(a.next) || q(a.error) || q(a.complete))) throw "";
        } catch (C) {
          throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
        }
      }function g(a) {
        return function (b, c, d) {
          null !== a && F("on", a, arguments);var e = new wb(b, c, d);m.B.push(e);Tb(m, e);return function () {
            var a = m.B,
                b = a.indexOf(e);-1 !== b && a.splice(b, 1);
          };
        };
      }var f = I().a,
          k = Va(null, !0).a;F("on", [H(function () {
        if ("state_changed" !== a) throw "Expected one of the event types: [state_changed].";
      }), Va(e, !0), I(), I()], arguments);var m = this,
          z = [Va(function (a) {
        if (null === a) throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a);
      }), I(), I()];return q(b) || q(c) || q(d) ? g(null)(b, c, d) : g(z);
    };T.prototype.then = function (a, b) {
      return this.F.then(void 0 === a ? null : a, void 0 === b ? null : b);
    };T.prototype["catch"] = function (a) {
      return this.then(null, a);
    };
    var V = function V(a) {
      Ub(a);Array.prototype.slice.call(a.B).forEach(function (b) {
        Tb(a, b);
      });
    },
        Ub = function Ub(a) {
      if (null !== a.v) {
        var b = !0;switch (Jb(a.b)) {case "success":
            J(a.v.bind(null, a.C()))();break;case "canceled":case "error":
            J(a.D.bind(null, a.g))();break;default:
            b = !1;}b && (a.v = null, a.D = null);
      }
    },
        Tb = function Tb(a, b) {
      switch (Jb(a.b)) {case "running":case "paused":
          null !== b.b && J(b.b.bind(b, a.C()))();break;case "success":
          null !== b.a && J(b.a.bind(b))();break;case "canceled":case "error":
          null !== b.error && J(b.error.bind(b, a.g))();break;default:
          null !== b.error && J(b.error.bind(b, a.g))();}
    };T.prototype.T = function () {
      F("resume", [], arguments);var a = "paused" === this.b || "pausing" === this.b;a && S(this, "running");return a;
    };T.prototype.R = function () {
      F("pause", [], arguments);var a = "running" === this.b;a && S(this, "pausing");return a;
    };T.prototype.cancel = function () {
      F("cancel", [], arguments);var a = "running" === this.b || "pausing" === this.b;a && S(this, "canceling");return a;
    };var W = function W(a, b) {
      this.a = a;this.location = b instanceof A ? b : Aa(b);
    };W.prototype.toString = function () {
      F("toString", [], arguments);return "gs://" + this.location.bucket + "/" + this.location.path;
    };var Vb = function Vb(a, b) {
      return new W(a, b);
    };h = W.prototype;h.J = function (a) {
      F("child", [H()], arguments);var b = Ja(this.location.path, a);return Vb(this.a, new A(this.location.bucket, b));
    };
    h.ma = function () {
      var a;a = this.location.path;if (0 == a.length) a = null;else {
        var b = a.lastIndexOf("/");a = -1 === b ? "" : a.slice(0, b);
      }return null === a ? null : Vb(this.a, new A(this.location.bucket, a));
    };h.oa = function () {
      return Vb(this.a, new A(this.location.bucket, ""));
    };h.W = function () {
      return this.location.bucket;
    };h.ha = function () {
      return this.location.path;
    };h.la = function () {
      return Ka(this.location.path);
    };h.qa = function () {
      return this.a.m;
    };
    h.aa = function (a, b) {
      F("put", [Ta(), new G(Ra, !0)], arguments);X(this, "put");return new T(this, this.a, this.location, Na(), new M(a), b);
    };h.ba = function (a, b, c) {
      F("putString", [H(), H(pb, !0), new G(Ra, !0)], arguments);X(this, "putString");var d = ub(B(b) ? b : "raw", a),
          e = c ? oa(c) : {};!B(e.contentType) && B(d.a) && (e.contentType = d.a);return new T(this, this.a, this.location, Na(), new M(d.data, !0), e);
    };
    h.Z = function () {
      F("delete", [], arguments);X(this, "delete");var a = this;return Ia(this.a).then(function (b) {
        var c = Ab(a.a, a.location);return D(a.a, c, b).a();
      });
    };h.K = function () {
      F("getMetadata", [], arguments);X(this, "getMetadata");var a = this;return Ia(this.a).then(function (b) {
        var c = zb(a.a, a.location, Na());return D(a.a, c, b).a();
      });
    };
    h.ca = function (a) {
      F("updateMetadata", [new G(Ra, void 0)], arguments);X(this, "updateMetadata");var b = this;return Ia(this.a).then(function (c) {
        var d = b.a,
            e = b.location,
            g = a,
            f = Na(),
            k = za(e),
            k = v + "/v0" + k,
            g = Qa(g, f),
            d = new w(k, "PATCH", xb(d, f), d.c);d.headers = { "Content-Type": "application/json; charset=utf-8" };d.body = g;d.a = yb(e);return D(b.a, d, c).a();
      });
    };
    h.$ = function () {
      F("getDownloadURL", [], arguments);X(this, "getDownloadURL");return this.K().then(function (a) {
        a = a.downloadURLs[0];if (B(a)) return a;throw new r("no-download-url", "The given file does not have any download URLs.");
      });
    };var X = function X(a, b) {
      if ("" === a.location.path) throw new r("invalid-root-operation", "The operation '" + b + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
    };var Y = function Y(a, b, c) {
      this.a = new Ha(a, function (a, b) {
        return new W(a, b);
      }, xa, this, b);this.c = a;q(c) ? this.b = Ba(c) : null != this.a.bucket() && (this.b = new A(this.a.bucket(), ""));this.f = new Wb(this);
    };h = Y.prototype;h.da = function (a) {
      F("ref", [H(function (a) {
        if (/^[A-Za-z]+:\/\//.test(a)) throw "Expected child path but got a URL, use refFromURL instead.";
      }, !0)], arguments);if (null === this.b) throw Error("No Storage Bucket defined in Firebase Options.");var b = new W(this.a, this.b);return q(a) ? b.J(a) : b;
    };
    h.ea = function (a) {
      F("refFromURL", [H(function (a) {
        if (!/^[A-Za-z]+:\/\//.test(a)) throw "Expected full URL but got a child path, use ref instead.";try {
          Aa(a);
        } catch (c) {
          throw "Expected valid full URL but got an invalid one.";
        }
      }, !1)], arguments);return new W(this.a, a);
    };h.ja = function () {
      return this.a.b;
    };h.ga = function (a) {
      F("setMaxUploadRetryTime", [Ua()], arguments);this.a.b = a;
    };h.ia = function () {
      return this.a.c;
    };h.fa = function (a) {
      F("setMaxOperationRetryTime", [Ua()], arguments);this.a.c = a;
    };h.V = function () {
      return this.c;
    };
    h.S = function () {
      return this.f;
    };var Wb = function Wb(a) {
      this.a = a;
    };Wb.prototype.b = function () {
      var a = this.a.a;a.f = !0;a.a = null;Ea(a.i);
    };var Z = function Z(a, b, c) {
      Object.defineProperty(a, b, { get: c });
    };W.prototype.toString = W.prototype.toString;W.prototype.child = W.prototype.J;W.prototype.put = W.prototype.aa;W.prototype.putString = W.prototype.ba;W.prototype["delete"] = W.prototype.Z;W.prototype.getMetadata = W.prototype.K;W.prototype.updateMetadata = W.prototype.ca;W.prototype.getDownloadURL = W.prototype.$;Z(W.prototype, "parent", W.prototype.ma);Z(W.prototype, "root", W.prototype.oa);Z(W.prototype, "bucket", W.prototype.W);Z(W.prototype, "fullPath", W.prototype.ha);
    Z(W.prototype, "name", W.prototype.la);Z(W.prototype, "storage", W.prototype.qa);Y.prototype.ref = Y.prototype.da;Y.prototype.refFromURL = Y.prototype.ea;Z(Y.prototype, "maxOperationRetryTime", Y.prototype.ia);Y.prototype.setMaxOperationRetryTime = Y.prototype.fa;Z(Y.prototype, "maxUploadRetryTime", Y.prototype.ja);Y.prototype.setMaxUploadRetryTime = Y.prototype.ga;Z(Y.prototype, "app", Y.prototype.V);Z(Y.prototype, "INTERNAL", Y.prototype.S);Wb.prototype["delete"] = Wb.prototype.b;Y.prototype.capi_ = function (a) {
      v = a;
    };
    T.prototype.on = T.prototype.P;T.prototype.resume = T.prototype.T;T.prototype.pause = T.prototype.R;T.prototype.cancel = T.prototype.cancel;T.prototype.then = T.prototype.then;T.prototype["catch"] = T.prototype["catch"];Z(T.prototype, "snapshot", T.prototype.C);Z(Q.prototype, "bytesTransferred", Q.prototype.X);Z(Q.prototype, "totalBytes", Q.prototype.sa);Z(Q.prototype, "state", Q.prototype.pa);Z(Q.prototype, "metadata", Q.prototype.ka);Z(Q.prototype, "downloadURL", Q.prototype.Y);Z(Q.prototype, "task", Q.prototype.ra);
    Z(Q.prototype, "ref", Q.prototype.na);Ib.STATE_CHANGED = "state_changed";P.RUNNING = "running";P.PAUSED = "paused";P.SUCCESS = "success";P.CANCELED = "canceled";P.ERROR = "error";L.RAW = "raw";L.BASE64 = "base64";L.BASE64URL = "base64url";L.DATA_URL = "data_url";
    (function () {
      function a(a, b, e) {
        return new Y(a, new Kb(), e);
      }var b = { TaskState: P, TaskEvent: Ib, StringFormat: L, Storage: Y, Reference: W };if ("undefined" !== typeof firebase) firebase.INTERNAL.registerService("storage", a, b, void 0, !0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");
    })();
  }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.storage;