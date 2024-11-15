/*! Cortona3D Solo Universal Viewer bundle - s1000d4_1_text, Copyright (c) 2015-2023 Paragraphics Ltd. (http://www.cortona3d.com/) */
define(function () {
  return (function (e) {
    var n = {};
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
      }),
      (t.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (t.t = function (e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & n && "string" != typeof e)
        )
          for (var o in e)
            t.d(
              r,
              o,
              function (n) {
                return e[n];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (t.p = ""),
      t((t.s = 301))
    );
  })([
    function (e, n, t) {
      "use strict";
      var r,
        o = function () {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        a = (function () {
          var e = {};
          return function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          };
        })(),
        i = [];
      function c(e) {
        for (var n = -1, t = 0; t < i.length; t++)
          if (i[t].identifier === e) {
            n = t;
            break;
          }
        return n;
      }
      function l(e, n) {
        for (var t = {}, r = [], o = 0; o < e.length; o++) {
          var a = e[o],
            l = n.base ? a[0] + n.base : a[0],
            g = t[l] || 0,
            d = "".concat(l, " ").concat(g);
          t[l] = g + 1;
          var A = c(d),
            I = { css: a[1], media: a[2], sourceMap: a[3] };
          -1 !== A
            ? (i[A].references++, i[A].updater(I))
            : i.push({ identifier: d, updater: p(I, n), references: 1 }),
            r.push(d);
        }
        return r;
      }
      function g(e) {
        var n = document.createElement("style"),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var o = t.nc;
          o && (r.nonce = o);
        }
        if (
          (Object.keys(r).forEach(function (e) {
            n.setAttribute(e, r[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(n);
        else {
          var i = a(e.insert || "head");
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        }
        return n;
      }
      var d,
        A =
          ((d = []),
          function (e, n) {
            return (d[e] = n), d.filter(Boolean).join("\n");
          });
      function I(e, n, t, r) {
        var o = t
          ? ""
          : r.media
          ? "@media ".concat(r.media, " {").concat(r.css, "}")
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = A(n, o);
        else {
          var a = document.createTextNode(o),
            i = e.childNodes;
          i[n] && e.removeChild(i[n]),
            i.length ? e.insertBefore(a, i[n]) : e.appendChild(a);
        }
      }
      function s(e, n, t) {
        var r = t.css,
          o = t.media,
          a = t.sourceMap;
        if (
          (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
          a &&
            "undefined" != typeof btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var C = null,
        u = 0;
      function p(e, n) {
        var t, r, o;
        if (n.singleton) {
          var a = u++;
          (t = C || (C = g(n))),
            (r = I.bind(null, t, a, !1)),
            (o = I.bind(null, t, a, !0));
        } else
          (t = g(n)),
            (r = s.bind(null, t, n)),
            (o = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            });
        return (
          r(e),
          function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap
              )
                return;
              r((e = n));
            } else o();
          }
        );
      }
      e.exports = function (e, n) {
        (n = n || {}).singleton ||
          "boolean" == typeof n.singleton ||
          (n.singleton = o());
        var t = l((e = e || []), n);
        return function (e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < t.length; r++) {
              var o = c(t[r]);
              i[o].references--;
            }
            for (var a = l(e, n), g = 0; g < t.length; g++) {
              var d = c(t[g]);
              0 === i[d].references && (i[d].updater(), i.splice(d, 1));
            }
            t = a;
          }
        };
      };
    },
    function (e, n, t) {
      "use strict";
      e.exports = function (e) {
        var n = [];
        return (
          (n.toString = function () {
            return this.map(function (n) {
              var t = (function (e, n) {
                var t = e[1] || "",
                  r = e[3];
                if (!r) return t;
                if (n && "function" == typeof btoa) {
                  var o =
                      ((i = r),
                      (c = btoa(
                        unescape(encodeURIComponent(JSON.stringify(i)))
                      )),
                      (l =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          c
                        )),
                      "/*# ".concat(l, " */")),
                    a = r.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(e, " */");
                    });
                  return [t].concat(a).concat([o]).join("\n");
                }
                var i, c, l;
                return [t].join("\n");
              })(n, e);
              return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
            }).join("");
          }),
          (n.i = function (e, t, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var o = {};
            if (r)
              for (var a = 0; a < this.length; a++) {
                var i = this[a][0];
                null != i && (o[i] = !0);
              }
            for (var c = 0; c < e.length; c++) {
              var l = [].concat(e[c]);
              (r && o[l[0]]) ||
                (t &&
                  (l[2]
                    ? (l[2] = "".concat(t, " and ").concat(l[2]))
                    : (l[2] = t)),
                n.push(l));
            }
          }),
          n
        );
      };
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(14),
            (r.exports = function (e, n, t) {
              var r,
                o = "string" != typeof n.type ? "checkbox" : n.type,
                a = void 0 === n.tabindex ? -1 : n.tabindex,
                i = n.value;
              if (!n.name) throw new Error("Missing options.name property");
              function c(e) {
                e ? r.classList.add("checked") : r.classList.remove("checked");
              }
              if (t.uniview.settings) {
                var l = t.uniview.settings[n.name];
                Object.defineProperty(t.uniview.settings, n.name, {
                  get: function () {
                    return i;
                  },
                  set: function (e) {
                    t.dispatch("uniview.settings.set" + n.name, e);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                  void 0 !== l && (i = l);
              }
              switch (o) {
                case "radio":
                  (r = e.create(
                    "form#" + (n.id || "options-" + n.name.toLowerCase()),
                    n.choice.map(function (o, c) {
                      return e.label(
                        "",
                        e.create(
                          "span.label-control.label-control-radio",
                          e.input({
                            type: "radio",
                            name: n.name,
                            value: void 0 !== o.value ? o.value : c,
                            checked: o.selected,
                            tabIndex: a,
                            onclick: function () {
                              (i = r.elements[n.name].value),
                                t.dispatch(
                                  "uniview.settings.changed" + n.name,
                                  i
                                );
                            },
                          })
                        ),
                        e.create(
                          "span.label-text.label-text-radio",
                          o.description
                        )
                      );
                    })
                  )),
                    (i = r.elements[n.name].value);
                  break;
                case "select":
                  (r = e.select(
                    {
                      value: i,
                      tabIndex: a,
                      onchange: function () {
                        (i = this.value),
                          t.dispatch("uniview.settings.changed" + n.name, i);
                      },
                    },
                    n.choice
                  )),
                    (i = r.value);
                  break;
                case "button":
                  (i = !!i),
                    (r = e.button(
                      {
                        id: n.id || "btn-" + n.name.toLowerCase(),
                        title: n.title,
                        tabIndex: a,
                        onclick: function () {
                          c((i = !i)),
                            t.dispatch("uniview.settings.changed" + n.name, i);
                        },
                      },
                      n.label
                    )),
                    c(i);
                  break;
                case "buttonImg":
                  (i = !!i),
                    (r = e.buttonImg({
                      id: n.id || "btn-" + n.name.toLowerCase(),
                      title: n.label || n.title,
                      tabIndex: a,
                      onclick: function () {
                        c((i = !i)),
                          t.dispatch("uniview.settings.changed" + n.name, i);
                      },
                    })),
                    c(i);
                  break;
                default:
                  (i = !!i),
                    (r = e.input({
                      type: "checkbox",
                      checked: i,
                      tabIndex: a,
                      onclick: function () {
                        (i = this.checked),
                          t.dispatch("uniview.settings.changed" + n.name, i);
                      },
                    }));
              }
              var g = r;
              if (!/^(button|radio)/.test(o)) {
                var d = o.toLowerCase(),
                  A = "#" + (n.id || "options-" + n.name.toLowerCase()),
                  I = e.create(
                    "span.label-text.label-text-" + d,
                    n.label || n.title
                  ),
                  s = e.create("span.label-control.label-control-" + d, r);
                g = "checkbox" === o ? e.label(A, s, I) : e.label(A, I, s);
              }
              return (
                "function" == typeof n.onchange &&
                  t.on("uniview.settings.changed" + n.name, n.onchange),
                t.on("uniview.settings.set" + n.name, function (e) {
                  var a, l;
                  switch (o) {
                    case "checkbox":
                      (a = r.checked), (r.checked = !!e), (l = r.checked);
                      break;
                    case "button":
                    case "buttonImg":
                      (a = i), (i = e), c(e), (l = i);
                      break;
                    case "select":
                      (a = r.value),
                        void 0 === e ? (r.selectedIndex = 0) : (r.value = e),
                        (l = r.value);
                      break;
                    case "radio":
                      (a = r.elements[n.name].value),
                        void 0 === e
                          ? (r.elements[n.name][0] = e)
                          : (r.elements[n.name].value = e),
                        (l = r.elements[n.name].value);
                      break;
                    default:
                      (a = r.value), (r.value = e), (l = r.value);
                  }
                  (i = e),
                    a != l &&
                      t.dispatch("uniview.settings.changed" + n.name, e);
                }),
                t.on("uniview.settings.disable" + n.name, function (e) {
                  (r.disabled = e),
                    g
                      .querySelectorAll("input, button, select")
                      .forEach(function (n) {
                        n.disabled = e;
                      }),
                    e
                      ? g.classList.add("disabled")
                      : g.classList.remove("disabled");
                }),
                n.disabled &&
                  t.dispatch("uniview.settings.disable" + n.name, !0),
                n.hidden && e.hide(g, !0),
                n.disabled ||
                  setTimeout(function () {
                    t.dispatch("uniview.settings.changed" + n.name, i);
                  }, 0),
                g
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return (
          n || (n = {}),
          "string" != typeof (e = e && e.__esModule ? e.default : e)
            ? e
            : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              n.hash && (e += n.hash),
              /["'() \t\n]/.test(e) || n.needQuotes
                ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : e)
        );
      };
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(24),
            (r.exports = function (e, n, r) {
              var o = t(2),
                a = r.uniview.i18n.ui || {},
                i = n.panelName || "Main",
                c = "Expand" + i,
                l = e.create(o, {
                  type: "buttonImg",
                  name: c,
                  id: n.id || "btn-expand",
                  label: n.title || a.expand,
                  disabled: void 0 === n.disabled || n.disabled,
                  onchange: function (e) {
                    r.dispatch("uniview.toggle" + i + "PanelOnlyMode", e);
                  },
                });
              return (
                l.classList.add("btn-expand"),
                r.on("uniview.showAllPanels", function () {
                  r.dispatch("uniview.settings.disable" + c, !1);
                }),
                r.on("uniview.toggleMainPanelOnlyMode", function (e) {
                  ("Main" === i && e) ||
                    r.dispatch("uniview.settings.disable" + c, !1);
                }),
                r.on("uniview.toggleAuxPanelOnlyMode", function (e) {
                  ("Aux" === i && e) ||
                    r.dispatch("uniview.settings.disable" + c, !1);
                }),
                this.exports(l)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(12),
            (r.exports = function (e, n, t) {
              var r = this,
                o = n.i18n || { close: "OK" },
                a = n.hideDismissButton
                  ? ""
                  : e.button({ classList: "role-close", onclick: g }, o.close),
                i =
                  n.hideDismissButton && !n.footerContent
                    ? ""
                    : e.container(".skin-modal-footer", n.footerContent, a),
                c = e.container(
                  ".skin-modal.cortona3dsolo-popover",
                  e.create(
                    ".skin-modal-panel",
                    e.container(".skin-modal-title", n.title || ""),
                    e.container(".skin-modal-content", n.content || ""),
                    i
                  )
                );
              if (!n.disableAutoDismiss && n.hideDismissButton) {
                var l = function (e) {
                  c.removeEventListener("mousedown", l), g();
                };
                c.addEventListener("mousedown", l);
              }
              function g() {
                c &&
                  (r.remove(),
                  r.emit("closed"),
                  t.dispatch("uniview.component.modal.closed", r),
                  (c = null));
              }
              e.once("modal.close", function () {
                g(), r.removeListener("close", g);
              }),
                this.once("close", function () {
                  g(), e.removeListener("modal.close", g);
                });
              var d = (i && i.querySelector(".role-close")) || a;
              return (
                d &&
                  (c.setAttribute("tabindex", "-1"),
                  c.addEventListener("focus", function () {
                    d.focus();
                  })),
                c.addEventListener("keydown", function (e) {
                  switch (e.keyCode) {
                    case 27:
                      r.emit("close"), e.preventDefault();
                  }
                  e.stopPropagation();
                }),
                this.exports(c)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(29),
            (r.exports = function (e, n, t) {
              var r = !1,
                o = t.expand({}, n),
                a = this;
              function i(n, t) {
                var r = n.style,
                  o = n.parentNode;
                if (
                  (t || (t = {}),
                  void 0 !== t.content &&
                    (e.clear(n),
                    n.append.apply(n, e.create("div", t.content).childNodes)),
                  void 0 !== t.x && void 0 !== t.y)
                ) {
                  if (
                    ((r.position = "absolute"),
                    (r.visibility = "hidden"),
                    t.target)
                  ) {
                    var a = t.target.getBoundingClientRect(),
                      i = o.getBoundingClientRect();
                    (t.x += a.left - i.left), (t.y += a.top - i.top);
                  }
                  var c = o.clientWidth,
                    l = o.clientHeight,
                    g = n.offsetWidth,
                    d = n.offsetHeight;
                  t.x + g <= c
                    ? (r.left = t.x + "px")
                    : (r.left = c >= g ? c - g + "px" : 0),
                    t.y + d <= l
                      ? (r.top = t.y + "px")
                      : t.y >= d
                      ? (r.top = t.y - d + "px")
                      : (r.top = 0),
                    (r.visibility = "");
                }
              }
              var c = e.container(".skin-popup.cortona3dsolo-popover");
              return (
                n.closable &&
                  (c.addEventListener("keydown", function (e) {
                    switch (e.keyCode) {
                      case 27:
                        a.emit("close"),
                          e.preventDefault(),
                          e.stopPropagation();
                        break;
                      case 9:
                        e.preventDefault();
                    }
                  }),
                  c.setAttribute("tabindex", "-1")),
                e.toggle(c, !1),
                this.on("close", function () {
                  a.emit("toggle", !1);
                }),
                this.on("open", function (e) {
                  a.emit("toggle", !0), e && i(c, e);
                }),
                this.on("toggle", function (l) {
                  (r = void 0 === l ? !r : !!l),
                    e.toggle(c, r),
                    r
                      ? (o && i(c, o), (o = null), n.closable && c.focus())
                      : (a.emit("closed"),
                        t.dispatch("uniview.component.popup.closed", a));
                }),
                this.exports(c)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(35),
            (r.exports = function (e, n, t) {
              var r,
                o = e.create(".skin-iframe"),
                a = "";
              function i(e, n) {
                var t;
                try {
                  t = e[n];
                } catch (e) {}
                return t;
              }
              function c() {
                r &&
                  ((r.onload = null),
                  (r.onerror = null),
                  o.removeChild(r),
                  (r = null));
              }
              return (
                Object.defineProperties(this, {
                  load: {
                    value: function (n, l) {
                      return (
                        (l = l || {}),
                        n !== a || l.reloadFrame
                          ? (t.dispatch("uniview.showAllPanels"),
                            c(),
                            (r = o.appendChild(
                              e.create("iframe.cortona3dsolo-iframe")
                            )),
                            new Promise(function (e, t) {
                              (r.src = n),
                                (r.onload = function () {
                                  a = n;
                                  var t = i(r.contentWindow, "Cortona3DSolo");
                                  t
                                    ? t.once("uniview.ready", function () {
                                        e();
                                      })
                                    : e();
                                }),
                                (r.onerror = function () {
                                  t();
                                });
                            }))
                          : Promise.resolve()
                      );
                    },
                    enumerable: !0,
                  },
                  loadContent: {
                    value: function (n) {
                      return (
                        t.dispatch("uniview.showAllPanels"),
                        c(),
                        (r = o.appendChild(
                          e.create("iframe.cortona3dsolo-iframe")
                        )),
                        new Promise(function (e, t) {
                          (r.srcdoc = n),
                            (r.onload = function () {
                              var t = this.contentDocument;
                              if (t.body.children.length) {
                                var r = i(this.contentWindow, "Cortona3DSolo");
                                r ? r.once("uniview.ready", e) : e();
                              } else
                                t.open("text/html", "replace"),
                                  t.write(n),
                                  t.close();
                            }),
                            (r.onerror = function () {
                              t();
                            });
                        })
                      );
                    },
                    enumerable: !0,
                  },
                  loadSoloResource: {
                    value: function (n, l) {
                      if (
                        (t.dispatch("uniview.showAllPanels"),
                        (l = l || {}),
                        a === n && !l.reloadFrame)
                      )
                        return Promise.resolve();
                      c(),
                        (r = o.appendChild(
                          e.create("iframe.cortona3dsolo-iframe")
                        ));
                      var g =
                        '<!DOCTYPE html><html><head><style>html,body{margin:0;overflow:hidden;}main.solo-uniview-content{padding:0;}</style><script src="' +
                        t.baseUrl +
                        'Cortona3DSolo.js"></script></head></html>';
                      return new Promise(function (e, o) {
                        function c() {
                          var r = i(this.defaultView, "Cortona3DSolo");
                          r
                            ? (t.expand(r, {
                                baseUrl: t.baseUrl,
                                uniview: {
                                  options: t.expand(
                                    { dismissSystemMessage007: !0 },
                                    l
                                  ),
                                },
                              }),
                              t
                                .use("skin")
                                .then(function (o) {
                                  return (
                                    r.use("skin", {
                                      baseUrl: o.config.baseUrl,
                                    }),
                                    r.once("uniview.ready", e),
                                    r.skin
                                      .create("app")
                                      .use(
                                        "solo-uniview",
                                        t.expand(
                                          { totalMemory: 64, features: 0 },
                                          l,
                                          { src: n }
                                        )
                                      )
                                  );
                                })
                                .catch(o))
                            : e();
                        }
                        (a = n),
                          (r.src = "about:blank"),
                          (r.onload = function () {
                            r.onload = null;
                            var e = this.contentDocument;
                            if (e)
                              e.open("text/html", "replace"),
                                e.write(g),
                                e.close(),
                                "complete" === e.readyState
                                  ? c.call(e)
                                  : e.addEventListener("DOMContentLoaded", c);
                            else {
                              var n;
                              try {
                                this.contentWindow.document;
                              } catch (e) {
                                n = e.message;
                              }
                              o(n);
                            }
                          }),
                          (r.onerror = function (e) {
                            o(e.message);
                          });
                      });
                    },
                    enumerable: !0,
                  },
                  loadVideo: {
                    value: function (n, t) {
                      return (
                        a === n ||
                          ((t = t || {}),
                          c(),
                          (r = o.appendChild(
                            e.create("video.cortona3dsolo-iframe", {
                              src: n,
                              controls: t.controls,
                              muted: t.muted,
                              loop: t.loop,
                              autoplay: t.autoplay,
                              preload: t.preload,
                              poster: t.poster,
                            })
                          )),
                          (a = n)),
                        Promise.resolve()
                      );
                    },
                    enumerable: !0,
                  },
                  loadAudio: {
                    value: function (n, t) {
                      return (
                        a === n ||
                          ((t = t || {}),
                          c(),
                          (r = o.appendChild(
                            e.create("audio.cortona3dsolo-iframe", {
                              src: n,
                              controls: t.controls,
                              muted: t.muted,
                              loop: t.loop,
                              autoplay: t.autoplay,
                              preload: t.preload,
                            })
                          )),
                          (a = n)),
                        Promise.resolve()
                      );
                    },
                    enumerable: !0,
                  },
                  unload: {
                    value: function () {
                      return c(), Promise.resolve();
                    },
                    enumerable: !0,
                  },
                  window: {
                    get: function () {
                      if (r) return r.contentWindow || r;
                    },
                    enumerable: !0,
                  },
                  safeProperty: {
                    value: function (e) {
                      return i(this.window, e);
                    },
                    enumerable: !0,
                  },
                }),
                this.exports(o)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          var r = (function () {
            var e =
              document.body && document.body.currentStyle
                ? function (e) {
                    return e.currentStyle;
                  }
                : function (e) {
                    return document.defaultView.getComputedStyle(e, null);
                  };
            function n(n, t) {
              return e(n)[t];
            }
            function t(e) {
              return "scroll" === e || "auto" === e;
            }
            return function (e) {
              return (
                (function (e) {
                  return (
                    e.offsetHeight < e.scrollHeight && t(n(e, "overflow-y"))
                  );
                })(e) ||
                (function (e) {
                  return e.offsetWidth < e.scrollWidth && t(n(e, "overflow-x"));
                })(e)
              );
            };
          })();
          t.exports = function (e) {
            if (e) {
              var n = (function e(n) {
                return r(n)
                  ? n
                  : null === n.parentNode
                  ? null
                  : e(n.parentNode);
              })(e);
              if (n) {
                var t = n.getBoundingClientRect(),
                  o = e.getBoundingClientRect(),
                  a = parseInt(t.top),
                  i = parseInt(t.bottom) - 16,
                  c = i - a,
                  l = parseInt(o.top),
                  g = parseInt(o.bottom),
                  d = g - l,
                  A = 0;
                try {
                  var I =
                    n.querySelector("table thead td") ||
                    n.querySelector("table thead th");
                  "sticky" === window.getComputedStyle(I).position &&
                    (a += n
                      .querySelector("table thead")
                      .getBoundingClientRect().height);
                } catch (e) {}
                d > c || l < a ? (A = l - a) : g > i && (A = g - i),
                  0 !== A && (n.scrollTop += A);
              }
            }
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          var r = {};
          function o(e) {
            (this.applicPropertyIdent = ""),
              (this.applicPropertyType = ""),
              (this.applicPropertyValues = ""),
              (this.convertedRulesByIdent = o.RULES || {}),
              e
                ? e.xml
                  ? this.createFromXMLNode(e)
                  : e.innerHTML
                  ? this.createFromHTMLNode(e)
                  : e.$
                  ? this.createFromUniview(e)
                  : this.createFromData(e)
                : this.createDefault(),
              (this.values = this.getValuesArraysFromString(
                this.applicPropertyValues,
                this.applicPropertyIdent
              )),
              (this.applicPropertyValues = this.getS1000DApplicStringFromValues(
                this.values,
                this.applicPropertyIdent
              ));
          }
          (o.DEFAULT_IDENT = ""),
            (o.DEFAULT_TYPE = "prodattr"),
            (o.DEFAULT_VALUE = ""),
            (o.DAFAULTIDENT = "    "),
            (o.RULES = ""),
            (o.prototype.createDefault = function () {
              (this.applicPropertyIdent = o.DEFAULT_IDENT),
                (this.applicPropertyType = o.DEFAULT_TYPE),
                (this.applicPropertyValues = o.DEFAULT_VALUE);
            }),
            (o.prototype.createFromXMLNode = function (e) {
              function n(n) {
                return e && e.getAttribute(n) ? e.getAttribute(n) : void 0;
              }
              (this.applicPropertyIdent =
                n("applicPropertyIdent") || o.DEFAULT_IDENT),
                (this.applicPropertyType =
                  n("applicPropertyType") || o.DEFAULT_TYPE),
                (this.applicPropertyValues =
                  n("applicPropertyValues") ||
                  n("applicPropertyValue") ||
                  o.DEFAULT_VALUE);
            }),
            (o.prototype.createFromUniview = function (e) {
              (this.applicPropertyIdent =
                e.$attr("applicPropertyIdent") || o.DEFAULT_IDENT),
                (this.applicPropertyType =
                  e.$attr("applicPropertyType") || o.DEFAULT_TYPE),
                (this.applicPropertyValues =
                  e.$attr("applicPropertyValues") ||
                  e.$attr("applicPropertyValue") ||
                  o.DEFAULT_VALUE);
            }),
            (o.prototype.createFromHTMLNode = function (e) {
              function n(n) {
                return e && e.getAttribute(n) ? e.getAttribute(n) : void 0;
              }
              (this.applicPropertyIdent =
                n("data-applicPropertyIdent") || o.DEFAULT_IDENT),
                (this.applicPropertyType =
                  n("data-applicPropertyType") || o.DEFAULT_TYPE),
                (this.applicPropertyValues =
                  n("data-applicPropertyValues") ||
                  n("data-applicPropertyValue") ||
                  o.DEFAULT_VALUE);
            }),
            (o.prototype.createFromData = function (e) {
              (this.applicPropertyIdent = e.applicPropertyIdent
                ? e.applicPropertyIdent
                : o.DEFAULT_IDENT),
                (this.applicPropertyType = e.applicPropertyType
                  ? e.applicPropertyType
                  : o.DEFAULT_TYPE),
                (this.applicPropertyValues = e.applicPropertyValues
                  ? e.applicPropertyValues
                  : o.DEFAULT_VALUE);
            }),
            (o.prototype.getValuesArraysFromString = function (e, n) {
              function t(e, n) {
                return isNaN(Number(e)) ? e : Number(e);
              }
              var r = [],
                o = e.split("|");
              if (
                this.convertedRulesByIdent[n] &&
                this.convertedRulesByIdent[n].enumerated
              )
                for (var a = 0; a < o.length; a++) {
                  if (-1 != (l = o[a]).indexOf("~")) {
                    var i = l.split("~");
                    (i[0] = this.convertedRulesByIdent[n].toComparedValues(
                      i[0]
                    )),
                      (i[1] = this.convertedRulesByIdent[n].toComparedValues(
                        i[1]
                      ));
                    for (var c = i[0]; c <= i[1]; c++) r.push(c);
                  } else
                    r.push(this.convertedRulesByIdent[n].toComparedValues(l));
                }
              else
                for (a = 0; a < o.length; a++) {
                  var l;
                  if (-1 != (l = o[a]).indexOf("~")) {
                    var g = t(l.split("~")[0]),
                      d = t(l.split("~")[1]);
                    r.push([g, d]);
                  } else (l = t(l)), r.push(l);
                }
              return (
                this.convertedRulesByIdent[n] &&
                  this.convertedRulesByIdent[n].optimize &&
                  (r = this.optimizeArray(r)),
                r
              );
            }),
            (o.prototype.optimizeArray = function (e) {
              var n = [];
              return (
                e.forEach(function (e) {
                  for (var t = !1, r = 0; r < n.length; r++)
                    if (n[r] == e) {
                      t = !0;
                      break;
                    }
                  t || n.push(e);
                }),
                (n = n.sort(function (e, n) {
                  return e - n;
                }))
              );
            }),
            (o.prototype.getS1000DApplicStringFromValues = function (e, n) {
              var t = [];
              if (
                this.convertedRulesByIdent[n] &&
                this.convertedRulesByIdent[n].enumerated
              ) {
                for (var r = e[0], o = e[0], a = 0; a < e.length; a++)
                  r
                    ? e[a] != e[a + 1] &&
                      e[a] != e[a + 1] - 1 &&
                      (r == (o = e[a])
                        ? t.push(
                            this.convertedRulesByIdent[n].toS1000DValues(r)
                          )
                        : r == o - 1
                        ? (t.push(
                            this.convertedRulesByIdent[n].toS1000DValues(r)
                          ),
                          t.push(
                            this.convertedRulesByIdent[n].toS1000DValues(o)
                          ))
                        : t.push(
                            this.convertedRulesByIdent[n].toS1000DValues(r) +
                              "~" +
                              this.convertedRulesByIdent[n].toS1000DValues(o)
                          ),
                      (r = ""))
                    : ((r = e[a]),
                      (o = e[a]),
                      a == e.length - 1
                        ? t.push(
                            this.convertedRulesByIdent[n].toS1000DValues(r)
                          )
                        : a--);
                return t.join("|");
              }
              for (a = 0; a < e.length; a++) {
                var i = e[a];
                i instanceof Array ? t.push(i[0] + "~" + i[1]) : t.push(i);
              }
              return t.join("|");
            }),
            (o.prototype.filteredByProduct = function (e) {
              return (
                !e.filter[this.applicPropertyIdent] ||
                ((this.values = this.crossRangeArrays(
                  this.values,
                  e.filter[this.applicPropertyIdent].values
                )),
                this.values.length
                  ? ((this.applicPropertyValues =
                      this.getS1000DApplicStringFromValues(
                        this.values,
                        this.applicPropertyIdent
                      )),
                    !0)
                  : ((this.applicPropertyValues = ""), !1))
              );
            }),
            (o.prototype.crossRangeArrays = function (e, n) {
              function t(e, n) {
                var t = e[0],
                  r = e[1],
                  o = n[0],
                  a = n[1];
                if (t == o)
                  return r == a
                    ? { push: e, shift1: !0, shift2: !0 }
                    : a < r
                    ? { push: n, shift1: !1, shift2: !0 }
                    : { push: e, shift1: !0, shift2: !1 };
                if (t < o) {
                  if (r == a) return { push: n, shift1: !0, shift2: !0 };
                  if (r > a) return { push: n, shift1: !1, shift2: !0 };
                  if (r < a) {
                    if (r == o) return { push: r, shift1: !0, shift2: !1 };
                    if (r < o) return { push: !1, shift1: !0, shift2: !1 };
                    if (r > o) return { push: [o, r], shift1: !0, shift2: !1 };
                  }
                } else if (t > o) {
                  if (r == a) return { push: e, shift1: !0, shift2: !0 };
                  if (r < a) return { push: e, shift1: !0, shift2: !1 };
                  if (r > a) {
                    if (t == a) return { push: t, shift1: !1, shift2: !0 };
                    if (t > a) return { push: !1, shift1: !1, shift2: !0 };
                    if (t < a) return { push: [t, a], shift1: !1, shift2: !0 };
                  }
                }
                throw new Error(e, n);
              }
              function r(e, n) {
                var t = n[0],
                  r = n[1];
                return t == e
                  ? { push: e, shift_str: !0, shift_arr: !1 }
                  : r == e
                  ? { push: e, shift_str: !1, shift_arr: !0 }
                  : t > e
                  ? { push: !1, shift_str: !0, shift_arr: !1 }
                  : r < e
                  ? { push: !1, shift_str: !1, shift_arr: !0 }
                  : { push: e, shift_str: !0, shift_arr: !1 };
              }
              for (
                var o, a, i = e.slice(), c = n.slice(), l = [];
                i.length && c.length;

              )
                if (i[0] instanceof Array && c[0] instanceof Array) {
                  var g = t(i[0], c[0]);
                  g.push && l.push(g.push),
                    g.shift1 && i.shift(),
                    g.shift2 && c.shift();
                } else
                  i[0] instanceof Array
                    ? ((g = r(c[0], i[0])).push && l.push(g.push),
                      g.shift_str && c.shift(),
                      g.shift_arr && i.shift())
                    : c[0] instanceof Array
                    ? ((g = r(i[0], c[0])).push && l.push(g.push),
                      g.shift_str && i.shift(),
                      g.shift_arr && c.shift())
                    : ((o = i[0]),
                      (a = c[0]),
                      (g =
                        o == a
                          ? { push: o, shift1: !0, shift2: !0 }
                          : o < a
                          ? { push: !1, shift1: !0, shift2: !1 }
                          : o > a
                          ? { push: !1, shift1: !1, shift2: !0 }
                          : void 0).push && l.push(g.push),
                      g.shift1 && i.shift(),
                      g.shift2 && c.shift());
              return l;
            }),
            (o.prototype.crossArraysEnum = function (e, n) {
              for (
                var t = e.slice(), r = n.slice(), o = [];
                t.length && r.length;

              ) {
                var a = t[0],
                  i = r[0];
                a == i
                  ? (o.push(a), t.shift(), r.shift())
                  : a > i
                  ? r.shift()
                  : a < i && t.shift();
              }
              return o;
            }),
            (o.prototype.toData = function () {
              var e = {};
              return (
                (e.applicPropertyIdent = this.applicPropertyIdent),
                (e.applicPropertyType = this.applicPropertyType),
                (e.applicPropertyValues = this.applicPropertyValues),
                e
              );
            }),
            (o.prototype.toString = function (e) {
              var n = "";
              if (this.values.length > 10) {
                for (var t = 0; t < 4; t++)
                  (n += this.values[t]), t < 4 && (n += ",");
                n += "..." + this.values[this.values.length - 1];
              } else n += this.values.join(",");
              var r = "";
              return (
                this.filtered &&
                  ((r = " [" + this.filtered.state),
                  this.filtered.applicPropertyValues &&
                    (r += ": " + this.filtered.applicPropertyValues),
                  (r += "]")),
                "\n" +
                  e +
                  o.DAFAULTIDENT +
                  this.applicPropertyIdent +
                  ": " +
                  n +
                  " [" +
                  this.applicPropertyValues +
                  "]" +
                  r
              );
            }),
            (o.prototype.toPCTString = function () {
              for (
                var e = "" + this.values[0], n = 1;
                e.length < 20 && this.values[n];

              )
                (e += "," + this.values[n]), n++;
              return (
                n == this.values.length - 1 && (e += "," + this.values[n]),
                n < this.values.length - 1 &&
                  (e += "..." + this.values[this.values.length - 1]),
                this.applicPropertyIdent + ": " + e
              );
            }),
            (o.prototype.toInlineApplicString = function () {
              return this.toPCTString();
            }),
            (o.prototype.toXML = function () {
              var e = r.getXmlDOM().createElement("assert");
              return (
                e.setAttribute("applicPropertyIdent", this.applicPropertyIdent),
                e.setAttribute("applicPropertyType", this.applicPropertyType),
                e.setAttribute(
                  "applicPropertyIdent",
                  this.applicPropertyValues
                ),
                e.xml
              );
            }),
            (t.exports = o);
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(11);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-holder {\r\n    color: black;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.skin-holder .skin-toolbar {\r\n    background-color: #D6D3CF;\r\n    height: auto;\r\n    min-height: 3em;\r\n}\r\n\r\n.skin-holder .skin-toolbar>* {\r\n    padding-top: .25em;\r\n    padding-bottom: .25em;\r\n}\r\n\r\n.skin-holder .skin-toolbar.main {\r\n    background: linear-gradient(to top, #D6D3CF, #EDECE7);\r\n}\r\n\r\n.skin-holder .skin-toolbar.top {\r\n    order: -5;\r\n}\r\n\r\n.skin-holder .skin-toolbar.bottom {\r\n    order: 5;\r\n}\r\n\r\n.skin-holder .skin-control {\r\n    border: 1px solid #888;\r\n    background-color: #FFF;\r\n    border-radius: .3em;\r\n    padding: .2em .5em;\r\n}\r\n\r\n.skin-holder .skin-toolbar label {\r\n    margin-left: .5em;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.skin-holder .skin-toolbar label:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.skin-holder .skin-toolbar .skin-container.radio label {\r\n    font-weight: normal;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.skin-holder .skin-toolbar .skin-container.radio .label-control .skin-control {\r\n    margin: 0;\r\n}\r\n\r\n.skin-holder button,\r\n.skin-holder input[type=button] {\r\n    min-width: 5em;\r\n}\r\n\r\n.skin-holder *:focus {\r\n    outline: none;\r\n}\r\n/*\r\n.skin-holder .skin-popup:focus {\r\n    outline: dimgray solid 1px;\r\n}\r\n*/\r\n.skin-control:disabled {\r\n    color: #AAAAAA;\r\n}\r\n\r\n.skin-holder button:active,\r\n.skin-holder button.checked {\r\n    box-shadow: inset 2px 2px 3px rgb(128 128 128 / 50%), 2px 2px 3px rgb(255 255 255 / 90%);\r\n    transform: scale(0.95);\r\n}\r\n\r\n.skin-holder .skin-control:hover {\r\n    border: 1px solid #000;\r\n}\r\n\r\n.skin-img-button + .skin-img-button {\r\n    margin-left: 4px;\r\n}\r\n\r\n.skin-img-button {\r\n    color: #000;\r\n}\r\n\r\n.skin-img-button img {\r\n    -webkit-user-drag: none;\r\n}\r\n\r\n.skin-holder .skin-img-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 22px;\r\n    width: 22px;\r\n    min-width: 22px;\r\n    background-repeat: no-repeat;\r\n    background-origin: padding-box;\r\n    border: 1px solid transparent;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    background-position: 2px 2px;\r\n}\r\n\r\n.skin-holder .skin-img-button:active,\r\n.skin-holder .skin-img-button.checked {\r\n    background-color: #D2E6F5;\r\n    border: 1px solid #0078D7;\r\n}\r\n\r\n@media(hover: hover) and (pointer: fine) {\r\n    .skin-holder .skin-img-button:hover {\r\n        background-color: #B2D8F4;\r\n        border: 1px solid #0078D7;\r\n    }\r\n    \r\n    .skin-holder .skin-img-button:active:hover,\r\n    .skin-holder .skin-img-button.checked:hover {\r\n        background-color: #9ABBD4;\r\n    }\r\n}\r\n\r\n.skin-holder .skin-img-button:disabled,\r\n.skin-holder .skin-img-button.disabled,\r\n.skin-holder .disabled .skin-img-button,\r\n.skin-holder select:disabled,\r\n.skin-holder select.disabled,\r\n.skin-holder .disabled select {\r\n    border: 1px solid transparent;\r\n    position: relative;\r\n    pointer-events: none;\r\n    filter: contrast(.2) grayscale(1) brightness(1.5);\r\n}\r\n\r\n.skin-holder .skin-toolbar.disabled,\r\n.skin-holder .disabled .skin-toolbar,\r\n.skin-holder .skin-toolbar .disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.skin-modal-panel {\r\n    border-radius: .4em .4em .3em .3em;\r\n}\r\n\r\n.skin-modal-panel .skin-modal-title {\r\n    padding: .5em;\r\n    border-radius: .3em .3em 0 0;\r\n}\r\n\r\n.skin-modal.about {\r\n    text-align: left;\r\n}\r\n\r\n.skin-modal.about .skin-modal-content>p:first-child {\r\n    margin-top: 0;\r\n}\r\n\r\n.about-section div {\r\n    margin: .3em 0;\r\n    word-break: break-all;\r\n}\r\n\r\n.skin-modal.about hr {\r\n    border: none;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\n.skin-holder input[type=range] {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    height: 20px;\r\n}\r\n\r\n.skin-holder input[type=range]:hover {\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.skin-holder input[type=range]:focus {\r\n    outline: none;\r\n}\r\n\r\n.skin-holder input[type=range]::-ms-tooltip {\r\n    display: none;\r\n}\r\n\r\n.skin-holder input[type=range]::-ms-fill-lower {\r\n    background-color: #fff;\r\n}\r\n\r\n.skin-holder input[type=range]::-moz-range-track {\r\n    background-color: #fff;\r\n    height: 1px;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.skin-holder input[type=range]::-webkit-slider-runnable-track {\r\n    background-color: #fff;\r\n    height: 3px;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.skin-holder input[type=range]::-ms-track {\r\n    background-color: #fff;\r\n    height: 1px;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.skin-holder input[type=range]::-moz-range-thumb {\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 1px solid #000;\r\n    border-radius: 50%;\r\n    background-color: #ddd;\r\n}\r\n\r\n.skin-holder input[type=range]::-webkit-slider-thumb {\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 1px solid #000;\r\n    border-radius: 50%;\r\n    margin-top: -9px;\r\n    background-color: #ddd;\r\n    -webkit-appearance: none;\r\n}\r\n\r\n.skin-holder input[type=range]::-ms-thumb {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin: 0;\r\n    border: 1px solid #000;\r\n    border-radius: 50%;\r\n    background-color: #ddd;\r\n}\r\n\r\n.skin-holder .disabled input[type=range],\r\n.skin-holder input[type=range].disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-ms-fill-lower,\r\n.skin-holder input[type=range].disabled::-ms-fill-lower,\r\n.skin-holder input[type=range]:disabled::-ms-fill-lower {\r\n    background-color: #ddd;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-moz-range-track,\r\n.skin-holder input[type=range].disabled::-moz-range-track,\r\n.skin-holder input[type=range]:disabled::-moz-range-track {\r\n    background-color: #ddd;\r\n    border-color: #888;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-webkit-slider-runnable-track,\r\n.skin-holder input[type=range].disabled::-webkit-slider-runnable-track,\r\n.skin-holder input[type=range]:disabled::-webkit-slider-runnable-track {\r\n    background-color: #ddd;\r\n    border-color: #888;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-ms-track,\r\n.skin-holder input[type=range].disabled::-ms-track,\r\n.skin-holder input[type=range]:disabled::-ms-track {\r\n    background-color: #ddd;\r\n    border-color: #888;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-moz-range-thumb,\r\n.skin-holder input[type=range].disabled::-moz-range-thumb,\r\n.skin-holder input[type=range]:disabled::-moz-range-thumb {\r\n    border-color: #888;\r\n    background-color: #ccc;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-webkit-slider-thumb,\r\n.skin-holder input[type=range].disabled::-webkit-slider-thumb,\r\n.skin-holder input[type=range]:disabled::-webkit-slider-thumb {\r\n    border-color: #888;\r\n    background-color: #ccc;\r\n}\r\n\r\n.skin-holder .disabled input[type=range]::-ms-thumb,\r\n.skin-holder input[type=range].disabled ::-ms-thumb,\r\n.skin-holder input[type=range]:disabled ::-ms-thumb {\r\n    border-color: #888;\r\n    background-color: #ccc;\r\n}\r\n\r\n.tiramisu-speaker {\r\n    right: 8px;\r\n    left: auto;\r\n}\r\n\r\n.display-mode-2d .tiramisu-speaker,\r\n.display-mode-2d .tiramisu-banner {\r\n    display: none;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield;\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(13);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-modal {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.33);\r\n    z-index: 1000;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.skin-modal:focus {\r\n    outline: none;\r\n}\r\n\r\n.skin-modal-panel {\r\n    position: relative;\r\n    box-shadow: 2px 4px 28px rgba(0,0,0,0.25), 2px 4px 10px rgba(0,0,0,0.22);\r\n    background-color: #FFF;\r\n    color: #000;\r\n    min-width: 300px;\r\n    max-width: 80%;\r\n    max-height: 90%;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    display: flex;\r\n}\r\n\r\n.skin-modal-title {\r\n   font-size: 1.2em;\r\n   font-weight: bold;\r\n   padding: .4em .5em;\r\n   background-color: #ccc; \r\n   color: #000;\r\n   min-height: .5em;\r\n   flex-shrink: 0;\r\n}\r\n\r\n.skin-modal.error pre {\r\n    font-family: inherit;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.skin-modal.error .skin-modal-title,\r\n.skin-modal.warning .skin-modal-title {\r\n    background-color: #bd2024;\r\n    color: #fff;\r\n}\r\n\r\n.skin-modal.caution .skin-modal-title {\r\n    background-color: #ff7900;\r\n    color: #000;\r\n}\r\n\r\n.skin-modal.note .skin-modal-title {\r\n    background-color: #004488;\r\n    color: #fff;\r\n}\r\n\r\n.skin-modal.note:before,\r\n.skin-modal.caution:before,\r\n.skin-modal.error:before {\r\n    display: none;\r\n}\r\n\r\n.skin-modal-content.skin-container {\r\n    display: block;\r\n    padding: 1em 2em;\r\n    overflow-y: auto;\r\n}\r\n\r\n.skin-modal-content .accent {\r\n    font-weight: bold;\r\n}\r\n\r\n.skin-modal-footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding: .5em;\r\n    min-height: fit-content;\r\n}\r\n\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(15);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".label-control {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.skin-holder .label-control .skin-control {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.skin-holder label .label-control-checkbox,\r\n.skin-holder label .label-control-radio,\r\n.skin-holder label .label-text {\r\n    margin-left: 0;\r\n}\r\n\r\n.skin-holder label .label-text-checkbox,\r\n.skin-holder label .label-text-radio {\r\n    margin-left: .5em;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(17),
            (r.exports = function (e, n, t) {
              var r,
                o = n.parent || e.$el,
                a = n.menu || [],
                i = n.x,
                c = n.y,
                l = n.target,
                g = ["mousedown", "wheel", "blur", "pointerdown", "touchstart"],
                d = this,
                A = e.create("ul");
              a.forEach(function (n) {
                var t;
                n
                  ? (n.description && !n.label && (n.label = n.description),
                    n.label &&
                      (n.action
                        ? ((t = e.create(
                            "li",
                            {
                              ontouchstart: function (e) {
                                e.stopPropagation();
                              },
                              onpointerdown: function (e) {
                                e.stopPropagation();
                              },
                              onmousedown: function (e) {
                                e.stopPropagation();
                              },
                              onclick: function (e) {
                                e.preventDefault(),
                                  e.stopPropagation(),
                                  this.classList.contains("disabled") ||
                                    (m(), n.action.call(this, e));
                              },
                            },
                            n.label
                          )),
                          n.accent
                            ? t.classList.add("accent")
                            : t.classList.remove("accent"),
                          n.checked
                            ? t.classList.add("checked")
                            : t.classList.remove("checked"))
                        : (t = e.create(".accent", {}, n.label)),
                      n.disabled
                        ? t.classList.add("disabled")
                        : t.classList.remove("disabled")))
                  : (t = e.create("hr")),
                  A.append(t);
              }, this);
              var I = (r = e.create(
                "div.skin-popup-menu.cortona3dsolo-popover",
                {},
                A
              )).style;
              if (
                ((I.position = "absolute"),
                (I.visibility = "hidden"),
                o.append(r),
                l)
              ) {
                var s = l.getBoundingClientRect(),
                  C = o.getBoundingClientRect();
                (i += s.left - C.left), (c += s.top - C.top);
              }
              var u = r.parentNode.clientWidth,
                p = r.parentNode.clientHeight,
                f = r.offsetWidth,
                b = r.offsetHeight;
              function h(e) {
                return e.classList && e.classList.contains("skin-popup-menu");
              }
              function m(e) {
                (e &&
                  (function (e) {
                    for (var n = []; e; ) n.push(e), (e = e.parentNode);
                    return n;
                  })(e.target).some(h)) ||
                  (r &&
                    ((r = null),
                    d.remove(),
                    g.forEach(function (e) {
                      window.removeEventListener(e, m);
                    }),
                    d.emit("closed"),
                    t.dispatch("uniview.component.context-menu.closed", d)));
              }
              return (
                (I.left = i + f <= u ? i + "px" : u >= f ? u - f + "px" : 0),
                (I.top = c + b <= p ? c + "px" : c >= b ? c - b + "px" : 0),
                (I.visibility = ""),
                r.focus(),
                g.forEach(function (e) {
                  window.addEventListener(e, m);
                }),
                this.once("close", m),
                this.exports(r)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(18);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        '.skin-popup-menu {\r\n    border: 1px solid gray;\r\n    z-index: 100;\r\n    background-color: #FFF;\r\n    color: #000;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    box-shadow: 2px 4px 28px rgba(0,0,0,0.25), 2px 4px 10px rgba(0,0,0,0.22);\r\n    font-size: 8pt;\r\n    cursor: default;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.skin-popup-menu div {\r\n    font-size: 1.05em;\r\n    padding: .5em 2em;\r\n    white-space: nowrap;\r\n}\r\n\r\n.skin-popup-menu .accent {\r\n    font-weight: bold;\r\n}\r\n\r\n.skin-popup-menu ul {\r\n    margin: .5em 0;\r\n    padding: 0;\r\n}\r\n\r\n.skin-popup-menu li {\r\n    list-style: none;\r\n    padding: .5em 2em;\r\n    white-space: nowrap;\r\n    font-weight: normal;\r\n    line-height: 1em;\r\n}\r\n\r\n.skin-popup-menu .checked:before {\r\n    content: "✓";\r\n    font-size: 1.5em;\r\n    display: inline-block;\r\n    margin-left: -1em;\r\n    width: 1em;\r\n}\r\n\r\n.skin-popup-menu .disabled, \r\n.skin-popup-menu .disabled:hover {\r\n    color: #888;\r\n}\r\n    \r\n.skin-popup-menu li:hover,\r\n.skin-popup-menu .active {\r\n    background-color: #C8E8ff;\r\n    color: #000;\r\n    cursor: pointer;\r\n}\r\n\r\n.skin-popup-menu hr {\r\n    margin: .5em;\r\n    border: none;\r\n    border-top: 1px solid lightgray;\r\n}\r\n',
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n) {
            if (((n = n || 64), e.length > n)) {
              var t = Math.floor((n - 3) / 2);
              return e.substring(0, t) + "..." + e.substring(e.length - t);
            }
            return e;
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          var r = Cortona3DSolo,
            o = r.uniview.i18n["context-menu-items-drawing"] || {};
          t.exports = [
            {
              description: o.zoomIn,
              action: function () {
                r.app.drawing.scaleBy(-0.1);
              },
            },
            {
              description: o.zoomOut,
              action: function () {
                r.app.drawing.scaleBy(0.1);
              },
            },
            null,
            {
              description: o.bestFit,
              action: function () {
                r.app.drawing.reset();
              },
            },
          ];
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n, t) {
            var r = t.uniview || {},
              o = r.options || {};
            function a(e) {
              return void 0 === e;
            }
            if (r.with3D) {
              var i = [],
                c = t.app.selectionColor,
                l = t.app.hoverColor;
              o["3DBackgroundColor"] && (i = [String(o["3DBackgroundColor"])]),
                o["3DSelectedColor"] && (c = String(o["3DSelectedColor"])),
                o["3DHoverColor"] && (l = String(o["3DHoverColor"])),
                (t.app.selectionColor = c),
                (t.app.hoverColor = l),
                o.Background3DColor && (i = [String(o.Background3DColor)]),
                o.Gradient3DColor &&
                  i.length &&
                  i.push(String(o.Gradient3DColor)),
                i.length && t.app.setDefaultBackgroundColors(i),
                o.KeepSurfaceEdges && (t.app.edgeColorWeights = [1, 0, 0]),
                o.EnableZoomToRotationCenter ||
                  (t.app.navigatorOptions |= t.app.AUTOMATIC_ZOOM_ANCHOR),
                o.EnableSpinAroundPickPoint &&
                  (t.app.navigatorOptions |= t.app.AUTOMATIC_SPIN_CENTER),
                o.EnableZoomScaleLimits ||
                  (t.app.navigatorOptions |= t.app.DISABLE_ZOOM_SCALE_LIMITS),
                "boolean" == typeof o.ShowAxes &&
                  (t.app.coordinateAxesVisible = o.ShowAxes),
                a(o.DefaultFitFactorObject) ||
                  (t.app.defaultFitFactorObject = o.DefaultFitFactorObject),
                a(o.DefaultFitFactorScene) ||
                  (t.app.defaultFitFactorScene = o.DefaultFitFactorScene),
                (t.app.antialiasing = !0),
                (t.app.ambientOcclusion = !1);
              var g = 20;
              a(o.BrightnessLevel) || (g = +o.BrightnessLevel || 0),
                t.app.setObjectHighlightParams(t.app.OBJECT_HIGHLIGHT_HOVERED, {
                  diffuseColor: g ? "#000" : t.app.ui.color(l).darken(30),
                  diffuseBrightnessDelta: g ? g / 100 : -0.5,
                  emissiveColor: g ? "#000" : l,
                  emissiveBrightnessDelta: g ? g / 100 : -1,
                }),
                t.app.setObjectHighlightParams(
                  t.app.OBJECT_HIGHLIGHT_SELECTED,
                  {
                    diffuseColor: c,
                    diffuseBrightnessDelta: -1,
                    emissiveColor: "#000",
                    emissiveBrightnessDelta: -1,
                  }
                ),
                t.app.setObjectHighlightParams(
                  t.app.OBJECT_HIGHLIGHT_SELECTED_HOVERED,
                  {
                    diffuseColor: g
                      ? t.app.ui.color(c).brighten(g).toString()
                      : t.app.ui.color(l).darken(30),
                    diffuseBrightnessDelta: -1,
                    emissiveColor: g
                      ? t.app.ui.color().brighten(g).toString()
                      : l,
                    emissiveBrightnessDelta: -1,
                  }
                );
            } else o.KeepSurfaceEdges = !1;
            t.app.drawing &&
              (o["2DSelectedColor"] &&
                (t.app.drawing.selectionColor = String(o["2DSelectedColor"])),
              o["2DHighLightColor"] &&
                (t.app.drawing.hoverColor = String(o["2DHighLightColor"])),
              o.SelectedHotspotColor &&
                (t.app.drawing.selectionColor = String(
                  o.SelectedHotspotColor
                )));
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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NDYxZS1hODEwLTg0NjdjMzlkMGMyZSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M0ZGVhNS1lZWU0LTQ5YmEtYTg3ZS00ZmM3OTY2OGEyNTMiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZmI3YTEzYy00YWM0LTQ0M2UtYTcyYy0yMzMxY2RmNzBkYWEiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY2NjgwMTgyMDYyNTQ2MyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMjoxMDoyNlQxOTozMDoyMCswMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjI6MTA6MjZUMTk6MzA6MjArMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMTBlNWQ1Yy04ZTA3LTQ5ZTMtYTMxNy1jNmJiNDk0NjViZWYiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTAtMjRUMDA6Mzg6MTEiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTgwNjU3NTAtZTE5Zi00ZTI0LWI0MmEtNzE3MmRmNmE2NGQ5IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI2VDE5OjMwOjIwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvUDdHsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmChoQHhSrYLW3AAAAwUlEQVQ4y7XSsUoDURQE0JM1lb2NnSuk9EPSWKbKP/gFNrYigo2p0ofUfoFapgnWkiogCBZamCBrcwOPkF02T7zweDDMDHOHyx+nU4Mfoo8TfGOGJ1RtTE+xCHL6HnHUxmAagi9c4RY/gU3aGLwH+TLBxoF9bpO7OwxGKPCQYKv41zlFD8KgwvW+4rukxPuaxLVznoiHOdFvQjzPOSQ4Q4k3PNeRigaDDxxjmXvmL7HCaxOpKcGm8YPcBCUu0POf8wtGrSr1oJEzDAAAAABJRU5ErkJggg==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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MWNmLThjMzgtOTM1NjM2ODczZDY4IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1YWNjOTNjLTAwNGYtNGNmNy05YmFlLWUxNGIzNmRiNjNlMCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjMyZGM2MDA0LTI4MWMtNDBkNC1iNmExLTA1YmI3OGNkNGNjMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjY2ODA1NDM4MzE3MDU4IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzIiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyOjEwOjI2VDIwOjMwOjM4KzAzOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMjoxMDoyNlQyMDozMDozOCswMzowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRkNzYxNTVkLWVlMTEtNDk3OS05NzQyLWU4MzFmYmRkMDNlOSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNFQwMTowNjo0MiIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YjUxZWNiYy1hYTJmLTQ0OTYtOGM2MC01ZTYxYmE1MzcxNWIiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTAtMjZUMjA6MzA6MzgiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/b27iAAAAAZiS0dEAP8AyQAp7+tJUAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YKGhEeJmJ1jgAAAAECSURBVDjLndNBK0RhFMbx3zCFDYUYJSu2StZTZkH5HCysLcQXsZFiaTRSNpKlfARWSlbKWjENY/Nevd3OneLU6Z7b/T/Pe+459xLHGD7QT/nmj7GciYucjsChdF3AHhoYwVbAbmMY89hP7G+cp1O6eAlOL/IZvVQfF+LmAMGg/MIKXFQAZ2hhDe0K5ghmcBuIy9EpMVcYz4eZr60VGKxnzz9Ry7dQQz2D+4FBLat7mdYkbkrttQODyxJzj0U4rRhQJ7W9EYiLvINVfP9zlZtFeyfZh/Q0QPCC91Rf5+83h13MpuEcBOJDjGICO1ga9DM1AoNmBNYrDF7xgKl038VjBP4AeBGEHZdGjLIAAAAASUVORK5CYII=");
    },
    function (e, n, t) {
      var r = t(0),
        o = t(25);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      var r = t(1),
        o = t(3),
        a = t(26);
      n = r(!1);
      var i = o(a);
      n.push([
        e.i,
        ".btn-expand {\r\n    background-image: url(" +
          i +
          ");\r\n}\r\n\r\n.uniview-empty-document .btn-expand {\r\n    display: none;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIFAAAAgICAgPDv7NTQyAAAAP///////////yH5BAEKAAcALAAAAAAQABAAAAM1eLrcSgfKSElw+GkHOsjcB1HY94HKKT5E644OUcw0vMn0bDN4vo+9WiaoawBzRczrVSGhGgkAOw==");
    },
    function (e, n, t) {
      var r = t(0),
        o = t(28);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".panel-settings {\r\n    width: auto;\r\n    background-color: rgba(220,220,220,.95);\r\n    padding: 1em;\r\n    z-index: 20;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    height: auto;\r\n    min-height: auto;\r\n    min-width: 8em;\r\n    max-width: 320px;\r\n    align-self: flex-end;\r\n    margin: 1em;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border: 1px solid gray;\r\n    box-shadow: 2px 4px 28px rgba(0,0,0,0.25), 2px 4px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n.panel-settings-item {\r\n    display: flex;\r\n    align-items: start;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    margin-top: .25em;\r\n    margin-bottom: .25em;\r\n}\r\n\r\n.panel-settings-item > .label-control-select {\r\n    min-width: 50%;\r\n    align-self: end;\r\n}\r\n\r\n.panel-settings-item > .label-text-select {\r\n    align-self: center;\r\n}\r\n\r\n.panel-settings-item select {\r\n    width: 100%;\r\n}\r\n\r\n.panel-settings-item.start {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.panel-settings-item .skin-control {\r\n}\r\n\r\n.panel-settings-item.disabled {\r\n    color: gray;\r\n}\r\n\r\n.panel-settings label {\r\n    font-weight: normal;\r\n}\r\n ",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(30);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-popup {\r\n    overflow: hidden;\r\n}   \r\n\r\n.skin-popup:focus {\r\n    outline: none;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n, t) {
            var r = t.expand(
              t.uniview.i18n["solo-skin-procedure-settings-panel"] || {},
              t.uniview.i18n.settings || {}
            );
            return t.uniview.with3D
              ? [
                  {
                    name: "ShowSurfaceEdges",
                    label: r.labelShowSurfaceEdges,
                    value:
                      t.app.edgeColorWeights &&
                      t.app.edgeColorWeights.some(function (e) {
                        return 0 !== e;
                      }),
                    hidden:
                      !1 === t.uniview.options.ShowSurfaceEdges ||
                      n.disableSurfaceEdges,
                    disabled: !t.uniview.options.KeepSurfaceEdges,
                    onchange: function (e) {
                      t.app.edgeColorWeights = [e ? 1 : 0, 0, 0];
                    },
                  },
                  {
                    name: "AntiAliasing",
                    label: r.antiAliasing,
                    value: t.app.antialiasing,
                    hidden: n.hideAntiAliasing,
                    onchange: function (e) {
                      t.app.antialiasing = e;
                    },
                  },
                  {
                    name: "AmbientOcclusion",
                    label: r.ambientOcclusion,
                    value: t.app.ambientOcclusion,
                    hidden: n.hideAmbientOcclusion,
                    onchange: function (e) {
                      t.app.ambientOcclusion = e;
                    },
                  },
                  {
                    name: "SelectionMode",
                    label: r.selectionMode,
                    type: "select",
                    value: t.app.selectionMode,
                    hidden: n.hideSelectionMode,
                    choice: [
                      {
                        value: t.app.SELECTION_MODE_DEFAULT,
                        description: r.default,
                      },
                      { value: t.app.SELECTION_MODE_XRAY, description: r.xRay },
                      {
                        value: t.app.SELECTION_MODE_TRANSLUCENT_SHELL,
                        description: r.translucentShell,
                      },
                    ],
                    onchange: function (e) {
                      t.app.selectionMode = e;
                    },
                  },
                  {
                    name: "OutlineHoveredObjects",
                    label: r.outlineHoveredObjects,
                    value: t.app.outlineHoveredObjects,
                    hidden: n.hideOutlineHoveredObjects,
                    onchange: function (e) {
                      t.app.outlineHoveredObjects = e;
                    },
                  },
                ]
              : [];
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n, t) {
            function r(e) {
              e.setAttribute("tabindex", "-1");
            }
            function o(e) {
              e.stopPropagation();
            }
            var a = {
              button: !1,
              checkbox: !1,
              color: !1,
              date: !1,
              datetime: !0,
              "datetime-local": !1,
              email: !0,
              file: !1,
              hidden: !1,
              image: !1,
              month: !1,
              number: !0,
              password: !0,
              radio: !1,
              range: !1,
              reset: !1,
              search: !0,
              submit: !1,
              tel: !0,
              text: !0,
              time: !1,
              url: !0,
              week: !1,
            };
            return (
              n &&
                "object" == typeof n &&
                window.addEventListener("keydown", function (e) {
                  if (!e.repeat) {
                    var r =
                      [e.ctrlKey, e.altKey, e.shiftKey, e.metaKey]
                        .map(function (e) {
                          return e ? "1" : "0";
                        })
                        .join("") +
                      ":" +
                      e.keyCode;
                    "function" == typeof n[r] &&
                      (n[r]({
                        isCanvasVisible:
                          t.core && t.core.canvas && t.app.ui.isCanvasVisible(),
                        isDrawingVisible:
                          t.app.drawing && t.app.drawing.isVisible(),
                      }),
                      e.preventDefault());
                  }
                }),
              {
                prohibitKeyboardFocusForElement: r,
                prohibitKeyboardFocus: function () {
                  document
                    .querySelectorAll(".skin-control, .btn-2d-graphics")
                    .forEach(r),
                    document.querySelectorAll("a, button").forEach(r),
                    document.querySelectorAll("input").forEach(function (e) {
                      r(e), a[e.type] && e.addEventListener("keydown", o);
                    });
                },
              }
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n, t) {
            var r = t.uniview || {},
              o = r.options || {};
            if (n.useUIPublishOptions || !r.config.skipUIPublishOptions) {
              var a = e.color(o.ToolbarBackgroundColor || "#D6D3CF"),
                i = e.color(o.ToolbarColor || "#000"),
                c = a.lighten(30),
                l = c.desaturate().toHsl();
              l.l = c.getLuminance() > 0.5 ? 5 : 95;
              var g = e.color(l),
                d = function (e, n) {
                  var t =
                    (100 *
                      (n.getBrightness() -
                        0.7 * e.getBrightness() -
                        0.3 * n.grayscale().getBrightness())) /
                    255 /
                    2;
                  return n
                    .grayscale()
                    .darken((t / Math.abs(t)) * Math.max(5, Math.abs(t)));
                },
                A = {
                  ".skin-holder": {
                    "&": {
                      ".skin-toolbar": { backgroundColor: a, color: i },
                      ".skin-control": { backgroundColor: c, color: g },
                      ".skin-control:disabled": { color: d(g, c) },
                      ".skin-toolbar.main": {
                        background:
                          "linear-gradient(to top, " +
                          a +
                          ", " +
                          a.lighten(5) +
                          ")",
                      },
                      ".skin-toolbar.disabled, .disabled .skin-toolbar, .skin-toolbar .disabled":
                        { color: d(i, a) },
                    },
                  },
                };
              e.css(A).render();
            }
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(36);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-iframe {\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n\n.cortona3dsolo-iframe {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: block;\n    border: none;\n    background-color: inherit;\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9AMDAwOHh4efn5+Tk5Ozs7M7OzvPz89jY2PX19ampqdPT05CQkMbGxr29vfLy8szMzNvb28nJydzc3PDw8N7e3u3t7d/f38/Pz+Pj4+jo6NnZ2e/v78PDw8XFxf7+/cfHx9ra2unp6evr683Nzd3d3dbW1srKytTU1PT09OLi4ubm5vn5+cLCwry8vMjIyPz8/ODg4NDQ0L+/v+/v7/Hx8cvLy7m5ucTExMHBwb6+vry8u7CwsNHR0bq6uqurq/f39+7u7uLh4bOzs/f39rCwrsDAv7i2tu/u7q6urvr6+v7+/q+vrbGxsba2tsLCwb27u52dnKWlpbq4uI6OjtfW1u3t7ODg37e3t6qqqqWjo7OzsaOjo9/f3rOzs7u7urW1tKKioaenp7i4uJKSkrS0tNHPz5+fnvz8+9DQz56enuTj4+np6Ly6utPT0rGxsJGRkbGxsb6+va6urKinp/r6+eXl5dXV1dfX1+rq6ru7u9LS0gUGDpubm////////////yH5BAEKAH8ALAAAAAAQABAAAAc7gH+Cg4SFhoeFe4qLjIyCe3yRkpORkH+WiI98l5uZnJ+elpiZop2km6OIpZ6fqYeijbGKnZS1kqy4mYEAOw==");
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(64),
            (r.exports = function (e, n, t) {
              var r = e.container(".skin-tabs-header"),
                o = e.container(".skin-tabs-body"),
                a = this,
                i = e.container(".skin-tabs.cortona3dsolo-popover", r, o);
              function c(n) {
                var t = n,
                  i = Array.prototype.slice.call(arguments, 1);
                "object" == typeof n && ((t = n.title), (i = n.content));
                var c = r.querySelectorAll(".skin-page-title").length,
                  l = 0 == c ? ".active" : "",
                  g = e.text(".skin-page-title" + l, t),
                  d = e.container.apply(e, [".skin-page-body" + l].concat(i));
                return (
                  (g.onclick = function () {
                    a.emit("activate", c);
                  }),
                  r.append(g),
                  o.append(d),
                  d
                );
              }
              return (
                n.pages &&
                  n.pages.forEach &&
                  n.pages.forEach(function (e) {
                    c(e.title, e.content);
                  }),
                this.on("append", c),
                this.on("activate", function (e) {
                  r
                    .querySelector(".skin-page-title.active")
                    .classList.remove("active"),
                    o
                      .querySelector(".skin-page-body.active")
                      .classList.remove("active");
                  var n = r.querySelectorAll(".skin-page-title").item(e),
                    i = o.querySelectorAll(".skin-page-body").item(e);
                  n &&
                    i &&
                    (n.classList.add("active"), i.classList.add("active")),
                    a.emit("activated", e),
                    t.dispatch("uniview.component.tab.activated", a, e);
                }),
                this.exports(i)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIGAAAAgICAgPDv7NTQyAAAAP/////JKf/JKSH5BAEKAAcALAAAAAAQABAAAAMvCLfcrdCxuICSx06N7cWgQ4xkeBBGahAmqrKhm8KgvLbkaO4ZJ3kbkI/yyxh5mQQAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIGAAAAgICAgPDv7NTQyAAAAP/////JKf/JKSH5BAEKAAcALAAAAAAQABAAAAMyeLrcfiRK6Yi52MRm87UE03ldqIzZaE5senqfC8GajGLoSqvLHWuiHTAI23BYlIfSkQAAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIFAAAAgICAgPDv7NTQyAAAAP/JKf/JKf/JKSH5BAEKAAcALAAAAAAQABAAAAMieLrcfgTKGJ9tFct7M8sVNW2cFT5eqZGf6nipEnOxaLtXAgA7");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAIQTAISbpZixvpGptZmxvpKptYWbpeTp7evx9SxdX+vx9uTq7dfb3MGan4Sjmy1iSICAgPDv7NTQyAAAAP///////////////////////////////////////////////////yH5BAEKAB8ALAAAAAAQABAAAAVm4PcNQWmepTgmbOsmwec4SGOzTK7Hc30nup2MZmuwJEEGj/iTIIW94nHyVA59xoRkQmXFRIPXliuBqcKuMfm7KjbU5HPCvX1MHk4JeIDoI/JrKiIzhA4fW3qCQ4WHcYKFMyJODx8hADs=");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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lumGRbxOPL1p6Zz3iSOsIinE58RjBl2Q+JHrsstvnMsOCzwzYuQyc8QRYrHcxXIXs4qhEk8RxxRVo3wh77LCeYuzWquz9j35C0NFbTnLdZrDSGIRKaQhQkYdVdRgUV9VaKSYyNB+wsMfdfxpcsnkqoKRYx4bUCE5fvA/+N2tWZqccJNCCaD3xbY/RoDALtBq2Pb3sW23TgD/M3CldfwbTWDmk/RGR4sdAeFt4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVsguOr21t7H6QOQo66WboCDQ2C0TNlrHu/u6+7t3zPt/n4AonJyugptrU4AAA5VaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjY3YTQzNzZmLTZkYjItNGJhMC04MzZmLWI3ZTBlY2FlNDI2ZSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkN2M4ZTc4Yi1mOTA4LTQwY2EtOGUzNS0wNWIwODljMWQyNmYiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NWVhOGZlZS1jODcyLTQ3OTEtOThkOS05MmQwZmJiMDY4OWEiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY2NjgwNTA1NjY0Mzc4MCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMjoxMDoyNlQyMDoyNDoxNiswMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjI6MTA6MjZUMjA6MjQ6MTYrMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYjFiZmM2Zi1iNzVhLTQ5ZGUtOWNlMi1kODJjNzUzOTU3ZTUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTAtMjRUMDE6MDA6NTAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDBkMGE1MjYtMzc0Ny00YjEwLWE4ZGEtNTVkNmVhMjU3NGZmIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI2VDIwOjI0OjE2Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PhMmdX8AAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmChoRGBD7lbwfAAACW0lEQVQ4y3WTzW4TSRRGT93bP3G3HbeNiYk0QkigIIIAZYFgA+x4Ah4AnmxegsVolrMbHgAWCAnEXxIck9hpu7urq4pFkwHE5JNKqsW9R1dV5xp+zta9KSs7JmEIQMMJWTzn8N8Dzon+dyv2HiKjhMHNNcWDI7LrC9QIrZ2QDHeo9t+dDyj2HiGXZ1x+uk9/tyIaeDT3xFuW7GqJPRTi/o3/gyjj23+go5TtJ/sAGMBVBl8b/FpISsFsV9Qfe/QKw/pg8TMgom4nbE5L7FzRvsfXAd8Y3Klw8mJEM9vErXKCU3zbp7ihHL9692OC7OIuvZ05Jgr4SvBrofqQMv/rFuINOlySXftCOv2KiRxwgXi4S/3lTQfYmFwjv7jEmUBoBLdSTv65hWzO6N/5TDKpMVHAaEBzSzxZ4U6VuH+bevZakWJKEEH7Ft8IqzcjBMhvfubsUUJrCM4QWiGxAkVFu9ggintKmo1BLhANVoRWqD9NkXxJlDUdwHeNoRWCFawVglV8q9SLgWIXB8SDPfxK0byiOdgmvXSIiT04A84Q7HdAo8RWaZ1AgHC81XnQzF8RZXdxyx7BZUSDrxgTCE4ITvBWCVYJTdccrBJshDse/jCxmb9EzIRghhh1SNoQWu0gVvFWiZzStkosSnM0oF4E/UWrtvxAnBSYqEDzkuBNB/ACXnC+m8hZpT4aY05P9De52/I9cf8+oVZkowan4JTw/eAFO5tANWL18bk5b8vIrzzDpEskPUWyqvuQsodd50g7oHz755n55ycdPyYkm8RJDoBtSkyzoJ7/fVbyDZASGkHUGzfDAAAAAElFTkSuQmCC");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIEAAAAgICAgPDv7NTQyAAAAP/////JKQAAACH5BAEKAAcALAAAAAAQABAAAAM6eLrcRzDK+Yq9+JKae9lENoUfZxFGakCniaooCZ5TKnOvbbeyuu6lHmylwflYRdlEZPIkncyRFHJIAAA7");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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emtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo2MjMxMWVhYy05YTE1LTQ0M2MtOGEzMS00NDUzZGViOWY1OTYiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTc3NTRhM2QtYjIzYi00ZTcyLWExOTktNzdmYWU5ODMxNmFkIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjY5YWE3ZTQtZmZlYi00NTExLTllNzAtOWE0Yzk5MmYwZjZhIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjY4MDU1Mzk3MDQ1NzUiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjI6MTA6MjZUMjA6MzI6MTkrMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIyOjEwOjI2VDIwOjMyOjE5KzAzOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWQxODQ0NjUtOGVlZi00MzU3LWI2OWItZTY4NGViNGQzZDAyIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI0VDAxOjA3OjA2Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVkMDhlZTZjLTY1MjctNGY1Ni04YTRkLTVhYWFmNTAxMmNkZSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQyMDozMjoxOSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5KgWPPAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5goaESATdQNRXgAAASdJREFUOMtjYKAXiEur/o9NnImQxs7+Of+N7KL+Hz11Bas8Iy6NNc2T/+85cIbh9dsPcDFmZiYGPl4uBlkpUQYrUy2G0sI0RhZcBrCzs2EY//fvP4b3H74wvP/wheHStfsMeaWt/xmJ8cKKdfsYPn3+ynD3wkbG+tbJ/5eu2cvw//9/Bh5uDuIDMTGzFh6IMamV/5UN/P+bO8X+Z2FgYPhPQC8jAwMDw/zpzXDXcnKwMTAwMDAY66sysDAwMDD8P6mJXaf5daziV288YODh5mDwdDYlHI3ooGfinP9v331myE7yY/D18WQkyYAt23b/X7flCENJdihDWnI0IwMDAwMLsZp37Nz3f//R8ww1xdEMXh6ujMgB9J9AGOCNaiZK8wgjsdFIMwAA2qdgH5XdvvcAAAAASUVORK5CYII=");
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          function r(e) {
            "string" == typeof (e = e || "S1000D-A-00-00-00-00A-000A-A")
              ? this.fromString(e)
              : "object" == typeof e && e.dataset && e.dataset.dmc
              ? this.fromString(e.dataset.dmc)
              : "object" == typeof e && e.dataset
              ? ((this.modelIdentCode = e.dataset.modelidentcode),
                (this.systemDiffCode = e.dataset.systemdiffcode),
                (this.systemCode = e.dataset.systemcode),
                (this.subSystemCode = e.dataset.subsystemcode),
                (this.subSubSystemCode = e.dataset.subsubsystemcode),
                (this.assyCode = e.dataset.assycode),
                (this.disassyCode = e.dataset.disassycode),
                (this.disassyCodeVariant = e.dataset.disassycodevariant),
                (this.infoCode = e.dataset.infocode),
                (this.infoCodeVariant = e.dataset.infocodevariant),
                (this.itemLocationCode = e.dataset.itemlocationcode),
                (this.learnCode = e.dataset.learncode),
                (this.learnEventCode = e.dataset.learneventcode))
              : "object" == typeof e &&
                ((this.modelIdentCode = e.modelIdentCode),
                (this.systemDiffCode = e.systemDiffCode),
                (this.systemCode = e.systemCode),
                (this.subSystemCode = e.subSystemCode),
                (this.subSubSystemCode = e.subSubSystemCode),
                (this.assyCode = e.assyCode),
                (this.disassyCode = e.disassyCode),
                (this.disassyCodeVariant = e.disassyCodeVariant),
                (this.infoCode = e.infoCode),
                (this.infoCodeVariant = e.infoCodeVariant),
                (this.itemLocationCode = e.itemLocationCode),
                (this.learnCode = e.learnCode),
                (this.learnEventCode = e.learnEventCode));
          }
          function o(e, n) {
            (this.ipdDMC = n || new r("S1000D-A-00-00-00-000-941A-D")),
              "string" == typeof (e = e || "00-000")
                ? this.fromString(e)
                : "object" == typeof e &&
                  e instanceof o &&
                  this.fromString(e.toString());
          }
          (r.prototype.toString = function () {
            var e = [
              this.modelIdentCode,
              this.systemDiffCode,
              this.systemCode,
              this.subSystemCode + this.subSubSystemCode,
              this.assyCode,
              this.disassyCode + this.disassyCodeVariant,
              this.infoCode + this.infoCodeVariant,
              this.itemLocationCode,
            ];
            return (
              this.learnCode &&
                this.learnEventCode &&
                e.push(this.learnCode + this.learnEventCode),
              e.join("-")
            );
          }),
            (r.prototype.fromString = function (e) {
              var n = e.split("-");
              n.length >= 8 &&
                ((this.modelIdentCode = n[0]),
                (this.systemDiffCode = n[1]),
                (this.systemCode = n[2]),
                (this.subSystemCode = n[3].substring(0, n[3].length - 1)),
                (this.subSubSystemCode = n[3].substring(n[3].length - 1)),
                (this.assyCode = n[4]),
                (this.disassyCode = n[5].substring(0, 2)),
                (this.disassyCodeVariant = n[5].substring(2)),
                (this.infoCode = n[6].substring(0, 3)),
                (this.infoCodeVariant = n[6].substring(3)),
                (this.itemLocationCode = n[7]),
                n.length > 8
                  ? ((this.learnCode = n[9].substring(0, n[3].length - 1)),
                    (this.learnEventCode = n[9].substring(n[3].length - 1)))
                  : (delete this.learnCode, delete this.learnEventCode));
            }),
            (r.prototype.getURI = function () {
              return "URN:S1000D:DMC-" + this.toString();
            }),
            (o.prototype.toString = function () {
              var e = [
                this.modelIdentCode,
                this.systemDiffCode,
                this.systemCode,
                this.subSystemCode + this.subSubSystemCode,
                this.assyCode,
                this.figureNumber + this.figureNumberVariant,
                this.itemNumber + this.itemNumberVariant,
              ]
                .filter(function (e) {
                  return "string" == typeof e && e;
                })
                .join("-");
              return (
                this.itemSequenceNumber && (e += "/" + this.itemSequenceNumber),
                e
              );
            }),
            (o.prototype.fromString = function (e) {
              var n,
                t = e.split("/");
              delete this.itemSequenceNumber,
                delete this.itemNumber,
                delete this.itemNumberVariant,
                delete this.figureNumber,
                delete this.figureNumberVariant,
                delete this.assyCode,
                delete this.subSystemCode,
                delete this.subSubSystemCode,
                delete this.systemCode,
                delete this.systemDiffCode,
                delete this.modelIdentCode,
                t.length > 1 && (this.itemSequenceNumber = t.pop()),
                (n = (t = t[0].split("-")).pop()),
                (this.itemNumber = n.substring(0, 3)),
                (this.itemNumberVariant = n.substring(3) || ""),
                (n = t.pop()),
                (this.figureNumber = n.substring(0, 2)),
                (this.figureNumberVariant = n.substring(2) || ""),
                t.length && (this.assyCode = t.pop()),
                t.length &&
                  ((n = t.pop()),
                  (this.subSystemCode = n.substring(0, 1)),
                  (this.subSubSystemCode = n.substring(1))),
                t.length && (this.systemCode = t.pop()),
                t.length && (this.systemDiffCode = t.pop()),
                t.length && (this.modelIdentCode = t.pop());
            }),
            (o.prototype.toDMC = function (e) {
              return (
                (e = e || this.ipdDMC),
                [
                  this.modelIdentCode || e.modelIdentCode,
                  this.systemDiffCode || e.systemDiffCode,
                  this.systemCode || e.systemCode,
                  (this.subSystemCode || e.subSystemCode) +
                    (this.subSubSystemCode || e.subSubSystemCode),
                  this.assyCode || e.assyCode,
                  this.figureNumber + (this.figureNumberVariant || "0"),
                  (this.infoCode || e.infoCode) +
                    (this.infoCodeVariant || e.infoCodeVariant),
                  this.itemLocationCode || "D",
                ].join("-")
              );
            }),
            (t.exports = { CSN: o, DMC: r });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o = new (function () {
            var e = null,
              n = !1,
              r = !1,
              o = function (n) {
                console.error(
                  "ERROR: " + n + " - " + e.GetErrorString(n),
                  ": " + e.GetDiagnostic(n)
                );
              };
            (this.constructor.prototype.isStub = function () {
              return !!this.getAPI().isSoloStub || r;
            }),
              (this.constructor.prototype.isTerminated = function () {
                return n;
              }),
              (this.constructor.prototype.getAPI = function () {
                var n = function (e) {
                  for (
                    var n = 0;
                    null == e.API_1484_11 && null != e.parent && e.parent != e;

                  ) {
                    if (++n > 500)
                      return (
                        console.error(
                          "Error finding API -- too deeply nested."
                        ),
                        null
                      );
                    e = e.parent;
                  }
                  return e.API_1484_11;
                };
                return (
                  e ||
                    ((e = n(window)) ||
                      null == window.opener ||
                      void 0 === window.opener ||
                      (e = n(window.opener)),
                    e ||
                      (console.error(
                        "Unable to locate the LMS's API Implementation. Communication with the LMS will not occur."
                      ),
                      console.log("Switch to LMS's API stub."),
                      (r = !0),
                      (e = t(63)))),
                  e
                );
              }),
              (this.constructor.prototype.initialize = function () {
                var e = !1,
                  n = this.getAPI();
                return (
                  n &&
                    ((e = "true" == n.Initialize("")) || o(n.GetLastError())),
                  e
                );
              }),
              (this.constructor.prototype.terminate = function () {
                var e = !1,
                  t = this.getAPI();
                return (
                  t &&
                    (n ||
                      ((n = !0),
                      (e = "true" == t.Terminate("")) || o(t.GetLastError()))),
                  e
                );
              }),
              (this.constructor.prototype.get = function (e) {
                if (!n) {
                  var t = this.getAPI();
                  if (t) {
                    var r = t.GetValue(e),
                      a = t.GetLastError();
                    if ("0" == a) return r;
                    o(a);
                  }
                }
              }),
              (this.constructor.prototype.set = function (e, t) {
                var r = !1;
                if (!n) {
                  var a = this.getAPI();
                  a &&
                    ((r = "true" == a.SetValue(e, t)) || o(a.GetLastError()));
                }
                return r;
              }),
              (this.constructor.prototype.commit = function () {
                var e = !1;
                if (!n) {
                  var t = this.getAPI();
                  t && ((e = "true" == t.Commit()) || o(t.GetLastError()));
                }
                return e;
              }),
              (this.constructor.prototype.startLO = function (e) {
                return this.getAPI().startLO(e);
              }),
              (this.constructor.prototype.setValueForItemById = function (
                e,
                n,
                t
              ) {
                return "true" == this.getAPI().SetValueForItemById(e, n, t);
              }),
              (this.constructor.prototype.getValueForItemById = function (
                e,
                n
              ) {
                return this.getAPI().GetValueForItemById(e, n);
              });
          })();
          r.exports = o;
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(49),
            (r.exports = function (e, n, r) {
              var o = !0,
                a = r.uniview.i18n["solo-skin-toolbar-scene-navigation"] || {},
                i = r.uniview.doc,
                c = t(2);
              "procedure" === i.type &&
                (r.touch.options.FEATURE_PICK_TOPMOST = !1),
                r.catalog &&
                  (r.catalog.willObjectClick = function () {
                    return !r.uniview.settings.SetCenter;
                  }),
                "boolean" == typeof n.animated && (o = n.animated);
              var l = e.container(".standard-views.right");
              [
                "Front",
                "Back",
                "Left",
                "Right",
                "Top",
                "Bottom",
                "Isometric",
              ].forEach(function (n) {
                var t = n.toLowerCase(),
                  i = "left" === t ? "right" : "right" === t ? "left" : t,
                  c = e.buttonImg({
                    id: "btn-" + t,
                    title: a["title" + n],
                    onclick: function () {
                      r.app.jumpToStandardView(i, o);
                    },
                  });
                l.append(c);
              });
              var g = e.create(c, {
                  type: "buttonImg",
                  id: "btn-set-center",
                  label: a.titleSetCenter,
                  name: "SetCenter",
                }),
                d = e.create(c, {
                  type: "buttonImg",
                  id: "btn-show-hide-rotation-center",
                  label: a.titleRotationCenter,
                  name: "ShowRotationCenter",
                  onchange: function (e) {
                    r.app.setRotationCenterVisibility(e);
                  },
                }),
                A =
                  !1 === r.uniview.options.ShowAxes ||
                  "generic" === r.uniview.doc.type
                    ? ""
                    : e.create(c, {
                        type: "buttonImg",
                        id: "btn-show-hide-axes",
                        label: a.titleAxes,
                        name: "ShowAxes",
                        value: r.app.coordinateAxesVisible,
                        onchange: function (e) {
                          r.app.coordinateAxesVisible = e;
                        },
                      }),
                I = e.toolbar(
                  "#toolbar-navigation.main.bottom",
                  e.container(
                    ".left.navigation-buttons",
                    g,
                    d,
                    e.buttonImg({
                      id: "btn-fit-all",
                      title: a.titleFitAll,
                      onclick: function () {
                        r.app.fitSceneInView(o, n.fitSceneFactor);
                      },
                    }),
                    r.app.alignHorizon
                      ? e.buttonImg({
                          id: "btn-align",
                          title: a.titleAlign,
                          onclick: function () {
                            r.app.alignHorizon(o);
                          },
                        })
                      : "",
                    A
                  ),
                  l
                );
              function s(n) {
                e.toggle(I, !n);
              }
              return (
                r.on("app.ipc.didDrawingDisplayMode", s),
                r.on("app.procedure.didDrawingDisplayMode", s),
                r.on("touch.didObjectClick", function (e, n, t, a) {
                  if (r.uniview.settings.SetCenter)
                    if (
                      r.app.configureInstance(0, 0) &
                        r.app.DISABLE_DISCARDABLE_GEOMETRY_DATA &&
                      r.app.setRotationCenterToPoint
                    ) {
                      var i = r.app.pickObjectChain(t, a);
                      i &&
                        setTimeout(function () {
                          r.app.setRotationCenterToPoint(
                            i.sceneCoord[0],
                            i.sceneCoord[1],
                            i.sceneCoord[2]
                          ),
                            o && r.app.centerRotationCenterInView(o),
                            (r.uniview.settings.SetCenter = !1);
                        }, 0);
                    } else
                      e &&
                        setTimeout(function () {
                          r.app.setRotationCenterToObjects([e], o),
                            (r.uniview.settings.SetCenter = !1);
                        }, 0);
                }),
                r.on("app.procedure.didPlay", function () {
                  l.classList.add("disabled");
                }),
                r.on("app.procedure.didStop", function () {
                  l.classList.remove("disabled");
                }),
                this.exports(I)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(50);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      var r = t(1),
        o = t(3),
        a = t(51),
        i = t(52),
        c = t(37),
        l = t(53),
        g = t(54),
        d = t(55),
        A = t(56),
        I = t(57),
        s = t(58),
        C = t(59),
        u = t(60),
        p = t(61);
      n = r(!1);
      var f = o(a),
        b = o(i),
        h = o(c),
        m = o(l),
        v = o(g),
        y = o(d),
        w = o(A),
        S = o(I),
        k = o(s),
        x = o(C),
        T = o(u),
        P = o(p);
      n.push([
        e.i,
        ".standard-views .skin-img-button + .skin-img-button {\r\n    margin-left: 0;\r\n}\r\n\r\n#btn-set-center {\r\n    background-image: url(" +
          f +
          ");\r\n}\r\n\r\n#btn-show-hide-rotation-center {\r\n    background-image: url(" +
          b +
          ");\r\n}\r\n\r\n#btn-fit-all {\r\n    background-image: url(" +
          h +
          ");\r\n}\r\n\r\n#btn-align {\r\n    background-image: url(" +
          m +
          ");\r\n}\r\n\r\n#btn-show-hide-axes {\r\n    background-image: url(" +
          v +
          ");\r\n}\r\n\r\n#btn-front {\r\n    background-image: url(" +
          y +
          ");\r\n}\r\n\r\n#btn-back {\r\n    background-image: url(" +
          w +
          ");\r\n}\r\n\r\n#btn-left {\r\n    background-image: url(" +
          S +
          ");\r\n}\r\n\r\n#btn-right {\r\n    background-image: url(" +
          k +
          ");\r\n}\r\n\r\n#btn-top {\r\n    background-image: url(" +
          x +
          ");\r\n}\r\n\r\n#btn-bottom {\r\n    background-image: url(" +
          T +
          ");\r\n}\r\n\r\n#btn-isometric {\r\n    background-image: url(" +
          P +
          ");\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ+AN/f3/Dw8NjY2MzMzOfn5+Xl5fX19ezs7M7OzvPz88bGxqmpqdvb25CQkNzc3MnJyeTk5N7e3tPT0/Ly8tnZ2e/v7+3t7b29vcPDw+jo6OPj48/Pz/7+/cXFxenp6cfHx9ra2ubm5uvr693d3fT09Pn5+cLCws3Nzby8vNbW1uLi4sjIyNTU1MrKyvHx8fz8/ODg4O7u7svLy9DQ0LCwsO/v77q6ury8u8HBwbm5ucTExL+/v/f399HR0aurq76+vr6+vb27u/z8++3t7LGxsKinp7i4uLa2tq6urNPT0vf39tHPz7Ozsfr6+ru7usLCwZ6enqqqqqKiodDQz7GxsZubm7S0tK6urqWjo+Lh4d/f3vr6+bOzs7e3t7Ozs7i2trW1tP7+/uTj45+fnq+vrZKSkrGxsaenp5GRkenp6O/u7rCwruDg37q4uI6OjtfW1sDAv6WlpZ2dnLy6uqOjo9XV1eHh4erq6ru7u8DAwNLS0tfX14qi8AUGDv///////yH5BAEKAH8ALAAAAAAQABAAAAc3gH+Cg399hIeIfXyIjIWLjYeKkJGPk4OVlpB9m5uChoWcn3yjo4KPpKWZk5+qkq2Yq7CaspC0gQA7");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAKUnANXV1d/f3+fn5/Dw8NjY2Kmpqezs7M7OzpCQkPX19fPz8+Tk5MzMzPLy8tzc3MnJycbGxtvb29PT0729vd7e3tnZ2e/v7+3t7cPDw+Xl5ejo6OPj48/Pz8XFxf7+/eHh4dLS0urq6sDAwLu7u9fX15Sq8QwMDP///////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAD8ALAAAAAAQABAAAAY4wJ9w+DMRj0hTCcksLoXGphP6bCqnUuc1W9wSTeCweCwsmc3gs7pK9VqX7uQz/q3Sh+w7U89kD4MAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ/ANzc3NjY2Ozs7P7+/cjIyLy8vJGSk8vLy7Gxsa6urdrX08LCwsbGxp2dnampqpuZmfn5+ba1tcDAwFVVWbm5uVlZXCssMTc3PLu7u6KioUpKTlBRVPf396qopqSkpI2Nj09PU7+/v9bW1ujm4fDw8Ofl4O3r5tfV0Ozp5NvY1NjV0dnW0uzq5d7c1+bm5uvo497e3tvb2+Pj4+rn4sXFxfPz8/X19evr69ra2s3Nzebk36enp+7u7o+Pj9LS0uXi3vLy8tfX1+Th3ePg3N/d2OLf2ufn5+De2eTk5M7OzuLi4t3a1tzZ1cTExOjo6M/Pz8HBwdXV1eXl5RESGMzMzPT09Orq6tPT087MyJGPj09QVICAg8C+u9/f39LS04eIiqqrrCgoLtDQ0NHPzI6NjJqanPHx8czMzTs8QL6+vu/v78/Pzri3t9bV1ezs693d3fz8/KalpePi4qysrLS0s9LS0bCwr+Dg4JqYl+np6dTU1NHR0Q4PFbq6ugAAAP///yH5BAEKAH8ALAAAAAAQABAAAAdOgH+Cg4SFhoeIiYQWfIp8FoIVjYl8FYJZfCCIIHxZg1p8ZYZlfFqFaHx4hHh8aIecfLGxmohkExYWE2SKvH9+v8DBwYJ4xcbHx73Ky4qBADs=");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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6QOQo66WboCDQ2C0TNlrHu/u6+7t3zPt/n4AonJyugptrU4AAA80aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjhhMGYwNzEyLTIxMmYtNDA0MC1iMWI4LTA2ZmZlZmNjMzRiYiIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTNlNGNhYy01N2QwLTRlY2YtODgyNy00OTc0NTZhOThkOWIiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1Yjk4NDgyMy0xNzU5LTQwZmItYWUwMy0zY2IzYmNkYmUzYzciCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY2NjgwNTcyNTA5MDY3NyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMjoxMDoyNlQyMDozNToyNSswMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjI6MTA6MjZUMjA6MzU6MjUrMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Mzg2ZTE2Yi01MDBjLTQ5NWItYWJhMC1iYmNmNDQ3MjRmNWUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMDktMjlUMjA6MTY6MjciLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDM5OTU0YmMtNzJlMy00YjM4LWI5Y2YtMGNkM2JhMWMxNmU4IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI0VDAxOjExOjIzIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiZDgxOGY1LWM2ODctNGM5Yy1iYzEwLWU2ZDc1YzEwNjAxNSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQyMDozNToyNSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7o59jeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5goaESMZvvvrgwAAAYlJREFUOMudks1LG1EUxX9PXQvD6EJw5U66cJGFgiiCtCSmRqOIrd+4LS24ceXo/AeCHzvNOJpoi6iN1Th+IogFQUTUja79D2abye2mCYmOaDzwODy479zz7j3wH2bMFN6BEoCFswW5OL7AOrfkXQIHiQMA9lb2indgrpjiui4ArutiJor7SkngQwBd1wHQdZ1AbeBZ0eHJX2lobJVyrdpf3Ll2JNQfEufaKShwDs+kXKvOnYbGVvGdged55HMWwY9NqrO7N3c3DMN/iJlMhnzOYmB0TH5v/CIS7QEgHGxRvgLpdJp8Bugb+SHbW+t87ugiHptWth17eY1PHXwd/i47yU3CkSirSzMKIBr5pF4UyJ/Bl6Fvsru9RVt7B2v2rHpTkLLWk8tHpP4kCYXb+bk8/+zxo2XJ6dRUwSYUQPwoLgkrwXnqlsFwG+PBZt9uV5eXlIqQAeorK6mamFAKwN63RUtdFR1jT9PI2XxYXHw1wnc3N5QBHlBXUUGNYaiiOt7PzcnO5GRBo39M2KSK1ineYwAAAABJRU5ErkJggg==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9ANHR0b+/v9bW1uDg4Kenp/Pz8+vr6/X19d7e3s3NzY+Pj/Dw8Nra2uPj49TU1O7u7uzs7Obm5tfX19jY2MjIyPLy8tvb2+Tk5M7OzuLi4sXFxdLS0ufn57y8vMLCwv7+/cTExMvLy+jo6NnZ2d3d3cbGxurq6szMzOHh4cnJydPT0+Xl5cfHx9zc3Pn5+cHBwbu7u9XV1fT09O3t7d/f3/z8/NDQ0L6+vsPDw/Hx8e/v78rKys/Pz729vcDAwKmpqff397u7urm5ubi4uK6urru6urKysu7t7c/OzpGRkZqamrW1tezs69bV1aalpeHg4Pf39q+vr6ysq/r6+s/Pzt/f3t7e3ba1tejo56SkpKKiore3t7CwsLS0s6Oioq2trLq5uaWlpa6urbCwr7i3t7q6ufz8+7Ozs/7+/r29vLGxsePi4vr6+Z6enb+/vqysrJCQkI2NjcHBwNLS0bGxsJycm6GhoJ2dnba2tunp6bq6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdIgH+Cg4SFhn2IiYqFiIZ/jYN9j4eTgpKVkZaam5ySip+Xmn17pKWkoZOjpqWonqushK6ve6CPs7SZtrOXoaqvnrG3kJGgiYaBADs=");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9ANHR0enp6dTU1PPz86enp83Nzevr6/X19Y+Pj8jIyNjY2Nvb28XFxeDg4MLCwubm5t7e3vDw8MvLy/Ly8tra2uPj4+Tk5M7Ozt3d3eLi4tLS0u7u7uzs7NfX17y8vP7+/cTExMbGxujo6NnZ2czMzOHh4dXV1erq6tPT08nJydzc3MHBweXl5fn5+cfHx7u7u/T09O/v78rKyvz8/Ofn5/Hx8c/Pz8PDw+3t7b29vdDQ0MDAwLu7uri4uL6+vq6urrm5uff396mpqd/f39/f3rGxsZ2dnbCwsLW1ta+vr7Cwr5CQkN7e3a2trNbV1Y2Njc/Pzvr6+uHg4Pz8+7KysqGhoKysq+zs67Ozs8HBwKSkpL+/vre3t9LS0bGxsPr6+ba1tbS0s7u6ura2tu7t7c/Ozr29vLi3t56ena6urePi4pGRkbq5uejo5/f39qalpbq6uaysrJycm6OiopqamqWlpaKiov7+/tbW1r+/v7q6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdMgH+Cg4SFhn2IiYqFiHuOj3uIhH1/fZCOlpSCmpaQnZyDnZiPlIqmopGVk6SeqqGspK6bsJiylaeJspqboby2rrulh7aSh7ubuMWEgQA7");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9AOnp6dTU1ODg4PPz86enp+vr6/X19c3NzY+Pj/Dw8OPj497e3tjY2MjIyO7u7tra2tvb28XFxezs7MLCws7Ozubm5uLi4uTk5PLy8svLy93d3dLS0ry8vNfX18TExP7+/dnZ2cbGxujo6Orq6snJydPT08zMzOXl5fT09NXV1dzc3OHh4fn5+cfHx8HBwbu7u729vfz8/PHx8d/f376+vs/Pz+/v78PDw8rKyufn57m5uampqbu7usDAwK6urtDQ0Li4uPf39+3t7fr6+Zycm7i3t7e3t7W1tdbV1d/f3p6enc/OzrCwr+jo5+7t7fr6+uPi4r+/vrGxsKSkpLCwsLa1tba2trS0s/f39rOzs62trKOioqKiopGRkezs652dnZqamq+vr7q6uaalpeHg4I2NjZCQkP7+/tLS0bGxsa6uraysrPz8+729vKysq97e3cHBwM/PzqWlpbKysrq5uaGhoLu6utHR0dbW1r+/v7q6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdKgH+Cg4SFhn2IiYqFiIZ/jYN9j4d7koKWlpF7lZeRhH2bnIqjoKGSmZOXoaKfmqapnaqvqKOrp56unKmoj5uZt4y6l7zDjKSJhoEAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9AOnp6dTU1ODg4Kenp/Pz8+vr683NzfX19Y+Pj/Dw8OPj497e3tjY2MjIyO7u7tra2tvb28XFxezs7MLCwubm5s7OzuLi4uTk5NfX1/Ly8tLS0ry8vOfn58TExP7+/cvLy9nZ2cbGxt3d3ejo6PT09NXV1erq6szMzOXl5cnJydPT09zc3Pn5+cfHx8HBwbu7u+Hh4fz8/O/v79/f3/Hx8cDAwL6+vs/Pz+3t7cPDw7m5uampqcrKyri4uK6urru7utDQ0L29vff399/f3vz8+/7+/qGhoJCQkLKysuPi4ru6ura2tr29vPf39rCwsJGRkcHBwLq5ufr6+rCwr8/Pzo2Njc/Ozr+/vrS0s7Gxsbq6uaOioq2trKysq6+vr56enbi3t5qamq6ure7t7eHg4Ojo56alpaysrJycm7e3t7a1taKiouzs66SkpNLS0bOzs7GxsLW1tZ2dnfr6+d7e3aWlpdbV1dHR0dbW1r+/v7q6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdHgH+Cg4SFhn2IiYqFiIZ/jYN9e32Hj5F7k4yClI+YmZGgiqKcm52epKSWkqegoZ6flq6no4mmsLGxq6m5l7uqhJCMu7S1hYEAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9ANTU1Onp6eDg4PPz86enp83Nzevr6/X19Y+Pj8jIyNjY2Nvb287OzuLi4uTk5MXFxcLCwubm5tfX197e3uPj4/Dw8MvLy/Ly8tra2t3d3dLS0u7u7uzs7Ofn57y8vMTExP7+/dnZ2cbGxujo6PT09Orq6szMzNXV1dzc3OXl5cfHx9PT0/n5+cHBwbu7u8nJyeHh4dDQ0Pz8/L6+vrm5ud/f3/Hx8cDAwO/v78PDw8rKyr29vampqe3t7c/Pz66urru7uri4uPf397CwsLe3t729vKysq62trLGxsPr6+aalpfr6+v7+/p2dnZGRkaSkpLW1tZqamra1tbS0s8/PzsHBwM/OztLS0Zycm6KiorKysqysrLOzs9bV1aOiorCwr+zs66+vr+jo5+Hg4I2Njd7e3bu6upCQkJ6enbGxsbq5ub+/vu7t7bi3t9/f3qWlpfz8+/f39ra2tuPi4qGhoK6urbq6udbW1r+/v9HR0bq6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdHgH+Cg4SFhn2IiYqFfXuOj46IhI2Qj31/l4KUlXuZnpyRg5eKpJmamJOiqaaop6qsprCtmqWJs7KunoyuqKynsL60jLWShYEAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ9AODg4L+/v9bW1tTU1PPz86enp+vr697e3s3NzfX19Y+Pj+Pj4/Dw8Nra2s7OzuLi4uTk5Ozs7O7u7ubm5tfX19jY2MjIyMvLy9vb2/Ly8t3d3dLS0sXFxby8vMLCwufn5/7+/cTExOjo6NnZ2cbGxurq6szMzNPT0/T09OHh4dzc3MnJyfn5+cfHx8HBwbu7u9XV1eXl5dDQ0N/f3/z8/O3t7fHx8b6+vrm5ucPDw8/Pz7i4uKmpqcrKyru7usDAwK6uru/v7729vff396ysq6Kior+/vrW1tbOzs5qamrq5uaOios/OzrGxsba2tvr6+qalpeHg4M/PztLS0aGhoKSkpOzs6+7t7cHBwOjo57e3t6+vr+Pi4rCwr7KysqysrN/f3vz8+7u6uvr6+Zycm/f39ra1ta6urZ2dnbi3t6Wlpb29vLGxsLS0s56enbq6uf7+/t7e3bCwsI2NjZCQkJGRka2trNbV1enp6dHR0bq6up2ht////wAAAAAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdIgH+Cg4SFhn2IiYqFiIZ/jYN9j4eTgpKVkZaam5ySip+XmqGYo56EoaWYpKeqoIuoe7F7fbKXtrKxtLOZuri0pb2+o4+ukISBADs=");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMZ8ANbW1tHR0enp6fPz86enp83NzfX19evr6+bm5o+Pj/Ly8tTU1NLS0vDw8Ly8vOPj4+Dg4N7e3u7u7tjY2MLCwsjIyNvb29fX19ra2sXFxezs7MvLy/7+/cTExOTk5M7Ozt3d3eLi4tnZ2cbGxujo6Orq6uXl5efn58zMzNXV1dPT08nJydzc3OHh4fn5+cHBwbu7u8fHx/T09Pz8/Pf399DQ0N/f38DAwL29ve/v77m5uc/Pz8rKysPDw6mpqb6+vru7uq6urri4uPHx8e3t7aysq52dnePi4pGRkfr6+bi3t+jo56ysrM/Ozra2tra1tZ6enaalpdbV1eHg4K+vr9LS0ZCQkI2Njd/f3pqamsHBwN7e3aWlpbKysrGxsaOior+/vv7+/qKiorCwsLq5ubu6uu7t7aGhoLW1tbq6uezs67e3t6SkpPr6+rS0s729vLOzs62trLCwr/f39pycm8/Pzq6urfz8+7GxsL+/v7q6uv///wAAAJ2htwAAAAAAACH5BAEKAH8ALAAAAAAQABAAAAdGgH+Cg4SFhoJ8iYeEiX2OfIuNjpOQjHyTmI+MfZeZlIOdnZmJlaKinKGImKSnpaOerquwoLKjm4+jlbSclLqFl8C+h6SHgQA7");
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = e.create(t(7), n);
            return (
              o.classList.add("skin-external-3d-panel"),
              o
                .loadSoloResource(
                  r.app.modelInfo.bundleURL || r.app.modelInfo.companionFile,
                  r.expand({}, r.uniview.options, {
                    factory: "uniview-generic",
                    totalMemory: +r.uniview.options.TotalMemory || 256,
                    features: r.app.DISABLE_DOCUMENT_INTERACTIVITY,
                    components: { uiGenericContextMenu: function () {} },
                  })
                )
                .then(function () {
                  r.dispatch("uniview.external3DPanel.showObjects", []);
                  var e = o.window.Cortona3DSolo;
                  (e.app.coordinateAxesVisible = !1),
                    e.uniview.css.render({
                      ".skin-holder .tiramisu-banner": { display: "none" },
                    }),
                    e.app.ui.showPanels(!1),
                    e.app.procedure && e.app.procedure.freezeCamera(!0);
                }),
              r.on("uniview.external3DPanel.showObjects", function (e) {
                var n = o.window.Cortona3DSolo,
                  t = e.map(n.app.getObjectWithName);
                !(function e(n, t) {
                  var r = o.window.Cortona3DSolo;
                  r.app.getChildObjects(t).forEach(function (t) {
                    if (n.indexOf(t) < 0)
                      r.core._tiramisu_setObjectVisibility(t, !1),
                        r.app.recursiveObjectLookup && e(n, t);
                    else {
                      var o = r.app.getChildObjects(t);
                      if (!o.length)
                        for (var a = t; a; a = r.app.getParentObject(a))
                          r.core._tiramisu_setObjectVisibility(a, !0),
                            r.app.setObjectPropertyf(
                              a,
                              r.app.PROPERTY_VISIBILITY,
                              !1,
                              0
                            ),
                            r.app.setObjectPropertyf(
                              a,
                              r.app.PROPERTY_TRANSPARENCY,
                              !1,
                              -1
                            );
                      e(o, t);
                    }
                  });
                })(t),
                  this.dispatch("uniview.external3DPanel.didShowObjects", n, t);
              }),
              r.on("uniview.external3DPanel.didShowObjects", function (e, n) {
                e.app.jumpToStandardView("isometric", !1);
              }),
              n.prohibitDisplaySelectedObject ||
                r.on("app.didChangeSelectedObjects", function () {
                  var e = o.window.Cortona3DSolo,
                    n = r.uniview.ixml,
                    t = r.app.getSelectedObjects().map(r.app.getObjectName);
                  n.getRowByObjectName
                    ? ((t = t.reduce(function (e, t, r) {
                        return e
                          .map(n.getRowByObjectName)
                          .indexOf(n.getRowByObjectName(t)) < 0
                          ? e.concat(t)
                          : e;
                      }, [])),
                      r.dispatch("uniview.external3DPanel.showObjects", t))
                    : e.app.procedure &&
                      (e.once(
                        "app.procedure.didChangePlayerState",
                        function () {
                          o.window.requestAnimationFrame(function () {
                            r.dispatch(
                              "uniview.external3DPanel.showObjects",
                              t
                            );
                          });
                        }
                      ),
                      e.app.procedure.setPlayPosition(
                        r.app.procedure.position,
                        !0
                      ));
                }),
              r.on("uniview.external3DPanel.show", function () {
                e.show(o.$el);
              }),
              r.on("uniview.external3DPanel.hide", function () {
                e.hide(o.$el, !0);
              }),
              e.hide(o.$el, !0),
              o
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          var r = new (function () {
            var e = function (n) {
              var t = n;
              if ("object" == typeof n && n instanceof Object)
                for (var r in ((t = {}), n)) t[r] = e(n[r]);
              return t;
            };
            function n() {
              var e =
                /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{1,2})(Z|[+-]\d{2}:\d{2}|[+-]\d{2})|(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{1,2})|(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})|(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})|(\d{4})-(\d{2})-(\d{2})T(\d{2})|(\d{4})-(\d{2})-(\d{2})|(\d{4})-(\d{2})|(\d{4})/;
              return (
                (this.date =
                  arguments.length && arguments[0] instanceof Date
                    ? arguments[0]
                    : new Date()),
                (this.constructor.prototype.toString = function () {
                  var e = function (e) {
                      return e < 10 ? "0" + e : e;
                    },
                    n = "";
                  return (
                    (n += [
                      this.date.getFullYear(),
                      e(this.date.getMonth() + 1),
                      e(this.date.getDate()),
                    ].join("-")),
                    (n += "T"),
                    (n += [
                      e(this.date.getHours()),
                      e(this.date.getMinutes()),
                      e(this.date.getSeconds()) +
                        "." +
                        e(Math.round(this.date.getMilliseconds() / 10)),
                    ].join(":"))
                  );
                }),
                (this.constructor.prototype.check = function (n) {
                  var t = e.exec(n);
                  return t && t[0].length == n.length;
                }),
                (this.constructor.prototype.parse = function (n) {
                  var t = e.exec(n);
                  if (t && t[0].length == n.length) {
                    var r = new Date(0),
                      o = t[8],
                      a = 1;
                    if (o) {
                      if (
                        (r.setUTCFullYear(t[a++]),
                        a < t.length &&
                          t[a] &&
                          (r.setUTCMonth(t[a++] - 1),
                          a < t.length &&
                            t[a] &&
                            (r.setUTCDate(t[a++]),
                            a < t.length &&
                              t[a] &&
                              (r.setUTCHours(t[a++]),
                              a < t.length &&
                                t[a] &&
                                (r.setUTCMinutes(t[a++]),
                                a < t.length &&
                                  t[a] &&
                                  (r.setUTCSeconds(t[a++]),
                                  a < t.length &&
                                    t[a] &&
                                    r.setUTCMilliseconds(1e3 * t[a++])))))),
                        "Z" != o)
                      ) {
                        var i = "-" == o.charAt(0) ? -1 : 1;
                        (o =
                          (o = o.split(":")).length > 1
                            ? i * (parseInt(o[1]) + 60 * Math.abs(o[0]))
                            : i * Math.abs(o[0]) * 60),
                          r.setUTCMinutes(r.getUTCMinutes() - o);
                      }
                    } else {
                      for (a = 9; !t[a]; a++);
                      r.setFullYear(t[a++]),
                        a < t.length &&
                          t[a] &&
                          (r.setMonth(t[a++] - 1),
                          a < t.length &&
                            t[a] &&
                            (r.setDate(t[a++]),
                            a < t.length &&
                              t[a] &&
                              (r.setHours(t[a++]),
                              a < t.length &&
                                t[a] &&
                                (r.setMinutes(t[a++]),
                                a < t.length &&
                                  t[a] &&
                                  (r.setSeconds(t[a++]),
                                  a < t.length &&
                                    t[a] &&
                                    r.setMilliseconds(1e3 * t[a++]))))));
                    }
                    this.date = r;
                  }
                  return this;
                }),
                (this.constructor.prototype.valueOf = function () {
                  return this.date;
                }),
                this
              );
            }
            function t() {
              var e = /P(\d+Y)?(\d+M)?(\d+D)?T?(\d+H)?(\d+M)?(\d+\.?\d{0,2}S)?/;
              return (
                (this.interval = arguments.length > 0 ? arguments[0] : 0),
                (this.constructor.prototype.toString = function () {
                  var e = "P",
                    n = this.interval,
                    t = function (t, r) {
                      n > r && ((e += Math.floor(n / r) + t), (n %= r));
                    };
                  return (
                    t("Y", 31104e3),
                    t("M", 2592e3),
                    t("D", 86400),
                    n &&
                      ((e += "T"),
                      t("H", 3600),
                      t("M", 60),
                      (n = Math.round(100 * n) / 100) && (e += n + "S")),
                    e
                  );
                }),
                (this.constructor.prototype.check = function (n) {
                  var t = e.exec(n);
                  return t && t[0].length == n.length;
                }),
                (this.constructor.prototype.parse = function (n) {
                  var t = 0,
                    r = e.exec(n);
                  if (r && r[0].length == n.length) {
                    for (
                      var o = [12, 30, 24, 60, 60, 1], a = 1, i = r.length - 1;
                      i >= 1;
                      i--
                    )
                      (a *= o[i - 1]),
                        (t +=
                          (r[i]
                            ? parseFloat(r[i].substring(0, r[i].length - 1))
                            : 0) * a);
                    this.interval = t;
                  }
                  return this;
                }),
                (this.constructor.prototype.valueOf = function () {
                  return this.interval;
                }),
                (this.constructor.prototype.add = function (e) {
                  return (this.interval += e), this;
                }),
                (this.constructor.prototype.subtract = function (e) {
                  return (this.interval -= e), this;
                }),
                this
              );
            }
            var r,
              o = 0,
              a = 0,
              i = {
                0: "No Error",
                101: "General Exception",
                102: "General Initialization Failure",
                103: "Already Initialized",
                104: "Content Instance Terminated",
                111: "General Termination Failure",
                112: "Termination Before Initialization",
                113: "Termination After Termination",
                122: "Retrieve Data Before Initialization",
                123: "Retrieve Data After Termination",
                132: "Store Data Before Initialization",
                133: "Store Data After Termination",
                142: "Commit Before Initialization",
                143: "Commit After Termination",
                201: "General Argument Error",
                301: "General Get Failure",
                351: "General Set Failure",
                391: "General Commit Failure",
                401: "Undefined Data Model Element",
                402: "Unimplemented Data Model Element",
                403: "Data Model Element Value Not Initialized",
                404: "Data Model Element Is Read Only",
                405: "Data Model Element Is Write Only",
                406: "Data Model Element Type Mismatch",
                407: "Data Model Element Value Out Of Range",
                408: "Data Model Dependency Not Established",
              };
            function c() {
              (this.cmi = {
                _version: { _value: "1.0", _type: "string", _access: 5 },
                comments_from_learner: {
                  _count: { _value: 0, _type: "integer", _access: 5 },
                  _children: {
                    _value: "comment,location,timestamp",
                    _type: "string",
                    _access: 5,
                  },
                  _items: [],
                  _prototype: {
                    comment: { _value: "", _type: "string", _access: 3 },
                    location: { _value: "", _type: "string", _access: 3 },
                    timestamp: { _value: "", _type: "time", _access: 3 },
                  },
                },
                comments_from_lms: {
                  _count: { _value: 0, _type: "integer", _access: 5 },
                  _children: {
                    _value: "comment,location,timestamp",
                    _type: "string",
                    _access: 5,
                  },
                  _items: [],
                  _prototype: {
                    comment: { _value: "", _type: "string", _access: 1 },
                    location: { _value: "", _type: "string", _access: 1 },
                    timestamp: { _value: "", _type: "time", _access: 1 },
                  },
                },
                completion_status: {
                  _value: "unknown",
                  _type: "state(completed;incomplete;not attempted;unknown)",
                  _access: 7,
                },
                completion_threshold: { _value: "", _type: "real", _access: 1 },
                credit: {
                  _value: "credit",
                  _type: "state(credit;no-credit)",
                  _access: 1,
                },
                entry: {
                  _value: "ab-initio",
                  _type: "state(ab-initio;resume;)",
                  _access: 1,
                },
                exit: {
                  _value: "",
                  _type: "state(time-out;suspend;logout;normal;)",
                  _access: 2,
                },
                interactions: {
                  _count: { _value: 0, _type: "integer", _access: 5 },
                  _children: {
                    _value:
                      "id,type,objectives,timestamp,correct_responses,weighting,learner_response,result,latency,description",
                    _type: "string",
                    _access: 5,
                  },
                  _items: [],
                  _prototype: {
                    id: { _value: "", _type: "string", _access: 3 },
                    type: {
                      _value: "",
                      _type:
                        "state(true-false;choice;fill-in;long-fill-in;likert;matching;performance;sequencing;numeric;other)",
                      _access: 3,
                    },
                    objectives: {
                      _count: { _value: 0, _type: "integer", _access: 5 },
                      _items: [],
                      _prototype: {
                        id: { _value: "", _type: "string", _access: 3 },
                      },
                    },
                    timestamp: { _value: "", _type: "time", _access: 3 },
                    correct_responses: {
                      _count: { _value: 0, _type: "integer", _access: 5 },
                      _items: [],
                      _prototype: {
                        pattern: { _value: "", _type: "string", _access: 3 },
                      },
                    },
                    weighting: { _value: 0, _type: "real", _access: 3 },
                    learner_response: {
                      _value: "",
                      _type: "string",
                      _access: 3,
                    },
                    result: {
                      _value: "",
                      _type:
                        "state(correct;incorrect;unanticipated;neutral)|real",
                      _access: 3,
                    },
                    latency: { _value: 0, _type: "timeinterval", _access: 3 },
                    description: { _value: "", _type: "string", _access: 3 },
                  },
                },
                launch_data: { _value: "", _type: "string", _access: 1 },
                learner_id: {
                  _value: "urn:VTE:user-generic-id",
                  _type: "string",
                  _access: 5,
                },
                learner_name: {
                  _value: "user_generic_name",
                  _type: "string",
                  _access: 5,
                },
                learner_preference: {
                  _count: { _value: 0, _type: "integer", _access: 5 },
                  _children: {
                    _value:
                      "audio_level,language,delivery_speed,audio_captioning",
                    _type: "string",
                    _access: 5,
                  },
                  _items: [],
                  _prototype: {
                    audio_level: { _value: 1, _type: "real", _access: 7 },
                    language: { _value: "", _type: "string", _access: 7 },
                    delivery_speed: { _value: 1, _type: "real", _access: 7 },
                    audio_captioning: {
                      _value: "0",
                      _type: "state(-1;0;1)",
                      _access: 7,
                    },
                  },
                },
                location: { _value: "", _type: "string", _access: 3 },
                max_time_allowed: {
                  _value: "",
                  _type: "timeinterval",
                  _access: 1,
                },
                mode: {
                  _value: "normal",
                  _type: "state(browse;normal;review)",
                  _access: 5,
                },
                objectives: {
                  _count: { _value: 0, _type: "integer", _access: 5 },
                  _children: {
                    _value:
                      "id,score,success_status,completion_status,description",
                    _type: "string",
                    _access: 5,
                  },
                  _items: [],
                  _prototype: {
                    id: { _value: "", _type: "string", _access: 3 },
                    score: {
                      _children: {
                        _value: "scaled,raw,min,max",
                        _type: "string",
                        _access: 5,
                      },
                      scaled: { _value: "", _type: "real", _access: 3 },
                      raw: { _value: "", _type: "real", _access: 3 },
                      min: { _value: "", _type: "real", _access: 3 },
                      max: { _value: "", _type: "real", _access: 3 },
                    },
                    success_status: {
                      _value: "unknown",
                      _type: "state(passed;failed;unknown)",
                      _access: 7,
                    },
                    completion_status: {
                      _value: "unknown",
                      _type:
                        "state(completed;incomplete;not attempted;unknown)",
                      _access: 7,
                    },
                    description: { _value: "", _type: "string", _access: 3 },
                  },
                },
                progress_measure: {
                  _value: "",
                  _type: "real",
                  _access: 3,
                  _relationship: function (e) {
                    return (
                      (g.cmi.progress_measure._value = e),
                      (g.cmi.progress_measure._access |= 4),
                      0 == e
                        ? ((g.cmi.completion_status._value = "not attempted"),
                          (g.cmi.completion_status._access |= 4))
                        : 1 == e &&
                          ((g.cmi.completion_status._value = "completed"),
                          (g.cmi.completion_status._access |= 4)),
                      4 & g.cmi.completion_threshold._access &&
                        (e >= g.cmi.completion_threshold._value
                          ? (g.cmi.completion_status._value = "completed")
                          : (g.cmi.completion_status._value = "incomplete"),
                        (g.cmi.completion_status._access |= 4)),
                      "true"
                    );
                  },
                },
                scaled_passing_score: { _value: "", _type: "real", _access: 7 },
                score: {
                  _children: {
                    _value: "scaled,raw,min,max",
                    _type: "string",
                    _access: 5,
                  },
                  scaled: {
                    _value: "",
                    _type: "real",
                    _access: 3,
                    _relationship: function (e) {
                      return (
                        (g.cmi.score.scaled._value = e),
                        (g.cmi.score.scaled._access |= 4),
                        4 & g.cmi.scaled_passing_score._access &&
                          (e >= g.cmi.scaled_passing_score._value
                            ? (g.cmi.success_status._value = "passed")
                            : (g.cmi.success_status._value = "failed"),
                          (g.cmi.success_status._access |= 4)),
                        "true"
                      );
                    },
                  },
                  raw: { _value: "", _type: "real", _access: 3 },
                  min: { _value: "", _type: "real", _access: 3 },
                  max: { _value: "", _type: "real", _access: 3 },
                },
                session_time: { _value: "", _type: "timeinterval", _access: 2 },
                success_status: {
                  _value: "unknown",
                  _type: "state(passed;failed;unknown)",
                  _access: 7,
                },
                suspend_data: { _value: "", _type: "string", _access: 3 },
                time_limit_action: {
                  _value: "continue,no message",
                  _type:
                    "state(exit,message;continue,message;exit,no message;continue,no message)",
                  _access: 5,
                },
                total_time: {
                  _value: "PT0H0M0S",
                  _type: "timeinterval",
                  _access: 5,
                },
              }),
                (this.c3d = {
                  hasQuestions: {
                    _value: "unknown",
                    _type: "boolean",
                    _access: 3,
                  },
                });
            }
            var l = new (function () {
                (this.currentID = ""),
                  (this.setData = function (e, n) {
                    this[e] = n;
                  }),
                  (this.getData = function (e) {
                    var n;
                    return (
                      e || (e = "_default"),
                      this[e]
                        ? (n = this[e])
                        : ((n = new c()), this.setData(e, n)),
                      (this.currentID = e),
                      n
                    );
                  });
              })(),
              g = new c();
            (this.constructor.prototype.Initialize = function () {
              switch (((r = "Initialize()"), (a = 101), o)) {
                case 0:
                  (a = 0), (o = 1);
                  break;
                case 1:
                  break;
                case 2:
                  return (a = 104), "false";
              }
              return "true";
            }),
              (this.constructor.prototype.Terminate = function () {
                switch (((r = "Terminate()"), (a = 101), o)) {
                  case 0:
                    return (a = 112), "false";
                  case 1:
                    (a = 0), (o = 2);
                    break;
                  case 2:
                    return (a = 113), "false";
                }
                return "true";
              }),
              (this.constructor.prototype.Commit = function () {
                switch (((r = "Commit()"), (a = 101), o)) {
                  case 0:
                    return (a = 142), "false";
                  case 1:
                    a = 0;
                  case 2:
                    return (a = 143), "false";
                }
                return "true";
              }),
              (this.constructor.prototype.GetLastError = function () {
                return a;
              }),
              (this.constructor.prototype.GetErrorString = function (e) {
                return i[e];
              }),
              (this.constructor.prototype.GetDiagnostic = function (e) {
                return r;
              }),
              (this.constructor.prototype.SetValue = function (i, c) {
                r = "SetValue('" + i + "', '" + c + "')";
                var l = arguments.length > 2 && arguments[2];
                if (!l)
                  switch (o) {
                    case 0:
                      return (a = 132), "false";
                    case 2:
                      return (a = 133), "false";
                  }
                a = 0;
                for (var d = i.split("."), A = g; d.length; ) {
                  i = d.shift();
                  var I = parseInt(i);
                  if (isNaN(I)) {
                    if (!(i in A)) return (a = 401), "false";
                    A = A[i];
                  } else {
                    if (!("_items" in A)) return (a = 351), "false";
                    if (A._items.length > I) A = A._items[I];
                    else {
                      if (A._items.length != I) return (a = 351), "false";
                      (A._items[I] = e(A._prototype)),
                        (A._count._value = A._items.length),
                        (A = A._items[I]);
                    }
                  }
                }
                if (A instanceof Object && "_value" in A) {
                  if (0 != (8 & A._access)) return (a = 402), "false";
                  if (!l && 0 == (2 & A._access)) return (a = 404), "false";
                  for (
                    var s = A._type.split("|"), C = !1, u = 0;
                    u < s.length && !C;
                    u++
                  ) {
                    var p = /(\w+)\(?([\w\s-,;]*)\)?/.exec(s[u]);
                    if (p)
                      switch (p[1]) {
                        case "state":
                          for (
                            var f = p[2].split(";"), b = 0;
                            b < f.length && !C;
                            b++
                          )
                            C = f[b] == c;
                          break;
                        case "integer":
                          C = "" != c && !isNaN(parseInt(c));
                          break;
                        case "real":
                          C = "" != c && !isNaN(parseFloat(c));
                          break;
                        case "timeinterval":
                          C = "" != c && new t().check(c);
                          break;
                        case "time":
                          C = "" != c && new n().check(c);
                          break;
                        default:
                          C = !0;
                      }
                  }
                  return C
                    ? "_relationship" in A
                      ? A._relationship(c)
                      : ((A._value = c), (A._access |= 4), "true")
                    : ((a = 406), "false");
                }
                return (a = 351), "false";
              }),
              (this.constructor.prototype.GetValue = function (e) {
                switch (((r = "GetValue('" + e + "')"), o)) {
                  case 0:
                    return (a = 122), "false";
                  case 2:
                    return (a = 123), "false";
                }
                a = 0;
                for (var n = e.split("."), t = g; n.length; ) {
                  e = n.shift();
                  var i = parseInt(e);
                  if (isNaN(i)) {
                    if (!(e in t)) return (a = 401), "";
                    t = t[e];
                  } else {
                    if (!("_items" in t)) return (a = 301), "";
                    if (!(t._items.length > i)) return (a = 301), "";
                    t = t._items[i];
                  }
                }
                return t instanceof Object && "_value" in t
                  ? 0 != (8 & t._access)
                    ? ((a = 402), "")
                    : 0 == (1 & t._access)
                    ? ((a = 405), "")
                    : 0 == (4 & t._access)
                    ? ((a = 403), "")
                    : t._value
                  : ((a = 301), "");
              }),
              (this.constructor.prototype.SetValueForItemById = function (
                i,
                c,
                g
              ) {
                switch (((r = "SetValue('" + i + "', '" + c + "')"), o)) {
                  case 0:
                    return (a = 132), "false";
                  case 2:
                    return (a = 133), "false";
                }
                a = 0;
                for (var d = i.split("."), A = l.getData(g); d.length; ) {
                  i = d.shift();
                  var I = parseInt(i);
                  if (isNaN(I)) {
                    if (!(i in A)) return (a = 401), "false";
                    A = A[i];
                  } else {
                    if (!("_items" in A)) return (a = 351), "false";
                    if (A._items.length > I) A = A._items[I];
                    else {
                      if (A._items.length != I) return (a = 351), "false";
                      (A._items[I] = e(A._prototype)),
                        (A._count._value = A._items.length),
                        (A = A._items[I]);
                    }
                  }
                }
                if (A instanceof Object && "_value" in A) {
                  if (0 != (8 & A._access)) return (a = 402), "false";
                  if (0 == (2 & A._access)) return (a = 404), "false";
                  for (
                    var s = A._type.split("|"), C = !1, u = 0;
                    u < s.length && !C;
                    u++
                  ) {
                    var p = /(\w+)\(?([\w\s-,;]*)\)?/.exec(s[u]);
                    if (p)
                      switch (p[1]) {
                        case "state":
                          for (
                            var f = p[2].split(";"), b = 0;
                            b < f.length && !C;
                            b++
                          )
                            C = f[b] == c;
                          break;
                        case "integer":
                          C = "" != c && !isNaN(parseInt(c));
                          break;
                        case "real":
                          C = "" != c && !isNaN(parseFloat(c));
                          break;
                        case "timeinterval":
                          C = "" != c && new t().check(c);
                          break;
                        case "time":
                          C = "" != c && new n().check(c);
                          break;
                        default:
                          C = !0;
                      }
                  }
                  return C
                    ? "_relationship" in A
                      ? A._relationship(c)
                      : ((A._value = c), (A._access |= 4), "true")
                    : ((a = 406), "false");
                }
                return (a = 351), "false";
              }),
              (this.constructor.prototype.GetValueForItemById = function (
                e,
                n
              ) {
                switch (((r = "GetValue('" + e + "')"), o)) {
                  case 0:
                    return (a = 122), "false";
                  case 2:
                    return (a = 123), "false";
                }
                a = 0;
                for (var t = e.split("."), i = l.getData(n); t.length; ) {
                  e = t.shift();
                  var c = parseInt(e);
                  if (isNaN(c)) {
                    if (!(e in i)) return (a = 401), "";
                    i = i[e];
                  } else {
                    if (!("_items" in i)) return (a = 301), "";
                    if (!(i._items.length > c)) return (a = 301), "";
                    i = i._items[c];
                  }
                }
                return i instanceof Object && "_value" in i
                  ? 0 != (8 & i._access)
                    ? ((a = 402), "")
                    : 0 == (1 & i._access)
                    ? ((a = 405), "")
                    : 0 == (4 & i._access)
                    ? ((a = 403), "")
                    : i._value
                  : ((a = 301), "");
              }),
              (this.constructor.prototype.GetNewTimeIntervalObject = function (
                e
              ) {
                return new t(e);
              }),
              (this.constructor.prototype.GetNewTimeObject = function () {
                return new n();
              }),
              (this.constructor.prototype.startLO = function (e) {
                return (g = l.getData(e)), !0;
              });
          })();
          t.exports = r;
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(65);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-tabs {\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.skin-tabs-header {\r\n    margin-left: 0.5em;\r\n    justify-content: flex-start;\r\n    align-items: flex-end;\r\n}\r\n\r\n.skin-tabs-body {\r\n    flex-grow: 1;\r\n    position: relative;\r\n    border: 1px solid gray;\r\n    border-radius: 3px;\r\n}\r\n\r\n.skin-page-title {\r\n    border: 1px solid gray;\r\n    padding: .2em .5em;\r\n    margin: 0 .1em 1px .1em;\r\n    cursor: pointer;\r\n    min-width: 4em;\r\n    min-height: 1em;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n    border-bottom: none;\r\n    flex: 0 0 auto;\r\n    box-sizing: border-box;\r\n    background-color: #fff;\r\n}\r\n\r\n.skin-page-title:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.skin-page-title.active {\r\n    font-weight: bold;\r\n    margin-bottom: -1px;\r\n    border-bottom: 3px solid transparent;\r\n    z-index: 1;\r\n    min-height: 1.6em;\r\n}\r\n/*\r\n.skin-tabs .skin-page-title:hover {\r\n    background-color: rgba(0,128,128,.1);\r\n}\r\n*/\r\n.skin-page-body {\r\n    flex-direction: column;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    padding: .5em;\r\n    box-sizing: border-box;\r\n    overflow: auto;\r\n    background-color: #fff;\r\n}\r\n\r\n.skin-page-body.active {\r\n    visibility: visible;\r\n}\r\n\r\n.skin-page-body p {\r\n    margin: 0;\r\n    margin-bottom: .5em;\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(90),
            (r.exports = function (e, n, t) {
              var r,
                o = t.uniview.ixml,
                a = !0;
              var i,
                c = null;
              return (
                t.on("app.procedure.didChangePlayerState", function () {
                  clearTimeout(i);
                  var e = Array.prototype.slice
                    .call(
                      document.querySelectorAll(
                        '.active a.link[data-link="link3d"][data-context="part"], .active a.link[data-link="link3d"][data-context="item"]'
                      )
                    )
                    .map(function (e) {
                      return e.dataset.key;
                    });
                  (c = Array.prototype.slice
                    .call(
                      document.querySelectorAll(
                        'a.link[data-link="link3d"][data-context="part"], a.link[data-link="link3d"][data-context="item"]'
                      )
                    )
                    .sort(function (n, t) {
                      var r = n.dataset.key,
                        o = t.dataset.key,
                        a = e.indexOf(r) < 0 ? 0 : 1,
                        i = e.indexOf(o) < 0 ? 0 : 1;
                      return a > i ? 1 : a < i ? -1 : 0;
                    })),
                    (function e() {
                      for (
                        var n, r = new Date();
                        c && c.length && new Date() - r < 10;

                      )
                        (n = c.pop()),
                          o
                            .getObjects(n.dataset.key.split(" "))
                            .some(function (e) {
                              return 0 === t.app.getObjectVisibility(e);
                            })
                            ? n.classList.remove("disabled")
                            : n.classList.add("disabled");
                      c && c.length ? (i = setTimeout(e)) : (c = null);
                    })();
                }),
                {
                  resolveImages: function (e) {
                    e
                      .querySelectorAll("img, video, audio")
                      .forEach(function (e) {
                        var n = e.getAttribute("src") || "",
                          o = t.uniview.options.UseCompressedSVG
                            ? ".svgz"
                            : ".svg";
                        (n = n.replace(/\.cgm$/i, o)),
                          (e.src = a
                            ? r
                              ? t.app.getResourceUrl(r.replace(/[^\\\/]+$/, n))
                              : t.app.getResourceUrl(n)
                            : t.app.getResourceUrl(n, r));
                      }),
                      e.querySelectorAll("object").forEach(function (e) {
                        var n = e.getAttribute("data") || "";
                        e.data = a
                          ? r
                            ? t.app.getResourceUrl(r.replace(/[^\\\/]+$/, n))
                            : t.app.getResourceUrl(n)
                          : t.app.getResourceUrl(n, r);
                      });
                  },
                  resolveLinks: function (e) {
                    n.disable3DLink &&
                      e
                        .querySelectorAll(".link[data-link=link3d]")
                        .forEach(function (e) {
                          e.classList.remove("link3d"),
                            e.classList.remove("link");
                        });
                    var t,
                      r,
                      o,
                      a =
                        "function" == typeof n.testDataLink
                          ? n.testDataLink
                          : function () {
                              return !0;
                            },
                      i = n.handlers || {};
                    e.querySelectorAll(".link").forEach(function (e) {
                      (r = e.getAttribute("data-link")) && a.call(e, r)
                        ? ((e.onclick = function (e) {
                            for (t = !1, o = e.target; o && o.classList && !t; )
                              (t = o.classList.contains("filterHide")),
                                (o = o.parentNode);
                            if (!t) {
                              var n = this.getAttribute("data-link");
                              "function" == typeof i[n]
                                ? i[n].call(this, e)
                                : console.error("No handler for " + n);
                            }
                            e.stopPropagation();
                          }),
                          e.querySelectorAll("a[href]").forEach(function (e) {
                            e.addEventListener("click", function (e) {
                              e.stopPropagation();
                            });
                          }))
                        : e.classList.remove("link");
                    });
                  },
                  documentTemplateHtml: function () {
                    return Promise.resolve(
                      o.json.$("SimulationInteractivity/DocumentTemplate")[0]
                    ).then(function (e) {
                      if (n.preventFetchDocument) return "";
                      if (!e && !n.documentTemplateURL)
                        return (
                          console.error(
                            "<DocumentTemplate> node not found in the interactivity.xml. Switching to comments view."
                          ),
                          ""
                        );
                      var o = n.documentTemplateURL || e.$attr("src");
                      if (!o) return e.$text();
                      var i = t.app.getResourceUrl(o);
                      return t.app.util
                        .loadResource(i)
                        .then(function (e) {
                          return (
                            (a = /^blob:/i.test(i)),
                            (r = a ? o : i),
                            e.response
                              ? Promise.resolve(e.response)
                              : Promise.reject()
                          );
                        })
                        .catch(function () {
                          return (
                            console.error(
                              'Failed loading external document template from "' +
                                i +
                                '".'
                            ),
                            Promise.resolve(e ? e.$text() : "")
                          );
                        });
                    });
                  },
                }
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o, a, i;
          r.exports = {
            link2d: function (e) {
              var n;
              (e = e || Cortona3DSolo),
                i &&
                  ((e.app.drawing.isVisible() &&
                    ((n = e.app.drawing.svg.parentNode).offsetWidth ||
                      n.offsetHeight)) ||
                    (e.app.drawing.selectHotspot(i, ""), (i = null))),
                Cortona3DSolo.dispatch("uniview.showAllPanels"),
                e.dispatch("uniview.link2d", this);
              var t = e.uniview.options.UseCompressedSVG ? ".svgz" : ".svg",
                r = this.dataset.src.replace(/\.cgm$/i, t),
                c =
                  (this.dataset.title || this.title,
                  this.dataset.referredfragment),
                l = this.dataset.figure,
                g = "true" === (this.dataset.linkbyname || "true");
              function d(n) {
                var t = i === n;
                i && (e.app.drawing.selectHotspot(i, ""), (i = null)),
                  !t && n && (e.app.drawing.selectHotspot(n), (i = n));
              }
              e.uniview.with3D
                ? (e.app.procedure.toggleDrawingDisplayMode(!0),
                  e.app.procedure.pause())
                : (r = e.uniview.doc.baseURL + r),
                r === o || (g && l === a && e.app.drawing.hotspotExists(c))
                  ? d(c)
                  : e.app.drawing.load(r).then(function () {
                      e.app.drawing.show(!0),
                        (o = r),
                        (a = l),
                        (i = null),
                        d(c);
                    });
            },
            link3d: function (e) {
              if (
                ((e = e || Cortona3DSolo), !this.classList.contains("disabled"))
              ) {
                Cortona3DSolo.dispatch("uniview.showAllPanels"),
                  e.dispatch("uniview.link3d", this);
                var n = this.dataset,
                  t = e.uniview.ixml;
                switch (e.uniview.doc.type) {
                  case "procedure":
                    var r =
                      void 0 !== n.autoplay || n.figure || n.multimediatype
                        ? +n.autoplay
                        : e.uniview.options.StartAfterNavigate;
                    switch (
                      (e.app.procedure.toggleDrawingDisplayMode(!1),
                      t || (t = {}),
                      t.getObjects ||
                        (t.getObjects = function (n) {
                          return (
                            Array.isArray(n) || (n = [n]),
                            n.map(e.app.getObjectWithName)
                          );
                        }),
                      n.context)
                    ) {
                      case "part":
                      case "item":
                        e.app.procedure.clearAllAttentions(),
                          e.app.procedure.drawAttention(
                            t.getObjects(n.key.split(" "))
                          );
                        break;
                      default:
                        e.app.procedure.seekToSubstep(n.key),
                          r && e.app.procedure.play();
                    }
                    break;
                  case "ipc":
                    switch (n.context) {
                      case "item":
                        var o = t.getRowByItem(n.key);
                        if (o >= 0) {
                          var a =
                            t.getItemInfo(o).sheetId ||
                            t.getSheetsForRow(o)[0].id;
                          e.app.ipc.selectSheet(a).then(function () {
                            var r = t.getIndexByItem(n.key);
                            e.dispatch("app.ipc.didSelectItem", -1),
                              e.dispatch("app.ipc.didSelectItem", r),
                              setTimeout(function () {
                                e.app.ipc.fitItem(r, !0);
                              }, 0),
                              e.once(
                                "app.drawing.didFinishLoadDrawing",
                                function () {
                                  e.app.drawing.selectItem(r, !0);
                                }
                              );
                          });
                        }
                        break;
                      default:
                        e.app.ipc.selectSheet(n.key);
                    }
                }
              }
            },
            footnote: function (e) {
              function n(e) {
                r.remove(),
                  o.forEach(function (e) {
                    i.removeEventListener(e, n);
                  }),
                  r.emit("close");
              }
              var r;
              e = e || Cortona3DSolo;
              var o = [
                  "mousedown",
                  "wheel",
                  "blur",
                  "pointerdown",
                  "touchstart",
                ],
                a = e.skin.get("app"),
                i = a.element;
              if (a) {
                (r = a.render(t(6))).element.classList.add("footnote-popup");
                var c = this.querySelector(".footnoteBody"),
                  l = c ? c.cloneNode(!0) : "";
                r.emit("open", {
                  content: l,
                  x: this.getBoundingClientRect().left + 4,
                  y: this.getBoundingClientRect().top + 4,
                  target: i,
                }),
                  o.forEach(function (e) {
                    i.addEventListener(e, n);
                  });
              }
            },
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o,
            a,
            i = t(47),
            c = Cortona3DSolo;
          function l(e) {
            e ? i.initialize(e) : i.initialize();
          }
          function g() {
            i.isTerminated() ||
              (c.training.isActive()
                ? (i.set(
                    "cmi.session_time",
                    "PT" + c.training.getSessionTime() + "S"
                  ),
                  i.set("cmi.exit", "suspend"))
                : i.set("cmi.exit", "logout"),
              i.terminate());
          }
          r.exports = {
            loadPage: l,
            loadPageExpand: function () {
              l();
              var e = i.get("cmi.completion_status");
              ("not attempted" != e && "unknow" != e) ||
                i.set("cmi.completion_status", "incomplete"),
                "unknow" == i.get("cmi.success_status") &&
                  i.set("cmi.success_status", "unknown"),
                (a = !1),
                (o = new Date().getTime());
            },
            unloadPage: g,
            unloadPageExpand: function () {
              1 != a &&
                (c.training.hasQuestions ||
                  (i.set("cmi.completion_status", "completed"),
                  i.set("cmi.success_status", "passed")),
                i.set("cmi.exit", "suspend"),
                (function () {
                  if (0 != o)
                    var e = (function (e) {
                      var n,
                        t,
                        r,
                        o,
                        a,
                        i,
                        c,
                        l = "";
                      (n = Math.floor(e / 10)),
                        (c = Math.floor(n / 315576e4)),
                        (n -= 315576e4 * c),
                        (i = Math.floor(n / 26298e4)),
                        (n -= 26298e4 * i),
                        (a = Math.floor(n / 864e4)),
                        (n -= 864e4 * a),
                        (o = Math.floor(n / 36e4)),
                        (n -= 36e4 * o),
                        (r = Math.floor(n / 6e3)),
                        (n -= 6e3 * r),
                        (t = Math.floor(n / 100)),
                        c > 0 && (l += c + "Y");
                      i > 0 && (l += i + "M");
                      a > 0 && (l += a + "D");
                      (n -= 100 * t) + t + r + o > 0 &&
                        ((l += "T"),
                        o > 0 && (l += o + "H"),
                        r > 0 && (l += r + "M"),
                        n + t > 0 &&
                          ((l += t), n > 0 && (l += "." + n), (l += "S")));
                      "" == l && (l = "0S");
                      return (l = "P" + l);
                    })(new Date().getTime() - o);
                  i.set("cmi.session_time", e);
                })(),
                (a = !0),
                i.terminate());
            },
            scenarioStart: function () {
              (c.training.username = i.get("cmi.learner_name")),
                c.training.isExam()
                  ? (i.set("cmi.completion_status", "incomplete"),
                    i.set("cmi.success_status", "unknown"),
                    i.set("cmi.score.min", "0"),
                    i.set("cmi.score.max", "100"),
                    i.set("cmi.score.raw", "0"),
                    i.set("cmi.score.scaled", "0"))
                  : "completed" !== i.get("cmi.completion_status") &&
                    i.set("cmi.completion_status", "incomplete");
            },
            scenarioFinish: function () {
              var e,
                n = "PT" + c.training.getSessionTime() + "S",
                t = c.training.getSuccessStatus(),
                r = c.training.getScaledScore();
              i.set("cmi.session_time", n),
                t &&
                  (i.set("cmi.completion_status", "completed"),
                  i.set("cmi.success_status", t)),
                c.training.isExam() &&
                  (i.set("cmi.score.raw", String(Math.round(100 * r))),
                  i.set(
                    "cmi.score.scaled",
                    String(((e = r), Math.round(100 * e) / 100))
                  ),
                  t && g());
            },
            loadScenario: function () {},
            stepStarted: function () {},
            stepFinished: function () {},
            stepFailed: function () {},
            setScore: function (e, n, t) {
              i.set("cmi.score.raw", e),
                i.set("cmi.score.min", "0"),
                i.set("cmi.score.max", n),
                i.set("cmi.score.scaled", t);
              var r = i.get("cmi.scaled_passing_score");
              r || (r = 0.7),
                r <= t
                  ? (i.set("cmi.success_status", "passed"),
                    i.set("cmi.completion_status", "completed"))
                  : i.set("cmi.success_status", "failed");
            },
            isStub: function () {
              return i.isStub();
            },
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(122);
          var o = t(6),
            a = t(38);
          r.exports = function (e, n, r) {
            var i,
              c = r.uniview.i18n["solo-skin-document-filter"] || {},
              l = r.app.util.defineClass;
            r.on("app.drawing.didFinishLoadDrawing", function (e) {
              i = e;
            });
            var g,
              d,
              A = t(81),
              I = t(92),
              s = l(
                null,
                function (e) {
                  (this.inline = void 0), (this.global = void 0);
                },
                {
                  add: function (e) {
                    "inline" == e.type && e.filter && (this.inline = e.filter),
                      "global" == e.type &&
                        e.filter &&
                        (this.global = e.filter);
                  },
                }
              ),
              C = l(
                null,
                function (e) {
                  (this.attribute = e.getAttribute("data-filter-attr")),
                    (this.value = e.getAttribute("data-filter-value")),
                    (this.action = e.getAttribute("data-filter-action"));
                },
                {}
              ),
              u = l(
                null,
                function () {
                  (this.HTMLElement = document.createElement("div")),
                    this.HTMLElement.classList.add("filter"),
                    this.setDefaultValue(this.HTMLElement);
                },
                {
                  isEmpty: function () {
                    return !0;
                  },
                  fill: function () {
                    throw new Error("Must be override");
                  },
                  get: function () {
                    throw new Error("Must be override");
                  },
                  getExcludeNodes: function () {
                    throw new Error("Must be override");
                  },
                  setApplyHandler: function (e) {
                    this.applyHandler = e;
                  },
                  setDefaultValue: function (e) {
                    e = e || this.HTMLElement;
                    for (var n = this.applyHandler; e.firstChild; )
                      e.removeChild(e.firstChild);
                    return (
                      this.fill(),
                      this.get().forEach(function (t) {
                        e.appendChild(t.toHTMLFilter(n));
                      }),
                      e
                    );
                  },
                }
              ),
              p = l(
                u,
                function () {
                  (this.products = []), this.constructor.superClass.call(this);
                },
                {
                  isEmpty: function () {
                    return 0 === this.products.length;
                  },
                  get: function () {
                    return this.products;
                  },
                  fill: function () {
                    this.products = [];
                    var n = document.querySelector(".referencedApplicGroup"),
                      t = this;
                    n &&
                      (e.toggle(n, !1),
                      n.querySelectorAll(".applic").forEach(function (e) {
                        t.addProduct(new b(e));
                      }));
                  },
                  addProduct: function (e) {
                    e.id && this.products.push(e);
                  },
                  getExcludeNodes: function () {
                    for (
                      var e = this.HTMLElement.querySelectorAll(".filter__row"),
                        n = [],
                        t = 0;
                      t < e.length;
                      t++
                    ) {
                      var r = new C(e[t]);
                      if ("exclude" == r.action)
                        for (
                          var o = "*[" + r.attribute + '="' + r.value + '"]',
                            a = document.querySelectorAll(o),
                            i = 0;
                          i < a.length;
                          i++
                        )
                          n.push(a[i]);
                    }
                    return n;
                  },
                }
              ),
              f = l(
                null,
                function () {
                  this.displayText = "";
                },
                {
                  toHTMLFilter: function (e) {
                    throw new Error("Must be override");
                  },
                  toString: function () {
                    return "id: " + this.id + " value: " + this.expression;
                  },
                }
              ),
              b = l(
                f,
                function (e) {
                  this.constructor.superClass.call(this),
                    e.id &&
                      ((this.applic = new I(e)), (this.id = this.applic.id));
                },
                {
                  toHTMLFilter: function (e) {
                    function n(e, n, t) {
                      var r = document.createElement(e);
                      if (n)
                        for (
                          var o = n.replace(/\s+/, " ").split(" "), a = 0;
                          a < o.length;
                          a++
                        )
                          r.classList.add(o[a]);
                      return t && (r.innerHTML = t), r;
                    }
                    var t = n("div", "filter__row");
                    t.setAttribute("data-filter-attr", "data-applicrefid"),
                      t.setAttribute("data-filter-value", this.id),
                      t.setAttribute("data-filter-action", "include");
                    var o = n("div", "filter__attribute", this.id),
                      a = n(
                        "div",
                        "filter__value",
                        this.applic.toInlineApplicString()
                      ),
                      i = n("div", "filter__action"),
                      l = document.createElement("select"),
                      g = new Option(c.exclude, "exclude"),
                      d = new Option(c.include, "include");
                    return (
                      (d.defaultSelected = !0),
                      (d.selected = !0),
                      l.appendChild(g),
                      l.appendChild(d),
                      l.addEventListener("change", function () {
                        var n = l.selectedIndex,
                          o = l.options[n].value;
                        t.setAttribute("data-filter-action", o),
                          e &&
                            (e(),
                            r.dispatch("uniview.doc.filterChanged", t.dataset));
                      }),
                      i.appendChild(l),
                      t.appendChild(o),
                      t.appendChild(a),
                      t.appendChild(i),
                      t
                    );
                  },
                }
              ),
              h = l(
                u,
                function () {
                  (this.ATTRIBUTES = [
                    "audience",
                    "product",
                    "platform",
                    "props",
                    "otherprops",
                  ]),
                    (this.props = []),
                    this.constructor.superClass.call(this);
                },
                {
                  isEmpty: function () {
                    return 0 === this.props.length;
                  },
                  get: function () {
                    return this.props;
                  },
                  fill: function () {
                    this.props = [];
                    for (var e = 0; e < this.ATTRIBUTES.length; e++)
                      for (
                        var n = "data-" + this.ATTRIBUTES[e],
                          t = document.querySelectorAll("*[" + n + "]"),
                          r = 0;
                        r < t.length;
                        r++
                      )
                        for (
                          var o = t[r]
                              .getAttribute(n)
                              .replace(/(^\s+|\s+$)/, "")
                              .replace(/\s+/g, " ")
                              .split(" "),
                            a = 0;
                          a < o.length;
                          a++
                        ) {
                          var i = new m(this.ATTRIBUTES[e], o[a], "");
                          this.addProp(i);
                        }
                  },
                  addProp: function (e) {
                    for (var n = !1, t = 0; t < this.props.length; t++)
                      if (
                        this.props[t].attr == e.attr &&
                        this.props[t].value == e.value &&
                        this.props[t].action == e.action
                      ) {
                        n = !0;
                        break;
                      }
                    n || this.props.push(e);
                  },
                  getExcludeNodes: function () {
                    for (
                      var e = new (function () {
                          (this.map = []),
                            (this.addToMap = function (e) {
                              this.map.push(e);
                            }),
                            (this.getActionForAttrAndValue = function (e, n) {
                              for (var t = "", r = 0; r < this.map.length; r++)
                                this.map[r].attribute == e &&
                                  this.map[r].value == n &&
                                  (t = this.map[r].action);
                              return t;
                            });
                        })(),
                        n = this.HTMLElement.querySelectorAll(".filter__row"),
                        t = 0;
                      t < n.length;
                      t++
                    ) {
                      var r = new C(n[t]);
                      e.addToMap(r);
                    }
                    var o = "";
                    for (t = 0; t < this.ATTRIBUTES.length; t++) {
                      (o += "*[data-" + this.ATTRIBUTES[t] + "]"),
                        t != this.ATTRIBUTES.length - 1 && (o += ", ");
                    }
                    var a = document.querySelectorAll(o),
                      i = [];
                    e: for (t = 0; t < a.length; t++)
                      for (var c = a[t], l = 0; l < this.ATTRIBUTES.length; l++)
                        if (c.getAttribute("data-" + this.ATTRIBUTES[l])) {
                          for (
                            var g = this.ATTRIBUTES[l],
                              d = c
                                .getAttribute("data-" + g)
                                .replace(/(^\s+|\s+$)/, "")
                                .replace(/\s+/g, " ")
                                .split(" "),
                              A = !1,
                              I = 0;
                            I < d.length;
                            I++
                          ) {
                            "include" == e.getActionForAttrAndValue(g, d[I]) &&
                              (A = !0);
                          }
                          if (!A) {
                            i.push(c);
                            continue e;
                          }
                        }
                    return i;
                  },
                }
              ),
              m = l(
                f,
                function (e, n, t) {
                  this.constructor.superClass.call(this);
                  (this.DEFAULT_ACTION = "include"),
                    (this.attr = e),
                    (this.value = n),
                    (this.action =
                      t && { include: !0, exclude: !0 }[t]
                        ? t
                        : this.DEFAULT_ACTION);
                },
                {
                  toHTMLFilter: function (e) {
                    function n(e, n, t) {
                      var r = document.createElement(e);
                      if (n)
                        for (
                          var o = n.replace(/\s+/, " ").split(" "), a = 0;
                          a < o.length;
                          a++
                        )
                          r.classList.add(o[a]);
                      return t && (r.innerHTML = t), r;
                    }
                    var t = n("div", "filter__row");
                    t.setAttribute("data-filter-attr", this.attr),
                      t.setAttribute("data-filter-value", this.value),
                      t.setAttribute("data-filter-action", this.action);
                    var o = n("div", "filter__attribute", this.attr),
                      a = n("div", "filter__value", this.value),
                      i = n("div", "filter__action"),
                      l = document.createElement("select"),
                      g = new Option(c.exclude, "exclude"),
                      d = new Option(c.include, "include");
                    return (
                      "include" == this.DEFAULT_ACTION
                        ? ((d.defaultSelected = !0), (d.selected = !0))
                        : ((g.defaultSelected = !0), (g.selected = !0)),
                      l.appendChild(g),
                      l.appendChild(d),
                      l.addEventListener("change", function () {
                        var n = l.selectedIndex,
                          o = l.options[n].value;
                        t.setAttribute("data-filter-action", o),
                          e &&
                            (e(),
                            r.dispatch("uniview.doc.filterChanged", t.dataset));
                      }),
                      i.appendChild(l),
                      t.appendChild(o),
                      t.appendChild(a),
                      t.appendChild(i),
                      t
                    );
                  },
                }
              );
            var v = document.querySelector(".doc-container");
            (g = new p()).isEmpty() &&
              (g = new h()).isEmpty() &&
              v.classList.remove("app-filter"),
              g.setApplyHandler(function () {
                document.querySelectorAll(".filterHide").forEach(function (e) {
                  e.classList.remove("filterHide");
                }),
                  g.getExcludeNodes().forEach(function (e) {
                    e.classList.add("filterHide");
                  });
                var e = !0;
                if (i) {
                  var n = document.querySelector(
                    '.graphic[data-src *= "' + i.replace(/\.[^.]+$/, "") + '"]'
                  );
                  if (!n) return e;
                  do {
                    (e = !n.classList.contains("filterHide")),
                      (n = n.parentNode);
                  } while (n.parentNode && e);
                }
                e ||
                  (r.app.drawing.isVisible() &&
                    (r.core
                      ? r.app.procedure.toggleDrawingDisplayMode(!1)
                      : r.dispatch("uniview.toggleAuxPanelOnlyMode", !0))),
                  (T.disabled = !1);
              });
            var y = g.HTMLElement;
            try {
              var w = (function (e, n) {
                for (
                  var t = r.uniview.ixml.json.$(
                      "SimulationInteractivity/SimulationInformation/metadata/value"
                    ),
                    o = 0;
                  o < t.length;
                  o++
                ) {
                  var a = t[o];
                  if (a.$attr("decl-id") == e)
                    return n ? JSON.parse(a.$text()) : a.$text();
                }
              })("$PCTDATA", !0) || { products: [] };
              if (w && w.products) {
                var S = l(
                    u,
                    function (e) {
                      (this.products = []),
                        (this.pctObject = new A({ data: e })),
                        (this.inlineApplics = (function () {
                          for (
                            var e = [],
                              n = v.querySelectorAll(
                                ".referencedApplicGroup .applic"
                              ),
                              t = 0;
                            t < n.length;
                            t++
                          ) {
                            var r = n.item(t),
                              o = new I(r);
                            e.push(o);
                          }
                          return e;
                        })()),
                        this.constructor.superClass.call(this);
                    },
                    {
                      isEmpty: function () {
                        return (
                          this.pctObject && 0 === this.pctObject.products.length
                        );
                      },
                      get: function () {
                        return this.products;
                      },
                      fill: function () {
                        (this.products = []),
                          this.addProduct(new k(this.pctObject));
                      },
                      addProduct: function (e) {
                        this.products.push(e);
                      },
                      getExcludeNodes: function (e) {
                        var n;
                        if (e)
                          (this.pctObject = new A({ data: e })),
                            (n = this.pctObject.getProductByArgs({ count: 1 }));
                        else {
                          var t =
                            this.HTMLElement.querySelectorAll(
                              ".pct__table"
                            )[0].getAttribute("data-filter-action");
                          n = this.pctObject.getProductByArgs({ id: t });
                        }
                        for (
                          var r = [], o = 0;
                          o < this.inlineApplics.length;
                          o++
                        ) {
                          var a = this.inlineApplics[o].filteredByProduct(n);
                          if (a && !a.state)
                            for (
                              var i = '*[data-applicRefId="' + a.id + '"]',
                                c = document.querySelectorAll(i),
                                l = 0;
                              l < c.length;
                              l++
                            )
                              r.push(c[l]);
                        }
                        return r;
                      },
                    }
                  ),
                  k = l(
                    f,
                    function (e) {
                      (this.pctObject = e),
                        this.constructor.superClass.call(this);
                    },
                    {
                      toHTMLFilter: function (n) {
                        function t() {
                          document
                            .querySelectorAll(".pct__table .pct__row")
                            .forEach(function (e) {
                              e.classList.remove("applied");
                            });
                          var e = this.getAttribute("data-productId");
                          this.classList.add("applied"),
                            o.setAttribute("data-filter-action", e),
                            n && n(),
                            r.dispatch("uniview.doc.filterChanged", o.dataset);
                        }
                        for (
                          var o = e.create(".pct__table"), a = 0;
                          a < this.pctObject.products.length;
                          a++
                        ) {
                          var i = e.create(".pct__description"),
                            c = e.create(".pct__row", i),
                            l = this.pctObject.products[a];
                          l.toArrString().forEach(function (n) {
                            i.appendChild(e.create("", n));
                          }),
                            o.appendChild(c),
                            c.setAttribute("data-productId", l.id),
                            c.addEventListener("click", t);
                        }
                        return o;
                      },
                    }
                  );
                if (
                  ((d = new S(w)).setApplyHandler(function (e) {
                    document
                      .querySelectorAll(".filterHide")
                      .forEach(function (e) {
                        e.classList.remove("filterHide");
                      }),
                      d.getExcludeNodes(e).forEach(function (e) {
                        e.classList.add("filterHide");
                      });
                    var n = !0;
                    if (i) {
                      var t = document.querySelector(
                        '.graphic[data-src *= "' +
                          i.replace(/\.[^.]+$/, "") +
                          '"]'
                      );
                      if (!t) return n;
                      do {
                        (n = !t.classList.contains("filterHide")),
                          (t = t.parentNode);
                      } while (t.parentNode && n);
                    }
                    n ||
                      (r.app.drawing.isVisible() &&
                        (r.core
                          ? r.app.procedure.toggleDrawingDisplayMode(!1)
                          : r.dispatch("uniview.toggleAuxPanelOnlyMode", !0))),
                      (T.disabled = !1);
                  }),
                  w.products.length)
                ) {
                  var x = e.create(a);
                  (y = e.container(".filter-tabs")).append(x.element),
                    g.isEmpty() ||
                      x.emit("append", c.UI_TXT_TAB_INLINE, g.HTMLElement),
                    x.emit("append", c.UI_TXT_TAB_PCT, d.HTMLElement);
                }
              }
            } catch (e) {}
            var T = e.button({ onclick: P, disabled: !0 }, c.clear);
            function P() {
              document.querySelectorAll(".filterHide").forEach(function (e) {
                e.classList.remove("filterHide");
              }),
                g && g.setDefaultValue(),
                g && g.HTMLElement.classList.add("applied"),
                d && d.setDefaultValue(),
                d && d.HTMLElement.classList.remove("applied"),
                (T.disabled = !0);
            }
            var D = e.create(o, {
              closable: !0,
              content: [
                y,
                e.container(
                  ".footer",
                  T,
                  e.button(
                    {
                      onclick: function () {
                        D.emit("close");
                      },
                    },
                    c.close
                  )
                ),
              ],
            });
            D.classList.add("panel-filter");
            var R = new s();
            return (
              R.add({ type: "inline", filter: g }),
              R.add({ type: "global", filter: d }),
              g && g.setDefaultValue(),
              g && g.HTMLElement.classList.add("applied"),
              d && d.setDefaultValue(),
              (g || d) && v.classList.add("app-filter"),
              r.on("structure.iframe.applyPCTFilter", function (e) {
                P(),
                  e.pctFilter
                    ? (d.applyHandler(e.pctFilter),
                      r.dispatch("uniview.doc.filterChanged", {}),
                      r.dispatch(
                        "uniview.doc.filter.setDocumentFilterState",
                        !1
                      ))
                    : r.dispatch(
                        "uniview.doc.filter.setDocumentFilterState",
                        !0
                      );
              }),
              r.on("uniview.doc.filterChanged", function (e) {
                e.filterAttr
                  ? (d && d.setDefaultValue(),
                    d && d.HTMLElement.classList.remove("applied"),
                    g && g.HTMLElement.classList.add("applied"))
                  : (g && g.setDefaultValue(),
                    g && g.HTMLElement.classList.remove("applied"),
                    d && d.HTMLElement.classList.add("applied"));
              }),
              n.pctFilter &&
                r.dispatch("structure.iframe.applyPCTFilter", {
                  pctFilter: n.pctFilter,
                }),
              (D.isEmpty = g.isEmpty() && d.isEmpty()),
              D
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = r.uniview.i18n.ui,
              a = t(4),
              i = t(2),
              c = n.disableExpandButton
                ? ""
                : e.create(a, { panelName: "Aux" }).$el,
              l = e.container(".right");
            if (n.filterComponent && !n.filterComponent.isEmpty) {
              var g = e.create(i, {
                type: "button",
                name: "ShowFilter",
                label: o.filter,
                title: o.titleFilter,
                onchange: function (e) {
                  n.filterComponent.emit("toggle", e);
                },
              });
              l.append(g),
                n.filterComponent.on("closed", function () {
                  r.uniview.settings.ShowFilter = !1;
                }),
                r.on("uniview.doc.filter.setDocumentFilterState", function (e) {
                  g.disabled = !e;
                }),
                n.pctFilter && (g.disabled = !0);
            }
            l.append(c);
            var d = e.toolbar(".main.top", e.container(".left"), l);
            return this.exports(d);
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          var r,
            o,
            a = Cortona3DSolo,
            i = a.app.procedure,
            c = i.interactivity,
            l =
              c &&
              !!c.json.$text(
                "SimulationInteractivity/SimulationInformation/DocumentFile"
              ),
            g = !1,
            d = null,
            A = null,
            I = i.RANGE_VALUE_CURRENT_STEP,
            s = 0,
            C = a.app.util.Vec3f;
          if (i && "function" != typeof i.drawAttention) {
            var u = i.backward,
              p = i.forward,
              f = i.seekToSubstep;
            (i.defaultSeekMode = i.SEEK_TO_CUE_POINT),
              c &&
                a.on("app.procedure.didEnterSubstepWithName", function (e) {
                  o = e;
                  var n = (I = k(e)) === c.getProcedureId(),
                    t = !1,
                    r = !1,
                    i = d;
                  if (i && !n) {
                    var l = i.indexOf(I);
                    (t = l < i.length - 1), (r = l > 0);
                  }
                  a.dispatch("app.procedure.didEnableForward", t),
                    a.dispatch("app.procedure.didEnableBackward", r);
                }),
              a.on("app.procedure.didChangePlayerState", function (e, n) {
                var t = void 0 === r ? 16777215 : n ^ r;
                (r = n),
                  (s = e),
                  1 & t &&
                    (h()
                      ? (a.dispatch("app.procedure.didPlay"),
                        a.app.procedure.requestPlayerState())
                      : a.dispatch("app.procedure.didStop")),
                  1024 & t &&
                    a.dispatch("app.procedure.didPlaySound", !!(1024 & n)),
                  256 & t &&
                    a.dispatch("app.procedure.didEnableForward", !!(256 & n)),
                  512 & t &&
                    a.dispatch("app.procedure.didEnableBackward", !!(512 & n)),
                  0 === e
                    ? (a.dispatch("app.procedure.onStartPosition"),
                      1 & t && h() && a.dispatch("app.procedure.didStart"))
                    : e >= a.app.procedure.duration &&
                      (a.dispatch("app.procedure.onEndPosition"),
                      1 & t && (h() || a.dispatch("app.procedure.didFinish")));
              }),
              Object.defineProperty(a.app.procedure, "locked", {
                get: function () {
                  return g;
                },
                set: function (e) {
                  (g = e)
                    ? m()
                    : i.setPlayRange &&
                      i.setPlayRange(
                        null,
                        null,
                        i.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION
                      );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(a.app.procedure, "played", {
                get: h,
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(a.app.procedure, "position", {
                get: function () {
                  return s;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(a.app.procedure, "context", {
                get: function () {
                  return [].concat(d || []);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(a.app.procedure, "state", {
                get: function () {
                  return r;
                },
                enumerable: !0,
                configurable: !0,
              });
            var b = {};
            a.expand(a.app.procedure, {
              toggleDrawingDisplayMode: function (e) {
                a.dispatch("app.procedure.didDrawingDisplayMode", e),
                  a.app.drawing.show(e),
                  a.app.ui.showCanvas(!e);
              },
              getContextItemId: k,
              getActiveItemId: function (e) {
                var n = e,
                  t = c.getProcedureItemInfo(n),
                  r = c.getProcedureItemInfo(P(n));
                if (t && "action" === t.type && !T(n))
                  if ((r.children && r.children.length) || r.actions.some(T)) {
                    var o = D(r.raw["@children"] || []),
                      a = 0,
                      i = o.indexOf(n);
                    if (o.some(T)) {
                      do {
                        n = o[i + (a = 0 === a ? -1 : a < 0 ? -a : -a - 1)];
                      } while (!T(n));
                      if ("step" === (t = c.getProcedureItemInfo(n)).type) {
                        var l = (function e(n) {
                          var t = [],
                            r = c.getProcedureItemInfo(n);
                          switch (r.type) {
                            case "action":
                              r.comment && (t = [n]);
                              break;
                            case "step":
                              t =
                                (r.children && r.children.length) ||
                                r.actions.some(T)
                                  ? D(r.raw["@children"] || [])
                                      .filter(T)
                                      .reduce(function (n, t) {
                                        return n.concat(e(t));
                                      }, [])
                                  : [n];
                          }
                          return t;
                        })(n);
                        l.length && (n = a > 0 ? l[0] : l[l.length - 1]);
                      }
                    } else n = r.id;
                  } else n = r.id;
                return n;
              },
              isValidContextItem: T,
              hoverObject: function (e, n, t) {
                var r = [e],
                  o = a.app.getHoveredObjects();
                r.forEach(function (e) {
                  var t = o.indexOf(e);
                  n ? t < 0 && o.push(e) : t >= 0 && o.splice(t, 1);
                }),
                  a.app.setHoveredObjects(o, t);
              },
              hoverItem: function (e, n) {
                e &&
                  c
                    .getObjectNamesByDocId(e)
                    .map(a.app.getObjectWithName)
                    .forEach(function (e) {
                      a.app.procedure.hoverObject(e, n, !0);
                    });
              },
              selectItem: function (e, n, t) {
                if (e) {
                  var r = c
                      .getObjectNamesByDocId(e)
                      .map(a.app.getObjectWithName),
                    o = a.app.getSelectedObjects();
                  r.forEach(function (e) {
                    var t = o.indexOf(e);
                    n ? t < 0 && o.push(e) : t >= 0 && o.splice(t, 1);
                  }),
                    a.app.setSelectedObjects(o, t);
                }
              },
              isItemVisible: function (e) {
                return c
                  .getObjectNamesByDocId(e)
                  .map(a.app.getObjectWithName)
                  .some(function (e) {
                    return 0 === a.app.getObjectVisibility(e);
                  });
              },
              drawAttention: function (e, n) {
                if (!(a.app.selectionMode > 0)) {
                  var t = Array.isArray(e) ? e : [e];
                  return new Promise(function (e, r) {
                    var o,
                      i = !1;
                    function c(e) {
                      (i = arguments.length ? e : !i),
                        t.forEach(function (e) {
                          e && a.app.procedure.hoverObject(e, i, !0);
                        });
                    }
                    function l() {
                      clearInterval(o), delete b[o], c(!1), e();
                    }
                    (n = n || 3),
                      a.app.fitObjectsInView(t, !0, 0.5),
                      (o = setInterval(c, 250)),
                      (b[o] = { finish: l, timeout: setTimeout(l, 1e3 * n) });
                  });
                }
              },
              drawAttentionEx: function (e, n, t) {
                t =
                  t ||
                  "Shape {                 geometry Sphere {}                 appearance Appearance {                     material Material {                         diffuseColor .8 .31 0                         specularColor .5 .5 .5                         emissiveColor .1 .1 .1                         ambientIntensity 0                         transparency .5                     }                 }             }";
                var r = Array.isArray(e) ? e : [e],
                  o = new Array(r.length);
                return new Promise(function (e, i) {
                  var c,
                    l = !1,
                    g = new Date();
                  function d(e) {
                    (l = arguments.length ? e : !l),
                      r.forEach(function (e) {
                        e && a.app.procedure.hoverObject(e, l, !0);
                      });
                  }
                  (n = n || 3),
                    a.app.fitObjectsInView(r, !0, 0.5),
                    r.forEach(function (e, n) {
                      if (e) {
                        var r = a.app.getObjectBoundingBox(e);
                        if (r) {
                          var i = new C(r.size).length() / 1.8,
                            c = a.app.createObjectsFromString(
                              "Transform { children Transform { scale " +
                                i +
                                " " +
                                i +
                                " " +
                                i +
                                " children " +
                                t +
                                " } }"
                            );
                          c && (a.app.addObjects(c, e), (o[n] = c[0]));
                        }
                      }
                    }),
                    (c = setInterval(d, 250));
                  var A = setInterval(function () {
                    var e = (new Date() - g) % 1e3,
                      n =
                        0.35 * (Math.cos(((e - 500) / 500) * Math.PI) + 1) +
                        0.3;
                    o.forEach(function (e) {
                      a.app.setObjectPropertyf(
                        e,
                        a.app.PROPERTY_SCALE,
                        !1,
                        n,
                        n,
                        n
                      );
                    });
                  }, 10);
                  function I() {
                    clearInterval(c),
                      clearInterval(A),
                      delete b[c],
                      d(!1),
                      r.map(function (e, n) {
                        e && a.app.removeObjects(o[n], e);
                      }),
                      e();
                  }
                  b[c] = { finish: I, timeout: setTimeout(I, 1e3 * n) };
                });
              },
              clearAllAttentions: function () {
                for (var e in b)
                  clearInterval(e), clearTimeout(b[e].timeout), b[e].finish();
              },
            }),
              a.expand(a.app.procedure, {
                forward: function (e) {
                  g && (i.stop(), i.setPlayRange());
                  var n = d;
                  if (n) {
                    for (var t = n.indexOf(I) + 1; t < n.length && !T(n[t]); )
                      t++;
                    t < n.length && f(n[t], e);
                  } else p(e);
                  g && m();
                },
                backward: function (e) {
                  g && (i.stop(), i.setPlayRange());
                  var n = d;
                  if (n) {
                    for (var t = n.indexOf(I) - 1; t >= 0 && !T(n[t]); ) t--;
                    t >= 0 && f(n[t], e);
                  } else u(e);
                  g && m();
                },
                seekToSubstep: w,
              }),
              c &&
                (a.expand(c, {
                  getObjects: function (e) {
                    var n = [],
                      t = Array.isArray(e) ? e : [e];
                    return (
                      (t = t.reduce(function (e, n) {
                        return e.concat(
                          c.getDocItemInfo(n) ? c.getObjectNamesByDocId(n) : n
                        );
                      }, [])).forEach(function (e) {
                        n.indexOf(e) < 0 && n.push(e);
                      }),
                      n.map(a.app.getObjectWithName)
                    );
                  },
                  getDocIdForObject: function (e) {
                    for (
                      var n = c.getDocIdByObjectName(a.app.getObjectName(e));
                      !n && e;

                    )
                      (e = a.app.getParentObject(e)),
                        (n = c.getDocIdByObjectName(a.app.getObjectName(e)));
                    return n;
                  },
                  getScreenTip: function (e) {
                    return (
                      (c.getDocItemInfo(c.getDocIdByObjectName(e)) || {})
                        .screentip || ""
                    );
                  },
                }),
                a.on("touch.didObjectEnter", function (e, n) {
                  var t = c.getDocIdForObject(e);
                  t && a.dispatch("procedure.didObjectEnter", t);
                }),
                a.on("touch.didObjectOut", function (e, n) {
                  var t = c.getDocIdForObject(e);
                  t && a.dispatch("procedure.didObjectOut", t);
                }),
                a.on("touch.didObjectClick", function (e, n, t, r, o, i, l) {
                  var g = c.getDocIdForObject(e);
                  g && a.dispatch("procedure.didObjectClick", g, t, r, o, i, l);
                }),
                w(c.getProcedureId())),
              a.on("app.procedure.didChangePlayableItemList", function (e, n) {
                A = n;
              });
          }
          function h() {
            return !!(1 & (r || 0));
          }
          function m() {
            i.setPlayRange(
              "object" == typeof g ? g.start : I,
              "object" == typeof g ? g.end : null,
              i.RANGE_FLAGS_REQUEST_NOTIFICATION |
                i.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION
            );
            var e = i.getPlayableRangeStartTime(),
              n = i.getPlayableRangeStopTime();
            a.dispatch("app.procedure.didChangePlayableRange", e, n);
          }
          function v(e) {
            return (
              !!e &&
              "step" === e.type &&
              !e.actions.length &&
              e.children.map(c.getProcedureItemInfo).every(v)
            );
          }
          function y(e) {
            if (c) {
              var n,
                t = c.getProcedureId(),
                r = c.getProcedureItemInfo(e) || c.getProcedureItemInfo(t);
              if (r) {
                switch (((d = []), r.type)) {
                  case "procedure":
                    d = r.raw.$("Item");
                    break;
                  case "step":
                  case "action":
                    (n = c.getProcedureItemInfo(r.parent)),
                      (d = l ? n.raw.$("Item") : n.raw["@children"]);
                }
                (d = D(d || [])),
                  A &&
                    (d = d.filter(function (e) {
                      for (var n = e; n; n = c.getProcedureItemInfo(n).parent)
                        if (A.indexOf(e) >= 0) return !0;
                      return !1;
                    })),
                  d.length || (d = null);
              }
            }
          }
          function w(e, n) {
            v(c && c.getProcedureItemInfo(e)) ||
              (g && (i.stop(), i.setPlayRange()),
              y(e),
              f &&
                (f(e, n),
                setTimeout(function () {
                  a.app.procedure.requestPlayerState(), g && m();
                }, 0)));
          }
          function S(e) {
            for (var n = 0, t = e; t; ) (t = P(t)), n++;
            return n;
          }
          function k(e) {
            var n,
              t,
              r,
              a = e || o,
              g = i.RANGE_VALUE_CURRENT_STEP;
            if (c)
              if (
                ((n = c.getProcedureItemInfo(a) || {}),
                (g = a =
                  l && "action" === n.type ? n.parent || n.parentStep : a),
                d)
              ) {
                for (r = S(d[0]); g && d.indexOf(g) < 0; ) g = P(g);
                if (!g) {
                  for (t = d.join(""), g = a; S(g) > r; ) g = P(g);
                  y(g),
                    d && t !== d.join("")
                      ? (x().length || y(P(g)), (g = k(a)))
                      : (g = n.parentStep || c.getProcedureId());
                }
                g = (function (e) {
                  var n,
                    t = e,
                    r = 0;
                  if (
                    ((context = x()),
                    t && d && context.length && (n = d.indexOf(t)) >= 0)
                  )
                    for (; context.indexOf(t) < 0; )
                      t = d[n + (r = 0 === r ? -1 : r < 0 ? -r : -r - 1)];
                  return t;
                })(g);
              } else g = n.parentStep || c.getProcedureId();
            return g;
          }
          function x() {
            return d && d.filter(T);
          }
          function T(e) {
            var n = c.getProcedureItemInfo(e);
            return (
              n &&
              ("action" !== n.type ||
                (n.comment && !a.uniview.options.HideActions && !l))
            );
          }
          function P(e) {
            return (c.getProcedureItemInfo(e) || {}).parent;
          }
          function D(e) {
            return e.reduce(function (e, n) {
              var t = n.$attr("id"),
                r = t && c.getProcedureItemInfo(t);
              return r && !v(r) ? e.concat(t) : e;
            }, []);
          }
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = r.uniview || {},
              a = o.options || {},
              i = 1;
            if (n.useUIPublishOptions || !o.config.skipUIPublishOptions) {
              e.create(t(34));
              var c = e.color(a.TableBackgroundColor || "#FFF"),
                l = e.color(a.TableColor || "#000"),
                g = e.color(a.ContentBackgroundColor || c || "#FFF"),
                d = e.color(a.ContentTextColor || l || "#000"),
                A = e.color(a.TableHeaderBackgroundColor || "#FFF"),
                I = e.color(a.TableHeaderColor || "#000"),
                s = e.color(
                  a.TableSelectedBackgroundColor ||
                    a.HighlightedStepColor ||
                    "#EE8"
                ),
                C = e.color(a.TableSelectedColor || "#000"),
                u = e.color(a.SelectedFrameColor || s.darken(30)),
                p = {
                  ".solo-uniview-content": { backgroundColor: g, color: d },
                  ".tiramisu-procedure": { backgroundColor: c, color: l },
                  ".tiramisu-proc-title": { backgroundColor: A, color: I },
                  ".tiramisu-proc-item.active": { color: C },
                  ".tiramisu-proc-item:hover": {
                    backgroundColor: s.lighten(7),
                    borderColor: s.darken(30),
                    color: C,
                  },
                  ".doc-container .active": { backgroundColor: s },
                  ".doc-container .play-context:before": { backgroundColor: u },
                  ".procedure-seek-selection": { backgroundColor: u },
                };
              switch (
                (!1 === a.AutoNumbering &&
                  (p[".tiramisu-proc-item-number"] = { display: "none" }),
                a.TableFontSize)
              ) {
                case "Largest":
                  i = 1.1;
                  break;
                case "Larger":
                  i = 1.05;
                  break;
                case "Medium":
                  i = 1;
                  break;
                case "Smaller":
                  i = 0.95;
                  break;
                case "Smallest":
                  i = 0.9;
              }
              (p[".tiramisu-procedure"].fontSize = i + "em"), e.css(p).render();
            }
            (r.uniview.settings.Locked = !0 === a.EnableAutostop),
              (r.uniview.settings.DisableAlertMessages =
                !1 === a.EnableWarnings),
              r.uniview.options.AutoRepeat &&
                r.on("app.procedure.didStop", function () {
                  var e = Math.abs(
                    r.app.procedure.getPlayableRangeStopTime() -
                      r.app.procedure.position
                  );
                  (256 & r.app.procedure.state && !(e < 1e-4)) ||
                    (r.app.procedure.stop(), r.app.procedure.play());
                }),
              setTimeout(function () {
                (r.uniview.options.StartAfterLoading ||
                  r.uniview.doc.autoStartPlayback) &&
                  r.app.procedure.play();
              }, 500);
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o = t(5),
            a = t(16);
          r.exports = function (e, n, r) {
            var i = t(19),
              c = r.uniview.i18n["solo-skin-procedure-context-menu"] || {},
              l = "boolean" != typeof n.animated || n.animated,
              g = n.drawingMode,
              d = function () {
                var n = r.uniview.options,
                  t = n.SpecLang ? " (" + n.SpecLang + ")" : "",
                  a = r.uniview,
                  l = (
                    i(a.customization.description) +
                    " " +
                    a.customization.version
                  ).trim(),
                  g = n.SpecID
                    ? e.p(
                        ".about-section",
                        e.div({}, n.SpecID + " " + n.SpecVersion + t),
                        n.PublisherVersion
                          ? e.div({}, c.publisher + " " + n.PublisherVersion)
                          : ""
                      )
                    : "",
                  d = e.create(o, {
                    hideDismissButton: !0,
                    title: a.description,
                    content: [
                      e.p(".accent", c.description),
                      g,
                      e.create("hr"),
                      e.p(
                        ".about-section",
                        e.div({}, a.description + " " + a.version),
                        e.div({}, "Cortona3D Solo " + r.app.version()),
                        l ? e.div({}, l) : ""
                      ),
                    ],
                  });
                d.classList.add("about"), r.skin.get("app").append(d);
              };
            function A() {
              var e = [];
              return (
                g
                  ? (e = e.concat(t(20)))
                  : (e.push({
                      description: c.reset,
                      action: function (e) {
                        r.app.setDefaultView(l),
                          r.app.setSelectedObjects([], l),
                          r.app.restoreObjectProperty(
                            0,
                            r.app.PROPERTY_TRANSPARENCY,
                            l
                          ),
                          r.app.restoreObjectProperty(
                            0,
                            r.app.PROPERTY_VISIBILITY,
                            l
                          ),
                          r.dispatch("uniview.didReset");
                      },
                    }),
                    e.push({
                      description: c.fitAll,
                      action: function (e) {
                        r.app.fitSceneInView(l, n.fitSceneFactor);
                      },
                    })),
                e.push(null),
                e.push({
                  disabled: !n.helpAction,
                  description: c.help,
                  action: n.helpAction,
                }),
                e.push(null),
                e.push({ description: c.about, action: d }),
                e
              );
            }
            r.on("app.procedure.didDrawingDisplayMode", function (e) {
              g = e;
            }),
              r.on("app.didCallContextMenu", function (n, t, o) {
                var i = {
                  parent: document.body,
                  menu: A(),
                  x: n,
                  y: t,
                  target: o,
                };
                r.dispatch("uniview.didCallContextMenu", i), e.create(a, i);
              }),
              r.on("app.drawing.didCallContextMenu", function (n, t, o, i) {
                var c = {
                  parent: document.body,
                  menu: A(),
                  name: n,
                  x: t,
                  y: o,
                  target: i,
                };
                r.dispatch("uniview.didCallContextMenu", c), e.create(a, c);
              });
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(75),
            (r.exports = function (e, n, t) {
              var r = t.uniview.ixml,
                o = e.create(".skin-container.col.panel-comment");
              return (
                e.toggle(o, !1),
                r &&
                  (t.on("app.procedure.didEnterSubstepWithName", function (e) {
                    for (var t = [], a = r.getProcedureItemInfo(e); a; )
                      !a.comment ||
                        (n.skipTitle && !a.parent) ||
                        t.push(a.comment),
                        (a = r.getProcedureItemInfo(a.parent));
                    n.actionOnly && (t = t.slice(0, 1)),
                      (o.innerHTML = t.reverse().join(""));
                  }),
                  t.on("uniview.settings.changedComment", function (n) {
                    e.toggle(o, n);
                  })),
                this.exports(o)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(76);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".panel-comment {\r\n    z-index: 10;\r\n    position: absolute;\r\n    bottom: 0;\r\n    max-width: 80%;\r\n    flex-direction: column;\r\n    background-color: rgba(255,255,125,.5);\r\n    margin: 1em;\r\n    border-radius: .5em;\r\n    padding: 0 1em;\r\n}\r\n\r\n.panel-comment p {\r\n    margin: .5em 0;\r\n}\r\n\r\n.display-mode-2d .panel-comment {\r\n    display: none;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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Zi00NTUzLWI0YmMtYmQ0MjIxOGQ2MTUwIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFiNTlkMTVmLTZhMzgtNDAxYi04OTg0LTBjNjJjOGNhMTBlNCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZmNDkyMTFiLTBhOTYtNDRkYS04YTUxLWQxNGEyODNiMGExNiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjY2ODAyMTY1NTU4MzYzIgogICBHSU1QOlZlcnNpb249IjIuMTAuMzIiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyOjEwOjI2VDE5OjM2OjA1KzAzOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMjoxMDoyNlQxOTozNjowNSswMzowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhjMzZmMmFjLWIzMTAtNGRhYi1hYjQwLWIxYWVmODIzZWJiMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNFQwMDozOTo0OCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjY3YTBiNi1iYzg1LTQ0YWYtODkzOS1iZjE1NzM4NjgzYTYiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTAtMjZUMTk6MzY6MDUiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+opgkKgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YKGhAkBeR5SzwAAABDSURBVDjLY2AYbOAAAwODAyUG/Idisg36j4ZJNug/Dky0Qf8JYIIG/ScSH4BpYKJ2NNLMC2QHItnRSHZCojgp0x8AAElpPJEbibQcAAAAAElFTkSuQmCC");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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LTRlZjktYjQ4Yi0zYTA3Nzc3NjFkNzgiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Zjg2MmY4ZjctZjA0Ny00NTVlLTgwZWQtNTc2MmI5M2E2NjdlIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTQ2YjJlNDItYmMzNC00MjRlLTg3MTQtNTcyODUzMzVkZTJlIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjY4MDIwNTU1MTg1MTYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjI6MTA6MjZUMTk6MzQ6MTUrMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIyOjEwOjI2VDE5OjM0OjE1KzAzOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2JhYzhkY2QtYThhMS00NGQ1LTg2YjgtODY3N2MwZDM4N2M4IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI0VDAwOjM5OjA1Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MWM5MDBkLTE2ZjMtNDE1Yy05ODZkLTU1NWRhY2JmN2JiMiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQxOTozNDoxNSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5JZagYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5goaECIPUvYFpAAAACFJREFUOMtjYBhowAil/+ORwyvPRKkLRg0YNWCYGEAxAAAhkwIazqzSFAAAAABJRU5ErkJggg==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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NGQ2MS05YmFhLWVjNDAwYzUwYTVjOSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ZjA3ZTU4ZC02YzI1LTQxM2YtYjUxMS0zZjUyYjYwODNlODgiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTU0YjFjZS0wNWU1LTQyNjAtYThlYi0zNDQ5NjVmMzQxNjQiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY2NjgwNTY1NTczMzEyNiIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMjoxMDoyNlQyMDozNDoxNSswMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjI6MTA6MjZUMjA6MzQ6MTUrMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YjFmZTczNy1iNWI3LTQwYmItOWY2My1kNDg0ZGI3ZWQzYTMiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMTAtMjRUMDE6MDk6MjciLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWVlNmY5ZjItMmQxMi00YTFjLWIwNTktZWMwNDcyNjlkZDlkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI2VDIwOjM0OjE1Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PhtiZksAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmChoRIg9TNG+TAAAAH0lEQVQ4y2NgGGjAiMT+T45eJkpdMGrAqAGDw4CBBwC2SwEYgugYtwAAAABJRU5ErkJggg==");
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(27);
          var o = t(6),
            a = t(2);
          r.exports = function (e, n, r) {
            r.uniview.settings || (r.uniview.settings = {});
            var i = r.app.procedure,
              c = r.uniview.i18n["solo-skin-procedure-settings-panel"] || {},
              l = e.create(t(31), n),
              g = e.create(o, {
                closable: !0,
                content: (r.uniview.with3D
                  ? [
                      {
                        name: "PlaybackSpeed",
                        label: c.labelSpeed,
                        hidden:
                          !1 === r.uniview.options.ShowSpeedSelection ||
                          n.disableSpeed,
                        type: "select",
                        value: +r.uniview.options.PlaybackSpeed || 1,
                        choice: [
                          { value: 0.5, description: "⨯½" },
                          { value: 1, description: "⨯1" },
                          { value: 2, description: "⨯2" },
                          { value: 4, description: "⨯4" },
                        ],
                        onchange: function (e) {
                          i.setPlaybackSpeed(+e || 1);
                        },
                      },
                      {
                        name: "FreezeCamera",
                        label: c.labelFreezeViewpoint,
                        hidden:
                          !1 === r.uniview.options.ShowFreezeCheckbox ||
                          n.disableFreeze,
                        onchange: function (e) {
                          i.freezeCamera(e);
                        },
                      },
                      {
                        name: "Locked",
                        label: c.labelLockStep,
                        hidden:
                          !1 === r.uniview.options.ShowAutostopBox ||
                          n.disableLock,
                        value: !0 === r.uniview.options.EnableAutostop,
                        onchange: function (e) {
                          i.locked = e;
                        },
                      },
                      {
                        name: "DisableAlertMessages",
                        label: c.labelDisableAlertMessages,
                        hidden:
                          !1 === r.uniview.options.ShowMessagesBox ||
                          n.disableMessages,
                        value: !1 === r.uniview.options.EnableWarnings,
                      },
                    ]
                  : []
                )
                  .concat(n.auxSettings || [])
                  .concat(l.length ? [e.create("hr")].concat(l) : [])
                  .concat(n.customSettings || [])
                  .filter(function (e) {
                    return e;
                  })
                  .map(function (e) {
                    if (!(e instanceof Node)) {
                      var n = "Hide" + e.name + "Option";
                      void 0 === e.hidden &&
                        void 0 !== r.uniview.options[n] &&
                        (e.hidden = !!r.uniview.options[n]);
                    }
                    return e;
                  })
                  .map(function (n) {
                    var t = n instanceof Node ? n : e.create(a, n);
                    return (
                      t.classList.add("panel-settings-item"),
                      t.querySelector(
                        'input[type="checkbox"], input[type="radio"]'
                      ) && t.classList.add("start"),
                      t
                    );
                  }),
              });
            g.classList.add("panel-settings"),
              r.on("uniview.settings.changedSettings", function (e) {
                g.emit("toggle", e),
                  e && (r.uniview.settings.Locked = i.locked);
              });
            var d,
              A = function () {
                r.uniview.settings.Settings = !1;
              };
            return (
              r.on("touch.didPointerDown", A),
              r.on("app.procedure.didPlay", A),
              n.enableAutoHide &&
                ((g.$el.onmouseout = function () {
                  clearTimeout(d), (d = setTimeout(A, 3e3));
                }),
                (g.$el.onmouseover = function () {
                  clearTimeout(d);
                }),
                g.on("closed", function () {
                  clearTimeout(d);
                })),
              g.on("closed", function () {
                (r.uniview.settings.Settings = !1), clearTimeout(d);
              }),
              g
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o = {},
            a = t(9);
          function c(e) {
            if (((this.products = []), e.path)) this.initializeFromXML(e.path);
            else {
              if (!e.data) throw new Error("PCT initialize arguments error");
              this.initializeFromData(e.data);
            }
          }
          function l(e) {
            (this.id = e.id || "product" + i),
              (this.filter = (function () {
                var n = {};
                for (var t in e.filter) n[t] = new a(e.filter[t]);
                return n;
              })()),
              (this.toArrString = function () {
                var e = [];
                for (var n in this.filter) e.push(this.filter[n].toPCTString());
                return e;
              });
          }
          (c.prototype.initializeFromXML = function (e) {
            for (
              var n = o.getXmlDOM_load(e),
                t = o.getNodesByXPath(
                  n.documentElement,
                  "/*[1]/content/productCrossRefTable/product"
                ),
                r = [],
                i = 0;
              i < t.length;
              i++
            ) {
              r.push(t[i]);
              for (
                var c = {
                    id: t[i].getAttribute("id") || "product" + i,
                    filter: {},
                  },
                  g = o.getNodesByXPath(t[i], "./assign"),
                  d = {},
                  A = 0;
                A < g.length;
                A++
              ) {
                var I = g[A],
                  s = {
                    applicPropertyIdent: I.getAttribute("applicPropertyIdent"),
                    applicPropertyType: I.getAttribute("applicPropertyType"),
                    applicPropertyValues: I.getAttribute("applicPropertyValue"),
                  };
                d[s.applicPropertyIdent] &&
                  (s.applicPropertyValues =
                    d[s.applicPropertyIdent].applicPropertyValues +
                    "|" +
                    s.applicPropertyValues),
                  (d[s.applicPropertyIdent] = s);
              }
              for (var C in d) {
                var u = new a(d[C]);
                c.filter[u.applicPropertyIdent] = u;
              }
              this.products.push(new l(c));
            }
            return !0;
          }),
            (c.prototype.initializeFromData = function (e) {
              if (!e.products)
                throw new Error("PCT initialize by Data arguments error");
              for (var n = 0; n < e.products.length; n++)
                this.products.push(new l(e.products[n]));
              return !0;
            }),
            (c.prototype.toData = function () {
              for (
                var e = { products: [] }, n = 0;
                n < this.products.length;
                n++
              ) {
                var t = this.products[n],
                  r = { id: t.id, filter: {} };
                for (var o in t.filter) r.filter[o] = t.filter[o].toData();
                e.products.push(r);
              }
              return e;
            }),
            (c.prototype.toString = function () {
              return toJSONString(this.toData());
            }),
            (c.prototype.getProductByArgs = function (e) {
              var n = (e = e || {}).id,
                t = e.count;
              if (n || t) {
                if (!n) return t ? this.products[t - 1] : void 0;
                for (var r = 0; r < this.products.length; r++) {
                  var o = this.products[r];
                  if (o.id == n) return o;
                }
              }
            }),
            (r.exports = c);
        }.call(n, t, n, e)) || (e.exports = r);
    },
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(85);
          var o = t(4);
          r.exports = function (e, n, t) {
            var r = t.uniview.i18n["solo-skin-toolbar-procedure-drawing"] || {},
              a = n.disableExpandButton
                ? ""
                : e.create(o, { panelName: "Main" }).$el,
              i = e.create(".title"),
              c = e.toolbar(
                ".main.top",
                e.container(".left", i),
                e.container(
                  ".right",
                  n.drawingMode
                    ? ""
                    : e.buttonImg({
                        id: "btn-3d-display-mode",
                        title: r.toggleDisplayMode,
                        onclick: t.app.procedure.toggleDrawingDisplayMode.bind(
                          t,
                          !1
                        ),
                      }),
                  a
                )
              );
            return (
              n.drawingMode || e.hide(c, !0),
              t.on("app.procedure.didDrawingDisplayMode", function (n) {
                e.toggle(c, n);
              }),
              t.on("uniview.link2d", function (n) {
                e.clear(i),
                  i.append(
                    n.dataset.title ||
                      n.title ||
                      n.dataset.infoentityident ||
                      n.dataset.boardno ||
                      ""
                  ),
                  +n.dataset.sheets > 1 &&
                    i.append(" ", n.dataset.sheet, "/", n.dataset.sheets);
              }),
              t.on("uniview.linkMedia", function (n) {
                e.clear(i),
                  i.append(
                    n.dataset.title ||
                      n.title ||
                      n.dataset.infoentityident ||
                      n.dataset.boardno ||
                      ""
                  );
              }),
              this.exports(c)
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(86);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      var r = t(1),
        o = t(3),
        a = t(87);
      n = r(!1);
      var i = o(a);
      n.push([
        e.i,
        "#btn-3d-display-mode {\r\n    background-image: url(" + i + ");\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/gif;base64,R0lGODlhEAAQAMIFAMDAwICAgPDv7NTQyAAAAP///////////yH5BAEKAAcALAAAAAAQABAAAAMsSLrcWjBK+aaFNTqCuZ5V5n1e6GAdSqkhyJZuUcLr2FKjPDdgfmm+n25DTAAAOw==");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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LTQwODMtOTFkMi03NjVmZTZjYmJhZDUiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmJkZDFhNTQtODM5Yi00MWVhLThlNTUtYzIzNmU0ODMyMDY4IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWVjYzVhNjEtM2VhOS00YzM2LWIxZjYtODY3ODc3ZDM2MDQ3IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjY4MDE2MjQwMjEzOTciCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjI6MTA6MjZUMTk6Mjc6MDQrMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIyOjEwOjI2VDE5OjI3OjA0KzAzOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzUwNWI2NWYtMGE3MS00MjJiLWJlYzctZTJkZTdlMDEwNzE5IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTI0VDAwOjM2OjAzIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyYTEwYzJkLTJkNmQtNGJlNS1hZjA3LTEzOGM0NWY2YzI3NiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQxOToyNzowNCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5la3Z3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5goaEBsEy6BRlgAAAFBJREFUOMvN0jsOABAQRdHLytg5K6PRkMh8SHiJauQU8wZ+SgGS4l8bbzuQIBGQIDWwg8zACk1AWABLAkA8rc4CVCBr+r22RHeN7kM6PuU36asePNaUypltAAAAAElFTkSuQmCC");
    },
    function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default =
          "data:image/png;base64,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LTRkOGUtOTE1NC0yODMxYTdiN2Q5MTgiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGYxZWRlZjMtNDFmOC00MjQxLTg3MTYtMmExZWZkMTc4YjRhIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjY3MWFmN2ItY2NjOC00N2IyLTg1MzYtYTdjY2Y4YmI2NzA5IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjY4MDAyODQyMTE1MjYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjI6MTA6MjZUMTk6MDQ6NDQrMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIyOjEwOjI2VDE5OjA0OjQ0KzAzOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDkxNjVjYjgtZTRlNy00YWFjLWJlYmUtZjliZTg2MmJmZmZhIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTEwLTIzVDIzOjQ3OjMxIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlMDY5N2U1LWRkNjctNDk5Yi1hNzgwLTBmOTAxMzc1ODRhNyIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQxOTowNDo0NCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6F9A5RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5goaEAQsM0/38gAAAFJJREFUOMtjYBhM4D8UEwIODAwMB8gxAKYRpzpcEugaiTYAl0aCBhDSiGIAI5oBpABGBgYGBiZKow6bAY4MDAwHqZEOyA5EqkUj1RIS0Ul5YAAA16881sa+NHsAAAAASUVORK5CYII=");
    },
    function (e, n, t) {
      var r = t(0),
        o = t(91);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".doc-container .link {\r\n    cursor: pointer;\r\n}\r\n\r\n.doc-container .link.disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: auto;\r\n}\r\n\r\n.doc-container a[href],\r\n.doc-container a.link {\r\n    color: #000080;\r\n    text-decoration: none;\r\n}\r\n\r\n.doc-container a[href]:visited,\r\n.doc-container a.link:visited {\r\n    color: #000080;\r\n}\r\n\r\n.doc-container a[href]:hover,\r\n.doc-container a.link:hover {\r\n    color: #0000FF;\r\n    text-decoration: underline;\r\n}\r\n\r\n.skin-popup.footnote-popup {\r\n    position: absolute;\r\n    padding: 5pt;\r\n    background: rgb(255, 255, 204);\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o = {},
            a = t(93),
            i = t(9);
          function c(e) {
            (this.id = ""),
              (this.attributes = []),
              (this.displayText = null),
              (this.expression = {}),
              e
                ? e.innerHTML
                  ? this.createFromHTMLNode(e)
                  : e.xml
                  ? this.createFromXMLNode(e)
                  : e.$
                  ? this.createFromUniview(e)
                  : this.createFromData(e)
                : this.createDefault(),
              (this.data = this.toData());
          }
          (c.DAFAULTIDENT = "    "),
            (c.prototype.createDefault = function () {
              (this.id = ""), (this.expression = new i());
            }),
            (c.prototype.createFromData = function (e) {
              (this.id = e.id),
                (this.displayText = e.displayText ? e.displayText : null),
                (this.expression = e.expression
                  ? e.expression.andOr
                    ? new a(e.expression)
                    : new i(e.expression)
                  : new i());
            }),
            (c.prototype.createFromXMLNode = function (e) {
              (this.id = e.getAttribute("id")),
                (this.attributes = (function () {
                  for (var n = {}, t = 0; t < e.attributes.length; t++) {
                    var r = e.attributes.item(t);
                    n[r.name] = r.value;
                  }
                  return n;
                })()),
                (this.displayText = (function () {
                  for (
                    var n = [],
                      t = o.getNodesByXPath(e, "./displayText/simplePara"),
                      r = 0;
                    r < t.length;
                    r++
                  )
                    n.push(o.getText(t.item(r)));
                  return n;
                })()),
                (this.expression = (function () {
                  var n = o.getNodesByXPath(e, "./assert | ./evaluate");
                  if (!n.length) return new i();
                  var t = n.item(0);
                  return "assert" == t.nodeName ? new i(t) : new a(t);
                })());
            }),
            (c.prototype.createFromUniview = function (e) {
              (this.id = e.$attr("id")),
                (this.displayText = (function () {
                  var n = [];
                  return (
                    e.$("displayText/simplePara").map(function (e) {
                      n.push(e.$text());
                    }),
                    n
                  );
                })()),
                (this.expression = e.$("assert")[0]
                  ? new i(e.$("assert")[0])
                  : e.$("evaluate")[0]
                  ? new a(e.$("evaluate")[0])
                  : new i());
            }),
            (c.prototype.createFromHTMLNode = function (e) {
              var n;
              (this.id = e.id),
                (this.displayText = (function () {
                  for (
                    var n = [], t = e.querySelectorAll(".simplePara"), r = 0;
                    r < t.length;
                    r++
                  )
                    n.push(t.item(r).innerText.replace(/\n/, ""));
                  return n;
                })()),
                (this.expression = (n = e.lastElementChild)
                  ? (n.classList.contains("assert")
                      ? (res = new i(n))
                      : n.classList.contains("evaluate")
                      ? (res = new a(n))
                      : (res = new i()),
                    res)
                  : new i());
            }),
            (c.prototype.filteredByProduct = function (e) {
              if (e && (!e || e.filter)) {
                var n = new c(this.data);
                return (
                  (n.filteredBy = e),
                  n.expression.filteredByProduct(e),
                  (n.expression.range && !n.expression.range.length) ||
                  (n.expression.values && !n.expression.values.length)
                    ? (n.state = !1)
                    : (n.state = !0),
                  n.toData()
                );
              }
            }),
            (c.prototype.toData = function () {
              var e = {};
              return (
                (e.id = this.id),
                (e.attributes = this.attributes),
                (e.displayText = this.displayText),
                (e.expression = this.expression.toData()),
                this.hasOwnProperty("state") && (e.state = this.state),
                e
              );
            }),
            (c.prototype.toString = function (e) {
              e = e || "";
              var n = "{";
              for (var t in this)
                "function" != typeof this[t] && "xmlNode" != t && this[t]
                  ? (n +=
                      "\n" +
                      e +
                      c.DAFAULTIDENT +
                      t +
                      ": " +
                      this[t].toString(e + c.DAFAULTIDENT))
                  : "boolean" == typeof this[t] &&
                    (n += "\n" + e + c.DAFAULTIDENT + t + ": " + this[t]);
              return (n += "\n}");
            }),
            (c.prototype.toInlineApplicString = function () {
              if (this.displayText.length) return this.displayText.join(" ");
              var e = "";
              return (
                this.expression && (e = this.expression.toInlineApplicString()),
                e
              );
            }),
            (c.defineConvertedRules = function (e) {
              i.RULES = e;
            }),
            (r.exports = c);
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          var o = {},
            a = t(9),
            i = Cortona3DSolo.uniview.i18n["uniview-structure"];
          function c(e) {
            (this.andOr = ""),
              (this.range = []),
              e.xml
                ? this.createFromXMLNode(e)
                : e.innerHTML
                ? this.createFromHTMLNode(e)
                : e.$
                ? this.createFromUniview(e)
                : this.createFromData(e);
          }
          (c.DAFAULTIDENT = "    "),
            (c.prototype.createFromData = function (e) {
              this.andOr = e.andOr;
              for (var n = 0; n < e.range.length; n++) {
                var t = e.range[n],
                  r = t.andOr ? new c(t) : new a(t);
                this.range.push(r);
              }
            }),
            (c.prototype.createFromXMLNode = function (e) {
              this.andOr = e.getAttribute("andOr");
              for (
                var n = o.getNodesByXPath(e, "./assert | ./evaluate"), t = 0;
                t < n.length;
                t++
              ) {
                var r = n.item(t),
                  i = "evaluate" == r.nodeName ? new c(r) : new a(r);
                this.range.push(i);
              }
            }),
            (c.prototype.createFromUniview = function (e) {
              this.andOr = e.$attr("andOr");
              for (var n = e.$("*"), t = 0; t < n.length; t++) {
                var r = n[t],
                  o = "evaluate" == r["@name"] ? new c(r) : new a(r);
                this.range.push(o);
              }
            }),
            (c.prototype.createFromHTMLNode = function (e) {
              this.andOr = e.getAttribute("data-andOr");
              for (var n = e.children, t = 0; t < n.length; t++) {
                var r = n.item(t),
                  o = r.classList.contains("evaluate") ? new c(r) : new a(r);
                this.range.push(o);
              }
            }),
            (c.prototype.filteredByProduct = function (e) {
              var n = [];
              if ("or" == this.andOr)
                for (var t = 0; t < this.range.length; t++) {
                  this.range[t].filteredByProduct(e) && n.push(this.range[t]);
                }
              else if ("and" == this.andOr)
                for (t = 0; t < this.range.length; t++) {
                  this.range[t].filteredByProduct(e)
                    ? n.push(this.range[t])
                    : ((n = []), (t = this.range.length));
                }
              return n.length
                ? ((this.range = n), !0)
                : ((this.range = []), !1);
            }),
            (c.prototype.toData = function () {
              var e = {};
              (e.andOr = this.andOr), (e.range = []);
              for (var n = 0; n < this.range.length; n++)
                e.range.push(this.range[n].toData());
              return e;
            }),
            (c.prototype.toString = function (e) {
              e = e || "";
              var n = "{";
              for (var t in this)
                if ("range" == t) {
                  n += "\n" + e + c.DAFAULTIDENT + t + ": [";
                  for (var r = 0; r < this[t].length; r++)
                    (n += this[t][r].toString(e + c.DAFAULTIDENT)),
                      r != this[t].length - 1 && (n += "; ");
                  n += "]";
                } else
                  "function" != typeof this[t] &&
                    "xmlNode" != t &&
                    this[t] &&
                    (n +=
                      "\n" +
                      e +
                      c.DAFAULTIDENT +
                      t +
                      ": " +
                      this[t].toString(e + c.DAFAULTIDENT));
              return (n += "\n" + e + "}");
            }),
            (c.prototype.toInlineApplicString = function () {
              var e = [];
              this.range.forEach(function (n) {
                e.push(n.toInlineApplicString());
              });
              var n = "and" == this.andOr ? " " + i.AND + " " : ", ";
              return e.join(n);
            }),
            (r.exports = c);
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(95),
            (r.exports = function (e, n, t) {
              var r = t.app.procedure;
              t.uniview.i18n["solo-skin-procedure-seek"];
              function o(e) {
                var n,
                  t = new Date(0, 0);
                return (
                  t.setSeconds(e),
                  t.getMinutes() +
                    ":" +
                    ((n = (n = t.getSeconds()) || 0) < 10 ? "0" + n : n)
                );
              }
              var a = e.input({
                type: "range",
                min: 0,
                max: r.duration,
                step: "any",
                value: 0,
                onchange: function () {
                  r.setPlayPosition(this.value, !0),
                    (c.textContent = o(this.value - this.min));
                },
              });
              a.oninput = a.onchange;
              var i = e.div(".procedure-seek-selection");
              e.toggle(i, r.locked);
              var c = e.text("", o(0)),
                l = e.text("", o(r.duration)),
                g = e.div(
                  ".procedure-seek-container",
                  n.disableDurationView
                    ? ""
                    : e.container(
                        ".procedure-duration",
                        c,
                        e.text(".divider", "/"),
                        l
                      ),
                  n.disableSeekControl ? "" : e.div(".procedure-seek", a, i)
                );
              return (
                n.disableDurationView ||
                  t.on("app.procedure.didChangePlayerState", function (e, n) {
                    c.textContent = o(e - a.min);
                  }),
                n.disableSeekControl ||
                  t.on("app.procedure.didChangePlayerState", function (e, n) {
                    a.value = e;
                  }),
                t.on("uniview.settings.changedLocked", function (t) {
                  n.expandToPlayRange
                    ? t ||
                      ((a.min = 0),
                      (a.max = r.duration),
                      (l.textContent = o(r.duration)))
                    : e.toggle(i, t);
                }),
                t.on("app.procedure.didChangePlayableRange", function (e, g) {
                  if (n.expandToPlayRange)
                    (a.min = e),
                      (a.max = g),
                      (l.textContent = o(g - e)),
                      (c.textContent = o(t.app.procedure.position - e));
                  else {
                    var d = i.style;
                    (d.width = Math.round((100 * (g - e)) / r.duration) + "%"),
                      (d.left = Math.round((100 * e) / r.duration) + "%");
                  }
                }),
                t.on("app.procedure.didChangePlayableItemList", function (e) {
                  (a.min = 0), (a.max = e), (l.textContent = o(e));
                }),
                this.exports(g)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(96);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".procedure-duration {\r\n    margin: 0 .5em;\r\n}\r\n\r\n.procedure-duration .skin-text {\r\n    display: inline-block;\r\n    min-width: 2em;\r\n    text-align: center;\r\n}\r\n\r\n.procedure-duration .divider {\r\n    min-width: 1em;\r\n}\r\n\r\n.procedure-seek {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-right: .5em;\r\n    display: flex;\r\n}\r\n\r\n.procedure-seek input[type=range] {\r\n    width: 0;\r\n    min-width: 100%;\r\n}\r\n\r\n.procedure-seek-selection {\r\n    position: absolute;\r\n    height: .4em;\r\n    background-color: rgba(200, 100, 100, .7);\r\n    top: 100%;\r\n}\r\n\r\n.procedure-seek-container {\r\n    flex-grow: 1;\r\n    position: relative;\r\n    display: flex;\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(98);
          var o = t(5);
          function a(e) {
            return "function" == typeof e;
          }
          r.exports = function (e, n, t) {
            var r = t.uniview.ixml;
            t.on("app.procedure.didFireEvent", function (i, c, l, g) {
              if (!t.uniview.settings.DisableAlertMessages) {
                var d = (function (e, n) {
                    var t = /^(.*[^-])-.*-\1(-\d+)?$/.exec(e + "-" + n) || "";
                    return t && (t = t[1]), t;
                  })(c, l),
                  A = (r && r.getProcedureItemInfo(c)) || {
                    eventType: d,
                    description: g || " ",
                  },
                  I = (A.parent && r.getProcedureItemInfo(A.parent)) || {
                    comment: "",
                    description: "",
                  },
                  s = A.description || I.comment,
                  C = I.description,
                  u = A.eventType;
                i = C.split(":")[0];
                if (
                  (C && i.indexOf(d) < 0 && (u = i),
                  !a(n.willSkipAlert) || !n.willSkipAlert(A))
                ) {
                  var p =
                      (a(n.willReturnAlertBody) && n.willReturnAlertBody(A)) ||
                      "",
                    f = e.create(o, {
                      hideDismissButton: !1,
                      title:
                        (a(n.willReturnAlertTitle) &&
                          n.willReturnAlertTitle(A)) ||
                        u,
                      content: p || e.span({ innerHTML: s }),
                    });
                  f.classList.add("procedure-alert"),
                    p && f.classList.add("procedure-document-alert"),
                    A.eventType &&
                      f.classList.add(
                        A.eventType.replace(/[^0-9A-Z]/g, "_").toLowerCase()
                      ),
                    t.skin.get("app").append(f),
                    f.$el.focus(),
                    t.app.procedure.played &&
                      (t.app.procedure.pause(),
                      f.once("closed", function () {
                        t.app.procedure.play(),
                          t.dispatch("uniview.didDismissModal");
                      }));
                }
              }
            });
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(99);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([e.i, "", ""]), (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(101),
            (r.exports = function (e, n, r) {
              var o = r.uniview.ixml,
                a = r.expand(
                  {},
                  r.uniview.i18n["solo-skin-ipc-toolbar-part-selection"],
                  r.uniview.i18n["solo-skin-ipc-toolbar"]
                ),
                i = !0,
                c = t(2);
              if ("procedure" === r.uniview.doc.type) {
                "boolean" == typeof n.animated && (i = n.animated);
                var l = e.input({
                  type: "range",
                  min: 0,
                  max: 100,
                  value: 0,
                  onchange: function () {
                    var e = this.value / (this.max - this.min);
                    r.app.setObjectsTransparency(
                      r.app.getSelectedObjects(),
                      e,
                      !1
                    ),
                      I();
                  },
                });
                l.oninput = l.onchange;
                var g = e.container(
                    ".toolbar-part-selection-content",
                    e.container(
                      ".left",
                      e.buttonImg({
                        id: "btn-selection-fit",
                        title: a.fit,
                        onclick: function () {
                          r.app.fitSelectedObjectsInView(i, n.fitObjectFactor);
                        },
                      }),
                      e.buttonImg({
                        id: "btn-selection-show",
                        title: a.show,
                        onclick: function () {
                          r.app.toggleObjectsVisibility(
                            r.app.getSelectedObjects(),
                            !0
                          ),
                            I();
                        },
                      }),
                      e.buttonImg({
                        id: "btn-selection-hide",
                        title: a.hide,
                        onclick: function () {
                          r.app.toggleObjectsVisibility(
                            r.app.getSelectedObjects(),
                            !1
                          ),
                            I();
                        },
                      }),
                      e.buttonImg({
                        id: "btn-select-none",
                        title: a.titleSelectNone,
                        onclick: function () {
                          r.app.setSelectedObjects([], i);
                        },
                      })
                    ),
                    e.container(".right", e.label("", a.labelTransparency), l)
                  ),
                  d = e.buttonImg({
                    id: "btn-show-all",
                    title: a.showAll,
                    className: "disabled",
                    onclick: function () {
                      r.app.restoreObjectProperty(
                        0,
                        r.app.PROPERTY_TRANSPARENCY,
                        i
                      ),
                        r.app.restoreObjectProperty(
                          0,
                          r.app.PROPERTY_VISIBILITY,
                          i
                        ),
                        r.app.setSelectedObjects([], i),
                        this.classList.add("disabled");
                    },
                  }),
                  A = e.toolbar(
                    "#toolbar-part-selection.bottom",
                    r.uniview.options.UseSelectedObjectsExternal3DView
                      ? e.create(c, {
                          type: "buttonImg",
                          id: "btn-selection-external-view",
                          label: a.titleSelectionExternalView,
                          name: "SelectedObjectsExternalView",
                          value: !1,
                          onchange: function (e) {
                            e
                              ? r.dispatch("uniview.external3DPanel.show")
                              : r.dispatch("uniview.external3DPanel.hide");
                          },
                        })
                      : "",
                    e.create(c, {
                      type: "buttonImg",
                      id: "btn-ignore-transparency",
                      label: a.titleIgnoreTransparency,
                      name: "IgnoreTransparency",
                      value: !!n.ignoreTransparency,
                      onchange: function (e) {
                        r.app.pickerTransparencyThreshold = e ? 1e-4 : 0.95;
                      },
                    }),
                    d,
                    g
                  );
                return (
                  r.on("uniview.didReset", I),
                  r.on("app.didChangeSelection", s),
                  r.on("app.didChangeSelectedObjects", s),
                  r.on("app.procedure.didDrawingDisplayMode", function (n) {
                    e.toggle(A, !n);
                  }),
                  n.selectByDocID
                    ? (r.on("procedure.didObjectEnter", function (e) {
                        n.disableScreenTip ||
                          (r.core.canvas.parentNode.title =
                            o.getDocItemInfo(e).screentip || ""),
                          r.app.procedure.hoverItem(e, !0, i);
                      }),
                      r.on("procedure.didObjectOut", function (e) {
                        n.disableScreenTip ||
                          (r.core.canvas.parentNode.title = ""),
                          r.app.procedure.hoverItem(e, !1, i);
                      }),
                      r.on(
                        "procedure.didObjectClick",
                        function (e, n, t, a, c, g) {
                          if (
                            !(r.uniview.settings.SetCenter || 1 !== a || !0 & c)
                          ) {
                            var d = o
                              .getObjectNamesByDocId(e)
                              .map(r.app.getObjectWithName);
                            if (2 & c)
                              r.app.getSelectedObjects().some(function (e) {
                                return d.some(function (n) {
                                  return n === e;
                                });
                              })
                                ? r.app.removeSelectedObjects(d, i)
                                : r.app.addSelectedObjects(d, i),
                                l.onchange.call(l);
                            else
                              r.app.setSelectedObjects([], !1),
                                r.app.setSelectedObjects(d, i);
                          }
                        }
                      ))
                    : (r.on("touch.didObjectEnter", function (e) {
                        e && r.app.procedure.hoverObject(e, !0, i);
                      }),
                      r.on("touch.didObjectOut", function (e) {
                        e && r.app.procedure.hoverObject(e, !1, i);
                      }),
                      r.on(
                        "touch.didObjectClick",
                        function (e, n, t, o, a, c, g) {
                          r.uniview.settings.SetCenter ||
                            (e &&
                              1 === a &&
                              (!0 & c ||
                                (2 & c
                                  ? (r.app
                                      .getSelectedObjects()
                                      .some(function (n) {
                                        return n === e;
                                      })
                                      ? r.app.removeSelectedObjects(e, i)
                                      : r.app.addSelectedObjects(e, i),
                                    l.onchange.call(l))
                                  : (r.app.setSelectedObjects([], !1),
                                    r.app.setSelectedObjects(e, i)))));
                        }
                      )),
                  r.on("touch.didObjectClick", function (e, n, t, o, a, c, l) {
                    (4 === a || (!e && 1 === a)) &&
                      r.app.setSelectedObjects([], i);
                  }),
                  r.on("app.procedure.didPlay", function () {
                    r.app.setSelectedObjects([]), r.app.setHoveredObjects([]);
                  }),
                  s(),
                  this.exports(A)
                );
              }
              function I() {
                var e = r.app
                  .getObjectsWithDirtyProperty(r.app.PROPERTY_TRANSPARENCY)
                  .concat(
                    r.app.getObjectsWithDirtyProperty(r.app.PROPERTY_VISIBILITY)
                  );
                d.classList.toggle("disabled", !e.length);
              }
              function s() {
                var e = r.app.getSelectedObjects();
                if (e.length) {
                  if (l.disabled || 1 === e.length) {
                    var n = r.app.getObjectsTransparency(e);
                    (l.value = n * (l.max - l.min)),
                      g.classList.remove("disabled"),
                      (l.disabled = !1);
                  }
                  e.length > 1 && l.onchange.call(l);
                } else
                  g.classList.add("disabled"), (l.disabled = !0), (l.value = 0);
                r.dispatch("core.didChangeLayout");
              }
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(102);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      var r = t(1),
        o = t(3),
        a = t(39),
        i = t(40),
        c = t(41),
        l = t(42),
        g = t(43),
        d = t(44),
        A = t(45);
      n = r(!1);
      var I = o(a),
        s = o(i),
        C = o(c),
        u = o(l),
        p = o(g),
        f = o(d),
        b = o(A);
      n.push([
        e.i,
        "#toolbar-part-selection.bottom {\r\n    padding-top: 0;\r\n}\r\n\r\n.display-mode-2d #toolbar-part-selection {\r\n    display: none;\r\n}\r\n\r\n#btn-selection-fit {\r\n    background-image: url(" +
          I +
          ");\r\n}\r\n\r\n#btn-selection-show {\r\n    background-image: url(" +
          s +
          ");\r\n}\r\n\r\n#btn-selection-hide {\r\n    background-image: url(" +
          C +
          ");\r\n}\r\n\r\n#btn-ignore-transparency {\r\n    background-image: url(" +
          u +
          ");\r\n}\r\n\r\n#btn-select-none {\r\n    background-image: url(" +
          p +
          ");\r\n}\r\n\r\n#btn-selection-external-view {\r\n    background-image: url(" +
          f +
          ");\r\n}\r\n\r\n#btn-show-all {\r\n    background-image: url(" +
          b +
          ");\r\n}\r\n\r\n.toolbar-part-selection-content {\r\n    justify-content: space-between;\r\n}\r\n\r\n.skin-holder .skin-toolbar .toolbar-part-selection-content {\r\n    margin: 0;\r\n}\r\n\r\n.toolbar-part-selection-content > .right {\r\n    flex-basis: auto;\r\n    min-width: 50%;\r\n}\r\n\r\n/* Large desktops and laptops \r\n@media (min-width: 1200px) {}\r\n*/\r\n\r\n/* Portrait tablets and medium desktops \r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n*/\r\n\r\n/* Portrait tablets and small desktops \r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n*/\r\n\r\n/* Landscape phones and portrait tablets \r\n@media (max-width: 767px) {}\r\n*/\r\n@media (max-width: 420px) and (orientation: portrait) {\r\n    #toolbar-part-selection label {\r\n        display: none;\r\n    }\r\n\r\n    #toolbar-part-selection input[type='range'] {\r\n        margin-left: 1em;\r\n    }\r\n}\r\n\r\n/* Landscape phones and smaller \r\n@media (max-width: 480px) {}\r\n*/\r\n\r\n/* Portrait\r\n@media (orientation: portrait) {}\r\n*/",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, t) {
          t.exports = function (e, n, t) {
            t.on("uniview.hashChange", function (e) {
              var n,
                r = t.uniview.ixml,
                o = [];
              if (/,/.test(e)) {
                n = e.split(",");
                var a = r.getProcedureItemInfo(r.getProcedureId()),
                  i = n[0],
                  c = n[1],
                  l = a.children.indexOf(i),
                  g = a.children.indexOf(c);
                l >= 0 && g >= 0 && g >= l
                  ? (o = a.children.slice(l, g + 1))
                  : console.error(
                      '"' + e + '" is not a valid range of procedure step IDs'
                    );
              } else {
                if (!/;/.test(e))
                  return e && e !== r.getProcedureId()
                    ? void (
                        r.getProcedureItemInfo(e) &&
                        t.app.procedure.seekToSubstep(e)
                      )
                    : void 0;
                o = e.split(";");
              }
              (o = o.filter(function (e) {
                var n = !!r.getProcedureItemInfo(e);
                return (
                  e &&
                    !n &&
                    console.error(
                      '"' +
                        e +
                        '" is not a valid ID for a step in the procedure'
                    ),
                  n
                );
              })),
                t.app.procedure.setPlayableItemList(),
                o &&
                  o.length &&
                  (t.app.procedure.seekToSubstep(o[0]),
                  t.app.procedure.setPlayableItemList(o)),
                t.app.procedure.setPlayPosition(t.app.procedure.duration, !1),
                t.app.procedure.setPlayPosition(0, !0);
            });
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = e.create(t(7), n);
            return (
              r.on("uniview.multimedia.load", function (n, t) {
                (t = t || {}), e.show(o.$el);
                var r,
                  a = t.type,
                  i = { controls: t.controls, autoplay: t.autoplay };
                switch (a) {
                  case "audio":
                    r = "loadAudio";
                    break;
                  case "video":
                    r = "loadVideo";
                    break;
                  default:
                    (r = "load"), (i = {});
                }
                o[r](n, i);
              }),
              r.on("uniview.multimedia.pause", function () {
                var e = o.safeProperty("pause");
                e && e.call(o.window);
              }),
              r.on("uniview.multimedia.play", function () {
                var e = o.safeProperty("play");
                e && e.call(o.window);
              }),
              r.on("uniview.multimedia.toggle", function (n) {
                n
                  ? (e.show(o.$el),
                    o.window.focus(),
                    o.safeProperty("autoplay") &&
                      r.dispatch("uniview.multimedia.play"))
                  : (r.dispatch("uniview.multimedia.pause"), e.hide(o.$el, !0));
              }),
              e.hide(o.$el, !0),
              o
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(106),
            (r.exports = function (e, n, r) {
              var o = t(4),
                a = t(94),
                i = t(2),
                c = r.app.procedure,
                l = r.uniview.i18n["solo-skin-procedure-toolbar"] || {},
                g = e.buttonImg({
                  id: "btn-play",
                  title: l.play,
                  onclick: function () {
                    c[c.played ? "pause" : "play"]();
                  },
                }),
                d = n.disableFastForward
                  ? ""
                  : e.buttonImg({
                      id: "btn-bwd",
                      title: l.back,
                      onclick: c.backward,
                    }),
                A = n.disableFastForward
                  ? ""
                  : e.buttonImg({
                      id: "btn-fwd",
                      title: l.next,
                      onclick: c.forward,
                    }),
                I = n.enableStopButton
                  ? e.buttonImg({
                      id: "btn-stop",
                      title: l.stop,
                      onclick: c.stop,
                    })
                  : "",
                s = n.disableSeekControl ? "" : e.create(a, n).$el,
                C = e.create(i, {
                  name: "Settings",
                  type: "buttonImg",
                  label: l.settings,
                }),
                u = n.disableExpandButton
                  ? ""
                  : e.create(o, { panelName: "Main" }).$el,
                p = e.toolbar(
                  ".main.top",
                  e.container(".left", g, I, d, A),
                  s,
                  e.container(
                    ".right",
                    C,
                    n.helpAction
                      ? e.buttonImg({
                          id: "btn-help",
                          title: l.titleHelp,
                          onclick: function () {
                            "function" == typeof n.helpAction && n.helpAction();
                          },
                        })
                      : "",
                    u
                  )
                );
              return (
                r.on("app.procedure.didEnableForward", function (e) {
                  A &&
                    ((A.disabled = !e),
                    e
                      ? A.classList.remove("disabled")
                      : A.classList.add("disabled"));
                }),
                r.on("app.procedure.didEnableBackward", function (e) {
                  d &&
                    ((d.disabled = !e),
                    e
                      ? d.classList.remove("disabled")
                      : d.classList.add("disabled"));
                }),
                r.on("app.procedure.didPlaySound", function (e) {
                  r.app.ui.toggleSpeakerIcon(e);
                }),
                r.on("app.procedure.didStop", function () {
                  g.classList.remove("played"), (g.title = l.play);
                }),
                r.on("app.procedure.didPlay", function () {
                  g.classList.add("played"), (g.title = l.pause);
                }),
                r.on("app.procedure.didDrawingDisplayMode", function (n) {
                  e.toggle(p, !n);
                }),
                this.exports(p)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(107);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      var r = t(1),
        o = t(3),
        a = t(22),
        i = t(77),
        c = t(78),
        l = t(79),
        g = t(88),
        d = t(89),
        A = t(23);
      n = r(!1);
      var I = o(a),
        s = o(i),
        C = o(c),
        u = o(l),
        p = o(g),
        f = o(d),
        b = o(A);
      n.push([
        e.i,
        ".skin-holder-figure {\r\n    justify-content: flex-end;\r\n}\r\n\r\n#btn-help {\r\n    background-image: url(" +
          I +
          ");\r\n}\r\n\r\n#btn-play {\r\n    background-image: url(" +
          s +
          ");\r\n}\r\n\r\n#btn-play.played {\r\n    background-image: url(" +
          C +
          ");\r\n}\r\n\r\n#btn-stop {\r\n    background-image: url(" +
          u +
          ");\r\n}\r\n\r\n#btn-fwd {\r\n    background-image: url(" +
          p +
          ");\r\n}\r\n\r\n#btn-bwd {\r\n    background-image: url(" +
          f +
          ");\r\n}\r\n\r\n#btn-settings {\r\n    background-image: url(" +
          b +
          ");\r\n}\r\n\r\n/* Large desktops and laptops \r\n@media (min-width: 1200px) {}\r\n*/\r\n\r\n/* Portrait tablets and medium desktops \r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n*/\r\n\r\n/* Portrait tablets and small desktops \r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n*/\r\n\r\n/* Landscape phones and portrait tablets \r\n@media (max-width: 767px) {}\r\n@media (max-width: 667px) {}\r\n*/\r\n\r\n\r\n/* Landscape phones and smaller */\r\n@media (max-width: 480px) {\r\n    .skin-holder-main .skin-toolbar.top.main {\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .skin-holder-main .skin-toolbar.bottom.main {\r\n        flex-wrap: wrap-reverse;\r\n    }\r\n\r\n    .skin-toolbar.main .procedure-seek-container {\r\n        order: 2;\r\n        flex-basis: 100%;\r\n    }\r\n}\r\n\r\n/* Portrait\r\n@media (orientation: portrait) {}\r\n*/",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = r.uniview.settings,
              a = r.app.procedure,
              i = r.uniview.ixml,
              c = e.create(
                t(32),
                r.expand(
                  {
                    "0000:112": function (e) {
                      "function" == typeof n.helpAction && n.helpAction();
                    },
                    "0000:27": function (e) {
                      e.isDrawingVisible &&
                        r.uniview.with3D &&
                        a.toggleDrawingDisplayMode(!1);
                    },
                    "0000:13": function (e) {
                      if (e.isCanvasVisible && i) {
                        var n = i
                          .getProcedureItemInfo(a.getContextItemId())
                          .raw["@children"].map(function (e) {
                            return e.$attr("id");
                          })
                          .filter(r.app.procedure.isValidContextItem);
                        n.length && a.seekToSubstep(n[0]);
                      }
                    },
                    "0000:8": function (e) {
                      if (e.isCanvasVisible && i) {
                        var n = i.getProcedureItemInfo(a.getContextItemId());
                        n.parent && a.seekToSubstep(n.parent);
                      }
                    },
                    "0000:36": function (e) {
                      e.isCanvasVisible && a.stop();
                    },
                    "0000:35": function (e) {
                      e.isCanvasVisible &&
                        a.setPlayPosition(a.getPlayableRangeStopTime(), !0);
                    },
                    "0000:32": function (e) {
                      e.isCanvasVisible && a[a.played ? "pause" : "play"]();
                    },
                    "0000:34": function (e) {
                      e.isCanvasVisible && a.forward();
                    },
                    "0000:33": function (e) {
                      e.isCanvasVisible && a.backward();
                    },
                    "0100:48": function (e) {
                      e.isCanvasVisible &&
                        r.app.jumpToStandardView("isometric", !0);
                    },
                    "0100:49": function (e) {
                      e.isCanvasVisible &&
                        r.app.jumpToStandardView("front", !0);
                    },
                    "0100:50": function (e) {
                      e.isCanvasVisible && r.app.jumpToStandardView("back", !0);
                    },
                    "0100:51": function (e) {
                      e.isCanvasVisible &&
                        r.app.jumpToStandardView("right", !0);
                    },
                    "0100:52": function (e) {
                      e.isCanvasVisible && r.app.jumpToStandardView("left", !0);
                    },
                    "0100:53": function (e) {
                      e.isCanvasVisible && r.app.jumpToStandardView("top", !0);
                    },
                    "0100:54": function (e) {
                      e.isCanvasVisible &&
                        r.app.jumpToStandardView("bottom", !0);
                    },
                    "0000:65": function (e) {
                      e.isCanvasVisible && r.app.alignHorizon(!0);
                    },
                    "0000:67": function (e) {
                      e.isCanvasVisible &&
                        (o.ShowRotationCenter = !o.ShowRotationCenter);
                    },
                    "0000:70": function (e) {
                      e.isCanvasVisible &&
                        r.app.fitSceneInView(!0, n.fitSceneFactor);
                    },
                    "0000:88": function (e) {
                      e.isCanvasVisible &&
                        !1 !== r.uniview.options.ShowAxes &&
                        (o.ShowAxes = !o.ShowAxes);
                    },
                    "0000:82": function (e) {
                      e.isCanvasVisible &&
                        (a.freezeCamera(!1),
                        r.app.setDefaultView(!0),
                        a.freezeCamera(o.FreezeCamera),
                        r.app.setSelectedObjects([], !0),
                        r.app.restoreObjectProperty(
                          0,
                          r.app.PROPERTY_TRANSPARENCY,
                          !0
                        ),
                        r.app.restoreObjectProperty(
                          0,
                          r.app.PROPERTY_VISIBILITY,
                          !0
                        ));
                    },
                    "0010:65": function (e) {
                      e.isCanvasVisible && (o.SkipAnimation = !o.SkipAnimation);
                    },
                    "0010:67": function (e) {
                      e.isCanvasVisible && (o.Comment = !o.Comment);
                    },
                    "0010:69": function (e) {
                      e.isCanvasVisible &&
                        (o.ShowSurfaceEdges = !o.ShowSurfaceEdges);
                    },
                    "0010:76": function (e) {
                      e.isCanvasVisible && (o.Locked = !o.Locked);
                    },
                    "0010:86": function (e) {
                      e.isCanvasVisible && (o.FreezeCamera = !o.FreezeCamera);
                    },
                    "0010:77": function (e) {
                      e.isCanvasVisible &&
                        (o.DisableAlertMessages = !o.DisableAlertMessages);
                    },
                    "0010:84": function (e) {
                      e.isCanvasVisible &&
                        (o.IgnoreTransparency = !o.IgnoreTransparency);
                    },
                    "0010:48": function (e) {
                      e.isCanvasVisible && (o.PlaybackSpeed = 1);
                    },
                    "0010:49": function (e) {
                      e.isCanvasVisible && (o.PlaybackSpeed = 0.5);
                    },
                    "0010:50": function (e) {
                      e.isCanvasVisible && (o.PlaybackSpeed = 2);
                    },
                    "0010:51": function (e) {
                      e.isCanvasVisible && (o.PlaybackSpeed = 4);
                    },
                    "1100:65": function (e) {
                      e.isCanvasVisible && (o.AntiAliasing = !o.AntiAliasing);
                    },
                    "1100:79": function (e) {
                      e.isCanvasVisible &&
                        (o.AmbientOcclusion = !o.AmbientOcclusion);
                    },
                    "1100:88": function (e) {
                      e.isCanvasVisible &&
                        (o.SelectionMode =
                          o.SelectionMode === r.app.SELECTION_MODE_XRAY
                            ? r.app.SELECTION_MODE_DEFAULT
                            : r.app.SELECTION_MODE_XRAY);
                    },
                    "1100:83": function (e) {
                      e.isCanvasVisible &&
                        (o.SelectionMode =
                          o.SelectionMode ===
                          r.app.SELECTION_MODE_TRANSLUCENT_SHELL
                            ? r.app.SELECTION_MODE_DEFAULT
                            : r.app.SELECTION_MODE_TRANSLUCENT_SHELL);
                    },
                    "1100:72": function (e) {
                      e.isCanvasVisible &&
                        (o.OutlineHoveredObjects = !o.OutlineHoveredObjects);
                    },
                  },
                  n.keymap || {}
                )
              );
            r.on("uniview.doc.didLoadComplete", function () {
              c.prohibitKeyboardFocus();
            }),
              c.prohibitKeyboardFocus();
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(110);
          var o = t(8);
          r.exports = function (e, n, r) {
            var a =
                r.uniview.options.StartAfterLoading ||
                (r.uniview.doc && r.uniview.doc.autoStartPlayback),
              i = r.uniview.with3D && !a && !n.showDocumentProcedureOnLoad,
              c =
                r.uniview.options.DisableTextSelection ||
                n.DisableTextSelection,
              l = this,
              g = e.create(t(66), n),
              d = r.uniview.css;
            c ||
              (d.render({
                ".skin-holder .doc-container": {
                  "user-select": "text",
                  "-moz-user-select": "text",
                  "-webkit-user-select": "text",
                  "-ms-user-select": "text",
                },
              }),
              window.addEventListener("mousedown", function (e) {
                window.getSelection().removeAllRanges();
              })),
              r.on("uniview.doc.activate", function (e, n, t) {
                var a = document.getElementById(e),
                  c = document.getElementById(n);
                if (i)
                  return (
                    r.on("app.procedure.didChangePlayerState", function (e) {
                      e && (i = !1);
                    }),
                    r.once("app.procedure.didPlay", function () {
                      i = !1;
                    }),
                    void r.once("uniview.link3d", function () {
                      i = !1;
                    })
                  );
                a &&
                  (I.querySelectorAll(".play-context").forEach(function (e) {
                    e.classList.remove("play-context");
                  }),
                  I.querySelectorAll(".active").forEach(function (e) {
                    e.classList.remove("active");
                  }),
                  a.classList.add("play-context"),
                  t || o(a)),
                  c &&
                    (I.querySelectorAll(".active").forEach(function (e) {
                      e.classList.remove("active");
                    }),
                    c.classList.add("active"),
                    t || o(c));
              });
            var A = r.app.modelInfo || r.uniview.doc || {},
              I = e.container(".doc-container");
            function s() {
              return (function e(n, t, o) {
                var a = r.uniview.ixml.json.$(
                    "SimulationInteractivity/Simulation"
                  )[0],
                  i = n + (+o + 1) + ".",
                  c = "",
                  l = t.$text("Comment").trim();
                switch (t["@name"]) {
                  case "Procedure":
                    (l = a.$text("Comment").trim()),
                      (c += '<div id="' + t.$attr("id") + '">'),
                      l &&
                        (c +=
                          '<div class="tiramisu-proc-title">' + l + "</div>"),
                      (c += (t["@children"] || [])
                        .filter(C)
                        .map(e.bind(null, ""))
                        .join("")),
                      (c += "</div>");
                    break;
                  case "Item":
                    (c +=
                      '<div id="' +
                      t.$attr("id") +
                      '" class="tiramisu-proc-item">'),
                      (c +=
                        '<div class="tiramisu-proc-item-number">' +
                        i +
                        "</div>"),
                      (c += '<div class="tiramisu-proc-item-content">'),
                      (c +=
                        t.$text("Comment") ||
                        '<p class="tiramisu-proc-item-empty"></p>'),
                      (c += (t["@children"] || [])
                        .filter(C)
                        .map(e.bind(null, i))
                        .join("")),
                      (c += "</div>"),
                      (c += "</div>");
                    break;
                  case "Action":
                    l &&
                      ((c +=
                        '<div id="' +
                        t.$attr("id") +
                        '" class="tiramisu-proc-item">'),
                      (c +=
                        '<div class="tiramisu-proc-item-number">' +
                        i +
                        "</div>"),
                      (c +=
                        '<div class="tiramisu-proc-item-content">' +
                        l +
                        "</div>"),
                      (c += "</div>"));
                }
                return c;
              })(
                "",
                r.uniview.ixml.json.$("SimulationInteractivity/Procedure")[0]
              );
            }
            function C(e) {
              var n = e["@name"];
              e.$text("Comment");
              return (
                "Procedure" === n ||
                "Item" === n ||
                ("Action" === n && !r.uniview.options.HideActions)
              );
            }
            return (
              g
                .documentTemplateHtml()
                .then(function (n) {
                  function t(e, n) {
                    return !!e && (e === n || t(e.parentNode, n));
                  }
                  function o(e) {
                    var n = window.getSelection();
                    return (
                      !n.isCollapsed &&
                      (n.containsNode
                        ? n.containsNode(e.target, !0)
                        : t(n.anchorNode, e.currentTarget) ||
                          t(n.focusNode, e.currentTarget))
                    );
                  }
                  var a,
                    i = e.div(),
                    d = n || (A.comments && "<div>" + s() + "</div>") || "";
                  i.innerHTML = d;
                  var C = i.querySelector("#pre-rendered-document");
                  if (
                    (C && (i = C),
                    g.resolveImages(i, A),
                    (I.innerHTML = i.innerHTML),
                    g.resolveLinks(I),
                    !n)
                  ) {
                    var u = document.querySelectorAll(
                      ".tiramisu-proc-item, .tiramisu-proc-title"
                    );
                    u.length &&
                      I.firstChild.classList.add("tiramisu-procedure"),
                      u.forEach(function (e) {
                        e.classList.contains("tiramisu-proc-item-empty") ||
                          (c ||
                            (e.onmousedown = function (e) {
                              a = o(e);
                            }),
                          (e.onclick = function (e) {
                            (c || (!a && !o(e))) &&
                              r.dispatch(
                                "app.procedure.didSelectSubstep",
                                this.id
                              ),
                              e.stopPropagation();
                          }));
                      });
                  }
                  r.dispatch("uniview.doc.didLoadComplete", I),
                    l.emit("loaded"),
                    r.dispatch("uniview.component.doc.loaded", l, I);
                })
                .catch(console.error.bind(console)),
              this.exports(I)
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(111);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".skin-container.doc-container {\r\n    display: block;\r\n    overflow: auto;\r\n    font-size: 14px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.doc-container .tiramisu-procedure {\r\n    padding: 0 0.5em 0 1.5em;\r\n}\r\n\r\n.doc-container .tiramisu-proc-title {\r\n    border-radius: 0;\r\n}\r\n\r\n.doc-container .tiramisu-proc-item {\r\n    width: auto;\r\n    padding: 2px 4px;\r\n    margin: 4px 0 0 0;\r\n}\r\n\r\n.doc-container .tiramisu-proc-item-empty:before {\r\n    content: \" \";\r\n    display: inline-block;\r\n}\r\n\r\n.doc-container .tiramisu-proc-item.tiramisu-proc-item-empty:before {\r\n    display: none;\r\n}\r\n\r\n.doc-container .tiramisu-proc-item-content {\r\n    margin-top: 0;\r\n}\r\n.doc-container .tiramisu-proc-item p {\r\n    margin: 0.5em 0;\r\n}\r\n\r\n.doc-container .play-context {\r\n    position: relative;\r\n}\r\n\r\n.doc-container .play-context:before {\r\n    position: absolute;\r\n    content: '';\r\n    left: -1em;\r\n    top: 0;\r\n    width: .7em;\r\n    height: 100%;\r\n    background-color: #add8e6;\r\n}\r\n\r\n.doc-container li.play-context:before {\r\n    left: -3.8em;\r\n}\r\n\r\n.doc-container .active {\r\n    background-color: #ee8;\r\n}\r\n\r\n.doc-container .link3d[data-key]:before {\r\n    content: \"3D\";\r\n    font-size: .8em;\r\n    padding: .2em;\r\n    display: inline-block;\r\n    background-color: #DD0000;\r\n    color: #FFFFFF;\r\n    font-weight: bold;\r\n    font-family: Verdana, sans-serif;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n.doc-container .link3d[data-key]:hover:before {\r\n    background-color: #FF0000;\r\n    text-decoration: underline;\r\n}\r\n\r\n.doc-container .hidden {\r\n    display: none;\r\n}\r\n\r\n.doc-container .filterHide {\r\n    display: none !important;\r\n}\r\n\r\n.link3d .link3d {\r\n    display: none;\r\n}",
        "",
      ]),
        (e.exports = n);
    },
    ,
    ,
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = (n = n || {}).linkSelector || "";
            if (o) {
              var a = t(46).DMC,
                i = e.element.querySelectorAll(o);
              try {
                if (r.training && r.training.sco && !r.training.sco.isStub()) {
                  for (var c = 0; c < i.length; c++)
                    i[c].classList.add("disabled");
                  return;
                }
                var l = n.uriIndex;
                if (!l) return;
                for (c = 0; c < i.length; c++) {
                  var g = i[c].querySelector(".dmCode"),
                    d =
                      l[
                        i[c].dataset.dmc
                          ? new a(i[c]).getURI()
                          : new a(g).getURI()
                      ];
                  d
                    ? (i[c].setAttribute("href", "#"),
                      i[c].addEventListener(
                        "click",
                        (function (e) {
                          return function () {
                            r.dispatch("doc.openLink", e);
                          };
                        })(d)
                      ))
                    : "12" === n.SCORM
                    ? i[c].classList.add("disabled")
                    : i[c].setAttribute("target", "_blank");
                }
              } catch (e) {
                console.log("**** error while remove dmRef: " + e.description);
              }
            }
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(10),
            t(120),
            (r.exports = function (e, n, r) {
              t(71);
              var o = r.uniview.i18n["procedure-with-document"] || {},
                a = n.components || {},
                i = a.uiApplyPublishOptions || t(21),
                c = a.uiProcedureApplyPublishOptions || t(72),
                l = a.uiProcedureContextMenu || t(73),
                g = a.uiProcedureCommentPanel || t(74),
                d = a.uiProcedureToolbar || t(105),
                A = a.uiProcedureMessageModal || t(97),
                I = a.uiProcedureSettingsPanel || t(80),
                s = a.uiProcedureToolbarDrawing || t(84),
                C = a.uiProcedureToolbarPartSelection || t(100),
                u = a.uiMultimedia || t(104),
                p = a.uiToolbarSceneNavigation || t(48),
                f = a.uiProcedureKeymap || t(108),
                b = a.uiDocument || t(109),
                h = a.uiDocumentFilter || t(69),
                m = a.uiDocumentToolbar || t(70),
                v = a.uiApplyProcedureHashParams || t(103),
                y = a.uiExternal3DPanel || t(62),
                w = r.skin.get("main"),
                S = r.skin.get("aux"),
                k = r.skin.get("view");
              r.on("app.procedure.didDrawingDisplayMode", function (e) {
                e
                  ? k.classList.add("display-mode-2d")
                  : k.classList.remove("display-mode-2d");
              }),
                r.once("uniview.doc.didLoadComplete", function (n) {
                  0 === n.children.length &&
                    (r.dispatch("uniview.toggleMainPanelOnlyMode", !0),
                    e.classList.add("uniview-empty-document"));
                }),
                r.uniview.options.UseProcedure3DButton ||
                  r.once("uniview.doc.didLoadComplete", function (e) {
                    var n = r.uniview.ixml.getProcedureId();
                    e.querySelectorAll(".link3d").forEach(function (e) {
                      e.dataset.key === n && e.classList.remove("link3d");
                    });
                  }),
                e.create(i, n),
                r.uniview.with3D &&
                  (r.once("uniview.ready", function () {
                    r.app.procedure.requestPlayerState();
                  }),
                  k.render(
                    [
                      g,
                      {
                        component: I,
                        options: {
                          enableAutoHide: !0,
                          hideSelectionMode:
                            !r.uniview.options.Enable3DPartSelection,
                          hideOutlineHoveredObjects:
                            !r.uniview.options.Enable3DPartSelection,
                          auxSettings: {
                            name: "Comment",
                            label: o.labelShowComments,
                          },
                        },
                      },
                    ],
                    n
                  ),
                  w.render(
                    [
                      p,
                      r.uniview.options.Enable3DPartSelection
                        ? C
                        : function () {},
                      {
                        component: d,
                        options: {
                          disableFastForward:
                            !1 === r.uniview.options.ShowPrevNextButtons,
                          disableSeekControl:
                            !1 === r.uniview.options.ShowSmoothControl,
                          disableDurationView:
                            !1 === r.uniview.options.ShowSmoothControl,
                          enableStopButton: !1,
                          enableSoundIndicator: !0,
                        },
                      },
                      {
                        component: A,
                        options: {
                          willReturnAlertBody: function (e) {
                            var n = document.getElementById(e.description);
                            return n && n.cloneNode(!0);
                          },
                          willSkipAlert: function (e) {
                            var n = document.getElementById(e.description);
                            return (
                              n ||
                                console.error(
                                  'Element with ID "' +
                                    e.description +
                                    '" not found in document.'
                                ),
                              !n
                            );
                          },
                        },
                      },
                    ],
                    n
                  ),
                  (r.touch.options.FEATURE_PICK_TOPMOST = !1)),
                w.render(
                  [s, l],
                  r.expand({ drawingMode: !r.uniview.with3D }, n)
                );
              var x,
                T = k.render(u, n),
                P = t(67);
              r.uniview.with3D ||
                r.app.ui.showCanvas ||
                r.expand(r.app, {
                  procedure: { pause: function () {} },
                  ui: {
                    showCanvas: function (n) {
                      n && e.hide(T.$el);
                    },
                  },
                }),
                S.render(
                  [
                    {
                      component: b,
                      options: {
                        disable3DLink: !r.uniview.with3D,
                        handlers: {
                          link2d: function () {
                            e.hide(T.$el),
                              r.app.procedure.toggleDrawingDisplayMode(!0),
                              P.link2d.call(this);
                          },
                          link3d: r.uniview.with3D
                            ? function () {
                                e.hide(T.$el), P.link3d.call(this);
                              }
                            : void 0,
                          linkMedia: function () {
                            var n = this.dataset.ixml || this.dataset.src,
                              t =
                                r.app.modelInfo.baseURL ||
                                r.app.modelInfo.bundleURL,
                              o =
                                /\.(wrl|vrml|cortona3d|solo|vmb|interactivity\.xml)$/i.test(
                                  n
                                )
                                  ? "solo"
                                  : this.dataset.multimediatype,
                              a = "hide" !== this.dataset.showplugincontrols,
                              i = r.app.util.toUrl(n, t);
                            switch (o) {
                              case "3D":
                              case "solo":
                                x ||
                                  ((x = !0),
                                  r.dispatch("uniview.showAllPanels"),
                                  r.dispatch("uniview.linkMedia", this),
                                  r.app.procedure.toggleDrawingDisplayMode(!0),
                                  r.app.drawing.show(!1),
                                  e.show(T.$el),
                                  T.loadSoloResource(i, {
                                    lang: r.uniview.config.lang,
                                    factory: "uniview-generic",
                                    totalMemory:
                                      +r.uniview.options.TotalMemory || 256,
                                    components: {
                                      uiToolbarSceneNavigation: a
                                        ? null
                                        : function () {},
                                    },
                                  })
                                    .then(function () {
                                      T.window.Cortona3DSolo.dispatch(
                                        "core.didChangeLayout"
                                      ),
                                        (x = !1);
                                    })
                                    .catch(function () {
                                      x = !1;
                                    })),
                                  r.app.procedure.pause();
                                break;
                              default:
                                (x = !1),
                                  r.dispatch("uniview.showAllPanels"),
                                  r.dispatch("uniview.linkMedia", this),
                                  r.app.procedure.toggleDrawingDisplayMode(!0),
                                  r.app.drawing.show(!1),
                                  r.dispatch("uniview.multimedia.load", i, {
                                    type: o,
                                    autoplay: +this.dataset.autoplay,
                                    fullscreen: +this.dataset.fullscreen,
                                    controls: a,
                                  }),
                                  r.app.procedure.pause();
                            }
                          },
                          footnote: P.footnote,
                        },
                      },
                    },
                    r.uniview.options.Enable3DPartSelection &&
                    r.uniview.options.UseSelectedObjectsExternal3DView
                      ? y
                      : function () {},
                  ],
                  n
                ),
                r.on("app.procedure.didDrawingDisplayMode", function () {
                  r.dispatch("uniview.multimedia.toggle", !1);
                }),
                r.once("uniview.doc.didLoadComplete", function (e) {
                  var t = S.create(h, n);
                  S.render(
                    [t, { component: m, options: { filterComponent: t } }],
                    n
                  ),
                    r.uniview.with3D &&
                      (r.dispatch("uniview.showAllPanels"),
                      r.app.procedure.requestPlayerState(),
                      r.on("uniview.doc.filterChanged", function () {
                        var n = [],
                          t = r.uniview.ixml,
                          o = t.getProcedureItemInfo(
                            t.getProcedureId()
                          ).children;
                        function a(e) {
                          return n.indexOf(e) >= 0;
                        }
                        e
                          .querySelectorAll(".filterHide .link.link3d")
                          .forEach(function (e) {
                            var t = e.dataset;
                            (!t.context || "step" === t.context) &&
                              n.indexOf(t.key) < 0 &&
                              n.push(t.key);
                          }),
                          (o =
                            o && o.some(a)
                              ? o.filter(function (e) {
                                  return !a(e);
                                })
                              : []);
                        var i = r.app.procedure.getContextItemId();
                        r.app.procedure.setPlayableItemList(),
                          r.app.procedure.seekToSubstep(
                            r.uniview.ixml.getProcedureId()
                          ),
                          o.length &&
                            (r.app.procedure.seekToSubstep(o[0]),
                            r.app.procedure.setPlayableItemList(o)),
                          r.app.procedure.setPlayPosition(
                            r.app.procedure.duration,
                            !1
                          ),
                          r.app.procedure.setPlayPosition(0, !1),
                          r.app.procedure.seekToSubstep(i);
                      })),
                    n.useTitleFor3DLinkButton &&
                      "string" == typeof o.activateStep &&
                      e.querySelectorAll(".link.link3d").forEach(function (e) {
                        e.title = o.activateStep;
                      });
                }),
                e.create(c, n),
                e.create(f, n),
                r.uniview.with3D ||
                  r.dispatch("uniview.toggleAuxPanelOnlyMode", !0);
              var D = (
                r.uniview.ixml.getProcedureItemInfo(
                  r.uniview.ixml.getProcedureId()
                ) || {}
              ).description;
              D &&
                !r.uniview.metadata.TITLE &&
                (document.title = D + " - " + r.uniview.description),
                e.create(v, n),
                r.on(
                  "app.procedure.didChangePlayableItemList",
                  function (e, n) {
                    r.uniview.css.render({
                      ".doc-container span.hidden-link3d.link3d": {
                        display: "none",
                      },
                    }),
                      document
                        .querySelectorAll(".link3d")
                        .forEach(function (e) {
                          var t = e.dataset.key,
                            o = r.uniview.ixml.getProcedureItemInfo(t),
                            a = !!n;
                          if (n && o)
                            for (; "procedure" !== o.type; ) {
                              if ("step" === o.type && n.indexOf(t) >= 0) {
                                a = !1;
                                break;
                              }
                              (t = o.parent),
                                (o = r.uniview.ixml.getProcedureItemInfo(t));
                            }
                          a
                            ? e.classList.add("hidden-link3d")
                            : e.classList.remove("hidden-link3d");
                        });
                  }
                );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(121);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".procedure-document-alert.procedure-alert:before {\r\n    display: none;\r\n}\r\n\r\n.doc-container a.disabled {\r\n    pointer-events: none;\r\n    cursor: default;\r\n    color: #888 !important;\r\n}\r\n\r\n.doc-container {\r\n    margin-top: .5em;\r\n}\r\n\r\n.skin-external-3d-panel {\r\n    margin-top: .5em;\r\n    max-height: 30%;\r\n    min-height: 30%;\r\n    margin-bottom: 0.5px;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(123);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".filter-tabs {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    min-width: 270px;\r\n    min-height: 140px;\r\n    max-width: 480px;\r\n    max-height: 480px;\r\n}\r\n\r\n.panel-filter {\r\n    width: auto;\r\n    background-color: rgb(220,220,220);\r\n    padding: 1em;\r\n    z-index: 10;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    height: auto;\r\n    min-height: auto;\r\n    align-self: flex-end;\r\n    margin: 1em;\r\n    position: absolute;\r\n    top: 3em;\r\n    right: 1em;\r\n    border: 1px solid gray;\r\n    box-shadow: 2px 4px 28px rgba(0,0,0,0.25), 2px 4px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n.panel-filter .footer {\r\n    margin-top: 1em;\r\n    width: 100%;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.panel-filter .footer * {\r\n    margin-left: .5em;\r\n\r\n}\r\n\r\n.filter {\r\n    display: table;\r\n    background-color: white;\r\n    z-index: 100;\r\n    white-space: normal;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.pct__table {\r\n    display: table;\r\n    width: 100%;\r\n}\r\n\r\n.filter__row,\r\n.pct__row {\r\n    display: table-row;\r\n}\r\n\r\n.pct__row {\r\n    cursor: pointer;\r\n}\r\n\r\n.pct__row.applied {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.filter.applied {\r\n    border: 2px solid green;\r\n}\r\n\r\n.filter__attribute,\r\n.filter__value,\r\n.filter__action,\r\n.pct__description {\r\n    display: table-cell;\r\n    padding: 5px;\r\n    border-bottom: 1px solid gray;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.filter__row:last-child .filter__attribute,\r\n.filter__row:last-child .filter__value,\r\n.filter__row:last-child .filter__action,\r\n.pct__row:last-child .pct__description {\r\n    border-bottom: none;\r\n}\r\n\r\n.filter__attribute {\r\n    width: 50px;\r\n}\r\n\r\n.filter__value {\r\n    min-width: 5em;\r\n}\r\n\r\n.filter__action {\r\n    text-align: center;\r\n    min-width: 4em;\r\n    width: 6em;\r\n}\r\n\r\n.filter__action select {\r\n    width: 100%;\r\n    font-size: 1em;\r\n    border: none;\r\n}\r\n\r\n.filter-tabs .skin-page-title,\r\n.filter-tabs .skin-page-body {\r\n    background-color: #F3F3F3;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    ,
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          r.exports = function (e, n, r) {
            var o = r.uniview.i18n["solo-skin-question"],
              a = t(4),
              i = e.container(".right"),
              c = e.button(
                {
                  onclick: function () {
                    r.dispatch("uniview.doc.submitAllAnswers");
                  },
                },
                o.UI_BTN_submitAllAnswer
              ),
              l = e.button(
                {
                  onclick: function () {
                    r.dispatch("uniview.doc.submitAnswer");
                  },
                },
                o.UI_BTN_Answer
              ),
              g = e.button(
                {
                  onclick: function () {
                    r.dispatch(
                      "uniview.doc.showPreviousOrNextSlide",
                      "previous"
                    );
                  },
                },
                o.UI_BTN_Previous
              ),
              d = e.button(
                {
                  onclick: function () {
                    r.dispatch("uniview.doc.showPreviousOrNextSlide", "next");
                  },
                },
                o.UI_BTN_Next
              );
            i.append(l, g, d),
              i.append(
                n.disableExpandButton
                  ? ""
                  : e.create(a, { panelName: "Aux" }).element
              );
            var A = e.container(".left");
            A.append(c);
            var I = e.toolbar(".main.top", A, i);
            return (
              r.on("uniview.doc.changeQuestionSlide", function (e) {
                (l.disabled = !e.answer),
                  (d.disabled = !e.next),
                  (g.disabled = !e.previous);
              }),
              r.on("uniview.doc.slidePassed", function () {
                l.disabled = !0;
              }),
              r.on("uniview.doc.allSlidesPassed", function () {
                (l.disabled = !0), (c.disabled = !0);
              }),
              this.exports(I)
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(129),
            (r.exports = function (e, n, t) {
              var r;
              function o() {
                for (
                  var e = document.querySelectorAll(
                      ".control .up, .control .down"
                    ),
                    n = 0;
                  n < e.length;
                  n++
                )
                  e[n].disabled = !0;
              }
              function a(e) {
                var n = e.cloneNode(!0);
                return e.parentElement.replaceChild(n, e), (e = null), n;
              }
              function i(e, n) {
                for (; e && !e.classList.contains("highlightAnswer"); )
                  e = e.parentElement;
                e &&
                  ("remove" == n
                    ? (e.classList.remove("correct"),
                      e.classList.remove("wrong"))
                    : "correct" == n
                    ? e.classList.add("correct")
                    : "wrong" == n && e.classList.add("wrong"));
              }
              function c(e, n) {
                if (e !== n) {
                  var t = document.createElement("div");
                  e.parentElement.replaceChild(t, e),
                    n.parentElement.replaceChild(e, n),
                    t.parentElement.replaceChild(n, t),
                    (t = null);
                }
              }
              function l(e) {
                var n;
                try {
                  n = new Event("click");
                } catch (e) {
                  (n = document.createEvent("Event")).initEvent(
                    "click",
                    !0,
                    !0
                  );
                }
                e.dispatchEvent(n);
              }
              function g() {
                r && (r.classList.remove("select"), (r = null)), o();
                var e = (function (e) {
                  for (var n = []; e.previousElementSibling; )
                    n.push(e.previousElementSibling),
                      (e = e.previousElementSibling);
                  return n;
                })((r = this)).length;
                r.classList.add("select");
                for (var n = r; !n.classList.contains("assessmentQuestion"); )
                  if (!(n = n.parentElement)) return;
                var t = n.querySelectorAll(".control"),
                  g = t.item(e).querySelector(".up"),
                  d = t.item(e).querySelector(".down");
                (g = a(g)),
                  (d = a(d)),
                  (g.disabled = !0),
                  (d.disabled = !0),
                  r.parentElement.previousElementSibling &&
                    ((g.disabled = !1),
                    g.addEventListener("click", function () {
                      var n =
                        r.parentElement.previousElementSibling.children.item(e);
                      i(r, "remove"), i(n, "remove"), c(r, n), l(r);
                    })),
                  r.parentElement.nextElementSibling &&
                    ((d.disabled = !1),
                    d.addEventListener("click", function () {
                      var n =
                        r.parentElement.nextElementSibling.children.item(e);
                      i(r, "remove"), i(n, "remove"), c(r, n), l(r);
                    }));
              }
              !(function () {
                for (
                  var e = document.querySelectorAll("input[data-correct]"),
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var t = e[n];
                  ("radio" != t.type && "checkbox" != t.type) ||
                    (t.checked = !0),
                    "text" == t.type &&
                      (t.value = t.getAttribute("data-correct"));
                }
                var r = document.querySelectorAll(".orderItem");
                for (n = 0; n < r.length; n++)
                  r[n].addEventListener("click", g);
                var a = document.querySelectorAll(".headerControl");
                for (n = 0; n < a.length; n++)
                  a.item(n).classList.add("skin-toolbar"),
                    a.item(n).classList.add("main");
                var i = document.querySelectorAll(
                  ".headerControl input, .headerControl button"
                );
                for (n = 0; n < i.length; n++)
                  i.item(n).classList.add("skin-control");
                o();
              })();
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(130);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".headerControl {\n  padding: 0 !important;\n}\n\n.orderItem:hover {\n  background-color: #ffefd5;\n}\n\n.orderItem.select {\n  background-color: aquamarine;\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(132),
            (r.exports = function (e, n, t) {
              var r,
                o = t.uniview.i18n["solo-skin-question"];
              function a(e, n) {
                var o = r[e.id],
                  a = o.type,
                  i = o.correct;
                function c(e) {
                  return (
                    !n &&
                    (o.attempts
                      ? ((o.attempts = o.attempts - 1),
                        0 == o.attempts
                          ? (t.dispatch("uniview.doc.wrongAnswer", void 0, e),
                            !1)
                          : (t.dispatch(
                              "uniview.doc.wrongAnswer",
                              o.attempts,
                              e
                            ),
                            !0))
                      : (t.dispatch("uniview.doc.wrongAnswer", void 0, e), !0))
                  );
                }
                function l(n) {
                  for (
                    var r = e.querySelectorAll(".answerControl"), o = 0;
                    o < r.length;
                    o++
                  )
                    (r[o].disabled = !0),
                      "text" == r[o].type && (r[o].value = i.join(" | "));
                  var a = e.querySelectorAll(".orderItem");
                  for (o = 0; o < a.length; o++) {
                    var c = a[o].cloneNode(!0);
                    a[o].parentElement.replaceChild(c, a[o]), (a[o] = null);
                  }
                  t.dispatch("uniview.doc.slidePassed"),
                    e.setAttribute("passed", n);
                }
                if (
                  (e.querySelectorAll(".highlightAnswer").forEach(function (e) {
                    s(e, "remove");
                  }),
                  "complete" == a)
                ) {
                  var g = e.querySelector(".answerControl"),
                    d = g.value;
                  -1 != i.indexOf(d)
                    ? (s(g, "correct"), l("passed"))
                    : (s(g, "wrong"), c() || l("failed"));
                }
                if ("select" == a) {
                  var A,
                    I = i.slice(),
                    u = e.querySelectorAll(".answerControl"),
                    p = 0,
                    f = 0;
                  u.forEach(function (e) {
                    var t = I.indexOf(e.id);
                    e.checked
                      ? -1 != t
                        ? (I.splice(t, 1), s(e, "correct"), p++)
                        : (I.push(e.id), s(e, "wrong"), f++)
                      : n && -1 != t && s(e, "correct");
                  }),
                    p || f
                      ? I.length && !f && (A = "notFullAnswer")
                      : (A = "nothingChoose"),
                    I.length ? c(A) || l("failed") : l("passed");
                }
                if ("match" == a) {
                  (I = i.slice()), (u = e.querySelectorAll(".answerControl"));
                  for (var b = 0; b < u.length; b += 2) {
                    var h = u[b].id,
                      m = u[b + 1].id;
                    -1 != I.indexOf(h) &&
                    -1 != I.indexOf(m) &&
                    I.indexOf(m) == I.indexOf(h) + 1
                      ? (I.splice(I.indexOf(h), 2), s(u[b], "correct"))
                      : s(u[b], "wrong");
                  }
                  C(), I.length ? c() || l("failed") : l("passed");
                }
                if ("sequence" == a) {
                  I = i.slice();
                  (u = e.querySelectorAll(".answerControl")).forEach(function (
                    e,
                    n
                  ) {
                    var t = e.id;
                    I.indexOf(t) != n
                      ? ((I[n] = void 0), s(e, "wrong"))
                      : s(e, "correct");
                  }),
                    C(),
                    I.some(function (e) {
                      return void 0 === e;
                    })
                      ? c() || l("failed")
                      : l("passed");
                }
              }
              function i(e) {
                for (var n = 0; n < 3; n++)
                  for (var t = e.length - 1; t > 0; t--) {
                    var r = Math.floor(Math.random() * (t + 1));
                    t != r && c(e[t], e[r]);
                  }
              }
              function c(e, n) {
                if (e !== n) {
                  var t = document.createElement("div");
                  e.parentElement.replaceChild(t, e),
                    n.parentElement.replaceChild(e, n),
                    t.parentElement.replaceChild(n, t),
                    (t = null);
                }
              }
              function l(e, n) {
                if (0 != e.length) {
                  var t;
                  if ((e.length || (e = [e]), n)) {
                    t = e[0];
                    for (var r = 1; r < e.length; r++) t.appendChild(e[r]);
                  } else {
                    (t = document.createElement("div")),
                      e[0].parentElement.replaceChild(t, e[0]);
                    for (r = 0; r < e.length; r++) t.appendChild(e[r]);
                  }
                  t.classList.add("slide");
                }
              }
              function g(e, n) {
                var t = { answer: !1, previous: !1, next: !1 };
                return (
                  "hide" == n ||
                    ((e.nextElementSibling &&
                      e.nextElementSibling.classList.contains("slide")) ||
                      (t.next = !1),
                    e.nextElementSibling &&
                      e.nextElementSibling.classList.contains("slide") &&
                      (t.next = !0),
                    (e.previousElementSibling &&
                      e.previousElementSibling.classList.contains("slide")) ||
                      (t.previous = !1),
                    e.previousElementSibling &&
                      e.previousElementSibling.classList.contains("slide") &&
                      (t.previous = !0),
                    e.classList.contains("assessmentQuestion") &&
                    e.getAttribute("passed")
                      ? (t.answer = !1)
                      : e.classList.contains("assessmentQuestion")
                      ? (t.answer = !0)
                      : (t.answer = !1)),
                  t
                );
              }
              function d(e, n) {
                e &&
                  (e.classList.remove("hide"),
                  e.classList.remove("show"),
                  e.classList.add(n),
                  t.dispatch("uniview.doc.changeQuestionSlide", g(e, n)));
              }
              function A(e) {
                if (e) {
                  for (
                    var n = e;
                    n && !n.classList.contains("skin-page-body");

                  )
                    n = n.parentElement;
                  if (n) {
                    for (var r = 0, o = n; n && n.previousElementSibling; )
                      (n = n.previousElementSibling), r++;
                    return (
                      t.dispatch("uniview.component.tabs.activateByNumber", r),
                      o
                    );
                  }
                }
              }
              function I() {
                function e() {
                  return Math.floor(65536 * (1 + Math.random()))
                    .toString(16)
                    .substring(1);
                }
                return e() + e();
              }
              function s(e, n) {
                for (; e && !e.classList.contains("highlightAnswer"); )
                  e = e.parentElement;
                e &&
                  ("remove" == n
                    ? (e.classList.remove("correct"),
                      e.classList.remove("wrong"))
                    : "correct" == n
                    ? e.classList.add("correct")
                    : "wrong" == n && e.classList.add("wrong"));
              }
              function C() {
                var e = document.querySelector(".select");
                e && (e.classList.remove("select"), (e = null)),
                  (function () {
                    for (
                      var e = document.querySelectorAll(
                          ".control .up, .control .down"
                        ),
                        n = 0;
                      n < e.length;
                      n++
                    )
                      e[n].disabled = !0;
                  })();
              }
              function u() {
                function e(e) {
                  (this.id = e.id),
                    (this.type = e.getAttribute("data-type")),
                    (this.correct = (function (e, n) {
                      var t = [];
                      try {
                        var r = e.querySelectorAll(".answerControl");
                        if ("match" == n)
                          for (
                            var o =
                                e.querySelectorAll(".orderItem")[0]
                                  .parentElement.children.length,
                              a = 0;
                            a < r.length;
                            a += o
                          )
                            for (var i = a; i < a + o; i++)
                              (r[i].id = I()), t.push(r[i].id);
                        else
                          for (a = 0; a < r.length; a++) {
                            var c = r[a];
                            if (
                              ((c.id = I()),
                              "complete" == n && c.getAttribute("data-correct"))
                            ) {
                              var l = c.getAttribute("data-correct");
                              if (!l) return;
                              (t = l.split("|")),
                                c.removeAttribute("data-correct"),
                                (c.value = "");
                            }
                            "select" == n &&
                              c.getAttribute("data-correct") &&
                              (t.push(c.id),
                              c.removeAttribute("data-correct"),
                              (c.checked = !1)),
                              "sequence" == n && t.push(c.id);
                          }
                      } catch (e) {
                        console.log(
                          "Error fill correct answers: " + e.desciption
                        );
                      }
                      return t;
                    })(e, this.type)),
                    (this.attempts = e.getAttribute("data-attempts")),
                    (this.weightFactor = e.getAttribute("data-weightFactor")),
                    (function (e, n) {
                      var t = e.querySelectorAll(".canShuffle");
                      if (t.length)
                        if (
                          ((t = Array.prototype.slice.call(t)), "match" == n)
                        ) {
                          for (var r = [], o = [], a = 0; a < t.length; a++)
                            a % 2 == 1 ? r.push(t[a]) : o.push(t[a]);
                          i(r), i(o);
                        } else i(t);
                    })(e, this.type);
                }
                for (
                  var n = document.querySelectorAll(
                      ".slide.assessmentQuestion"
                    ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = new e(n[t]);
                  this[r.id] = r;
                }
              }
              function p() {
                document
                  .querySelectorAll(".assessmentQuestion")
                  .forEach(function (e) {
                    if (!e.getAttribute("passed")) {
                      a(e, !0);
                    }
                  }),
                  (function () {
                    for (
                      var e = document.querySelectorAll(".assessmentQuestion"),
                        n = 0,
                        r = 0,
                        a = 0;
                      a < e.length;
                      a++
                    ) {
                      var i = e[a],
                        c = 1,
                        l = i.getAttribute("data-weightingFactor");
                      +l && (c *= l),
                        (n += c),
                        "passed" == i.getAttribute("passed") && (r += c);
                    }
                    var g = r / n;
                    t.training &&
                      t.training.sco &&
                      t.training.sco.setScore(r, n, g);
                    var d = document.createElement("h3");
                    d.innerHTML = o.score + ": " + 100 * g;
                    var A = document.querySelector(".sco-tabs");
                    A
                      ? A.parentElement.insertBefore(d, A.nextElementSibling)
                      : e[0].parentElement.appendChild(d);
                  })(),
                  t.dispatch("uniview.doc.allSlidesPassed");
              }
              (function () {
                function e(e, n) {
                  for (var t = 0; t < e.children.length; t++)
                    for (var r = 0; r < n.length; r++)
                      e.getAttribute(n[r]) &&
                        e.children[t].setAttribute(n[r], e.getAttribute(n[r]));
                }
                function n(e) {
                  for (; e.firstElementChild; )
                    e.parentElement.insertBefore(e.firstElementChild, e);
                  e.parentElement.removeChild(e);
                }
                for (
                  var t = document.querySelectorAll(".lcInteraction"), r = 0;
                  r < t.length;
                  r++
                ) {
                  var o = t[r];
                  1 == o.getAttribute("data-shuffle") &&
                    ((a = o), i(Array.prototype.slice.call(a.children))),
                    e(o, ["data-attempts", "data-weightingFactor"]),
                    n(o);
                }
                var a;
              })(),
                (function () {
                  l(
                    document.querySelectorAll(
                      [
                        ".learningAssessment>.lcSummary",
                        '*[data-class~="learningAssessment/learningAssessmentbody"]>*[data-class~="learningBase/lcSummary"]',
                      ].join(", ")
                    )
                  ),
                    l(
                      document.querySelectorAll(
                        [
                          ".learningAssessment>.lcIntro",
                          ".learningAssessment>.lcDuration",
                          '*[data-class~="learningAssessment/learningAssessmentbody"]>*[data-class~="topic/shortdesc"]',
                          '*[data-class~="learningAssessment/learningAssessmentbody"]>.section',
                        ].join(", ")
                      )
                    );
                  for (
                    var e = document.querySelectorAll(".assessmentQuestion"),
                      n = 0;
                    n < e.length;
                    n++
                  )
                    l(e[n], "convert");
                })(),
                (function () {
                  for (
                    var e = document.querySelectorAll(".slide"), n = 0;
                    n < e.length;
                    n++
                  )
                    d(e[n], "hide");
                  var t = document.querySelectorAll(".sco-tabs .trainingStep");
                  t.length
                    ? t.forEach(function (e) {
                        d(e.querySelectorAll(".slide")[0], "show");
                      })
                    : d(e[0], "show");
                })(),
                (r = new u()),
                t.on("uniview.doc.showPreviousOrNextSlide", function (e) {
                  !(function (e) {
                    var n = document.querySelector(".sco-tabs"),
                      t = n
                        ? n.querySelector(".active .slide.show")
                        : (t = document.querySelector(".slide.show"));
                    d(t, "hide"),
                      "next" == e
                        ? d(t.nextElementSibling, "show")
                        : "previous" == e &&
                          d(t.previousElementSibling, "show");
                  })(e);
                }),
                t.on("uniview.doc.submitAnswer", function () {
                  var e = document.querySelector(".sco-tabs"),
                    n = e
                      ? e.querySelector(".active .slide.show")
                      : (n = document.querySelector(".slide.show"));
                  a(n, !1);
                }),
                t.on("uniview.doc.submitAllAnswers", function () {
                  for (
                    var e = document.querySelectorAll(".assessmentQuestion"),
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var r = e[n];
                    if (!r.getAttribute("passed")) {
                      new Promise(function (e, n) {
                        t.dispatch(
                          "uniview.doc.confirmAnswer",
                          o.notAllAnswersAnswered
                        ),
                          t.on("uniview.doc.confirmAnswer.OK", function () {
                            e(!0);
                          }),
                          t.on("uniview.doc.confirmAnswer.Cancel", function () {
                            e(!1);
                          });
                      })
                        .then(function (e) {
                          var n = !0;
                          if (!e) {
                            var t = A(r);
                            d(
                              t
                                ? t.querySelector(".slide.show")
                                : document.querySelector(".slide.show"),
                              "hide"
                            ),
                              d(r, "show"),
                              (n = !1);
                          }
                          return n;
                        })
                        .then(function (e) {
                          e && p();
                        });
                      break;
                    }
                  }
                  n == e.length && p();
                }),
                t.on("uniview.component.tab.activated", function (e, n) {
                  var r = document
                    .querySelectorAll(".skin-page-body.active")[0]
                    .querySelector(".slide.show");
                  if (r) {
                    o = g(r);
                    t.dispatch("uniview.doc.changeQuestionSlide", o);
                  } else {
                    var o = g(null, "hide");
                    t.dispatch("uniview.doc.changeQuestionSlide", o);
                  }
                }),
                t.on("uniview.doc.getAndChangeQuestionSlide", function (e) {
                  t.dispatch("uniview.doc.changeQuestionSlide", g(e));
                });
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(133);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        '.learningAssessment:before {\n    content: "" !important;\n}\n\n.correct {\n  background-color: #90EE90;\n}\n\n.wrong {\n  background-color: #FFCCCC;\n}',
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(135);
          var o = t(5);
          function a(e) {
            return "function" == typeof e;
          }
          r.exports = function (e, n, t) {
            var r = t.uniview.i18n["solo-skin-question"];
            function i(i) {
              var c;
              if (!a(n.willSkipAlert) || !n.willSkipAlert(i)) {
                var l,
                  g =
                    (a(n.willReturnAlertBody) && n.willReturnAlertBody(i)) ||
                    "";
                "confirm" == i.type
                  ? ((c = r.notAllAnswersAnswered),
                    new Promise(function (n, t) {
                      var a = e.button(
                          {
                            onclick: function () {
                              e.emit("modal.close"), n(!0);
                            },
                          },
                          r.UI_BTN_YES
                        ),
                        i = e.button(
                          {
                            onclick: function () {
                              e.emit("modal.close"), n(!1);
                            },
                          },
                          r.UI_BTN_NO
                        ),
                        l = e.render(o, {
                          hideDismissButton: !0,
                          disableAutoDismiss: !0,
                          content: c,
                          footerContent: e.container(".buttons-group", a, i),
                        });
                      (l.$el.tabIndex = 0),
                        l.$el.addEventListener("focus", function () {
                          i.focus();
                        }),
                        l.$el.focus();
                    })).then(function (e) {
                      e
                        ? t.dispatch("uniview.doc.confirmAnswer.OK")
                        : t.dispatch("uniview.doc.confirmAnswer.Cancel");
                    })
                  : ((l = e.render(o, {
                      hideDismissButton: !1,
                      title: a(n.willReturnAlertTitle)
                        ? n.willReturnAlertTitle(i)
                        : "",
                      content: g || e.span({ innerHTML: i.description }),
                    })),
                    e.append(l),
                    l.$el.focus(),
                    l.once("closed", function () {}));
              }
            }
            t.on("uniview.doc.wrongAnswer", function (e, n) {
              var t = "";
              (t =
                "notFullAnswer" == n
                  ? r.notFullAnswer
                  : "nothingChoose" == n
                  ? r.nothingChoose
                  : r.wrongAnswer),
                e && (t = t + ". " + r.checkAttemps + e),
                i({ description: t });
            }),
              t.on("uniview.doc.confirmAnswer", function (e) {
                i({ description: e, type: "confirm" });
              }),
              this.on("show", i);
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(136);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".buttons-group button {\r\n    margin-left: .5em;\r\n}\r\n\r\n",
        "",
      ]),
        (e.exports = n);
    },
    ,
    function (e, n, t) {
      var r = t(0),
        o = t(139);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        '.doc-container,\n.procedure-alert {\n  /*\n    s1000d_prc.css\n    13.05.2015 12:08:16\n*/\n  /*\nhtml, body {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-size: 10pt;\n  font-family: Verdana, sans-serif;\n  overflow: auto;\n}\n\na[href] { \n    color:#0000A0; \n    text-decoration: none; \n}\na[href]:visited { \n    color: #0000A0; \n}\na[href]:hover { \n    color: #0000FF; \n    text-decoration: underline; \n}\n*/\n  /* Caption */\n  /* caption inline */\n  /* captionGroup */\n  /* Warning, Caution, Notes */\n  /* References */\n  /* Toggle elements styles (bold, italic, underline) */\n  /* Paragraphs */\n  /* Lists */\n  /* Definition List */\n  /* Lists headings styles */\n  /* Tables */\n  /* Preliminary requirements */\n  /* Tabular data */\n  /* taskDuration */\n  /* Tables heading */\n  /* Tabular headers */\n  /* Autocontent heading */\n  /* Inlines */\n  /* Blocks */\n  /* Centerhead 2 */\n  /* Sidehead 1 */\n  /* Sidehead 2 */\n  /* Sidehead 3 */\n  /* Sidehead 4 */\n  /* acronyms */\n  /* change bars */\n  /* common headers*/\n  /* common info */\n  /* fault */\n  /* footnote */\n  /* global */\n  /* counters */\n  /* ==== alt steps ==== */\n  /* lists */\n  /* proced -> preliminaryRqmts */\n  /* ==== format table ==== */\n  /* chrome fix */\n  /* ==== column widths ==== */\n  /* ==== table captions ==== */\n  /* ==== table headers ==== */\n  /* ==== table contents ==== */\n  /* proced -> productionMaintData */\n  /*.workAreaLocationGroup .zoneRef:before,\n.workAreaLocationGroup .accessPointRef:before {\n    content: "";\n}*/\n  /* References */\n  /* =========== refs ============ */\n  /* ========== internalRef ============ */\n  /* figure */\n  /* table */\n  /* multimedia */\n  /* para */\n  /* proceduralStep */\n  /* sheet[graphic] */\n  /* multimediaObject */\n  /* hotspot */\n  /* zone */\n  /* accessPoint */\n  /* ==== CSN ==== */\n  /* ==== materialSetRef ==== */\n  /* tables */\n  /* ========== frontmatter =========== */\n  /* crew */\n  /* ==== learning ==== */\n  /* ==== inlineApplic ==== */\n  /* ==== ACT ==== */\n  /* ==== PCT ==== */\n}\n.doc-container .dmodule,\n.procedure-alert .dmodule {\n  padding: 8pt;\n}\n.doc-container .content,\n.procedure-alert .content {\n  counter-reset: table figure;\n}\n.doc-container .content > *,\n.procedure-alert .content > * {\n  margin-top: 12pt;\n}\n.doc-container .dmodule:after,\n.procedure-alert .dmodule:after {\n  display: block;\n  text-align: center;\n  margin-top: 16pt;\n  font-weight: bold;\n  min-height: 1em;\n}\n.doc-container .taskDuration:before,\n.procedure-alert .taskDuration:before,\n.doc-container .title,\n.procedure-alert .title {\n  display: block;\n  font-weight: bold;\n  margin-top: 8pt;\n  min-height: 1em;\n}\n.doc-container .identAndStatusSection,\n.procedure-alert .identAndStatusSection {\n  background-color: #E0FFFF;\n  padding: 6pt;\n  margin-top: 12pt;\n  border: solid silver 1px;\n  cursor: pointer;\n}\n.doc-container .identAndStatusSection > .dmAddress,\n.procedure-alert .identAndStatusSection > .dmAddress {\n  display: block;\n  text-align: right;\n  min-height: 1em;\n}\n.doc-container .identAndStatusSection > .dmAddress *,\n.procedure-alert .identAndStatusSection > .dmAddress * {\n  display: block;\n  font-weight: normal;\n  min-height: 1em;\n}\n.doc-container .identAndStatusSection > .dmAddress .dmCode,\n.procedure-alert .identAndStatusSection > .dmAddress .dmCode {\n  font-weight: bold;\n  margin-top: 12pt;\n  margin-bottom: 6pt;\n}\n.doc-container .identAndStatusSection > .dmAddress *:before,\n.procedure-alert .identAndStatusSection > .dmAddress *:before {\n  color: #808080;\n  font-weight: bold;\n  margin-right: 1em;\n}\n.doc-container .externalPubTitle,\n.procedure-alert .externalPubTitle {\n  font-weight: bold;\n}\n.doc-container .dmStatus,\n.procedure-alert .dmStatus {\n  display: none;\n}\n.doc-container .dmStatus .security,\n.procedure-alert .dmStatus .security {\n  font-weight: bold;\n}\n.doc-container .brexDmRef,\n.procedure-alert .brexDmRef,\n.doc-container .qualityAssurance,\n.procedure-alert .qualityAssurance,\n.doc-container .systemBreakdownCode,\n.procedure-alert .systemBreakdownCode,\n.doc-container .skillLevel,\n.procedure-alert .skillLevel,\n.doc-container .reasonForUpdate,\n.procedure-alert .reasonForUpdate,\n.doc-container .dmStatus .techStandard,\n.procedure-alert .dmStatus .techStandard,\n.doc-container .dmStatus .applic,\n.procedure-alert .dmStatus .applic,\n.doc-container .dmStatus .applicCrossRefTableRef,\n.procedure-alert .dmStatus .applicCrossRefTableRef,\n.doc-container .dmStatus .functionalItemRef,\n.procedure-alert .dmStatus .functionalItemRef,\n.doc-container .dmStatus .remarks,\n.procedure-alert .dmStatus .remarks,\n.doc-container .dmStatus .security,\n.procedure-alert .dmStatus .security,\n.doc-container .dmStatus .responsiblePartnerCompany,\n.procedure-alert .dmStatus .responsiblePartnerCompany,\n.doc-container .dmStatus .originator,\n.procedure-alert .dmStatus .originator {\n  text-align: right;\n  display: block;\n  min-height: 1em;\n}\n.doc-container .brexDmRef,\n.procedure-alert .brexDmRef,\n.doc-container .qualityAssurance,\n.procedure-alert .qualityAssurance,\n.doc-container .systemBreakdownCode,\n.procedure-alert .systemBreakdownCode,\n.doc-container .skillLevel,\n.procedure-alert .skillLevel,\n.doc-container .reasonForUpdate,\n.procedure-alert .reasonForUpdate,\n.doc-container .dmStatus .techStandard,\n.procedure-alert .dmStatus .techStandard,\n.doc-container .dmStatus .applic,\n.procedure-alert .dmStatus .applic,\n.doc-container .dmStatus .applicCrossRefTableRef,\n.procedure-alert .dmStatus .applicCrossRefTableRef,\n.doc-container .dmStatus .functionalItemRef,\n.procedure-alert .dmStatus .functionalItemRef,\n.doc-container .dmStatus .remarks,\n.procedure-alert .dmStatus .remarks {\n  margin-top: 6pt;\n}\n.doc-container .dataRestrictions,\n.procedure-alert .dataRestrictions {\n  font-family: monospace;\n  font-size: 9pt;\n}\n.doc-container .restrictionInstructions,\n.procedure-alert .restrictionInstructions {\n  margin-left: 20pt;\n}\n.doc-container .dataHandling:before,\n.procedure-alert .dataHandling:before,\n.doc-container .dataDestruction:before,\n.procedure-alert .dataDestruction:before,\n.doc-container .dataDisclosure:before,\n.procedure-alert .dataDisclosure:before,\n.doc-container .dataDistribution:before,\n.procedure-alert .dataDistribution:before,\n.doc-container .copyright:before,\n.procedure-alert .copyright:before,\n.doc-container .exportControl:before,\n.procedure-alert .exportControl:before {\n  display: block;\n  margin-top: 6pt;\n  margin-bottom: 6pt;\n  min-height: 1em;\n}\n.doc-container .dataRestrictions:before,\n.procedure-alert .dataRestrictions:before,\n.doc-container .dataHandling,\n.procedure-alert .dataHandling,\n.doc-container .dataDisclosure,\n.procedure-alert .dataDisclosure,\n.doc-container .dataDestruction,\n.procedure-alert .dataDestruction,\n.doc-container .dataDistribution,\n.procedure-alert .dataDistribution,\n.doc-container .dataConds,\n.procedure-alert .dataConds,\n.doc-container .policyStatement,\n.procedure-alert .policyStatement,\n.doc-container .supersedure,\n.procedure-alert .supersedure,\n.doc-container .copyright,\n.procedure-alert .copyright,\n.doc-container .exportControl,\n.procedure-alert .exportControl {\n  margin-top: 2pt;\n  margin-bottom: 6pt;\n  text-align: left;\n}\n.doc-container .restrictionInfo,\n.procedure-alert .restrictionInfo {\n  margin-left: 20pt;\n  margin-top: 12pt;\n}\n.doc-container .dmAddress .dmTitle > *,\n.procedure-alert .dmAddress .dmTitle > * {\n  text-align: center;\n}\n.doc-container .dmAddress .techName,\n.procedure-alert .dmAddress .techName,\n.doc-container .centerhead1,\n.procedure-alert .centerhead1 {\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 27pt;\n  margin-bottom: 17pt;\n}\n.doc-container .mainProcedure,\n.procedure-alert .mainProcedure,\n.doc-container .isolationMainProcedure,\n.procedure-alert .isolationMainProcedure {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n}\n.doc-container .mainProcedure > .link,\n.procedure-alert .mainProcedure > .link,\n.doc-container .isolationMainProcedure > .link,\n.procedure-alert .isolationMainProcedure > .link {\n  margin-top: 27pt;\n  position: inherit;\n}\n.doc-container .mainProcedure:before,\n.procedure-alert .mainProcedure:before,\n.doc-container .content > .description:before,\n.procedure-alert .content > .description:before,\n.doc-container .maintPlanning:before,\n.procedure-alert .maintPlanning:before,\n.doc-container .isolationMainProcedure:before,\n.procedure-alert .isolationMainProcedure:before,\n.doc-container .descrCrew:before,\n.procedure-alert .descrCrew:before,\n.doc-container .crewRefCard:before,\n.procedure-alert .crewRefCard:before,\n.doc-container .commonRepository:before,\n.procedure-alert .commonRepository:before,\n.doc-container .faultReporting:before,\n.procedure-alert .faultReporting:before,\n.doc-container .detectionInfo:before,\n.procedure-alert .detectionInfo:before,\n.doc-container .content > .refs:before,\n.procedure-alert .content > .refs:before,\n.doc-container .preliminaryRqmts:before,\n.procedure-alert .preliminaryRqmts:before,\n.doc-container .closeRqmts:before,\n.procedure-alert .closeRqmts:before,\n.doc-container .dmAddress .infoName,\n.procedure-alert .dmAddress .infoName,\n.doc-container .dmAddress .infoNameVariant,\n.procedure-alert .dmAddress .infoNameVariant,\n.doc-container .centerhead2,\n.procedure-alert .centerhead2,\n.doc-container .productCrossRefTable:before,\n.procedure-alert .productCrossRefTable:before,\n.doc-container .applicCrossRefTable:before,\n.procedure-alert .applicCrossRefTable:before {\n  display: block;\n  font-size: 14pt;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  margin-top: 27pt;\n  margin-bottom: 17pt;\n  min-height: 1em;\n}\n.doc-container .dmAddress .infoName + .infoNameVariant,\n.procedure-alert .dmAddress .infoName + .infoNameVariant {\n  margin-top: 0;\n}\n.doc-container .productionMaintData:before,\n.procedure-alert .productionMaintData:before,\n.doc-container .reqCondGroup:before,\n.procedure-alert .reqCondGroup:before,\n.doc-container .reqSupportEquips:before,\n.procedure-alert .reqSupportEquips:before,\n.doc-container .reqSupplies:before,\n.procedure-alert .reqSupplies:before,\n.doc-container .reqTechInfoGroup:before,\n.procedure-alert .reqTechInfoGroup:before,\n.doc-container .reqSpares:before,\n.procedure-alert .reqSpares:before,\n.doc-container .reqSafety:before,\n.procedure-alert .reqSafety:before,\n.doc-container .reqPersons:before,\n.procedure-alert .reqPersons:before,\n.doc-container .cautionRepository:before,\n.procedure-alert .cautionRepository:before,\n.doc-container .toolRepository:before,\n.procedure-alert .toolRepository:before,\n.doc-container .controlIndicatorRepository:before,\n.procedure-alert .controlIndicatorRepository:before,\n.doc-container .functionalPhysicalAreaRepository:before,\n.procedure-alert .functionalPhysicalAreaRepository:before,\n.doc-container .warningRepository:before,\n.procedure-alert .warningRepository:before,\n.doc-container .zoneRepository:before,\n.procedure-alert .zoneRepository:before,\n.doc-container .partRepository:before,\n.procedure-alert .partRepository:before,\n.doc-container .functionalItemRepository:before,\n.procedure-alert .functionalItemRepository:before,\n.doc-container .workAreaLocationGroup:before,\n.procedure-alert .workAreaLocationGroup:before,\n.doc-container .sidehead0,\n.procedure-alert .sidehead0 {\n  display: block;\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: left;\n  margin-top: 27pt;\n  margin-bottom: 17pt;\n  min-height: 1em;\n}\n.doc-container .level1 > .title,\n.procedure-alert .level1 > .title,\n.doc-container .sidehead1,\n.procedure-alert .sidehead1 {\n  display: block;\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: left;\n  margin-top: 27pt;\n  margin-bottom: 7pt;\n  min-height: 1em;\n}\n.doc-container .level2 > .title,\n.procedure-alert .level2 > .title,\n.doc-container .sidehead2,\n.procedure-alert .sidehead2 {\n  display: block;\n  font-size: 12pt;\n  font-weight: bold;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .level3 > .title,\n.procedure-alert .level3 > .title,\n.doc-container .sidehead3,\n.procedure-alert .sidehead3 {\n  display: block;\n  font-size: 10pt;\n  font-weight: bold;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .level4 > .title,\n.procedure-alert .level4 > .title,\n.doc-container .sidehead4,\n.procedure-alert .sidehead4 {\n  display: block;\n  font-size: 10pt;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .level5 > .title,\n.procedure-alert .level5 > .title,\n.doc-container .sidehead5,\n.procedure-alert .sidehead5 {\n  display: block;\n  font-size: 10pt;\n  font-style: italic;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .levelledPara,\n.procedure-alert .levelledPara,\n.doc-container .proceduralStep,\n.procedure-alert .proceduralStep,\n.doc-container .commonInfoDescrPara,\n.procedure-alert .commonInfoDescrPara,\n.doc-container .isolationStep,\n.procedure-alert .isolationStep,\n.doc-container .isolationStepQuestion,\n.procedure-alert .isolationStepQuestion,\n.doc-container .choice,\n.procedure-alert .choice,\n.doc-container .yesAnswer,\n.procedure-alert .yesAnswer,\n.doc-container .noAnswer,\n.procedure-alert .noAnswer,\n.doc-container .isolationProcedureEnd,\n.procedure-alert .isolationProcedureEnd {\n  padding-left: 55pt;\n  position: relative;\n}\n.doc-container .levelledPara > .levelledPara,\n.procedure-alert .levelledPara > .levelledPara,\n.doc-container .proceduralStep > .proceduralStep,\n.procedure-alert .proceduralStep > .proceduralStep,\n.doc-container .commonInfoDescrPara > .commonInfoDescrPara,\n.procedure-alert .commonInfoDescrPara > .commonInfoDescrPara {\n  margin-left: -55pt;\n}\n.doc-container .level1,\n.procedure-alert .level1 {\n  counter-increment: counter1;\n  counter-reset: counter2 counter3 counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level2,\n.procedure-alert .level2 {\n  counter-increment: counter2;\n  counter-reset: counter3 counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level3,\n.procedure-alert .level3 {\n  counter-increment: counter3;\n  counter-reset: counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level4,\n.procedure-alert .level4 {\n  counter-increment: counter4;\n  counter-reset: counter5 counter6 counter7 counter8;\n}\n.doc-container .level5,\n.procedure-alert .level5 {\n  counter-increment: counter5;\n  counter-reset: counter6 counter7 counter8;\n}\n.doc-container .level6,\n.procedure-alert .level6 {\n  counter-increment: counter6;\n  counter-reset: counter7 counter8;\n}\n.doc-container .level7,\n.procedure-alert .level7 {\n  counter-increment: counter7;\n  counter-reset: counter8;\n}\n.doc-container .level8,\n.procedure-alert .level8 {\n  counter-increment: counter8;\n}\n.doc-container .level1 > *:first-child:before,\n.procedure-alert .level1 > *:first-child:before,\n.doc-container .level2 > *:first-child:before,\n.procedure-alert .level2 > *:first-child:before,\n.doc-container .level3 > *:first-child:before,\n.procedure-alert .level3 > *:first-child:before,\n.doc-container .level4 > *:first-child:before,\n.procedure-alert .level4 > *:first-child:before,\n.doc-container .level5 > *:first-child:before,\n.procedure-alert .level5 > *:first-child:before,\n.doc-container .level6 > *:first-child:before,\n.procedure-alert .level6 > *:first-child:before,\n.doc-container .level7 > *:first-child:before,\n.procedure-alert .level7 > *:first-child:before,\n.doc-container .level8 > *:first-child:before,\n.procedure-alert .level8 > *:first-child:before {\n  position: absolute;\n  margin-left: -55pt;\n}\n.doc-container .level1 > *:first-child:before,\n.procedure-alert .level1 > *:first-child:before {\n  content: counter(counter1);\n}\n.doc-container .level2 > *:first-child:before,\n.procedure-alert .level2 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2);\n}\n.doc-container .level3 > *:first-child:before,\n.procedure-alert .level3 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3);\n}\n.doc-container .level4 > *:first-child:before,\n.procedure-alert .level4 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3) "." counter(counter4);\n}\n.doc-container .level5 > *:first-child:before,\n.procedure-alert .level5 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3) "." counter(counter4) "." counter(counter5);\n}\n.doc-container .level6 > *:first-child:before,\n.procedure-alert .level6 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3) "." counter(counter4) "." counter(counter5) "." counter(counter6);\n}\n.doc-container .level7 > *:first-child:before,\n.procedure-alert .level7 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3) "." counter(counter4) "." counter(counter5) "." counter(counter6) "." counter(counter7);\n}\n.doc-container .level8 > *:first-child:before,\n.procedure-alert .level8 > *:first-child:before {\n  content: counter(counter1) "." counter(counter2) "." counter(counter3) "." counter(counter4) "." counter(counter5) "." counter(counter6) "." counter(counter7) "." counter(counter8);\n}\n.doc-container .caption,\n.procedure-alert .caption {\n  display: inline-block;\n}\n.doc-container td > .caption,\n.procedure-alert td > .caption {\n  padding: 0.3em;\n  min-height: 1em;\n  vertical-align: middle;\n}\n.doc-container td > .caption > .caption-content,\n.procedure-alert td > .caption > .caption-content {\n  display: table-cell;\n  vertical-align: middle;\n}\n.doc-container .captionLine,\n.procedure-alert .captionLine {\n  white-space: nowrap;\n  display: block;\n}\n.doc-container .caption[data-color=\'co00\'],\n.procedure-alert .caption[data-color=\'co00\'] {\n  color: white;\n}\n.doc-container .caption[data-color=\'co01\'],\n.procedure-alert .caption[data-color=\'co01\'] {\n  color: green;\n}\n.doc-container .caption[data-color=\'co02\'],\n.procedure-alert .caption[data-color=\'co02\'] {\n  color: #FFA500;\n}\n.doc-container .caption[data-color=\'co03\'],\n.procedure-alert .caption[data-color=\'co03\'] {\n  color: #FFD700;\n}\n.doc-container .caption[data-color=\'co04\'],\n.procedure-alert .caption[data-color=\'co04\'] {\n  color: red;\n}\n.doc-container .caption[data-color=\'co07\'],\n.procedure-alert .caption[data-color=\'co07\'] {\n  color: white;\n}\n.doc-container .caption[data-color=\'co08\'],\n.procedure-alert .caption[data-color=\'co08\'] {\n  color: gray;\n}\n.doc-container .caption[data-color=\'co09\'],\n.procedure-alert .caption[data-color=\'co09\'] {\n  color: none;\n}\n.doc-container .caption[data-color=\'co10\'],\n.procedure-alert .caption[data-color=\'co10\'] {\n  color: black;\n}\n.doc-container .caption[data-color=\'co51\'],\n.procedure-alert .caption[data-color=\'co51\'] {\n  color: #3C6BFB;\n}\n.doc-container td > .caption[data-color=\'co00\'],\n.procedure-alert td > .caption[data-color=\'co00\'] {\n  background-color: white;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co01\'],\n.procedure-alert td > .caption[data-color=\'co01\'] {\n  background-color: green;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co02\'],\n.procedure-alert td > .caption[data-color=\'co02\'] {\n  background-color: #FFA500;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co03\'],\n.procedure-alert td > .caption[data-color=\'co03\'] {\n  background-color: #FFD700;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co04\'],\n.procedure-alert td > .caption[data-color=\'co04\'] {\n  background-color: red;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co07\'],\n.procedure-alert td > .caption[data-color=\'co07\'] {\n  background-color: white;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co08\'],\n.procedure-alert td > .caption[data-color=\'co08\'] {\n  background-color: gray;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co09\'],\n.procedure-alert td > .caption[data-color=\'co09\'] {\n  background-color: clear;\n  color: black;\n}\n.doc-container td > .caption[data-color=\'co10\'],\n.procedure-alert td > .caption[data-color=\'co10\'] {\n  background-color: black;\n  color: white;\n}\n.doc-container td > .caption[data-color=\'co51\'],\n.procedure-alert td > .caption[data-color=\'co51\'] {\n  background-color: #3C6BFB;\n  color: black;\n}\n.doc-container .warning,\n.procedure-alert .warning,\n.doc-container .caution,\n.procedure-alert .caution,\n.doc-container .note,\n.procedure-alert .note {\n  display: block;\n  min-height: 1em;\n}\n.doc-container .warning,\n.procedure-alert .warning,\n.doc-container .caution,\n.procedure-alert .caution {\n  font-weight: bold;\n  text-align: center;\n}\n.doc-container .warning > *,\n.procedure-alert .warning > * {\n  text-align: left;\n}\n.doc-container .warning:before,\n.procedure-alert .warning:before,\n.doc-container .caution:before,\n.procedure-alert .caution:before {\n  display: block;\n  font-size: 12pt;\n  line-height: 1;\n  width: max-content;\n  margin: 0 auto;\n  border-bottom: 2px solid;\n}\n.doc-container .warning:before,\n.procedure-alert .warning:before {\n  text-decoration: none;\n  border-bottom: 2px solid;\n}\n.doc-container .note,\n.procedure-alert .note {\n  padding-left: 7mm;\n}\n.doc-container .note:before,\n.procedure-alert .note:before {\n  text-align: left;\n  font-weight: bold;\n  display: block;\n  margin-left: -7mm;\n  min-height: 1em;\n}\n.doc-container .multimedia > .title,\n.procedure-alert .multimedia > .title,\n.doc-container .figure > .title,\n.procedure-alert .figure > .title {\n  display: none;\n}\n.doc-container .multimedia,\n.procedure-alert .multimedia,\n.doc-container .figure,\n.procedure-alert .figure {\n  display: block;\n  margin-top: 8pt;\n  margin-bottom: 8pt;\n  font-style: italic;\n  counter-increment: figure;\n  counter-reset: sheet;\n  min-height: 1em;\n}\n.doc-container .multimediaObject,\n.procedure-alert .multimediaObject,\n.doc-container .graphic,\n.procedure-alert .graphic {\n  display: block;\n  margin-top: 4pt;\n  counter-increment: sheet;\n  min-height: 1em;\n}\n.doc-container .emphasis,\n.procedure-alert .emphasis {\n  font-weight: bold;\n}\n.doc-container .emphasis.em01,\n.procedure-alert .emphasis.em01 {\n  font-weight: bold;\n}\n.doc-container .emphasis.em02,\n.procedure-alert .emphasis.em02 {\n  font-weight: normal;\n  font-style: italic;\n}\n.doc-container .emphasis.em03,\n.procedure-alert .emphasis.em03 {\n  font-weight: normal;\n  text-decoration: underline;\n}\n.doc-container .emphasis.em04,\n.procedure-alert .emphasis.em04 {\n  font-weight: normal;\n  text-decoration: overline;\n}\n.doc-container .emphasis.em05,\n.procedure-alert .emphasis.em05 {\n  font-weight: normal;\n  text-decoration: line-through;\n}\n.doc-container .subScript,\n.procedure-alert .subScript {\n  vertical-align: sub;\n  font-size: 80%;\n}\n.doc-container .superScript,\n.procedure-alert .superScript {\n  vertical-align: super;\n  font-size: 80%;\n}\n.doc-container .p,\n.procedure-alert .p,\n.doc-container .action,\n.procedure-alert .action {\n  display: block;\n  margin-bottom: 8pt;\n  margin-top: 8pt;\n  text-indent: 0;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .isolationProcedureEnd:after,\n.procedure-alert .isolationProcedureEnd:after {\n  display: block;\n  font-weight: bold;\n}\n.doc-container ul,\n.procedure-alert ul {\n  display: block;\n  margin-bottom: 8pt;\n  margin-top: 8pt;\n  text-align: left;\n  padding-left: 9mm;\n  min-height: 1em;\n}\n.doc-container ol,\n.procedure-alert ol {\n  display: block;\n  margin-bottom: 8pt;\n  margin-top: 8pt;\n  text-align: left;\n  padding-left: 9mm;\n  min-height: 1em;\n}\n.doc-container li,\n.procedure-alert li {\n  display: block;\n  margin-bottom: 0pt;\n  margin-top: 0pt;\n  text-align: left;\n  font-style: normal;\n  min-height: 1em;\n}\n.doc-container li,\n.procedure-alert li {\n  text-indent: -9mm;\n}\n.doc-container li .note,\n.procedure-alert li .note {\n  margin-left: 9mm;\n  text-indent: 0;\n  padding-left: 0;\n}\n.doc-container ol > li,\n.procedure-alert ol > li {\n  margin-bottom: 8pt;\n}\n.doc-container li > .p:first-child,\n.procedure-alert li > .p:first-child {\n  display: inline;\n}\n.doc-container ol,\n.procedure-alert ol {\n  counter-reset: seq1;\n}\n.doc-container ol ol,\n.procedure-alert ol ol {\n  counter-reset: seq2;\n}\n.doc-container ol > li,\n.procedure-alert ol > li {\n  counter-increment: seq1;\n}\n.doc-container ol ol > li,\n.procedure-alert ol ol > li {\n  counter-increment: seq2;\n}\n.doc-container li:before,\n.procedure-alert li:before {\n  display: inline-block;\n  text-indent: 0;\n  width: 7mm;\n}\n.doc-container ol > li:before,\n.procedure-alert ol > li:before {\n  content: counter(seq1);\n}\n.doc-container ol ol > li:before,\n.procedure-alert ol ol > li:before {\n  content: counter(seq1) "." counter(seq2);\n}\n.doc-container ul.pf01 > li:before,\n.procedure-alert ul.pf01 > li:before {\n  content: "";\n}\n.doc-container ul.pf03 > li:before,\n.procedure-alert ul.pf03 > li:before {\n  content: "\\2010";\n}\n.doc-container ul.pf04 > li:before,\n.procedure-alert ul.pf04 > li:before {\n  content: "\\229A";\n}\n.doc-container ul.pf05 > li:before,\n.procedure-alert ul.pf05 > li:before {\n  content: "\\25CB";\n}\n.doc-container ul.pf06 > li:before,\n.procedure-alert ul.pf06 > li:before {\n  content: "\\25A1";\n}\n.doc-container .warning ul > li:before,\n.procedure-alert .warning ul > li:before,\n.doc-container .caution ul > li:before,\n.procedure-alert .caution ul > li:before,\n.doc-container ul.pf07 > li:before,\n.procedure-alert ul.pf07 > li:before {\n  content: "\\25CF";\n  font-weight: normal;\n}\n.doc-container ul > li:before,\n.procedure-alert ul > li:before,\n.doc-container ul.pf02 > li:before,\n.procedure-alert ul.pf02 > li:before {\n  content: "\\25CF";\n}\n.doc-container ol ul > li:before,\n.procedure-alert ol ul > li:before,\n.doc-container ul ul > li:before,\n.procedure-alert ul ul > li:before,\n.doc-container ol ul.pf02 > li:before,\n.procedure-alert ol ul.pf02 > li:before,\n.doc-container ul ul.pf02 > li:before,\n.procedure-alert ul ul.pf02 > li:before {\n  content: "\\25CF";\n}\n.doc-container ol ul ul > li:before,\n.procedure-alert ol ul ul > li:before,\n.doc-container ul ul ul > li:before,\n.procedure-alert ul ul ul > li:before,\n.doc-container ol ul ul.pf02 > li:before,\n.procedure-alert ol ul ul.pf02 > li:before,\n.doc-container ul ul ul.pf02 > li:before,\n.procedure-alert ul ul ul.pf02 > li:before {\n  content: "\\2010";\n}\n.doc-container .definitionList,\n.procedure-alert .definitionList {\n  display: block;\n  margin-top: 8pt;\n  min-height: 1em;\n}\n.doc-container dt,\n.procedure-alert dt {\n  width: 50mm;\n  float: left;\n}\n.doc-container dd,\n.procedure-alert dd {\n  margin-left: 50mm;\n}\n.doc-container ol > .title,\n.procedure-alert ol > .title,\n.doc-container ul > .title,\n.procedure-alert ul > .title {\n  text-align: left;\n  font-weight: bold;\n  margin-bottom: 4pt;\n  padding-left: 0;\n  margin-left: -9mm;\n  text-indent: 0;\n}\n.doc-container .content > .refs > .tabular:before,\n.procedure-alert .content > .refs > .tabular:before,\n.doc-container .reqCondGroup > .tabular:before,\n.procedure-alert .reqCondGroup > .tabular:before,\n.doc-container .reqPersons > .tabular:before,\n.procedure-alert .reqPersons > .tabular:before,\n.doc-container .reqSupportEquips > .tabular:before,\n.procedure-alert .reqSupportEquips > .tabular:before,\n.doc-container .reqSupplies > .tabular:before,\n.procedure-alert .reqSupplies > .tabular:before,\n.doc-container .reqSpares > .tabular:before,\n.procedure-alert .reqSpares > .tabular:before,\n.doc-container .table-contents > .title,\n.procedure-alert .table-contents > .title,\n.doc-container .definitionList > .title,\n.procedure-alert .definitionList > .title {\n  text-align: left;\n  font-weight: normal;\n  font-style: italic;\n  margin-bottom: 4pt;\n  padding-left: 0;\n  margin-left: 0;\n  text-indent: 0;\n}\n.doc-container .termTitle,\n.procedure-alert .termTitle,\n.doc-container .definitionTitle,\n.procedure-alert .definitionTitle {\n  display: block;\n  text-decoration: underline;\n  font-weight: bold;\n  text-align: left;\n  min-height: 1em;\n}\n.doc-container .termTitle,\n.procedure-alert .termTitle {\n  width: 50mm;\n  float: left;\n}\n.doc-container .definitionTitle,\n.procedure-alert .definitionTitle {\n  margin-left: 50mm;\n}\n.doc-container .content > .refs,\n.procedure-alert .content > .refs,\n.doc-container .reqCondGroup,\n.procedure-alert .reqCondGroup,\n.doc-container .reqPersons,\n.procedure-alert .reqPersons,\n.doc-container .reqSupportEquips,\n.procedure-alert .reqSupportEquips,\n.doc-container .reqSupplies,\n.procedure-alert .reqSupplies,\n.doc-container .reqSpares,\n.procedure-alert .reqSpares {\n  counter-increment: table;\n}\n.doc-container .table,\n.procedure-alert .table {\n  display: block;\n  margin-top: 12pt;\n  counter-increment: table;\n  min-height: 1em;\n}\n.doc-container .table table,\n.procedure-alert .table table {\n  width: 100%;\n}\n.doc-container .table td,\n.procedure-alert .table td,\n.doc-container .table th,\n.procedure-alert .table th {\n  padding: 0pt 4pt;\n}\n.doc-container th[align=\'left\'],\n.procedure-alert th[align=\'left\'],\n.doc-container td[align=\'left\'],\n.procedure-alert td[align=\'left\'],\n.doc-container th[align=\'left\'] .p,\n.procedure-alert th[align=\'left\'] .p,\n.doc-container td[align=\'left\'] .p,\n.procedure-alert td[align=\'left\'] .p {\n  text-align: left;\n}\n.doc-container th[align=\'center\'],\n.procedure-alert th[align=\'center\'],\n.doc-container td[align=\'center\'],\n.procedure-alert td[align=\'center\'],\n.doc-container th[align=\'center\'] .p,\n.procedure-alert th[align=\'center\'] .p,\n.doc-container td[align=\'center\'] .p,\n.procedure-alert td[align=\'center\'] .p {\n  text-align: center;\n}\n.doc-container th[align=\'right\'],\n.procedure-alert th[align=\'right\'],\n.doc-container td[align=\'right\'],\n.procedure-alert td[align=\'right\'],\n.doc-container th[align=\'right\'] .p,\n.procedure-alert th[align=\'right\'] .p,\n.doc-container td[align=\'right\'] .p,\n.procedure-alert td[align=\'right\'] .p {\n  text-align: right;\n}\n.doc-container th[align=\'justify\'],\n.procedure-alert th[align=\'justify\'],\n.doc-container td[align=\'justify\'],\n.procedure-alert td[align=\'justify\'],\n.doc-container th[align=\'justify\'] .p,\n.procedure-alert th[align=\'justify\'] .p,\n.doc-container td[align=\'justify\'] .p,\n.procedure-alert td[align=\'justify\'] .p {\n  text-align: justify;\n}\n.doc-container .productionMaintData,\n.procedure-alert .productionMaintData,\n.doc-container .reqCondGroup,\n.procedure-alert .reqCondGroup,\n.doc-container .reqSupportEquips,\n.procedure-alert .reqSupportEquips,\n.doc-container .reqSupplies,\n.procedure-alert .reqSupplies,\n.doc-container .reqSpares,\n.procedure-alert .reqSpares,\n.doc-container .reqPersons,\n.procedure-alert .reqPersons,\n.doc-container .reqSafety,\n.procedure-alert .reqSafety {\n  display: block;\n  min-height: 1em;\n}\n.doc-container .productionMaintData > *,\n.procedure-alert .productionMaintData > *,\n.doc-container .reqCondGroup > *,\n.procedure-alert .reqCondGroup > *,\n.doc-container .reqSupportEquips > *,\n.procedure-alert .reqSupportEquips > *,\n.doc-container .reqSupplies > *,\n.procedure-alert .reqSupplies > *,\n.doc-container .reqSpares > *,\n.procedure-alert .reqSpares > *,\n.doc-container .reqPersons > *,\n.procedure-alert .reqPersons > *,\n.doc-container .reqSafety > *,\n.procedure-alert .reqSafety > * {\n  margin-left: 55pt;\n}\n.doc-container .embeddedSupportEquipDescr > *:first-child,\n.procedure-alert .embeddedSupportEquipDescr > *:first-child,\n.doc-container .embeddedSupplyDescr > *:first-child,\n.procedure-alert .embeddedSupplyDescr > *:first-child,\n.doc-container .embeddedSpareDescr > *:first-child,\n.procedure-alert .embeddedSpareDescr > *:first-child {\n  padding-left: 22pt;\n}\n.doc-container .workAreaLocationGroup,\n.procedure-alert .workAreaLocationGroup {\n  margin-top: 6pt;\n}\n.doc-container .workAreaLocationGroup *,\n.procedure-alert .workAreaLocationGroup * {\n  display: inline-block;\n}\n.doc-container .workAreaLocationGroup .zoneRef:before,\n.procedure-alert .workAreaLocationGroup .zoneRef:before,\n.doc-container .workAreaLocationGroup .accessPointRef:before,\n.procedure-alert .workAreaLocationGroup .accessPointRef:before {\n  font-weight: bold;\n  display: inline-block;\n  width: 110pt;\n}\n.doc-container .workAreaLocationGroup .zoneRef + .zoneRef,\n.procedure-alert .workAreaLocationGroup .zoneRef + .zoneRef,\n.doc-container .workAreaLocationGroup .accessPointRef + .accessPointRef,\n.procedure-alert .workAreaLocationGroup .accessPointRef + .accessPointRef {\n  display: block;\n  min-height: 1em;\n}\n.doc-container .personSkill .skillLevel,\n.procedure-alert .personSkill .skillLevel {\n  text-align: left;\n}\n.doc-container .content > .refs > .tabular:before,\n.procedure-alert .content > .refs > .tabular:before,\n.doc-container .reqCondGroup > .tabular:before,\n.procedure-alert .reqCondGroup > .tabular:before,\n.doc-container .reqPersons > .tabular:before,\n.procedure-alert .reqPersons > .tabular:before,\n.doc-container .reqSupportEquips > .tabular:before,\n.procedure-alert .reqSupportEquips > .tabular:before,\n.doc-container .reqSupplies > .tabular:before,\n.procedure-alert .reqSupplies > .tabular:before,\n.doc-container .reqSpares > .tabular:before,\n.procedure-alert .reqSpares > .tabular:before {\n  text-align: center;\n  display: table-caption;\n}\n.doc-container .tabular,\n.procedure-alert .tabular {\n  display: table;\n  margin-left: 0;\n  border-spacing: 0;\n  border-collapse: separate;\n  border-bottom: 0.5pt solid black;\n  width: 100%;\n}\n.doc-container .tabular > *,\n.procedure-alert .tabular > * {\n  display: table-row !important;\n}\n.doc-container .noSupportEquips:before,\n.procedure-alert .noSupportEquips:before,\n.doc-container .noSupplies:before,\n.procedure-alert .noSupplies:before,\n.doc-container .noSpares:before,\n.procedure-alert .noSpares:before,\n.doc-container .noConds:before,\n.procedure-alert .noConds:before,\n.doc-container .tabular > * > *,\n.procedure-alert .tabular > * > * {\n  display: table-cell !important;\n  padding: 4pt;\n}\n.doc-container .taskDuration,\n.procedure-alert .taskDuration {\n  display: block;\n  padding-left: 55pt;\n  min-height: 1em;\n}\n.doc-container .taskDuration:before,\n.procedure-alert .taskDuration:before {\n  margin-left: -55pt;\n}\n.doc-container .taskDuration:after,\n.procedure-alert .taskDuration:after {\n  white-space: pre;\n}\n.doc-container .externalPubCode:before,\n.procedure-alert .externalPubCode:before {\n  display: inline-block;\n  margin-right: 0.25em;\n}\n.doc-container .table-contents > .title,\n.procedure-alert .table-contents > .title {\n  text-align: center;\n}\n.doc-container .header > *,\n.procedure-alert .header > * {\n  font-weight: bold;\n  border-bottom: 0.5pt solid black;\n  border-top: 0.5pt solid black;\n}\n.doc-container .dmAddress .language:before,\n.procedure-alert .dmAddress .language:before,\n.doc-container .dmAddress .language:before,\n.procedure-alert .dmAddress .language:before,\n.doc-container .dmAddress .issueInfo:before,\n.procedure-alert .dmAddress .issueInfo:before,\n.doc-container .dmAddress .issueDate:before,\n.procedure-alert .dmAddress .issueDate:before,\n.doc-container .dmStatus .responsiblePartnerCompany:before,\n.procedure-alert .dmStatus .responsiblePartnerCompany:before,\n.doc-container .dmStatus .originator:before,\n.procedure-alert .dmStatus .originator:before,\n.doc-container .applicCrossRefTableRef:before,\n.procedure-alert .applicCrossRefTableRef:before,\n.doc-container .dmStatus > .applic:before,\n.procedure-alert .dmStatus > .applic:before,\n.doc-container .techStandard:before,\n.procedure-alert .techStandard:before,\n.doc-container .brexDmRef:before,\n.procedure-alert .brexDmRef:before,\n.doc-container .figure:before,\n.procedure-alert .figure:before,\n.doc-container .firstVerification:before,\n.procedure-alert .firstVerification:before,\n.doc-container .secondVerification:before,\n.procedure-alert .secondVerification:before,\n.doc-container .unverified:before,\n.procedure-alert .unverified:before,\n.doc-container .systemBreakdownCode:before,\n.procedure-alert .systemBreakdownCode:before,\n.doc-container .skillLevel:before,\n.procedure-alert .skillLevel:before,\n.doc-container .reasonForUpdate:before,\n.procedure-alert .reasonForUpdate:before,\n.doc-container .supplyDescr:before,\n.procedure-alert .supplyDescr:before,\n.doc-container .spareDescr:before,\n.procedure-alert .spareDescr:before,\n.doc-container .supportEquipDescr:before,\n.procedure-alert .supportEquipDescr:before,\n.doc-container .embeddedSupplyDescr:before,\n.procedure-alert .embeddedSupplyDescr:before,\n.doc-container .embeddedSupportEquipDescr:before,\n.procedure-alert .embeddedSupportEquipDescr:before,\n.doc-container .embeddedSpareDescr:before,\n.procedure-alert .embeddedSpareDescr:before,\n.doc-container .condCrossRefTableRef:before,\n.procedure-alert .condCrossRefTableRef:before,\n.doc-container .productCrossRefTableRef:before,\n.procedure-alert .productCrossRefTableRef:before,\n.doc-container .if > .caseCond:before,\n.procedure-alert .if > .caseCond:before,\n.doc-container .elseIf > .caseCond:before,\n.procedure-alert .elseIf > .caseCond:before,\n.doc-container .challenge:after,\n.procedure-alert .challenge:after,\n.doc-container .dataRestrictions:before,\n.procedure-alert .dataRestrictions:before,\n.doc-container .dataDistribution:before,\n.procedure-alert .dataDistribution:before,\n.doc-container .exportControl:before,\n.procedure-alert .exportControl:before,\n.doc-container .dataHandling:before,\n.procedure-alert .dataHandling:before,\n.doc-container .dataDestruction:before,\n.procedure-alert .dataDestruction:before,\n.doc-container .dataDisclosure:before,\n.procedure-alert .dataDisclosure:before,\n.doc-container .copyright:before,\n.procedure-alert .copyright:before,\n.doc-container .frontMatter .responsiblePartnerCompany:before,\n.procedure-alert .frontMatter .responsiblePartnerCompany:before,\n.doc-container .frontMatter .enterpriseSpec:before,\n.procedure-alert .frontMatter .enterpriseSpec:before,\n.doc-container .timeLimitInfo *:before,\n.procedure-alert .timeLimitInfo *:before,\n.doc-container .isolationStep:before,\n.procedure-alert .isolationStep:before,\n.doc-container .parameter:before,\n.procedure-alert .parameter:before,\n.doc-container .hotspot:before,\n.procedure-alert .hotspot:before,\n.doc-container .isolationProcedureEnd:before,\n.procedure-alert .isolationProcedureEnd:before {\n  font-weight: bold;\n  color: #444444;\n}\n.doc-container .enterpriseName,\n.procedure-alert .enterpriseName,\n.doc-container .identExtension,\n.procedure-alert .identExtension,\n.doc-container .dmCode,\n.procedure-alert .dmCode,\n.doc-container .language,\n.procedure-alert .language,\n.doc-container .issueInfo,\n.procedure-alert .issueInfo,\n.doc-container .issueDate,\n.procedure-alert .issueDate,\n.doc-container .security,\n.procedure-alert .security,\n.doc-container .exportRegistrationStmt,\n.procedure-alert .exportRegistrationStmt,\n.doc-container .subScript,\n.procedure-alert .subScript,\n.doc-container .superScript,\n.procedure-alert .superScript,\n.doc-container .dmRef,\n.procedure-alert .dmRef,\n.doc-container .dmRefIdent,\n.procedure-alert .dmRefIdent,\n.doc-container .dmRefAddressItems,\n.procedure-alert .dmRefAddressItems,\n.doc-container .behavior,\n.procedure-alert .behavior,\n.doc-container .functionalItemRef,\n.procedure-alert .functionalItemRef,\n.doc-container .refs > .dmRef .dmRefIdent:before,\n.procedure-alert .refs > .dmRef .dmRefIdent:before,\n.doc-container .refs > .dmRef .dmRefIdent > *,\n.procedure-alert .refs > .dmRef .dmRefIdent > *,\n.doc-container .refs > .dmRef .dmRefAddressItems,\n.procedure-alert .refs > .dmRef .dmRefAddressItems,\n.doc-container .refs > .dmRef .dmRefAddressItems > *,\n.procedure-alert .refs > .dmRef .dmRefAddressItems > *,\n.doc-container .refs .techName,\n.procedure-alert .refs .techName,\n.doc-container .refs .infoName,\n.procedure-alert .refs .infoName,\n.doc-container .refs .infoNameVariant,\n.procedure-alert .refs .infoNameVariant,\n.doc-container .pmRef,\n.procedure-alert .pmRef,\n.doc-container .pmRefIdent,\n.procedure-alert .pmRefIdent,\n.doc-container .pmCode,\n.procedure-alert .pmCode,\n.doc-container .pmRefAddressItems,\n.procedure-alert .pmRefAddressItems,\n.doc-container .pubMedia,\n.procedure-alert .pubMedia,\n.doc-container .externalPubRef,\n.procedure-alert .externalPubRef,\n.doc-container .externalPubRefIdent,\n.procedure-alert .externalPubRefIdent,\n.doc-container .externalPubCode,\n.procedure-alert .externalPubCode,\n.doc-container .externalPubTitle,\n.procedure-alert .externalPubTitle,\n.doc-container .indexFlag,\n.procedure-alert .indexFlag,\n.doc-container .acronym,\n.procedure-alert .acronym,\n.doc-container .acronymTerm,\n.procedure-alert .acronymTerm,\n.doc-container .verbatimText,\n.procedure-alert .verbatimText,\n.doc-container .externalPubIssue,\n.procedure-alert .externalPubIssue,\n.doc-container .externalPubRefAddressItems,\n.procedure-alert .externalPubRefAddressItems,\n.doc-container .circuitBreakerRef,\n.procedure-alert .circuitBreakerRef,\n.doc-container .controlIndicatorRef,\n.procedure-alert .controlIndicatorRef,\n.doc-container .inlineSignificantData,\n.procedure-alert .inlineSignificantData,\n.doc-container .quantity,\n.procedure-alert .quantity,\n.doc-container .fullNatoStockNumber,\n.procedure-alert .fullNatoStockNumber,\n.doc-container .zoneRef,\n.procedure-alert .zoneRef,\n.doc-container .accessPointRef,\n.procedure-alert .accessPointRef,\n.doc-container .partNumber,\n.procedure-alert .partNumber,\n.doc-container .serialNumber,\n.procedure-alert .serialNumber,\n.doc-container .internalRef,\n.procedure-alert .internalRef,\n.doc-container .changeInline,\n.procedure-alert .changeInline,\n.doc-container .symbol,\n.procedure-alert .symbol,\n.doc-container .footnoteRef,\n.procedure-alert .footnoteRef,\n.doc-container .spanspec,\n.procedure-alert .spanspec,\n.doc-container .enumeration,\n.procedure-alert .enumeration,\n.doc-container .catalogSeqNumberRef,\n.procedure-alert .catalogSeqNumberRef,\n.doc-container .partRef,\n.procedure-alert .partRef,\n.doc-container .installationLocation,\n.procedure-alert .installationLocation,\n.doc-container .productItem,\n.procedure-alert .productItem,\n.doc-container .noConds,\n.procedure-alert .noConds,\n.doc-container .reqCond,\n.procedure-alert .reqCond,\n.doc-container .variableRef,\n.procedure-alert .variableRef,\n.doc-container .globalPropertyRef,\n.procedure-alert .globalPropertyRef,\n.doc-container .booleanOperator,\n.procedure-alert .booleanOperator,\n.doc-container .numberOperator,\n.procedure-alert .numberOperator,\n.doc-container .setOperator,\n.procedure-alert .setOperator,\n.doc-container .stringOperator,\n.procedure-alert .stringOperator,\n.doc-container .booleanFunction,\n.procedure-alert .booleanFunction,\n.doc-container .numberFunction,\n.procedure-alert .numberFunction,\n.doc-container .setFunction,\n.procedure-alert .setFunction,\n.doc-container .stringFunction,\n.procedure-alert .stringFunction,\n.doc-container .trueValue,\n.procedure-alert .trueValue,\n.doc-container .falseValue,\n.procedure-alert .falseValue,\n.doc-container .noValue,\n.procedure-alert .noValue,\n.doc-container .tabular .reqCondDm,\n.procedure-alert .tabular .reqCondDm,\n.doc-container .tabular .reqCondDm > *,\n.procedure-alert .tabular .reqCondDm > *,\n.doc-container .personCategory,\n.procedure-alert .personCategory,\n.doc-container .personSkill,\n.procedure-alert .personSkill,\n.doc-container .trade,\n.procedure-alert .trade,\n.doc-container .estimatedTime,\n.procedure-alert .estimatedTime,\n.doc-container .toolRef,\n.procedure-alert .toolRef,\n.doc-container .materialSetRef,\n.procedure-alert .materialSetRef,\n.doc-container .noSupportEquips,\n.procedure-alert .noSupportEquips,\n.doc-container .noSupplies,\n.procedure-alert .noSupplies,\n.doc-container .supplyRef,\n.procedure-alert .supplyRef,\n.doc-container .supplyRqmtRef,\n.procedure-alert .supplyRqmtRef,\n.doc-container .noSpares,\n.procedure-alert .noSpares,\n.doc-container .noSafety,\n.procedure-alert .noSafety,\n.doc-container .threshold,\n.procedure-alert .threshold,\n.doc-container .thresholdValue,\n.procedure-alert .thresholdValue,\n.doc-container .tolerance,\n.procedure-alert .tolerance,\n.doc-container .enterpriseRef,\n.procedure-alert .enterpriseRef,\n.doc-container .buyerFurnishedEquipFlag,\n.procedure-alert .buyerFurnishedEquipFlag,\n.doc-container .sparePartClass,\n.procedure-alert .sparePartClass,\n.doc-container .partUsage,\n.procedure-alert .partUsage,\n.doc-container .unitOfIssueQualificationSegment,\n.procedure-alert .unitOfIssueQualificationSegment,\n.doc-container .quantityPerUnit,\n.procedure-alert .quantityPerUnit,\n.doc-container .hazardousClass,\n.procedure-alert .hazardousClass,\n.doc-container .enterpriseIdent,\n.procedure-alert .enterpriseIdent,\n.doc-container .enterpriseIdentAlt,\n.procedure-alert .enterpriseIdentAlt,\n.doc-container .workArea,\n.procedure-alert .workArea,\n.doc-container .limit,\n.procedure-alert .limit,\n.doc-container .limit > *,\n.procedure-alert .limit > *,\n.doc-container .sampling,\n.procedure-alert .sampling,\n.doc-container .inspectionType,\n.procedure-alert .inspectionType,\n.doc-container .trigger,\n.procedure-alert .trigger,\n.doc-container .limitRange,\n.procedure-alert .limitRange,\n.doc-container .limitRangeFrom,\n.procedure-alert .limitRangeFrom,\n.doc-container .cautionIdent,\n.procedure-alert .cautionIdent,\n.doc-container .functionalPhysicalAreaIdent,\n.procedure-alert .functionalPhysicalAreaIdent,\n.doc-container .warningIdent,\n.procedure-alert .warningIdent,\n.doc-container .zoneIdent,\n.procedure-alert .zoneIdent,\n.doc-container .partIdent,\n.procedure-alert .partIdent,\n.doc-container .functionalItemIdent,\n.procedure-alert .functionalItemIdent,\n.doc-container .applic *,\n.procedure-alert .applic *,\n.doc-container .identNumber,\n.procedure-alert .identNumber,\n.doc-container .identNumber > *,\n.procedure-alert .identNumber > * {\n  display: inline;\n}\n.doc-container .supportEquipDescr > * > *,\n.procedure-alert .supportEquipDescr > * > *,\n.doc-container .supplyDescr > * > *,\n.procedure-alert .supplyDescr > * > *,\n.doc-container .spareDescr > * > *,\n.procedure-alert .spareDescr > * > *,\n.doc-container .embeddedSupportEquipDescr > * > *,\n.procedure-alert .embeddedSupportEquipDescr > * > *,\n.doc-container .embeddedSpareDescr > * > *,\n.procedure-alert .embeddedSpareDescr > * > *,\n.doc-container .blockchild > *,\n.procedure-alert .blockchild > * {\n  display: block !important;\n}\n.doc-container .learning,\n.procedure-alert .learning {\n  display: block;\n}\n.doc-container .learningPlan,\n.procedure-alert .learningPlan,\n.doc-container .learningOverview,\n.procedure-alert .learningOverview,\n.doc-container .learningContent,\n.procedure-alert .learningContent,\n.doc-container .learningSummary,\n.procedure-alert .learningSummary,\n.doc-container .learningAssessment,\n.procedure-alert .learningAssessment,\n.doc-container .lcProject,\n.procedure-alert .lcProject,\n.doc-container .lcPerformanceAnalysis,\n.procedure-alert .lcPerformanceAnalysis,\n.doc-container .lcCauseAnalysis,\n.procedure-alert .lcCauseAnalysis,\n.doc-container .lcInterventionDefinition,\n.procedure-alert .lcInterventionDefinition,\n.doc-container .lcOrganizationalAnalysis,\n.procedure-alert .lcOrganizationalAnalysis,\n.doc-container .lcGapAnalysis,\n.procedure-alert .lcGapAnalysis,\n.doc-container .lcClient,\n.procedure-alert .lcClient,\n.doc-container .lcLearningPlan,\n.procedure-alert .lcLearningPlan,\n.doc-container .lcCourseIdentNumber,\n.procedure-alert .lcCourseIdentNumber,\n.doc-container .lcModificationDate,\n.procedure-alert .lcModificationDate,\n.doc-container .lcDeliveryDate,\n.procedure-alert .lcDeliveryDate,\n.doc-container .lcPlanSubject,\n.procedure-alert .lcPlanSubject,\n.doc-container .lcVisionStatement,\n.procedure-alert .lcVisionStatement,\n.doc-container .lcMissionStatement,\n.procedure-alert .lcMissionStatement,\n.doc-container .lcValues,\n.procedure-alert .lcValues,\n.doc-container .lcGoalStatement,\n.procedure-alert .lcGoalStatement,\n.doc-container .lcObjectiveStatement,\n.procedure-alert .lcObjectiveStatement,\n.doc-container .lcGapItem,\n.procedure-alert .lcGapItem,\n.doc-container .lcDesiredPerformanceStatement,\n.procedure-alert .lcDesiredPerformanceStatement,\n.doc-container .lcActualPerformanceStatement,\n.procedure-alert .lcActualPerformanceStatement,\n.doc-container .lcPlanObjective,\n.procedure-alert .lcPlanObjective,\n.doc-container .lcJtaItem,\n.procedure-alert .lcJtaItem,\n.doc-container .lcGapStatement,\n.procedure-alert .lcGapStatement,\n.doc-container .lcOrganizationalEnvironmentAnalysis,\n.procedure-alert .lcOrganizationalEnvironmentAnalysis,\n.doc-container .lcWorkEnvironmentAnalysis,\n.procedure-alert .lcWorkEnvironmentAnalysis,\n.doc-container .lcPhysicalAspectsOfSite,\n.procedure-alert .lcPhysicalAspectsOfSite,\n.doc-container .lcSocialAspectsOfSite,\n.procedure-alert .lcSocialAspectsOfSite,\n.doc-container .lcPerformerAnalysis,\n.procedure-alert .lcPerformerAnalysis,\n.doc-container .lcJobTitle,\n.procedure-alert .lcJobTitle,\n.doc-container .lcJobCode,\n.procedure-alert .lcJobCode,\n.doc-container .lcEducationLevel,\n.procedure-alert .lcEducationLevel,\n.doc-container .lcAge,\n.procedure-alert .lcAge,\n.doc-container .lcProfessionalBackground,\n.procedure-alert .lcProfessionalBackground,\n.doc-container .lcKnowledge,\n.procedure-alert .lcKnowledge,\n.doc-container .lcSkills,\n.procedure-alert .lcSkills,\n.doc-container .lcAbilities,\n.procedure-alert .lcAbilities,\n.doc-container .lcAttitude,\n.procedure-alert .lcAttitude,\n.doc-container .lcEnvironmentalFactor,\n.procedure-alert .lcEnvironmentalFactor,\n.doc-container .lcData,\n.procedure-alert .lcData,\n.doc-container .lcResources,\n.procedure-alert .lcResources,\n.doc-container .lcIncentives,\n.procedure-alert .lcIncentives,\n.doc-container .lcInternalFactor,\n.procedure-alert .lcInternalFactor,\n.doc-container .lcCapacity,\n.procedure-alert .lcCapacity,\n.doc-container .lcMotives,\n.procedure-alert .lcMotives,\n.doc-container .lcNonTrainingInterventions,\n.procedure-alert .lcNonTrainingInterventions,\n.doc-container .lcPerformanceSupport,\n.procedure-alert .lcPerformanceSupport,\n.doc-container .lcJobDesign,\n.procedure-alert .lcJobDesign,\n.doc-container .lcPersonalDevelopment,\n.procedure-alert .lcPersonalDevelopment,\n.doc-container .lcHumanResourceDevelopment,\n.procedure-alert .lcHumanResourceDevelopment,\n.doc-container .lcOrganizationalCommunication,\n.procedure-alert .lcOrganizationalCommunication,\n.doc-container .lcOrganizationalDesign,\n.procedure-alert .lcOrganizationalDesign,\n.doc-container .lcTrainingInterventions,\n.procedure-alert .lcTrainingInterventions,\n.doc-container .lcTargetAudience,\n.procedure-alert .lcTargetAudience,\n.doc-container .lcCurrentEntryBehaviors,\n.procedure-alert .lcCurrentEntryBehaviors,\n.doc-container .lcAttitudeTowardContent,\n.procedure-alert .lcAttitudeTowardContent,\n.doc-container .lcLearningPreferences,\n.procedure-alert .lcLearningPreferences,\n.doc-container .lcPrerequisites,\n.procedure-alert .lcPrerequisites,\n.doc-container .lcRequiredEntryBehaviors,\n.procedure-alert .lcRequiredEntryBehaviors,\n.doc-container .lcTrainingComponent,\n.procedure-alert .lcTrainingComponent,\n.doc-container .lcTrainingType,\n.procedure-alert .lcTrainingType,\n.doc-container .lcLearningStrategy,\n.procedure-alert .lcLearningStrategy,\n.doc-container .lcTime,\n.procedure-alert .lcTime,\n.doc-container .lcRequiredFinances,\n.procedure-alert .lcRequiredFinances,\n.doc-container .lcRequiredPersonnel,\n.procedure-alert .lcRequiredPersonnel,\n.doc-container .lcRequiredFacilities,\n.procedure-alert .lcRequiredFacilities,\n.doc-container .lcRequiredEquipment,\n.procedure-alert .lcRequiredEquipment,\n.doc-container .lcLocalCultureConsiderations,\n.procedure-alert .lcLocalCultureConsiderations,\n.doc-container .lcAssessmentStrategy,\n.procedure-alert .lcAssessmentStrategy,\n.doc-container .lcAssessmentComponent,\n.procedure-alert .lcAssessmentComponent,\n.doc-container .lcMasteryScoreCriteria,\n.procedure-alert .lcMasteryScoreCriteria,\n.doc-container .lcPerformanceRubric,\n.procedure-alert .lcPerformanceRubric,\n.doc-container .lcScoringMethod,\n.procedure-alert .lcScoringMethod,\n.doc-container .lcMinimumPassThreshold,\n.procedure-alert .lcMinimumPassThreshold,\n.doc-container .lcTechnicalRqmts,\n.procedure-alert .lcTechnicalRqmts,\n.doc-container .lcBrowsers,\n.procedure-alert .lcBrowsers,\n.doc-container .lcLms,\n.procedure-alert .lcLms,\n.doc-container .lcNonLmsEnvironment,\n.procedure-alert .lcNonLmsEnvironment,\n.doc-container .lcPaperBasedMaterials,\n.procedure-alert .lcPaperBasedMaterials,\n.doc-container .lcClassroom,\n.procedure-alert .lcClassroom,\n.doc-container .lcOjt,\n.procedure-alert .lcOjt,\n.doc-container .lcAccessibility,\n.procedure-alert .lcAccessibility,\n.doc-container .lcPlayers,\n.procedure-alert .lcPlayers,\n.doc-container .lcGraphicStandards,\n.procedure-alert .lcGraphicStandards,\n.doc-container .lcViewers,\n.procedure-alert .lcViewers,\n.doc-container .lcResolution,\n.procedure-alert .lcResolution,\n.doc-container .lcFileSizeLimitations,\n.procedure-alert .lcFileSizeLimitations,\n.doc-container .lcDownloadTime,\n.procedure-alert .lcDownloadTime,\n.doc-container .lcSecurity,\n.procedure-alert .lcSecurity,\n.doc-container .lcLearningObjectives,\n.procedure-alert .lcLearningObjectives,\n.doc-container .lcObjectiveItem,\n.procedure-alert .lcObjectiveItem,\n.doc-container .lcInterventionImplementation,\n.procedure-alert .lcInterventionImplementation,\n.doc-container .lcPerformanceEvaluation,\n.procedure-alert .lcPerformanceEvaluation,\n.doc-container .lcFormativeEvaluation,\n.procedure-alert .lcFormativeEvaluation,\n.doc-container .lcSummativeEvaluation,\n.procedure-alert .lcSummativeEvaluation,\n.doc-container .lcImmediatePerformanceCompetence,\n.procedure-alert .lcImmediatePerformanceCompetence,\n.doc-container .lcJobTransfer,\n.procedure-alert .lcJobTransfer,\n.doc-container .lcOrganizationalImpact,\n.procedure-alert .lcOrganizationalImpact,\n.doc-container .lcSection,\n.procedure-alert .lcSection,\n.doc-container .lcIntro,\n.procedure-alert .lcIntro,\n.doc-container .lcInteraction,\n.procedure-alert .lcInteraction,\n.doc-container .lcSummary,\n.procedure-alert .lcSummary,\n.doc-container .lcQuestion,\n.procedure-alert .lcQuestion,\n.doc-container .lcAnswerOption,\n.procedure-alert .lcAnswerOption,\n.doc-container .lcSequenceOption,\n.procedure-alert .lcSequenceOption,\n.doc-container .lcFeedbackItem,\n.procedure-alert .lcFeedbackItem,\n.doc-container .lcAsset,\n.procedure-alert .lcAsset,\n.doc-container .lcSequence,\n.procedure-alert .lcSequence,\n.doc-container .lcReview,\n.procedure-alert .lcReview,\n.doc-container .lcNextSteps,\n.procedure-alert .lcNextSteps {\n  display: block;\n}\n.doc-container .lcClient:before,\n.procedure-alert .lcClient:before,\n.doc-container .lcLearningPlan:before,\n.procedure-alert .lcLearningPlan:before,\n.doc-container .lcCourseIdentNumber:before,\n.procedure-alert .lcCourseIdentNumber:before,\n.doc-container .lcModificationDate:before,\n.procedure-alert .lcModificationDate:before,\n.doc-container .lcDeliveryDate:before,\n.procedure-alert .lcDeliveryDate:before,\n.doc-container .lcPlanSubject:before,\n.procedure-alert .lcPlanSubject:before,\n.doc-container .lcVisionStatement:before,\n.procedure-alert .lcVisionStatement:before,\n.doc-container .lcMissionStatement:before,\n.procedure-alert .lcMissionStatement:before,\n.doc-container .lcValues:before,\n.procedure-alert .lcValues:before,\n.doc-container .lcGoalStatement:before,\n.procedure-alert .lcGoalStatement:before,\n.doc-container .lcObjectiveStatement:before,\n.procedure-alert .lcObjectiveStatement:before,\n.doc-container .lcDesiredPerformanceStatement:before,\n.procedure-alert .lcDesiredPerformanceStatement:before,\n.doc-container .lcActualPerformanceStatement:before,\n.procedure-alert .lcActualPerformanceStatement:before,\n.doc-container .lcPlanObjective:before,\n.procedure-alert .lcPlanObjective:before,\n.doc-container .lcJtaItem:before,\n.procedure-alert .lcJtaItem:before,\n.doc-container .lcGapStatement:before,\n.procedure-alert .lcGapStatement:before,\n.doc-container .lcManagerialSupport:before,\n.procedure-alert .lcManagerialSupport:before,\n.doc-container .lcPhysicalAspectsOfSite:before,\n.procedure-alert .lcPhysicalAspectsOfSite:before,\n.doc-container .lcSocialAspectsOfSite:before,\n.procedure-alert .lcSocialAspectsOfSite:before,\n.doc-container .lcSpecialFactors:before,\n.procedure-alert .lcSpecialFactors:before,\n.doc-container .lcJobTitle:before,\n.procedure-alert .lcJobTitle:before,\n.doc-container .lcJobCode:before,\n.procedure-alert .lcJobCode:before,\n.doc-container .lcEducationLevel:before,\n.procedure-alert .lcEducationLevel:before,\n.doc-container .lcAge:before,\n.procedure-alert .lcAge:before,\n.doc-container .lcProfessionalBackground:before,\n.procedure-alert .lcProfessionalBackground:before,\n.doc-container .lcKnowledge:before,\n.procedure-alert .lcKnowledge:before,\n.doc-container .lcSkills:before,\n.procedure-alert .lcSkills:before,\n.doc-container .lcAbilities:before,\n.procedure-alert .lcAbilities:before,\n.doc-container .lcAttitude:before,\n.procedure-alert .lcAttitude:before,\n.doc-container .lcData:before,\n.procedure-alert .lcData:before,\n.doc-container .lcResources:before,\n.procedure-alert .lcResources:before,\n.doc-container .lcIncentives:before,\n.procedure-alert .lcIncentives:before,\n.doc-container .lcCapacity:before,\n.procedure-alert .lcCapacity:before,\n.doc-container .lcMotives:before,\n.procedure-alert .lcMotives:before,\n.doc-container .lcPerformanceSupport:before,\n.procedure-alert .lcPerformanceSupport:before,\n.doc-container .lcJobDesign:before,\n.procedure-alert .lcJobDesign:before,\n.doc-container .lcPersonalDevelopment:before,\n.procedure-alert .lcPersonalDevelopment:before,\n.doc-container .lcHumanResourceDevelopment:before,\n.procedure-alert .lcHumanResourceDevelopment:before,\n.doc-container .lcOrganizationalCommunication:before,\n.procedure-alert .lcOrganizationalCommunication:before,\n.doc-container .lcOrganizationalDesign:before,\n.procedure-alert .lcOrganizationalDesign:before,\n.doc-container .lcCurrentEntryBehaviors:before,\n.procedure-alert .lcCurrentEntryBehaviors:before,\n.doc-container .lcAttitudeTowardContent:before,\n.procedure-alert .lcAttitudeTowardContent:before,\n.doc-container .lcLearningPreferences:before,\n.procedure-alert .lcLearningPreferences:before,\n.doc-container .lcTrainingType:before,\n.procedure-alert .lcTrainingType:before,\n.doc-container .lcLearningStrategy:before,\n.procedure-alert .lcLearningStrategy:before,\n.doc-container .lcDuration:before,\n.procedure-alert .lcDuration:before,\n.doc-container .lcTime:before,\n.procedure-alert .lcTime:before,\n.doc-container .lcRequiredFinances:before,\n.procedure-alert .lcRequiredFinances:before,\n.doc-container .lcRequiredPersonnel:before,\n.procedure-alert .lcRequiredPersonnel:before,\n.doc-container .lcRequiredFacilities:before,\n.procedure-alert .lcRequiredFacilities:before,\n.doc-container .lcRequiredEquipment:before,\n.procedure-alert .lcRequiredEquipment:before,\n.doc-container .lcLocalCultureConsiderations:before,\n.procedure-alert .lcLocalCultureConsiderations:before,\n.doc-container .lcMasteryScoreCriteria:before,\n.procedure-alert .lcMasteryScoreCriteria:before,\n.doc-container .lcPerformanceRubric:before,\n.procedure-alert .lcPerformanceRubric:before,\n.doc-container .lcScoringMethod:before,\n.procedure-alert .lcScoringMethod:before,\n.doc-container .lcMinimumPassThreshold:before,\n.procedure-alert .lcMinimumPassThreshold:before,\n.doc-container .lcBrowsers:before,\n.procedure-alert .lcBrowsers:before,\n.doc-container .lcLms:before,\n.procedure-alert .lcLms:before,\n.doc-container .lcNonLmsEnvironment:before,\n.procedure-alert .lcNonLmsEnvironment:before,\n.doc-container .lcPaperBasedMaterials:before,\n.procedure-alert .lcPaperBasedMaterials:before,\n.doc-container .lcClassroom:before,\n.procedure-alert .lcClassroom:before,\n.doc-container .lcOjt:before,\n.procedure-alert .lcOjt:before,\n.doc-container .lcAccessibility:before,\n.procedure-alert .lcAccessibility:before,\n.doc-container .lcPlayers:before,\n.procedure-alert .lcPlayers:before,\n.doc-container .lcGraphicStandards:before,\n.procedure-alert .lcGraphicStandards:before,\n.doc-container .lcViewers:before,\n.procedure-alert .lcViewers:before,\n.doc-container .lcResolution:before,\n.procedure-alert .lcResolution:before,\n.doc-container .lcFileSizeLimitations:before,\n.procedure-alert .lcFileSizeLimitations:before,\n.doc-container .lcDownloadTime:before,\n.procedure-alert .lcDownloadTime:before,\n.doc-container .lcSecurity:before,\n.procedure-alert .lcSecurity:before,\n.doc-container .lcObjectiveItem:before,\n.procedure-alert .lcObjectiveItem:before,\n.doc-container .lcImmediatePerformanceCompetence:before,\n.procedure-alert .lcImmediatePerformanceCompetence:before,\n.doc-container .lcJobTransfer:before,\n.procedure-alert .lcJobTransfer:before,\n.doc-container .lcOrganizationalImpact:before,\n.procedure-alert .lcOrganizationalImpact:before,\n.doc-container .lcQuestion:before,\n.procedure-alert .lcQuestion:before,\n.doc-container .lcAnswerOption:before,\n.procedure-alert .lcAnswerOption:before,\n.doc-container .lcSequenceOption:before,\n.procedure-alert .lcSequenceOption:before,\n.doc-container .lcFeedbackItem:before,\n.procedure-alert .lcFeedbackItem:before,\n.doc-container .lcAsset:before,\n.procedure-alert .lcAsset:before {\n  display: block;\n  font-family: \'Courier New\', Courier, monospace;\n  font-size: 0.9em;\n  margin-top: 6pt;\n  margin-bottom: 6pt;\n  color: #808080;\n}\n.doc-container .lcCorrectResponse:before,\n.procedure-alert .lcCorrectResponse:before,\n.doc-container .lcSequence:before,\n.procedure-alert .lcSequence:before {\n  font-family: \'Courier New\', Courier, monospace;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: black;\n}\n.doc-container .learningPlan:before,\n.procedure-alert .learningPlan:before,\n.doc-container .learningOverview:before,\n.procedure-alert .learningOverview:before,\n.doc-container .learningContent:before,\n.procedure-alert .learningContent:before,\n.doc-container .learningSummary:before,\n.procedure-alert .learningSummary:before,\n.doc-container .learningAssessment:before,\n.procedure-alert .learningAssessment:before {\n  display: block;\n  font-style: italic;\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: bold;\n  margin-top: 16pt;\n  margin-bottom: 11pt;\n}\n.doc-container .lcProject:before,\n.procedure-alert .lcProject:before,\n.doc-container .lcPerformanceAnalysis:before,\n.procedure-alert .lcPerformanceAnalysis:before,\n.doc-container .lcCauseAnalysis:before,\n.procedure-alert .lcCauseAnalysis:before,\n.doc-container .lcInterventionDefinition:before,\n.procedure-alert .lcInterventionDefinition:before,\n.doc-container .lcInstruction:before,\n.procedure-alert .lcInstruction:before,\n.doc-container .lcInterventionImplementation:before,\n.procedure-alert .lcInterventionImplementation:before,\n.doc-container .lcPerformanceEvaluation:before,\n.procedure-alert .lcPerformanceEvaluation:before {\n  display: block;\n  font-size: 1.4em;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 12pt;\n  margin-bottom: 12pt;\n}\n.doc-container .lcOrganizationalAnalysis:before,\n.procedure-alert .lcOrganizationalAnalysis:before,\n.doc-container .lcGapAnalysis:before,\n.procedure-alert .lcGapAnalysis:before,\n.doc-container .lcOrganizationalEnvironmentAnalysis:before,\n.procedure-alert .lcOrganizationalEnvironmentAnalysis:before,\n.doc-container .lcWorkEnvironmentAnalysis:before,\n.procedure-alert .lcWorkEnvironmentAnalysis:before,\n.doc-container .lcPerformerAnalysis:before,\n.procedure-alert .lcPerformerAnalysis:before,\n.doc-container .lcEnvironmentalFactor:before,\n.procedure-alert .lcEnvironmentalFactor:before,\n.doc-container .lcInternalFactor:before,\n.procedure-alert .lcInternalFactor:before,\n.doc-container .lcNonTrainingInterventions:before,\n.procedure-alert .lcNonTrainingInterventions:before,\n.doc-container .lcTrainingInterventions:before,\n.procedure-alert .lcTrainingInterventions:before,\n.doc-container .lcLearningObjectives:before,\n.procedure-alert .lcLearningObjectives:before,\n.doc-container .lcFormativeEvaluation:before,\n.procedure-alert .lcFormativeEvaluation:before,\n.doc-container .lcSummativeEvaluation:before,\n.procedure-alert .lcSummativeEvaluation:before,\n.doc-container .lcAudience:before,\n.procedure-alert .lcAudience:before,\n.doc-container .learningOverview > .lcDuration:before,\n.procedure-alert .learningOverview > .lcDuration:before,\n.doc-container .learningOverview > .lcResources:before,\n.procedure-alert .learningOverview > .lcResources:before,\n.doc-container .learningSummary > .lcResources:before,\n.procedure-alert .learningSummary > .lcResources:before,\n.doc-container .lcSection:before,\n.procedure-alert .lcSection:before,\n.doc-container .lcIntro:before,\n.procedure-alert .lcIntro:before,\n.doc-container .learningAssessment > .lcDuration:before,\n.procedure-alert .learningAssessment > .lcDuration:before,\n.doc-container .lcInteraction:before,\n.procedure-alert .lcInteraction:before,\n.doc-container .lcSummary:before,\n.procedure-alert .lcSummary:before,\n.doc-container .lcReview:before,\n.procedure-alert .lcReview:before,\n.doc-container .lcNextSteps:before,\n.procedure-alert .lcNextSteps:before {\n  display: block;\n  font-family: Verdana, Arial, sans-serif;\n  font-size: 1.2em;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 12pt;\n  margin-bottom: 6pt;\n  color: black;\n}\n.doc-container .lcGapItem:before,\n.procedure-alert .lcGapItem:before,\n.doc-container .lcTargetAudience:before,\n.procedure-alert .lcTargetAudience:before,\n.doc-container .lcPrerequisites:before,\n.procedure-alert .lcPrerequisites:before,\n.doc-container .lcRequiredEntryBehaviors:before,\n.procedure-alert .lcRequiredEntryBehaviors:before,\n.doc-container .lcTrainingComponent:before,\n.procedure-alert .lcTrainingComponent:before,\n.doc-container .lcAssessmentStrategy:before,\n.procedure-alert .lcAssessmentStrategy:before,\n.doc-container .lcTechnicalRqmts:before,\n.procedure-alert .lcTechnicalRqmts:before,\n.doc-container .lcEntryBehavior:before,\n.procedure-alert .lcEntryBehavior:before {\n  display: block;\n  text-align: left;\n  font-size: 1em;\n  font-weight: bold;\n  margin-top: 6pt;\n  margin-bottom: 1pt;\n}\n.doc-container .lcAssessmentComponent,\n.procedure-alert .lcAssessmentComponent {\n  display: block;\n  text-align: left;\n  font-size: 1em;\n  font-weight: normal;\n  margin-top: 6pt;\n  margin-bottom: 1pt;\n}\n.doc-container .lcProject > *,\n.procedure-alert .lcProject > *,\n.doc-container .lcPerformanceAnalysis > *,\n.procedure-alert .lcPerformanceAnalysis > *,\n.doc-container .lcCauseAnalysis > *,\n.procedure-alert .lcCauseAnalysis > *,\n.doc-container .lcInterventionDefinition > *,\n.procedure-alert .lcInterventionDefinition > *,\n.doc-container .lcOrganizationalAnalysis > *,\n.procedure-alert .lcOrganizationalAnalysis > *,\n.doc-container .lcGapAnalysis > *,\n.procedure-alert .lcGapAnalysis > *,\n.doc-container .lcGapItem > *,\n.procedure-alert .lcGapItem > *,\n.doc-container .lcWorkEnvironmentAnalysis > *,\n.procedure-alert .lcWorkEnvironmentAnalysis > *,\n.doc-container .lcPerformerAnalysis > *,\n.procedure-alert .lcPerformerAnalysis > *,\n.doc-container .lcEnvironmentalFactor > *,\n.procedure-alert .lcEnvironmentalFactor > *,\n.doc-container .lcInternalFactor > *,\n.procedure-alert .lcInternalFactor > *,\n.doc-container .lcNonTrainingInterventions > *,\n.procedure-alert .lcNonTrainingInterventions > *,\n.doc-container .lcTrainingInterventions > *,\n.procedure-alert .lcTrainingInterventions > *,\n.doc-container .lcTargetAudience > *,\n.procedure-alert .lcTargetAudience > *,\n.doc-container .lcTrainingComponent > *,\n.procedure-alert .lcTrainingComponent > *,\n.doc-container .lcAssessmentComponent > *,\n.procedure-alert .lcAssessmentComponent > *,\n.doc-container .lcTechnicalRqmts > *,\n.procedure-alert .lcTechnicalRqmts > *,\n.doc-container .lcLearningObjectives > *,\n.procedure-alert .lcLearningObjectives > *,\n.doc-container .lcObjectiveItem > *,\n.procedure-alert .lcObjectiveItem > *,\n.doc-container .lcPerformanceEvaluation > *,\n.procedure-alert .lcPerformanceEvaluation > *,\n.doc-container .lcSummativeEvaluation > *,\n.procedure-alert .lcSummativeEvaluation > *,\n.doc-container .lcAudience > *,\n.procedure-alert .lcAudience > *,\n.doc-container .lcDuration > *,\n.procedure-alert .lcDuration > *,\n.doc-container .lcResources > *,\n.procedure-alert .lcResources > *,\n.doc-container .lcSection > *,\n.procedure-alert .lcSection > *,\n.doc-container .lcQuestion > *,\n.procedure-alert .lcQuestion > *,\n.doc-container .lcSummary > *,\n.procedure-alert .lcSummary > *,\n.doc-container .lcReview > *,\n.procedure-alert .lcReview > *,\n.doc-container .lcNextSteps > *,\n.procedure-alert .lcNextSteps > *,\n.doc-container .lcAnswerOption > *,\n.procedure-alert .lcAnswerOption > *,\n.doc-container .lcSequenceOption > *,\n.procedure-alert .lcSequenceOption > *,\n.doc-container .lcFeedbackItem > *,\n.procedure-alert .lcFeedbackItem > * {\n  display: block;\n  margin-left: 20pt;\n}\n.doc-container .lcFeedbackItem[feedbackStatus="fbCorrect"]:before,\n.procedure-alert .lcFeedbackItem[feedbackStatus="fbCorrect"]:before {\n  color: green;\n}\n.doc-container .lcFeedbackItem[feedbackStatus="fbIncorrect"]:before,\n.procedure-alert .lcFeedbackItem[feedbackStatus="fbIncorrect"]:before {\n  color: red;\n}\n.doc-container .lcMatchTable,\n.procedure-alert .lcMatchTable {\n  display: table;\n}\n.doc-container .lcMatchingHeader,\n.procedure-alert .lcMatchingHeader,\n.doc-container .lcMatchingPair,\n.procedure-alert .lcMatchingPair {\n  display: table-row;\n}\n.doc-container .lcMatchingHeader,\n.procedure-alert .lcMatchingHeader {\n  font-weight: bold;\n  background-color: #d3d3d3;\n}\n.doc-container .lcMatchingPair > .lcItem,\n.procedure-alert .lcMatchingPair > .lcItem,\n.doc-container .lcMatchingPair > .lcMatchingItem,\n.procedure-alert .lcMatchingPair > .lcMatchingItem,\n.doc-container .lcMatchingHeader > .lcItem,\n.procedure-alert .lcMatchingHeader > .lcItem,\n.doc-container .lcMatchingHeader > .lcMatchingItem,\n.procedure-alert .lcMatchingHeader > .lcMatchingItem {\n  display: table-cell;\n}\n.doc-container .lcSequenceOption,\n.procedure-alert .lcSequenceOption {\n  border: 1px solid black;\n}\n.doc-container .select,\n.procedure-alert .select {\n  background-color: aquamarine;\n}\n.doc-container .tabular.lcAnswerOptionGroup,\n.procedure-alert .tabular.lcAnswerOptionGroup,\n.doc-container .tabular.lcSequenceOptionGroup,\n.procedure-alert .tabular.lcSequenceOptionGroup,\n.doc-container .tabular.lcMatchTable,\n.procedure-alert .tabular.lcMatchTable {\n  table-layout: fixed;\n}\n.doc-container .tabular.lcAnswerOptionGroup .control,\n.procedure-alert .tabular.lcAnswerOptionGroup .control {\n  width: 50px;\n}\n.doc-container .tabular.lcMatchTable > * > *,\n.procedure-alert .tabular.lcMatchTable > * > * {\n  width: 50%;\n}\n.doc-container .slideControl,\n.procedure-alert .slideControl {\n  text-align: right;\n}\n.doc-container .correct,\n.procedure-alert .correct {\n  background-color: #90EE90;\n}\n.doc-container .wrong,\n.procedure-alert .wrong {\n  background-color: #FFCCCC;\n}\n.doc-container .slide.hide,\n.procedure-alert .slide.hide {\n  display: none;\n}\n.doc-container .slide.show,\n.procedure-alert .slide.show {\n  display: block;\n}\n.doc-container .acronym,\n.procedure-alert .acronym {\n  display: inline-block;\n}\n.doc-container .acronymTerm,\n.procedure-alert .acronymTerm {\n  cursor: pointer;\n  border-bottom: 1px dashed #000;\n}\n.doc-container .acronymDefinition,\n.procedure-alert .acronymDefinition {\n  display: none;\n}\n.doc-container .footnote,\n.procedure-alert .footnote {\n  cursor: pointer;\n  vertical-align: super;\n  font-size: 80%;\n}\n.doc-container .footnoteBody,\n.procedure-alert .footnoteBody {\n  display: none;\n}\n.doc-container .bar,\n.procedure-alert .bar {\n  background: black;\n  width: var(--change-bar-width);\n  position: absolute;\n  left: var(--change-bar-left-indent);\n}\n.doc-container .centerhead1,\n.procedure-alert .centerhead1,\n.doc-container .centerhead2,\n.procedure-alert .centerhead2,\n.doc-container .sidehead0,\n.procedure-alert .sidehead0,\n.doc-container .sidehead1,\n.procedure-alert .sidehead1,\n.doc-container .sidehead2,\n.procedure-alert .sidehead2,\n.doc-container .sidehead3,\n.procedure-alert .sidehead3,\n.doc-container .sidehead4,\n.procedure-alert .sidehead4,\n.doc-container .sidehead5,\n.procedure-alert .sidehead5 {\n  display: block;\n  margin-top: 0;\n}\n.doc-container .centerhead1,\n.procedure-alert .centerhead1 {\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 17pt;\n  min-height: 1em;\n}\n.doc-container .centerhead2,\n.procedure-alert .centerhead2 {\n  font-size: 14pt;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  margin-bottom: 17pt;\n  min-height: 1em;\n}\n.doc-container .sidehead1,\n.procedure-alert .sidehead1 {\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: left;\n  margin-bottom: 15pt;\n  min-height: 1em;\n}\n.doc-container .commonInfo > .title.empty:before,\n.procedure-alert .commonInfo > .title.empty:before {\n  content: var(--label-commonInfo);\n}\n.doc-container .faultTable,\n.procedure-alert .faultTable {\n  margin-bottom: 17pt;\n}\n.doc-container .faultTable th:nth-child(1),\n.procedure-alert .faultTable th:nth-child(1) {\n  width: 30%;\n}\n.doc-container .faultTable th:nth-child(2),\n.procedure-alert .faultTable th:nth-child(2) {\n  width: 40%;\n}\n.doc-container .faultTable th:nth-child(3),\n.procedure-alert .faultTable th:nth-child(3) {\n  width: 30%;\n}\n.doc-container .faultTableTitle:before,\n.procedure-alert .faultTableTitle:before {\n  content: var(--label-faultCodes);\n}\n.doc-container .faultTable th.code:before,\n.procedure-alert .faultTable th.code:before {\n  content: var(--label-faultCode);\n}\n.doc-container .faultTable th.description:before,\n.procedure-alert .faultTable th.description:before {\n  content: var(--label-faultDescription);\n}\n.doc-container .faultTable th.causes:before,\n.procedure-alert .faultTable th.causes:before {\n  content: var(--label-possibleCauses);\n}\n.doc-container .faultTable .faultCode:before,\n.procedure-alert .faultTable .faultCode:before {\n  content: attr(data-faultcode);\n}\n.doc-container .footnote:before,\n.procedure-alert .footnote:before {\n  display: inline;\n  vertical-align: super;\n  content: attr(data-count) " ";\n}\n.doc-container .row__footnote .footnoteBody,\n.procedure-alert .row__footnote .footnoteBody,\n.doc-container .row__footnote .footnoteBody > *,\n.procedure-alert .row__footnote .footnoteBody > * {\n  display: inline;\n}\n.doc-container .row__footnote,\n.procedure-alert .row__footnote {\n  border-top: 0.5pt solid black;\n}\n.doc-container .status.print,\n.procedure-alert .status.print,\n.doc-container .headFootData,\n.procedure-alert .headFootData,\n.doc-container img.graphicImg,\n.procedure-alert img.graphicImg,\n.doc-container img.multimediaObject,\n.procedure-alert img.multimediaObject,\n.doc-container .infoEntityIdent,\n.procedure-alert .infoEntityIdent {\n  display: none;\n}\n.doc-container .productIllustration .graphicImg,\n.procedure-alert .productIllustration .graphicImg {\n  display: block;\n  margin: auto;\n}\n.doc-container .reqTechInfoGroup,\n.procedure-alert .reqTechInfoGroup {\n  counter-increment: table;\n}\n.doc-container .dmodule,\n.procedure-alert .dmodule {\n  counter-reset: counter1 counter2 counter3 counter4 counter5 counter6 counter7 counter8 figure sheet table footnote question;\n}\n.doc-container .Procedure,\n.procedure-alert .Procedure,\n.doc-container .description,\n.procedure-alert .description {\n  counter-reset: counter1 counter2 counter3 counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .levelled1:before,\n.procedure-alert .levelled1:before {\n  content: var(--levelledCounterContent1);\n}\n.doc-container .levelled2:before,\n.procedure-alert .levelled2:before {\n  content: var(--levelledCounterContent1_2);\n}\n.doc-container .levelled3:before,\n.procedure-alert .levelled3:before {\n  content: var(--levelledCounterContent1_2_3);\n}\n.doc-container .levelled4:before,\n.procedure-alert .levelled4:before {\n  content: var(--levelledCounterContent1_2_3_4);\n}\n.doc-container .levelled5:before,\n.procedure-alert .levelled5:before {\n  content: var(--levelledCounterContent1_2_3_4_5);\n}\n.doc-container .levelled6:before,\n.procedure-alert .levelled6:before {\n  content: var(--levelledCounterContent1_2_3_4_5_6);\n}\n.doc-container .levelled7:before,\n.procedure-alert .levelled7:before {\n  content: var(--levelledCounterContent1_2_3_4_5_6_7);\n}\n.doc-container .levelled8:before,\n.procedure-alert .levelled8:before {\n  content: var(--levelledCounterContent1_2_3_4_5_6_7_8);\n}\n.doc-container .levels > .levelAlts,\n.procedure-alert .levels > .levelAlts {\n  counter-increment: counter1;\n}\n.doc-container .level1 > .levelAlts,\n.procedure-alert .level1 > .levelAlts {\n  counter-increment: counter2;\n}\n.doc-container .level2 > .levelAlts,\n.procedure-alert .level2 > .levelAlts {\n  counter-increment: counter3;\n}\n.doc-container .level3 > .levelAlts,\n.procedure-alert .level3 > .levelAlts {\n  counter-increment: counter4;\n}\n.doc-container .level4 > .levelAlts,\n.procedure-alert .level4 > .levelAlts {\n  counter-increment: counter5;\n}\n.doc-container .level5 > .levelAlts,\n.procedure-alert .level5 > .levelAlts {\n  counter-increment: counter6;\n}\n.doc-container .level6 > .levelAlts,\n.procedure-alert .level6 > .levelAlts {\n  counter-increment: counter7;\n}\n.doc-container .level7 > .levelAlts,\n.procedure-alert .level7 > .levelAlts {\n  counter-increment: counter8;\n}\n.doc-container .levelAlts > .level1,\n.procedure-alert .levelAlts > .level1,\n.doc-container .levelAlts > .level2,\n.procedure-alert .levelAlts > .level2,\n.doc-container .levelAlts > .level3,\n.procedure-alert .levelAlts > .level3,\n.doc-container .levelAlts > .level4,\n.procedure-alert .levelAlts > .level4,\n.doc-container .levelAlts > .level5,\n.procedure-alert .levelAlts > .level5,\n.doc-container .levelAlts > .level6 .levelAlts > .level7,\n.procedure-alert .levelAlts > .level6 .levelAlts > .level7,\n.doc-container .levelAlts > .level8,\n.procedure-alert .levelAlts > .level8 {\n  counter-increment: none;\n}\n.doc-container .levels > .levelAlts,\n.procedure-alert .levels > .levelAlts,\n.doc-container .levelAlts > .level1,\n.procedure-alert .levelAlts > .level1 {\n  counter-reset: counter2 counter3 counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level1 > .levelAlts,\n.procedure-alert .level1 > .levelAlts,\n.doc-container .levelAlts > .level2,\n.procedure-alert .levelAlts > .level2 {\n  counter-reset: counter3 counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level2 > .levelAlts,\n.procedure-alert .level2 > .levelAlts,\n.doc-container .levelAlts > .level3,\n.procedure-alert .levelAlts > .level3 {\n  counter-reset: counter4 counter5 counter6 counter7 counter8;\n}\n.doc-container .level3 > .levelAlts,\n.procedure-alert .level3 > .levelAlts,\n.doc-container .levelAlts > .level4,\n.procedure-alert .levelAlts > .level4 {\n  counter-reset: counter5 counter6 counter7 counter8;\n}\n.doc-container .level4 > .levelAlts,\n.procedure-alert .level4 > .levelAlts,\n.doc-container .levelAlts > .level5,\n.procedure-alert .levelAlts > .level5 {\n  counter-reset: counter6 counter7 counter8;\n}\n.doc-container .level5 > .levelAlts,\n.procedure-alert .level5 > .levelAlts,\n.doc-container .levelAlts > .level6,\n.procedure-alert .levelAlts > .level6 {\n  counter-reset: counter7 counter8;\n}\n.doc-container .level6 > .levelAlts,\n.procedure-alert .level6 > .levelAlts,\n.doc-container .levelAlts > .level7,\n.procedure-alert .levelAlts > .level7 {\n  counter-reset: counter8;\n}\n.doc-container .levelledPara > .levelledPara,\n.procedure-alert .levelledPara > .levelledPara,\n.doc-container .levelledPara > .levelAlts > .levelledPara,\n.procedure-alert .levelledPara > .levelAlts > .levelledPara,\n.doc-container .proceduralStep > .proceduralStep,\n.procedure-alert .proceduralStep > .proceduralStep,\n.doc-container .proceduralStep > .levelAlts > .proceduralStep,\n.procedure-alert .proceduralStep > .levelAlts > .proceduralStep,\n.doc-container .commonInfoDescrPara > .commonInfoDescrPara,\n.procedure-alert .commonInfoDescrPara > .commonInfoDescrPara,\n.doc-container .commonInfoDescrPara > .levelAlts > .commonInfoDescrPara,\n.procedure-alert .commonInfoDescrPara > .levelAlts > .commonInfoDescrPara {\n  margin-left: var(--left-text-indent-reverse);\n}\n.doc-container .level1,\n.procedure-alert .level1,\n.doc-container .level2,\n.procedure-alert .level2,\n.doc-container .level3,\n.procedure-alert .level3,\n.doc-container .level4,\n.procedure-alert .level4,\n.doc-container .level5,\n.procedure-alert .level5,\n.doc-container .level6,\n.procedure-alert .level6,\n.doc-container .level7,\n.procedure-alert .level7,\n.doc-container .level8,\n.procedure-alert .level8 {\n  position: relative;\n  padding-left: var(--left-text-indent);\n}\n.doc-container .level1 > .title,\n.procedure-alert .level1 > .title,\n.doc-container .level2 > .title,\n.procedure-alert .level2 > .title,\n.doc-container .level3 > .title,\n.procedure-alert .level3 > .title,\n.doc-container .level4 > .title,\n.procedure-alert .level4 > .title,\n.doc-container .level5 > .title,\n.procedure-alert .level5 > .title,\n.doc-container .level6 > .title,\n.procedure-alert .level6 > .title,\n.doc-container .level7 > .title,\n.procedure-alert .level7 > .title,\n.doc-container .level8 > .title,\n.procedure-alert .level8 > .title {\n  margin-top: 0;\n}\n.doc-container .level1 > *:first-child:before,\n.procedure-alert .level1 > *:first-child:before,\n.doc-container .level2 > *:first-child:before,\n.procedure-alert .level2 > *:first-child:before,\n.doc-container .level3 > *:first-child:before,\n.procedure-alert .level3 > *:first-child:before,\n.doc-container .level4 > *:first-child:before,\n.procedure-alert .level4 > *:first-child:before,\n.doc-container .level5 > *:first-child:before,\n.procedure-alert .level5 > *:first-child:before,\n.doc-container .level6 > *:first-child:before,\n.procedure-alert .level6 > *:first-child:before,\n.doc-container .level7 > *:first-child:before,\n.procedure-alert .level7 > *:first-child:before,\n.doc-container .level8 > *:first-child:before,\n.procedure-alert .level8 > *:first-child:before {\n  position: absolute;\n  margin-left: var(--left-text-indent-reverse);\n}\n.doc-container .legend,\n.procedure-alert .legend {\n  margin-left: var(--left-text-indent);\n}\n.doc-container .legend table,\n.procedure-alert .legend table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n  text-align: left;\n  font-weight: normal;\n  font-style: normal;\n}\n.doc-container .definitionList table caption,\n.procedure-alert .definitionList table caption {\n  text-align: left;\n  font-style: italic;\n  margin-bottom: 4pt;\n}\n.doc-container .legend td,\n.procedure-alert .legend td {\n  width: 50%;\n}\n.doc-container .legend .definitionListItem,\n.procedure-alert .legend .definitionListItem {\n  display: flex;\n}\n.doc-container .legend .listItemTerm,\n.procedure-alert .legend .listItemTerm {\n  min-width: var(--list-body-indent);\n  width: 10%;\n}\n.doc-container .legend .listItemDefinition,\n.procedure-alert .legend .listItemDefinition {\n  width: 90%;\n}\n.doc-container .definitionList td,\n.procedure-alert .definitionList td,\n.doc-container .definitionList th,\n.procedure-alert .definitionList th {\n  vertical-align: top;\n}\n.doc-container .definitionListHeader,\n.procedure-alert .definitionListHeader {\n  margin-bottom: 4pt;\n}\n.doc-container .definitionListItem,\n.procedure-alert .definitionListItem {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.doc-container .listItemDefinition .p,\n.procedure-alert .listItemDefinition .p {\n  margin-top: 0;\n}\n.doc-container .legend caption:before,\n.procedure-alert .legend caption:before {\n  content: var(--label-legend) " " counter(figure) ":";\n}\n.doc-container .definitionList caption.rest:after,\n.procedure-alert .definitionList caption.rest:after {\n  content: " (" var(--label-continued) ")";\n}\n.doc-container .definitionList caption,\n.procedure-alert .definitionList caption {\n  page-break-after: avoid;\n}\n.doc-container .li,\n.procedure-alert .li {\n  display: flex;\n}\n.doc-container .li:before,\n.procedure-alert .li:before {\n  flex-shrink: 0;\n  width: var(--list-body-indent);\n}\n.doc-container .listItemBody > .p:first-child,\n.procedure-alert .listItemBody > .p:first-child {\n  margin-top: 0;\n}\n.doc-container .list .list,\n.procedure-alert .list .list {\n  margin-top: 8pt;\n}\n.doc-container .list .list .li:last-child .listItemBody > .p:last-child,\n.procedure-alert .list .list .li:last-child .listItemBody > .p:last-child {\n  margin-bottom: 0;\n}\n.doc-container .ol,\n.procedure-alert .ol {\n  counter-reset: seq1;\n}\n.doc-container .ol > .li,\n.procedure-alert .ol > .li {\n  counter-increment: seq1;\n}\n.doc-container .ol > .li:before,\n.procedure-alert .ol > .li:before {\n  content: counter(seq1);\n}\n.doc-container .ol .ol,\n.procedure-alert .ol .ol {\n  counter-reset: seq2;\n}\n.doc-container .ol > .li .ol > .li,\n.procedure-alert .ol > .li .ol > .li {\n  counter-increment: seq2;\n}\n.doc-container .ol .ol > .li:before,\n.procedure-alert .ol .ol > .li:before {\n  content: counter(seq1) "." counter(seq2);\n}\n.doc-container .ul.pf01 > .li:before,\n.procedure-alert .ul.pf01 > .li:before {\n  content: "";\n}\n.doc-container .ul.pf03 > .li:before,\n.procedure-alert .ul.pf03 > .li:before {\n  content: "\\2010";\n}\n.doc-container .ul.pf04 > .li:before,\n.procedure-alert .ul.pf04 > .li:before {\n  content: "\\229A";\n}\n.doc-container .ul.pf05 > .li:before,\n.procedure-alert .ul.pf05 > .li:before {\n  content: "\\25CB";\n}\n.doc-container .ul.pf06 > .li:before,\n.procedure-alert .ul.pf06 > .li:before {\n  content: "\\25A1";\n}\n.doc-container .ul.pf01 > .li:before,\n.procedure-alert .ul.pf01 > .li:before {\n  content: "";\n}\n.doc-container .ul.pf03 > .li:before,\n.procedure-alert .ul.pf03 > .li:before {\n  content: "\\2010";\n}\n.doc-container .ul.pf04 > .li:before,\n.procedure-alert .ul.pf04 > .li:before {\n  content: "\\229A";\n}\n.doc-container .ul.pf05 > .li:before,\n.procedure-alert .ul.pf05 > .li:before {\n  content: "\\25CB";\n}\n.doc-container .ul.pf06 > .li:before,\n.procedure-alert .ul.pf06 > .li:before {\n  content: "\\25A1";\n}\n.doc-container .warning .ul > .li:before,\n.procedure-alert .warning .ul > .li:before,\n.doc-container .caution .ul > .li:before,\n.procedure-alert .caution .ul > .li:before,\n.doc-container .ul.pf07 > .li:before,\n.procedure-alert .ul.pf07 > .li:before {\n  content: "\\25CF";\n  font-weight: normal;\n}\n.doc-container .ul > .li:before,\n.procedure-alert .ul > .li:before,\n.doc-container .ul.pf02 > .li:before,\n.procedure-alert .ul.pf02 > .li:before {\n  content: "\\2010";\n}\n.doc-container .ol .ul > .li:before,\n.procedure-alert .ol .ul > .li:before,\n.doc-container .ul .ul > .li:before,\n.procedure-alert .ul .ul > .li:before,\n.doc-container .ol .ul.pf02 > .li:before,\n.procedure-alert .ol .ul.pf02 > .li:before,\n.doc-container .ul .ul.pf02 > .li:before,\n.procedure-alert .ul .ul.pf02 > .li:before {\n  content: "\\25CF";\n}\n.doc-container .ol .ul .ul > .li:before,\n.procedure-alert .ol .ul .ul > .li:before,\n.doc-container .ul .ul .ul > .li:before,\n.procedure-alert .ul .ul .ul > .li:before,\n.doc-container .ol .ul .ul.pf02 > .li:before,\n.procedure-alert .ol .ul .ul.pf02 > .li:before,\n.doc-container .ul .ul .ul > .li:before,\n.procedure-alert .ul .ul .ul > .li:before,\n.doc-container .ul .ul .ul.pf02 > .li:before,\n.procedure-alert .ul .ul .ul.pf02 > .li:before {\n  content: "\\2010";\n}\n.doc-container .p > .list,\n.procedure-alert .p > .list {\n  margin-top: 8pt;\n}\n.doc-container .reqCondGroup:before,\n.procedure-alert .reqCondGroup:before,\n.doc-container .reqSupportEquips:before,\n.procedure-alert .reqSupportEquips:before,\n.doc-container .reqSupplies:before,\n.procedure-alert .reqSupplies:before,\n.doc-container .reqTechInfoGroup:before,\n.procedure-alert .reqTechInfoGroup:before,\n.doc-container .reqSpares:before,\n.procedure-alert .reqSpares:before,\n.doc-container .reqSafety:before,\n.procedure-alert .reqSafety:before,\n.doc-container .reqPersons:before,\n.procedure-alert .reqPersons:before {\n  display: block;\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: left;\n  margin-top: 27pt;\n  margin-bottom: 17pt;\n  min-height: 1em;\n}\n.doc-container .reqCondGroup table,\n.procedure-alert .reqCondGroup table,\n.doc-container .reqSupportEquips table,\n.procedure-alert .reqSupportEquips table,\n.doc-container .reqSupplies table,\n.procedure-alert .reqSupplies table,\n.doc-container .reqSpares table,\n.procedure-alert .reqSpares table {\n  margin-left: 0;\n}\n.doc-container .formalTable table,\n.procedure-alert .formalTable table {\n  margin-left: 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border-bottom: 0.5pt solid black;\n  width: 100%;\n  text-align: left;\n}\n.doc-container .reqSafety > *,\n.procedure-alert .reqSafety > * {\n  margin-left: var(--left-text-indent);\n}\n.doc-container .formalTable td,\n.procedure-alert .formalTable td,\n.doc-container .formalTable th,\n.procedure-alert .formalTable th {\n  padding: 4pt;\n  text-align: left;\n  vertical-align: top;\n}\n.doc-container .formalTable th,\n.procedure-alert .formalTable th {\n  font-weight: bold;\n}\n.doc-container .formalTable td[colspan],\n.procedure-alert .formalTable td[colspan] {\n  display: table-cell;\n}\n.doc-container .formalTable thead tr,\n.procedure-alert .formalTable thead tr {\n  border-bottom: 0.5pt solid black;\n  border-top: 0.5pt solid black;\n}\n.doc-container .reqCondDm + .reqCondCircuitBreaker,\n.procedure-alert .reqCondDm + .reqCondCircuitBreaker,\n.doc-container .reqCondNoRef + .reqCondCircuitBreaker,\n.procedure-alert .reqCondNoRef + .reqCondCircuitBreaker,\n.doc-container .reqCondPm + .reqCondCircuitBreaker,\n.procedure-alert .reqCondPm + .reqCondCircuitBreaker,\n.doc-container .reqCondExternalPub + .reqCondCircuitBreaker,\n.procedure-alert .reqCondExternalPub + .reqCondCircuitBreaker,\n.doc-container .circuitBreakerDescr + .reqCondDm,\n.procedure-alert .circuitBreakerDescr + .reqCondDm,\n.doc-container .circuitBreakerDescr + .reqCondNoRef,\n.procedure-alert .circuitBreakerDescr + .reqCondNoRef,\n.doc-container .circuitBreakerDescr + .reqCondPm,\n.procedure-alert .circuitBreakerDescr + .reqCondPm,\n.doc-container .circuitBreakerDescr + .reqCondExternalPub,\n.procedure-alert .circuitBreakerDescr + .reqCondExternalPub {\n  border-top: 0.5pt solid black;\n}\n.doc-container .prelimTable td > *,\n.procedure-alert .prelimTable td > * {\n  padding-bottom: 4pt;\n}\n.doc-container .prelimTable td > *:last-child,\n.procedure-alert .prelimTable td > *:last-child {\n  padding-bottom: 0pt;\n}\n.doc-container .prelimTable_identification > *,\n.procedure-alert .prelimTable_identification > * {\n  display: block;\n}\n.doc-container .prelimTable_identification .identNumber[data-partnumber]:before,\n.procedure-alert .prelimTable_identification .identNumber[data-partnumber]:before {\n  content: var(--label-partno) " " attr(data-partnumber);\n}\n.doc-container .prelimTable_identification .identNumber[data-partnumber][data-manufacturercode]:before,\n.procedure-alert .prelimTable_identification .identNumber[data-partnumber][data-manufacturercode]:before {\n  content: var(--label-partno) " " attr(data-manufacturercode) "/" attr(data-partnumber);\n}\n.doc-container tr.embeddedSupportEquipDescr > :first-child:before,\n.procedure-alert tr.embeddedSupportEquipDescr > :first-child:before,\n.doc-container tr.embeddedSupplyDescr > :first-child:before,\n.procedure-alert tr.embeddedSupplyDescr > :first-child:before,\n.doc-container tr.embeddedSpareDescr > :first-child:before,\n.procedure-alert tr.embeddedSpareDescr > :first-child:before {\n  position: absolute;\n  margin-left: -18pt;\n  content: "-";\n}\n.doc-container .reqCondExternalPub .externalPubTitle,\n.procedure-alert .reqCondExternalPub .externalPubTitle {\n  display: none;\n}\n.doc-container .noSupportEquips:before,\n.procedure-alert .noSupportEquips:before,\n.doc-container .noSupplies:before,\n.procedure-alert .noSupplies:before,\n.doc-container .noSpares:before,\n.procedure-alert .noSpares:before,\n.doc-container .noConds:before,\n.procedure-alert .noConds:before {\n  display: block;\n  padding: 0;\n}\n.doc-container .noSupportEquips,\n.procedure-alert .noSupportEquips,\n.doc-container .noSupplies,\n.procedure-alert .noSupplies,\n.doc-container .noSpares,\n.procedure-alert .noSpares,\n.doc-container .noConds,\n.procedure-alert .noConds {\n  display: block;\n}\n.doc-container .row__noSupportEquips,\n.procedure-alert .row__noSupportEquips,\n.doc-container .row__noSupplies,\n.procedure-alert .row__noSupplies,\n.doc-container .row__noSpares,\n.procedure-alert .row__noSpares,\n.doc-container .row__noConds,\n.procedure-alert .row__noConds {\n  border-bottom: 1px solid black;\n}\n.doc-container .reqCondGroup th:nth-child(1),\n.procedure-alert .reqCondGroup th:nth-child(1) {\n  width: 13%;\n}\n.doc-container .reqCondGroup th:nth-child(2),\n.procedure-alert .reqCondGroup th:nth-child(2) {\n  width: 15%;\n}\n.doc-container .reqCondGroup th:nth-child(3),\n.procedure-alert .reqCondGroup th:nth-child(3) {\n  width: 23%;\n}\n.doc-container .reqCondGroup th:nth-child(4),\n.procedure-alert .reqCondGroup th:nth-child(4) {\n  width: 13%;\n}\n.doc-container .reqCondGroup th:nth-child(5),\n.procedure-alert .reqCondGroup th:nth-child(5) {\n  width: 16%;\n}\n.doc-container .reqCondGroup th:nth-child(6),\n.procedure-alert .reqCondGroup th:nth-child(6) {\n  width: 20%;\n}\n.doc-container .reqPersons th:nth-child(1),\n.procedure-alert .reqPersons th:nth-child(1) {\n  width: 20%;\n}\n.doc-container .reqPersons th:nth-child(2),\n.procedure-alert .reqPersons th:nth-child(2) {\n  width: 20%;\n}\n.doc-container .reqPersons th:nth-child(3),\n.procedure-alert .reqPersons th:nth-child(3) {\n  width: 20%;\n}\n.doc-container .reqPersons th:nth-child(4),\n.procedure-alert .reqPersons th:nth-child(4) {\n  width: 20%;\n}\n.doc-container .reqPersons th:nth-child(5),\n.procedure-alert .reqPersons th:nth-child(5) {\n  width: 20%;\n}\n.doc-container .reqTechInfoGroup th:nth-child(1),\n.procedure-alert .reqTechInfoGroup th:nth-child(1) {\n  width: 38%;\n}\n.doc-container .reqTechInfoGroup th:nth-child(2),\n.procedure-alert .reqTechInfoGroup th:nth-child(2) {\n  width: 46%;\n}\n.doc-container .reqTechInfoGroup th:nth-child(3),\n.procedure-alert .reqTechInfoGroup th:nth-child(3) {\n  width: 16%;\n}\n.doc-container .prelimTable th:nth-child(1),\n.procedure-alert .prelimTable th:nth-child(1) {\n  width: 35%;\n}\n.doc-container .prelimTable th:nth-child(2),\n.procedure-alert .prelimTable th:nth-child(2) {\n  width: 35%;\n}\n.doc-container .prelimTable th:nth-child(3),\n.procedure-alert .prelimTable th:nth-child(3) {\n  width: 10%;\n}\n.doc-container .prelimTable th:nth-child(4),\n.procedure-alert .prelimTable th:nth-child(4) {\n  width: 20%;\n}\n.doc-container .formalTable caption,\n.procedure-alert .formalTable caption {\n  font-style: italic;\n  margin-bottom: 4pt;\n  page-break-after: avoid;\n}\n.doc-container .reqCondGroup:before,\n.procedure-alert .reqCondGroup:before,\n.doc-container .reqPersons:before,\n.procedure-alert .reqPersons:before,\n.doc-container .reqTechInfoGroup:before,\n.procedure-alert .reqTechInfoGroup:before,\n.doc-container .reqSupportEquips:before,\n.procedure-alert .reqSupportEquips:before,\n.doc-container .reqSupplies:before,\n.procedure-alert .reqSupplies:before,\n.doc-container .reqSpares:before,\n.procedure-alert .reqSpares:before {\n  page-break-after: avoid;\n}\n.doc-container .reqCondGroup caption:before,\n.procedure-alert .reqCondGroup caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqCondGroup);\n}\n.doc-container .reqPersons caption:before,\n.procedure-alert .reqPersons caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqPersons);\n}\n.doc-container .reqTechInfoGroup caption:before,\n.procedure-alert .reqTechInfoGroup caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqTechInfoGroup);\n}\n.doc-container .reqSupportEquips caption:before,\n.procedure-alert .reqSupportEquips caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqSupportEquips);\n}\n.doc-container .reqSupplies caption:before,\n.procedure-alert .reqSupplies caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqSupplies);\n}\n.doc-container .reqSpares caption:before,\n.procedure-alert .reqSpares caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-reqSpares);\n}\n.doc-container .reqCondGroup caption.rest:after,\n.procedure-alert .reqCondGroup caption.rest:after,\n.doc-container .reqPersons caption.rest:after,\n.procedure-alert .reqPersons caption.rest:after,\n.doc-container .reqTechInfoGroup caption.rest:after,\n.procedure-alert .reqTechInfoGroup caption.rest:after,\n.doc-container .reqSupportEquips caption.rest:after,\n.procedure-alert .reqSupportEquips caption.rest:after,\n.doc-container .reqSupplies caption.rest:after,\n.procedure-alert .reqSupplies caption.rest:after,\n.doc-container .reqSpares caption.rest:after,\n.procedure-alert .reqSpares caption.rest:after,\n.doc-container .avehcfg caption.rest:after,\n.procedure-alert .avehcfg caption.rest:after,\n.doc-container .highInstruction caption.rest:after,\n.procedure-alert .highInstruction caption.rest:after {\n  content: " (" var(--label-continued) ")";\n}\n.doc-container .reqCondGroup thead .condition:before,\n.procedure-alert .reqCondGroup thead .condition:before {\n  content: var(--label-action) "/" var(--label-condition);\n}\n.doc-container .reqCondGroup thead .publication:before,\n.procedure-alert .reqCondGroup thead .publication:before {\n  content: var(--label-data-module) "/" var(--label-technical-publication);\n}\n.doc-container .reqCondGroup thead .cbEntry__action:before,\n.procedure-alert .reqCondGroup thead .cbEntry__action:before {\n  content: "";\n}\n.doc-container .reqCondGroup thead .cbEntry__accessPoint:before,\n.procedure-alert .reqCondGroup thead .cbEntry__accessPoint:before {\n  content: var(--label-accessPoint);\n}\n.doc-container .reqCondGroup thead .cbEntry__name:before,\n.procedure-alert .reqCondGroup thead .cbEntry__name:before {\n  content: var(--label-header-cb-name);\n}\n.doc-container .reqCondGroup thead .cbEntry__cb:before,\n.procedure-alert .reqCondGroup thead .cbEntry__cb:before {\n  content: var(--label-header-cb);\n}\n.doc-container .reqCondGroup thead .cbEntry__location:before,\n.procedure-alert .reqCondGroup thead .cbEntry__location:before {\n  content: var(--label-header-cb-location);\n}\n.doc-container .reqCondGroup thead .cbEntry__remarks:before,\n.procedure-alert .reqCondGroup thead .cbEntry__remarks:before {\n  content: var(--label-remarks);\n}\n.doc-container .reqPersons thead .person:before,\n.procedure-alert .reqPersons thead .person:before {\n  content: var(--label-person);\n}\n.doc-container .reqPersons thead .person__category::before,\n.procedure-alert .reqPersons thead .person__category::before {\n  content: var(--label-personCategory);\n}\n.doc-container .reqPersons thead .person__skill:before,\n.procedure-alert .reqPersons thead .person__skill:before {\n  content: var(--label-personSkill);\n}\n.doc-container .reqPersons thead .person__trade:before,\n.procedure-alert .reqPersons thead .person__trade:before {\n  content: var(--label-trade);\n}\n.doc-container .reqPersons thead .person__estimatedTime:before,\n.procedure-alert .reqPersons thead .person__estimatedTime:before {\n  content: var(--label-estimatedTime);\n}\n.doc-container .reqTechInfoGroup thead .documentNumber:before,\n.procedure-alert .reqTechInfoGroup thead .documentNumber:before {\n  content: var(--label-document-number);\n}\n.doc-container .reqTechInfoGroup thead .reqTechInfoTitle:before,\n.procedure-alert .reqTechInfoGroup thead .reqTechInfoTitle:before {\n  content: var(--label-title);\n}\n.doc-container .reqTechInfoGroup thead .category:before,\n.procedure-alert .reqTechInfoGroup thead .category:before {\n  content: var(--label-category);\n}\n.doc-container thead .prelimTable__name:before,\n.procedure-alert thead .prelimTable__name:before {\n  content: var(--label-name);\n}\n.doc-container thead .prelimTable__identification:before,\n.procedure-alert thead .prelimTable__identification:before {\n  content: var(--label-identification) "/" var(--label-reference);\n}\n.doc-container thead .prelimTable__qty:before,\n.procedure-alert thead .prelimTable__qty:before {\n  content: var(--label-quantity);\n}\n.doc-container thead .prelimTable__remark:before,\n.procedure-alert thead .prelimTable__remark:before {\n  content: var(--label-remarks);\n}\n.doc-container .cbEntry__action[data-circuitbreakeraction="open"]:before,\n.procedure-alert .cbEntry__action[data-circuitbreakeraction="open"]:before,\n.doc-container .cbEntry__action[data-circuitbreakeraction="open-order"]:before,\n.procedure-alert .cbEntry__action[data-circuitbreakeraction="open-order"]:before {\n  content: "- " var(--label-cbActionOpen);\n}\n.doc-container .cbEntry__action[data-circuitbreakeraction="close"]:before,\n.procedure-alert .cbEntry__action[data-circuitbreakeraction="close"]:before,\n.doc-container .cbEntry__action[data-circuitbreakeraction="close-order"]:before,\n.procedure-alert .cbEntry__action[data-circuitbreakeraction="close-order"]:before {\n  content: "- " var(--label-cbActionClose);\n}\n.doc-container .person__man:before,\n.procedure-alert .person__man:before {\n  content: var(--label-man) " " attr(data-value);\n}\n.doc-container .person__personnel[data-value]:before,\n.procedure-alert .person__personnel[data-value]:before {\n  content: attr(data-value) " " var(--label-persons);\n}\n.doc-container .person__personnel[data-value=\'1\']:before,\n.procedure-alert .person__personnel[data-value=\'1\']:before {\n  content: attr(data-value) " " var(--label-person-inline);\n}\n.doc-container .person__personnel[data-value=\'0\']:before,\n.procedure-alert .person__personnel[data-value=\'0\']:before,\n.doc-container .person__personnel[data-value=\'\']:before,\n.procedure-alert .person__personnel[data-value=\'\']:before {\n  content: var(--label-as-required);\n}\n.doc-container .person__category:before,\n.procedure-alert .person__category:before {\n  content: attr(data-personcategorycode);\n}\n.doc-container .person__skill[data-skilllevelcode]:before,\n.procedure-alert .person__skill[data-skilllevelcode]:before {\n  content: attr(data-skilllevelcode);\n}\n.doc-container .person__skill[data-skilllevelcode="sk01"]:before,\n.procedure-alert .person__skill[data-skilllevelcode="sk01"]:before {\n  content: var(--label-skillLevelCode-01);\n}\n.doc-container .person__skill[data-skilllevelcode="sk02"]:before,\n.procedure-alert .person__skill[data-skilllevelcode="sk02"]:before {\n  content: var(--label-skillLevelCode-02);\n}\n.doc-container .person__skill[data-skilllevelcode="sk03"]:before,\n.procedure-alert .person__skill[data-skilllevelcode="sk03"]:before {\n  content: var(--label-skillLevelCode-03);\n}\n.doc-container .person__estimatedTime:after,\n.procedure-alert .person__estimatedTime:after {\n  content: attr(data-unitofmeasure);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory]:before {\n  content: attr(data-reqtechinfocategory);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti01"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti01"]:before {\n  content: var(--label-reqTechInfoCategory-01);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti02"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti02"]:before {\n  content: var(--label-reqTechInfoCategory-02);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti03"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti03"]:before {\n  content: var(--label-reqTechInfoCategory-03);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti04"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti04"]:before {\n  content: var(--label-reqTechInfoCategory-04);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti05"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti05"]:before {\n  content: var(--label-reqTechInfoCategory-05);\n}\n.doc-container .reqTechInfoGroup td[data-reqtechinfocategory="ti06"]:before,\n.procedure-alert .reqTechInfoGroup td[data-reqtechinfocategory="ti06"]:before {\n  content: var(--label-reqTechInfoCategory-06);\n}\n.doc-container .workAreaLocationGroup:before,\n.procedure-alert .workAreaLocationGroup:before {\n  display: block;\n  font-size: 1em;\n  font-weight: bold;\n  text-align: left;\n  margin-top: 4pt;\n  margin-bottom: 4pt;\n  min-height: 1em;\n}\n.doc-container .workAreaLocationGroup .zoneRef::before,\n.procedure-alert .workAreaLocationGroup .zoneRef::before,\n.doc-container .workAreaLocationGroup .accessPointRef:before,\n.procedure-alert .workAreaLocationGroup .accessPointRef:before {\n  font-weight: normal;\n  display: block;\n  width: 100%;\n}\n.doc-container .workAreaLocationGroup *,\n.procedure-alert .workAreaLocationGroup * {\n  display: block !important;\n}\n.doc-container .productionMaintData .thresholdInterval:before,\n.procedure-alert .productionMaintData .thresholdInterval:before {\n  content: var(--label-thresholdInterval);\n  width: 110pt;\n  font-weight: bold;\n}\n.doc-container .productionMaintData .thresholdInterval,\n.procedure-alert .productionMaintData .thresholdInterval {\n  display: flex;\n}\n.doc-container .workAreaLocationGroup__type,\n.procedure-alert .workAreaLocationGroup__type {\n  margin-left: 22pt;\n  display: flex !important;\n}\n.doc-container .type__label,\n.procedure-alert .type__label {\n  width: 88pt;\n  font-weight: bold;\n}\n.doc-container .pmd .type__label,\n.procedure-alert .pmd .type__label {\n  width: 110pt;\n}\n.doc-container .type__body,\n.procedure-alert .type__body {\n  flex-grow: 1;\n  padding-bottom: 2pt;\n}\n.doc-container .type__item,\n.procedure-alert .type__item {\n  display: flex !important;\n  padding-bottom: 2pt;\n}\n.doc-container .item__number,\n.procedure-alert .item__number {\n  width: 88pt;\n}\n.doc-container .item__number:before,\n.procedure-alert .item__number:before {\n  content: attr(data-zonenumber) attr(data-accesspointnumber) attr(data-functionalitemnumber);\n}\n.doc-container .item__body,\n.procedure-alert .item__body {\n  flex-grow: 1;\n}\n.doc-container .item__body > *,\n.procedure-alert .item__body > * {\n  padding-bottom: 2pt;\n}\n.doc-container .item__full,\n.procedure-alert .item__full {\n  flex-grow: 1;\n}\n.doc-container .productItem,\n.procedure-alert .productItem {\n  display: inline;\n}\n.doc-container .type__label.zone:before,\n.procedure-alert .type__label.zone:before {\n  content: var(--label-zone);\n}\n.doc-container .type__label.zones:before,\n.procedure-alert .type__label.zones:before {\n  content: var(--label-zones);\n}\n.doc-container .type__label.accessPoint:before,\n.procedure-alert .type__label.accessPoint:before {\n  content: var(--label-accessPoint);\n}\n.doc-container .type__label.accessPoints:before,\n.procedure-alert .type__label.accessPoints:before {\n  content: var(--label-accessPoints);\n}\n.doc-container .type__label.workLocation:before,\n.procedure-alert .type__label.workLocation:before {\n  content: var(--label-workLocation);\n}\n.doc-container .type__label.workLocations:before,\n.procedure-alert .type__label.workLocations:before {\n  content: var(--label-workLocations);\n}\n.doc-container .taskDuration::after,\n.procedure-alert .taskDuration::after {\n  content: var(--label-preliminaryRqmts) " " attr(data-startupduration) " " attr(data-unitofmeasure) "\\000a" var(--label-mainProcedure) " " attr(data-procedureduration) " " attr(data-unitofmeasure) "\\000a" var(--label-closeRqmts) " " attr(data-closeupduration) " " attr(data-unitofmeasure);\n}\n.doc-container .item__body[data-accesspointtypevalue]:before,\n.procedure-alert .item__body[data-accesspointtypevalue]:before {\n  content: attr(data-accesspointtypevalue);\n}\n.doc-container .item__body[data-accesspointtypevalue=\'accpnl01\']:before,\n.procedure-alert .item__body[data-accesspointtypevalue=\'accpnl01\']:before {\n  content: var(--label-accessPoint-accpnl01);\n}\n.doc-container .item__body[data-accesspointtypevalue=\'accpnl02\']:before,\n.procedure-alert .item__body[data-accesspointtypevalue=\'accpnl02\']:before {\n  content: var(--label-accessPoint-accpnl02);\n}\n.doc-container .item__body[data-accesspointtypevalue=\'accpnl03\']:before,\n.procedure-alert .item__body[data-accesspointtypevalue=\'accpnl03\']:before {\n  content: var(--label-accessPoint-accpnl03);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure]:after {\n  content: " " attr(data-thresholdunitofmeasure);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th01"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th01"]:after {\n  content: " " var(--label-thresholdInterval-th01);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th02"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th02"]:after {\n  content: " " var(--label-thresholdInterval-th02);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th03"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th03"]:after {\n  content: " " var(--label-thresholdInterval-th03);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th04"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th04"]:after {\n  content: " " var(--label-thresholdInterval-th04);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th05"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th05"]:after {\n  content: " " var(--label-thresholdInterval-th05);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th06"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th06"]:after {\n  content: " " var(--label-thresholdInterval-th06);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th07"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th07"]:after {\n  content: " " var(--label-thresholdInterval-th07);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th08"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th08"]:after {\n  content: " " var(--label-thresholdInterval-th08);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th09"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th09"]:after {\n  content: " " var(--label-thresholdInterval-th09);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th10"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th10"]:after {\n  content: " " var(--label-thresholdInterval-th10);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th11"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th11"]:after {\n  content: " " var(--label-thresholdInterval-th11);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th12"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th12"]:after {\n  content: " " var(--label-thresholdInterval-th12);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th13"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th13"]:after {\n  content: " " var(--label-thresholdInterval-th13);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th14"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th14"]:after {\n  content: " " var(--label-thresholdInterval-th14);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th15"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th15"]:after {\n  content: " " var(--label-thresholdInterval-th15);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th16"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th16"]:after {\n  content: " " var(--label-thresholdInterval-th16);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th17"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th17"]:after {\n  content: " " var(--label-thresholdInterval-th17);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th18"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th18"]:after {\n  content: " " var(--label-thresholdInterval-th18);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th19"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th19"]:after {\n  content: " " var(--label-thresholdInterval-th19);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th20"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th20"]:after {\n  content: " " var(--label-thresholdInterval-th20);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th21"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th21"]:after {\n  content: " " var(--label-thresholdInterval-th21);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th22"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th22"]:after {\n  content: " " var(--label-thresholdInterval-th22);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th23"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th23"]:after {\n  content: " " var(--label-thresholdInterval-th23);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th24"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th24"]:after {\n  content: " " var(--label-thresholdInterval-th24);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th25"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th25"]:after {\n  content: " " var(--label-thresholdInterval-th25);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th26"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th26"]:after {\n  content: " " var(--label-thresholdInterval-th26);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th27"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th27"]:after {\n  content: " " var(--label-thresholdInterval-th27);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th28"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th28"]:after {\n  content: " " var(--label-thresholdInterval-th28);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th29"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th29"]:after {\n  content: " " var(--label-thresholdInterval-th29);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th30"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th30"]:after {\n  content: " " var(--label-thresholdInterval-th30);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th31"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th31"]:after {\n  content: " " var(--label-thresholdInterval-th31);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th32"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th32"]:after {\n  content: " " var(--label-thresholdInterval-th32);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th33"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th33"]:after {\n  content: " " var(--label-thresholdInterval-th33);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th34"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th34"]:after {\n  content: " " var(--label-thresholdInterval-th34);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th35"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th35"]:after {\n  content: " " var(--label-thresholdInterval-th35);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th36"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th36"]:after {\n  content: " " var(--label-thresholdInterval-th36);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th37"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th37"]:after {\n  content: " " var(--label-thresholdInterval-th37);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th38"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th38"]:after {\n  content: " " var(--label-thresholdInterval-th38);\n}\n.doc-container .thresholdInterval[data-thresholdunitofmeasure="th39"]:after,\n.procedure-alert .thresholdInterval[data-thresholdunitofmeasure="th39"]:after {\n  content: " " var(--label-thresholdInterval-th39);\n}\n.doc-container .installationLocation[data-installationlocationtype]:before,\n.procedure-alert .installationLocation[data-installationlocationtype]:before {\n  content: attr(data-installationlocationtype) " = ";\n}\n.doc-container .installationLocation[data-installationlocationtype="instloctyp02"]:before,\n.procedure-alert .installationLocation[data-installationlocationtype="instloctyp02"]:before {\n  content: var(--label-installationLocationType-02) " = ";\n}\n.doc-container .installationLocation[data-installationlocationtype="instloctyp03"]:before,\n.procedure-alert .installationLocation[data-installationlocationtype="instloctyp03"]:before {\n  content: var(--label-installationLocationType-03) " = ";\n}\n.doc-container .installationLocation[data-installationlocationtype="instloctyp04"]:before,\n.procedure-alert .installationLocation[data-installationlocationtype="instloctyp04"]:before {\n  content: var(--label-installationLocationType-04) " = ";\n}\n.doc-container .installationLocation[data-installationlocationtype="instloctyp05"]:before,\n.procedure-alert .installationLocation[data-installationlocationtype="instloctyp05"]:before {\n  content: var(--label-installationLocationType-05) " = ";\n}\n.doc-container .installationLocation:after,\n.procedure-alert .installationLocation:after {\n  content: " " attr(data-unitofmeasure);\n}\n.doc-container .productItem[data-productitemtype]:before,\n.procedure-alert .productItem[data-productitemtype]:before {\n  content: attr(data-productitemtype) " " attr(data-productitemname);\n}\n.doc-container .productItem[data-productitemtype="pi01"]:before,\n.procedure-alert .productItem[data-productitemtype="pi01"]:before {\n  content: var(--label-productItemType-01) " " attr(data-productitemname);\n}\n.doc-container .productItem[data-productitemtype="pi02"]:before,\n.procedure-alert .productItem[data-productitemtype="pi02"]:before {\n  content: var(--label-productItemType-02) " " attr(data-productitemname);\n}\n.doc-container .productItem[data-productitemtype="pi03"]:before,\n.procedure-alert .productItem[data-productitemtype="pi03"]:before {\n  content: var(--label-productItemType-03) " " attr(data-productitemname);\n}\n.doc-container .refs.formalTable td:nth-child(1),\n.procedure-alert .refs.formalTable td:nth-child(1) {\n  width: 44%;\n}\n.doc-container .refs.formalTable td:nth-child(2),\n.procedure-alert .refs.formalTable td:nth-child(2) {\n  width: 56%;\n}\n.doc-container .refs.formalTable caption:before,\n.procedure-alert .refs.formalTable caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-references);\n}\n.doc-container .refs.formalTable caption.rest:after,\n.procedure-alert .refs.formalTable caption.rest:after {\n  content: " (" var(--label-continued) ")";\n}\n.doc-container .refs thead .refs__code:before,\n.procedure-alert .refs thead .refs__code:before {\n  content: var(--label-data-module) "/" var(--label-technical-publication);\n}\n.doc-container .refs thead .refs__title:before,\n.procedure-alert .refs thead .refs__title:before {\n  content: var(--label-title);\n}\n.doc-container .formalTable .reference__code .dmRefAddressItems,\n.procedure-alert .formalTable .reference__code .dmRefAddressItems,\n.doc-container .formalTable .frontMatterTable__code .dmRefAddressItems,\n.procedure-alert .formalTable .frontMatterTable__code .dmRefAddressItems,\n.doc-container .formalTable .reference__code .issueInfo,\n.procedure-alert .formalTable .reference__code .issueInfo,\n.doc-container .formalTable .frontMatterTable__code .issueInfo,\n.procedure-alert .formalTable .frontMatterTable__code .issueInfo,\n.doc-container .formalTable .reference__code .language,\n.procedure-alert .formalTable .reference__code .language,\n.doc-container .formalTable .frontMatterTable__code .language,\n.procedure-alert .formalTable .frontMatterTable__code .language,\n.doc-container .formalTable .reference__code .pmRefAddressItems,\n.procedure-alert .formalTable .reference__code .pmRefAddressItems,\n.doc-container .formalTable .frontMatterTable__code .pmRefAddressItems,\n.procedure-alert .formalTable .frontMatterTable__code .pmRefAddressItems,\n.doc-container .formalTable .reference__code .externalPubTitle,\n.procedure-alert .formalTable .reference__code .externalPubTitle,\n.doc-container .formalTable .frontMatterTable__code .externalPubTitle,\n.procedure-alert .formalTable .frontMatterTable__code .externalPubTitle,\n.doc-container .formalTable .reference__code .externalPubIssueInfo,\n.procedure-alert .formalTable .reference__code .externalPubIssueInfo,\n.doc-container .formalTable .frontMatterTable__code .externalPubIssueInfo,\n.procedure-alert .formalTable .frontMatterTable__code .externalPubIssueInfo,\n.doc-container .formalTable .reference__code .externalPubRefAddressItems,\n.procedure-alert .formalTable .reference__code .externalPubRefAddressItems,\n.doc-container .formalTable .frontMatterTable__code .externalPubRefAddressItems,\n.procedure-alert .formalTable .frontMatterTable__code .externalPubRefAddressItems {\n  display: none;\n}\n.doc-container .formalTable .reference__title .techName,\n.procedure-alert .formalTable .reference__title .techName,\n.doc-container .formalTable .reference__title .infoName,\n.procedure-alert .formalTable .reference__title .infoName {\n  display: inline;\n}\n.doc-container .formalTable .reference__title .infoName:before,\n.procedure-alert .formalTable .reference__title .infoName:before {\n  content: " - ";\n}\n.doc-container .externalPubCode:before,\n.procedure-alert .externalPubCode:before {\n  margin-right: 0;\n}\n.doc-container .internalRef.irtt01:before,\n.procedure-alert .internalRef.irtt01:before {\n  content: "(" var(--label-fig) " " var(--figureCounter) ")";\n}\n.doc-container .internalRef.irtt02:before,\n.procedure-alert .internalRef.irtt02:before {\n  content: "(" var(--label-tab) " " var(--tableCounter) ")";\n}\n.doc-container .internalRef.irtt03:before,\n.procedure-alert .internalRef.irtt03:before {\n  content: var(--label-multimedia) " " var(--figureCounter);\n}\n.doc-container .internalRef.irtt07:before,\n.procedure-alert .internalRef.irtt07:before {\n  content: var(--label-para) " " attr(data-index);\n}\n.doc-container .internalRef.irtt07.levelled1:before,\n.procedure-alert .internalRef.irtt07.levelled1:before {\n  content: var(--label-para) " " var(--levelledCounterContent1);\n}\n.doc-container .internalRef.irtt07.levelled2:before,\n.procedure-alert .internalRef.irtt07.levelled2:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2);\n}\n.doc-container .internalRef.irtt07.levelled3:before,\n.procedure-alert .internalRef.irtt07.levelled3:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3);\n}\n.doc-container .internalRef.irtt07.levelled4:before,\n.procedure-alert .internalRef.irtt07.levelled4:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3_4);\n}\n.doc-container .internalRef.irtt07.levelled5:before,\n.procedure-alert .internalRef.irtt07.levelled5:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3_4_5);\n}\n.doc-container .internalRef.irtt07.levelled6:before,\n.procedure-alert .internalRef.irtt07.levelled6:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3_4_5_6);\n}\n.doc-container .internalRef.irtt07.levelled7:before,\n.procedure-alert .internalRef.irtt07.levelled7:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3_4_5_6_7);\n}\n.doc-container .internalRef.irtt07.levelled8:before,\n.procedure-alert .internalRef.irtt07.levelled8:before {\n  content: var(--label-para) " " var(--levelledCounterContent1_2_3_4_5_6_7_8);\n}\n.doc-container .internalRef.irtt08:before,\n.procedure-alert .internalRef.irtt08:before {\n  content: var(--label-step) " " attr(data-index);\n}\n.doc-container .internalRef.irtt08.levelled1:before,\n.procedure-alert .internalRef.irtt08.levelled1:before {\n  content: var(--label-step) " " var(--levelledCounterContent1);\n}\n.doc-container .internalRef.irtt08.levelled2:before,\n.procedure-alert .internalRef.irtt08.levelled2:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2);\n}\n.doc-container .internalRef.irtt08.levelled3:before,\n.procedure-alert .internalRef.irtt08.levelled3:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3);\n}\n.doc-container .internalRef.irtt08.levelled4:before,\n.procedure-alert .internalRef.irtt08.levelled4:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3_4);\n}\n.doc-container .internalRef.irtt08.levelled5:before,\n.procedure-alert .internalRef.irtt08.levelled5:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3_4_5);\n}\n.doc-container .internalRef.irtt08.levelled6:before,\n.procedure-alert .internalRef.irtt08.levelled6:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3_4_5_6);\n}\n.doc-container .internalRef.irtt08.levelled7:before,\n.procedure-alert .internalRef.irtt08.levelled7:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3_4_5_6_7);\n}\n.doc-container .internalRef.irtt08.levelled8:before,\n.procedure-alert .internalRef.irtt08.levelled8:before {\n  content: var(--label-step) " " var(--levelledCounterContent1_2_3_4_5_6_7_8);\n}\n.doc-container .internalRef.irtt09:before,\n.procedure-alert .internalRef.irtt09:before {\n  content: var(--label-figure) " " var(--figureCounter) ", " var(--label-sheet) " " var(--sheetCounter);\n}\n.doc-container .internalRef.irtt10:before,\n.procedure-alert .internalRef.irtt10:before {\n  content: var(--label-multimedia) " " var(--figureCounter) ", " attr(data-multimediatype);\n}\n.doc-container .internalRef.irtt11:before,\n.procedure-alert .internalRef.irtt11:before {\n  content: "[" attr(data-referredfragment) "]";\n}\n.doc-container .listItemTerm .internalRef.irtt11:before,\n.procedure-alert .listItemTerm .internalRef.irtt11:before {\n  content: attr(data-referredfragment);\n}\n.doc-container .internalRef.irtt13[data-zoneNumber]:before,\n.procedure-alert .internalRef.irtt13[data-zoneNumber]:before {\n  content: var(--label-zone) " " attr(data-zoneNumber);\n}\n.doc-container .internalRef.irtt16[data-accessPointNumber]:before,\n.procedure-alert .internalRef.irtt16[data-accessPointNumber]:before {\n  content: attr(data-accessPointNumber);\n}\n.doc-container .internalRef.irtt16.accpnl01[data-accessPointNumber]:before,\n.procedure-alert .internalRef.irtt16.accpnl01[data-accessPointNumber]:before {\n  content: var(--label-accessPoint-accpnl01) " " attr(data-accessPointNumber);\n}\n.doc-container .internalRef.irtt16.accpnl02[data-accessPointNumber]:before,\n.procedure-alert .internalRef.irtt16.accpnl02[data-accessPointNumber]:before {\n  content: var(--label-accessPoint-accpnl02) " " attr(data-accessPointNumber);\n}\n.doc-container .internalRef.irtt16.accpnl03[data-accessPointNumber]:before,\n.procedure-alert .internalRef.irtt16.accpnl03[data-accessPointNumber]:before {\n  content: var(--label-accessPoint-accpnl03) " " attr(data-accessPointNumber);\n}\n.doc-container .internalRef[data-filled]:before,\n.procedure-alert .internalRef[data-filled]:before {\n  content: none !important;\n}\n.doc-container .catalogSeqNumberRef[data-systemCode]:before,\n.procedure-alert .catalogSeqNumberRef[data-systemCode]:before {\n  content: var(--label-CSN) " " attr(data-systemcode) "-" attr(data-subsystemcode) attr(data-subsubsystemcode) "-" attr(data-assycode) " " var(--label-figure) " " attr(data-figurenumber) attr(data-figurenumbervariant) " " var(--label-item) " " attr(data-item) attr(data-itemvariant);\n}\n.doc-container .catalogSeqNumberRef[data-systemCode][data-itemSeqNumberValue]:before,\n.procedure-alert .catalogSeqNumberRef[data-systemCode][data-itemSeqNumberValue]:before {\n  content: var(--label-CSNISN) " " attr(data-systemcode) "-" attr(data-subsystemcode) attr(data-subsubsystemcode) "-" attr(data-assycode) " " var(--label-figure) " " attr(data-figurenumber) attr(data-figurenumbervariant) " " var(--label-item) " " attr(data-item) attr(data-itemvariant) "/" attr(data-itemseqnumbervalue);\n}\n.doc-container .materialSetRef:before,\n.procedure-alert .materialSetRef:before {\n  content: var(--label-materialSet) " " attr(data-materialsetident);\n}\n.doc-container .materialSetRef[data-materialsetissue]:before,\n.procedure-alert .materialSetRef[data-materialsetissue]:before {\n  content: var(--label-materialSet) " " attr(data-materialsetident) "-" attr(data-materialsetissue);\n}\n.doc-container caption,\n.procedure-alert caption {\n  caption-side: top;\n}\n.doc-container caption.rest,\n.procedure-alert caption.rest {\n  display: none;\n}\n.doc-container .table[data-pgwide="1"],\n.procedure-alert .table[data-pgwide="1"] {\n  margin-left: var(--left-text-indent-reverse);\n}\n.doc-container .description > .table,\n.procedure-alert .description > .table {\n  margin-left: var(--left-text-indent);\n}\n.doc-container .description > .table[data-pgwide="1"],\n.procedure-alert .description > .table[data-pgwide="1"] {\n  margin-left: 0;\n}\n.doc-container .table > .table-contents > .title,\n.procedure-alert .table > .table-contents > .title {\n  display: none;\n}\n.doc-container .table caption,\n.procedure-alert .table caption {\n  font-style: italic;\n  margin-bottom: 4pt;\n  padding-left: 0;\n  margin-left: 0;\n  text-indent: 0;\n  page-break-after: avoid;\n}\n.doc-container .table caption .title,\n.procedure-alert .table caption .title {\n  font-weight: normal;\n  display: inline;\n}\n.doc-container .table caption .title:before,\n.procedure-alert .table caption .title:before {\n  content: var(--label-table) " " counter(table) " ";\n}\n.doc-container .table caption.rest .title:after,\n.procedure-alert .table caption.rest .title:after {\n  content: " (" var(--label-continued) ")";\n}\n.doc-container .FM__productIntro,\n.procedure-alert .FM__productIntro {\n  margin-top: 20pt;\n  margin-bottom: 20pt;\n}\n.doc-container .FM__pmTitle,\n.procedure-alert .FM__pmTitle {\n  margin-bottom: 20pt;\n}\n.doc-container .frontMatterTitlePage .name,\n.procedure-alert .frontMatterTitlePage .name {\n  font-weight: bold;\n  font-size: 18pt;\n}\n.doc-container .frontMatterTitlePage .productAndModel,\n.procedure-alert .frontMatterTitlePage .productAndModel {\n  display: block;\n}\n.doc-container .frontMatterTitlePage .pmTitle,\n.procedure-alert .frontMatterTitlePage .pmTitle {\n  font-weight: bold;\n  font-size: 24pt;\n}\n.doc-container .frontMatterTitlePage .pmTitle + .shortPmTitle,\n.procedure-alert .frontMatterTitlePage .pmTitle + .shortPmTitle {\n  margin-top: 10pt;\n}\n.doc-container .frontMatterTitlePage .shortPmTitle,\n.procedure-alert .frontMatterTitlePage .shortPmTitle {\n  font-weight: bold;\n  font-size: 14pt;\n}\n.doc-container .frontMatterTitlePage .pmCode,\n.procedure-alert .frontMatterTitlePage .pmCode {\n  display: block;\n  font-weight: bold;\n  font-size: 14pt;\n  margin-bottom: 10pt;\n}\n.doc-container .frontMatterTitlePage .issueInfo,\n.procedure-alert .frontMatterTitlePage .issueInfo {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 14pt;\n  margin-bottom: 10pt;\n}\n.doc-container .frontMatterTitlePage .issueInfo:after,\n.procedure-alert .frontMatterTitlePage .issueInfo:after {\n  content: var(--label-issueNo) " " attr(data-issuenumber) "-" attr(data-inwork) ", ";\n}\n.doc-container .frontMatterTitlePage .issueInfo[data-inwork="00"]:after,\n.procedure-alert .frontMatterTitlePage .issueInfo[data-inwork="00"]:after {\n  content: var(--label-issueNo) " " attr(data-issuenumber) ", ";\n}\n.doc-container .frontMatterTitlePage .issueDate,\n.procedure-alert .frontMatterTitlePage .issueDate {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 14pt;\n}\n.doc-container .productIllustration .graphicImg,\n.procedure-alert .productIllustration .graphicImg {\n  max-height: 100mm;\n  max-width: 100%;\n}\n.doc-container .productIllustration .graphicImg[width],\n.procedure-alert .productIllustration .graphicImg[width] {\n  max-width: none;\n  width: attr(width);\n}\n.doc-container .productIllustration .graphicImg[height],\n.procedure-alert .productIllustration .graphicImg[height] {\n  max-height: none;\n  height: attr(height);\n}\n.doc-container .productIllustration .infoEntityIdent,\n.procedure-alert .productIllustration .infoEntityIdent {\n  display: none;\n}\n.doc-container .frontMatterTitlePage .copyright:before,\n.procedure-alert .frontMatterTitlePage .copyright:before,\n.doc-container .frontMatterTitlePage .dataDistribution:before,\n.procedure-alert .frontMatterTitlePage .dataDistribution:before,\n.doc-container .frontMatterTitlePage .exportControl:before,\n.procedure-alert .frontMatterTitlePage .exportControl:before,\n.doc-container .frontMatterTitlePage .dataHandling:before,\n.procedure-alert .frontMatterTitlePage .dataHandling:before,\n.doc-container .frontMatterTitlePage .dataDestruction:before,\n.procedure-alert .frontMatterTitlePage .dataDestruction:before,\n.doc-container .frontMatterTitlePage .dataDisclosure:before,\n.procedure-alert .frontMatterTitlePage .dataDisclosure:before {\n  content: none;\n}\n.doc-container .frontMatterTitlePage .restrictionInfo,\n.procedure-alert .frontMatterTitlePage .restrictionInfo,\n.doc-container .frontMatterTitlePage .restrictionInstructions,\n.procedure-alert .frontMatterTitlePage .restrictionInstructions,\n.doc-container .frontMatterTitlePage .frontMatterInfo,\n.procedure-alert .frontMatterTitlePage .frontMatterInfo {\n  font-size: 0.8em;\n  margin-left: 0;\n}\n.doc-container .frontMatterTitlePage .restrictionInfo .p,\n.procedure-alert .frontMatterTitlePage .restrictionInfo .p {\n  margin-bottom: 0;\n}\n.doc-container .frontMatterTitlePage .restrictionInfo .copyrightPara,\n.procedure-alert .frontMatterTitlePage .restrictionInfo .copyrightPara,\n.doc-container .frontMatterInfo .reducedPara,\n.procedure-alert .frontMatterInfo .reducedPara,\n.doc-container .frontMatterInfo .title,\n.procedure-alert .frontMatterInfo .title {\n  margin-top: 0;\n  margin-bottom: 4pt;\n}\n.doc-container .reducedRandomList,\n.procedure-alert .reducedRandomList {\n  margin-top: 4pt;\n}\n.doc-container .preFooter .container,\n.procedure-alert .preFooter .container,\n.doc-container .preFooter .publisherBody,\n.procedure-alert .preFooter .publisherBody,\n.doc-container .preFooter .manufacturerBody,\n.procedure-alert .preFooter .manufacturerBody {\n  display: flex;\n  column-gap: 12pt;\n}\n.doc-container .preFooter .leftArea,\n.procedure-alert .preFooter .leftArea {\n  width: 100mm;\n}\n.doc-container .preFooter .rightArea,\n.procedure-alert .preFooter .rightArea {\n  flex-grow: 1;\n  text-align: right;\n  align-self: flex-end;\n}\n.doc-container .preFooter .enterpriseLogo,\n.procedure-alert .preFooter .enterpriseLogo,\n.doc-container .preFooter .publisherLogo,\n.procedure-alert .preFooter .publisherLogo {\n  max-width: 30mm;\n  min-width: 15mm;\n  max-height: 30mm;\n}\n.doc-container .preFooter .enterpriseLogo img,\n.procedure-alert .preFooter .enterpriseLogo img,\n.doc-container .preFooter .publisherLogo img,\n.procedure-alert .preFooter .publisherLogo img {\n  max-width: 30mm;\n  max-height: 30mm;\n}\n.doc-container .preFooter .responsiblePartnerCompany,\n.procedure-alert .preFooter .responsiblePartnerCompany,\n.doc-container .preFooter .enterpriseSpec,\n.procedure-alert .preFooter .enterpriseSpec {\n  flex-grow: 1;\n}\n.doc-container .publisher,\n.procedure-alert .publisher,\n.doc-container .manufacturer,\n.procedure-alert .manufacturer {\n  margin-top: 4pt;\n}\n.doc-container .manufacturer,\n.procedure-alert .manufacturer {\n  border-top: 2pt solid black;\n}\n.doc-container .manufacturer .street,\n.procedure-alert .manufacturer .street,\n.doc-container .manufacturer .building,\n.procedure-alert .manufacturer .building,\n.doc-container .manufacturer .country,\n.procedure-alert .manufacturer .country,\n.doc-container .manufacturer .postalZipCode,\n.procedure-alert .manufacturer .postalZipCode,\n.doc-container .manufacturer .city,\n.procedure-alert .manufacturer .city {\n  display: inline;\n}\n.doc-container .manufacturer .building:before,\n.procedure-alert .manufacturer .building:before,\n.doc-container .manufacturer .postalZipCode:before,\n.procedure-alert .manufacturer .postalZipCode:before {\n  content: ", ";\n}\n.doc-container .publisher:before,\n.procedure-alert .publisher:before {\n  content: var(--label-publisher) var(--label-colonSymbol);\n}\n.doc-container .manufacturer:before,\n.procedure-alert .manufacturer:before {\n  content: var(--label-manufacturer) var(--label-colonSymbol);\n}\n.doc-container .referencedApplicGroup,\n.procedure-alert .referencedApplicGroup {\n  display: none;\n}\n.doc-container .simplePara.default:before,\n.procedure-alert .simplePara.default:before {\n  content: var(--label-applic-all);\n}\n.doc-container .loedmGeneratePretopic__row1:before,\n.procedure-alert .loedmGeneratePretopic__row1:before,\n.doc-container .tocGeneratePretopic__row1:before,\n.procedure-alert .tocGeneratePretopic__row1:before,\n.doc-container .highGeneratePretopic__row1:before,\n.procedure-alert .highGeneratePretopic__row1:before {\n  content: var(--label-loedm-generate-row1-part1) attr(data-issuenumber) var(--label-loedm-generate-row1-part2) attr(data-year) "-" attr(data-month) "-" attr(data-day) var(--label-loedm-generate-row1-part3);\n}\n.doc-container .loedmGeneratePretopic__row2:before,\n.procedure-alert .loedmGeneratePretopic__row2:before {\n  content: var(--label-loedm-generate-row2);\n}\n.doc-container .loedmGeneratePretopic__row3:before,\n.procedure-alert .loedmGeneratePretopic__row3:before {\n  content: var(--label-loedm-generate-row3);\n}\n.doc-container .highInstructionGeneratePretopic__row1:before,\n.procedure-alert .highInstructionGeneratePretopic__row1:before {\n  content: var(--label-high-generate-row1);\n}\n.doc-container .highInstructionGeneratePretopic__row2:before,\n.procedure-alert .highInstructionGeneratePretopic__row2:before {\n  content: var(--label-high-generate-row2);\n}\n.doc-container .highInstructionGeneratePretopic__row3:before,\n.procedure-alert .highInstructionGeneratePretopic__row3:before {\n  content: var(--label-high-generate-row3);\n}\n.doc-container .frontMatterList > .issueInfo,\n.procedure-alert .frontMatterList > .issueInfo,\n.doc-container .frontMatterList > .issueDate,\n.procedure-alert .frontMatterList > .issueDate,\n.doc-container .frontMatterTableOfContent > .issueInfo,\n.procedure-alert .frontMatterTableOfContent > .issueInfo,\n.doc-container .frontMatterTableOfContent > .issueDate,\n.procedure-alert .frontMatterTableOfContent > .issueDate {\n  display: none;\n}\n.doc-container .frontMatterList .reducedPara,\n.procedure-alert .frontMatterList .reducedPara,\n.doc-container .frontMatterTableOfContent .reducedPara,\n.procedure-alert .frontMatterTableOfContent .reducedPara {\n  margin-bottom: 4pt;\n  margin-left: var(--left-text-indent);\n}\n.doc-container .frontMatterTable .externalPubTitle,\n.procedure-alert .frontMatterTable .externalPubTitle {\n  font-weight: normal;\n}\n.doc-container .frontMatterTable .infoName,\n.procedure-alert .frontMatterTable .infoName {\n  font-style: italic;\n}\n.doc-container .frontMatterTable .externalPubIssueDate:after,\n.procedure-alert .frontMatterTable .externalPubIssueDate:after,\n.doc-container .frontMatterTable .issueDate:after,\n.procedure-alert .frontMatterTable .issueDate:after {\n  content: attr(data-year) "-" attr(data-month) "-" attr(data-day);\n}\n.doc-container .frontMatterTable tr,\n.procedure-alert .frontMatterTable tr {\n  page-break-inside: avoid;\n}\n.doc-container .loedm th:nth-child(1),\n.procedure-alert .loedm th:nth-child(1) {\n  width: 33%;\n}\n.doc-container .loedm th:nth-child(2),\n.procedure-alert .loedm th:nth-child(2) {\n  width: 33%;\n}\n.doc-container .loedm th:nth-child(3),\n.procedure-alert .loedm th:nth-child(3) {\n  width: 4%;\n}\n.doc-container .loedm th:nth-child(4),\n.procedure-alert .loedm th:nth-child(4) {\n  width: 12%;\n}\n.doc-container .loedm th:nth-child(5),\n.procedure-alert .loedm th:nth-child(5) {\n  width: 8%;\n}\n.doc-container .loedm th:nth-child(6),\n.procedure-alert .loedm th:nth-child(6) {\n  width: 10%;\n}\n.doc-container .highInstruction th:nth-child(1),\n.procedure-alert .highInstruction th:nth-child(1) {\n  width: 33%;\n}\n.doc-container .highInstruction th:nth-child(2),\n.procedure-alert .highInstruction th:nth-child(2) {\n  width: 33%;\n}\n.doc-container .highInstruction th:nth-child(3),\n.procedure-alert .highInstruction th:nth-child(3) {\n  width: 4%;\n}\n.doc-container .highInstruction th:nth-child(4),\n.procedure-alert .highInstruction th:nth-child(4) {\n  width: 12%;\n}\n.doc-container .highInstruction th:nth-child(5),\n.procedure-alert .highInstruction th:nth-child(5) {\n  width: 8%;\n}\n.doc-container .highInstruction th:nth-child(6),\n.procedure-alert .highInstruction th:nth-child(6) {\n  width: 10%;\n}\n.doc-container .highlights th:nth-child(1),\n.procedure-alert .highlights th:nth-child(1) {\n  width: 33%;\n}\n.doc-container .highlights th:nth-child(2),\n.procedure-alert .highlights th:nth-child(2) {\n  width: 67%;\n}\n.doc-container th.frontMatterTable__title:before,\n.procedure-alert th.frontMatterTable__title:before {\n  content: var(--label-documentTitle);\n}\n.doc-container th.frontMatterTable__code:before,\n.procedure-alert th.frontMatterTable__code:before {\n  content: var(--label-dataModuleCode);\n}\n.doc-container th.frontMatterTable__issueDate:before,\n.procedure-alert th.frontMatterTable__issueDate:before {\n  content: var(--label-issueDate);\n}\n.doc-container th.frontMatterTable__pages:before,\n.procedure-alert th.frontMatterTable__pages:before {\n  content: var(--label-noOfPages);\n}\n.doc-container th.frontMatterTable__applic:before,\n.procedure-alert th.frontMatterTable__applic:before {\n  content: var(--label-fm-applic);\n}\n.doc-container th.high__DM:before,\n.procedure-alert th.high__DM:before {\n  content: var(--label-data-module);\n}\n.doc-container th.high__rfu:before,\n.procedure-alert th.high__rfu:before {\n  content: var(--label-reason-for-update);\n}\n.doc-container .loedm__status[data-issuetype="new"]:before,\n.procedure-alert .loedm__status[data-issuetype="new"]:before,\n.doc-container .loedm__status[data-issuetype="rinstate-status"]:before,\n.procedure-alert .loedm__status[data-issuetype="rinstate-status"]:before,\n.doc-container .loedm__status[data-issuetype="rinstate-changed"]:before,\n.procedure-alert .loedm__status[data-issuetype="rinstate-changed"]:before,\n.doc-container .loedm__status[data-issuetype="rinstate-revised"]:before,\n.procedure-alert .loedm__status[data-issuetype="rinstate-revised"]:before {\n  content: "N";\n}\n.doc-container .loedm__status[data-issuetype="revised"]:before,\n.procedure-alert .loedm__status[data-issuetype="revised"]:before,\n.doc-container .loedm__status[data-issuetype="changed"]:before,\n.procedure-alert .loedm__status[data-issuetype="changed"]:before,\n.doc-container .loedm__status[data-issuetype="status"]:before,\n.procedure-alert .loedm__status[data-issuetype="status"]:before {\n  content: "C";\n}\n.doc-container .high__status:before,\n.procedure-alert .high__status:before {\n  content: "I";\n}\n.doc-container .high__status[data-issuetype="deleted"]:before,\n.procedure-alert .high__status[data-issuetype="deleted"]:before {\n  content: "R";\n}\n.doc-container .toc th:nth-child(1),\n.procedure-alert .toc th:nth-child(1) {\n  width: 36%;\n}\n.doc-container .toc th:nth-child(2),\n.procedure-alert .toc th:nth-child(2) {\n  width: 36%;\n}\n.doc-container .toc th:nth-child(4),\n.procedure-alert .toc th:nth-child(4) {\n  width: 15%;\n}\n.doc-container .toc th:nth-child(6),\n.procedure-alert .toc th:nth-child(6) {\n  width: 13%;\n}\n.doc-container .toc [data-toclevel="1"] .title,\n.procedure-alert .toc [data-toclevel="1"] .title {\n  font-size: 14pt;\n  font-weight: bold;\n  text-align: left;\n}\n.doc-container .toc [data-toclevel="2"] .title,\n.procedure-alert .toc [data-toclevel="2"] .title {\n  font-size: 12pt;\n  font-weight: bold;\n  margin-left: 10mm;\n}\n.doc-container .description > .p,\n.procedure-alert .description > .p {\n  margin-left: var(--left-text-indent);\n}\n.doc-container .table[data-tabstyle="changeRecord"] .p,\n.procedure-alert .table[data-tabstyle="changeRecord"] .p {\n  margin-top: 3pt;\n  margin-bottom: 3pt;\n}\n.doc-container .description.noHeader:before,\n.procedure-alert .description.noHeader:before {\n  content: none;\n}\n.doc-container .highlights .reasonForUpdate,\n.procedure-alert .highlights .reasonForUpdate {\n  margin-top: 0;\n  text-align: left;\n}\n.doc-container .highlights .reasonForUpdate:before,\n.procedure-alert .highlights .reasonForUpdate:before {\n  content: none;\n}\n.doc-container .highInstruction.formalTable,\n.procedure-alert .highInstruction.formalTable {\n  counter-increment: table;\n}\n.doc-container .highInstruction .header:before,\n.procedure-alert .highInstruction .header:before {\n  content: var(--label-updating-instruction);\n}\n.doc-container .highInstruction caption:before,\n.procedure-alert .highInstruction caption:before {\n  content: var(--label-table) " " counter(table) " " var(--label-high-table);\n}\n.doc-container tr[data-keep-with-previous="always"],\n.procedure-alert tr[data-keep-with-previous="always"] {\n  page-break-before: avoid;\n}\n.doc-container .crewRefCard:before,\n.procedure-alert .crewRefCard:before {\n  content: var(--label-crewRefCard);\n}\n.doc-container .crew > .crewRefCard > *,\n.procedure-alert .crew > .crewRefCard > * {\n  margin-left: var(--left-text-indent);\n}\n.doc-container .crewRefCard > .title,\n.procedure-alert .crewRefCard > .title {\n  border: 1px solid black;\n  padding: 4pt;\n  margin-bottom: 5pt;\n  text-align: center;\n  font-weight: bold;\n  font-size: 14pt;\n  page-break-after: avoid;\n}\n.doc-container .crewDrill > .title,\n.procedure-alert .crewDrill > .title {\n  display: inline-block;\n  border: 1px solid black;\n  padding: 4pt;\n  font-weight: bold;\n  font-size: 12pt;\n  margin-top: 0;\n  margin-bottom: 8pt;\n  page-break-after: avoid;\n}\n.doc-container .crewDrill,\n.procedure-alert .crewDrill,\n.doc-container .subCrewDrill,\n.procedure-alert .subCrewDrill {\n  margin-bottom: 4pt;\n}\n.doc-container .subCrewDrill > .title,\n.procedure-alert .subCrewDrill > .title {\n  display: inline-block;\n  border: 1px solid black;\n  padding: 4pt;\n  font-weight: bold;\n  font-size: 10pt;\n  margin-top: 0;\n  margin-bottom: 8pt;\n  page-break-after: avoid;\n}\n.doc-container .caseCond,\n.procedure-alert .caseCond {\n  font-style: italic;\n  margin-bottom: 8pt;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.doc-container .challengeAndResponse,\n.procedure-alert .challengeAndResponse {\n  display: flex;\n  align-items: flex-start;\n}\n.doc-container .challengeAndResponse .separator,\n.procedure-alert .challengeAndResponse .separator {\n  border-bottom: 1px dotted;\n  flex-grow: 1;\n  min-height: 1em;\n}\n.doc-container .response[data-grow="1"],\n.procedure-alert .response[data-grow="1"] {\n  flex-grow: 1;\n}\n.doc-container .crewDrill .p,\n.procedure-alert .crewDrill .p,\n.doc-container .crewDrill .table,\n.procedure-alert .crewDrill .table {\n  margin-top: 0pt;\n}\n.doc-container .crewDrill .p,\n.procedure-alert .crewDrill .p {\n  margin-bottom: 8pt;\n}\n.doc-container .crewDrill .if:before,\n.procedure-alert .crewDrill .if:before,\n.doc-container .crewDrill .elseIf:before,\n.procedure-alert .crewDrill .elseIf:before,\n.doc-container .crewDrill .case:before,\n.procedure-alert .crewDrill .case:before {\n  float: left;\n  width: 3mm;\n  height: 1em;\n  margin-left: -7mm;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  content: " ";\n}\n.doc-container .crewDrill .if:before,\n.procedure-alert .crewDrill .if:before,\n.doc-container .crewDrill .elseIf:before,\n.procedure-alert .crewDrill .elseIf:before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 10 10"><circle cx="4" cy="4" r="3" stroke-width="0.2" fill="%23000000"/></svg>\');\n}\n.doc-container .crewDrill .case:before,\n.procedure-alert .crewDrill .case:before {\n  background-image: url(\'data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="6" height="6" stroke-width="0.2" fill="%23000000"/></svg>\');\n}\n.doc-container .crewDrillStep:before,\n.procedure-alert .crewDrillStep:before {\n  float: left;\n  margin-left: -7mm;\n  content: "−";\n}\n.doc-container .crewDrillStep,\n.procedure-alert .crewDrillStep,\n.doc-container .if,\n.procedure-alert .if,\n.doc-container .elseIf,\n.procedure-alert .elseIf,\n.doc-container .case,\n.procedure-alert .case {\n  margin-left: var(--list-body-indent);\n  page-break-inside: avoid;\n}\n.doc-container .assessmentQuestion .p,\n.procedure-alert .assessmentQuestion .p {\n  margin-left: 0;\n}\n.doc-container *[data-displaytext]:before,\n.procedure-alert *[data-displaytext]:before {\n  content: \'** \' attr(data-displaytext);\n  font-style: italic;\n  font-weight: normal;\n  display: block;\n  padding-bottom: 2pt;\n  page-break-after: avoid;\n  text-align: left;\n}\n.doc-container .frontMatterTable__code > *[data-displaytext]:before,\n.procedure-alert .frontMatterTable__code > *[data-displaytext]:before {\n  content: none;\n}\n.doc-container .applicCrossRefTable:before,\n.procedure-alert .applicCrossRefTable:before {\n  content: var(--label-applicCrossRefTable);\n}\n.doc-container .productAttributeList,\n.procedure-alert .productAttributeList {\n  display: block;\n}\n.doc-container .productAttribute,\n.procedure-alert .productAttribute {\n  display: list-item;\n  margin-left: 40pt;\n  margin-top: 12pt;\n}\n.doc-container .productAttribute > *,\n.procedure-alert .productAttribute > * {\n  margin-top: 6pt;\n  margin-bottom: 6pt;\n}\n.doc-container .productCrossRefTable:before,\n.procedure-alert .productCrossRefTable:before {\n  content: var(--label-productCrossRefTable);\n}\n.doc-container .product,\n.procedure-alert .product {\n  display: list-item;\n  margin-left: 40pt;\n  margin-top: 12pt;\n}\n.doc-container .product > *,\n.procedure-alert .product > * {\n  margin-top: 6pt;\n  margin-bottom: 6pt;\n}\n.doc-container .assign:before,\n.procedure-alert .assign:before {\n  content: attr(data-applicpropertyident) "=" attr(data-applicpropertyvalue);\n}\n:root {\n  --left-text-indent: 2cm;\n  --left-text-indent-reverse: -2cm;\n  --left-toc-indent: 1.4cm;\n  --font-size: 10pt;\n  --change-bar-width: 2pt;\n  --change-bar-left-indent: 3mm;\n  --change-bar-left-indent-reverse: -3mm;\n  --list-body-indent: 7mm;\n}\n:root {\n  --levelledCounter1: target-counter(attr(href), counter1);\n  --levelledCounter2: target-counter(attr(href), counter2);\n  --levelledCounter3: target-counter(attr(href), counter3);\n  --levelledCounter4: target-counter(attr(href), counter4);\n  --levelledCounter5: target-counter(attr(href), counter5);\n  --levelledCounter6: target-counter(attr(href), counter6);\n  --levelledCounter7: target-counter(attr(href), counter7);\n  --levelledCounter8: target-counter(attr(href), counter8);\n  --levelledCounter1_2: var(--levelledCounter1) "." var(--levelledCounter2);\n  --levelledCounter1_2_3: var(--levelledCounter1_2) "." var(--levelledCounter3);\n  --levelledCounter1_2_3_4: var(--levelledCounter1_2_3) "." var(--levelledCounter4);\n  --levelledCounter1_2_3_4_5: var(--levelledCounter1_2_3_4) "." var(--levelledCounter5);\n  --levelledCounter1_2_3_4_5_6: var(--levelledCounter1_2_3_4_5) "." var(--levelledCounter6);\n  --levelledCounter1_2_3_4_5_6_7: var(--levelledCounter1_2_3_4_5_6) "." var(--levelledCounter7);\n  --levelledCounter1_2_3_4_5_6_7_8: var(--levelledCounter1_2_3_5_6_7) "." var(--levelledCounter8);\n  --levelledCounterContent1: attr(data-index);\n  --levelledCounterContent1_2: attr(data-index);\n  --levelledCounterContent1_2_3: attr(data-index);\n  --levelledCounterContent1_2_3_4: attr(data-index);\n  --levelledCounterContent1_2_3_4_5: attr(data-index);\n  --levelledCounterContent1_2_3_4_5_6: attr(data-index);\n  --levelledCounterContent1_2_3_4_5_6_7: attr(data-index);\n  --levelledCounterContent1_2_3_4_5_6_7_8: attr(data-index);\n  --figureCounter: attr(data-figure);\n  --sheetCounter: attr(data-sheet);\n  --tableCounter: attr(data-index);\n}\n',
        "",
      ]),
        (e.exports = n);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(187),
            (r.exports = function (e, n, r) {
              var o = r.uniview.metadata.LANG || "en",
                a = "s1000d_" + n.issue.replace(/\./g, "_") + ".css";
              return (
                r.app.util
                  .requirePromise("css!static/i18n/" + o + "/" + a)
                  .catch(function () {
                    return r.app.util.requirePromise("css!static/i18n/en/" + a);
                  }),
                r.on("app.procedure.didEnterSubstepWithName", function (e) {
                  var n = r.app.procedure.getContextItemId(e),
                    t = r.app.procedure.getActiveItemId(e);
                  r.dispatch("uniview.doc.activate", n, t);
                }),
                r.on("uniview.doc.didLoadComplete", function () {
                  var o,
                    a,
                    i = n.components || {},
                    c = i.uiDocumentFilter || t(69),
                    l = i.uiDocumentToolbar || t(70),
                    g = i.uiDocumentQuestionToolbar || t(127),
                    d = t(189),
                    A = t(128),
                    I = t(131),
                    s = i.uiQuestionsAlertModal || t(134),
                    C = r.skin.get("doc") || r.skin.get("aux");
                  C.element.querySelector(".assessmentQuestion") && (o = !0),
                    C.element.querySelector(".scoContent") && (a = !0);
                  var u = !(
                    -1 === location.search.indexOf("mode=scorm") && !n.scormMode
                  );
                  if (
                    (a &&
                      (C.render(d, n),
                      o || C.render(l, n),
                      r.on("uniview.sco.allTabsLoaded", function () {
                        o &&
                          (C.render([{ component: g }]),
                          e.create(A, n),
                          e.create(I, n),
                          r.dispatch(
                            "uniview.component.tabs.activateByNumber",
                            0
                          ));
                      })),
                    !a &&
                      o &&
                      (u
                        ? (C.render([{ component: g }]),
                          e.create(A, n),
                          e.create(I, n))
                        : (C.render([{ component: l }]), e.create(A, n))),
                    o && (a || u))
                  ) {
                    var p = e.create(s);
                    C.render([{ component: p }]);
                  }
                  if (!o && !a) {
                    var f = C.create(c, n);
                    C.render(
                      [f, { component: l, options: { filterComponent: f } }],
                      n
                    ),
                      r.uniview.with3D && r.dispatch("uniview.showAllPanels");
                  }
                  if (
                    (C.element
                      .querySelectorAll(".footnote")
                      .forEach(function (e) {
                        e.removeAttribute("title");
                      }),
                    u)
                  ) {
                    console.log("*** SCORM mode switch ON ***"),
                      (r.training = { sco: t(68), hasQuestions: !!o }),
                      r.training.sco.loadPageExpand(),
                      window.parent &&
                        window.parent.Cortona3DSolo &&
                        window.parent.API_1484_11 &&
                        window.parent.Cortona3DSolo.structure.rtsAPI.set(
                          "c3d.hasQuestions",
                          !!o
                        ),
                      window.addEventListener("beforeunload", function () {
                        r.training.sco.unloadPageExpand();
                      });
                    var b = C.element.querySelector(".identAndStatusSection");
                    b && (b.style.display = "none");
                  }
                  u &&
                    o &&
                    r.uniview.css.render({
                      ".doc-container .dmodule:after": { content: '""' },
                    }),
                    C.use(t(116), r.expand(n, { linkSelector: "a.dmRef" }));
                }),
                e.use(
                  t(119),
                  r.expand(
                    {
                      handlers: {
                        toggleStatus: function () {
                          var e = this.getElementsByClassName("dmStatus");
                          e.length &&
                            (e[0].style.display =
                              "block" !== e[0].style.display
                                ? "block"
                                : "none");
                        },
                      },
                      willSkipAlert: function (e) {
                        var n = document.getElementById(e.description);
                        return (
                          n ||
                            console.error(
                              'Element with ID "' +
                                e.description +
                                '" not found in document.'
                            ),
                          !n || "NOTE" === e.eventType
                        );
                      },
                      components: {
                        uiDocumentToolbar: function () {},
                        uiDocumentFilter: function () {},
                      },
                    },
                    n
                  )
                )
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(188);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        '.procedure-alert .skin-modal-inner {\r\n    border: 1px solid #000;\r\n    background-color: inherit;\r\n}\r\n\r\n.procedure-alert.warning:before,\r\n.procedure-alert.caution:before {\r\n    content: "";\r\n}\r\n\r\n.procedure-alert.caution .skin-modal-panel,\r\n.procedure-alert.warning .skin-modal-panel {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.procedure-alert.caution .skin-modal-panel .skin-modal-title,\r\n.procedure-alert.warning .skin-modal-panel .skin-modal-title {\r\n    border-radius: 0;\r\n    display: none;\r\n}\r\n\r\n.procedure-alert.caution .p,\r\n.procedure-alert.warning .p {\r\n    text-align: center;\r\n}\r\n\r\n.procedure-alert.caution .skin-modal-panel:before,\r\n.procedure-alert.warning .skin-modal-panel:before {\r\n    position: absolute;\r\n    content: "";\r\n    width: calc(100% + 2em);\r\n    height: calc(100% + 2em);\r\n    top: -1em;\r\n    left: -1em;\r\n    z-index: -5;\r\n}\r\n\r\n.procedure-alert.warning .skin-modal-panel:before {\r\n    background: repeating-linear-gradient(-45deg, #f00, #f00 1em, #fff 1em, #fff 2em);\r\n}\r\n\r\n.procedure-alert.caution .skin-modal-panel:before {\r\n    background: repeating-linear-gradient(-45deg, #000, #000 1em, #ff0 1em, #ff0 2em);\r\n}\r\n\r\nspan.link3d {\r\n    position: absolute;\r\n    top: 0;\r\n    margin-left: -2em;\r\n}\r\n\r\n.Procedure {\r\n    margin-left: .3em;\r\n}\r\n\r\n.cortona3dsolo-iframe {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n.doc-container a.multimediaobject,\r\n.doc-container a.multimediaObject,\r\n.doc-container a.graphic {\r\n    display: table;\r\n}\r\n\r\n.identAndStatusSection.full .dmStatus {\r\n    display: block;\r\n}\r\n\r\n.identAndStatusSection.short .dmAddress {\r\n    text-align: left;\r\n}\r\n.identAndStatusSection.short .language,\r\n.identAndStatusSection.short .issueInfo,\r\n.identAndStatusSection.short .issueDate,\r\n.identAndStatusSection.short .dmStatus {\r\n    display: none;\r\n}\r\n.identAndStatusSection.short .dmIdent,\r\n.identAndStatusSection.short .dmAddressItems,\r\n.identAndStatusSection.short .dmTitle,\r\n.identAndStatusSection.short .dmCode,\r\n.identAndStatusSection.short .techName,\r\n.identAndStatusSection.short .infoName {\r\n    display: inline;\r\n}\r\n.identAndStatusSection.short .dmCode,\r\n.identAndStatusSection.short .techName,\r\n.identAndStatusSection.short .infoName {\r\n    text-align: left;\r\n    font-weight: normal !important;\r\n    font-size: 1em;\r\n}\r\n.identAndStatusSection.short .techName,\r\n.identAndStatusSection.short .infoName {\r\n    font-style: italic;\r\n    color: gray;\r\n}\r\n\r\n.identAndStatusSection.short .techName:before,\r\n.identAndStatusSection.short .infoName:before {\r\n    content: " - ";\r\n    margin-right: 0;\r\n}',
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(190);
          var o = t(38);
          r.exports = function (e, n, r) {
            var a = e.container(".sco-tabs"),
              i = [];
            (tabs = e.create(o)), a.append(tabs.element);
            var c,
              l,
              g,
              d,
              A = (n.components || {}).uiScoTabTrainingStep || t(192),
              I = e.element.querySelectorAll(".trainingStep");
            for (c = 0; c < I.length; c++)
              (l = I[c].id),
                (g = I[c].querySelector(".simplePara").innerText),
                tabs.emit(
                  "append",
                  g,
                  e.create(A, r.expand({ traingStepId: l }, n)).$el
                ),
                i.push(l);
            var s = e.element.querySelectorAll(
              ".doc-container>.dmodule>.content, .doc-container>.dmodule>.pageSequence>.content"
            );
            for (c = 0; c < s.length; c++)
              (d = s.item(c)).parentElement.removeChild(d);
            return (
              r.on("uniview.sco.tabLoaded", function (e) {
                i.splice(i.indexOf(e), 1),
                  i.length || r.dispatch("uniview.sco.allTabsLoaded");
              }),
              r.on("uniview.component.tabs.activateByNumber", function (e) {
                tabs.emit("activate", e);
              }),
              this.exports(a)
            );
          };
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(191);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".sco-tabs {\n    flex-grow: 1;\n}\n\n.sco-tabs .skin-tabs-header {\n    margin-left: .5em;\n}",
        "",
      ]),
        (e.exports = n);
    },
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(193),
            (r.exports = function (e, n, r) {
              var o = t(67),
                a = e.create(
                  t(66),
                  r.expand(
                    {
                      handlers: {
                        link2d: function () {
                          o.link2d.call(this);
                        },
                        link3d: function () {
                          o.link3d.call(this);
                        },
                        footnote: function () {
                          o.footnote.call(this);
                        },
                      },
                    },
                    n
                  )
                ),
                i = e.div(".doc-container");
              return (
                a
                  .documentTemplateHtml()
                  .then(function (t) {
                    var o = e.div();
                    o.innerHTML = t;
                    var c = o.querySelector(
                      '.trainingStep[id = "' + n.traingStepId + '"]'
                    );
                    i.append(c), a.resolveImages(i), a.resolveLinks(i);
                    for (
                      var l = c.querySelectorAll(
                          ".trainingStep>.contentDescription"
                        ),
                        g = 0;
                      g < l.length;
                      g++
                    ) {
                      var d = l.item(g);
                      d.parentElement.removeChild(d);
                    }
                    r.dispatch("uniview.sco.tabLoaded", n.traingStepId);
                  })
                  .catch(function (e) {}),
                this.exports(i)
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(194);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([e.i, "\n", ""]), (e.exports = n);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(242),
            (r.exports = function (e, n, r) {
              var o = r.skin.get("view").render(t(7)),
                a = t(67);
              r.expand(r.app, {
                ui: {
                  showCanvas: function (n) {
                    n ||
                      (o.window &&
                        o.window.Cortona3DSolo &&
                        o.window.Cortona3DSolo.app.procedure &&
                        o.window.Cortona3DSolo.app.procedure.pause()),
                      e.toggle(o.$el, n),
                      n && o.window && o.window.focus();
                  },
                },
              });
              var i,
                c = !1;
              function l(e) {
                switch (
                  (r.dispatch("uniview.showAllPanels"),
                  r.app.procedure.toggleDrawingDisplayMode(!0),
                  e)
                ) {
                  case 0:
                    r.dispatch("uniview.multimedia.toggle", !0),
                      r.app.drawing.show(!1),
                      r.app.ui.showCanvas(!1);
                    break;
                  case 1:
                    r.dispatch("uniview.multimedia.toggle", !1);
                    break;
                  case 2:
                    r.dispatch("uniview.multimedia.toggle", !1),
                      r.app.drawing.show(!1),
                      r.app.ui.showCanvas(!0);
                }
                i = e;
              }
              return (
                r.on("uniview.settings.changedExpandMain", function (e) {
                  switch (i) {
                    case 0:
                    case 2:
                      o.window && o.window.focus();
                  }
                }),
                r.on("uniview.settings.changedExpandAux", function (e) {
                  switch (i) {
                    case 0:
                      r.dispatch("uniview.multimedia.toggle", !e);
                      break;
                    case 2:
                      r.app.ui.showCanvas(!e);
                  }
                }),
                r.once("uniview.ready", function () {
                  var e = document.getElementById("btn-3d-display-mode");
                  e && (e.style.display = "none");
                }),
                {
                  link2d: function () {
                    l(1), a.link2d.call(this, r);
                  },
                  link3d: function () {
                    var e = this.dataset.src,
                      n = this.dataset.ixml,
                      t = r.app.util.toUrl(
                        n || e,
                        r.app.modelInfo.baseURL || r.app.modelInfo.bundleURL
                      ),
                      i = /(part|item)/.test(this.dataset.context),
                      g = this;
                    l(2),
                      c ||
                        (r.dispatch("uniview.linkMedia", this),
                        (c = !0),
                        o
                          .loadSoloResource(t, {
                            factory: n && "uniview-procedure",
                            totalMemory: +r.uniview.options.TotalMemory || 256,
                            AutoStop: !0,
                            EnableWarnings: !1,
                            disableMessages: !0,
                          })
                          .then(function () {
                            l(2),
                              setTimeout(
                                function () {
                                  i ||
                                    (o.window.Cortona3DSolo.uniview.settings.Locked =
                                      !0),
                                    a.link3d.call(g, o.window.Cortona3DSolo);
                                },
                                i ? 500 : 0
                              ),
                              o.window.Cortona3DSolo.app.ui
                                .css()
                                .render({
                                  ".skin-holder .solo-uniview-content": {
                                    padding: 0,
                                  },
                                }),
                              o.window.Cortona3DSolo.dispatch(
                                "core.didChangeLayout"
                              ),
                              (c = !1);
                          })
                          .catch(function () {
                            c = !1;
                          }));
                  },
                  linkMedia: function () {
                    var e = this.dataset.src,
                      n = r.app.modelInfo.baseURL || r.app.modelInfo.bundleURL,
                      t = this.dataset.ixml,
                      a =
                        /\.(wrl|vrml|cortona3d|solo|vmb|interactivity\.xml)$/i.test(
                          e
                        )
                          ? "solo"
                          : this.dataset.multimediatype,
                      i = +this.dataset.autoplay,
                      g = +this.dataset.fullscreen,
                      d = "hide" !== this.dataset.showplugincontrols,
                      A = r.app.util.toUrl(t || e, n);
                    switch (a) {
                      case "3D":
                      case "solo":
                        c ||
                          (r.dispatch("uniview.linkMedia", this),
                          l(2),
                          (c = !0),
                          o
                            .loadSoloResource(A, {
                              lang: r.uniview.config.lang,
                              factory: t && "uniview-procedure",
                              totalMemory:
                                +r.uniview.options.TotalMemory || 256,
                              EnableWarnings: !1,
                              disableMessages: !0,
                              components: {
                                uiProcedureToolbar: d ? null : function () {},
                                uiToolbarSceneNavigation: d
                                  ? null
                                  : function () {},
                                uiProcedureToolbarPartSelection: d
                                  ? null
                                  : function () {},
                              },
                            })
                            .then(function () {
                              var e = document.getElementById(
                                "btn-3d-display-mode"
                              );
                              e && (e.style.display = ""),
                                l(2),
                                g && (r.uniview.settings.ExpandMain = !0),
                                (o.window.Cortona3DSolo.uniview.settings.Locked =
                                  !1),
                                i &&
                                  o.window.Cortona3DSolo.app.procedure.play(),
                                o.window.Cortona3DSolo.app.ui
                                  .css()
                                  .render({
                                    ".skin-holder .solo-uniview-content": {
                                      padding: 0,
                                    },
                                  }),
                                o.window.Cortona3DSolo.dispatch(
                                  "core.didChangeLayout"
                                ),
                                (c = !1);
                            })
                            .catch(function () {
                              c = !1;
                            }));
                        break;
                      default:
                        r.dispatch("uniview.linkMedia", this),
                          r.dispatch("uniview.multimedia.load", A, {
                            type: a,
                            autoplay: i,
                            fullscreen: g,
                            controls: d,
                          }),
                          l(0),
                          g && (r.uniview.settings.ExpandMain = !0);
                    }
                  },
                  footnote: function () {
                    a.footnote.call(this, r);
                  },
                }
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
    function (e, n, t) {
      var r = t(0),
        o = t(243);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var a = { insert: "head", singleton: !1 };
      r(o, a);
      e.exports = o.locals || {};
    },
    function (e, n, t) {
      (n = t(1)(!1)).push([
        e.i,
        ".main.panel {\r\n    border: none;\r\n}\r\n\r\n.main.panel .panel-view {\r\n    margin-top: .5em;\r\n}\r\n",
        "",
      ]),
        (e.exports = n);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, t) {
      var r;
      void 0 ===
        (r = function (e, n, r) {
          t(138),
            (r.exports = function (e, n, r) {
              var o = e.create(t(241));
              return (
                (n.helpAction = null),
                n.handlers && r.expand(n.handlers, o),
                e.use(t(186), r.expand({ issue: "4.1", handlers: o }, n))
              );
            });
        }.call(n, t, n, e)) || (e.exports = r);
    },
  ]);
});
