var e, n;
("function" == typeof (e = globalThis.define) && ((n = e), (e = null)),
  (function (n, t, o, r, u) {
    var i =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      f = "function" == typeof i[r] && i[r],
      l = f.cache || {},
      c =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function d(e, t) {
      if (!l[e]) {
        if (!n[e]) {
          var o = "function" == typeof i[r] && i[r];
          if (!t && o) return o(e, !0);
          if (f) return f(e, !0);
          if (c && "string" == typeof e) return c(e);
          var u = Error("Cannot find module '" + e + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        ((a.resolve = function (t) {
          var o = n[e][1][t];
          return null != o ? o : t;
        }),
          (a.cache = {}));
        var s = (l[e] = new d.Module(e));
        n[e][0].call(s.exports, a, s, s.exports, this);
      }
      return l[e].exports;
      function a(e) {
        var n = a.resolve(e);
        return !1 === n ? {} : d(n);
      }
    }
    ((d.isParcelRequire = !0),
      (d.Module = function (e) {
        ((this.id = e), (this.bundle = d), (this.exports = {}));
      }),
      (d.modules = n),
      (d.cache = l),
      (d.parent = f),
      (d.register = function (e, t) {
        n[e] = [
          function (e, n) {
            n.exports = t;
          },
          {},
        ];
      }),
      Object.defineProperty(d, "root", {
        get: function () {
          return i[r];
        },
      }),
      (i[r] = d));
    for (var s = 0; s < t.length; s++) d(t[s]);
    if (o) {
      var a = d(o);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = a)
        : "function" == typeof e && e.amd
          ? e(function () {
              return a;
            })
          : u && (this[u] = a);
    }
  })(
    {
      "6biGh": [
        function (e, n, t) {
          var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (o.defineInteropFlag(t), o.export(t, "getComments", () => r));
          let r = async (e, n) => await e.getComments(n);
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      cHUbl: [
        function (e, n, t) {
          ((t.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (t.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (t.exportAll = function (e, n) {
              return (
                Object.keys(e).forEach(function (t) {
                  "default" === t ||
                    "__esModule" === t ||
                    n.hasOwnProperty(t) ||
                    Object.defineProperty(n, t, {
                      enumerable: !0,
                      get: function () {
                        return e[t];
                      },
                    });
                }),
                n
              );
            }),
            (t.export = function (e, n, t) {
              Object.defineProperty(e, n, { enumerable: !0, get: t });
            }));
        },
        {},
      ],
    },
    [],
    null,
    "parcelRequirea422",
  ),
  (globalThis.define = n));
