var e, t;
("function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, i, a) {
    var o =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      s = "function" == typeof o[i] && o[i],
      l = s.cache || {},
      u =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function c(e, r) {
      if (!l[e]) {
        if (!t[e]) {
          var n = "function" == typeof o[i] && o[i];
          if (!r && n) return n(e, !0);
          if (s) return s(e, !0);
          if (u && "string" == typeof e) return u(e);
          var a = Error("Cannot find module '" + e + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        ((f.resolve = function (r) {
          var n = t[e][1][r];
          return null != n ? n : r;
        }),
          (f.cache = {}));
        var d = (l[e] = new c.Module(e));
        t[e][0].call(d.exports, f, d, d.exports, this);
      }
      return l[e].exports;
      function f(e) {
        var t = f.resolve(e);
        return !1 === t ? {} : c(t);
      }
    }
    ((c.isParcelRequire = !0),
      (c.Module = function (e) {
        ((this.id = e), (this.bundle = c), (this.exports = {}));
      }),
      (c.modules = t),
      (c.cache = l),
      (c.parent = s),
      (c.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r;
          },
          {},
        ];
      }),
      Object.defineProperty(c, "root", {
        get: function () {
          return o[i];
        },
      }),
      (o[i] = c));
    for (var d = 0; d < r.length; d++) c(r[d]);
    if (n) {
      var f = c(n);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
          ? e(function () {
              return f;
            })
          : a && (this[a] = f);
    }
  })(
    {
      gtCXH: [
        function (e, t, r) {
          e("aa6087af385684dc").register(
            JSON.parse(
              '{"jHkRA":"linkedin-profile-analyzer.16e76ed2.js","fvuH8":"supabase.b8483991.js","gTbDL":"browser.67270446.js"}',
            ),
          );
        },
        { aa6087af385684dc: "amLA4" },
      ],
      amLA4: [
        function (e, t, r) {
          var n = {};
          ((t.exports.register = function (e) {
            for (var t = Object.keys(e), r = 0; r < t.length; r++)
              n[t[r]] = e[t[r]];
          }),
            (t.exports.resolve = function (e) {
              var t = n[e];
              if (null == t)
                throw Error("Could not resolve bundle with id " + e);
              return t;
            }));
        },
        {},
      ],
      gJMko: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js"),
            i = e("react/jsx-runtime"),
            a = e("react");
          n.interopDefault(a);
          var o = e("react-dom/client"),
            s = e("@plasmo-static-common/csui"),
            l = e("@plasmo-static-common/csui-container-react"),
            u = e("@plasmo-static-common/react"),
            c = e("~contents/linkedin-profile-analyzer");
          let d = (0, s.createAnchorObserver)(c),
            f = (0, s.createRender)(
              c,
              [l.InlineCSUIContainer, l.OverlayCSUIContainer],
              d?.mountState,
              async (e, t) => {
                let r = (0, o.createRoot)(t);
                e.root = r;
                let n = (0, u.getLayout)(c);
                switch (e.type) {
                  case "inline":
                    r.render(
                      (0, i.jsx)(n, {
                        children: (0, i.jsx)(l.InlineCSUIContainer, {
                          anchor: e,
                          children: (0, i.jsx)(c.default, { anchor: e }),
                        }),
                      }),
                    );
                    break;
                  case "overlay": {
                    let t = d?.mountState.overlayTargetList || [e.element];
                    r.render(
                      (0, i.jsx)(n, {
                        children: t.map((e, t) => {
                          let r = `plasmo-overlay-${t}`,
                            n = { element: e, type: "overlay" };
                          return (0, i.jsx)(
                            l.OverlayCSUIContainer,
                            {
                              id: r,
                              anchor: n,
                              watchOverlayAnchor: c.watchOverlayAnchor,
                              children: (0, i.jsx)(c.default, { anchor: n }),
                            },
                            r,
                          );
                        }),
                      }),
                    );
                  }
                }
              },
            );
          (d
            ? d.start(f)
            : f({ element: document.documentElement, type: "overlay" }),
            "function" == typeof c.watch &&
              c.watch({ observer: d, render: f }));
        },
        {
          "react/jsx-runtime": "8iOxN",
          react: "329PG",
          "react-dom/client": "blMEL",
          "@plasmo-static-common/csui": "gcN4J",
          "@plasmo-static-common/csui-container-react": "e8dRS",
          "@plasmo-static-common/react": "4kz0G",
          "~contents/linkedin-profile-analyzer": "3QA6e",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "8iOxN": [
        function (e, t, r) {
          t.exports = e("ba80e5a03a461355");
        },
        { ba80e5a03a461355: "hIfNu" },
      ],
      hIfNu: [
        function (e, t, r) {
          var n = e("61e3cf0e9433c992"),
            i = Symbol.for("react.element"),
            a = Symbol.for("react.fragment"),
            o = Object.prototype.hasOwnProperty,
            s =
              n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            l = { key: !0, ref: !0, __self: !0, __source: !0 };
          function u(e, t, r) {
            var n,
              a = {},
              u = null,
              c = null;
            for (n in (void 0 !== r && (u = "" + r),
            void 0 !== t.key && (u = "" + t.key),
            void 0 !== t.ref && (c = t.ref),
            t))
              o.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
            if (e && e.defaultProps)
              for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
            return {
              $$typeof: i,
              type: e,
              key: u,
              ref: c,
              props: a,
              _owner: s.current,
            };
          }
          ((r.Fragment = a), (r.jsx = u), (r.jsxs = u));
        },
        { "61e3cf0e9433c992": "329PG" },
      ],
      "329PG": [
        function (e, t, r) {
          t.exports = e("ae0ab14aecd941d7");
        },
        { ae0ab14aecd941d7: "5ejwk" },
      ],
      "5ejwk": [
        function (e, t, r) {
          var n = Symbol.for("react.element"),
            i = Symbol.for("react.portal"),
            a = Symbol.for("react.fragment"),
            o = Symbol.for("react.strict_mode"),
            s = Symbol.for("react.profiler"),
            l = Symbol.for("react.provider"),
            u = Symbol.for("react.context"),
            c = Symbol.for("react.forward_ref"),
            d = Symbol.for("react.suspense"),
            f = Symbol.for("react.memo"),
            h = Symbol.for("react.lazy"),
            p = Symbol.iterator,
            m = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            g = Object.assign,
            y = {};
          function v(e, t, r) {
            ((this.props = e),
              (this.context = t),
              (this.refs = y),
              (this.updater = r || m));
          }
          function b() {}
          function w(e, t, r) {
            ((this.props = e),
              (this.context = t),
              (this.refs = y),
              (this.updater = r || m));
          }
          ((v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (b.prototype = v.prototype));
          var k = (w.prototype = new b());
          ((k.constructor = w),
            g(k, v.prototype),
            (k.isPureReactComponent = !0));
          var _ = Array.isArray,
            E = Object.prototype.hasOwnProperty,
            S = { current: null },
            x = { key: !0, ref: !0, __self: !0, __source: !0 };
          function T(e, t, r) {
            var i,
              a = {},
              o = null,
              s = null;
            if (null != t)
              for (i in (void 0 !== t.ref && (s = t.ref),
              void 0 !== t.key && (o = "" + t.key),
              t))
                E.call(t, i) && !x.hasOwnProperty(i) && (a[i] = t[i]);
            var l = arguments.length - 2;
            if (1 === l) a.children = r;
            else if (1 < l) {
              for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            if (e && e.defaultProps)
              for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
            return {
              $$typeof: n,
              type: e,
              key: o,
              ref: s,
              props: a,
              _owner: S.current,
            };
          }
          function C(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }
          var A = /\/+/g;
          function I(e, t) {
            var r, n;
            return "object" == typeof e && null !== e && null != e.key
              ? ((r = "" + e.key),
                (n = { "=": "=0", ":": "=2" }),
                "$" +
                  r.replace(/[=:]/g, function (e) {
                    return n[e];
                  }))
              : t.toString(36);
          }
          function P(e, t, r) {
            if (null == e) return e;
            var a = [],
              o = 0;
            return (
              (function e(t, r, a, o, s) {
                var l,
                  u,
                  c,
                  d = typeof t;
                ("undefined" === d || "boolean" === d) && (t = null);
                var f = !1;
                if (null === t) f = !0;
                else
                  switch (d) {
                    case "string":
                    case "number":
                      f = !0;
                      break;
                    case "object":
                      switch (t.$$typeof) {
                        case n:
                        case i:
                          f = !0;
                      }
                  }
                if (f)
                  return (
                    (s = s((f = t))),
                    (t = "" === o ? "." + I(f, 0) : o),
                    _(s)
                      ? ((a = ""),
                        null != t && (a = t.replace(A, "$&/") + "/"),
                        e(s, r, a, "", function (e) {
                          return e;
                        }))
                      : null != s &&
                        (C(s) &&
                          ((l = s),
                          (u =
                            a +
                            (!s.key || (f && f.key === s.key)
                              ? ""
                              : ("" + s.key).replace(A, "$&/") + "/") +
                            t),
                          (s = {
                            $$typeof: n,
                            type: l.type,
                            key: u,
                            ref: l.ref,
                            props: l.props,
                            _owner: l._owner,
                          })),
                        r.push(s)),
                    1
                  );
                if (((f = 0), (o = "" === o ? "." : o + ":"), _(t)))
                  for (var h = 0; h < t.length; h++) {
                    var m = o + I((d = t[h]), h);
                    f += e(d, r, a, m, s);
                  }
                else if (
                  "function" ==
                  typeof (m =
                    null === (c = t) || "object" != typeof c
                      ? null
                      : "function" ==
                          typeof (c = (p && c[p]) || c["@@iterator"])
                        ? c
                        : null)
                )
                  for (t = m.call(t), h = 0; !(d = t.next()).done; )
                    ((m = o + I((d = d.value), h++)), (f += e(d, r, a, m, s)));
                else if ("object" === d)
                  throw Error(
                    "Objects are not valid as a React child (found: " +
                      ("[object Object]" === (r = String(t))
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : r) +
                      "). If you meant to render a collection of children, use an array instead.",
                  );
                return f;
              })(e, a, "", "", function (e) {
                return t.call(r, e, o++);
              }),
              a
            );
          }
          function j(e) {
            if (-1 === e._status) {
              var t = e._result;
              ((t = t()).then(
                function (t) {
                  (0 === e._status || -1 === e._status) &&
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  (0 === e._status || -1 === e._status) &&
                    ((e._status = 2), (e._result = t));
                },
              ),
                -1 === e._status && ((e._status = 0), (e._result = t)));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var R = { current: null },
            U = { transition: null };
          ((r.Children = {
            map: P,
            forEach: function (e, t, r) {
              P(
                e,
                function () {
                  t.apply(this, arguments);
                },
                r,
              );
            },
            count: function (e) {
              var t = 0;
              return (
                P(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                P(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!C(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          }),
            (r.Component = v),
            (r.Fragment = a),
            (r.Profiler = s),
            (r.PureComponent = w),
            (r.StrictMode = o),
            (r.Suspense = d),
            (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
              ReactCurrentDispatcher: R,
              ReactCurrentBatchConfig: U,
              ReactCurrentOwner: S,
            }),
            (r.cloneElement = function (e, t, r) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    ".",
                );
              var i = g({}, e.props),
                a = e.key,
                o = e.ref,
                s = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((o = t.ref), (s = S.current)),
                  void 0 !== t.key && (a = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var l = e.type.defaultProps;
                for (u in t)
                  E.call(t, u) &&
                    !x.hasOwnProperty(u) &&
                    (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
              }
              var u = arguments.length - 2;
              if (1 === u) i.children = r;
              else if (1 < u) {
                l = Array(u);
                for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                i.children = l;
              }
              return {
                $$typeof: n,
                type: e.type,
                key: a,
                ref: o,
                props: i,
                _owner: s,
              };
            }),
            (r.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: u,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: l, _context: e }),
                (e.Consumer = e)
              );
            }),
            (r.createElement = T),
            (r.createFactory = function (e) {
              var t = T.bind(null, e);
              return ((t.type = e), t);
            }),
            (r.createRef = function () {
              return { current: null };
            }),
            (r.forwardRef = function (e) {
              return { $$typeof: c, render: e };
            }),
            (r.isValidElement = C),
            (r.lazy = function (e) {
              return {
                $$typeof: h,
                _payload: { _status: -1, _result: e },
                _init: j,
              };
            }),
            (r.memo = function (e, t) {
              return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
            }),
            (r.startTransition = function (e) {
              var t = U.transition;
              U.transition = {};
              try {
                e();
              } finally {
                U.transition = t;
              }
            }),
            (r.unstable_act = function () {
              throw Error(
                "act(...) is not supported in production builds of React.",
              );
            }),
            (r.useCallback = function (e, t) {
              return R.current.useCallback(e, t);
            }),
            (r.useContext = function (e) {
              return R.current.useContext(e);
            }),
            (r.useDebugValue = function () {}),
            (r.useDeferredValue = function (e) {
              return R.current.useDeferredValue(e);
            }),
            (r.useEffect = function (e, t) {
              return R.current.useEffect(e, t);
            }),
            (r.useId = function () {
              return R.current.useId();
            }),
            (r.useImperativeHandle = function (e, t, r) {
              return R.current.useImperativeHandle(e, t, r);
            }),
            (r.useInsertionEffect = function (e, t) {
              return R.current.useInsertionEffect(e, t);
            }),
            (r.useLayoutEffect = function (e, t) {
              return R.current.useLayoutEffect(e, t);
            }),
            (r.useMemo = function (e, t) {
              return R.current.useMemo(e, t);
            }),
            (r.useReducer = function (e, t, r) {
              return R.current.useReducer(e, t, r);
            }),
            (r.useRef = function (e) {
              return R.current.useRef(e);
            }),
            (r.useState = function (e) {
              return R.current.useState(e);
            }),
            (r.useSyncExternalStore = function (e, t, r) {
              return R.current.useSyncExternalStore(e, t, r);
            }),
            (r.useTransition = function () {
              return R.current.useTransition();
            }),
            (r.version = "18.2.0"));
        },
        {},
      ],
      blMEL: [
        function (e, t, r) {
          var n = e("87ad33dd8ef612b1");
          ((r.createRoot = n.createRoot), (r.hydrateRoot = n.hydrateRoot));
        },
        { "87ad33dd8ef612b1": "f20Gy" },
      ],
      f20Gy: [
        function (e, t, r) {
          ((function e() {
            if (
              "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
              "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
            )
              try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
              } catch (e) {
                console.error(e);
              }
          })(),
            (t.exports = e("6a4f0a32037af21")));
        },
        { "6a4f0a32037af21": "glUXj" },
      ],
      glUXj: [
        function (e, t, r) {
          var n,
            i,
            a,
            o,
            s,
            l,
            u = e("c293e9ed31165f07"),
            c = e("fabf034282b0d218");
          function d(e) {
            for (
              var t =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                r = 1;
              r < arguments.length;
              r++
            )
              t += "&args[]=" + encodeURIComponent(arguments[r]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              t +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var f = new Set(),
            h = {};
          function p(e, t) {
            (m(e, t), m(e + "Capture", t));
          }
          function m(e, t) {
            for (h[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
          }
          var g = !(
              "undefined" == typeof window ||
              void 0 === window.document ||
              void 0 === window.document.createElement
            ),
            y = Object.prototype.hasOwnProperty,
            v =
              /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            b = {},
            w = {};
          function k(e, t, r, n, i, a, o) {
            ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
              (this.attributeName = n),
              (this.attributeNamespace = i),
              (this.mustUseProperty = r),
              (this.propertyName = e),
              (this.type = t),
              (this.sanitizeURL = a),
              (this.removeEmptyString = o));
          }
          var _ = {};
          ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
              _[e] = new k(e, 0, !1, e, null, !1, !1);
            }),
            [
              ["acceptCharset", "accept-charset"],
              ["className", "class"],
              ["htmlFor", "for"],
              ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
              var t = e[0];
              _[t] = new k(t, 1, !1, e[1], null, !1, !1);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
              function (e) {
                _[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
              },
            ),
            [
              "autoReverse",
              "externalResourcesRequired",
              "focusable",
              "preserveAlpha",
            ].forEach(function (e) {
              _[e] = new k(e, 2, !1, e, null, !1, !1);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
              .split(" ")
              .forEach(function (e) {
                _[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
              }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
              _[e] = new k(e, 3, !0, e, null, !1, !1);
            }),
            ["capture", "download"].forEach(function (e) {
              _[e] = new k(e, 4, !1, e, null, !1, !1);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
              _[e] = new k(e, 6, !1, e, null, !1, !1);
            }),
            ["rowSpan", "start"].forEach(function (e) {
              _[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
            }));
          var E = /[\-:]([a-z])/g;
          function S(e) {
            return e[1].toUpperCase();
          }
          function x(e, t, r, n) {
            var i,
              a = _.hasOwnProperty(t) ? _[t] : null;
            (null !== a
              ? 0 !== a.type
              : n ||
                !(2 < t.length) ||
                ("o" !== t[0] && "O" !== t[0]) ||
                ("n" !== t[1] && "N" !== t[1])) &&
              ((function (e, t, r, n) {
                if (
                  null == t ||
                  (function (e, t, r, n) {
                    if (null !== r && 0 === r.type) return !1;
                    switch (typeof t) {
                      case "function":
                      case "symbol":
                        return !0;
                      case "boolean":
                        if (n) return !1;
                        if (null !== r) return !r.acceptsBooleans;
                        return (
                          "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e
                        );
                      default:
                        return !1;
                    }
                  })(e, t, r, n)
                )
                  return !0;
                if (n) return !1;
                if (null !== r)
                  switch (r.type) {
                    case 3:
                      return !t;
                    case 4:
                      return !1 === t;
                    case 5:
                      return isNaN(t);
                    case 6:
                      return isNaN(t) || 1 > t;
                  }
                return !1;
              })(t, r, a, n) && (r = null),
              n || null === a
                ? ((i = t),
                  (!!y.call(w, i) ||
                    (!y.call(b, i) &&
                      (v.test(i) ? (w[i] = !0) : ((b[i] = !0), !1)))) &&
                    (null === r
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + r)))
                : a.mustUseProperty
                  ? (e[a.propertyName] = null === r ? 3 !== a.type && "" : r)
                  : ((t = a.attributeName),
                    (n = a.attributeNamespace),
                    null === r
                      ? e.removeAttribute(t)
                      : ((r =
                          3 === (a = a.type) || (4 === a && !0 === r)
                            ? ""
                            : "" + r),
                        n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
          }
          ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(E, S);
              _[t] = new k(t, 1, !1, e, null, !1, !1);
            }),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
              .split(" ")
              .forEach(function (e) {
                var t = e.replace(E, S);
                _[t] = new k(
                  t,
                  1,
                  !1,
                  e,
                  "http://www.w3.org/1999/xlink",
                  !1,
                  !1,
                );
              }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
              var t = e.replace(E, S);
              _[t] = new k(
                t,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1,
              );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
              _[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
            }),
            (_.xlinkHref = new k(
              "xlinkHref",
              1,
              !1,
              "xlink:href",
              "http://www.w3.org/1999/xlink",
              !0,
              !1,
            )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
              _[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
            }));
          var T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            C = Symbol.for("react.element"),
            A = Symbol.for("react.portal"),
            I = Symbol.for("react.fragment"),
            P = Symbol.for("react.strict_mode"),
            j = Symbol.for("react.profiler"),
            R = Symbol.for("react.provider"),
            U = Symbol.for("react.context"),
            O = Symbol.for("react.forward_ref"),
            L = Symbol.for("react.suspense"),
            N = Symbol.for("react.suspense_list"),
            D = Symbol.for("react.memo"),
            $ = Symbol.for("react.lazy");
          (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
          var F = Symbol.for("react.offscreen");
          (Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker"));
          var M = Symbol.iterator;
          function B(e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (M && e[M]) || e["@@iterator"])
                ? e
                : null;
          }
          var z,
            H = Object.assign;
          function q(e) {
            if (void 0 === z)
              try {
                throw Error();
              } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                z = (t && t[1]) || "";
              }
            return "\n" + z + e;
          }
          var V = !1;
          function G(e, t) {
            if (!e || V) return "";
            V = !0;
            var r = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              if (t) {
                if (
                  ((t = function () {
                    throw Error();
                  }),
                  Object.defineProperty(t.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(t, []);
                  } catch (e) {
                    var n = e;
                  }
                  Reflect.construct(e, [], t);
                } else {
                  try {
                    t.call();
                  } catch (e) {
                    n = e;
                  }
                  e.call(t.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  n = e;
                }
                e();
              }
            } catch (t) {
              if (t && n && "string" == typeof t.stack) {
                for (
                  var i = t.stack.split("\n"),
                    a = n.stack.split("\n"),
                    o = i.length - 1,
                    s = a.length - 1;
                  1 <= o && 0 <= s && i[o] !== a[s];
                )
                  s--;
                for (; 1 <= o && 0 <= s; o--, s--)
                  if (i[o] !== a[s]) {
                    if (1 !== o || 1 !== s)
                      do
                        if ((o--, 0 > --s || i[o] !== a[s])) {
                          var l = "\n" + i[o].replace(" at new ", " at ");
                          return (
                            e.displayName &&
                              l.includes("<anonymous>") &&
                              (l = l.replace("<anonymous>", e.displayName)),
                            l
                          );
                        }
                      while (1 <= o && 0 <= s);
                    break;
                  }
              }
            } finally {
              ((V = !1), (Error.prepareStackTrace = r));
            }
            return (e = e ? e.displayName || e.name : "") ? q(e) : "";
          }
          function W(e) {
            switch (typeof e) {
              case "boolean":
              case "number":
              case "string":
              case "undefined":
              case "object":
                return e;
              default:
                return "";
            }
          }
          function K(e) {
            var t = e.type;
            return (
              (e = e.nodeName) &&
              "input" === e.toLowerCase() &&
              ("checkbox" === t || "radio" === t)
            );
          }
          function J(e) {
            e._valueTracker ||
              (e._valueTracker = (function (e) {
                var t = K(e) ? "checked" : "value",
                  r = Object.getOwnPropertyDescriptor(
                    e.constructor.prototype,
                    t,
                  ),
                  n = "" + e[t];
                if (
                  !e.hasOwnProperty(t) &&
                  void 0 !== r &&
                  "function" == typeof r.get &&
                  "function" == typeof r.set
                ) {
                  var i = r.get,
                    a = r.set;
                  return (
                    Object.defineProperty(e, t, {
                      configurable: !0,
                      get: function () {
                        return i.call(this);
                      },
                      set: function (e) {
                        ((n = "" + e), a.call(this, e));
                      },
                    }),
                    Object.defineProperty(e, t, { enumerable: r.enumerable }),
                    {
                      getValue: function () {
                        return n;
                      },
                      setValue: function (e) {
                        n = "" + e;
                      },
                      stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                      },
                    }
                  );
                }
              })(e));
          }
          function Q(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var r = t.getValue(),
              n = "";
            return (
              e && (n = K(e) ? (e.checked ? "true" : "false") : e.value),
              (e = n) !== r && (t.setValue(e), !0)
            );
          }
          function Y(e) {
            if (
              void 0 ===
              (e = e || ("undefined" != typeof document ? document : void 0))
            )
              return null;
            try {
              return e.activeElement || e.body;
            } catch (t) {
              return e.body;
            }
          }
          function X(e, t) {
            var r = t.checked;
            return H({}, t, {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: void 0,
              checked: null != r ? r : e._wrapperState.initialChecked,
            });
          }
          function Z(e, t) {
            var r = null == t.defaultValue ? "" : t.defaultValue,
              n = null != t.checked ? t.checked : t.defaultChecked;
            ((r = W(null != t.value ? t.value : r)),
              (e._wrapperState = {
                initialChecked: n,
                initialValue: r,
                controlled:
                  "checkbox" === t.type || "radio" === t.type
                    ? null != t.checked
                    : null != t.value,
              }));
          }
          function ee(e, t) {
            null != (t = t.checked) && x(e, "checked", t, !1);
          }
          function et(e, t) {
            ee(e, t);
            var r = W(t.value),
              n = t.type;
            if (null != r)
              "number" === n
                ? ((0 === r && "" === e.value) || e.value != r) &&
                  (e.value = "" + r)
                : e.value !== "" + r && (e.value = "" + r);
            else if ("submit" === n || "reset" === n) {
              e.removeAttribute("value");
              return;
            }
            (t.hasOwnProperty("value")
              ? en(e, t.type, r)
              : t.hasOwnProperty("defaultValue") &&
                en(e, t.type, W(t.defaultValue)),
              null == t.checked &&
                null != t.defaultChecked &&
                (e.defaultChecked = !!t.defaultChecked));
          }
          function er(e, t, r) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
              var n = t.type;
              if (
                !(
                  ("submit" !== n && "reset" !== n) ||
                  (void 0 !== t.value && null !== t.value)
                )
              )
                return;
              ((t = "" + e._wrapperState.initialValue),
                r || t === e.value || (e.value = t),
                (e.defaultValue = t));
            }
            ("" !== (r = e.name) && (e.name = ""),
              (e.defaultChecked = !!e._wrapperState.initialChecked),
              "" !== r && (e.name = r));
          }
          function en(e, t, r) {
            ("number" !== t || Y(e.ownerDocument) !== e) &&
              (null == r
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
          }
          var ei = Array.isArray;
          function ea(e, t, r, n) {
            if (((e = e.options), t)) {
              t = {};
              for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
              for (r = 0; r < e.length; r++)
                ((i = t.hasOwnProperty("$" + e[r].value)),
                  e[r].selected !== i && (e[r].selected = i),
                  i && n && (e[r].defaultSelected = !0));
            } else {
              for (i = 0, r = "" + W(r), t = null; i < e.length; i++) {
                if (e[i].value === r) {
                  ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
                  return;
                }
                null !== t || e[i].disabled || (t = e[i]);
              }
              null !== t && (t.selected = !0);
            }
          }
          function eo(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw Error(d(91));
            return H({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: "" + e._wrapperState.initialValue,
            });
          }
          function es(e, t) {
            var r = t.value;
            if (null == r) {
              if (((r = t.children), (t = t.defaultValue), null != r)) {
                if (null != t) throw Error(d(92));
                if (ei(r)) {
                  if (1 < r.length) throw Error(d(93));
                  r = r[0];
                }
                t = r;
              }
              (null == t && (t = ""), (r = t));
            }
            e._wrapperState = { initialValue: W(r) };
          }
          function el(e, t) {
            var r = W(t.value),
              n = W(t.defaultValue);
            (null != r &&
              ((r = "" + r) !== e.value && (e.value = r),
              null == t.defaultValue &&
                e.defaultValue !== r &&
                (e.defaultValue = r)),
              null != n && (e.defaultValue = "" + n));
          }
          function eu(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue &&
              "" !== t &&
              null !== t &&
              (e.value = t);
          }
          function ec(e) {
            switch (e) {
              case "svg":
                return "http://www.w3.org/2000/svg";
              case "math":
                return "http://www.w3.org/1998/Math/MathML";
              default:
                return "http://www.w3.org/1999/xhtml";
            }
          }
          function ed(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e
              ? ec(t)
              : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
                ? "http://www.w3.org/1999/xhtml"
                : e;
          }
          var ef,
            eh,
            ep =
              ((ef = function (e, t) {
                if (
                  "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                  "innerHTML" in e
                )
                  e.innerHTML = t;
                else {
                  for (
                    (eh = eh || document.createElement("div")).innerHTML =
                      "<svg>" + t.valueOf().toString() + "</svg>",
                      t = eh.firstChild;
                    e.firstChild;
                  )
                    e.removeChild(e.firstChild);
                  for (; t.firstChild; ) e.appendChild(t.firstChild);
                }
              }),
              "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                ? function (e, t, r, n) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return ef(e, t, r, n);
                    });
                  }
                : ef);
          function em(e, t) {
            if (t) {
              var r = e.firstChild;
              if (r && r === e.lastChild && 3 === r.nodeType) {
                r.nodeValue = t;
                return;
              }
            }
            e.textContent = t;
          }
          var eg = {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageOutset: !0,
              borderImageSlice: !0,
              borderImageWidth: !0,
              boxFlex: !0,
              boxFlexGroup: !0,
              boxOrdinalGroup: !0,
              columnCount: !0,
              columns: !0,
              flex: !0,
              flexGrow: !0,
              flexPositive: !0,
              flexShrink: !0,
              flexNegative: !0,
              flexOrder: !0,
              gridArea: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowSpan: !0,
              gridRowStart: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnSpan: !0,
              gridColumnStart: !0,
              fontWeight: !0,
              lineClamp: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              tabSize: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeDasharray: !0,
              strokeDashoffset: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
              strokeWidth: !0,
            },
            ey = ["Webkit", "ms", "Moz", "O"];
          function ev(e, t, r) {
            return null == t || "boolean" == typeof t || "" === t
              ? ""
              : r ||
                  "number" != typeof t ||
                  0 === t ||
                  (eg.hasOwnProperty(e) && eg[e])
                ? ("" + t).trim()
                : t + "px";
          }
          function eb(e, t) {
            for (var r in ((e = e.style), t))
              if (t.hasOwnProperty(r)) {
                var n = 0 === r.indexOf("--"),
                  i = ev(r, t[r], n);
                ("float" === r && (r = "cssFloat"),
                  n ? e.setProperty(r, i) : (e[r] = i));
              }
          }
          Object.keys(eg).forEach(function (e) {
            ey.forEach(function (t) {
              eg[(t = t + e.charAt(0).toUpperCase() + e.substring(1))] = eg[e];
            });
          });
          var ew = H(
            { menuitem: !0 },
            {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
            },
          );
          function ek(e, t) {
            if (t) {
              if (
                ew[e] &&
                (null != t.children || null != t.dangerouslySetInnerHTML)
              )
                throw Error(d(137, e));
              if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(d(60));
                if (
                  "object" != typeof t.dangerouslySetInnerHTML ||
                  !("__html" in t.dangerouslySetInnerHTML)
                )
                  throw Error(d(61));
              }
              if (null != t.style && "object" != typeof t.style)
                throw Error(d(62));
            }
          }
          function e_(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                return !1;
              default:
                return !0;
            }
          }
          var eE = null;
          function eS(e) {
            return (
              (e = e.target || e.srcElement || window)
                .correspondingUseElement && (e = e.correspondingUseElement),
              3 === e.nodeType ? e.parentNode : e
            );
          }
          var ex = null,
            eT = null,
            eC = null;
          function eA(e) {
            if ((e = nN(e))) {
              if ("function" != typeof ex) throw Error(d(280));
              var t = e.stateNode;
              t && ((t = n$(t)), ex(e.stateNode, e.type, t));
            }
          }
          function eI(e) {
            eT ? (eC ? eC.push(e) : (eC = [e])) : (eT = e);
          }
          function eP() {
            if (eT) {
              var e = eT,
                t = eC;
              if (((eC = eT = null), eA(e), t))
                for (e = 0; e < t.length; e++) eA(t[e]);
            }
          }
          function ej(e, t) {
            return e(t);
          }
          function eR() {}
          var eU = !1;
          function eO(e, t, r) {
            if (eU) return e(t, r);
            eU = !0;
            try {
              return ej(e, t, r);
            } finally {
              ((eU = !1), (null !== eT || null !== eC) && (eR(), eP()));
            }
          }
          function eL(e, t) {
            var r = e.stateNode;
            if (null === r) return null;
            var n = n$(r);
            if (null === n) return null;
            switch (((r = n[t]), t)) {
              case "onClick":
              case "onClickCapture":
              case "onDoubleClick":
              case "onDoubleClickCapture":
              case "onMouseDown":
              case "onMouseDownCapture":
              case "onMouseMove":
              case "onMouseMoveCapture":
              case "onMouseUp":
              case "onMouseUpCapture":
              case "onMouseEnter":
                ((n = !n.disabled) ||
                  (n = !(
                    "button" === (e = e.type) ||
                    "input" === e ||
                    "select" === e ||
                    "textarea" === e
                  )),
                  (e = !n));
                break;
              default:
                e = !1;
            }
            if (e) return null;
            if (r && "function" != typeof r) throw Error(d(231, t, typeof r));
            return r;
          }
          var eN = !1;
          if (g)
            try {
              var eD = {};
              (Object.defineProperty(eD, "passive", {
                get: function () {
                  eN = !0;
                },
              }),
                window.addEventListener("test", eD, eD),
                window.removeEventListener("test", eD, eD));
            } catch (e) {
              eN = !1;
            }
          function e$(e, t, r, n, i, a, o, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(r, u);
            } catch (e) {
              this.onError(e);
            }
          }
          var eF = !1,
            eM = null,
            eB = !1,
            ez = null,
            eH = {
              onError: function (e) {
                ((eF = !0), (eM = e));
              },
            };
          function eq(e, t, r, n, i, a, o, s, l) {
            ((eF = !1), (eM = null), e$.apply(eH, arguments));
          }
          function eV(e) {
            var t = e,
              r = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              e = t;
              do
                (0 != (4098 & (t = e).flags) && (r = t.return), (e = t.return));
              while (e);
            }
            return 3 === t.tag ? r : null;
          }
          function eG(e) {
            if (13 === e.tag) {
              var t = e.memoizedState;
              if (
                (null === t &&
                  null !== (e = e.alternate) &&
                  (t = e.memoizedState),
                null !== t)
              )
                return t.dehydrated;
            }
            return null;
          }
          function eW(e) {
            if (eV(e) !== e) throw Error(d(188));
          }
          function eK(e) {
            return null !==
              (e = (function (e) {
                var t = e.alternate;
                if (!t) {
                  if (null === (t = eV(e))) throw Error(d(188));
                  return t !== e ? null : e;
                }
                for (var r = e, n = t; ; ) {
                  var i = r.return;
                  if (null === i) break;
                  var a = i.alternate;
                  if (null === a) {
                    if (null !== (n = i.return)) {
                      r = n;
                      continue;
                    }
                    break;
                  }
                  if (i.child === a.child) {
                    for (a = i.child; a; ) {
                      if (a === r) return (eW(i), e);
                      if (a === n) return (eW(i), t);
                      a = a.sibling;
                    }
                    throw Error(d(188));
                  }
                  if (r.return !== n.return) ((r = i), (n = a));
                  else {
                    for (var o = !1, s = i.child; s; ) {
                      if (s === r) {
                        ((o = !0), (r = i), (n = a));
                        break;
                      }
                      if (s === n) {
                        ((o = !0), (n = i), (r = a));
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) {
                      for (s = a.child; s; ) {
                        if (s === r) {
                          ((o = !0), (r = a), (n = i));
                          break;
                        }
                        if (s === n) {
                          ((o = !0), (n = a), (r = i));
                          break;
                        }
                        s = s.sibling;
                      }
                      if (!o) throw Error(d(189));
                    }
                  }
                  if (r.alternate !== n) throw Error(d(190));
                }
                if (3 !== r.tag) throw Error(d(188));
                return r.stateNode.current === r ? e : t;
              })(e))
              ? (function e(t) {
                  if (5 === t.tag || 6 === t.tag) return t;
                  for (t = t.child; null !== t; ) {
                    var r = e(t);
                    if (null !== r) return r;
                    t = t.sibling;
                  }
                  return null;
                })(e)
              : null;
          }
          var eJ = c.unstable_scheduleCallback,
            eQ = c.unstable_cancelCallback,
            eY = c.unstable_shouldYield,
            eX = c.unstable_requestPaint,
            eZ = c.unstable_now,
            e0 = c.unstable_getCurrentPriorityLevel,
            e1 = c.unstable_ImmediatePriority,
            e2 = c.unstable_UserBlockingPriority,
            e3 = c.unstable_NormalPriority,
            e4 = c.unstable_LowPriority,
            e6 = c.unstable_IdlePriority,
            e5 = null,
            e8 = null,
            e7 = Math.clz32
              ? Math.clz32
              : function (e) {
                  return 0 == (e >>>= 0) ? 32 : (31 - ((e9(e) / te) | 0)) | 0;
                },
            e9 = Math.log,
            te = Math.LN2,
            tt = 64,
            tr = 4194304;
          function tn(e) {
            switch (e & -e) {
              case 1:
                return 1;
              case 2:
                return 2;
              case 4:
                return 4;
              case 8:
                return 8;
              case 16:
                return 16;
              case 32:
                return 32;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return 4194240 & e;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                return 130023424 & e;
              case 134217728:
                return 134217728;
              case 268435456:
                return 268435456;
              case 536870912:
                return 536870912;
              case 1073741824:
                return 1073741824;
              default:
                return e;
            }
          }
          function ti(e, t) {
            var r = e.pendingLanes;
            if (0 === r) return 0;
            var n = 0,
              i = e.suspendedLanes,
              a = e.pingedLanes,
              o = 268435455 & r;
            if (0 !== o) {
              var s = o & ~i;
              0 !== s ? (n = tn(s)) : 0 != (a &= o) && (n = tn(a));
            } else 0 != (o = r & ~i) ? (n = tn(o)) : 0 !== a && (n = tn(a));
            if (0 === n) return 0;
            if (
              0 !== t &&
              t !== n &&
              0 == (t & i) &&
              ((i = n & -n) >= (a = t & -t) || (16 === i && 0 != (4194240 & a)))
            )
              return t;
            if ((0 != (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)))
              for (e = e.entanglements, t &= n; 0 < t; )
                ((i = 1 << (r = 31 - e7(t))), (n |= e[r]), (t &= ~i));
            return n;
          }
          function ta(e) {
            return 0 != (e = -1073741825 & e.pendingLanes)
              ? e
              : 1073741824 & e
                ? 1073741824
                : 0;
          }
          function to() {
            var e = tt;
            return (0 == (4194240 & (tt <<= 1)) && (tt = 64), e);
          }
          function ts(e) {
            for (var t = [], r = 0; 31 > r; r++) t.push(e);
            return t;
          }
          function tl(e, t, r) {
            ((e.pendingLanes |= t),
              536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
              ((e = e.eventTimes)[(t = 31 - e7(t))] = r));
          }
          function tu(e, t) {
            var r = (e.entangledLanes |= t);
            for (e = e.entanglements; r; ) {
              var n = 31 - e7(r),
                i = 1 << n;
              ((i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i));
            }
          }
          var tc = 0;
          function td(e) {
            return 1 < (e &= -e)
              ? 4 < e
                ? 0 != (268435455 & e)
                  ? 16
                  : 536870912
                : 4
              : 1;
          }
          var tf,
            th,
            tp,
            tm,
            tg,
            ty = !1,
            tv = [],
            tb = null,
            tw = null,
            tk = null,
            t_ = new Map(),
            tE = new Map(),
            tS = [],
            tx =
              "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " ",
              );
          function tT(e, t) {
            switch (e) {
              case "focusin":
              case "focusout":
                tb = null;
                break;
              case "dragenter":
              case "dragleave":
                tw = null;
                break;
              case "mouseover":
              case "mouseout":
                tk = null;
                break;
              case "pointerover":
              case "pointerout":
                t_.delete(t.pointerId);
                break;
              case "gotpointercapture":
              case "lostpointercapture":
                tE.delete(t.pointerId);
            }
          }
          function tC(e, t, r, n, i, a) {
            return (
              null === e || e.nativeEvent !== a
                ? ((e = {
                    blockedOn: t,
                    domEventName: r,
                    eventSystemFlags: n,
                    nativeEvent: a,
                    targetContainers: [i],
                  }),
                  null !== t && null !== (t = nN(t)) && th(t))
                : ((e.eventSystemFlags |= n),
                  (t = e.targetContainers),
                  null !== i && -1 === t.indexOf(i) && t.push(i)),
              e
            );
          }
          function tA(e) {
            var t = nL(e.target);
            if (null !== t) {
              var r = eV(t);
              if (null !== r) {
                if (13 === (t = r.tag)) {
                  if (null !== (t = eG(r))) {
                    ((e.blockedOn = t),
                      tg(e.priority, function () {
                        tp(r);
                      }));
                    return;
                  }
                } else if (
                  3 === t &&
                  r.stateNode.current.memoizedState.isDehydrated
                ) {
                  e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null;
                  return;
                }
              }
            }
            e.blockedOn = null;
          }
          function tI(e) {
            if (null !== e.blockedOn) return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
              var r = tM(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent,
              );
              if (null !== r)
                return (null !== (t = nN(r)) && th(t), (e.blockedOn = r), !1);
              var n = new (r = e.nativeEvent).constructor(r.type, r);
              ((eE = n), r.target.dispatchEvent(n), (eE = null), t.shift());
            }
            return !0;
          }
          function tP(e, t, r) {
            tI(e) && r.delete(t);
          }
          function tj() {
            ((ty = !1),
              null !== tb && tI(tb) && (tb = null),
              null !== tw && tI(tw) && (tw = null),
              null !== tk && tI(tk) && (tk = null),
              t_.forEach(tP),
              tE.forEach(tP));
          }
          function tR(e, t) {
            e.blockedOn === t &&
              ((e.blockedOn = null),
              ty ||
                ((ty = !0),
                c.unstable_scheduleCallback(c.unstable_NormalPriority, tj)));
          }
          function tU(e) {
            function t(t) {
              return tR(t, e);
            }
            if (0 < tv.length) {
              tR(tv[0], e);
              for (var r = 1; r < tv.length; r++) {
                var n = tv[r];
                n.blockedOn === e && (n.blockedOn = null);
              }
            }
            for (
              null !== tb && tR(tb, e),
                null !== tw && tR(tw, e),
                null !== tk && tR(tk, e),
                t_.forEach(t),
                tE.forEach(t),
                r = 0;
              r < tS.length;
              r++
            )
              (n = tS[r]).blockedOn === e && (n.blockedOn = null);
            for (; 0 < tS.length && null === (r = tS[0]).blockedOn; )
              (tA(r), null === r.blockedOn && tS.shift());
          }
          var tO = T.ReactCurrentBatchConfig,
            tL = !0;
          function tN(e, t, r, n) {
            var i = tc,
              a = tO.transition;
            tO.transition = null;
            try {
              ((tc = 1), t$(e, t, r, n));
            } finally {
              ((tc = i), (tO.transition = a));
            }
          }
          function tD(e, t, r, n) {
            var i = tc,
              a = tO.transition;
            tO.transition = null;
            try {
              ((tc = 4), t$(e, t, r, n));
            } finally {
              ((tc = i), (tO.transition = a));
            }
          }
          function t$(e, t, r, n) {
            if (tL) {
              var i = tM(e, t, r, n);
              if (null === i) (ns(e, t, n, tF, r), tT(e, n));
              else if (
                (function (e, t, r, n, i) {
                  switch (t) {
                    case "focusin":
                      return ((tb = tC(tb, e, t, r, n, i)), !0);
                    case "dragenter":
                      return ((tw = tC(tw, e, t, r, n, i)), !0);
                    case "mouseover":
                      return ((tk = tC(tk, e, t, r, n, i)), !0);
                    case "pointerover":
                      var a = i.pointerId;
                      return (
                        t_.set(a, tC(t_.get(a) || null, e, t, r, n, i)),
                        !0
                      );
                    case "gotpointercapture":
                      return (
                        (a = i.pointerId),
                        tE.set(a, tC(tE.get(a) || null, e, t, r, n, i)),
                        !0
                      );
                  }
                  return !1;
                })(i, e, t, r, n)
              )
                n.stopPropagation();
              else if ((tT(e, n), 4 & t && -1 < tx.indexOf(e))) {
                for (; null !== i; ) {
                  var a = nN(i);
                  if (
                    (null !== a && tf(a),
                    null === (a = tM(e, t, r, n)) && ns(e, t, n, tF, r),
                    a === i)
                  )
                    break;
                  i = a;
                }
                null !== i && n.stopPropagation();
              } else ns(e, t, n, null, r);
            }
          }
          var tF = null;
          function tM(e, t, r, n) {
            if (((tF = null), null !== (e = nL((e = eS(n)))))) {
              if (null === (t = eV(e))) e = null;
              else if (13 === (r = t.tag)) {
                if (null !== (e = eG(t))) return e;
                e = null;
              } else if (3 === r) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
            return ((tF = e), null);
          }
          function tB(e) {
            switch (e) {
              case "cancel":
              case "click":
              case "close":
              case "contextmenu":
              case "copy":
              case "cut":
              case "auxclick":
              case "dblclick":
              case "dragend":
              case "dragstart":
              case "drop":
              case "focusin":
              case "focusout":
              case "input":
              case "invalid":
              case "keydown":
              case "keypress":
              case "keyup":
              case "mousedown":
              case "mouseup":
              case "paste":
              case "pause":
              case "play":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
              case "ratechange":
              case "reset":
              case "resize":
              case "seeked":
              case "submit":
              case "touchcancel":
              case "touchend":
              case "touchstart":
              case "volumechange":
              case "change":
              case "selectionchange":
              case "textInput":
              case "compositionstart":
              case "compositionend":
              case "compositionupdate":
              case "beforeblur":
              case "afterblur":
              case "beforeinput":
              case "blur":
              case "fullscreenchange":
              case "focus":
              case "hashchange":
              case "popstate":
              case "select":
              case "selectstart":
                return 1;
              case "drag":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "mousemove":
              case "mouseout":
              case "mouseover":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "scroll":
              case "toggle":
              case "touchmove":
              case "wheel":
              case "mouseenter":
              case "mouseleave":
              case "pointerenter":
              case "pointerleave":
                return 4;
              case "message":
                switch (e0()) {
                  case e1:
                    return 1;
                  case e2:
                    return 4;
                  case e3:
                  case e4:
                    return 16;
                  case e6:
                    return 536870912;
                  default:
                    return 16;
                }
              default:
                return 16;
            }
          }
          var tz = null,
            tH = null,
            tq = null;
          function tV() {
            if (tq) return tq;
            var e,
              t,
              r = tH,
              n = r.length,
              i = "value" in tz ? tz.value : tz.textContent,
              a = i.length;
            for (e = 0; e < n && r[e] === i[e]; e++);
            var o = n - e;
            for (t = 1; t <= o && r[n - t] === i[a - t]; t++);
            return (tq = i.slice(e, 1 < t ? 1 - t : void 0));
          }
          function tG(e) {
            var t = e.keyCode;
            return (
              "charCode" in e
                ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                : (e = t),
              10 === e && (e = 13),
              32 <= e || 13 === e ? e : 0
            );
          }
          function tW() {
            return !0;
          }
          function tK() {
            return !1;
          }
          function tJ(e) {
            function t(t, r, n, i, a) {
              for (var o in ((this._reactName = t),
              (this._targetInst = n),
              (this.type = r),
              (this.nativeEvent = i),
              (this.target = a),
              (this.currentTarget = null),
              e))
                e.hasOwnProperty(o) &&
                  ((t = e[o]), (this[o] = t ? t(i) : i[o]));
              return (
                (this.isDefaultPrevented = (
                  null != i.defaultPrevented
                    ? i.defaultPrevented
                    : !1 === i.returnValue
                )
                  ? tW
                  : tK),
                (this.isPropagationStopped = tK),
                this
              );
            }
            return (
              H(t.prototype, {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                  var e = this.nativeEvent;
                  e &&
                    (e.preventDefault
                      ? e.preventDefault()
                      : "unknown" != typeof e.returnValue &&
                        (e.returnValue = !1),
                    (this.isDefaultPrevented = tW));
                },
                stopPropagation: function () {
                  var e = this.nativeEvent;
                  e &&
                    (e.stopPropagation
                      ? e.stopPropagation()
                      : "unknown" != typeof e.cancelBubble &&
                        (e.cancelBubble = !0),
                    (this.isPropagationStopped = tW));
                },
                persist: function () {},
                isPersistent: tW,
              }),
              t
            );
          }
          var tQ,
            tY,
            tX,
            tZ = {
              eventPhase: 0,
              bubbles: 0,
              cancelable: 0,
              timeStamp: function (e) {
                return e.timeStamp || Date.now();
              },
              defaultPrevented: 0,
              isTrusted: 0,
            },
            t0 = tJ(tZ),
            t1 = H({}, tZ, { view: 0, detail: 0 }),
            t2 = tJ(t1),
            t3 = H({}, t1, {
              screenX: 0,
              screenY: 0,
              clientX: 0,
              clientY: 0,
              pageX: 0,
              pageY: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              getModifierState: ri,
              button: 0,
              buttons: 0,
              relatedTarget: function (e) {
                return void 0 === e.relatedTarget
                  ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                  : e.relatedTarget;
              },
              movementX: function (e) {
                return "movementX" in e
                  ? e.movementX
                  : (e !== tX &&
                      (tX && "mousemove" === e.type
                        ? ((tQ = e.screenX - tX.screenX),
                          (tY = e.screenY - tX.screenY))
                        : (tY = tQ = 0),
                      (tX = e)),
                    tQ);
              },
              movementY: function (e) {
                return "movementY" in e ? e.movementY : tY;
              },
            }),
            t4 = tJ(t3),
            t6 = tJ(H({}, t3, { dataTransfer: 0 })),
            t5 = tJ(H({}, t1, { relatedTarget: 0 })),
            t8 = tJ(
              H({}, tZ, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
            ),
            t7 = tJ(
              H({}, tZ, {
                clipboardData: function (e) {
                  return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
                },
              }),
            ),
            t9 = tJ(H({}, tZ, { data: 0 })),
            re = {
              Esc: "Escape",
              Spacebar: " ",
              Left: "ArrowLeft",
              Up: "ArrowUp",
              Right: "ArrowRight",
              Down: "ArrowDown",
              Del: "Delete",
              Win: "OS",
              Menu: "ContextMenu",
              Apps: "ContextMenu",
              Scroll: "ScrollLock",
              MozPrintableKey: "Unidentified",
            },
            rt = {
              8: "Backspace",
              9: "Tab",
              12: "Clear",
              13: "Enter",
              16: "Shift",
              17: "Control",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Escape",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              45: "Insert",
              46: "Delete",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              144: "NumLock",
              145: "ScrollLock",
              224: "Meta",
            },
            rr = {
              Alt: "altKey",
              Control: "ctrlKey",
              Meta: "metaKey",
              Shift: "shiftKey",
            };
          function rn(e) {
            var t = this.nativeEvent;
            return t.getModifierState
              ? t.getModifierState(e)
              : !!(e = rr[e]) && !!t[e];
          }
          function ri() {
            return rn;
          }
          var ra = tJ(
              H({}, t1, {
                key: function (e) {
                  if (e.key) {
                    var t = re[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                  }
                  return "keypress" === e.type
                    ? 13 === (e = tG(e))
                      ? "Enter"
                      : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? rt[e.keyCode] || "Unidentified"
                      : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: ri,
                charCode: function (e) {
                  return "keypress" === e.type ? tG(e) : 0;
                },
                keyCode: function (e) {
                  return "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
                },
                which: function (e) {
                  return "keypress" === e.type
                    ? tG(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? e.keyCode
                      : 0;
                },
              }),
            ),
            ro = tJ(
              H({}, t3, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0,
              }),
            ),
            rs = tJ(
              H({}, t1, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: ri,
              }),
            ),
            rl = tJ(
              H({}, tZ, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
            ),
            ru = tJ(
              H({}, t3, {
                deltaX: function (e) {
                  return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                      ? -e.wheelDeltaX
                      : 0;
                },
                deltaY: function (e) {
                  return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
                },
                deltaZ: 0,
                deltaMode: 0,
              }),
            ),
            rc = [9, 13, 27, 32],
            rd = g && "CompositionEvent" in window,
            rf = null;
          g && "documentMode" in document && (rf = document.documentMode);
          var rh = g && "TextEvent" in window && !rf,
            rp = g && (!rd || (rf && 8 < rf && 11 >= rf)),
            rm = !1;
          function rg(e, t) {
            switch (e) {
              case "keyup":
                return -1 !== rc.indexOf(t.keyCode);
              case "keydown":
                return 229 !== t.keyCode;
              case "keypress":
              case "mousedown":
              case "focusout":
                return !0;
              default:
                return !1;
            }
          }
          function ry(e) {
            return "object" == typeof (e = e.detail) && "data" in e
              ? e.data
              : null;
          }
          var rv = !1,
            rb = {
              color: !0,
              date: !0,
              datetime: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              password: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
            };
          function rw(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!rb[e.type] : "textarea" === t;
          }
          function rk(e, t, r, n) {
            (eI(n),
              0 < (t = nu(t, "onChange")).length &&
                ((r = new t0("onChange", "change", null, r, n)),
                e.push({ event: r, listeners: t })));
          }
          var r_ = null,
            rE = null;
          function rS(e) {
            nt(e, 0);
          }
          function rx(e) {
            if (Q(nD(e))) return e;
          }
          function rT(e, t) {
            if ("change" === e) return t;
          }
          var rC = !1;
          if (g) {
            if (g) {
              var rA = "oninput" in document;
              if (!rA) {
                var rI = document.createElement("div");
                (rI.setAttribute("oninput", "return;"),
                  (rA = "function" == typeof rI.oninput));
              }
              n = rA;
            } else n = !1;
            rC = n && (!document.documentMode || 9 < document.documentMode);
          }
          function rP() {
            r_ && (r_.detachEvent("onpropertychange", rj), (rE = r_ = null));
          }
          function rj(e) {
            if ("value" === e.propertyName && rx(rE)) {
              var t = [];
              (rk(t, rE, e, eS(e)), eO(rS, t));
            }
          }
          function rR(e, t, r) {
            "focusin" === e
              ? (rP(),
                (r_ = t),
                (rE = r),
                r_.attachEvent("onpropertychange", rj))
              : "focusout" === e && rP();
          }
          function rU(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e)
              return rx(rE);
          }
          function rO(e, t) {
            if ("click" === e) return rx(t);
          }
          function rL(e, t) {
            if ("input" === e || "change" === e) return rx(t);
          }
          var rN =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                };
          function rD(e, t) {
            if (rN(e, t)) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof t ||
              null === t
            )
              return !1;
            var r = Object.keys(e),
              n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (n = 0; n < r.length; n++) {
              var i = r[n];
              if (!y.call(t, i) || !rN(e[i], t[i])) return !1;
            }
            return !0;
          }
          function r$(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
          }
          function rF(e, t) {
            var r,
              n = r$(e);
            for (e = 0; n; ) {
              if (3 === n.nodeType) {
                if (((r = e + n.textContent.length), e <= t && r >= t))
                  return { node: n, offset: t - e };
                e = r;
              }
              e: {
                for (; n; ) {
                  if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                  }
                  n = n.parentNode;
                }
                n = void 0;
              }
              n = r$(n);
            }
          }
          function rM() {
            for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
              try {
                var r = "string" == typeof t.contentWindow.location.href;
              } catch (e) {
                r = !1;
              }
              if (r) e = t.contentWindow;
              else break;
              t = Y(e.document);
            }
            return t;
          }
          function rB(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
              t &&
              (("input" === t &&
                ("text" === e.type ||
                  "search" === e.type ||
                  "tel" === e.type ||
                  "url" === e.type ||
                  "password" === e.type)) ||
                "textarea" === t ||
                "true" === e.contentEditable)
            );
          }
          var rz =
              g && "documentMode" in document && 11 >= document.documentMode,
            rH = null,
            rq = null,
            rV = null,
            rG = !1;
          function rW(e, t, r) {
            var n =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                  ? r
                  : r.ownerDocument;
            rG ||
              null == rH ||
              rH !== Y(n) ||
              ((n =
                "selectionStart" in (n = rH) && rB(n)
                  ? { start: n.selectionStart, end: n.selectionEnd }
                  : {
                      anchorNode: (n = (
                        (n.ownerDocument && n.ownerDocument.defaultView) ||
                        window
                      ).getSelection()).anchorNode,
                      anchorOffset: n.anchorOffset,
                      focusNode: n.focusNode,
                      focusOffset: n.focusOffset,
                    }),
              (rV && rD(rV, n)) ||
                ((rV = n),
                0 < (n = nu(rq, "onSelect")).length &&
                  ((t = new t0("onSelect", "select", null, t, r)),
                  e.push({ event: t, listeners: n }),
                  (t.target = rH))));
          }
          function rK(e, t) {
            var r = {};
            return (
              (r[e.toLowerCase()] = t.toLowerCase()),
              (r["Webkit" + e] = "webkit" + t),
              (r["Moz" + e] = "moz" + t),
              r
            );
          }
          var rJ = {
              animationend: rK("Animation", "AnimationEnd"),
              animationiteration: rK("Animation", "AnimationIteration"),
              animationstart: rK("Animation", "AnimationStart"),
              transitionend: rK("Transition", "TransitionEnd"),
            },
            rQ = {},
            rY = {};
          function rX(e) {
            if (rQ[e]) return rQ[e];
            if (!rJ[e]) return e;
            var t,
              r = rJ[e];
            for (t in r)
              if (r.hasOwnProperty(t) && t in rY) return (rQ[e] = r[t]);
            return e;
          }
          g &&
            ((rY = document.createElement("div").style),
            "AnimationEvent" in window ||
              (delete rJ.animationend.animation,
              delete rJ.animationiteration.animation,
              delete rJ.animationstart.animation),
            "TransitionEvent" in window || delete rJ.transitionend.transition);
          var rZ = rX("animationend"),
            r0 = rX("animationiteration"),
            r1 = rX("animationstart"),
            r2 = rX("transitionend"),
            r3 = new Map(),
            r4 =
              "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
              );
          function r6(e, t) {
            (r3.set(e, t), p(t, [e]));
          }
          for (var r5 = 0; r5 < r4.length; r5++) {
            var r8 = r4[r5];
            r6(r8.toLowerCase(), "on" + (r8[0].toUpperCase() + r8.slice(1)));
          }
          (r6(rZ, "onAnimationEnd"),
            r6(r0, "onAnimationIteration"),
            r6(r1, "onAnimationStart"),
            r6("dblclick", "onDoubleClick"),
            r6("focusin", "onFocus"),
            r6("focusout", "onBlur"),
            r6(r2, "onTransitionEnd"),
            m("onMouseEnter", ["mouseout", "mouseover"]),
            m("onMouseLeave", ["mouseout", "mouseover"]),
            m("onPointerEnter", ["pointerout", "pointerover"]),
            m("onPointerLeave", ["pointerout", "pointerover"]),
            p(
              "onChange",
              "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
              ),
            ),
            p(
              "onSelect",
              "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
              ),
            ),
            p("onBeforeInput", [
              "compositionend",
              "keypress",
              "textInput",
              "paste",
            ]),
            p(
              "onCompositionEnd",
              "compositionend focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ),
            p(
              "onCompositionStart",
              "compositionstart focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ),
            p(
              "onCompositionUpdate",
              "compositionupdate focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ));
          var r7 =
              "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " ",
              ),
            r9 = new Set(
              "cancel close invalid load scroll toggle".split(" ").concat(r7),
            );
          function ne(e, t, r) {
            var n = e.type || "unknown-event";
            ((e.currentTarget = r),
              (function (e, t, r, n, i, a, o, s, l) {
                if ((eq.apply(this, arguments), eF)) {
                  if (eF) {
                    var u = eM;
                    ((eF = !1), (eM = null));
                  } else throw Error(d(198));
                  eB || ((eB = !0), (ez = u));
                }
              })(n, t, void 0, e),
              (e.currentTarget = null));
          }
          function nt(e, t) {
            t = 0 != (4 & t);
            for (var r = 0; r < e.length; r++) {
              var n = e[r],
                i = n.event;
              n = n.listeners;
              e: {
                var a = void 0;
                if (t)
                  for (var o = n.length - 1; 0 <= o; o--) {
                    var s = n[o],
                      l = s.instance,
                      u = s.currentTarget;
                    if (((s = s.listener), l !== a && i.isPropagationStopped()))
                      break e;
                    (ne(i, s, u), (a = l));
                  }
                else
                  for (o = 0; o < n.length; o++) {
                    if (
                      ((l = (s = n[o]).instance),
                      (u = s.currentTarget),
                      (s = s.listener),
                      l !== a && i.isPropagationStopped())
                    )
                      break e;
                    (ne(i, s, u), (a = l));
                  }
              }
            }
            if (eB) throw ((e = ez), (eB = !1), (ez = null), e);
          }
          function nr(e, t) {
            var r = t[nR];
            void 0 === r && (r = t[nR] = new Set());
            var n = e + "__bubble";
            r.has(n) || (no(t, e, 2, !1), r.add(n));
          }
          function nn(e, t, r) {
            var n = 0;
            (t && (n |= 4), no(r, e, n, t));
          }
          var ni = "_reactListening" + Math.random().toString(36).slice(2);
          function na(e) {
            if (!e[ni]) {
              ((e[ni] = !0),
                f.forEach(function (t) {
                  "selectionchange" !== t &&
                    (r9.has(t) || nn(t, !1, e), nn(t, !0, e));
                }));
              var t = 9 === e.nodeType ? e : e.ownerDocument;
              null === t ||
                t[ni] ||
                ((t[ni] = !0), nn("selectionchange", !1, t));
            }
          }
          function no(e, t, r, n) {
            switch (tB(t)) {
              case 1:
                var i = tN;
                break;
              case 4:
                i = tD;
                break;
              default:
                i = t$;
            }
            ((r = i.bind(null, t, r, e)),
              (i = void 0),
              eN &&
                ("touchstart" === t || "touchmove" === t || "wheel" === t) &&
                (i = !0),
              n
                ? void 0 !== i
                  ? e.addEventListener(t, r, { capture: !0, passive: i })
                  : e.addEventListener(t, r, !0)
                : void 0 !== i
                  ? e.addEventListener(t, r, { passive: i })
                  : e.addEventListener(t, r, !1));
          }
          function ns(e, t, r, n, i) {
            var a = n;
            if (0 == (1 & t) && 0 == (2 & t) && null !== n)
              e: for (;;) {
                if (null === n) return;
                var o = n.tag;
                if (3 === o || 4 === o) {
                  var s = n.stateNode.containerInfo;
                  if (s === i || (8 === s.nodeType && s.parentNode === i))
                    break;
                  if (4 === o)
                    for (o = n.return; null !== o; ) {
                      var l = o.tag;
                      if (
                        (3 === l || 4 === l) &&
                        ((l = o.stateNode.containerInfo) === i ||
                          (8 === l.nodeType && l.parentNode === i))
                      )
                        return;
                      o = o.return;
                    }
                  for (; null !== s; ) {
                    if (null === (o = nL(s))) return;
                    if (5 === (l = o.tag) || 6 === l) {
                      n = a = o;
                      continue e;
                    }
                    s = s.parentNode;
                  }
                }
                n = n.return;
              }
            eO(function () {
              var n = a,
                i = eS(r),
                o = [];
              e: {
                var s = r3.get(e);
                if (void 0 !== s) {
                  var l = t0,
                    u = e;
                  switch (e) {
                    case "keypress":
                      if (0 === tG(r)) break e;
                    case "keydown":
                    case "keyup":
                      l = ra;
                      break;
                    case "focusin":
                      ((u = "focus"), (l = t5));
                      break;
                    case "focusout":
                      ((u = "blur"), (l = t5));
                      break;
                    case "beforeblur":
                    case "afterblur":
                      l = t5;
                      break;
                    case "click":
                      if (2 === r.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                      l = t4;
                      break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                      l = t6;
                      break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                      l = rs;
                      break;
                    case rZ:
                    case r0:
                    case r1:
                      l = t8;
                      break;
                    case r2:
                      l = rl;
                      break;
                    case "scroll":
                      l = t2;
                      break;
                    case "wheel":
                      l = ru;
                      break;
                    case "copy":
                    case "cut":
                    case "paste":
                      l = t7;
                      break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                      l = ro;
                  }
                  var c = 0 != (4 & t),
                    d = !c && "scroll" === e,
                    f = c ? (null !== s ? s + "Capture" : null) : s;
                  c = [];
                  for (var h, p = n; null !== p; ) {
                    var m = (h = p).stateNode;
                    if (
                      (5 === h.tag &&
                        null !== m &&
                        ((h = m),
                        null !== f &&
                          null != (m = eL(p, f)) &&
                          c.push(nl(p, m, h))),
                      d)
                    )
                      break;
                    p = p.return;
                  }
                  0 < c.length &&
                    ((s = new l(s, u, null, r, i)),
                    o.push({ event: s, listeners: c }));
                }
              }
              if (0 == (7 & t)) {
                if (
                  ((s = "mouseover" === e || "pointerover" === e),
                  (l = "mouseout" === e || "pointerout" === e),
                  !(
                    s &&
                    r !== eE &&
                    (u = r.relatedTarget || r.fromElement) &&
                    (nL(u) || u[nj])
                  ) &&
                    (l || s) &&
                    ((s =
                      i.window === i
                        ? i
                        : (s = i.ownerDocument)
                          ? s.defaultView || s.parentWindow
                          : window),
                    l
                      ? ((u = r.relatedTarget || r.toElement),
                        (l = n),
                        null !== (u = u ? nL(u) : null) &&
                          ((d = eV(u)),
                          u !== d || (5 !== u.tag && 6 !== u.tag)) &&
                          (u = null))
                      : ((l = null), (u = n)),
                    l !== u))
                ) {
                  if (
                    ((c = t4),
                    (m = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (p = "mouse"),
                    ("pointerout" === e || "pointerover" === e) &&
                      ((c = ro),
                      (m = "onPointerLeave"),
                      (f = "onPointerEnter"),
                      (p = "pointer")),
                    (d = null == l ? s : nD(l)),
                    (h = null == u ? s : nD(u)),
                    ((s = new c(m, p + "leave", l, r, i)).target = d),
                    (s.relatedTarget = h),
                    (m = null),
                    nL(i) === n &&
                      (((c = new c(f, p + "enter", u, r, i)).target = h),
                      (c.relatedTarget = d),
                      (m = c)),
                    (d = m),
                    l && u)
                  )
                    t: {
                      for (c = l, f = u, p = 0, h = c; h; h = nc(h)) p++;
                      for (h = 0, m = f; m; m = nc(m)) h++;
                      for (; 0 < p - h; ) ((c = nc(c)), p--);
                      for (; 0 < h - p; ) ((f = nc(f)), h--);
                      for (; p--; ) {
                        if (c === f || (null !== f && c === f.alternate))
                          break t;
                        ((c = nc(c)), (f = nc(f)));
                      }
                      c = null;
                    }
                  else c = null;
                  (null !== l && nd(o, s, l, c, !1),
                    null !== u && null !== d && nd(o, d, u, c, !0));
                }
                e: {
                  if (
                    "select" ===
                      (l =
                        (s = n ? nD(n) : window).nodeName &&
                        s.nodeName.toLowerCase()) ||
                    ("input" === l && "file" === s.type)
                  )
                    var g,
                      y = rT;
                  else if (rw(s)) {
                    if (rC) y = rL;
                    else {
                      y = rU;
                      var v = rR;
                    }
                  } else
                    (l = s.nodeName) &&
                      "input" === l.toLowerCase() &&
                      ("checkbox" === s.type || "radio" === s.type) &&
                      (y = rO);
                  if (y && (y = y(e, n))) {
                    rk(o, y, r, i);
                    break e;
                  }
                  (v && v(e, s, n),
                    "focusout" === e &&
                      (v = s._wrapperState) &&
                      v.controlled &&
                      "number" === s.type &&
                      en(s, "number", s.value));
                }
                switch (((v = n ? nD(n) : window), e)) {
                  case "focusin":
                    (rw(v) || "true" === v.contentEditable) &&
                      ((rH = v), (rq = n), (rV = null));
                    break;
                  case "focusout":
                    rV = rq = rH = null;
                    break;
                  case "mousedown":
                    rG = !0;
                    break;
                  case "contextmenu":
                  case "mouseup":
                  case "dragend":
                    ((rG = !1), rW(o, r, i));
                    break;
                  case "selectionchange":
                    if (rz) break;
                  case "keydown":
                  case "keyup":
                    rW(o, r, i);
                }
                if (rd)
                  t: {
                    switch (e) {
                      case "compositionstart":
                        var b = "onCompositionStart";
                        break t;
                      case "compositionend":
                        b = "onCompositionEnd";
                        break t;
                      case "compositionupdate":
                        b = "onCompositionUpdate";
                        break t;
                    }
                    b = void 0;
                  }
                else
                  rv
                    ? rg(e, r) && (b = "onCompositionEnd")
                    : "keydown" === e &&
                      229 === r.keyCode &&
                      (b = "onCompositionStart");
                (b &&
                  (rp &&
                    "ko" !== r.locale &&
                    (rv || "onCompositionStart" !== b
                      ? "onCompositionEnd" === b && rv && (g = tV())
                      : ((tH = "value" in (tz = i) ? tz.value : tz.textContent),
                        (rv = !0))),
                  0 < (v = nu(n, b)).length &&
                    ((b = new t9(b, e, null, r, i)),
                    o.push({ event: b, listeners: v }),
                    g ? (b.data = g) : null !== (g = ry(r)) && (b.data = g))),
                  (g = rh
                    ? (function (e, t) {
                        switch (e) {
                          case "compositionend":
                            return ry(t);
                          case "keypress":
                            if (32 !== t.which) return null;
                            return ((rm = !0), " ");
                          case "textInput":
                            return " " === (e = t.data) && rm ? null : e;
                          default:
                            return null;
                        }
                      })(e, r)
                    : (function (e, t) {
                        if (rv)
                          return "compositionend" === e || (!rd && rg(e, t))
                            ? ((e = tV()), (tq = tH = tz = null), (rv = !1), e)
                            : null;
                        switch (e) {
                          case "paste":
                          default:
                            return null;
                          case "keypress":
                            if (
                              !(t.ctrlKey || t.altKey || t.metaKey) ||
                              (t.ctrlKey && t.altKey)
                            ) {
                              if (t.char && 1 < t.char.length) return t.char;
                              if (t.which) return String.fromCharCode(t.which);
                            }
                            return null;
                          case "compositionend":
                            return rp && "ko" !== t.locale ? null : t.data;
                        }
                      })(e, r)) &&
                    0 < (n = nu(n, "onBeforeInput")).length &&
                    ((i = new t9("onBeforeInput", "beforeinput", null, r, i)),
                    o.push({ event: i, listeners: n }),
                    (i.data = g)));
              }
              nt(o, t);
            });
          }
          function nl(e, t, r) {
            return { instance: e, listener: t, currentTarget: r };
          }
          function nu(e, t) {
            for (var r = t + "Capture", n = []; null !== e; ) {
              var i = e,
                a = i.stateNode;
              (5 === i.tag &&
                null !== a &&
                ((i = a),
                null != (a = eL(e, r)) && n.unshift(nl(e, a, i)),
                null != (a = eL(e, t)) && n.push(nl(e, a, i))),
                (e = e.return));
            }
            return n;
          }
          function nc(e) {
            if (null === e) return null;
            do e = e.return;
            while (e && 5 !== e.tag);
            return e || null;
          }
          function nd(e, t, r, n, i) {
            for (var a = t._reactName, o = []; null !== r && r !== n; ) {
              var s = r,
                l = s.alternate,
                u = s.stateNode;
              if (null !== l && l === n) break;
              (5 === s.tag &&
                null !== u &&
                ((s = u),
                i
                  ? null != (l = eL(r, a)) && o.unshift(nl(r, l, s))
                  : i || (null != (l = eL(r, a)) && o.push(nl(r, l, s)))),
                (r = r.return));
            }
            0 !== o.length && e.push({ event: t, listeners: o });
          }
          var nf = /\r\n?/g,
            nh = /\u0000|\uFFFD/g;
          function np(e) {
            return ("string" == typeof e ? e : "" + e)
              .replace(nf, "\n")
              .replace(nh, "");
          }
          function nm(e, t, r) {
            if (((t = np(t)), np(e) !== t && r)) throw Error(d(425));
          }
          function ng() {}
          var ny = null,
            nv = null;
          function nb(e, t) {
            return (
              "textarea" === e ||
              "noscript" === e ||
              "string" == typeof t.children ||
              "number" == typeof t.children ||
              ("object" == typeof t.dangerouslySetInnerHTML &&
                null !== t.dangerouslySetInnerHTML &&
                null != t.dangerouslySetInnerHTML.__html)
            );
          }
          var nw = "function" == typeof setTimeout ? setTimeout : void 0,
            nk = "function" == typeof clearTimeout ? clearTimeout : void 0,
            n_ = "function" == typeof Promise ? Promise : void 0,
            nE =
              "function" == typeof queueMicrotask
                ? queueMicrotask
                : void 0 !== n_
                  ? function (e) {
                      return n_.resolve(null).then(e).catch(nS);
                    }
                  : nw;
          function nS(e) {
            setTimeout(function () {
              throw e;
            });
          }
          function nx(e, t) {
            var r = t,
              n = 0;
            do {
              var i = r.nextSibling;
              if ((e.removeChild(r), i && 8 === i.nodeType)) {
                if ("/$" === (r = i.data)) {
                  if (0 === n) {
                    (e.removeChild(i), tU(t));
                    return;
                  }
                  n--;
                } else ("$" !== r && "$?" !== r && "$!" !== r) || n++;
              }
              r = i;
            } while (r);
            tU(t);
          }
          function nT(e) {
            for (; null != e; e = e.nextSibling) {
              var t = e.nodeType;
              if (1 === t || 3 === t) break;
              if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                if ("/$" === t) return null;
              }
            }
            return e;
          }
          function nC(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
              if (8 === e.nodeType) {
                var r = e.data;
                if ("$" === r || "$!" === r || "$?" === r) {
                  if (0 === t) return e;
                  t--;
                } else "/$" === r && t++;
              }
              e = e.previousSibling;
            }
            return null;
          }
          var nA = Math.random().toString(36).slice(2),
            nI = "__reactFiber$" + nA,
            nP = "__reactProps$" + nA,
            nj = "__reactContainer$" + nA,
            nR = "__reactEvents$" + nA,
            nU = "__reactListeners$" + nA,
            nO = "__reactHandles$" + nA;
          function nL(e) {
            var t = e[nI];
            if (t) return t;
            for (var r = e.parentNode; r; ) {
              if ((t = r[nj] || r[nI])) {
                if (
                  ((r = t.alternate),
                  null !== t.child || (null !== r && null !== r.child))
                )
                  for (e = nC(e); null !== e; ) {
                    if ((r = e[nI])) return r;
                    e = nC(e);
                  }
                return t;
              }
              r = (e = r).parentNode;
            }
            return null;
          }
          function nN(e) {
            return (e = e[nI] || e[nj]) &&
              (5 === e.tag || 6 === e.tag || 13 === e.tag || 3 === e.tag)
              ? e
              : null;
          }
          function nD(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(d(33));
          }
          function n$(e) {
            return e[nP] || null;
          }
          var nF = [],
            nM = -1;
          function nB(e) {
            return { current: e };
          }
          function nz(e) {
            0 > nM || ((e.current = nF[nM]), (nF[nM] = null), nM--);
          }
          function nH(e, t) {
            ((nF[++nM] = e.current), (e.current = t));
          }
          var nq = {},
            nV = nB(nq),
            nG = nB(!1),
            nW = nq;
          function nK(e, t) {
            var r = e.type.contextTypes;
            if (!r) return nq;
            var n = e.stateNode;
            if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
              return n.__reactInternalMemoizedMaskedChildContext;
            var i,
              a = {};
            for (i in r) a[i] = t[i];
            return (
              n &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = a)),
              a
            );
          }
          function nJ(e) {
            return null != (e = e.childContextTypes);
          }
          function nQ() {
            (nz(nG), nz(nV));
          }
          function nY(e, t, r) {
            if (nV.current !== nq) throw Error(d(168));
            (nH(nV, t), nH(nG, r));
          }
          function nX(e, t, r) {
            var n = e.stateNode;
            if (
              ((t = t.childContextTypes),
              "function" != typeof n.getChildContext)
            )
              return r;
            for (var i in (n = n.getChildContext()))
              if (!(i in t))
                throw Error(
                  d(
                    108,
                    (function (e) {
                      var t = e.type;
                      switch (e.tag) {
                        case 24:
                          return "Cache";
                        case 9:
                          return (t.displayName || "Context") + ".Consumer";
                        case 10:
                          return (
                            (t._context.displayName || "Context") + ".Provider"
                          );
                        case 18:
                          return "DehydratedFragment";
                        case 11:
                          return (
                            (e = (e = t.render).displayName || e.name || ""),
                            t.displayName ||
                              ("" !== e
                                ? "ForwardRef(" + e + ")"
                                : "ForwardRef")
                          );
                        case 7:
                          return "Fragment";
                        case 5:
                          return t;
                        case 4:
                          return "Portal";
                        case 3:
                          return "Root";
                        case 6:
                          return "Text";
                        case 16:
                          return (function e(t) {
                            if (null == t) return null;
                            if ("function" == typeof t)
                              return t.displayName || t.name || null;
                            if ("string" == typeof t) return t;
                            switch (t) {
                              case I:
                                return "Fragment";
                              case A:
                                return "Portal";
                              case j:
                                return "Profiler";
                              case P:
                                return "StrictMode";
                              case L:
                                return "Suspense";
                              case N:
                                return "SuspenseList";
                            }
                            if ("object" == typeof t)
                              switch (t.$$typeof) {
                                case U:
                                  return (
                                    (t.displayName || "Context") + ".Consumer"
                                  );
                                case R:
                                  return (
                                    (t._context.displayName || "Context") +
                                    ".Provider"
                                  );
                                case O:
                                  var r = t.render;
                                  return (
                                    (t = t.displayName) ||
                                      (t =
                                        "" !==
                                        (t = r.displayName || r.name || "")
                                          ? "ForwardRef(" + t + ")"
                                          : "ForwardRef"),
                                    t
                                  );
                                case D:
                                  return null !== (r = t.displayName || null)
                                    ? r
                                    : e(t.type) || "Memo";
                                case $:
                                  ((r = t._payload), (t = t._init));
                                  try {
                                    return e(t(r));
                                  } catch (e) {}
                              }
                            return null;
                          })(t);
                        case 8:
                          return t === P ? "StrictMode" : "Mode";
                        case 22:
                          return "Offscreen";
                        case 12:
                          return "Profiler";
                        case 21:
                          return "Scope";
                        case 13:
                          return "Suspense";
                        case 19:
                          return "SuspenseList";
                        case 25:
                          return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                          if ("function" == typeof t)
                            return t.displayName || t.name || null;
                          if ("string" == typeof t) return t;
                      }
                      return null;
                    })(e) || "Unknown",
                    i,
                  ),
                );
            return H({}, r, n);
          }
          function nZ(e) {
            return (
              (e =
                ((e = e.stateNode) &&
                  e.__reactInternalMemoizedMergedChildContext) ||
                nq),
              (nW = nV.current),
              nH(nV, e),
              nH(nG, nG.current),
              !0
            );
          }
          function n0(e, t, r) {
            var n = e.stateNode;
            if (!n) throw Error(d(169));
            (r
              ? ((e = nX(e, t, nW)),
                (n.__reactInternalMemoizedMergedChildContext = e),
                nz(nG),
                nz(nV),
                nH(nV, e))
              : nz(nG),
              nH(nG, r));
          }
          var n1 = null,
            n2 = !1,
            n3 = !1;
          function n4(e) {
            null === n1 ? (n1 = [e]) : n1.push(e);
          }
          function n6() {
            if (!n3 && null !== n1) {
              n3 = !0;
              var e = 0,
                t = tc;
              try {
                var r = n1;
                for (tc = 1; e < r.length; e++) {
                  var n = r[e];
                  do n = n(!0);
                  while (null !== n);
                }
                ((n1 = null), (n2 = !1));
              } catch (t) {
                throw (null !== n1 && (n1 = n1.slice(e + 1)), eJ(e1, n6), t);
              } finally {
                ((tc = t), (n3 = !1));
              }
            }
            return null;
          }
          var n5 = [],
            n8 = 0,
            n7 = null,
            n9 = 0,
            ie = [],
            it = 0,
            ir = null,
            ii = 1,
            ia = "";
          function io(e, t) {
            ((n5[n8++] = n9), (n5[n8++] = n7), (n7 = e), (n9 = t));
          }
          function is(e, t, r) {
            ((ie[it++] = ii), (ie[it++] = ia), (ie[it++] = ir), (ir = e));
            var n = ii;
            e = ia;
            var i = 32 - e7(n) - 1;
            ((n &= ~(1 << i)), (r += 1));
            var a = 32 - e7(t) + i;
            if (30 < a) {
              var o = i - (i % 5);
              ((a = (n & ((1 << o) - 1)).toString(32)),
                (n >>= o),
                (i -= o),
                (ii = (1 << (32 - e7(t) + i)) | (r << i) | n),
                (ia = a + e));
            } else ((ii = (1 << a) | (r << i) | n), (ia = e));
          }
          function il(e) {
            null !== e.return && (io(e, 1), is(e, 1, 0));
          }
          function iu(e) {
            for (; e === n7; )
              ((n7 = n5[--n8]),
                (n5[n8] = null),
                (n9 = n5[--n8]),
                (n5[n8] = null));
            for (; e === ir; )
              ((ir = ie[--it]),
                (ie[it] = null),
                (ia = ie[--it]),
                (ie[it] = null),
                (ii = ie[--it]),
                (ie[it] = null));
          }
          var ic = null,
            id = null,
            ih = !1,
            ip = null;
          function im(e, t) {
            var r = sJ(5, null, null, 0);
            ((r.elementType = "DELETED"),
              (r.stateNode = t),
              (r.return = e),
              null === (t = e.deletions)
                ? ((e.deletions = [r]), (e.flags |= 16))
                : t.push(r));
          }
          function ig(e, t) {
            switch (e.tag) {
              case 5:
                var r = e.type;
                return (
                  null !==
                    (t =
                      1 !== t.nodeType ||
                      r.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t) &&
                  ((e.stateNode = t), (ic = e), (id = nT(t.firstChild)), !0)
                );
              case 6:
                return (
                  null !==
                    (t =
                      "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                  ((e.stateNode = t), (ic = e), (id = null), !0)
                );
              case 13:
                return (
                  null !== (t = 8 !== t.nodeType ? null : t) &&
                  ((r = null !== ir ? { id: ii, overflow: ia } : null),
                  (e.memoizedState = {
                    dehydrated: t,
                    treeContext: r,
                    retryLane: 1073741824,
                  }),
                  ((r = sJ(18, null, null, 0)).stateNode = t),
                  (r.return = e),
                  (e.child = r),
                  (ic = e),
                  (id = null),
                  !0)
                );
              default:
                return !1;
            }
          }
          function iy(e) {
            return 0 != (1 & e.mode) && 0 == (128 & e.flags);
          }
          function iv(e) {
            if (ih) {
              var t = id;
              if (t) {
                var r = t;
                if (!ig(e, t)) {
                  if (iy(e)) throw Error(d(418));
                  t = nT(r.nextSibling);
                  var n = ic;
                  t && ig(e, t)
                    ? im(n, r)
                    : ((e.flags = (-4097 & e.flags) | 2), (ih = !1), (ic = e));
                }
              } else {
                if (iy(e)) throw Error(d(418));
                ((e.flags = (-4097 & e.flags) | 2), (ih = !1), (ic = e));
              }
            }
          }
          function ib(e) {
            for (
              e = e.return;
              null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
            )
              e = e.return;
            ic = e;
          }
          function iw(e) {
            if (e !== ic) return !1;
            if (!ih) return (ib(e), (ih = !0), !1);
            if (
              ((t = 3 !== e.tag) &&
                !(t = 5 !== e.tag) &&
                (t =
                  "head" !== (t = e.type) &&
                  "body" !== t &&
                  !nb(e.type, e.memoizedProps)),
              t && (t = id))
            ) {
              if (iy(e)) throw (ik(), Error(d(418)));
              for (; t; ) (im(e, t), (t = nT(t.nextSibling)));
            }
            if ((ib(e), 13 === e.tag)) {
              if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(d(317));
              e: {
                for (t = 0, e = e.nextSibling; e; ) {
                  if (8 === e.nodeType) {
                    var t,
                      r = e.data;
                    if ("/$" === r) {
                      if (0 === t) {
                        id = nT(e.nextSibling);
                        break e;
                      }
                      t--;
                    } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
                  }
                  e = e.nextSibling;
                }
                id = null;
              }
            } else id = ic ? nT(e.stateNode.nextSibling) : null;
            return !0;
          }
          function ik() {
            for (var e = id; e; ) e = nT(e.nextSibling);
          }
          function i_() {
            ((id = ic = null), (ih = !1));
          }
          function iE(e) {
            null === ip ? (ip = [e]) : ip.push(e);
          }
          var iS = T.ReactCurrentBatchConfig;
          function ix(e, t) {
            if (e && e.defaultProps)
              for (var r in ((t = H({}, t)), (e = e.defaultProps)))
                void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          var iT = nB(null),
            iC = null,
            iA = null,
            iI = null;
          function iP() {
            iI = iA = iC = null;
          }
          function ij(e) {
            var t = iT.current;
            (nz(iT), (e._currentValue = t));
          }
          function iR(e, t, r) {
            for (; null !== e; ) {
              var n = e.alternate;
              if (
                ((e.childLanes & t) !== t
                  ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
                  : null !== n &&
                    (n.childLanes & t) !== t &&
                    (n.childLanes |= t),
                e === r)
              )
                break;
              e = e.return;
            }
          }
          function iU(e, t) {
            ((iC = e),
              (iI = iA = null),
              null !== (e = e.dependencies) &&
                null !== e.firstContext &&
                (0 != (e.lanes & t) && (ol = !0), (e.firstContext = null)));
          }
          function iO(e) {
            var t = e._currentValue;
            if (iI !== e) {
              if (
                ((e = { context: e, memoizedValue: t, next: null }),
                null === iA)
              ) {
                if (null === iC) throw Error(d(308));
                ((iA = e), (iC.dependencies = { lanes: 0, firstContext: e }));
              } else iA = iA.next = e;
            }
            return t;
          }
          var iL = null;
          function iN(e) {
            null === iL ? (iL = [e]) : iL.push(e);
          }
          function iD(e, t, r, n) {
            var i = t.interleaved;
            return (
              null === i
                ? ((r.next = r), iN(t))
                : ((r.next = i.next), (i.next = r)),
              (t.interleaved = r),
              i$(e, n)
            );
          }
          function i$(e, t) {
            e.lanes |= t;
            var r = e.alternate;
            for (
              null !== r && (r.lanes |= t), r = e, e = e.return;
              null !== e;
            )
              ((e.childLanes |= t),
                null !== (r = e.alternate) && (r.childLanes |= t),
                (r = e),
                (e = e.return));
            return 3 === r.tag ? r.stateNode : null;
          }
          var iF = !1;
          function iM(e) {
            e.updateQueue = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null, interleaved: null, lanes: 0 },
              effects: null,
            };
          }
          function iB(e, t) {
            ((e = e.updateQueue),
              t.updateQueue === e &&
                (t.updateQueue = {
                  baseState: e.baseState,
                  firstBaseUpdate: e.firstBaseUpdate,
                  lastBaseUpdate: e.lastBaseUpdate,
                  shared: e.shared,
                  effects: e.effects,
                }));
          }
          function iz(e, t) {
            return {
              eventTime: e,
              lane: t,
              tag: 0,
              payload: null,
              callback: null,
              next: null,
            };
          }
          function iH(e, t, r) {
            var n = e.updateQueue;
            if (null === n) return null;
            if (((n = n.shared), 0 != (2 & o6))) {
              var i = n.pending;
              return (
                null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
                (n.pending = t),
                i$(e, r)
              );
            }
            return (
              null === (i = n.interleaved)
                ? ((t.next = t), iN(n))
                : ((t.next = i.next), (i.next = t)),
              (n.interleaved = t),
              i$(e, r)
            );
          }
          function iq(e, t, r) {
            if (
              null !== (t = t.updateQueue) &&
              ((t = t.shared), 0 != (4194240 & r))
            ) {
              var n = t.lanes;
              ((n &= e.pendingLanes), (r |= n), (t.lanes = r), tu(e, r));
            }
          }
          function iV(e, t) {
            var r = e.updateQueue,
              n = e.alternate;
            if (null !== n && r === (n = n.updateQueue)) {
              var i = null,
                a = null;
              if (null !== (r = r.firstBaseUpdate)) {
                do {
                  var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null,
                  };
                  (null === a ? (i = a = o) : (a = a.next = o), (r = r.next));
                } while (null !== r);
                null === a ? (i = a = t) : (a = a.next = t);
              } else i = a = t;
              ((r = {
                baseState: n.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: n.shared,
                effects: n.effects,
              }),
                (e.updateQueue = r));
              return;
            }
            (null === (e = r.lastBaseUpdate)
              ? (r.firstBaseUpdate = t)
              : (e.next = t),
              (r.lastBaseUpdate = t));
          }
          function iG(e, t, r, n) {
            var i = e.updateQueue;
            iF = !1;
            var a = i.firstBaseUpdate,
              o = i.lastBaseUpdate,
              s = i.shared.pending;
            if (null !== s) {
              i.shared.pending = null;
              var l = s,
                u = l.next;
              ((l.next = null), null === o ? (a = u) : (o.next = u), (o = l));
              var c = e.alternate;
              null !== c &&
                (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
                (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
                (c.lastBaseUpdate = l));
            }
            if (null !== a) {
              var d = i.baseState;
              for (o = 0, c = u = l = null, s = a; ; ) {
                var f = s.lane,
                  h = s.eventTime;
                if ((n & f) === f) {
                  null !== c &&
                    (c = c.next =
                      {
                        eventTime: h,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null,
                      });
                  e: {
                    var p = e,
                      m = s;
                    switch (((f = t), (h = r), m.tag)) {
                      case 1:
                        if ("function" == typeof (p = m.payload)) {
                          d = p.call(h, d, f);
                          break e;
                        }
                        d = p;
                        break e;
                      case 3:
                        p.flags = (-65537 & p.flags) | 128;
                      case 0:
                        if (
                          null ==
                          (f =
                            "function" == typeof (p = m.payload)
                              ? p.call(h, d, f)
                              : p)
                        )
                          break e;
                        d = H({}, d, f);
                        break e;
                      case 2:
                        iF = !0;
                    }
                  }
                  null !== s.callback &&
                    0 !== s.lane &&
                    ((e.flags |= 64),
                    null === (f = i.effects) ? (i.effects = [s]) : f.push(s));
                } else
                  ((h = {
                    eventTime: h,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                  }),
                    null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                    (o |= f));
                if (null === (s = s.next)) {
                  if (null === (s = i.shared.pending)) break;
                  ((s = (f = s).next),
                    (f.next = null),
                    (i.lastBaseUpdate = f),
                    (i.shared.pending = null));
                }
              }
              if (
                (null === c && (l = d),
                (i.baseState = l),
                (i.firstBaseUpdate = u),
                (i.lastBaseUpdate = c),
                null !== (t = i.shared.interleaved))
              ) {
                i = t;
                do ((o |= i.lane), (i = i.next));
                while (i !== t);
              } else null === a && (i.shared.lanes = 0);
              ((sn |= o), (e.lanes = o), (e.memoizedState = d));
            }
          }
          function iW(e, t, r) {
            if (((e = t.effects), (t.effects = null), null !== e))
              for (t = 0; t < e.length; t++) {
                var n = e[t],
                  i = n.callback;
                if (null !== i) {
                  if (((n.callback = null), (n = r), "function" != typeof i))
                    throw Error(d(191, i));
                  i.call(n);
                }
              }
          }
          var iK = new u.Component().refs;
          function iJ(e, t, r, n) {
            ((r = null == (r = r(n, (t = e.memoizedState))) ? t : H({}, t, r)),
              (e.memoizedState = r),
              0 === e.lanes && (e.updateQueue.baseState = r));
          }
          var iQ = {
            isMounted: function (e) {
              return !!(e = e._reactInternals) && eV(e) === e;
            },
            enqueueSetState: function (e, t, r) {
              e = e._reactInternals;
              var n = sk(),
                i = s_(e),
                a = iz(n, i);
              ((a.payload = t),
                null != r && (a.callback = r),
                null !== (t = iH(e, a, i)) && (sE(t, e, i, n), iq(t, e, i)));
            },
            enqueueReplaceState: function (e, t, r) {
              e = e._reactInternals;
              var n = sk(),
                i = s_(e),
                a = iz(n, i);
              ((a.tag = 1),
                (a.payload = t),
                null != r && (a.callback = r),
                null !== (t = iH(e, a, i)) && (sE(t, e, i, n), iq(t, e, i)));
            },
            enqueueForceUpdate: function (e, t) {
              e = e._reactInternals;
              var r = sk(),
                n = s_(e),
                i = iz(r, n);
              ((i.tag = 2),
                null != t && (i.callback = t),
                null !== (t = iH(e, i, n)) && (sE(t, e, n, r), iq(t, e, n)));
            },
          };
          function iY(e, t, r, n, i, a, o) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate
              ? e.shouldComponentUpdate(n, a, o)
              : !t.prototype ||
                  !t.prototype.isPureReactComponent ||
                  !rD(r, n) ||
                  !rD(i, a);
          }
          function iX(e, t, r) {
            var n = !1,
              i = nq,
              a = t.contextType;
            return (
              "object" == typeof a && null !== a
                ? (a = iO(a))
                : ((i = nJ(t) ? nW : nV.current),
                  (a = (n = null != (n = t.contextTypes)) ? nK(e, i) : nq)),
              (t = new t(r, a)),
              (e.memoizedState =
                null !== t.state && void 0 !== t.state ? t.state : null),
              (t.updater = iQ),
              (e.stateNode = t),
              (t._reactInternals = e),
              n &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
                (e.__reactInternalMemoizedMaskedChildContext = a)),
              t
            );
          }
          function iZ(e, t, r, n) {
            ((e = t.state),
              "function" == typeof t.componentWillReceiveProps &&
                t.componentWillReceiveProps(r, n),
              "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                t.UNSAFE_componentWillReceiveProps(r, n),
              t.state !== e && iQ.enqueueReplaceState(t, t.state, null));
          }
          function i0(e, t, r, n) {
            var i = e.stateNode;
            ((i.props = r), (i.state = e.memoizedState), (i.refs = iK), iM(e));
            var a = t.contextType;
            ("object" == typeof a && null !== a
              ? (i.context = iO(a))
              : ((a = nJ(t) ? nW : nV.current), (i.context = nK(e, a))),
              (i.state = e.memoizedState),
              "function" == typeof (a = t.getDerivedStateFromProps) &&
                (iJ(e, t, a, r), (i.state = e.memoizedState)),
              "function" == typeof t.getDerivedStateFromProps ||
                "function" == typeof i.getSnapshotBeforeUpdate ||
                ("function" != typeof i.UNSAFE_componentWillMount &&
                  "function" != typeof i.componentWillMount) ||
                ((t = i.state),
                "function" == typeof i.componentWillMount &&
                  i.componentWillMount(),
                "function" == typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount(),
                t !== i.state && iQ.enqueueReplaceState(i, i.state, null),
                iG(e, r, i, n),
                (i.state = e.memoizedState)),
              "function" == typeof i.componentDidMount && (e.flags |= 4194308));
          }
          function i1(e, t, r) {
            if (
              null !== (e = r.ref) &&
              "function" != typeof e &&
              "object" != typeof e
            ) {
              if (r._owner) {
                if ((r = r._owner)) {
                  if (1 !== r.tag) throw Error(d(309));
                  var n = r.stateNode;
                }
                if (!n) throw Error(d(147, e));
                var i = n,
                  a = "" + e;
                return null !== t &&
                  null !== t.ref &&
                  "function" == typeof t.ref &&
                  t.ref._stringRef === a
                  ? t.ref
                  : (((t = function (e) {
                      var t = i.refs;
                      (t === iK && (t = i.refs = {}),
                        null === e ? delete t[a] : (t[a] = e));
                    })._stringRef = a),
                    t);
              }
              if ("string" != typeof e) throw Error(d(284));
              if (!r._owner) throw Error(d(290, e));
            }
            return e;
          }
          function i2(e, t) {
            throw Error(
              d(
                31,
                "[object Object]" === (e = Object.prototype.toString.call(t))
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            );
          }
          function i3(e) {
            return (0, e._init)(e._payload);
          }
          function i4(e) {
            function t(t, r) {
              if (e) {
                var n = t.deletions;
                null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
              }
            }
            function r(r, n) {
              if (!e) return null;
              for (; null !== n; ) (t(r, n), (n = n.sibling));
              return null;
            }
            function n(e, t) {
              for (e = new Map(); null !== t; )
                (null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                  (t = t.sibling));
              return e;
            }
            function i(e, t) {
              return (((e = sY(e, t)).index = 0), (e.sibling = null), e);
            }
            function a(t, r, n) {
              return ((t.index = n), e)
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags |= 2), r)
                    : n
                  : ((t.flags |= 2), r)
                : ((t.flags |= 1048576), r);
            }
            function o(t) {
              return (e && null === t.alternate && (t.flags |= 2), t);
            }
            function s(e, t, r, n) {
              return (
                null === t || 6 !== t.tag
                  ? ((t = s1(r, e.mode, n)).return = e)
                  : ((t = i(t, r)).return = e),
                t
              );
            }
            function l(e, t, r, n) {
              var a = r.type;
              return a === I
                ? c(e, t, r.props.children, n, r.key)
                : (null !== t &&
                  (t.elementType === a ||
                    ("object" == typeof a &&
                      null !== a &&
                      a.$$typeof === $ &&
                      i3(a) === t.type))
                    ? ((n = i(t, r.props)).ref = i1(e, t, r))
                    : ((n = sX(r.type, r.key, r.props, null, e.mode, n)).ref =
                        i1(e, t, r)),
                  (n.return = e),
                  n);
            }
            function u(e, t, r, n) {
              return (
                null === t ||
                4 !== t.tag ||
                t.stateNode.containerInfo !== r.containerInfo ||
                t.stateNode.implementation !== r.implementation
                  ? ((t = s2(r, e.mode, n)).return = e)
                  : ((t = i(t, r.children || [])).return = e),
                t
              );
            }
            function c(e, t, r, n, a) {
              return (
                null === t || 7 !== t.tag
                  ? ((t = sZ(r, e.mode, n, a)).return = e)
                  : ((t = i(t, r)).return = e),
                t
              );
            }
            function f(e, t, r) {
              if (("string" == typeof t && "" !== t) || "number" == typeof t)
                return (((t = s1("" + t, e.mode, r)).return = e), t);
              if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                  case C:
                    return (
                      ((r = sX(t.type, t.key, t.props, null, e.mode, r)).ref =
                        i1(e, null, t)),
                      (r.return = e),
                      r
                    );
                  case A:
                    return (((t = s2(t, e.mode, r)).return = e), t);
                  case $:
                    return f(e, (0, t._init)(t._payload), r);
                }
                if (ei(t) || B(t))
                  return (((t = sZ(t, e.mode, r, null)).return = e), t);
                i2(e, t);
              }
              return null;
            }
            function h(e, t, r, n) {
              var i = null !== t ? t.key : null;
              if (("string" == typeof r && "" !== r) || "number" == typeof r)
                return null !== i ? null : s(e, t, "" + r, n);
              if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                  case C:
                    return r.key === i ? l(e, t, r, n) : null;
                  case A:
                    return r.key === i ? u(e, t, r, n) : null;
                  case $:
                    return h(e, t, (i = r._init)(r._payload), n);
                }
                if (ei(r) || B(r))
                  return null !== i ? null : c(e, t, r, n, null);
                i2(e, r);
              }
              return null;
            }
            function p(e, t, r, n, i) {
              if (("string" == typeof n && "" !== n) || "number" == typeof n)
                return s(t, (e = e.get(r) || null), "" + n, i);
              if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                  case C:
                    return l(
                      t,
                      (e = e.get(null === n.key ? r : n.key) || null),
                      n,
                      i,
                    );
                  case A:
                    return u(
                      t,
                      (e = e.get(null === n.key ? r : n.key) || null),
                      n,
                      i,
                    );
                  case $:
                    return p(e, t, r, (0, n._init)(n._payload), i);
                }
                if (ei(n) || B(n))
                  return c(t, (e = e.get(r) || null), n, i, null);
                i2(t, n);
              }
              return null;
            }
            return function s(l, u, c, m) {
              if (
                ("object" == typeof c &&
                  null !== c &&
                  c.type === I &&
                  null === c.key &&
                  (c = c.props.children),
                "object" == typeof c && null !== c)
              ) {
                switch (c.$$typeof) {
                  case C:
                    e: {
                      for (var g = c.key, y = u; null !== y; ) {
                        if (y.key === g) {
                          if ((g = c.type) === I) {
                            if (7 === y.tag) {
                              (r(l, y.sibling),
                                ((u = i(y, c.props.children)).return = l),
                                (l = u));
                              break e;
                            }
                          } else if (
                            y.elementType === g ||
                            ("object" == typeof g &&
                              null !== g &&
                              g.$$typeof === $ &&
                              i3(g) === y.type)
                          ) {
                            (r(l, y.sibling),
                              ((u = i(y, c.props)).ref = i1(l, y, c)),
                              (u.return = l),
                              (l = u));
                            break e;
                          }
                          r(l, y);
                          break;
                        }
                        (t(l, y), (y = y.sibling));
                      }
                      c.type === I
                        ? (((u = sZ(
                            c.props.children,
                            l.mode,
                            m,
                            c.key,
                          )).return = l),
                          (l = u))
                        : (((m = sX(
                            c.type,
                            c.key,
                            c.props,
                            null,
                            l.mode,
                            m,
                          )).ref = i1(l, u, c)),
                          (m.return = l),
                          (l = m));
                    }
                    return o(l);
                  case A:
                    e: {
                      for (y = c.key; null !== u; ) {
                        if (u.key === y) {
                          if (
                            4 === u.tag &&
                            u.stateNode.containerInfo === c.containerInfo &&
                            u.stateNode.implementation === c.implementation
                          ) {
                            (r(l, u.sibling),
                              ((u = i(u, c.children || [])).return = l),
                              (l = u));
                            break e;
                          }
                          r(l, u);
                          break;
                        }
                        (t(l, u), (u = u.sibling));
                      }
                      (((u = s2(c, l.mode, m)).return = l), (l = u));
                    }
                    return o(l);
                  case $:
                    return s(l, u, (y = c._init)(c._payload), m);
                }
                if (ei(c))
                  return (function (i, o, s, l) {
                    for (
                      var u = null, c = null, d = o, m = (o = 0), g = null;
                      null !== d && m < s.length;
                      m++
                    ) {
                      d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
                      var y = h(i, d, s[m], l);
                      if (null === y) {
                        null === d && (d = g);
                        break;
                      }
                      (e && d && null === y.alternate && t(i, d),
                        (o = a(y, o, m)),
                        null === c ? (u = y) : (c.sibling = y),
                        (c = y),
                        (d = g));
                    }
                    if (m === s.length) return (r(i, d), ih && io(i, m), u);
                    if (null === d) {
                      for (; m < s.length; m++)
                        null !== (d = f(i, s[m], l)) &&
                          ((o = a(d, o, m)),
                          null === c ? (u = d) : (c.sibling = d),
                          (c = d));
                      return (ih && io(i, m), u);
                    }
                    for (d = n(i, d); m < s.length; m++)
                      null !== (g = p(d, i, m, s[m], l)) &&
                        (e &&
                          null !== g.alternate &&
                          d.delete(null === g.key ? m : g.key),
                        (o = a(g, o, m)),
                        null === c ? (u = g) : (c.sibling = g),
                        (c = g));
                    return (
                      e &&
                        d.forEach(function (e) {
                          return t(i, e);
                        }),
                      ih && io(i, m),
                      u
                    );
                  })(l, u, c, m);
                if (B(c))
                  return (function (i, o, s, l) {
                    var u = B(s);
                    if ("function" != typeof u) throw Error(d(150));
                    if (null == (s = u.call(s))) throw Error(d(151));
                    for (
                      var c = (u = null),
                        m = o,
                        g = (o = 0),
                        y = null,
                        v = s.next();
                      null !== m && !v.done;
                      g++, v = s.next()
                    ) {
                      m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
                      var b = h(i, m, v.value, l);
                      if (null === b) {
                        null === m && (m = y);
                        break;
                      }
                      (e && m && null === b.alternate && t(i, m),
                        (o = a(b, o, g)),
                        null === c ? (u = b) : (c.sibling = b),
                        (c = b),
                        (m = y));
                    }
                    if (v.done) return (r(i, m), ih && io(i, g), u);
                    if (null === m) {
                      for (; !v.done; g++, v = s.next())
                        null !== (v = f(i, v.value, l)) &&
                          ((o = a(v, o, g)),
                          null === c ? (u = v) : (c.sibling = v),
                          (c = v));
                      return (ih && io(i, g), u);
                    }
                    for (m = n(i, m); !v.done; g++, v = s.next())
                      null !== (v = p(m, i, g, v.value, l)) &&
                        (e &&
                          null !== v.alternate &&
                          m.delete(null === v.key ? g : v.key),
                        (o = a(v, o, g)),
                        null === c ? (u = v) : (c.sibling = v),
                        (c = v));
                    return (
                      e &&
                        m.forEach(function (e) {
                          return t(i, e);
                        }),
                      ih && io(i, g),
                      u
                    );
                  })(l, u, c, m);
                i2(l, c);
              }
              return ("string" == typeof c && "" !== c) || "number" == typeof c
                ? ((c = "" + c),
                  null !== u && 6 === u.tag
                    ? (r(l, u.sibling), ((u = i(u, c)).return = l))
                    : (r(l, u), ((u = s1(c, l.mode, m)).return = l)),
                  o((l = u)))
                : r(l, u);
            };
          }
          var i6 = i4(!0),
            i5 = i4(!1),
            i8 = {},
            i7 = nB(i8),
            i9 = nB(i8),
            ae = nB(i8);
          function at(e) {
            if (e === i8) throw Error(d(174));
            return e;
          }
          function ar(e, t) {
            switch ((nH(ae, t), nH(i9, e), nH(i7, i8), (e = t.nodeType))) {
              case 9:
              case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ed(null, "");
                break;
              default:
                t = ed(
                  (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                  (e = e.tagName),
                );
            }
            (nz(i7), nH(i7, t));
          }
          function an() {
            (nz(i7), nz(i9), nz(ae));
          }
          function ai(e) {
            at(ae.current);
            var t = at(i7.current),
              r = ed(t, e.type);
            t !== r && (nH(i9, e), nH(i7, r));
          }
          function aa(e) {
            i9.current === e && (nz(i7), nz(i9));
          }
          var ao = nB(0);
          function as(e) {
            for (var t = e; null !== t; ) {
              if (13 === t.tag) {
                var r = t.memoizedState;
                if (
                  null !== r &&
                  (null === (r = r.dehydrated) ||
                    "$?" === r.data ||
                    "$!" === r.data)
                )
                  return t;
              } else if (
                19 === t.tag &&
                void 0 !== t.memoizedProps.revealOrder
              ) {
                if (0 != (128 & t.flags)) return t;
              } else if (null !== t.child) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return null;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
            return null;
          }
          var al = [];
          function au() {
            for (var e = 0; e < al.length; e++)
              al[e]._workInProgressVersionPrimary = null;
            al.length = 0;
          }
          var ac = T.ReactCurrentDispatcher,
            ad = T.ReactCurrentBatchConfig,
            af = 0,
            ah = null,
            ap = null,
            am = null,
            ag = !1,
            ay = !1,
            av = 0,
            ab = 0;
          function aw() {
            throw Error(d(321));
          }
          function ak(e, t) {
            if (null === t) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
              if (!rN(e[r], t[r])) return !1;
            return !0;
          }
          function a_(e, t, r, n, i, a) {
            if (
              ((af = a),
              (ah = t),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = 0),
              (ac.current = null === e || null === e.memoizedState ? a6 : a5),
              (e = r(n, i)),
              ay)
            ) {
              a = 0;
              do {
                if (((ay = !1), (av = 0), 25 <= a)) throw Error(d(301));
                ((a += 1),
                  (am = ap = null),
                  (t.updateQueue = null),
                  (ac.current = a8),
                  (e = r(n, i)));
              } while (ay);
            }
            if (
              ((ac.current = a4),
              (t = null !== ap && null !== ap.next),
              (af = 0),
              (am = ap = ah = null),
              (ag = !1),
              t)
            )
              throw Error(d(300));
            return e;
          }
          function aE() {
            var e = 0 !== av;
            return ((av = 0), e);
          }
          function aS() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              null === am ? (ah.memoizedState = am = e) : (am = am.next = e),
              am
            );
          }
          function ax() {
            if (null === ap) {
              var e = ah.alternate;
              e = null !== e ? e.memoizedState : null;
            } else e = ap.next;
            var t = null === am ? ah.memoizedState : am.next;
            if (null !== t) ((am = t), (ap = e));
            else {
              if (null === e) throw Error(d(310));
              ((e = {
                memoizedState: (ap = e).memoizedState,
                baseState: ap.baseState,
                baseQueue: ap.baseQueue,
                queue: ap.queue,
                next: null,
              }),
                null === am ? (ah.memoizedState = am = e) : (am = am.next = e));
            }
            return am;
          }
          function aT(e, t) {
            return "function" == typeof t ? t(e) : t;
          }
          function aC(e) {
            var t = ax(),
              r = t.queue;
            if (null === r) throw Error(d(311));
            r.lastRenderedReducer = e;
            var n = ap,
              i = n.baseQueue,
              a = r.pending;
            if (null !== a) {
              if (null !== i) {
                var o = i.next;
                ((i.next = a.next), (a.next = o));
              }
              ((n.baseQueue = i = a), (r.pending = null));
            }
            if (null !== i) {
              ((a = i.next), (n = n.baseState));
              var s = (o = null),
                l = null,
                u = a;
              do {
                var c = u.lane;
                if ((af & c) === c)
                  (null !== l &&
                    (l = l.next =
                      {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                      }),
                    (n = u.hasEagerState ? u.eagerState : e(n, u.action)));
                else {
                  var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  };
                  (null === l ? ((s = l = f), (o = n)) : (l = l.next = f),
                    (ah.lanes |= c),
                    (sn |= c));
                }
                u = u.next;
              } while (null !== u && u !== a);
              (null === l ? (o = n) : (l.next = s),
                rN(n, t.memoizedState) || (ol = !0),
                (t.memoizedState = n),
                (t.baseState = o),
                (t.baseQueue = l),
                (r.lastRenderedState = n));
            }
            if (null !== (e = r.interleaved)) {
              i = e;
              do ((a = i.lane), (ah.lanes |= a), (sn |= a), (i = i.next));
              while (i !== e);
            } else null === i && (r.lanes = 0);
            return [t.memoizedState, r.dispatch];
          }
          function aA(e) {
            var t = ax(),
              r = t.queue;
            if (null === r) throw Error(d(311));
            r.lastRenderedReducer = e;
            var n = r.dispatch,
              i = r.pending,
              a = t.memoizedState;
            if (null !== i) {
              r.pending = null;
              var o = (i = i.next);
              do ((a = e(a, o.action)), (o = o.next));
              while (o !== i);
              (rN(a, t.memoizedState) || (ol = !0),
                (t.memoizedState = a),
                null === t.baseQueue && (t.baseState = a),
                (r.lastRenderedState = a));
            }
            return [a, n];
          }
          function aI() {}
          function aP(e, t) {
            var r = ah,
              n = ax(),
              i = t(),
              a = !rN(n.memoizedState, i);
            if (
              (a && ((n.memoizedState = i), (ol = !0)),
              (n = n.queue),
              az(aU.bind(null, r, n, e), [e]),
              n.getSnapshot !== t ||
                a ||
                (null !== am && 1 & am.memoizedState.tag))
            ) {
              if (
                ((r.flags |= 2048),
                aD(9, aR.bind(null, r, n, i, t), void 0, null),
                null === o5)
              )
                throw Error(d(349));
              0 != (30 & af) || aj(r, t, i);
            }
            return i;
          }
          function aj(e, t, r) {
            ((e.flags |= 16384),
              (e = { getSnapshot: t, value: r }),
              null === (t = ah.updateQueue)
                ? ((t = { lastEffect: null, stores: null }),
                  (ah.updateQueue = t),
                  (t.stores = [e]))
                : null === (r = t.stores)
                  ? (t.stores = [e])
                  : r.push(e));
          }
          function aR(e, t, r, n) {
            ((t.value = r), (t.getSnapshot = n), aO(t) && aL(e));
          }
          function aU(e, t, r) {
            return r(function () {
              aO(t) && aL(e);
            });
          }
          function aO(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
              var r = t();
              return !rN(e, r);
            } catch (e) {
              return !0;
            }
          }
          function aL(e) {
            var t = i$(e, 1);
            null !== t && sE(t, e, 1, -1);
          }
          function aN(e) {
            var t = aS();
            return (
              "function" == typeof e && (e = e()),
              (t.memoizedState = t.baseState = e),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: aT,
                lastRenderedState: e,
              }),
              (t.queue = e),
              (e = e.dispatch = a0.bind(null, ah, e)),
              [t.memoizedState, e]
            );
          }
          function aD(e, t, r, n) {
            return (
              (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
              null === (t = ah.updateQueue)
                ? ((t = { lastEffect: null, stores: null }),
                  (ah.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : null === (r = t.lastEffect)
                  ? (t.lastEffect = e.next = e)
                  : ((n = r.next),
                    (r.next = e),
                    (e.next = n),
                    (t.lastEffect = e)),
              e
            );
          }
          function a$() {
            return ax().memoizedState;
          }
          function aF(e, t, r, n) {
            var i = aS();
            ((ah.flags |= e),
              (i.memoizedState = aD(
                1 | t,
                r,
                void 0,
                void 0 === n ? null : n,
              )));
          }
          function aM(e, t, r, n) {
            var i = ax();
            n = void 0 === n ? null : n;
            var a = void 0;
            if (null !== ap) {
              var o = ap.memoizedState;
              if (((a = o.destroy), null !== n && ak(n, o.deps))) {
                i.memoizedState = aD(t, r, a, n);
                return;
              }
            }
            ((ah.flags |= e), (i.memoizedState = aD(1 | t, r, a, n)));
          }
          function aB(e, t) {
            return aF(8390656, 8, e, t);
          }
          function az(e, t) {
            return aM(2048, 8, e, t);
          }
          function aH(e, t) {
            return aM(4, 2, e, t);
          }
          function aq(e, t) {
            return aM(4, 4, e, t);
          }
          function aV(e, t) {
            return "function" == typeof t
              ? (t((e = e())),
                function () {
                  t(null);
                })
              : null != t
                ? ((e = e()),
                  (t.current = e),
                  function () {
                    t.current = null;
                  })
                : void 0;
          }
          function aG(e, t, r) {
            return (
              (r = null != r ? r.concat([e]) : null),
              aM(4, 4, aV.bind(null, t, e), r)
            );
          }
          function aW() {}
          function aK(e, t) {
            var r = ax();
            t = void 0 === t ? null : t;
            var n = r.memoizedState;
            return null !== n && null !== t && ak(t, n[1])
              ? n[0]
              : ((r.memoizedState = [e, t]), e);
          }
          function aJ(e, t) {
            var r = ax();
            t = void 0 === t ? null : t;
            var n = r.memoizedState;
            return null !== n && null !== t && ak(t, n[1])
              ? n[0]
              : ((e = e()), (r.memoizedState = [e, t]), e);
          }
          function aQ(e, t, r) {
            return 0 == (21 & af)
              ? (e.baseState && ((e.baseState = !1), (ol = !0)),
                (e.memoizedState = r))
              : (rN(r, t) ||
                  ((r = to()), (ah.lanes |= r), (sn |= r), (e.baseState = !0)),
                t);
          }
          function aY(e, t) {
            var r = tc;
            ((tc = 0 !== r && 4 > r ? r : 4), e(!0));
            var n = ad.transition;
            ad.transition = {};
            try {
              (e(!1), t());
            } finally {
              ((tc = r), (ad.transition = n));
            }
          }
          function aX() {
            return ax().memoizedState;
          }
          function aZ(e, t, r) {
            var n = s_(e);
            ((r = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
              a1(e)
                ? a2(t, r)
                : null !== (r = iD(e, t, r, n)) &&
                  (sE(r, e, n, sk()), a3(r, t, n)));
          }
          function a0(e, t, r) {
            var n = s_(e),
              i = {
                lane: n,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (a1(e)) a2(t, i);
            else {
              var a = e.alternate;
              if (
                0 === e.lanes &&
                (null === a || 0 === a.lanes) &&
                null !== (a = t.lastRenderedReducer)
              )
                try {
                  var o = t.lastRenderedState,
                    s = a(o, r);
                  if (((i.hasEagerState = !0), (i.eagerState = s), rN(s, o))) {
                    var l = t.interleaved;
                    (null === l
                      ? ((i.next = i), iN(t))
                      : ((i.next = l.next), (l.next = i)),
                      (t.interleaved = i));
                    return;
                  }
                } catch (e) {
                } finally {
                }
              null !== (r = iD(e, t, i, n)) &&
                (sE(r, e, n, (i = sk())), a3(r, t, n));
            }
          }
          function a1(e) {
            var t = e.alternate;
            return e === ah || (null !== t && t === ah);
          }
          function a2(e, t) {
            ay = ag = !0;
            var r = e.pending;
            (null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
              (e.pending = t));
          }
          function a3(e, t, r) {
            if (0 != (4194240 & r)) {
              var n = t.lanes;
              ((n &= e.pendingLanes), (r |= n), (t.lanes = r), tu(e, r));
            }
          }
          var a4 = {
              readContext: iO,
              useCallback: aw,
              useContext: aw,
              useEffect: aw,
              useImperativeHandle: aw,
              useInsertionEffect: aw,
              useLayoutEffect: aw,
              useMemo: aw,
              useReducer: aw,
              useRef: aw,
              useState: aw,
              useDebugValue: aw,
              useDeferredValue: aw,
              useTransition: aw,
              useMutableSource: aw,
              useSyncExternalStore: aw,
              useId: aw,
              unstable_isNewReconciler: !1,
            },
            a6 = {
              readContext: iO,
              useCallback: function (e, t) {
                return ((aS().memoizedState = [e, void 0 === t ? null : t]), e);
              },
              useContext: iO,
              useEffect: aB,
              useImperativeHandle: function (e, t, r) {
                return (
                  (r = null != r ? r.concat([e]) : null),
                  aF(4194308, 4, aV.bind(null, t, e), r)
                );
              },
              useLayoutEffect: function (e, t) {
                return aF(4194308, 4, e, t);
              },
              useInsertionEffect: function (e, t) {
                return aF(4, 2, e, t);
              },
              useMemo: function (e, t) {
                var r = aS();
                return (
                  (t = void 0 === t ? null : t),
                  (e = e()),
                  (r.memoizedState = [e, t]),
                  e
                );
              },
              useReducer: function (e, t, r) {
                var n = aS();
                return (
                  (t = void 0 !== r ? r(t) : t),
                  (n.memoizedState = n.baseState = t),
                  (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }),
                  (n.queue = e),
                  (e = e.dispatch = aZ.bind(null, ah, e)),
                  [n.memoizedState, e]
                );
              },
              useRef: function (e) {
                return ((e = { current: e }), (aS().memoizedState = e));
              },
              useState: aN,
              useDebugValue: aW,
              useDeferredValue: function (e) {
                return (aS().memoizedState = e);
              },
              useTransition: function () {
                var e = aN(!1),
                  t = e[0];
                return (
                  (e = aY.bind(null, e[1])),
                  (aS().memoizedState = e),
                  [t, e]
                );
              },
              useMutableSource: function () {},
              useSyncExternalStore: function (e, t, r) {
                var n = ah,
                  i = aS();
                if (ih) {
                  if (void 0 === r) throw Error(d(407));
                  r = r();
                } else {
                  if (((r = t()), null === o5)) throw Error(d(349));
                  0 != (30 & af) || aj(n, t, r);
                }
                i.memoizedState = r;
                var a = { value: r, getSnapshot: t };
                return (
                  (i.queue = a),
                  aB(aU.bind(null, n, a, e), [e]),
                  (n.flags |= 2048),
                  aD(9, aR.bind(null, n, a, r, t), void 0, null),
                  r
                );
              },
              useId: function () {
                var e = aS(),
                  t = o5.identifierPrefix;
                if (ih) {
                  var r = ia,
                    n = ii;
                  ((t =
                    ":" +
                    t +
                    "R" +
                    (r = (n & ~(1 << (32 - e7(n) - 1))).toString(32) + r)),
                    0 < (r = av++) && (t += "H" + r.toString(32)),
                    (t += ":"));
                } else t = ":" + t + "r" + (r = ab++).toString(32) + ":";
                return (e.memoizedState = t);
              },
              unstable_isNewReconciler: !1,
            },
            a5 = {
              readContext: iO,
              useCallback: aK,
              useContext: iO,
              useEffect: az,
              useImperativeHandle: aG,
              useInsertionEffect: aH,
              useLayoutEffect: aq,
              useMemo: aJ,
              useReducer: aC,
              useRef: a$,
              useState: function () {
                return aC(aT);
              },
              useDebugValue: aW,
              useDeferredValue: function (e) {
                return aQ(ax(), ap.memoizedState, e);
              },
              useTransition: function () {
                return [aC(aT)[0], ax().memoizedState];
              },
              useMutableSource: aI,
              useSyncExternalStore: aP,
              useId: aX,
              unstable_isNewReconciler: !1,
            },
            a8 = {
              readContext: iO,
              useCallback: aK,
              useContext: iO,
              useEffect: az,
              useImperativeHandle: aG,
              useInsertionEffect: aH,
              useLayoutEffect: aq,
              useMemo: aJ,
              useReducer: aA,
              useRef: a$,
              useState: function () {
                return aA(aT);
              },
              useDebugValue: aW,
              useDeferredValue: function (e) {
                var t = ax();
                return null === ap
                  ? (t.memoizedState = e)
                  : aQ(t, ap.memoizedState, e);
              },
              useTransition: function () {
                return [aA(aT)[0], ax().memoizedState];
              },
              useMutableSource: aI,
              useSyncExternalStore: aP,
              useId: aX,
              unstable_isNewReconciler: !1,
            };
          function a7(e, t) {
            try {
              var r = "",
                n = t;
              do
                ((r += (function (e) {
                  switch (e.tag) {
                    case 5:
                      return q(e.type);
                    case 16:
                      return q("Lazy");
                    case 13:
                      return q("Suspense");
                    case 19:
                      return q("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                      return (e = G(e.type, !1));
                    case 11:
                      return (e = G(e.type.render, !1));
                    case 1:
                      return (e = G(e.type, !0));
                    default:
                      return "";
                  }
                })(n)),
                  (n = n.return));
              while (n);
              var i = r;
            } catch (e) {
              i = "\nError generating stack: " + e.message + "\n" + e.stack;
            }
            return { value: e, source: t, stack: i, digest: null };
          }
          function a9(e, t, r) {
            return {
              value: e,
              source: null,
              stack: null != r ? r : null,
              digest: null != t ? t : null,
            };
          }
          function oe(e, t) {
            try {
              console.error(t.value);
            } catch (e) {
              setTimeout(function () {
                throw e;
              });
            }
          }
          var ot = "function" == typeof WeakMap ? WeakMap : Map;
          function or(e, t, r) {
            (((r = iz(-1, r)).tag = 3), (r.payload = { element: null }));
            var n = t.value;
            return (
              (r.callback = function () {
                (sd || ((sd = !0), (sf = n)), oe(e, t));
              }),
              r
            );
          }
          function on(e, t, r) {
            (r = iz(-1, r)).tag = 3;
            var n = e.type.getDerivedStateFromError;
            if ("function" == typeof n) {
              var i = t.value;
              ((r.payload = function () {
                return n(i);
              }),
                (r.callback = function () {
                  oe(e, t);
                }));
            }
            var a = e.stateNode;
            return (
              null !== a &&
                "function" == typeof a.componentDidCatch &&
                (r.callback = function () {
                  (oe(e, t),
                    "function" != typeof n &&
                      (null === sh ? (sh = new Set([this])) : sh.add(this)));
                  var r = t.stack;
                  this.componentDidCatch(t.value, {
                    componentStack: null !== r ? r : "",
                  });
                }),
              r
            );
          }
          function oi(e, t, r) {
            var n = e.pingCache;
            if (null === n) {
              n = e.pingCache = new ot();
              var i = new Set();
              n.set(t, i);
            } else void 0 === (i = n.get(t)) && ((i = new Set()), n.set(t, i));
            i.has(r) || (i.add(r), (e = sq.bind(null, e, t, r)), t.then(e, e));
          }
          function oa(e) {
            do {
              var t;
              if (
                ((t = 13 === e.tag) &&
                  (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                t)
              )
                return e;
              e = e.return;
            } while (null !== e);
            return null;
          }
          function oo(e, t, r, n, i) {
            return (
              0 == (1 & e.mode)
                ? e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (r.flags |= 131072),
                    (r.flags &= -52805),
                    1 === r.tag &&
                      (null === r.alternate
                        ? (r.tag = 17)
                        : (((t = iz(-1, 1)).tag = 2), iH(r, t, 1))),
                    (r.lanes |= 1))
                : ((e.flags |= 65536), (e.lanes = i)),
              e
            );
          }
          var os = T.ReactCurrentOwner,
            ol = !1;
          function ou(e, t, r, n) {
            t.child = null === e ? i5(t, null, r, n) : i6(t, e.child, r, n);
          }
          function oc(e, t, r, n, i) {
            r = r.render;
            var a = t.ref;
            return (iU(t, i),
            (n = a_(e, t, r, n, a, i)),
            (r = aE()),
            null === e || ol)
              ? (ih && r && il(t), (t.flags |= 1), ou(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                oI(e, t, i));
          }
          function od(e, t, r, n, i) {
            if (null === e) {
              var a = r.type;
              return "function" != typeof a ||
                sQ(a) ||
                void 0 !== a.defaultProps ||
                null !== r.compare ||
                void 0 !== r.defaultProps
                ? (((e = sX(r.type, null, n, t, t.mode, i)).ref = t.ref),
                  (e.return = t),
                  (t.child = e))
                : ((t.tag = 15), (t.type = a), of(e, t, a, n, i));
            }
            if (((a = e.child), 0 == (e.lanes & i))) {
              var o = a.memoizedProps;
              if (
                (r = null !== (r = r.compare) ? r : rD)(o, n) &&
                e.ref === t.ref
              )
                return oI(e, t, i);
            }
            return (
              (t.flags |= 1),
              ((e = sY(a, n)).ref = t.ref),
              (e.return = t),
              (t.child = e)
            );
          }
          function of(e, t, r, n, i) {
            if (null !== e) {
              var a = e.memoizedProps;
              if (rD(a, n) && e.ref === t.ref) {
                if (((ol = !1), (t.pendingProps = n = a), 0 == (e.lanes & i)))
                  return ((t.lanes = e.lanes), oI(e, t, i));
                0 != (131072 & e.flags) && (ol = !0);
              }
            }
            return om(e, t, r, n, i);
          }
          function oh(e, t, r) {
            var n = t.pendingProps,
              i = n.children,
              a = null !== e ? e.memoizedState : null;
            if ("hidden" === n.mode) {
              if (0 == (1 & t.mode))
                ((t.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null,
                }),
                  nH(se, o9),
                  (o9 |= r));
              else {
                if (0 == (1073741824 & r))
                  return (
                    (e = null !== a ? a.baseLanes | r : r),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                      baseLanes: e,
                      cachePool: null,
                      transitions: null,
                    }),
                    (t.updateQueue = null),
                    nH(se, o9),
                    (o9 |= e),
                    null
                  );
                ((t.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null,
                }),
                  (n = null !== a ? a.baseLanes : r),
                  nH(se, o9),
                  (o9 |= n));
              }
            } else
              (null !== a
                ? ((n = a.baseLanes | r), (t.memoizedState = null))
                : (n = r),
                nH(se, o9),
                (o9 |= n));
            return (ou(e, t, i, r), t.child);
          }
          function op(e, t) {
            var r = t.ref;
            ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
              ((t.flags |= 512), (t.flags |= 2097152));
          }
          function om(e, t, r, n, i) {
            var a = nJ(r) ? nW : nV.current;
            return ((a = nK(t, a)),
            iU(t, i),
            (r = a_(e, t, r, n, a, i)),
            (n = aE()),
            null === e || ol)
              ? (ih && n && il(t), (t.flags |= 1), ou(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                oI(e, t, i));
          }
          function og(e, t, r, n, i) {
            if (nJ(r)) {
              var a = !0;
              nZ(t);
            } else a = !1;
            if ((iU(t, i), null === t.stateNode))
              (oA(e, t), iX(t, r, n), i0(t, r, n, i), (n = !0));
            else if (null === e) {
              var o = t.stateNode,
                s = t.memoizedProps;
              o.props = s;
              var l = o.context,
                u = r.contextType;
              u =
                "object" == typeof u && null !== u
                  ? iO(u)
                  : nK(t, (u = nJ(r) ? nW : nV.current));
              var c = r.getDerivedStateFromProps,
                d =
                  "function" == typeof c ||
                  "function" == typeof o.getSnapshotBeforeUpdate;
              (d ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((s !== n || l !== u) && iZ(t, o, n, u)),
                (iF = !1));
              var f = t.memoizedState;
              ((o.state = f),
                iG(t, n, o, i),
                (l = t.memoizedState),
                s !== n || f !== l || nG.current || iF
                  ? ("function" == typeof c &&
                      (iJ(t, r, c, n), (l = t.memoizedState)),
                    (s = iF || iY(t, r, s, n, f, l, u))
                      ? (d ||
                          ("function" != typeof o.UNSAFE_componentWillMount &&
                            "function" != typeof o.componentWillMount) ||
                          ("function" == typeof o.componentWillMount &&
                            o.componentWillMount(),
                          "function" == typeof o.UNSAFE_componentWillMount &&
                            o.UNSAFE_componentWillMount()),
                        "function" == typeof o.componentDidMount &&
                          (t.flags |= 4194308))
                      : ("function" == typeof o.componentDidMount &&
                          (t.flags |= 4194308),
                        (t.memoizedProps = n),
                        (t.memoizedState = l)),
                    (o.props = n),
                    (o.state = l),
                    (o.context = u),
                    (n = s))
                  : ("function" == typeof o.componentDidMount &&
                      (t.flags |= 4194308),
                    (n = !1)));
            } else {
              ((o = t.stateNode),
                iB(e, t),
                (s = t.memoizedProps),
                (u = t.type === t.elementType ? s : ix(t.type, s)),
                (o.props = u),
                (d = t.pendingProps),
                (f = o.context),
                (l =
                  "object" == typeof (l = r.contextType) && null !== l
                    ? iO(l)
                    : nK(t, (l = nJ(r) ? nW : nV.current))));
              var h = r.getDerivedStateFromProps;
              ((c =
                "function" == typeof h ||
                "function" == typeof o.getSnapshotBeforeUpdate) ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((s !== d || f !== l) && iZ(t, o, n, l)),
                (iF = !1),
                (f = t.memoizedState),
                (o.state = f),
                iG(t, n, o, i));
              var p = t.memoizedState;
              s !== d || f !== p || nG.current || iF
                ? ("function" == typeof h &&
                    (iJ(t, r, h, n), (p = t.memoizedState)),
                  (u = iF || iY(t, r, u, n, f, p, l) || !1)
                    ? (c ||
                        ("function" != typeof o.UNSAFE_componentWillUpdate &&
                          "function" != typeof o.componentWillUpdate) ||
                        ("function" == typeof o.componentWillUpdate &&
                          o.componentWillUpdate(n, p, l),
                        "function" == typeof o.UNSAFE_componentWillUpdate &&
                          o.UNSAFE_componentWillUpdate(n, p, l)),
                      "function" == typeof o.componentDidUpdate &&
                        (t.flags |= 4),
                      "function" == typeof o.getSnapshotBeforeUpdate &&
                        (t.flags |= 1024))
                    : ("function" != typeof o.componentDidUpdate ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                      "function" != typeof o.getSnapshotBeforeUpdate ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                      (t.memoizedProps = n),
                      (t.memoizedState = p)),
                  (o.props = n),
                  (o.state = p),
                  (o.context = l),
                  (n = u))
                : ("function" != typeof o.componentDidUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (n = !1));
            }
            return oy(e, t, r, n, a, i);
          }
          function oy(e, t, r, n, i, a) {
            op(e, t);
            var o = 0 != (128 & t.flags);
            if (!n && !o) return (i && n0(t, r, !1), oI(e, t, a));
            ((n = t.stateNode), (os.current = t));
            var s =
              o && "function" != typeof r.getDerivedStateFromError
                ? null
                : n.render();
            return (
              (t.flags |= 1),
              null !== e && o
                ? ((t.child = i6(t, e.child, null, a)),
                  (t.child = i6(t, null, s, a)))
                : ou(e, t, s, a),
              (t.memoizedState = n.state),
              i && n0(t, r, !0),
              t.child
            );
          }
          function ov(e) {
            var t = e.stateNode;
            (t.pendingContext
              ? nY(e, t.pendingContext, t.pendingContext !== t.context)
              : t.context && nY(e, t.context, !1),
              ar(e, t.containerInfo));
          }
          function ob(e, t, r, n, i) {
            return (i_(), iE(i), (t.flags |= 256), ou(e, t, r, n), t.child);
          }
          var ow = { dehydrated: null, treeContext: null, retryLane: 0 };
          function ok(e) {
            return { baseLanes: e, cachePool: null, transitions: null };
          }
          function o_(e, t, r) {
            var n,
              i = t.pendingProps,
              a = ao.current,
              o = !1,
              s = 0 != (128 & t.flags);
            if (
              ((n = s) ||
                (n = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
              n
                ? ((o = !0), (t.flags &= -129))
                : (null === e || null !== e.memoizedState) && (a |= 1),
              nH(ao, 1 & a),
              null === e)
            )
              return (iv(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  o
                    ? ((i = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 == (1 & i) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = s0(s, i, 0, null)),
                      (e = sZ(e, i, r, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = ok(r)),
                      (t.memoizedState = ow),
                      e)
                    : oE(t, s));
            if (null !== (a = e.memoizedState) && null !== (n = a.dehydrated))
              return (function (e, t, r, n, i, a, o) {
                if (r)
                  return 256 & t.flags
                    ? ((t.flags &= -257), oS(e, t, o, (n = a9(Error(d(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((a = n.fallback),
                        (i = t.mode),
                        (n = s0(
                          { mode: "visible", children: n.children },
                          i,
                          0,
                          null,
                        )),
                        (a = sZ(a, i, o, null)),
                        (a.flags |= 2),
                        (n.return = t),
                        (a.return = t),
                        (n.sibling = a),
                        (t.child = n),
                        0 != (1 & t.mode) && i6(t, e.child, null, o),
                        (t.child.memoizedState = ok(o)),
                        (t.memoizedState = ow),
                        a);
                if (0 == (1 & t.mode)) return oS(e, t, o, null);
                if ("$!" === i.data) {
                  if ((n = i.nextSibling && i.nextSibling.dataset))
                    var s = n.dgst;
                  return (
                    (n = s),
                    oS(e, t, o, (n = a9((a = Error(d(419))), n, void 0)))
                  );
                }
                if (((s = 0 != (o & e.childLanes)), ol || s)) {
                  if (null !== (n = o5)) {
                    switch (o & -o) {
                      case 4:
                        i = 2;
                        break;
                      case 16:
                        i = 8;
                        break;
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                      case 67108864:
                        i = 32;
                        break;
                      case 536870912:
                        i = 268435456;
                        break;
                      default:
                        i = 0;
                    }
                    0 !== (i = 0 != (i & (n.suspendedLanes | o)) ? 0 : i) &&
                      i !== a.retryLane &&
                      ((a.retryLane = i), i$(e, i), sE(n, e, i, -1));
                  }
                  return (sN(), oS(e, t, o, (n = a9(Error(d(421))))));
                }
                return "$?" === i.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = sG.bind(null, e)),
                    (i._reactRetry = t),
                    null)
                  : ((e = a.treeContext),
                    (id = nT(i.nextSibling)),
                    (ic = t),
                    (ih = !0),
                    (ip = null),
                    null !== e &&
                      ((ie[it++] = ii),
                      (ie[it++] = ia),
                      (ie[it++] = ir),
                      (ii = e.id),
                      (ia = e.overflow),
                      (ir = t)),
                    (t = oE(t, n.children)),
                    (t.flags |= 4096),
                    t);
              })(e, t, s, i, n, a, r);
            if (o) {
              ((o = i.fallback), (s = t.mode), (n = (a = e.child).sibling));
              var l = { mode: "hidden", children: i.children };
              return (
                0 == (1 & s) && t.child !== a
                  ? (((i = t.child).childLanes = 0),
                    (i.pendingProps = l),
                    (t.deletions = null))
                  : ((i = sY(a, l)).subtreeFlags = 14680064 & a.subtreeFlags),
                null !== n
                  ? (o = sY(n, o))
                  : ((o = sZ(o, s, r, null)), (o.flags |= 2)),
                (o.return = t),
                (i.return = t),
                (i.sibling = o),
                (t.child = i),
                (i = o),
                (o = t.child),
                (s =
                  null === (s = e.child.memoizedState)
                    ? ok(r)
                    : {
                        baseLanes: s.baseLanes | r,
                        cachePool: null,
                        transitions: s.transitions,
                      }),
                (o.memoizedState = s),
                (o.childLanes = e.childLanes & ~r),
                (t.memoizedState = ow),
                i
              );
            }
            return (
              (e = (o = e.child).sibling),
              (i = sY(o, { mode: "visible", children: i.children })),
              0 == (1 & t.mode) && (i.lanes = r),
              (i.return = t),
              (i.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = i),
              (t.memoizedState = null),
              i
            );
          }
          function oE(e, t) {
            return (
              ((t = s0(
                { mode: "visible", children: t },
                e.mode,
                0,
                null,
              )).return = e),
              (e.child = t)
            );
          }
          function oS(e, t, r, n) {
            return (
              null !== n && iE(n),
              i6(t, e.child, null, r),
              (e = oE(t, t.pendingProps.children)),
              (e.flags |= 2),
              (t.memoizedState = null),
              e
            );
          }
          function ox(e, t, r) {
            e.lanes |= t;
            var n = e.alternate;
            (null !== n && (n.lanes |= t), iR(e.return, t, r));
          }
          function oT(e, t, r, n, i) {
            var a = e.memoizedState;
            null === a
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: n,
                  tail: r,
                  tailMode: i,
                })
              : ((a.isBackwards = t),
                (a.rendering = null),
                (a.renderingStartTime = 0),
                (a.last = n),
                (a.tail = r),
                (a.tailMode = i));
          }
          function oC(e, t, r) {
            var n = t.pendingProps,
              i = n.revealOrder,
              a = n.tail;
            if ((ou(e, t, n.children, r), 0 != (2 & (n = ao.current))))
              ((n = (1 & n) | 2), (t.flags |= 128));
            else {
              if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e; ) {
                  if (13 === e.tag) null !== e.memoizedState && ox(e, r, t);
                  else if (19 === e.tag) ox(e, r, t);
                  else if (null !== e.child) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                  }
                  if (e === t) break;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                  }
                  ((e.sibling.return = e.return), (e = e.sibling));
                }
              n &= 1;
            }
            if ((nH(ao, n), 0 == (1 & t.mode))) t.memoizedState = null;
            else
              switch (i) {
                case "forwards":
                  for (i = null, r = t.child; null !== r; )
                    (null !== (e = r.alternate) && null === as(e) && (i = r),
                      (r = r.sibling));
                  (null === (r = i)
                    ? ((i = t.child), (t.child = null))
                    : ((i = r.sibling), (r.sibling = null)),
                    oT(t, !1, i, r, a));
                  break;
                case "backwards":
                  for (r = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === as(e)) {
                      t.child = i;
                      break;
                    }
                    ((e = i.sibling), (i.sibling = r), (r = i), (i = e));
                  }
                  oT(t, !0, r, null, a);
                  break;
                case "together":
                  oT(t, !1, null, null, void 0);
                  break;
                default:
                  t.memoizedState = null;
              }
            return t.child;
          }
          function oA(e, t) {
            0 == (1 & t.mode) &&
              null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
          }
          function oI(e, t, r) {
            if (
              (null !== e && (t.dependencies = e.dependencies),
              (sn |= t.lanes),
              0 == (r & t.childLanes))
            )
              return null;
            if (null !== e && t.child !== e.child) throw Error(d(153));
            if (null !== t.child) {
              for (
                r = sY((e = t.child), e.pendingProps),
                  t.child = r,
                  r.return = t;
                null !== e.sibling;
              )
                ((e = e.sibling),
                  ((r = r.sibling = sY(e, e.pendingProps)).return = t));
              r.sibling = null;
            }
            return t.child;
          }
          function oP(e, t) {
            if (!ih)
              switch (e.tailMode) {
                case "hidden":
                  t = e.tail;
                  for (var r = null; null !== t; )
                    (null !== t.alternate && (r = t), (t = t.sibling));
                  null === r ? (e.tail = null) : (r.sibling = null);
                  break;
                case "collapsed":
                  r = e.tail;
                  for (var n = null; null !== r; )
                    (null !== r.alternate && (n = r), (r = r.sibling));
                  null === n
                    ? t || null === e.tail
                      ? (e.tail = null)
                      : (e.tail.sibling = null)
                    : (n.sibling = null);
              }
          }
          function oj(e) {
            var t = null !== e.alternate && e.alternate.child === e.child,
              r = 0,
              n = 0;
            if (t)
              for (var i = e.child; null !== i; )
                ((r |= i.lanes | i.childLanes),
                  (n |= 14680064 & i.subtreeFlags),
                  (n |= 14680064 & i.flags),
                  (i.return = e),
                  (i = i.sibling));
            else
              for (i = e.child; null !== i; )
                ((r |= i.lanes | i.childLanes),
                  (n |= i.subtreeFlags),
                  (n |= i.flags),
                  (i.return = e),
                  (i = i.sibling));
            return ((e.subtreeFlags |= n), (e.childLanes = r), t);
          }
          ((i = function (e, t) {
            for (var r = t.child; null !== r; ) {
              if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
              else if (4 !== r.tag && null !== r.child) {
                ((r.child.return = r), (r = r.child));
                continue;
              }
              if (r === t) break;
              for (; null === r.sibling; ) {
                if (null === r.return || r.return === t) return;
                r = r.return;
              }
              ((r.sibling.return = r.return), (r = r.sibling));
            }
          }),
            (a = function () {}),
            (o = function (e, t, r, n) {
              var i = e.memoizedProps;
              if (i !== n) {
                ((e = t.stateNode), at(i7.current));
                var a,
                  o = null;
                switch (r) {
                  case "input":
                    ((i = X(e, i)), (n = X(e, n)), (o = []));
                    break;
                  case "select":
                    ((i = H({}, i, { value: void 0 })),
                      (n = H({}, n, { value: void 0 })),
                      (o = []));
                    break;
                  case "textarea":
                    ((i = eo(e, i)), (n = eo(e, n)), (o = []));
                    break;
                  default:
                    "function" != typeof i.onClick &&
                      "function" == typeof n.onClick &&
                      (e.onclick = ng);
                }
                for (u in (ek(r, n), (r = null), i))
                  if (
                    !n.hasOwnProperty(u) &&
                    i.hasOwnProperty(u) &&
                    null != i[u]
                  ) {
                    if ("style" === u) {
                      var s = i[u];
                      for (a in s)
                        s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
                    } else
                      "dangerouslySetInnerHTML" !== u &&
                        "children" !== u &&
                        "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        "autoFocus" !== u &&
                        (h.hasOwnProperty(u)
                          ? o || (o = [])
                          : (o = o || []).push(u, null));
                  }
                for (u in n) {
                  var l = n[u];
                  if (
                    ((s = null != i ? i[u] : void 0),
                    n.hasOwnProperty(u) && l !== s && (null != l || null != s))
                  ) {
                    if ("style" === u) {
                      if (s) {
                        for (a in s)
                          !s.hasOwnProperty(a) ||
                            (l && l.hasOwnProperty(a)) ||
                            (r || (r = {}), (r[a] = ""));
                        for (a in l)
                          l.hasOwnProperty(a) &&
                            s[a] !== l[a] &&
                            (r || (r = {}), (r[a] = l[a]));
                      } else (r || (o || (o = []), o.push(u, r)), (r = l));
                    } else
                      "dangerouslySetInnerHTML" === u
                        ? ((l = l ? l.__html : void 0),
                          (s = s ? s.__html : void 0),
                          null != l && s !== l && (o = o || []).push(u, l))
                        : "children" === u
                          ? ("string" != typeof l && "number" != typeof l) ||
                            (o = o || []).push(u, "" + l)
                          : "suppressContentEditableWarning" !== u &&
                            "suppressHydrationWarning" !== u &&
                            (h.hasOwnProperty(u)
                              ? (null != l &&
                                  "onScroll" === u &&
                                  nr("scroll", e),
                                o || s === l || (o = []))
                              : (o = o || []).push(u, l));
                  }
                }
                r && (o = o || []).push("style", r);
                var u = o;
                (t.updateQueue = u) && (t.flags |= 4);
              }
            }),
            (s = function (e, t, r, n) {
              r !== n && (t.flags |= 4);
            }));
          var oR = !1,
            oU = !1,
            oO = "function" == typeof WeakSet ? WeakSet : Set,
            oL = null;
          function oN(e, t) {
            var r = e.ref;
            if (null !== r) {
              if ("function" == typeof r)
                try {
                  r(null);
                } catch (r) {
                  sH(e, t, r);
                }
              else r.current = null;
            }
          }
          function oD(e, t, r) {
            try {
              r();
            } catch (r) {
              sH(e, t, r);
            }
          }
          var o$ = !1;
          function oF(e, t, r) {
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var i = (n = n.next);
              do {
                if ((i.tag & e) === e) {
                  var a = i.destroy;
                  ((i.destroy = void 0), void 0 !== a && oD(t, r, a));
                }
                i = i.next;
              } while (i !== n);
            }
          }
          function oM(e, t) {
            if (
              null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
            ) {
              var r = (t = t.next);
              do {
                if ((r.tag & e) === e) {
                  var n = r.create;
                  r.destroy = n();
                }
                r = r.next;
              } while (r !== t);
            }
          }
          function oB(e) {
            var t = e.ref;
            if (null !== t) {
              var r = e.stateNode;
              (e.tag, (e = r), "function" == typeof t ? t(e) : (t.current = e));
            }
          }
          function oz(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
          }
          function oH(e) {
            e: for (;;) {
              for (; null === e.sibling; ) {
                if (null === e.return || oz(e.return)) return null;
                e = e.return;
              }
              for (
                e.sibling.return = e.return, e = e.sibling;
                5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
              ) {
                if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
                ((e.child.return = e), (e = e.child));
              }
              if (!(2 & e.flags)) return e.stateNode;
            }
          }
          var oq = null,
            oV = !1;
          function oG(e, t, r) {
            for (r = r.child; null !== r; ) (oW(e, t, r), (r = r.sibling));
          }
          function oW(e, t, r) {
            if (e8 && "function" == typeof e8.onCommitFiberUnmount)
              try {
                e8.onCommitFiberUnmount(e5, r);
              } catch (e) {}
            switch (r.tag) {
              case 5:
                oU || oN(r, t);
              case 6:
                var n = oq,
                  i = oV;
                ((oq = null),
                  oG(e, t, r),
                  (oq = n),
                  (oV = i),
                  null !== oq &&
                    (oV
                      ? ((e = oq),
                        (r = r.stateNode),
                        8 === e.nodeType
                          ? e.parentNode.removeChild(r)
                          : e.removeChild(r))
                      : oq.removeChild(r.stateNode)));
                break;
              case 18:
                null !== oq &&
                  (oV
                    ? ((e = oq),
                      (r = r.stateNode),
                      8 === e.nodeType
                        ? nx(e.parentNode, r)
                        : 1 === e.nodeType && nx(e, r),
                      tU(e))
                    : nx(oq, r.stateNode));
                break;
              case 4:
                ((n = oq),
                  (i = oV),
                  (oq = r.stateNode.containerInfo),
                  (oV = !0),
                  oG(e, t, r),
                  (oq = n),
                  (oV = i));
                break;
              case 0:
              case 11:
              case 14:
              case 15:
                if (
                  !oU &&
                  null !== (n = r.updateQueue) &&
                  null !== (n = n.lastEffect)
                ) {
                  i = n = n.next;
                  do {
                    var a = i,
                      o = a.destroy;
                    ((a = a.tag),
                      void 0 !== o &&
                        (0 != (2 & a)
                          ? oD(r, t, o)
                          : 0 != (4 & a) && oD(r, t, o)),
                      (i = i.next));
                  } while (i !== n);
                }
                oG(e, t, r);
                break;
              case 1:
                if (
                  !oU &&
                  (oN(r, t),
                  "function" == typeof (n = r.stateNode).componentWillUnmount)
                )
                  try {
                    ((n.props = r.memoizedProps),
                      (n.state = r.memoizedState),
                      n.componentWillUnmount());
                  } catch (e) {
                    sH(r, t, e);
                  }
                oG(e, t, r);
                break;
              case 21:
              default:
                oG(e, t, r);
                break;
              case 22:
                1 & r.mode
                  ? ((oU = (n = oU) || null !== r.memoizedState),
                    oG(e, t, r),
                    (oU = n))
                  : oG(e, t, r);
            }
          }
          function oK(e) {
            var t = e.updateQueue;
            if (null !== t) {
              e.updateQueue = null;
              var r = e.stateNode;
              (null === r && (r = e.stateNode = new oO()),
                t.forEach(function (t) {
                  var n = sW.bind(null, e, t);
                  r.has(t) || (r.add(t), t.then(n, n));
                }));
            }
          }
          function oJ(e, t) {
            var r = t.deletions;
            if (null !== r)
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                try {
                  var a = t,
                    o = a;
                  e: for (; null !== o; ) {
                    switch (o.tag) {
                      case 5:
                        ((oq = o.stateNode), (oV = !1));
                        break e;
                      case 3:
                      case 4:
                        ((oq = o.stateNode.containerInfo), (oV = !0));
                        break e;
                    }
                    o = o.return;
                  }
                  if (null === oq) throw Error(d(160));
                  (oW(e, a, i), (oq = null), (oV = !1));
                  var s = i.alternate;
                  (null !== s && (s.return = null), (i.return = null));
                } catch (e) {
                  sH(i, t, e);
                }
              }
            if (12854 & t.subtreeFlags)
              for (t = t.child; null !== t; ) (oQ(t, e), (t = t.sibling));
          }
          function oQ(e, t) {
            var r = e.alternate,
              n = e.flags;
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                if ((oJ(t, e), oY(e), 4 & n)) {
                  try {
                    (oF(3, e, e.return), oM(3, e));
                  } catch (t) {
                    sH(e, e.return, t);
                  }
                  try {
                    oF(5, e, e.return);
                  } catch (t) {
                    sH(e, e.return, t);
                  }
                }
                break;
              case 1:
                (oJ(t, e), oY(e), 512 & n && null !== r && oN(r, r.return));
                break;
              case 5:
                if (
                  (oJ(t, e),
                  oY(e),
                  512 & n && null !== r && oN(r, r.return),
                  32 & e.flags)
                ) {
                  var i = e.stateNode;
                  try {
                    em(i, "");
                  } catch (t) {
                    sH(e, e.return, t);
                  }
                }
                if (4 & n && null != (i = e.stateNode)) {
                  var a = e.memoizedProps,
                    o = null !== r ? r.memoizedProps : a,
                    s = e.type,
                    l = e.updateQueue;
                  if (((e.updateQueue = null), null !== l))
                    try {
                      ("input" === s &&
                        "radio" === a.type &&
                        null != a.name &&
                        ee(i, a),
                        e_(s, o));
                      var u = e_(s, a);
                      for (o = 0; o < l.length; o += 2) {
                        var c = l[o],
                          f = l[o + 1];
                        "style" === c
                          ? eb(i, f)
                          : "dangerouslySetInnerHTML" === c
                            ? ep(i, f)
                            : "children" === c
                              ? em(i, f)
                              : x(i, c, f, u);
                      }
                      switch (s) {
                        case "input":
                          et(i, a);
                          break;
                        case "textarea":
                          el(i, a);
                          break;
                        case "select":
                          var h = i._wrapperState.wasMultiple;
                          i._wrapperState.wasMultiple = !!a.multiple;
                          var p = a.value;
                          null != p
                            ? ea(i, !!a.multiple, p, !1)
                            : !!a.multiple !== h &&
                              (null != a.defaultValue
                                ? ea(i, !!a.multiple, a.defaultValue, !0)
                                : ea(
                                    i,
                                    !!a.multiple,
                                    a.multiple ? [] : "",
                                    !1,
                                  ));
                      }
                      i[nP] = a;
                    } catch (t) {
                      sH(e, e.return, t);
                    }
                }
                break;
              case 6:
                if ((oJ(t, e), oY(e), 4 & n)) {
                  if (null === e.stateNode) throw Error(d(162));
                  ((i = e.stateNode), (a = e.memoizedProps));
                  try {
                    i.nodeValue = a;
                  } catch (t) {
                    sH(e, e.return, t);
                  }
                }
                break;
              case 3:
                if (
                  (oJ(t, e),
                  oY(e),
                  4 & n && null !== r && r.memoizedState.isDehydrated)
                )
                  try {
                    tU(t.containerInfo);
                  } catch (t) {
                    sH(e, e.return, t);
                  }
                break;
              case 4:
              default:
                (oJ(t, e), oY(e));
                break;
              case 13:
                (oJ(t, e),
                  oY(e),
                  8192 & (i = e.child).flags &&
                    ((a = null !== i.memoizedState),
                    (i.stateNode.isHidden = a),
                    a &&
                      (null === i.alternate ||
                        null === i.alternate.memoizedState) &&
                      (sl = eZ())),
                  4 & n && oK(e));
                break;
              case 22:
                if (
                  ((c = null !== r && null !== r.memoizedState),
                  1 & e.mode
                    ? ((oU = (u = oU) || c), oJ(t, e), (oU = u))
                    : oJ(t, e),
                  oY(e),
                  8192 & n)
                ) {
                  if (
                    ((u = null !== e.memoizedState),
                    (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
                  )
                    for (oL = e, c = e.child; null !== c; ) {
                      for (f = oL = c; null !== oL; ) {
                        switch (((p = (h = oL).child), h.tag)) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            oF(4, h, h.return);
                            break;
                          case 1:
                            oN(h, h.return);
                            var m = h.stateNode;
                            if ("function" == typeof m.componentWillUnmount) {
                              ((n = h), (r = h.return));
                              try {
                                ((t = n),
                                  (m.props = t.memoizedProps),
                                  (m.state = t.memoizedState),
                                  m.componentWillUnmount());
                              } catch (e) {
                                sH(n, r, e);
                              }
                            }
                            break;
                          case 5:
                            oN(h, h.return);
                            break;
                          case 22:
                            if (null !== h.memoizedState) {
                              oZ(f);
                              continue;
                            }
                        }
                        null !== p ? ((p.return = h), (oL = p)) : oZ(f);
                      }
                      c = c.sibling;
                    }
                  e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                      if (null === c) {
                        c = f;
                        try {
                          ((i = f.stateNode),
                            u
                              ? ((a = i.style),
                                "function" == typeof a.setProperty
                                  ? a.setProperty(
                                      "display",
                                      "none",
                                      "important",
                                    )
                                  : (a.display = "none"))
                              : ((s = f.stateNode),
                                (o =
                                  null != (l = f.memoizedProps.style) &&
                                  l.hasOwnProperty("display")
                                    ? l.display
                                    : null),
                                (s.style.display = ev("display", o))));
                        } catch (t) {
                          sH(e, e.return, t);
                        }
                      }
                    } else if (6 === f.tag) {
                      if (null === c)
                        try {
                          f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                        } catch (t) {
                          sH(e, e.return, t);
                        }
                    } else if (
                      ((22 !== f.tag && 23 !== f.tag) ||
                        null === f.memoizedState ||
                        f === e) &&
                      null !== f.child
                    ) {
                      ((f.child.return = f), (f = f.child));
                      continue;
                    }
                    if (f === e) break;
                    for (; null === f.sibling; ) {
                      if (null === f.return || f.return === e) break e;
                      (c === f && (c = null), (f = f.return));
                    }
                    (c === f && (c = null),
                      (f.sibling.return = f.return),
                      (f = f.sibling));
                  }
                }
                break;
              case 19:
                (oJ(t, e), oY(e), 4 & n && oK(e));
              case 21:
            }
          }
          function oY(e) {
            var t = e.flags;
            if (2 & t) {
              try {
                e: {
                  for (var r = e.return; null !== r; ) {
                    if (oz(r)) {
                      var n = r;
                      break e;
                    }
                    r = r.return;
                  }
                  throw Error(d(160));
                }
                switch (n.tag) {
                  case 5:
                    var i = n.stateNode;
                    32 & n.flags && (em(i, ""), (n.flags &= -33));
                    var a = oH(e);
                    !(function e(t, r, n) {
                      var i = t.tag;
                      if (5 === i || 6 === i)
                        ((t = t.stateNode),
                          r ? n.insertBefore(t, r) : n.appendChild(t));
                      else if (4 !== i && null !== (t = t.child))
                        for (e(t, r, n), t = t.sibling; null !== t; )
                          (e(t, r, n), (t = t.sibling));
                    })(e, a, i);
                    break;
                  case 3:
                  case 4:
                    var o = n.stateNode.containerInfo,
                      s = oH(e);
                    !(function e(t, r, n) {
                      var i = t.tag;
                      if (5 === i || 6 === i)
                        ((t = t.stateNode),
                          r
                            ? 8 === n.nodeType
                              ? n.parentNode.insertBefore(t, r)
                              : n.insertBefore(t, r)
                            : (8 === n.nodeType
                                ? (r = n.parentNode).insertBefore(t, n)
                                : (r = n).appendChild(t),
                              null != (n = n._reactRootContainer) ||
                                null !== r.onclick ||
                                (r.onclick = ng)));
                      else if (4 !== i && null !== (t = t.child))
                        for (e(t, r, n), t = t.sibling; null !== t; )
                          (e(t, r, n), (t = t.sibling));
                    })(e, s, o);
                    break;
                  default:
                    throw Error(d(161));
                }
              } catch (t) {
                sH(e, e.return, t);
              }
              e.flags &= -3;
            }
            4096 & t && (e.flags &= -4097);
          }
          function oX(e) {
            for (; null !== oL; ) {
              var t = oL;
              if (0 != (8772 & t.flags)) {
                var r = t.alternate;
                try {
                  if (0 != (8772 & t.flags))
                    switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oU || oM(5, t);
                        break;
                      case 1:
                        var n = t.stateNode;
                        if (4 & t.flags && !oU) {
                          if (null === r) n.componentDidMount();
                          else {
                            var i =
                              t.elementType === t.type
                                ? r.memoizedProps
                                : ix(t.type, r.memoizedProps);
                            n.componentDidUpdate(
                              i,
                              r.memoizedState,
                              n.__reactInternalSnapshotBeforeUpdate,
                            );
                          }
                        }
                        var a = t.updateQueue;
                        null !== a && iW(t, a, n);
                        break;
                      case 3:
                        var o = t.updateQueue;
                        if (null !== o) {
                          if (((r = null), null !== t.child))
                            switch (t.child.tag) {
                              case 5:
                              case 1:
                                r = t.child.stateNode;
                            }
                          iW(t, o, r);
                        }
                        break;
                      case 5:
                        var s = t.stateNode;
                        if (null === r && 4 & t.flags) {
                          r = s;
                          var l = t.memoizedProps;
                          switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                              l.autoFocus && r.focus();
                              break;
                            case "img":
                              l.src && (r.src = l.src);
                          }
                        }
                        break;
                      case 6:
                      case 4:
                      case 12:
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                      case 25:
                        break;
                      case 13:
                        if (null === t.memoizedState) {
                          var u = t.alternate;
                          if (null !== u) {
                            var c = u.memoizedState;
                            if (null !== c) {
                              var f = c.dehydrated;
                              null !== f && tU(f);
                            }
                          }
                        }
                        break;
                      default:
                        throw Error(d(163));
                    }
                  oU || (512 & t.flags && oB(t));
                } catch (e) {
                  sH(t, t.return, e);
                }
              }
              if (t === e) {
                oL = null;
                break;
              }
              if (null !== (r = t.sibling)) {
                ((r.return = t.return), (oL = r));
                break;
              }
              oL = t.return;
            }
          }
          function oZ(e) {
            for (; null !== oL; ) {
              var t = oL;
              if (t === e) {
                oL = null;
                break;
              }
              var r = t.sibling;
              if (null !== r) {
                ((r.return = t.return), (oL = r));
                break;
              }
              oL = t.return;
            }
          }
          function o0(e) {
            for (; null !== oL; ) {
              var t = oL;
              try {
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    var r = t.return;
                    try {
                      oM(4, t);
                    } catch (e) {
                      sH(t, r, e);
                    }
                    break;
                  case 1:
                    var n = t.stateNode;
                    if ("function" == typeof n.componentDidMount) {
                      var i = t.return;
                      try {
                        n.componentDidMount();
                      } catch (e) {
                        sH(t, i, e);
                      }
                    }
                    var a = t.return;
                    try {
                      oB(t);
                    } catch (e) {
                      sH(t, a, e);
                    }
                    break;
                  case 5:
                    var o = t.return;
                    try {
                      oB(t);
                    } catch (e) {
                      sH(t, o, e);
                    }
                }
              } catch (e) {
                sH(t, t.return, e);
              }
              if (t === e) {
                oL = null;
                break;
              }
              var s = t.sibling;
              if (null !== s) {
                ((s.return = t.return), (oL = s));
                break;
              }
              oL = t.return;
            }
          }
          var o1 = Math.ceil,
            o2 = T.ReactCurrentDispatcher,
            o3 = T.ReactCurrentOwner,
            o4 = T.ReactCurrentBatchConfig,
            o6 = 0,
            o5 = null,
            o8 = null,
            o7 = 0,
            o9 = 0,
            se = nB(0),
            st = 0,
            sr = null,
            sn = 0,
            si = 0,
            sa = 0,
            so = null,
            ss = null,
            sl = 0,
            su = 1 / 0,
            sc = null,
            sd = !1,
            sf = null,
            sh = null,
            sp = !1,
            sm = null,
            sg = 0,
            sy = 0,
            sv = null,
            sb = -1,
            sw = 0;
          function sk() {
            return 0 != (6 & o6) ? eZ() : -1 !== sb ? sb : (sb = eZ());
          }
          function s_(e) {
            return 0 == (1 & e.mode)
              ? 1
              : 0 != (2 & o6) && 0 !== o7
                ? o7 & -o7
                : null !== iS.transition
                  ? (0 === sw && (sw = to()), sw)
                  : 0 !== (e = tc)
                    ? e
                    : (e = void 0 === (e = window.event) ? 16 : tB(e.type));
          }
          function sE(e, t, r, n) {
            if (50 < sy) throw ((sy = 0), (sv = null), Error(d(185)));
            (tl(e, r, n),
              (0 == (2 & o6) || e !== o5) &&
                (e === o5 &&
                  (0 == (2 & o6) && (si |= r), 4 === st && sA(e, o7)),
                sS(e, n),
                1 === r &&
                  0 === o6 &&
                  0 == (1 & t.mode) &&
                  ((su = eZ() + 500), n2 && n6())));
          }
          function sS(e, t) {
            var r,
              n,
              i,
              a = e.callbackNode;
            !(function (e, t) {
              for (
                var r = e.suspendedLanes,
                  n = e.pingedLanes,
                  i = e.expirationTimes,
                  a = e.pendingLanes;
                0 < a;
              ) {
                var o = 31 - e7(a),
                  s = 1 << o,
                  l = i[o];
                (-1 === l
                  ? (0 == (s & r) || 0 != (s & n)) &&
                    (i[o] = (function (e, t) {
                      switch (e) {
                        case 1:
                        case 2:
                        case 4:
                          return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                          return t + 5e3;
                        default:
                          return -1;
                      }
                    })(s, t))
                  : l <= t && (e.expiredLanes |= s),
                  (a &= ~s));
              }
            })(e, t);
            var o = ti(e, e === o5 ? o7 : 0);
            if (0 === o)
              (null !== a && eQ(a),
                (e.callbackNode = null),
                (e.callbackPriority = 0));
            else if (((t = o & -o), e.callbackPriority !== t)) {
              if ((null != a && eQ(a), 1 === t))
                (0 === e.tag
                  ? ((i = sI.bind(null, e)), (n2 = !0), n4(i))
                  : n4(sI.bind(null, e)),
                  nE(function () {
                    0 == (6 & o6) && n6();
                  }),
                  (a = null));
              else {
                switch (td(o)) {
                  case 1:
                    a = e1;
                    break;
                  case 4:
                    a = e2;
                    break;
                  case 16:
                  default:
                    a = e3;
                    break;
                  case 536870912:
                    a = e6;
                }
                a = eJ(a, sx.bind(null, e));
              }
              ((e.callbackPriority = t), (e.callbackNode = a));
            }
          }
          function sx(e, t) {
            if (((sb = -1), (sw = 0), 0 != (6 & o6))) throw Error(d(327));
            var r = e.callbackNode;
            if (sB() && e.callbackNode !== r) return null;
            var n = ti(e, e === o5 ? o7 : 0);
            if (0 === n) return null;
            if (0 != (30 & n) || 0 != (n & e.expiredLanes) || t) t = sD(e, n);
            else {
              t = n;
              var i = o6;
              o6 |= 2;
              var a = sL();
              for (
                (o5 !== e || o7 !== t) &&
                ((sc = null), (su = eZ() + 500), sU(e, t));
                ;
              )
                try {
                  (function () {
                    for (; null !== o8 && !eY(); ) s$(o8);
                  })();
                  break;
                } catch (t) {
                  sO(e, t);
                }
              (iP(),
                (o2.current = a),
                (o6 = i),
                null !== o8 ? (t = 0) : ((o5 = null), (o7 = 0), (t = st)));
            }
            if (0 !== t) {
              if (
                (2 === t && 0 !== (i = ta(e)) && ((n = i), (t = sT(e, i))),
                1 === t)
              )
                throw ((r = sr), sU(e, 0), sA(e, n), sS(e, eZ()), r);
              if (6 === t) sA(e, n);
              else {
                if (
                  ((i = e.current.alternate),
                  0 == (30 & n) &&
                    !(function (e) {
                      for (var t = e; ; ) {
                        if (16384 & t.flags) {
                          var r = t.updateQueue;
                          if (null !== r && null !== (r = r.stores))
                            for (var n = 0; n < r.length; n++) {
                              var i = r[n],
                                a = i.getSnapshot;
                              i = i.value;
                              try {
                                if (!rN(a(), i)) return !1;
                              } catch (e) {
                                return !1;
                              }
                            }
                        }
                        if (
                          ((r = t.child), 16384 & t.subtreeFlags && null !== r)
                        )
                          ((r.return = t), (t = r));
                        else {
                          if (t === e) break;
                          for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) return !0;
                            t = t.return;
                          }
                          ((t.sibling.return = t.return), (t = t.sibling));
                        }
                      }
                      return !0;
                    })(i) &&
                    (2 === (t = sD(e, n)) &&
                      0 !== (a = ta(e)) &&
                      ((n = a), (t = sT(e, a))),
                    1 === t))
                )
                  throw ((r = sr), sU(e, 0), sA(e, n), sS(e, eZ()), r);
                switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
                  case 0:
                  case 1:
                    throw Error(d(345));
                  case 2:
                  case 5:
                    sM(e, ss, sc);
                    break;
                  case 3:
                    if (
                      (sA(e, n),
                      (130023424 & n) === n && 10 < (t = sl + 500 - eZ()))
                    ) {
                      if (0 !== ti(e, 0)) break;
                      if (((i = e.suspendedLanes) & n) !== n) {
                        (sk(), (e.pingedLanes |= e.suspendedLanes & i));
                        break;
                      }
                      e.timeoutHandle = nw(sM.bind(null, e, ss, sc), t);
                      break;
                    }
                    sM(e, ss, sc);
                    break;
                  case 4:
                    if ((sA(e, n), (4194240 & n) === n)) break;
                    for (i = -1, t = e.eventTimes; 0 < n; ) {
                      var o = 31 - e7(n);
                      ((a = 1 << o), (o = t[o]) > i && (i = o), (n &= ~a));
                    }
                    if (
                      ((n = i),
                      10 <
                        (n =
                          (120 > (n = eZ() - n)
                            ? 120
                            : 480 > n
                              ? 480
                              : 1080 > n
                                ? 1080
                                : 1920 > n
                                  ? 1920
                                  : 3e3 > n
                                    ? 3e3
                                    : 4320 > n
                                      ? 4320
                                      : 1960 * o1(n / 1960)) - n))
                    ) {
                      e.timeoutHandle = nw(sM.bind(null, e, ss, sc), n);
                      break;
                    }
                    sM(e, ss, sc);
                    break;
                  default:
                    throw Error(d(329));
                }
              }
            }
            return (
              sS(e, eZ()),
              e.callbackNode === r ? sx.bind(null, e) : null
            );
          }
          function sT(e, t) {
            var r = so;
            return (
              e.current.memoizedState.isDehydrated && (sU(e, t).flags |= 256),
              2 !== (e = sD(e, t)) && ((t = ss), (ss = r), null !== t && sC(t)),
              e
            );
          }
          function sC(e) {
            null === ss ? (ss = e) : ss.push.apply(ss, e);
          }
          function sA(e, t) {
            for (
              t &= ~sa,
                t &= ~si,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
              0 < t;
            ) {
              var r = 31 - e7(t),
                n = 1 << r;
              ((e[r] = -1), (t &= ~n));
            }
          }
          function sI(e) {
            if (0 != (6 & o6)) throw Error(d(327));
            sB();
            var t = ti(e, 0);
            if (0 == (1 & t)) return (sS(e, eZ()), null);
            var r = sD(e, t);
            if (0 !== e.tag && 2 === r) {
              var n = ta(e);
              0 !== n && ((t = n), (r = sT(e, n)));
            }
            if (1 === r) throw ((r = sr), sU(e, 0), sA(e, t), sS(e, eZ()), r);
            if (6 === r) throw Error(d(345));
            return (
              (e.finishedWork = e.current.alternate),
              (e.finishedLanes = t),
              sM(e, ss, sc),
              sS(e, eZ()),
              null
            );
          }
          function sP(e, t) {
            var r = o6;
            o6 |= 1;
            try {
              return e(t);
            } finally {
              0 === (o6 = r) && ((su = eZ() + 500), n2 && n6());
            }
          }
          function sj(e) {
            null !== sm && 0 === sm.tag && 0 == (6 & o6) && sB();
            var t = o6;
            o6 |= 1;
            var r = o4.transition,
              n = tc;
            try {
              if (((o4.transition = null), (tc = 1), e)) return e();
            } finally {
              ((tc = n), (o4.transition = r), 0 == (6 & (o6 = t)) && n6());
            }
          }
          function sR() {
            ((o9 = se.current), nz(se));
          }
          function sU(e, t) {
            ((e.finishedWork = null), (e.finishedLanes = 0));
            var r = e.timeoutHandle;
            if ((-1 !== r && ((e.timeoutHandle = -1), nk(r)), null !== o8))
              for (r = o8.return; null !== r; ) {
                var n = r;
                switch ((iu(n), n.tag)) {
                  case 1:
                    null != (n = n.type.childContextTypes) && nQ();
                    break;
                  case 3:
                    (an(), nz(nG), nz(nV), au());
                    break;
                  case 5:
                    aa(n);
                    break;
                  case 4:
                    an();
                    break;
                  case 13:
                  case 19:
                    nz(ao);
                    break;
                  case 10:
                    ij(n.type._context);
                    break;
                  case 22:
                  case 23:
                    sR();
                }
                r = r.return;
              }
            if (
              ((o5 = e),
              (o8 = e = sY(e.current, null)),
              (o7 = o9 = t),
              (st = 0),
              (sr = null),
              (sa = si = sn = 0),
              (ss = so = null),
              null !== iL)
            ) {
              for (t = 0; t < iL.length; t++)
                if (null !== (n = (r = iL[t]).interleaved)) {
                  r.interleaved = null;
                  var i = n.next,
                    a = r.pending;
                  if (null !== a) {
                    var o = a.next;
                    ((a.next = i), (n.next = o));
                  }
                  r.pending = n;
                }
              iL = null;
            }
            return e;
          }
          function sO(e, t) {
            for (;;) {
              var r = o8;
              try {
                if ((iP(), (ac.current = a4), ag)) {
                  for (var n = ah.memoizedState; null !== n; ) {
                    var i = n.queue;
                    (null !== i && (i.pending = null), (n = n.next));
                  }
                  ag = !1;
                }
                if (
                  ((af = 0),
                  (am = ap = ah = null),
                  (ay = !1),
                  (av = 0),
                  (o3.current = null),
                  null === r || null === r.return)
                ) {
                  ((st = 1), (sr = t), (o8 = null));
                  break;
                }
                e: {
                  var a = e,
                    o = r.return,
                    s = r,
                    l = t;
                  if (
                    ((t = o7),
                    (s.flags |= 32768),
                    null !== l &&
                      "object" == typeof l &&
                      "function" == typeof l.then)
                  ) {
                    var u = l,
                      c = s,
                      f = c.tag;
                    if (
                      0 == (1 & c.mode) &&
                      (0 === f || 11 === f || 15 === f)
                    ) {
                      var h = c.alternate;
                      h
                        ? ((c.updateQueue = h.updateQueue),
                          (c.memoizedState = h.memoizedState),
                          (c.lanes = h.lanes))
                        : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = oa(o);
                    if (null !== p) {
                      ((p.flags &= -257),
                        oo(p, o, s, a, t),
                        1 & p.mode && oi(a, u, t),
                        (t = p),
                        (l = u));
                      var m = t.updateQueue;
                      if (null === m) {
                        var g = new Set();
                        (g.add(l), (t.updateQueue = g));
                      } else m.add(l);
                      break e;
                    }
                    if (0 == (1 & t)) {
                      (oi(a, u, t), sN());
                      break e;
                    }
                    l = Error(d(426));
                  } else if (ih && 1 & s.mode) {
                    var y = oa(o);
                    if (null !== y) {
                      (0 == (65536 & y.flags) && (y.flags |= 256),
                        oo(y, o, s, a, t),
                        iE(a7(l, s)));
                      break e;
                    }
                  }
                  ((a = l = a7(l, s)),
                    4 !== st && (st = 2),
                    null === so ? (so = [a]) : so.push(a),
                    (a = o));
                  do {
                    switch (a.tag) {
                      case 3:
                        ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                        var v = or(a, l, t);
                        iV(a, v);
                        break e;
                      case 1:
                        s = l;
                        var b = a.type,
                          w = a.stateNode;
                        if (
                          0 == (128 & a.flags) &&
                          ("function" == typeof b.getDerivedStateFromError ||
                            (null !== w &&
                              "function" == typeof w.componentDidCatch &&
                              (null === sh || !sh.has(w))))
                        ) {
                          ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                          var k = on(a, s, t);
                          iV(a, k);
                          break e;
                        }
                    }
                    a = a.return;
                  } while (null !== a);
                }
                sF(r);
              } catch (e) {
                ((t = e), o8 === r && null !== r && (o8 = r = r.return));
                continue;
              }
              break;
            }
          }
          function sL() {
            var e = o2.current;
            return ((o2.current = a4), null === e ? a4 : e);
          }
          function sN() {
            ((0 === st || 3 === st || 2 === st) && (st = 4),
              null === o5 ||
                (0 == (268435455 & sn) && 0 == (268435455 & si)) ||
                sA(o5, o7));
          }
          function sD(e, t) {
            var r = o6;
            o6 |= 2;
            var n = sL();
            for ((o5 !== e || o7 !== t) && ((sc = null), sU(e, t)); ; )
              try {
                (function () {
                  for (; null !== o8; ) s$(o8);
                })();
                break;
              } catch (t) {
                sO(e, t);
              }
            if ((iP(), (o6 = r), (o2.current = n), null !== o8))
              throw Error(d(261));
            return ((o5 = null), (o7 = 0), st);
          }
          function s$(e) {
            var t = l(e.alternate, e, o9);
            ((e.memoizedProps = e.pendingProps),
              null === t ? sF(e) : (o8 = t),
              (o3.current = null));
          }
          function sF(e) {
            var t = e;
            do {
              var r = t.alternate;
              if (((e = t.return), 0 == (32768 & t.flags))) {
                if (
                  null !==
                  (r = (function (e, t, r) {
                    var n = t.pendingProps;
                    switch ((iu(t), t.tag)) {
                      case 2:
                      case 16:
                      case 15:
                      case 0:
                      case 11:
                      case 7:
                      case 8:
                      case 12:
                      case 9:
                      case 14:
                        return (oj(t), null);
                      case 1:
                      case 17:
                        return (nJ(t.type) && nQ(), oj(t), null);
                      case 3:
                        return (
                          (n = t.stateNode),
                          an(),
                          nz(nG),
                          nz(nV),
                          au(),
                          n.pendingContext &&
                            ((n.context = n.pendingContext),
                            (n.pendingContext = null)),
                          (null === e || null === e.child) &&
                            (iw(t)
                              ? (t.flags |= 4)
                              : null === e ||
                                (e.memoizedState.isDehydrated &&
                                  0 == (256 & t.flags)) ||
                                ((t.flags |= 1024),
                                null !== ip && (sC(ip), (ip = null)))),
                          a(e, t),
                          oj(t),
                          null
                        );
                      case 5:
                        aa(t);
                        var l = at(ae.current);
                        if (((r = t.type), null !== e && null != t.stateNode))
                          (o(e, t, r, n, l),
                            e.ref !== t.ref &&
                              ((t.flags |= 512), (t.flags |= 2097152)));
                        else {
                          if (!n) {
                            if (null === t.stateNode) throw Error(d(166));
                            return (oj(t), null);
                          }
                          if (((e = at(i7.current)), iw(t))) {
                            ((n = t.stateNode), (r = t.type));
                            var u = t.memoizedProps;
                            switch (
                              ((n[nI] = t),
                              (n[nP] = u),
                              (e = 0 != (1 & t.mode)),
                              r)
                            ) {
                              case "dialog":
                                (nr("cancel", n), nr("close", n));
                                break;
                              case "iframe":
                              case "object":
                              case "embed":
                                nr("load", n);
                                break;
                              case "video":
                              case "audio":
                                for (l = 0; l < r7.length; l++) nr(r7[l], n);
                                break;
                              case "source":
                                nr("error", n);
                                break;
                              case "img":
                              case "image":
                              case "link":
                                (nr("error", n), nr("load", n));
                                break;
                              case "details":
                                nr("toggle", n);
                                break;
                              case "input":
                                (Z(n, u), nr("invalid", n));
                                break;
                              case "select":
                                ((n._wrapperState = {
                                  wasMultiple: !!u.multiple,
                                }),
                                  nr("invalid", n));
                                break;
                              case "textarea":
                                (es(n, u), nr("invalid", n));
                            }
                            for (var c in (ek(r, u), (l = null), u))
                              if (u.hasOwnProperty(c)) {
                                var f = u[c];
                                "children" === c
                                  ? "string" == typeof f
                                    ? n.textContent !== f &&
                                      (!0 !== u.suppressHydrationWarning &&
                                        nm(n.textContent, f, e),
                                      (l = ["children", f]))
                                    : "number" == typeof f &&
                                      n.textContent !== "" + f &&
                                      (!0 !== u.suppressHydrationWarning &&
                                        nm(n.textContent, f, e),
                                      (l = ["children", "" + f]))
                                  : h.hasOwnProperty(c) &&
                                    null != f &&
                                    "onScroll" === c &&
                                    nr("scroll", n);
                              }
                            switch (r) {
                              case "input":
                                (J(n), er(n, u, !0));
                                break;
                              case "textarea":
                                (J(n), eu(n));
                                break;
                              case "select":
                              case "option":
                                break;
                              default:
                                "function" == typeof u.onClick &&
                                  (n.onclick = ng);
                            }
                            ((n = l),
                              (t.updateQueue = n),
                              null !== n && (t.flags |= 4));
                          } else {
                            ((c = 9 === l.nodeType ? l : l.ownerDocument),
                              "http://www.w3.org/1999/xhtml" === e &&
                                (e = ec(r)),
                              "http://www.w3.org/1999/xhtml" === e
                                ? "script" === r
                                  ? (((e = c.createElement("div")).innerHTML =
                                      "<script></script>"),
                                    (e = e.removeChild(e.firstChild)))
                                  : "string" == typeof n.is
                                    ? (e = c.createElement(r, { is: n.is }))
                                    : ((e = c.createElement(r)),
                                      "select" === r &&
                                        ((c = e),
                                        n.multiple
                                          ? (c.multiple = !0)
                                          : n.size && (c.size = n.size)))
                                : (e = c.createElementNS(e, r)),
                              (e[nI] = t),
                              (e[nP] = n),
                              i(e, t, !1, !1),
                              (t.stateNode = e));
                            e: {
                              switch (((c = e_(r, n)), r)) {
                                case "dialog":
                                  (nr("cancel", e), nr("close", e), (l = n));
                                  break;
                                case "iframe":
                                case "object":
                                case "embed":
                                  (nr("load", e), (l = n));
                                  break;
                                case "video":
                                case "audio":
                                  for (l = 0; l < r7.length; l++) nr(r7[l], e);
                                  l = n;
                                  break;
                                case "source":
                                  (nr("error", e), (l = n));
                                  break;
                                case "img":
                                case "image":
                                case "link":
                                  (nr("error", e), nr("load", e), (l = n));
                                  break;
                                case "details":
                                  (nr("toggle", e), (l = n));
                                  break;
                                case "input":
                                  (Z(e, n), (l = X(e, n)), nr("invalid", e));
                                  break;
                                case "option":
                                default:
                                  l = n;
                                  break;
                                case "select":
                                  ((e._wrapperState = {
                                    wasMultiple: !!n.multiple,
                                  }),
                                    (l = H({}, n, { value: void 0 })),
                                    nr("invalid", e));
                                  break;
                                case "textarea":
                                  (es(e, n), (l = eo(e, n)), nr("invalid", e));
                              }
                              for (u in (ek(r, l), (f = l)))
                                if (f.hasOwnProperty(u)) {
                                  var p = f[u];
                                  "style" === u
                                    ? eb(e, p)
                                    : "dangerouslySetInnerHTML" === u
                                      ? null != (p = p ? p.__html : void 0) &&
                                        ep(e, p)
                                      : "children" === u
                                        ? "string" == typeof p
                                          ? ("textarea" !== r || "" !== p) &&
                                            em(e, p)
                                          : "number" == typeof p &&
                                            em(e, "" + p)
                                        : "suppressContentEditableWarning" !==
                                            u &&
                                          "suppressHydrationWarning" !== u &&
                                          "autoFocus" !== u &&
                                          (h.hasOwnProperty(u)
                                            ? null != p &&
                                              "onScroll" === u &&
                                              nr("scroll", e)
                                            : null != p && x(e, u, p, c));
                                }
                              switch (r) {
                                case "input":
                                  (J(e), er(e, n, !1));
                                  break;
                                case "textarea":
                                  (J(e), eu(e));
                                  break;
                                case "option":
                                  null != n.value &&
                                    e.setAttribute("value", "" + W(n.value));
                                  break;
                                case "select":
                                  ((e.multiple = !!n.multiple),
                                    null != (u = n.value)
                                      ? ea(e, !!n.multiple, u, !1)
                                      : null != n.defaultValue &&
                                        ea(
                                          e,
                                          !!n.multiple,
                                          n.defaultValue,
                                          !0,
                                        ));
                                  break;
                                default:
                                  "function" == typeof l.onClick &&
                                    (e.onclick = ng);
                              }
                              switch (r) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                  n = !!n.autoFocus;
                                  break e;
                                case "img":
                                  n = !0;
                                  break e;
                                default:
                                  n = !1;
                              }
                            }
                            n && (t.flags |= 4);
                          }
                          null !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152));
                        }
                        return (oj(t), null);
                      case 6:
                        if (e && null != t.stateNode)
                          s(e, t, e.memoizedProps, n);
                        else {
                          if ("string" != typeof n && null === t.stateNode)
                            throw Error(d(166));
                          if (((r = at(ae.current)), at(i7.current), iw(t))) {
                            if (
                              ((n = t.stateNode),
                              (r = t.memoizedProps),
                              (n[nI] = t),
                              (u = n.nodeValue !== r) && null !== (e = ic))
                            )
                              switch (e.tag) {
                                case 3:
                                  nm(n.nodeValue, r, 0 != (1 & e.mode));
                                  break;
                                case 5:
                                  !0 !==
                                    e.memoizedProps.suppressHydrationWarning &&
                                    nm(n.nodeValue, r, 0 != (1 & e.mode));
                              }
                            u && (t.flags |= 4);
                          } else
                            (((n = (
                              9 === r.nodeType ? r : r.ownerDocument
                            ).createTextNode(n))[nI] = t),
                              (t.stateNode = n));
                        }
                        return (oj(t), null);
                      case 13:
                        if (
                          (nz(ao),
                          (n = t.memoizedState),
                          null === e ||
                            (null !== e.memoizedState &&
                              null !== e.memoizedState.dehydrated))
                        ) {
                          if (
                            ih &&
                            null !== id &&
                            0 != (1 & t.mode) &&
                            0 == (128 & t.flags)
                          )
                            (ik(), i_(), (t.flags |= 98560), (u = !1));
                          else if (
                            ((u = iw(t)), null !== n && null !== n.dehydrated)
                          ) {
                            if (null === e) {
                              if (!u) throw Error(d(318));
                              if (
                                !(u =
                                  null !== (u = t.memoizedState)
                                    ? u.dehydrated
                                    : null)
                              )
                                throw Error(d(317));
                              u[nI] = t;
                            } else
                              (i_(),
                                0 == (128 & t.flags) &&
                                  (t.memoizedState = null),
                                (t.flags |= 4));
                            (oj(t), (u = !1));
                          } else
                            (null !== ip && (sC(ip), (ip = null)), (u = !0));
                          if (!u) return 65536 & t.flags ? t : null;
                        }
                        if (0 != (128 & t.flags)) return ((t.lanes = r), t);
                        return (
                          (n = null !== n) !=
                            (null !== e && null !== e.memoizedState) &&
                            n &&
                            ((t.child.flags |= 8192),
                            0 != (1 & t.mode) &&
                              (null === e || 0 != (1 & ao.current)
                                ? 0 === st && (st = 3)
                                : sN())),
                          null !== t.updateQueue && (t.flags |= 4),
                          oj(t),
                          null
                        );
                      case 4:
                        return (
                          an(),
                          a(e, t),
                          null === e && na(t.stateNode.containerInfo),
                          oj(t),
                          null
                        );
                      case 10:
                        return (ij(t.type._context), oj(t), null);
                      case 19:
                        if ((nz(ao), null === (u = t.memoizedState)))
                          return (oj(t), null);
                        if (
                          ((n = 0 != (128 & t.flags)),
                          null === (c = u.rendering))
                        ) {
                          if (n) oP(u, !1);
                          else {
                            if (
                              0 !== st ||
                              (null !== e && 0 != (128 & e.flags))
                            )
                              for (e = t.child; null !== e; ) {
                                if (null !== (c = as(e))) {
                                  for (
                                    t.flags |= 128,
                                      oP(u, !1),
                                      null !== (n = c.updateQueue) &&
                                        ((t.updateQueue = n), (t.flags |= 4)),
                                      t.subtreeFlags = 0,
                                      n = r,
                                      r = t.child;
                                    null !== r;
                                  )
                                    ((u = r),
                                      (e = n),
                                      (u.flags &= 14680066),
                                      null === (c = u.alternate)
                                        ? ((u.childLanes = 0),
                                          (u.lanes = e),
                                          (u.child = null),
                                          (u.subtreeFlags = 0),
                                          (u.memoizedProps = null),
                                          (u.memoizedState = null),
                                          (u.updateQueue = null),
                                          (u.dependencies = null),
                                          (u.stateNode = null))
                                        : ((u.childLanes = c.childLanes),
                                          (u.lanes = c.lanes),
                                          (u.child = c.child),
                                          (u.subtreeFlags = 0),
                                          (u.deletions = null),
                                          (u.memoizedProps = c.memoizedProps),
                                          (u.memoizedState = c.memoizedState),
                                          (u.updateQueue = c.updateQueue),
                                          (u.type = c.type),
                                          (e = c.dependencies),
                                          (u.dependencies =
                                            null === e
                                              ? null
                                              : {
                                                  lanes: e.lanes,
                                                  firstContext: e.firstContext,
                                                })),
                                      (r = r.sibling));
                                  return (
                                    nH(ao, (1 & ao.current) | 2),
                                    t.child
                                  );
                                }
                                e = e.sibling;
                              }
                            null !== u.tail &&
                              eZ() > su &&
                              ((t.flags |= 128),
                              (n = !0),
                              oP(u, !1),
                              (t.lanes = 4194304));
                          }
                        } else {
                          if (!n) {
                            if (null !== (e = as(c))) {
                              if (
                                ((t.flags |= 128),
                                (n = !0),
                                null !== (r = e.updateQueue) &&
                                  ((t.updateQueue = r), (t.flags |= 4)),
                                oP(u, !0),
                                null === u.tail &&
                                  "hidden" === u.tailMode &&
                                  !c.alternate &&
                                  !ih)
                              )
                                return (oj(t), null);
                            } else
                              2 * eZ() - u.renderingStartTime > su &&
                                1073741824 !== r &&
                                ((t.flags |= 128),
                                (n = !0),
                                oP(u, !1),
                                (t.lanes = 4194304));
                          }
                          u.isBackwards
                            ? ((c.sibling = t.child), (t.child = c))
                            : (null !== (r = u.last)
                                ? (r.sibling = c)
                                : (t.child = c),
                              (u.last = c));
                        }
                        if (null !== u.tail)
                          return (
                            (t = u.tail),
                            (u.rendering = t),
                            (u.tail = t.sibling),
                            (u.renderingStartTime = eZ()),
                            (t.sibling = null),
                            (r = ao.current),
                            nH(ao, n ? (1 & r) | 2 : 1 & r),
                            t
                          );
                        return (oj(t), null);
                      case 22:
                      case 23:
                        return (
                          sR(),
                          (n = null !== t.memoizedState),
                          null !== e &&
                            (null !== e.memoizedState) !== n &&
                            (t.flags |= 8192),
                          n && 0 != (1 & t.mode)
                            ? 0 != (1073741824 & o9) &&
                              (oj(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                            : oj(t),
                          null
                        );
                      case 24:
                      case 25:
                        return null;
                    }
                    throw Error(d(156, t.tag));
                  })(r, t, o9))
                ) {
                  o8 = r;
                  return;
                }
              } else {
                if (
                  null !==
                  (r = (function (e, t) {
                    switch ((iu(t), t.tag)) {
                      case 1:
                        return (
                          nJ(t.type) && nQ(),
                          65536 & (e = t.flags)
                            ? ((t.flags = (-65537 & e) | 128), t)
                            : null
                        );
                      case 3:
                        return (
                          an(),
                          nz(nG),
                          nz(nV),
                          au(),
                          0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                            ? ((t.flags = (-65537 & e) | 128), t)
                            : null
                        );
                      case 5:
                        return (aa(t), null);
                      case 13:
                        if (
                          (nz(ao),
                          null !== (e = t.memoizedState) &&
                            null !== e.dehydrated)
                        ) {
                          if (null === t.alternate) throw Error(d(340));
                          i_();
                        }
                        return 65536 & (e = t.flags)
                          ? ((t.flags = (-65537 & e) | 128), t)
                          : null;
                      case 19:
                        return (nz(ao), null);
                      case 4:
                        return (an(), null);
                      case 10:
                        return (ij(t.type._context), null);
                      case 22:
                      case 23:
                        return (sR(), null);
                      default:
                        return null;
                    }
                  })(r, t))
                ) {
                  ((r.flags &= 32767), (o8 = r));
                  return;
                }
                if (null !== e)
                  ((e.flags |= 32768),
                    (e.subtreeFlags = 0),
                    (e.deletions = null));
                else {
                  ((st = 6), (o8 = null));
                  return;
                }
              }
              if (null !== (t = t.sibling)) {
                o8 = t;
                return;
              }
              o8 = t = e;
            } while (null !== t);
            0 === st && (st = 5);
          }
          function sM(e, t, r) {
            var n = tc,
              i = o4.transition;
            try {
              ((o4.transition = null),
                (tc = 1),
                (function (e, t, r, n) {
                  do sB();
                  while (null !== sm);
                  if (0 != (6 & o6)) throw Error(d(327));
                  r = e.finishedWork;
                  var i = e.finishedLanes;
                  if (null !== r) {
                    if (
                      ((e.finishedWork = null),
                      (e.finishedLanes = 0),
                      r === e.current)
                    )
                      throw Error(d(177));
                    ((e.callbackNode = null), (e.callbackPriority = 0));
                    var a = r.lanes | r.childLanes;
                    if (
                      ((function (e, t) {
                        var r = e.pendingLanes & ~t;
                        ((e.pendingLanes = t),
                          (e.suspendedLanes = 0),
                          (e.pingedLanes = 0),
                          (e.expiredLanes &= t),
                          (e.mutableReadLanes &= t),
                          (e.entangledLanes &= t),
                          (t = e.entanglements));
                        var n = e.eventTimes;
                        for (e = e.expirationTimes; 0 < r; ) {
                          var i = 31 - e7(r),
                            a = 1 << i;
                          ((t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a));
                        }
                      })(e, a),
                      e === o5 && ((o8 = o5 = null), (o7 = 0)),
                      (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                        sp ||
                        ((sp = !0),
                        eJ(e3, function () {
                          return (sB(), null);
                        })),
                      (a = 0 != (15990 & r.flags)),
                      0 != (15990 & r.subtreeFlags) || a)
                    ) {
                      ((a = o4.transition), (o4.transition = null));
                      var o,
                        s,
                        l,
                        u = tc;
                      tc = 1;
                      var c = o6;
                      ((o6 |= 4),
                        (o3.current = null),
                        (function (e, t) {
                          if (((ny = tL), rB((e = rM())))) {
                            if ("selectionStart" in e)
                              var r = {
                                start: e.selectionStart,
                                end: e.selectionEnd,
                              };
                            else
                              e: {
                                var n =
                                  (r =
                                    ((r = e.ownerDocument) && r.defaultView) ||
                                    window).getSelection && r.getSelection();
                                if (n && 0 !== n.rangeCount) {
                                  r = n.anchorNode;
                                  var i,
                                    a = n.anchorOffset,
                                    o = n.focusNode;
                                  n = n.focusOffset;
                                  try {
                                    (r.nodeType, o.nodeType);
                                  } catch (e) {
                                    r = null;
                                    break e;
                                  }
                                  var s = 0,
                                    l = -1,
                                    u = -1,
                                    c = 0,
                                    f = 0,
                                    h = e,
                                    p = null;
                                  t: for (;;) {
                                    for (
                                      ;
                                      h !== r ||
                                        (0 !== a && 3 !== h.nodeType) ||
                                        (l = s + a),
                                        h !== o ||
                                          (0 !== n && 3 !== h.nodeType) ||
                                          (u = s + n),
                                        3 === h.nodeType &&
                                          (s += h.nodeValue.length),
                                        null !== (i = h.firstChild);
                                    )
                                      ((p = h), (h = i));
                                    for (;;) {
                                      if (h === e) break t;
                                      if (
                                        (p === r && ++c === a && (l = s),
                                        p === o && ++f === n && (u = s),
                                        null !== (i = h.nextSibling))
                                      )
                                        break;
                                      p = (h = p).parentNode;
                                    }
                                    h = i;
                                  }
                                  r =
                                    -1 === l || -1 === u
                                      ? null
                                      : { start: l, end: u };
                                } else r = null;
                              }
                            r = r || { start: 0, end: 0 };
                          } else r = null;
                          for (
                            nv = { focusedElem: e, selectionRange: r },
                              tL = !1,
                              oL = t;
                            null !== oL;
                          )
                            if (
                              ((e = (t = oL).child),
                              0 != (1028 & t.subtreeFlags) && null !== e)
                            )
                              ((e.return = t), (oL = e));
                            else
                              for (; null !== oL; ) {
                                t = oL;
                                try {
                                  var m = t.alternate;
                                  if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                      case 5:
                                      case 6:
                                      case 4:
                                      case 17:
                                        break;
                                      case 1:
                                        if (null !== m) {
                                          var g = m.memoizedProps,
                                            y = m.memoizedState,
                                            v = t.stateNode,
                                            b = v.getSnapshotBeforeUpdate(
                                              t.elementType === t.type
                                                ? g
                                                : ix(t.type, g),
                                              y,
                                            );
                                          v.__reactInternalSnapshotBeforeUpdate =
                                            b;
                                        }
                                        break;
                                      case 3:
                                        var w = t.stateNode.containerInfo;
                                        1 === w.nodeType
                                          ? (w.textContent = "")
                                          : 9 === w.nodeType &&
                                            w.documentElement &&
                                            w.removeChild(w.documentElement);
                                        break;
                                      default:
                                        throw Error(d(163));
                                    }
                                } catch (e) {
                                  sH(t, t.return, e);
                                }
                                if (null !== (e = t.sibling)) {
                                  ((e.return = t.return), (oL = e));
                                  break;
                                }
                                oL = t.return;
                              }
                          ((m = o$), (o$ = !1));
                        })(e, r),
                        oQ(r, e),
                        (function (e) {
                          var t = rM(),
                            r = e.focusedElem,
                            n = e.selectionRange;
                          if (
                            t !== r &&
                            r &&
                            r.ownerDocument &&
                            (function e(t, r) {
                              return (
                                !!t &&
                                !!r &&
                                (t === r ||
                                  ((!t || 3 !== t.nodeType) &&
                                    (r && 3 === r.nodeType
                                      ? e(t, r.parentNode)
                                      : "contains" in t
                                        ? t.contains(r)
                                        : !!t.compareDocumentPosition &&
                                          !!(
                                            16 & t.compareDocumentPosition(r)
                                          ))))
                              );
                            })(r.ownerDocument.documentElement, r)
                          ) {
                            if (null !== n && rB(r)) {
                              if (
                                ((t = n.start),
                                void 0 === (e = n.end) && (e = t),
                                "selectionStart" in r)
                              )
                                ((r.selectionStart = t),
                                  (r.selectionEnd = Math.min(
                                    e,
                                    r.value.length,
                                  )));
                              else if (
                                (e =
                                  ((t = r.ownerDocument || document) &&
                                    t.defaultView) ||
                                  window).getSelection
                              ) {
                                e = e.getSelection();
                                var i = r.textContent.length,
                                  a = Math.min(n.start, i);
                                ((n =
                                  void 0 === n.end ? a : Math.min(n.end, i)),
                                  !e.extend &&
                                    a > n &&
                                    ((i = n), (n = a), (a = i)),
                                  (i = rF(r, a)));
                                var o = rF(r, n);
                                i &&
                                  o &&
                                  (1 !== e.rangeCount ||
                                    e.anchorNode !== i.node ||
                                    e.anchorOffset !== i.offset ||
                                    e.focusNode !== o.node ||
                                    e.focusOffset !== o.offset) &&
                                  ((t = t.createRange()).setStart(
                                    i.node,
                                    i.offset,
                                  ),
                                  e.removeAllRanges(),
                                  a > n
                                    ? (e.addRange(t),
                                      e.extend(o.node, o.offset))
                                    : (t.setEnd(o.node, o.offset),
                                      e.addRange(t)));
                              }
                            }
                            for (t = [], e = r; (e = e.parentNode); )
                              1 === e.nodeType &&
                                t.push({
                                  element: e,
                                  left: e.scrollLeft,
                                  top: e.scrollTop,
                                });
                            for (
                              "function" == typeof r.focus && r.focus(), r = 0;
                              r < t.length;
                              r++
                            )
                              (((e = t[r]).element.scrollLeft = e.left),
                                (e.element.scrollTop = e.top));
                          }
                        })(nv),
                        (tL = !!ny),
                        (nv = ny = null),
                        (e.current = r),
                        (o = r),
                        (s = e),
                        (l = i),
                        (oL = o),
                        (function e(t, r, n) {
                          for (var i = 0 != (1 & t.mode); null !== oL; ) {
                            var a = oL,
                              o = a.child;
                            if (22 === a.tag && i) {
                              var s = null !== a.memoizedState || oR;
                              if (!s) {
                                var l = a.alternate,
                                  u =
                                    (null !== l && null !== l.memoizedState) ||
                                    oU;
                                l = oR;
                                var c = oU;
                                if (((oR = s), (oU = u) && !c))
                                  for (oL = a; null !== oL; )
                                    ((u = (s = oL).child),
                                      22 === s.tag && null !== s.memoizedState
                                        ? o0(a)
                                        : null !== u
                                          ? ((u.return = s), (oL = u))
                                          : o0(a));
                                for (; null !== o; )
                                  ((oL = o), e(o, r, n), (o = o.sibling));
                                ((oL = a), (oR = l), (oU = c));
                              }
                              oX(t, r, n);
                            } else
                              0 != (8772 & a.subtreeFlags) && null !== o
                                ? ((o.return = a), (oL = o))
                                : oX(t, r, n);
                          }
                        })(o, s, l),
                        eX(),
                        (o6 = c),
                        (tc = u),
                        (o4.transition = a));
                    } else e.current = r;
                    if (
                      (sp && ((sp = !1), (sm = e), (sg = i)),
                      0 === (a = e.pendingLanes) && (sh = null),
                      (function (e) {
                        if (e8 && "function" == typeof e8.onCommitFiberRoot)
                          try {
                            e8.onCommitFiberRoot(
                              e5,
                              e,
                              void 0,
                              128 == (128 & e.current.flags),
                            );
                          } catch (e) {}
                      })(r.stateNode, n),
                      sS(e, eZ()),
                      null !== t)
                    )
                      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                        n((i = t[r]).value, {
                          componentStack: i.stack,
                          digest: i.digest,
                        });
                    if (sd) throw ((sd = !1), (e = sf), (sf = null), e);
                    (0 != (1 & sg) && 0 !== e.tag && sB(),
                      0 != (1 & (a = e.pendingLanes))
                        ? e === sv
                          ? sy++
                          : ((sy = 0), (sv = e))
                        : (sy = 0),
                      n6());
                  }
                })(e, t, r, n));
            } finally {
              ((o4.transition = i), (tc = n));
            }
            return null;
          }
          function sB() {
            if (null !== sm) {
              var e = td(sg),
                t = o4.transition,
                r = tc;
              try {
                if (
                  ((o4.transition = null), (tc = 16 > e ? 16 : e), null === sm)
                )
                  var n = !1;
                else {
                  if (((e = sm), (sm = null), (sg = 0), 0 != (6 & o6)))
                    throw Error(d(331));
                  var i = o6;
                  for (o6 |= 4, oL = e.current; null !== oL; ) {
                    var a = oL,
                      o = a.child;
                    if (0 != (16 & oL.flags)) {
                      var s = a.deletions;
                      if (null !== s) {
                        for (var l = 0; l < s.length; l++) {
                          var u = s[l];
                          for (oL = u; null !== oL; ) {
                            var c = oL;
                            switch (c.tag) {
                              case 0:
                              case 11:
                              case 15:
                                oF(8, c, a);
                            }
                            var f = c.child;
                            if (null !== f) ((f.return = c), (oL = f));
                            else
                              for (; null !== oL; ) {
                                var h = (c = oL).sibling,
                                  p = c.return;
                                if (
                                  ((function e(t) {
                                    var r = t.alternate;
                                    (null !== r && ((t.alternate = null), e(r)),
                                      (t.child = null),
                                      (t.deletions = null),
                                      (t.sibling = null),
                                      5 === t.tag &&
                                        null !== (r = t.stateNode) &&
                                        (delete r[nI],
                                        delete r[nP],
                                        delete r[nR],
                                        delete r[nU],
                                        delete r[nO]),
                                      (t.stateNode = null),
                                      (t.return = null),
                                      (t.dependencies = null),
                                      (t.memoizedProps = null),
                                      (t.memoizedState = null),
                                      (t.pendingProps = null),
                                      (t.stateNode = null),
                                      (t.updateQueue = null));
                                  })(c),
                                  c === u)
                                ) {
                                  oL = null;
                                  break;
                                }
                                if (null !== h) {
                                  ((h.return = p), (oL = h));
                                  break;
                                }
                                oL = p;
                              }
                          }
                        }
                        var m = a.alternate;
                        if (null !== m) {
                          var g = m.child;
                          if (null !== g) {
                            m.child = null;
                            do {
                              var y = g.sibling;
                              ((g.sibling = null), (g = y));
                            } while (null !== g);
                          }
                        }
                        oL = a;
                      }
                    }
                    if (0 != (2064 & a.subtreeFlags) && null !== o)
                      ((o.return = a), (oL = o));
                    else
                      for (; null !== oL; ) {
                        if (((a = oL), 0 != (2048 & a.flags)))
                          switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                              oF(9, a, a.return);
                          }
                        var v = a.sibling;
                        if (null !== v) {
                          ((v.return = a.return), (oL = v));
                          break;
                        }
                        oL = a.return;
                      }
                  }
                  var b = e.current;
                  for (oL = b; null !== oL; ) {
                    var w = (o = oL).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== w)
                      ((w.return = o), (oL = w));
                    else
                      for (o = b; null !== oL; ) {
                        if (((s = oL), 0 != (2048 & s.flags)))
                          try {
                            switch (s.tag) {
                              case 0:
                              case 11:
                              case 15:
                                oM(9, s);
                            }
                          } catch (e) {
                            sH(s, s.return, e);
                          }
                        if (s === o) {
                          oL = null;
                          break;
                        }
                        var k = s.sibling;
                        if (null !== k) {
                          ((k.return = s.return), (oL = k));
                          break;
                        }
                        oL = s.return;
                      }
                  }
                  if (
                    ((o6 = i),
                    n6(),
                    e8 && "function" == typeof e8.onPostCommitFiberRoot)
                  )
                    try {
                      e8.onPostCommitFiberRoot(e5, e);
                    } catch (e) {}
                  n = !0;
                }
                return n;
              } finally {
                ((tc = r), (o4.transition = t));
              }
            }
            return !1;
          }
          function sz(e, t, r) {
            ((t = or(e, (t = a7(r, t)), 1)),
              (e = iH(e, t, 1)),
              (t = sk()),
              null !== e && (tl(e, 1, t), sS(e, t)));
          }
          function sH(e, t, r) {
            if (3 === e.tag) sz(e, e, r);
            else
              for (; null !== t; ) {
                if (3 === t.tag) {
                  sz(t, e, r);
                  break;
                }
                if (1 === t.tag) {
                  var n = t.stateNode;
                  if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof n.componentDidCatch &&
                      (null === sh || !sh.has(n)))
                  ) {
                    ((e = on(t, (e = a7(r, e)), 1)),
                      (t = iH(t, e, 1)),
                      (e = sk()),
                      null !== t && (tl(t, 1, e), sS(t, e)));
                    break;
                  }
                }
                t = t.return;
              }
          }
          function sq(e, t, r) {
            var n = e.pingCache;
            (null !== n && n.delete(t),
              (t = sk()),
              (e.pingedLanes |= e.suspendedLanes & r),
              o5 === e &&
                (o7 & r) === r &&
                (4 === st ||
                (3 === st && (130023424 & o7) === o7 && 500 > eZ() - sl)
                  ? sU(e, 0)
                  : (sa |= r)),
              sS(e, t));
          }
          function sV(e, t) {
            0 === t &&
              (0 == (1 & e.mode)
                ? (t = 1)
                : ((t = tr), 0 == (130023424 & (tr <<= 1)) && (tr = 4194304)));
            var r = sk();
            null !== (e = i$(e, t)) && (tl(e, t, r), sS(e, r));
          }
          function sG(e) {
            var t = e.memoizedState,
              r = 0;
            (null !== t && (r = t.retryLane), sV(e, r));
          }
          function sW(e, t) {
            var r = 0;
            switch (e.tag) {
              case 13:
                var n = e.stateNode,
                  i = e.memoizedState;
                null !== i && (r = i.retryLane);
                break;
              case 19:
                n = e.stateNode;
                break;
              default:
                throw Error(d(314));
            }
            (null !== n && n.delete(t), sV(e, r));
          }
          function sK(e, t, r, n) {
            ((this.tag = e),
              (this.key = r),
              (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                  null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = t),
              (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                  null),
              (this.mode = n),
              (this.subtreeFlags = this.flags = 0),
              (this.deletions = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null));
          }
          function sJ(e, t, r, n) {
            return new sK(e, t, r, n);
          }
          function sQ(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
          }
          function sY(e, t) {
            var r = e.alternate;
            return (
              null === r
                ? (((r = sJ(e.tag, t, e.key, e.mode)).elementType =
                    e.elementType),
                  (r.type = e.type),
                  (r.stateNode = e.stateNode),
                  (r.alternate = e),
                  (e.alternate = r))
                : ((r.pendingProps = t),
                  (r.type = e.type),
                  (r.flags = 0),
                  (r.subtreeFlags = 0),
                  (r.deletions = null)),
              (r.flags = 14680064 & e.flags),
              (r.childLanes = e.childLanes),
              (r.lanes = e.lanes),
              (r.child = e.child),
              (r.memoizedProps = e.memoizedProps),
              (r.memoizedState = e.memoizedState),
              (r.updateQueue = e.updateQueue),
              (t = e.dependencies),
              (r.dependencies =
                null === t
                  ? null
                  : { lanes: t.lanes, firstContext: t.firstContext }),
              (r.sibling = e.sibling),
              (r.index = e.index),
              (r.ref = e.ref),
              r
            );
          }
          function sX(e, t, r, n, i, a) {
            var o = 2;
            if (((n = e), "function" == typeof e)) sQ(e) && (o = 1);
            else if ("string" == typeof e) o = 5;
            else
              e: switch (e) {
                case I:
                  return sZ(r.children, i, a, t);
                case P:
                  ((o = 8), (i |= 8));
                  break;
                case j:
                  return (
                    ((e = sJ(12, r, t, 2 | i)).elementType = j),
                    (e.lanes = a),
                    e
                  );
                case L:
                  return (
                    ((e = sJ(13, r, t, i)).elementType = L),
                    (e.lanes = a),
                    e
                  );
                case N:
                  return (
                    ((e = sJ(19, r, t, i)).elementType = N),
                    (e.lanes = a),
                    e
                  );
                case F:
                  return s0(r, i, a, t);
                default:
                  if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                      case R:
                        o = 10;
                        break e;
                      case U:
                        o = 9;
                        break e;
                      case O:
                        o = 11;
                        break e;
                      case D:
                        o = 14;
                        break e;
                      case $:
                        ((o = 16), (n = null));
                        break e;
                    }
                  throw Error(d(130, null == e ? e : typeof e, ""));
              }
            return (
              ((t = sJ(o, r, t, i)).elementType = e),
              (t.type = n),
              (t.lanes = a),
              t
            );
          }
          function sZ(e, t, r, n) {
            return (((e = sJ(7, e, n, t)).lanes = r), e);
          }
          function s0(e, t, r, n) {
            return (
              ((e = sJ(22, e, n, t)).elementType = F),
              (e.lanes = r),
              (e.stateNode = { isHidden: !1 }),
              e
            );
          }
          function s1(e, t, r) {
            return (((e = sJ(6, e, null, t)).lanes = r), e);
          }
          function s2(e, t, r) {
            return (
              ((t = sJ(
                4,
                null !== e.children ? e.children : [],
                e.key,
                t,
              )).lanes = r),
              (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
              }),
              t
            );
          }
          function s3(e, t, r, n, i) {
            ((this.tag = t),
              (this.containerInfo = e),
              (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                  null),
              (this.timeoutHandle = -1),
              (this.callbackNode = this.pendingContext = this.context = null),
              (this.callbackPriority = 0),
              (this.eventTimes = ts(0)),
              (this.expirationTimes = ts(-1)),
              (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                  0),
              (this.entanglements = ts(0)),
              (this.identifierPrefix = n),
              (this.onRecoverableError = i),
              (this.mutableSourceEagerHydrationData = null));
          }
          function s4(e, t, r, n, i, a, o, s, l) {
            return (
              (e = new s3(e, t, r, s, l)),
              1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
              (a = sJ(3, null, null, t)),
              (e.current = a),
              (a.stateNode = e),
              (a.memoizedState = {
                element: n,
                isDehydrated: r,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
              }),
              iM(a),
              e
            );
          }
          function s6(e) {
            if (!e) return nq;
            e = e._reactInternals;
            e: {
              if (eV(e) !== e || 1 !== e.tag) throw Error(d(170));
              var t = e;
              do {
                switch (t.tag) {
                  case 3:
                    t = t.stateNode.context;
                    break e;
                  case 1:
                    if (nJ(t.type)) {
                      t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e;
                    }
                }
                t = t.return;
              } while (null !== t);
              throw Error(d(171));
            }
            if (1 === e.tag) {
              var r = e.type;
              if (nJ(r)) return nX(e, r, t);
            }
            return t;
          }
          function s5(e, t, r, n, i, a, o, s, l) {
            return (
              ((e = s4(r, n, !0, e, i, a, o, s, l)).context = s6(null)),
              (r = e.current),
              ((a = iz((n = sk()), (i = s_(r)))).callback =
                null != t ? t : null),
              iH(r, a, i),
              (e.current.lanes = i),
              tl(e, i, n),
              sS(e, n),
              e
            );
          }
          function s8(e, t, r, n) {
            var i = t.current,
              a = sk(),
              o = s_(i);
            return (
              (r = s6(r)),
              null === t.context ? (t.context = r) : (t.pendingContext = r),
              ((t = iz(a, o)).payload = { element: e }),
              null !== (n = void 0 === n ? null : n) && (t.callback = n),
              null !== (e = iH(i, t, o)) && (sE(e, i, o, a), iq(e, i, o)),
              o
            );
          }
          function s7(e) {
            return (e = e.current).child
              ? (e.child.tag, e.child.stateNode)
              : null;
          }
          function s9(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
              var r = e.retryLane;
              e.retryLane = 0 !== r && r < t ? r : t;
            }
          }
          function le(e, t) {
            (s9(e, t), (e = e.alternate) && s9(e, t));
          }
          l = function (e, t, r) {
            if (null !== e) {
              if (e.memoizedProps !== t.pendingProps || nG.current) ol = !0;
              else {
                if (0 == (e.lanes & r) && 0 == (128 & t.flags))
                  return (
                    (ol = !1),
                    (function (e, t, r) {
                      switch (t.tag) {
                        case 3:
                          (ov(t), i_());
                          break;
                        case 5:
                          ai(t);
                          break;
                        case 1:
                          nJ(t.type) && nZ(t);
                          break;
                        case 4:
                          ar(t, t.stateNode.containerInfo);
                          break;
                        case 10:
                          var n = t.type._context,
                            i = t.memoizedProps.value;
                          (nH(iT, n._currentValue), (n._currentValue = i));
                          break;
                        case 13:
                          if (null !== (n = t.memoizedState)) {
                            if (null !== n.dehydrated)
                              return (
                                nH(ao, 1 & ao.current),
                                (t.flags |= 128),
                                null
                              );
                            if (0 != (r & t.child.childLanes))
                              return o_(e, t, r);
                            return (
                              nH(ao, 1 & ao.current),
                              null !== (e = oI(e, t, r)) ? e.sibling : null
                            );
                          }
                          nH(ao, 1 & ao.current);
                          break;
                        case 19:
                          if (
                            ((n = 0 != (r & t.childLanes)),
                            0 != (128 & e.flags))
                          ) {
                            if (n) return oC(e, t, r);
                            t.flags |= 128;
                          }
                          if (
                            (null !== (i = t.memoizedState) &&
                              ((i.rendering = null),
                              (i.tail = null),
                              (i.lastEffect = null)),
                            nH(ao, ao.current),
                            !n)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return ((t.lanes = 0), oh(e, t, r));
                      }
                      return oI(e, t, r);
                    })(e, t, r)
                  );
                ol = 0 != (131072 & e.flags);
              }
            } else
              ((ol = !1), ih && 0 != (1048576 & t.flags) && is(t, n9, t.index));
            switch (((t.lanes = 0), t.tag)) {
              case 2:
                var n = t.type;
                (oA(e, t), (e = t.pendingProps));
                var i = nK(t, nV.current);
                (iU(t, r), (i = a_(null, t, n, e, i, r)));
                var a = aE();
                return (
                  (t.flags |= 1),
                  "object" == typeof i &&
                  null !== i &&
                  "function" == typeof i.render &&
                  void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      nJ(n) ? ((a = !0), nZ(t)) : (a = !1),
                      (t.memoizedState =
                        null !== i.state && void 0 !== i.state
                          ? i.state
                          : null),
                      iM(t),
                      (i.updater = iQ),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      i0(t, n, e, r),
                      (t = oy(null, t, n, !0, a, r)))
                    : ((t.tag = 0),
                      ih && a && il(t),
                      ou(null, t, i, r),
                      (t = t.child)),
                  t
                );
              case 16:
                n = t.elementType;
                e: {
                  switch (
                    (oA(e, t),
                    (e = t.pendingProps),
                    (n = (i = n._init)(n._payload)),
                    (t.type = n),
                    (i = t.tag =
                      (function (e) {
                        if ("function" == typeof e) return sQ(e) ? 1 : 0;
                        if (null != e) {
                          if ((e = e.$$typeof) === O) return 11;
                          if (e === D) return 14;
                        }
                        return 2;
                      })(n)),
                    (e = ix(n, e)),
                    i)
                  ) {
                    case 0:
                      t = om(null, t, n, e, r);
                      break e;
                    case 1:
                      t = og(null, t, n, e, r);
                      break e;
                    case 11:
                      t = oc(null, t, n, e, r);
                      break e;
                    case 14:
                      t = od(null, t, n, ix(n.type, e), r);
                      break e;
                  }
                  throw Error(d(306, n, ""));
                }
                return t;
              case 0:
                return (
                  (n = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === n ? i : ix(n, i)),
                  om(e, t, n, i, r)
                );
              case 1:
                return (
                  (n = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === n ? i : ix(n, i)),
                  og(e, t, n, i, r)
                );
              case 3:
                e: {
                  if ((ov(t), null === e)) throw Error(d(387));
                  ((n = t.pendingProps),
                    (i = (a = t.memoizedState).element),
                    iB(e, t),
                    iG(t, n, null, r));
                  var o = t.memoizedState;
                  if (((n = o.element), a.isDehydrated)) {
                    if (
                      ((a = {
                        element: n,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions,
                      }),
                      (t.updateQueue.baseState = a),
                      (t.memoizedState = a),
                      256 & t.flags)
                    ) {
                      ((i = a7(Error(d(423)), t)), (t = ob(e, t, n, r, i)));
                      break e;
                    }
                    if (n !== i) {
                      ((i = a7(Error(d(424)), t)), (t = ob(e, t, n, r, i)));
                      break e;
                    }
                    for (
                      id = nT(t.stateNode.containerInfo.firstChild),
                        ic = t,
                        ih = !0,
                        ip = null,
                        r = i5(t, null, n, r),
                        t.child = r;
                      r;
                    )
                      ((r.flags = (-3 & r.flags) | 4096), (r = r.sibling));
                  } else {
                    if ((i_(), n === i)) {
                      t = oI(e, t, r);
                      break e;
                    }
                    ou(e, t, n, r);
                  }
                  t = t.child;
                }
                return t;
              case 5:
                return (
                  ai(t),
                  null === e && iv(t),
                  (n = t.type),
                  (i = t.pendingProps),
                  (a = null !== e ? e.memoizedProps : null),
                  (o = i.children),
                  nb(n, i)
                    ? (o = null)
                    : null !== a && nb(n, a) && (t.flags |= 32),
                  op(e, t),
                  ou(e, t, o, r),
                  t.child
                );
              case 6:
                return (null === e && iv(t), null);
              case 13:
                return o_(e, t, r);
              case 4:
                return (
                  ar(t, t.stateNode.containerInfo),
                  (n = t.pendingProps),
                  null === e ? (t.child = i6(t, null, n, r)) : ou(e, t, n, r),
                  t.child
                );
              case 11:
                return (
                  (n = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === n ? i : ix(n, i)),
                  oc(e, t, n, i, r)
                );
              case 7:
                return (ou(e, t, t.pendingProps, r), t.child);
              case 8:
              case 12:
                return (ou(e, t, t.pendingProps.children, r), t.child);
              case 10:
                e: {
                  if (
                    ((n = t.type._context),
                    (i = t.pendingProps),
                    (a = t.memoizedProps),
                    (o = i.value),
                    nH(iT, n._currentValue),
                    (n._currentValue = o),
                    null !== a)
                  ) {
                    if (rN(a.value, o)) {
                      if (a.children === i.children && !nG.current) {
                        t = oI(e, t, r);
                        break e;
                      }
                    } else
                      for (
                        null !== (a = t.child) && (a.return = t);
                        null !== a;
                      ) {
                        var s = a.dependencies;
                        if (null !== s) {
                          o = a.child;
                          for (var l = s.firstContext; null !== l; ) {
                            if (l.context === n) {
                              if (1 === a.tag) {
                                (l = iz(-1, r & -r)).tag = 2;
                                var u = a.updateQueue;
                                if (null !== u) {
                                  var c = (u = u.shared).pending;
                                  (null === c
                                    ? (l.next = l)
                                    : ((l.next = c.next), (c.next = l)),
                                    (u.pending = l));
                                }
                              }
                              ((a.lanes |= r),
                                null !== (l = a.alternate) && (l.lanes |= r),
                                iR(a.return, r, t),
                                (s.lanes |= r));
                              break;
                            }
                            l = l.next;
                          }
                        } else if (10 === a.tag)
                          o = a.type === t.type ? null : a.child;
                        else if (18 === a.tag) {
                          if (null === (o = a.return)) throw Error(d(341));
                          ((o.lanes |= r),
                            null !== (s = o.alternate) && (s.lanes |= r),
                            iR(o, r, t),
                            (o = a.sibling));
                        } else o = a.child;
                        if (null !== o) o.return = a;
                        else
                          for (o = a; null !== o; ) {
                            if (o === t) {
                              o = null;
                              break;
                            }
                            if (null !== (a = o.sibling)) {
                              ((a.return = o.return), (o = a));
                              break;
                            }
                            o = o.return;
                          }
                        a = o;
                      }
                  }
                  (ou(e, t, i.children, r), (t = t.child));
                }
                return t;
              case 9:
                return (
                  (i = t.type),
                  (n = t.pendingProps.children),
                  iU(t, r),
                  (n = n((i = iO(i)))),
                  (t.flags |= 1),
                  ou(e, t, n, r),
                  t.child
                );
              case 14:
                return (
                  (i = ix((n = t.type), t.pendingProps)),
                  (i = ix(n.type, i)),
                  od(e, t, n, i, r)
                );
              case 15:
                return of(e, t, t.type, t.pendingProps, r);
              case 17:
                return (
                  (n = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === n ? i : ix(n, i)),
                  oA(e, t),
                  (t.tag = 1),
                  nJ(n) ? ((e = !0), nZ(t)) : (e = !1),
                  iU(t, r),
                  iX(t, n, i),
                  i0(t, n, i, r),
                  oy(null, t, n, !0, e, r)
                );
              case 19:
                return oC(e, t, r);
              case 22:
                return oh(e, t, r);
            }
            throw Error(d(156, t.tag));
          };
          var lt =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  console.error(e);
                };
          function lr(e) {
            this._internalRoot = e;
          }
          function ln(e) {
            this._internalRoot = e;
          }
          function li(e) {
            return !(
              !e ||
              (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            );
          }
          function la(e) {
            return !(
              !e ||
              (1 !== e.nodeType &&
                9 !== e.nodeType &&
                11 !== e.nodeType &&
                (8 !== e.nodeType ||
                  " react-mount-point-unstable " !== e.nodeValue))
            );
          }
          function lo() {}
          function ls(e, t, r, n, i) {
            var a = r._reactRootContainer;
            if (a) {
              var o = a;
              if ("function" == typeof i) {
                var s = i;
                i = function () {
                  var e = s7(o);
                  s.call(e);
                };
              }
              s8(t, o, e, i);
            } else
              o = (function (e, t, r, n, i) {
                if (i) {
                  if ("function" == typeof n) {
                    var a = n;
                    n = function () {
                      var e = s7(o);
                      a.call(e);
                    };
                  }
                  var o = s5(t, n, e, 0, null, !1, !1, "", lo);
                  return (
                    (e._reactRootContainer = o),
                    (e[nj] = o.current),
                    na(8 === e.nodeType ? e.parentNode : e),
                    sj(),
                    o
                  );
                }
                for (; (i = e.lastChild); ) e.removeChild(i);
                if ("function" == typeof n) {
                  var s = n;
                  n = function () {
                    var e = s7(l);
                    s.call(e);
                  };
                }
                var l = s4(e, 0, !1, null, null, !1, !1, "", lo);
                return (
                  (e._reactRootContainer = l),
                  (e[nj] = l.current),
                  na(8 === e.nodeType ? e.parentNode : e),
                  sj(function () {
                    s8(t, l, r, n);
                  }),
                  l
                );
              })(r, t, e, i, n);
            return s7(o);
          }
          ((ln.prototype.render = lr.prototype.render =
            function (e) {
              var t = this._internalRoot;
              if (null === t) throw Error(d(409));
              s8(e, t, null, null);
            }),
            (ln.prototype.unmount = lr.prototype.unmount =
              function () {
                var e = this._internalRoot;
                if (null !== e) {
                  this._internalRoot = null;
                  var t = e.containerInfo;
                  (sj(function () {
                    s8(null, e, null, null);
                  }),
                    (t[nj] = null));
                }
              }),
            (ln.prototype.unstable_scheduleHydration = function (e) {
              if (e) {
                var t = tm();
                e = { blockedOn: null, target: e, priority: t };
                for (
                  var r = 0;
                  r < tS.length && 0 !== t && t < tS[r].priority;
                  r++
                );
                (tS.splice(r, 0, e), 0 === r && tA(e));
              }
            }),
            (tf = function (e) {
              switch (e.tag) {
                case 3:
                  var t = e.stateNode;
                  if (t.current.memoizedState.isDehydrated) {
                    var r = tn(t.pendingLanes);
                    0 !== r &&
                      (tu(t, 1 | r),
                      sS(t, eZ()),
                      0 == (6 & o6) && ((su = eZ() + 500), n6()));
                  }
                  break;
                case 13:
                  (sj(function () {
                    var t = i$(e, 1);
                    null !== t && sE(t, e, 1, sk());
                  }),
                    le(e, 1));
              }
            }),
            (th = function (e) {
              if (13 === e.tag) {
                var t = i$(e, 134217728);
                (null !== t && sE(t, e, 134217728, sk()), le(e, 134217728));
              }
            }),
            (tp = function (e) {
              if (13 === e.tag) {
                var t = s_(e),
                  r = i$(e, t);
                (null !== r && sE(r, e, t, sk()), le(e, t));
              }
            }),
            (tm = function () {
              return tc;
            }),
            (tg = function (e, t) {
              var r = tc;
              try {
                return ((tc = e), t());
              } finally {
                tc = r;
              }
            }),
            (ex = function (e, t, r) {
              switch (t) {
                case "input":
                  if (
                    (et(e, r), (t = r.name), "radio" === r.type && null != t)
                  ) {
                    for (r = e; r.parentNode; ) r = r.parentNode;
                    for (
                      r = r.querySelectorAll(
                        "input[name=" +
                          JSON.stringify("" + t) +
                          '][type="radio"]',
                      ),
                        t = 0;
                      t < r.length;
                      t++
                    ) {
                      var n = r[t];
                      if (n !== e && n.form === e.form) {
                        var i = n$(n);
                        if (!i) throw Error(d(90));
                        (Q(n), et(n, i));
                      }
                    }
                  }
                  break;
                case "textarea":
                  el(e, r);
                  break;
                case "select":
                  null != (t = r.value) && ea(e, !!r.multiple, t, !1);
              }
            }),
            (ej = sP),
            (eR = sj));
          var ll = {
              findFiberByHostInstance: nL,
              bundleType: 0,
              version: "18.2.0",
              rendererPackageName: "react-dom",
            },
            lu = {
              bundleType: ll.bundleType,
              version: ll.version,
              rendererPackageName: ll.rendererPackageName,
              rendererConfig: ll.rendererConfig,
              overrideHookState: null,
              overrideHookStateDeletePath: null,
              overrideHookStateRenamePath: null,
              overrideProps: null,
              overridePropsDeletePath: null,
              overridePropsRenamePath: null,
              setErrorHandler: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: T.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = eK(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance:
                ll.findFiberByHostInstance ||
                function () {
                  return null;
                },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
              reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
            };
          if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!lc.isDisabled && lc.supportsFiber)
              try {
                ((e5 = lc.inject(lu)), (e8 = lc));
              } catch (e) {}
          }
          ((r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
            usingClientEntryPoint: !1,
            Events: [nN, nD, n$, eI, eP, sP],
          }),
            (r.createPortal = function (e, t) {
              var r =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              if (!li(t)) throw Error(d(200));
              return (function (e, t, r) {
                var n =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
                return {
                  $$typeof: A,
                  key: null == n ? null : "" + n,
                  children: e,
                  containerInfo: t,
                  implementation: null,
                };
              })(e, t, null, r);
            }),
            (r.createRoot = function (e, t) {
              if (!li(e)) throw Error(d(299));
              var r = !1,
                n = "",
                i = lt;
              return (
                null != t &&
                  (!0 === t.unstable_strictMode && (r = !0),
                  void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
                  void 0 !== t.onRecoverableError &&
                    (i = t.onRecoverableError)),
                (t = s4(e, 1, !1, null, null, r, !1, n, i)),
                (e[nj] = t.current),
                na(8 === e.nodeType ? e.parentNode : e),
                new lr(t)
              );
            }),
            (r.findDOMNode = function (e) {
              if (null == e) return null;
              if (1 === e.nodeType) return e;
              var t = e._reactInternals;
              if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(d(188));
                throw Error(d(268, (e = Object.keys(e).join(","))));
              }
              return (e = null === (e = eK(t)) ? null : e.stateNode);
            }),
            (r.flushSync = function (e) {
              return sj(e);
            }),
            (r.hydrate = function (e, t, r) {
              if (!la(t)) throw Error(d(200));
              return ls(null, e, t, !0, r);
            }),
            (r.hydrateRoot = function (e, t, r) {
              if (!li(e)) throw Error(d(405));
              var n = (null != r && r.hydratedSources) || null,
                i = !1,
                a = "",
                o = lt;
              if (
                (null != r &&
                  (!0 === r.unstable_strictMode && (i = !0),
                  void 0 !== r.identifierPrefix && (a = r.identifierPrefix),
                  void 0 !== r.onRecoverableError &&
                    (o = r.onRecoverableError)),
                (t = s5(t, null, e, 1, null != r ? r : null, i, !1, a, o)),
                (e[nj] = t.current),
                na(e),
                n)
              )
                for (e = 0; e < n.length; e++)
                  ((i = (i = (r = n[e])._getVersion)(r._source)),
                    null == t.mutableSourceEagerHydrationData
                      ? (t.mutableSourceEagerHydrationData = [r, i])
                      : t.mutableSourceEagerHydrationData.push(r, i));
              return new ln(t);
            }),
            (r.render = function (e, t, r) {
              if (!la(t)) throw Error(d(200));
              return ls(null, e, t, !1, r);
            }),
            (r.unmountComponentAtNode = function (e) {
              if (!la(e)) throw Error(d(40));
              return (
                !!e._reactRootContainer &&
                (sj(function () {
                  ls(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[nj] = null));
                  });
                }),
                !0)
              );
            }),
            (r.unstable_batchedUpdates = sP),
            (r.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
              if (!la(r)) throw Error(d(200));
              if (null == e || void 0 === e._reactInternals) throw Error(d(38));
              return ls(e, t, r, !1, n);
            }),
            (r.version = "18.2.0-next-9e3b772b8-20220608"));
        },
        { c293e9ed31165f07: "329PG", fabf034282b0d218: "27BDD" },
      ],
      "27BDD": [
        function (e, t, r) {
          t.exports = e("13524e09db3ad441");
        },
        { "13524e09db3ad441": "jX71I" },
      ],
      jX71I: [
        function (e, t, r) {
          function n(e, t) {
            var r = e.length;
            for (e.push(t); 0 < r; ) {
              var n = (r - 1) >>> 1,
                i = e[n];
              if (0 < o(i, t)) ((e[n] = t), (e[r] = i), (r = n));
              else break;
            }
          }
          function i(e) {
            return 0 === e.length ? null : e[0];
          }
          function a(e) {
            if (0 === e.length) return null;
            var t = e[0],
              r = e.pop();
            if (r !== t) {
              e[0] = r;
              for (var n = 0, i = e.length, a = i >>> 1; n < a; ) {
                var s = 2 * (n + 1) - 1,
                  l = e[s],
                  u = s + 1,
                  c = e[u];
                if (0 > o(l, r))
                  u < i && 0 > o(c, l)
                    ? ((e[n] = c), (e[u] = r), (n = u))
                    : ((e[n] = l), (e[s] = r), (n = s));
                else if (u < i && 0 > o(c, r))
                  ((e[n] = c), (e[u] = r), (n = u));
                else break;
              }
            }
            return t;
          }
          function o(e, t) {
            var r = e.sortIndex - t.sortIndex;
            return 0 !== r ? r : e.id - t.id;
          }
          if (
            "object" == typeof performance &&
            "function" == typeof performance.now
          ) {
            var s,
              l = performance;
            r.unstable_now = function () {
              return l.now();
            };
          } else {
            var u = Date,
              c = u.now();
            r.unstable_now = function () {
              return u.now() - c;
            };
          }
          var d = [],
            f = [],
            h = 1,
            p = null,
            m = 3,
            g = !1,
            y = !1,
            v = !1,
            b = "function" == typeof setTimeout ? setTimeout : null,
            w = "function" == typeof clearTimeout ? clearTimeout : null,
            k = "undefined" != typeof setImmediate ? setImmediate : null;
          function _(e) {
            for (var t = i(f); null !== t; ) {
              if (null === t.callback) a(f);
              else if (t.startTime <= e)
                (a(f), (t.sortIndex = t.expirationTime), n(d, t));
              else break;
              t = i(f);
            }
          }
          function E(e) {
            if (((v = !1), _(e), !y)) {
              if (null !== i(d)) ((y = !0), O(S));
              else {
                var t = i(f);
                null !== t && L(E, t.startTime - e);
              }
            }
          }
          function S(e, t) {
            ((y = !1), v && ((v = !1), w(C), (C = -1)), (g = !0));
            var n = m;
            try {
              for (
                _(t), p = i(d);
                null !== p && (!(p.expirationTime > t) || (e && !P()));
              ) {
                var o = p.callback;
                if ("function" == typeof o) {
                  ((p.callback = null), (m = p.priorityLevel));
                  var s = o(p.expirationTime <= t);
                  ((t = r.unstable_now()),
                    "function" == typeof s
                      ? (p.callback = s)
                      : p === i(d) && a(d),
                    _(t));
                } else a(d);
                p = i(d);
              }
              if (null !== p) var l = !0;
              else {
                var u = i(f);
                (null !== u && L(E, u.startTime - t), (l = !1));
              }
              return l;
            } finally {
              ((p = null), (m = n), (g = !1));
            }
          }
          "undefined" != typeof navigator &&
            void 0 !== navigator.scheduling &&
            void 0 !== navigator.scheduling.isInputPending &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          var x = !1,
            T = null,
            C = -1,
            A = 5,
            I = -1;
          function P() {
            return !(r.unstable_now() - I < A);
          }
          function j() {
            if (null !== T) {
              var e = r.unstable_now();
              I = e;
              var t = !0;
              try {
                t = T(!0, e);
              } finally {
                t ? s() : ((x = !1), (T = null));
              }
            } else x = !1;
          }
          if ("function" == typeof k)
            s = function () {
              k(j);
            };
          else if ("undefined" != typeof MessageChannel) {
            var R = new MessageChannel(),
              U = R.port2;
            ((R.port1.onmessage = j),
              (s = function () {
                U.postMessage(null);
              }));
          } else
            s = function () {
              b(j, 0);
            };
          function O(e) {
            ((T = e), x || ((x = !0), s()));
          }
          function L(e, t) {
            C = b(function () {
              e(r.unstable_now());
            }, t);
          }
          ((r.unstable_IdlePriority = 5),
            (r.unstable_ImmediatePriority = 1),
            (r.unstable_LowPriority = 4),
            (r.unstable_NormalPriority = 3),
            (r.unstable_Profiling = null),
            (r.unstable_UserBlockingPriority = 2),
            (r.unstable_cancelCallback = function (e) {
              e.callback = null;
            }),
            (r.unstable_continueExecution = function () {
              y || g || ((y = !0), O(S));
            }),
            (r.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (A = 0 < e ? Math.floor(1e3 / e) : 5);
            }),
            (r.unstable_getCurrentPriorityLevel = function () {
              return m;
            }),
            (r.unstable_getFirstCallbackNode = function () {
              return i(d);
            }),
            (r.unstable_next = function (e) {
              switch (m) {
                case 1:
                case 2:
                case 3:
                  var t = 3;
                  break;
                default:
                  t = m;
              }
              var r = m;
              m = t;
              try {
                return e();
              } finally {
                m = r;
              }
            }),
            (r.unstable_pauseExecution = function () {}),
            (r.unstable_requestPaint = function () {}),
            (r.unstable_runWithPriority = function (e, t) {
              switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  e = 3;
              }
              var r = m;
              m = e;
              try {
                return t();
              } finally {
                m = r;
              }
            }),
            (r.unstable_scheduleCallback = function (e, t, a) {
              var o = r.unstable_now();
              switch (
                ((a =
                  "object" == typeof a &&
                  null !== a &&
                  "number" == typeof (a = a.delay) &&
                  0 < a
                    ? o + a
                    : o),
                e)
              ) {
                case 1:
                  var s = -1;
                  break;
                case 2:
                  s = 250;
                  break;
                case 5:
                  s = 1073741823;
                  break;
                case 4:
                  s = 1e4;
                  break;
                default:
                  s = 5e3;
              }
              return (
                (s = a + s),
                (e = {
                  id: h++,
                  callback: t,
                  priorityLevel: e,
                  startTime: a,
                  expirationTime: s,
                  sortIndex: -1,
                }),
                a > o
                  ? ((e.sortIndex = a),
                    n(f, e),
                    null === i(d) &&
                      e === i(f) &&
                      (v ? (w(C), (C = -1)) : (v = !0), L(E, a - o)))
                  : ((e.sortIndex = s), n(d, e), y || g || ((y = !0), O(S))),
                e
              );
            }),
            (r.unstable_shouldYield = P),
            (r.unstable_wrapCallback = function (e) {
              var t = m;
              return function () {
                var r = m;
                m = t;
                try {
                  return e.apply(this, arguments);
                } finally {
                  m = r;
                }
              };
            }));
        },
        {},
      ],
      gcN4J: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          async function i(e) {
            let t = document.createElement("plasmo-csui"),
              r =
                "function" == typeof e.createShadowRoot
                  ? await e.createShadowRoot(t)
                  : t.attachShadow({ mode: "open" }),
              n = document.createElement("div");
            return (
              (n.id = "plasmo-shadow-container"),
              (n.style.zIndex = "2147483647"),
              (n.style.position = "relative"),
              r.appendChild(n),
              { shadowHost: t, shadowRoot: r, shadowContainer: n }
            );
          }
          async function a(e, t, { shadowHost: r, shadowRoot: n }, i) {
            if ("function" == typeof e.getStyle) {
              let r =
                "function" == typeof e.getSfcStyleContent
                  ? await e.getSfcStyleContent()
                  : "";
              n.prepend(await e.getStyle({ ...t, sfcStyleContent: r }));
            }
            ("function" == typeof e.getShadowHostId &&
              (r.id = await e.getShadowHostId(t)),
              "function" == typeof e.mountShadowHost
                ? await e.mountShadowHost({
                    shadowHost: r,
                    anchor: t,
                    mountState: i,
                  })
                : "inline" === t.type
                  ? t.element.insertAdjacentElement(
                      t.insertPosition || "afterend",
                      r,
                    )
                  : document.documentElement.prepend(r));
          }
          async function o(e, t, r) {
            let n = await i(e);
            return (
              r?.hostSet.add(n.shadowHost),
              r?.hostMap.set(n.shadowHost, t),
              await a(e, t, n, r),
              n.shadowContainer
            );
          }
          (n.defineInteropFlag(r),
            n.export(r, "createShadowContainer", () => o),
            n.export(r, "createAnchorObserver", () => l),
            n.export(r, "createRender", () => u));
          let s = (e) => {
            if (!e) return !1;
            let t = e.getBoundingClientRect(),
              r = globalThis.getComputedStyle(e);
            return (
              "none" !== r.display &&
              "hidden" !== r.visibility &&
              "0" !== r.opacity &&
              (0 !== t.width || 0 !== t.height || "hidden" === r.overflow) &&
              !(t.x + t.width < 0) &&
              !(t.y + t.height < 0)
            );
          };
          function l(e) {
            let t = {
                document: document || window.document,
                observer: null,
                mountInterval: null,
                isMounting: !1,
                isMutated: !1,
                hostSet: new Set(),
                hostMap: new WeakMap(),
                overlayTargetList: [],
              },
              r = (e) =>
                e?.id
                  ? !!document.getElementById(e.id)
                  : e?.getRootNode({ composed: !0 }) === t.document,
              n = "function" == typeof e.getInlineAnchor,
              i = "function" == typeof e.getOverlayAnchor,
              a = "function" == typeof e.getInlineAnchorList,
              o = "function" == typeof e.getOverlayAnchorList;
            if (!(n || i || a || o)) return null;
            async function l(u) {
              t.isMounting = !0;
              let c = new WeakSet(),
                d = null;
              for (let e of t.hostSet) {
                let n = t.hostMap.get(e),
                  i = document.contains(n?.element);
                r(e) && i
                  ? "inline" === n.type
                    ? c.add(n.element)
                    : "overlay" === n.type && (d = e)
                  : (n.root?.unmount(), e.remove(), t.hostSet.delete(e));
              }
              let [f, h, p, m] = await Promise.all([
                  n ? e.getInlineAnchor() : null,
                  a ? e.getInlineAnchorList() : null,
                  i ? e.getOverlayAnchor() : null,
                  o ? e.getOverlayAnchorList() : null,
                ]),
                g = [];
              (f &&
                (f instanceof Element
                  ? c.has(f) || g.push({ element: f, type: "inline" })
                  : f.element instanceof Element &&
                    !c.has(f.element) &&
                    g.push({
                      element: f.element,
                      type: "inline",
                      insertPosition: f.insertPosition,
                    })),
                (h?.length || 0) > 0 &&
                  h.forEach((e) => {
                    e instanceof Element && !c.has(e)
                      ? g.push({ element: e, type: "inline" })
                      : e.element instanceof Element &&
                        !c.has(e.element) &&
                        g.push({
                          element: e.element,
                          type: "inline",
                          insertPosition: e.insertPosition,
                        });
                  }));
              let y = [];
              (p && s(p) && y.push(p),
                (m?.length || 0) > 0 &&
                  m.forEach((e) => {
                    e instanceof Element && s(e) && y.push(e);
                  }),
                y.length > 0
                  ? ((t.overlayTargetList = y),
                    d ||
                      g.push({
                        element: document.documentElement,
                        type: "overlay",
                      }))
                  : (d?.remove(), t.hostSet.delete(d)),
                await Promise.all(g.map(u)),
                t.isMutated && ((t.isMutated = !1), await l(u)),
                (t.isMounting = !1));
            }
            return {
              start: (e) => {
                ((t.observer = new MutationObserver(() => {
                  if (t.isMounting) {
                    t.isMutated = !0;
                    return;
                  }
                  l(e);
                })),
                  t.observer.observe(document.documentElement, {
                    childList: !0,
                    subtree: !0,
                  }),
                  (t.mountInterval = setInterval(() => {
                    if (t.isMounting) {
                      t.isMutated = !0;
                      return;
                    }
                    l(e);
                  }, 142)));
              },
              mountState: t,
            };
          }
          let u = (e, t, r, n) => {
            let i = (t) =>
              "function" == typeof e.getRootContainer
                ? e.getRootContainer({ anchor: t, mountState: r })
                : o(e, t, r);
            return "function" == typeof e.render
              ? (r) => e.render({ anchor: r, createRootContainer: i }, ...t)
              : async (e) => {
                  let t = await i(e);
                  return n(e, t);
                };
          };
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      cHUbl: [
        function (e, t, r) {
          ((r.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (r.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.exportAll = function (e, t) {
              return (
                Object.keys(e).forEach(function (r) {
                  "default" === r ||
                    "__esModule" === r ||
                    t.hasOwnProperty(r) ||
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }),
                t
              );
            }),
            (r.export = function (e, t, r) {
              Object.defineProperty(e, t, { enumerable: !0, get: r });
            }));
        },
        {},
      ],
      e8dRS: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "OverlayCSUIContainer", () => s),
            n.export(r, "InlineCSUIContainer", () => l));
          var i = e("react/jsx-runtime"),
            a = e("react"),
            o = n.interopDefault(a);
          let s = (e) => {
              let [t, r] = (0, o.default).useState(0),
                [n, a] = (0, o.default).useState(0);
              return (
                (0, o.default).useEffect(() => {
                  if ("overlay" !== e.anchor.type) return;
                  let t = async () => {
                    let t = e.anchor.element?.getBoundingClientRect();
                    if (!t) return;
                    let n = {
                      left: t.left + window.scrollX,
                      top: t.top + window.scrollY,
                    };
                    (a(n.left), r(n.top));
                  };
                  t();
                  let n = e.watchOverlayAnchor?.(t);
                  return (
                    window.addEventListener("scroll", t),
                    window.addEventListener("resize", t),
                    () => {
                      ("function" == typeof n && n(),
                        window.removeEventListener("scroll", t),
                        window.removeEventListener("resize", t));
                    }
                  );
                }, [e.anchor.element]),
                (0, i.jsx)("div", {
                  id: e.id,
                  className: "plasmo-csui-container",
                  style: {
                    display: "flex",
                    position: "absolute",
                    top: t,
                    left: n,
                  },
                  children: e.children,
                })
              );
            },
            l = (e) =>
              (0, i.jsx)("div", {
                id: "plasmo-inline",
                className: "plasmo-csui-container",
                style: {
                  display: "flex",
                  position: "relative",
                  top: 0,
                  left: 0,
                },
                children: e.children,
              });
        },
        {
          "react/jsx-runtime": "8iOxN",
          react: "329PG",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "4kz0G": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "getLayout", () => a));
          var i = e("react");
          let a = (e) =>
            "function" == typeof e.Layout
              ? e.Layout
              : "function" == typeof e.getGlobalProvider
                ? e.getGlobalProvider()
                : i.Fragment;
        },
        {
          react: "329PG",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "3QA6e": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "config", () => d));
          var i = e("react"),
            a = e("~adapters/linkedin/http/linkedin-provider-adapter"),
            o = e("~adapters/profiles/http/profile-http-adapter"),
            s = e("~features/linkedin/use-cases/fetch-user-posts"),
            l = e("~features/linkedin/use-cases/get-profile-informations"),
            u = e("~features/profiles/use-cases/analyze"),
            c = e("~hooks/useLinkedInProfile");
          let d = {
            matches: ["https://*.linkedin.com/in/*"],
            run_at: "document_idle",
          };
          r.default = () => {
            let e = (0, i.useRef)(new Set()),
              t = (0, i.useRef)(!1),
              {
                currentProfile: r,
                currentProfileFromApi: n,
                currentProfileFromApiLoaded: d,
              } = (0, c.useLinkedInProfile)(),
              f = async (e) => {
                try {
                  if (!e) return !0;
                  {
                    let t = new Date(e.updated_at || ""),
                      r = new Date();
                    if ((r.setDate(r.getDate() - 7), t > r)) return !1;
                    return !0;
                  }
                } catch (e) {
                  return !0;
                }
              };
            return (
              (0, i.useEffect)(() => {
                if (!d || !r) return;
                let i = async () => {
                    if (d && n) {
                      let e = await f(n);
                      if (!e) return;
                    }
                    if (!t.current && r?.id && !e.current.has(r.id)) {
                      ((t.current = !0), e.current.add(r.id));
                      try {
                        let e = (0, a.makeLinkedinProviderAdapter)(),
                          t = await (0, s.fetchUserPostsUC)(e, {
                            linkedinId: r.id,
                            count: 7,
                            offset: 0,
                          }),
                          n = await (0, l.getProfileInformationsUC)(r.id, t),
                          i = (0, o.makeProfileHttpAdapter)();
                        (await (0, u.analyzeProfileUC)(i, {
                          id: n.linkedinId,
                          name: n.name,
                          headline: n.headline,
                          posts: n.posts,
                          validPostsTime: n.validPostsTime,
                          numLikes: n.numLikes,
                          photo: n.photo,
                        }),
                          window.chrome?.runtime?.sendMessage &&
                            window.chrome.runtime.sendMessage({
                              type: "PROFILE_ANALYZED",
                              data: { linkedinId: r.id, name: n.name },
                            }));
                      } catch (t) {
                        e.current.delete(r.id);
                      } finally {
                        t.current = !1;
                      }
                    }
                  },
                  c = setTimeout(i, 2e3);
                return () => {
                  clearTimeout(c);
                };
              }, [r, n, d]),
              (0, i.useEffect)(() => {
                let e = () => {
                  t.current = !1;
                };
                window.addEventListener("popstate", e);
                let r = new MutationObserver(() => {
                  window.location.href.includes("linkedin.com/in/") && e();
                });
                return (
                  r.observe(document.body, { subtree: !0, childList: !0 }),
                  () => {
                    (window.removeEventListener("popstate", e), r.disconnect());
                  }
                );
              }, []),
              null
            );
          };
        },
        {
          react: "329PG",
          "~adapters/linkedin/http/linkedin-provider-adapter": "28qip",
          "~adapters/profiles/http/profile-http-adapter": "cSRBh",
          "~features/linkedin/use-cases/fetch-user-posts": "iLnaP",
          "~features/linkedin/use-cases/get-profile-informations": "3ojAK",
          "~features/profiles/use-cases/analyze": "bG4eS",
          "~hooks/useLinkedInProfile": "hrpxD",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "28qip": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "LinkedinProviderAdapter", () => l),
            n.export(r, "makeLinkedinProviderAdapter", () => u));
          var i = e("../../../services/api"),
            a = e("./mapper"),
            o = e("~services/linkedinAPI");
          let s = (e) => !!e?.data?.data?.searchDashSharingByBlended?.elements;
          class l {
            constructor(e) {
              this.apiUrl = e;
            }
            async fetchRecentComments() {
              let e = await (0, i.api)(
                  `${this.apiUrl}/linkedin/recent-comments`,
                  "GET",
                  null,
                ),
                t = await e.json();
              if (!e.ok) throw Error(t?.message ?? "linkedin fetch failed");
              return {
                comments: t.comments ?? [],
                authorsLinkedinIds: t.authors ?? [],
              };
            }
            async fetchUserPosts(e) {
              let t = `(start:${e.offset},origin:FACETED_SEARCH,query:(flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:fromMember,value:List(${e.linkedinId})),(key:resultType,value:List(CONTENT)),(key:sortBy,value:List(date_posted))),includeFiltersInResponse:false),count:${e.count})`,
                r = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=${t}&queryId=voyagerSearchDashClusters.95320680745fac26b18ba5d78fdd267d`,
                n = await (0, o.makeApiRequest)(r, "GET");
              return n ? (0, a.mapFetchUserPostsRes)(n) : [];
            }
            async fetchUserProfiles(e) {
              let t = `(keywords:${encodeURIComponent(e.query)})`,
                r = `https://www.linkedin.com/voyager/api/graphql?variables=${t}&queryId=voyagerSearchDashSharing.4e26d0f2284baec4fa3fe92c090494cd`,
                n = await (0, o.makeApiRequest)(r, "GET");
              if (!s(n)) return [];
              let i = n.data.data.searchDashSharingByBlended.elements || [];
              return i
                .filter(a.isValidPersonProfile)
                .map(a.mapElementToSuggestion)
                .slice(0, 5);
            }
            async fetchProfilePicture(e) {
              let t = `https://www.linkedin.com/voyager/api/voyagerMessagingGraphQL/graphql?queryId=messengerConversations.f0873b936b43ed663997b215b2c28359&variables=(mailboxUrn:urn%3Ali%3Afsd_profile%3A${e.linkedinId})`,
                r = await (0, o.makeApiRequest)(t, "GET"),
                n = (0, a.findProfilePicture)(r);
              return n || null;
            }
          }
          let u = () => new l("https://api.linkhub.gg");
        },
        {
          "../../../services/api": "jYsv6",
          "./mapper": "95tY6",
          "~services/linkedinAPI": "9jP7F",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      jYsv6: [
        function (e, t, r) {
          var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (o.defineInteropFlag(r), o.export(r, "api", () => s));
          var n = e("../utils/chrome-messaging");
          let s = async (e, t, r, i = 6e4, a = !1) => {
            try {
              let opts = { method: t || "GET", headers: { "Content-Type": "application/json" } };
              if (r && (t === "POST" || t === "PUT" || t === "PATCH" || t === "DELETE")) opts.body = JSON.stringify(r);
              return await fetch(e, opts);
            } catch (err) {
              return new Response(JSON.stringify({}), { status: 500, headers: { "Content-Type": "application/json" } });
            }
          };
        },
        {
          "../utils/chrome-messaging": "gTyoa",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      gTyoa: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "isChromeAvailable", () => i),
            n.export(r, "sendChromeMessage", () => a),
            n.export(r, "sendChromeMessageNoResponse", () => o),
            n.export(r, "getAuthToken", () => s),
            n.export(r, "getUserEmail", () => l),
            n.export(r, "openOptionsPage", () => u));
          let i = () =>
              "undefined" != typeof chrome &&
              !!chrome.runtime &&
              !!chrome.runtime.sendMessage &&
              !!chrome.runtime.id,
            a = async (e) => {
              if (!i())
                return {
                  success: !1,
                  error: "Chrome runtime API non disponible",
                };
              try {
                let t = await chrome.runtime.sendMessage(e);
                if (chrome.runtime.lastError)
                  return {
                    success: !1,
                    error:
                      chrome.runtime.lastError.message ||
                      "Erreur lors de l'envoi du message",
                  };
                return t;
              } catch (e) {
                return {
                  success: !1,
                  error: e instanceof Error ? e.message : "Erreur inconnue",
                };
              }
            },
            o = (e) => {
              if (i())
                try {
                  chrome.runtime.sendMessage(e).catch((e) => {});
                } catch (e) {}
            },
            s = async () => {
              if (!i())
                try {
                  let { supabase: t } = await e("da1d41a333feeafe"),
                    {
                      data: { session: r },
                    } = await t.auth.getSession();
                  if (r?.access_token) return r.access_token;
                  return null;
                } catch (e) {
                  return null;
                }
              try {
                let e = await a({ type: "GET_TOKEN" });
                if (e.success && e.data?.token) return e.data.token;
                return (e.error, null);
              } catch (e) {
                return null;
              }
            },
            l = async () => {
              try {
                let e = await a({ type: "GET_USER_EMAIL" });
                if (e.success && e.data?.email) return e.data.email;
                return (e.error, null);
              } catch (e) {
                return null;
              }
            },
            u = async () => {
              try {
                let e = await a({ type: "OPEN_OPTIONS" });
                return (e.success || e.error, e.success || !1);
              } catch (e) {
                return !1;
              }
            };
        },
        {
          da1d41a333feeafe: "1UxmQ",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "1UxmQ": [
        function (e, t, r) {
          t.exports = e("699bd35a663aed40")(
            e("cecd3f804863bb0c").getBundleURL("jHkRA") +
              e("e450af5fff052dbf").resolve("fvuH8"),
          ).then(() => t.bundle.root("iavfN"));
        },
        {
          "699bd35a663aed40": "3D0UT",
          cecd3f804863bb0c: "6haDs",
          e450af5fff052dbf: "amLA4",
        },
      ],
      "3D0UT": [
        function (e, t, r) {
          var n = e("83e44af0887950b5");
          t.exports = n(function (e) {
            return new Promise(function (t, r) {
              if (
                []
                  .concat(document.getElementsByTagName("script"))
                  .some(function (t) {
                    return t.src === e;
                  })
              ) {
                t();
                return;
              }
              var n = document.createElement("link");
              ((n.href = e),
                (n.rel = "preload"),
                (n.as = "script"),
                document.head.appendChild(n));
              var i = document.createElement("script");
              ((i.async = !0),
                (i.type = "text/javascript"),
                (i.src = e),
                (i.onerror = function (t) {
                  var n = TypeError(
                    "Failed to fetch dynamically imported module: "
                      .concat(e, ". Error: ")
                      .concat(t.message),
                  );
                  ((i.onerror = i.onload = null), i.remove(), r(n));
                }),
                (i.onload = function () {
                  ((i.onerror = i.onload = null), t());
                }),
                document.getElementsByTagName("head")[0].appendChild(i));
            });
          });
        },
        { "83e44af0887950b5": "lbXpP" },
      ],
      lbXpP: [
        function (e, t, r) {
          var n = {},
            i = {},
            a = {};
          t.exports = function (e, t) {
            return function (r) {
              var o = (function (e) {
                switch (e) {
                  case "preload":
                    return i;
                  case "prefetch":
                    return a;
                  default:
                    return n;
                }
              })(t);
              return o[r]
                ? o[r]
                : (o[r] = e.apply(null, arguments).catch(function (e) {
                    throw (delete o[r], e);
                  }));
            };
          };
        },
        {},
      ],
      "6haDs": [
        function (e, t, r) {
          var n = {};
          function i(e) {
            return (
              ("" + e).replace(
                /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
                "$1",
              ) + "/"
            );
          }
          ((r.getBundleURL = function (e) {
            var t = n[e];
            return (
              t ||
                ((t = (function () {
                  try {
                    throw Error();
                  } catch (t) {
                    var e = ("" + t.stack).match(
                      /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,
                    );
                    if (e) return i(e[2]);
                  }
                  return "/";
                })()),
                (n[e] = t)),
              t
            );
          }),
            (r.getBaseURL = i),
            (r.getOrigin = function (e) {
              var t = ("" + e).match(
                /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/,
              );
              if (!t) throw Error("Origin not found");
              return t[0];
            }));
        },
        {},
      ],
      "95tY6": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "extractProfilePicture", () => o),
            n.export(r, "isValidPersonProfile", () => s),
            n.export(r, "mapElementToSuggestion", () => l),
            n.export(r, "mapFetchUserPostsRes", () => u),
            n.export(r, "findProfilePicture", () => c));
          var i = e("./utilities-adapter");
          let a = new i.UtilitiesAdapter(),
            o = (e) => {
              let t = e.image?.attributes?.[0]?.detailData;
              if (!t?.nonEntityProfilePicture?.vectorImage) return "";
              let r = t.nonEntityProfilePicture.vectorImage,
                n = r.artifacts?.[0];
              return n ? `${r.rootUrl}${n.fileIdentifyingUrlPathSegment}` : "";
            },
            s = (e) =>
              "com.linkedin.voyager.dash.search.typeahead.TypeaheadViewModel" ===
                e.$type &&
              !!e.title?.text &&
              !!e.subtitle?.text &&
              !!e.trackingUrn &&
              !e.trackingUrn?.includes("organization") &&
              "NON_INTERACTIVE_BANNER" !== e.renderStyle,
            l = (e) => {
              let t = e.target?.["*profile"] || "";
              return {
                id: e.trackingUrn || "",
                text: e.subtitle?.text || "",
                entityUrn: t,
                displayName: e.title?.text || "Nom inconnu",
                profilePicture: o(e),
                navigationUrl: e.navigationUrl || "",
                linkedinId: t ? a.extractLinkedInId(t) : "",
              };
            };
          function u(e) {
            let t = e.included.filter(
                (e) =>
                  e?.$type === "com.linkedin.videocontent.VideoPlayMetadata",
              ),
              r = e.included.filter(
                (e) =>
                  e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                  e?.["*socialDetail"],
              ),
              n = e.included.filter(
                (e) =>
                  e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                  !e?.["*socialDetail"],
              ),
              i = e.included.filter(
                (e) =>
                  e?.$type ===
                  "com.linkedin.voyager.dash.feed.SocialActivityCounts",
              ),
              a = [],
              o = r
                .map((e) => {
                  let r, o, s;
                  let l = e["*socialDetail"] ?? "",
                    u = i.find(
                      (e) =>
                        e.urn && l?.includes(e.urn.split(":").reverse()[0]),
                    ),
                    c = e.resharedUpdate;
                  if (
                    (c &&
                      (r = n.find((e) => e.entityUrn === c)) &&
                      a.push(r.entityUrn),
                    e.content?.imageComponent?.images?.[0]?.attributes?.[0]
                      ?.detailData?.vectorImage?.rootUrl &&
                      (o =
                        e.content.imageComponent.images[0].attributes[0]
                          .detailData.vectorImage.rootUrl),
                    e.content?.linkedInVideoComponent)
                  ) {
                    let r =
                      e.content.linkedInVideoComponent["*videoPlayMetadata"];
                    t && r && (s = t.find((e) => e.entityUrn === r));
                  }
                  return {
                    ...e,
                    "*socialDetail": l,
                    repost: r,
                    urn: u?.urn || e.urn || "",
                    liked: u?.liked || !1,
                    numLikes: u?.numLikes || 0,
                    numComments: u?.numComments || 0,
                    image: o,
                    videoComponent: s,
                  };
                })
                .filter((e) => !!e?.commentary?.text?.text);
            return o;
          }
          let c = (e) => {
            let t = e.included.find(
              (e) => e.participantType?.member.distance === "SELF",
            );
            if (!t) return null;
            let r = t.participantType?.member.profilePicture;
            if (!r) return null;
            let n = r.artifacts?.sort((e, t) => t.width - e.width)[0];
            return r.rootUrl + (n?.fileIdentifyingUrlPathSegment || "");
          };
        },
        {
          "./utilities-adapter": "iVEGe",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      iVEGe: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "UtilitiesAdapter", () => i));
          class i {
            extractLinkedInId(e) {
              if (!e) return "";
              if (e.includes("urn:li:fsd_profile:"))
                return e.replace(/^.*urn:li:fsd_profile:/, "");
              if (e.includes("%3A")) {
                let t = decodeURIComponent(e);
                return t.includes("urn:li:fsd_profile:")
                  ? t.replace(/^.*urn:li:fsd_profile:/, "")
                  : t.split(":").pop() || "";
              }
              return e.split(":").pop() || "";
            }
            organizeCommentsHierarchy(e) {
              let t = e.filter((e) => !e.parentComment),
                r = e.filter((e) => e.parentComment),
                n = new Map();
              r.forEach((e) => {
                e.parentComment &&
                  (n.has(e.parentComment) || n.set(e.parentComment, []),
                  n.get(e.parentComment).push(e));
              });
              let i = t.map((e) => {
                  let t = [],
                    r = [e.entityUrn, e.urn];
                  for (let e of r)
                    if (e && n.has(e)) {
                      t = n.get(e);
                      break;
                    }
                  return {
                    ...e,
                    replies: t.sort((e, t) => e.createdAt - t.createdAt),
                    replyCount: t.length,
                  };
                }),
                a = i.sort((e, t) => t.createdAt - e.createdAt);
              return a;
            }
            formatRelativeTime(e) {
              let t = Date.now(),
                r = Math.floor((t - e) / 1e3);
              if (r < 60) return "\xc0 l'instant";
              let n = Math.floor(r / 60);
              if (n < 60) return `Il y a ${n} minute${n > 1 ? "s" : ""}`;
              let i = Math.floor(n / 60);
              if (i < 24) return `Il y a ${i} heure${i > 1 ? "s" : ""}`;
              let a = Math.floor(i / 24);
              if (a < 7) return `Il y a ${a} jour${a > 1 ? "s" : ""}`;
              let o = Math.floor(a / 7);
              if (o < 4) return `Il y a ${o} semaine${o > 1 ? "s" : ""}`;
              let s = new Date(e);
              return s.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
              });
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "9jP7F": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "makeApiRequest", () => p),
            n.export(r, "likePost", () => m),
            n.export(r, "getFullHdPhoto", () => g),
            n.export(r, "likeComment", () => y),
            n.export(r, "unlikePost", () => v),
            n.export(r, "unlikeComment", () => b),
            n.export(r, "toggleLike", () => w),
            n.export(r, "toggleCommentLike", () => k),
            n.export(r, "fetchDotPost", () => _),
            n.export(r, "savePost", () => E),
            n.export(r, "unsavePost", () => S),
            n.export(r, "extractActivityId", () => x),
            n.export(r, "deleteComment", () => T),
            n.export(r, "fetchPosts", () => C),
            n.export(r, "fetchFeedPosts", () => A),
            n.export(r, "fetchUserPosts", () => I),
            n.export(r, "fetchUserComments", () => P),
            n.export(r, "generateAIComment", () => j),
            n.export(r, "generateThreeAIComments", () => R),
            n.export(r, "formatRelativeTime", () => U),
            n.export(r, "hasPoll", () => O),
            n.export(r, "extractPollData", () => L));
          var i = e("../core/supabase"),
            a = e("../stores/useNotificationStore"),
            o = e("../utils/linkedinDateParser"),
            s = e("~adapters/linkedin/http/data-fetching-adapter"),
            l = e("~adapters/linkedin/http/linkedin-provider-adapter"),
            u = e("~adapters/linkedin/http/utilities-adapter"),
            c = e("~features/linkedin/use-cases/fetch-profile-picture"),
            d = e("~utils/chrome-messaging");
          let f = {
            accept: "application/vnd.linkedin.normalized+json+2.1",
            "Content-Type": "application/json",
            "X-Li-Lang": "fr_FR",
            "X-Li-Track":
              '{"clientVersion":"1.13.33165","mpVersion":"1.13.33165","osName":"web","timezoneOffset":2,"timezone":"Europe/Paris","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1,"displayWidth":1920,"displayHeight":1080}',
          };
          function h() {
            let e = document.cookie
              .split("; ")
              .find((e) => e.startsWith("JSESSIONID="))
              ?.split("=")[1]
              .replaceAll('"', "");
            return e || null;
          }
          async function p(e, t, r = null) {
            try {
              let n = h();
              if (!n) throw Error("Session invalide (CSRF Token manquant).");
              let i = { ...f, "Csrf-Token": n },
                a = await fetch(e, {
                  method: t,
                  headers: i,
                  body: r ? JSON.stringify(r) : null,
                  credentials: "include",
                });
              if (!a.ok) throw Error(`Erreur API: ${a.status} ${a.statusText}`);
              try {
                let e = await a.json();
                return e;
              } catch (e) {
                return !0;
              }
            } catch (e) {
              throw e;
            }
          }
          async function m(e, t = "LIKE") {
            await p(
              "https://www.linkedin.com/voyager/api/graphql?action=execute&queryId=voyagerSocialDashReactions.b731222600772fd42464c0fe19bd722b",
              "POST",
              {
                includeWebMetadata: !0,
                queryId:
                  "voyagerSocialDashReactions.b731222600772fd42464c0fe19bd722b",
                variables: { entity: { reactionType: t }, threadUrn: e },
              },
            );
          }
          async function g() {
            try {
              let {
                data: { session: e },
              } = await (0, i.supabase).auth.getSession();
              if (!e?.access_token)
                throw Error("Session Supabase non trouv\xe9e");
              let t = await fetch("https://api.linkhub.gg/accounts", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${e.access_token}`,
                },
              });
              if (!t.ok) throw Error(`Erreur API: ${t.status}`);
              let r = await t.json(),
                n = r?.linkedin_id;
              if (!n) throw Error("linkedin_id manquant dans accountData");
              let a = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3A${n})&queryId=voyagerIdentityDashProfileCards.4d4cc0bd80695abbb83bfbbae44b84c9`;
              await p(a, "GET");
              let o = await (0, c.fetchProfilePictureUC)(
                new l.LinkedinProviderAdapter("https://api.linkhub.gg"),
                { linkedinId: n },
              );
              if (!o) throw Error("Photo HD non trouv\xe9e");
              return o;
            } catch (e) {
              throw e;
            }
          }
          async function y(e) {
            await p(
              "https://www.linkedin.com/voyager/api/graphql?action=execute&queryId=voyagerSocialDashReactions.b731222600772fd42464c0fe19bd722b",
              "POST",
              {
                includeWebMetadata: !0,
                queryId:
                  "voyagerSocialDashReactions.b731222600772fd42464c0fe19bd722b",
                variables: { entity: { reactionType: "LIKE" }, threadUrn: e },
              },
            );
          }
          async function v(e) {
            await p(
              "https://www.linkedin.com/voyager/api/graphql?action=execute&queryId=voyagerSocialDashReactions.f68b48ae5bc0085d7a45c7003b772a39",
              "POST",
              {
                includeWebMetadata: !0,
                queryId:
                  "voyagerSocialDashReactions.f68b48ae5bc0085d7a45c7003b772a39",
                variables: { threadUrn: e },
              },
            );
          }
          async function b(e) {
            await p(
              "https://www.linkedin.com/voyager/api/graphql?action=execute&queryId=voyagerSocialDashReactions.f68b48ae5bc0085d7a45c7003b772a39",
              "POST",
              {
                includeWebMetadata: !0,
                queryId:
                  "voyagerSocialDashReactions.f68b48ae5bc0085d7a45c7003b772a39",
                variables: { entity: { reactionType: "LIKE" }, threadUrn: e },
              },
            );
          }
          async function w(e, t, r, n) {
            t
              ? (await v(e),
                (0, a.showNotification).success(
                  n("unLikeSuccess", {
                    reaction: n(r?.toLowerCase() || "like"),
                  }),
                ))
              : (await m(e, r),
                (0, a.showNotification).success(
                  n("likeSuccess", { reaction: n(r?.toLowerCase() || "like") }),
                ));
          }
          async function k(e, t) {
            t ? await b(e) : await y(e);
          }
          async function _(e) {
            try {
              let t =
                  "https://www.linkedin.com/voyager/api/graphql?variables=(updateActionsUrn:" +
                  encodeURIComponent(e)
                    .replaceAll(")", "%29")
                    .replaceAll("(", "%28") +
                  ")&queryId=voyagerFeedDashUpdateActions.e826a55733c1fd7da926544b655f05c0&includeWebMetadata=true",
                r = await p(t, "GET");
              return r;
            } catch (e) {
              return null;
            }
          }
          async function E(e) {
            let t = e.match(/urn:li:activity:(\d+)/),
              r = t ? t[1] : null;
            return p(
              "https://www.linkedin.com/voyager/api/voyagerFeedDashSaveStates/urn%3Ali%3Afsd_saveState%3A(SAVE%2Curn%3Ali%3Aactivity%3A" +
                r +
                ")",
              "POST",
              { patch: { $set: { saved: !0 } } },
            );
          }
          async function S(e) {
            let t = e.match(/urn:li:activity:(\d+)/),
              r = t ? t[1] : null;
            return p(
              "https://www.linkedin.com/voyager/api/voyagerFeedDashSaveStates/urn%3Ali%3Afsd_saveState%3A(SAVE%2Curn%3Ali%3Aactivity%3A" +
                r +
                ")",
              "POST",
              { patch: { $set: { saved: !1 } } },
            );
          }
          function x(e) {
            let t = e.match(/urn:li:activity:(.+)$/);
            return t ? t[1] : null;
          }
          async function T({ commentId: e, urn: t }) {
            try {
              let r = t.replace(/:/g, "%3A"),
                n = `https://www.linkedin.com/voyager/api/voyagerSocialDashNormComments/urn%3Ali%3Afsd_comment%3A(${e}%2C${r})`;
              await p(n, "DELETE");
              try {
                let t = await (0, d.getAuthToken)(),
                  r = await fetch("https://api.linkhub.gg/comments", {
                    method: "DELETE",
                    headers: {
                      Authorization: `Bearer ${t}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ commentId: e }),
                  });
                r.ok;
              } catch (e) {}
              return;
            } catch (e) {
              throw e;
            }
          }
          async function C(e = 3, t = 0, r = []) {
            try {
              let n = new URL(window.location.href),
                i = decodeURI(n.searchParams.get("fromMember") || "");
              if (
                !(i = i
                  ?.replaceAll("[", "")
                  .replaceAll("]", "")
                  .replaceAll(" ", "")
                  .replaceAll('"', ""))
              )
                return [];
              let a = `(start:${t},origin:FACETED_SEARCH,query:(flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:fromMember,value:List(${i})),(key:resultType,value:List(CONTENT)),(key:sortBy,value:List(date_posted))),includeFiltersInResponse:false),count:${e})`,
                l = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=${a}&queryId=voyagerSearchDashClusters.95320680745fac26b18ba5d78fdd267d`,
                u = await p(l, "GET");
              if (!u || !u.included) return [];
              let c = u.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.videocontent.VideoPlayMetadata",
                ),
                d = u.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    e?.["*socialDetail"],
                ),
                f = u.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    !e?.["*socialDetail"],
                ),
                h = u.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                m = [],
                g = d
                  .filter((e) => !r.includes(e.metadata.backendUrn))
                  .map((e) => {
                    let t;
                    let r = e["*socialDetail"],
                      n = h.find(
                        (e) =>
                          e?.urn && r?.includes(e.urn.split(":").reverse()[0]),
                      ),
                      i = e["*resharedUpdate"];
                    if (i) {
                      let t = f.find((e) => e.entityUrn === i);
                      ((e.repost = t), m.push(t.entityUrn));
                    }
                    let a = null;
                    e.content?.imageComponent?.images?.[0]?.attributes?.[0]
                      ?.detailData?.vectorImage?.rootUrl &&
                      (a =
                        e.content.imageComponent.images[0].attributes[0]
                          .detailData.vectorImage.rootUrl +
                        e.content.imageComponent.images[0].attributes[0].detailData.vectorImage.artifacts.sort(
                          (e, t) => t.width - e.width,
                        )[0].fileIdentifyingUrlPathSegment);
                    let o = null;
                    if (e.content?.linkedInVideoComponent) {
                      let t =
                        e.content.linkedInVideoComponent["*videoPlayMetadata"];
                      c && t && (o = c.find((e) => e.entityUrn === t));
                    }
                    return (
                      e.content?.pollComponent &&
                        (t = {
                          question: e.content.pollComponent.question,
                          pollOptions:
                            e.content.pollComponent.pollOptions || [],
                          multiSelect:
                            e.content.pollComponent.multiSelect || !1,
                          creatorView:
                            e.content.pollComponent.creatorView || !1,
                          showPollSummaryInfo:
                            e.content.pollComponent.showPollSummaryInfo || !1,
                          "*pollSummary":
                            e.content.pollComponent["*pollSummary"],
                          instructions: e.content.pollComponent.instructions,
                          uniqueVotersCountNavigationLink:
                            e.content.pollComponent
                              .uniqueVotersCountNavigationLink,
                          voteCompletionMessage:
                            e.content.pollComponent.voteCompletionMessage,
                          visibilityInfo:
                            e.content.pollComponent.visibilityInfo,
                          submitVoteButton:
                            e.content.pollComponent.submitVoteButton,
                        }),
                      {
                        ...e,
                        actor: {
                          ...e.actor,
                          linkedin_id:
                            (0, s.extractLinkedInId)(
                              e.actor?.name?.attributesV2[0]?.detailData?.[
                                "*profileFullName"
                              ],
                            ) || "",
                        },
                        urn: n?.urn || e.urn,
                        liked: n?.liked || !1,
                        numLikes: n?.numLikes || 0,
                        numComments: n?.numComments || 0,
                        image: a || void 0,
                        videoComponent: o,
                        poll: t,
                      }
                    );
                  })
                  .filter((e) => !!e.commentary?.text?.text),
                y = (0, o.sortPostsByLinkedInTime)(g);
              return y;
            } catch (e) {
              return [];
            }
          }
          async function A(e = 10, t = "RELEVANCE", r = []) {
            try {
              let n = h();
              if (!n) throw Error("Session invalide (CSRF Token manquant).");
              let i = "";
              try {
                let e = document.querySelector('meta[name="pageInstance"]');
                if (!(i = e?.getAttribute("content") || "")) {
                  let e = document.querySelectorAll("script");
                  for (let t of e) {
                    let e = t.textContent || "",
                      r = e.match(/x-li-page-instance["\s:]+([^"}\s]+)/);
                    if (r) {
                      i = r[1];
                      break;
                    }
                  }
                }
              } catch (e) {}
              let a = `(count:${e},sortOrder:${t})`,
                l = `https://www.linkedin.com/voyager/api/graphql?variables=${a}&queryId=voyagerFeedDashMainFeed.923020905727c01516495a0ac90bb475`,
                u = {
                  ...f,
                  "Csrf-Token": n,
                  "x-li-page-instance": i,
                  "x-li-pem-metadata": "Voyager - Feed=recent-feed-updates",
                  "x-restli-protocol-version": "2.0.0",
                },
                c = await fetch(l, {
                  method: "GET",
                  headers: u,
                  credentials: "include",
                });
              if (!c.ok) throw Error(`Erreur API: ${c.status} ${c.statusText}`);
              let d = await c.json();
              if (!d || !d.included) return [];
              let p = d.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.videocontent.VideoPlayMetadata",
                ),
                m = d.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    e?.["*socialDetail"],
                ),
                g = d.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    !e?.["*socialDetail"],
                ),
                y = d.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                v = m
                  .filter((e) => !r.includes(e.metadata.backendUrn))
                  .map((e) => {
                    let t;
                    let r = e["*socialDetail"],
                      n = y.find(
                        (e) =>
                          e?.urn && r?.includes(e.urn.split(":").reverse()[0]),
                      ),
                      i = e["*resharedUpdate"];
                    if (i) {
                      let t = g.find((e) => e.entityUrn === i);
                      e.repost = t;
                    }
                    let a = null;
                    e.content?.imageComponent?.images?.[0]?.attributes?.[0]
                      ?.detailData?.vectorImage?.rootUrl &&
                      (a =
                        e.content.imageComponent.images[0].attributes[0]
                          .detailData.vectorImage.rootUrl +
                        e.content.imageComponent.images[0].attributes[0].detailData.vectorImage.artifacts.sort(
                          (e, t) => t.width - e.width,
                        )[0].fileIdentifyingUrlPathSegment);
                    let o = null;
                    if (e.content?.linkedInVideoComponent) {
                      let t =
                        e.content.linkedInVideoComponent["*videoPlayMetadata"];
                      p && t && (o = p.find((e) => e.entityUrn === t));
                    }
                    return (
                      e.content?.pollComponent &&
                        (t = {
                          question: e.content.pollComponent.question,
                          pollOptions:
                            e.content.pollComponent.pollOptions || [],
                          multiSelect:
                            e.content.pollComponent.multiSelect || !1,
                          creatorView:
                            e.content.pollComponent.creatorView || !1,
                          showPollSummaryInfo:
                            e.content.pollComponent.showPollSummaryInfo || !1,
                          "*pollSummary":
                            e.content.pollComponent["*pollSummary"],
                          instructions: e.content.pollComponent.instructions,
                          uniqueVotersCountNavigationLink:
                            e.content.pollComponent
                              .uniqueVotersCountNavigationLink,
                          voteCompletionMessage:
                            e.content.pollComponent.voteCompletionMessage,
                          visibilityInfo:
                            e.content.pollComponent.visibilityInfo,
                          submitVoteButton:
                            e.content.pollComponent.submitVoteButton,
                        }),
                      {
                        ...e,
                        actor: {
                          ...e.actor,
                          linkedin_id:
                            (0, s.extractLinkedInId)(
                              e.actor?.name?.attributesV2[0]?.detailData?.[
                                "*profileFullName"
                              ],
                            ) || "",
                        },
                        urn: n?.urn || e.urn,
                        liked: n?.liked || !1,
                        numLikes: n?.numLikes || 0,
                        numComments: n?.numComments || 0,
                        image: a || void 0,
                        videoComponent: o,
                        poll: t,
                      }
                    );
                  })
                  .filter((e) => !!e.commentary?.text?.text),
                b = (0, o.sortPostsByLinkedInTime)(v);
              return b;
            } catch (e) {
              return [];
            }
          }
          async function I(e, t = 3, r = 0) {
            try {
              let n = `(start:${r},origin:FACETED_SEARCH,query:(flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:fromMember,value:List(${e})),(key:resultType,value:List(CONTENT)),(key:sortBy,value:List(date_posted))),includeFiltersInResponse:false),count:${t})`,
                i = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=${n}&queryId=voyagerSearchDashClusters.95320680745fac26b18ba5d78fdd267d`,
                a = await p(i, "GET");
              if (!a || !a.included) return [];
              let o = a.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.videocontent.VideoPlayMetadata",
                ),
                s = a.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    e?.["*socialDetail"],
                ),
                l = a.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.feed.Update" &&
                    !e?.["*socialDetail"],
                ),
                u = a.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                c = [],
                d = s
                  .map((e) => {
                    let t, r;
                    let n = e["*socialDetail"],
                      i = u.find(
                        (e) =>
                          e?.urn && n?.includes(e.urn.split(":").reverse()[0]),
                      ),
                      a = e["*resharedUpdate"];
                    if (a) {
                      let t = l.find((e) => e.entityUrn === a);
                      ((e.repost = t), c.push(t.entityUrn));
                    }
                    if (
                      (e.content?.imageComponent?.images?.[0]?.attributes?.[0]
                        ?.detailData?.vectorImage?.rootUrl &&
                        (t =
                          e.content.imageComponent.images[0].attributes[0]
                            .detailData.vectorImage.rootUrl),
                      e.content?.linkedInVideoComponent)
                    ) {
                      let t =
                        e.content.linkedInVideoComponent["*videoPlayMetadata"];
                      o && t && (r = o.find((e) => e.entityUrn === t));
                    }
                    return {
                      ...e,
                      urn: i?.urn || e.urn,
                      liked: i?.liked || !1,
                      numLikes: i?.numLikes || 0,
                      numComments: i?.numComments || 0,
                      image: t,
                      videoComponent: r,
                    };
                  })
                  .filter((e) => !!e.commentary?.text?.text);
              return d;
            } catch (e) {
              return [];
            }
          }
          async function P(e = 20, t) {
            try {
              let r,
                n = "",
                {
                  data: { session: a },
                } = await (0, i.supabase).auth.getSession();
              if (!a?.access_token)
                throw Error("Session Supabase non trouv\xe9e");
              let o = await fetch("https://api.linkhub.gg/accounts", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${a?.access_token}`,
                },
              });
              if (!o.ok) throw Error(`Erreur API: ${o.status}`);
              let s = await o.json();
              if (!(n = s.linkedin_id))
                throw Error("LinkedIn ID non trouv\xe9");
              let l = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(count:20,start:${e},${t ? `paginationToken:${encodeURIComponent(t)},` : ""}profileUrn:urn%3Ali%3Afsd_profile%3A${n})&queryId=voyagerFeedDashProfileUpdates.9192efd79cf9b67ea811ad082bf47617`;
              Date.now();
              let c = await p(l, "GET");
              Date.now();
              try {
                r =
                  c?.data?.data?.feedDashProfileUpdatesByMemberComments
                    ?.metadata?.paginationToken;
              } catch (e) {}
              let d = c.included.filter(
                  (e) => e?.$type === "com.linkedin.voyager.dash.feed.Update",
                ),
                f = c.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.social.Comment",
                ),
                h = c.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.social.SocialDetail",
                ),
                m = c.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                );
              c.included.filter(
                (e) =>
                  e?.$type ===
                  "com.linkedin.voyager.dash.header.image.ImageViewModel",
              );
              let g = d.map((e, t) => {
                let r = e.commentary?.text?.text || "",
                  n = e?.actor?.name?.accessibilityText || "",
                  i = `${e?.actor?.image?.attributes?.[0]?.detailData?.nonEntityProfilePicture?.vectorImage?.rootUrl}${e?.actor?.image?.attributes?.[0]?.detailData?.nonEntityProfilePicture?.vectorImage?.artifacts?.[0]?.fileIdentifyingUrlPathSegment}`,
                  a = e?.actor?.navigationContext?.actionTarget || "",
                  o = e?.actor?.description?.accessibilityText || "",
                  s = e?.actor?.$type || "";
                if (e["*socialDetail"]) {
                  let t = h.find((t) => t.entityUrn === e["*socialDetail"]);
                  if (t && t["*totalSocialActivityCounts"]) {
                    let e = m.find(
                      (e) => e.entityUrn === t["*totalSocialActivityCounts"],
                    );
                    e &&
                      (e.numImpressions,
                      e.numLikes,
                      e.numComments,
                      e.numShares);
                  }
                }
                let l = f
                  .filter((t) =>
                    e["*highlightedComments"]?.includes(t.entityUrn),
                  )
                  .map((t) => {
                    let l = t.entityUrn.match(/urn:li:fsd_comment:\((\d+),/),
                      c = l ? l[1] : t.entityUrn,
                      d = t.commentary?.text?.text || "",
                      f = 0,
                      h = 0,
                      p = 0,
                      g = 0,
                      y = m.find((e) => e.entityUrn && e.entityUrn.includes(c));
                    y &&
                      ((f = y.numImpressions || 0),
                      (h = y.numLikes || 0),
                      (p = y.numShares || 0),
                      (g = y.numComments || 0));
                    let v = t.permalink || "",
                      b = t.entityUrn.match(
                        /urn:li:fsd_comment:\((\d+),(urn:li:activity:\d+)\)/,
                      ),
                      w = b ? b[2] : "",
                      k = new u.UtilitiesAdapter();
                    return {
                      id: c,
                      author: {
                        name: n,
                        photo: i,
                        profileUrl: a,
                        description: o,
                        type: s,
                        linkedinId:
                          k.extractLinkedInId(
                            e.actor?.name?.attributesV2[0].detailData[
                              "*profileFullName"
                            ],
                          ) || "",
                      },
                      createdAt: t.createdAt?.toString() || "",
                      post_text: r,
                      generated_comment: "",
                      post_url: v,
                      post_urn: w,
                      commentImpressions: f,
                      commentLikes: h,
                      commentShares: p,
                      commentReplies: g,
                      commentText: d,
                    };
                  });
                return l;
              });
              return { comments: g.flat(), nextPaginationToken: r };
            } catch (e) {
              return { comments: [], nextPaginationToken: void 0 };
            }
          }
          async function j(t, r, n) {
            try {
              let i = "https://api.linkhub.gg";
              if (!i) return "Erreur de chargement...";
              let { api: a } = await e("b898de2377330830"),
                o = await a(i + "/comments/generate", "POST", {
                  post_text: t,
                  suggestion_id: r,
                  post_image: n,
                });
              if (!o.ok)
                throw Error(
                  `Erreur lors de la g\xe9n\xe9ration du commentaire IA: ${o.status}`,
                );
              let s = await o.json();
              return s.comment || "Erreur de chargement...";
            } catch (e) {
              return "Erreur de chargement...";
            }
          }
          async function R(t, r, n, i, a, o, s, l) {
            try {
              let u = "https://api.linkhub.gg";
              if (!u) return "Erreur de chargement...";
              let { api: c } = await e("b898de2377330830"),
                d = {
                  post_text: t,
                  post_image: r,
                  is_reply_to_comment: n ?? !1,
                };
              (l && (d.comment_text = l),
                i && (d.author = i),
                a && (d.stats = a),
                o && (d.post_urn = o),
                s && (d.published_at = s));
              let f = await c(u + "/comments/generate-thinking", "POST", d);
              if (!f.ok)
                throw Error(
                  `Erreur lors de la g\xe9n\xe9ration du commentaire IA: ${f.status}`,
                );
              let h = await f.json();
              if (
                !h ||
                "object" != typeof h ||
                !h.comment_left ||
                !h.comment_center ||
                !h.comment_right
              )
                throw Error("R\xe9ponse invalide du serveur");
              return h;
            } catch (e) {
              throw e;
            }
          }
          let U = (e) => {
            let t = Date.now(),
              r = Math.floor((t - e) / 1e3);
            if (r < 60) return "\xc0 l'instant";
            let n = Math.floor(r / 60);
            if (n < 60) return `Il y a ${n} minute${n > 1 ? "s" : ""}`;
            let i = Math.floor(n / 60);
            if (i < 24) return `Il y a ${i} heure${i > 1 ? "s" : ""}`;
            let a = Math.floor(i / 24);
            if (a < 7) return `Il y a ${a} jour${a > 1 ? "s" : ""}`;
            let o = Math.floor(a / 7);
            if (o < 4) return `Il y a ${o} semaine${o > 1 ? "s" : ""}`;
            let s = new Date(e);
            return s.toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
            });
          };
          function O(e) {
            return null !== e.poll && void 0 !== e.poll;
          }
          function L(e) {
            return e.poll
              ? {
                  question: e.poll.question?.text || "",
                  options:
                    e.poll.pollOptions?.map((e) => ({
                      text: e.option?.text || "",
                      urn: e.pollOptionUrn,
                    })) || [],
                  multiSelect: e.poll.multiSelect,
                  pollSummaryUrn: e.poll["*pollSummary"],
                  totalVoters: e.poll.showPollSummaryInfo,
                }
              : null;
          }
        },
        {
          "../core/supabase": "iavfN",
          "../stores/useNotificationStore": "1nJhd",
          "../utils/linkedinDateParser": "5ZoJX",
          "~adapters/linkedin/http/data-fetching-adapter": "cHhLd",
          "~adapters/linkedin/http/linkedin-provider-adapter": "28qip",
          "~adapters/linkedin/http/utilities-adapter": "iVEGe",
          "~features/linkedin/use-cases/fetch-profile-picture": "hzGtK",
          "~utils/chrome-messaging": "gTyoa",
          b898de2377330830: "jYsv6",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      iavfN: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "supabase", () => m),
            n.export(r, "AUTH_EVENT_KEY", () => u),
            n.export(r, "STORAGE_KEY", () => l));
          var i = e("@supabase/supabase-js"),
            a = e("@plasmohq/storage");
          let o =
              false,
            s = null,
            l = "supabase.auth.token",
            u = "linkhub-auth-state-change",
            c = async () => {
              try {
                let e = null;
                if (
                  (o && s
                    ? (e = await s.get(l))
                    : "undefined" != typeof localStorage &&
                      (e = localStorage.getItem(l)),
                  !e &&
                    "undefined" != typeof window &&
                    window.location.hash &&
                    window.location.hash.includes("access_token"))
                ) {
                  let e = new URLSearchParams(
                      window.location.hash.substring(1),
                    ),
                    t = e.get("access_token"),
                    r = e.get("refresh_token"),
                    n = e.get("expires_in");
                  if (t) {
                    let e = {
                        access_token: t,
                        refresh_token: r || "",
                        expires_at: n
                          ? Math.floor(Date.now() / 1e3) + parseInt(n)
                          : 0,
                        token_type: "bearer",
                        user: null,
                      },
                      i = JSON.stringify({
                        currentSession: e,
                        expiresAt: 1e3 * e.expires_at,
                      });
                    (o && s
                      ? await s.set(l, i)
                      : "undefined" != typeof localStorage &&
                        localStorage.setItem(l, i),
                      window.history.replaceState(
                        null,
                        "",
                        window.location.pathname,
                      ));
                  }
                }
              } catch (e) {}
            },
            d = {
              getItem: async (e) => {
                try {
                  if (!o) return localStorage.getItem(e);
                  let t = await s.get(e);
                  if (
                    !t &&
                    e === l &&
                    chrome &&
                    chrome.storage &&
                    chrome.storage.local
                  )
                    return new Promise((t) => {
                      chrome.storage.local.get([e], (r) => {
                        t(r[e] || null);
                      });
                    });
                  return t || null;
                } catch (t) {
                  if ("undefined" != typeof localStorage)
                    return localStorage.getItem(e);
                  return null;
                }
              },
              setItem: async (e, t) => {
                try {
                  if (!o) {
                    localStorage.setItem(e, t);
                    return;
                  }
                  await s.set(e, t);
                } catch (r) {
                  "undefined" != typeof localStorage &&
                    localStorage.setItem(e, t);
                }
              },
              removeItem: async (e) => {
                try {
                  if (!o) {
                    localStorage.removeItem(e);
                    return;
                  }
                  await s.remove(e);
                } catch (t) {
                  "undefined" != typeof localStorage &&
                    localStorage.removeItem(e);
                }
              },
            },
            f = (e, t = {}) =>
              new Promise((r, n) => {
                let i = setTimeout(() => {
                  n(Error(`Fetch timeout apr\xe8s 30000ms`));
                }, 3e4);
                fetch(e, t)
                  .then((e) => {
                    (clearTimeout(i), r(e));
                  })
                  .catch((e) => {
                    (clearTimeout(i), n(e));
                  });
              }),
            h = null,
            p = () => (
              h ||
                (c(),
                (h = (0, i.createClient)(
                  "https://wblrhihzhvarostwdogv.supabase.co",
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndibHJoaWh6aHZhcm9zdHdkb2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NTU4NTgsImV4cCI6MjA3MjIzMTg1OH0.hnuNaPIBYiop7YokGHvjDvg3lylEYxn1urMfO7Hyf38",
                  {
                    auth: {
                      storage: d,
                      autoRefreshToken: !0,
                      persistSession: !0,
                      detectSessionInUrl: !0,
                      flowType: "implicit",
                      storageKey: l,
                    },
                    global: {
                      fetch: f,
                      headers: { "X-Client-Info": "linkhub-extension" },
                    },
                    realtime: { params: { eventsPerSecond: 0 } },
                  },
                )).auth.onAuthStateChange((e, t) => {
                  "undefined" != typeof window &&
                    window.dispatchEvent(
                      new CustomEvent(u, { detail: { event: e, session: t } }),
                    );
                })),
              h
            ),
            m = new Proxy({}, { get: (e, t) => p()[t] });
        },
        {
          "@supabase/supabase-js": "lxmxe",
          "@plasmohq/storage": "9RCRe",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      lxmxe: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "PostgrestError", () => s.PostgrestError),
            n.export(r, "FunctionsHttpError", () => l.FunctionsHttpError),
            n.export(r, "FunctionsFetchError", () => l.FunctionsFetchError),
            n.export(r, "FunctionsRelayError", () => l.FunctionsRelayError),
            n.export(r, "FunctionsError", () => l.FunctionsError),
            n.export(r, "FunctionRegion", () => l.FunctionRegion),
            n.export(r, "SupabaseClient", () => a.default),
            n.export(r, "createClient", () => c));
          var i = e("./SupabaseClient"),
            a = n.interopDefault(i),
            o = e("@supabase/auth-js");
          n.exportAll(o, r);
          var s = e("@supabase/postgrest-js"),
            l = e("@supabase/functions-js"),
            u = e("@supabase/realtime-js");
          n.exportAll(u, r);
          let c = (e, t, r) => new a.default(e, t, r);
        },
        {
          "./SupabaseClient": "kJAE4",
          "@supabase/auth-js": "ihOZX",
          "@supabase/postgrest-js": "8b8oB",
          "@supabase/functions-js": !1,
          "@supabase/realtime-js": "hIbE5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      kJAE4: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
          var n = e("@supabase/functions-js"),
            i = e("@supabase/postgrest-js"),
            a = e("@supabase/realtime-js"),
            o = e("@supabase/storage-js"),
            s = e("./lib/constants"),
            l = e("./lib/fetch"),
            u = e("./lib/helpers"),
            c = e("./lib/SupabaseAuthClient");
          r.default = class {
            constructor(e, t, r) {
              var n, a, o;
              if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
                throw Error("supabaseUrl is required.");
              if (!t) throw Error("supabaseKey is required.");
              let c = (0, u.stripTrailingSlash)(e);
              ((this.realtimeUrl = `${c}/realtime/v1`.replace(/^http/i, "ws")),
                (this.authUrl = `${c}/auth/v1`),
                (this.storageUrl = `${c}/storage/v1`),
                (this.functionsUrl = `${c}/functions/v1`));
              let d = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
                f = {
                  db: s.DEFAULT_DB_OPTIONS,
                  realtime: s.DEFAULT_REALTIME_OPTIONS,
                  auth: Object.assign(
                    Object.assign({}, s.DEFAULT_AUTH_OPTIONS),
                    { storageKey: d },
                  ),
                  global: s.DEFAULT_GLOBAL_OPTIONS,
                },
                h = (0, u.applySettingDefaults)(null != r ? r : {}, f);
              ((this.storageKey =
                null !== (n = h.auth.storageKey) && void 0 !== n ? n : ""),
                (this.headers =
                  null !== (a = h.global.headers) && void 0 !== a ? a : {}),
                h.accessToken
                  ? ((this.accessToken = h.accessToken),
                    (this.auth = new Proxy(
                      {},
                      {
                        get: (e, t) => {
                          throw Error(
                            `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`,
                          );
                        },
                      },
                    )))
                  : (this.auth = this._initSupabaseAuthClient(
                      null !== (o = h.auth) && void 0 !== o ? o : {},
                      this.headers,
                      h.global.fetch,
                    )),
                (this.fetch = (0, l.fetchWithAuth)(
                  t,
                  this._getAccessToken.bind(this),
                  h.global.fetch,
                )),
                (this.realtime = this._initRealtimeClient(
                  Object.assign(
                    {
                      headers: this.headers,
                      accessToken: this._getAccessToken.bind(this),
                    },
                    h.realtime,
                  ),
                )),
                (this.rest = new i.PostgrestClient(`${c}/rest/v1`, {
                  headers: this.headers,
                  schema: h.db.schema,
                  fetch: this.fetch,
                })),
                h.accessToken || this._listenForAuthEvents());
            }
            get functions() {
              return new n.FunctionsClient(this.functionsUrl, {
                headers: this.headers,
                customFetch: this.fetch,
              });
            }
            get storage() {
              return new o.StorageClient(
                this.storageUrl,
                this.headers,
                this.fetch,
              );
            }
            from(e) {
              return this.rest.from(e);
            }
            schema(e) {
              return this.rest.schema(e);
            }
            rpc(e, t = {}, r = {}) {
              return this.rest.rpc(e, t, r);
            }
            channel(e, t = { config: {} }) {
              return this.realtime.channel(e, t);
            }
            getChannels() {
              return this.realtime.getChannels();
            }
            removeChannel(e) {
              return this.realtime.removeChannel(e);
            }
            removeAllChannels() {
              return this.realtime.removeAllChannels();
            }
            _getAccessToken() {
              var e, t, r, n, i, a;
              return (
                (r = this),
                (n = void 0),
                (i = void 0),
                (a = function* () {
                  if (this.accessToken) return yield this.accessToken();
                  let { data: r } = yield this.auth.getSession();
                  return null !==
                    (t =
                      null === (e = r.session) || void 0 === e
                        ? void 0
                        : e.access_token) && void 0 !== t
                    ? t
                    : null;
                }),
                new (i || (i = Promise))(function (e, t) {
                  function o(e) {
                    try {
                      l(a.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function s(e) {
                    try {
                      l(a.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function l(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value) instanceof i
                          ? r
                          : new i(function (e) {
                              e(r);
                            })
                        ).then(o, s);
                  }
                  l((a = a.apply(r, n || [])).next());
                })
              );
            }
            _initSupabaseAuthClient(
              {
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                storage: n,
                storageKey: i,
                flowType: a,
                lock: o,
                debug: s,
              },
              l,
              u,
            ) {
              let d = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`,
              };
              return new c.SupabaseAuthClient({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, d), l),
                storageKey: i,
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                storage: n,
                flowType: a,
                lock: o,
                debug: s,
                fetch: u,
                hasCustomAuthorizationHeader: "Authorization" in this.headers,
              });
            }
            _initRealtimeClient(e) {
              return new a.RealtimeClient(
                this.realtimeUrl,
                Object.assign(Object.assign({}, e), {
                  params: Object.assign(
                    { apikey: this.supabaseKey },
                    null == e ? void 0 : e.params,
                  ),
                }),
              );
            }
            _listenForAuthEvents() {
              return this.auth.onAuthStateChange((e, t) => {
                this._handleTokenChanged(
                  e,
                  "CLIENT",
                  null == t ? void 0 : t.access_token,
                );
              });
            }
            _handleTokenChanged(e, t, r) {
              ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
              this.changedAccessToken !== r
                ? (this.changedAccessToken = r)
                : "SIGNED_OUT" === e &&
                  (this.realtime.setAuth(),
                  "STORAGE" == t && this.auth.signOut(),
                  (this.changedAccessToken = void 0));
            }
          };
        },
        {
          "@supabase/functions-js": "eipxy",
          "@supabase/postgrest-js": "8b8oB",
          "@supabase/realtime-js": "hIbE5",
          "@supabase/storage-js": "aHN9r",
          "./lib/constants": "jXbBA",
          "./lib/fetch": "5cJ62",
          "./lib/helpers": "gORSc",
          "./lib/SupabaseAuthClient": "48roX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      eipxy: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "FunctionsClient", () => i.FunctionsClient),
            n.export(r, "FunctionsError", () => a.FunctionsError),
            n.export(r, "FunctionsFetchError", () => a.FunctionsFetchError),
            n.export(r, "FunctionsHttpError", () => a.FunctionsHttpError),
            n.export(r, "FunctionsRelayError", () => a.FunctionsRelayError),
            n.export(r, "FunctionRegion", () => a.FunctionRegion));
          var i = e("./FunctionsClient"),
            a = e("./types");
        },
        {
          "./FunctionsClient": "eOpPK",
          "./types": "a4XQo",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      eOpPK: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "FunctionsClient", () => o));
          var i = e("./helper"),
            a = e("./types");
          class o {
            constructor(
              e,
              {
                headers: t = {},
                customFetch: r,
                region: n = a.FunctionRegion.Any,
              } = {},
            ) {
              ((this.url = e),
                (this.headers = t),
                (this.region = n),
                (this.fetch = (0, i.resolveFetch)(r)));
            }
            setAuth(e) {
              this.headers.Authorization = `Bearer ${e}`;
            }
            invoke(e, t = {}) {
              var r, n, i, o, s;
              return (
                (n = this),
                (i = void 0),
                (o = void 0),
                (s = function* () {
                  try {
                    let n;
                    let { headers: i, method: o, body: s } = t,
                      l = {},
                      { region: u } = t;
                    (u || (u = this.region),
                      u && "any" !== u && (l["x-region"] = u),
                      s &&
                        ((i &&
                          !Object.prototype.hasOwnProperty.call(
                            i,
                            "Content-Type",
                          )) ||
                          !i) &&
                        (("undefined" != typeof Blob && s instanceof Blob) ||
                        s instanceof ArrayBuffer
                          ? ((l["Content-Type"] = "application/octet-stream"),
                            (n = s))
                          : "string" == typeof s
                            ? ((l["Content-Type"] = "text/plain"), (n = s))
                            : "undefined" != typeof FormData &&
                                s instanceof FormData
                              ? (n = s)
                              : ((l["Content-Type"] = "application/json"),
                                (n = JSON.stringify(s)))));
                    let c = yield this.fetch(`${this.url}/${e}`, {
                        method: o || "POST",
                        headers: Object.assign(
                          Object.assign(Object.assign({}, l), this.headers),
                          i,
                        ),
                        body: n,
                      }).catch((e) => {
                        throw new a.FunctionsFetchError(e);
                      }),
                      d = c.headers.get("x-relay-error");
                    if (d && "true" === d) throw new a.FunctionsRelayError(c);
                    if (!c.ok) throw new a.FunctionsHttpError(c);
                    let f = (
                      null !== (r = c.headers.get("Content-Type")) &&
                      void 0 !== r
                        ? r
                        : "text/plain"
                    )
                      .split(";")[0]
                      .trim();
                    return {
                      data:
                        "application/json" === f
                          ? yield c.json()
                          : "application/octet-stream" === f
                            ? yield c.blob()
                            : "text/event-stream" === f
                              ? c
                              : "multipart/form-data" === f
                                ? yield c.formData()
                                : yield c.text(),
                      error: null,
                    };
                  } catch (e) {
                    return { data: null, error: e };
                  }
                }),
                new (o || (o = Promise))(function (e, t) {
                  function r(e) {
                    try {
                      l(s.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function a(e) {
                    try {
                      l(s.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function l(t) {
                    var n;
                    t.done
                      ? e(t.value)
                      : ((n = t.value) instanceof o
                          ? n
                          : new o(function (e) {
                              e(n);
                            })
                        ).then(r, a);
                  }
                  l((s = s.apply(n, i || [])).next());
                })
              );
            }
          }
        },
        {
          "./helper": "bSCVO",
          "./types": "a4XQo",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      bSCVO: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "resolveFetch", () => i));
          let i = (t) => {
            let r;
            return (
              (r =
                t ||
                ("undefined" == typeof fetch
                  ? (...t) =>
                      e("e7db2d05aa5706f1").then(({ default: e }) => e(...t))
                  : fetch)),
              (...e) => r(...e)
            );
          };
        },
        {
          e7db2d05aa5706f1: "a7JeX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      a7JeX: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "fetch", () => o),
            n.export(r, "Headers", () => s),
            n.export(r, "Request", () => Request),
            n.export(r, "Response", () => l));
          var i = arguments[3],
            a = (function () {
              if ("undefined" != typeof self) return self;
              if ("undefined" != typeof window) return window;
              if (void 0 !== i) return i;
              throw Error("unable to locate global object");
            })();
          let o = a.fetch;
          r.default = a.fetch.bind(a);
          let s = a.Headers,
            Request = a.Request,
            l = a.Response;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      a4XQo: [
        function (e, t, r) {
          var n,
            i,
            a = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (a.defineInteropFlag(r),
            a.export(r, "FunctionsError", () => o),
            a.export(r, "FunctionsFetchError", () => s),
            a.export(r, "FunctionsRelayError", () => l),
            a.export(r, "FunctionsHttpError", () => u),
            a.export(r, "FunctionRegion", () => i));
          class o extends Error {
            constructor(e, t = "FunctionsError", r) {
              (super(e), (this.name = t), (this.context = r));
            }
          }
          class s extends o {
            constructor(e) {
              super(
                "Failed to send a request to the Edge Function",
                "FunctionsFetchError",
                e,
              );
            }
          }
          class l extends o {
            constructor(e) {
              super(
                "Relay Error invoking the Edge Function",
                "FunctionsRelayError",
                e,
              );
            }
          }
          class u extends o {
            constructor(e) {
              super(
                "Edge Function returned a non-2xx status code",
                "FunctionsHttpError",
                e,
              );
            }
          }
          (((n = i || (i = {})).Any = "any"),
            (n.ApNortheast1 = "ap-northeast-1"),
            (n.ApNortheast2 = "ap-northeast-2"),
            (n.ApSouth1 = "ap-south-1"),
            (n.ApSoutheast1 = "ap-southeast-1"),
            (n.ApSoutheast2 = "ap-southeast-2"),
            (n.CaCentral1 = "ca-central-1"),
            (n.EuCentral1 = "eu-central-1"),
            (n.EuWest1 = "eu-west-1"),
            (n.EuWest2 = "eu-west-2"),
            (n.EuWest3 = "eu-west-3"),
            (n.SaEast1 = "sa-east-1"),
            (n.UsEast1 = "us-east-1"),
            (n.UsWest1 = "us-west-1"),
            (n.UsWest2 = "us-west-2"));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "8b8oB": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "PostgrestBuilder", () => c),
            n.export(r, "PostgrestClient", () => o),
            n.export(r, "PostgrestFilterBuilder", () => l),
            n.export(r, "PostgrestQueryBuilder", () => s),
            n.export(r, "PostgrestTransformBuilder", () => u),
            n.export(r, "PostgrestError", () => d));
          var i = e("../cjs/index.js"),
            a = n.interopDefault(i);
          let {
            PostgrestClient: o,
            PostgrestQueryBuilder: s,
            PostgrestFilterBuilder: l,
            PostgrestTransformBuilder: u,
            PostgrestBuilder: c,
            PostgrestError: d,
          } = a.default;
          r.default = {
            PostgrestClient: o,
            PostgrestQueryBuilder: s,
            PostgrestFilterBuilder: l,
            PostgrestTransformBuilder: u,
            PostgrestBuilder: c,
            PostgrestError: d,
          };
        },
        {
          "../cjs/index.js": "jdEh0",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      jdEh0: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PostgrestError =
              r.PostgrestBuilder =
              r.PostgrestTransformBuilder =
              r.PostgrestFilterBuilder =
              r.PostgrestQueryBuilder =
              r.PostgrestClient =
                void 0));
          let i = n(e("43aa18e1b3995a04"));
          r.PostgrestClient = i.default;
          let a = n(e("106b9646723d3435"));
          r.PostgrestQueryBuilder = a.default;
          let o = n(e("44633a2bbf2e5887"));
          r.PostgrestFilterBuilder = o.default;
          let s = n(e("20f3d9201f4321f7"));
          r.PostgrestTransformBuilder = s.default;
          let l = n(e("40c2526b7797cc12"));
          r.PostgrestBuilder = l.default;
          let u = n(e("47c2046432df28f1"));
          ((r.PostgrestError = u.default),
            (r.default = {
              PostgrestClient: i.default,
              PostgrestQueryBuilder: a.default,
              PostgrestFilterBuilder: o.default,
              PostgrestTransformBuilder: s.default,
              PostgrestBuilder: l.default,
              PostgrestError: u.default,
            }));
        },
        {
          "43aa18e1b3995a04": "2mW7I",
          "106b9646723d3435": "4QWXQ",
          "44633a2bbf2e5887": "jLpyZ",
          "20f3d9201f4321f7": "2S0xr",
          "40c2526b7797cc12": "9CDpD",
          "47c2046432df28f1": "ikoWS",
        },
      ],
      "2mW7I": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          let i = n(e("88e01f46d7b3653")),
            a = n(e("7037a32f48e28631")),
            o = e("253e047ae121b6e4");
          class s {
            constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
              ((this.url = e),
                (this.headers = Object.assign(
                  Object.assign({}, o.DEFAULT_HEADERS),
                  t,
                )),
                (this.schemaName = r),
                (this.fetch = n));
            }
            from(e) {
              let t = new URL(`${this.url}/${e}`);
              return new i.default(t, {
                headers: Object.assign({}, this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
              });
            }
            schema(e) {
              return new s(this.url, {
                headers: this.headers,
                schema: e,
                fetch: this.fetch,
              });
            }
            rpc(e, t = {}, { head: r = !1, get: n = !1, count: i } = {}) {
              let o, s;
              let l = new URL(`${this.url}/rpc/${e}`);
              r || n
                ? ((o = r ? "HEAD" : "GET"),
                  Object.entries(t)
                    .filter(([e, t]) => void 0 !== t)
                    .map(([e, t]) => [
                      e,
                      Array.isArray(t) ? `{${t.join(",")}}` : `${t}`,
                    ])
                    .forEach(([e, t]) => {
                      l.searchParams.append(e, t);
                    }))
                : ((o = "POST"), (s = t));
              let u = Object.assign({}, this.headers);
              return (
                i && (u.Prefer = `count=${i}`),
                new a.default({
                  method: o,
                  url: l,
                  headers: u,
                  schema: this.schemaName,
                  body: s,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
          }
          r.default = s;
        },
        {
          "88e01f46d7b3653": "4QWXQ",
          "7037a32f48e28631": "jLpyZ",
          "253e047ae121b6e4": "cYpB5",
        },
      ],
      "4QWXQ": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          let i = n(e("965a1cf0dca58b77"));
          r.default = class {
            constructor(e, { headers: t = {}, schema: r, fetch: n }) {
              ((this.url = e),
                (this.headers = t),
                (this.schema = r),
                (this.fetch = n));
            }
            select(e, { head: t = !1, count: r } = {}) {
              let n = !1,
                a = (null != e ? e : "*")
                  .split("")
                  .map((e) =>
                    /\s/.test(e) && !n ? "" : ('"' === e && (n = !n), e),
                  )
                  .join("");
              return (
                this.url.searchParams.set("select", a),
                r && (this.headers.Prefer = `count=${r}`),
                new i.default({
                  method: t ? "HEAD" : "GET",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
            insert(e, { count: t, defaultToNull: r = !0 } = {}) {
              let n = [];
              if (
                (this.headers.Prefer && n.push(this.headers.Prefer),
                t && n.push(`count=${t}`),
                r || n.push("missing=default"),
                (this.headers.Prefer = n.join(",")),
                Array.isArray(e))
              ) {
                let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                if (t.length > 0) {
                  let e = [...new Set(t)].map((e) => `"${e}"`);
                  this.url.searchParams.set("columns", e.join(","));
                }
              }
              return new i.default({
                method: "POST",
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              });
            }
            upsert(
              e,
              {
                onConflict: t,
                ignoreDuplicates: r = !1,
                count: n,
                defaultToNull: a = !0,
              } = {},
            ) {
              let o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
              if (
                (void 0 !== t && this.url.searchParams.set("on_conflict", t),
                this.headers.Prefer && o.push(this.headers.Prefer),
                n && o.push(`count=${n}`),
                a || o.push("missing=default"),
                (this.headers.Prefer = o.join(",")),
                Array.isArray(e))
              ) {
                let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                if (t.length > 0) {
                  let e = [...new Set(t)].map((e) => `"${e}"`);
                  this.url.searchParams.set("columns", e.join(","));
                }
              }
              return new i.default({
                method: "POST",
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              });
            }
            update(e, { count: t } = {}) {
              let r = [];
              return (
                this.headers.Prefer && r.push(this.headers.Prefer),
                t && r.push(`count=${t}`),
                (this.headers.Prefer = r.join(",")),
                new i.default({
                  method: "PATCH",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
            delete({ count: e } = {}) {
              let t = [];
              return (
                e && t.push(`count=${e}`),
                this.headers.Prefer && t.unshift(this.headers.Prefer),
                (this.headers.Prefer = t.join(",")),
                new i.default({
                  method: "DELETE",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
          };
        },
        { "965a1cf0dca58b77": "jLpyZ" },
      ],
      jLpyZ: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          let i = n(e("8233dee6f0ec120d"));
          class a extends i.default {
            eq(e, t) {
              return (this.url.searchParams.append(e, `eq.${t}`), this);
            }
            neq(e, t) {
              return (this.url.searchParams.append(e, `neq.${t}`), this);
            }
            gt(e, t) {
              return (this.url.searchParams.append(e, `gt.${t}`), this);
            }
            gte(e, t) {
              return (this.url.searchParams.append(e, `gte.${t}`), this);
            }
            lt(e, t) {
              return (this.url.searchParams.append(e, `lt.${t}`), this);
            }
            lte(e, t) {
              return (this.url.searchParams.append(e, `lte.${t}`), this);
            }
            like(e, t) {
              return (this.url.searchParams.append(e, `like.${t}`), this);
            }
            likeAllOf(e, t) {
              return (
                this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
                this
              );
            }
            likeAnyOf(e, t) {
              return (
                this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
                this
              );
            }
            ilike(e, t) {
              return (this.url.searchParams.append(e, `ilike.${t}`), this);
            }
            ilikeAllOf(e, t) {
              return (
                this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
                this
              );
            }
            ilikeAnyOf(e, t) {
              return (
                this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
                this
              );
            }
            is(e, t) {
              return (this.url.searchParams.append(e, `is.${t}`), this);
            }
            in(e, t) {
              let r = Array.from(new Set(t))
                .map((e) =>
                  "string" == typeof e && RegExp("[,()]").test(e)
                    ? `"${e}"`
                    : `${e}`,
                )
                .join(",");
              return (this.url.searchParams.append(e, `in.(${r})`), this);
            }
            contains(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `cs.${t}`)
                  : Array.isArray(t)
                    ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
                    : this.url.searchParams.append(
                        e,
                        `cs.${JSON.stringify(t)}`,
                      ),
                this
              );
            }
            containedBy(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `cd.${t}`)
                  : Array.isArray(t)
                    ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
                    : this.url.searchParams.append(
                        e,
                        `cd.${JSON.stringify(t)}`,
                      ),
                this
              );
            }
            rangeGt(e, t) {
              return (this.url.searchParams.append(e, `sr.${t}`), this);
            }
            rangeGte(e, t) {
              return (this.url.searchParams.append(e, `nxl.${t}`), this);
            }
            rangeLt(e, t) {
              return (this.url.searchParams.append(e, `sl.${t}`), this);
            }
            rangeLte(e, t) {
              return (this.url.searchParams.append(e, `nxr.${t}`), this);
            }
            rangeAdjacent(e, t) {
              return (this.url.searchParams.append(e, `adj.${t}`), this);
            }
            overlaps(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `ov.${t}`)
                  : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
                this
              );
            }
            textSearch(e, t, { config: r, type: n } = {}) {
              let i = "";
              "plain" === n
                ? (i = "pl")
                : "phrase" === n
                  ? (i = "ph")
                  : "websearch" === n && (i = "w");
              let a = void 0 === r ? "" : `(${r})`;
              return (
                this.url.searchParams.append(e, `${i}fts${a}.${t}`),
                this
              );
            }
            match(e) {
              return (
                Object.entries(e).forEach(([e, t]) => {
                  this.url.searchParams.append(e, `eq.${t}`);
                }),
                this
              );
            }
            not(e, t, r) {
              return (this.url.searchParams.append(e, `not.${t}.${r}`), this);
            }
            or(e, { foreignTable: t, referencedTable: r = t } = {}) {
              let n = r ? `${r}.or` : "or";
              return (this.url.searchParams.append(n, `(${e})`), this);
            }
            filter(e, t, r) {
              return (this.url.searchParams.append(e, `${t}.${r}`), this);
            }
          }
          r.default = a;
        },
        { "8233dee6f0ec120d": "2S0xr" },
      ],
      "2S0xr": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          let i = n(e("f09a9224553a7954"));
          class a extends i.default {
            select(e) {
              let t = !1,
                r = (null != e ? e : "*")
                  .split("")
                  .map((e) =>
                    /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e),
                  )
                  .join("");
              return (
                this.url.searchParams.set("select", r),
                this.headers.Prefer && (this.headers.Prefer += ","),
                (this.headers.Prefer += "return=representation"),
                this
              );
            }
            order(
              e,
              {
                ascending: t = !0,
                nullsFirst: r,
                foreignTable: n,
                referencedTable: i = n,
              } = {},
            ) {
              let a = i ? `${i}.order` : "order",
                o = this.url.searchParams.get(a);
              return (
                this.url.searchParams.set(
                  a,
                  `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"}`,
                ),
                this
              );
            }
            limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
              let n = void 0 === r ? "limit" : `${r}.limit`;
              return (this.url.searchParams.set(n, `${e}`), this);
            }
            range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
              let i = void 0 === n ? "offset" : `${n}.offset`,
                a = void 0 === n ? "limit" : `${n}.limit`;
              return (
                this.url.searchParams.set(i, `${e}`),
                this.url.searchParams.set(a, `${t - e + 1}`),
                this
              );
            }
            abortSignal(e) {
              return ((this.signal = e), this);
            }
            single() {
              return (
                (this.headers.Accept = "application/vnd.pgrst.object+json"),
                this
              );
            }
            maybeSingle() {
              return (
                "GET" === this.method
                  ? (this.headers.Accept = "application/json")
                  : (this.headers.Accept = "application/vnd.pgrst.object+json"),
                (this.isMaybeSingle = !0),
                this
              );
            }
            csv() {
              return ((this.headers.Accept = "text/csv"), this);
            }
            geojson() {
              return ((this.headers.Accept = "application/geo+json"), this);
            }
            explain({
              analyze: e = !1,
              verbose: t = !1,
              settings: r = !1,
              buffers: n = !1,
              wal: i = !1,
              format: a = "text",
            } = {}) {
              var o;
              let s = [
                  e ? "analyze" : null,
                  t ? "verbose" : null,
                  r ? "settings" : null,
                  n ? "buffers" : null,
                  i ? "wal" : null,
                ]
                  .filter(Boolean)
                  .join("|"),
                l =
                  null !== (o = this.headers.Accept) && void 0 !== o
                    ? o
                    : "application/json";
              return (
                (this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${l}"; options=${s};`),
                this
              );
            }
            rollback() {
              var e;
              return (
                (null !== (e = this.headers.Prefer) && void 0 !== e
                  ? e
                  : ""
                ).trim().length > 0
                  ? (this.headers.Prefer += ",tx=rollback")
                  : (this.headers.Prefer = "tx=rollback"),
                this
              );
            }
            returns() {
              return this;
            }
          }
          r.default = a;
        },
        { f09a9224553a7954: "9CDpD" },
      ],
      "9CDpD": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          let i = n(e("c5b50ee94c9e3f4f")),
            a = n(e("912a7c046de70b18"));
          r.default = class {
            constructor(e) {
              ((this.shouldThrowOnError = !1),
                (this.method = e.method),
                (this.url = e.url),
                (this.headers = e.headers),
                (this.schema = e.schema),
                (this.body = e.body),
                (this.shouldThrowOnError = e.shouldThrowOnError),
                (this.signal = e.signal),
                (this.isMaybeSingle = e.isMaybeSingle),
                e.fetch
                  ? (this.fetch = e.fetch)
                  : "undefined" == typeof fetch
                    ? (this.fetch = i.default)
                    : (this.fetch = fetch));
            }
            throwOnError() {
              return ((this.shouldThrowOnError = !0), this);
            }
            setHeader(e, t) {
              return (
                (this.headers = Object.assign({}, this.headers)),
                (this.headers[e] = t),
                this
              );
            }
            then(e, t) {
              (void 0 === this.schema ||
                (["GET", "HEAD"].includes(this.method)
                  ? (this.headers["Accept-Profile"] = this.schema)
                  : (this.headers["Content-Profile"] = this.schema)),
                "GET" !== this.method &&
                  "HEAD" !== this.method &&
                  (this.headers["Content-Type"] = "application/json"));
              let r = this.fetch,
                n = r(this.url.toString(), {
                  method: this.method,
                  headers: this.headers,
                  body: JSON.stringify(this.body),
                  signal: this.signal,
                }).then(async (e) => {
                  var t, r, n;
                  let i = null,
                    o = null,
                    s = null,
                    l = e.status,
                    u = e.statusText;
                  if (e.ok) {
                    if ("HEAD" !== this.method) {
                      let t = await e.text();
                      "" === t ||
                        (o =
                          "text/csv" === this.headers.Accept
                            ? t
                            : this.headers.Accept &&
                                this.headers.Accept.includes(
                                  "application/vnd.pgrst.plan+text",
                                )
                              ? t
                              : JSON.parse(t));
                    }
                    let n =
                        null === (t = this.headers.Prefer) || void 0 === t
                          ? void 0
                          : t.match(/count=(exact|planned|estimated)/),
                      a =
                        null === (r = e.headers.get("content-range")) ||
                        void 0 === r
                          ? void 0
                          : r.split("/");
                    (n && a && a.length > 1 && (s = parseInt(a[1])),
                      this.isMaybeSingle &&
                        "GET" === this.method &&
                        Array.isArray(o) &&
                        (o.length > 1
                          ? ((i = {
                              code: "PGRST116",
                              details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                              hint: null,
                              message:
                                "JSON object requested, multiple (or no) rows returned",
                            }),
                            (o = null),
                            (s = null),
                            (l = 406),
                            (u = "Not Acceptable"))
                          : (o = 1 === o.length ? o[0] : null)));
                  } else {
                    let t = await e.text();
                    try {
                      ((i = JSON.parse(t)),
                        Array.isArray(i) &&
                          404 === e.status &&
                          ((o = []), (i = null), (l = 200), (u = "OK")));
                    } catch (r) {
                      404 === e.status && "" === t
                        ? ((l = 204), (u = "No Content"))
                        : (i = { message: t });
                    }
                    if (
                      (i &&
                        this.isMaybeSingle &&
                        (null === (n = null == i ? void 0 : i.details) ||
                        void 0 === n
                          ? void 0
                          : n.includes("0 rows")) &&
                        ((i = null), (l = 200), (u = "OK")),
                      i && this.shouldThrowOnError)
                    )
                      throw new a.default(i);
                  }
                  let c = {
                    error: i,
                    data: o,
                    count: s,
                    status: l,
                    statusText: u,
                  };
                  return c;
                });
              return (
                this.shouldThrowOnError ||
                  (n = n.catch((e) => {
                    var t, r, n;
                    return {
                      error: {
                        message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
                        details: `${null !== (r = null == e ? void 0 : e.stack) && void 0 !== r ? r : ""}`,
                        hint: "",
                        code: `${null !== (n = null == e ? void 0 : e.code) && void 0 !== n ? n : ""}`,
                      },
                      data: null,
                      count: null,
                      status: 0,
                      statusText: "",
                    };
                  })),
                n.then(e, t)
              );
            }
            returns() {
              return this;
            }
            overrideTypes() {
              return this;
            }
          };
        },
        { c5b50ee94c9e3f4f: "a7JeX", "912a7c046de70b18": "ikoWS" },
      ],
      ikoWS: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = class extends Error {
              constructor(e) {
                (super(e.message),
                  (this.name = "PostgrestError"),
                  (this.details = e.details),
                  (this.hint = e.hint),
                  (this.code = e.code));
              }
            }));
        },
        {},
      ],
      cYpB5: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.DEFAULT_HEADERS = void 0));
          let n = e("57b7a45db15a40f");
          r.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${n.version}` };
        },
        { "57b7a45db15a40f": "2CuY1" },
      ],
      "2CuY1": [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.version = void 0),
            (r.version = "0.0.0-automated"));
        },
        {},
      ],
      hIbE5: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "RealtimePresence", () => u.default),
            n.export(r, "RealtimeChannel", () => s.default),
            n.export(r, "RealtimeClient", () => a.default),
            n.export(r, "REALTIME_LISTEN_TYPES", () => o.REALTIME_LISTEN_TYPES),
            n.export(
              r,
              "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
              () => o.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
            ),
            n.export(
              r,
              "REALTIME_PRESENCE_LISTEN_EVENTS",
              () => l.REALTIME_PRESENCE_LISTEN_EVENTS,
            ),
            n.export(
              r,
              "REALTIME_SUBSCRIBE_STATES",
              () => o.REALTIME_SUBSCRIBE_STATES,
            ),
            n.export(
              r,
              "REALTIME_CHANNEL_STATES",
              () => o.REALTIME_CHANNEL_STATES,
            ));
          var i = e("./RealtimeClient"),
            a = n.interopDefault(i),
            o = e("./RealtimeChannel"),
            s = n.interopDefault(o),
            l = e("./RealtimePresence"),
            u = n.interopDefault(l);
        },
        {
          "./RealtimeClient": "4pwU0",
          "./RealtimeChannel": "4WICK",
          "./RealtimePresence": "hHRYW",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "4pwU0": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r);
          var i = e("./lib/constants"),
            a = e("./lib/serializer"),
            o = n.interopDefault(a),
            s = e("./lib/timer"),
            l = n.interopDefault(s),
            u = e("./lib/transformers"),
            c = e("./RealtimeChannel"),
            d = n.interopDefault(c);
          let f = () => {},
            h = "undefined" != typeof WebSocket,
            p = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
          r.default = class {
            constructor(t, r) {
              var n;
              ((this.accessTokenValue = null),
                (this.apiKey = null),
                (this.channels = []),
                (this.endPoint = ""),
                (this.httpEndpoint = ""),
                (this.headers = i.DEFAULT_HEADERS),
                (this.params = {}),
                (this.timeout = i.DEFAULT_TIMEOUT),
                (this.heartbeatIntervalMs = 3e4),
                (this.heartbeatTimer = void 0),
                (this.pendingHeartbeatRef = null),
                (this.ref = 0),
                (this.logger = f),
                (this.conn = null),
                (this.sendBuffer = []),
                (this.serializer = new o.default()),
                (this.stateChangeCallbacks = {
                  open: [],
                  close: [],
                  error: [],
                  message: [],
                }),
                (this.accessToken = null),
                (this._resolveFetch = (t) => {
                  let r;
                  return (
                    (r =
                      t ||
                      ("undefined" == typeof fetch
                        ? (...t) =>
                            e("876cb75e255a78b4").then(({ default: e }) =>
                              e(...t),
                            )
                        : fetch)),
                    (...e) => r(...e)
                  );
                }),
                (this.endPoint = `${t}/${i.TRANSPORTS.websocket}`),
                (this.httpEndpoint = (0, u.httpEndpointURL)(t)),
                (null == r ? void 0 : r.transport)
                  ? (this.transport = r.transport)
                  : (this.transport = null),
                (null == r ? void 0 : r.params) && (this.params = r.params),
                (null == r ? void 0 : r.headers) &&
                  (this.headers = Object.assign(
                    Object.assign({}, this.headers),
                    r.headers,
                  )),
                (null == r ? void 0 : r.timeout) && (this.timeout = r.timeout),
                (null == r ? void 0 : r.logger) && (this.logger = r.logger),
                (null == r ? void 0 : r.heartbeatIntervalMs) &&
                  (this.heartbeatIntervalMs = r.heartbeatIntervalMs));
              let a =
                null === (n = null == r ? void 0 : r.params) || void 0 === n
                  ? void 0
                  : n.apikey;
              if (
                (a && ((this.accessTokenValue = a), (this.apiKey = a)),
                (this.reconnectAfterMs = (
                  null == r ? void 0 : r.reconnectAfterMs
                )
                  ? r.reconnectAfterMs
                  : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
                (this.encode = (null == r ? void 0 : r.encode)
                  ? r.encode
                  : (e, t) => t(JSON.stringify(e))),
                (this.decode = (null == r ? void 0 : r.decode)
                  ? r.decode
                  : this.serializer.decode.bind(this.serializer)),
                (this.reconnectTimer = new l.default(async () => {
                  (this.disconnect(), this.connect());
                }, this.reconnectAfterMs)),
                (this.fetch = this._resolveFetch(null == r ? void 0 : r.fetch)),
                null == r ? void 0 : r.worker)
              ) {
                if ("undefined" != typeof window && !window.Worker)
                  throw Error("Web Worker is not supported");
                ((this.worker = (null == r ? void 0 : r.worker) || !1),
                  (this.workerUrl = null == r ? void 0 : r.workerUrl));
              }
              this.accessToken = (null == r ? void 0 : r.accessToken) || null;
            }
            connect() {
              if (!this.conn) {
                if (this.transport) {
                  this.conn = new this.transport(this.endpointURL(), void 0, {
                    headers: this.headers,
                  });
                  return;
                }
                if (h) {
                  ((this.conn = new WebSocket(this.endpointURL())),
                    this.setupConnection());
                  return;
                }
                ((this.conn = new m(this.endpointURL(), void 0, {
                  close: () => {
                    this.conn = null;
                  },
                })),
                  e("db5286ccbda51cf2").then(({ default: e }) => {
                    ((this.conn = new e(this.endpointURL(), void 0, {
                      headers: this.headers,
                    })),
                      this.setupConnection());
                  }));
              }
            }
            endpointURL() {
              return this._appendParams(
                this.endPoint,
                Object.assign({}, this.params, { vsn: i.VSN }),
              );
            }
            disconnect(e, t) {
              this.conn &&
                ((this.conn.onclose = function () {}),
                e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
                (this.conn = null),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset());
            }
            getChannels() {
              return this.channels;
            }
            async removeChannel(e) {
              let t = await e.unsubscribe();
              return (0 === this.channels.length && this.disconnect(), t);
            }
            async removeAllChannels() {
              let e = await Promise.all(
                this.channels.map((e) => e.unsubscribe()),
              );
              return (this.disconnect(), e);
            }
            log(e, t, r) {
              this.logger(e, t, r);
            }
            connectionState() {
              switch (this.conn && this.conn.readyState) {
                case i.SOCKET_STATES.connecting:
                  return i.CONNECTION_STATE.Connecting;
                case i.SOCKET_STATES.open:
                  return i.CONNECTION_STATE.Open;
                case i.SOCKET_STATES.closing:
                  return i.CONNECTION_STATE.Closing;
                default:
                  return i.CONNECTION_STATE.Closed;
              }
            }
            isConnected() {
              return this.connectionState() === i.CONNECTION_STATE.Open;
            }
            channel(e, t = { config: {} }) {
              let r = new d.default(`realtime:${e}`, t, this);
              return (this.channels.push(r), r);
            }
            push(e) {
              let { topic: t, event: r, payload: n, ref: i } = e,
                a = () => {
                  this.encode(e, (e) => {
                    var t;
                    null === (t = this.conn) || void 0 === t || t.send(e);
                  });
                };
              (this.log("push", `${t} ${r} (${i})`, n),
                this.isConnected() ? a() : this.sendBuffer.push(a));
            }
            async setAuth(e = null) {
              let t =
                e ||
                (this.accessToken && (await this.accessToken())) ||
                this.accessTokenValue;
              if (t) {
                let e = null;
                try {
                  e = JSON.parse(atob(t.split(".")[1]));
                } catch (e) {}
                if (e && e.exp && !(Math.floor(Date.now() / 1e3) - e.exp < 0))
                  return (
                    this.log(
                      "auth",
                      `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`,
                    ),
                    Promise.reject(
                      `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`,
                    )
                  );
                ((this.accessTokenValue = t),
                  this.channels.forEach((e) => {
                    (t && e.updateJoinPayload({ access_token: t }),
                      e.joinedOnce &&
                        e._isJoined() &&
                        e._push(i.CHANNEL_EVENTS.access_token, {
                          access_token: t,
                        }));
                  }));
              }
            }
            async sendHeartbeat() {
              var e;
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef) {
                  ((this.pendingHeartbeatRef = null),
                    this.log(
                      "transport",
                      "heartbeat timeout. Attempting to re-establish connection",
                    ),
                    null === (e = this.conn) ||
                      void 0 === e ||
                      e.close(i.WS_CLOSE_NORMAL, "hearbeat timeout"));
                  return;
                }
                ((this.pendingHeartbeatRef = this._makeRef()),
                  this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef,
                  }),
                  this.setAuth());
              }
            }
            flushSendBuffer() {
              this.isConnected() &&
                this.sendBuffer.length > 0 &&
                (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
            }
            _makeRef() {
              let e = this.ref + 1;
              return (
                e === this.ref ? (this.ref = 0) : (this.ref = e),
                this.ref.toString()
              );
            }
            _leaveOpenTopic(e) {
              let t = this.channels.find(
                (t) => t.topic === e && (t._isJoined() || t._isJoining()),
              );
              t &&
                (this.log("transport", `leaving duplicate topic "${e}"`),
                t.unsubscribe());
            }
            _remove(e) {
              this.channels = this.channels.filter(
                (t) => t._joinRef() !== e._joinRef(),
              );
            }
            setupConnection() {
              this.conn &&
                ((this.conn.binaryType = "arraybuffer"),
                (this.conn.onopen = () => this._onConnOpen()),
                (this.conn.onerror = (e) => this._onConnError(e)),
                (this.conn.onmessage = (e) => this._onConnMessage(e)),
                (this.conn.onclose = (e) => this._onConnClose(e)));
            }
            _onConnMessage(e) {
              this.decode(e.data, (e) => {
                let { topic: t, event: r, payload: n, ref: i } = e;
                (i &&
                  i === this.pendingHeartbeatRef &&
                  (this.pendingHeartbeatRef = null),
                  this.log(
                    "receive",
                    `${n.status || ""} ${t} ${r} ${(i && "(" + i + ")") || ""}`,
                    n,
                  ),
                  this.channels
                    .filter((e) => e._isMember(t))
                    .forEach((e) => e._trigger(r, n, i)),
                  this.stateChangeCallbacks.message.forEach((t) => t(e)));
              });
            }
            async _onConnOpen() {
              if (
                (this.log("transport", `connected to ${this.endpointURL()}`),
                this.flushSendBuffer(),
                this.reconnectTimer.reset(),
                this.worker)
              ) {
                this.workerUrl
                  ? this.log(
                      "worker",
                      `starting worker for from ${this.workerUrl}`,
                    )
                  : this.log("worker", "starting default worker");
                let e = this._workerObjectUrl(this.workerUrl);
                ((this.workerRef = new Worker(e)),
                  (this.workerRef.onerror = (e) => {
                    (this.log("worker", "worker error", e.message),
                      this.workerRef.terminate());
                  }),
                  (this.workerRef.onmessage = (e) => {
                    "keepAlive" === e.data.event && this.sendHeartbeat();
                  }),
                  this.workerRef.postMessage({
                    event: "start",
                    interval: this.heartbeatIntervalMs,
                  }));
              } else
                (this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                  (this.heartbeatTimer = setInterval(
                    () => this.sendHeartbeat(),
                    this.heartbeatIntervalMs,
                  )));
              this.stateChangeCallbacks.open.forEach((e) => e());
            }
            _onConnClose(e) {
              (this.log("transport", "close", e),
                this._triggerChanError(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.scheduleTimeout(),
                this.stateChangeCallbacks.close.forEach((t) => t(e)));
            }
            _onConnError(e) {
              (this.log("transport", e.message),
                this._triggerChanError(),
                this.stateChangeCallbacks.error.forEach((t) => t(e)));
            }
            _triggerChanError() {
              this.channels.forEach((e) => e._trigger(i.CHANNEL_EVENTS.error));
            }
            _appendParams(e, t) {
              if (0 === Object.keys(t).length) return e;
              let r = e.match(/\?/) ? "&" : "?",
                n = new URLSearchParams(t);
              return `${e}${r}${n}`;
            }
            _workerObjectUrl(e) {
              let t;
              if (e) t = e;
              else {
                let e = new Blob([p], { type: "application/javascript" });
                t = URL.createObjectURL(e);
              }
              return t;
            }
          };
          class m {
            constructor(e, t, r) {
              ((this.binaryType = "arraybuffer"),
                (this.onclose = () => {}),
                (this.onerror = () => {}),
                (this.onmessage = () => {}),
                (this.onopen = () => {}),
                (this.readyState = i.SOCKET_STATES.connecting),
                (this.send = () => {}),
                (this.url = null),
                (this.url = e),
                (this.close = r.close));
            }
          }
        },
        {
          "./lib/constants": "bOMoO",
          "./lib/serializer": "9Pakj",
          "./lib/timer": "hebkc",
          "./lib/transformers": "fhKQI",
          "./RealtimeChannel": "4WICK",
          "876cb75e255a78b4": "a7JeX",
          db5286ccbda51cf2: "bjOns",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      bOMoO: [
        function (e, t, r) {
          var n,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            d,
            f = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (f.defineInteropFlag(r),
            f.export(r, "DEFAULT_HEADERS", () => p),
            f.export(r, "VSN", () => m),
            f.export(r, "DEFAULT_TIMEOUT", () => g),
            f.export(r, "WS_CLOSE_NORMAL", () => y),
            f.export(r, "SOCKET_STATES", () => s),
            f.export(r, "CHANNEL_STATES", () => l),
            f.export(r, "CHANNEL_EVENTS", () => u),
            f.export(r, "TRANSPORTS", () => c),
            f.export(r, "CONNECTION_STATE", () => d));
          var h = e("./version");
          let p = { "X-Client-Info": `realtime-js/${h.version}` },
            m = "1.0.0",
            g = 1e4,
            y = 1e3;
          (((n = s || (s = {}))[(n.connecting = 0)] = "connecting"),
            (n[(n.open = 1)] = "open"),
            (n[(n.closing = 2)] = "closing"),
            (n[(n.closed = 3)] = "closed"),
            ((i = l || (l = {})).closed = "closed"),
            (i.errored = "errored"),
            (i.joined = "joined"),
            (i.joining = "joining"),
            (i.leaving = "leaving"),
            ((a = u || (u = {})).close = "phx_close"),
            (a.error = "phx_error"),
            (a.join = "phx_join"),
            (a.reply = "phx_reply"),
            (a.leave = "phx_leave"),
            (a.access_token = "access_token"),
            ((c || (c = {})).websocket = "websocket"),
            ((o = d || (d = {})).Connecting = "connecting"),
            (o.Open = "open"),
            (o.Closing = "closing"),
            (o.Closed = "closed"));
        },
        {
          "./version": "gi3dl",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      gi3dl: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "version", () => i));
          let i = "2.11.2";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "9Pakj": [
        function (e, t, r) {
          (e(
            "@parcel/transformer-js/src/esmodule-helpers.js",
          ).defineInteropFlag(r),
            (r.default = class {
              constructor() {
                this.HEADER_LENGTH = 1;
              }
              decode(e, t) {
                return e.constructor === ArrayBuffer
                  ? t(this._binaryDecode(e))
                  : "string" == typeof e
                    ? t(JSON.parse(e))
                    : t({});
              }
              _binaryDecode(e) {
                let t = new DataView(e),
                  r = new TextDecoder();
                return this._decodeBroadcast(e, t, r);
              }
              _decodeBroadcast(e, t, r) {
                let n = t.getUint8(1),
                  i = t.getUint8(2),
                  a = this.HEADER_LENGTH + 2,
                  o = r.decode(e.slice(a, a + n));
                a += n;
                let s = r.decode(e.slice(a, a + i));
                a += i;
                let l = JSON.parse(r.decode(e.slice(a, e.byteLength)));
                return { ref: null, topic: o, event: s, payload: l };
              }
            }));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      hebkc: [
        function (e, t, r) {
          (e(
            "@parcel/transformer-js/src/esmodule-helpers.js",
          ).defineInteropFlag(r),
            (r.default = class {
              constructor(e, t) {
                ((this.callback = e),
                  (this.timerCalc = t),
                  (this.timer = void 0),
                  (this.tries = 0),
                  (this.callback = e),
                  (this.timerCalc = t));
              }
              reset() {
                ((this.tries = 0), clearTimeout(this.timer));
              }
              scheduleTimeout() {
                (clearTimeout(this.timer),
                  (this.timer = setTimeout(
                    () => {
                      ((this.tries = this.tries + 1), this.callback());
                    },
                    this.timerCalc(this.tries + 1),
                  )));
              }
            }));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      fhKQI: [
        function (e, t, r) {
          var n,
            i,
            a = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (a.defineInteropFlag(r),
            a.export(r, "PostgresTypes", () => i),
            a.export(r, "convertChangeData", () => o),
            a.export(r, "convertColumn", () => s),
            a.export(r, "convertCell", () => l),
            a.export(r, "toBoolean", () => c),
            a.export(r, "toNumber", () => d),
            a.export(r, "toJson", () => f),
            a.export(r, "toArray", () => h),
            a.export(r, "toTimestampString", () => p),
            a.export(r, "httpEndpointURL", () => m),
            ((n = i || (i = {})).abstime = "abstime"),
            (n.bool = "bool"),
            (n.date = "date"),
            (n.daterange = "daterange"),
            (n.float4 = "float4"),
            (n.float8 = "float8"),
            (n.int2 = "int2"),
            (n.int4 = "int4"),
            (n.int4range = "int4range"),
            (n.int8 = "int8"),
            (n.int8range = "int8range"),
            (n.json = "json"),
            (n.jsonb = "jsonb"),
            (n.money = "money"),
            (n.numeric = "numeric"),
            (n.oid = "oid"),
            (n.reltime = "reltime"),
            (n.text = "text"),
            (n.time = "time"),
            (n.timestamp = "timestamp"),
            (n.timestamptz = "timestamptz"),
            (n.timetz = "timetz"),
            (n.tsrange = "tsrange"),
            (n.tstzrange = "tstzrange"));
          let o = (e, t, r = {}) => {
              var n;
              let i = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
              return Object.keys(t).reduce(
                (r, n) => ((r[n] = s(n, e, t, i)), r),
                {},
              );
            },
            s = (e, t, r, n) => {
              let i = t.find((t) => t.name === e),
                a = null == i ? void 0 : i.type,
                o = r[e];
              return a && !n.includes(a) ? l(a, o) : u(o);
            },
            l = (e, t) => {
              if ("_" === e.charAt(0)) {
                let r = e.slice(1, e.length);
                return h(t, r);
              }
              switch (e) {
                case i.bool:
                  return c(t);
                case i.float4:
                case i.float8:
                case i.int2:
                case i.int4:
                case i.int8:
                case i.numeric:
                case i.oid:
                  return d(t);
                case i.json:
                case i.jsonb:
                  return f(t);
                case i.timestamp:
                  return p(t);
                case i.abstime:
                case i.date:
                case i.daterange:
                case i.int4range:
                case i.int8range:
                case i.money:
                case i.reltime:
                case i.text:
                case i.time:
                case i.timestamptz:
                case i.timetz:
                case i.tsrange:
                case i.tstzrange:
                default:
                  return u(t);
              }
            },
            u = (e) => e,
            c = (e) => {
              switch (e) {
                case "t":
                  return !0;
                case "f":
                  return !1;
                default:
                  return e;
              }
            },
            d = (e) => {
              if ("string" == typeof e) {
                let t = parseFloat(e);
                if (!Number.isNaN(t)) return t;
              }
              return e;
            },
            f = (e) => {
              if ("string" == typeof e)
                try {
                  return JSON.parse(e);
                } catch (e) {
                  console.log(`JSON parse error: ${e}`);
                }
              return e;
            },
            h = (e, t) => {
              if ("string" != typeof e) return e;
              let r = e.length - 1,
                n = e[r],
                i = e[0];
              if ("{" === i && "}" === n) {
                let n;
                let i = e.slice(1, r);
                try {
                  n = JSON.parse("[" + i + "]");
                } catch (e) {
                  n = i ? i.split(",") : [];
                }
                return n.map((e) => l(t, e));
              }
              return e;
            },
            p = (e) => ("string" == typeof e ? e.replace(" ", "T") : e),
            m = (e) => {
              let t = e;
              return (t = (t = t.replace(/^ws/i, "http")).replace(
                /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
                "",
              )).replace(/\/+$/, "");
            };
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "4WICK": [
        function (e, t, r) {
          var n,
            i,
            a,
            o,
            s,
            l,
            u = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (u.defineInteropFlag(r),
            u.export(r, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", () => o),
            u.export(r, "REALTIME_LISTEN_TYPES", () => s),
            u.export(r, "REALTIME_SUBSCRIBE_STATES", () => l),
            u.export(r, "REALTIME_CHANNEL_STATES", () => v));
          var c = e("./lib/constants"),
            d = e("./lib/push"),
            f = u.interopDefault(d),
            h = e("./lib/timer"),
            p = u.interopDefault(h),
            m = e("./RealtimePresence"),
            g = u.interopDefault(m),
            y = e("./lib/transformers");
          (((n = o || (o = {})).ALL = "*"),
            (n.INSERT = "INSERT"),
            (n.UPDATE = "UPDATE"),
            (n.DELETE = "DELETE"),
            ((i = s || (s = {})).BROADCAST = "broadcast"),
            (i.PRESENCE = "presence"),
            (i.POSTGRES_CHANGES = "postgres_changes"),
            (i.SYSTEM = "system"),
            ((a = l || (l = {})).SUBSCRIBED = "SUBSCRIBED"),
            (a.TIMED_OUT = "TIMED_OUT"),
            (a.CLOSED = "CLOSED"),
            (a.CHANNEL_ERROR = "CHANNEL_ERROR"));
          let v = c.CHANNEL_STATES;
          class b {
            constructor(e, t = { config: {} }, r) {
              ((this.topic = e),
                (this.params = t),
                (this.socket = r),
                (this.bindings = {}),
                (this.state = c.CHANNEL_STATES.closed),
                (this.joinedOnce = !1),
                (this.pushBuffer = []),
                (this.subTopic = e.replace(/^realtime:/i, "")),
                (this.params.config = Object.assign(
                  {
                    broadcast: { ack: !1, self: !1 },
                    presence: { key: "" },
                    private: !1,
                  },
                  t.config,
                )),
                (this.timeout = this.socket.timeout),
                (this.joinPush = new f.default(
                  this,
                  c.CHANNEL_EVENTS.join,
                  this.params,
                  this.timeout,
                )),
                (this.rejoinTimer = new p.default(
                  () => this._rejoinUntilConnected(),
                  this.socket.reconnectAfterMs,
                )),
                this.joinPush.receive("ok", () => {
                  ((this.state = c.CHANNEL_STATES.joined),
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach((e) => e.send()),
                    (this.pushBuffer = []));
                }),
                this._onClose(() => {
                  (this.rejoinTimer.reset(),
                    this.socket.log(
                      "channel",
                      `close ${this.topic} ${this._joinRef()}`,
                    ),
                    (this.state = c.CHANNEL_STATES.closed),
                    this.socket._remove(this));
                }),
                this._onError((e) => {
                  this._isLeaving() ||
                    this._isClosed() ||
                    (this.socket.log("channel", `error ${this.topic}`, e),
                    (this.state = c.CHANNEL_STATES.errored),
                    this.rejoinTimer.scheduleTimeout());
                }),
                this.joinPush.receive("timeout", () => {
                  this._isJoining() &&
                    (this.socket.log(
                      "channel",
                      `timeout ${this.topic}`,
                      this.joinPush.timeout,
                    ),
                    (this.state = c.CHANNEL_STATES.errored),
                    this.rejoinTimer.scheduleTimeout());
                }),
                this._on(c.CHANNEL_EVENTS.reply, {}, (e, t) => {
                  this._trigger(this._replyEventName(t), e);
                }),
                (this.presence = new g.default(this)),
                (this.broadcastEndpointURL =
                  (0, y.httpEndpointURL)(this.socket.endPoint) +
                  "/api/broadcast"),
                (this.private = this.params.config.private || !1));
            }
            subscribe(e, t = this.timeout) {
              var r, n;
              if (
                (this.socket.isConnected() || this.socket.connect(),
                this.joinedOnce)
              )
                throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
              {
                let {
                  config: { broadcast: i, presence: a, private: o },
                } = this.params;
                (this._onError((t) =>
                  null == e ? void 0 : e(l.CHANNEL_ERROR, t),
                ),
                  this._onClose(() => (null == e ? void 0 : e(l.CLOSED))));
                let s = {},
                  u = {
                    broadcast: i,
                    presence: a,
                    postgres_changes:
                      null !==
                        (n =
                          null === (r = this.bindings.postgres_changes) ||
                          void 0 === r
                            ? void 0
                            : r.map((e) => e.filter)) && void 0 !== n
                        ? n
                        : [],
                    private: o,
                  };
                (this.socket.accessTokenValue &&
                  (s.access_token = this.socket.accessTokenValue),
                  this.updateJoinPayload(Object.assign({ config: u }, s)),
                  (this.joinedOnce = !0),
                  this._rejoin(t),
                  this.joinPush
                    .receive("ok", async ({ postgres_changes: t }) => {
                      var r;
                      if ((this.socket.setAuth(), void 0 === t)) {
                        null == e || e(l.SUBSCRIBED);
                        return;
                      }
                      {
                        let n = this.bindings.postgres_changes,
                          i =
                            null !== (r = null == n ? void 0 : n.length) &&
                            void 0 !== r
                              ? r
                              : 0,
                          a = [];
                        for (let r = 0; r < i; r++) {
                          let i = n[r],
                            {
                              filter: {
                                event: o,
                                schema: s,
                                table: u,
                                filter: c,
                              },
                            } = i,
                            d = t && t[r];
                          if (
                            d &&
                            d.event === o &&
                            d.schema === s &&
                            d.table === u &&
                            d.filter === c
                          )
                            a.push(
                              Object.assign(Object.assign({}, i), { id: d.id }),
                            );
                          else {
                            (this.unsubscribe(),
                              null == e ||
                                e(
                                  l.CHANNEL_ERROR,
                                  Error(
                                    "mismatch between server and client bindings for postgres changes",
                                  ),
                                ));
                            return;
                          }
                        }
                        ((this.bindings.postgres_changes = a),
                          e && e(l.SUBSCRIBED));
                        return;
                      }
                    })
                    .receive("error", (t) => {
                      null == e ||
                        e(
                          l.CHANNEL_ERROR,
                          Error(
                            JSON.stringify(
                              Object.values(t).join(", ") || "error",
                            ),
                          ),
                        );
                    })
                    .receive("timeout", () => {
                      null == e || e(l.TIMED_OUT);
                    }));
              }
              return this;
            }
            presenceState() {
              return this.presence.state;
            }
            async track(e, t = {}) {
              return await this.send(
                { type: "presence", event: "track", payload: e },
                t.timeout || this.timeout,
              );
            }
            async untrack(e = {}) {
              return await this.send({ type: "presence", event: "untrack" }, e);
            }
            on(e, t, r) {
              return this._on(e, t, r);
            }
            async send(e, t = {}) {
              var r, n;
              if (this._canPush() || "broadcast" !== e.type)
                return new Promise((r) => {
                  var n, i, a;
                  let o = this._push(e.type, e, t.timeout || this.timeout);
                  ("broadcast" !== e.type ||
                    (null ===
                      (a =
                        null ===
                          (i =
                            null === (n = this.params) || void 0 === n
                              ? void 0
                              : n.config) || void 0 === i
                          ? void 0
                          : i.broadcast) || void 0 === a
                      ? void 0
                      : a.ack) ||
                    r("ok"),
                    o.receive("ok", () => r("ok")),
                    o.receive("error", () => r("error")),
                    o.receive("timeout", () => r("timed out")));
                });
              {
                let { event: i, payload: a } = e,
                  o = this.socket.accessTokenValue
                    ? `Bearer ${this.socket.accessTokenValue}`
                    : "",
                  s = {
                    method: "POST",
                    headers: {
                      Authorization: o,
                      apikey: this.socket.apiKey ? this.socket.apiKey : "",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      messages: [
                        {
                          topic: this.subTopic,
                          event: i,
                          payload: a,
                          private: this.private,
                        },
                      ],
                    }),
                  };
                try {
                  let e = await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    s,
                    null !== (r = t.timeout) && void 0 !== r ? r : this.timeout,
                  );
                  return (
                    await (null === (n = e.body) || void 0 === n
                      ? void 0
                      : n.cancel()),
                    e.ok ? "ok" : "error"
                  );
                } catch (e) {
                  if ("AbortError" === e.name) return "timed out";
                  return "error";
                }
              }
            }
            updateJoinPayload(e) {
              this.joinPush.updatePayload(e);
            }
            unsubscribe(e = this.timeout) {
              this.state = c.CHANNEL_STATES.leaving;
              let t = () => {
                (this.socket.log("channel", `leave ${this.topic}`),
                  this._trigger(
                    c.CHANNEL_EVENTS.close,
                    "leave",
                    this._joinRef(),
                  ));
              };
              return (
                this.rejoinTimer.reset(),
                this.joinPush.destroy(),
                new Promise((r) => {
                  let n = new f.default(this, c.CHANNEL_EVENTS.leave, {}, e);
                  (n
                    .receive("ok", () => {
                      (t(), r("ok"));
                    })
                    .receive("timeout", () => {
                      (t(), r("timed out"));
                    })
                    .receive("error", () => {
                      r("error");
                    }),
                    n.send(),
                    this._canPush() || n.trigger("ok", {}));
                })
              );
            }
            async _fetchWithTimeout(e, t, r) {
              let n = new AbortController(),
                i = setTimeout(() => n.abort(), r),
                a = await this.socket.fetch(
                  e,
                  Object.assign(Object.assign({}, t), { signal: n.signal }),
                );
              return (clearTimeout(i), a);
            }
            _push(e, t, r = this.timeout) {
              if (!this.joinedOnce)
                throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
              let n = new f.default(this, e, t, r);
              return (
                this._canPush()
                  ? n.send()
                  : (n.startTimeout(), this.pushBuffer.push(n)),
                n
              );
            }
            _onMessage(e, t, r) {
              return t;
            }
            _isMember(e) {
              return this.topic === e;
            }
            _joinRef() {
              return this.joinPush.ref;
            }
            _trigger(e, t, r) {
              var n, i;
              let a = e.toLocaleLowerCase(),
                { close: o, error: s, leave: l, join: u } = c.CHANNEL_EVENTS;
              if (r && [o, s, l, u].indexOf(a) >= 0 && r !== this._joinRef())
                return;
              let d = this._onMessage(a, t, r);
              if (t && !d)
                throw "channel onMessage callbacks must return the payload, modified or unmodified";
              ["insert", "update", "delete"].includes(a)
                ? null === (n = this.bindings.postgres_changes) ||
                  void 0 === n ||
                  n
                    .filter((e) => {
                      var t, r, n;
                      return (
                        (null === (t = e.filter) || void 0 === t
                          ? void 0
                          : t.event) === "*" ||
                        (null ===
                          (n =
                            null === (r = e.filter) || void 0 === r
                              ? void 0
                              : r.event) || void 0 === n
                          ? void 0
                          : n.toLocaleLowerCase()) === a
                      );
                    })
                    .map((e) => e.callback(d, r))
                : null === (i = this.bindings[a]) ||
                  void 0 === i ||
                  i
                    .filter((e) => {
                      var r, n, i, o, s, l;
                      if (
                        !["broadcast", "presence", "postgres_changes"].includes(
                          a,
                        )
                      )
                        return e.type.toLocaleLowerCase() === a;
                      if ("id" in e) {
                        let a = e.id,
                          o =
                            null === (r = e.filter) || void 0 === r
                              ? void 0
                              : r.event;
                        return (
                          a &&
                          (null === (n = t.ids) || void 0 === n
                            ? void 0
                            : n.includes(a)) &&
                          ("*" === o ||
                            (null == o ? void 0 : o.toLocaleLowerCase()) ===
                              (null === (i = t.data) || void 0 === i
                                ? void 0
                                : i.type.toLocaleLowerCase()))
                        );
                      }
                      {
                        let r =
                          null ===
                            (s =
                              null === (o = null == e ? void 0 : e.filter) ||
                              void 0 === o
                                ? void 0
                                : o.event) || void 0 === s
                            ? void 0
                            : s.toLocaleLowerCase();
                        return (
                          "*" === r ||
                          r ===
                            (null === (l = null == t ? void 0 : t.event) ||
                            void 0 === l
                              ? void 0
                              : l.toLocaleLowerCase())
                        );
                      }
                    })
                    .map((e) => {
                      if ("object" == typeof d && "ids" in d) {
                        let e = d.data,
                          {
                            schema: t,
                            table: r,
                            commit_timestamp: n,
                            type: i,
                            errors: a,
                          } = e;
                        d = Object.assign(
                          Object.assign(
                            {},
                            {
                              schema: t,
                              table: r,
                              commit_timestamp: n,
                              eventType: i,
                              new: {},
                              old: {},
                              errors: a,
                            },
                          ),
                          this._getPayloadRecords(e),
                        );
                      }
                      e.callback(d, r);
                    });
            }
            _isClosed() {
              return this.state === c.CHANNEL_STATES.closed;
            }
            _isJoined() {
              return this.state === c.CHANNEL_STATES.joined;
            }
            _isJoining() {
              return this.state === c.CHANNEL_STATES.joining;
            }
            _isLeaving() {
              return this.state === c.CHANNEL_STATES.leaving;
            }
            _replyEventName(e) {
              return `chan_reply_${e}`;
            }
            _on(e, t, r) {
              let n = e.toLocaleLowerCase(),
                i = { type: n, filter: t, callback: r };
              return (
                this.bindings[n]
                  ? this.bindings[n].push(i)
                  : (this.bindings[n] = [i]),
                this
              );
            }
            _off(e, t) {
              let r = e.toLocaleLowerCase();
              return (
                (this.bindings[r] = this.bindings[r].filter((e) => {
                  var n;
                  return !(
                    (null === (n = e.type) || void 0 === n
                      ? void 0
                      : n.toLocaleLowerCase()) === r && b.isEqual(e.filter, t)
                  );
                })),
                this
              );
            }
            static isEqual(e, t) {
              if (Object.keys(e).length !== Object.keys(t).length) return !1;
              for (let r in e) if (e[r] !== t[r]) return !1;
              return !0;
            }
            _rejoinUntilConnected() {
              (this.rejoinTimer.scheduleTimeout(),
                this.socket.isConnected() && this._rejoin());
            }
            _onClose(e) {
              this._on(c.CHANNEL_EVENTS.close, {}, e);
            }
            _onError(e) {
              this._on(c.CHANNEL_EVENTS.error, {}, (t) => e(t));
            }
            _canPush() {
              return this.socket.isConnected() && this._isJoined();
            }
            _rejoin(e = this.timeout) {
              this._isLeaving() ||
                (this.socket._leaveOpenTopic(this.topic),
                (this.state = c.CHANNEL_STATES.joining),
                this.joinPush.resend(e));
            }
            _getPayloadRecords(e) {
              let t = { new: {}, old: {} };
              return (
                ("INSERT" === e.type || "UPDATE" === e.type) &&
                  (t.new = y.convertChangeData(e.columns, e.record)),
                ("UPDATE" === e.type || "DELETE" === e.type) &&
                  (t.old = y.convertChangeData(e.columns, e.old_record)),
                t
              );
            }
          }
          r.default = b;
        },
        {
          "./lib/constants": "bOMoO",
          "./lib/push": "7DqQv",
          "./lib/timer": "hebkc",
          "./RealtimePresence": "hHRYW",
          "./lib/transformers": "fhKQI",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "7DqQv": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
          var n = e("../lib/constants");
          r.default = class {
            constructor(e, t, r = {}, i = n.DEFAULT_TIMEOUT) {
              ((this.channel = e),
                (this.event = t),
                (this.payload = r),
                (this.timeout = i),
                (this.sent = !1),
                (this.timeoutTimer = void 0),
                (this.ref = ""),
                (this.receivedResp = null),
                (this.recHooks = []),
                (this.refEvent = null));
            }
            resend(e) {
              ((this.timeout = e),
                this._cancelRefEvent(),
                (this.ref = ""),
                (this.refEvent = null),
                (this.receivedResp = null),
                (this.sent = !1),
                this.send());
            }
            send() {
              this._hasReceived("timeout") ||
                (this.startTimeout(),
                (this.sent = !0),
                this.channel.socket.push({
                  topic: this.channel.topic,
                  event: this.event,
                  payload: this.payload,
                  ref: this.ref,
                  join_ref: this.channel._joinRef(),
                }));
            }
            updatePayload(e) {
              this.payload = Object.assign(Object.assign({}, this.payload), e);
            }
            receive(e, t) {
              var r;
              return (
                this._hasReceived(e) &&
                  t(
                    null === (r = this.receivedResp) || void 0 === r
                      ? void 0
                      : r.response,
                  ),
                this.recHooks.push({ status: e, callback: t }),
                this
              );
            }
            startTimeout() {
              this.timeoutTimer ||
                ((this.ref = this.channel.socket._makeRef()),
                (this.refEvent = this.channel._replyEventName(this.ref)),
                this.channel._on(this.refEvent, {}, (e) => {
                  (this._cancelRefEvent(),
                    this._cancelTimeout(),
                    (this.receivedResp = e),
                    this._matchReceive(e));
                }),
                (this.timeoutTimer = setTimeout(() => {
                  this.trigger("timeout", {});
                }, this.timeout)));
            }
            trigger(e, t) {
              this.refEvent &&
                this.channel._trigger(this.refEvent, {
                  status: e,
                  response: t,
                });
            }
            destroy() {
              (this._cancelRefEvent(), this._cancelTimeout());
            }
            _cancelRefEvent() {
              this.refEvent && this.channel._off(this.refEvent, {});
            }
            _cancelTimeout() {
              (clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0));
            }
            _matchReceive({ status: e, response: t }) {
              this.recHooks
                .filter((t) => t.status === e)
                .forEach((e) => e.callback(t));
            }
            _hasReceived(e) {
              return this.receivedResp && this.receivedResp.status === e;
            }
          };
        },
        {
          "../lib/constants": "bOMoO",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      hHRYW: [
        function (e, t, r) {
          var n,
            i,
            a = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (a.defineInteropFlag(r),
            a.export(r, "REALTIME_PRESENCE_LISTEN_EVENTS", () => i),
            ((n = i || (i = {})).SYNC = "sync"),
            (n.JOIN = "join"),
            (n.LEAVE = "leave"));
          class o {
            constructor(e, t) {
              ((this.channel = e),
                (this.state = {}),
                (this.pendingDiffs = []),
                (this.joinRef = null),
                (this.caller = {
                  onJoin: () => {},
                  onLeave: () => {},
                  onSync: () => {},
                }));
              let r = (null == t ? void 0 : t.events) || {
                state: "presence_state",
                diff: "presence_diff",
              };
              (this.channel._on(r.state, {}, (e) => {
                let { onJoin: t, onLeave: r, onSync: n } = this.caller;
                ((this.joinRef = this.channel._joinRef()),
                  (this.state = o.syncState(this.state, e, t, r)),
                  this.pendingDiffs.forEach((e) => {
                    this.state = o.syncDiff(this.state, e, t, r);
                  }),
                  (this.pendingDiffs = []),
                  n());
              }),
                this.channel._on(r.diff, {}, (e) => {
                  let { onJoin: t, onLeave: r, onSync: n } = this.caller;
                  this.inPendingSyncState()
                    ? this.pendingDiffs.push(e)
                    : ((this.state = o.syncDiff(this.state, e, t, r)), n());
                }),
                this.onJoin((e, t, r) => {
                  this.channel._trigger("presence", {
                    event: "join",
                    key: e,
                    currentPresences: t,
                    newPresences: r,
                  });
                }),
                this.onLeave((e, t, r) => {
                  this.channel._trigger("presence", {
                    event: "leave",
                    key: e,
                    currentPresences: t,
                    leftPresences: r,
                  });
                }),
                this.onSync(() => {
                  this.channel._trigger("presence", { event: "sync" });
                }));
            }
            static syncState(e, t, r, n) {
              let i = this.cloneDeep(e),
                a = this.transformState(t),
                o = {},
                s = {};
              return (
                this.map(i, (e, t) => {
                  a[e] || (s[e] = t);
                }),
                this.map(a, (e, t) => {
                  let r = i[e];
                  if (r) {
                    let n = t.map((e) => e.presence_ref),
                      i = r.map((e) => e.presence_ref),
                      a = t.filter((e) => 0 > i.indexOf(e.presence_ref)),
                      l = r.filter((e) => 0 > n.indexOf(e.presence_ref));
                    (a.length > 0 && (o[e] = a), l.length > 0 && (s[e] = l));
                  } else o[e] = t;
                }),
                this.syncDiff(i, { joins: o, leaves: s }, r, n)
              );
            }
            static syncDiff(e, t, r, n) {
              let { joins: i, leaves: a } = {
                joins: this.transformState(t.joins),
                leaves: this.transformState(t.leaves),
              };
              return (
                r || (r = () => {}),
                n || (n = () => {}),
                this.map(i, (t, n) => {
                  var i;
                  let a = null !== (i = e[t]) && void 0 !== i ? i : [];
                  if (((e[t] = this.cloneDeep(n)), a.length > 0)) {
                    let r = e[t].map((e) => e.presence_ref),
                      n = a.filter((e) => 0 > r.indexOf(e.presence_ref));
                    e[t].unshift(...n);
                  }
                  r(t, a, n);
                }),
                this.map(a, (t, r) => {
                  let i = e[t];
                  if (!i) return;
                  let a = r.map((e) => e.presence_ref);
                  ((i = i.filter((e) => 0 > a.indexOf(e.presence_ref))),
                    (e[t] = i),
                    n(t, i, r),
                    0 === i.length && delete e[t]);
                }),
                e
              );
            }
            static map(e, t) {
              return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
            }
            static transformState(e) {
              return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
                (t, r) => {
                  let n = e[r];
                  return (
                    "metas" in n
                      ? (t[r] = n.metas.map(
                          (e) => (
                            (e.presence_ref = e.phx_ref),
                            delete e.phx_ref,
                            delete e.phx_ref_prev,
                            e
                          ),
                        ))
                      : (t[r] = n),
                    t
                  );
                },
                {},
              );
            }
            static cloneDeep(e) {
              return JSON.parse(JSON.stringify(e));
            }
            onJoin(e) {
              this.caller.onJoin = e;
            }
            onLeave(e) {
              this.caller.onLeave = e;
            }
            onSync(e) {
              this.caller.onSync = e;
            }
            inPendingSyncState() {
              return !this.joinRef || this.joinRef !== this.channel._joinRef();
            }
          }
          r.default = o;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      bjOns: [
        function (e, t, r) {
          t.exports = e("4a25385614f2f8db")(
            e("909092d649355d52").getBundleURL("jHkRA") +
              e("276b16d16dd249fa").resolve("gTbDL"),
          ).then(() => t.bundle.root("kdFBi"));
        },
        {
          "4a25385614f2f8db": "3D0UT",
          "909092d649355d52": "6haDs",
          "276b16d16dd249fa": "amLA4",
        },
      ],
      aHN9r: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "StorageClient", () => i.StorageClient));
          var i = e("./StorageClient"),
            a = e("./lib/types");
          n.exportAll(a, r);
          var o = e("./lib/errors");
          n.exportAll(o, r);
        },
        {
          "./StorageClient": "lxYrr",
          "./lib/types": "a3Yul",
          "./lib/errors": "5kIVh",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      lxYrr: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "StorageClient", () => l));
          var i = e("./packages/StorageFileApi"),
            a = n.interopDefault(i),
            o = e("./packages/StorageBucketApi"),
            s = n.interopDefault(o);
          class l extends s.default {
            constructor(e, t = {}, r) {
              super(e, t, r);
            }
            from(e) {
              return new a.default(this.url, this.headers, e, this.fetch);
            }
          }
        },
        {
          "./packages/StorageFileApi": "iTpJf",
          "./packages/StorageBucketApi": "dxNFZ",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      iTpJf: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
          var n = e("../lib/errors"),
            i = e("../lib/fetch"),
            a = e("../lib/helpers"),
            o = e("f9a57b1aa1f5a2fd").Buffer,
            s = function (e, t, r, n) {
              return new (r || (r = Promise))(function (i, a) {
                function o(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          let l = {
              limit: 100,
              offset: 0,
              sortBy: { column: "name", order: "asc" },
            },
            u = {
              cacheControl: "3600",
              contentType: "text/plain;charset=UTF-8",
              upsert: !1,
            };
          r.default = class {
            constructor(e, t = {}, r, n) {
              ((this.url = e),
                (this.headers = t),
                (this.bucketId = r),
                (this.fetch = (0, a.resolveFetch)(n)));
            }
            uploadOrUpdate(e, t, r, i) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n;
                  let a = Object.assign(Object.assign({}, u), i),
                    o = Object.assign(
                      Object.assign({}, this.headers),
                      "POST" === e && { "x-upsert": String(a.upsert) },
                    ),
                    s = a.metadata;
                  ("undefined" != typeof Blob && r instanceof Blob
                    ? ((n = new FormData()).append(
                        "cacheControl",
                        a.cacheControl,
                      ),
                      s && n.append("metadata", this.encodeMetadata(s)),
                      n.append("", r))
                    : "undefined" != typeof FormData && r instanceof FormData
                      ? ((n = r).append("cacheControl", a.cacheControl),
                        s && n.append("metadata", this.encodeMetadata(s)))
                      : ((n = r),
                        (o["cache-control"] = `max-age=${a.cacheControl}`),
                        (o["content-type"] = a.contentType),
                        s &&
                          (o["x-metadata"] = this.toBase64(
                            this.encodeMetadata(s),
                          ))),
                    (null == i ? void 0 : i.headers) &&
                      (o = Object.assign(Object.assign({}, o), i.headers)));
                  let l = this._removeEmptyFolders(t),
                    c = this._getFinalPath(l),
                    d = yield this.fetch(
                      `${this.url}/object/${c}`,
                      Object.assign(
                        { method: e, body: n, headers: o },
                        (null == a ? void 0 : a.duplex)
                          ? { duplex: a.duplex }
                          : {},
                      ),
                    ),
                    f = yield d.json();
                  if (d.ok)
                    return {
                      data: { path: l, id: f.Id, fullPath: f.Key },
                      error: null,
                    };
                  return { data: null, error: f };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            upload(e, t, r) {
              return s(this, void 0, void 0, function* () {
                return this.uploadOrUpdate("POST", e, t, r);
              });
            }
            uploadToSignedUrl(e, t, r, i) {
              return s(this, void 0, void 0, function* () {
                let a = this._removeEmptyFolders(e),
                  o = this._getFinalPath(a),
                  s = new URL(this.url + `/object/upload/sign/${o}`);
                s.searchParams.set("token", t);
                try {
                  let e;
                  let t = Object.assign({ upsert: u.upsert }, i),
                    n = Object.assign(Object.assign({}, this.headers), {
                      "x-upsert": String(t.upsert),
                    });
                  "undefined" != typeof Blob && r instanceof Blob
                    ? ((e = new FormData()).append(
                        "cacheControl",
                        t.cacheControl,
                      ),
                      e.append("", r))
                    : "undefined" != typeof FormData && r instanceof FormData
                      ? (e = r).append("cacheControl", t.cacheControl)
                      : ((e = r),
                        (n["cache-control"] = `max-age=${t.cacheControl}`),
                        (n["content-type"] = t.contentType));
                  let o = yield this.fetch(s.toString(), {
                      method: "PUT",
                      body: e,
                      headers: n,
                    }),
                    l = yield o.json();
                  if (o.ok)
                    return { data: { path: a, fullPath: l.Key }, error: null };
                  return { data: null, error: l };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUploadUrl(e, t) {
              return s(this, void 0, void 0, function* () {
                try {
                  let r = this._getFinalPath(e),
                    a = Object.assign({}, this.headers);
                  (null == t ? void 0 : t.upsert) && (a["x-upsert"] = "true");
                  let o = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/upload/sign/${r}`,
                      {},
                      { headers: a },
                    ),
                    s = new URL(this.url + o.url),
                    l = s.searchParams.get("token");
                  if (!l) throw new n.StorageError("No token returned by API");
                  return {
                    data: { signedUrl: s.toString(), path: e, token: l },
                    error: null,
                  };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            update(e, t, r) {
              return s(this, void 0, void 0, function* () {
                return this.uploadOrUpdate("PUT", e, t, r);
              });
            }
            move(e, t, r) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n = yield (0, i.post)(
                    this.fetch,
                    `${this.url}/object/move`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                      destinationBucket:
                        null == r ? void 0 : r.destinationBucket,
                    },
                    { headers: this.headers },
                  );
                  return { data: n, error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            copy(e, t, r) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n = yield (0, i.post)(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                      destinationBucket:
                        null == r ? void 0 : r.destinationBucket,
                    },
                    { headers: this.headers },
                  );
                  return { data: { path: n.Key }, error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUrl(e, t, r) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n = this._getFinalPath(e),
                    a = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/sign/${n}`,
                      Object.assign(
                        { expiresIn: t },
                        (null == r ? void 0 : r.transform)
                          ? { transform: r.transform }
                          : {},
                      ),
                      { headers: this.headers },
                    ),
                    o = (null == r ? void 0 : r.download)
                      ? `&download=${!0 === r.download ? "" : r.download}`
                      : "",
                    s = encodeURI(`${this.url}${a.signedURL}${o}`);
                  return { data: (a = { signedUrl: s }), error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUrls(e, t, r) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/sign/${this.bucketId}`,
                      { expiresIn: t, paths: e },
                      { headers: this.headers },
                    ),
                    a = (null == r ? void 0 : r.download)
                      ? `&download=${!0 === r.download ? "" : r.download}`
                      : "";
                  return {
                    data: n.map((e) =>
                      Object.assign(Object.assign({}, e), {
                        signedUrl: e.signedURL
                          ? encodeURI(`${this.url}${e.signedURL}${a}`)
                          : null,
                      }),
                    ),
                    error: null,
                  };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            download(e, t) {
              return s(this, void 0, void 0, function* () {
                let r = void 0 !== (null == t ? void 0 : t.transform),
                  a = this.transformOptsToQueryString(
                    (null == t ? void 0 : t.transform) || {},
                  ),
                  o = a ? `?${a}` : "";
                try {
                  let t = this._getFinalPath(e),
                    n = yield (0, i.get)(
                      this.fetch,
                      `${this.url}/${r ? "render/image/authenticated" : "object"}/${t}${o}`,
                      { headers: this.headers, noResolveJson: !0 },
                    ),
                    a = yield n.blob();
                  return { data: a, error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            info(e) {
              return s(this, void 0, void 0, function* () {
                let t = this._getFinalPath(e);
                try {
                  let e = yield (0, i.get)(
                    this.fetch,
                    `${this.url}/object/info/${t}`,
                    { headers: this.headers },
                  );
                  return { data: (0, a.recursiveToCamel)(e), error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            exists(e) {
              return s(this, void 0, void 0, function* () {
                let t = this._getFinalPath(e);
                try {
                  return (
                    yield (0, i.head)(this.fetch, `${this.url}/object/${t}`, {
                      headers: this.headers,
                    }),
                    { data: !0, error: null }
                  );
                } catch (e) {
                  if (
                    (0, n.isStorageError)(e) &&
                    e instanceof n.StorageUnknownError
                  ) {
                    let t = e.originalError;
                    if ([400, 404].includes(null == t ? void 0 : t.status))
                      return { data: !1, error: e };
                  }
                  throw e;
                }
              });
            }
            getPublicUrl(e, t) {
              let r = this._getFinalPath(e),
                n = [],
                i = (null == t ? void 0 : t.download)
                  ? `download=${!0 === t.download ? "" : t.download}`
                  : "";
              "" !== i && n.push(i);
              let a = void 0 !== (null == t ? void 0 : t.transform),
                o = this.transformOptsToQueryString(
                  (null == t ? void 0 : t.transform) || {},
                );
              "" !== o && n.push(o);
              let s = n.join("&");
              return (
                "" !== s && (s = `?${s}`),
                {
                  data: {
                    publicUrl: encodeURI(
                      `${this.url}/${a ? "render/image" : "object"}/public/${r}${s}`,
                    ),
                  },
                }
              );
            }
            remove(e) {
              return s(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, i.remove)(
                    this.fetch,
                    `${this.url}/object/${this.bucketId}`,
                    { prefixes: e },
                    { headers: this.headers },
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            list(e, t, r) {
              return s(this, void 0, void 0, function* () {
                try {
                  let n = Object.assign(
                      Object.assign(Object.assign({}, l), t),
                      { prefix: e || "" },
                    ),
                    a = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/list/${this.bucketId}`,
                      n,
                      { headers: this.headers },
                      r,
                    );
                  return { data: a, error: null };
                } catch (e) {
                  if ((0, n.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            encodeMetadata(e) {
              return JSON.stringify(e);
            }
            toBase64(e) {
              return void 0 !== o ? o.from(e).toString("base64") : btoa(e);
            }
            _getFinalPath(e) {
              return `${this.bucketId}/${e}`;
            }
            _removeEmptyFolders(e) {
              return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
            }
            transformOptsToQueryString(e) {
              let t = [];
              return (
                e.width && t.push(`width=${e.width}`),
                e.height && t.push(`height=${e.height}`),
                e.resize && t.push(`resize=${e.resize}`),
                e.format && t.push(`format=${e.format}`),
                e.quality && t.push(`quality=${e.quality}`),
                t.join("&")
              );
            }
          };
        },
        {
          f9a57b1aa1f5a2fd: "aMCDt",
          "../lib/errors": "5kIVh",
          "../lib/fetch": "4O6O7",
          "../lib/helpers": "ivBPN",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      aMCDt: [
        function (e, t, r) {
          var n,
            i,
            a = Object.create,
            o = Object.defineProperty,
            s = Object.getOwnPropertyDescriptor,
            l = Object.getOwnPropertyNames,
            u = Object.getPrototypeOf,
            c = Object.prototype.hasOwnProperty,
            d = (e, t) => () => (
              t || e((t = { exports: {} }).exports, t),
              t.exports
            ),
            f = (e, t, r, n) => {
              if ((t && "object" == typeof t) || "function" == typeof t)
                for (let i of l(t))
                  c.call(e, i) ||
                    i === r ||
                    o(e, i, {
                      get: () => t[i],
                      enumerable: !(n = s(t, i)) || n.enumerable,
                    });
              return e;
            },
            h = (e, t, r) => (
              (r = null != e ? a(u(e)) : {}),
              f(
                !t && e && e.__esModule
                  ? r
                  : o(r, "default", { value: e, enumerable: !0 }),
                e,
              )
            ),
            p = d((e) => {
              ((e.byteLength = function (e) {
                var t = s(e),
                  r = t[0],
                  n = t[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (e.toByteArray = function (e) {
                  var t,
                    r,
                    n = s(e),
                    o = n[0],
                    l = n[1],
                    u = new a(((o + l) * 3) / 4 - l),
                    c = 0,
                    d = l > 0 ? o - 4 : o;
                  for (r = 0; r < d; r += 4)
                    ((t =
                      (i[e.charCodeAt(r)] << 18) |
                      (i[e.charCodeAt(r + 1)] << 12) |
                      (i[e.charCodeAt(r + 2)] << 6) |
                      i[e.charCodeAt(r + 3)]),
                      (u[c++] = (t >> 16) & 255),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t));
                  return (
                    2 === l &&
                      ((t =
                        (i[e.charCodeAt(r)] << 2) |
                        (i[e.charCodeAt(r + 1)] >> 4)),
                      (u[c++] = 255 & t)),
                    1 === l &&
                      ((t =
                        (i[e.charCodeAt(r)] << 10) |
                        (i[e.charCodeAt(r + 1)] << 4) |
                        (i[e.charCodeAt(r + 2)] >> 2)),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)),
                    u
                  );
                }),
                (e.fromByteArray = function (e) {
                  for (
                    var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i;
                    o < s;
                    o += 16383
                  )
                    a.push(
                      (function (e, t, r) {
                        for (var i, a = [], o = t; o < r; o += 3)
                          a.push(
                            n[
                              ((i =
                                ((e[o] << 16) & 16711680) +
                                ((e[o + 1] << 8) & 65280) +
                                (255 & e[o + 2])) >>
                                18) &
                                63
                            ] +
                              n[(i >> 12) & 63] +
                              n[(i >> 6) & 63] +
                              n[63 & i],
                          );
                        return a.join("");
                      })(e, o, o + 16383 > s ? s : o + 16383),
                    );
                  return (
                    1 === i
                      ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                      : 2 === i &&
                        a.push(
                          n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                            n[(t >> 4) & 63] +
                            n[(t << 2) & 63] +
                            "=",
                        ),
                    a.join("")
                  );
                }));
              var t,
                r,
                n = [],
                i = [],
                a = "u" > typeof Uint8Array ? Uint8Array : Array,
                o =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              for (t = 0, r = o.length; t < r; ++t)
                ((n[t] = o[t]), (i[o.charCodeAt(t)] = t));
              function s(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var n = r === t ? 0 : 4 - (r % 4);
                return [r, n];
              }
              ((i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63));
            }),
            m = d((e) => {
              ((e.read = function (e, t, r, n, i) {
                var a,
                  o,
                  s = 8 * i - n - 1,
                  l = (1 << s) - 1,
                  u = l >> 1,
                  c = -7,
                  d = r ? i - 1 : 0,
                  f = r ? -1 : 1,
                  h = e[t + d];
                for (
                  d += f, a = h & ((1 << -c) - 1), h >>= -c, c += s;
                  c > 0;
                  a = 256 * a + e[t + d], d += f, c -= 8
                );
                for (
                  o = a & ((1 << -c) - 1), a >>= -c, c += n;
                  c > 0;
                  o = 256 * o + e[t + d], d += f, c -= 8
                );
                if (0 === a) a = 1 - u;
                else {
                  if (a === l) return o ? NaN : (h ? -1 : 1) * (1 / 0);
                  ((o += Math.pow(2, n)), (a -= u));
                }
                return (h ? -1 : 1) * o * Math.pow(2, a - n);
              }),
                (e.write = function (e, t, r, n, i, a) {
                  var o,
                    s,
                    l,
                    u = 8 * a - i - 1,
                    c = (1 << u) - 1,
                    d = c >> 1,
                    f = 23 === i ? 5960464477539062e-23 : 0,
                    h = n ? 0 : a - 1,
                    p = n ? 1 : -1,
                    m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((s = isNaN(t) ? 1 : 0), (o = c))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                        o + d >= 1
                          ? (t += f / l)
                          : (t += f * Math.pow(2, 1 - d)),
                        t * l >= 2 && (o++, (l /= 2)),
                        o + d >= c
                          ? ((s = 0), (o = c))
                          : o + d >= 1
                            ? ((s = (t * l - 1) * Math.pow(2, i)), (o += d))
                            : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)),
                              (o = 0)));
                    i >= 8;
                    e[r + h] = 255 & s, h += p, s /= 256, i -= 8
                  );
                  for (
                    o = (o << i) | s, u += i;
                    u > 0;
                    e[r + h] = 255 & o, h += p, o /= 256, u -= 8
                  );
                  e[r + h - p] |= 128 * m;
                }));
            }),
            g = d((e) => {
              var t = p(),
                r = m(),
                n =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function i(e) {
                if (e > 2147483647)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"',
                  );
                let t = new Uint8Array(e);
                return (Object.setPrototypeOf(t, a.prototype), t);
              }
              function a(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number',
                    );
                  return l(e);
                }
                return o(e, t, r);
              }
              function o(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !a.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    let r = 0 | f(e, t),
                      n = i(r),
                      o = n.write(e, t);
                    return (o !== r && (n = n.slice(0, o)), n);
                  })(e, t);
                if (ArrayBuffer.isView(e))
                  return (function (e) {
                    if (D(e, Uint8Array)) {
                      let t = new Uint8Array(e);
                      return c(t.buffer, t.byteOffset, t.byteLength);
                    }
                    return u(e);
                  })(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e,
                  );
                if (
                  D(e, ArrayBuffer) ||
                  (e && D(e.buffer, ArrayBuffer)) ||
                  ("u" > typeof SharedArrayBuffer &&
                    (D(e, SharedArrayBuffer) ||
                      (e && D(e.buffer, SharedArrayBuffer))))
                )
                  return c(e, t, r);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number',
                  );
                let n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return a.from(n, t, r);
                let o = (function (e) {
                  var t;
                  if (a.isBuffer(e)) {
                    let t = 0 | d(e.length),
                      r = i(t);
                    return (0 === r.length || e.copy(r, 0, 0, t), r);
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? i(0)
                      : u(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                      ? u(e.data)
                      : void 0;
                })(e);
                if (o) return o;
                if (
                  "u" > typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return a.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e,
                );
              }
              function s(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"',
                  );
              }
              function l(e) {
                return (s(e), i(e < 0 ? 0 : 0 | d(e)));
              }
              function u(e) {
                let t = e.length < 0 ? 0 : 0 | d(e.length),
                  r = i(t);
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r;
              }
              function c(e, t, r) {
                let n;
                if (t < 0 || e.byteLength < t)
                  throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0))
                  throw RangeError('"length" is outside of buffer bounds');
                return (
                  Object.setPrototypeOf(
                    (n =
                      void 0 === t && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                          ? new Uint8Array(e, t)
                          : new Uint8Array(e, t, r)),
                    a.prototype,
                  ),
                  n
                );
              }
              function d(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
                  );
                return 0 | e;
              }
              function f(e, t) {
                if (a.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || D(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e,
                  );
                let r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (;;)
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return O(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return L(e).length;
                    default:
                      if (i) return n ? -1 : O(e).length;
                      ((t = ("" + t).toLowerCase()), (i = !0));
                  }
              }
              function h(e, r, n) {
                let i = !1;
                if (
                  ((void 0 === r || r < 0) && (r = 0),
                  r > this.length ||
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0) ||
                    (n >>>= 0) <= (r >>>= 0))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        let n = e.length;
                        ((!t || t < 0) && (t = 0),
                          (!r || r < 0 || r > n) && (r = n));
                        let i = "";
                        for (let n = t; n < r; ++n) i += $[e[n]];
                        return i;
                      })(this, r, n);
                    case "utf8":
                    case "utf-8":
                      return b(this, r, n);
                    case "ascii":
                      return (function (e, t, r) {
                        let n = "";
                        r = Math.min(e.length, r);
                        for (let i = t; i < r; ++i)
                          n += String.fromCharCode(127 & e[i]);
                        return n;
                      })(this, r, n);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        let n = "";
                        r = Math.min(e.length, r);
                        for (let i = t; i < r; ++i)
                          n += String.fromCharCode(e[i]);
                        return n;
                      })(this, r, n);
                    case "base64":
                      var a, o;
                      return (
                        (a = r),
                        (o = n),
                        0 === a && o === this.length
                          ? t.fromByteArray(this)
                          : t.fromByteArray(this.slice(a, o))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        let n = e.slice(t, r),
                          i = "";
                        for (let e = 0; e < n.length - 1; e += 2)
                          i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                        return i;
                      })(this, r, n);
                    default:
                      if (i) throw TypeError("Unknown encoding: " + e);
                      ((e = (e + "").toLowerCase()), (i = !0));
                  }
              }
              function g(e, t, r) {
                let n = e[t];
                ((e[t] = e[r]), (e[r] = n));
              }
              function y(e, t, r, n, i) {
                var o;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                      ? (r = 2147483647)
                      : r < -2147483648 && (r = -2147483648),
                  (o = r = +r) != o && (r = i ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (i) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)))
                  return 0 === t.length ? -1 : v(e, t, r, n, i);
                if ("number" == typeof t)
                  return (
                    (t &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                      : v(e, [t], r, n, i)
                  );
                throw TypeError("val must be string, number or Buffer");
              }
              function v(e, t, r, n, i) {
                let a,
                  o = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  ((o = 2), (s /= 2), (l /= 2), (r /= 2));
                }
                function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o);
                }
                if (i) {
                  let n = -1;
                  for (a = r; a < s; a++)
                    if (u(e, a) === u(t, -1 === n ? 0 : a - n)) {
                      if ((-1 === n && (n = a), a - n + 1 === l)) return n * o;
                    } else (-1 !== n && (a -= a - n), (n = -1));
                } else
                  for (r + l > s && (r = s - l), a = r; a >= 0; a--) {
                    let r = !0;
                    for (let n = 0; n < l; n++)
                      if (u(e, a + n) !== u(t, n)) {
                        r = !1;
                        break;
                      }
                    if (r) return a;
                  }
                return -1;
              }
              function b(e, t, r) {
                r = Math.min(e.length, r);
                let n = [],
                  i = t;
                for (; i < r; ) {
                  let t = e[i],
                    a = null,
                    o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                  if (i + o <= r) {
                    let r, n, s, l;
                    switch (o) {
                      case 1:
                        t < 128 && (a = t);
                        break;
                      case 2:
                        (192 & (r = e[i + 1])) == 128 &&
                          (l = ((31 & t) << 6) | (63 & r)) > 127 &&
                          (a = l);
                        break;
                      case 3:
                        ((r = e[i + 1]),
                          (n = e[i + 2]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (l =
                              ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) >
                              2047 &&
                            (l < 55296 || l > 57343) &&
                            (a = l));
                        break;
                      case 4:
                        ((r = e[i + 1]),
                          (n = e[i + 2]),
                          (s = e[i + 3]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (192 & s) == 128 &&
                            (l =
                              ((15 & t) << 18) |
                              ((63 & r) << 12) |
                              ((63 & n) << 6) |
                              (63 & s)) > 65535 &&
                            l < 1114112 &&
                            (a = l));
                    }
                  }
                  (null === a
                    ? ((a = 65533), (o = 1))
                    : a > 65535 &&
                      ((a -= 65536),
                      n.push(((a >>> 10) & 1023) | 55296),
                      (a = 56320 | (1023 & a))),
                    n.push(a),
                    (i += o));
                }
                return (function (e) {
                  let t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  let r = "",
                    n = 0;
                  for (; n < t; )
                    r += String.fromCharCode.apply(
                      String,
                      e.slice(n, (n += 4096)),
                    );
                  return r;
                })(n);
              }
              function w(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function k(e, t, r, n, i, o) {
                if (!a.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance',
                  );
                if (t > i || t < o)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range");
              }
              function _(e, t, r, n, i) {
                P(t, n, i, e, r, 7);
                let a = Number(t & BigInt(4294967295));
                ((e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a));
                let o = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  r
                );
              }
              function E(e, t, r, n, i) {
                P(t, n, i, e, r, 7);
                let a = Number(t & BigInt(4294967295));
                ((e[r + 7] = a),
                  (a >>= 8),
                  (e[r + 6] = a),
                  (a >>= 8),
                  (e[r + 5] = a),
                  (a >>= 8),
                  (e[r + 4] = a));
                let o = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (
                  (e[r + 3] = o),
                  (o >>= 8),
                  (e[r + 2] = o),
                  (o >>= 8),
                  (e[r + 1] = o),
                  (o >>= 8),
                  (e[r] = o),
                  r + 8
                );
              }
              function S(e, t, r, n, i, a) {
                if (r + n > e.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function x(e, t, n, i, a) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  a ||
                    S(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  r.write(e, t, n, i, 23, 4),
                  n + 4
                );
              }
              function T(e, t, n, i, a) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  a ||
                    S(
                      e,
                      t,
                      n,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292,
                    ),
                  r.write(e, t, n, i, 52, 8),
                  n + 8
                );
              }
              ((e.Buffer = a),
                (e.SlowBuffer = function (e) {
                  return (+e != e && (e = 0), a.alloc(+e));
                }),
                (e.INSPECT_MAX_BYTES = 50),
                (e.kMaxLength = 2147483647),
                (a.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    let e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                !a.TYPED_ARRAY_SUPPORT &&
                  "u" > typeof console &&
                  "function" == typeof console.error &&
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
                  ),
                Object.defineProperty(a.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(a.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (a.poolSize = 8192),
                (a.from = function (e, t, r) {
                  return o(e, t, r);
                }),
                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(a, Uint8Array),
                (a.alloc = function (e, t, r) {
                  return (
                    s(e),
                    e <= 0
                      ? i(e)
                      : void 0 !== t
                        ? "string" == typeof r
                          ? i(e).fill(t, r)
                          : i(e).fill(t)
                        : i(e)
                  );
                }),
                (a.allocUnsafe = function (e) {
                  return l(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                  return l(e);
                }),
                (a.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== a.prototype;
                }),
                (a.compare = function (e, t) {
                  if (
                    (D(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    D(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                    !a.isBuffer(e) || !a.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                    );
                  if (e === t) return 0;
                  let r = e.length,
                    n = t.length;
                  for (let i = 0, a = Math.min(r, n); i < a; ++i)
                    if (e[i] !== t[i]) {
                      ((r = e[i]), (n = t[i]));
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (a.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (a.concat = function (e, t) {
                  let r;
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers',
                    );
                  if (0 === e.length) return a.alloc(0);
                  if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                  let n = a.allocUnsafe(t),
                    i = 0;
                  for (r = 0; r < e.length; ++r) {
                    let t = e[r];
                    if (D(t, Uint8Array))
                      i + t.length > n.length
                        ? (a.isBuffer(t) || (t = a.from(t)), t.copy(n, i))
                        : Uint8Array.prototype.set.call(n, t, i);
                    else if (a.isBuffer(t)) t.copy(n, i);
                    else
                      throw TypeError(
                        '"list" argument must be an Array of Buffers',
                      );
                    i += t.length;
                  }
                  return n;
                }),
                (a.byteLength = f),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                  let e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits",
                    );
                  for (let t = 0; t < e; t += 2) g(this, t, t + 1);
                  return this;
                }),
                (a.prototype.swap32 = function () {
                  let e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits",
                    );
                  for (let t = 0; t < e; t += 4)
                    (g(this, t, t + 3), g(this, t + 1, t + 2));
                  return this;
                }),
                (a.prototype.swap64 = function () {
                  let e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits",
                    );
                  for (let t = 0; t < e; t += 8)
                    (g(this, t, t + 7),
                      g(this, t + 1, t + 6),
                      g(this, t + 2, t + 5),
                      g(this, t + 3, t + 4));
                  return this;
                }),
                (a.prototype.toString = function () {
                  let e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                      ? b(this, 0, e)
                      : h.apply(this, arguments);
                }),
                (a.prototype.toLocaleString = a.prototype.toString),
                (a.prototype.equals = function (e) {
                  if (!a.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === a.compare(this, e);
                }),
                (a.prototype.inspect = function () {
                  let t = "",
                    r = e.INSPECT_MAX_BYTES;
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  );
                }),
                n && (a.prototype[n] = a.prototype.inspect),
                (a.prototype.compare = function (e, t, r, n, i) {
                  if (
                    (D(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    !a.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e,
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || r > e.length || n < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= i && t >= r) return 0;
                  if (n >= i) return -1;
                  if (t >= r) return 1;
                  if (
                    ((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)
                  )
                    return 0;
                  let o = i - n,
                    s = r - t,
                    l = Math.min(o, s),
                    u = this.slice(n, i),
                    c = e.slice(t, r);
                  for (let e = 0; e < l; ++e)
                    if (u[e] !== c[e]) {
                      ((o = u[e]), (s = c[e]));
                      break;
                    }
                  return o < s ? -1 : s < o ? 1 : 0;
                }),
                (a.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (a.prototype.indexOf = function (e, t, r) {
                  return y(this, e, t, r, !0);
                }),
                (a.prototype.lastIndexOf = function (e, t, r) {
                  return y(this, e, t, r, !1);
                }),
                (a.prototype.write = function (e, t, r, n) {
                  var i, a, o, s, l, u, c, d;
                  if (void 0 === t) ((n = "utf8"), (r = this.length), (t = 0));
                  else if (void 0 === r && "string" == typeof t)
                    ((n = t), (r = this.length), (t = 0));
                  else if (isFinite(t))
                    ((t >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0)));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                    );
                  let f = this.length - t;
                  if (
                    ((void 0 === r || r > f) && (r = f),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  n || (n = "utf8");
                  let h = !1;
                  for (;;)
                    switch (n) {
                      case "hex":
                        return (function (e, t, r, n) {
                          let i;
                          r = Number(r) || 0;
                          let a = e.length - r;
                          n ? (n = Number(n)) > a && (n = a) : (n = a);
                          let o = t.length;
                          for (n > o / 2 && (n = o / 2), i = 0; i < n; ++i) {
                            let n = parseInt(t.substr(2 * i, 2), 16);
                            if (n != n) break;
                            e[r + i] = n;
                          }
                          return i;
                        })(this, e, t, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (i = t),
                          (a = r),
                          N(O(e, this.length - i), this, i, a)
                        );
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return (
                          (o = t),
                          (s = r),
                          N(
                            (function (e) {
                              let t = [];
                              for (let r = 0; r < e.length; ++r)
                                t.push(255 & e.charCodeAt(r));
                              return t;
                            })(e),
                            this,
                            o,
                            s,
                          )
                        );
                      case "base64":
                        return ((l = t), (u = r), N(L(e), this, l, u));
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (c = t),
                          (d = r),
                          N(
                            (function (e, t) {
                              let r,
                                n,
                                i = [];
                              for (
                                let a = 0;
                                a < e.length && !((t -= 2) < 0);
                                ++a
                              )
                                ((n = (r = e.charCodeAt(a)) >> 8),
                                  i.push(r % 256),
                                  i.push(n));
                              return i;
                            })(e, this.length - c),
                            this,
                            c,
                            d,
                          )
                        );
                      default:
                        if (h) throw TypeError("Unknown encoding: " + n);
                        ((n = ("" + n).toLowerCase()), (h = !0));
                    }
                }),
                (a.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (a.prototype.slice = function (e, t) {
                  let r = this.length;
                  ((e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e));
                  let n = this.subarray(e, t);
                  return (Object.setPrototypeOf(n, a.prototype), n);
                }),
                (a.prototype.readUintLE = a.prototype.readUIntLE =
                  function (e, t, r) {
                    ((e >>>= 0), (t >>>= 0), r || w(e, t, this.length));
                    let n = this[e],
                      i = 1,
                      a = 0;
                    for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
                    return n;
                  }),
                (a.prototype.readUintBE = a.prototype.readUIntBE =
                  function (e, t, r) {
                    ((e >>>= 0), (t >>>= 0), r || w(e, t, this.length));
                    let n = this[e + --t],
                      i = 1;
                    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
                    return n;
                  }),
                (a.prototype.readUint8 = a.prototype.readUInt8 =
                  function (e, t) {
                    return ((e >>>= 0), t || w(e, 1, this.length), this[e]);
                  }),
                (a.prototype.readUint16LE = a.prototype.readUInt16LE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 2, this.length),
                      this[e] | (this[e + 1] << 8)
                    );
                  }),
                (a.prototype.readUint16BE = a.prototype.readUInt16BE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 2, this.length),
                      (this[e] << 8) | this[e + 1]
                    );
                  }),
                (a.prototype.readUint32LE = a.prototype.readUInt32LE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 4, this.length),
                      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                        16777216 * this[e + 3]
                    );
                  }),
                (a.prototype.readUint32BE = a.prototype.readUInt32BE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 4, this.length),
                      16777216 * this[e] +
                        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                    );
                  }),
                (a.prototype.readBigUInt64LE = F(function (e) {
                  j((e >>>= 0), "offset");
                  let t = this[e],
                    r = this[e + 7];
                  (void 0 === t || void 0 === r) && R(e, this.length - 8);
                  let n =
                      t +
                      256 * this[++e] +
                      65536 * this[++e] +
                      16777216 * this[++e],
                    i =
                      this[++e] +
                      256 * this[++e] +
                      65536 * this[++e] +
                      16777216 * r;
                  return BigInt(n) + (BigInt(i) << BigInt(32));
                })),
                (a.prototype.readBigUInt64BE = F(function (e) {
                  j((e >>>= 0), "offset");
                  let t = this[e],
                    r = this[e + 7];
                  (void 0 === t || void 0 === r) && R(e, this.length - 8);
                  let n =
                      16777216 * t +
                      65536 * this[++e] +
                      256 * this[++e] +
                      this[++e],
                    i =
                      16777216 * this[++e] +
                      65536 * this[++e] +
                      256 * this[++e] +
                      r;
                  return (BigInt(n) << BigInt(32)) + BigInt(i);
                })),
                (a.prototype.readIntLE = function (e, t, r) {
                  ((e >>>= 0), (t >>>= 0), r || w(e, t, this.length));
                  let n = this[e],
                    i = 1,
                    a = 0;
                  for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
                  return (n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n);
                }),
                (a.prototype.readIntBE = function (e, t, r) {
                  ((e >>>= 0), (t >>>= 0), r || w(e, t, this.length));
                  let n = t,
                    i = 1,
                    a = this[e + --n];
                  for (; n > 0 && (i *= 256); ) a += this[e + --n] * i;
                  return (a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a);
                }),
                (a.prototype.readInt8 = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 1, this.length),
                    128 & this[e] ? -((255 - this[e] + 1) * 1) : this[e]
                  );
                }),
                (a.prototype.readInt16LE = function (e, t) {
                  ((e >>>= 0), t || w(e, 2, this.length));
                  let r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (a.prototype.readInt16BE = function (e, t) {
                  ((e >>>= 0), t || w(e, 2, this.length));
                  let r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (a.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (a.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (a.prototype.readBigInt64LE = F(function (e) {
                  j((e >>>= 0), "offset");
                  let t = this[e],
                    r = this[e + 7];
                  return (
                    (void 0 === t || void 0 === r) && R(e, this.length - 8),
                    (BigInt(
                      this[e + 4] +
                        256 * this[e + 5] +
                        65536 * this[e + 6] +
                        (r << 24),
                    ) <<
                      BigInt(32)) +
                      BigInt(
                        t +
                          256 * this[++e] +
                          65536 * this[++e] +
                          16777216 * this[++e],
                      )
                  );
                })),
                (a.prototype.readBigInt64BE = F(function (e) {
                  j((e >>>= 0), "offset");
                  let t = this[e],
                    r = this[e + 7];
                  return (
                    (void 0 === t || void 0 === r) && R(e, this.length - 8),
                    (BigInt(
                      (t << 24) +
                        65536 * this[++e] +
                        256 * this[++e] +
                        this[++e],
                    ) <<
                      BigInt(32)) +
                      BigInt(
                        16777216 * this[++e] +
                          65536 * this[++e] +
                          256 * this[++e] +
                          r,
                      )
                  );
                })),
                (a.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    r.read(this, e, !0, 23, 4)
                  );
                }),
                (a.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    r.read(this, e, !1, 23, 4)
                  );
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 8, this.length),
                    r.read(this, e, !0, 52, 8)
                  );
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 8, this.length),
                    r.read(this, e, !1, 52, 8)
                  );
                }),
                (a.prototype.writeUintLE = a.prototype.writeUIntLE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1;
                      k(this, e, t, r, n, 0);
                    }
                    let i = 1,
                      a = 0;
                    for (this[t] = 255 & e; ++a < r && (i *= 256); )
                      this[t + a] = (e / i) & 255;
                    return t + r;
                  }),
                (a.prototype.writeUintBE = a.prototype.writeUIntBE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1;
                      k(this, e, t, r, n, 0);
                    }
                    let i = r - 1,
                      a = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                      this[t + i] = (e / a) & 255;
                    return t + r;
                  }),
                (a.prototype.writeUint8 = a.prototype.writeUInt8 =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || k(this, e, t, 1, 255, 0),
                      (this[t] = 255 & e),
                      t + 1
                    );
                  }),
                (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || k(this, e, t, 2, 65535, 0),
                      (this[t] = 255 & e),
                      (this[t + 1] = e >>> 8),
                      t + 2
                    );
                  }),
                (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || k(this, e, t, 2, 65535, 0),
                      (this[t] = e >>> 8),
                      (this[t + 1] = 255 & e),
                      t + 2
                    );
                  }),
                (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || k(this, e, t, 4, 4294967295, 0),
                      (this[t + 3] = e >>> 24),
                      (this[t + 2] = e >>> 16),
                      (this[t + 1] = e >>> 8),
                      (this[t] = 255 & e),
                      t + 4
                    );
                  }),
                (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || k(this, e, t, 4, 4294967295, 0),
                      (this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e),
                      t + 4
                    );
                  }),
                (a.prototype.writeBigUInt64LE = F(function (e, t = 0) {
                  return _(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (a.prototype.writeBigUInt64BE = F(function (e, t = 0) {
                  return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (a.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1);
                    k(this, e, t, r, n - 1, -n);
                  }
                  let i = 0,
                    a = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++i < r && (a *= 256); )
                    (e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
                      (this[t + i] = (((e / a) >> 0) - o) & 255));
                  return t + r;
                }),
                (a.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1);
                    k(this, e, t, r, n - 1, -n);
                  }
                  let i = r - 1,
                    a = 1,
                    o = 0;
                  for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                    (e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
                      (this[t + i] = (((e / a) >> 0) - o) & 255));
                  return t + r;
                }),
                (a.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || k(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || k(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (a.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || k(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (a.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || k(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (a.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || k(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeBigInt64LE = F(function (e, t = 0) {
                  return _(
                    this,
                    e,
                    t,
                    -BigInt("0x8000000000000000"),
                    BigInt("0x7fffffffffffffff"),
                  );
                })),
                (a.prototype.writeBigInt64BE = F(function (e, t = 0) {
                  return E(
                    this,
                    e,
                    t,
                    -BigInt("0x8000000000000000"),
                    BigInt("0x7fffffffffffffff"),
                  );
                })),
                (a.prototype.writeFloatLE = function (e, t, r) {
                  return x(this, e, t, !0, r);
                }),
                (a.prototype.writeFloatBE = function (e, t, r) {
                  return x(this, e, t, !1, r);
                }),
                (a.prototype.writeDoubleLE = function (e, t, r) {
                  return T(this, e, t, !0, r);
                }),
                (a.prototype.writeDoubleBE = function (e, t, r) {
                  return T(this, e, t, !1, r);
                }),
                (a.prototype.copy = function (e, t, r, n) {
                  if (!a.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  (n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r));
                  let i = n - r;
                  return (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                      ? this.copyWithin(t, r, n)
                      : Uint8Array.prototype.set.call(
                          e,
                          this.subarray(r, n),
                          t,
                        ),
                    i
                  );
                }),
                (a.prototype.fill = function (e, t, r, n) {
                  let i;
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !a.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                      let t = e.charCodeAt(0);
                      (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= t) return this;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (i = t; i < r; ++i) this[i] = e;
                  else {
                    let o = a.isBuffer(e) ? e : a.from(e, n),
                      s = o.length;
                    if (0 === s)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"',
                      );
                    for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
                  }
                  return this;
                }));
              var C = {};
              function A(e, t, r) {
                C[e] = class extends r {
                  constructor() {
                    (super(),
                      Object.defineProperty(this, "message", {
                        value: t.apply(this, arguments),
                        writable: !0,
                        configurable: !0,
                      }),
                      (this.name = "".concat(this.name, " [").concat(e, "]")),
                      this.stack,
                      delete this.name);
                  }
                  get code() {
                    return e;
                  }
                  set code(e) {
                    Object.defineProperty(this, "code", {
                      configurable: !0,
                      enumerable: !0,
                      value: e,
                      writable: !0,
                    });
                  }
                  toString() {
                    return ""
                      .concat(this.name, " [")
                      .concat(e, "]: ")
                      .concat(this.message);
                  }
                };
              }
              function I(e) {
                let t = "",
                  r = e.length,
                  n = "-" === e[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3)
                  t = "_".concat(e.slice(r - 3, r)).concat(t);
                return "".concat(e.slice(0, r)).concat(t);
              }
              function P(e, t, r, n, i, a) {
                if (e > r || e < t) {
                  let n = "bigint" == typeof t ? "n" : "",
                    i;
                  throw (
                    (i =
                      a > 3
                        ? 0 === t || t === BigInt(0)
                          ? ">= 0"
                              .concat(n, " and < 2")
                              .concat(n, " ** ")
                              .concat((a + 1) * 8)
                              .concat(n)
                          : ">= -(2"
                              .concat(n, " ** ")
                              .concat((a + 1) * 8 - 1)
                              .concat(n, ") and < 2 ** ") +
                            "".concat((a + 1) * 8 - 1).concat(n)
                        : ">= "
                            .concat(t)
                            .concat(n, " and <= ")
                            .concat(r)
                            .concat(n)),
                    new C.ERR_OUT_OF_RANGE("value", i, e)
                  );
                }
                (j(i, "offset"),
                  (void 0 === n[i] || void 0 === n[i + a]) &&
                    R(i, n.length - (a + 1)));
              }
              function j(e, t) {
                if ("number" != typeof e)
                  throw new C.ERR_INVALID_ARG_TYPE(t, "number", e);
              }
              function R(e, t, r) {
                throw Math.floor(e) !== e
                  ? (j(e, r),
                    new C.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
                  : t < 0
                    ? new C.ERR_BUFFER_OUT_OF_BOUNDS()
                    : new C.ERR_OUT_OF_RANGE(
                        r || "offset",
                        ">= ".concat(r ? 1 : 0, " and <= ").concat(t),
                        e,
                      );
              }
              (A(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (e) {
                  return e
                    ? "".concat(e, " is outside of buffer bounds")
                    : "Attempt to access memory outside buffer bounds";
                },
                RangeError,
              ),
                A(
                  "ERR_INVALID_ARG_TYPE",
                  function (e, t) {
                    return 'The "'
                      .concat(
                        e,
                        '" argument must be of type number. Received type ',
                      )
                      .concat(typeof t);
                  },
                  TypeError,
                ),
                A(
                  "ERR_OUT_OF_RANGE",
                  function (e, t, r) {
                    let n = 'The value of "'.concat(e, '" is out of range.'),
                      i = r;
                    return (
                      Number.isInteger(r) && Math.abs(r) > 4294967296
                        ? (i = I(String(r)))
                        : "bigint" == typeof r &&
                          ((i = String(r)),
                          (r > BigInt(2) ** BigInt(32) ||
                            r < -(BigInt(2) ** BigInt(32))) &&
                            (i = I(i)),
                          (i += "n")),
                      (n += " It must be ".concat(t, ". Received ").concat(i))
                    );
                  },
                  RangeError,
                ));
              var U = /[^+/0-9A-Za-z-_]/g;
              function O(e, t) {
                t = t || 1 / 0;
                let r,
                  n = e.length,
                  i = null,
                  a = [];
                for (let o = 0; o < n; ++o) {
                  if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319 || o + 1 === n) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      ((t -= 3) > -1 && a.push(239, 191, 189), (i = r));
                      continue;
                    }
                    r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    a.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128,
                    );
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    a.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128,
                    );
                  } else throw Error("Invalid code point");
                }
                return a;
              }
              function L(e) {
                return t.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(U, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e),
                );
              }
              function N(e, t, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                  t[i + r] = e[i];
                return i;
              }
              function D(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var $ = (function () {
                let e = "0123456789abcdef",
                  t = Array(256);
                for (let r = 0; r < 16; ++r) {
                  let n = 16 * r;
                  for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
                }
                return t;
              })();
              function F(e) {
                return typeof BigInt > "u" ? M : e;
              }
              function M() {
                throw Error("BigInt not supported");
              }
            }),
            y = {};
          (((e, t) => {
            for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
          })(y, { default: () => b }),
            (t.exports = f(o({}, "__esModule", { value: !0 }), y)));
          var v = h(g());
          ((n = h(g())),
            (i = t.exports),
            f(y, n, "default"),
            i && f(i, n, "default"));
          var b = v.default; /*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
        },
        {},
      ],
      "5kIVh": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "StorageError", () => i),
            n.export(r, "isStorageError", () => a),
            n.export(r, "StorageApiError", () => o),
            n.export(r, "StorageUnknownError", () => s));
          class i extends Error {
            constructor(e) {
              (super(e),
                (this.__isStorageError = !0),
                (this.name = "StorageError"));
            }
          }
          function a(e) {
            return (
              "object" == typeof e && null !== e && "__isStorageError" in e
            );
          }
          class o extends i {
            constructor(e, t) {
              (super(e), (this.name = "StorageApiError"), (this.status = t));
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
              };
            }
          }
          class s extends i {
            constructor(e, t) {
              (super(e),
                (this.name = "StorageUnknownError"),
                (this.originalError = t));
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "4O6O7": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "get", () => d),
            n.export(r, "post", () => f),
            n.export(r, "put", () => h),
            n.export(r, "head", () => p),
            n.export(r, "remove", () => m));
          var i = e("./errors"),
            a = e("./helpers"),
            o = function (e, t, r, n) {
              return new (r || (r = Promise))(function (i, a) {
                function o(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          let s = (e) =>
              e.msg ||
              e.message ||
              e.error_description ||
              e.error ||
              JSON.stringify(e),
            l = (e, t, r) =>
              o(void 0, void 0, void 0, function* () {
                let n = yield (0, a.resolveResponse)();
                e instanceof n && !(null == r ? void 0 : r.noResolveJson)
                  ? e
                      .json()
                      .then((r) => {
                        t(new i.StorageApiError(s(r), e.status || 500));
                      })
                      .catch((e) => {
                        t(new i.StorageUnknownError(s(e), e));
                      })
                  : t(new i.StorageUnknownError(s(e), e));
              }),
            u = (e, t, r, n) => {
              let i = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {},
              };
              return "GET" === e
                ? i
                : ((i.headers = Object.assign(
                    { "Content-Type": "application/json" },
                    null == t ? void 0 : t.headers,
                  )),
                  n && (i.body = JSON.stringify(n)),
                  Object.assign(Object.assign({}, i), r));
            };
          function c(e, t, r, n, i, a) {
            return o(this, void 0, void 0, function* () {
              return new Promise((o, s) => {
                e(r, u(t, n, i, a))
                  .then((e) => {
                    if (!e.ok) throw e;
                    return (null == n ? void 0 : n.noResolveJson)
                      ? e
                      : e.json();
                  })
                  .then((e) => o(e))
                  .catch((e) => l(e, s, n));
              });
            });
          }
          function d(e, t, r, n) {
            return o(this, void 0, void 0, function* () {
              return c(e, "GET", t, r, n);
            });
          }
          function f(e, t, r, n, i) {
            return o(this, void 0, void 0, function* () {
              return c(e, "POST", t, n, i, r);
            });
          }
          function h(e, t, r, n, i) {
            return o(this, void 0, void 0, function* () {
              return c(e, "PUT", t, n, i, r);
            });
          }
          function p(e, t, r, n) {
            return o(this, void 0, void 0, function* () {
              return c(
                e,
                "HEAD",
                t,
                Object.assign(Object.assign({}, r), { noResolveJson: !0 }),
                n,
              );
            });
          }
          function m(e, t, r, n, i) {
            return o(this, void 0, void 0, function* () {
              return c(e, "DELETE", t, n, i, r);
            });
          }
        },
        {
          "./errors": "5kIVh",
          "./helpers": "ivBPN",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      ivBPN: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "resolveFetch", () => i),
            n.export(r, "resolveResponse", () => a),
            n.export(r, "recursiveToCamel", () => o));
          let i = (t) => {
              let r;
              return (
                (r =
                  t ||
                  ("undefined" == typeof fetch
                    ? (...t) =>
                        e("a55a09e0389da0e7").then(({ default: e }) => e(...t))
                    : fetch)),
                (...e) => r(...e)
              );
            },
            a = () => {
              var t, r, n, i;
              return (
                (t = void 0),
                (r = void 0),
                (n = void 0),
                (i = function* () {
                  return "undefined" == typeof Response
                    ? (yield e("a55a09e0389da0e7")).Response
                    : Response;
                }),
                new (n || (n = Promise))(function (e, a) {
                  function o(e) {
                    try {
                      l(i.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function s(e) {
                    try {
                      l(i.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value) instanceof n
                          ? r
                          : new n(function (e) {
                              e(r);
                            })
                        ).then(o, s);
                  }
                  l((i = i.apply(t, r || [])).next());
                })
              );
            },
            o = (e) => {
              if (Array.isArray(e)) return e.map((e) => o(e));
              if ("function" == typeof e || e !== Object(e)) return e;
              let t = {};
              return (
                Object.entries(e).forEach(([e, r]) => {
                  let n = e.replace(/([-_][a-z])/gi, (e) =>
                    e.toUpperCase().replace(/[-_]/g, ""),
                  );
                  t[n] = o(r);
                }),
                t
              );
            };
        },
        {
          a55a09e0389da0e7: "a7JeX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      dxNFZ: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
          var n = e("../lib/constants"),
            i = e("../lib/errors"),
            a = e("../lib/fetch"),
            o = e("../lib/helpers"),
            s = function (e, t, r, n) {
              return new (r || (r = Promise))(function (i, a) {
                function o(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          r.default = class {
            constructor(e, t = {}, r) {
              ((this.url = e),
                (this.headers = Object.assign(
                  Object.assign({}, n.DEFAULT_HEADERS),
                  t,
                )),
                (this.fetch = (0, o.resolveFetch)(r)));
            }
            listBuckets() {
              return s(this, void 0, void 0, function* () {
                try {
                  let e = yield (0, a.get)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers,
                  });
                  return { data: e, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            getBucket(e) {
              return s(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, a.get)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    { headers: this.headers },
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createBucket(e, t = { public: !1 }) {
              return s(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, a.post)(
                    this.fetch,
                    `${this.url}/bucket`,
                    {
                      id: e,
                      name: e,
                      public: t.public,
                      file_size_limit: t.fileSizeLimit,
                      allowed_mime_types: t.allowedMimeTypes,
                    },
                    { headers: this.headers },
                  );
                  return { data: r, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            updateBucket(e, t) {
              return s(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, a.put)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    {
                      id: e,
                      name: e,
                      public: t.public,
                      file_size_limit: t.fileSizeLimit,
                      allowed_mime_types: t.allowedMimeTypes,
                    },
                    { headers: this.headers },
                  );
                  return { data: r, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            emptyBucket(e) {
              return s(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, a.post)(
                    this.fetch,
                    `${this.url}/bucket/${e}/empty`,
                    {},
                    { headers: this.headers },
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            deleteBucket(e) {
              return s(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, a.remove)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    {},
                    { headers: this.headers },
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
          };
        },
        {
          "../lib/constants": "cTr8E",
          "../lib/errors": "5kIVh",
          "../lib/fetch": "4O6O7",
          "../lib/helpers": "ivBPN",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      cTr8E: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "DEFAULT_HEADERS", () => a));
          var i = e("./version");
          let a = { "X-Client-Info": `storage-js/${i.version}` };
        },
        {
          "./version": "lLaWk",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      lLaWk: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "version", () => i));
          let i = "2.7.1";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      a3Yul: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      jXbBA: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "DEFAULT_HEADERS", () => o),
            n.export(r, "DEFAULT_GLOBAL_OPTIONS", () => s),
            n.export(r, "DEFAULT_DB_OPTIONS", () => l),
            n.export(r, "DEFAULT_AUTH_OPTIONS", () => u),
            n.export(r, "DEFAULT_REALTIME_OPTIONS", () => c));
          var i = e("./version");
          let a = "";
          a =
            "undefined" != typeof Deno
              ? "deno"
              : "undefined" != typeof document
                ? "web"
                : "undefined" != typeof navigator &&
                    "ReactNative" === navigator.product
                  ? "react-native"
                  : "node";
          let o = { "X-Client-Info": `supabase-js-${a}/${i.version}` },
            s = { headers: o },
            l = { schema: "public" },
            u = {
              autoRefreshToken: !0,
              persistSession: !0,
              detectSessionInUrl: !0,
              flowType: "implicit",
            },
            c = {};
        },
        {
          "./version": "7pDs0",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "7pDs0": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "version", () => i));
          let i = "2.49.1";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "5cJ62": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "resolveFetch", () => o),
            n.export(r, "resolveHeadersConstructor", () => s),
            n.export(r, "fetchWithAuth", () => l));
          var i = e("@supabase/node-fetch"),
            a = n.interopDefault(i);
          let o = (e) => {
              let t;
              return (
                (t = e || ("undefined" == typeof fetch ? a.default : fetch)),
                (...e) => t(...e)
              );
            },
            s = () => ("undefined" == typeof Headers ? i.Headers : Headers),
            l = (e, t, r) => {
              let n = o(r),
                i = s();
              return (r, a) => {
                var o, s, l, u;
                return (
                  (o = void 0),
                  (s = void 0),
                  (l = void 0),
                  (u = function* () {
                    var o;
                    let s = null !== (o = yield t()) && void 0 !== o ? o : e,
                      l = new i(null == a ? void 0 : a.headers);
                    return (
                      l.has("apikey") || l.set("apikey", e),
                      l.has("Authorization") ||
                        l.set("Authorization", `Bearer ${s}`),
                      n(r, Object.assign(Object.assign({}, a), { headers: l }))
                    );
                  }),
                  new (l || (l = Promise))(function (e, t) {
                    function r(e) {
                      try {
                        i(u.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function n(e) {
                      try {
                        i(u.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function i(t) {
                      var i;
                      t.done
                        ? e(t.value)
                        : ((i = t.value) instanceof l
                            ? i
                            : new l(function (e) {
                                e(i);
                              })
                          ).then(r, n);
                    }
                    i((u = u.apply(o, s || [])).next());
                  })
                );
              };
            };
        },
        {
          "@supabase/node-fetch": "a7JeX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      gORSc: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              },
            );
          }
          function a(e) {
            return e.replace(/\/$/, "");
          }
          (n.defineInteropFlag(r),
            n.export(r, "uuid", () => i),
            n.export(r, "stripTrailingSlash", () => a),
            n.export(r, "isBrowser", () => o),
            n.export(r, "applySettingDefaults", () => s));
          let o = () => "undefined" != typeof window;
          function s(e, t) {
            let { db: r, auth: n, realtime: i, global: a } = e,
              { db: o, auth: s, realtime: l, global: u } = t,
              c = {
                db: Object.assign(Object.assign({}, o), r),
                auth: Object.assign(Object.assign({}, s), n),
                realtime: Object.assign(Object.assign({}, l), i),
                global: Object.assign(Object.assign({}, u), a),
                accessToken: () => {
                  var e, t, r, n;
                  return (
                    (e = this),
                    (t = void 0),
                    (n = function* () {
                      return "";
                    }),
                    new ((r = void 0), (r = Promise))(function (i, a) {
                      function o(e) {
                        try {
                          l(n.next(e));
                        } catch (e) {
                          a(e);
                        }
                      }
                      function s(e) {
                        try {
                          l(n.throw(e));
                        } catch (e) {
                          a(e);
                        }
                      }
                      function l(e) {
                        var t;
                        e.done
                          ? i(e.value)
                          : ((t = e.value) instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t);
                                })
                            ).then(o, s);
                      }
                      l((n = n.apply(e, t || [])).next());
                    })
                  );
                },
              };
            return (
              e.accessToken
                ? (c.accessToken = e.accessToken)
                : delete c.accessToken,
              c
            );
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "48roX": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "SupabaseAuthClient", () => a));
          var i = e("@supabase/auth-js");
          class a extends i.AuthClient {
            constructor(e) {
              super(e);
            }
          }
        },
        {
          "@supabase/auth-js": "ihOZX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      ihOZX: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "navigatorLock", () => p.navigatorLock),
            n.export(
              r,
              "NavigatorLockAcquireTimeoutError",
              () => p.NavigatorLockAcquireTimeoutError,
            ),
            n.export(r, "lockInternals", () => p.internals),
            n.export(r, "GoTrueAdminApi", () => a.default),
            n.export(r, "GoTrueClient", () => s.default),
            n.export(r, "AuthAdminApi", () => u.default),
            n.export(r, "AuthClient", () => d.default));
          var i = e("./GoTrueAdminApi"),
            a = n.interopDefault(i),
            o = e("./GoTrueClient"),
            s = n.interopDefault(o),
            l = e("./AuthAdminApi"),
            u = n.interopDefault(l),
            c = e("./AuthClient"),
            d = n.interopDefault(c),
            f = e("./lib/types");
          n.exportAll(f, r);
          var h = e("./lib/errors");
          n.exportAll(h, r);
          var p = e("./lib/locks");
        },
        {
          "./GoTrueAdminApi": "AGvR0",
          "./GoTrueClient": "l70wP",
          "./AuthAdminApi": "fjr89",
          "./AuthClient": "5S5Z1",
          "./lib/types": "fIfTy",
          "./lib/errors": "e43I7",
          "./lib/locks": "ggQfR",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      AGvR0: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
          var n = e("./lib/fetch"),
            i = e("./lib/helpers"),
            a = e("./lib/errors"),
            o = function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, n = Object.getOwnPropertySymbols(e);
                  i < n.length;
                  i++
                )
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              return r;
            };
          r.default = class {
            constructor({ url: e = "", headers: t = {}, fetch: r }) {
              ((this.url = e),
                (this.headers = t),
                (this.fetch = (0, i.resolveFetch)(r)),
                (this.mfa = {
                  listFactors: this._listFactors.bind(this),
                  deleteFactor: this._deleteFactor.bind(this),
                }));
            }
            async signOut(e, t = "global") {
              try {
                return (
                  await (0, n._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/logout?scope=${t}`,
                    { headers: this.headers, jwt: e, noResolveJson: !0 },
                  ),
                  { data: null, error: null }
                );
              } catch (e) {
                if ((0, a.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async inviteUserByEmail(e, t = {}) {
              try {
                return await (0, n._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/invite`,
                  {
                    body: { email: e, data: t.data },
                    headers: this.headers,
                    redirectTo: t.redirectTo,
                    xform: n._userResponse,
                  },
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async generateLink(e) {
              try {
                let { options: t } = e,
                  r = o(e, ["options"]),
                  i = Object.assign(Object.assign({}, r), t);
                return (
                  "newEmail" in r &&
                    ((i.new_email = null == r ? void 0 : r.newEmail),
                    delete i.newEmail),
                  await (0, n._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/admin/generate_link`,
                    {
                      body: i,
                      headers: this.headers,
                      xform: n._generateLinkResponse,
                      redirectTo: null == t ? void 0 : t.redirectTo,
                    },
                  )
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { properties: null, user: null }, error: e };
                throw e;
              }
            }
            async createUser(e) {
              try {
                return await (0, n._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/admin/users`,
                  { body: e, headers: this.headers, xform: n._userResponse },
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async listUsers(e) {
              var t, r, i, o, s, l, u;
              try {
                let a = { nextPage: null, lastPage: 0, total: 0 },
                  c = await (0, n._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/admin/users`,
                    {
                      headers: this.headers,
                      noResolveJson: !0,
                      query: {
                        page:
                          null !==
                            (r =
                              null === (t = null == e ? void 0 : e.page) ||
                              void 0 === t
                                ? void 0
                                : t.toString()) && void 0 !== r
                            ? r
                            : "",
                        per_page:
                          null !==
                            (o =
                              null === (i = null == e ? void 0 : e.perPage) ||
                              void 0 === i
                                ? void 0
                                : i.toString()) && void 0 !== o
                            ? o
                            : "",
                      },
                      xform: n._noResolveJsonResponse,
                    },
                  );
                if (c.error) throw c.error;
                let d = await c.json(),
                  f =
                    null !== (s = c.headers.get("x-total-count")) &&
                    void 0 !== s
                      ? s
                      : 0,
                  h =
                    null !==
                      (u =
                        null === (l = c.headers.get("link")) || void 0 === l
                          ? void 0
                          : l.split(",")) && void 0 !== u
                      ? u
                      : [];
                return (
                  h.length > 0 &&
                    (h.forEach((e) => {
                      let t = parseInt(
                          e.split(";")[0].split("=")[1].substring(0, 1),
                        ),
                        r = JSON.parse(e.split(";")[1].split("=")[1]);
                      a[`${r}Page`] = t;
                    }),
                    (a.total = parseInt(f))),
                  { data: Object.assign(Object.assign({}, d), a), error: null }
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { users: [] }, error: e };
                throw e;
              }
            }
            async getUserById(e) {
              try {
                return await (0, n._request)(
                  this.fetch,
                  "GET",
                  `${this.url}/admin/users/${e}`,
                  { headers: this.headers, xform: n._userResponse },
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async updateUserById(e, t) {
              try {
                return await (0, n._request)(
                  this.fetch,
                  "PUT",
                  `${this.url}/admin/users/${e}`,
                  { body: t, headers: this.headers, xform: n._userResponse },
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async deleteUser(e, t = !1) {
              try {
                return await (0, n._request)(
                  this.fetch,
                  "DELETE",
                  `${this.url}/admin/users/${e}`,
                  {
                    headers: this.headers,
                    body: { should_soft_delete: t },
                    xform: n._userResponse,
                  },
                );
              } catch (e) {
                if ((0, a.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async _listFactors(e) {
              try {
                let { data: t, error: r } = await (0, n._request)(
                  this.fetch,
                  "GET",
                  `${this.url}/admin/users/${e.userId}/factors`,
                  {
                    headers: this.headers,
                    xform: (e) => ({ data: { factors: e }, error: null }),
                  },
                );
                return { data: t, error: r };
              } catch (e) {
                if ((0, a.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _deleteFactor(e) {
              try {
                let t = await (0, n._request)(
                  this.fetch,
                  "DELETE",
                  `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                  { headers: this.headers },
                );
                return { data: t, error: null };
              } catch (e) {
                if ((0, a.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
          };
        },
        {
          "./lib/fetch": "aJsn2",
          "./lib/helpers": "gMQmy",
          "./lib/errors": "e43I7",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      aJsn2: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "handleError", () => c),
            n.export(r, "_request", () => f),
            n.export(r, "_sessionResponse", () => p),
            n.export(r, "_sessionResponsePassword", () => m),
            n.export(r, "_userResponse", () => g),
            n.export(r, "_ssoResponse", () => y),
            n.export(r, "_generateLinkResponse", () => v),
            n.export(r, "_noResolveJsonResponse", () => b));
          var i = e("./constants"),
            a = e("./helpers"),
            o = e("./errors"),
            s = function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, n = Object.getOwnPropertySymbols(e);
                  i < n.length;
                  i++
                )
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              return r;
            };
          let l = (e) =>
              e.msg ||
              e.message ||
              e.error_description ||
              e.error ||
              JSON.stringify(e),
            u = [502, 503, 504];
          async function c(e) {
            var t;
            let r, n;
            if (!(0, a.looksLikeFetchResponse)(e))
              throw new o.AuthRetryableFetchError(l(e), 0);
            if (u.includes(e.status))
              throw new o.AuthRetryableFetchError(l(e), e.status);
            try {
              r = await e.json();
            } catch (e) {
              throw new o.AuthUnknownError(l(e), e);
            }
            let s = (0, a.parseResponseAPIVersion)(e);
            if (
              (s &&
              s.getTime() >= i.API_VERSIONS["2024-01-01"].timestamp &&
              "object" == typeof r &&
              r &&
              "string" == typeof r.code
                ? (n = r.code)
                : "object" == typeof r &&
                  r &&
                  "string" == typeof r.error_code &&
                  (n = r.error_code),
              n)
            ) {
              if ("weak_password" === n)
                throw new o.AuthWeakPasswordError(
                  l(r),
                  e.status,
                  (null === (t = r.weak_password) || void 0 === t
                    ? void 0
                    : t.reasons) || [],
                );
              if ("session_not_found" === n)
                throw new o.AuthSessionMissingError();
            } else if (
              "object" == typeof r &&
              r &&
              "object" == typeof r.weak_password &&
              r.weak_password &&
              Array.isArray(r.weak_password.reasons) &&
              r.weak_password.reasons.length &&
              r.weak_password.reasons.reduce(
                (e, t) => e && "string" == typeof t,
                !0,
              )
            )
              throw new o.AuthWeakPasswordError(
                l(r),
                e.status,
                r.weak_password.reasons,
              );
            throw new o.AuthApiError(l(r), e.status || 500, n);
          }
          let d = (e, t, r, n) => {
            let i = {
              method: e,
              headers: (null == t ? void 0 : t.headers) || {},
            };
            return "GET" === e
              ? i
              : ((i.headers = Object.assign(
                  { "Content-Type": "application/json;charset=UTF-8" },
                  null == t ? void 0 : t.headers,
                )),
                (i.body = JSON.stringify(n)),
                Object.assign(Object.assign({}, i), r));
          };
          async function f(e, t, r, n) {
            var a;
            let o = Object.assign({}, null == n ? void 0 : n.headers);
            (o[i.API_VERSION_HEADER_NAME] ||
              (o[i.API_VERSION_HEADER_NAME] =
                i.API_VERSIONS["2024-01-01"].name),
              (null == n ? void 0 : n.jwt) &&
                (o.Authorization = `Bearer ${n.jwt}`));
            let s =
              null !== (a = null == n ? void 0 : n.query) && void 0 !== a
                ? a
                : {};
            (null == n ? void 0 : n.redirectTo) &&
              (s.redirect_to = n.redirectTo);
            let l = Object.keys(s).length
                ? "?" + new URLSearchParams(s).toString()
                : "",
              u = await h(
                e,
                t,
                r + l,
                {
                  headers: o,
                  noResolveJson: null == n ? void 0 : n.noResolveJson,
                },
                {},
                null == n ? void 0 : n.body,
              );
            return (null == n ? void 0 : n.xform)
              ? null == n
                ? void 0
                : n.xform(u)
              : { data: Object.assign({}, u), error: null };
          }
          async function h(e, t, r, n, i, a) {
            let s;
            let u = d(t, n, i, a);
            try {
              s = await e(r, Object.assign({}, u));
            } catch (e) {
              throw (console.error(e), new o.AuthRetryableFetchError(l(e), 0));
            }
            if ((s.ok || (await c(s)), null == n ? void 0 : n.noResolveJson))
              return s;
            try {
              return await s.json();
            } catch (e) {
              await c(e);
            }
          }
          function p(e) {
            var t;
            let r = null;
            e.access_token &&
              e.refresh_token &&
              e.expires_in &&
              ((r = Object.assign({}, e)),
              e.expires_at || (r.expires_at = (0, a.expiresAt)(e.expires_in)));
            let n = null !== (t = e.user) && void 0 !== t ? t : e;
            return { data: { session: r, user: n }, error: null };
          }
          function m(e) {
            let t = p(e);
            return (
              !t.error &&
                e.weak_password &&
                "object" == typeof e.weak_password &&
                Array.isArray(e.weak_password.reasons) &&
                e.weak_password.reasons.length &&
                e.weak_password.message &&
                "string" == typeof e.weak_password.message &&
                e.weak_password.reasons.reduce(
                  (e, t) => e && "string" == typeof t,
                  !0,
                ) &&
                (t.data.weak_password = e.weak_password),
              t
            );
          }
          function g(e) {
            var t;
            let r = null !== (t = e.user) && void 0 !== t ? t : e;
            return { data: { user: r }, error: null };
          }
          function y(e) {
            return { data: e, error: null };
          }
          function v(e) {
            let {
                action_link: t,
                email_otp: r,
                hashed_token: n,
                redirect_to: i,
                verification_type: a,
              } = e,
              o = s(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ]),
              l = Object.assign({}, o);
            return {
              data: {
                properties: {
                  action_link: t,
                  email_otp: r,
                  hashed_token: n,
                  redirect_to: i,
                  verification_type: a,
                },
                user: l,
              },
              error: null,
            };
          }
          function b(e) {
            return e;
          }
        },
        {
          "./constants": "lm5sS",
          "./helpers": "gMQmy",
          "./errors": "e43I7",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      lm5sS: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "AUTO_REFRESH_TICK_DURATION_MS", () => a),
            n.export(r, "AUTO_REFRESH_TICK_THRESHOLD", () => o),
            n.export(r, "EXPIRY_MARGIN_MS", () => s),
            n.export(r, "GOTRUE_URL", () => l),
            n.export(r, "STORAGE_KEY", () => u),
            n.export(r, "AUDIENCE", () => c),
            n.export(r, "DEFAULT_HEADERS", () => d),
            n.export(r, "NETWORK_FAILURE", () => f),
            n.export(r, "API_VERSION_HEADER_NAME", () => h),
            n.export(r, "API_VERSIONS", () => p));
          var i = e("./version");
          let a = 3e4,
            o = 3,
            s = o * a,
            l = "http://localhost:9999",
            u = "supabase.auth.token",
            c = "",
            d = { "X-Client-Info": `gotrue-js/${i.version}` },
            f = { MAX_RETRIES: 10, RETRY_INTERVAL: 2 },
            h = "X-Supabase-Api-Version",
            p = {
              "2024-01-01": {
                timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
                name: "2024-01-01",
              },
            };
        },
        {
          "./version": "4o9Id",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "4o9Id": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "version", () => i));
          let i = "2.68.0";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      gMQmy: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "expiresAt", () => a),
            n.export(r, "uuid", () => o),
            n.export(r, "isBrowser", () => s),
            n.export(r, "supportsLocalStorage", () => u),
            n.export(r, "parseParametersFromURL", () => c),
            n.export(r, "resolveFetch", () => d),
            n.export(r, "looksLikeFetchResponse", () => f),
            n.export(r, "setItemAsync", () => h),
            n.export(r, "getItemAsync", () => p),
            n.export(r, "removeItemAsync", () => m),
            n.export(r, "decodeBase64URL", () => g),
            n.export(r, "Deferred", () => y),
            n.export(r, "decodeJWTPayload", () => v),
            n.export(r, "sleep", () => b),
            n.export(r, "retryable", () => w),
            n.export(r, "generatePKCEVerifier", () => _),
            n.export(r, "generatePKCEChallenge", () => S),
            n.export(r, "getCodeChallengeAndMethod", () => x),
            n.export(r, "parseResponseAPIVersion", () => C));
          var i = e("./constants");
          function a(e) {
            let t = Math.round(Date.now() / 1e3);
            return t + e;
          }
          function o() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              },
            );
          }
          let s = () =>
              "undefined" != typeof window && "undefined" != typeof document,
            l = { tested: !1, writable: !1 },
            u = () => {
              if (!s()) return !1;
              try {
                if ("object" != typeof globalThis.localStorage) return !1;
              } catch (e) {
                return !1;
              }
              if (l.tested) return l.writable;
              let e = `lswt-${Math.random()}${Math.random()}`;
              try {
                (globalThis.localStorage.setItem(e, e),
                  globalThis.localStorage.removeItem(e),
                  (l.tested = !0),
                  (l.writable = !0));
              } catch (e) {
                ((l.tested = !0), (l.writable = !1));
              }
              return l.writable;
            };
          function c(e) {
            let t = {},
              r = new URL(e);
            if (r.hash && "#" === r.hash[0])
              try {
                let e = new URLSearchParams(r.hash.substring(1));
                e.forEach((e, r) => {
                  t[r] = e;
                });
              } catch (e) {}
            return (
              r.searchParams.forEach((e, r) => {
                t[r] = e;
              }),
              t
            );
          }
          let d = (t) => {
              let r;
              return (
                (r =
                  t ||
                  ("undefined" == typeof fetch
                    ? (...t) =>
                        e("d888cf142a89dbfb").then(({ default: e }) => e(...t))
                    : fetch)),
                (...e) => r(...e)
              );
            },
            f = (e) =>
              "object" == typeof e &&
              null !== e &&
              "status" in e &&
              "ok" in e &&
              "json" in e &&
              "function" == typeof e.json,
            h = async (e, t, r) => {
              await e.setItem(t, JSON.stringify(r));
            },
            p = async (e, t) => {
              let r = await e.getItem(t);
              if (!r) return null;
              try {
                return JSON.parse(r);
              } catch (e) {
                return r;
              }
            },
            m = async (e, t) => {
              await e.removeItem(t);
            };
          function g(e) {
            let t, r, n, i, a, o, s;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              u = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              ((i = l.indexOf(e.charAt(c++))),
                (a = l.indexOf(e.charAt(c++))),
                (o = l.indexOf(e.charAt(c++))),
                (s = l.indexOf(e.charAt(c++))),
                (t = (i << 2) | (a >> 4)),
                (r = ((15 & a) << 4) | (o >> 2)),
                (n = ((3 & o) << 6) | s),
                (u += String.fromCharCode(t)),
                64 != o && 0 != r && (u += String.fromCharCode(r)),
                64 != s && 0 != n && (u += String.fromCharCode(n)));
            return u;
          }
          class y {
            constructor() {
              this.promise = new y.promiseConstructor((e, t) => {
                ((this.resolve = e), (this.reject = t));
              });
            }
          }
          function v(e) {
            let t = e.split(".");
            if (3 !== t.length)
              throw Error("JWT is not valid: not a JWT structure");
            if (
              !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
                t[1],
              )
            )
              throw Error(
                "JWT is not valid: payload is not in base64url format",
              );
            let r = t[1];
            return JSON.parse(g(r));
          }
          async function b(e) {
            return await new Promise((t) => {
              setTimeout(() => t(null), e);
            });
          }
          function w(e, t) {
            let r = new Promise((r, n) => {
              (async () => {
                for (let i = 0; i < 1 / 0; i++)
                  try {
                    let n = await e(i);
                    if (!t(i, null, n)) {
                      r(n);
                      return;
                    }
                  } catch (e) {
                    if (!t(i, e)) {
                      n(e);
                      return;
                    }
                  }
              })();
            });
            return r;
          }
          function k(e) {
            return ("0" + e.toString(16)).substr(-2);
          }
          function _() {
            let e = new Uint32Array(56);
            if ("undefined" == typeof crypto) {
              let e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                t = e.length,
                r = "";
              for (let n = 0; n < 56; n++)
                r += e.charAt(Math.floor(Math.random() * t));
              return r;
            }
            return (crypto.getRandomValues(e), Array.from(e, k).join(""));
          }
          async function E(e) {
            let t = new TextEncoder(),
              r = t.encode(e),
              n = await crypto.subtle.digest("SHA-256", r),
              i = new Uint8Array(n);
            return Array.from(i)
              .map((e) => String.fromCharCode(e))
              .join("");
          }
          async function S(e) {
            let t =
              "undefined" != typeof crypto &&
              void 0 !== crypto.subtle &&
              "undefined" != typeof TextEncoder;
            if (!t)
              return (
                console.warn(
                  "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
                ),
                e
              );
            let r = await E(e);
            return btoa(r)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          }
          async function x(e, t, r = !1) {
            let n = _(),
              i = n;
            (r && (i += "/PASSWORD_RECOVERY"),
              await h(e, `${t}-code-verifier`, i));
            let a = await S(n),
              o = n === a ? "plain" : "s256";
            return [a, o];
          }
          y.promiseConstructor = Promise;
          let T = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
          function C(e) {
            let t = e.headers.get(i.API_VERSION_HEADER_NAME);
            if (!t || !t.match(T)) return null;
            try {
              let e = new Date(`${t}T00:00:00.0Z`);
              return e;
            } catch (e) {
              return null;
            }
          }
        },
        {
          "./constants": "lm5sS",
          d888cf142a89dbfb: "a7JeX",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      e43I7: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "AuthError", () => i),
            n.export(r, "isAuthError", () => a),
            n.export(r, "AuthApiError", () => o),
            n.export(r, "isAuthApiError", () => s),
            n.export(r, "AuthUnknownError", () => l),
            n.export(r, "CustomAuthError", () => u),
            n.export(r, "AuthSessionMissingError", () => c),
            n.export(r, "isAuthSessionMissingError", () => d),
            n.export(r, "AuthInvalidTokenResponseError", () => f),
            n.export(r, "AuthInvalidCredentialsError", () => h),
            n.export(r, "AuthImplicitGrantRedirectError", () => p),
            n.export(r, "isAuthImplicitGrantRedirectError", () => m),
            n.export(r, "AuthPKCEGrantCodeExchangeError", () => g),
            n.export(r, "AuthRetryableFetchError", () => y),
            n.export(r, "isAuthRetryableFetchError", () => v),
            n.export(r, "AuthWeakPasswordError", () => b),
            n.export(r, "isAuthWeakPasswordError", () => w));
          class i extends Error {
            constructor(e, t, r) {
              (super(e),
                (this.__isAuthError = !0),
                (this.name = "AuthError"),
                (this.status = t),
                (this.code = r));
            }
          }
          function a(e) {
            return "object" == typeof e && null !== e && "__isAuthError" in e;
          }
          class o extends i {
            constructor(e, t, r) {
              (super(e, t, r),
                (this.name = "AuthApiError"),
                (this.status = t),
                (this.code = r));
            }
          }
          function s(e) {
            return a(e) && "AuthApiError" === e.name;
          }
          class l extends i {
            constructor(e, t) {
              (super(e),
                (this.name = "AuthUnknownError"),
                (this.originalError = t));
            }
          }
          class u extends i {
            constructor(e, t, r, n) {
              (super(e, r, n), (this.name = t), (this.status = r));
            }
          }
          class c extends u {
            constructor() {
              super(
                "Auth session missing!",
                "AuthSessionMissingError",
                400,
                void 0,
              );
            }
          }
          function d(e) {
            return a(e) && "AuthSessionMissingError" === e.name;
          }
          class f extends u {
            constructor() {
              super(
                "Auth session or user missing",
                "AuthInvalidTokenResponseError",
                500,
                void 0,
              );
            }
          }
          class h extends u {
            constructor(e) {
              super(e, "AuthInvalidCredentialsError", 400, void 0);
            }
          }
          class p extends u {
            constructor(e, t = null) {
              (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
                (this.details = null),
                (this.details = t));
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              };
            }
          }
          function m(e) {
            return a(e) && "AuthImplicitGrantRedirectError" === e.name;
          }
          class g extends u {
            constructor(e, t = null) {
              (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
                (this.details = null),
                (this.details = t));
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              };
            }
          }
          class y extends u {
            constructor(e, t) {
              super(e, "AuthRetryableFetchError", t, void 0);
            }
          }
          function v(e) {
            return a(e) && "AuthRetryableFetchError" === e.name;
          }
          class b extends u {
            constructor(e, t, r) {
              (super(e, "AuthWeakPasswordError", t, "weak_password"),
                (this.reasons = r));
            }
          }
          function w(e) {
            return a(e) && "AuthWeakPasswordError" === e.name;
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      l70wP: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r);
          var i = e("./GoTrueAdminApi"),
            a = n.interopDefault(i),
            o = e("./lib/constants"),
            s = e("./lib/errors"),
            l = e("./lib/fetch"),
            u = e("./lib/helpers"),
            c = e("./lib/local-storage"),
            d = e("./lib/polyfills"),
            f = e("./lib/version"),
            h = e("./lib/locks");
          (0, d.polyfillGlobalThis)();
          let p = {
            url: o.GOTRUE_URL,
            storageKey: o.STORAGE_KEY,
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            headers: o.DEFAULT_HEADERS,
            flowType: "implicit",
            debug: !1,
            hasCustomAuthorizationHeader: !1,
          };
          async function m(e, t, r) {
            return await r();
          }
          class g {
            constructor(e) {
              var t, r;
              ((this.memoryStorage = null),
                (this.stateChangeEmitters = new Map()),
                (this.autoRefreshTicker = null),
                (this.visibilityChangedCallback = null),
                (this.refreshingDeferred = null),
                (this.initializePromise = null),
                (this.detectSessionInUrl = !0),
                (this.hasCustomAuthorizationHeader = !1),
                (this.suppressGetSessionWarning = !1),
                (this.lockAcquired = !1),
                (this.pendingInLock = []),
                (this.broadcastChannel = null),
                (this.logger = console.log),
                (this.instanceID = g.nextInstanceID),
                (g.nextInstanceID += 1),
                this.instanceID > 0 &&
                  (0, u.isBrowser)() &&
                  console.warn(
                    "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.",
                  ));
              let n = Object.assign(Object.assign({}, p), e);
              if (
                ((this.logDebugMessages = !!n.debug),
                "function" == typeof n.debug && (this.logger = n.debug),
                (this.persistSession = n.persistSession),
                (this.storageKey = n.storageKey),
                (this.autoRefreshToken = n.autoRefreshToken),
                (this.admin = new a.default({
                  url: n.url,
                  headers: n.headers,
                  fetch: n.fetch,
                })),
                (this.url = n.url),
                (this.headers = n.headers),
                (this.fetch = (0, u.resolveFetch)(n.fetch)),
                (this.lock = n.lock || m),
                (this.detectSessionInUrl = n.detectSessionInUrl),
                (this.flowType = n.flowType),
                (this.hasCustomAuthorizationHeader =
                  n.hasCustomAuthorizationHeader),
                n.lock
                  ? (this.lock = n.lock)
                  : (0, u.isBrowser)() &&
                      (null ===
                        (t =
                          null == globalThis ? void 0 : globalThis.navigator) ||
                      void 0 === t
                        ? void 0
                        : t.locks)
                    ? (this.lock = h.navigatorLock)
                    : (this.lock = m),
                (this.mfa = {
                  verify: this._verify.bind(this),
                  enroll: this._enroll.bind(this),
                  unenroll: this._unenroll.bind(this),
                  challenge: this._challenge.bind(this),
                  listFactors: this._listFactors.bind(this),
                  challengeAndVerify: this._challengeAndVerify.bind(this),
                  getAuthenticatorAssuranceLevel:
                    this._getAuthenticatorAssuranceLevel.bind(this),
                }),
                this.persistSession
                  ? n.storage
                    ? (this.storage = n.storage)
                    : (0, u.supportsLocalStorage)()
                      ? (this.storage = c.localStorageAdapter)
                      : ((this.memoryStorage = {}),
                        (this.storage = (0, c.memoryLocalStorageAdapter)(
                          this.memoryStorage,
                        )))
                  : ((this.memoryStorage = {}),
                    (this.storage = (0, c.memoryLocalStorageAdapter)(
                      this.memoryStorage,
                    ))),
                (0, u.isBrowser)() &&
                  globalThis.BroadcastChannel &&
                  this.persistSession &&
                  this.storageKey)
              ) {
                try {
                  this.broadcastChannel = new globalThis.BroadcastChannel(
                    this.storageKey,
                  );
                } catch (e) {
                  console.error(
                    "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                    e,
                  );
                }
                null === (r = this.broadcastChannel) ||
                  void 0 === r ||
                  r.addEventListener("message", async (e) => {
                    (this._debug(
                      "received broadcast notification from other tab or client",
                      e,
                    ),
                      await this._notifyAllSubscribers(
                        e.data.event,
                        e.data.session,
                        !1,
                      ));
                  });
              }
              this.initialize();
            }
            _debug(...e) {
              return (
                this.logDebugMessages &&
                  this.logger(
                    `GoTrueClient@${this.instanceID} (${f.version}) ${new Date().toISOString()}`,
                    ...e,
                  ),
                this
              );
            }
            async initialize() {
              return (
                this.initializePromise ||
                  (this.initializePromise = (async () =>
                    await this._acquireLock(
                      -1,
                      async () => await this._initialize(),
                    ))()),
                await this.initializePromise
              );
            }
            async _initialize() {
              var e;
              try {
                let t = (0, u.parseParametersFromURL)(window.location.href),
                  r = "none";
                if (
                  (this._isImplicitGrantCallback(t)
                    ? (r = "implicit")
                    : (await this._isPKCECallback(t)) && (r = "pkce"),
                  (0, u.isBrowser)() && this.detectSessionInUrl && "none" !== r)
                ) {
                  let { data: n, error: i } = await this._getSessionFromURL(
                    t,
                    r,
                  );
                  if (i) {
                    if (
                      (this._debug(
                        "#_initialize()",
                        "error detecting session from URL",
                        i,
                      ),
                      (0, s.isAuthImplicitGrantRedirectError)(i))
                    ) {
                      let t =
                        null === (e = i.details) || void 0 === e
                          ? void 0
                          : e.code;
                      if (
                        "identity_already_exists" === t ||
                        "identity_not_found" === t ||
                        "single_identity_not_deletable" === t
                      )
                        return { error: i };
                    }
                    return (await this._removeSession(), { error: i });
                  }
                  let { session: a, redirectType: o } = n;
                  return (
                    this._debug(
                      "#_initialize()",
                      "detected session in URL",
                      a,
                      "redirect type",
                      o,
                    ),
                    await this._saveSession(a),
                    setTimeout(async () => {
                      "recovery" === o
                        ? await this._notifyAllSubscribers(
                            "PASSWORD_RECOVERY",
                            a,
                          )
                        : await this._notifyAllSubscribers("SIGNED_IN", a);
                    }, 0),
                    { error: null }
                  );
                }
                return (await this._recoverAndRefresh(), { error: null });
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { error: e };
                return {
                  error: new s.AuthUnknownError(
                    "Unexpected error during initialization",
                    e,
                  ),
                };
              } finally {
                (await this._handleVisibilityChange(),
                  this._debug("#_initialize()", "end"));
              }
            }
            async signInAnonymously(e) {
              var t, r, n;
              try {
                let i = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/signup`,
                    {
                      headers: this.headers,
                      body: {
                        data:
                          null !==
                            (r =
                              null === (t = null == e ? void 0 : e.options) ||
                              void 0 === t
                                ? void 0
                                : t.data) && void 0 !== r
                            ? r
                            : {},
                        gotrue_meta_security: {
                          captcha_token:
                            null === (n = null == e ? void 0 : e.options) ||
                            void 0 === n
                              ? void 0
                              : n.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    },
                  ),
                  { data: a, error: o } = i;
                if (o || !a)
                  return { data: { user: null, session: null }, error: o };
                let s = a.session,
                  u = a.user;
                return (
                  a.session &&
                    (await this._saveSession(a.session),
                    await this._notifyAllSubscribers("SIGNED_IN", s)),
                  { data: { user: u, session: s }, error: null }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signUp(e) {
              var t, r, n;
              try {
                let i;
                if ("email" in e) {
                  let { email: r, password: n, options: a } = e,
                    o = null,
                    s = null;
                  ("pkce" === this.flowType &&
                    ([o, s] = await (0, u.getCodeChallengeAndMethod)(
                      this.storage,
                      this.storageKey,
                    )),
                    (i = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/signup`,
                      {
                        headers: this.headers,
                        redirectTo: null == a ? void 0 : a.emailRedirectTo,
                        body: {
                          email: r,
                          password: n,
                          data:
                            null !== (t = null == a ? void 0 : a.data) &&
                            void 0 !== t
                              ? t
                              : {},
                          gotrue_meta_security: {
                            captcha_token: null == a ? void 0 : a.captchaToken,
                          },
                          code_challenge: o,
                          code_challenge_method: s,
                        },
                        xform: l._sessionResponse,
                      },
                    )));
                } else if ("phone" in e) {
                  let { phone: t, password: a, options: o } = e;
                  i = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/signup`,
                    {
                      headers: this.headers,
                      body: {
                        phone: t,
                        password: a,
                        data:
                          null !== (r = null == o ? void 0 : o.data) &&
                          void 0 !== r
                            ? r
                            : {},
                        channel:
                          null !== (n = null == o ? void 0 : o.channel) &&
                          void 0 !== n
                            ? n
                            : "sms",
                        gotrue_meta_security: {
                          captcha_token: null == o ? void 0 : o.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    },
                  );
                } else
                  throw new s.AuthInvalidCredentialsError(
                    "You must provide either an email or phone number and a password",
                  );
                let { data: a, error: o } = i;
                if (o || !a)
                  return { data: { user: null, session: null }, error: o };
                let c = a.session,
                  d = a.user;
                return (
                  a.session &&
                    (await this._saveSession(a.session),
                    await this._notifyAllSubscribers("SIGNED_IN", c)),
                  { data: { user: d, session: c }, error: null }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithPassword(e) {
              try {
                let t;
                if ("email" in e) {
                  let { email: r, password: n, options: i } = e;
                  t = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=password`,
                    {
                      headers: this.headers,
                      body: {
                        email: r,
                        password: n,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      xform: l._sessionResponsePassword,
                    },
                  );
                } else if ("phone" in e) {
                  let { phone: r, password: n, options: i } = e;
                  t = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=password`,
                    {
                      headers: this.headers,
                      body: {
                        phone: r,
                        password: n,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      xform: l._sessionResponsePassword,
                    },
                  );
                } else
                  throw new s.AuthInvalidCredentialsError(
                    "You must provide either an email or phone number and a password",
                  );
                let { data: r, error: n } = t;
                if (n) return { data: { user: null, session: null }, error: n };
                if (!r || !r.session || !r.user)
                  return {
                    data: { user: null, session: null },
                    error: new s.AuthInvalidTokenResponseError(),
                  };
                return (
                  r.session &&
                    (await this._saveSession(r.session),
                    await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                  {
                    data: Object.assign(
                      { user: r.user, session: r.session },
                      r.weak_password
                        ? { weakPassword: r.weak_password }
                        : null,
                    ),
                    error: n,
                  }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithOAuth(e) {
              var t, r, n, i;
              return await this._handleProviderSignIn(e.provider, {
                redirectTo:
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo,
                scopes:
                  null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                queryParams:
                  null === (n = e.options) || void 0 === n
                    ? void 0
                    : n.queryParams,
                skipBrowserRedirect:
                  null === (i = e.options) || void 0 === i
                    ? void 0
                    : i.skipBrowserRedirect,
              });
            }
            async exchangeCodeForSession(e) {
              return (
                await this.initializePromise,
                this._acquireLock(-1, async () =>
                  this._exchangeCodeForSession(e),
                )
              );
            }
            async _exchangeCodeForSession(e) {
              let t = await (0, u.getItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                ),
                [r, n] = (null != t ? t : "").split("/");
              try {
                let { data: t, error: i } = await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=pkce`,
                  {
                    headers: this.headers,
                    body: { auth_code: e, code_verifier: r },
                    xform: l._sessionResponse,
                  },
                );
                if (
                  (await (0, u.removeItemAsync)(
                    this.storage,
                    `${this.storageKey}-code-verifier`,
                  ),
                  i)
                )
                  throw i;
                if (!t || !t.session || !t.user)
                  return {
                    data: { user: null, session: null, redirectType: null },
                    error: new s.AuthInvalidTokenResponseError(),
                  };
                return (
                  t.session &&
                    (await this._saveSession(t.session),
                    await this._notifyAllSubscribers("SIGNED_IN", t.session)),
                  {
                    data: Object.assign(Object.assign({}, t), {
                      redirectType: null != n ? n : null,
                    }),
                    error: i,
                  }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return {
                    data: { user: null, session: null, redirectType: null },
                    error: e,
                  };
                throw e;
              }
            }
            async signInWithIdToken(e) {
              try {
                let {
                    options: t,
                    provider: r,
                    token: n,
                    access_token: i,
                    nonce: a,
                  } = e,
                  o = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=id_token`,
                    {
                      headers: this.headers,
                      body: {
                        provider: r,
                        id_token: n,
                        access_token: i,
                        nonce: a,
                        gotrue_meta_security: {
                          captcha_token: null == t ? void 0 : t.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    },
                  ),
                  { data: u, error: c } = o;
                if (c) return { data: { user: null, session: null }, error: c };
                if (!u || !u.session || !u.user)
                  return {
                    data: { user: null, session: null },
                    error: new s.AuthInvalidTokenResponseError(),
                  };
                return (
                  u.session &&
                    (await this._saveSession(u.session),
                    await this._notifyAllSubscribers("SIGNED_IN", u.session)),
                  { data: u, error: c }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithOtp(e) {
              var t, r, n, i, a;
              try {
                if ("email" in e) {
                  let { email: n, options: i } = e,
                    a = null,
                    o = null;
                  "pkce" === this.flowType &&
                    ([a, o] = await (0, u.getCodeChallengeAndMethod)(
                      this.storage,
                      this.storageKey,
                    ));
                  let { error: s } = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/otp`,
                    {
                      headers: this.headers,
                      body: {
                        email: n,
                        data:
                          null !== (t = null == i ? void 0 : i.data) &&
                          void 0 !== t
                            ? t
                            : {},
                        create_user:
                          null ===
                            (r = null == i ? void 0 : i.shouldCreateUser) ||
                          void 0 === r ||
                          r,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                        code_challenge: a,
                        code_challenge_method: o,
                      },
                      redirectTo: null == i ? void 0 : i.emailRedirectTo,
                    },
                  );
                  return { data: { user: null, session: null }, error: s };
                }
                if ("phone" in e) {
                  let { phone: t, options: r } = e,
                    { data: o, error: s } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/otp`,
                      {
                        headers: this.headers,
                        body: {
                          phone: t,
                          data:
                            null !== (n = null == r ? void 0 : r.data) &&
                            void 0 !== n
                              ? n
                              : {},
                          create_user:
                            null ===
                              (i = null == r ? void 0 : r.shouldCreateUser) ||
                            void 0 === i ||
                            i,
                          gotrue_meta_security: {
                            captcha_token: null == r ? void 0 : r.captchaToken,
                          },
                          channel:
                            null !== (a = null == r ? void 0 : r.channel) &&
                            void 0 !== a
                              ? a
                              : "sms",
                        },
                      },
                    );
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == o ? void 0 : o.message_id,
                    },
                    error: s,
                  };
                }
                throw new s.AuthInvalidCredentialsError(
                  "You must provide either an email or phone number.",
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async verifyOtp(e) {
              var t, r;
              try {
                let n, i;
                "options" in e &&
                  ((n =
                    null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.redirectTo),
                  (i =
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.captchaToken));
                let { data: a, error: o } = await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/verify`,
                  {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, e), {
                      gotrue_meta_security: { captcha_token: i },
                    }),
                    redirectTo: n,
                    xform: l._sessionResponse,
                  },
                );
                if (o) throw o;
                if (!a) throw Error("An error occurred on token verification.");
                let s = a.session,
                  u = a.user;
                return (
                  (null == s ? void 0 : s.access_token) &&
                    (await this._saveSession(s),
                    await this._notifyAllSubscribers(
                      "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                      s,
                    )),
                  { data: { user: u, session: s }, error: null }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithSSO(e) {
              var t, r, n;
              try {
                let i = null,
                  a = null;
                return (
                  "pkce" === this.flowType &&
                    ([i, a] = await (0, u.getCodeChallengeAndMethod)(
                      this.storage,
                      this.storageKey,
                    )),
                  await (0, l._request)(this.fetch, "POST", `${this.url}/sso`, {
                    body: Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              "providerId" in e
                                ? { provider_id: e.providerId }
                                : null,
                            ),
                            "domain" in e ? { domain: e.domain } : null,
                          ),
                          {
                            redirect_to:
                              null !==
                                (r =
                                  null === (t = e.options) || void 0 === t
                                    ? void 0
                                    : t.redirectTo) && void 0 !== r
                                ? r
                                : void 0,
                          },
                        ),
                        (
                          null === (n = null == e ? void 0 : e.options) ||
                          void 0 === n
                            ? void 0
                            : n.captchaToken
                        )
                          ? {
                              gotrue_meta_security: {
                                captcha_token: e.options.captchaToken,
                              },
                            }
                          : null,
                      ),
                      {
                        skip_http_redirect: !0,
                        code_challenge: i,
                        code_challenge_method: a,
                      },
                    ),
                    headers: this.headers,
                    xform: l._ssoResponse,
                  })
                );
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async reauthenticate() {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._reauthenticate(),
                )
              );
            }
            async _reauthenticate() {
              try {
                return await this._useSession(async (e) => {
                  let {
                    data: { session: t },
                    error: r,
                  } = e;
                  if (r) throw r;
                  if (!t) throw new s.AuthSessionMissingError();
                  let { error: n } = await (0, l._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/reauthenticate`,
                    { headers: this.headers, jwt: t.access_token },
                  );
                  return { data: { user: null, session: null }, error: n };
                });
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async resend(e) {
              try {
                let t = `${this.url}/resend`;
                if ("email" in e) {
                  let { email: r, type: n, options: i } = e,
                    { error: a } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      t,
                      {
                        headers: this.headers,
                        body: {
                          email: r,
                          type: n,
                          gotrue_meta_security: {
                            captcha_token: null == i ? void 0 : i.captchaToken,
                          },
                        },
                        redirectTo: null == i ? void 0 : i.emailRedirectTo,
                      },
                    );
                  return { data: { user: null, session: null }, error: a };
                }
                if ("phone" in e) {
                  let { phone: r, type: n, options: i } = e,
                    { data: a, error: o } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      t,
                      {
                        headers: this.headers,
                        body: {
                          phone: r,
                          type: n,
                          gotrue_meta_security: {
                            captcha_token: null == i ? void 0 : i.captchaToken,
                          },
                        },
                      },
                    );
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == a ? void 0 : a.message_id,
                    },
                    error: o,
                  };
                }
                throw new s.AuthInvalidCredentialsError(
                  "You must provide either an email or phone number and a type",
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async getSession() {
              await this.initializePromise;
              let e = await this._acquireLock(-1, async () =>
                this._useSession(async (e) => e),
              );
              return e;
            }
            async _acquireLock(e, t) {
              this._debug("#_acquireLock", "begin", e);
              try {
                if (this.lockAcquired) {
                  let e = this.pendingInLock.length
                      ? this.pendingInLock[this.pendingInLock.length - 1]
                      : Promise.resolve(),
                    r = (async () => (await e, await t()))();
                  return (
                    this.pendingInLock.push(
                      (async () => {
                        try {
                          await r;
                        } catch (e) {}
                      })(),
                    ),
                    r
                  );
                }
                return await this.lock(
                  `lock:${this.storageKey}`,
                  e,
                  async () => {
                    this._debug(
                      "#_acquireLock",
                      "lock acquired for storage key",
                      this.storageKey,
                    );
                    try {
                      this.lockAcquired = !0;
                      let e = t();
                      for (
                        this.pendingInLock.push(
                          (async () => {
                            try {
                              await e;
                            } catch (e) {}
                          })(),
                        ),
                          await e;
                        this.pendingInLock.length;
                      ) {
                        let e = [...this.pendingInLock];
                        (await Promise.all(e),
                          this.pendingInLock.splice(0, e.length));
                      }
                      return await e;
                    } finally {
                      (this._debug(
                        "#_acquireLock",
                        "lock released for storage key",
                        this.storageKey,
                      ),
                        (this.lockAcquired = !1));
                    }
                  },
                );
              } finally {
                this._debug("#_acquireLock", "end");
              }
            }
            async _useSession(e) {
              this._debug("#_useSession", "begin");
              try {
                let t = await this.__loadSession();
                return await e(t);
              } finally {
                this._debug("#_useSession", "end");
              }
            }
            async __loadSession() {
              (this._debug("#__loadSession()", "begin"),
                this.lockAcquired ||
                  this._debug(
                    "#__loadSession()",
                    "used outside of an acquired lock!",
                    Error().stack,
                  ));
              try {
                let e = null,
                  t = await (0, u.getItemAsync)(this.storage, this.storageKey);
                if (
                  (this._debug("#getSession()", "session from storage", t),
                  null !== t &&
                    (this._isValidSession(t)
                      ? (e = t)
                      : (this._debug(
                          "#getSession()",
                          "session from storage is not valid",
                        ),
                        await this._removeSession())),
                  !e)
                )
                  return { data: { session: null }, error: null };
                let r =
                  !!e.expires_at &&
                  1e3 * e.expires_at - Date.now() < o.EXPIRY_MARGIN_MS;
                if (
                  (this._debug(
                    "#__loadSession()",
                    `session has${r ? "" : " not"} expired`,
                    "expires_at",
                    e.expires_at,
                  ),
                  !r)
                ) {
                  if (this.storage.isServer) {
                    let t = this.suppressGetSessionWarning,
                      r = new Proxy(e, {
                        get: (e, r, n) => (
                          t ||
                            "user" !== r ||
                            (console.warn(
                              "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
                            ),
                            (t = !0),
                            (this.suppressGetSessionWarning = !0)),
                          Reflect.get(e, r, n)
                        ),
                      });
                    e = r;
                  }
                  return { data: { session: e }, error: null };
                }
                let { session: n, error: i } = await this._callRefreshToken(
                  e.refresh_token,
                );
                if (i) return { data: { session: null }, error: i };
                return { data: { session: n }, error: null };
              } finally {
                this._debug("#__loadSession()", "end");
              }
            }
            async getUser(e) {
              if (e) return await this._getUser(e);
              await this.initializePromise;
              let t = await this._acquireLock(
                -1,
                async () => await this._getUser(),
              );
              return t;
            }
            async _getUser(e) {
              try {
                if (e)
                  return await (0, l._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/user`,
                    { headers: this.headers, jwt: e, xform: l._userResponse },
                  );
                return await this._useSession(async (e) => {
                  var t, r, n;
                  let { data: i, error: a } = e;
                  if (a) throw a;
                  return (null === (t = i.session) || void 0 === t
                    ? void 0
                    : t.access_token) || this.hasCustomAuthorizationHeader
                    ? await (0, l._request)(
                        this.fetch,
                        "GET",
                        `${this.url}/user`,
                        {
                          headers: this.headers,
                          jwt:
                            null !==
                              (n =
                                null === (r = i.session) || void 0 === r
                                  ? void 0
                                  : r.access_token) && void 0 !== n
                              ? n
                              : void 0,
                          xform: l._userResponse,
                        },
                      )
                    : {
                        data: { user: null },
                        error: new s.AuthSessionMissingError(),
                      };
                });
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return (
                    (0, s.isAuthSessionMissingError)(e) &&
                      (await this._removeSession(),
                      await (0, u.removeItemAsync)(
                        this.storage,
                        `${this.storageKey}-code-verifier`,
                      )),
                    { data: { user: null }, error: e }
                  );
                throw e;
              }
            }
            async updateUser(e, t = {}) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._updateUser(e, t),
                )
              );
            }
            async _updateUser(e, t = {}) {
              try {
                return await this._useSession(async (r) => {
                  let { data: n, error: i } = r;
                  if (i) throw i;
                  if (!n.session) throw new s.AuthSessionMissingError();
                  let a = n.session,
                    o = null,
                    c = null;
                  "pkce" === this.flowType &&
                    null != e.email &&
                    ([o, c] = await (0, u.getCodeChallengeAndMethod)(
                      this.storage,
                      this.storageKey,
                    ));
                  let { data: d, error: f } = await (0, l._request)(
                    this.fetch,
                    "PUT",
                    `${this.url}/user`,
                    {
                      headers: this.headers,
                      redirectTo: null == t ? void 0 : t.emailRedirectTo,
                      body: Object.assign(Object.assign({}, e), {
                        code_challenge: o,
                        code_challenge_method: c,
                      }),
                      jwt: a.access_token,
                      xform: l._userResponse,
                    },
                  );
                  if (f) throw f;
                  return (
                    (a.user = d.user),
                    await this._saveSession(a),
                    await this._notifyAllSubscribers("USER_UPDATED", a),
                    { data: { user: a.user }, error: null }
                  );
                });
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            _decodeJWT(e) {
              return (0, u.decodeJWTPayload)(e);
            }
            async setSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._setSession(e),
                )
              );
            }
            async _setSession(e) {
              try {
                if (!e.access_token || !e.refresh_token)
                  throw new s.AuthSessionMissingError();
                let t = Date.now() / 1e3,
                  r = t,
                  n = !0,
                  i = null,
                  a = (0, u.decodeJWTPayload)(e.access_token);
                if ((a.exp && (n = (r = a.exp) <= t), n)) {
                  let { session: t, error: r } = await this._callRefreshToken(
                    e.refresh_token,
                  );
                  if (r)
                    return { data: { user: null, session: null }, error: r };
                  if (!t)
                    return { data: { user: null, session: null }, error: null };
                  i = t;
                } else {
                  let { data: n, error: a } = await this._getUser(
                    e.access_token,
                  );
                  if (a) throw a;
                  ((i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: n.user,
                    token_type: "bearer",
                    expires_in: r - t,
                    expires_at: r,
                  }),
                    await this._saveSession(i),
                    await this._notifyAllSubscribers("SIGNED_IN", i));
                }
                return { data: { user: i.user, session: i }, error: null };
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { session: null, user: null }, error: e };
                throw e;
              }
            }
            async refreshSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._refreshSession(e),
                )
              );
            }
            async _refreshSession(e) {
              try {
                return await this._useSession(async (t) => {
                  var r;
                  if (!e) {
                    let { data: n, error: i } = t;
                    if (i) throw i;
                    e = null !== (r = n.session) && void 0 !== r ? r : void 0;
                  }
                  if (!(null == e ? void 0 : e.refresh_token))
                    throw new s.AuthSessionMissingError();
                  let { session: n, error: i } = await this._callRefreshToken(
                    e.refresh_token,
                  );
                  return i
                    ? { data: { user: null, session: null }, error: i }
                    : n
                      ? { data: { user: n.user, session: n }, error: null }
                      : { data: { user: null, session: null }, error: null };
                });
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async _getSessionFromURL(e, t) {
              try {
                if (!(0, u.isBrowser)())
                  throw new s.AuthImplicitGrantRedirectError(
                    "No browser detected.",
                  );
                if (e.error || e.error_description || e.error_code)
                  throw new s.AuthImplicitGrantRedirectError(
                    e.error_description ||
                      "Error in URL with unspecified error_description",
                    {
                      error: e.error || "unspecified_error",
                      code: e.error_code || "unspecified_code",
                    },
                  );
                switch (t) {
                  case "implicit":
                    if ("pkce" === this.flowType)
                      throw new s.AuthPKCEGrantCodeExchangeError(
                        "Not a valid PKCE flow url.",
                      );
                    break;
                  case "pkce":
                    if ("implicit" === this.flowType)
                      throw new s.AuthImplicitGrantRedirectError(
                        "Not a valid implicit grant flow url.",
                      );
                }
                if ("pkce" === t) {
                  if (
                    (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                    !e.code)
                  )
                    throw new s.AuthPKCEGrantCodeExchangeError(
                      "No code detected.",
                    );
                  let { data: t, error: r } =
                    await this._exchangeCodeForSession(e.code);
                  if (r) throw r;
                  let n = new URL(window.location.href);
                  return (
                    n.searchParams.delete("code"),
                    window.history.replaceState(
                      window.history.state,
                      "",
                      n.toString(),
                    ),
                    {
                      data: { session: t.session, redirectType: null },
                      error: null,
                    }
                  );
                }
                let {
                  provider_token: r,
                  provider_refresh_token: n,
                  access_token: i,
                  refresh_token: a,
                  expires_in: l,
                  expires_at: c,
                  token_type: d,
                } = e;
                if (!i || !l || !a || !d)
                  throw new s.AuthImplicitGrantRedirectError(
                    "No session defined in URL",
                  );
                let f = Math.round(Date.now() / 1e3),
                  h = parseInt(l),
                  p = f + h;
                c && (p = parseInt(c));
                let m = p - f;
                1e3 * m <= o.AUTO_REFRESH_TICK_DURATION_MS &&
                  console.warn(
                    `@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${h}s`,
                  );
                let g = p - h;
                f - g >= 120
                  ? console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                      g,
                      p,
                      f,
                    )
                  : f - g < 0 &&
                    console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
                      g,
                      p,
                      f,
                    );
                let { data: y, error: v } = await this._getUser(i);
                if (v) throw v;
                let b = {
                  provider_token: r,
                  provider_refresh_token: n,
                  access_token: i,
                  expires_in: h,
                  expires_at: p,
                  refresh_token: a,
                  token_type: d,
                  user: y.user,
                };
                return (
                  (window.location.hash = ""),
                  this._debug(
                    "#_getSessionFromURL()",
                    "clearing window.location.hash",
                  ),
                  { data: { session: b, redirectType: e.type }, error: null }
                );
              } catch (e) {
                if ((0, s.isAuthError)(e))
                  return {
                    data: { session: null, redirectType: null },
                    error: e,
                  };
                throw e;
              }
            }
            _isImplicitGrantCallback(e) {
              return !!(e.access_token || e.error_description);
            }
            async _isPKCECallback(e) {
              let t = await (0, u.getItemAsync)(
                this.storage,
                `${this.storageKey}-code-verifier`,
              );
              return !!(e.code && t);
            }
            async signOut(e = { scope: "global" }) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._signOut(e))
              );
            }
            async _signOut({ scope: e } = { scope: "global" }) {
              return await this._useSession(async (t) => {
                var r;
                let { data: n, error: i } = t;
                if (i) return { error: i };
                let a =
                  null === (r = n.session) || void 0 === r
                    ? void 0
                    : r.access_token;
                if (a) {
                  let { error: t } = await this.admin.signOut(a, e);
                  if (
                    t &&
                    !(
                      (0, s.isAuthApiError)(t) &&
                      (404 === t.status || 401 === t.status || 403 === t.status)
                    )
                  )
                    return { error: t };
                }
                return (
                  "others" !== e &&
                    (await this._removeSession(),
                    await (0, u.removeItemAsync)(
                      this.storage,
                      `${this.storageKey}-code-verifier`,
                    )),
                  { error: null }
                );
              });
            }
            onAuthStateChange(e) {
              let t = (0, u.uuid)(),
                r = {
                  id: t,
                  callback: e,
                  unsubscribe: () => {
                    (this._debug(
                      "#unsubscribe()",
                      "state change callback with id removed",
                      t,
                    ),
                      this.stateChangeEmitters.delete(t));
                  },
                };
              return (
                this._debug(
                  "#onAuthStateChange()",
                  "registered callback with id",
                  t,
                ),
                this.stateChangeEmitters.set(t, r),
                (async () => {
                  (await this.initializePromise,
                    await this._acquireLock(-1, async () => {
                      this._emitInitialSession(t);
                    }));
                })(),
                { data: { subscription: r } }
              );
            }
            async _emitInitialSession(e) {
              return await this._useSession(async (t) => {
                var r, n;
                try {
                  let {
                    data: { session: n },
                    error: i,
                  } = t;
                  if (i) throw i;
                  (await (null === (r = this.stateChangeEmitters.get(e)) ||
                  void 0 === r
                    ? void 0
                    : r.callback("INITIAL_SESSION", n)),
                    this._debug(
                      "INITIAL_SESSION",
                      "callback id",
                      e,
                      "session",
                      n,
                    ));
                } catch (t) {
                  (await (null === (n = this.stateChangeEmitters.get(e)) ||
                  void 0 === n
                    ? void 0
                    : n.callback("INITIAL_SESSION", null)),
                    this._debug(
                      "INITIAL_SESSION",
                      "callback id",
                      e,
                      "error",
                      t,
                    ),
                    console.error(t));
                }
              });
            }
            async resetPasswordForEmail(e, t = {}) {
              let r = null,
                n = null;
              "pkce" === this.flowType &&
                ([r, n] = await (0, u.getCodeChallengeAndMethod)(
                  this.storage,
                  this.storageKey,
                  !0,
                ));
              try {
                return await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/recover`,
                  {
                    body: {
                      email: e,
                      code_challenge: r,
                      code_challenge_method: n,
                      gotrue_meta_security: { captcha_token: t.captchaToken },
                    },
                    headers: this.headers,
                    redirectTo: t.redirectTo,
                  },
                );
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async getUserIdentities() {
              var e;
              try {
                let { data: t, error: r } = await this.getUser();
                if (r) throw r;
                return {
                  data: {
                    identities:
                      null !== (e = t.user.identities) && void 0 !== e ? e : [],
                  },
                  error: null,
                };
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async linkIdentity(e) {
              var t;
              try {
                let { data: r, error: n } = await this._useSession(
                  async (t) => {
                    var r, n, i, a, o;
                    let { data: s, error: u } = t;
                    if (u) throw u;
                    let c = await this._getUrlForProvider(
                      `${this.url}/user/identities/authorize`,
                      e.provider,
                      {
                        redirectTo:
                          null === (r = e.options) || void 0 === r
                            ? void 0
                            : r.redirectTo,
                        scopes:
                          null === (n = e.options) || void 0 === n
                            ? void 0
                            : n.scopes,
                        queryParams:
                          null === (i = e.options) || void 0 === i
                            ? void 0
                            : i.queryParams,
                        skipBrowserRedirect: !0,
                      },
                    );
                    return await (0, l._request)(this.fetch, "GET", c, {
                      headers: this.headers,
                      jwt:
                        null !==
                          (o =
                            null === (a = s.session) || void 0 === a
                              ? void 0
                              : a.access_token) && void 0 !== o
                          ? o
                          : void 0,
                    });
                  },
                );
                if (n) throw n;
                return (
                  !(0, u.isBrowser)() ||
                    (null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.skipBrowserRedirect) ||
                    window.location.assign(null == r ? void 0 : r.url),
                  {
                    data: {
                      provider: e.provider,
                      url: null == r ? void 0 : r.url,
                    },
                    error: null,
                  }
                );
              } catch (t) {
                if ((0, s.isAuthError)(t))
                  return {
                    data: { provider: e.provider, url: null },
                    error: t,
                  };
                throw t;
              }
            }
            async unlinkIdentity(e) {
              try {
                return await this._useSession(async (t) => {
                  var r, n;
                  let { data: i, error: a } = t;
                  if (a) throw a;
                  return await (0, l._request)(
                    this.fetch,
                    "DELETE",
                    `${this.url}/user/identities/${e.identity_id}`,
                    {
                      headers: this.headers,
                      jwt:
                        null !==
                          (n =
                            null === (r = i.session) || void 0 === r
                              ? void 0
                              : r.access_token) && void 0 !== n
                          ? n
                          : void 0,
                    },
                  );
                });
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _refreshAccessToken(e) {
              let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
              this._debug(t, "begin");
              try {
                let r = Date.now();
                return await (0, u.retryable)(
                  async (r) => (
                    r > 0 && (await (0, u.sleep)(200 * Math.pow(2, r - 1))),
                    this._debug(t, "refreshing attempt", r),
                    await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/token?grant_type=refresh_token`,
                      {
                        body: { refresh_token: e },
                        headers: this.headers,
                        xform: l._sessionResponse,
                      },
                    )
                  ),
                  (e, t) =>
                    t &&
                    (0, s.isAuthRetryableFetchError)(t) &&
                    Date.now() + 200 * Math.pow(2, e) - r <
                      o.AUTO_REFRESH_TICK_DURATION_MS,
                );
              } catch (e) {
                if ((this._debug(t, "error", e), (0, s.isAuthError)(e)))
                  return { data: { session: null, user: null }, error: e };
                throw e;
              } finally {
                this._debug(t, "end");
              }
            }
            _isValidSession(e) {
              return (
                "object" == typeof e &&
                null !== e &&
                "access_token" in e &&
                "refresh_token" in e &&
                "expires_at" in e
              );
            }
            async _handleProviderSignIn(e, t) {
              let r = await this._getUrlForProvider(
                `${this.url}/authorize`,
                e,
                {
                  redirectTo: t.redirectTo,
                  scopes: t.scopes,
                  queryParams: t.queryParams,
                },
              );
              return (
                this._debug(
                  "#_handleProviderSignIn()",
                  "provider",
                  e,
                  "options",
                  t,
                  "url",
                  r,
                ),
                (0, u.isBrowser)() &&
                  !t.skipBrowserRedirect &&
                  window.location.assign(r),
                { data: { provider: e, url: r }, error: null }
              );
            }
            async _recoverAndRefresh() {
              var e;
              let t = "#_recoverAndRefresh()";
              this._debug(t, "begin");
              try {
                let r = await (0, u.getItemAsync)(
                  this.storage,
                  this.storageKey,
                );
                if (
                  (this._debug(t, "session from storage", r),
                  !this._isValidSession(r))
                ) {
                  (this._debug(t, "session is not valid"),
                    null !== r && (await this._removeSession()));
                  return;
                }
                let n =
                  (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) *
                    1e3 -
                    Date.now() <
                  o.EXPIRY_MARGIN_MS;
                if (
                  (this._debug(
                    t,
                    `session has${n ? "" : " not"} expired with margin of ${o.EXPIRY_MARGIN_MS}s`,
                  ),
                  n)
                ) {
                  if (this.autoRefreshToken && r.refresh_token) {
                    let { error: e } = await this._callRefreshToken(
                      r.refresh_token,
                    );
                    e &&
                      (console.error(e),
                      (0, s.isAuthRetryableFetchError)(e) ||
                        (this._debug(
                          t,
                          "refresh failed with a non-retryable error, removing the session",
                          e,
                        ),
                        await this._removeSession()));
                  }
                } else await this._notifyAllSubscribers("SIGNED_IN", r);
              } catch (e) {
                (this._debug(t, "error", e), console.error(e));
                return;
              } finally {
                this._debug(t, "end");
              }
            }
            async _callRefreshToken(e) {
              var t, r;
              if (!e) throw new s.AuthSessionMissingError();
              if (this.refreshingDeferred)
                return this.refreshingDeferred.promise;
              let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
              this._debug(n, "begin");
              try {
                this.refreshingDeferred = new u.Deferred();
                let { data: t, error: r } = await this._refreshAccessToken(e);
                if (r) throw r;
                if (!t.session) throw new s.AuthSessionMissingError();
                (await this._saveSession(t.session),
                  await this._notifyAllSubscribers(
                    "TOKEN_REFRESHED",
                    t.session,
                  ));
                let n = { session: t.session, error: null };
                return (this.refreshingDeferred.resolve(n), n);
              } catch (e) {
                if ((this._debug(n, "error", e), (0, s.isAuthError)(e))) {
                  let r = { session: null, error: e };
                  return (
                    (0, s.isAuthRetryableFetchError)(e) ||
                      (await this._removeSession()),
                    null === (t = this.refreshingDeferred) ||
                      void 0 === t ||
                      t.resolve(r),
                    r
                  );
                }
                throw (
                  null === (r = this.refreshingDeferred) ||
                    void 0 === r ||
                    r.reject(e),
                  e
                );
              } finally {
                ((this.refreshingDeferred = null), this._debug(n, "end"));
              }
            }
            async _notifyAllSubscribers(e, t, r = !0) {
              let n = `#_notifyAllSubscribers(${e})`;
              this._debug(n, "begin", t, `broadcast = ${r}`);
              try {
                this.broadcastChannel &&
                  r &&
                  this.broadcastChannel.postMessage({ event: e, session: t });
                let n = [],
                  i = Array.from(this.stateChangeEmitters.values()).map(
                    async (r) => {
                      try {
                        await r.callback(e, t);
                      } catch (e) {
                        n.push(e);
                      }
                    },
                  );
                if ((await Promise.all(i), n.length > 0)) {
                  for (let e = 0; e < n.length; e += 1) console.error(n[e]);
                  throw n[0];
                }
              } finally {
                this._debug(n, "end");
              }
            }
            async _saveSession(e) {
              (this._debug("#_saveSession()", e),
                (this.suppressGetSessionWarning = !0),
                await (0, u.setItemAsync)(this.storage, this.storageKey, e));
            }
            async _removeSession() {
              (this._debug("#_removeSession()"),
                await (0, u.removeItemAsync)(this.storage, this.storageKey),
                await this._notifyAllSubscribers("SIGNED_OUT", null));
            }
            _removeVisibilityChangedCallback() {
              this._debug("#_removeVisibilityChangedCallback()");
              let e = this.visibilityChangedCallback;
              this.visibilityChangedCallback = null;
              try {
                e &&
                  (0, u.isBrowser)() &&
                  (null == window ? void 0 : window.removeEventListener) &&
                  window.removeEventListener("visibilitychange", e);
              } catch (e) {
                console.error("removing visibilitychange callback failed", e);
              }
            }
            async _startAutoRefresh() {
              (await this._stopAutoRefresh(),
                this._debug("#_startAutoRefresh()"));
              let e = setInterval(
                () => this._autoRefreshTokenTick(),
                o.AUTO_REFRESH_TICK_DURATION_MS,
              );
              ((this.autoRefreshTicker = e),
                e && "object" == typeof e && "function" == typeof e.unref
                  ? e.unref()
                  : "undefined" != typeof Deno &&
                    "function" == typeof Deno.unrefTimer &&
                    Deno.unrefTimer(e),
                setTimeout(async () => {
                  (await this.initializePromise,
                    await this._autoRefreshTokenTick());
                }, 0));
            }
            async _stopAutoRefresh() {
              this._debug("#_stopAutoRefresh()");
              let e = this.autoRefreshTicker;
              ((this.autoRefreshTicker = null), e && clearInterval(e));
            }
            async startAutoRefresh() {
              (this._removeVisibilityChangedCallback(),
                await this._startAutoRefresh());
            }
            async stopAutoRefresh() {
              (this._removeVisibilityChangedCallback(),
                await this._stopAutoRefresh());
            }
            async _autoRefreshTokenTick() {
              this._debug("#_autoRefreshTokenTick()", "begin");
              try {
                await this._acquireLock(0, async () => {
                  try {
                    let e = Date.now();
                    try {
                      return await this._useSession(async (t) => {
                        let {
                          data: { session: r },
                        } = t;
                        if (!r || !r.refresh_token || !r.expires_at) {
                          this._debug("#_autoRefreshTokenTick()", "no session");
                          return;
                        }
                        let n = Math.floor(
                          (1e3 * r.expires_at - e) /
                            o.AUTO_REFRESH_TICK_DURATION_MS,
                        );
                        (this._debug(
                          "#_autoRefreshTokenTick()",
                          `access token expires in ${n} ticks, a tick lasts ${o.AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${o.AUTO_REFRESH_TICK_THRESHOLD} ticks`,
                        ),
                          n <= o.AUTO_REFRESH_TICK_THRESHOLD &&
                            (await this._callRefreshToken(r.refresh_token)));
                      });
                    } catch (e) {
                      console.error(
                        "Auto refresh tick failed with error. This is likely a transient error.",
                        e,
                      );
                    }
                  } finally {
                    this._debug("#_autoRefreshTokenTick()", "end");
                  }
                });
              } catch (e) {
                if (
                  e.isAcquireTimeout ||
                  e instanceof h.LockAcquireTimeoutError
                )
                  this._debug("auto refresh token tick lock not available");
                else throw e;
              }
            }
            async _handleVisibilityChange() {
              if (
                (this._debug("#_handleVisibilityChange()"),
                !(0, u.isBrowser)() ||
                  !(null == window ? void 0 : window.addEventListener))
              )
                return (this.autoRefreshToken && this.startAutoRefresh(), !1);
              try {
                ((this.visibilityChangedCallback = async () =>
                  await this._onVisibilityChanged(!1)),
                  null == window ||
                    window.addEventListener(
                      "visibilitychange",
                      this.visibilityChangedCallback,
                    ),
                  await this._onVisibilityChanged(!0));
              } catch (e) {
                console.error("_handleVisibilityChange", e);
              }
            }
            async _onVisibilityChanged(e) {
              let t = `#_onVisibilityChanged(${e})`;
              (this._debug(t, "visibilityState", document.visibilityState),
                "visible" === document.visibilityState
                  ? (this.autoRefreshToken && this._startAutoRefresh(),
                    e ||
                      (await this.initializePromise,
                      await this._acquireLock(-1, async () => {
                        if ("visible" !== document.visibilityState) {
                          this._debug(
                            t,
                            "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                          );
                          return;
                        }
                        await this._recoverAndRefresh();
                      })))
                  : "hidden" === document.visibilityState &&
                    this.autoRefreshToken &&
                    this._stopAutoRefresh());
            }
            async _getUrlForProvider(e, t, r) {
              let n = [`provider=${encodeURIComponent(t)}`];
              if (
                ((null == r ? void 0 : r.redirectTo) &&
                  n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
                (null == r ? void 0 : r.scopes) &&
                  n.push(`scopes=${encodeURIComponent(r.scopes)}`),
                "pkce" === this.flowType)
              ) {
                let [e, t] = await (0, u.getCodeChallengeAndMethod)(
                    this.storage,
                    this.storageKey,
                  ),
                  r = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(e)}`,
                    code_challenge_method: `${encodeURIComponent(t)}`,
                  });
                n.push(r.toString());
              }
              if (null == r ? void 0 : r.queryParams) {
                let e = new URLSearchParams(r.queryParams);
                n.push(e.toString());
              }
              return (
                (null == r ? void 0 : r.skipBrowserRedirect) &&
                  n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
                `${e}?${n.join("&")}`
              );
            }
            async _unenroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var r;
                  let { data: n, error: i } = t;
                  return i
                    ? { data: null, error: i }
                    : await (0, l._request)(
                        this.fetch,
                        "DELETE",
                        `${this.url}/factors/${e.factorId}`,
                        {
                          headers: this.headers,
                          jwt:
                            null === (r = null == n ? void 0 : n.session) ||
                            void 0 === r
                              ? void 0
                              : r.access_token,
                        },
                      );
                });
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _enroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var r, n;
                  let { data: i, error: a } = t;
                  if (a) return { data: null, error: a };
                  let o = Object.assign(
                      {
                        friendly_name: e.friendlyName,
                        factor_type: e.factorType,
                      },
                      "phone" === e.factorType
                        ? { phone: e.phone }
                        : { issuer: e.issuer },
                    ),
                    { data: s, error: u } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/factors`,
                      {
                        body: o,
                        headers: this.headers,
                        jwt:
                          null === (r = null == i ? void 0 : i.session) ||
                          void 0 === r
                            ? void 0
                            : r.access_token,
                      },
                    );
                  return u
                    ? { data: null, error: u }
                    : ("totp" === e.factorType &&
                        (null === (n = null == s ? void 0 : s.totp) ||
                        void 0 === n
                          ? void 0
                          : n.qr_code) &&
                        (s.totp.qr_code = `data:image/svg+xml;utf-8,${s.totp.qr_code}`),
                      { data: s, error: null });
                });
              } catch (e) {
                if ((0, s.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _verify(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var r;
                    let { data: n, error: i } = t;
                    if (i) return { data: null, error: i };
                    let { data: a, error: o } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/verify`,
                      {
                        body: { code: e.code, challenge_id: e.challengeId },
                        headers: this.headers,
                        jwt:
                          null === (r = null == n ? void 0 : n.session) ||
                          void 0 === r
                            ? void 0
                            : r.access_token,
                      },
                    );
                    return o
                      ? { data: null, error: o }
                      : (await this._saveSession(
                          Object.assign(
                            {
                              expires_at:
                                Math.round(Date.now() / 1e3) + a.expires_in,
                            },
                            a,
                          ),
                        ),
                        await this._notifyAllSubscribers(
                          "MFA_CHALLENGE_VERIFIED",
                          a,
                        ),
                        { data: a, error: o });
                  });
                } catch (e) {
                  if ((0, s.isAuthError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            async _challenge(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var r;
                    let { data: n, error: i } = t;
                    return i
                      ? { data: null, error: i }
                      : await (0, l._request)(
                          this.fetch,
                          "POST",
                          `${this.url}/factors/${e.factorId}/challenge`,
                          {
                            body: { channel: e.channel },
                            headers: this.headers,
                            jwt:
                              null === (r = null == n ? void 0 : n.session) ||
                              void 0 === r
                                ? void 0
                                : r.access_token,
                          },
                        );
                  });
                } catch (e) {
                  if ((0, s.isAuthError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            async _challengeAndVerify(e) {
              let { data: t, error: r } = await this._challenge({
                factorId: e.factorId,
              });
              return r
                ? { data: null, error: r }
                : await this._verify({
                    factorId: e.factorId,
                    challengeId: t.id,
                    code: e.code,
                  });
            }
            async _listFactors() {
              let {
                data: { user: e },
                error: t,
              } = await this.getUser();
              if (t) return { data: null, error: t };
              let r = (null == e ? void 0 : e.factors) || [],
                n = r.filter(
                  (e) => "totp" === e.factor_type && "verified" === e.status,
                ),
                i = r.filter(
                  (e) => "phone" === e.factor_type && "verified" === e.status,
                );
              return { data: { all: r, totp: n, phone: i }, error: null };
            }
            async _getAuthenticatorAssuranceLevel() {
              return this._acquireLock(
                -1,
                async () =>
                  await this._useSession(async (e) => {
                    var t, r;
                    let {
                      data: { session: n },
                      error: i,
                    } = e;
                    if (i) return { data: null, error: i };
                    if (!n)
                      return {
                        data: {
                          currentLevel: null,
                          nextLevel: null,
                          currentAuthenticationMethods: [],
                        },
                        error: null,
                      };
                    let a = this._decodeJWT(n.access_token),
                      o = null;
                    a.aal && (o = a.aal);
                    let s = o,
                      l =
                        null !==
                          (r =
                            null === (t = n.user.factors) || void 0 === t
                              ? void 0
                              : t.filter((e) => "verified" === e.status)) &&
                        void 0 !== r
                          ? r
                          : [];
                    l.length > 0 && (s = "aal2");
                    let u = a.amr || [];
                    return {
                      data: {
                        currentLevel: o,
                        nextLevel: s,
                        currentAuthenticationMethods: u,
                      },
                      error: null,
                    };
                  }),
              );
            }
          }
          ((r.default = g), (g.nextInstanceID = 0));
        },
        {
          "./GoTrueAdminApi": "AGvR0",
          "./lib/constants": "lm5sS",
          "./lib/errors": "e43I7",
          "./lib/fetch": "aJsn2",
          "./lib/helpers": "gMQmy",
          "./lib/local-storage": "7GvcO",
          "./lib/polyfills": "fEEgj",
          "./lib/version": "4o9Id",
          "./lib/locks": "ggQfR",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "7GvcO": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "localStorageAdapter", () => a),
            n.export(r, "memoryLocalStorageAdapter", () => o));
          var i = e("./helpers");
          let a = {
            getItem: (e) =>
              (0, i.supportsLocalStorage)()
                ? globalThis.localStorage.getItem(e)
                : null,
            setItem: (e, t) => {
              (0, i.supportsLocalStorage)() &&
                globalThis.localStorage.setItem(e, t);
            },
            removeItem: (e) => {
              (0, i.supportsLocalStorage)() &&
                globalThis.localStorage.removeItem(e);
            },
          };
          function o(e = {}) {
            return {
              getItem: (t) => e[t] || null,
              setItem: (t, r) => {
                e[t] = r;
              },
              removeItem: (t) => {
                delete e[t];
              },
            };
          }
        },
        {
          "./helpers": "gMQmy",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      fEEgj: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i() {
            if ("object" != typeof globalThis)
              try {
                (Object.defineProperty(Object.prototype, "__magic__", {
                  get: function () {
                    return this;
                  },
                  configurable: !0,
                }),
                  (__magic__.globalThis = __magic__),
                  delete Object.prototype.__magic__);
              } catch (e) {
                "undefined" != typeof self && (self.globalThis = self);
              }
          }
          (n.defineInteropFlag(r), n.export(r, "polyfillGlobalThis", () => i));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      ggQfR: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "internals", () => a),
            n.export(r, "LockAcquireTimeoutError", () => o),
            n.export(r, "NavigatorLockAcquireTimeoutError", () => s),
            n.export(r, "ProcessLockAcquireTimeoutError", () => l),
            n.export(r, "navigatorLock", () => u),
            n.export(r, "processLock", () => d));
          var i = e("./helpers");
          let a = {
            debug: !!(
              globalThis &&
              (0, i.supportsLocalStorage)() &&
              globalThis.localStorage &&
              "true" ===
                globalThis.localStorage.getItem(
                  "supabase.gotrue-js.locks.debug",
                )
            ),
          };
          class o extends Error {
            constructor(e) {
              (super(e), (this.isAcquireTimeout = !0));
            }
          }
          class s extends o {}
          class l extends o {}
          async function u(e, t, r) {
            a.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquire lock",
                e,
                t,
              );
            let n = new globalThis.AbortController();
            return (
              t > 0 &&
                setTimeout(() => {
                  (n.abort(),
                    a.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock acquire timed out",
                        e,
                      ));
                }, t),
              await Promise.resolve().then(() =>
                globalThis.navigator.locks.request(
                  e,
                  0 === t
                    ? { mode: "exclusive", ifAvailable: !0 }
                    : { mode: "exclusive", signal: n.signal },
                  async (n) => {
                    if (n) {
                      a.debug &&
                        console.log(
                          "@supabase/gotrue-js: navigatorLock: acquired",
                          e,
                          n.name,
                        );
                      try {
                        return await r();
                      } finally {
                        a.debug &&
                          console.log(
                            "@supabase/gotrue-js: navigatorLock: released",
                            e,
                            n.name,
                          );
                      }
                    } else if (0 === t)
                      throw (
                        a.debug &&
                          console.log(
                            "@supabase/gotrue-js: navigatorLock: not immediately available",
                            e,
                          ),
                        new s(
                          `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`,
                        )
                      );
                    else {
                      if (a.debug)
                        try {
                          let e = await globalThis.navigator.locks.query();
                          console.log(
                            "@supabase/gotrue-js: Navigator LockManager state",
                            JSON.stringify(e, null, "  "),
                          );
                        } catch (e) {
                          console.warn(
                            "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                            e,
                          );
                        }
                      return (
                        console.warn(
                          "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
                        ),
                        await r()
                      );
                    }
                  },
                ),
              )
            );
          }
          let c = {};
          async function d(e, t, r) {
            var n;
            let i = null !== (n = c[e]) && void 0 !== n ? n : Promise.resolve(),
              a = Promise.race(
                [
                  i.catch(() => null),
                  t >= 0
                    ? new Promise((r, n) => {
                        setTimeout(() => {
                          n(
                            new l(
                              `Acquring process lock with name "${e}" timed out`,
                            ),
                          );
                        }, t);
                      })
                    : null,
                ].filter((e) => e),
              )
                .catch((e) => {
                  if (e && e.isAcquireTimeout) throw e;
                  return null;
                })
                .then(async () => await r());
            return (
              (c[e] = a.catch(async (e) => {
                if (e && e.isAcquireTimeout) return (await i, null);
                throw e;
              })),
              await a
            );
          }
        },
        {
          "./helpers": "gMQmy",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      fjr89: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r);
          var i = e("./GoTrueAdminApi"),
            a = n.interopDefault(i);
          let o = a.default;
          r.default = o;
        },
        {
          "./GoTrueAdminApi": "AGvR0",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "5S5Z1": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r);
          var i = e("./GoTrueClient"),
            a = n.interopDefault(i);
          let o = a.default;
          r.default = o;
        },
        {
          "./GoTrueClient": "l70wP",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      fIfTy: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r,
          );
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "9RCRe": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "BaseStorage", () => s),
            n.export(r, "Storage", () => l));
          var i = e("pify"),
            a = n.interopDefault(i),
            o = () => {
              try {
                let e =
                  globalThis.navigator?.userAgent.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
                  ) || [];
                if ("Chrome" === e[1])
                  return (
                    100 > parseInt(e[2]) ||
                    globalThis.chrome.runtime?.getManifest()
                      ?.manifest_version === 2
                  );
              } catch {}
              return !1;
            },
            s = class {
              #e;
              #t;
              get primaryClient() {
                return this.#t;
              }
              #r;
              get secondaryClient() {
                return this.#r;
              }
              #n;
              get area() {
                return this.#n;
              }
              get hasWebApi() {
                try {
                  return "u" > typeof window && !!window.localStorage;
                } catch (e) {
                  return (console.error(e), !1);
                }
              }
              #i = new Map();
              #a;
              get copiedKeySet() {
                return this.#a;
              }
              isCopied = (e) =>
                this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
              #o = !1;
              get allCopied() {
                return this.#o;
              }
              getExtStorageApi = () =>
                globalThis.browser?.storage || globalThis.chrome?.storage;
              get hasExtensionApi() {
                try {
                  return !!this.getExtStorageApi();
                } catch (e) {
                  return (console.error(e), !1);
                }
              }
              isWatchSupported = () => this.hasExtensionApi;
              keyNamespace = "";
              isValidKey = (e) => e.startsWith(this.keyNamespace);
              getNamespacedKey = (e) => `${this.keyNamespace}${e}`;
              getUnnamespacedKey = (e) => e.slice(this.keyNamespace.length);
              serde = { serializer: JSON.stringify, deserializer: JSON.parse };
              constructor({
                area: e = "sync",
                allCopied: t = !1,
                copiedKeyList: r = [],
                serde: n = {},
              } = {}) {
                (this.setCopiedKeySet(r),
                  (this.#n = e),
                  (this.#o = t),
                  (this.serde = { ...this.serde, ...n }));
                try {
                  this.hasWebApi &&
                    (t || r.length > 0) &&
                    (this.#r = window.localStorage);
                } catch {}
                try {
                  this.hasExtensionApi &&
                    ((this.#e = this.getExtStorageApi()),
                    o()
                      ? (this.#t = (0, a.default)(this.#e[this.area], {
                          exclude: ["getBytesInUse"],
                          errorFirst: !1,
                        }))
                      : (this.#t = this.#e[this.area]));
                } catch {}
              }
              setCopiedKeySet(e) {
                this.#a = new Set(e);
              }
              rawGetAll = () => this.#t?.get();
              getAll = async () =>
                Object.entries(await this.rawGetAll())
                  .filter(([e]) => this.isValidKey(e))
                  .reduce(
                    (e, [t, r]) => ((e[this.getUnnamespacedKey(t)] = r), e),
                    {},
                  );
              copy = async (e) => {
                let t = void 0 === e;
                if (
                  (!t && !this.copiedKeySet.has(e)) ||
                  !this.allCopied ||
                  !this.hasExtensionApi
                )
                  return !1;
                let r = this.allCopied
                  ? await this.rawGetAll()
                  : await this.#t.get(
                      (t ? [...this.copiedKeySet] : [e]).map(
                        this.getNamespacedKey,
                      ),
                    );
                if (!r) return !1;
                let n = !1;
                for (let e in r) {
                  let t = r[e],
                    i = this.#r?.getItem(e);
                  (this.#r?.setItem(e, t), (n ||= t !== i));
                }
                return n;
              };
              rawGet = async (e) => (await this.rawGetMany([e]))[e];
              rawGetMany = async (e) =>
                this.hasExtensionApi
                  ? await this.#t.get(e)
                  : e
                      .filter(this.isCopied)
                      .reduce((e, t) => ((e[t] = this.#r?.getItem(t)), e), {});
              rawSet = async (e, t) => await this.rawSetMany({ [e]: t });
              rawSetMany = async (e) => (
                this.#r &&
                  Object.entries(e)
                    .filter(([e]) => this.isCopied(e))
                    .forEach(([e, t]) => this.#r.setItem(e, t)),
                this.hasExtensionApi && (await this.#t.set(e)),
                null
              );
              clear = async (e = !1) => {
                (e && this.#r?.clear(), await this.#t.clear());
              };
              rawRemove = async (e) => {
                await this.rawRemoveMany([e]);
              };
              rawRemoveMany = async (e) => {
                (this.#r &&
                  e.filter(this.isCopied).forEach((e) => this.#r.removeItem(e)),
                  this.hasExtensionApi && (await this.#t.remove(e)));
              };
              removeAll = async () => {
                let e = Object.keys(await this.getAll());
                await this.removeMany(e);
              };
              watch = (e) => {
                let t = this.isWatchSupported();
                return (t && this.#s(e), t);
              };
              #s = (e) => {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = this.#i.get(r)?.callbackSet || new Set();
                  if ((n.add(e[t]), n.size > 1)) continue;
                  let i = (e, t) => {
                    if (t !== this.area || !e[r]) return;
                    let n = this.#i.get(r);
                    if (!n)
                      throw Error(
                        `Storage comms does not exist for nsKey: ${r}`,
                      );
                    Promise.all([
                      this.parseValue(e[r].newValue),
                      this.parseValue(e[r].oldValue),
                    ]).then(([e, r]) => {
                      for (let i of n.callbackSet)
                        i({ newValue: e, oldValue: r }, t);
                    });
                  };
                  (this.#e.onChanged.addListener(i),
                    this.#i.set(r, { callbackSet: n, listener: i }));
                }
              };
              unwatch = (e) => {
                let t = this.isWatchSupported();
                return (t && this.#l(e), t);
              };
              #l(e) {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = e[t],
                    i = this.#i.get(r);
                  i &&
                    (i.callbackSet.delete(n),
                    0 === i.callbackSet.size &&
                      (this.#i.delete(r),
                      this.#e.onChanged.removeListener(i.listener)));
                }
              }
              unwatchAll = () => this.#u();
              #u() {
                (this.#i.forEach(({ listener: e }) =>
                  this.#e.onChanged.removeListener(e),
                ),
                  this.#i.clear());
              }
              async getItem(e) {
                return this.get(e);
              }
              async getItems(e) {
                return await this.getMany(e);
              }
              async setItem(e, t) {
                await this.set(e, t);
              }
              async setItems(e) {
                await await this.setMany(e);
              }
              async removeItem(e) {
                return this.remove(e);
              }
              async removeItems(e) {
                return await this.removeMany(e);
              }
            },
            l = class extends s {
              get = async (e) => {
                let t = this.getNamespacedKey(e),
                  r = await this.rawGet(t);
                return this.parseValue(r);
              };
              getMany = async (e) => {
                let t = e.map(this.getNamespacedKey),
                  r = await this.rawGetMany(t),
                  n = await Promise.all(Object.values(r).map(this.parseValue));
                return Object.keys(r).reduce(
                  (e, t, r) => ((e[this.getUnnamespacedKey(t)] = n[r]), e),
                  {},
                );
              };
              set = async (e, t) => {
                let r = this.getNamespacedKey(e),
                  n = this.serde.serializer(t);
                return this.rawSet(r, n);
              };
              setMany = async (e) => {
                let t = Object.entries(e).reduce(
                  (e, [t, r]) => (
                    (e[this.getNamespacedKey(t)] = this.serde.serializer(r)),
                    e
                  ),
                  {},
                );
                return await this.rawSetMany(t);
              };
              remove = async (e) => {
                let t = this.getNamespacedKey(e);
                return this.rawRemove(t);
              };
              removeMany = async (e) => {
                let t = e.map(this.getNamespacedKey);
                return await this.rawRemoveMany(t);
              };
              setNamespace = (e) => {
                this.keyNamespace = e;
              };
              parseValue = async (e) => {
                try {
                  if (void 0 !== e) return this.serde.deserializer(e);
                } catch (e) {
                  console.error(e);
                }
              };
            };
        },
        {
          pify: "e8SYa",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      e8SYa: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "default", () => o));
          let i = (e, t, r, n) =>
              function (...i) {
                let a = t.promiseModule;
                return new a((a, o) => {
                  (t.multiArgs
                    ? i.push((...e) => {
                        t.errorFirst ? (e[0] ? o(e) : (e.shift(), a(e))) : a(e);
                      })
                    : t.errorFirst
                      ? i.push((e, t) => {
                          e ? o(e) : a(t);
                        })
                      : i.push(a),
                    Reflect.apply(e, this === r ? n : this, i));
                });
              },
            a = new WeakMap();
          function o(e, t) {
            t = {
              exclude: [/.+(?:Sync|Stream)$/],
              errorFirst: !0,
              promiseModule: Promise,
              ...t,
            };
            let r = typeof e;
            if (!(null !== e && ("object" === r || "function" === r)))
              throw TypeError(
                `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === e ? "null" : r}\``,
              );
            let n = (e, r) => {
                let n = a.get(e);
                if ((n || ((n = {}), a.set(e, n)), r in n)) return n[r];
                let i = (e) =>
                    "string" == typeof e || "symbol" == typeof r
                      ? r === e
                      : e.test(r),
                  o = Reflect.getOwnPropertyDescriptor(e, r),
                  s = void 0 === o || o.writable || o.configurable,
                  l = t.include
                    ? t.include.some((e) => i(e))
                    : !t.exclude.some((e) => i(e)),
                  u = l && s;
                return ((n[r] = u), u);
              },
              o = new WeakMap(),
              s = new Proxy(e, {
                apply(e, r, n) {
                  let a = o.get(e);
                  if (a) return Reflect.apply(a, r, n);
                  let l = t.excludeMain ? e : i(e, t, s, e);
                  return (o.set(e, l), Reflect.apply(l, r, n));
                },
                get(e, r) {
                  let a = e[r];
                  if (!n(e, r) || a === Function.prototype[r]) return a;
                  let l = o.get(a);
                  if (l) return l;
                  if ("function" == typeof a) {
                    let r = i(a, t, s, e);
                    return (o.set(a, r), r);
                  }
                  return a;
                },
              });
            return s;
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "1nJhd": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "useNotificationStore", () => a),
            n.export(r, "showNotification", () => o),
            n.export(r, "updateLoadingNotification", () => s),
            n.export(r, "completeLoadingNotification", () => l));
          var i = e("zustand");
          let a = (0, i.create)((e, t) => ({
              notifications: [],
              addNotification: (r) => {
                let n = crypto.randomUUID(),
                  i = { ...r, id: n, duration: r.duration ?? 3e3 };
                (e((e) => ({ notifications: [...e.notifications, i] })),
                  i.duration &&
                    i.duration > 0 &&
                    "loading" !== r.type &&
                    setTimeout(() => {
                      t().removeNotification(n);
                    }, i.duration));
              },
              removeNotification: (t) => {
                e((e) => ({
                  notifications: e.notifications.filter((e) => e.id !== t),
                }));
              },
              clearAll: () => {
                e({ notifications: [] });
              },
              updateLoadingNotification: (t, r) => {
                e((e) => ({
                  notifications: e.notifications.map((e) =>
                    e.id === t ? { ...e, ...r } : e,
                  ),
                }));
              },
              completeLoadingNotification: (r, n, i) => {
                let a = t().notifications.find((e) => e.id === r);
                if (!a) return;
                let o = {
                  ...a,
                  type: n,
                  message: i || a.message,
                  loading: void 0,
                  duration: "error" === n ? 5e3 : 3e3,
                };
                (e((e) => ({
                  notifications: e.notifications.map((e) =>
                    e.id === r ? o : e,
                  ),
                })),
                  setTimeout(() => {
                    t().removeNotification(r);
                  }, o.duration));
              },
            })),
            o = {
              success: (e, t) => {
                a.getState().addNotification({
                  message: e,
                  type: "success",
                  ...t,
                });
              },
              error: (e, t) => {
                a.getState().addNotification({
                  message: e,
                  type: "error",
                  duration: 5e3,
                  ...t,
                });
              },
              info: (e, t) => {
                a.getState().addNotification({
                  message: e,
                  type: "info",
                  ...t,
                });
              },
              warning: (e, t) => {
                a.getState().addNotification({
                  message: e,
                  type: "warning",
                  duration: 4e3,
                  ...t,
                });
              },
              loading: (e, t) => {
                let r = { message: e, type: "loading", duration: 0, ...t };
                a.getState().addNotification(r);
                let n = a.getState().notifications,
                  i = n[n.length - 1];
                return i.id;
              },
              promise: async (
                e,
                { loading: t, success: r, error: n, ...i },
              ) => {
                let s = o.loading(t, i);
                try {
                  let t = await e;
                  return (
                    a.getState().completeLoadingNotification(s, "success", r),
                    t
                  );
                } catch (e) {
                  throw (
                    a.getState().completeLoadingNotification(s, "error", n),
                    e
                  );
                }
              },
            },
            s = (e, t) => {
              a.getState().updateLoadingNotification(e, t);
            },
            l = (e, t, r) => {
              a.getState().completeLoadingNotification(e, t, r);
            };
        },
        {
          zustand: "dTNvd",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      dTNvd: [
        function (e, t, r) {
          var n = e("b0650c36a59d0e7f"),
            i = e("f5020a61d02d78cd");
          (Object.keys(n).forEach(function (e) {
            "default" === e ||
              Object.prototype.hasOwnProperty.call(r, e) ||
              Object.defineProperty(r, e, {
                enumerable: !0,
                get: function () {
                  return n[e];
                },
              });
          }),
            Object.keys(i).forEach(function (e) {
              "default" === e ||
                Object.prototype.hasOwnProperty.call(r, e) ||
                Object.defineProperty(r, e, {
                  enumerable: !0,
                  get: function () {
                    return i[e];
                  },
                });
            }));
        },
        { b0650c36a59d0e7f: "kVdZq", f5020a61d02d78cd: "aJTbx" },
      ],
      kVdZq: [
        function (e, t, r) {
          let n = (e) => {
            let t;
            let r = new Set(),
              n = (e, n) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                  let e = t;
                  ((t = (null != n ? n : "object" != typeof i || null === i)
                    ? i
                    : Object.assign({}, t, i)),
                    r.forEach((r) => r(t, e)));
                }
              },
              i = () => t,
              a = {
                setState: n,
                getState: i,
                getInitialState: () => o,
                subscribe: (e) => (r.add(e), () => r.delete(e)),
              },
              o = (t = e(n, i, a));
            return a;
          };
          r.createStore = (e) => (e ? n(e) : n);
        },
        {},
      ],
      aJTbx: [
        function (e, t, r) {
          var n = e("8bb4df3c776f0abd"),
            i = e("c465bc361276a922");
          let a = (e) => e;
          function o(e, t = a) {
            let r = n.useSyncExternalStore(
              e.subscribe,
              () => t(e.getState()),
              () => t(e.getInitialState()),
            );
            return (n.useDebugValue(r), r);
          }
          let s = (e) => {
            let t = i.createStore(e),
              r = (e) => o(t, e);
            return (Object.assign(r, t), r);
          };
          ((r.create = (e) => (e ? s(e) : s)), (r.useStore = o));
        },
        { "8bb4df3c776f0abd": "329PG", c465bc361276a922: "kVdZq" },
      ],
      "5ZoJX": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i(e) {
            let t = new Date(),
              r = e.replace(/[\u2022\s]/g, "").toLowerCase(),
              n = {
                minutes: /(\d+)\s*min(?:ute)?s?/i,
                heures: /(\d+)\s*h(?:eure)?s?/i,
                jours: /(\d+)\s*j(?:our)?s?/i,
                semaines: /(\d+)\s*s(?:emaine)?s?/i,
                mois: /(\d+)\s*m(?:ois)?/i,
                annees: /(\d+)\s*a(?:n(?:n\u00e9e)?)?s?/i,
                minutesEn: /(\d+)\s*min(?:ute)?s?/i,
                hoursEn: /(\d+)\s*h(?:our)?s?/i,
                daysEn: /(\d+)\s*d(?:ay)?s?/i,
                weeksEn: /(\d+)\s*w(?:eek)?s?/i,
                monthsEn: /(\d+)\s*m(?:onth)?s?/i,
                yearsEn: /(\d+)\s*y(?:ear)?s?/i,
                minuten: /(\d+)\s*min(?:ute)?n?/i,
                stunden: /(\d+)\s*st(?:unde)?n?/i,
                tage: /(\d+)\s*t(?:ag)?e?/i,
                wochen: /(\d+)\s*w(?:oche)?n?/i,
                monate: /(\d+)\s*m(?:onat)?e?/i,
                jahre: /(\d+)\s*j(?:ahr)?e?/i,
              },
              i = (e) => {
                let t = r.match(e);
                return t ? parseInt(t[1], 10) : null;
              },
              a = null,
              o = 1;
            if (
              ((a = i(n.minutes) || i(n.minutesEn) || i(n.minuten)) &&
                (o = 6e4),
              !a &&
                (a = i(n.heures) || i(n.hoursEn) || i(n.stunden)) &&
                (o = 36e5),
              !a && (a = i(n.jours) || i(n.daysEn) || i(n.tage)) && (o = 864e5),
              !a &&
                (a = i(n.semaines) || i(n.weeksEn) || i(n.wochen)) &&
                (o = 6048e5),
              !a &&
                (a = i(n.mois) || i(n.monthsEn) || i(n.monate)) &&
                (o = 2592e6),
              !a &&
                (a = i(n.annees) || i(n.yearsEn) || i(n.jahre)) &&
                (o = 31536e6),
              a && o)
            ) {
              let e = a * o;
              return new Date(t.getTime() - e);
            }
            return t;
          }
          function a(e) {
            return e.sort((e, t) => {
              let r = e.actor?.subDescription?.text,
                n = t.actor?.subDescription?.text;
              if (!r || !n) return 0;
              let a = i(r),
                o = i(n);
              return o.getTime() - a.getTime();
            });
          }
          function o(e, t) {
            let r = t.actor?.subDescription?.text;
            if (!r) return !1;
            let n = i(r),
              a = (Date.now() - n.getTime()) / 36e5;
            if (a < 24) return !1;
            if (e) {
              let t = e.actor?.subDescription?.text;
              if (t) {
                let e = i(t),
                  r = (Date.now() - e.getTime()) / 36e5;
                if (r >= 24) return !1;
              }
            }
            return !0;
          }
          (n.defineInteropFlag(r),
            n.export(r, "parseLinkedInTimeString", () => i),
            n.export(r, "sortPostsByLinkedInTime", () => a),
            n.export(r, "isFirstPostOver24Hours", () => o));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      cHhLd: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "extractLinkedInId", () => l),
            n.export(r, "DataFetchingAdapter", () => u));
          var i = e("~adapters/profiles/http/accounts-adapter"),
            a = e("~features/profiles/use-cases"),
            o = e("~services/linkedinAPI"),
            s = e("~utils/timestamp.utils");
          function l(e) {
            if (!e) return "";
            if (e.includes("urn:li:fsd_profile:"))
              return e.replace(/^.*urn:li:fsd_profile:/, "");
            if (e.includes("%3A")) {
              let t = decodeURIComponent(e);
              return t.includes("urn:li:fsd_profile:")
                ? t.replace(/^.*urn:li:fsd_profile:/, "")
                : t.split(":").pop() || "";
            }
            return e.split(":").pop() || "";
          }
          class u {
            constructor() {
              ((this.accountsAdapter = new i.AccountsAdapter()),
                (this.getCurrentUserAccountUseCase =
                  new a.GetCurrentUserAccountUseCase(this.accountsAdapter)));
            }
            async fetchUserComments(e = 20, t = 0, r) {
              try {
                let n = await this.getCurrentUserAccountUseCase.execute(),
                  i = n.linkedin_id,
                  a = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(count:${e},start:${t},${r ? `paginationToken:${encodeURIComponent(r)},` : ""}profileUrn:urn%3Ali%3Afsd_profile%3A${i})&queryId=voyagerFeedDashProfileUpdates.9192efd79cf9b67ea811ad082bf47617`,
                  s = await (0, o.makeApiRequest)(a, "GET");
                return this.processUserCommentsData(s, i);
              } catch (e) {
                return { comments: [], nextPaginationToken: void 0 };
              }
            }
            async fetchComments(e, t = 2, r = 0, n = 1, i = "RELEVANCE") {
              try {
                let a = encodeURIComponent(e)
                  .replaceAll("(", "%28")
                  .replaceAll(")", "%29");
                t = 100;
                let s = `(count:${t},numReplies:${n},socialDetailUrn:${a},sortOrder:${i},start:${r})`,
                  l = `https://www.linkedin.com/voyager/api/graphql?variables=${s}&queryId=voyagerSocialDashComments.95ed44bc87596acce7c460c70934d0ff`,
                  u = await (0, o.makeApiRequest)(l, "GET");
                if (!u || !u.included) return [];
                return this.processCommentsData(u);
              } catch (e) {
                return [];
              }
            }
            async fetchSubComments(
              e,
              t = 10,
              r = "UFJFVklPVVNfMTc1MjI1NTExMjgxMV9DTEVBTg%3D%3D",
            ) {
              try {
                e = e
                  .replace("(", "%28")
                  .replace(")", "%29")
                  .replaceAll(":", "%3A")
                  .replaceAll(",", "%2C");
                let n = `(commentUrn:${e},count:${t},cursor:${r})`,
                  i = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=${n}&queryId=voyagerSocialDashComments.77324f07efcdaf0bd9677f9ee5cc3214`,
                  a = await (0, o.makeApiRequest)(i, "GET");
                if (!a || !a.included) return [];
                return this.processSubCommentsData(a);
              } catch (e) {
                return [];
              }
            }
            async fetchPostAnalytics(e) {
              try {
                let t = e.startsWith("urn:li:activity:")
                    ? e
                    : `urn:li:activity:${e}`,
                  r = encodeURIComponent(t),
                  n = `(analyticsEntityUrn:(activityUrn:${r}),query:(),surfaceType:POST_SUMMARY)`,
                  i = `https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=${n}&queryId=voyagerPremiumDashAnalyticsView.a0f2fde743416d0e9606bbb7f6a0d066`,
                  a = await (0, o.makeApiRequest)(i, "GET"),
                  s = {};
                return (
                  a?.included?.forEach((e) => {
                    let t = e.$type || "unknown";
                    s[t] = (s[t] || 0) + 1;
                  }),
                  a?.included?.filter((e) => {
                    let t = JSON.stringify(e).toLowerCase();
                    return (
                      t.includes("reaction") ||
                      t.includes("comment") ||
                      t.includes("repost") ||
                      t.includes("share") ||
                      t.includes("save") ||
                      t.includes("like")
                    );
                  }),
                  metrics
                );
              } catch (e) {
                return null;
              }
            }
            processPostAnalyticsData(e) {
              let t = {},
                r = e.included.filter(
                  (e) =>
                    e.$type?.includes("SocialActivity") ||
                    e.$type?.includes("Reaction") ||
                    e.$type?.includes("Engagement") ||
                    void 0 !== e.numLikes ||
                    void 0 !== e.numComments ||
                    void 0 !== e.reactionTypeCounts,
                );
              (r.length,
                e.included.filter(
                  (e) =>
                    "com.linkedin.voyager.dash.edgeinsightsanalytics.Card" ===
                    e.$type,
                ));
              let n = {
                impressions: "impressions",
                "membres touch\xe9s": "membersReached",
                "members reached": "membersReached",
                "unique viewers": "membersReached",
                "vues du profil depuis ce post": "profileViews",
                "profile views from this post": "profileViews",
                "abonn\xe9s acquis gr\xe2ce \xe0 ce post": "followersGained",
                "followers gained from this post": "followersGained",
                "new followers": "followersGained",
                réactions: "reactions",
                reactions: "reactions",
                commentaires: "comments",
                comments: "comments",
                republications: "reposts",
                reposts: "reposts",
                shares: "reposts",
                enregistrements: "saves",
                saves: "saves",
                "interactions avec le bouton personnalis\xe9 premium":
                  "premiumButtonClicks",
                "premium button clicks": "premiumButtonClicks",
              };
              for (let r of e.included) {
                if (
                  "com.linkedin.voyager.dash.edgeinsightsanalytics.Card" !==
                  r.$type
                )
                  continue;
                let e = r.components || [];
                for (let r of e) {
                  let e = r.summary?.detail?.ctaList?.items || [];
                  for (let r of (e.length, e)) {
                    let e = r.primaryTitle?.text?.toLowerCase(),
                      i = r.primaryText?.text;
                    if (e && i) {
                      let r = n[e];
                      if (r) {
                        let e = parseInt(
                          i.replace(/\s/g, "").replace(/,/g, ""),
                          10,
                        );
                        isNaN(e) || (t[r] = e);
                      }
                    }
                  }
                  let i =
                    r.customComponent?.creatorComponent?.metricRowList?.items ||
                    [];
                  for (let e of (i.length, i)) {
                    let r = e.title?.text?.toLowerCase(),
                      i = e.value;
                    if (r && void 0 !== i) {
                      let e = n[r];
                      e && (t[e] = i);
                    }
                  }
                }
              }
              let i = e.included.filter(
                (e) =>
                  "com.linkedin.voyager.dash.feed.SocialActivityCounts" ===
                  e.$type,
              );
              for (let e of i) {
                if (
                  e.reactionTypeCounts &&
                  Array.isArray(e.reactionTypeCounts)
                ) {
                  let r = e.reactionTypeCounts.reduce(
                    (e, t) => e + (t.count || 0),
                    0,
                  );
                  r > 0 && (t.reactions = r);
                } else
                  void 0 !== e.numLikes &&
                    null !== e.numLikes &&
                    (t.reactions = e.numLikes);
                (void 0 !== e.numComments &&
                  null !== e.numComments &&
                  (t.comments = e.numComments),
                  void 0 !== e.numReposts && null !== e.numReposts
                    ? (t.reposts = e.numReposts)
                    : void 0 !== e.numShares &&
                      null !== e.numShares &&
                      (t.reposts = e.numShares),
                  void 0 !== e.numSaves && null !== e.numSaves
                    ? (t.saves = e.numSaves)
                    : void 0 !== e.saved &&
                      "number" == typeof e.saved &&
                      (t.saves = e.saved));
              }
              return t;
            }
            processUserCommentsData(e, t) {
              let r;
              try {
                r =
                  e?.data?.data?.feedDashProfileUpdatesByMemberComments
                    ?.metadata?.paginationToken;
              } catch (e) {}
              if (!e || !e.included)
                return { comments: [], nextPaginationToken: r };
              let n = e.included.filter(
                  (e) => e?.$type === "com.linkedin.voyager.dash.feed.Update",
                ),
                i = e.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.social.Comment",
                ),
                a = e.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                o = n.map((e) => {
                  let r = e.commentary?.text?.text || "",
                    n = "",
                    o = (e.entityUrn || "").match(/urn:li:activity:(\d+)/);
                  if (o) n = `urn:li:activity:${o[1]}`;
                  else {
                    let t = (
                      e.backendUrn ||
                      e.metadata?.backendUrn ||
                      ""
                    ).match(/urn:li:activity:(\d+)/);
                    t && (n = `urn:li:activity:${t[1]}`);
                  }
                  let u = e.actor,
                    c = u?.name?.text || "",
                    d = u?.navigationContext?.actionTarget || "",
                    f = "",
                    h = "";
                  if (u?.backendUrn) {
                    let e = u.backendUrn.match(/urn:li:fsd_profile:(\S+)/);
                    e && (f = e[1]);
                  }
                  if (!f && u?.urn) {
                    let e = u.urn.match(/urn:li:fsd_profile:(\S+)/);
                    e && (f = e[1]);
                  }
                  !f && d && (f = l(d));
                  let p =
                    u?.image?.attributes?.[0]?.detailData
                      ?.nonEntityProfilePicture?.vectorImage;
                  if (p?.rootUrl && p?.artifacts?.length > 0) {
                    let e = p.artifacts[p.artifacts.length - 1];
                    e?.fileIdentifyingUrlPathSegment &&
                      (h = p.rootUrl + e.fileIdentifyingUrlPathSegment);
                  }
                  let m = i
                    .filter((r) => {
                      if (
                        !e["*highlightedComments"]?.includes(r.entityUrn) ||
                        r.parentComment
                      )
                        return !1;
                      let n = r.commenter?.commenterProfileId;
                      return !!n && n === t;
                    })
                    .map((e) => {
                      let t = e.entityUrn.match(/urn:li:fsd_comment:\((\d+),/),
                        i = t ? t[1] : e.entityUrn,
                        o = e.commentary?.text || "",
                        l = e.commenter,
                        u = l?.title?.text || l?.accessibilityText || "",
                        p =
                          l?.image?.attributes?.[0]?.detailData
                            ?.nonEntityProfilePicture?.vectorImage?.rootUrl &&
                          l?.image?.attributes?.[0]?.detailData
                            ?.nonEntityProfilePicture?.vectorImage
                            ?.artifacts?.[0]?.fileIdentifyingUrlPathSegment
                            ? `${l.image.attributes[0].detailData.nonEntityProfilePicture.vectorImage.rootUrl}${l.image.attributes[0].detailData.nonEntityProfilePicture.vectorImage.artifacts[0].fileIdentifyingUrlPathSegment}`
                            : "",
                        m = l?.navigationUrl || "",
                        g = l?.subtitle || "",
                        y = l?.commenterProfileId || "",
                        v = 0,
                        b = 0,
                        w = 0,
                        k = 0,
                        _ = a.find(
                          (e) => e.entityUrn && e.entityUrn.includes(i),
                        );
                      _ &&
                        ((v = _.numImpressions || 0),
                        (b = _.numLikes || 0),
                        (w = _.numShares || 0),
                        (k = _.numComments || 0));
                      let E = e.permalink || "",
                        S = e.entityUrn.match(
                          /urn:li:fsd_comment:\((\d+),(urn:li:activity:\d+)\)/,
                        ),
                        x = S ? S[2] : n,
                        T = (0, s.calculateCommentDelaySeconds)(x, e.createdAt),
                        C = "";
                      if (x)
                        try {
                          C = (0, s.dateFromLinkedinUrn)(x).toISOString();
                        } catch {}
                      return {
                        id: i,
                        author: {
                          name: u,
                          photo: p,
                          profileUrl: m,
                          description: g,
                          type: l?.$type || "",
                          linkedinId: y,
                        },
                        createdAt: e.createdAt?.toString() || "",
                        post_text: r,
                        generated_comment: "",
                        post_url: E,
                        post_urn: x,
                        commentImpressions: v,
                        commentLikes: b,
                        commentShares: w,
                        commentReplies: k,
                        commentText: o,
                        comment_delay_seconds: T,
                        post_published_at: C,
                        post_author_name: c,
                        post_author_linkedin_id: f,
                        post_author_photo: h,
                        post_author_url: d,
                      };
                    });
                  return m;
                });
              return { comments: o.flat(), nextPaginationToken: r };
            }
            processCommentsData(e) {
              let t = e.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.social.Comment",
                ),
                r = e.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                n = t.map((e) => {
                  let n;
                  let i = r.find((t) => {
                    if (!t.entityUrn) return !1;
                    let r = t.entityUrn.match(
                      /urn:li:fsd_socialActivityCounts:(urn:li:comment:\(activity:\d+,\d+\))/,
                    );
                    if (r) {
                      let t = r[1];
                      return t === e.urn || t === e.entityUrn;
                    }
                    return t.entityUrn === e.entityUrn || t.entityUrn === e.urn;
                  });
                  if (e.permalink)
                    try {
                      let r = new URLSearchParams(
                          e.permalink.split("?")[1] || "",
                        ),
                        i = r.get("replyUrn"),
                        a = r.get("dashCommentUrn");
                      if (i && ((n = i), a)) {
                        let e = a.match(
                          /urn:li:fsd_comment:\((\d+),urn:li:activity:(\d+)\)/,
                        );
                        if (e) {
                          let r = e[1],
                            i = t.find(
                              (e) => e.entityUrn && e.entityUrn.includes(r),
                            );
                          i && (n = i.entityUrn);
                        }
                      }
                    } catch (e) {}
                  return {
                    entityUrn: e.entityUrn || "",
                    urn: e.urn || "",
                    commentary: e.commentary
                      ? {
                          numLines: 0,
                          translation: null,
                          navigationContext: null,
                          metadataText: null,
                          text: {
                            textDirection:
                              e.commentary?.textDirection || "FIRST_STRONG",
                            text: e.commentary?.text || "",
                            attributesV2: e.commentary?.attributesV2 || [],
                            accessibilityTextAttributesV2: [],
                            accessibilityText: null,
                            $recipeTypes: [],
                            $type:
                              "com.linkedin.voyager.dash.common.text.TextViewModel",
                          },
                          $recipeTypes: e.commentary?.$recipeTypes || [],
                          $type:
                            e.commentary?.$type ||
                            "com.linkedin.voyager.dash.common.text.TextViewModel",
                        }
                      : void 0,
                    commenter: {
                      image: e.commenter?.image || { attributes: [] },
                      title: e.commenter?.title || { text: "" },
                      subtitle: e.commenter?.subtitle || "",
                      supplementaryActorInfo:
                        e.commenter?.supplementaryActorInfo,
                      navigationUrl: e.commenter?.navigationUrl || "",
                    },
                    createdAt: e.createdAt || Date.now(),
                    permalink: e.permalink || "",
                    contributed: e.contributed || !1,
                    pinned: e.pinned || !1,
                    edited: e.edited || !1,
                    parentComment: n || void 0,
                    replyToComment: void 0,
                    numLikes: i?.reactionTypeCounts?.length || 0,
                    liked: i?.reacted || !1,
                    numComments: i?.numComments || 0,
                    socialActivityCounts: i
                      ? {
                          numLikes: i?.reactionTypeCounts?.length || 0,
                          numComments: i?.numComments || 0,
                          liked: i?.reacted || !1,
                        }
                      : void 0,
                    canReply: !0,
                  };
                });
              return n;
            }
            processSubCommentsData(e) {
              let t = e.included.filter(
                  (e) =>
                    e?.$type === "com.linkedin.voyager.dash.social.Comment",
                ),
                r = e.included.filter(
                  (e) =>
                    e?.$type ===
                    "com.linkedin.voyager.dash.feed.SocialActivityCounts",
                ),
                n = t.map((e) => {
                  let t = r.find((t) => {
                      if (!t.entityUrn) return !1;
                      let r = t.entityUrn.match(
                        /urn:li:fsd_socialActivityCounts:(urn:li:comment:\(activity:\d+,\d+\))/,
                      );
                      if (r) {
                        let t = r[1];
                        return t === e.urn || t === e.entityUrn;
                      }
                      return (
                        t.entityUrn === e.entityUrn || t.entityUrn === e.urn
                      );
                    }),
                    n = t?.numComments || e.numComments || 0,
                    i = t?.reactionTypeCounts?.length || 0,
                    a = t?.reacted || !1;
                  return {
                    entityUrn: e.entityUrn || "",
                    urn: e.urn || e.entityUrn || "",
                    commentary: e.commentary
                      ? {
                          numLines: 0,
                          translation: null,
                          navigationContext: null,
                          metadataText: null,
                          text: {
                            textDirection:
                              e.commentary?.textDirection || "FIRST_STRONG",
                            text: e.commentary?.text || "",
                            attributesV2: e.commentary?.attributesV2 || [],
                            accessibilityTextAttributesV2: [],
                            accessibilityText: null,
                            $recipeTypes: [],
                            $type:
                              "com.linkedin.voyager.dash.common.text.TextViewModel",
                          },
                          $recipeTypes: e.commentary?.$recipeTypes || [],
                          $type:
                            e.commentary?.$type ||
                            "com.linkedin.voyager.dash.common.text.TextViewModel",
                        }
                      : void 0,
                    commenter: {
                      image: e.commenter?.image || { attributes: [] },
                      title: e.commenter?.title || { text: "" },
                      subtitle: e.commenter?.subtitle || "",
                      supplementaryActorInfo:
                        e.commenter?.supplementaryActorInfo,
                      navigationUrl: e.commenter?.navigationUrl || "",
                    },
                    createdAt: e.createdAt || Date.now(),
                    permalink: e.permalink || "",
                    contributed: e.contributed || !1,
                    pinned: e.pinned || !1,
                    edited: e.edited || !1,
                    numLikes: i,
                    numComments: n,
                    liked: a,
                    replies: [],
                    replyCount: 0,
                  };
                });
              return n.sort((e, t) => e.createdAt - t.createdAt);
            }
          }
        },
        {
          "~adapters/profiles/http/accounts-adapter": "iuV3A",
          "~features/profiles/use-cases": "3r0Kg",
          "~services/linkedinAPI": "9jP7F",
          "~utils/timestamp.utils": "BuTjE",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      iuV3A: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "AccountsAdapter", () => a));
          var i = e("~services/api");
          class a {
            constructor() {
              this.baseUrl = "https://api.linkhub.gg";
            }
            async getCurrentUserAccount() {
              let e = await (0, i.api)(`${this.baseUrl}/accounts`, "GET", null);
              if (!e.ok) throw Error(`API error: ${e.status} ${e.statusText}`);
              let t = await e.json();
              return t;
            }
          }
        },
        {
          "~services/api": "jYsv6",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      "3r0Kg": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(
              r,
              "GetCurrentUserAccountUseCase",
              () => i.GetCurrentUserAccountUseCase,
            ));
          var i = e("./get-current-user-account");
        },
        {
          "./get-current-user-account": "jX2c3",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      jX2c3: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "GetCurrentUserAccountUseCase", () => i));
          class i {
            constructor(e) {
              this.accountsRepo = e;
            }
            async execute() {
              try {
                let e = await this.accountsRepo.getCurrentUserAccount();
                if (!e.linkedin_id)
                  throw Error("LinkedIn ID not found in user account");
                return e;
              } catch (e) {
                throw e;
              }
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      BuTjE: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i(e) {
            if (!e) return null;
            try {
              let t = parseInt(e);
              if (isNaN(t)) return null;
              let r = new Date(t),
                n = r.toISOString();
              return n;
            } catch (e) {
              return null;
            }
          }
          function a(e) {
            try {
              if (isNaN(e)) return null;
              return new Date(e);
            } catch (e) {
              return null;
            }
          }
          function o(e) {
            let t = Date.now();
            return e > 0 && e <= t + 31536e7;
          }
          function s(e) {
            e = e.replace(/\)$/, "");
            let t = e.match(/\d+$/);
            if (!t)
              throw Error(
                "URN invalide : identifiant num\xe9rique introuvable",
              );
            let r = BigInt(t[0]),
              n = Number(r >> BigInt(22)),
              i = new Date(n);
            return i;
          }
          function l(e, t) {
            if (!e || !t) return null;
            try {
              let r = s(e),
                n = "string" == typeof t ? parseInt(t) : t;
              if (isNaN(n)) return null;
              let i = new Date(n),
                a = Math.floor((i.getTime() - r.getTime()) / 1e3);
              return a >= 0 ? a : null;
            } catch (e) {
              return null;
            }
          }
          (n.defineInteropFlag(r),
            n.export(r, "convertLinkedInTimestampToISO", () => i),
            n.export(r, "convertMillisecondsToDate", () => a),
            n.export(r, "isValidTimestamp", () => o),
            n.export(r, "dateFromLinkedinUrn", () => s),
            n.export(r, "calculateCommentDelaySeconds", () => l));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      hzGtK: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          async function i(e, t) {
            return await e.fetchProfilePicture(t);
          }
          (n.defineInteropFlag(r),
            n.export(r, "fetchProfilePictureUC", () => i));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      cSRBh: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "ProfileHttpAdapter", () => a),
            n.export(r, "makeProfileHttpAdapter", () => o));
          var i = e("../../../services/api");
          class a {
            constructor(e) {
              this.apiUrl = e;
            }
            async bulkCheck(e) {
              let t = await (0, i.api)(
                  `${this.apiUrl}/profile/bulk-check`,
                  "POST",
                  { profileIds: e },
                ),
                r = await t.json();
              if (!t.ok) throw Error(r?.message ?? "bulk check failed");
              return {
                existing: r.existing ?? [],
                missing: r.missing ?? [],
                needsUpdate: r.needsUpdate ?? [],
              };
            }
            async analyzeProfile(e) {
              let t = await (0, i.api)(`${this.apiUrl}/profile`, "POST", e);
              if (!t.ok) throw Error("profile analyze failed");
              return await t.json();
            }
            async getProfileByLinkedinId(e) {
              let t = await (0, i.api)(
                `${this.apiUrl}/profile/${e}`,
                "GET",
                null,
              );
              if (!t.ok) throw Error(`API error: ${t.status} ${t.statusText}`);
              let r = await t.json();
              return r.data;
            }
          }
          let o = () => new a("https://api.linkhub.gg");
        },
        {
          "../../../services/api": "jYsv6",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      iLnaP: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          async function i(e, t) {
            return await e.fetchUserPosts(t);
          }
          (n.defineInteropFlag(r), n.export(r, "fetchUserPostsUC", () => i));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      "3ojAK": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          async function i(e, t) {
            if (!(t.length > 0))
              return {
                linkedinId: e,
                name: "",
                headline: "",
                posts: [],
                validPostsTime: [],
                numLikes: [],
                photo: "",
              };
            {
              let r = t
                  .map((e) => e.commentary?.text?.text || "")
                  .filter((e) => e.trim().length > 0)
                  .slice(0, 7),
                n = t
                  .map((e) => e.actor?.subDescription?.text || "")
                  .filter((e) => e.trim().length > 0);
              for (; r.length < 7; ) r.push("");
              let i = "";
              try {
                let e = t[0].actor?.image?.attributes?.[0]?.detailData;
                if (e?.nonEntityProfilePicture?.vectorImage) {
                  let t = e.nonEntityProfilePicture.vectorImage,
                    r = t.artifacts?.[0];
                  r && (i = t.rootUrl + r.fileIdentifyingUrlPathSegment);
                }
              } catch (e) {}
              let a = t[0].actor?.name?.text || "",
                o = t[0].actor?.description?.text || "",
                s = t.map((e) => e.numLikes);
              return {
                linkedinId: e,
                name: a,
                headline: o,
                posts: r,
                validPostsTime: n,
                numLikes: s,
                photo: i,
              };
            }
          }
          (n.defineInteropFlag(r),
            n.export(r, "getProfileInformationsUC", () => i));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      bG4eS: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          async function i(e, t) {
            return await e.analyzeProfile(t);
          }
          (n.defineInteropFlag(r), n.export(r, "analyzeProfileUC", () => i));
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      hrpxD: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "useLinkedInProfile", () => l));
          var i = e("react"),
            a = e("~adapters/profiles/http/profile-http-adapter"),
            o = e("~utils/profile");
          let s = async (e, t = 10, r = 500) => {
              for (let n = 0; n < t; n++) {
                let t = document.querySelector(e);
                if (t) return t;
                await new Promise((e) => setTimeout(e, r));
              }
              throw Error("Element not found: " + e);
            },
            l = () => {
              let [e, t] = (0, i.useState)(null),
                [r, n] = (0, i.useState)(null),
                [l, u] = (0, i.useState)(!1),
                [c, d] = (0, i.useState)(!1),
                f = (0, a.makeProfileHttpAdapter)(),
                h = (0, i.useCallback)(async () => {
                  if (!window.location.href.includes("linkedin.com/in/")) {
                    t(null);
                    return;
                  }
                  (d(!0), t(null));
                  try {
                    await Promise.all([
                      s("h1"),
                      s(".pv-top-card-profile-picture__container > img"),
                    ]);
                    let e = (0, o.getProfileName)(),
                      r = await (0, o.getProfileId)();
                    t({
                      id: r,
                      name: e,
                      photo:
                        document.querySelector(
                          ".pv-top-card-profile-picture__container > img",
                        )?.src || "",
                      url: window.location.href,
                    });
                  } catch (e) {
                    t(null);
                  } finally {
                    d(!1);
                  }
                }, []);
              return (
                (0, i.useEffect)(() => {
                  t(null);
                }, [window.location.href]),
                (0, i.useEffect)(() => {
                  h();
                }, [h, window.location.href]),
                (0, i.useEffect)(() => {
                  e &&
                    e &&
                    f
                      .getProfileByLinkedinId(e.id)
                      .then((e) => {
                        n(e);
                      })
                      .finally(() => {
                        u(!0);
                      });
                }, [e]),
                {
                  currentProfile: e,
                  isLoading: c,
                  loadProfileData: h,
                  currentProfileFromApi: r,
                  currentProfileFromApiLoaded: l,
                }
              );
            };
        },
        {
          react: "329PG",
          "~adapters/profiles/http/profile-http-adapter": "cSRBh",
          "~utils/profile": "hKAis",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
      hKAis: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r),
            n.export(r, "getProfileId", () => u),
            n.export(r, "getProfileName", () => c),
            n.export(r, "getProfileNameFromApi", () => d),
            n.export(r, "getProfilePhotoFromApi", () => f));
          var i = e("~adapters/linkedin/http/data-fetching-adapter"),
            a = e("~services/linkedinAPI");
          let o = () => {
              let e = window.location.pathname.match(/\/in\/([^\/\?]+)/);
              return e ? e[1] : null;
            },
            s = null,
            l = async (e) => {
              try {
                let t = `https://www.linkedin.com/voyager/api/identity/dash/profiles?q=memberIdentity&memberIdentity=${encodeURIComponent(e)}`;
                console.log(
                  "[LinkHub] API fallback: fetching profile for slug",
                  e,
                );
                let r = await (0, a.makeApiRequest)(t, "GET");
                if (!r)
                  return (
                    console.warn("[LinkHub] API fallback: empty response"),
                    null
                  );
                console.log(
                  "[LinkHub] API fallback: response keys",
                  Object.keys(r),
                );
                let n = null,
                  o = "",
                  l = "",
                  u = [...(r.included || []), ...(r.elements || [])];
                for (let e of (r.data && u.push(r.data),
                console.log(
                  "[LinkHub] API fallback: searching",
                  u.length,
                  "elements",
                ),
                u)) {
                  if (!e || "object" != typeof e) continue;
                  let t = e.entityUrn || e["*elements"]?.[0] || "";
                  if (
                    ("string" == typeof t &&
                      t.includes("fsd_profile:") &&
                      !n &&
                      ((n = (0, i.extractLinkedInId)(t)),
                      console.log(
                        "[LinkHub] API fallback: found profileId",
                        n,
                        "from",
                        t,
                      )),
                    !o &&
                      (e.firstName && e.lastName
                        ? (o = `${e.firstName} ${e.lastName}`)
                        : e.fullName && (o = e.fullName)),
                    !l)
                  ) {
                    let t =
                      e.profilePicture?.displayImageReference?.vectorImage ||
                      e.profilePicture?.displayImageReferenceResolutionResult
                        ?.vectorImage ||
                      e.picture;
                    if (t?.rootUrl && t?.artifacts?.length) {
                      let e = t.artifacts.reduce(
                        (e, t) =>
                          (t?.width || 0) * (t?.height || 0) >
                          (e?.width || 0) * (e?.height || 0)
                            ? t
                            : e,
                        null,
                      );
                      e?.fileIdentifyingUrlPathSegment &&
                        (l = t.rootUrl + e.fileIdentifyingUrlPathSegment);
                    }
                    let r = e.nonEntityProfilePicture?.vectorImage;
                    if (!l && r?.rootUrl && r?.artifacts?.length) {
                      let e = r.artifacts.reduce(
                        (e, t) =>
                          (t?.width || 0) * (t?.height || 0) >
                          (e?.width || 0) * (e?.height || 0)
                            ? t
                            : e,
                        null,
                      );
                      e?.fileIdentifyingUrlPathSegment &&
                        (l = r.rootUrl + e.fileIdentifyingUrlPathSegment);
                    }
                  }
                }
                return (
                  n
                    ? ((s = { profileId: n, name: o, photo: l }),
                      console.log("[LinkHub] API fallback: success", {
                        profileId: n,
                        name: o,
                        hasPhoto: !!l,
                      }))
                    : console.warn(
                        "[LinkHub] API fallback: no profileId found. First element sample:",
                        JSON.stringify(u[0])?.slice(0, 500),
                      ),
                  n
                );
              } catch (e) {
                return (
                  console.error("[LinkHub] API fallback error:", e),
                  null
                );
              }
            },
            u = () => (
              (s = null),
              new Promise((e) => {
                let t = window.location.href;
                if (!t.includes("linkedin.com/in/")) {
                  e(null);
                  return;
                }
                let r = Date.now(),
                  n = setInterval(async () => {
                    try {
                      let t = document.querySelectorAll("a"),
                        i =
                          /profileUrn=urn%3Ali%3Afsd_profile%3A([A-Za-z0-9_-]+)/,
                        a = /profileId=([A-Za-z0-9_-]+)/,
                        s = new Map();
                      t.forEach((e) => {
                        let t = e.href,
                          r = t.match(i) || t.match(a);
                        if (r) {
                          let e = r[1];
                          s.set(e, (s.get(e) || 0) + 1);
                        }
                      });
                      let u = 0,
                        c = null;
                      if (
                        (s.forEach((e, t) => {
                          e > u && ((u = e), (c = t));
                        }),
                        c)
                      ) {
                        (clearInterval(n), e(c));
                        return;
                      }
                      if (Date.now() - r >= 3e3) {
                        (clearInterval(n),
                          console.log(
                            "[LinkHub] DOM scan timeout (3s), falling back to Voyager API",
                          ));
                        let t = o();
                        if (t) {
                          let r = await l(t);
                          e(r || null);
                        } else e(null);
                      }
                    } catch (t) {
                      (clearInterval(n), e(null));
                    }
                  }, 200);
              })
            ),
            c = () => document.querySelector("h1")?.innerText || "",
            d = () => s?.name || "",
            f = () => s?.photo || "";
        },
        {
          "~adapters/linkedin/http/data-fetching-adapter": "cHhLd",
          "~services/linkedinAPI": "9jP7F",
          "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl",
        },
      ],
    },
    ["gtCXH", "gJMko"],
    "gJMko",
    "parcelRequirea422",
  ),
  (globalThis.define = t));
