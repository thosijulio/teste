(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5738: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 7148));
    },
    7148: function (e, t, i) {
      "use strict";
      i.d(t, {
        GameListClientComponent: function () {
          return H;
        },
      });
      var a = i(7437),
        n = i(2265),
        s = i(6463),
        r = i(918);
      let o = () => {
          let [e, t] = (0, n.useState)({
            is1920: !1,
            is1600: !1,
            is1440: !1,
            is1024: !1,
            is768: !1,
            is425: !1,
            is375: !1,
            is360: !1,
          });
          return (
            (0, n.useEffect)(() => {
              let e = {
                  is1920: window.matchMedia("(max-width: 1920px)"),
                  is1600: window.matchMedia("(max-width: 1600px)"),
                  is1440: window.matchMedia("(max-width: 1440px)"),
                  is1024: window.matchMedia("(max-width: 1024px)"),
                  is768: window.matchMedia("(max-width: 768px)"),
                  is425: window.matchMedia("(max-width: 430px)"),
                  is375: window.matchMedia("(max-width: 375px)"),
                  is360: window.matchMedia("(max-width: 360px)"),
                },
                i = () => {
                  t({
                    is1920: e.is1920.matches,
                    is1600: e.is1600.matches,
                    is1440: e.is1440.matches,
                    is1024: e.is1024.matches,
                    is768: e.is768.matches,
                    is425: e.is425.matches,
                    is375: e.is375.matches,
                    is360: e.is360.matches,
                  });
                };
              for (let t in (i(), e)) e[t].addEventListener("change", i);
              return () => {
                for (let t in e) e[t].removeEventListener("change", i);
              };
            }, []),
            e
          );
        },
        l = (e) => {
          let { children: t } = e,
            { is768: i } = o(),
            { alreadyPlay: n, alreadyWihdrow: s } = (0, r.G)();
          async function l() {
            window.parent.postMessage({ event: "cancel" }, "*");
          }
          return (0, a.jsxs)("div", {
            className:
              "flex justify-center items-center absolute left-0 top-0 min-h-[600px] w-screen h-screen overflow-hidden z-[99]",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex absolute left-0 top-0 w-screen h-screen bg-[#000000d0] z-[99]",
                onClick: n && s ? () => {} : l,
              }),
              (0, a.jsx)("div", {
                className: "flex flex-col rounded-md z-[100] ".concat(
                  i && "w-full h-full "
                ),
                children: (0, a.jsx)("div", {
                  className:
                    "flex relative flex-col items-center z-[100] ".concat(
                      i ? "w-full h-full" : "w-[400px] h-[700px] rounded-[1rem]"
                    ),
                  children: (0, a.jsx)("div", {
                    className:
                      "flex relative flex-col justify-center items-center text-center rounded-[20px] game-background ".concat(
                        i ? "w-[95%] h-full" : "w-[380px] h-full"
                      ),
                    children: t,
                  }),
                }),
              }),
            ],
          });
        },
        c = () => (0, a.jsx)(l, { children: "Carregando..." });
      var d = i(6648),
        u = i(9183),
        p = i(9591);
      let m = u.ZP.div.withConfig({ componentId: "sc-4bc105b6-0" })([
          "position:relative;z-index:10;width:350px;height:150px;background:none;display:flex;justify-content:center;align-items:center;",
        ]),
        h = u.ZP.div.withConfig({ componentId: "sc-4bc105b6-1" })([
          "width:100%;margin:0 auto;padding:10px;position:absolute;top:10px;z-index:0;overflow:hidden;border-radius:12px;border:1px solid var(--Bunker-500,#457cb2);background:radial-gradient( 88.28% 88.28% at 50% 50%,#5587bc 0%,#123d68 100% );box-shadow:0px 4px 0px 0px #457cb2;",
        ]),
        g = (0, u.ZP)(p.E.div).withConfig({ componentId: "sc-4bc105b6-2" })([
          "display:flex;gap:7px;",
        ]),
        f = u.ZP.div.withConfig({ componentId: "sc-4bc105b6-3" })([
          "width:96px;aspect-ratio:1 / 1;display:flex;justify-content:center;align-items:center;flex:0 0 auto;border-radius:12px;border:1px solid #6898c8;background:radial-gradient( 88.28% 88.28% at 50% 50%,#8ebff3 0%,#123d68 100% ),radial-gradient(88.28% 88.28% at 50% 50%,#fbc5ff 0%,#7961e9 100%);box-shadow:0px 4px 0px 0px #083460;img{width:80%;height:auto;}",
        ]),
        x = u.ZP.button.withConfig({ componentId: "sc-4bc105b6-4" })([
          "position:relative;display:flex;justify-content:center;align-items:center;width:80%;padding:14px 20px;background:radial-gradient( 46.97% 51.15% at 50% 100%,rgba(255,221,115,0.6) 0%,rgba(255,218,104,0) 100% ),#ee8929;border-bottom:5px solid #b65d0a;border-radius:8px;cursor:pointer;color:#f5f6f6;text-align:center;font-size:16px;font-weight:700;text-shadow:0px 2px 0px rgba(0,0,0,0.25);margin-top:35px;",
        ]),
        b = [
          {
            id: 1,
            boxImage: "/Games/cases/box1.png",
            probability: 0,
            distance: 1430,
            gameURL: "/games/pragmaticplay/ratinho-sortudo",
            prizeLabel: "05x Ratinho Sortudo",
            cactus_bonus_name_: "0000",
          },
          {
            id: 2,
            boxImage: "/Games/cases/box2.png",
            probability: 0,
            distance: 1535,
            gameURL: "/games/pgsoft/cash-mania",
            prizeLabel: "03x Cash Mania",
            cactus_bonus_name_: "0000",
          },
          {
            id: 3,
            boxImage: "/Games/cases/box3.png",
            probability: 0,
            distance: 1635,
            gameURL: "/games/pragmaticplay/fire-portals",
            prizeLabel: "05x Fire Portals",
            cactus_bonus_name_: "0000",
          },
          {
            id: 4,
            boxImage: "/Games/cases/box4.png",
            probability: 0,
            distance: 1738,
            gameURL: "/games/pragmaticplay/tigre-sortudo",
            prizeLabel: "05x Tigre Sortudo",
            cactus_bonus_name_: "0000",
          },
          {
            id: 5,
            boxImage: "/Games/cases/box5.png",
            probability: 100,
            distance: 1840,
            gameURL: "/games/pragmaticplay/tigre-sortudo",
            prizeLabel: "Loja Gr\xe1tis",
            cactus_bonus_name_: "0000",
          },
        ];
      var w = i(6617),
        y = i(2983);
      let v = (e) => {
          let { isRolling: t, onComplete: i } = e,
            [s, r] = (0, n.useState)(-90),
            [o, l] = (0, n.useState)(2.5),
            [c, u] = (0, n.useState)(null),
            p = (0, n.useMemo)(
              () => Array.from({ length: 12 }).flatMap(() => b),
              [12]
            );
          return (
            (0, n.useEffect)(() => {
              if (t) {
                let e =
                    Math.random() * b.reduce((e, t) => e + t.probability, 0),
                  t = 0,
                  i = null;
                for (let a = 0; a < b.length; a++)
                  if (e <= (t += b[a].probability)) {
                    i = b[a];
                    break;
                  }
                if (i) {
                  let e = -i.distance;
                  l(3), r(e), u(i);
                }
              } else r(-90);
            }, [t, 110, p]),
            (0, a.jsxs)(m, {
              children: [
                (0, a.jsx)(h, {
                  children: (0, a.jsx)(g, {
                    initial: { x: -90 },
                    animate: { x: s },
                    transition: { duration: o, ease: "easeOut" },
                    onAnimationComplete: () => {
                      t &&
                        c &&
                        setTimeout(() => {
                          i(c);
                        }, 600);
                    },
                    children: p.map((e, t) =>
                      (0, a.jsx)(
                        f,
                        {
                          children: (0, a.jsx)(d.default, {
                            width: 66,
                            height: 65,
                            src: e.boxImage,
                            alt: "Caixa ".concat(e.id),
                            priority: !0,
                          }),
                        },
                        t
                      )
                    ),
                  }),
                }),
                (0, a.jsx)(d.default, {
                  src: "/Games/cases/pointer-top.png",
                  width: 50,
                  height: 50,
                  alt: "Ponteiro",
                  className:
                    "absolute z-[99] top-[-10px] left-[50%] transform -translate-x-1/2",
                  priority: !0,
                }),
                (0, a.jsx)(d.default, {
                  src: "/Games/cases/pointer-bottom.png",
                  width: 50,
                  height: 50,
                  alt: "Ponteiro",
                  className:
                    "absolute z-[99] bottom-[-10px] left-[50%] transform -translate-x-1/2",
                  priority: !0,
                }),
              ],
            })
          );
        },
        j = () => {
          let [e, t] = (0, n.useState)(!1),
            [i, s] = (0, n.useState)(null),
            {
              currentUserId: o,
              setAlreadyPlay: l,
              setMinigameId: c,
            } = (0, r.G)(),
            { setShowUserPlayedModal: d, setShowModalShop: u } = (0, y.d)(),
            p = async () => {
              t(!0), new Audio("/Games/cases/cases.mp3").play(), l(!0);
            },
            m = async (e) => {
              if (
                (s(e),
                c("67dd7b59e153d9dff476d78e"),
                (await (0, w.u)(o)).isBlocked)
              ) {
                d(!0);
                return;
              }
              u(!0);
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(v, { isRolling: e, onComplete: m }),
              (0, a.jsx)(x, {
                onClick: () => !1 === e && p(),
                children: e ? "Girando..." : "Abrir pr\xeamio misterioso",
              }),
            ],
          });
        },
        _ = () =>
          (0, a.jsxs)(l, {
            children: [
              (0, a.jsx)(d.default, {
                src: "/Games/cases/headline.png",
                alt: "Abriu Ganhou",
                width: 200,
                height: 200,
                quality: 100,
                className: "-mt-5 w-[200px] h-auto",
              }),
              (0, a.jsx)(j, {}),
            ],
          }),
        C = (e) =>
          (0, u.F4)(
            ["0%{transform:rotate(0deg);}100%{transform:rotate(", "deg);}"],
            e
          ),
        z = (e) =>
          (0, u.F4)(
            [
              "0%,100%{transform:rotate(",
              "deg);}50%{transform:rotate(",
              "deg);}",
            ],
            e,
            e - 2
          );
      (0, u.F4)(["0%{width:100px;}70%{width:120px;}100%{width:100px;}"]);
      let P = u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-0" })([
          "display:flex;justify-content:center;align-items:center;position:relative;width:350px;height:350px;",
        ]),
        G = u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-1" })([
          'display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;background-image:url("/Games/roulette/border.svg");background-size:cover;background-repeat:no-repeat;overflow:hidden;z-index:2;',
        ]),
        S = u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-2" })([
          "display:flex;justify-content:center;align-items:center;position:relative;width:350px;max-width:350px;height:350px;max-height:350px;",
        ]),
        k = (0, u.ZP)(d.default).withConfig({ componentId: "sc-b52ca4aa-3" })(
          [
            "width:100%;height:100%;border-radius:50%;transform:rotate(",
            "deg);",
            "",
          ],
          (e) => {
            let { $finalAngle: t } = e;
            return t;
          },
          (e) => {
            let { $isSpinning: t, $finalAngle: i } = e;
            return t
              ? (0, u.iv)(
                  ["animation:", " 5s cubic-bezier(0.03,0.02,0.1,1) forwards;"],
                  C(i)
                )
              : (0, u.iv)(["animation:", " 2s infinite;"], z(i));
          }
        ),
        I = u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-4" })([
          "position:absolute;top:-10px;left:50%;transform:translateX(-50%);z-index:9999;",
        ]),
        L = (0, u.ZP)(d.default).withConfig({ componentId: "sc-b52ca4aa-5" })([
          "width:60px;height:60px;z-index:9999;",
        ]),
        M = (0, u.ZP)(d.default).withConfig({ componentId: "sc-b52ca4aa-6" })(
          [
            "position:absolute;width:80px;height:auto;cursor:pointer;border-radius:50%;overflow:hidden;z-index:10;",
            " box-shadow:0px 0px 30px 0px #000;-webkit-box-shadow:0px 0px 30px 0px #000;-moz-box-shadow:0px 0px 30px 0px #000;@media (max-width:430px){max-width:80px;}",
          ],
          (e) => {
            let { $isSpinning: t } = e;
            return t && (0, u.iv)(["cursor:not-allowed;"]);
          }
        );
      u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-7" })([
        "display:flex;flex-direction:row;align-items:center;gap:8px;margin-top:8px;cursor:pointer;z-index:9999;p{font-weight:500;color:#fff;}",
      ]),
        u.ZP.div.withConfig({ componentId: "sc-b52ca4aa-8" })([
          "width:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-auto-flow:row;justify-content:space-between;justify-items:center;align-items:center;gap:8px;",
        ]);
      let R = [
          {
            angle: 1018,
            probability: 100,
            gameURL: "/games/pragmaticplay/tigre-sortudo",
            prizeLabel: "Loja Gr\xe1tis",
            cactus_bonus_name_: "0000",
          },
          {
            angle: 840,
            probability: 0,
            gameURL: "/games/pragmaticplay/master-joker",
            prizeLabel: "10x Master Joker",
            cactus_bonus_name_: "0000",
          },
          {
            angle: 960,
            probability: 0,
            gameURL: "/games/pgsoft/fortune-rabbit",
            prizeLabel: "03x Fortune Rabbit",
            cactus_bonus_name_: "0000",
          },
          {
            angle: 900,
            probability: 0,
            gameURL: "/games/pragmaticplay/super-7s",
            prizeLabel: "05x Super 7s",
            cactus_bonus_name_: "0000",
          },
          {
            angle: 1080,
            probability: 0,
            gameURL: "/games/pragmaticplay/gates-of-olympus",
            prizeLabel: "03x Gates of Olympus",
            cactus_bonus_name_: "0000",
          },
          {
            angle: 780,
            probability: 0,
            gameURL: "/games/pgsoft/fortune-tiger",
            prizeLabel: "03x Fortune Tiger",
            cactus_bonus_name_: "0000",
          },
        ],
        Z = () => {
          let [e, t] = (0, n.useState)(!1),
            [i, s] = (0, n.useState)(0),
            {
              setAlreadyPlay: o,
              currentUserId: l,
              setAlreadyWihdrow: c,
              setMinigameId: d,
            } = (0, r.G)(),
            { setShowUserPlayedModal: u, setShowModalShop: p } = (0, y.d)(),
            m = async () => {
              if (e) return;
              o(!0);
              let i = Math.random() * R.reduce((e, t) => e + t.probability, 0),
                a = 0,
                n = null;
              for (let e = 0; e < R.length; e++)
                if (i <= (a += R[e].probability)) {
                  n = R[e];
                  break;
                }
              if (n) {
                s(n.angle), t(!0), d("67e32709e153d9dff49bf032");
                let e = await (0, w.u)(l);
                setTimeout(() => {
                  if ((c(!0), e.isBlocked)) {
                    u(!0);
                    return;
                  }
                  p(!0);
                }, 5e3);
              }
            };
          return (0, a.jsxs)(P, {
            children: [
              (0, a.jsxs)(S, {
                children: [
                  (0, a.jsx)(I, {
                    children: (0, a.jsx)(L, {
                      src: "/Games/roulette/pointer.svg",
                      alt: "Pointer",
                      width: 0,
                      height: 0,
                    }),
                  }),
                  (0, a.jsx)(k, {
                    src: "/Games/roulette/roulette.png",
                    alt: "Roulette",
                    width: 320,
                    height: 320,
                    quality: 100,
                    $isSpinning: e,
                    $finalAngle: i,
                  }),
                  (0, a.jsx)(M, {
                    src: "/Games/roulette/button.svg",
                    alt: "Spin Button",
                    width: 0,
                    height: 0,
                    onClick: m,
                    $isSpinning: e,
                  }),
                ],
              }),
              (0, a.jsx)(G, {}),
            ],
          });
        },
        E = () =>
          (0, a.jsxs)(l, {
            children: [
              (0, a.jsx)(d.default, {
                src: "/Games/roulette/headline.png",
                alt: "Girou Ganhou",
                width: 200,
                height: 200,
                quality: 100,
                className: "mb-5 w-[200px] h-auto",
              }),
              (0, a.jsx)(Z, {}),
            ],
          }),
        U = u.ZP.div.withConfig({ componentId: "sc-dc8169c4-0" })([
          "position:relative;width:100%;z-index:0;",
        ]),
        N = u.ZP.div.withConfig({ componentId: "sc-dc8169c4-1" })([
          "position:relative;display:flex;align-items:center;justify-content:center;",
        ]),
        T = u.ZP.div.withConfig({ componentId: "sc-dc8169c4-2" })([
          "position:absolute;top:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;z-index:0;",
        ]),
        B = u.ZP.div.withConfig({ componentId: "sc-dc8169c4-3" })([""]),
        O = u.ZP.div.withConfig({ componentId: "sc-dc8169c4-4" })([
          "display:flex;justify-content:center;",
        ]),
        F = u.ZP.canvas.withConfig({ componentId: "sc-5764d02-0" })([
          "display:block;margin:auto;",
        ]);
      var A = (e) => {
        let {
            width: t,
            height: i,
            image: s,
            brushSize: r,
            onScratch: o,
            onScratchedPercentChange: l,
          } = e,
          c = (0, n.useRef)(null),
          [d, u] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          let e = new Image(t, i);
          return (
            (e.src = s),
            (e.crossOrigin = "anonymous"),
            (e.onload = () => {
              let a = c.current,
                n = null == a ? void 0 : a.getContext("2d");
              a &&
                n &&
                (n.drawImage(e, 0, 0, t, i),
                (n.globalCompositeOperation = "destination-out"));
            }),
            () => {
              e.onload = null;
            }
          );
        }, [s, t, i]);
        let p = (0, n.useCallback)(() => {
            let e = c.current,
              a = null == e ? void 0 : e.getContext("2d");
            if (e && a) {
              let e = a.getImageData(0, 0, t, i).data,
                n = t * i,
                s = 0;
              for (let t = 0; t < e.length; t += 4) 0 === e[t + 3] && s++;
              let r = (s / n) * 100;
              r > 80 && o(!0), l(r);
            }
          }, [t, i, o, l]),
          m = () => {
            u(!0);
          },
          h = () => {
            u(!1), p();
          },
          g = (0, n.useCallback)(
            (e, t) => {
              let i = c.current,
                a = null == i ? void 0 : i.getContext("2d");
              i &&
                a &&
                (a.beginPath(), a.arc(e, t, r, 0, 2 * Math.PI, !0), a.fill());
            },
            [r]
          );
        return (0, a.jsx)(F, {
          ref: c,
          width: t,
          height: i,
          onMouseDown: m,
          onMouseMove: (e) => {
            var t;
            if (!d) return;
            let i =
              null === (t = c.current) || void 0 === t
                ? void 0
                : t.getBoundingClientRect();
            i && g(e.clientX - i.left, e.clientY - i.top);
          },
          onMouseUp: h,
          onMouseLeave: h,
          onTouchStart: m,
          onTouchMove: (e) => {
            var t;
            if (!d) return;
            let i =
              null === (t = c.current) || void 0 === t
                ? void 0
                : t.getBoundingClientRect();
            if (!i) return;
            let a = e.touches[0];
            g(a.clientX - i.left, a.clientY - i.top);
          },
          onTouchEnd: h,
        });
      };
      let X = (0, u.F4)([
          "0%{transform:scaleX(1);}50%{transform:scale3d(1.5,1.5,1.5);}100%{transform:scaleX(1);}",
        ]),
        q = u.ZP.div.withConfig({ componentId: "sc-e27e80fa-0" })([
          "background-image:linear-gradient(180deg,#00417183,#00091b83,#00417183);background-size:cover;border-radius:20px;border:5px solid #00091b;padding:15px;display:flex;justify-content:center;width:270px;height:280px;",
        ]),
        J = (0, u.ZP)(d.default).withConfig({ componentId: "sc-e27e80fa-1" })(
          ["width:100%;height:auto;", ""],
          (e) => {
            let { $animate: t } = e;
            return t && (0, u.iv)(["animation:", " 2s infinite;"], X);
          }
        );
      var $ = JSON.parse(
          '[{"id":"1","image":"/Games/scratch/prizes/1.png","probability":0,"prizeLabel":"Gates Of Olympus","gameURL":"/games/pgsoft/gates-of-olympus","cactus_bonus_name_":"8360"},{"id":"2","image":"/Games/scratch/prizes/2.png","probability":0,"prizeLabel":"Master Joker","gameURL":"/games/pragmaticplay/master-joker","cactus_bonus_name_":"8360"},{"id":"3","image":"/Games/scratch/prizes/3.png","probability":100,"prizeLabel":"Tigre Sortudo","gameURL":"/games/pragmaticplay/tigre-sortudo","cactus_bonus_name_":"8360"},{"id":"4","image":"/Games/scratch/prizes/4.svg","probability":0,"prizeLabel":"N\xe3o ganhou","gameURL":"/","cactus_bonus_name_":""}]'
        ),
        D = (e) => {
          let { animate: t, setWinningPrize: i } = e,
            [s, r] = (0, n.useState)([]),
            [o, l] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              let e = $.filter((e) => e.probability > 0),
                t = Math.random() * e.reduce((e, t) => e + t.probability, 0),
                a = 0,
                n = null;
              for (let i = 0; i < e.length; i++)
                if (t <= (a += e[i].probability)) {
                  n = e[i];
                  break;
                }
              if (n) {
                i(n), l(n);
                let e = [, , ,].fill(n),
                  t = $.filter((e) => e.id !== n.id),
                  a = {},
                  s = [];
                for (; s.length < 6; ) {
                  let e = Math.floor(Math.random() * t.length),
                    i = t[e];
                  (a[i.id] = (a[i.id] || 0) + 1),
                    a[i.id] <= 2 ? s.push(i) : a[i.id]--;
                }
                let o = [...e, ...s].sort(() => Math.random() - 0.5),
                  c = [];
                for (let e = 0; e < 3; e++) c.push(o.slice(3 * e, 3 * e + 3));
                r(c);
              }
            }, []),
            (0, a.jsx)(q, {
              children: (0, a.jsx)("div", {
                style: {
                  display: "grid",
                  width: "270",
                  margin: "auto",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                },
                children: s.map((e, i) =>
                  e.map((e, n) =>
                    (0, a.jsx)(
                      J,
                      {
                        src: e.image,
                        width: 100,
                        height: 100,
                        alt: "Element ".concat(e.id),
                        $animate: t && e.id === (null == o ? void 0 : o.id),
                      },
                      "".concat(i, "-").concat(n)
                    )
                  )
                ),
              }),
            })
          );
        };
      let V = (e) => {
          let {
              handleShowModal: t,
              handlePrize: i,
              alreadyPlayed: s,
              setAlreadyPlayed: r,
            } = e,
            [o, l] = (0, n.useState)(!1),
            [c, d] = (0, n.useState)(null),
            u = async (e) => {
              !1 === s && r(!0),
                e &&
                  (setTimeout(() => {
                    t(!0), i(c);
                  }, 2e3),
                  l(!0));
            };
          return (0, a.jsx)(U, {
            children: (0, a.jsxs)(N, {
              children: [
                (0, a.jsx)(O, {
                  children: (0, a.jsx)(D, { animate: o, setWinningPrize: d }),
                }),
                (0, a.jsx)(T, {
                  children: (0, a.jsx)(B, {
                    children: (0, a.jsx)(A, {
                      width: 240,
                      height: 250,
                      image:
                        "https://popups-smartico.s3.us-east-1.amazonaws.com/feature-flags/raspadinha.png",
                      brushSize: 35,
                      onScratch: u,
                      onScratchedPercentChange: (e) => {
                        e > 70 && u(!0);
                      },
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Y = () => {
          let [e, t] = (0, n.useState)(!1),
            [i, s] = (0, n.useState)(null),
            [o, l] = (0, n.useState)(!1),
            {
              setAlreadyWihdrow: c,
              currentUserId: d,
              setMinigameId: u,
            } = (0, r.G)(),
            { setShowModalShop: p, setShowUserPlayedModal: m } = (0, y.d)();
          async function h() {
            if (
              (c(!0),
              u("67e33562e153d9dff49e368e"),
              (await (0, w.u)(d)).isBlocked)
            ) {
              m(!0);
              return;
            }
            p(!0);
          }
          return (
            (0, n.useEffect)(() => {
              (null == i ? void 0 : i.prizeLabel.length) && h();
            }, [i]),
            (0, a.jsx)(V, {
              handleShowModal: t,
              handlePrize: s,
              alreadyPlayed: o,
              setAlreadyPlayed: l,
            })
          );
        },
        W = () =>
          (0, a.jsxs)(l, {
            children: [
              (0, a.jsx)(d.default, {
                src: "/Games/scratch/headline.png",
                alt: "Raspou Ganhou",
                width: 200,
                height: 200,
                quality: 100,
                className: "mb-5 w-[200px] h-auto",
              }),
              (0, a.jsx)(Y, {}),
            ],
          }),
        H = (e) => {
          let { userId: t, id: i } = e,
            o = (0, s.useRouter)(),
            l = (0, s.useSearchParams)(),
            { currentId: d, setCurentId: u, setCurentUserId: p } = (0, r.G)(),
            { setShowUserPlayedModal: m } = (0, y.d)(),
            h = (0, n.useMemo)(() => {
              switch (d) {
                case "0001":
                  return _;
                case "0002":
                  return E;
                case "0003":
                  return W;
                default:
                  return c;
              }
            }, [d, t]);
          return (
            (0, n.useEffect)(() => {
              (async () => {
                if (!t) {
                  m(!0);
                  return;
                }
                let { isBlocked: e } = await (0, w.u)(t);
                e && m(!0);
              })();
            }, [t]),
            (0, n.useEffect)(() => {
              if ((t && p(t), i && u(i), !t)) {
                o.replace("/?id=undefined");
                return;
              }
              let e = l.get("id"),
                a = l.get("userId");
              if (i !== e || t !== a) {
                let e = "?id=".concat(i, "&userId=").concat(t);
                o.replace(e);
              }
            }, [i, t, l, o, u, p]),
            (0, n.useEffect)(() => {
              let e = l.get("id");
              if (d && d !== e && t) {
                let e = "?id=".concat(d, "&userId=").concat(t);
                o.replace(e);
              }
            }, [d, l, o, t]),
            (0, a.jsx)(h, {})
          );
        };
    },
    9854: function (e, t, i) {
      "use strict";
      i.d(t, {
        G: function () {
          return s;
        },
        GameContextProvider: function () {
          return r;
        },
      });
      var a = i(7437),
        n = i(2265);
      let s = (0, n.createContext)({}),
        r = (e) => {
          let { children: t } = e,
            [i, r] = (0, n.useState)(),
            [o, l] = (0, n.useState)(""),
            [c, d] = (0, n.useState)(!1),
            [u, p] = (0, n.useState)(!1),
            [m, h] = (0, n.useState)("");
          return (0, a.jsx)(s.Provider, {
            value: {
              currentId: i,
              setCurentId: r,
              currentUserId: o,
              setCurentUserId: l,
              alreadyPlay: c,
              setAlreadyPlay: d,
              alreadyWihdrow: u,
              setAlreadyWihdrow: p,
              minigameId: m,
              setMinigameId: h,
            },
            children: t,
          });
        };
    },
    1551: function (e, t, i) {
      "use strict";
      i.d(t, {
        ModalProvider: function () {
          return r;
        },
        t: function () {
          return s;
        },
      });
      var a = i(7437),
        n = i(2265);
      let s = (0, n.createContext)({}),
        r = (e) => {
          let { children: t } = e,
            [i, r] = (0, n.useState)(!1),
            [o, l] = (0, n.useState)(!1);
          return (0, a.jsx)(s.Provider, {
            value: {
              showUserPlayedModal: i,
              setShowUserPlayedModal: r,
              showModalShop: o,
              setShowModalShop: l,
            },
            children: t,
          });
        };
    },
    918: function (e, t, i) {
      "use strict";
      i.d(t, {
        G: function () {
          return s;
        },
      });
      var a = i(9854),
        n = i(2265);
      let s = () => (0, n.useContext)(a.G);
    },
    2983: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return s;
        },
      });
      var a = i(1551),
        n = i(2265);
      let s = () => (0, n.useContext)(a.t);
    },
    2613: function (e, t, i) {
      "use strict";
      async function a(e) {
        try {
          let t = await fetch(
            "".concat("https://connect-v2.gdmhub.io", "/user/").concat(e),
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              cache: "no-cache",
              next: { revalidate: 0 },
            }
          );
          if (!t.ok) return null;
          let i = await t.json();
          return {
            user_ext_id: i.user_ext_id,
            campaigns: i.campaigns,
            minigames_played: i.minigames_played,
          };
        } catch (e) {
          return console.error({ error: e }), null;
        }
      }
      async function n(e) {
        try {
          let t = await fetch(
            ""
              .concat(
                "https://connect-v2.gdmhub.io",
                "/user/add-played-mini-game/"
              )
              .concat(e.userId),
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mini_game_id: e.minigameId,
                bonus_earned: e.bonusCode,
              }),
            }
          );
          if (!t.ok) return null;
          return { bonus: (await t.json()).bonus };
        } catch (e) {
          return console.error({ error: e }), null;
        }
      }
      i.d(t, {
        R: function () {
          return n;
        },
        V: function () {
          return a;
        },
      });
    },
    6617: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return n;
        },
      });
      var a = i(2613);
      async function n(e) {
        let t = await (0, a.V)(e);
        if (!t) return { isBlocked: !0 };
        let i = new Set([
            "67dd7b59e153d9dff476d78e",
            "67e32709e153d9dff49bf032",
            "67e33562e153d9dff49e368e",
          ]),
          n = (null == t ? void 0 : t.minigames_played) || [];
        return 0 === n.length
          ? { isBlocked: !1 }
          : {
              isBlocked: n.some(
                (e) => e.mini_game_id && i.has(e.mini_game_id._id)
              ),
            };
      }
    },
  },
  function (e) {
    e.O(0, [554, 591, 971, 23, 744], function () {
      return e((e.s = 5738));
    }),
      (_N_E = e.O());
  },
]);
