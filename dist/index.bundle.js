"use strict";
(self.webpackChunkwebpack_setup = self.webpackChunkwebpack_setup || []).push([
  [826],
  {
    426: (n, e, t) => {
      t.d(e, { Z: () => i });
      var o = t(81),
        r = t.n(o),
        a = t(645),
        s = t.n(a)()(r());
      s.push([
        n.id,
        "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  background-color: rgb(239, 239, 239);\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nmain {\n  background-color: #f5f5f5;\n  box-shadow: 0 0 4rem rgb(53, 48, 41);\n  width: 50%;\n  margin: 20px auto;\n  padding: 10px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  border: 1px solid rgb(210, 210, 210);\n  padding: 10px;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#clearBtn {\n  border: 1px solid rgb(210, 210, 210);\n  width: 100%;\n  padding: 14px;\n  font-size: 20px;\n}\n\n#clearBtn:hover {\n  transform: scale(0.9);\n  background-color: rgb(118, 2, 2);\n  color: white;\n}\n\n.message {\n  border: 1px solid rgb(210, 210, 210);\n  width: 100%;\n  padding: 14px;\n  font-size: 13px;\n  font-style: italic;\n}\n\n.TaskInput {\n  width: 100%;\n}\n\ninput {\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n  border: 1px solid rgb(203, 202, 202);\n}\n\nform input {\n  width: 90%;\n  padding: 12px;\n}\n\nform input::placeholder {\n  font-size: 14px;\n  font-style: italic;\n}\n\nbutton {\n  border: none;\n}\n\nform button {\n  width: 8%;\n  background-color: transparent;\n}\n\nform button i {\n  color: green;\n  font-size: 18px;\n}\n\n.delete {\n  font-size: 18px;\n  border: none;\n}\n\n.edit {\n  font-size: 18px;\n  border: none;\n}\n\nform button i:hover,\n.delete:hover,\n.edit:hover {\n  transform: scale(0.9);\n}\n\n#TaskList {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.listsdiv {\n  width: 100%;\n  border: 1px solid rgb(220, 215, 215);\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.listsdiv p {\n  width: 100%;\n  margin: 10px;\n}\n\ninput[type=\"checkbox\"] {\n  width: 10%;\n  height: 20px;\n}\n\n.line-through {\n  text-decoration: line-through;\n}\n\n.delete:hover {\n  color: brown;\n}\n\n.edit:hover {\n  color: green;\n}\n\n.btn-div {\n  display: flex;\n  gap: 20px;\n}\n",
        "",
      ]);
      const i = s;
    },
    645: (n) => {
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = "",
                o = void 0 !== e[5];
              return (
                e[4] && (t += "@supports (".concat(e[4], ") {")),
                e[2] && (t += "@media ".concat(e[2], " {")),
                o &&
                  (t += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (t += n(e)),
                o && (t += "}"),
                e[2] && (t += "}"),
                e[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (e.i = function (n, t, o, r, a) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var s = {};
            if (o)
              for (var i = 0; i < this.length; i++) {
                var d = this[i][0];
                null != d && (s[d] = !0);
              }
            for (var c = 0; c < n.length; c++) {
              var l = [].concat(n[c]);
              (o && s[l[0]]) ||
                (void 0 !== a &&
                  (void 0 === l[5] ||
                    (l[1] = "@layer"
                      .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                      .concat(l[1], "}")),
                  (l[5] = a)),
                t &&
                  (l[2]
                    ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                      (l[2] = t))
                    : (l[2] = t)),
                r &&
                  (l[4]
                    ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = r))
                    : (l[4] = "".concat(r))),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    81: (n) => {
      n.exports = function (n) {
        return n[1];
      };
    },
    379: (n) => {
      var e = [];
      function t(n) {
        for (var t = -1, o = 0; o < e.length; o++)
          if (e[o].identifier === n) {
            t = o;
            break;
          }
        return t;
      }
      function o(n, o) {
        for (var a = {}, s = [], i = 0; i < n.length; i++) {
          var d = n[i],
            c = o.base ? d[0] + o.base : d[0],
            l = a[c] || 0,
            p = "".concat(c, " ").concat(l);
          a[c] = l + 1;
          var u = t(p),
            h = {
              css: d[1],
              media: d[2],
              sourceMap: d[3],
              supports: d[4],
              layer: d[5],
            };
          if (-1 !== u) e[u].references++, e[u].updater(h);
          else {
            var f = r(h, o);
            (o.byIndex = i),
              e.splice(i, 0, { identifier: p, updater: f, references: 1 });
          }
          s.push(p);
        }
        return s;
      }
      function r(n, e) {
        var t = e.domAPI(e);
        return (
          t.update(n),
          function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          }
        );
      }
      n.exports = function (n, r) {
        var a = o((n = n || []), (r = r || {}));
        return function (n) {
          n = n || [];
          for (var s = 0; s < a.length; s++) {
            var i = t(a[s]);
            e[i].references--;
          }
          for (var d = o(n, r), c = 0; c < a.length; c++) {
            var l = t(a[c]);
            0 === e[l].references && (e[l].updater(), e.splice(l, 1));
          }
          a = d;
        };
      };
    },
    569: (n) => {
      var e = {};
      n.exports = function (n, t) {
        var o = (function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        })(n);
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      };
    },
    216: (n) => {
      n.exports = function (n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    565: (n, e, t) => {
      n.exports = function (n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    795: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = n.insertStyleElement(n);
        return {
          update: function (t) {
            !(function (n, e, t) {
              var o = "";
              t.supports && (o += "@supports (".concat(t.supports, ") {")),
                t.media && (o += "@media ".concat(t.media, " {"));
              var r = void 0 !== t.layer;
              r &&
                (o += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {"
                )),
                (o += t.css),
                r && (o += "}"),
                t.media && (o += "}"),
                t.supports && (o += "}");
              var a = t.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (o +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                e.styleTagTransform(o, n, e.options);
            })(e, n, t);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(e);
          },
        };
      };
    },
    589: (n) => {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
    396: (n, e, t) => {
      var o = t(379),
        r = t.n(o),
        a = t(795),
        s = t.n(a),
        i = t(569),
        d = t.n(i),
        c = t(565),
        l = t.n(c),
        p = t(216),
        u = t.n(p),
        h = t(589),
        f = t.n(h),
        m = t(426),
        v = {};
      (v.styleTagTransform = f()),
        (v.setAttributes = l()),
        (v.insert = d().bind(null, "head")),
        (v.domAPI = s()),
        (v.insertStyleElement = u()),
        r()(m.Z, v),
        m.Z && m.Z.locals && m.Z.locals;
      class g {
        constructor(n, e, t) {
          (this.description = n), (this.completed = e), (this.index = t);
        }
      }
      const x = {
          tasks: JSON.parse(localStorage.getItem("tasks")) || [],
          saveData: () => {
            localStorage.setItem("tasks", JSON.stringify(x.tasks));
          },
          addTask: (n) => {
            const e = new g(n, !1, x.tasks.length + 1);
            x.tasks.push(e), x.saveData();
          },
          editTask: (n, e) => {
            (x.tasks[n].description = e), x.saveData();
          },
          toggleCompletedTask: (n) => {
            const e = x.tasks[n];
            (e.completed = !e.completed), x.saveData();
          },
          removeTask: (n) => {
            x.tasks.splice(n, 1),
              x.tasks.forEach((n, e) => {
                n.index = e + 1;
              }),
              x.saveData();
          },
          getSortTasks: () => x.tasks.sort((n, e) => n.index - e.index),
        },
        b = x;
      new (class {
        constructor(n, e, t, o) {
          (this.todoInput = n),
            (this.planned = e),
            (this.todoBtn = t),
            (this.clearBtn = o),
            (this.editIndex = -1);
        }
        render = () => {
          this.planned.innerHTML = "";
          const n = b.getSortTasks();
          if (0 === n.length) {
            this.clearBtn.style.display = "none";
            const n = document.createElement("button");
            return (
              (n.className = "message"),
              (n.textContent = "What is your task Today?"),
              void this.planned.appendChild(n)
            );
          }
          (this.clearBtn.style.display = "block"),
            n.forEach((n, e) => {
              const t = document.createElement("li"),
                o = document.createElement("input"),
                r = document.createElement("p"),
                a = document.createElement("button"),
                s = document.createElement("i");
              (s.className = "fa-solid fa-trash delete"), a.appendChild(s);
              const i = document.createElement("button"),
                d = document.createElement("i");
              (d.className = "fa-solid fa-pen edit"), i.appendChild(d);
              const c = document.createElement("div");
              c.append(i, a), (c.className = "btn-div");
              const l = document.createElement("div");
              (l.className = "listsdiv"),
                (o.type = "checkbox"),
                (r.innerText = `${n.description}`),
                n.completed &&
                  (r.classList.add("line-through"), (o.checked = !0)),
                o.addEventListener("change", () => {
                  b.toggleCompletedTask(e),
                    n.completed
                      ? r.classList.add("line-through")
                      : r.classList.remove("line-through");
                }),
                a.addEventListener("click", () => {
                  b.removeTask(e), this.render();
                }),
                i.addEventListener("click", () => {
                  (this.editIndex = e),
                    (this.todoInput.value = n.description),
                    (this.todoBtn.innerHTML =
                      "<i class='fa-solid fa-pen edit'></i>");
                }),
                l.append(o, r, c),
                t.append(l),
                this.planned.appendChild(t);
            }),
            (this.todoInput.value = ""),
            (this.todoBtn.innerHTML =
              '<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>'),
            (this.editIndex = -1);
        };
        init = () => {
          this.render(),
            this.todoBtn.addEventListener("click", () => {
              "" !== this.todoInput.value.trim() &&
                (-1 === this.editIndex
                  ? b.addTask(this.todoInput.value)
                  : (b.editTask(this.editIndex, this.todoInput.value),
                    (this.editIndex = -1)),
                (this.todoInput.value = ""),
                this.render());
            }),
            this.clearBtn.addEventListener("click", () => {
              (b.tasks = b.tasks.filter((n) => !n.completed)),
                b.saveData(),
                this.render();
            });
        };
      })(
        document.querySelector("#clearBtn"),
        document.querySelector("#todoInsert"),
        document.querySelector("#todoBtn"),
        document.querySelector("#taskList")
      ).init();
    },
  },
  (n) => {
    n((n.s = 396));
  },
]);
