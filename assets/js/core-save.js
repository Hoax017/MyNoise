! function(e, t, n) {
    "use strict";

    function r(e, t) {
        return t = t || Error,
            function() {
                var n, r, i = 2,
                    a = arguments,
                    o = a[0],
                    s = "[" + (e ? e + ":" : "") + o + "] ",
                    l = a[1];
                for (s += l.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1),
                            n = t + i;
                        return n < a.length ? $e(a[n]) : e
                    }), s += "\nhttp://errors.angularjs.org/1.4.4/" + (e ? e + "/" : "") + o, r = i, n = "?"; r < a.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent($e(a[r]));
                return new t(s)
            }
    }

    function i(e) {
        if (null == e || E(e)) return !1;
        var t = "length" in Object(e) && e.length;
        return e.nodeType === Yr && t ? !0 : k(e) || _r(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function a(e, t, n) {
        var r, o;
        if (e)
            if (C(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
            else if (_r(e) || i(e)) {
            var s = "object" != typeof e;
            for (r = 0, o = e.length; o > r; r++)(s || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== a) e.forEach(t, n, e);
        else if (S(e))
            for (r in e) t.call(n, e[r], r, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        else
            for (r in e) $r.call(e, r) && t.call(n, e[r], r, e);
        return e
    }

    function o(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function l() {
        return ++Nr
    }

    function u(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function c(e, t, n) {
        for (var r = e.$$hashKey, i = 0, a = t.length; a > i; ++i) {
            var o = t[i];
            if (w(o) || C(o))
                for (var s = Object.keys(o), l = 0, d = s.length; d > l; l++) {
                    var f = s[l],
                        p = o[f];
                    n && w(p) ? T(p) ? e[f] = new Date(p.valueOf()) : P(p) ? e[f] = new RegExp(p) : (w(e[f]) || (e[f] = _r(p) ? [] : {}), c(e[f], [p], !0)) : e[f] = p
                }
        }
        return u(e, r), e
    }

    function d(e) {
        return c(e, Pr.call(arguments, 1), !1)
    }

    function f(e) {
        return c(e, Pr.call(arguments, 1), !0)
    }

    function p(e) {
        return parseInt(e, 10)
    }

    function h(e, t) {
        return d(Object.create(e), t)
    }

    function m() {}

    function g(e) {
        return e
    }

    function v(e) {
        return function() {
            return e
        }
    }

    function y(e) {
        return C(e.toString) && e.toString !== Object.prototype.toString
    }

    function $(e) {
        return "undefined" == typeof e
    }

    function b(e) {
        return "undefined" != typeof e
    }

    function w(e) {
        return null !== e && "object" == typeof e
    }

    function S(e) {
        return null !== e && "object" == typeof e && !Lr(e)
    }

    function k(e) {
        return "string" == typeof e
    }

    function x(e) {
        return "number" == typeof e
    }

    function T(e) {
        return "[object Date]" === Ir.call(e)
    }

    function C(e) {
        return "function" == typeof e
    }

    function P(e) {
        return "[object RegExp]" === Ir.call(e)
    }

    function E(e) {
        return e && e.window === e
    }

    function A(e) {
        return e && e.$evalAsync && e.$watch
    }

    function I(e) {
        return "[object File]" === Ir.call(e)
    }

    function L(e) {
        return "[object FormData]" === Ir.call(e)
    }

    function M(e) {
        return "[object Blob]" === Ir.call(e)
    }

    function O(e) {
        return "boolean" == typeof e
    }

    function N(e) {
        return e && C(e.then)
    }

    function R(e) {
        return Dr.test(Ir.call(e))
    }

    function _(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function D(e) {
        var t, n = {},
            r = e.split(",");
        for (t = 0; t < r.length; t++) n[r[t]] = !0;
        return n
    }

    function U(e) {
        return yr(e.nodeName || e[0] && e[0].nodeName)
    }

    function j(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function q(e, t, n, r) {
        if (E(e) || A(e)) throw Mr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (R(t)) throw Mr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
        if (t) {
            if (e === t) throw Mr("cpi", "Can't copy! Source and destination are identical.");
            n = n || [], r = r || [], w(e) && (n.push(e), r.push(t));
            var i;
            if (_r(e)) {
                t.length = 0;
                for (var o = 0; o < e.length; o++) t.push(q(e[o], null, n, r))
            } else {
                var s = t.$$hashKey;
                if (_r(t) ? t.length = 0 : a(t, function(e, n) {
                        delete t[n]
                    }), S(e))
                    for (i in e) t[i] = q(e[i], null, n, r);
                else if (e && "function" == typeof e.hasOwnProperty)
                    for (i in e) e.hasOwnProperty(i) && (t[i] = q(e[i], null, n, r));
                else
                    for (i in e) $r.call(e, i) && (t[i] = q(e[i], null, n, r));
                u(t, s)
            }
        } else if (t = e, w(e)) {
            var l;
            if (n && -1 !== (l = n.indexOf(e))) return r[l];
            if (_r(e)) return q(e, [], n, r);
            if (R(e)) t = new e.constructor(e);
            else if (T(e)) t = new Date(e.getTime());
            else {
                if (!P(e)) {
                    var c = Object.create(Lr(e));
                    return q(e, c, n, r)
                }
                t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex
            }
            r && (n.push(e), r.push(t))
        }
        return t
    }

    function V(e, t) {
        if (_r(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
        } else if (w(e)) {
            t = t || {};
            for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
        }
        return t || e
    }

    function B(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var r, i, a, o = typeof e,
            s = typeof t;
        if (o == s && "object" == o) {
            if (!_r(e)) {
                if (T(e)) return T(t) ? B(e.getTime(), t.getTime()) : !1;
                if (P(e)) return P(t) ? e.toString() == t.toString() : !1;
                if (A(e) || A(t) || E(e) || E(t) || _r(t) || T(t) || P(t)) return !1;
                a = ge();
                for (i in e)
                    if ("$" !== i.charAt(0) && !C(e[i])) {
                        if (!B(e[i], t[i])) return !1;
                        a[i] = !0
                    }
                for (i in t)
                    if (!(i in a || "$" === i.charAt(0) || t[i] === n || C(t[i]))) return !1;
                return !0
            }
            if (!_r(t)) return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; r > i; i++)
                    if (!B(e[i], t[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function F(e, t, n) {
        return e.concat(Pr.call(t, n))
    }

    function H(e, t) {
        return Pr.call(e, t || 0)
    }

    function Y(e, t) {
        var n = arguments.length > 2 ? H(arguments, 2) : [];
        return !C(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, F(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function z(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : E(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : A(r) && (i = "$SCOPE"), i
    }

    function W(e, t) {
        return "undefined" == typeof e ? n : (x(t) || (t = t ? 2 : null), JSON.stringify(e, z, t))
    }

    function X(e) {
        return k(e) ? JSON.parse(e) : e
    }

    function Q(e, t) {
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function G(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function K(e, t, n) {
        n = n ? -1 : 1;
        var r = Q(t, e.getTimezoneOffset());
        return G(e, n * (r - e.getTimezoneOffset()))
    }

    function J(e) {
        e = xr(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = xr("<div>").append(e).html();
        try {
            return e[0].nodeType === Wr ? yr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + yr(t)
            })
        } catch (t) {
            return yr(n)
        }
    }

    function Z(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function ee(e) {
        var t = {};
        return a((e || "").split("&"), function(e) {
            var n, r, i;
            e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = Z(r), b(r) && (i = b(i) ? Z(i) : !0, $r.call(t, r) ? _r(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
        }), t
    }

    function te(e) {
        var t = [];
        return a(e, function(e, n) {
            _r(e) ? a(e, function(e) {
                t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
            }) : t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function ne(e) {
        return re(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function re(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function ie(e, t) {
        var n, r, i = Br.length;
        for (r = 0; i > r; ++r)
            if (n = Br[r] + t, k(n = e.getAttribute(n))) return n;
        return null
    }

    function ae(e, t) {
        var n, r, i = {};
        a(Br, function(t) {
            var i = t + "app";
            !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
        }), a(Br, function(t) {
            var i, a = t + "app";
            !n && (i = e.querySelector("[" + a.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(a))
        }), n && (i.strictDi = null !== ie(n, "strict-di"), t(n, r ? [r] : [], i))
    }

    function oe(n, r, i) {
        w(i) || (i = {});
        var o = {
            strictDi: !1
        };
        i = d(o, i);
        var s = function() {
                if (n = xr(n), n.injector()) {
                    var e = n[0] === t ? "document" : J(n);
                    throw Mr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                r = r || [], r.unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), i.debugInfoEnabled && r.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), r.unshift("ng");
                var a = Je(r, i.strictDi);
                return a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), a
            },
            l = /^NG_ENABLE_DEBUG_INFO!/,
            u = /^NG_DEFER_BOOTSTRAP!/;
        return e && l.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(l, "")), e && !u.test(e.name) ? s() : (e.name = e.name.replace(u, ""), Or.resumeBootstrap = function(e) {
            return a(e, function(e) {
                r.push(e)
            }), s()
        }, void(C(Or.resumeDeferredBootstrap) && Or.resumeDeferredBootstrap()))
    }

    function se() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function le(e) {
        var t = Or.element(e).injector();
        if (!t) throw Mr("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function ue(e, t) {
        return t = t || "_", e.replace(Fr, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function ce() {
        var t;
        if (!Hr) {
            var r = Vr();
            Tr = e.jQuery, b(r) && (Tr = null === r ? n : e[r]), Tr && Tr.fn.on ? (xr = Tr, d(Tr.fn, {
                scope: di.scope,
                isolateScope: di.isolateScope,
                controller: di.controller,
                injector: di.injector,
                inheritedData: di.inheritedData
            }), t = Tr.cleanData, Tr.cleanData = function(e) {
                var n;
                if (Rr) Rr = !1;
                else
                    for (var r, i = 0; null != (r = e[i]); i++) n = Tr._data(r, "events"), n && n.$destroy && Tr(r).triggerHandler("$destroy");
                t(e)
            }) : xr = Ee, Or.element = xr, Hr = !0
        }
    }

    function de(e, t, n) {
        if (!e) throw Mr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function fe(e, t, n) {
        return n && _r(e) && (e = e[e.length - 1]), de(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function pe(e, t) {
        if ("hasOwnProperty" === e) throw Mr("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function he(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), a = e, o = i.length, s = 0; o > s; s++) r = i[s], e && (e = (a = e)[r]);
        return !n && C(e) ? Y(a, e) : e
    }

    function me(e) {
        var t = e[0],
            n = e[e.length - 1],
            r = [t];
        do {
            if (t = t.nextSibling, !t) break;
            r.push(t)
        } while (t !== n);
        return xr(r)
    }

    function ge() {
        return Object.create(null)
    }

    function ve(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            a = t(e, "angular", Object);
        return a.$$minErr = a.$$minErr || r, t(a, "module", function() {
            var e = {};
            return function(r, a, o) {
                var s = function(e, t) {
                    if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return s(r, "module"), a && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, t, n, r) {
                        return r || (r = i),
                            function() {
                                return r[n || "push"]([e, t, arguments]), c
                            }
                    }

                    function t(e, t) {
                        return function(n, a) {
                            return a && C(a) && (a.$$moduleName = r), i.push([e, t, arguments]), c
                        }
                    }
                    if (!a) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var i = [],
                        s = [],
                        l = [],
                        u = e("$injector", "invoke", "push", s),
                        c = {
                            _invokeQueue: i,
                            _configBlocks: s,
                            _runBlocks: l,
                            requires: a,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            config: u,
                            run: function(e) {
                                return l.push(e), this
                            }
                        };
                    return o && u(o), c
                })
            }
        })
    }

    function ye(e) {
        var t = [];
        return JSON.stringify(e, function(e, n) {
            if (n = z(e, n), w(n)) {
                if (t.indexOf(n) >= 0) return "<<already seen>>";
                t.push(n)
            }
            return n
        })
    }

    function $e(e) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? ye(e) : e
    }

    function be(t) {
        d(t, {
            bootstrap: oe,
            copy: q,
            extend: d,
            merge: f,
            equals: B,
            element: xr,
            forEach: a,
            injector: Je,
            noop: m,
            bind: Y,
            toJson: W,
            fromJson: X,
            identity: g,
            isUndefined: $,
            isDefined: b,
            isString: k,
            isFunction: C,
            isObject: w,
            isNumber: x,
            isElement: _,
            isArray: _r,
            version: Kr,
            isDate: T,
            lowercase: yr,
            uppercase: br,
            callbacks: {
                counter: 0
            },
            getTestability: le,
            $$minErr: r,
            $$csp: qr,
            reloadWithDebugInfo: se
        }), (Cr = ve(e))("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: mn
            }), e.provider("$compile", lt).directive({
                a: da,
                input: Ea,
                textarea: Ea,
                form: ga,
                script: wo,
                select: xo,
                style: Co,
                option: To,
                ngBind: La,
                ngBindHtml: Oa,
                ngBindTemplate: Ma,
                ngClass: Ra,
                ngClassEven: Da,
                ngClassOdd: _a,
                ngCloak: Ua,
                ngController: ja,
                ngForm: va,
                ngHide: mo,
                ngIf: Ba,
                ngInclude: Fa,
                ngInit: Ya,
                ngNonBindable: ao,
                ngPluralize: uo,
                ngRepeat: co,
                ngShow: ho,
                ngStyle: go,
                ngSwitch: vo,
                ngSwitchWhen: yo,
                ngSwitchDefault: $o,
                ngOptions: lo,
                ngTransclude: bo,
                ngModel: no,
                ngList: za,
                ngChange: Na,
                pattern: Eo,
                ngPattern: Eo,
                required: Po,
                ngRequired: Po,
                minlength: Io,
                ngMinlength: Io,
                maxlength: Ao,
                ngMaxlength: Ao,
                ngValue: Ia,
                ngModelOptions: io
            }).directive({
                ngInclude: Ha
            }).directive(fa).directive(qa), e.provider({
                $anchorScroll: Ze,
                $animate: Ci,
                $animateCss: Pi,
                $$animateQueue: Ti,
                $$AnimateRunner: xi,
                $browser: at,
                $cacheFactory: ot,
                $controller: pt,
                $document: ht,
                $exceptionHandler: mt,
                $filter: An,
                $$forceReflow: Mi,
                $interpolate: At,
                $interval: It,
                $http: Tt,
                $httpParamSerializer: vt,
                $httpParamSerializerJQLike: yt,
                $httpBackend: Pt,
                $location: Ht,
                $log: Yt,
                $parse: un,
                $rootScope: hn,
                $q: cn,
                $$q: dn,
                $sce: $n,
                $sceDelegate: yn,
                $sniffer: bn,
                $templateCache: st,
                $templateRequest: wn,
                $$testability: Sn,
                $timeout: kn,
                $window: Cn,
                $$rAF: pn,
                $$jqLite: We,
                $$HashMap: mi,
                $$cookieReader: En
            })
        }])
    }

    function we() {
        return ++Zr
    }

    function Se(e) {
        return e.replace(ni, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(ri, "Moz$1")
    }

    function ke(e) {
        return !si.test(e)
    }

    function xe(e) {
        var t = e.nodeType;
        return t === Yr || !t || t === Qr
    }

    function Te(e) {
        for (var t in Jr[e.ng339]) return !0;
        return !1
    }

    function Ce(e, t) {
        var n, r, i, o, s = t.createDocumentFragment(),
            l = [];
        if (ke(e)) l.push(t.createTextNode(e));
        else {
            for (n = n || s.appendChild(t.createElement("div")), r = (li.exec(e) || ["", ""])[1].toLowerCase(), i = ci[r] || ci._default, n.innerHTML = i[1] + e.replace(ui, "<$1></$2>") + i[2], o = i[0]; o--;) n = n.lastChild;
            l = F(l, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", a(l, function(e) {
            s.appendChild(e)
        }), s
    }

    function Pe(e, n) {
        n = n || t;
        var r;
        return (r = oi.exec(e)) ? [n.createElement(r[1])] : (r = Ce(e, n)) ? r.childNodes : []
    }

    function Ee(e) {
        if (e instanceof Ee) return e;
        var t;
        if (k(e) && (e = Ur(e), t = !0), !(this instanceof Ee)) {
            if (t && "<" != e.charAt(0)) throw ai("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Ee(e)
        }
        t ? Ue(this, Pe(e)) : Ue(this, e)
    }

    function Ae(e) {
        return e.cloneNode(!0)
    }

    function Ie(e, t) {
        if (t || Me(e), e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) Me(n[r])
    }

    function Le(e, t, n, r) {
        if (b(r)) throw ai("offargs", "jqLite#off() does not support the `selector` argument");
        var i = Oe(e),
            o = i && i.events,
            s = i && i.handle;
        if (s)
            if (t) a(t.split(" "), function(t) {
                if (b(n)) {
                    var r = o[t];
                    if (j(r || [], n), r && r.length > 0) return
                }
                ti(e, t, s), delete o[t]
            });
            else
                for (t in o) "$destroy" !== t && ti(e, t, s), delete o[t]
    }

    function Me(e, t) {
        var r = e.ng339,
            i = r && Jr[r];
        if (i) {
            if (t) return void delete i.data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Le(e)), delete Jr[r], e.ng339 = n
        }
    }

    function Oe(e, t) {
        var r = e.ng339,
            i = r && Jr[r];
        return t && !i && (e.ng339 = r = we(), i = Jr[r] = {
            events: {},
            data: {},
            handle: n
        }), i
    }

    function Ne(e, t, n) {
        if (xe(e)) {
            var r = b(n),
                i = !r && t && !w(t),
                a = !t,
                o = Oe(e, !i),
                s = o && o.data;
            if (r) s[t] = n;
            else {
                if (a) return s;
                if (i) return s && s[t];
                d(s, t)
            }
        }
    }

    function Re(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function _e(e, t) {
        t && e.setAttribute && a(t.split(" "), function(t) {
            e.setAttribute("class", Ur((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Ur(t) + " ", " ")))
        })
    }

    function De(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            a(t.split(" "), function(e) {
                e = Ur(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", Ur(n))
        }
    }

    function Ue(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; n > r; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function je(e, t) {
        return qe(e, "$" + (t || "ngController") + "Controller")
    }

    function qe(e, t, r) {
        e.nodeType == Qr && (e = e.documentElement);
        for (var i = _r(t) ? t : [t]; e;) {
            for (var a = 0, o = i.length; o > a; a++)
                if ((r = xr.data(e, i[a])) !== n) return r;
            e = e.parentNode || e.nodeType === Gr && e.host
        }
    }

    function Ve(e) {
        for (Ie(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Be(e, t) {
        t || Ie(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Fe(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : xr(n).on("load", t)
    }

    function He(e, t) {
        var n = fi[t.toLowerCase()];
        return n && pi[U(e)] && n
    }

    function Ye(e, t) {
        var n = e.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && hi[t]
    }

    function ze(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var i = t[r || n.type],
                a = i ? i.length : 0;
            if (a) {
                if ($(n.immediatePropagationStopped)) {
                    var o = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), o && o.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                }, a > 1 && (i = V(i));
                for (var s = 0; a > s; s++) n.isImmediatePropagationStopped() || i[s].call(e, n)
            }
        };
        return n.elem = e, n
    }

    function We() {
        this.$get = function() {
            return d(Ee, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), Re(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), De(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), _e(e, t)
                }
            })
        }
    }

    function Xe(e, t) {
        var n = e && e.$$hashKey;
        if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
        var r = typeof e;
        return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || l)() : r + ":" + e
    }

    function Qe(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        a(e, this.put, this)
    }

    function Ge(e) {
        var t = e.toString().replace($i, ""),
            n = t.match(gi);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Ke(e, t, n) {
        var r, i, o, s;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw k(n) && n || (n = e.name || Ge(e)), bi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = e.toString().replace($i, ""), o = i.match(gi), a(o[1].split(vi), function(e) {
                        e.replace(yi, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else _r(e) ? (s = e.length - 1, fe(e[s], "fn"), r = e.slice(0, s)) : fe(e, "fn", !0);
        return r
    }

    function Je(e, t) {
        function r(e) {
            return function(t, n) {
                return w(t) ? void a(t, s(e)) : e(t, n)
            }
        }

        function i(e, t) {
            if (pe(e, "service"), (C(t) || _r(t)) && (t = x.instantiate(t)), !t.$get) throw bi("pget", "Provider '{0}' must define $get factory method.", e);
            return S[e + g] = t
        }

        function o(e, t) {
            return function() {
                var n = P.invoke(t, this);
                if ($(n)) throw bi("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function l(e, t, n) {
            return i(e, {
                $get: n !== !1 ? o(e, t) : t
            })
        }

        function u(e, t) {
            return l(e, ["$injector", function(e) {
                return e.instantiate(t)
            }])
        }

        function c(e, t) {
            return l(e, v(t), !1)
        }

        function d(e, t) {
            pe(e, "constant"), S[e] = t, T[e] = t
        }

        function f(e, t) {
            var n = x.get(e + g),
                r = n.$get;
            n.$get = function() {
                var e = P.invoke(r, n);
                return P.invoke(t, null, {
                    $delegate: e
                })
            }
        }

        function p(e) {
            de($(e) || _r(e), "modulesToLoad", "not an array");
            var t, n = [];
            return a(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            i = x.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!b.get(e)) {
                    b.put(e, !0);
                    try {
                        k(e) ? (t = Cr(e), n = n.concat(p(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : C(e) ? n.push(x.invoke(e)) : _r(e) ? n.push(x.invoke(e)) : fe(e, "module")
                    } catch (i) {
                        throw _r(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), bi("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function h(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === m) throw bi("cdep", "Circular dependency found: {0}", t + " <- " + y.join(" <- "));
                    return e[t]
                }
                try {
                    return y.unshift(t), e[t] = m, e[t] = n(t, r)
                } catch (i) {
                    throw e[t] === m && delete e[t], i
                } finally {
                    y.shift()
                }
            }

            function i(e, n, i, a) {
                "string" == typeof i && (a = i, i = null);
                var o, s, l, u = [],
                    c = Je.$$annotate(e, t, a);
                for (s = 0, o = c.length; o > s; s++) {
                    if (l = c[s], "string" != typeof l) throw bi("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                    u.push(i && i.hasOwnProperty(l) ? i[l] : r(l, a))
                }
                return _r(e) && (e = e[o]), e.apply(n, u)
            }

            function a(e, t, n) {
                var r = Object.create((_r(e) ? e[e.length - 1] : e).prototype || null),
                    a = i(e, r, t, n);
                return w(a) || C(a) ? a : r
            }
            return {
                invoke: i,
                instantiate: a,
                get: r,
                annotate: Je.$$annotate,
                has: function(t) {
                    return S.hasOwnProperty(t + g) || e.hasOwnProperty(t)
                }
            }
        }
        t = t === !0;
        var m = {},
            g = "Provider",
            y = [],
            b = new Qe([], !0),
            S = {
                $provide: {
                    provider: r(i),
                    factory: r(l),
                    service: r(u),
                    value: r(c),
                    constant: r(d),
                    decorator: f
                }
            },
            x = S.$injector = h(S, function(e, t) {
                throw Or.isString(t) && y.push(t), bi("unpr", "Unknown provider: {0}", y.join(" <- "))
            }),
            T = {},
            P = T.$injector = h(T, function(e, t) {
                var r = x.get(e + g, t);
                return P.invoke(r.$get, r, n, e)
            });
        return a(p(e), function(e) {
            e && P.invoke(e)
        }), P
    }

    function Ze() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === U(e) ? (t = e, !0) : void 0
                }), t
            }

            function a() {
                var e = s.yOffset;
                if (C(e)) e = e();
                else if (_(e)) {
                    var n = e[0],
                        r = t.getComputedStyle(n);
                    e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else x(e) || (e = 0);
                return e
            }

            function o(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = a();
                    if (n) {
                        var r = e.getBoundingClientRect().top;
                        t.scrollBy(0, r - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function s(e) {
                e = k(e) ? e : n.hash();
                var t;
                e ? (t = l.getElementById(e)) ? o(t) : (t = i(l.getElementsByName(e))) ? o(t) : "top" === e && o(null) : o(null)
            }
            var l = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function(e, t) {
                (e !== t || "" !== e) && Fe(function() {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function et(e, t) {
        return e || t ? e ? t ? (_r(e) && (e = e.join(" ")), _r(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function tt(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.nodeType === Si) return n
        }
    }

    function nt(e) {
        k(e) && (e = e.split(" "));
        var t = ge();
        return a(e, function(e) {
            e.length && (t[e] = !0)
        }), t
    }

    function rt(e) {
        return w(e) ? e : {}
    }

    function it(e, t, n, r) {
        function i(e) {
            try {
                e.apply(null, H(arguments, 1))
            } finally {
                if (y--, 0 === y)
                    for (; b.length;) try {
                        b.pop()()
                    } catch (t) {
                        n.error(t)
                    }
            }
        }

        function o(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t)
        }

        function s() {
            u(), c()
        }

        function l() {
            try {
                return p.state
            } catch (e) {}
        }

        function u() {
            w = l(), w = $(w) ? null : w, B(w, E) && (w = E), E = w
        }

        function c() {
            (k !== d.url() || S !== w) && (k = d.url(), S = w, a(C, function(e) {
                e(d.url(), w)
            }))
        }
        var d = this,
            f = (t[0], e.location),
            p = e.history,
            h = e.setTimeout,
            g = e.clearTimeout,
            v = {};
        d.isMock = !1;
        var y = 0,
            b = [];
        d.$$completeOutstandingRequest = i, d.$$incOutstandingRequestCount = function() {
            y++
        }, d.notifyWhenNoOutstandingRequests = function(e) {
            0 === y ? e() : b.push(e)
        };
        var w, S, k = f.href,
            x = t.find("base"),
            T = null;
        u(), S = w, d.url = function(t, n, i) {
            if ($(i) && (i = null), f !== e.location && (f = e.location), p !== e.history && (p = e.history), t) {
                var a = S === i;
                if (k === t && (!r.history || a)) return d;
                var s = k && Rt(k) === Rt(t);
                return k = t, S = i, !r.history || s && a ? ((!s || T) && (T = t), n ? f.replace(t) : s ? f.hash = o(t) : f.href = t) : (p[n ? "replaceState" : "pushState"](i, "", t), u(), S = w), d
            }
            return T || f.href.replace(/%27/g, "'")
        }, d.state = function() {
            return w
        };
        var C = [],
            P = !1,
            E = null;
        d.onUrlChange = function(t) {
            return P || (r.history && xr(e).on("popstate", s), xr(e).on("hashchange", s), P = !0), C.push(t), t
        }, d.$$applicationDestroyed = function() {
            xr(e).off("hashchange popstate", s)
        }, d.$$checkUrlChange = c, d.baseHref = function() {
            var e = x.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, d.defer = function(e, t) {
            var n;
            return y++, n = h(function() {
                delete v[n], i(e)
            }, t || 0), v[n] = !0, n
        }, d.defer.cancel = function(e) {
            return v[e] ? (delete v[e], g(e), i(m), !0) : !1
        }
    }

    function at() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new it(e, r, t, n)
        }]
    }

    function ot() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e != f && (p ? p == e && (p = e.n) : p = e, a(e.n, e.p), a(e, f), f = e, f.n = null)
                }

                function a(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var o = 0,
                    s = d({}, n, {
                        id: e
                    }),
                    l = {},
                    u = n && n.capacity || Number.MAX_VALUE,
                    c = {},
                    f = null,
                    p = null;
                return t[e] = {
                    put: function(e, t) {
                        if (!$(t)) {
                            if (u < Number.MAX_VALUE) {
                                var n = c[e] || (c[e] = {
                                    key: e
                                });
                                i(n)
                            }
                            return e in l || o++, l[e] = t, o > u && this.remove(p.key), t
                        }
                    },
                    get: function(e) {
                        if (u < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            i(t)
                        }
                        return l[e]
                    },
                    remove: function(e) {
                        if (u < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            t == f && (f = t.p), t == p && (p = t.n), a(t.n, t.p), delete c[e]
                        }
                        delete l[e], o--
                    },
                    removeAll: function() {
                        l = {}, o = 0, c = {}, f = p = null
                    },
                    destroy: function() {
                        l = null, s = null, c = null, delete t[e]
                    },
                    info: function() {
                        return d({}, s, {
                            size: o
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return a(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function st() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function lt(e, r) {
        function i(e, t, n) {
            var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                i = {};
            return a(e, function(e, a) {
                var o = e.match(r);
                if (!o) throw Ei("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, a, e, n ? "controller bindings definition" : "isolate scope definition");
                i[a] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || a
                }
            }), i
        }

        function o(e, t) {
            var n = {
                isolateScope: null,
                bindToController: null
            };
            if (w(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), w(n.bindToController)) {
                var r = e.controller,
                    a = e.controllerAs;
                if (!r) throw Ei("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                if (!ft(r, a)) throw Ei("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
            }
            return n
        }

        function l(e) {
            var t = e.charAt(0);
            if (!t || t !== yr(t)) throw Ei("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
            if (e !== e.trim()) throw Ei("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
        }
        var u = {},
            c = "Directive",
            f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            y = D("ngSrc,ngSrcset,src,srcset"),
            S = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            x = /^(on[a-z]+|formaction)$/;
        this.directive = function P(t, n) {
            return pe(t, "directive"), k(t) ? (l(t), de(n, "directiveFactory"), u.hasOwnProperty(t) || (u[t] = [], e.factory(t + c, ["$injector", "$exceptionHandler", function(e, n) {
                var r = [];
                return a(u[t], function(i, a) {
                    try {
                        var s = e.invoke(i);
                        C(s) ? s = {
                            compile: v(s)
                        } : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA";
                        var l = s.$$bindings = o(s, s.name);
                        w(l.isolateScope) && (s.$$isolateBindings = l.isolateScope), s.$$moduleName = i.$$moduleName, r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), u[t].push(n)) : a(t, s(P)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        };
        var T = !0;
        this.debugInfoEnabled = function(e) {
            return b(e) ? (T = e, this) : T
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, i, o, s, l, v, b, P, E, I) {
            function L(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function M(e, t, n, r, i) {
                e instanceof xr || (e = xr(e)), a(e, function(t, n) {
                    t.nodeType == Wr && t.nodeValue.match(/\S+/) && (e[n] = xr(t).wrap("<span></span>").parent()[0])
                });
                var o = N(e, t, e, n, r, i);
                M.$$addScopeClass(e);
                var s = null;
                return function(t, n, r) {
                    de(t, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn,
                        a = r.transcludeControllers,
                        l = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = O(l));
                    var u;
                    if (u = "html" !== s ? xr(Z(s, xr("<div>").append(e).html())) : n ? di.clone.call(e) : e, a)
                        for (var c in a) u.data("$" + c + "Controller", a[c].instance);
                    return M.$$addScopeInfo(u, t), n && n(u, t), o && o(t, u, u, i), u
                }
            }

            function O(e) {
                var t = e && e[0];
                return t && "foreignobject" !== U(t) && t.toString().match(/SVG/) ? "svg" : "html"
            }

            function N(e, t, r, i, a, o) {
                function s(e, r, i, a) {
                    var o, s, l, u, c, d, f, p, g;
                    if (h) {
                        var v = r.length;
                        for (g = new Array(v), c = 0; c < m.length; c += 3) f = m[c], g[f] = r[f]
                    } else g = r;
                    for (c = 0, d = m.length; d > c;)
                        if (l = g[m[c++]], o = m[c++], s = m[c++], o) {
                            if (o.scope) {
                                u = e.$new(), M.$$addScopeInfo(xr(l), u);
                                var y = o.$$destroyBindings;
                                y && (o.$$destroyBindings = null, u.$on("$destroyed", y))
                            } else u = e;
                            p = o.transcludeOnThisElement ? R(e, o.transclude, a) : !o.templateOnThisElement && a ? a : !a && t ? R(e, t) : null, o(s, u, l, i, p, o)
                        } else s && s(e, l.childNodes, n, a)
                }
                for (var l, u, c, d, f, p, h, m = [], g = 0; g < e.length; g++) l = new oe, u = _(e[g], [], l, 0 === g ? i : n, a), c = u.length ? V(u, e[g], l, t, r, null, [], [], o) : null, c && c.scope && M.$$addScopeClass(l.$$element), f = c && c.terminal || !(d = e[g].childNodes) || !d.length ? null : N(d, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || f) && (m.push(g, c, f), p = !0, h = h || c), o = null;
                return p ? s : null
            }

            function R(e, t, n) {
                var r = function(r, i, a, o, s) {
                    return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: a,
                        futureParentElement: o
                    })
                };
                return r
            }

            function _(e, t, n, r, i) {
                var a, o, s = e.nodeType,
                    l = n.$attr;
                switch (s) {
                    case Yr:
                        Y(t, ut(U(e)), "E", r, i);
                        for (var u, c, d, h, m, g, v = e.attributes, y = 0, $ = v && v.length; $ > y; y++) {
                            var b = !1,
                                S = !1;
                            u = v[y], c = u.name, m = Ur(u.value), h = ut(c), (g = fe.test(h)) && (c = c.replace(Ai, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            }));
                            var x = h.replace(/(Start|End)$/, "");
                            z(x) && h === x + "Start" && (b = c, S = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), d = ut(c.toLowerCase()), l[d] = c, (g || !n.hasOwnProperty(d)) && (n[d] = m, He(e, d) && (n[d] = !0)), te(e, t, m, d, g), Y(t, d, "A", r, i, b, S)
                        }
                        if (o = e.className, w(o) && (o = o.animVal), k(o) && "" !== o)
                            for (; a = p.exec(o);) d = ut(a[2]), Y(t, d, "C", r, i) && (n[d] = Ur(a[3])), o = o.substr(a.index + a[0].length);
                        break;
                    case Wr:
                        if (11 === kr)
                            for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Wr;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                        K(t, e.nodeValue);
                        break;
                    case Xr:
                        try {
                            a = f.exec(e.nodeValue), a && (d = ut(a[1]), Y(t, d, "M", r, i) && (n[d] = Ur(a[2])))
                        } catch (T) {}
                }
                return t.sort(Q), t
            }

            function D(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw Ei("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType == Yr && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return xr(r)
            }

            function q(e, t, n) {
                return function(r, i, a, o, s) {
                    return i = D(i[0], t, n), e(r, i, a, o, s)
                }
            }

            function V(e, r, a, o, s, u, c, d, f) {
                function p(e, t, n, r) {
                    e && (n && (e = q(e, n, r)), e.require = v.require, e.directiveName = y, (I === v || v.$$isolateScope) && (e = re(e, {
                        isolateScope: !0
                    })), c.push(e)), t && (n && (t = q(t, n, r)), t.require = v.require, t.directiveName = y, (I === v || v.$$isolateScope) && (t = re(t, {
                        isolateScope: !0
                    })), d.push(t))
                }

                function h(e, t, n, r) {
                    var i;
                    if (k(t)) {
                        var a = t.match(S),
                            o = t.substring(a[0].length),
                            s = a[1] || a[3],
                            l = "?" === a[2];
                        if ("^^" === s ? n = n.parent() : (i = r && r[o], i = i && i.instance), !i) {
                            var u = "$" + o + "Controller";
                            i = s ? n.inheritedData(u) : n.data(u)
                        }
                        if (!i && !l) throw Ei("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", o, e)
                    } else if (_r(t)) {
                        i = [];
                        for (var c = 0, d = t.length; d > c; c++) i[c] = h(e, t[c], n, r)
                    }
                    return i || null
                }

                function m(e, t, n, r, i, a) {
                    var o = ge();
                    for (var s in r) {
                        var u = r[s],
                            c = {
                                $scope: u === I || u.$$isolateScope ? i : a,
                                $element: e,
                                $attrs: t,
                                $transclude: n
                            },
                            d = u.controller;
                        "@" == d && (d = t[u.name]);
                        var f = l(d, c, !0, u.controllerAs);
                        o[u.name] = f, U || e.data("$" + u.name + "Controller", f.instance)
                    }
                    return o
                }

                function g(e, t, i, o, s, l) {
                    function u(e, t, r) {
                        var i;
                        return A(e) || (r = t, t = e, e = n), U && (i = $), r || (r = U ? w.parent() : w), s(e, t, i, r, O)
                    }
                    var f, p, g, v, y, $, b, w, S;
                    if (r === i ? (S = a, w = a.$$element) : (w = xr(i), S = new oe(w, a)), I && (y = t.$new(!0)), s && (b = u, b.$$boundTransclude = s), E && ($ = m(w, S, b, E, y, t)), I && (M.$$addScopeInfo(w, y, !0, !(L && (L === I || L === I.$$originalDirective))), M.$$addScopeClass(w, !0), y.$$isolateBindings = I.$$isolateBindings, ae(t, S, y, y.$$isolateBindings, I, y)), $) {
                        var k, x, T = I || P;
                        T && $[T.name] && (k = T.$$bindings.bindToController, v = $[T.name], v && v.identifier && k && (x = v, l.$$destroyBindings = ae(t, S, v.instance, k, T)));
                        for (f in $) {
                            v = $[f];
                            var C = v();
                            C !== v.instance && (v.instance = C, w.data("$" + f + "Controller", C), v === x && (l.$$destroyBindings(), l.$$destroyBindings = ae(t, S, C, k, T)))
                        }
                    }
                    for (f = 0, p = c.length; p > f; f++) g = c[f], ie(g, g.isolateScope ? y : t, w, S, g.require && h(g.directiveName, g.require, w, $), b);
                    var O = t;
                    for (I && (I.template || null === I.templateUrl) && (O = y), e && e(O, i.childNodes, n, s), f = d.length - 1; f >= 0; f--) g = d[f], ie(g, g.isolateScope ? y : t, w, S, g.require && h(g.directiveName, g.require, w, $), b)
                }
                f = f || {};
                for (var v, y, $, b, x, T = -Number.MAX_VALUE, P = f.newScopeDirective, E = f.controllerDirectives, I = f.newIsolateScopeDirective, L = f.templateDirective, O = f.nonTlbTranscludeDirective, N = !1, R = !1, U = f.hasElementTranscludeDirective, j = a.$$element = xr(r), V = u, B = o, Y = 0, z = e.length; z > Y; Y++) {
                    v = e[Y];
                    var Q = v.$$start,
                        K = v.$$end;
                    if (Q && (j = D(r, Q, K)), $ = n, T > v.priority) break;
                    if ((x = v.scope) && (v.templateUrl || (w(x) ? (G("new/isolated scope", I || P, v, j), I = v) : G("new/isolated scope", I, v, j)), P = P || v), y = v.name, !v.templateUrl && v.controller && (x = v.controller, E = E || ge(), G("'" + y + "' controller", E[y], v, j),
                            E[y] = v), (x = v.transclude) && (N = !0, v.$$tlb || (G("transclusion", O, v, j), O = v), "element" == x ? (U = !0, T = v.priority, $ = j, j = a.$$element = xr(t.createComment(" " + y + ": " + a[y] + " ")), r = j[0], ne(s, H($), r), B = M($, o, T, V && V.name, {
                            nonTlbTranscludeDirective: O
                        })) : ($ = xr(Ae(r)).contents(), j.empty(), B = M($, o))), v.template)
                        if (R = !0, G("template", L, v, j), L = v, x = C(v.template) ? v.template(j, a) : v.template, x = ce(x), v.replace) {
                            if (V = v, $ = ke(x) ? [] : dt(Z(v.templateNamespace, Ur(x))), r = $[0], 1 != $.length || r.nodeType !== Yr) throw Ei("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                            ne(s, j, r);
                            var ee = {
                                    $attr: {}
                                },
                                te = _(r, [], ee),
                                se = e.splice(Y + 1, e.length - (Y + 1));
                            I && F(te), e = e.concat(te).concat(se), W(a, ee), z = e.length
                        } else j.html(x);
                    if (v.templateUrl) R = !0, G("template", L, v, j), L = v, v.replace && (V = v), g = X(e.splice(Y, e.length - Y), j, a, s, N && B, c, d, {
                        controllerDirectives: E,
                        newScopeDirective: P !== v && P,
                        newIsolateScopeDirective: I,
                        templateDirective: L,
                        nonTlbTranscludeDirective: O
                    }), z = e.length;
                    else if (v.compile) try {
                        b = v.compile(j, a, B), C(b) ? p(null, b, Q, K) : b && p(b.pre, b.post, Q, K)
                    } catch (le) {
                        i(le, J(j))
                    }
                    v.terminal && (g.terminal = !0, T = Math.max(T, v.priority))
                }
                return g.scope = P && P.scope === !0, g.transcludeOnThisElement = N, g.templateOnThisElement = R, g.transclude = B, f.hasElementTranscludeDirective = U, g
            }

            function F(e) {
                for (var t = 0, n = e.length; n > t; t++) e[t] = h(e[t], {
                    $$isolateScope: !0
                })
            }

            function Y(t, r, a, o, s, l, d) {
                if (r === s) return null;
                var f = null;
                if (u.hasOwnProperty(r))
                    for (var p, m = e.get(r + c), g = 0, v = m.length; v > g; g++) try {
                        p = m[g], (o === n || o > p.priority) && -1 != p.restrict.indexOf(a) && (l && (p = h(p, {
                            $$start: l,
                            $$end: d
                        })), t.push(p), f = p)
                    } catch (y) {
                        i(y)
                    }
                return f
            }

            function z(t) {
                if (u.hasOwnProperty(t))
                    for (var n, r = e.get(t + c), i = 0, a = r.length; a > i; i++)
                        if (n = r[i], n.multiElement) return !0;
                return !1
            }

            function W(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    i = e.$$element;
                a(e, function(r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), a(t, function(t, a) {
                    "class" == a ? (L(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == a ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == a.charAt(0) || e.hasOwnProperty(a) || (e[a] = t, r[a] = n[a])
                })
            }

            function X(e, t, n, r, i, s, l, u) {
                var c, d, f = [],
                    p = t[0],
                    m = e.shift(),
                    g = h(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    v = C(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl,
                    y = m.templateNamespace;
                return t.empty(), o(v).then(function(o) {
                        var h, $, b, S;
                        if (o = ce(o), m.replace) {
                            if (b = ke(o) ? [] : dt(Z(y, Ur(o))), h = b[0], 1 != b.length || h.nodeType !== Yr) throw Ei("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, v);
                            $ = {
                                $attr: {}
                            }, ne(r, t, h);
                            var k = _(h, [], $);
                            w(m.scope) && F(k), e = k.concat(e), W(n, $)
                        } else h = p, t.html(o);
                        for (e.unshift(g), c = V(e, h, n, i, t, m, s, l, u), a(r, function(e, n) {
                                e == h && (r[n] = t[0])
                            }), d = N(t[0].childNodes, i); f.length;) {
                            var x = f.shift(),
                                T = f.shift(),
                                C = f.shift(),
                                P = f.shift(),
                                E = t[0];
                            if (!x.$$destroyed) {
                                if (T !== p) {
                                    var A = T.className;
                                    u.hasElementTranscludeDirective && m.replace || (E = Ae(h)), ne(C, xr(T), E), L(xr(E), A)
                                }
                                S = c.transcludeOnThisElement ? R(x, c.transclude, P) : P, c(d, x, E, r, S, c)
                            }
                        }
                        f = null
                    }),
                    function(e, t, n, r, i) {
                        var a = i;
                        t.$$destroyed || (f ? f.push(t, n, r, a) : (c.transcludeOnThisElement && (a = R(t, c.transclude, i)), c(d, t, n, r, a, c)))
                    }
            }

            function Q(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function G(e, t, n, r) {
                function i(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw Ei("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, J(r))
            }

            function K(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        var t = e.parent(),
                            r = !!t.length;
                        return r && M.$$addBindingClass(t),
                            function(e, t) {
                                var i = t.parent();
                                r || M.$$addBindingClass(i), M.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                                    t[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function Z(e, n) {
                switch (e = yr(e || "html")) {
                    case "svg":
                    case "math":
                        var r = t.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function ee(e, t) {
                if ("srcdoc" == t) return P.HTML;
                var n = U(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? P.RESOURCE_URL : void 0
            }

            function te(e, t, n, i, a) {
                var o = ee(e, i);
                a = y[i] || a;
                var s = r(n, !0, o, a);
                if (s) {
                    if ("multiple" === i && "select" === U(e)) throw Ei("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", J(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, l) {
                                    var u = l.$$observers || (l.$$observers = {});
                                    if (x.test(i)) throw Ei("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = l[i];
                                    c !== n && (s = c && r(c, !0, o, a), n = c), s && (l[i] = s(e), (u[i] || (u[i] = [])).$$inter = !0, (l.$$observers && l.$$observers[i].$$scope || e).$watch(s, function(e, t) {
                                        "class" === i && e != t ? l.$updateClass(e, t) : l.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ne(e, n, r) {
                var i, a, o = n[0],
                    s = n.length,
                    l = o.parentNode;
                if (e)
                    for (i = 0, a = e.length; a > i; i++)
                        if (e[i] == o) {
                            e[i++] = r;
                            for (var u = i, c = u + s - 1, d = e.length; d > u; u++, c++) d > c ? e[u] = e[c] : delete e[u];
                            e.length -= s - 1, e.context === o && (e.context = r);
                            break
                        }
                l && l.replaceChild(r, o);
                var f = t.createDocumentFragment();
                f.appendChild(o), xr.hasData(o) && (xr(r).data(xr(o).data()), Tr ? (Rr = !0, Tr.cleanData([o])) : delete xr.cache[o[xr.expando]]);
                for (var p = 1, h = n.length; h > p; p++) {
                    var m = n[p];
                    xr(m).remove(), f.appendChild(m), delete n[p]
                }
                n[0] = r, n.length = 1
            }

            function re(e, t) {
                return d(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ie(e, t, n, r, a, o) {
                try {
                    e(t, n, r, a, o)
                } catch (s) {
                    i(s, J(n))
                }
            }

            function ae(e, t, n, i, o, l) {
                var u;
                a(i, function(i, a) {
                    var l, c, d, f, p = i.attrName,
                        h = i.optional,
                        g = i.mode;
                    switch (g) {
                        case "@":
                            h || $r.call(t, p) || (n[a] = t[p] = void 0), t.$observe(p, function(e) {
                                k(e) && (n[a] = e)
                            }), t.$$observers[p].$$scope = e, k(t[p]) && (n[a] = r(t[p])(e));
                            break;
                        case "=":
                            if (!$r.call(t, p)) {
                                if (h) break;
                                t[p] = void 0
                            }
                            if (h && !t[p]) break;
                            c = s(t[p]), f = c.literal ? B : function(e, t) {
                                return e === t || e !== e && t !== t
                            }, d = c.assign || function() {
                                throw l = n[a] = c(e), Ei("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", t[p], o.name)
                            }, l = n[a] = c(e);
                            var v = function(t) {
                                return f(t, n[a]) || (f(t, l) ? d(e, t = n[a]) : n[a] = t), l = t
                            };
                            v.$stateful = !0;
                            var y;
                            y = i.collection ? e.$watchCollection(t[p], v) : e.$watch(s(t[p], v), null, c.literal), u = u || [], u.push(y);
                            break;
                        case "&":
                            if (c = t.hasOwnProperty(p) ? s(t[p]) : m, c === m && h) break;
                            n[a] = function(t) {
                                return c(e, t)
                            }
                    }
                });
                var c = u ? function() {
                    for (var e = 0, t = u.length; t > e; ++e) u[e]()
                } : m;
                return l && c !== m ? (l.$on("$destroy", c), m) : c
            }
            var oe = function(e, t) {
                if (t) {
                    var n, r, i, a = Object.keys(t);
                    for (n = 0, r = a.length; r > n; n++) i = a[n], this[i] = t[i]
                } else this.$attr = {};
                this.$$element = e
            };
            oe.prototype = {
                $normalize: ut,
                $addClass: function(e) {
                    e && e.length > 0 && E.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && e.length > 0 && E.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = ct(e, t);
                    n && n.length && E.addClass(this.$$element, n);
                    var r = ct(t, e);
                    r && r.length && E.removeClass(this.$$element, r)
                },
                $set: function(e, t, r, o) {
                    var s, l = this.$$element[0],
                        u = He(l, e),
                        c = Ye(l, e),
                        d = e;
                    if (u ? (this.$$element.prop(e, t), o = u) : c && (this[c] = t, d = c), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e], o || (this.$attr[e] = o = ue(e, "-"))), s = U(this.$$element), "a" === s && "href" === e || "img" === s && "src" === e) this[e] = t = I(t, "src" === e);
                    else if ("img" === s && "srcset" === e) {
                        for (var f = "", p = Ur(t), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, m = /\s/.test(p) ? h : /(,)/, g = p.split(m), v = Math.floor(g.length / 2), y = 0; v > y; y++) {
                            var $ = 2 * y;
                            f += I(Ur(g[$]), !0), f += " " + Ur(g[$ + 1])
                        }
                        var b = Ur(g[2 * y]).split(/\s/);
                        f += I(Ur(b[0]), !0), 2 === b.length && (f += " " + Ur(b[1])), this[e] = t = f
                    }
                    r !== !1 && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t));
                    var w = this.$$observers;
                    w && a(w[d], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            i(n)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = ge()),
                        i = r[e] || (r[e] = []);
                    return i.push(t), v.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(e) || $(n[e]) || t(n[e])
                        }),
                        function() {
                            j(i, t)
                        }
                }
            };
            var se = r.startSymbol(),
                le = r.endSymbol(),
                ce = "{{" == se || "}}" == le ? g : function(e) {
                    return e.replace(/\{\{/g, se).replace(/}}/g, le)
                },
                fe = /^ngAttr[A-Z]/;
            return M.$$addBindingInfo = T ? function(e, t) {
                var n = e.data("$binding") || [];
                _r(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : m, M.$$addBindingClass = T ? function(e) {
                L(e, "ng-binding")
            } : m, M.$$addScopeInfo = T ? function(e, t, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(i, t)
            } : m, M.$$addScopeClass = T ? function(e, t) {
                L(e, t ? "ng-isolate-scope" : "ng-scope")
            } : m, M
        }]
    }

    function ut(e) {
        return Se(e.replace(Ai, ""))
    }

    function ct(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/);
        e: for (var a = 0; a < r.length; a++) {
            for (var o = r[a], s = 0; s < i.length; s++)
                if (o == i[s]) continue e;
            n += (n.length > 0 ? " " : "") + o
        }
        return n
    }

    function dt(e) {
        e = xr(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            n.nodeType === Xr && Er.call(e, t, 1)
        }
        return e
    }

    function ft(e, t) {
        if (t && k(t)) return t;
        if (k(e)) {
            var n = Li.exec(e);
            if (n) return n[3]
        }
    }

    function pt() {
        var e = {},
            t = !1;
        this.register = function(t, n) {
            pe(t, "controller"), w(t) ? d(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(i, a) {
            function o(e, t, n, i) {
                if (!e || !w(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                e.$scope[t] = n
            }
            return function(r, s, l, u) {
                var c, f, p, h;
                if (l = l === !0, u && k(u) && (h = u), k(r)) {
                    if (f = r.match(Li), !f) throw Ii("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    p = f[1], h = h || f[3], r = e.hasOwnProperty(p) ? e[p] : he(s.$scope, p, !0) || (t ? he(a, p, !0) : n), fe(r, p, !0)
                }
                if (l) {
                    var m = (_r(r) ? r[r.length - 1] : r).prototype;
                    c = Object.create(m || null), h && o(s, h, c, p || r.name);
                    var g;
                    return g = d(function() {
                        var e = i.invoke(r, c, s, p);
                        return e !== c && (w(e) || C(e)) && (c = e, h && o(s, h, c, p || r.name)), c
                    }, {
                        instance: c,
                        identifier: h
                    })
                }
                return c = i.instantiate(r, s, p), h && o(s, h, c, p || r.name), c
            }
        }]
    }

    function ht() {
        this.$get = ["$window", function(e) {
            return xr(e.document)
        }]
    }

    function mt() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function gt(e) {
        return w(e) ? T(e) ? e.toISOString() : W(e) : e
    }

    function vt() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return o(e, function(e, n) {
                    null === e || $(e) || (_r(e) ? a(e, function(e, r) {
                        t.push(re(n) + "=" + re(gt(e)))
                    }) : t.push(re(n) + "=" + re(gt(e))))
                }), t.join("&")
            }
        }
    }

    function yt() {
        this.$get = function() {
            return function(e) {
                function t(e, r, i) {
                    null === e || $(e) || (_r(e) ? a(e, function(e, n) {
                        t(e, r + "[" + (w(e) ? n : "") + "]")
                    }) : w(e) && !T(e) ? o(e, function(e, n) {
                        t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : n.push(re(r) + "=" + re(gt(e))))
                }
                if (!e) return "";
                var n = [];
                return t(e, "", !0), n.join("&")
            }
        }
    }

    function $t(e, t) {
        if (k(e)) {
            var n = e.replace(Di, "").trim();
            if (n) {
                var r = t("Content-Type");
                (r && 0 === r.indexOf(Oi) || bt(n)) && (e = X(n))
            }
        }
        return e
    }

    function bt(e) {
        var t = e.match(Ri);
        return t && _i[t[0]].test(e)
    }

    function wt(e) {
        function t(e, t) {
            e && (r[e] = r[e] ? r[e] + ", " + t : t)
        }
        var n, r = ge();
        return k(e) ? a(e.split("\n"), function(e) {
            n = e.indexOf(":"), t(yr(Ur(e.substr(0, n))), Ur(e.substr(n + 1)))
        }) : w(e) && a(e, function(e, n) {
            t(yr(n), Ur(e))
        }), r
    }

    function St(e) {
        var t;
        return function(n) {
            if (t || (t = wt(e)), n) {
                var r = t[yr(n)];
                return void 0 === r && (r = null), r
            }
            return t
        }
    }

    function kt(e, t, n, r) {
        return C(r) ? r(e, t, n) : (a(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function xt(e) {
        return e >= 200 && 300 > e
    }

    function Tt() {
        var e = this.defaults = {
                transformResponse: [$t],
                transformRequest: [function(e) {
                    return !w(e) || I(e) || M(e) || L(e) ? e : W(e)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: V(Ni),
                    put: V(Ni),
                    patch: V(Ni)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return b(e) ? (t = !!e, this) : t
        };
        var i = !0;
        this.useLegacyPromiseExtensions = function(e) {
            return b(e) ? (i = !!e, this) : i
        };
        var o = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, l, u, c, f, p) {
            function h(t) {
                function o(e) {
                    var t = d({}, e);
                    return e.data ? t.data = kt(e.data, e.headers, e.status, u.transformResponse) : t.data = e.data, xt(e.status) ? t : f.reject(t)
                }

                function s(e, t) {
                    var n, r = {};
                    return a(e, function(e, i) {
                        C(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                    }), r
                }

                function l(t) {
                    var n, r, i, a = e.headers,
                        o = d({}, t.headers);
                    a = d({}, a.common, a[yr(t.method)]);
                    e: for (n in a) {
                        r = yr(n);
                        for (i in o)
                            if (yr(i) === r) continue e;
                        o[n] = a[n]
                    }
                    return s(o, V(t))
                }
                if (!Or.isObject(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                var u = d({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer
                }, t);
                u.headers = l(t), u.method = br(u.method), u.paramSerializer = k(u.paramSerializer) ? p.get(u.paramSerializer) : u.paramSerializer;
                var c = function(t) {
                        var r = t.headers,
                            i = kt(t.data, St(r), n, t.transformRequest);
                        return $(i) && a(r, function(e, t) {
                            "content-type" === yr(t) && delete r[t]
                        }), $(t.withCredentials) && !$(e.withCredentials) && (t.withCredentials = e.withCredentials), v(t, i).then(o, o)
                    },
                    h = [c, n],
                    m = f.when(u);
                for (a(x, function(e) {
                        (e.request || e.requestError) && h.unshift(e.request, e.requestError), (e.response || e.responseError) && h.push(e.response, e.responseError)
                    }); h.length;) {
                    var g = h.shift(),
                        y = h.shift();
                    m = m.then(g, y)
                }
                return i ? (m.success = function(e) {
                    return fe(e, "fn"), m.then(function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), m
                }, m.error = function(e) {
                    return fe(e, "fn"), m.then(null, function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), m
                }) : (m.success = ji("success"), m.error = ji("error")), m
            }

            function m(e) {
                a(arguments, function(e) {
                    h[e] = function(t, n) {
                        return h(d({}, n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                })
            }

            function g(e) {
                a(arguments, function(e) {
                    h[e] = function(t, n, r) {
                        return h(d({}, r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })
            }

            function v(r, i) {
                function a(e, n, r, i) {
                    function a() {
                        o(n, e, r, i)
                    }
                    p && (xt(e) ? p.put(x, [e, n, wt(r), i]) : p.remove(x)), t ? c.$applyAsync(a) : (a(), c.$$phase || c.$apply())
                }

                function o(e, t, n, i) {
                    t = Math.max(t, 0), (xt(t) ? g.resolve : g.reject)({
                        data: e,
                        status: t,
                        headers: St(n),
                        config: r,
                        statusText: i
                    })
                }

                function u(e) {
                    o(e.data, e.status, V(e.headers()), e.statusText)
                }

                function d() {
                    var e = h.pendingRequests.indexOf(r); - 1 !== e && h.pendingRequests.splice(e, 1)
                }
                var p, m, g = f.defer(),
                    v = g.promise,
                    k = r.headers,
                    x = y(r.url, r.paramSerializer(r.params));
                if (h.pendingRequests.push(r), v.then(d, d), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = w(r.cache) ? r.cache : w(e.cache) ? e.cache : S), p && (m = p.get(x), b(m) ? N(m) ? m.then(u, u) : _r(m) ? o(m[1], m[0], V(m[2]), m[3]) : o(m, 200, {}, "OK") : p.put(x, v)), $(m)) {
                    var T = Tn(r.url) ? l()[r.xsrfCookieName || e.xsrfCookieName] : n;
                    T && (k[r.xsrfHeaderName || e.xsrfHeaderName] = T), s(r.method, x, i, a, k, r.timeout, r.withCredentials, r.responseType)
                }
                return v
            }

            function y(e, t) {
                return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
            }
            var S = u("$http");
            e.paramSerializer = k(e.paramSerializer) ? p.get(e.paramSerializer) : e.paramSerializer;
            var x = [];
            return a(o, function(e) {
                x.unshift(k(e) ? p.get(e) : p.invoke(e))
            }), h.pendingRequests = [], m("get", "delete", "head", "jsonp"), g("post", "put", "patch"), h.defaults = e, h
        }]
    }

    function Ct() {
        return new e.XMLHttpRequest
    }

    function Pt() {
        this.$get = ["$browser", "$window", "$document", function(e, t, n) {
            return Et(e, Ct, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function Et(e, t, r, i, o) {
        function s(e, t, n) {
            var r = o.createElement("script"),
                a = null;
            return r.type = "text/javascript", r.src = e, r.async = !0, a = function(e) {
                ti(r, "load", a), ti(r, "error", a), o.body.removeChild(r), r = null;
                var s = -1,
                    l = "unknown";
                e && ("load" !== e.type || i[t].called || (e = {
                    type: "error"
                }), l = e.type, s = "error" === e.type ? 404 : 200), n && n(s, l)
            }, ei(r, "load", a), ei(r, "error", a), o.body.appendChild(r), a
        }
        return function(o, l, u, c, d, f, p, h) {
            function g() {
                $ && $(), w && w.abort()
            }

            function v(t, i, a, o, s) {
                x !== n && r.cancel(x), $ = w = null, t(i, a, o, s), e.$$completeOutstandingRequest(m)
            }
            if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == yr(o)) {
                var y = "_" + (i.counter++).toString(36);
                i[y] = function(e) {
                    i[y].data = e, i[y].called = !0
                };
                var $ = s(l.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(e, t) {
                    v(c, e, i[y].data, "", t), i[y] = m
                })
            } else {
                var w = t();
                w.open(o, l, !0), a(d, function(e, t) {
                    b(e) && w.setRequestHeader(t, e)
                }), w.onload = function() {
                    var e = w.statusText || "",
                        t = "response" in w ? w.response : w.responseText,
                        n = 1223 === w.status ? 204 : w.status;
                    0 === n && (n = t ? 200 : "file" == xn(l).protocol ? 404 : 0), v(c, n, t, w.getAllResponseHeaders(), e)
                };
                var S = function() {
                    v(c, -1, null, null, "")
                };
                if (w.onerror = S, w.onabort = S, p && (w.withCredentials = !0), h) try {
                    w.responseType = h
                } catch (k) {
                    if ("json" !== h) throw k
                }
                w.send(u)
            }
            if (f > 0) var x = r(g, f);
            else N(f) && f.then(g)
        }
    }

    function At() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function a(e) {
                return "\\\\\\" + e
            }

            function o(n) {
                return n.replace(f, e).replace(p, t)
            }

            function s(e) {
                if (null == e) return "";
                switch (typeof e) {
                    case "string":
                        break;
                    case "number":
                        e = "" + e;
                        break;
                    default:
                        e = W(e)
                }
                return e
            }

            function l(a, l, f, p) {
                function h(e) {
                    try {
                        return e = E(e), p && !b(e) ? e : s(e)
                    } catch (t) {
                        r(qi.interr(a, t))
                    }
                }
                p = !!p;
                for (var m, g, v, y = 0, w = [], S = [], k = a.length, x = [], T = []; k > y;) {
                    if (-1 == (m = a.indexOf(e, y)) || -1 == (g = a.indexOf(t, m + u))) {
                        y !== k && x.push(o(a.substring(y)));
                        break
                    }
                    y !== m && x.push(o(a.substring(y, m))), v = a.substring(m + u, g), w.push(v), S.push(n(v, h)), y = g + c, T.push(x.length), x.push("")
                }
                if (f && x.length > 1 && qi.throwNoconcat(a), !l || w.length) {
                    var P = function(e) {
                            for (var t = 0, n = w.length; n > t; t++) {
                                if (p && $(e[t])) return;
                                x[T[t]] = e[t]
                            }
                            return x.join("")
                        },
                        E = function(e) {
                            return f ? i.getTrusted(f, e) : i.valueOf(e)
                        };
                    return d(function(e) {
                        var t = 0,
                            n = w.length,
                            i = new Array(n);
                        try {
                            for (; n > t; t++) i[t] = S[t](e);
                            return P(i)
                        } catch (o) {
                            r(qi.interr(a, o))
                        }
                    }, {
                        exp: a,
                        expressions: w,
                        $$watchDelegate: function(e, t) {
                            var n;
                            return e.$watchGroup(S, function(r, i) {
                                var a = P(r);
                                C(t) && t.call(this, a, r !== i ? n : a, e), n = a
                            })
                        }
                    })
                }
            }
            var u = e.length,
                c = t.length,
                f = new RegExp(e.replace(/./g, a), "g"),
                p = new RegExp(t.replace(/./g, a), "g");
            return l.startSymbol = function() {
                return e
            }, l.endSymbol = function() {
                return t
            }, l
        }]
    }

    function It() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
            function i(i, o, s, l) {
                var u = arguments.length > 4,
                    c = u ? H(arguments, 4) : [],
                    d = t.setInterval,
                    f = t.clearInterval,
                    p = 0,
                    h = b(l) && !l,
                    m = (h ? r : n).defer(),
                    g = m.promise;
                return s = b(s) ? s : 0, g.then(null, null, u ? function() {
                    i.apply(null, c)
                } : i), g.$$intervalId = d(function() {
                    m.notify(p++), s > 0 && p >= s && (m.resolve(p), f(g.$$intervalId), delete a[g.$$intervalId]), h || e.$apply()
                }, o), a[g.$$intervalId] = m, g
            }
            var a = {};
            return i.cancel = function(e) {
                return e && e.$$intervalId in a ? (a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0) : !1
            }, i
        }]
    }

    function Lt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = ne(t[n]);
        return t.join("/")
    }

    function Mt(e, t) {
        var n = xn(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = p(n.port) || Bi[n.protocol] || null
    }

    function Ot(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var r = xn(e);
        t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = ee(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function Nt(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function Rt(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function _t(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function Dt(e) {
        return e.substr(0, Rt(e).lastIndexOf("/") + 1)
    }

    function Ut(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function jt(e, t, r) {
        this.$$html5 = !0, r = r || "", Mt(e, this), this.$$parse = function(e) {
            var n = Nt(t, e);
            if (!k(n)) throw Fi("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
            Ot(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = te(this.$$search),
                n = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = Lt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(i, a) {
            if (a && "#" === a[0]) return this.hash(a.slice(1)), !0;
            var o, s, l;
            return (o = Nt(e, i)) !== n ? (s = o, l = (o = Nt(r, o)) !== n ? t + (Nt("/", o) || o) : e + s) : (o = Nt(t, i)) !== n ? l = t + o : t == i + "/" && (l = t), l && this.$$parse(l), !!l
        }
    }

    function qt(e, t, n) {
        Mt(e, this), this.$$parse = function(r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }
            var a, o = Nt(e, r) || Nt(t, r);
            $(o) || "#" !== o.charAt(0) ? this.$$html5 ? a = o : (a = "", $(o) && (e = r, this.replace())) : (a = Nt(n, o), $(a) && (a = o)), Ot(a, this), this.$$path = i(this.$$path, a, e), this.$$compose()
        }, this.$$compose = function() {
            var t = te(this.$$search),
                r = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = Lt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function(t, n) {
            return Rt(e) == Rt(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function Vt(e, t, n) {
        this.$$html5 = !0, qt.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var a, o;
            return e == Rt(r) ? a = r : (o = Nt(t, r)) ? a = e + n + o : t === r + "/" && (a = t), a && this.$$parse(a), !!a
        }, this.$$compose = function() {
            var t = te(this.$$search),
                r = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = Lt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
        }
    }

    function Bt(e) {
        return function() {
            return this[e]
        }
    }

    function Ft(e, t) {
        return function(n) {
            return $(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Ht() {
        var e = "",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return O(e) ? (t.enabled = e, this) : w(e) ? (O(e.enabled) && (t.enabled = e.enabled), O(e.requireBase) && (t.requireBase = e.requireBase), O(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, a, o) {
            function s(e, t, n) {
                var i = u.url(),
                    a = u.$$state;
                try {
                    r.url(e, t, n), u.$$state = r.state()
                } catch (o) {
                    throw u.url(i), u.$$state = a, o
                }
            }

            function l(e, t) {
                n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
            }
            var u, c, d, f = r.baseHref(),
                p = r.url();
            if (t.enabled) {
                if (!f && t.requireBase) throw Fi("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                d = Ut(p) + (f || "/"), c = i.history ? jt : Vt
            } else d = Rt(p), c = qt;
            var h = Dt(d);
            u = new c(d, h, "#" + e), u.$$parseLinkUrl(p, p), u.$$state = r.state();
            var m = /^\s*(javascript|mailto):/i;
            a.on("click", function(e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var i = xr(e.target);
                        "a" !== U(i[0]);)
                        if (i[0] === a[0] || !(i = i.parent())[0]) return;
                    var s = i.prop("href"),
                        l = i.attr("href") || i.attr("xlink:href");
                    w(s) && "[object SVGAnimatedString]" === s.toString() && (s = xn(s.animVal).href), m.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(s, l) && (e.preventDefault(), u.absUrl() != r.url() && (n.$apply(), o.angular["ff-684208-preventDefault"] = !0))
                }
            }), _t(u.absUrl()) != _t(p) && r.url(u.absUrl(), !0);
            var g = !0;
            return r.onUrlChange(function(e, t) {
                return $(Nt(h, e)) ? void(o.location.href = e) : (n.$evalAsync(function() {
                    var r, i = u.absUrl(),
                        a = u.$$state;
                    u.$$parse(e), u.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, a).defaultPrevented, u.absUrl() === e && (r ? (u.$$parse(i), u.$$state = a, s(i, !1, a)) : (g = !1, l(i, a)))
                }), void(n.$$phase || n.$digest()))
            }), n.$watch(function() {
                var e = _t(r.url()),
                    t = _t(u.absUrl()),
                    a = r.state(),
                    o = u.$$replace,
                    c = e !== t || u.$$html5 && i.history && a !== u.$$state;
                (g || c) && (g = !1, n.$evalAsync(function() {
                    var t = u.absUrl(),
                        r = n.$broadcast("$locationChangeStart", t, e, u.$$state, a).defaultPrevented;
                    u.absUrl() === t && (r ? (u.$$parse(e), u.$$state = a) : (c && s(t, o, a === u.$$state ? null : u.$$state), l(e, a)))
                })), u.$$replace = !1
            }), u
        }]
    }

    function Yt() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {},
                    i = t[e] || t.log || m,
                    o = !1;
                try {
                    o = !!i.apply
                } catch (s) {}
                return o ? function() {
                    var e = [];
                    return a(arguments, function(t) {
                        e.push(r(t))
                    }), i.apply(t, e)
                } : function(e, t) {
                    i(e, null == t ? "" : t)
                }
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function zt(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Yi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function Wt(e, t) {
        if (e) {
            if (e.constructor === e) throw Yi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.window === e) throw Yi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Yi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw Yi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function Xt(e, t) {
        if (e) {
            if (e.constructor === e) throw Yi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === zi || e === Wi || e === Xi) throw Yi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function Qt(e, t) {
        return "undefined" != typeof e ? e : t
    }

    function Gt(e, t) {
        return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
    }

    function Kt(e, t) {
        var n = e(t);
        return !n.$stateful
    }

    function Jt(e, t) {
        var n, r;
        switch (e.type) {
            case Ji.Program:
                n = !0, a(e.body, function(e) {
                    Jt(e.expression, t), n = n && e.expression.constant
                }), e.constant = n;
                break;
            case Ji.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case Ji.UnaryExpression:
                Jt(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case Ji.BinaryExpression:
                Jt(e.left, t), Jt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case Ji.LogicalExpression:
                Jt(e.left, t), Jt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case Ji.ConditionalExpression:
                Jt(e.test, t), Jt(e.alternate, t), Jt(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case Ji.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case Ji.MemberExpression:
                Jt(e.object, t), e.computed && Jt(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                break;
            case Ji.CallExpression:
                n = e.filter ? Kt(t, e.callee.name) : !1, r = [], a(e.arguments, function(e) {
                    Jt(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = e.filter && Kt(t, e.callee.name) ? r : [e];
                break;
            case Ji.AssignmentExpression:
                Jt(e.left, t), Jt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case Ji.ArrayExpression:
                n = !0, r = [], a(e.elements, function(e) {
                    Jt(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case Ji.ObjectExpression:
                n = !0, r = [], a(e.properties, function(e) {
                    Jt(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case Ji.ThisExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function Zt(e) {
        if (1 == e.length) {
            var t = e[0].expression,
                r = t.toWatch;
            return 1 !== r.length ? r : r[0] !== t ? r : n
        }
    }

    function en(e) {
        return e.type === Ji.Identifier || e.type === Ji.MemberExpression
    }

    function tn(e) {
        return 1 === e.body.length && en(e.body[0].expression) ? {
            type: Ji.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: Ji.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function nn(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Ji.Literal || e.body[0].expression.type === Ji.ArrayExpression || e.body[0].expression.type === Ji.ObjectExpression)
    }

    function rn(e) {
        return e.constant
    }

    function an(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function on(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function sn(e) {
        return "constructor" == e
    }

    function ln(e) {
        return C(e.valueOf) ? e.valueOf() : ea.call(e)
    }

    function un() {
        var e = ge(),
            t = ge();
        this.$get = ["$filter", function(r) {
            function i(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = ln(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function o(e, t, r, a, o) {
                var s, l = a.inputs;
                if (1 === l.length) {
                    var u = i;
                    return l = l[0], e.$watch(function(e) {
                        var t = l(e);
                        return i(t, u) || (s = a(e, n, n, [t]), u = t && ln(t)), s
                    }, t, r, o)
                }
                for (var c = [], d = [], f = 0, p = l.length; p > f; f++) c[f] = i, d[f] = null;
                return e.$watch(function(e) {
                    for (var t = !1, r = 0, o = l.length; o > r; r++) {
                        var u = l[r](e);
                        (t || (t = !i(u, c[r]))) && (d[r] = u, c[r] = u && ln(u))
                    }
                    return t && (s = a(e, n, n, d)), s
                }, t, r, o)
            }

            function s(e, t, n, r) {
                var i, a;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    a = e, C(t) && t.apply(this, arguments), b(e) && r.$$postDigest(function() {
                        b(a) && i()
                    })
                }, n)
            }

            function l(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return a(e, function(e) {
                        b(e) || (t = !1)
                    }), t
                }
                var o, s;
                return o = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    s = e, C(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
                        i(s) && o()
                    })
                }, n)
            }

            function u(e, t, n, r) {
                var i;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    C(t) && t.apply(this, arguments), i()
                }, n)
            }

            function c(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = n !== l && n !== s,
                    i = r ? function(n, r, i, a) {
                        var o = e(n, r, i, a);
                        return t(o, n, r)
                    } : function(n, r, i, a) {
                        var o = e(n, r, i, a),
                            s = t(o, n, r);
                        return b(o) ? s : o
                    };
                return e.$$watchDelegate && e.$$watchDelegate !== o ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = o, i.inputs = e.inputs ? e.inputs : [e]), i
            }
            var d = qr().noUnsafeEval,
                f = {
                    csp: d,
                    expensiveChecks: !1
                },
                p = {
                    csp: d,
                    expensiveChecks: !0
                };
            return function(n, i, a) {
                var d, h, g;
                switch (typeof n) {
                    case "string":
                        n = n.trim(), g = n;
                        var v = a ? t : e;
                        if (d = v[g], !d) {
                            ":" === n.charAt(0) && ":" === n.charAt(1) && (h = !0, n = n.substring(2));
                            var y = a ? p : f,
                                $ = new Ki(y),
                                b = new Zi($, r, y);
                            d = b.parse(n), d.constant ? d.$$watchDelegate = u : h ? d.$$watchDelegate = d.literal ? l : s : d.inputs && (d.$$watchDelegate = o), v[g] = d
                        }
                        return c(d, i);
                    case "function":
                        return c(n, i);
                    default:
                        return m
                }
            }
        }]
    }

    function cn() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return fn(function(t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function dn() {
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return fn(function(t) {
                e.defer(t)
            }, t)
        }]
    }

    function fn(e, t) {
        function i(e, t, n) {
            function r(t) {
                return function(n) {
                    i || (i = !0, t.call(e, n))
                }
            }
            var i = !1;
            return [r(t), r(n)]
        }

        function o() {
            this.$$state = {
                status: 0
            }
        }

        function s(e, t) {
            return function(n) {
                t.call(e, n)
            }
        }

        function l(e) {
            var r, i, a;
            a = e.pending, e.processScheduled = !1, e.pending = n;
            for (var o = 0, s = a.length; s > o; ++o) {
                i = a[o][0], r = a[o][e.status];
                try {
                    C(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                } catch (l) {
                    i.reject(l), t(l)
                }
            }
        }

        function u(t) {
            !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
                l(t)
            }))
        }

        function c() {
            this.promise = new o, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function f(e) {
            var t = new c,
                n = 0,
                r = _r(e) ? [] : {};
            return a(e, function(e, i) {
                n++, y(e).then(function(e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function(e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }
        var p = r("$q", TypeError),
            h = function() {
                return new c
            };
        d(o.prototype, {
            then: function(e, t, n) {
                if ($(e) && $(t) && $(n)) return this;
                var r = new c;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && u(this.$$state), r.promise
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return v(t, !0, e)
                }, function(t) {
                    return v(t, !1, e)
                }, t)
            }
        }), d(c.prototype, {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(p("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
            },
            $$resolve: function(e) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (w(e) || C(e)) && (n = e && e.then), C(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
                } catch (a) {
                    r[1](a), t(a)
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function(e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && e(function() {
                    for (var e, i, a = 0, o = r.length; o > a; a++) {
                        i = r[a][0], e = r[a][3];
                        try {
                            i.notify(C(e) ? e(n) : n)
                        } catch (s) {
                            t(s)
                        }
                    }
                })
            }
        });
        var m = function(e) {
                var t = new c;
                return t.reject(e), t.promise
            },
            g = function(e, t) {
                var n = new c;
                return t ? n.resolve(e) : n.reject(e), n.promise
            },
            v = function(e, t, n) {
                var r = null;
                try {
                    C(n) && (r = n())
                } catch (i) {
                    return g(i, !1)
                }
                return N(r) ? r.then(function() {
                    return g(e, t)
                }, function(e) {
                    return g(e, !1)
                }) : g(e, t)
            },
            y = function(e, t, n, r) {
                var i = new c;
                return i.resolve(e), i.promise.then(t, n, r)
            },
            b = y,
            S = function k(e) {
                function t(e) {
                    r.resolve(e)
                }

                function n(e) {
                    r.reject(e)
                }
                if (!C(e)) throw p("norslvr", "Expected resolverFn, got '{0}'", e);
                if (!(this instanceof k)) return new k(e);
                var r = new c;
                return e(t, n), r.promise
            };
        return S.defer = h, S.reject = m, S.when = y, S.resolve = b, S.all = f, S
    }

    function pn() {
        this.$get = ["$window", "$timeout", function(e, t) {
            function n() {
                for (var e = 0; e < c.length; e++) {
                    var t = c[e];
                    t && (c[e] = null, t())
                }
                u = c.length = 0
            }

            function r(e) {
                var t = c.length;
                return u++, c.push(e), 0 === t && (l = s(n)),
                    function() {
                        t >= 0 && (c[t] = null, t = null, 0 === --u && l && (l(), l = null, c.length = 0))
                    }
            }
            var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                a = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                o = !!i,
                s = o ? function(e) {
                    var t = i(e);
                    return function() {
                        a(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            r.supported = o;
            var l, u = 0,
                c = [];
            return r
        }]
    }

    function hn() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = l(), this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var t = 10,
            n = r("$rootScope"),
            o = null,
            s = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, c, d) {
            function f(e) {
                e.currentScope.$$destroyed = !0
            }

            function p() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function h(e) {
                if (x.$$phase) throw n("inprog", "{0} already in progress", x.$$phase);
                x.$$phase = e
            }

            function g() {
                x.$$phase = null
            }

            function v(e, t) {
                do e.$$watchersCount += t; while (e = e.$parent)
            }

            function y(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function b() {}

            function S() {
                for (; E.length;) try {
                    E.shift()()
                } catch (e) {
                    u(e)
                }
                s = null
            }

            function k() {
                null === s && (s = d.defer(function() {
                    x.$apply(S)
                }))
            }
            p.prototype = {
                constructor: p,
                $new: function(t, n) {
                    var r;
                    return n = n || this, t ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", f), r
                },
                $watch: function(e, t, n, r) {
                    var i = c(e);
                    if (i.$$watchDelegate) return i.$$watchDelegate(this, t, n, i, e);
                    var a = this,
                        s = a.$$watchers,
                        l = {
                            fn: t,
                            last: b,
                            get: i,
                            exp: r || e,
                            eq: !!n
                        };
                    return o = null, C(t) || (l.fn = m), s || (s = a.$$watchers = []), s.unshift(l), v(this, 1),
                        function() {
                            j(s, l) >= 0 && v(a, -1), o = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        l = !1, u ? (u = !1, t(i, i, s)) : t(i, r, s)
                    }
                    var r = new Array(e.length),
                        i = new Array(e.length),
                        o = [],
                        s = this,
                        l = !1,
                        u = !0;
                    if (!e.length) {
                        var c = !0;
                        return s.$evalAsync(function() {
                                c && t(i, i, s)
                            }),
                            function() {
                                c = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, a) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, a)
                    }) : (a(e, function(e, t) {
                        var a = s.$watch(e, function(e, a) {
                            i[t] = e, r[t] = a, l || (l = !0, s.$evalAsync(n))
                        });
                        o.push(a)
                    }), function() {
                        for (; o.length;) o.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        a = e;
                        var t, n, r, s, l;
                        if (!$(a)) {
                            if (w(a))
                                if (i(a)) {
                                    o !== p && (o = p, g = o.length = 0, d++), t = a.length, g !== t && (d++, o.length = g = t);
                                    for (var u = 0; t > u; u++) l = o[u], s = a[u], r = l !== l && s !== s, r || l === s || (d++, o[u] = s)
                                } else {
                                    o !== h && (o = h = {}, g = 0, d++), t = 0;
                                    for (n in a) a.hasOwnProperty(n) && (t++, s = a[n], l = o[n], n in o ? (r = l !== l && s !== s, r || l === s || (d++, o[n] = s)) : (g++, o[n] = s, d++));
                                    if (g > t) {
                                        d++;
                                        for (n in o) a.hasOwnProperty(n) || (g--, delete o[n])
                                    }
                                } else o !== a && (o = a, d++);
                            return d
                        }
                    }

                    function r() {
                        if (m ? (m = !1, t(a, a, l)) : t(a, s, l), u)
                            if (w(a))
                                if (i(a)) {
                                    s = new Array(a.length);
                                    for (var e = 0; e < a.length; e++) s[e] = a[e]
                                } else {
                                    s = {};
                                    for (var n in a) $r.call(a, n) && (s[n] = a[n])
                                } else s = a
                    }
                    n.$stateful = !0;
                    var a, o, s, l = this,
                        u = t.length > 1,
                        d = 0,
                        f = c(e, n),
                        p = [],
                        h = {},
                        m = !0,
                        g = 0;
                    return this.$watch(f, r)
                },
                $digest: function() {
                    var e, r, i, a, l, c, f, p, m, v, y = t,
                        $ = this,
                        w = [];
                    h("$digest"), d.$$checkUrlChange(), this === x && null !== s && (d.defer.cancel(s), S()), o = null;
                    do {
                        for (c = !1, p = $; T.length;) {
                            try {
                                v = T.shift(), v.scope.$eval(v.expression, v.locals)
                            } catch (k) {
                                u(k)
                            }
                            o = null
                        }
                        e: do {
                            if (a = p.$$watchers)
                                for (l = a.length; l--;) try {
                                    if (e = a[l])
                                        if ((r = e.get(p)) === (i = e.last) || (e.eq ? B(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                            if (e === o) {
                                                c = !1;
                                                break e
                                            }
                                        } else c = !0, o = e, e.last = e.eq ? q(r, null) : r, e.fn(r, i === b ? r : i, p), 5 > y && (m = 4 - y, w[m] || (w[m] = []), w[m].push({
                                            msg: C(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: r,
                                            oldVal: i
                                        }))
                                } catch (k) {
                                    u(k)
                                }
                            if (!(f = p.$$watchersCount && p.$$childHead || p !== $ && p.$$nextSibling))
                                for (; p !== $ && !(f = p.$$nextSibling);) p = p.$parent
                        } while (p = f);
                        if ((c || T.length) && !y--) throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, w)
                    } while (c || T.length);
                    for (g(); P.length;) try {
                        P.shift()()
                    } catch (k) {
                        u(k)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === x && d.$$applicationDestroyed(), v(this, -this.$$watchersCount);
                        for (var t in this.$$listenerCount) y(this, this.$$listenerCount[t], t);
                        e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = m, this.$on = this.$watch = this.$watchGroup = function() {
                            return m
                        }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                    }
                },
                $eval: function(e, t) {
                    return c(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    x.$$phase || T.length || d.defer(function() {
                        T.length && x.$digest()
                    }), T.push({
                        scope: this,
                        expression: e,
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    P.push(e)
                },
                $apply: function(e) {
                    try {
                        h("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            g()
                        }
                    } catch (t) {
                        u(t)
                    } finally {
                        try {
                            x.$digest()
                        } catch (t) {
                            throw u(t), t
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && E.push(t), k()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (n[r] = null, y(i, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, r, i, a = [],
                        o = this,
                        s = !1,
                        l = {
                            name: e,
                            targetScope: o,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = F([l], arguments, 1);
                    do {
                        for (n = o.$$listeners[e] || a, l.currentScope = o, r = 0, i = n.length; i > r; r++)
                            if (n[r]) try {
                                n[r].apply(null, c)
                            } catch (d) {
                                u(d)
                            } else n.splice(r, 1), r--, i--;
                        if (s) return l.currentScope = null, l;
                        o = o.$parent
                    } while (o);
                    return l.currentScope = null, l
                },
                $broadcast: function(e, t) {
                    var n = this,
                        r = n,
                        i = n,
                        a = {
                            name: e,
                            targetScope: n,
                            preventDefault: function() {
                                a.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!n.$$listenerCount[e]) return a;
                    for (var o, s, l, c = F([a], arguments, 1); r = i;) {
                        for (a.currentScope = r, o = r.$$listeners[e] || [], s = 0, l = o.length; l > s; s++)
                            if (o[s]) try {
                                o[s].apply(null, c)
                            } catch (d) {
                                u(d)
                            } else o.splice(s, 1), s--, l--;
                        if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
                            for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
                    }
                    return a.currentScope = null, a
                }
            };
            var x = new p,
                T = x.$$asyncQueue = [],
                P = x.$$postDigestQueue = [],
                E = x.$$applyAsyncQueue = [];
            return x
        }]
    }

    function mn() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var i, a = r ? t : e;
                return i = xn(n).href, "" === i || i.match(a) ? n : "unsafe:" + i
            }
        }
    }

    function gn(e) {
        if ("self" === e) return e;
        if (k(e)) {
            if (e.indexOf("***") > -1) throw ta("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = jr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (P(e)) return new RegExp("^" + e.source + "$");
        throw ta("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function vn(e) {
        var t = [];
        return b(e) && a(e, function(e) {
            t.push(gn(e))
        }), t
    }

    function yn() {
        this.SCE_CONTEXTS = na;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = vn(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = vn(e)), t
        }, this.$get = ["$injector", function(r) {
            function i(e, t) {
                return "self" === e ? Tn(t) : !!e.exec(t.href)
            }

            function a(n) {
                var r, a, o = xn(n.toString()),
                    s = !1;
                for (r = 0, a = e.length; a > r; r++)
                    if (i(e[r], o)) {
                        s = !0;
                        break
                    }
                if (s)
                    for (r = 0, a = t.length; a > r; r++)
                        if (i(t[r], o)) {
                            s = !1;
                            break
                        }
                return s
            }

            function o(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function s(e, t) {
                var r = f.hasOwnProperty(e) ? f[e] : null;
                if (!r) throw ta("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || t === n || "" === t) return t;
                if ("string" != typeof t) throw ta("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new r(t)
            }

            function l(e) {
                return e instanceof d ? e.$$unwrapTrustedValue() : e
            }

            function u(e, t) {
                if (null === t || t === n || "" === t) return t;
                var r = f.hasOwnProperty(e) ? f[e] : null;
                if (r && t instanceof r) return t.$$unwrapTrustedValue();
                if (e === na.RESOURCE_URL) {
                    if (a(t)) return t;
                    throw ta("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === na.HTML) return c(t);
                throw ta("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var c = function(e) {
                throw ta("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (c = r.get("$sanitize"));
            var d = o(),
                f = {};
            return f[na.HTML] = o(d), f[na.CSS] = o(d), f[na.URL] = o(d), f[na.JS] = o(d), f[na.RESOURCE_URL] = o(f[na.URL]), {
                trustAs: s,
                getTrusted: u,
                valueOf: l
            }
        }]
    }

    function $n() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > kr) throw ta("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = V(na);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = g), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs,
                o = r.getTrusted,
                s = r.trustAs;
            return a(na, function(e, t) {
                var n = yr(t);
                r[Se("parse_as_" + n)] = function(t) {
                    return i(e, t)
                }, r[Se("get_trusted_" + n)] = function(t) {
                    return o(e, t)
                }, r[Se("trust_as_" + n)] = function(t) {
                    return s(e, t)
                }
            }), r
        }]
    }

    function bn() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, r, i = {},
                a = p((/android (\d+)/.exec(yr((e.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                l = /^(Moz|webkit|ms)(?=[A-Z])/,
                u = s.body && s.body.style,
                c = !1,
                d = !1;
            if (u) {
                for (var f in u)
                    if (r = l.exec(f)) {
                        n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in u && "webkit"), c = !!("transition" in u || n + "Transition" in u), d = !!("animation" in u || n + "Animation" in u), !a || c && d || (c = k(u.webkitTransition), d = k(u.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > a || o),
                hasEvent: function(e) {
                    if ("input" === e && 11 >= kr) return !1;
                    if ($(i[e])) {
                        var t = s.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                },
                csp: qr(),
                vendorPrefix: n,
                transitions: c,
                animations: d,
                android: a
            }
        }]
    }

    function wn() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(e, t, n, r) {
            function i(a, o) {
                function s(e) {
                    if (!o) throw Ei("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
                    return n.reject(e)
                }
                i.totalPendingRequests++, k(a) && e.get(a) || (a = r.getTrustedResourceUrl(a));
                var l = t.defaults && t.defaults.transformResponse;
                _r(l) ? l = l.filter(function(e) {
                    return e !== $t
                }) : l === $t && (l = null);
                var u = {
                    cache: e,
                    transformResponse: l
                };
                return t.get(a, u)["finally"](function() {
                    i.totalPendingRequests--
                }).then(function(t) {
                    return e.put(a, t.data), t.data
                }, s)
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function Sn() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            var r = {};
            return r.findBindings = function(e, t, n) {
                var r = e.getElementsByClassName("ng-binding"),
                    i = [];
                return a(r, function(e) {
                    var r = Or.element(e).data("$binding");
                    r && a(r, function(r) {
                        if (n) {
                            var a = new RegExp("(^|\\s)" + jr(t) + "(\\s|\\||$)");
                            a.test(r) && i.push(e)
                        } else -1 != r.indexOf(t) && i.push(e)
                    })
                }), i
            }, r.findModels = function(e, t, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var a = n ? "=" : "*=",
                        o = "[" + r[i] + "model" + a + '"' + t + '"]',
                        s = e.querySelectorAll(o);
                    if (s.length) return s
                }
            }, r.getLocation = function() {
                return n.url()
            }, r.setLocation = function(t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function(e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function kn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function a(a, s, l) {
                C(a) || (l = s, s = a, a = m);
                var u, c = H(arguments, 3),
                    d = b(l) && !l,
                    f = (d ? r : n).defer(),
                    p = f.promise;
                return u = t.defer(function() {
                    try {
                        f.resolve(a.apply(null, c))
                    } catch (t) {
                        f.reject(t), i(t)
                    } finally {
                        delete o[p.$$timeoutId]
                    }
                    d || e.$apply()
                }, s), p.$$timeoutId = u, o[u] = f, p
            }
            var o = {};
            return a.cancel = function(e) {
                return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, a
        }]
    }

    function xn(e) {
        var t = e;
        return kr && (ra.setAttribute("href", t), t = ra.href), ra.setAttribute("href", t), {
            href: ra.href,
            protocol: ra.protocol ? ra.protocol.replace(/:$/, "") : "",
            host: ra.host,
            search: ra.search ? ra.search.replace(/^\?/, "") : "",
            hash: ra.hash ? ra.hash.replace(/^#/, "") : "",
            hostname: ra.hostname,
            port: ra.port,
            pathname: "/" === ra.pathname.charAt(0) ? ra.pathname : "/" + ra.pathname
        }
    }

    function Tn(e) {
        var t = k(e) ? xn(e) : e;
        return t.protocol === ia.protocol && t.host === ia.host
    }

    function Cn() {
        this.$get = v(e)
    }

    function Pn(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var r = e[0] || {},
            i = {},
            a = "";
        return function() {
            var e, o, s, l, u, c = r.cookie || "";
            if (c !== a)
                for (a = c, e = a.split("; "), i = {}, s = 0; s < e.length; s++) o = e[s], l = o.indexOf("="), l > 0 && (u = t(o.substring(0, l)), i[u] === n && (i[u] = t(o.substring(l + 1))));
            return i
        }
    }

    function En() {
        this.$get = Pn
    }

    function An(e) {
        function t(r, i) {
            if (w(r)) {
                var o = {};
                return a(r, function(e, n) {
                    o[n] = t(n, e)
                }), o
            }
            return e.factory(r + n, i)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", Nn), t("date", Wn), t("filter", In), t("json", Xn), t("limitTo", Qn), t("lowercase", ua), t("number", Rn), t("orderBy", Gn), t("uppercase", ca)
    }

    function In() {
        return function(e, t, n) {
            if (!i(e)) {
                if (null == e) return e;
                throw r("filter")("notarray", "Expected array but received: {0}", e)
            }
            var a, o, s = On(t);
            switch (s) {
                case "function":
                    a = t;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    o = !0;
                case "object":
                    a = Ln(t, n, o);
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, a)
        }
    }

    function Ln(e, t, n) {
        var r, i = w(e) && "$" in e;
        return t === !0 ? t = B : C(t) || (t = function(e, t) {
            return $(e) ? !1 : null === e || null === t ? e === t : w(t) || w(e) && !y(e) ? !1 : (e = yr("" + e), t = yr("" + t), -1 !== e.indexOf(t))
        }), r = function(r) {
            return i && !w(r) ? Mn(r, e.$, t, !1) : Mn(r, e, t, n)
        }
    }

    function Mn(e, t, n, r, i) {
        var a = On(e),
            o = On(t);
        if ("string" === o && "!" === t.charAt(0)) return !Mn(e, t.substring(1), n, r);
        if (_r(e)) return e.some(function(e) {
            return Mn(e, t, n, r)
        });
        switch (a) {
            case "object":
                var s;
                if (r) {
                    for (s in e)
                        if ("$" !== s.charAt(0) && Mn(e[s], t, n, !0)) return !0;
                    return i ? !1 : Mn(e, t, n, !1)
                }
                if ("object" === o) {
                    for (s in t) {
                        var l = t[s];
                        if (!C(l) && !$(l)) {
                            var u = "$" === s,
                                c = u ? e : e[s];
                            if (!Mn(c, l, n, u, u)) return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function On(e) {
        return null === e ? "null" : typeof e
    }

    function Nn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return $(n) && (n = t.CURRENCY_SYM), $(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : _n(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function Rn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : _n(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function _n(e, t, n, r, i) {
        if (w(e)) return "";
        var a = 0 > e;
        e = Math.abs(e);
        var o = e === 1 / 0;
        if (!o && !isFinite(e)) return "";
        var s = e + "",
            l = "",
            u = !1,
            c = [];
        if (o && (l = "∞"), !o && -1 !== s.indexOf("e")) {
            var d = s.match(/([\d\.]+)e(-?)(\d+)/);
            d && "-" == d[2] && d[3] > i + 1 ? e = 0 : (l = s, u = !0)
        }
        if (o || u) i > 0 && 1 > e && (l = e.toFixed(i), e = parseFloat(l));
        else {
            var f = (s.split(aa)[1] || "").length;
            $(i) && (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
            var p = ("" + e).split(aa),
                h = p[0];
            p = p[1] || "";
            var m, g = 0,
                v = t.lgSize,
                y = t.gSize;
            if (h.length >= v + y)
                for (g = h.length - v, m = 0; g > m; m++)(g - m) % y === 0 && 0 !== m && (l += n), l += h.charAt(m);
            for (m = g; m < h.length; m++)(h.length - m) % v === 0 && 0 !== m && (l += n), l += h.charAt(m);
            for (; p.length < i;) p += "0";
            i && "0" !== i && (l += r + p.substr(0, i))
        }
        return 0 === e && (a = !1), c.push(a ? t.negPre : t.posPre, l, a ? t.negSuf : t.posSuf), c.join("")
    }

    function Dn(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function Un(e, t, n, r) {
        return n = n || 0,
            function(i) {
                var a = i["get" + e]();
                return (n > 0 || a > -n) && (a += n), 0 === a && -12 == n && (a = 12), Dn(a, t, r)
            }
    }

    function jn(e, t) {
        return function(n, r) {
            var i = n["get" + e](),
                a = br(t ? "SHORT" + e : e);
            return r[a][i]
        }
    }

    function qn(e, t, n) {
        var r = -1 * n,
            i = r >= 0 ? "+" : "";
        return i += Dn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Dn(Math.abs(r % 60), 2)
    }

    function Vn(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function Bn(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function Fn(e) {
        return function(t) {
            var n = Vn(t.getFullYear()),
                r = Bn(t),
                i = +r - +n,
                a = 1 + Math.round(i / 6048e5);
            return Dn(a, e)
        }
    }

    function Hn(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function Yn(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function zn(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function Wn(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0),
                    i = 0,
                    a = 0,
                    o = t[8] ? r.setUTCFullYear : r.setFullYear,
                    s = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = p(t[9] + t[10]), a = p(t[9] + t[11])), o.call(r, p(t[1]), p(t[2]) - 1, p(t[3]));
                var l = p(t[4] || 0) - i,
                    u = p(t[5] || 0) - a,
                    c = p(t[6] || 0),
                    d = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return s.call(r, l, u, c, d), r
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var o, s, l = "",
                u = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, k(n) && (n = la.test(n) ? p(n) : t(n)), x(n) && (n = new Date(n)), !T(n) || !isFinite(n.getTime())) return n;
            for (; r;) s = sa.exec(r), s ? (u = F(u, s, 1), r = u.pop()) : (u.push(r), r = null);
            var c = n.getTimezoneOffset();
            return i && (c = Q(i, n.getTimezoneOffset()), n = K(n, i, !0)), a(u, function(t) {
                o = oa[t], l += o ? o(n, e.DATETIME_FORMATS, c) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), l
        }
    }

    function Xn() {
        return function(e, t) {
            return $(t) && (t = 2), W(e, t)
        }
    }

    function Qn() {
        return function(e, t, n) {
            return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t), isNaN(t) ? e : (x(e) && (e = e.toString()), _r(e) || k(e) ? (n = !n || isNaN(n) ? 0 : p(n), n = 0 > n && n >= -e.length ? e.length + n : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
        }
    }

    function Gn(e) {
        function t(t, n) {
            return n = n ? -1 : 1, t.map(function(t) {
                var r = 1,
                    i = g;
                if (C(t)) i = t;
                else if (k(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
                    var a = i();
                    i = function(e) {
                        return e[a]
                    }
                }
                return {
                    get: i,
                    descending: r * n
                }
            })
        }

        function n(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function r(e, t) {
            return "function" == typeof e.valueOf && (e = e.valueOf(), n(e)) ? e : y(e) && (e = e.toString(), n(e)) ? e : t
        }

        function a(e, t) {
            var n = typeof e;
            return null === e ? (n = "string", e = "null") : "string" === n ? e = e.toLowerCase() : "object" === n && (e = r(e, t)), {
                value: e,
                type: n
            }
        }

        function o(e, t) {
            var n = 0;
            return e.type === t.type ? e.value !== t.value && (n = e.value < t.value ? -1 : 1) : n = e.type < t.type ? -1 : 1, n
        }
        return function(e, n, r) {
            function s(e, t) {
                return {
                    value: e,
                    predicateValues: u.map(function(n) {
                        return a(n.get(e), t)
                    })
                }
            }

            function l(e, t) {
                for (var n = 0, r = 0, i = u.length; i > r && !(n = o(e.predicateValues[r], t.predicateValues[r]) * u[r].descending); ++r);
                return n
            }
            if (!i(e)) return e;
            _r(n) || (n = [n]), 0 === n.length && (n = ["+"]);
            var u = t(n, r);
            u.push({
                get: function() {
                    return {}
                },
                descending: r ? -1 : 1
            });
            var c = Array.prototype.map.call(e, s);
            return c.sort(l), e = c.map(function(e) {
                return e.value
            })
        }
    }

    function Kn(e) {
        return C(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", v(e)
    }

    function Jn(e, t) {
        e.$name = t
    }

    function Zn(e, t, r, i, o) {
        var s = this,
            l = [],
            u = s.$$parentForm = e.parent().controller("form") || pa;
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = o(t.name || t.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, u.$addControl(s), s.$rollbackViewValue = function() {
            a(l, function(e) {
                e.$rollbackViewValue()
            })
        }, s.$commitViewValue = function() {
            a(l, function(e) {
                e.$commitViewValue()
            })
        }, s.$addControl = function(e) {
            pe(e.$name, "input"), l.push(e), e.$name && (s[e.$name] = e)
        }, s.$$renameControl = function(e, t) {
            var n = e.$name;
            s[n] === e && delete s[n], s[t] = e, e.$name = t
        }, s.$removeControl = function(e) {
            e.$name && s[e.$name] === e && delete s[e.$name], a(s.$pending, function(t, n) {
                s.$setValidity(n, null, e)
            }), a(s.$error, function(t, n) {
                s.$setValidity(n, null, e)
            }), a(s.$$success, function(t, n) {
                s.$setValidity(n, null, e)
            }), j(l, e)
        }, hr({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var r = e[t];
                if (r) {
                    var i = r.indexOf(n); - 1 === i && r.push(n)
                } else e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (j(r, n), 0 === r.length && delete e[t])
            },
            parentForm: u,
            $animate: i
        }), s.$setDirty = function() {
            i.removeClass(e, Qa), i.addClass(e, Ga), s.$dirty = !0, s.$pristine = !1, u.$setDirty()
        }, s.$setPristine = function() {
            i.setClass(e, Qa, Ga + " " + ha), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, a(l, function(e) {
                e.$setPristine()
            })
        }, s.$setUntouched = function() {
            a(l, function(e) {
                e.$setUntouched()
            })
        }, s.$setSubmitted = function() {
            i.addClass(e, ha), s.$submitted = !0, u.$setSubmitted()
        }
    }

    function er(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function tr(e, t, n, r, i, a) {
        nr(e, t, n, r, i, a), er(r)
    }

    function nr(e, t, n, r, i, a) {
        var o = yr(t[0].type);
        if (!i.android) {
            var s = !1;
            t.on("compositionstart", function(e) {
                s = !0
            }), t.on("compositionend", function() {
                s = !1, l()
            })
        }
        var l = function(e) {
            if (u && (a.defer.cancel(u), u = null), !s) {
                var i = t.val(),
                    l = e && e.type;
                "password" === o || n.ngTrim && "false" === n.ngTrim || (i = Ur(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, l)
            }
        };
        if (i.hasEvent("input")) t.on("input", l);
        else {
            var u, c = function(e, t, n) {
                u || (u = a.defer(function() {
                    u = null, t && t.value === n || l(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut", c)
        }
        t.on("change", l), r.$render = function() {
            var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function rr(e, t) {
        if (T(e)) return e;
        if (k(e)) {
            xa.lastIndex = 0;
            var n = xa.exec(e);
            if (n) {
                var r = +n[1],
                    i = +n[2],
                    a = 0,
                    o = 0,
                    s = 0,
                    l = 0,
                    u = Vn(r),
                    c = 7 * (i - 1);
                return t && (a = t.getHours(), o = t.getMinutes(), s = t.getSeconds(), l = t.getMilliseconds()), new Date(r, 0, u.getDate() + c, a, o, s, l)
            }
        }
        return NaN
    }

    function ir(e, t) {
        return function(n, r) {
            var i, o;
            if (T(n)) return n;
            if (k(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), ya.test(n)) return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), o = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, a(i, function(e, n) {
                    n < t.length && (o[t[n]] = +e)
                }), new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0)
            }
            return NaN
        }
    }

    function ar(e, t, r, i) {
        return function(a, o, s, l, u, c, d) {
            function f(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function p(e) {
                return b(e) ? T(e) ? e : r(e) : n
            }
            or(a, o, s, l), nr(a, o, s, l, u, c);
            var h, m = l && l.$options && l.$options.timezone;
            if (l.$$parserName = e, l.$parsers.push(function(e) {
                    if (l.$isEmpty(e)) return null;
                    if (t.test(e)) {
                        var i = r(e, h);
                        return m && (i = K(i, m)), i
                    }
                    return n
                }), l.$formatters.push(function(e) {
                    if (e && !T(e)) throw eo("datefmt", "Expected `{0}` to be a date", e);
                    return f(e) ? (h = e, h && m && (h = K(h, m, !0)), d("date")(e, i, m)) : (h = null, "")
                }), b(s.min) || s.ngMin) {
                var g;
                l.$validators.min = function(e) {
                    return !f(e) || $(g) || r(e) >= g
                }, s.$observe("min", function(e) {
                    g = p(e), l.$validate()
                })
            }
            if (b(s.max) || s.ngMax) {
                var v;
                l.$validators.max = function(e) {
                    return !f(e) || $(v) || r(e) <= v
                }, s.$observe("max", function(e) {
                    v = p(e), l.$validate()
                })
            }
        }
    }

    function or(e, t, r, i) {
        var a = t[0],
            o = i.$$hasNativeValidators = w(a.validity);
        o && i.$parsers.push(function(e) {
            var r = t.prop(vr) || {};
            return r.badInput && !r.typeMismatch ? n : e
        })
    }

    function sr(e, t, r, i, a, o) {
        if (or(e, t, r, i), nr(e, t, r, i, a, o), i.$$parserName = "number", i.$parsers.push(function(e) {
                return i.$isEmpty(e) ? null : wa.test(e) ? parseFloat(e) : n
            }), i.$formatters.push(function(e) {
                if (!i.$isEmpty(e)) {
                    if (!x(e)) throw eo("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString()
                }
                return e
            }), b(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function(e) {
                return i.$isEmpty(e) || $(s) || e >= s
            }, r.$observe("min", function(e) {
                b(e) && !x(e) && (e = parseFloat(e, 10)), s = x(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
        if (b(r.max) || r.ngMax) {
            var l;
            i.$validators.max = function(e) {
                return i.$isEmpty(e) || $(l) || l >= e
            }, r.$observe("max", function(e) {
                b(e) && !x(e) && (e = parseFloat(e, 10)), l = x(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
    }

    function lr(e, t, n, r, i, a) {
        nr(e, t, n, r, i, a), er(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || $a.test(n)
        }
    }

    function ur(e, t, n, r, i, a) {
        nr(e, t, n, r, i, a), er(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || ba.test(n)
        }
    }

    function cr(e, t, n, r) {
        $(n.name) && t.attr("name", l());
        var i = function(e) {
            t[0].checked && r.$setViewValue(n.value, e && e.type)
        };
        t.on("click", i), r.$render = function() {
            var e = n.value;
            t[0].checked = e == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function dr(e, t, n, r, i) {
        var a;
        if (b(r)) {
            if (a = e(r), !a.constant) throw eo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return a(t)
        }
        return i
    }

    function fr(e, t, n, r, i, a, o, s) {
        var l = dr(s, e, "ngTrueValue", n.ngTrueValue, !0),
            u = dr(s, e, "ngFalseValue", n.ngFalseValue, !1),
            c = function(e) {
                r.$setViewValue(t[0].checked, e && e.type)
            };
        t.on("click", c), r.$render = function() {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function(e) {
            return e === !1
        }, r.$formatters.push(function(e) {
            return B(e, l)
        }), r.$parsers.push(function(e) {
            return e ? l : u
        })
    }

    function pr(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [];
                e: for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], a = 0; a < t.length; a++)
                        if (i == t[a]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                var t = [];
                return _r(e) ? (a(e, function(e) {
                    t = t.concat(i(e))
                }), t) : k(e) ? e.split(" ") : w(e) ? (a(e, function(e, n) {
                    e && (t = t.concat(n.split(" ")))
                }), t) : e
            }
            return {
                restrict: "AC",
                link: function(o, s, l) {
                    function u(e) {
                        var t = d(e, 1);
                        l.$addClass(t)
                    }

                    function c(e) {
                        var t = d(e, -1);
                        l.$removeClass(t)
                    }

                    function d(e, t) {
                        var n = s.data("$classCounts") || ge(),
                            r = [];
                        return a(e, function(e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function f(e, t) {
                        var i = r(t, e),
                            a = r(e, t);
                        i = d(i, 1), a = d(a, -1), i && i.length && n.addClass(s, i), a && a.length && n.removeClass(s, a)
                    }

                    function p(e) {
                        if (t === !0 || o.$index % 2 === t) {
                            var n = i(e || []);
                            if (h) {
                                if (!B(e, h)) {
                                    var r = i(h);
                                    f(r, n)
                                }
                            } else u(n)
                        }
                        h = V(e)
                    }
                    var h;
                    o.$watch(l[e], p, !0), l.$observe("class", function(t) {
                        p(o.$eval(l[e]))
                    }), "ngClass" !== e && o.$watch("$index", function(n, r) {
                        var a = 1 & n;
                        if (a !== (1 & r)) {
                            var s = i(o.$eval(l[e]));
                            a === t ? u(s) : c(s)
                        }
                    })
                }
            }
        }]
    }

    function hr(e) {
        function t(e, t, l) {
            t === n ? r("$pending", e, l) : i("$pending", e, l), O(t) ? t ? (d(s.$error, e, l), c(s.$$success, e, l)) : (c(s.$error, e, l), d(s.$$success, e, l)) : (d(s.$error, e, l), d(s.$$success, e, l)), s.$pending ? (a(Za, !0), s.$valid = s.$invalid = n, o("", null)) : (a(Za, !1), s.$valid = mr(s.$error), s.$invalid = !s.$valid, o("", s.$valid));
            var u;
            u = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, o(e, u), f.$setValidity(e, u, s)
        }

        function r(e, t, n) {
            s[e] || (s[e] = {}), c(s[e], t, n)
        }

        function i(e, t, r) {
            s[e] && d(s[e], t, r), mr(s[e]) && (s[e] = n)
        }

        function a(e, t) {
            t && !u[e] ? (p.addClass(l, e), u[e] = !0) : !t && u[e] && (p.removeClass(l, e), u[e] = !1)
        }

        function o(e, t) {
            e = e ? "-" + ue(e, "-") : "", a(Wa + e, t === !0), a(Xa + e, t === !1)
        }
        var s = e.ctrl,
            l = e.$element,
            u = {},
            c = e.set,
            d = e.unset,
            f = e.parentForm,
            p = e.$animate;
        u[Xa] = !(u[Wa] = l.hasClass(Wa)), s.$setValidity = t
    }

    function mr(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }
    var gr = /^\/(.+)\/([a-z]*)$/,
        vr = "validity",
        yr = function(e) {
            return k(e) ? e.toLowerCase() : e
        },
        $r = Object.prototype.hasOwnProperty,
        br = function(e) {
            return k(e) ? e.toUpperCase() : e
        },
        wr = function(e) {
            return k(e) ? e.replace(/[A-Z]/g, function(e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        },
        Sr = function(e) {
            return k(e) ? e.replace(/[a-z]/g, function(e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
    "i" !== "I".toLowerCase() && (yr = wr, br = Sr);
    var kr, xr, Tr, Cr, Pr = [].slice,
        Er = [].splice,
        Ar = [].push,
        Ir = Object.prototype.toString,
        Lr = Object.getPrototypeOf,
        Mr = r("ng"),
        Or = e.angular || (e.angular = {}),
        Nr = 0;
    kr = t.documentMode, m.$inject = [], g.$inject = [];
    var Rr, _r = Array.isArray,
        Dr = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
        Ur = function(e) {
            return k(e) ? e.trim() : e
        },
        jr = function(e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        qr = function() {
            function e() {
                try {
                    return new Function(""), !1
                } catch (e) {
                    return !0
                }
            }
            if (!b(qr.rules)) {
                var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
                if (n) {
                    var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                    qr.rules = {
                        noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                        noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                    }
                } else qr.rules = {
                    noUnsafeEval: e(),
                    noInlineStyle: !1
                }
            }
            return qr.rules
        },
        Vr = function() {
            if (b(Vr.name_)) return Vr.name_;
            var e, n, r, i, a = Br.length;
            for (n = 0; a > n; ++n)
                if (r = Br[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                    i = e.getAttribute(r + "jq");
                    break
                }
            return Vr.name_ = i
        },
        Br = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Fr = /[A-Z]/g,
        Hr = !1,
        Yr = 1,
        zr = 2,
        Wr = 3,
        Xr = 8,
        Qr = 9,
        Gr = 11,
        Kr = {
            full: "1.4.4",
            major: 1,
            minor: 4,
            dot: 4,
            codeName: "pylon-requirement"
        };
    Ee.expando = "ng339";
    var Jr = Ee.cache = {},
        Zr = 1,
        ei = function(e, t, n) {
            e.addEventListener(t, n, !1)
        },
        ti = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        };
    Ee._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var ni = /([\:\-\_]+(.))/g,
        ri = /^moz([A-Z])/,
        ii = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ai = r("jqLite"),
        oi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        si = /<|&#?\w+;/,
        li = /<([\w:]+)/,
        ui = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ci = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ci.optgroup = ci.option, ci.tbody = ci.tfoot = ci.colgroup = ci.caption = ci.thead, ci.th = ci.td;
    var di = Ee.prototype = {
            ready: function(n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Ee(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return a(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return xr(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: Ar,
            sort: [].sort,
            splice: [].splice
        },
        fi = {};
    a("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
        fi[yr(e)] = e
    });
    var pi = {};
    a("input,select,option,textarea,button,form,details".split(","), function(e) {
        pi[e] = !0
    });
    var hi = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    a({
        data: Ne,
        removeData: Me,
        hasData: Te
    }, function(e, t) {
        Ee[t] = e
    }), a({
        data: Ne,
        inheritedData: qe,
        scope: function(e) {
            return xr.data(e, "$scope") || qe(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return xr.data(e, "$isolateScope") || xr.data(e, "$isolateScopeNoTemplate")
        },
        controller: je,
        injector: function(e) {
            return qe(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: Re,
        css: function(e, t, n) {
            return t = Se(t), b(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, r) {
            var i = e.nodeType;
            if (i !== Wr && i !== zr && i !== Xr) {
                var a = yr(t);
                if (fi[a]) {
                    if (!b(r)) return e[t] || (e.attributes.getNamedItem(t) || m).specified ? a : n;
                    r ? (e[t] = !0, e.setAttribute(t, a)) : (e[t] = !1, e.removeAttribute(a))
                } else if (b(r)) e.setAttribute(t, r);
                else if (e.getAttribute) {
                    var o = e.getAttribute(t, 2);
                    return null === o ? n : o
                }
            }
        },
        prop: function(e, t, n) {
            return b(n) ? void(e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if ($(t)) {
                    var n = e.nodeType;
                    return n === Yr || n === Wr ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if ($(t)) {
                if (e.multiple && "select" === U(e)) {
                    var n = [];
                    return a(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return $(t) ? e.innerHTML : (Ie(e, !0), void(e.innerHTML = t))
        },
        empty: Ve
    }, function(e, t) {
        Ee.prototype[t] = function(t, r) {
            var i, a, o = this.length;
            if (e !== Ve && (2 == e.length && e !== Re && e !== je ? t : r) === n) {
                if (w(t)) {
                    for (i = 0; o > i; i++)
                        if (e === Ne) e(this[i], t);
                        else
                            for (a in t) e(this[i], a, t[a]);
                    return this
                }
                for (var s = e.$dv, l = s === n ? Math.min(o, 1) : o, u = 0; l > u; u++) {
                    var c = e(this[u], t, r);
                    s = s ? s + c : c
                }
                return s
            }
            for (i = 0; o > i; i++) e(this[i], t, r);
            return this
        }
    }), a({
        removeData: Me,
        on: function Lo(e, t, n, r) {
            if (b(r)) throw ai("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (xe(e)) {
                var i = Oe(e, !0),
                    a = i.events,
                    o = i.handle;
                o || (o = i.handle = ze(e, a));
                for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = s.length; l--;) {
                    t = s[l];
                    var u = a[t];
                    u || (a[t] = [], "mouseenter" === t || "mouseleave" === t ? Lo(e, ii[t], function(e) {
                        var n = this,
                            r = e.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && o(e, t)
                    }) : "$destroy" !== t && ei(e, t, o), u = a[t]), u.push(n)
                }
            }
        },
        off: Le,
        one: function(e, t, n) {
            e = xr(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            Ie(e), a(new Ee(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return a(e.childNodes, function(e) {
                e.nodeType === Yr && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === Yr || n === Gr) {
                t = new Ee(t);
                for (var r = 0, i = t.length; i > r; r++) {
                    var a = t[r];
                    e.appendChild(a)
                }
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === Yr) {
                var n = e.firstChild;
                a(new Ee(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            t = xr(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: Be,
        detach: function(e) {
            Be(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            t = new Ee(t);
            for (var i = 0, a = t.length; a > i; i++) {
                var o = t[i];
                r.insertBefore(o, n.nextSibling), n = o
            }
        },
        addClass: De,
        removeClass: _e,
        toggleClass: function(e, t, n) {
            t && a(t.split(" "), function(t) {
                var r = n;
                $(r) && (r = !Re(e, t)), (r ? De : _e)(e, t)
            })
        },
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== Gr ? t : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: Ae,
        triggerHandler: function(e, t, n) {
            var r, i, o, s = t.type || t,
                l = Oe(e),
                u = l && l.events,
                c = u && u[s];
            c && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: m,
                type: s,
                target: e
            }, t.type && (r = d(r, t)), i = V(c), o = n ? [r].concat(n) : [r], a(i, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, o)
            }))
        }
    }, function(e, t) {
        Ee.prototype[t] = function(t, n, r) {
            for (var i, a = 0, o = this.length; o > a; a++) $(i) ? (i = e(this[a], t, n, r), b(i) && (i = xr(i))) : Ue(i, e(this[a], t, n, r));
            return b(i) ? i : this
        }, Ee.prototype.bind = Ee.prototype.on, Ee.prototype.unbind = Ee.prototype.off
    }), Qe.prototype = {
        put: function(e, t) {
            this[Xe(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[Xe(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = Xe(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var mi = [function() {
            this.$get = [function() {
                return Qe
            }]
        }],
        gi = /^[^\(]*\(\s*([^\)]*)\)/m,
        vi = /,/,
        yi = /^\s*(_?)(\S+?)\1\s*$/,
        $i = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        bi = r("$injector");
    Je.$$annotate = Ke;
    var wi = r("$animate"),
        Si = 1,
        ki = "ng-animate",
        xi = function() {
            this.$get = ["$q", "$$rAF", function(e, t) {
                function n() {}
                return n.all = m, n.chain = m, n.prototype = {
                    end: m,
                    cancel: m,
                    resume: m,
                    pause: m,
                    complete: m,
                    then: function(n, r) {
                        return e(function(e) {
                            t(function() {
                                e()
                            })
                        }).then(n, r)
                    }
                }, n
            }]
        },
        Ti = function() {
            var e = new Qe,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                function i(n, i, o) {
                    var s = e.get(n);
                    s || (e.put(n, s = {}), t.push(n));
                    var l = function(e, t) {
                            var n = !1;
                            return e && (e = k(e) ? e.split(" ") : _r(e) ? e : [], a(e, function(e) {
                                e && (n = !0, s[e] = t)
                            })), n
                        },
                        u = l(i, !0),
                        c = l(o, !1);
                    !u && !c || t.length > 1 || r.$$postDigest(function() {
                        a(t, function(t) {
                            var n = e.get(t);
                            if (n) {
                                var r = nt(t.attr("class")),
                                    i = "",
                                    o = "";
                                a(n, function(e, t) {
                                    var n = !!r[t];
                                    e !== n && (e ? i += (i.length ? " " : "") + t : o += (o.length ? " " : "") + t)
                                }), a(t, function(e) {
                                    i && De(e, i), o && _e(e, o)
                                }), e.remove(t)
                            }
                        }), t.length = 0
                    })
                }
                return {
                    enabled: m,
                    on: m,
                    off: m,
                    pin: m,
                    push: function(e, t, r, a) {
                        return a && a(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && i(e, r.addClass, r.removeClass), new n
                    }
                }
            }]
        },
        Ci = ["$provide", function(e) {
            var t = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw wi("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
            }, this.classNameFilter = function(e) {
                if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
                    var t = new RegExp("(\\s+|\\/)" + ki + "(\\s+|\\/)");
                    if (t.test(this.$$classNameFilter.toString())) throw wi("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ki)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(e) {
                function t(e, t, n) {
                    if (n) {
                        var r = tt(n);
                        !r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function(e) {
                        e.end && e.end()
                    },
                    enter: function(n, r, i, a) {
                        return r = r && xr(r), i = i && xr(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", rt(a))
                    },
                    move: function(n, r, i, a) {
                        return r = r && xr(r), i = i && xr(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", rt(a))
                    },
                    leave: function(t, n) {
                        return e.push(t, "leave", rt(n), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, n, r) {
                        return r = rt(r), r.addClass = et(r.addclass, n), e.push(t, "addClass", r)
                    },
                    removeClass: function(t, n, r) {
                        return r = rt(r), r.removeClass = et(r.removeClass, n), e.push(t, "removeClass", r)
                    },
                    setClass: function(t, n, r, i) {
                        return i = rt(i), i.addClass = et(i.addClass, n), i.removeClass = et(i.removeClass, r), e.push(t, "setClass", i)
                    },
                    animate: function(t, n, r, i, a) {
                        return a = rt(a), a.from = a.from ? d(a.from, n) : n, a.to = a.to ? d(a.to, r) : r, i = i || "ng-inline-animate", a.tempClasses = et(a.tempClasses, i), e.push(t, "animate", a)
                    }
                }
            }]
        }],
        Pi = function() {
            this.$get = ["$$rAF", "$q", function(e, t) {
                var n = function() {};
                return n.prototype = {
                        done: function(e) {
                            this.defer && this.defer[e === !0 ? "reject" : "resolve"]()
                        },
                        end: function() {
                            this.done()
                        },
                        cancel: function() {
                            this.done(!0)
                        },
                        getPromise: function() {
                            return this.defer || (this.defer = t.defer()), this.defer.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        "catch": function(e) {
                            return this.getPromise()["catch"](e)
                        },
                        "finally": function(e) {
                            return this.getPromise()["finally"](e)
                        }
                    },
                    function(t, r) {
                        function i() {
                            return e(function() {
                                a(), o || s.done(), o = !0
                            }), s
                        }

                        function a() {
                            r.addClass && (t.addClass(r.addClass), r.addClass = null), r.removeClass && (t.removeClass(r.removeClass), r.removeClass = null), r.to && (t.css(r.to), r.to = null)
                        }
                        r.from && (t.css(r.from), r.from = null);
                        var o, s = new n;
                        return {
                            start: i,
                            end: i
                        }
                    }
            }]
        },
        Ei = r("$compile");
    lt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ai = /^((?:x|data)[\:\-_])/i,
        Ii = r("$controller"),
        Li = /^(\S+)(\s+as\s+(\w+))?$/,
        Mi = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof xr && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        Oi = "application/json",
        Ni = {
            "Content-Type": Oi + ";charset=utf-8"
        },
        Ri = /^\[|^\{(?!\{)/,
        _i = {
            "[": /]$/,
            "{": /}$/
        },
        Di = /^\)\]\}',?\n/,
        Ui = r("$http"),
        ji = function(e) {
            return function() {
                throw Ui("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
            }
        },
        qi = Or.$interpolateMinErr = r("$interpolate");
    qi.throwNoconcat = function(e) {
        throw qi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
    }, qi.interr = function(e, t) {
        return qi("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
    };
    var Vi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Bi = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Fi = r("$location"),
        Hi = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Bt("$$absUrl"),
            url: function(e) {
                if ($(e)) return this.$$url;
                var t = Vi.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: Bt("$$protocol"),
            host: Bt("$$host"),
            port: Bt("$$port"),
            path: Ft("$$path", function(e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (k(e) || x(e)) e = e.toString(), this.$$search = ee(e);
                        else {
                            if (!w(e)) throw Fi("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = q(e, {}), a(e, function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        $(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: Ft("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    a([Vt, qt, jt], function(e) {
        e.prototype = Object.create(Hi), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== jt || !this.$$html5) throw Fi("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = $(t) ? null : t, this
        }
    });
    var Yi = r("$parse"),
        zi = Function.prototype.call,
        Wi = Function.prototype.apply,
        Xi = Function.prototype.bind,
        Qi = ge();
    a("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
        Qi[e] = !0
    });
    var Gi = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        Ki = function(e) {
            this.options = e
        };
    Ki.prototype = {
        constructor: Ki,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(t)) this.readIdent();
                else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++;
                else if (this.isWhitespace(t)) this.index++;
                else {
                    var n = t + this.peek(),
                        r = n + this.peek(2),
                        i = Qi[t],
                        a = Qi[n],
                        o = Qi[r];
                    if (i || a || o) {
                        var s = o ? r : a ? n : t;
                        this.tokens.push({
                            index: this.index,
                            text: s,
                            operator: !0
                        }), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        },
        isIdent: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            n = n || this.index;
            var r = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw Yi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = yr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            for (var e = this.index; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t)) break;
                this.index++
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var a = this.text.charAt(this.index);
                if (r += a, i) {
                    if ("u" === a) {
                        var o = this.text.substring(this.index + 1, this.index + 5);
                        o.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))
                    } else {
                        var s = Gi[a];
                        n += s || a
                    }
                    i = !1
                } else if ("\\" === a) i = !0;
                else {
                    if (a === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += a
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var Ji = function(e, t) {
        this.lexer = e, this.options = t
    };
    Ji.Program = "Program", Ji.ExpressionStatement = "ExpressionStatement", Ji.AssignmentExpression = "AssignmentExpression", Ji.ConditionalExpression = "ConditionalExpression", Ji.LogicalExpression = "LogicalExpression", Ji.BinaryExpression = "BinaryExpression", Ji.UnaryExpression = "UnaryExpression", Ji.CallExpression = "CallExpression", Ji.MemberExpression = "MemberExpression", Ji.Identifier = "Identifier", Ji.Literal = "Literal", Ji.ArrayExpression = "ArrayExpression", Ji.Property = "Property", Ji.ObjectExpression = "ObjectExpression", Ji.ThisExpression = "ThisExpression", Ji.NGValueParameter = "NGValueParameter", Ji.prototype = {
        ast: function(e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function() {
            for (var e = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: Ji.Program,
                    body: e
                }
        },
        expressionStatement: function() {
            return {
                type: Ji.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
            return t
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e = this.ternary();
            return this.expect("=") && (e = {
                type: Ji.AssignmentExpression,
                left: e,
                right: this.assignment(),
                operator: "="
            }), e
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: Ji.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function() {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: Ji.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function() {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: Ji.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: Ji.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: Ji.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: Ji.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: Ji.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function() {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: Ji.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = q(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: Ji.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: Ji.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: Ji.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function(e) {
            for (var t = [e], n = {
                    type: Ji.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return n
        },
        parseArguments: function() {
            var e = [];
            if (")" !== this.peekToken().text)
                do e.push(this.expression()); while (this.expect(","));
            return e
        },
        identifier: function() {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: Ji.Identifier,
                name: e.text
            }
        },
        constant: function() {
            return {
                type: Ji.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: Ji.ArrayExpression,
                elements: e
            }
        },
        object: function() {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: Ji.Property,
                        kind: "init"
                    }, this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), e.value = this.expression(), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: Ji.ObjectExpression,
                properties: t
            }
        },
        throwError: function(e, t) {
            throw Yi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw Yi("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Yi("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, i) {
            if (this.tokens.length > e) {
                var a = this.tokens[e],
                    o = a.text;
                if (o === t || o === n || o === r || o === i || !t && !n && !r && !i) return a
            }
            return !1
        },
        expect: function(e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return i ? (this.tokens.shift(), i) : !1
        },
        constants: {
            "true": {
                type: Ji.Literal,
                value: !0
            },
            "false": {
                type: Ji.Literal,
                value: !1
            },
            "null": {
                type: Ji.Literal,
                value: null
            },
            undefined: {
                type: Ji.Literal,
                value: n
            },
            "this": {
                type: Ji.ThisExpression
            }
        }
    }, an.prototype = {
        compile: function(e, t) {
            var r = this,
                i = this.astBuilder.ast(e);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: t,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, Jt(i, r.$filter);
            var o, s = "";
            if (this.stage = "assign", o = tn(i)) {
                this.state.computing = "assign";
                var l = this.nextId();
                this.recurse(o, l), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var u = Zt(i.body);
            r.stage = "inputs", a(u, function(e, t) {
                var n = "fn" + t;
                r.state[n] = {
                    vars: [],
                    body: [],
                    own: {}
                }, r.state.computing = n;
                var i = r.nextId();
                r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
            }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
            var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
                d = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", c)(this.$filter, zt, Wt, Xt, Qt, Gt, e);
            return this.state = this.stage = n, d.literal = nn(i), d.constant = rn(i), d
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return a(t, function(t) {
                e.push("var " + t + "=" + n.generateFunction(t, "s"))
            }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
        },
        generateFunction: function(e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function() {
            var e = [],
                t = this;
            return a(this.state.filters, function(n, r) {
                e.push(n + "=$filter(" + t.escape(r) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function(e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function(e) {
            return this.state[e].body.join("")
        },
        recurse: function(e, t, r, i, o, s) {
            var l, u, c, d, f = this;
            if (i = i || m, !s && b(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, o, !0));
            switch (e.type) {
                case Ji.Program:
                    a(e.body, function(t, r) {
                        f.recurse(t.expression, n, n, function(e) {
                            u = e
                        }), r !== e.body.length - 1 ? f.current().body.push(u, ";") : f.return_(u)
                    });
                    break;
                case Ji.Literal:
                    d = this.escape(e.value), this.assign(t, d), i(d);
                    break;
                case Ji.UnaryExpression:
                    this.recurse(e.argument, n, n, function(e) {
                        u = e
                    }), d = e.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(t, d), i(d);
                    break;
                case Ji.BinaryExpression:
                    this.recurse(e.left, n, n, function(e) {
                        l = e
                    }), this.recurse(e.right, n, n, function(e) {
                        u = e
                    }), d = "+" === e.operator ? this.plus(l, u) : "-" === e.operator ? this.ifDefined(l, 0) + e.operator + this.ifDefined(u, 0) : "(" + l + ")" + e.operator + "(" + u + ")", this.assign(t, d), i(d);
                    break;
                case Ji.LogicalExpression:
                    t = t || this.nextId(), f.recurse(e.left, t), f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)), i(t);
                    break;
                case Ji.ConditionalExpression:
                    t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), i(t);
                    break;
                case Ji.Identifier:
                    t = t || this.nextId(), r && (r.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), zt(e.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), function() {
                        f.if_("inputs" === f.stage || "s", function() {
                            o && 1 !== o && f.if_(f.not(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
                        })
                    }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), (f.state.expensiveChecks || sn(e.name)) && f.addEnsureSafeObject(t), i(t);
                    break;
                case Ji.MemberExpression:
                    l = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, l, n, function() {
                        f.if_(f.notNull(l), function() {
                            e.computed ? (u = f.nextId(), f.recurse(e.property, u), f.addEnsureSafeMemberName(u), o && 1 !== o && f.if_(f.not(f.computedMember(l, u)), f.lazyAssign(f.computedMember(l, u), "{}")), d = f.ensureSafeObject(f.computedMember(l, u)), f.assign(t, d), r && (r.computed = !0, r.name = u)) : (zt(e.property.name), o && 1 !== o && f.if_(f.not(f.nonComputedMember(l, e.property.name)), f.lazyAssign(f.nonComputedMember(l, e.property.name), "{}")), d = f.nonComputedMember(l, e.property.name), (f.state.expensiveChecks || sn(e.property.name)) && (d = f.ensureSafeObject(d)), f.assign(t, d), r && (r.computed = !1, r.name = e.property.name))
                        }, function() {
                            f.assign(t, "undefined")
                        }), i(t)
                    }, !!o);
                    break;
                case Ji.CallExpression:
                    t = t || this.nextId(), e.filter ? (u = f.filter(e.callee.name), c = [], a(e.arguments, function(e) {
                        var t = f.nextId();
                        f.recurse(e, t), c.push(t)
                    }), d = u + "(" + c.join(",") + ")", f.assign(t, d), i(t)) : (u = f.nextId(), l = {}, c = [], f.recurse(e.callee, u, l, function() {
                        f.if_(f.notNull(u), function() {
                            f.addEnsureSafeFunction(u), a(e.arguments, function(e) {
                                f.recurse(e, f.nextId(), n, function(e) {
                                    c.push(f.ensureSafeObject(e))
                                })
                            }), l.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(l.context), d = f.member(l.context, l.name, l.computed) + "(" + c.join(",") + ")") : d = u + "(" + c.join(",") + ")", d = f.ensureSafeObject(d), f.assign(t, d)
                        }, function() {
                            f.assign(t, "undefined")
                        }), i(t)
                    }));
                    break;
                case Ji.AssignmentExpression:
                    if (u = this.nextId(), l = {}, !en(e.left)) throw Yi("lval", "Trying to assing a value to a non l-value");
                    this.recurse(e.left, n, l, function() {
                        f.if_(f.notNull(l.context), function() {
                            f.recurse(e.right, u), f.addEnsureSafeObject(f.member(l.context, l.name, l.computed)), d = f.member(l.context, l.name, l.computed) + e.operator + u, f.assign(t, d), i(t || d)
                        })
                    }, 1);
                    break;
                case Ji.ArrayExpression:
                    c = [], a(e.elements, function(e) {
                        f.recurse(e, f.nextId(), n, function(e) {
                            c.push(e)
                        })
                    }), d = "[" + c.join(",") + "]", this.assign(t, d), i(d);
                    break;
                case Ji.ObjectExpression:
                    c = [], a(e.properties, function(e) {
                        f.recurse(e.value, f.nextId(), n, function(t) {
                            c.push(f.escape(e.key.type === Ji.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), d = "{" + c.join(",") + "}", this.assign(t, d), i(d);
                    break;
                case Ji.ThisExpression:
                    this.assign(t, "s"), i("s");
                    break;
                case Ji.NGValueParameter:
                    this.assign(t, "v"), i("v")
            }
        },
        getHasOwnProperty: function(e, t) {
            var n = e + "." + t,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
        },
        assign: function(e, t) {
            return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
        },
        filter: function(e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function(e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function(e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function(e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function(e, t, n) {
            if (e === !0) t();
            else {
                var r = this.current().body;
                r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(e) {
            return "!(" + e + ")"
        },
        notNull: function(e) {
            return e + "!=null"
        },
        nonComputedMember: function(e, t) {
            return e + "." + t
        },
        computedMember: function(e, t) {
            return e + "[" + t + "]"
        },
        member: function(e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        addEnsureSafeObject: function(e) {
            this.current().body.push(this.ensureSafeObject(e), ";")
        },
        addEnsureSafeMemberName: function(e) {
            this.current().body.push(this.ensureSafeMemberName(e), ";")
        },
        addEnsureSafeFunction: function(e) {
            this.current().body.push(this.ensureSafeFunction(e), ";")
        },
        ensureSafeObject: function(e) {
            return "ensureSafeObject(" + e + ",text)"
        },
        ensureSafeMemberName: function(e) {
            return "ensureSafeMemberName(" + e + ",text)"
        },
        ensureSafeFunction: function(e) {
            return "ensureSafeFunction(" + e + ",text)"
        },
        lazyRecurse: function(e, t, n, r, i, a) {
            var o = this;
            return function() {
                o.recurse(e, t, n, r, i, a)
            }
        },
        lazyAssign: function(e, t) {
            var n = this;
            return function() {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(e) {
            if (k(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (x(e)) return e.toString();
            if (e === !0) return "true";
            if (e === !1) return "false";
            if (null === e) return "null";
            if ("undefined" == typeof e) return "undefined";
            throw Yi("esc", "IMPOSSIBLE")
        },
        nextId: function(e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, on.prototype = {
        compile: function(e, t) {
            var n = this,
                r = this.astBuilder.ast(e);
            this.expression = e, this.expensiveChecks = t, Jt(r, n.$filter);
            var i, o;
            (i = tn(r)) && (o = this.recurse(i));
            var s, l = Zt(r.body);
            l && (s = [], a(l, function(e, t) {
                var r = n.recurse(e);
                e.input = r, s.push(r), e.watchId = t
            }));
            var u = [];
            a(r.body, function(e) {
                u.push(n.recurse(e.expression))
            });
            var c = 0 === r.body.length ? function() {} : 1 === r.body.length ? u[0] : function(e, t) {
                var n;
                return a(u, function(r) {
                    n = r(e, t)
                }), n
            };
            return o && (c.assign = function(e, t, n) {
                return o(e, n, t)
            }), s && (c.inputs = s), c.literal = nn(r), c.constant = rn(r), c
        },
        recurse: function(e, t, r) {
            var i, o, s, l = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case Ji.Literal:
                    return this.value(e.value, t);
                case Ji.UnaryExpression:
                    return o = this.recurse(e.argument), this["unary" + e.operator](o, t);
                case Ji.BinaryExpression:
                    return i = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](i, o, t);
                case Ji.LogicalExpression:
                    return i = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](i, o, t);
                case Ji.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case Ji.Identifier:
                    return zt(e.name, l.expression), l.identifier(e.name, l.expensiveChecks || sn(e.name), t, r, l.expression);
                case Ji.MemberExpression:
                    return i = this.recurse(e.object, !1, !!r), e.computed || (zt(e.property.name, l.expression), o = e.property.name), e.computed && (o = this.recurse(e.property)), e.computed ? this.computedMember(i, o, t, r, l.expression) : this.nonComputedMember(i, o, l.expensiveChecks, t, r, l.expression);
                case Ji.CallExpression:
                    return s = [], a(e.arguments, function(e) {
                        s.push(l.recurse(e))
                    }), e.filter && (o = this.$filter(e.callee.name)), e.filter || (o = this.recurse(e.callee, !0)), e.filter ? function(e, r, i, a) {
                        for (var l = [], u = 0; u < s.length; ++u) l.push(s[u](e, r, i, a));
                        var c = o.apply(n, l, a);
                        return t ? {
                            context: n,
                            name: n,
                            value: c
                        } : c
                    } : function(e, n, r, i) {
                        var a, u = o(e, n, r, i);
                        if (null != u.value) {
                            Wt(u.context, l.expression), Xt(u.value, l.expression);
                            for (var c = [], d = 0; d < s.length; ++d) c.push(Wt(s[d](e, n, r, i), l.expression));
                            a = Wt(u.value.apply(u.context, c), l.expression)
                        }
                        return t ? {
                            value: a
                        } : a
                    };
                case Ji.AssignmentExpression:
                    return i = this.recurse(e.left, !0, 1), o = this.recurse(e.right),
                        function(e, n, r, a) {
                            var s = i(e, n, r, a),
                                u = o(e, n, r, a);
                            return Wt(s.value, l.expression), s.context[s.name] = u, t ? {
                                value: u
                            } : u
                        };
                case Ji.ArrayExpression:
                    return s = [], a(e.elements, function(e) {
                            s.push(l.recurse(e))
                        }),
                        function(e, n, r, i) {
                            for (var a = [], o = 0; o < s.length; ++o) a.push(s[o](e, n, r, i));
                            return t ? {
                                value: a
                            } : a
                        };
                case Ji.ObjectExpression:
                    return s = [], a(e.properties, function(e) {
                            s.push({
                                key: e.key.type === Ji.Identifier ? e.key.name : "" + e.key.value,
                                value: l.recurse(e.value)
                            })
                        }),
                        function(e, n, r, i) {
                            for (var a = {}, o = 0; o < s.length; ++o) a[s[o].key] = s[o].value(e, n, r, i);
                            return t ? {
                                value: a
                            } : a
                        };
                case Ji.ThisExpression:
                    return function(e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case Ji.NGValueParameter:
                    return function(e, n, r, i) {
                        return t ? {
                            value: r
                        } : r
                    }
            }
        },
        "unary+": function(e, t) {
            return function(n, r, i, a) {
                var o = e(n, r, i, a);
                return o = b(o) ? +o : 0, t ? {
                    value: o
                } : o
            }
        },
        "unary-": function(e, t) {
            return function(n, r, i, a) {
                var o = e(n, r, i, a);
                return o = b(o) ? -o : 0, t ? {
                    value: o
                } : o
            }
        },
        "unary!": function(e, t) {
            return function(n, r, i, a) {
                var o = !e(n, r, i, a);
                return t ? {
                    value: o
                } : o
            }
        },
        "binary+": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o),
                    l = t(r, i, a, o),
                    u = Gt(s, l);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary-": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o),
                    l = t(r, i, a, o),
                    u = (b(s) ? s : 0) - (b(l) ? l : 0);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary*": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) * t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary/": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) / t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary%": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) % t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary===": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) === t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!==": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) !== t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary==": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) == t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!=": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) != t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) < t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) > t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<=": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) <= t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>=": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) >= t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary&&": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) && t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary||": function(e, t, n) {
            return function(r, i, a, o) {
                var s = e(r, i, a, o) || t(r, i, a, o);
                return n ? {
                    value: s
                } : s
            }
        },
        "ternary?:": function(e, t, n, r) {
            return function(i, a, o, s) {
                var l = e(i, a, o, s) ? t(i, a, o, s) : n(i, a, o, s);
                return r ? {
                    value: l
                } : l
            }
        },
        value: function(e, t) {
            return function() {
                return t ? {
                    context: n,
                    name: n,
                    value: e
                } : e
            }
        },
        identifier: function(e, t, r, i, a) {
            return function(o, s, l, u) {
                var c = s && e in s ? s : o;
                i && 1 !== i && c && !c[e] && (c[e] = {});
                var d = c ? c[e] : n;
                return t && Wt(d, a), r ? {
                    context: c,
                    name: e,
                    value: d
                } : d
            }
        },
        computedMember: function(e, t, n, r, i) {
            return function(a, o, s, l) {
                var u, c, d = e(a, o, s, l);
                return null != d && (u = t(a, o, s, l), zt(u, i), r && 1 !== r && d && !d[u] && (d[u] = {}), c = d[u], Wt(c, i)), n ? {
                    context: d,
                    name: u,
                    value: c
                } : c
            }
        },
        nonComputedMember: function(e, t, r, i, a, o) {
            return function(s, l, u, c) {
                var d = e(s, l, u, c);
                a && 1 !== a && d && !d[t] && (d[t] = {});
                var f = null != d ? d[t] : n;
                return (r || sn(t)) && Wt(f, o), i ? {
                    context: d,
                    name: t,
                    value: f
                } : f
            }
        },
        inputs: function(e, t) {
            return function(n, r, i, a) {
                return a ? a[t] : e(n, r, i)
            }
        }
    };
    var Zi = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n, this.ast = new Ji(this.lexer), this.astCompiler = n.csp ? new on(this.ast, t) : new an(this.ast, t)
    };
    Zi.prototype = {
        constructor: Zi,
        parse: function(e) {
            return this.astCompiler.compile(e, this.options.expensiveChecks)
        }
    };
    var ea = (ge(), ge(), Object.prototype.valueOf),
        ta = r("$sce"),
        na = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Ei = r("$compile"),
        ra = t.createElement("a"),
        ia = xn(e.location.href);
    Pn.$inject = ["$document"], An.$inject = ["$provide"], Nn.$inject = ["$locale"], Rn.$inject = ["$locale"];
    var aa = ".",
        oa = {
            yyyy: Un("FullYear", 4),
            yy: Un("FullYear", 2, 0, !0),
            y: Un("FullYear", 1),
            MMMM: jn("Month"),
            MMM: jn("Month", !0),
            MM: Un("Month", 2, 1),
            M: Un("Month", 1, 1),
            dd: Un("Date", 2),
            d: Un("Date", 1),
            HH: Un("Hours", 2),
            H: Un("Hours", 1),
            hh: Un("Hours", 2, -12),
            h: Un("Hours", 1, -12),
            mm: Un("Minutes", 2),
            m: Un("Minutes", 1),
            ss: Un("Seconds", 2),
            s: Un("Seconds", 1),
            sss: Un("Milliseconds", 3),
            EEEE: jn("Day"),
            EEE: jn("Day", !0),
            a: Hn,
            Z: qn,
            ww: Fn(2),
            w: Fn(1),
            G: Yn,
            GG: Yn,
            GGG: Yn,
            GGGG: zn
        },
        sa = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        la = /^\-?\d+$/;
    Wn.$inject = ["$locale"];
    var ua = v(yr),
        ca = v(br);
    Gn.$inject = ["$parse"];
    var da = v({
            restrict: "E",
            compile: function(e, t) {
                return t.href || t.xlinkHref ? void 0 : function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Ir.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        fa = {};
    a(fi, function(e, t) {
        function n(e, n, i) {
            e.$watch(i[r], function(e) {
                i.$set(t, !!e)
            })
        }
        if ("multiple" != e) {
            var r = ut("ng-" + t),
                i = n;
            "checked" === e && (i = function(e, t, i) {
                i.ngModel !== i[r] && n(e, t, i)
            }), fa[r] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: i
                }
            }
        }
    }), a(hi, function(e, t) {
        fa[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(gr);
                        if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), a(["src", "srcset", "href"], function(e) {
        var t = ut("ng-" + e);
        fa[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var a = e,
                        o = e;
                    "href" === e && "[object SVGAnimatedString]" === Ir.call(r.prop("href")) && (o = "xlinkHref", i.$attr[o] = "xlink:href", a = null), i.$observe(t, function(t) {
                        return t ? (i.$set(o, t), void(kr && a && r.prop(a, i[o]))) : void("href" === e && i.$set(o, null))
                    })
                }
            }
        }
    });
    var pa = {
            $addControl: m,
            $$renameControl: Jn,
            $removeControl: m,
            $setValidity: m,
            $setDirty: m,
            $setPristine: m,
            $setSubmitted: m
        },
        ha = "ng-submitted";
    Zn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var ma = function(e) {
            return ["$timeout", "$parse", function(t, r) {
                function i(e) {
                    return "" === e ? r('this[""]').assign : r(e).assign || m
                }
                var a = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    controller: Zn,
                    compile: function(r, a) {
                        r.addClass(Qa).addClass(Wa);
                        var o = a.name ? "name" : e && a.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(e, r, a, s) {
                                if (!("action" in a)) {
                                    var l = function(t) {
                                        e.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    ei(r[0], "submit", l), r.on("$destroy", function() {
                                        t(function() {
                                            ti(r[0], "submit", l)
                                        }, 0, !1)
                                    })
                                }
                                var u = s.$$parentForm,
                                    c = o ? i(s.$name) : m;
                                o && (c(e, s), a.$observe(o, function(t) {
                                    s.$name !== t && (c(e, n), u.$$renameControl(s, t), (c = i(s.$name))(e, s))
                                })), r.on("$destroy", function() {
                                    u.$removeControl(s), c(e, n), d(s, pa)
                                })
                            }
                        }
                    }
                };
                return a
            }]
        },
        ga = ma(),
        va = ma(!0),
        ya = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        $a = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        ba = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        wa = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Sa = /^(\d{4})-(\d{2})-(\d{2})$/,
        ka = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        xa = /^(\d{4})-W(\d\d)$/,
        Ta = /^(\d{4})-(\d\d)$/,
        Ca = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Pa = {
            text: tr,
            date: ar("date", Sa, ir(Sa, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": ar("datetimelocal", ka, ir(ka, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: ar("time", Ca, ir(Ca, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: ar("week", xa, rr, "yyyy-Www"),
            month: ar("month", Ta, ir(Ta, ["yyyy", "MM"]), "yyyy-MM"),
            number: sr,
            url: lr,
            email: ur,
            radio: cr,
            checkbox: fr,
            hidden: m,
            button: m,
            submit: m,
            reset: m,
            file: m
        },
        Ea = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, a, o, s) {
                        s[0] && (Pa[yr(o.type)] || Pa.text)(i, a, o, s[0], t, e, n, r)
                    }
                }
            }
        }],
        Aa = /^(true|false|\d+)$/,
        Ia = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(e, t) {
                    return Aa.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        La = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, r, i) {
                            e.$$addBindingInfo(r, i.ngBind), r = r[0], t.$watch(i.ngBind, function(e) {
                                r.textContent = e === n ? "" : e
                            })
                        }
                }
            }
        }],
        Ma = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(r) {
                    return t.$$addBindingClass(r),
                        function(r, i, a) {
                            var o = e(i.attr(a.$attr.ngBindTemplate));
                            t.$$addBindingInfo(i, o.expressions), i = i[0], a.$observe("ngBindTemplate", function(e) {
                                i.textContent = e === n ? "" : e
                            })
                        }
                }
            }
        }],
        Oa = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var a = t(i.ngBindHtml),
                        o = t(i.ngBindHtml, function(e) {
                            return (e || "").toString()
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(o, function() {
                                r.html(e.getTrustedHtml(a(t)) || "")
                            })
                        }
                }
            }
        }],
        Na = v({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        Ra = pr("", !0),
        _a = pr("Odd", 0),
        Da = pr("Even", 1),
        Ua = Kn({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        ja = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        qa = {},
        Va = {
            blur: !0,
            focus: !0
        };
    a("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = ut("ng-" + e);
        qa[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, a) {
                    var o = n(a[t], null, !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                o(t, {
                                    $event: n
                                })
                            };
                            Va[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var Ba = ["$animate", function(e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, a, o) {
                    var s, l, u;
                    n.$watch(i.ngIf, function(n) {
                        n ? l || o(function(n, a) {
                            l = a, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), s && (u = me(s.clone), e.leave(u).then(function() {
                            u = null
                        }), s = null))
                    })
                }
            }
        }],
        Fa = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Or.noop,
                compile: function(r, i) {
                    var a = i.ngInclude || i.src,
                        o = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, l, u, c) {
                        var d, f, p, h = 0,
                            m = function() {
                                f && (f.remove(), f = null), d && (d.$destroy(), d = null), p && (n.leave(p).then(function() {
                                    f = null
                                }), f = p, p = null)
                            };
                        r.$watch(a, function(a) {
                            var l = function() {
                                    !b(s) || s && !r.$eval(s) || t()
                                },
                                f = ++h;
                            a ? (e(a, !0).then(function(e) {
                                if (f === h) {
                                    var t = r.$new();
                                    u.template = e;
                                    var s = c(t, function(e) {
                                        m(), n.enter(e, null, i).then(l)
                                    });
                                    d = t, p = s, d.$emit("$includeContentLoaded", a), r.$eval(o)
                                }
                            }, function() {
                                f === h && (m(), r.$emit("$includeContentError", a))
                            }), r.$emit("$includeContentRequested", a)) : (m(), u.template = null)
                        })
                    }
                }
            }
        }],
        Ha = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, a) {
                    return /SVG/.test(r[0].toString()) ? (r.empty(), void e(Ce(a.template, t).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(a.template), void e(r.contents())(n))
                }
            }
        }],
        Ya = Kn({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        za = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, r, i) {
                    var o = t.attr(r.$attr.ngList) || ", ",
                        s = "false" !== r.ngTrim,
                        l = s ? Ur(o) : o,
                        u = function(e) {
                            if (!$(e)) {
                                var t = [];
                                return e && a(e.split(l), function(e) {
                                    e && t.push(s ? Ur(e) : e)
                                }), t
                            }
                        };
                    i.$parsers.push(u), i.$formatters.push(function(e) {
                        return _r(e) ? e.join(o) : n
                    }), i.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        Wa = "ng-valid",
        Xa = "ng-invalid",
        Qa = "ng-pristine",
        Ga = "ng-dirty",
        Ka = "ng-untouched",
        Ja = "ng-touched",
        Za = "ng-pending",
        eo = r("ngModel"),
        to = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, i, o, s, l, u, c, d) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = d(r.name || "", !1)(e);
            var f, p = o(r.ngModel),
                h = p.assign,
                g = p,
                v = h,
                y = null,
                w = this;
            this.$$setOptions = function(e) {
                if (w.$options = e, e && e.getterSetter) {
                    var t = o(r.ngModel + "()"),
                        n = o(r.ngModel + "($$$p)");
                    g = function(e) {
                        var n = p(e);
                        return C(n) && (n = t(e)), n
                    }, v = function(e, t) {
                        C(p(e)) ? n(e, {
                            $$$p: w.$modelValue
                        }) : h(e, w.$modelValue)
                    }
                } else if (!p.assign) throw eo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, J(i))
            }, this.$render = m, this.$isEmpty = function(e) {
                return $(e) || "" === e || null === e || e !== e
            };
            var S = i.inheritedData("$formController") || pa,
                k = 0;
            hr({
                ctrl: this,
                $element: i,
                set: function(e, t) {
                    e[t] = !0
                },
                unset: function(e, t) {
                    delete e[t]
                },
                parentForm: S,
                $animate: s
            }), this.$setPristine = function() {
                w.$dirty = !1, w.$pristine = !0, s.removeClass(i, Ga), s.addClass(i, Qa)
            }, this.$setDirty = function() {
                w.$dirty = !0, w.$pristine = !1, s.removeClass(i, Qa), s.addClass(i, Ga), S.$setDirty()
            }, this.$setUntouched = function() {
                w.$touched = !1, w.$untouched = !0, s.setClass(i, Ka, Ja)
            }, this.$setTouched = function() {
                w.$touched = !0, w.$untouched = !1, s.setClass(i, Ja, Ka)
            }, this.$rollbackViewValue = function() {
                l.cancel(y), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
            }, this.$validate = function() {
                if (!x(w.$modelValue) || !isNaN(w.$modelValue)) {
                    var e = w.$$lastCommittedViewValue,
                        t = w.$$rawModelValue,
                        r = w.$valid,
                        i = w.$modelValue,
                        a = w.$options && w.$options.allowInvalid;
                    w.$$runValidators(t, e, function(e) {
                        a || r === e || (w.$modelValue = e ? t : n, w.$modelValue !== i && w.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(e, t, r) {
                function i() {
                    var e = w.$$parserName || "parse";
                    return f !== n ? (f || (a(w.$validators, function(e, t) {
                        l(t, null)
                    }), a(w.$asyncValidators, function(e, t) {
                        l(t, null)
                    })), l(e, f), f) : (l(e, null), !0)
                }

                function o() {
                    var n = !0;
                    return a(w.$validators, function(r, i) {
                        var a = r(e, t);
                        n = n && a, l(i, a)
                    }), n ? !0 : (a(w.$asyncValidators, function(e, t) {
                        l(t, null)
                    }), !1)
                }

                function s() {
                    var r = [],
                        i = !0;
                    a(w.$asyncValidators, function(a, o) {
                        var s = a(e, t);
                        if (!N(s)) throw eo("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        l(o, n), r.push(s.then(function() {
                            l(o, !0)
                        }, function(e) {
                            i = !1, l(o, !1)
                        }))
                    }), r.length ? c.all(r).then(function() {
                        u(i)
                    }, m) : u(!0)
                }

                function l(e, t) {
                    d === k && w.$setValidity(e, t)
                }

                function u(e) {
                    d === k && r(e)
                }
                k++;
                var d = k;
                return i() && o() ? void s() : void u(!1)
            }, this.$commitViewValue = function() {
                var e = w.$viewValue;
                l.cancel(y), (w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function t() {
                    w.$modelValue !== o && w.$$writeModelToScope()
                }
                var r = w.$$lastCommittedViewValue,
                    i = r;
                if (f = $(i) ? n : !0)
                    for (var a = 0; a < w.$parsers.length; a++)
                        if (i = w.$parsers[a](i), $(i)) {
                            f = !1;
                            break
                        }
                x(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = g(e));
                var o = w.$modelValue,
                    s = w.$options && w.$options.allowInvalid;
                w.$$rawModelValue = i, s && (w.$modelValue = i, t()), w.$$runValidators(i, w.$$lastCommittedViewValue, function(e) {
                    s || (w.$modelValue = e ? i : n, t())
                })
            }, this.$$writeModelToScope = function() {
                v(e, w.$modelValue), a(w.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function(e, t) {
                w.$viewValue = e, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function(t) {
                var n, r = 0,
                    i = w.$options;
                i && b(i.debounce) && (n = i.debounce, x(n) ? r = n : x(n[t]) ? r = n[t] : x(n["default"]) && (r = n["default"])), l.cancel(y), r ? y = l(function() {
                    w.$commitViewValue()
                }, r) : u.$$phase ? w.$commitViewValue() : e.$apply(function() {
                    w.$commitViewValue()
                })
            }, e.$watch(function() {
                var t = g(e);
                if (t !== w.$modelValue && (w.$modelValue === w.$modelValue || t === t)) {
                    w.$modelValue = w.$$rawModelValue = t, f = n;
                    for (var r = w.$formatters, i = r.length, a = t; i--;) a = r[i](a);
                    w.$viewValue !== a && (w.$viewValue = w.$$lastCommittedViewValue = a, w.$render(), w.$$runValidators(t, a, m))
                }
                return t
            })
        }],
        no = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: to,
                priority: 1,
                compile: function(t) {
                    return t.addClass(Qa).addClass(Ka).addClass(Wa), {
                        pre: function(e, t, n, r) {
                            var i = r[0],
                                a = r[1] || pa;
                            i.$$setOptions(r[2] && r[2].$options), a.$addControl(i), n.$observe("name", function(e) {
                                i.$name !== e && a.$$renameControl(i, e)
                            }), e.$on("$destroy", function() {
                                a.$removeControl(i)
                            })
                        },
                        post: function(t, n, r, i) {
                            var a = i[0];
                            a.$options && a.$options.updateOn && n.on(a.$options.updateOn, function(e) {
                                a.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function(n) {
                                a.$touched || (e.$$phase ? t.$evalAsync(a.$setTouched) : t.$apply(a.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        ro = /(\s+|^)default(\s+|$)/,
        io = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(e, t) {
                    var r = this;
                    this.$options = q(e.$eval(t.ngModelOptions)), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Ur(this.$options.updateOn.replace(ro, function() {
                        return r.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        ao = Kn({
            terminal: !0,
            priority: 1e3
        }),
        oo = r("ngOptions"),
        so = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        lo = ["$compile", "$parse", function(e, n) {
            function r(e, t, r) {
                function a(e, t, n, r, i) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                }

                function o(e) {
                    var t;
                    if (!u && i(e)) t = e;
                    else {
                        t = [];
                        for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                    }
                    return t
                }
                var s = e.match(so);
                if (!s) throw oo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, J(t));
                var l = s[5] || s[7],
                    u = s[6],
                    c = / as /.test(s[0]) && s[1],
                    d = s[9],
                    f = n(s[2] ? s[1] : l),
                    p = c && n(c),
                    h = p || f,
                    m = d && n(d),
                    g = d ? function(e, t) {
                        return m(r, t)
                    } : function(e) {
                        return Xe(e)
                    },
                    v = function(e, t) {
                        return g(e, k(e, t))
                    },
                    y = n(s[2] || s[1]),
                    $ = n(s[3] || ""),
                    b = n(s[4] || ""),
                    w = n(s[8]),
                    S = {},
                    k = u ? function(e, t) {
                        return S[u] = t, S[l] = e, S
                    } : function(e) {
                        return S[l] = e, S
                    };
                return {
                    trackBy: d,
                    getTrackByValue: v,
                    getWatchables: n(w, function(e) {
                        var t = [];
                        e = e || [];
                        for (var n = o(e), i = n.length, a = 0; i > a; a++) {
                            var l = e === n ? a : n[a],
                                u = (e[l], k(e[l], l)),
                                c = g(e[l], u);
                            if (t.push(c), s[2] || s[1]) {
                                var d = y(r, u);
                                t.push(d)
                            }
                            if (s[4]) {
                                var f = b(r, u);
                                t.push(f)
                            }
                        }
                        return t
                    }),
                    getOptions: function() {
                        for (var e = [], t = {}, n = w(r) || [], i = o(n), s = i.length, l = 0; s > l; l++) {
                            var u = n === i ? l : i[l],
                                c = n[u],
                                f = k(c, u),
                                p = h(r, f),
                                m = g(p, f),
                                S = y(r, f),
                                x = $(r, f),
                                T = b(r, f),
                                C = new a(m, p, S, x, T);
                            e.push(C), t[m] = C
                        }
                        return {
                            items: e,
                            selectValueMap: t,
                            getOptionFromViewValue: function(e) {
                                return t[v(e)]
                            },
                            getViewValueFromOption: function(e) {
                                return d ? Or.copy(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }
            var o = t.createElement("option"),
                s = t.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: function(t, n, i, l) {
                    function u(e, t) {
                        e.element = t, t.disabled = e.disabled, e.value !== t.value && (t.value = e.selectValue), e.label !== t.label && (t.label = e.label, t.textContent = e.label)
                    }

                    function c(e, t, n, r) {
                        var i;
                        return t && yr(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)), i
                    }

                    function d(e) {
                        for (var t; e;) t = e.nextSibling, Be(e), e = t
                    }

                    function f(e) {
                        var t = m && m[0],
                            n = S && S[0];
                        if (t || n)
                            for (; e && (e === t || e === n);) e = e.nextSibling;
                        return e
                    }

                    function p() {
                        var e = k && g.readValue();
                        k = x.getOptions();
                        var t = {},
                            r = n[0].firstChild;
                        if (w && n.prepend(m), r = f(r), k.items.forEach(function(e) {
                                var i, a, l;
                                e.group ? (i = t[e.group], i || (a = c(n[0], r, "optgroup", s), r = a.nextSibling, a.label = e.group, i = t[e.group] = {
                                    groupElement: a,
                                    currentOptionElement: a.firstChild
                                }), l = c(i.groupElement, i.currentOptionElement, "option", o), u(e, l), i.currentOptionElement = l.nextSibling) : (l = c(n[0], r, "option", o), u(e, l), r = l.nextSibling)
                            }), Object.keys(t).forEach(function(e) {
                                d(t[e].currentOptionElement)
                            }), d(r), h.$render(), !h.$isEmpty(e)) {
                            var i = g.readValue();
                            (x.trackBy ? B(e, i) : e === i) || (h.$setViewValue(i), h.$render())
                        }
                    }
                    var h = l[1];
                    if (h) {
                        for (var m, g = l[0], v = i.multiple, y = 0, $ = n.children(), b = $.length; b > y; y++)
                            if ("" === $[y].value) {
                                m = $.eq(y);
                                break
                            }
                        var w = !!m,
                            S = xr(o.cloneNode(!1));
                        S.val("?");
                        var k, x = r(i.ngOptions, n, t),
                            T = function() {
                                w || n.prepend(m), n.val(""), m.prop("selected", !0), m.attr("selected", !0)
                            },
                            C = function() {
                                w || m.remove()
                            },
                            P = function() {
                                n.prepend(S), n.val("?"), S.prop("selected", !0), S.attr("selected", !0)
                            },
                            E = function() {
                                S.remove()
                            };
                        v ? (h.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }, g.writeValue = function(e) {
                            k.items.forEach(function(e) {
                                e.element.selected = !1
                            }), e && e.forEach(function(e) {
                                var t = k.getOptionFromViewValue(e);
                                t && !t.disabled && (t.element.selected = !0)
                            })
                        }, g.readValue = function() {
                            var e = n.val() || [],
                                t = [];
                            return a(e, function(e) {
                                var n = k.selectValueMap[e];
                                n && !n.disabled && t.push(k.getViewValueFromOption(n))
                            }), t
                        }, x.trackBy && t.$watchCollection(function() {
                            return _r(h.$viewValue) ? h.$viewValue.map(function(e) {
                                return x.getTrackByValue(e)
                            }) : void 0
                        }, function() {
                            h.$render()
                        })) : (g.writeValue = function(e) {
                            var t = k.getOptionFromViewValue(e);
                            t && !t.disabled ? n[0].value !== t.selectValue && (E(), C(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || w ? (E(), T()) : (C(), P())
                        }, g.readValue = function() {
                            var e = k.selectValueMap[n.val()];
                            return e && !e.disabled ? (C(), E(), k.getViewValueFromOption(e)) : null
                        }, x.trackBy && t.$watch(function() {
                            return x.getTrackByValue(h.$viewValue)
                        }, function() {
                            h.$render()
                        })), w ? (m.remove(), e(m)(t), m.removeClass("ng-scope")) : m = xr(o.cloneNode(!1)), p(), t.$watchCollection(x.getWatchables, p)
                    }
                }
            }
        }],
        uo = ["$locale", "$interpolate", "$log", function(e, t, n) {
            var r = /{}/g,
                i = /^when(Minus)?(.+)$/;
            return {
                link: function(o, s, l) {
                    function u(e) {
                        s.text(e || "")
                    }
                    var c, d = l.count,
                        f = l.$attr.when && s.attr(l.$attr.when),
                        p = l.offset || 0,
                        h = o.$eval(f) || {},
                        g = {},
                        v = t.startSymbol(),
                        y = t.endSymbol(),
                        b = v + d + "-" + p + y,
                        w = Or.noop;
                    a(l, function(e, t) {
                        var n = i.exec(t);
                        if (n) {
                            var r = (n[1] ? "-" : "") + yr(n[2]);
                            h[r] = s.attr(l.$attr[t])
                        }
                    }), a(h, function(e, n) {
                        g[n] = t(e.replace(r, b))
                    }), o.$watch(d, function(t) {
                        var r = parseFloat(t),
                            i = isNaN(r);
                        if (i || r in h || (r = e.pluralCat(r - p)), r !== c && !(i && x(c) && isNaN(c))) {
                            w();
                            var a = g[r];
                            $(a) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + f), w = m, u()) : w = o.$watch(a, u), c = r
                        }
                    })
                }
            }
        }],
        co = ["$parse", "$animate", function(e, o) {
            var s = "$$NG_REMOVED",
                l = r("ngRepeat"),
                u = function(e, t, n, r, i, a, o) {
                    e[n] = r, i && (e[i] = a), e.$index = t, e.$first = 0 === t, e.$last = t === o - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                },
                c = function(e) {
                    return e.clone[0]
                },
                d = function(e) {
                    return e.clone[e.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, f) {
                    var p = f.ngRepeat,
                        h = t.createComment(" end ngRepeat: " + p + " "),
                        m = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw l("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                    var g = m[1],
                        v = m[2],
                        y = m[3],
                        $ = m[4];
                    if (m = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m) throw l("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
                    var b = m[3] || m[1],
                        w = m[2];
                    if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))) throw l("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                    var S, k, x, T, C = {
                        $id: Xe
                    };
                    return $ ? S = e($) : (x = function(e, t) {
                            return Xe(t)
                        }, T = function(e) {
                            return e
                        }),
                        function(e, t, r, f, m) {
                            S && (k = function(t, n, r) {
                                return w && (C[w] = t), C[b] = n, C.$index = r, S(e, C)
                            });
                            var g = ge();
                            e.$watchCollection(v, function(r) {
                                var f, v, $, S, C, P, E, A, I, L, M, O, N = t[0],
                                    R = ge();
                                if (y && (e[y] = r), i(r)) I = r, A = k || x;
                                else {
                                    A = k || T, I = [];
                                    for (var _ in r) r.hasOwnProperty(_) && "$" !== _.charAt(0) && I.push(_)
                                }
                                for (S = I.length, M = new Array(S), f = 0; S > f; f++)
                                    if (C = r === I ? f : I[f], P = r[C], E = A(C, P, f), g[E]) L = g[E], delete g[E], R[E] = L, M[f] = L;
                                    else {
                                        if (R[E]) throw a(M, function(e) {
                                            e && e.scope && (g[e.id] = e)
                                        }), l("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, E, P);
                                        M[f] = {
                                            id: E,
                                            scope: n,
                                            clone: n
                                        }, R[E] = !0
                                    }
                                for (var D in g) {
                                    if (L = g[D], O = me(L.clone), o.leave(O), O[0].parentNode)
                                        for (f = 0, v = O.length; v > f; f++) O[f][s] = !0;
                                    L.scope.$destroy()
                                }
                                for (f = 0; S > f; f++)
                                    if (C = r === I ? f : I[f], P = r[C], L = M[f], L.scope) {
                                        $ = N;
                                        do $ = $.nextSibling; while ($ && $[s]);
                                        c(L) != $ && o.move(me(L.clone), null, xr(N)), N = d(L), u(L.scope, f, b, P, w, C, S)
                                    } else m(function(e, t) {
                                        L.scope = t;
                                        var n = h.cloneNode(!1);
                                        e[e.length++] = n, o.enter(e, null, xr(N)), N = n, L.clone = e, R[L.id] = L, u(L.scope, f, b, P, w, C, S)
                                    });
                                g = R
                            })
                        }
                }
            }
        }],
        fo = "ng-hide",
        po = "ng-hide-animate",
        ho = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, fo, {
                            tempClasses: po
                        })
                    })
                }
            }
        }],
        mo = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, fo, {
                            tempClasses: po
                        })
                    })
                }
            }
        }],
        go = Kn(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && a(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        vo = ["$animate", function(e) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, o) {
                    var s = i.ngSwitch || i.on,
                        l = [],
                        u = [],
                        c = [],
                        d = [],
                        f = function(e, t) {
                            return function() {
                                e.splice(t, 1)
                            }
                        };
                    n.$watch(s, function(n) {
                        var r, i;
                        for (r = 0, i = c.length; i > r; ++r) e.cancel(c[r]);
                        for (c.length = 0, r = 0, i = d.length; i > r; ++r) {
                            var s = me(u[r].clone);
                            d[r].$destroy();
                            var p = c[r] = e.leave(s);
                            p.then(f(c, r))
                        }
                        u.length = 0, d.length = 0, (l = o.cases["!" + n] || o.cases["?"]) && a(l, function(n) {
                            n.transclude(function(r, i) {
                                d.push(i);
                                var a = n.element;
                                r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                var o = {
                                    clone: r
                                };
                                u.push(o), e.enter(r, a.parent(), a)
                            })
                        })
                    })
                }
            }
        }],
        yo = Kn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        $o = Kn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        bo = Kn({
            restrict: "EAC",
            link: function(e, t, n, i, a) {
                if (!a) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", J(t));
                a(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        wo = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id,
                            i = t[0].text;
                        e.put(r, i)
                    }
                }
            }
        }],
        So = {
            $setViewValue: m,
            $render: m
        },
        ko = ["$element", "$scope", "$attrs", function(e, r, i) {
            var a = this,
                o = new Qe;
            a.ngModelCtrl = So, a.unknownOption = xr(t.createElement("option")), a.renderUnknownOption = function(t) {
                var n = "? " + Xe(t) + " ?";
                a.unknownOption.val(n), e.prepend(a.unknownOption), e.val(n)
            }, r.$on("$destroy", function() {
                a.renderUnknownOption = m
            }), a.removeUnknownOption = function() {
                a.unknownOption.parent() && a.unknownOption.remove()
            }, a.readValue = function() {
                return a.removeUnknownOption(), e.val()
            }, a.writeValue = function(t) {
                a.hasOption(t) ? (a.removeUnknownOption(), e.val(t), "" === t && a.emptyOption.prop("selected", !0)) : null == t && a.emptyOption ? (a.removeUnknownOption(), e.val("")) : a.renderUnknownOption(t)
            }, a.addOption = function(e, t) {
                pe(e, '"option value"'), "" === e && (a.emptyOption = t);
                var n = o.get(e) || 0;
                o.put(e, n + 1)
            }, a.removeOption = function(e) {
                var t = o.get(e);
                t && (1 === t ? (o.remove(e), "" === e && (a.emptyOption = n)) : o.put(e, t - 1))
            }, a.hasOption = function(e) {
                return !!o.get(e)
            }
        }],
        xo = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ko,
                link: function(e, t, n, r) {
                    var i = r[1];
                    if (i) {
                        var o = r[0];
                        if (o.ngModelCtrl = i, i.$render = function() {
                                o.writeValue(i.$viewValue)
                            }, t.on("change", function() {
                                e.$apply(function() {
                                    i.$setViewValue(o.readValue())
                                })
                            }), n.multiple) {
                            o.readValue = function() {
                                var e = [];
                                return a(t.find("option"), function(t) {
                                    t.selected && e.push(t.value)
                                }), e
                            }, o.writeValue = function(e) {
                                var n = new Qe(e);
                                a(t.find("option"), function(e) {
                                    e.selected = b(n.get(e.value))
                                })
                            };
                            var s, l = NaN;
                            e.$watch(function() {
                                l !== i.$viewValue || B(s, i.$viewValue) || (s = V(i.$viewValue), i.$render()), l = i.$viewValue
                            }), i.$isEmpty = function(e) {
                                return !e || 0 === e.length
                            }
                        }
                    }
                }
            }
        },
        To = ["$interpolate", function(e) {
            function t(e) {
                e[0].hasAttribute("selected") && (e[0].selected = !0)
            }
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, r) {
                    if ($(r.value)) {
                        var i = e(n.text(), !0);
                        i || r.$set("value", n.text())
                    }
                    return function(e, n, r) {
                        var a = "$selectController",
                            o = n.parent(),
                            s = o.data(a) || o.parent().data(a);
                        s && s.ngModelCtrl && (i ? e.$watch(i, function(e, i) {
                            r.$set("value", e), i !== e && s.removeOption(i), s.addOption(e, n), s.ngModelCtrl.$render(), t(n)
                        }) : (s.addOption(r.value, n), s.ngModelCtrl.$render(), t(n)), n.on("$destroy", function() {
                            s.removeOption(r.value), s.ngModelCtrl.$render()
                        }))
                    }
                }
            }
        }],
        Co = v({
            restrict: "E",
            terminal: !1
        }),
        Po = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Eo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, i, a) {
                    if (a) {
                        var o, s = i.ngPattern || i.pattern;
                        i.$observe("pattern", function(e) {
                            if (k(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, J(t));
                            o = e || n, a.$validate()
                        }), a.$validators.pattern = function(e) {
                            return a.$isEmpty(e) || $(o) || o.test(e)
                        }
                    }
                }
            }
        },
        Ao = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(e) {
                            var t = p(e);
                            i = isNaN(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        },
        Io = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(e) {
                            i = p(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ce(), be(Or), Or.module("ngLocale", [], ["$provide", function(e) {
        function t(e) {
            e += "";
            var t = e.indexOf(".");
            return -1 == t ? 0 : e.length - t - 1
        }

        function r(e, r) {
            var i = r;
            n === i && (i = Math.min(t(e), 3));
            var a = Math.pow(10, i),
                o = (e * a | 0) % a;
            return {
                v: i,
                f: o
            }
        }
        var i = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function(e, t) {
                var n = 0 | e,
                    a = r(e, t);
                return 1 == n && 0 == a.v ? i.ONE : i.OTHER
            }
        })
    }]), void xr(t).ready(function() {
        ae(t, oe)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return j(new(j(function() {}, {
                prototype: e
            })), t)
        }

        function i(e) {
            return U(arguments, function(t) {
                t !== e && U(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function a(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function o(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return U(e, function(e, n) {
                t.push(n)
            }), t
        }

        function s(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function l(e, t, n, r) {
            var i, l = a(n, r),
                u = {},
                c = [];
            for (var d in l)
                if (l[d].params && (i = o(l[d].params), i.length))
                    for (var f in i) s(c, i[f]) >= 0 || (c.push(i[f]), u[i[f]] = e[i[f]]);
            return j({}, u, t)
        }

        function u(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var a = n[i];
                if (e[a] != t[a]) return !1
            }
            return !0
        }

        function c(e, t) {
            var n = {};
            return U(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function d(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return U(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function f(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) - 1 == s(n, r) && (t[r] = e[r]);
            return t
        }

        function p(e, t) {
            var n = D(e),
                r = n ? [] : {};
            return U(e, function(e, i) {
                t(e, i) && (r[n ? r.length : i] = e)
            }), r
        }

        function h(e, t) {
            var n = D(e) ? [] : {};
            return U(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function m(e, t) {
            var r = 1,
                a = 2,
                l = {},
                u = [],
                c = l,
                d = j(e.when(l), {
                    $$promises: l,
                    $$values: l
                });
            this.study = function(l) {
                function p(e, n) {
                    if (y[n] !== a) {
                        if (v.push(n), y[n] === r) throw v.splice(0, s(v, n)), new Error("Cyclic dependency: " + v.join(" -> "));
                        if (y[n] = r, R(e)) g.push(n, [function() {
                            return t.get(e)
                        }], u);
                        else {
                            var i = t.annotate(e);
                            U(i, function(e) {
                                e !== n && l.hasOwnProperty(e) && p(l[e], e)
                            }), g.push(n, e, i)
                        }
                        v.pop(), y[n] = a
                    }
                }

                function h(e) {
                    return _(e) && e.then && e.$$promises
                }
                if (!_(l)) throw new Error("'invocables' must be an object");
                var m = o(l || {}),
                    g = [],
                    v = [],
                    y = {};
                return U(l, p), l = v = y = null,
                    function(r, a, o) {
                        function s() {
                            --b || (w || i($, a.$$values), v.$$values = $, v.$$promises = v.$$promises || !0, delete v.$$inheritedValues, p.resolve($))
                        }

                        function l(e) {
                            v.$$failure = e, p.reject(e)
                        }

                        function u(n, i, a) {
                            function u(e) {
                                d.reject(e), l(e)
                            }

                            function c() {
                                if (!O(v.$$failure)) try {
                                    d.resolve(t.invoke(i, o, $)), d.promise.then(function(e) {
                                        $[n] = e, s()
                                    }, u)
                                } catch (e) {
                                    u(e)
                                }
                            }
                            var d = e.defer(),
                                f = 0;
                            U(a, function(e) {
                                y.hasOwnProperty(e) && !r.hasOwnProperty(e) && (f++, y[e].then(function(t) {
                                    $[e] = t, --f || c()
                                }, u))
                            }), f || c(), y[n] = d.promise
                        }
                        if (h(r) && o === n && (o = a, a = r, r = null), r) {
                            if (!_(r)) throw new Error("'locals' must be an object")
                        } else r = c;
                        if (a) {
                            if (!h(a)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else a = d;
                        var p = e.defer(),
                            v = p.promise,
                            y = v.$$promises = {},
                            $ = j({}, r),
                            b = 1 + g.length / 3,
                            w = !1;
                        if (O(a.$$failure)) return l(a.$$failure), v;
                        a.$$inheritedValues && i($, f(a.$$inheritedValues, m)), j(y, a.$$promises), a.$$values ? (w = i($, f(a.$$values, m)), v.$$inheritedValues = f(a.$$values, m), s()) : (a.$$inheritedValues && (v.$$inheritedValues = f(a.$$inheritedValues, m)), a.then(s, l));
                        for (var S = 0, k = g.length; k > S; S += 3) r.hasOwnProperty(g[S]) ? s() : u(g[S], g[S + 1], g[S + 2]);
                        return v
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function g(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return O(e.template) ? this.fromString(e.template, t) : O(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : O(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return N(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return N(n) && (n = n(r)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function v(e, t, i) {
            function a(t, n, r, i) {
                if (g.push(t), h[t]) return h[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (m[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return m[t] = new V.Param(t, n, r, i), m[t]
            }

            function o(e, t, n, r) {
                var i = ["", ""],
                    a = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return a;
                switch (n) {
                    case !1:
                        i = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        i = ["?(", ")?"];
                        break;
                    default:
                        i = ["(" + n + "|", ")?"]
                }
                return a + i[0] + t + i[1]
            }

            function s(i, a) {
                var o, s, l, u, c;
                return o = i[2] || i[3], c = t.params[o], l = e.substring(f, i.index), s = a ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), u = V.type(s || "string") || r(V.type("string"), {
                    pattern: new RegExp(s, t.caseInsensitive ? "i" : n)
                }), {
                    id: o,
                    regexp: s,
                    segment: l,
                    type: u,
                    cfg: c
                }
            }
            t = j({
                params: {}
            }, _(t) ? t : {});
            var l, u = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                d = "^",
                f = 0,
                p = this.segments = [],
                h = i ? i.params : {},
                m = this.params = i ? i.params.$$new() : new V.ParamSet,
                g = [];
            this.source = e;
            for (var v, y, $;
                (l = u.exec(e)) && (v = s(l, !1), !(v.segment.indexOf("?") >= 0));) y = a(v.id, v.type, v.cfg, "path"), d += o(v.segment, y.type.pattern.source, y.squash, y.isOptional), p.push(v.segment), f = u.lastIndex;
            $ = e.substring(f);
            var b = $.indexOf("?");
            if (b >= 0) {
                var w = this.sourceSearch = $.substring(b);
                if ($ = $.substring(0, b), this.sourcePath = e.substring(0, f + b), w.length > 0)
                    for (f = 0; l = c.exec(w);) v = s(l, !0), y = a(v.id, v.type, v.cfg, "search"), f = u.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            d += o($) + (t.strict === !1 ? "/?" : "") + "$", p.push($), this.regexp = new RegExp(d, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = g
        }

        function y(e) {
            j(this, e)
        }

        function $() {
            function e(e) {
                return null != e ? e.toString().replace(/\//g, "%2F") : e
            }

            function i(e) {
                return null != e ? e.toString().replace(/%2F/g, "/") : e
            }

            function a() {
                return {
                    strict: m,
                    caseInsensitive: f
                }
            }

            function l(e) {
                return N(e) || D(e) && N(e[e.length - 1])
            }

            function u() {
                for (; S.length;) {
                    var e = S.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(b[e.name], d.invoke(e.def))
                }
            }

            function c(e) {
                j(this, e || {})
            }
            V = this;
            var d, f = !1,
                m = !0,
                g = !1,
                b = {},
                w = !0,
                S = [],
                k = {
                    string: {
                        encode: e,
                        decode: i,
                        is: function(e) {
                            return null == e || !O(e) || "string" == typeof e
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return O(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            $.$$getDefaultValue = function(e) {
                if (!l(e.value)) return e.value;
                if (!d) throw new Error("Injectable functions cannot be called at configuration time");
                return d.invoke(e.value)
            }, this.caseInsensitive = function(e) {
                return O(e) && (f = e), f
            }, this.strictMode = function(e) {
                return O(e) && (m = e), m
            }, this.defaultSquashPolicy = function(e) {
                if (!O(e)) return g;
                if (e !== !0 && e !== !1 && !R(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return g = e, e
            }, this.compile = function(e, t) {
                return new v(e, j(a(), t))
            }, this.isMatcher = function(e) {
                if (!_(e)) return !1;
                var t = !0;
                return U(v.prototype, function(n, r) {
                    N(n) && (t = t && O(e[r]) && N(e[r]))
                }), t
            }, this.type = function(e, t, n) {
                if (!O(t)) return b[e];
                if (b.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return b[e] = new y(j({
                    name: e
                }, t)), n && (S.push({
                    name: e,
                    def: n
                }), w || u()), this
            }, U(k, function(e, t) {
                b[t] = new y(j({
                    name: t
                }, e))
            }), b = r(b, {}), this.$get = ["$injector", function(e) {
                return d = e, w = !1, u(), U(k, function(e, t) {
                    b[t] || (b[t] = new y(e))
                }), this
            }], this.Param = function(e, t, r, i) {
                function a(e) {
                    var t = _(e) ? o(e) : [],
                        n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = l(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function u(t, n, r) {
                    if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
                    return n ? n : t.type ? t.type instanceof y ? t.type : new y(t.type) : "config" === r ? b.any : b.string
                }

                function c() {
                    var t = {
                            array: "search" === i ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return j(t, n, r).array
                }

                function f(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!O(n) || null == n) return g;
                    if (n === !0 || R(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function m(e, t, r, i) {
                    var a, o, l = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return a = D(e.replace) ? e.replace : [], R(i) && a.push({
                        from: i,
                        to: n
                    }), o = h(a, function(e) {
                        return e.from
                    }), p(l, function(e) {
                        return -1 === s(o, e.from)
                    }).concat(a)
                }

                function v() {
                    if (!d) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = d.invoke(r.$$fn);
                    if (null !== e && e !== n && !S.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + S.id + "' is not an instance of Type (" + S.type.name + ")");
                    return e
                }

                function $(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = h(p(S.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), O(e) ? S.type.$normalize(e) : v()
                }

                function w() {
                    return "{Param:" + e + " " + t + " squash: '" + T + "' optional: " + x + "}"
                }
                var S = this;
                r = a(r), t = u(r, t, i);
                var k = c();
                t = k ? t.$asArray(k, "search" === i) : t, "string" !== t.name || k || "path" !== i || r.value !== n || (r.value = "");
                var x = r.value !== n,
                    T = f(r, x),
                    C = m(r, k, x, T);
                j(this, {
                    id: e,
                    type: t,
                    location: i,
                    array: k,
                    squash: T,
                    replace: C,
                    isOptional: x,
                    value: $,
                    dynamic: n,
                    config: r,
                    toString: w
                })
            }, c.prototype = {
                $$new: function() {
                    return r(this, j(new c, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var e = [], t = [], n = this, r = o(c.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), U(t, function(t) {
                        U(o(t), function(t) {
                            -1 === s(e, t) && -1 === s(r, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return U(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return U(r.$$keys(), function(i) {
                        var a = e && e[i],
                            o = t && t[i];
                        r[i].type.equals(a, o) || (n = !1)
                    }), n
                },
                $$validates: function(e) {
                    var r, i, a, o, s, l = this.$$keys();
                    for (r = 0; r < l.length && (i = this[l[r]], a = e[l[r]], a !== n && null !== a || !i.isOptional); r++) {
                        if (o = i.type.$normalize(a), !i.type.is(o)) return !1;
                        if (s = i.type.encode(o), t.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = c
        }

        function b(e, r) {
            function i(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function a(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function o(e, t, n) {
                if (!n) return !1;
                var r = e.invoke(t, t, {
                    $match: n
                });
                return O(r) ? r : !0
            }

            function s(r, i, a, o) {
                function s(e, t, n) {
                    return "/" === m ? e : t ? m.slice(0, -1) + e : n ? m.slice(1) + e : e
                }

                function f(e) {
                    function t(e) {
                        var t = e(a, r);
                        return t ? (R(t) && r.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        h && r.url() === h, h = n;
                        var i, o = u.length;
                        for (i = 0; o > i; i++)
                            if (t(u[i])) return;
                        c && t(c)
                    }
                }

                function p() {
                    return l = l || i.$on("$locationChangeSuccess", f)
                }
                var h, m = o.baseHref(),
                    g = r.url();
                return d || p(), {
                    sync: function() {
                        f()
                    },
                    listen: function() {
                        return p()
                    },
                    update: function(e) {
                        return e ? void(g = r.url()) : void(r.url() !== g && (r.url(g), r.replace()))
                    },
                    push: function(e, t, i) {
                        var a = e.format(t || {});
                        null !== a && t && t["#"] && (a += "#" + t["#"]), r.url(a), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, a) {
                        if (!n.validates(i)) return null;
                        var o = e.html5Mode();
                        t.isObject(o) && (o = o.enabled);
                        var l = n.format(i);
                        if (a = a || {}, o || null === l || (l = "#" + e.hashPrefix() + l), null !== l && i && i["#"] && (l += "#" + i["#"]), l = s(l, o, a.absolute), !a.absolute || !l) return l;
                        var u = !o && l ? "/" : "",
                            c = r.port();
                        return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, u, l].join("")
                    }
                }
            }
            var l, u = [],
                c = null,
                d = !1;
            this.rule = function(e) {
                if (!N(e)) throw new Error("'rule' must be a function");
                return u.push(e), this
            }, this.otherwise = function(e) {
                if (R(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!N(e)) throw new Error("'rule' must be a function");
                return c = e, this
            }, this.when = function(e, t) {
                var n, s = R(t);
                if (R(e) && (e = r.compile(e)), !s && !N(t) && !D(t)) throw new Error("invalid 'handler' in when()");
                var l = {
                        matcher: function(e, t) {
                            return s && (n = r.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), j(function(n, r) {
                                return o(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: R(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return s && (n = t, t = ["$match", function(e) {
                                return a(n, e)
                            }]), j(function(n, r) {
                                return o(n, t, e.exec(r.path()))
                            }, {
                                prefix: i(e)
                            })
                        }
                    },
                    u = {
                        matcher: r.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var c in u)
                    if (u[c]) return this.rule(l[c](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), d = e
            }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function w(e, i) {
            function a(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function f(e, t) {
                if (!e) return n;
                var r = R(e),
                    i = r ? e : e.name,
                    o = a(i);
                if (o) {
                    if (!t) throw new Error("No reference point given for path '" + i + "'");
                    t = f(t);
                    for (var s = i.split("."), l = 0, u = s.length, c = t; u > l; l++)
                        if ("" !== s[l] || 0 !== l) {
                            if ("^" !== s[l]) break;
                            if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                            c = c.parent
                        } else c = t;
                    s = s.slice(l).join("."), i = c.name + (c.name && s ? "." : "") + s
                }
                var d = T[i];
                return !d || !r && (r || d !== e && d.self !== e) ? n : d
            }

            function p(e, t) {
                C[e] || (C[e] = []), C[e].push(t)
            }

            function m(e) {
                for (var t = C[e] || []; t.length;) g(t.shift())
            }

            function g(t) {
                t = r(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!R(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (T.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : R(t.parent) ? t.parent : _(t.parent) && R(t.parent.name) ? t.parent.name : "";
                if (i && !T[i]) return p(i, t.self);
                for (var a in E) N(E[a]) && (t[a] = E[a](t, E.$delegates[a]));
                return T[n] = t, !t[P] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    x.$current.navigable == t && u(e, n) || x.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), m(n), t
            }

            function v(e) {
                return e.indexOf("*") > -1
            }

            function y(e) {
                for (var t = e.split("."), n = x.$current.name.split("."), r = 0, i = t.length; i > r; r++) "*" === t[r] && (n[r] = "*");
                return "**" === t[0] && (n = n.slice(s(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function $(e, t) {
                return R(e) && !O(t) ? E[e] : N(t) && R(e) ? (E[e] && !E.$delegates[e] && (E.$delegates[e] = E[e]), E[e] = t, this) : this
            }

            function b(e, t) {
                return _(e) ? t = e : t.name = e, g(t), this
            }

            function w(e, i, a, s, d, p, m, g, $) {
                function b(t, n, r, a) {
                    var o = e.$broadcast("$stateNotFound", t, n, r);
                    if (o.defaultPrevented) return m.update(), A;
                    if (!o.retry) return null;
                    if (a.$retry) return m.update(), I;
                    var s = x.transition = i.when(o.retry);
                    return s.then(function() {
                        return s !== x.transition ? C : (t.options.$retry = !0, x.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return A
                    }), m.update(), s
                }

                function w(e, n, r, o, l, u) {
                    function f() {
                        var n = [];
                        return U(e.views, function(r, i) {
                            var o = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                            o.$template = [function() {
                                return a.load(i, {
                                    view: r,
                                    locals: l.globals,
                                    params: p,
                                    notify: u.notify
                                }) || ""
                            }], n.push(d.resolve(o, l.globals, l.resolve, e).then(function(n) {
                                if (N(r.controllerProvider) || D(r.controllerProvider)) {
                                    var a = t.extend({}, o, l.globals);
                                    n.$$controller = s.invoke(r.controllerProvider, null, a)
                                } else n.$$controller = r.controller;
                                n.$$state = e, n.$$controllerAs = r.controllerAs, l[i] = n
                            }))
                        }), i.all(n).then(function() {
                            return l.globals
                        })
                    }
                    var p = r ? n : c(e.params.$$keys(), n),
                        h = {
                            $stateParams: p
                        };
                    l.resolve = d.resolve(e.resolve, h, l.resolve, e);
                    var m = [l.resolve.then(function(e) {
                        l.globals = e
                    })];
                    return o && m.push(o), i.all(m).then(f).then(function(e) {
                        return l
                    })
                }
                var C = i.reject(new Error("transition superseded")),
                    E = i.reject(new Error("transition prevented")),
                    A = i.reject(new Error("transition aborted")),
                    I = i.reject(new Error("transition failed"));
                return k.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, x = {
                    params: {},
                    current: k.self,
                    $current: k,
                    transition: null
                }, x.reload = function(e) {
                    return x.transitionTo(x.current, p, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, x.go = function(e, t, n) {
                    return x.transitionTo(e, t, j({
                        inherit: !0,
                        relative: x.$current
                    }, n))
                }, x.transitionTo = function(t, n, a) {
                    n = n || {}, a = j({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, a || {});
                    var o, u = x.$current,
                        d = x.params,
                        h = u.path,
                        g = f(t, a.relative),
                        v = n["#"];
                    if (!O(g)) {
                        var y = {
                                to: t,
                                toParams: n,
                                options: a
                            },
                            $ = b(y, u.self, d, a);
                        if ($) return $;
                        if (t = y.to, n = y.toParams, a = y.options, g = f(t, a.relative), !O(g)) {
                            if (!a.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + a.relative + "'")
                        }
                    }
                    if (g[P]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (a.inherit && (n = l(p, n || {}, x.$current, g)), !g.params.$$validates(n)) return I;
                    n = g.params.$$values(n), t = g;
                    var T = t.path,
                        A = 0,
                        L = T[A],
                        M = k.locals,
                        N = [];
                    if (a.reload) {
                        if (R(a.reload) || _(a.reload)) {
                            if (_(a.reload) && !a.reload.name) throw new Error("Invalid reload state object");
                            var D = a.reload === !0 ? h[0] : f(a.reload);
                            if (a.reload && !D) throw new Error("No such reload state '" + (R(a.reload) ? a.reload : a.reload.name) + "'");
                            for (; L && L === h[A] && L !== D;) M = N[A] = L.locals, A++, L = T[A]
                        }
                    } else
                        for (; L && L === h[A] && L.ownParams.$$equals(n, d);) M = N[A] = L.locals, A++, L = T[A];
                    if (S(t, n, u, d, M, a)) return v && (n["#"] = v), x.params = n, q(x.params, p), a.location && t.navigable && t.navigable.url && (m.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === a.location
                    }), m.update(!0)), x.transition = null, i.when(x.current);
                    if (n = c(t.params.$$keys(), n || {}), a.notify && e.$broadcast("$stateChangeStart", t.self, n, u.self, d).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, u.self, d), m.update(), E;
                    for (var U = i.when(M), V = A; V < T.length; V++, L = T[V]) M = N[V] = r(M), U = w(L, n, L === t, U, M, a);
                    var B = x.transition = U.then(function() {
                        var r, i, o;
                        if (x.transition !== B) return C;
                        for (r = h.length - 1; r >= A; r--) o = h[r], o.self.onExit && s.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                        for (r = A; r < T.length; r++) i = T[r], i.locals = N[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return v && (n["#"] = v), x.transition !== B ? C : (x.$current = t, x.current = t.self, x.params = n, q(x.params, p), x.transition = null, a.location && t.navigable && m.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === a.location
                        }), a.notify && e.$broadcast("$stateChangeSuccess", t.self, n, u.self, d), m.update(!0), x.current)
                    }, function(r) {
                        return x.transition !== B ? C : (x.transition = null, o = e.$broadcast("$stateChangeError", t.self, n, u.self, d, r), o.defaultPrevented || m.update(), i.reject(r))
                    });
                    return B
                }, x.is = function(e, t, r) {
                    r = j({
                        relative: x.$current
                    }, r || {});
                    var i = f(e, r.relative);
                    return O(i) ? x.$current !== i ? !1 : t ? u(i.params.$$values(t), p) : !0 : n
                }, x.includes = function(e, t, r) {
                    if (r = j({
                            relative: x.$current
                        }, r || {}), R(e) && v(e)) {
                        if (!y(e)) return !1;
                        e = x.$current.name
                    }
                    var i = f(e, r.relative);
                    return O(i) ? O(x.$current.includes[i.name]) ? t ? u(i.params.$$values(t), p, o(t)) : !0 : !1 : n
                }, x.href = function(e, t, r) {
                    r = j({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: x.$current
                    }, r || {});
                    var i = f(e, r.relative);
                    if (!O(i)) return null;
                    r.inherit && (t = l(p, t || {}, x.$current, i));
                    var a = i && r.lossy ? i.navigable : i;
                    return a && a.url !== n && null !== a.url ? m.href(a.url, c(i.params.$$keys().concat("#"), t || {}), {
                        absolute: r.absolute
                    }) : null
                }, x.get = function(e, t) {
                    if (0 === arguments.length) return h(o(T), function(e) {
                        return T[e].self
                    });
                    var n = f(e, t || x.$current);
                    return n && n.self ? n.self : null
                }, x
            }

            function S(e, t, n, r, i, a) {
                function o(e, t, n) {
                    function r(t) {
                        return "search" != e.params[t].location
                    }
                    var i = e.params.$$keys().filter(r),
                        a = d.apply({}, [e.params].concat(i)),
                        o = new V.ParamSet(a);
                    return o.$$equals(t, n)
                }
                return !a.reload && e === n && (i === n.locals || e.self.reloadOnSearch === !1 && o(n, r, t)) ? !0 : void 0
            }
            var k, x, T = {},
                C = {},
                P = "abstract",
                E = {
                    parent: function(e) {
                        if (O(e.parent) && e.parent) return f(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? f(t[1]) : k
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = j({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (R(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || k).url.concat(t, n);
                        if (!t || i.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new V.ParamSet;
                        return U(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new V.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? j(e.parent.params.$$new(), e.ownParams) : new V.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return U(O(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? j({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            k = g({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), k.navigable = null, this.decorator = $, this.state = b, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function S() {
            function e(e, t) {
                return {
                    load: function(n, r) {
                        var i, a = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = j(a, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function k() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function x(e, n, r, i) {
            function a() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function o(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (u) return {
                    enter: function(e, t, n) {
                        var r = u.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = u.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (l) {
                    var r = l && l(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var s = a(),
                l = s("$animator"),
                u = s("$animate"),
                c = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, a, s) {
                        return function(n, a, l) {
                            function u() {
                                d && (d.remove(), d = null), p && (p.$destroy(), p = null), f && (v.leave(f, function() {
                                    d = null
                                }), d = f, f = null)
                            }

                            function c(o) {
                                var c, d = C(n, l, a, i),
                                    y = d && e.$current && e.$current.locals[d];
                                if (o || y !== h) {
                                    c = n.$new(), h = e.$current.locals[d];
                                    var $ = s(c, function(e) {
                                        v.enter(e, a, function() {
                                            p && p.$emit("$viewContentAnimationEnded"), (t.isDefined(g) && !g || n.$eval(g)) && r(e)
                                        }), u()
                                    });
                                    f = $, p = c, p.$emit("$viewContentLoaded"), p.$eval(m)
                                }
                            }
                            var d, f, p, h, m = l.onload || "",
                                g = l.autoscroll,
                                v = o(l, n);
                            n.$on("$stateChangeSuccess", function() {
                                c(!1)
                            }), n.$on("$viewContentLoading", function() {
                                c(!1)
                            }), c(!0)
                        }
                    }
                };
            return c
        }

        function T(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var a = i.html();
                    return function(i, o, s) {
                        var l = n.$current,
                            u = C(i, s, o, r),
                            c = l && l.locals[u];
                        if (c) {
                            o.data("$uiView", {
                                name: u,
                                state: c.$$state
                            }), o.html(c.$template ? c.$template : a);
                            var d = e(o.contents());
                            if (c.$$controller) {
                                c.$scope = i, c.$element = o;
                                var f = t(c.$$controller, c);
                                c.$$controllerAs && (i[c.$$controllerAs] = f), o.data("$ngControllerController", f), o.children().data("$ngControllerController", f)
                            }
                            d(i)
                        }
                    }
                }
            }
        }

        function C(e, t, n, r) {
            var i = r(t.uiView || t.name || "")(e),
                a = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (a ? a.state.name : "")
        }

        function P(e, t) {
            var n, r = e.match(/^\s*({[^}]*})\s*$/);
            if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function E(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function A(e, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, a, o, s) {
                    var l = P(o.uiSref, e.current.name),
                        u = null,
                        c = E(a) || e.$current,
                        d = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")) ? "xlink:href" : "href",
                        f = null,
                        p = "A" === a.prop("tagName").toUpperCase(),
                        h = "FORM" === a[0].nodeName,
                        m = h ? "action" : d,
                        g = !0,
                        v = {
                            relative: c,
                            inherit: !0
                        },
                        y = i.$eval(o.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in y && (v[e] = y[e])
                    });
                    var $ = function(n) {
                        if (n && (u = t.copy(n)), g) {
                            f = e.href(l.state, u, v);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(l.state, u), null === f ? (g = !1, !1) : void o.$set(m, f)
                        }
                    };
                    l.paramExpr && (i.$watch(l.paramExpr, function(e, t) {
                        e !== u && $(e)
                    }, !0), u = t.copy(i.$eval(l.paramExpr))), $(), h || a.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || a.attr("target"))) {
                            var i = n(function() {
                                e.go(l.state, u, v)
                            });
                            t.preventDefault();
                            var o = p && !f ? 1 : 0;
                            t.preventDefault = function() {
                                o-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function I(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, i) {
                    function a() {
                        o() ? r.addClass(l) : r.removeClass(l)
                    }

                    function o() {
                        for (var e = 0; e < u.length; e++)
                            if (s(u[e].state, u[e].params)) return !0;
                        return !1
                    }

                    function s(t, n) {
                        return "undefined" != typeof i.uiSrefActiveEq ? e.is(t.name, n) : e.includes(t.name, n)
                    }
                    var l, u = [];
                    l = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$addStateInfo = function(t, n) {
                        var i = e.get(t, E(r));
                        u.push({
                            state: i || {
                                name: t
                            },
                            params: n
                        }), a()
                    }, t.$on("$stateChangeSuccess", a)
                }]
            }
        }

        function L(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function M(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var O = t.isDefined,
            N = t.isFunction,
            R = t.isString,
            _ = t.isObject,
            D = t.isArray,
            U = t.forEach,
            j = t.extend,
            q = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), m.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", m), g.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", g);
        var V;
        v.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: V.caseInsensitive(),
                strict: V.strictMode(),
                squash: V.defaultSquashPolicy()
            };
            return new v(this.sourcePath + e + this.sourceSearch, j(n, t), this)
        }, v.prototype.toString = function() {
            return this.source
        }, v.prototype.exec = function(e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    i = h(r, t);
                return h(i, n).reverse()
            }
            var r = this.regexp.exec(e);
            if (!r) return null;
            t = t || {};
            var i, a, o, s = this.parameters(),
                l = s.length,
                u = this.segments.length - 1,
                c = {};
            if (u !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; u > i; i++) {
                o = s[i];
                var d = this.params[o],
                    f = r[i + 1];
                for (a = 0; a < d.replace; a++) d.replace[a].from === f && (f = d.replace[a].to);
                f && d.array === !0 && (f = n(f)), c[o] = d.value(f)
            }
            for (; l > i; i++) o = s[i], c[o] = this.params[o].value(t[o]);
            return c
        }, v.prototype.parameters = function(e) {
            return O(e) ? this.params[e] || null : this.$$paramNames
        }, v.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, v.prototype.format = function(e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(e)) return null;
            var a, o = !1,
                s = n.length - 1,
                l = r.length,
                u = n[0];
            for (a = 0; l > a; a++) {
                var c = s > a,
                    d = r[a],
                    f = i[d],
                    p = f.value(e[d]),
                    m = f.isOptional && f.type.equals(f.value(), p),
                    g = m ? f.squash : !1,
                    v = f.type.encode(p);
                if (c) {
                    var y = n[a + 1];
                    if (g === !1) null != v && (u += D(v) ? h(v, t).join("-") : encodeURIComponent(v)), u += y;
                    else if (g === !0) {
                        var $ = u.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        u += y.match($)[1]
                    } else R(g) && (u += g + y)
                } else {
                    if (null == v || m && g !== !1) continue;
                    D(v) || (v = [v]), v = h(v, encodeURIComponent).join("&" + d + "="), u += (o ? "&" : "?") + (d + "=" + v), o = !0
                }
            }
            return u
        }, y.prototype.is = function(e, t) {
            return !0
        }, y.prototype.encode = function(e, t) {
            return e
        }, y.prototype.decode = function(e, t) {
            return e
        }, y.prototype.equals = function(e, t) {
            return e == t
        }, y.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, y.prototype.pattern = /.*/, y.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, y.prototype.$normalize = function(e) {
            return this.is(e) ? e : this.decode(e)
        }, y.prototype.$asArray = function(e, t) {
            function r(e, t) {
                function r(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function i(e) {
                    return D(e) ? e : O(e) ? [e] : []
                }

                function a(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function o(e) {
                    return !e
                }

                function s(e, t) {
                    return function(n) {
                        n = i(n);
                        var r = h(n, e);
                        return t === !0 ? 0 === p(r, o).length : a(r)
                    }
                }

                function l(e) {
                    return function(t, n) {
                        var r = i(t),
                            a = i(n);
                        if (r.length !== a.length) return !1;
                        for (var o = 0; o < r.length; o++)
                            if (!e(r[o], a[o])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(e, "encode")), this.decode = s(r(e, "decode")), this.is = s(r(e, "is"), !0), this.equals = l(r(e, "equals")), this.pattern = e.pattern, this.$normalize = s(r(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", $), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), b.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", b), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", w), S.$inject = [], t.module("ui.router.state").provider("$view", S), t.module("ui.router.state").provider("$uiViewScroll", k), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], T.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", x), t.module("ui.router.state").directive("uiView", T), A.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", A).directive("uiSrefActive", I).directive("uiSrefActiveEq", I), L.$inject = ["$state"], M.$inject = ["$state"], t.module("ui.router.state").filter("isState", L).filter("includedByState", M)
    }(window, window.angular),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t()
        }) : "object" == typeof exports ? module.exports = t() : t()
    }(this, function() {
        function e(e) {
            "use strict";
            var t = e.storageKey(),
                n = e.storage(),
                r = function() {
                    var r = e.preferredLanguage();
                    angular.isString(r) ? e.use(r) : n.put(t, e.use())
                };
            r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(t) ? e.use(n.get(t))["catch"](r) : r() : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
        }

        function t() {
            "use strict";
            var e, t, n = null,
                r = !1,
                i = !1;
            t = {
                sanitize: function(e, t) {
                    return "text" === t && (e = o(e)), e
                },
                escape: function(e, t) {
                    return "text" === t && (e = a(e)), e
                },
                sanitizeParameters: function(e, t) {
                    return "params" === t && (e = s(e, o)), e
                },
                escapeParameters: function(e, t) {
                    return "params" === t && (e = s(e, a)), e
                }
            }, t.escaped = t.escapeParameters, this.addStrategy = function(e, n) {
                return t[e] = n, this
            }, this.removeStrategy = function(e) {
                return delete t[e], this
            }, this.useStrategy = function(e) {
                return r = !0, n = e, this
            }, this.$get = ["$injector", "$log", function(a, o) {
                var s = function(e, n, r) {
                        return angular.forEach(r, function(r) {
                            if (angular.isFunction(r)) e = r(e, n);
                            else {
                                if (!angular.isFunction(t[r])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'");
                                e = t[r](e, n)
                            }
                        }), e
                    },
                    l = function() {
                        r || i || (o.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), i = !0)
                    };
                return a.has("$sanitize") && (e = a.get("$sanitize")), {
                    useStrategy: function(e) {
                        return function(t) {
                            e.useStrategy(t)
                        }
                    }(this),
                    sanitize: function(e, t, r) {
                        if (n || l(), arguments.length < 3 && (r = n), !r) return e;
                        var i = angular.isArray(r) ? r : [r];
                        return s(e, t, i)
                    }
                }
            }];
            var a = function(e) {
                    var t = angular.element("<div></div>");
                    return t.text(e), t.html()
                },
                o = function(t) {
                    if (!e) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
                    return e(t)
                },
                s = function(e, t) {
                    if (angular.isObject(e)) {
                        var n = angular.isArray(e) ? [] : {};
                        return angular.forEach(e, function(e, r) {
                            n[r] = s(e, t)
                        }), n
                    }
                    return angular.isNumber(e) ? e : t(e)
                }
        }

        function n(e, t, n, r) {
            "use strict";
            var i, a, o, s, l, u, c, d, f, p, h, m, g, v, y, $ = {},
                b = [],
                w = e,
                S = [],
                k = "translate-cloak",
                x = !1,
                T = !1,
                C = ".",
                P = 0,
                E = !0,
                A = "default",
                I = {
                    "default": function(e) {
                        return (e || "").split("-").join("_")
                    },
                    java: function(e) {
                        var t = (e || "").split("-").join("_"),
                            n = t.split("_");
                        return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : t
                    },
                    bcp47: function(e) {
                        var t = (e || "").split("_").join("-"),
                            n = t.split("-");
                        return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : t
                    }
                },
                L = "2.7.2",
                M = function() {
                    if (angular.isFunction(r.getLocale)) return r.getLocale();
                    var e, n, i = t.$get().navigator,
                        a = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                    if (angular.isArray(i.languages))
                        for (e = 0; e < i.languages.length; e++)
                            if (n = i.languages[e], n && n.length) return n;
                    for (e = 0; e < a.length; e++)
                        if (n = i[a[e]], n && n.length) return n;
                    return null
                };
            M.displayName = "angular-translate/service: getFirstBrowserLanguage";
            var O = function() {
                var e = M() || "";
                return I[A] && (e = I[A](e)), e
            };
            O.displayName = "angular-translate/service: getLocale";
            var N = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                R = function() {
                    return this.toString().replace(/^\s+|\s+$/g, "")
                },
                _ = function(e) {
                    for (var t = [], n = angular.lowercase(e), r = 0, i = b.length; i > r; r++) t.push(angular.lowercase(b[r]));
                    if (N(t, n) > -1) return e;
                    if (a) {
                        var o;
                        for (var s in a) {
                            var l = !1,
                                u = Object.prototype.hasOwnProperty.call(a, s) && angular.lowercase(s) === angular.lowercase(e);
                            if ("*" === s.slice(-1) && (l = s.slice(0, -1) === e.slice(0, s.length - 1)), (u || l) && (o = a[s], N(t, angular.lowercase(o)) > -1)) return o
                        }
                    }
                    if (e) {
                        var c = e.split("_");
                        if (c.length > 1 && N(t, angular.lowercase(c[0])) > -1) return c[0]
                    }
                    return e
                },
                D = function(e, t) {
                    if (!e && !t) return $;
                    if (e && !t) {
                        if (angular.isString(e)) return $[e]
                    } else angular.isObject($[e]) || ($[e] = {}), angular.extend($[e], U(t));
                    return this
                };
            this.translations = D, this.cloakClassName = function(e) {
                return e ? (k = e, this) : k
            };
            var U = function(e, t, n, r) {
                var i, a, o, s;
                t || (t = []), n || (n = {});
                for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (s = e[i], angular.isObject(s) ? U(s, t.concat(i), n, i) : (a = t.length ? "" + t.join(C) + C + i : i, t.length && i === r && (o = "" + t.join(C), n[o] = "@:" + a), n[a] = s));
                return n
            };
            U.displayName = "flatObject", this.addInterpolation = function(e) {
                return S.push(e), this
            }, this.useMessageFormatInterpolation = function() {
                return this.useInterpolation("$translateMessageFormatInterpolation")
            }, this.useInterpolation = function(e) {
                return p = e, this
            }, this.useSanitizeValueStrategy = function(e) {
                return n.useStrategy(e), this
            }, this.preferredLanguage = function(e) {
                return j(e), this
            };
            var j = function(e) {
                return e && (i = e), i
            };
            this.translationNotFoundIndicator = function(e) {
                return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
            }, this.translationNotFoundIndicatorLeft = function(e) {
                return e ? (g = e, this) : g
            }, this.translationNotFoundIndicatorRight = function(e) {
                return e ? (v = e, this) : v
            }, this.fallbackLanguage = function(e) {
                return q(e), this
            };
            var q = function(e) {
                return e ? (angular.isString(e) ? (s = !0, o = [e]) : angular.isArray(e) && (s = !1, o = e), angular.isString(i) && N(o, i) < 0 && o.push(i), this) : s ? o[0] : o
            };
            this.use = function(e) {
                if (e) {
                    if (!$[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
                    return l = e, this
                }
                return l
            };
            var V = function(e) {
                return e ? (w = e, this) : d ? d + w : w
            };
            this.storageKey = V, this.useUrlLoader = function(e, t) {
                return this.useLoader("$translateUrlLoader", angular.extend({
                    url: e
                }, t))
            }, this.useStaticFilesLoader = function(e) {
                return this.useLoader("$translateStaticFilesLoader", e)
            }, this.useLoader = function(e, t) {
                return h = e, m = t || {}, this
            }, this.useLocalStorage = function() {
                return this.useStorage("$translateLocalStorage")
            }, this.useCookieStorage = function() {
                return this.useStorage("$translateCookieStorage")
            }, this.useStorage = function(e) {
                return c = e, this
            }, this.storagePrefix = function(e) {
                return e ? (d = e, this) : e
            }, this.useMissingTranslationHandlerLog = function() {
                return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
            }, this.useMissingTranslationHandler = function(e) {
                return f = e, this
            }, this.usePostCompiling = function(e) {
                return x = !!e, this
            }, this.forceAsyncReload = function(e) {
                return T = !!e, this
            }, this.uniformLanguageTag = function(e) {
                return e ? angular.isString(e) && (e = {
                    standard: e
                }) : e = {}, A = e.standard, this
            }, this.determinePreferredLanguage = function(e) {
                var t = e && angular.isFunction(e) ? e() : O();
                return i = b.length ? _(t) : t, this
            }, this.registerAvailableLanguageKeys = function(e, t) {
                return e ? (b = e, t && (a = t), this) : b
            }, this.useLoaderCache = function(e) {
                return e === !1 ? y = void 0 : e === !0 ? y = !0 : "undefined" == typeof e ? y = "$translationCache" : e && (y = e), this
            }, this.directivePriority = function(e) {
                return void 0 === e ? P : (P = e, this)
            }, this.statefulFilter = function(e) {
                return void 0 === e ? E : (E = e, this)
            }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(e, t, n, r) {
                var a, d, b, C = t.get(p || "$translateDefaultInterpolation"),
                    A = !1,
                    I = {},
                    M = {},
                    O = function(e, t, n, s) {
                        if (angular.isArray(e)) {
                            var u = function(e) {
                                for (var i = {}, a = [], o = function(e) {
                                        var a = r.defer(),
                                            o = function(t) {
                                                i[e] = t, a.resolve([e, t])
                                            };
                                        return O(e, t, n, s).then(o, o), a.promise
                                    }, l = 0, u = e.length; u > l; l++) a.push(o(e[l]));
                                return r.all(a).then(function() {
                                    return i
                                })
                            };
                            return u(e)
                        }
                        var f = r.defer();
                        e && (e = R.apply(e));
                        var p = function() {
                            var e = i ? M[i] : M[l];
                            if (d = 0, c && !e) {
                                var t = a.get(w);
                                if (e = M[t], o && o.length) {
                                    var n = N(o, t);
                                    d = 0 === n ? 1 : 0, N(o, i) < 0 && o.push(i)
                                }
                            }
                            return e
                        }();
                        if (p) {
                            var h = function() {
                                ee(e, t, n, s).then(f.resolve, f.reject)
                            };
                            h.displayName = "promiseResolved", p["finally"](h, f.reject)
                        } else ee(e, t, n, s).then(f.resolve, f.reject);
                        return f.promise
                    },
                    B = function(e) {
                        return g && (e = [g, e].join(" ")), v && (e = [e, v].join(" ")), e
                    },
                    F = function(e) {
                        l = e, n.$emit("$translateChangeSuccess", {
                            language: e
                        }), c && a.put(O.storageKey(), l), C.setLocale(l);
                        var t = function(e, t) {
                            I[t].setLocale(l)
                        };
                        t.displayName = "eachInterpolatorLocaleSetter", angular.forEach(I, t), n.$emit("$translateChangeEnd", {
                            language: e
                        })
                    },
                    H = function(e) {
                        if (!e) throw "No language key specified for loading.";
                        var i = r.defer();
                        n.$emit("$translateLoadingStart", {
                            language: e
                        }), A = !0;
                        var a = y;
                        "string" == typeof a && (a = t.get(a));
                        var o = angular.extend({}, m, {
                                key: e,
                                $http: angular.extend({}, {
                                    cache: a
                                }, m.$http)
                            }),
                            s = function(t) {
                                var r = {};
                                n.$emit("$translateLoadingSuccess", {
                                    language: e
                                }), angular.isArray(t) ? angular.forEach(t, function(e) {
                                    angular.extend(r, U(e))
                                }) : angular.extend(r, U(t)), A = !1, i.resolve({
                                    key: e,
                                    table: r
                                }), n.$emit("$translateLoadingEnd", {
                                    language: e
                                })
                            };
                        s.displayName = "onLoaderSuccess";
                        var l = function(e) {
                            n.$emit("$translateLoadingError", {
                                language: e
                            }), i.reject(e), n.$emit("$translateLoadingEnd", {
                                language: e
                            })
                        };
                        return l.displayName = "onLoaderError", t.get(h)(o).then(s, l), i.promise
                    };
                if (c && (a = t.get(c), !a.get || !a.put)) throw new Error("Couldn't use storage '" + c + "', missing get() or put() method!");
                if (S.length) {
                    var Y = function(e) {
                        var n = t.get(e);
                        n.setLocale(i || l), I[n.getInterpolationIdentifier()] = n
                    };
                    Y.displayName = "interpolationFactoryAdder", angular.forEach(S, Y)
                }
                var z = function(e) {
                        var t = r.defer();
                        if (Object.prototype.hasOwnProperty.call($, e)) t.resolve($[e]);
                        else if (M[e]) {
                            var n = function(e) {
                                D(e.key, e.table), t.resolve(e.table)
                            };
                            n.displayName = "translationTableResolver", M[e].then(n, t.reject)
                        } else t.reject();
                        return t.promise
                    },
                    W = function(e, t, n, i) {
                        var a = r.defer(),
                            o = function(r) {
                                if (Object.prototype.hasOwnProperty.call(r, t)) {
                                    i.setLocale(e);
                                    var o = r[t];
                                    "@:" === o.substr(0, 2) ? W(e, o.substr(2), n, i).then(a.resolve, a.reject) : a.resolve(i.interpolate(r[t], n)), i.setLocale(l)
                                } else a.reject()
                            };
                        return o.displayName = "fallbackTranslationResolver", z(e).then(o, a.reject), a.promise
                    },
                    X = function(e, t, n, r) {
                        var i, a = $[e];
                        if (a && Object.prototype.hasOwnProperty.call(a, t)) {
                            if (r.setLocale(e), i = r.interpolate(a[t], n), "@:" === i.substr(0, 2)) return X(e, i.substr(2), n, r);
                            r.setLocale(l)
                        }
                        return i
                    },
                    Q = function(e, n) {
                        if (f) {
                            var r = t.get(f)(e, l, n);
                            return void 0 !== r ? r : e
                        }
                        return e
                    },
                    G = function(e, t, n, i, a) {
                        var s = r.defer();
                        if (e < o.length) {
                            var l = o[e];
                            W(l, t, n, i).then(s.resolve, function() {
                                G(e + 1, t, n, i, a).then(s.resolve)
                            })
                        } else a ? s.resolve(a) : s.resolve(Q(t, n));
                        return s.promise
                    },
                    K = function(e, t, n, r) {
                        var i;
                        if (e < o.length) {
                            var a = o[e];
                            i = X(a, t, n, r), i || (i = K(e + 1, t, n, r))
                        }
                        return i
                    },
                    J = function(e, t, n, r) {
                        return G(b > 0 ? b : d, e, t, n, r)
                    },
                    Z = function(e, t, n) {
                        return K(b > 0 ? b : d, e, t, n)
                    },
                    ee = function(e, t, n, i) {
                        var a = r.defer(),
                            s = l ? $[l] : $,
                            u = n ? I[n] : C;
                        if (s && Object.prototype.hasOwnProperty.call(s, e)) {
                            var c = s[e];
                            "@:" === c.substr(0, 2) ? O(c.substr(2), t, n, i).then(a.resolve, a.reject) : a.resolve(u.interpolate(c, t))
                        } else {
                            var d;
                            f && !A && (d = Q(e, t)), l && o && o.length ? J(e, t, u, i).then(function(e) {
                                a.resolve(e)
                            }, function(e) {
                                a.reject(B(e))
                            }) : f && !A && d ? i ? a.resolve(i) : a.resolve(d) : i ? a.resolve(i) : a.reject(B(e))
                        }
                        return a.promise
                    },
                    te = function(e, t, n) {
                        var r, i = l ? $[l] : $,
                            a = C;
                        if (I && Object.prototype.hasOwnProperty.call(I, n) && (a = I[n]), i && Object.prototype.hasOwnProperty.call(i, e)) {
                            var s = i[e];
                            r = "@:" === s.substr(0, 2) ? te(s.substr(2), t, n) : a.interpolate(s, t)
                        } else {
                            var u;
                            f && !A && (u = Q(e, t)), l && o && o.length ? (d = 0, r = Z(e, t, a)) : r = f && !A && u ? u : B(e)
                        }
                        return r
                    },
                    ne = function(e) {
                        u === e && (u = void 0), M[e] = void 0
                    };
                if (O.preferredLanguage = function(e) {
                        return e && j(e), i
                    }, O.cloakClassName = function() {
                        return k
                    }, O.fallbackLanguage = function(e) {
                        if (void 0 !== e && null !== e) {
                            if (q(e), h && o && o.length)
                                for (var t = 0, n = o.length; n > t; t++) M[o[t]] || (M[o[t]] = H(o[t]));
                            O.use(O.use())
                        }
                        return s ? o[0] : o
                    }, O.useFallbackLanguage = function(e) {
                        if (void 0 !== e && null !== e)
                            if (e) {
                                var t = N(o, e);
                                t > -1 && (b = t)
                            } else b = 0
                    }, O.proposedLanguage = function() {
                        return u
                    }, O.storage = function() {
                        return a
                    }, O.use = function(e) {
                        if (!e) return l;
                        var t = r.defer();
                        n.$emit("$translateChangeStart", {
                            language: e
                        });
                        var i = _(e);
                        return i && (e = i), !T && $[e] || !h || M[e] ? u === e && M[e] ? M[e].then(function(e) {
                            return t.resolve(e.key), e
                        }, function(e) {
                            return t.reject(e), r.reject(e)
                        }) : (t.resolve(e), F(e)) : (u = e, M[e] = H(e).then(function(e) {
                            return D(e.key, e.table), t.resolve(e.key), F(e.key), e
                        }, function(e) {
                            return n.$emit("$translateChangeError", {
                                language: e
                            }), t.reject(e), n.$emit("$translateChangeEnd", {
                                language: e
                            }), r.reject(e)
                        }), M[e]["finally"](function() {
                            ne(e)
                        })), t.promise
                    }, O.storageKey = function() {
                        return V()
                    }, O.isPostCompilingEnabled = function() {
                        return x
                    }, O.isForceAsyncReloadEnabled = function() {
                        return T
                    }, O.refresh = function(e) {
                        function t() {
                            a.resolve(), n.$emit("$translateRefreshEnd", {
                                language: e
                            })
                        }

                        function i() {
                            a.reject(), n.$emit("$translateRefreshEnd", {
                                language: e
                            })
                        }
                        if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
                        var a = r.defer();
                        if (n.$emit("$translateRefreshStart", {
                                language: e
                            }), e)
                            if ($[e]) {
                                var s = function(n) {
                                    D(n.key, n.table), e === l && F(l), t()
                                };
                                s.displayName = "refreshPostProcessor", H(e).then(s, i)
                            } else i();
                        else {
                            var u = [],
                                c = {};
                            if (o && o.length)
                                for (var d = 0, f = o.length; f > d; d++) u.push(H(o[d])), c[o[d]] = !0;
                            l && !c[l] && u.push(H(l));
                            var p = function(e) {
                                $ = {}, angular.forEach(e, function(e) {
                                    D(e.key, e.table)
                                }), l && F(l), t()
                            };
                            p.displayName = "refreshPostProcessor", r.all(u).then(p, i)
                        }
                        return a.promise
                    }, O.instant = function(e, t, n) {
                        if (null === e || angular.isUndefined(e)) return e;
                        if (angular.isArray(e)) {
                            for (var r = {}, a = 0, s = e.length; s > a; a++) r[e[a]] = O.instant(e[a], t, n);
                            return r
                        }
                        if (angular.isString(e) && e.length < 1) return e;
                        e && (e = R.apply(e));
                        var u, c = [];
                        i && c.push(i), l && c.push(l), o && o.length && (c = c.concat(o));
                        for (var d = 0, p = c.length; p > d; d++) {
                            var h = c[d];
                            if ($[h] && ("undefined" != typeof $[h][e] ? u = te(e, t, n) : (g || v) && (u = B(e))), "undefined" != typeof u) break
                        }
                        return u || "" === u || (u = C.interpolate(e, t), f && !A && (u = Q(e, t))), u
                    }, O.versionInfo = function() {
                        return L
                    }, O.loaderCache = function() {
                        return y
                    }, O.directivePriority = function() {
                        return P
                    }, O.statefulFilter = function() {
                        return E
                    }, h && (angular.equals($, {}) && O.use(O.use()), o && o.length))
                    for (var re = function(e) {
                            return D(e.key, e.table), n.$emit("$translateChangeEnd", {
                                language: e.key
                            }), e
                        }, ie = 0, ae = o.length; ae > ie; ie++) {
                        var oe = o[ie];
                        (T || !$[oe]) && (M[oe] = H(oe).then(re))
                    }
                return O
            }]
        }

        function r(e, t) {
            "use strict";
            var n, r = {},
                i = "default";
            return r.setLocale = function(e) {
                n = e
            }, r.getInterpolationIdentifier = function() {
                return i
            }, r.useSanitizeValueStrategy = function(e) {
                return t.useStrategy(e), this
            }, r.interpolate = function(n, r) {
                r = r || {}, r = t.sanitize(r, "params");
                var i = e(n)(r);
                return i = t.sanitize(i, "text")
            }, r
        }

        function i(e, t, n, r, i, a) {
            "use strict";
            var o = function() {
                return this.toString().replace(/^\s+|\s+$/g, "")
            };
            return {
                restrict: "AE",
                scope: !0,
                priority: e.directivePriority(),
                compile: function(t, s) {
                    var l = s.translateValues ? s.translateValues : void 0,
                        u = s.translateInterpolation ? s.translateInterpolation : void 0,
                        c = t[0].outerHTML.match(/translate-value-+/i),
                        d = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
                        f = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
                    return function(t, p, h) {
                        t.interpolateParams = {}, t.preText = "", t.postText = "";
                        var m = {},
                            g = function(e, n, r) {
                                if (n.translateValues && angular.extend(e, i(n.translateValues)(t.$parent)), c)
                                    for (var a in r)
                                        if (Object.prototype.hasOwnProperty.call(n, a) && "translateValue" === a.substr(0, 14) && "translateValues" !== a) {
                                            var o = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                                            e[o] = r[a]
                                        }
                            },
                            v = function(e) {
                                if (angular.isFunction(v._unwatchOld) && (v._unwatchOld(), v._unwatchOld = void 0), angular.equals(e, "") || !angular.isDefined(e)) {
                                    var r = o.apply(p.text()).match(d);
                                    if (angular.isArray(r)) {
                                        t.preText = r[1], t.postText = r[3], m.translate = n(r[2])(t.$parent);
                                        var i = p.text().match(f);
                                        angular.isArray(i) && i[2] && i[2].length && (v._unwatchOld = t.$watch(i[2], function(e) {
                                            m.translate = e, k()
                                        }))
                                    } else m.translate = p.text().replace(/^\s+|\s+$/g, "")
                                } else m.translate = e;
                                k()
                            },
                            y = function(e) {
                                h.$observe(e, function(t) {
                                    m[e] = t, k()
                                })
                            };
                        g(t.interpolateParams, h, s);
                        var $ = !0;
                        h.$observe("translate", function(e) {
                            "undefined" == typeof e ? v("") : "" === e && $ || (m.translate = e, k()), $ = !1
                        });
                        for (var b in h) h.hasOwnProperty(b) && "translateAttr" === b.substr(0, 13) && y(b);
                        if (h.$observe("translateDefault", function(e) {
                                t.defaultText = e
                            }), l && h.$observe("translateValues", function(e) {
                                e && t.$parent.$watch(function() {
                                    angular.extend(t.interpolateParams, i(e)(t.$parent))
                                })
                            }), c) {
                            var w = function(e) {
                                h.$observe(e, function(n) {
                                    var r = angular.lowercase(e.substr(14, 1)) + e.substr(15);
                                    t.interpolateParams[r] = n
                                })
                            };
                            for (var S in h) Object.prototype.hasOwnProperty.call(h, S) && "translateValue" === S.substr(0, 14) && "translateValues" !== S && w(S)
                        }
                        var k = function() {
                                for (var e in m) m.hasOwnProperty(e) && void 0 !== m[e] && x(e, m[e], t, t.interpolateParams, t.defaultText)
                            },
                            x = function(t, n, r, i, a) {
                                n ? e(n, i, u, a).then(function(e) {
                                    T(e, r, !0, t)
                                }, function(e) {
                                    T(e, r, !1, t)
                                }) : T(n, r, !1, t)
                            },
                            T = function(t, n, i, a) {
                                if ("translate" === a) {
                                    i || "undefined" == typeof n.defaultText || (t = n.defaultText), p.html(n.preText + t + n.postText);
                                    var o = e.isPostCompilingEnabled(),
                                        l = "undefined" != typeof s.translateCompile,
                                        u = l && "false" !== s.translateCompile;
                                    (o && !l || u) && r(p.contents())(n)
                                } else {
                                    i || "undefined" == typeof n.defaultText || (t = n.defaultText);
                                    var c = h.$attr[a];
                                    "data-" === c.substr(0, 5) && (c = c.substr(5)), c = c.substr(15), p.attr(c, t)
                                }
                            };
                        (l || c || h.translateDefault) && t.$watch("interpolateParams", k, !0);
                        var C = a.$on("$translateChangeSuccess", k);
                        p.text().length ? v(h.translate ? h.translate : "") : h.translate && v(h.translate), k(), t.$on("$destroy", C)
                    }
                }
            }
        }

        function a(e, t) {
            "use strict";
            return {
                compile: function(n) {
                    var r = function() {
                            n.addClass(t.cloakClassName())
                        },
                        i = function() {
                            n.removeClass(t.cloakClassName())
                        },
                        a = e.$on("$translateChangeEnd", function() {
                            i(), a(), a = null
                        });
                    return r(),
                        function(e, n, a) {
                            a.translateCloak && a.translateCloak.length && a.$observe("translateCloak", function(e) {
                                t(e).then(i, r)
                            })
                        }
                }
            }
        }

        function o(e, t) {
            "use strict";
            var n = function(n, r, i) {
                return angular.isObject(r) || (r = e(r)(this)), t.instant(n, r, i)
            };
            return t.statefulFilter() && (n.$stateful = !0), n
        }

        function s(e) {
            "use strict";
            return e("translations")
        }
        return e.$inject = ["e"], n.$inject = ["e", "t", "n", "r"], r.$inject = ["e", "t"], i.$inject = ["e", "t", "n", "r", "i", "a"], a.$inject = ["e", "t"], o.$inject = ["e", "t"], s.$inject = ["e"], e.$inject = ["e"], n.$inject = ["e", "t", "n", "r"], r.$inject = ["e", "t"], i.$inject = ["e", "t", "n", "r", "i", "a"], a.$inject = ["e", "t"], o.$inject = ["e", "t"], s.$inject = ["e"], e.$inject = ["e"], n.$inject = ["e", "t", "n", "r"], r.$inject = ["e", "t"], i.$inject = ["e", "t", "n", "r", "i", "a"], a.$inject = ["e", "t"], o.$inject = ["e", "t"], s.$inject = ["e"], angular.module("pascalprecht.translate", ["ng"]).run(e), e.$inject = ["$translate"], e.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", t), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", n), n.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], n.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", r), r.$inject = ["$interpolate", "$translateSanitization"], r.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", i), i.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], i.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", a), a.$inject = ["$rootScope", "$translate"], a.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").filter("translate", o), o.$inject = ["$parse", "$translate"], o.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", s), s.$inject = ["$cacheFactory"], s.displayName = "$translationCache", "pascalprecht.translate"
    }), ! function(e, t) {
        "use strict";
        var n, r = e.document;
        n = function() {
            function e(e) {
                return r.getElementById(e)
            }

            function n(e) {
                "undefined" != typeof u && e.parentNode === u && u.removeChild(e)
            }

            function i() {
                if (!d) {
                    var e = r.createElement("fakeelement"),
                        n = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend",
                            transition: "transitionend"
                        };
                    for (var i in n)
                        if (n.hasOwnProperty(i) && e.style[i] !== t) {
                            d = n[i], h = !0;
                            break
                        }
                }
                return {
                    type: d,
                    supported: h
                }
            }
            var a, o, s, l, u, c, d, f = !1,
                p = [],
                h = !1,
                m = {
                    buttons: {
                        holder: "<nav class='alertify-buttons'>{{buttons}}</nav>",
                        ok: "<button class='alertify-button alertify-button-ok' id='alertify-ok'>{{ok}}</button>",
                        cancel: "<button class='alertify-button alertify-button-cancel' id='alertify-cancel'>{{cancel}}</button>"
                    },
                    input: "<div class='alertify-text-wrapper'><input type='text' class='alertify-text' id='alertify-text'></div>",
                    message: "<p class='alertify-message'>{{message}}</p>",
                    log: "<div class='alertify-log{{class}}'>{{message}}</div>"
                },
                g = {
                    defaultOkLabel: "Ok",
                    okLabel: this.defaultOkLabel,
                    defaultCancelLabel: "Cancel",
                    cancelLabel: this.defaultCancelLabel,
                    defaultMaxLogItems: 2,
                    maxLogItems: this.defaultMaxLogItems,
                    promptValue: "",
                    promptPlaceholder: "",
                    delay: 5e3,
                    defaultDelay: 5e3,
                    transition: t,
                    addListeners: function(e, t) {
                        var n = "undefined" != typeof s,
                            r = "undefined" != typeof o,
                            i = this,
                            a = function() {
                                i.hide(), n && s.removeEventListener("click", l), r && o.removeEventListener("click", u)
                            },
                            l = function(t) {
                                a(t), "function" == typeof e && ("undefined" == typeof c ? e(t) : e(c.value, t))
                            },
                            u = function(e) {
                                a(e), "function" == typeof t && t(e)
                            };
                        n && s.addEventListener("click", l), r && o.addEventListener("click", u)
                    },
                    build: function(e) {
                        var t = m.buttons.ok,
                            n = "<div class='alertify-dialog'><div class='alertify-inner'>" + m.message.replace("{{message}}", e.message);
                        return ("confirm" === e.type || "prompt" === e.type) && (t = m.buttons.cancel + m.buttons.ok), "prompt" === e.type && (n += m.input), n = (n + m.buttons.holder + "</div></div>").replace("{{buttons}}", t).replace("{{ok}}", this.okLabel).replace("{{cancel}}", this.cancelLabel), l.className = "alertify", n
                    },
                    closeLogOnClick: !1,
                    closeLogOnClickDefault: !1,
                    setCloseLogOnClick: function(e) {
                        this.closeLogOnClick = !!e
                    },
                    close: function(e, t) {
                        var r, i, a = t && !isNaN(t) ? +t : this.delay,
                            o = this;
                        this.closeLogOnClick && e.addEventListener("click", function() {
                            r(e)
                        }), i = function(e) {
                            e.stopPropagation(), this.removeEventListener(o.transition.type, i), n(this)
                        }, r = function(e) {
                            var t = 1;
                            "undefined" != typeof e && e.parentNode === u && (o.transition.supported && (e.addEventListener(o.transition.type, i), e.className += " alertify-log-hide", t = 500), setTimeout(function() {
                                n(e)
                            }, t || 1))
                        }, 0 !== t && setTimeout(function() {
                            r(e)
                        }, a)
                    },
                    dialog: function(e, t, n, r) {
                        this.init(), p.push({
                            type: t,
                            message: e,
                            onOkay: n,
                            onCancel: r
                        }), f || this.setup()
                    },
                    hide: function() {
                        var e, t = this;
                        p.splice(0, 1), p.length > 0 ? this.setup(!0) : (f = !1, e = function(n) {
                            n.stopPropagation(), l.removeEventListener(t.transition.type, e)
                        }, this.transition.supported && l.addEventListener(this.transition.type, e), l.className = "alertify alertify-hide alertify-hidden")
                    },
                    init: function() {
                        this.injectCss(), null === e("alertify") && (f = !1, p = [], l = r.createElement("div"), l.setAttribute("id", "alertify"), l.className = "alertify alertify-hidden", r.body.appendChild(l)), null === e("alertify-logs") && (u = r.createElement("div"), u.setAttribute("id", "alertify-logs"), u.className = "alertify-logs", r.body.appendChild(u)), this.transition = i()
                    },
                    log: function(e, t, n) {
                        this.init(), u.className = "alertify-logs";
                        var r = u.childNodes.length - this.maxLogItems;
                        if (r >= 0)
                            for (var i = 0, a = r + 1; a > i; i++) this.close(u.childNodes[i], 1);
                        this.notify(e, t, n)
                    },
                    notify: function(e, t, n) {
                        var i = r.createElement("div");
                        i.className = "alertify-log alertify-log-" + (t || "default"), i.innerHTML = e, "function" == typeof n && i.addEventListener("click", n), u.appendChild(i), setTimeout(function() {
                            i.className += " alertify-log-show"
                        }, 50), this.close(i, this.delay)
                    },
                    setup: function(n) {
                        var r = p[0],
                            i = this,
                            a = function() {
                                l.removeEventListener(i.transition.type, a)
                            };
                        f = !0, this.transition.supported && !n && l.addEventListener(this.transition.type, a), l.innerHTML = this.build(r), s = e("alertify-ok") || t, o = e("alertify-cancel") || t, c = e("alertify-text") || t, c && ("string" == typeof this.promptPlaceholder && (c.placeholder = this.promptPlaceholder), "string" == typeof this.promptValue && (c.value = this.promptValue)), this.addListeners(r.onOkay, r.onCancel)
                    },
                    okBtn: function(e) {
                        return this.okLabel = e, this
                    },
                    setDelay: function(e) {
                        var t = parseInt(e || 0, 10);
                        return this.delay = isNaN(t) ? this.defultDelay : e, this
                    },
                    cancelBtn: function(e) {
                        return this.cancelLabel = e, this
                    },
                    setMaxLogItems: function(e) {
                        this.maxLogItems = parseInt(e || this.defaultMaxLogItems)
                    },
                    reset: function() {
                        this.okBtn(this.defaultOkLabel), this.cancelBtn(this.defaultCancelLabel), this.setMaxLogItems(), this.promptValue = "", this.promptPlaceholder = "", this.delay = this.defaultDelay, this.setCloseLogOnClick(this.closeLogOnClickDefault)
                    },
                    injectCss: function() {
                        if (!a) {
                            var e = r.getElementsByTagName("head")[0],
                                t = r.createElement("style");
                            t.type = "text/css", t.innerHTML = ".alertify,.alertify *,.alertify-button{box-sizing:border-box}.alertify{font-family:inherit;position:fixed;background-color:rgba(0,0,0,.6);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:99999}.alertify .alertify-alert,.alertify .alertify-dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alertify-alert .alertify-inner,.alertify .alertify-dialog .alertify-inner{width:400px;max-width:95%;margin:0 auto;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alertify-buttons{text-align:right}.alertify,.alertify-hide,.alertify-log,.alertify-show{box-sizing:border-box;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.alertify-dialog{padding:12px}.alertify-hidden{opacity:0;display:none}.alertify-logs{position:fixed;z-index:5000;bottom:0;right:0}.alertify-log{display:block;margin-top:10px;position:relative;right:-100%;opacity:0}.alertify-log-show{right:0;opacity:1}.alertify-log-hide{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);opacity:0}.alertify-inner{text-align:center}.alertify-text{margin-bottom:15px;width:100%;font-size:100%;border:1px solid #CCC;padding:12px}.alertify .alertify-message{padding:12px;margin:0;text-align:left}.alertify-button{background:0 0;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-weight:500;font-size:14px;text-decoration:none;cursor:pointer;border-radius:2px}.alertify-button:active,.alertify-button:hover{background-color:rgba(0,0,0,.05)}.alertify-log{float:right;clear:right;background:rgba(0,0,0,.8);padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.alertify-log.alertify-log-error{background:rgba(244,67,54,.8)}.alertify-log.alertify-log-success{background:rgba(76,175,80,.9)}", e.insertBefore(t, e.firstChild), a = !0
                        }
                    }
                };
            return {
                reset: function() {
                    return g.reset(), this
                },
                alert: function(e, t, n) {
                    return g.dialog(e, "alert", t, n), this
                },
                confirm: function(e, t, n) {
                    return g.dialog(e, "confirm", t, n), this
                },
                prompt: function(e, t, n) {
                    return g.dialog(e, "prompt", t, n), this
                },
                log: function(e, t) {
                    return g.log(e, "default", t), this
                },
                success: function(e, t) {
                    return g.log(e, "success", t), this
                },
                error: function(e, t) {
                    return g.log(e, "error", t), this
                },
                cancelBtn: function(e) {
                    return g.cancelBtn(e), this
                },
                okBtn: function(e) {
                    return g.okBtn(e), this
                },
                delay: function(e) {
                    return g.setDelay(e), this
                },
                placeholder: function(e) {
                    return g.promptPlaceholder = e, this
                },
                defaultValue: function(e) {
                    return g.promptValue = e, this
                },
                maxLogItems: function(e) {
                    return g.setMaxLogItems(e), this
                },
                closeLogOnClick: function(e) {
                    return g.setCloseLogOnClick(!!e), this
                }
            }
        }, "undefined" != typeof module && module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
            return new n
        }) : e.alertify = new n
    }("undefined" != typeof window ? window : {}), angular.module("angularLazyImg", []), angular.module("angularLazyImg").factory("LazyImgMagic", ["$window", "$rootScope", "lazyImgConfig", "lazyImgHelpers", function(e, t, n, r) {
        "use strict";

        function i() {
            for (var e = h.length - 1; e >= 0; e--) {
                var t = h[e];
                t && r.isElementInView(t.$elem[0], g.offset, f) && (u(t), h.splice(e, 1))
            }
            0 === h.length && s()
        }

        function a(e) {
            $.forEach(function(t) {
                t[e]("scroll", v), t[e]("touchmove", v)
            }), p[e]("resize", v), p[e]("resize", y)
        }

        function o() {
            m = !0, setTimeout(function() {
                i(), a("on")
            }, 1)
        }

        function s() {
            m = !1, a("off")
        }

        function l(e) {
            var t = h.indexOf(e); - 1 !== t && h.splice(t, 1)
        }

        function u(e) {
            var n = new Image;
            n.onerror = function() {
                g.errorClass && e.$elem.addClass(g.errorClass), t.$emit("lazyImg:error", e), g.onError(e)
            }, n.onload = function() {
                c(e.$elem, e.src), g.successClass && e.$elem.addClass(g.successClass), t.$emit("lazyImg:success", e), g.onSuccess(e)
            }, n.src = e.src
        }

        function c(e, t) {
            "img" === e[0].nodeName.toLowerCase() ? e[0].src = t : e.css("background-image", 'url("' + t + '")')
        }

        function d(e) {
            this.$elem = e
        }
        var f, p, h, m, g, v, y, $;
        return h = [], m = !1, g = n.getOptions(), p = angular.element(e), f = r.getWinDimensions(), y = r.throttle(function() {
            f = r.getWinDimensions()
        }, 60), $ = [g.container || p], v = r.throttle(i, 30), d.prototype.setSource = function(e) {
            this.src = e, h.unshift(this), m || o()
        }, d.prototype.removeImage = function() {
            l(this), 0 === h.length && s()
        }, d.prototype.checkImages = function() {
            i()
        }, d.addContainer = function(e) {
            s(), $.push(e), o()
        }, d.removeContainer = function(e) {
            s(), $.splice($.indexOf(e), 1), o()
        }, d
    }]), angular.module("angularLazyImg").provider("lazyImgConfig", function() {
        "use strict";
        this.options = {
            offset: 100,
            errorClass: null,
            successClass: null,
            onError: function() {},
            onSuccess: function() {}
        }, this.$get = function() {
            var e = this.options;
            return {
                getOptions: function() {
                    return e
                }
            }
        }, this.setOptions = function(e) {
            angular.extend(this.options, e)
        }
    }), angular.module("angularLazyImg").factory("lazyImgHelpers", ["$window", function(e) {
        "use strict";

        function t() {
            return {
                height: e.innerHeight,
                width: e.innerWidth
            }
        }

        function n(e, t, n) {
            var r = e.getBoundingClientRect(),
                i = n.height + t;
            return r.left >= 0 && r.right <= n.width + t && (r.top >= 0 && r.top <= i || r.bottom <= i && r.bottom >= 0 - t)
        }

        function r(e, t, n) {
            var r, i;
            return function() {
                var a = n || this,
                    o = +new Date,
                    s = arguments;
                r && r + t > o ? (clearTimeout(i), i = setTimeout(function() {
                    r = o, e.apply(a, s)
                }, t)) : (r = o, e.apply(a, s))
            }
        }
        return {
            isElementInView: n,
            getWinDimensions: t,
            throttle: r
        }
    }]), angular.module("angularLazyImg").directive("lazyImg", ["$rootScope", "LazyImgMagic", function(e, t) {
        "use strict";

        function n(n, r, i) {
            var a = new t(r);
            i.$observe("lazyImg", function(e) {
                e && a.setSource(e)
            }), n.$on("$destroy", function() {
                a.removeImage()
            }), e.$on("lazyImg.runCheck", function() {
                a.checkImages()
            }), e.$on("lazyImg:refresh", function() {
                a.checkImages()
            })
        }
        return {
            link: n,
            restrict: "A"
        }
    }]).directive("lazyImgContainer", ["LazyImgMagic", function(e) {
        "use strict";

        function t(t, n) {
            e.addContainer(n), t.$on("$destroy", function() {
                e.removeContainer(n)
            })
        }
        return {
            link: t,
            restrict: "A"
        }
    }]),
    function() {
        function e(e, t, n) {
            function r(r, c) {
                var d = c.dirPaginate,
                    f = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                    p = /\|\s*itemsPerPage\s*:[^|]*/;
                if (null === f[2].match(p)) throw "pagination directive: the 'itemsPerPage' filter must be set.";
                var h = f[2].replace(p, ""),
                    m = t(h);
                o(r);
                var g = c.paginationId || u;
                return n.registerInstance(g),
                    function(r, o, c) {
                        var f = t(c.paginationId)(r) || c.paginationId || u;
                        n.registerInstance(f);
                        var p = i(d, f);
                        a(o, c, p), s(o);
                        var h = e(o),
                            g = l(r, c, f);
                        n.setCurrentPageParser(f, g, r), "undefined" != typeof c.totalItems ? (n.setAsyncModeTrue(f), r.$watch(function() {
                            return t(c.totalItems)(r)
                        }, function(e) {
                            e >= 0 && n.setCollectionLength(f, e)
                        })) : r.$watchCollection(function() {
                            return m(r)
                        }, function(e) {
                            e && n.setCollectionLength(f, e.length)
                        }), h(r)
                    }
            }

            function i(e, t) {
                var n, r = !!e.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);
                return n = t === u || r ? e : e.replace(/(\|\s*itemsPerPage\s*:[^|]*)/, "$1 : '" + t + "'")
            }

            function a(e, t, n) {
                e[0].hasAttribute("dir-paginate-start") || e[0].hasAttribute("data-dir-paginate-start") ? (t.$set("ngRepeatStart", n), e.eq(e.length - 1).attr("ng-repeat-end", !0)) : t.$set("ngRepeat", n)
            }

            function o(e) {
                angular.forEach(e, function(e) {
                    e.nodeType === Node.ELEMENT_NODE && angular.element(e).attr("dir-paginate-no-compile", !0)
                })
            }

            function s(e) {
                angular.forEach(e, function(e) {
                    e.nodeType === Node.ELEMENT_NODE && angular.element(e).removeAttr("dir-paginate-no-compile")
                }), e.eq(0).removeAttr("dir-paginate-start").removeAttr("dir-paginate").removeAttr("data-dir-paginate-start").removeAttr("data-dir-paginate"), e.eq(e.length - 1).removeAttr("dir-paginate-end").removeAttr("data-dir-paginate-end")
            }

            function l(e, n, r) {
                var i;
                if (n.currentPage) i = t(n.currentPage);
                else {
                    var a = r + "__currentPage";
                    e[a] = 1, i = t(a)
                }
                return i
            }
            return {
                terminal: !0,
                multiElement: !0,
                compile: r
            }
        }

        function t() {
            return {
                priority: 5e3,
                terminal: !0
            }
        }

        function n(e) {
            e.put("angularUtils.directives.dirPagination.template", '<ul class="pagination" ng-if="1 < pages.length"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>')
        }

        function r(e, t) {
            function n(t, n, i) {
                function o(n) {
                    c(n) && (t.pages = r(n, e.getCollectionLength(f), e.getItemsPerPage(f), h), t.pagination.current = n, l(), t.onPageChange && t.onPageChange({
                        newPageNumber: n
                    }))
                }

                function s() {
                    var n = parseInt(e.getCurrentPage(f)) || 1;
                    t.pages = r(n, e.getCollectionLength(f), e.getItemsPerPage(f), h), t.pagination.current = n, t.pagination.last = t.pages[t.pages.length - 1], t.pagination.last < t.pagination.current ? t.setCurrent(t.pagination.last) : l()
                }

                function l() {
                    var n = e.getCurrentPage(f),
                        r = e.getItemsPerPage(f),
                        i = e.getCollectionLength(f);
                    t.range.lower = (n - 1) * r + 1, t.range.upper = Math.min(n * r, i), t.range.total = i
                }

                function c(e) {
                    return a.test(e) && e > 0 && e <= t.pagination.last
                }
                var d = i.paginationId || u,
                    f = t.paginationId || i.paginationId || u;
                if (!e.isRegistered(f) && !e.isRegistered(d)) {
                    var p = f !== u ? " (id: " + f + ") " : " ";
                    throw "pagination directive: the pagination controls" + p + "cannot be used without the corresponding pagination directive."
                }
                t.maxSize || (t.maxSize = 9), t.directionLinks = angular.isDefined(i.directionLinks) ? t.$parent.$eval(i.directionLinks) : !0, t.boundaryLinks = angular.isDefined(i.boundaryLinks) ? t.$parent.$eval(i.boundaryLinks) : !1;
                var h = Math.max(t.maxSize, 5);
                t.pages = [], t.pagination = {
                    last: 1,
                    current: 1
                }, t.range = {
                    lower: 1,
                    upper: 1,
                    total: 1
                }, t.$watch(function() {
                    return (e.getCollectionLength(f) + 1) * e.getItemsPerPage(f)
                }, function(e) {
                    e > 0 && s()
                }), t.$watch(function() {
                    return e.getItemsPerPage(f)
                }, function(e, n) {
                    e != n && "undefined" != typeof n && o(t.pagination.current)
                }), t.$watch(function() {
                    return e.getCurrentPage(f)
                }, function(e, t) {
                    e != t && o(e)
                }), t.setCurrent = function(t) {
                    c(t) && (t = parseInt(t, 10), e.setCurrentPage(f, t))
                }
            }

            function r(e, t, n, r) {
                var a, o = [],
                    s = Math.ceil(t / n),
                    l = Math.ceil(r / 2);
                a = l >= e ? "start" : e > s - l ? "end" : "middle";
                for (var u = s > r, c = 1; s >= c && r >= c;) {
                    var d = i(c, e, r, s),
                        f = 2 === c && ("middle" === a || "end" === a),
                        p = c === r - 1 && ("middle" === a || "start" === a);
                    u && (f || p) ? o.push("...") : o.push(d), c++
                }
                return o
            }

            function i(e, t, n, r) {
                var i = Math.ceil(n / 2);
                return e === n ? r : 1 === e ? e : r > n ? t > r - i ? r - n + e : t > i ? t - i + e : e : e
            }
            var a = /^\d+$/;
            return {
                restrict: "AE",
                templateUrl: function(e, n) {
                    return n.templateUrl || t.getPath()
                },
                scope: {
                    maxSize: "=?",
                    onPageChange: "&?",
                    paginationId: "=?"
                },
                link: n
            }
        }

        function i(e) {
            return function(t, n, r) {
                if ("undefined" == typeof r && (r = u), !e.isRegistered(r)) throw "pagination directive: the itemsPerPage id argument (id: " + r + ") does not match a registered pagination-id.";
                var i, a;
                return t instanceof Array ? (n = parseInt(n) || 9999999999, a = e.isAsyncMode(r) ? 0 : (e.getCurrentPage(r) - 1) * n, i = a + n, e.setItemsPerPage(r, n), t.slice(a, i)) : t
            }
        }

        function a() {
            var e, t = {};
            this.registerInstance = function(n) {
                "undefined" == typeof t[n] && (t[n] = {
                    asyncMode: !1
                }, e = n)
            }, this.isRegistered = function(e) {
                return "undefined" != typeof t[e]
            }, this.getLastInstanceId = function() {
                return e
            }, this.setCurrentPageParser = function(e, n, r) {
                t[e].currentPageParser = n, t[e].context = r
            }, this.setCurrentPage = function(e, n) {
                t[e].currentPageParser.assign(t[e].context, n)
            }, this.getCurrentPage = function(e) {
                var n = t[e].currentPageParser;
                return n ? n(t[e].context) : 1
            }, this.setItemsPerPage = function(e, n) {
                t[e].itemsPerPage = n
            }, this.getItemsPerPage = function(e) {
                return t[e].itemsPerPage
            }, this.setCollectionLength = function(e, n) {
                t[e].collectionLength = n
            }, this.getCollectionLength = function(e) {
                return t[e].collectionLength
            }, this.setAsyncModeTrue = function(e) {
                t[e].asyncMode = !0
            }, this.isAsyncMode = function(e) {
                return t[e].asyncMode
            }
        }

        function o() {
            var e = "angularUtils.directives.dirPagination.template";
            this.setPath = function(t) {
                e = t
            }, this.$get = function() {
                return {
                    getPath: function() {
                        return e
                    }
                }
            }
        }
        var s, l = "angularUtils.directives.dirPagination",
            u = "__default";
        try {
            s = angular.module(l)
        } catch (c) {
            s = angular.module(l, [])
        }
        s.directive("dirPaginate", ["$compile", "$parse", "paginationService", e]).directive("dirPaginateNoCompile", t).directive("dirPaginationControls", ["paginationService", "paginationTemplate", r]).filter("itemsPerPage", ["paginationService", i]).service("paginationService", a).provider("paginationTemplate", o).run(["$templateCache", n])
    }();
var duScrollDefaultEasing = function(e) {
    "use strict";
    return .5 > e ? Math.pow(2 * e, 2) / 2 : 1 - Math.pow(2 * (1 - e), 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing).value("duScrollCancelOnEvents", "scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy", !1).value("duScrollActiveClass", "active"), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", "duScrollCancelOnEvents", function(e, t, n, r, i, a, o, s) {
        "use strict";
        var l = {},
            u = function(e) {
                return "undefined" != typeof HTMLDocument && e instanceof HTMLDocument || e.nodeType && e.nodeType === e.DOCUMENT_NODE
            },
            c = function(e) {
                return "undefined" != typeof HTMLElement && e instanceof HTMLElement || e.nodeType && e.nodeType === e.ELEMENT_NODE
            },
            d = function(e) {
                return c(e) || u(e) ? e : e[0]
            };
        l.duScrollTo = function(t, n, r, i) {
            var a;
            if (angular.isElement(t) ? a = this.duScrollToElement : angular.isDefined(r) && (a = this.duScrollToAnimated), a) return a.apply(this, arguments);
            var o = d(this);
            return u(o) ? e.scrollTo(t, n) : (o.scrollLeft = t, void(o.scrollTop = n))
        };
        var f, p;
        l.duScrollToAnimated = function(e, a, o, l) {
            o && !l && (l = i);
            var u = this.duScrollLeft(),
                c = this.duScrollTop(),
                d = Math.round(e - u),
                h = Math.round(a - c),
                m = null,
                g = 0,
                v = this,
                y = function(e) {
                    (!e || g && e.which > 0) && (s && v.unbind(s, y), n(f), p.reject(), f = null)
                };
            if (f && y(), p = t.defer(), 0 === o || !d && !h) return 0 === o && v.duScrollTo(e, a), p.resolve(), p.promise;
            var $ = function(e) {
                null === m && (m = e), g = e - m;
                var t = g >= o ? 1 : l(g / o);
                v.scrollTo(u + Math.ceil(d * t), c + Math.ceil(h * t)), 1 > t ? f = r($) : (s && v.unbind(s, y), f = null, p.resolve())
            };
            return v.duScrollTo(u, c),
                s && v.bind(s, y), f = r($), p.promise
        }, l.duScrollToElement = function(e, t, n, r) {
            var i = d(this);
            (!angular.isNumber(t) || isNaN(t)) && (t = o);
            var a = this.duScrollTop() + d(e).getBoundingClientRect().top - t;
            return c(i) && (a -= i.getBoundingClientRect().top), this.duScrollTo(0, a, n, r)
        }, l.duScrollLeft = function(t, n, r) {
            if (angular.isNumber(t)) return this.duScrollTo(t, this.duScrollTop(), n, r);
            var i = d(this);
            return u(i) ? e.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft
        }, l.duScrollTop = function(t, n, r) {
            if (angular.isNumber(t)) return this.duScrollTo(this.duScrollLeft(), t, n, r);
            var i = d(this);
            return u(i) ? e.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop
        }, l.duScrollToElementAnimated = function(e, t, n, r) {
            return this.duScrollToElement(e, t, n || a, r)
        }, l.duScrollTopAnimated = function(e, t, n) {
            return this.duScrollTop(e, t || a, n)
        }, l.duScrollLeftAnimated = function(e, t, n) {
            return this.duScrollLeft(e, t || a, n)
        }, angular.forEach(l, function(e, t) {
            angular.element.prototype[t] = e;
            var n = t.replace(/^duScroll/, "scroll");
            angular.isUndefined(angular.element.prototype[n]) && (angular.element.prototype[n] = e)
        })
    }]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function(e) {
        "use strict";
        var t = ["webkit", "moz", "o", "ms"];
        return function(n, r) {
            if (e[n]) return e[n];
            for (var i, a = n.substr(0, 1).toUpperCase() + n.substr(1), o = 0; o < t.length; o++)
                if (i = t[o] + a, e[i]) return e[i];
            return r
        }
    }]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function(e, t) {
        "use strict";
        var n = 0,
            r = function(e, r) {
                var i = (new Date).getTime(),
                    a = Math.max(0, 16 - (i - n)),
                    o = t(function() {
                        e(i + a)
                    }, a);
                return n = i + a, o
            };
        return e("requestAnimationFrame", r)
    }]).factory("cancelAnimation", ["polyfill", "$timeout", function(e, t) {
        "use strict";
        var n = function(e) {
            t.cancel(e)
        };
        return e("cancelAnimationFrame", n)
    }]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", "duScrollBottomSpy", "duScrollActiveClass", function(e, t, n, r, i, a, o, s, l) {
        "use strict";
        var u = function(i) {
                var u = !1,
                    c = !1,
                    d = function() {
                        c = !1;
                        var t, o = i.container,
                            u = o[0],
                            d = 0;
                        "undefined" != typeof HTMLElement && u instanceof HTMLElement || u.nodeType && u.nodeType === u.ELEMENT_NODE ? (d = u.getBoundingClientRect().top, t = Math.round(u.scrollTop + u.clientHeight) >= u.scrollHeight) : t = Math.round(n.pageYOffset + n.innerHeight) >= r[0].body.scrollHeight;
                        var f, p, h, m, g, v, y = s && t ? "bottom" : "top";
                        for (m = i.spies, p = i.currentlyActive, h = void 0, f = 0; f < m.length; f++) g = m[f], v = g.getTargetPosition(), v && (s && t || v.top + g.offset - d < 20 && (a || -1 * v.top + d) < v.height) && (!h || h[y] < v[y]) && (h = {
                            spy: g
                        }, h[y] = v[y]);
                        h && (h = h.spy), p === h || a && !h || (p && (p.$element.removeClass(l), e.$broadcast("duScrollspy:becameInactive", p.$element, angular.element(p.getTargetElement()))), h && (h.$element.addClass(l), e.$broadcast("duScrollspy:becameActive", h.$element, angular.element(h.getTargetElement()))), i.currentlyActive = h)
                    };
                return o ? function() {
                    u ? c = !0 : (d(), u = t(function() {
                        u = !1, c && d()
                    }, o, !1))
                } : d
            },
            c = {},
            d = function(e) {
                var t = e.$id,
                    n = {
                        spies: []
                    };
                return n.handler = u(n), c[t] = n, e.$on("$destroy", function() {
                    f(e)
                }), t
            },
            f = function(e) {
                var t = e.$id,
                    n = c[t],
                    r = n.container;
                r && r.off("scroll", n.handler), delete c[t]
            },
            p = d(e),
            h = function(e) {
                return c[e.$id] ? c[e.$id] : e.$parent ? h(e.$parent) : c[p]
            },
            m = function(e) {
                var t, n, r = e.$scope;
                if (r) return h(r);
                for (n in c)
                    if (t = c[n], -1 !== t.spies.indexOf(e)) return t
            },
            g = function(e) {
                for (; e.parentNode;)
                    if (e = e.parentNode, e === document) return !0;
                return !1
            },
            v = function(e) {
                var t = m(e);
                t && (t.spies.push(e), t.container && g(t.container) || (t.container && t.container.off("scroll", t.handler), t.container = i.getContainer(e.$scope), t.container.on("scroll", t.handler).triggerHandler("scroll")))
            },
            y = function(e) {
                var t = m(e);
                e === t.currentlyActive && (t.currentlyActive = null);
                var n = t.spies.indexOf(e); - 1 !== n && t.spies.splice(n, 1), e.$element = null
            };
        return {
            addSpy: v,
            removeSpy: y,
            createContext: d,
            destroyContext: f,
            getContextForScope: h
        }
    }]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function(e) {
        "use strict";
        var t = {},
            n = function(e, n) {
                var r = e.$id;
                return t[r] = n, r
            },
            r = function(e) {
                return t[e.$id] ? e.$id : e.$parent ? r(e.$parent) : void 0
            },
            i = function(n) {
                var i = r(n);
                return i ? t[i] : e
            },
            a = function(e) {
                var n = r(e);
                n && delete t[n]
            };
        return {
            getContainerId: r,
            getContainer: i,
            setContainer: n,
            removeContainer: a
        }
    }]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(e, t, n) {
        "use strict";
        return {
            link: function(r, i, a) {
                i.on("click", function(i) {
                    if (a.href && -1 !== a.href.indexOf("#") || "" !== a.duSmoothScroll) {
                        var o = a.href ? a.href.replace(/.*(?=#[^\s]+$)/, "").substring(1) : a.duSmoothScroll,
                            s = document.getElementById(o) || document.getElementsByName(o)[0];
                        if (s && s.getBoundingClientRect) {
                            i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault();
                            var l = a.offset ? parseInt(a.offset, 10) : t,
                                u = a.duration ? parseInt(a.duration, 10) : e,
                                c = n.getContainer(r);
                            c.duScrollToElement(angular.element(s), isNaN(l) ? 0 : l, isNaN(u) ? 0 : u)
                        }
                    }
                })
            }
        }
    }]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function(e) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function(t, n, r) {
                return {
                    pre: function(t, n, r, i) {
                        e.createContext(t)
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function(e) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function(t, n, r) {
                return {
                    pre: function(t, n, r, i) {
                        r.$observe("duScrollContainer", function(r) {
                            angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, e.setContainer(t, r), t.$on("$destroy", function() {
                                e.removeContainer(t)
                            })
                        })
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(e, t, n, r) {
        "use strict";
        var i = function(e, t, n, r) {
            angular.isElement(e) ? this.target = e : angular.isString(e) && (this.targetId = e), this.$scope = t, this.$element = n, this.offset = r
        };
        return i.prototype.getTargetElement = function() {
            return !this.target && this.targetId && (this.target = document.getElementById(this.targetId) || document.getElementsByName(this.targetId)[0]), this.target
        }, i.prototype.getTargetPosition = function() {
            var e = this.getTargetElement();
            return e ? e.getBoundingClientRect() : void 0
        }, i.prototype.flushTargetCache = function() {
            this.targetId && (this.target = void 0)
        }, {
            link: function(a, o, s) {
                var l, u = s.ngHref || s.href;
                if (u && -1 !== u.indexOf("#") ? l = u.replace(/.*(?=#[^\s]+$)/, "").substring(1) : s.duScrollspy ? l = s.duScrollspy : s.duSmoothScroll && (l = s.duSmoothScroll), l) {
                    var c = n(function() {
                        var n = new i(l, a, o, -(s.offset ? parseInt(s.offset, 10) : t));
                        e.addSpy(n), a.$on("$locationChangeSuccess", n.flushTargetCache.bind(n));
                        var u = r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n));
                        a.$on("$destroy", function() {
                            e.removeSpy(n), u()
                        })
                    }, 0, !1);
                    a.$on("$destroy", function() {
                        n.cancel(c)
                    })
                }
            }
        }
    }]),
    function() {
        "use strict";
        var e = {
                backspace: 8,
                tab: 9,
                enter: 13,
                escape: 27,
                space: 32,
                up: 38,
                down: 40,
                left: 37,
                right: 39,
                "delete": 46,
                comma: 188
            },
            t = 9007199254740991,
            n = ["text", "email", "url"],
            r = angular.module("ngTagsInput", []);
        r.directive("tagsInput", ["$timeout", "$document", "$window", "tagsInputConfig", "tiUtil", function(r, i, a, o, s) {
            function l(e, t, n, r) {
                var i, a, o, l = {};
                return i = function(t) {
                    return s.safeToString(t[e.displayProperty])
                }, a = function(t, n) {
                    t[e.displayProperty] = n
                }, o = function(t) {
                    var r = i(t);
                    return r && r.length >= e.minLength && r.length <= e.maxLength && e.allowedTagsPattern.test(r) && !s.findInObjectArray(l.items, t, e.keyProperty || e.displayProperty) && n({
                        $tag: t
                    })
                }, l.items = [], l.addText = function(e) {
                    var t = {};
                    return a(t, e), l.add(t)
                }, l.add = function(n) {
                    var r = i(n);
                    return e.replaceSpacesWithDashes && (r = s.replaceSpacesWithDashes(r)), a(n, r), o(n) ? (l.items.push(n), t.trigger("tag-added", {
                        $tag: n
                    })) : r && t.trigger("invalid-tag", {
                        $tag: n
                    }), n
                }, l.remove = function(e) {
                    var n = l.items[e];
                    return r({
                        $tag: n
                    }) ? (l.items.splice(e, 1), l.clearSelection(), t.trigger("tag-removed", {
                        $tag: n
                    }), n) : void 0
                }, l.select = function(e) {
                    0 > e ? e = l.items.length - 1 : e >= l.items.length && (e = 0), l.index = e, l.selected = l.items[e]
                }, l.selectPrior = function() {
                    l.select(--l.index)
                }, l.selectNext = function() {
                    l.select(++l.index)
                }, l.removeSelected = function() {
                    return l.remove(l.index)
                }, l.clearSelection = function() {
                    l.selected = null, l.index = -1
                }, l.clearSelection(), l
            }

            function u(e) {
                return -1 !== n.indexOf(e)
            }
            return {
                restrict: "E",
                require: "ngModel",
                scope: {
                    tags: "=ngModel",
                    text: "=?",
                    onTagAdding: "&",
                    onTagAdded: "&",
                    onInvalidTag: "&",
                    onTagRemoving: "&",
                    onTagRemoved: "&",
                    onTagClicked: "&"
                },
                replace: !1,
                transclude: !0,
                templateUrl: "ngTagsInput/tags-input.html",
                controller: ["$scope", "$attrs", "$element", function(e, n, r) {
                    e.events = s.simplePubSub(), o.load("tagsInput", e, n, {
                        template: [String, "ngTagsInput/tag-item.html"],
                        type: [String, "text", u],
                        placeholder: [String, "Add a tag"],
                        tabindex: [Number, null],
                        removeTagSymbol: [String, String.fromCharCode(215)],
                        replaceSpacesWithDashes: [Boolean, !0],
                        minLength: [Number, 3],
                        maxLength: [Number, t],
                        addOnEnter: [Boolean, !0],
                        addOnSpace: [Boolean, !1],
                        addOnComma: [Boolean, !0],
                        addOnBlur: [Boolean, !0],
                        addOnPaste: [Boolean, !1],
                        pasteSplitPattern: [RegExp, /,/],
                        allowedTagsPattern: [RegExp, /.+/],
                        enableEditingLastTag: [Boolean, !1],
                        minTags: [Number, 0],
                        maxTags: [Number, t],
                        displayProperty: [String, "text"],
                        keyProperty: [String, ""],
                        allowLeftoverText: [Boolean, !1],
                        addFromAutocompleteOnly: [Boolean, !1],
                        spellcheck: [Boolean, !0]
                    }), e.tagList = new l(e.options, e.events, s.handleUndefinedResult(e.onTagAdding, !0), s.handleUndefinedResult(e.onTagRemoving, !0)), this.registerAutocomplete = function() {
                        var t = r.find("input");
                        return {
                            addTag: function(t) {
                                return e.tagList.add(t)
                            },
                            focusInput: function() {
                                t[0].focus()
                            },
                            getTags: function() {
                                return e.tagList.items
                            },
                            getCurrentTagText: function() {
                                return e.newTag.text()
                            },
                            getOptions: function() {
                                return e.options
                            },
                            on: function(t, n) {
                                return e.events.on(t, n), this
                            }
                        }
                    }, this.registerTagItem = function() {
                        return {
                            getOptions: function() {
                                return e.options
                            },
                            removeTag: function(t) {
                                e.disabled || e.tagList.remove(t)
                            }
                        }
                    }
                }],
                link: function(t, n, o, l) {
                    var u, c = [e.enter, e.comma, e.space, e.backspace, e["delete"], e.left, e.right],
                        d = t.tagList,
                        f = t.events,
                        p = t.options,
                        h = n.find("input"),
                        m = ["minTags", "maxTags", "allowLeftoverText"];
                    u = function() {
                        l.$setValidity("maxTags", d.items.length <= p.maxTags), l.$setValidity("minTags", d.items.length >= p.minTags), l.$setValidity("leftoverText", t.hasFocus || p.allowLeftoverText ? !0 : !t.newTag.text())
                    }, l.$isEmpty = function(e) {
                        return !e || !e.length
                    }, t.newTag = {
                        text: function(e) {
                            return angular.isDefined(e) ? (t.text = e, void f.trigger("input-change", e)) : t.text || ""
                        },
                        invalid: null
                    }, t.track = function(e) {
                        return e[p.keyProperty || p.displayProperty]
                    }, t.$watch("tags", function(e) {
                        e ? (d.items = s.makeObjectArray(e, p.displayProperty), t.tags = d.items) : d.items = []
                    }), t.$watch("tags.length", function() {
                        u(), l.$validate()
                    }), o.$observe("disabled", function(e) {
                        t.disabled = e
                    }), t.eventHandlers = {
                        input: {
                            keydown: function(e) {
                                f.trigger("input-keydown", e)
                            },
                            focus: function() {
                                t.hasFocus || (t.hasFocus = !0, f.trigger("input-focus"))
                            },
                            blur: function() {
                                r(function() {
                                    var e = i.prop("activeElement"),
                                        r = e === h[0],
                                        a = n[0].contains(e);
                                    (r || !a) && (t.hasFocus = !1, f.trigger("input-blur"))
                                })
                            },
                            paste: function(e) {
                                e.getTextData = function() {
                                    var t = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
                                    return t ? t.getData("text/plain") : a.clipboardData.getData("Text")
                                }, f.trigger("input-paste", e)
                            }
                        },
                        host: {
                            click: function() {
                                t.disabled || h[0].focus()
                            }
                        },
                        tag: {
                            click: function(e) {
                                f.trigger("tag-clicked", {
                                    $tag: e
                                })
                            }
                        }
                    }, f.on("tag-added", t.onTagAdded).on("invalid-tag", t.onInvalidTag).on("tag-removed", t.onTagRemoved).on("tag-clicked", t.onTagClicked).on("tag-added", function() {
                        t.newTag.text("")
                    }).on("tag-added tag-removed", function() {
                        t.tags = d.items, l.$setDirty()
                    }).on("invalid-tag", function() {
                        t.newTag.invalid = !0
                    }).on("option-change", function(e) {
                        -1 !== m.indexOf(e.name) && u()
                    }).on("input-change", function() {
                        d.clearSelection(), t.newTag.invalid = null
                    }).on("input-focus", function() {
                        n.triggerHandler("focus"), l.$setValidity("leftoverText", !0)
                    }).on("input-blur", function() {
                        p.addOnBlur && !p.addFromAutocompleteOnly && d.addText(t.newTag.text()), n.triggerHandler("blur"), u()
                    }).on("input-keydown", function(n) {
                        var r, i, a, o, l = n.keyCode,
                            u = {};
                        if (!s.isModifierOn(n) && -1 !== c.indexOf(l)) {
                            if (u[e.enter] = p.addOnEnter, u[e.comma] = p.addOnComma, u[e.space] = p.addOnSpace, r = !p.addFromAutocompleteOnly && u[l], i = (l === e.backspace || l === e["delete"]) && d.selected, o = l === e.backspace && 0 === t.newTag.text().length && p.enableEditingLastTag, a = (l === e.backspace || l === e.left || l === e.right) && 0 === t.newTag.text().length && !p.enableEditingLastTag, r) d.addText(t.newTag.text());
                            else if (o) {
                                var f;
                                d.selectPrior(), f = d.removeSelected(), f && t.newTag.text(f[p.displayProperty])
                            } else i ? d.removeSelected() : a && (l === e.left || l === e.backspace ? d.selectPrior() : l === e.right && d.selectNext());
                            (r || a || i || o) && n.preventDefault()
                        }
                    }).on("input-paste", function(e) {
                        if (p.addOnPaste) {
                            var t = e.getTextData(),
                                n = t.split(p.pasteSplitPattern);
                            n.length > 1 && (n.forEach(function(e) {
                                d.addText(e)
                            }), e.preventDefault())
                        }
                    })
                }
            }
        }]), r.directive("tiTagItem", ["tiUtil", function(e) {
            return {
                restrict: "E",
                require: "^tagsInput",
                template: '<ng-include src="$$template"></ng-include>',
                scope: {
                    data: "="
                },
                link: function(t, n, r, i) {
                    var a = i.registerTagItem(),
                        o = a.getOptions();
                    t.$$template = o.template, t.$$removeTagSymbol = o.removeTagSymbol, t.$getDisplayText = function() {
                        return e.safeToString(t.data[o.displayProperty])
                    }, t.$removeTag = function() {
                        a.removeTag(t.$index)
                    }, t.$watch("$parent.$index", function(e) {
                        t.$index = e
                    })
                }
            }
        }]), r.directive("autoComplete", ["$document", "$timeout", "$sce", "$q", "tagsInputConfig", "tiUtil", function(t, n, r, i, a, o) {
            function s(e, t, n) {
                var r, a, s, l = {};
                return s = function() {
                    return t.tagsInput.keyProperty || t.tagsInput.displayProperty
                }, r = function(e, n) {
                    return e.filter(function(e) {
                        return !o.findInObjectArray(n, e, s(), function(e, n) {
                            return t.tagsInput.replaceSpacesWithDashes && (e = o.replaceSpacesWithDashes(e), n = o.replaceSpacesWithDashes(n)), o.defaultComparer(e, n)
                        })
                    })
                }, l.reset = function() {
                    a = null, l.items = [], l.visible = !1, l.index = -1, l.selected = null, l.query = null
                }, l.show = function() {
                    t.selectFirstMatch ? l.select(0) : l.selected = null, l.visible = !0
                }, l.load = o.debounce(function(n, u) {
                    l.query = n;
                    var c = i.when(e({
                        $query: n
                    }));
                    a = c, c.then(function(e) {
                        c === a && (e = o.makeObjectArray(e.data || e, s()), e = r(e, u), l.items = e.slice(0, t.maxResultsToShow), l.items.length > 0 ? l.show() : l.reset())
                    })
                }, t.debounceDelay), l.selectNext = function() {
                    l.select(++l.index)
                }, l.selectPrior = function() {
                    l.select(--l.index)
                }, l.select = function(e) {
                    0 > e ? e = l.items.length - 1 : e >= l.items.length && (e = 0), l.index = e, l.selected = l.items[e], n.trigger("suggestion-selected", e)
                }, l.reset(), l
            }

            function l(e, t) {
                var n = e.find("li").eq(t),
                    r = n.parent(),
                    i = n.prop("offsetTop"),
                    a = n.prop("offsetHeight"),
                    o = r.prop("clientHeight"),
                    s = r.prop("scrollTop");
                s > i ? r.prop("scrollTop", i) : i + a > o + s && r.prop("scrollTop", i + a - o)
            }
            return {
                restrict: "E",
                require: "^tagsInput",
                scope: {
                    source: "&"
                },
                templateUrl: "ngTagsInput/auto-complete.html",
                controller: ["$scope", "$element", "$attrs", function(e, t, n) {
                    e.events = o.simplePubSub(), a.load("autoComplete", e, n, {
                        template: [String, "ngTagsInput/auto-complete-match.html"],
                        debounceDelay: [Number, 100],
                        minLength: [Number, 3],
                        highlightMatchedText: [Boolean, !0],
                        maxResultsToShow: [Number, 10],
                        loadOnDownArrow: [Boolean, !1],
                        loadOnEmpty: [Boolean, !1],
                        loadOnFocus: [Boolean, !1],
                        selectFirstMatch: [Boolean, !0],
                        displayProperty: [String, ""]
                    }), e.suggestionList = new s(e.source, e.options, e.events), this.registerAutocompleteMatch = function() {
                        return {
                            getOptions: function() {
                                return e.options
                            },
                            getQuery: function() {
                                return e.suggestionList.query
                            }
                        }
                    }
                }],
                link: function(t, n, r, i) {
                    var a, s = [e.enter, e.tab, e.escape, e.up, e.down],
                        u = t.suggestionList,
                        c = i.registerAutocomplete(),
                        d = t.options,
                        f = t.events;
                    d.tagsInput = c.getOptions(), a = function(e) {
                        return e && e.length >= d.minLength || !e && d.loadOnEmpty
                    }, t.addSuggestionByIndex = function(e) {
                        u.select(e), t.addSuggestion()
                    }, t.addSuggestion = function() {
                        var e = !1;
                        return u.selected && (c.addTag(angular.copy(u.selected)), u.reset(), c.focusInput(), e = !0), e
                    }, t.track = function(e) {
                        return e[d.tagsInput.keyProperty || d.tagsInput.displayProperty]
                    }, c.on("tag-added tag-removed invalid-tag input-blur", function() {
                        u.reset()
                    }).on("input-change", function(e) {
                        a(e) ? u.load(e, c.getTags()) : u.reset()
                    }).on("input-focus", function() {
                        var e = c.getCurrentTagText();
                        d.loadOnFocus && a(e) && u.load(e, c.getTags())
                    }).on("input-keydown", function(n) {
                        var r = n.keyCode,
                            i = !1;
                        return o.isModifierOn(n) || -1 === s.indexOf(r) ? void 0 : (u.visible ? r === e.down ? (u.selectNext(), i = !0) : r === e.up ? (u.selectPrior(), i = !0) : r === e.escape ? (u.reset(), i = !0) : (r === e.enter || r === e.tab) && (i = t.addSuggestion()) : r === e.down && t.options.loadOnDownArrow && (u.load(c.getCurrentTagText(), c.getTags()), i = !0), i ? (n.preventDefault(), n.stopImmediatePropagation(), !1) : void 0)
                    }), f.on("suggestion-selected", function(e) {
                        l(n, e)
                    })
                }
            }
        }]), r.directive("tiAutocompleteMatch", ["$sce", "tiUtil", function(e, t) {
            return {
                restrict: "E",
                require: "^autoComplete",
                template: '<ng-include src="$$template"></ng-include>',
                scope: {
                    data: "="
                },
                link: function(n, r, i, a) {
                    var o = a.registerAutocompleteMatch(),
                        s = o.getOptions();
                    n.$$template = s.template, n.$index = n.$parent.$index, n.$highlight = function(n) {
                        return s.highlightMatchedText && (n = t.safeHighlight(n, o.getQuery())), e.trustAsHtml(n)
                    }, n.$getDisplayText = function() {
                        return t.safeToString(n.data[s.displayProperty || s.tagsInput.displayProperty])
                    }
                }
            }
        }]), r.directive("tiTranscludeAppend", function() {
            return function(e, t, n, r, i) {
                i(function(e) {
                    t.append(e)
                })
            }
        }), r.directive("tiAutosize", ["tagsInputConfig", function(e) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(t, n, r, i) {
                    var a, o, s = e.getTextAutosizeThreshold();
                    a = angular.element('<span class="input"></span>'), a.css("display", "none").css("visibility", "hidden").css("width", "auto").css("white-space", "pre"), n.parent().append(a), o = function(e) {
                        var t, i = e;
                        return angular.isString(i) && 0 === i.length && (i = r.placeholder), i && (a.text(i), a.css("display", ""), t = a.prop("offsetWidth"), a.css("display", "none")), n.css("width", t ? t + s + "px" : ""), e
                    }, i.$parsers.unshift(o), i.$formatters.unshift(o), r.$observe("placeholder", function(e) {
                        i.$modelValue || o(e)
                    })
                }
            }
        }]), r.directive("tiBindAttrs", function() {
            return function(e, t, n) {
                e.$watch(n.tiBindAttrs, function(e) {
                    angular.forEach(e, function(e, t) {
                        n.$set(t, e)
                    })
                }, !0)
            }
        }), r.provider("tagsInputConfig", function() {
            var e = {},
                t = {},
                n = 3;
            this.setDefaults = function(t, n) {
                return e[t] = n, this
            }, this.setActiveInterpolation = function(e, n) {
                return t[e] = n, this
            }, this.setTextAutosizeThreshold = function(e) {
                return n = e, this
            }, this.$get = ["$interpolate", function(r) {
                var i = {};
                return i[String] = function(e) {
                    return e
                }, i[Number] = function(e) {
                    return parseInt(e, 10)
                }, i[Boolean] = function(e) {
                    return "true" === e.toLowerCase()
                }, i[RegExp] = function(e) {
                    return new RegExp(e)
                }, {
                    load: function(n, a, o, s) {
                        var l = function() {
                            return !0
                        };
                        a.options = {}, angular.forEach(s, function(s, u) {
                            var c, d, f, p, h, m;
                            c = s[0], d = s[1], f = s[2] || l, p = i[c], h = function() {
                                var t = e[n] && e[n][u];
                                return angular.isDefined(t) ? t : d
                            }, m = function(e) {
                                a.options[u] = e && f(e) ? p(e) : h()
                            }, t[n] && t[n][u] ? o.$observe(u, function(e) {
                                m(e), a.events.trigger("option-change", {
                                    name: u,
                                    newValue: e
                                })
                            }) : m(o[u] && r(o[u])(a.$parent))
                        })
                    },
                    getTextAutosizeThreshold: function() {
                        return n
                    }
                }
            }]
        }), r.factory("tiUtil", ["$timeout", function(e) {
            var t = {};
            return t.debounce = function(t, n) {
                var r;
                return function() {
                    var i = arguments;
                    e.cancel(r), r = e(function() {
                        t.apply(null, i)
                    }, n)
                }
            }, t.makeObjectArray = function(e, t) {
                if (!angular.isArray(e) || 0 === e.length || angular.isObject(e[0])) return e;
                var n = [];
                return e.forEach(function(e) {
                    var r = {};
                    r[t] = e, n.push(r)
                }), n
            }, t.findInObjectArray = function(e, n, r, i) {
                var a = null;
                return i = i || t.defaultComparer, e.some(function(e) {
                    return i(e[r], n[r]) ? (a = e, !0) : void 0
                }), a
            }, t.defaultComparer = function(e, n) {
                return t.safeToString(e).toLowerCase() === t.safeToString(n).toLowerCase()
            }, t.safeHighlight = function(e, n) {
                function r(e) {
                    return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
                }
                if (!n) return e;
                e = t.encodeHTML(e), n = t.encodeHTML(n);
                var i = new RegExp("&[^;]+;|" + r(n), "gi");
                return e.replace(i, function(e) {
                    return e.toLowerCase() === n.toLowerCase() ? "<em>" + e + "</em>" : e
                })
            }, t.safeToString = function(e) {
                return angular.isUndefined(e) || null == e ? "" : e.toString().trim()
            }, t.encodeHTML = function(e) {
                return t.safeToString(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }, t.handleUndefinedResult = function(e, t) {
                return function() {
                    var n = e.apply(null, arguments);
                    return angular.isUndefined(n) ? t : n
                }
            }, t.replaceSpacesWithDashes = function(e) {
                return t.safeToString(e).replace(/\s/g, "-")
            }, t.isModifierOn = function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || e.metaKey
            }, t.simplePubSub = function() {
                var e = {};
                return {
                    on: function(t, n) {
                        return t.split(" ").forEach(function(t) {
                            e[t] || (e[t] = []), e[t].push(n)
                        }), this
                    },
                    trigger: function(n, r) {
                        var i = e[n] || [];
                        return i.every(function(e) {
                            return t.handleUndefinedResult(e, !0)(r)
                        }), this
                    }
                }
            }, t
        }]), r.run(["$templateCache", function(e) {
            e.put("ngTagsInput/tags-input.html", '<div class="host" tabindex="-1" ng-click="eventHandlers.host.click()" ti-transclude-append><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }" ng-click="eventHandlers.tag.click(tag)"><ti-tag-item data="::tag"></ti-tag-item></li></ul><input class="input" autocomplete="off" ng-model="newTag.text" ng-model-options="{getterSetter: true}" ng-keydown="eventHandlers.input.keydown($event)" ng-focus="eventHandlers.input.focus($event)" ng-blur="eventHandlers.input.blur($event)" ng-paste="eventHandlers.input.paste($event)" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ng-disabled="disabled" ti-bind-attrs="{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}" ti-autosize></div></div>'), e.put("ngTagsInput/tag-item.html", '<span ng-bind="$getDisplayText()"></span> <a class="remove-button" ng-click="$removeTag()" ng-bind="::$$removeTagSymbol"></a>'), e.put("ngTagsInput/auto-complete.html", '<div class="autocomplete" ng-if="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestionByIndex($index)" ng-mouseenter="suggestionList.select($index)"><ti-autocomplete-match data="::item"></ti-autocomplete-match></li></ul></div>'), e.put("ngTagsInput/auto-complete-match.html", '<span ng-bind-html="$highlight($getDisplayText())"></span>')
        }])
    }(),
    function(e) {
        "use strict";
        e.module("720kb.tooltips", []).provider("tooltipsConfig", function() {
            var t = {
                scroll: !1,
                showTrigger: "mouseover",
                hideTrigger: "mouseleave",
                hideTarget: "element",
                side: "top",
                size: "medium",
                "try": !0,
                "class": "",
                speed: "medium",
                delay: 0,
                lazy: !0,
                closeButton: null
            };
            this.options = function() {
                return 1 === arguments.length && e.extend(t, arguments[0]), e.copy(t)
            }, this.$get = function() {
                return t
            }
        }).directive("tooltips", ["$window", "$compile", "$interpolate", "$interval", "$sce", "tooltipsConfig", function(t, n, r, i, a, o) {
            var s = 8,
                l = 9,
                u = 10,
                c = 20,
                d = "_720kb-tooltip-",
                f = r.startSymbol(),
                p = r.endSymbol();
            return {
                restrict: "A",
                scope: {
                    tooltipViewModel: "="
                },
                link: function(r, h, m) {
                    function g() {
                        z && A || (A = !0, r.initTooltip(q)), B && r.tooltipTryPosition(), r.showTooltip()
                    }

                    function v() {
                        r.hideTooltip()
                    }

                    function y() {
                        r.hideTooltip(), r.initTooltip(j)
                    }
                    var $, b, w, S, k, x, T, C, P, E, A = !1,
                        I = e.element(h[0]),
                        L = e.element(t.document.getElementsByTagName("body")[0]),
                        M = m.tooltipTitle || m.title || "",
                        O = m.tooltipScroll || o.scroll,
                        N = m.tooltipContent || "",
                        R = m.tooltipHtml || "",
                        _ = m.tooltipShowTrigger || o.showTrigger,
                        D = m.tooltipHideTrigger || o.hideTrigger,
                        U = "undefined" != typeof m.tooltipHideTarget && null !== m.tooltipHideTarget ? m.tooltipHideTarget : o.hideTarget,
                        j = m.tooltipSide || o.side,
                        q = j,
                        V = m.tooltipSize || o.size,
                        B = "undefined" != typeof m.tooltipTry && null !== m.tooltipTry ? r.$eval(m.tooltipTry) : o["try"],
                        F = m.tooltipClass || o["class"],
                        H = (m.tooltipSpeed || o.speed).toLowerCase(),
                        Y = m.tooltipDelay || o.delay,
                        z = "undefined" != typeof m.tooltipLazy && null !== m.tooltipLazy ? r.$eval(m.tooltipLazy) : o.lazy,
                        W = m.tooltipCloseButton || o.closeButton,
                        X = "undefined" != typeof W && null !== W,
                        Q = '<div class="_720kb-tooltip ' + d + V + '">';
                    "element" !== U && "tooltip" !== U && (U = "element"), X && (Q = Q + '<span class="' + d + 'close-button" ng-click="hideTooltip()"> ' + W + " </span>"), m.tooltipView && (Q = m.tooltipViewCtrl ? Q + '<div ng-controller="' + m.tooltipViewCtrl + '" ng-include="\'' + m.tooltipView + "'\"></div>" : Q + "<div ng-include=\"'" + m.tooltipView + "'\"></div>"), Q = Q + '<div class="' + d + 'title"> ' + f + "title" + p + "</div>" + f + "content" + p + ' <span class="' + d + 'html_content" ng-bind-html="getHtml()"></span> <span class="' + d + 'caret"></span></div>', r.title = M, r.content = N, r.html = R, r.getHtml = function() {
                        return a.trustAsHtml(r.html)
                    }, r.parseSpeed = function() {
                        switch (H) {
                            case "fast":
                                H = 100;
                                break;
                            case "medium":
                                H = 450;
                                break;
                            case "slow":
                                H = 800;
                                break;
                            default:
                                H = Number(H)
                        }
                    }, $ = n(Q)(r), $.addClass(F), L.append($), r.isTooltipEmpty = function() {
                        return r.title || r.content || r.html || m.tooltipView ? void 0 : !0
                    }, r.initTooltip = function(e) {
                        r.isTooltipEmpty() ? $.css("visibility", "hidden") : ($.css("visibility", "visible"), k = I[0].offsetHeight, x = I[0].offsetWidth, b = $[0].offsetHeight, w = $[0].offsetWidth, r.parseSpeed(), r.tooltipPositioning(e))
                    }, r.getOffsets = function() {
                        T = r.getOffsetTop(I[0]), C = r.getOffsetLeft(I[0])
                    }, r.getOffsetTop = function(e) {
                        var n = e.getBoundingClientRect().top + t.scrollY;
                        return isNaN(n) && (n = e.getBoundingClientRect().top + t.pageYOffset), n
                    }, r.getOffsetLeft = function(e) {
                        var n = e.getBoundingClientRect().left + t.scrollX;
                        return isNaN(n) && (n = e.getBoundingClientRect().left + t.pageXOffset), n
                    }, r.bindShowTriggers = function() {
                        I.bind(_, g)
                    }, r.bindHideTriggers = function() {
                        "tooltip" === U ? $.bind(D, v) : I.bind(D, v)
                    }, r.clearTriggers = function() {
                        I.unbind(_, g), I.unbind(D, v)
                    }, r.bindShowTriggers(), r.showTooltip = function() {
                        O && (E = I[0].getBoundingClientRect(), P = i(function() {
                            var t = I[0].getBoundingClientRect();
                            e.equals(E, t) || r.tooltipPositioning(q), E = t
                        }, c)), $.addClass(d + "open"), $.css("transition", "opacity " + H + "ms linear"), Y && $.css("transition-delay", Y + "ms"), r.clearTriggers(), r.bindHideTriggers()
                    }, r.hideTooltip = function() {
                        $.css("transition", "opacity " + H + "ms linear, visibility 0s linear " + H + "ms"), $.removeClass(d + "open"), r.clearTriggers(), r.bindShowTriggers(), e.isDefined(r.positionInterval) && (i.cancel(P), P = void 0)
                    }, r.removePosition = function() {
                        $.removeClass(d + "left").removeClass(d + "right").removeClass(d + "top").removeClass(d + "bottom ")
                    }, r.tooltipPositioning = function(e) {
                        r.removePosition(), r.getOffsets();
                        var t, n;
                        "small" === V ? S = s : "medium" === V ? S = l : "large" === V && (S = u), "left" === e && (t = T + k / 2 - b / 2, n = C - (w + S), $.css("top", t + "px"), $.css("left", n + "px"), $.addClass(d + "left")), "right" === e && (t = T + k / 2 - b / 2, n = C + x + S, $.css("top", t + "px"), $.css("left", n + "px"), $.addClass(d + "right")), "top" === e && (t = T - S - b, n = C + x / 2 - w / 2, $.css("top", t + "px"), $.css("left", n + "px"), $.addClass(d + "top")), "bottom" === e && (t = T + k + S, n = C + x / 2 - w / 2, $.css("top", t + "px"), $.css("left", n + "px"), $.addClass(d + "bottom"))
                    }, r.tooltipTryPosition = function() {
                        var e = $[0].offsetHeight,
                            n = $[0].offsetWidth,
                            i = $[0].offsetTop,
                            a = $[0].offsetLeft,
                            o = t.innerWidth,
                            s = t.innerHeight,
                            l = o - (n + a),
                            u = s - (e + i),
                            c = I[0].offsetHeight,
                            d = I[0].offsetWidth,
                            f = I[0].offsetLeft,
                            p = I[0].offsetTop,
                            h = o - (f + d),
                            m = s - (c + p),
                            g = {
                                left: a,
                                top: i,
                                bottom: u,
                                right: l
                            },
                            v = {
                                left: f,
                                right: h,
                                top: p,
                                bottom: m
                            },
                            y = Object.keys(v).reduce(function(e, t) {
                                return v[e] > v[t] ? e : t
                            }),
                            b = Object.keys(g).reduce(function(e, t) {
                                return g[e] < g[t] ? e : t
                            });
                        j !== y && g[b] < 20 && (q = y, r.tooltipPositioning(q), r.initTooltip(y))
                    }, e.element(t).bind("resize", y), r.$on("$destroy", function() {
                        e.element(t).unbind("resize", y), r.clearTriggers(), $.remove()
                    }), m.tooltipTitle && m.$observe("tooltipTitle", function(e) {
                        r.title = e, r.initTooltip(q)
                    }), m.title && m.$observe("title", function(e) {
                        r.title = e, r.initTooltip(q)
                    }), m.tooltipContent && m.$observe("tooltipContent", function(e) {
                        r.content = e, r.initTooltip(q)
                    }), m.tooltipHtml && m.$observe("tooltipHtml", function(e) {
                        r.html = e, r.initTooltip(q)
                    })
                }
            }
        }])
    }(angular), ! function(e, t, n, r) {
        "use strict";

        function i(e, t, n) {
            return setTimeout(c(e, n), t)
        }

        function a(e, t, n) {
            return Array.isArray(e) ? (o(e, n[t], n), !0) : !1
        }

        function o(e, t, n) {
            var i;
            if (e)
                if (e.forEach) e.forEach(t, n);
                else if (e.length !== r)
                for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++;
            else
                for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
        }

        function s(e, t, n) {
            for (var i = Object.keys(t), a = 0; a < i.length;)(!n || n && e[i[a]] === r) && (e[i[a]] = t[i[a]]), a++;
            return e
        }

        function l(e, t) {
            return s(e, t, !0)
        }

        function u(e, t, n) {
            var r, i = t.prototype;
            r = e.prototype = Object.create(i), r.constructor = e, r._super = i, n && s(r, n)
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t) {
            return typeof e == ce ? e.apply(t ? t[0] || r : r, t) : e
        }

        function f(e, t) {
            return e === r ? t : e
        }

        function p(e, t, n) {
            o(v(t), function(t) {
                e.addEventListener(t, n, !1)
            })
        }

        function h(e, t, n) {
            o(v(t), function(t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function m(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function g(e, t) {
            return e.indexOf(t) > -1
        }

        function v(e) {
            return e.trim().split(/\s+/g)
        }

        function y(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var r = 0; r < e.length;) {
                if (n && e[r][n] == t || !n && e[r] === t) return r;
                r++
            }
            return -1
        }

        function $(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function b(e, t, n) {
            for (var r = [], i = [], a = 0; a < e.length;) {
                var o = t ? e[a][t] : e[a];
                y(i, o) < 0 && r.push(e[a]), i[a] = o, a++
            }
            return n && (r = t ? r.sort(function(e, n) {
                return e[t] > n[t]
            }) : r.sort()), r
        }

        function w(e, t) {
            for (var n, i, a = t[0].toUpperCase() + t.slice(1), o = 0; o < le.length;) {
                if (n = le[o], i = n ? n + a : t, i in e) return i;
                o++
            }
            return r
        }

        function S() {
            return he++
        }

        function k(e) {
            var t = e.ownerDocument;
            return t.defaultView || t.parentWindow
        }

        function x(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                d(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function T(e) {
            var t, n = e.options.inputClass;
            return new(t = n ? n : ve ? j : ye ? B : ge ? H : U)(e, C)
        }

        function C(e, t, n) {
            var r = n.pointers.length,
                i = n.changedPointers.length,
                a = t & xe && r - i === 0,
                o = t & (Ce | Pe) && r - i === 0;
            n.isFirst = !!a, n.isFinal = !!o, a && (e.session = {}), n.eventType = t, P(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function P(e, t) {
            var n = e.session,
                r = t.pointers,
                i = r.length;
            n.firstInput || (n.firstInput = I(t)), i > 1 && !n.firstMultiple ? n.firstMultiple = I(t) : 1 === i && (n.firstMultiple = !1);
            var a = n.firstInput,
                o = n.firstMultiple,
                s = o ? o.center : a.center,
                l = t.center = L(r);
            t.timeStamp = pe(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = R(s, l), t.distance = N(s, l), E(n, t), t.offsetDirection = O(t.deltaX, t.deltaY), t.scale = o ? D(o.pointers, r) : 1, t.rotation = o ? _(o.pointers, r) : 0, A(n, t);
            var u = e.element;
            m(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
        }

        function E(e, t) {
            var n = t.center,
                r = e.offsetDelta || {},
                i = e.prevDelta || {},
                a = e.prevInput || {};
            (t.eventType === xe || a.eventType === Ce) && (i = e.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            }, r = e.offsetDelta = {
                x: n.x,
                y: n.y
            }), t.deltaX = i.x + (n.x - r.x), t.deltaY = i.y + (n.y - r.y)
        }

        function A(e, t) {
            var n, i, a, o, s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;
            if (t.eventType != Pe && (l > ke || s.velocity === r)) {
                var u = s.deltaX - t.deltaX,
                    c = s.deltaY - t.deltaY,
                    d = M(l, u, c);
                i = d.x, a = d.y, n = fe(d.x) > fe(d.y) ? d.x : d.y, o = O(u, c), e.lastInterval = t
            } else n = s.velocity, i = s.velocityX, a = s.velocityY, o = s.direction;
            t.velocity = n, t.velocityX = i, t.velocityY = a, t.direction = o
        }

        function I(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: de(e.pointers[n].clientX),
                clientY: de(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: pe(),
                pointers: t,
                center: L(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function L(e) {
            var t = e.length;
            if (1 === t) return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
            for (var n = 0, r = 0, i = 0; t > i;) n += e[i].clientX, r += e[i].clientY, i++;
            return {
                x: de(n / t),
                y: de(r / t)
            }
        }

        function M(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }

        function O(e, t) {
            return e === t ? Ee : fe(e) >= fe(t) ? e > 0 ? Ae : Ie : t > 0 ? Le : Me
        }

        function N(e, t, n) {
            n || (n = _e);
            var r = t[n[0]] - e[n[0]],
                i = t[n[1]] - e[n[1]];
            return Math.sqrt(r * r + i * i)
        }

        function R(e, t, n) {
            n || (n = _e);
            var r = t[n[0]] - e[n[0]],
                i = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(i, r) / Math.PI
        }

        function _(e, t) {
            return R(t[1], t[0], De) - R(e[1], e[0], De)
        }

        function D(e, t) {
            return N(t[0], t[1], De) / N(e[0], e[1], De)
        }

        function U() {
            this.evEl = je, this.evWin = qe, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
        }

        function j() {
            this.evEl = Fe, this.evWin = He, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function q() {
            this.evTarget = ze, this.evWin = We, this.started = !1, x.apply(this, arguments)
        }

        function V(e, t) {
            var n = $(e.touches),
                r = $(e.changedTouches);
            return t & (Ce | Pe) && (n = b(n.concat(r), "identifier", !0)), [n, r];
        }

        function B() {
            this.evTarget = Qe, this.targetIds = {}, x.apply(this, arguments)
        }

        function F(e, t) {
            var n = $(e.touches),
                r = this.targetIds;
            if (t & (xe | Te) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
            var i, a, o = $(e.changedTouches),
                s = [],
                l = this.target;
            if (a = n.filter(function(e) {
                    return m(e.target, l)
                }), t === xe)
                for (i = 0; i < a.length;) r[a[i].identifier] = !0, i++;
            for (i = 0; i < o.length;) r[o[i].identifier] && s.push(o[i]), t & (Ce | Pe) && delete r[o[i].identifier], i++;
            return s.length ? [b(a.concat(s), "identifier", !0), s] : void 0
        }

        function H() {
            x.apply(this, arguments);
            var e = c(this.handler, this);
            this.touch = new B(this.manager, e), this.mouse = new U(this.manager, e)
        }

        function Y(e, t) {
            this.manager = e, this.set(t)
        }

        function z(e) {
            if (g(e, tt)) return tt;
            var t = g(e, nt),
                n = g(e, rt);
            return t && n ? nt + " " + rt : t || n ? t ? nt : rt : g(e, et) ? et : Ze
        }

        function W(e) {
            this.id = S(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = f(this.options.enable, !0), this.state = it, this.simultaneous = {}, this.requireFail = []
        }

        function X(e) {
            return e & ut ? "cancel" : e & st ? "end" : e & ot ? "move" : e & at ? "start" : ""
        }

        function Q(e) {
            return e == Me ? "down" : e == Le ? "up" : e == Ae ? "left" : e == Ie ? "right" : ""
        }

        function G(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function K() {
            W.apply(this, arguments)
        }

        function J() {
            K.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Z() {
            K.apply(this, arguments)
        }

        function ee() {
            W.apply(this, arguments), this._timer = null, this._input = null
        }

        function te() {
            K.apply(this, arguments)
        }

        function ne() {
            K.apply(this, arguments)
        }

        function re() {
            W.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ie(e, t) {
            return t = t || {}, t.recognizers = f(t.recognizers, ie.defaults.preset), new ae(e, t)
        }

        function ae(e, t) {
            t = t || {}, this.options = l(t, ie.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = T(this), this.touchAction = new Y(this, this.options.touchAction), oe(this, !0), o(t.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function oe(e, t) {
            var n = e.element;
            o(e.options.cssProps, function(e, r) {
                n.style[w(n.style, r)] = t ? e : ""
            })
        }

        function se(e, n) {
            var r = t.createEvent("Event");
            r.initEvent(e, !0, !0), r.gesture = n, n.target.dispatchEvent(r)
        }
        var le = ["", "webkit", "moz", "MS", "ms", "o"],
            ue = t.createElement("div"),
            ce = "function",
            de = Math.round,
            fe = Math.abs,
            pe = Date.now,
            he = 1,
            me = /mobile|tablet|ip(ad|hone|od)|android/i,
            ge = "ontouchstart" in e,
            ve = w(e, "PointerEvent") !== r,
            ye = ge && me.test(navigator.userAgent),
            $e = "touch",
            be = "pen",
            we = "mouse",
            Se = "kinect",
            ke = 25,
            xe = 1,
            Te = 2,
            Ce = 4,
            Pe = 8,
            Ee = 1,
            Ae = 2,
            Ie = 4,
            Le = 8,
            Me = 16,
            Oe = Ae | Ie,
            Ne = Le | Me,
            Re = Oe | Ne,
            _e = ["x", "y"],
            De = ["clientX", "clientY"];
        x.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
            }
        };
        var Ue = {
                mousedown: xe,
                mousemove: Te,
                mouseup: Ce
            },
            je = "mousedown",
            qe = "mousemove mouseup";
        u(U, x, {
            handler: function(e) {
                var t = Ue[e.type];
                t & xe && 0 === e.button && (this.pressed = !0), t & Te && 1 !== e.which && (t = Ce), this.pressed && this.allow && (t & Ce && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: we,
                    srcEvent: e
                }))
            }
        });
        var Ve = {
                pointerdown: xe,
                pointermove: Te,
                pointerup: Ce,
                pointercancel: Pe,
                pointerout: Pe
            },
            Be = {
                2: $e,
                3: be,
                4: we,
                5: Se
            },
            Fe = "pointerdown",
            He = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (Fe = "MSPointerDown", He = "MSPointerMove MSPointerUp MSPointerCancel"), u(j, x, {
            handler: function(e) {
                var t = this.store,
                    n = !1,
                    r = e.type.toLowerCase().replace("ms", ""),
                    i = Ve[r],
                    a = Be[e.pointerType] || e.pointerType,
                    o = a == $e,
                    s = y(t, e.pointerId, "pointerId");
                i & xe && (0 === e.button || o) ? 0 > s && (t.push(e), s = t.length - 1) : i & (Ce | Pe) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, i, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: a,
                    srcEvent: e
                }), n && t.splice(s, 1))
            }
        });
        var Ye = {
                touchstart: xe,
                touchmove: Te,
                touchend: Ce,
                touchcancel: Pe
            },
            ze = "touchstart",
            We = "touchstart touchmove touchend touchcancel";
        u(q, x, {
            handler: function(e) {
                var t = Ye[e.type];
                if (t === xe && (this.started = !0), this.started) {
                    var n = V.call(this, e, t);
                    t & (Ce | Pe) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: $e,
                        srcEvent: e
                    })
                }
            }
        });
        var Xe = {
                touchstart: xe,
                touchmove: Te,
                touchend: Ce,
                touchcancel: Pe
            },
            Qe = "touchstart touchmove touchend touchcancel";
        u(B, x, {
            handler: function(e) {
                var t = Xe[e.type],
                    n = F.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: $e,
                    srcEvent: e
                })
            }
        }), u(H, x, {
            handler: function(e, t, n) {
                var r = n.pointerType == $e,
                    i = n.pointerType == we;
                if (r) this.mouse.allow = !1;
                else if (i && !this.mouse.allow) return;
                t & (Ce | Pe) && (this.mouse.allow = !0), this.callback(e, t, n)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ge = w(ue.style, "touchAction"),
            Ke = Ge !== r,
            Je = "compute",
            Ze = "auto",
            et = "manipulation",
            tt = "none",
            nt = "pan-x",
            rt = "pan-y";
        Y.prototype = {
            set: function(e) {
                e == Je && (e = this.compute()), Ke && (this.manager.element.style[Ge] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return o(this.manager.recognizers, function(t) {
                    d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), z(e.join(" "))
            },
            preventDefaults: function(e) {
                if (!Ke) {
                    var t = e.srcEvent,
                        n = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var r = this.actions,
                        i = g(r, tt),
                        a = g(r, rt),
                        o = g(r, nt);
                    return i || a && n & Oe || o && n & Ne ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var it = 1,
            at = 2,
            ot = 4,
            st = 8,
            lt = st,
            ut = 16,
            ct = 32;
        W.prototype = {
            defaults: {},
            set: function(e) {
                return s(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (a(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = G(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return a(e, "dropRecognizeWith", this) ? this : (e = G(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (a(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = G(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (a(e, "dropRequireFailure", this)) return this;
                e = G(e, this);
                var t = y(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    n.manager.emit(n.options.event + (t ? X(r) : ""), e)
                }
                var n = this,
                    r = this.state;
                st > r && t(!0), t(), r >= st && t(!0)
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = ct)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (ct | it))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = s({}, e);
                return d(this.options.enable, [this, t]) ? (this.state & (lt | ut | ct) && (this.state = it), this.state = this.process(t), void(this.state & (at | ot | st | ut) && this.tryEmit(t))) : (this.reset(), void(this.state = ct))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, u(K, W, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    n = e.eventType,
                    r = t & (at | ot),
                    i = this.attrTest(e);
                return r && (n & Pe || !i) ? t | ut : r || i ? n & Ce ? t | st : t & at ? t | ot : at : ct
            }
        }), u(J, K, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Re
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Oe && t.push(rt), e & Ne && t.push(nt), t
            },
            directionTest: function(e) {
                var t = this.options,
                    n = !0,
                    r = e.distance,
                    i = e.direction,
                    a = e.deltaX,
                    o = e.deltaY;
                return i & t.direction || (t.direction & Oe ? (i = 0 === a ? Ee : 0 > a ? Ae : Ie, n = a != this.pX, r = Math.abs(e.deltaX)) : (i = 0 === o ? Ee : 0 > o ? Le : Me, n = o != this.pY, r = Math.abs(e.deltaY))), e.direction = i, n && r > t.threshold && i & t.direction
            },
            attrTest: function(e) {
                return K.prototype.attrTest.call(this, e) && (this.state & at || !(this.state & at) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = Q(e.direction);
                t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
            }
        }), u(Z, K, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & at)
            },
            emit: function(e) {
                if (this._super.emit.call(this, e), 1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + t, e)
                }
            }
        }), u(ee, W, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Ze]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    r = e.distance < t.threshold,
                    a = e.deltaTime > t.time;
                if (this._input = e, !r || !n || e.eventType & (Ce | Pe) && !a) this.reset();
                else if (e.eventType & xe) this.reset(), this._timer = i(function() {
                    this.state = lt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Ce) return lt;
                return ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === lt && (e && e.eventType & Ce ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
            }
        }), u(te, K, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & at)
            }
        }), u(ne, K, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Oe | Ne,
                pointers: 1
            },
            getTouchAction: function() {
                return J.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, n = this.options.direction;
                return n & (Oe | Ne) ? t = e.velocity : n & Oe ? t = e.velocityX : n & Ne && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && fe(t) > this.options.velocity && e.eventType & Ce
            },
            emit: function(e) {
                var t = Q(e.direction);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), u(re, W, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [et]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    r = e.distance < t.threshold,
                    a = e.deltaTime < t.time;
                if (this.reset(), e.eventType & xe && 0 === this.count) return this.failTimeout();
                if (r && a && n) {
                    if (e.eventType != Ce) return this.failTimeout();
                    var o = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
                        s = !this.pCenter || N(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e;
                    var l = this.count % t.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = i(function() {
                        this.state = lt, this.tryEmit()
                    }, t.interval, this), at) : lt
                }
                return ct
            },
            failTimeout: function() {
                return this._timer = i(function() {
                    this.state = ct
                }, this.options.interval, this), ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ie.VERSION = "2.0.4", ie.defaults = {
            domEvents: !1,
            touchAction: Je,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [te, {
                    enable: !1
                }],
                [Z, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ne, {
                    direction: Oe
                }],
                [J, {
                        direction: Oe
                    },
                    ["swipe"]
                ],
                [re],
                [re, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ee]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var dt = 1,
            ft = 2;
        ae.prototype = {
            set: function(e) {
                return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? ft : dt
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n, r = this.recognizers,
                        i = t.curRecognizer;
                    (!i || i && i.state & lt) && (i = t.curRecognizer = null);
                    for (var a = 0; a < r.length;) n = r[a], t.stopped === ft || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(e), !i && n.state & (at | ot | st) && (i = t.curRecognizer = n), a++
                }
            },
            get: function(e) {
                if (e instanceof W) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++)
                    if (t[n].options.event == e) return t[n];
                return null
            },
            add: function(e) {
                if (a(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (a(e, "remove", this)) return this;
                var t = this.recognizers;
                return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
            },
            on: function(e, t) {
                var n = this.handlers;
                return o(v(e), function(e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            },
            off: function(e, t) {
                var n = this.handlers;
                return o(v(e), function(e) {
                    t ? n[e].splice(y(n[e], t), 1) : delete n[e]
                }), this
            },
            emit: function(e, t) {
                this.options.domEvents && se(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var r = 0; r < n.length;) n[r](t), r++
                }
            },
            destroy: function() {
                this.element && oe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, s(ie, {
            INPUT_START: xe,
            INPUT_MOVE: Te,
            INPUT_END: Ce,
            INPUT_CANCEL: Pe,
            STATE_POSSIBLE: it,
            STATE_BEGAN: at,
            STATE_CHANGED: ot,
            STATE_ENDED: st,
            STATE_RECOGNIZED: lt,
            STATE_CANCELLED: ut,
            STATE_FAILED: ct,
            DIRECTION_NONE: Ee,
            DIRECTION_LEFT: Ae,
            DIRECTION_RIGHT: Ie,
            DIRECTION_UP: Le,
            DIRECTION_DOWN: Me,
            DIRECTION_HORIZONTAL: Oe,
            DIRECTION_VERTICAL: Ne,
            DIRECTION_ALL: Re,
            Manager: ae,
            Input: x,
            TouchAction: Y,
            TouchInput: B,
            MouseInput: U,
            PointerEventInput: j,
            TouchMouseInput: H,
            SingleTouchInput: q,
            Recognizer: W,
            AttrRecognizer: K,
            Tap: re,
            Pan: J,
            Swipe: ne,
            Pinch: Z,
            Rotate: te,
            Press: ee,
            on: p,
            off: h,
            each: o,
            merge: l,
            extend: s,
            inherit: u,
            bindFn: c,
            prefixed: w
        }), typeof define == ce && define.amd ? define(function() {
            return ie
        }) : "undefined" != typeof module && module.exports ? module.exports = ie : e[n] = ie
    }(window, document, "Hammer"),
    function e(t, n, r) {
        function i(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, function(e) {
                    var n = t[o][1][e];
                    return i(n ? n : e)
                }, c, c.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = e("../main");
            "function" == typeof define && define.amd ? define(r) : (window.PerfectScrollbar = r, "undefined" == typeof window.Ps && (window.Ps = r))
        }, {
            "../main": 7
        }],
        2: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e.className.split(" ");
                n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
            }

            function i(e, t) {
                var n = e.className.split(" "),
                    r = n.indexOf(t);
                r >= 0 && n.splice(r, 1), e.className = n.join(" ")
            }
            n.add = function(e, t) {
                e.classList ? e.classList.add(t) : r(e, t)
            }, n.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : i(e, t)
            }, n.list = function(e) {
                return e.classList ? e.classList : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                return window.getComputedStyle(e)[t]
            }

            function i(e, t, n) {
                return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
            }

            function a(e, t) {
                for (var n in t) {
                    var r = t[n];
                    "number" == typeof r && (r = r.toString() + "px"), e.style[n] = r
                }
                return e
            }
            var o = {};
            o.e = function(e, t) {
                var n = document.createElement(e);
                return n.className = t, n
            }, o.appendTo = function(e, t) {
                return t.appendChild(e), e
            }, o.css = function(e, t, n) {
                return "object" == typeof t ? a(e, t) : "undefined" == typeof n ? r(e, t) : i(e, t, n)
            }, o.matches = function(e, t) {
                return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, o.remove = function(e) {
                "undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, o.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return o.matches(e, t)
                })
            }, t.exports = o
        }, {}],
        4: [function(e, t, n) {
            "use strict";
            var r = function(e) {
                this.element = e, this.events = {}
            };
            r.prototype.bind = function(e, t) {
                "undefined" == typeof this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, r.prototype.unbind = function(e, t) {
                var n = "undefined" != typeof t;
                this.events[e] = this.events[e].filter(function(r) {
                    return n && r !== t ? !0 : (this.element.removeEventListener(e, r, !1), !1)
                }, this)
            }, r.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var i = function() {
                this.eventElements = []
            };
            i.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return "undefined" == typeof t && (t = new r(e), this.eventElements.push(t)), t
            }, i.prototype.bind = function(e, t, n) {
                this.eventElement(e).bind(t, n)
            }, i.prototype.unbind = function(e, t, n) {
                this.eventElement(e).unbind(t, n)
            }, i.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, i.prototype.once = function(e, t, n) {
                var r = this.eventElement(e),
                    i = function(e) {
                        r.unbind(t, i), n(e)
                    };
                r.bind(t, i)
            }, t.exports = i
        }, {}],
        5: [function(e, t, n) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, n) {
            "use strict";
            var r = e("./class"),
                i = e("./dom");
            n.toInt = function(e) {
                return parseInt(e, 10) || 0
            }, n.clone = function(e) {
                if (null === e) return null;
                if ("object" == typeof e) {
                    var t = {};
                    for (var n in e) t[n] = this.clone(e[n]);
                    return t
                }
                return e
            }, n.extend = function(e, t) {
                var n = this.clone(e);
                for (var r in t) n[r] = this.clone(t[r]);
                return n
            }, n.isEditable = function(e) {
                return i.matches(e, "input,[contenteditable]") || i.matches(e, "select,[contenteditable]") || i.matches(e, "textarea,[contenteditable]") || i.matches(e, "button,[contenteditable]")
            }, n.removePsClasses = function(e) {
                for (var t = r.list(e), n = 0; n < t.length; n++) {
                    var i = t[n];
                    0 === i.indexOf("ps-") && r.remove(e, i)
                }
            }, n.outerWidth = function(e) {
                return this.toInt(i.css(e, "width")) + this.toInt(i.css(e, "paddingLeft")) + this.toInt(i.css(e, "paddingRight")) + this.toInt(i.css(e, "borderLeftWidth")) + this.toInt(i.css(e, "borderRightWidth"))
            }, n.startScrolling = function(e, t) {
                r.add(e, "ps-in-scrolling"), "undefined" != typeof t ? r.add(e, "ps-" + t) : (r.add(e, "ps-x"), r.add(e, "ps-y"))
            }, n.stopScrolling = function(e, t) {
                r.remove(e, "ps-in-scrolling"), "undefined" != typeof t ? r.remove(e, "ps-" + t) : (r.remove(e, "ps-x"), r.remove(e, "ps-y"))
            }, n.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, n) {
            "use strict";
            var r = e("./plugin/destroy"),
                i = e("./plugin/initialize"),
                a = e("./plugin/update");
            t.exports = {
                initialize: i,
                update: a,
                destroy: r
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 20
        }],
        8: [function(e, t, n) {
            "use strict";
            t.exports = {
                wheelSpeed: 1,
                wheelPropagation: !1,
                swipePropagation: !0,
                minScrollbarLength: null,
                maxScrollbarLength: null,
                useBothWheelAxes: !1,
                useKeyboard: !0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                stopPropagationOnClick: !0
            }
        }, {}],
        9: [function(e, t, n) {
            "use strict";
            var r = e("../lib/dom"),
                i = e("../lib/helper"),
                a = e("./instances");
            t.exports = function(e) {
                var t = a.get(e);
                t && (t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), r.remove(t.scrollbarYRail), i.removePsClasses(e), a.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e) {
                    return e.getBoundingClientRect()
                }
                var r = window.Event.prototype.stopPropagation.bind;
                t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarY, "click", r), t.event.bind(t.scrollbarYRail, "click", function(r) {
                    var a = i.toInt(t.scrollbarYHeight / 2),
                        s = t.railYRatio * (r.pageY - window.scrollY - n(t.scrollbarYRail).top - a),
                        l = t.railYRatio * (t.railYHeight - t.scrollbarYHeight),
                        u = s / l;
                    0 > u ? u = 0 : u > 1 && (u = 1), e.scrollTop = (t.contentHeight - t.containerHeight) * u, o(e), r.stopPropagation()
                }), t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarX, "click", r), t.event.bind(t.scrollbarXRail, "click", function(r) {
                    var a = i.toInt(t.scrollbarXWidth / 2),
                        s = t.railXRatio * (r.pageX - window.scrollX - n(t.scrollbarXRail).left - a),
                        l = t.railXRatio * (t.railXWidth - t.scrollbarXWidth),
                        u = s / l;
                    0 > u ? u = 0 : u > 1 && (u = 1), e.scrollLeft = (t.contentWidth - t.containerWidth) * u - t.negativeScrollAdjustment, o(e), r.stopPropagation()
                })
            }
            var i = e("../../lib/helper"),
                a = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                r(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        11: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(n) {
                    var i = r + n * t.railXRatio,
                        a = t.scrollbarXRail.getBoundingClientRect().left + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    0 > i ? t.scrollbarXLeft = 0 : i > a ? t.scrollbarXLeft = a : t.scrollbarXLeft = i;
                    var s = o.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                    e.scrollLeft = s
                }
                var r = null,
                    i = null,
                    s = function(t) {
                        n(t.pageX - i), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    u = function() {
                        o.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", s)
                    };
                t.event.bind(t.scrollbarX, "mousedown", function(n) {
                    i = n.pageX, r = o.toInt(a.css(t.scrollbarX, "left")) * t.railXRatio, o.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                })
            }

            function i(e, t) {
                function n(n) {
                    var i = r + n * t.railYRatio,
                        a = t.scrollbarYRail.getBoundingClientRect().top + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    0 > i ? t.scrollbarYTop = 0 : i > a ? t.scrollbarYTop = a : t.scrollbarYTop = i;
                    var s = o.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                    e.scrollTop = s
                }
                var r = null,
                    i = null,
                    s = function(t) {
                        n(t.pageY - i), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    u = function() {
                        o.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", s)
                    };
                t.event.bind(t.scrollbarY, "mousedown", function(n) {
                    i = n.pageY, r = o.toInt(a.css(t.scrollbarY, "top")) * t.railYRatio, o.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                })
            }
            var a = e("../../lib/dom"),
                o = e("../../lib/helper"),
                s = e("../instances"),
                l = e("../update-geometry");
            t.exports = function(e) {
                var t = s.get(e);
                r(e, t), i(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        12: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(n, r) {
                    var i = e.scrollTop;
                    if (0 === n) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === i && r > 0 || i >= t.contentHeight - t.containerHeight && 0 > r) return !t.settings.wheelPropagation
                    }
                    var a = e.scrollLeft;
                    if (0 === r) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === a && 0 > n || a >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }
                var r = !1;
                t.event.bind(e, "mouseenter", function() {
                    r = !0
                }), t.event.bind(e, "mouseleave", function() {
                    r = !1
                });
                var a = !1;
                t.event.bind(t.ownerDocument, "keydown", function(s) {
                    if ((!s.isDefaultPrevented || !s.isDefaultPrevented()) && r) {
                        var l = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (l) {
                            for (; l.shadowRoot;) l = l.shadowRoot.activeElement;
                            if (i.isEditable(l)) return
                        }
                        var u = 0,
                            c = 0;
                        switch (s.which) {
                            case 37:
                                u = -30;
                                break;
                            case 38:
                                c = 30;
                                break;
                            case 39:
                                u = 30;
                                break;
                            case 40:
                                c = -30;
                                break;
                            case 33:
                                c = 90;
                                break;
                            case 32:
                                c = s.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                c = -90;
                                break;
                            case 35:
                                c = s.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                break;
                            case 36:
                                c = s.ctrlKey ? e.scrollTop : t.containerHeight;
                                break;
                            default:
                                return
                        }
                        e.scrollTop = e.scrollTop - c, e.scrollLeft = e.scrollLeft + u, o(e), a = n(u, c), a && s.preventDefault()
                    }
                })
            }
            var i = e("../../lib/helper"),
                a = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                r(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        13: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(n, r) {
                    var i = e.scrollTop;
                    if (0 === n) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === i && r > 0 || i >= t.contentHeight - t.containerHeight && 0 > r) return !t.settings.wheelPropagation
                    }
                    var a = e.scrollLeft;
                    if (0 === r) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === a && 0 > n || a >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }

                function r(e) {
                    var t = e.deltaX,
                        n = -1 * e.deltaY;
                    return ("undefined" == typeof t || "undefined" == typeof n) && (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), [t, n]
                }

                function a(t, n) {
                    var r = e.querySelector("textarea:hover");
                    if (r) {
                        var i = r.scrollHeight - r.clientHeight;
                        if (i > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === i && 0 > n)) return !0;
                        var a = r.scrollLeft - r.clientWidth;
                        if (a > 0 && !(0 === r.scrollLeft && 0 > t || r.scrollLeft === a && t > 0)) return !0
                    }
                    return !1
                }

                function s(s) {
                    if (i.env.isWebKit || !e.querySelector("select:focus")) {
                        var u = r(s),
                            c = u[0],
                            d = u[1];
                        a(c, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? e.scrollTop = e.scrollTop - d * t.settings.wheelSpeed : e.scrollTop = e.scrollTop + c * t.settings.wheelSpeed, l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (c ? e.scrollLeft = e.scrollLeft + c * t.settings.wheelSpeed : e.scrollLeft = e.scrollLeft - d * t.settings.wheelSpeed, l = !0) : (e.scrollTop = e.scrollTop - d * t.settings.wheelSpeed, e.scrollLeft = e.scrollLeft + c * t.settings.wheelSpeed), o(e), l = l || n(c, d), l && (s.stopPropagation(), s.preventDefault()))
                    }
                }
                var l = !1;
                "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", s) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", s)
            }
            var i = e("../../lib/helper"),
                a = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                r(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        14: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                t.event.bind(e, "scroll", function() {
                    a(e)
                })
            }
            var i = e("../instances"),
                a = e("../update-geometry");
            t.exports = function(e) {
                var t = i.get(e);
                r(e, t)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                }

                function r() {
                    l || (l = setInterval(function() {
                        return a.get(e) ? (e.scrollTop = e.scrollTop + u.top, e.scrollLeft = e.scrollLeft + u.left, void o(e)) : void clearInterval(l)
                    }, 50))
                }

                function s() {
                    l && (clearInterval(l), l = null), i.stopScrolling(e)
                }
                var l = null,
                    u = {
                        top: 0,
                        left: 0
                    },
                    c = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(n()) ? c = !0 : (c = !1, s())
                }), t.event.bind(window, "mouseup", function() {
                    c && (c = !1, s())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (c) {
                        var n = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            a = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        n.x < a.left + 3 ? (u.left = -5, i.startScrolling(e, "x")) : n.x > a.right - 3 ? (u.left = 5, i.startScrolling(e, "x")) : u.left = 0, n.y < a.top + 3 ? (a.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, i.startScrolling(e, "y")) : n.y > a.bottom - 3 ? (n.y - a.bottom + 3 < 5 ? u.top = 5 : u.top = 20, i.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? s() : r()
                    }
                })
            }
            var i = e("../../lib/helper"),
                a = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                r(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        16: [function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                function o(n, r) {
                    var i = e.scrollTop,
                        a = e.scrollLeft,
                        o = Math.abs(n),
                        s = Math.abs(r);
                    if (s > o) {
                        if (0 > r && i === t.contentHeight - t.containerHeight || r > 0 && 0 === i) return !t.settings.swipePropagation
                    } else if (o > s && (0 > n && a === t.contentWidth - t.containerWidth || n > 0 && 0 === a)) return !t.settings.swipePropagation;
                    return !0
                }

                function s(t, n) {
                    e.scrollTop = e.scrollTop - n, e.scrollLeft = e.scrollLeft - t, a(e)
                }

                function l() {
                    $ = !0
                }

                function u() {
                    $ = !1
                }

                function c(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function d(e) {
                    return e.targetTouches && 1 === e.targetTouches.length ? !0 : e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }

                function f(e) {
                    if (d(e)) {
                        b = !0;
                        var t = c(e);
                        m.pageX = t.pageX, m.pageY = t.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), e.stopPropagation()
                    }
                }

                function p(e) {
                    if (!$ && b && d(e)) {
                        var t = c(e),
                            n = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            r = n.pageX - m.pageX,
                            i = n.pageY - m.pageY;
                        s(r, i), m = n;
                        var a = (new Date).getTime(),
                            l = a - g;
                        l > 0 && (v.x = r / l, v.y = i / l, g = a), o(r, i) && (e.stopPropagation(), e.preventDefault())
                    }
                }

                function h() {
                    !$ && b && (b = !1, clearInterval(y), y = setInterval(function() {
                        return i.get(e) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(y) : (s(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(y)
                    }, 10))
                }
                var m = {},
                    g = 0,
                    v = {},
                    y = null,
                    $ = !1,
                    b = !1;
                n && (t.event.bind(window, "touchstart", l), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", h)), r && (window.PointerEvent ? (t.event.bind(window, "pointerdown", l), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", l), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", h)))
            }
            var i = e("../instances"),
                a = e("../update-geometry");
            t.exports = function(e, t, n) {
                var a = i.get(e);
                r(e, a, t, n)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        17: [function(e, t, n) {
            "use strict";
            var r = e("../lib/class"),
                i = e("../lib/helper"),
                a = e("./instances"),
                o = e("./update-geometry"),
                s = e("./handler/click-rail"),
                l = e("./handler/drag-scrollbar"),
                u = e("./handler/keyboard"),
                c = e("./handler/mouse-wheel"),
                d = e("./handler/native-scroll"),
                f = e("./handler/selection"),
                p = e("./handler/touch");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, r.add(e, "ps-container");
                var n = a.add(e);
                n.settings = i.extend(n.settings, t), s(e), l(e), c(e), d(e), f(e), (i.env.supportsTouch || i.env.supportsIePointer) && p(e, i.env.supportsTouch, i.env.supportsIePointer), n.settings.useKeyboard && u(e), o(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                t.settings = d.clone(l), t.containerWidth = null, t.containerHeight = null, t.contentWidth = null, t.contentHeight = null, t.isRtl = "rtl" === s.css(e, "direction"), t.isNegativeScroll = function() {
                    var t = e.scrollLeft,
                        n = null;
                    return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
                }(), t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, t.event = new u, t.ownerDocument = e.ownerDocument || document, t.scrollbarXRail = s.appendTo(s.e("div", "ps-scrollbar-x-rail"), e), t.scrollbarX = s.appendTo(s.e("div", "ps-scrollbar-x"), t.scrollbarXRail), t.scrollbarXActive = null, t.scrollbarXWidth = null, t.scrollbarXLeft = null, t.scrollbarXBottom = d.toInt(s.css(t.scrollbarXRail, "bottom")), t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom, t.scrollbarXTop = t.isScrollbarXUsingBottom ? null : d.toInt(s.css(t.scrollbarXRail, "top")), t.railBorderXWidth = d.toInt(s.css(t.scrollbarXRail, "borderLeftWidth")) + d.toInt(s.css(t.scrollbarXRail, "borderRightWidth")), s.css(t.scrollbarXRail, "display", "block"), t.railXMarginWidth = d.toInt(s.css(t.scrollbarXRail, "marginLeft")) + d.toInt(s.css(t.scrollbarXRail, "marginRight")), s.css(t.scrollbarXRail, "display", ""), t.railXWidth = null, t.railXRatio = null, t.scrollbarYRail = s.appendTo(s.e("div", "ps-scrollbar-y-rail"), e), t.scrollbarY = s.appendTo(s.e("div", "ps-scrollbar-y"), t.scrollbarYRail), t.scrollbarYActive = null, t.scrollbarYHeight = null, t.scrollbarYTop = null, t.scrollbarYRight = d.toInt(s.css(t.scrollbarYRail, "right")), t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight, t.scrollbarYLeft = t.isScrollbarYUsingRight ? null : d.toInt(s.css(t.scrollbarYRail, "left")), t.scrollbarYOuterWidth = t.isRtl ? d.outerWidth(t.scrollbarY) : null, t.railBorderYWidth = d.toInt(s.css(t.scrollbarYRail, "borderTopWidth")) + d.toInt(s.css(t.scrollbarYRail, "borderBottomWidth")), s.css(t.scrollbarYRail, "display", "block"), t.railYMarginHeight = d.toInt(s.css(t.scrollbarYRail, "marginTop")) + d.toInt(s.css(t.scrollbarYRail, "marginBottom")), s.css(t.scrollbarYRail, "display", ""), t.railYHeight = null, t.railYRatio = null
            }

            function i(e) {
                return "undefined" == typeof e.dataset ? e.getAttribute("data-ps-id") : e.dataset.psId;
            }

            function a(e, t) {
                "undefined" == typeof e.dataset ? e.setAttribute("data-ps-id", t) : e.dataset.psId = t
            }

            function o(e) {
                "undefined" == typeof e.dataset ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
            }
            var s = e("../lib/dom"),
                l = e("./default-setting"),
                u = e("../lib/event-manager"),
                c = e("../lib/guid"),
                d = e("../lib/helper"),
                f = {};
            n.add = function(e) {
                var t = c();
                return a(e, t), f[t] = new r(e), f[t]
            }, n.remove = function(e) {
                delete f[i(e)], o(e)
            }, n.get = function(e) {
                return f[i(e)]
            }
        }, {
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }

            function i(e, t) {
                var n = {
                    width: t.railXWidth
                };
                t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, o.css(t.scrollbarXRail, n);
                var r = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                t.isScrollbarYUsingRight ? t.isRtl ? r.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : r.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? r.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : r.left = t.scrollbarYLeft + e.scrollLeft, o.css(t.scrollbarYRail, r), o.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }), o.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                })
            }
            var a = e("../lib/class"),
                o = e("../lib/dom"),
                s = e("../lib/helper"),
                l = e("./instances");
            t.exports = function(e) {
                var t = l.get(e);
                t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
                var n;
                e.contains(t.scrollbarXRail) || (n = o.queryChildren(e, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(e) {
                    o.remove(e)
                }), o.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (n = o.queryChildren(e, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(e) {
                    o.remove(e)
                }), o.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = r(t, s.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = s.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : (t.scrollbarXActive = !1, t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = r(t, s.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = s.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : (t.scrollbarYActive = !1, t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0), t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), i(e, t), a[t.scrollbarXActive ? "add" : "remove"](e, "ps-active-x"), a[t.scrollbarYActive ? "add" : "remove"](e, "ps-active-y")
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        20: [function(e, t, n) {
            "use strict";
            var r = e("../lib/dom"),
                i = e("../lib/helper"),
                a = e("./instances"),
                o = e("./update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")), r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), o(e), r.css(t.scrollbarXRail, "display", ""), r.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19
        }]
    }, {}, [1]),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Sass = t()
    }(this, function() {
        function e(e) {
            if (!e && !t) throw new Error("Sass needs to be initialized with the URL of sass.worker.js - either via Sass.setWorkerUrl(url) or by new Sass(url)");
            t || (t = e);
            for (var n in this) "function" == typeof this[n] && (this[n] = this[n].bind(this));
            this._callbacks = {}, this._worker = new Worker(e || t), this._worker.addEventListener("message", this._handleWorkerMessage, !1)
        }
        var t, n = function() {
                "use strict";
                if ("undefined" != typeof __dirname) return __dirname;
                if ("undefined" == typeof document || !document.getElementsByTagName) return null;
                var e = document.currentScript || function() {
                        var e = document.getElementsByTagName("script");
                        return e[e.length - 1]
                    }(),
                    t = e && e.src;
                return t ? "/sass.js" === t.slice(-8) ? t.slice(0, -8) : "/sass.sync.js" === t.slice(-13) ? t.slice(0, -13) : null : null
            }() || ".",
            r = function() {},
            i = [].slice;
        e.setWorkerUrl = function(e) {
            t = e
        }, e.style = {
            nested: 0,
            expanded: 1,
            compact: 2,
            compressed: 3
        }, e.comments = {
            none: 0,
            "default": 1
        }, e.prototype = {
            style: e.style,
            comments: e.comments,
            destroy: function() {
                this._worker && this._worker.terminate(), this._worker = null, this._callbacks = {}, this._importer = null
            },
            _handleWorkerMessage: function(e) {
                e.data.command && this[e.data.command](e.data.args), this._callbacks[e.data.id] && this._callbacks[e.data.id](e.data.result), delete this._callbacks[e.data.id]
            },
            _dispatch: function(e, t) {
                if (!this._worker) throw new Error("Sass worker has been terminated");
                e.id = "cb" + Date.now() + Math.random(), this._callbacks[e.id] = t, this._worker.postMessage(e)
            },
            _importerInit: function(e) {
                var t = function(e) {
                    this._worker.postMessage({
                        command: "_importerFinish",
                        args: [e]
                    })
                }.bind(this);
                try {
                    this._importer(e[0], t)
                } catch (n) {
                    throw t({
                        error: n.message
                    }), n
                }
            },
            importer: function(e, t) {
                if ("function" != typeof e && null !== e) throw new Error("importer callback must either be a function or null");
                this._importer = e, this._worker.postMessage({
                    command: "importer",
                    args: [Boolean(e)]
                }), t && t()
            }
        };
        var a = "writeFile readFile listFiles removeFile clearFiles lazyFiles preloadFiles options compile compileFile";
        return a.split(" ").forEach(function(t) {
            e.prototype[t] = function() {
                var e = i.call(arguments, -1)[0],
                    n = i.call(arguments, 0, -1);
                "function" != typeof e && (n.push(e), e = r), this._dispatch({
                    command: t,
                    args: n
                }, e)
            }
        }), e.setWorkerUrl(n + "/sass.worker.js"), e
    }), angular.module("app", ["ui.router", "pascalprecht.translate", "ngTagsInput", "angularLazyImg", "angularUtils.directives.dirPagination", "720kb.tooltips", "duScroll"]).value("duScrollOffset", 20).factory("addMethodOverrideHeader", function() {
        return {
            request: function(e) {
                return ["PATCH", "PUT", "DELETE"].indexOf(e.method) > -1 && (e.headers["X-HTTP-Method-Override"] = e.method, e.method = "POST"), e
            }
        }
    }).config(["$translateProvider", "$compileProvider", "$httpProvider", function(e, t, n) {
        t.debugInfoEnabled(!1), vars.selectedLocale ? (e.translations(vars.selectedLocale, vars.trans), e.preferredLanguage(vars.selectedLocale)) : (e.translations("en", vars.trans), e.preferredLanguage("en")), e.useUrlLoader("trans-messages"), e.useSanitizeValueStrategy("escaped"), n.interceptors.push("addMethodOverrideHeader")
    }]).run(["$rootScope", "$state", "users", "utils", function(e, t, n, r) {
        if (e.baseUrl = vars.baseUrl + "/", r.isDemo = parseInt(vars.isDemo), r.version = vars.version, vars.user) try {
            var i = JSON.parse(vars.user)
        } catch (a) {
            var i = !1
        } else var i = !1;
        n.assignCurrentUser(i), vars.message && (r.notify(vars.message, "success", 5e3), delete vars.message), r.setAllSettings(vars.settings), r.removeNode("#vars"), delete window.vars
    }]), angular.module("app").config(["$urlRouterProvider", "$stateProvider", "$urlMatcherFactoryProvider", "$locationProvider", function(e, t, n, r) {
        parseInt(vars.settings.enablePushState) && r.html5Mode(!0), n.strictMode(!1), e.otherwise("/"), t.state("home", {
            url: "/",
            templateUrl: "assets/views/home.html"
        }).state("new-releases", {
            url: "/new-releases",
            templateUrl: "assets/views/new-releases.html"
        }).state("popular-genres", {
            url: "/popular-genres",
            templateUrl: "assets/views/popular-genres.html"
        }).state("top-songs", {
            url: "/top-songs",
            templateUrl: "assets/views/top-songs.html"
        }).state("top-albums", {
            url: "/top-albums",
            templateUrl: "assets/views/top-albums.html"
        }).state("artist-radio", {
            url: "/radio/artist/:id/:name",
            templateUrl: "assets/views/radio.html"
        }).state("user", {
            url: "/user/:id",
            templateUrl: "assets/views/public-user-profile.html"
        }).state("404", {
            templateUrl: "assets/views/404.html"
        }).state("search", {
            url: "/search/:query",
            templateUrl: "assets/views/search-page.html"
        }).state("phone-search", {
            url: "/phone-search",
            templateUrl: "assets/views/phone-search.html"
        }).state("artist", {
            url: "/artist/:id/:name",
            templateUrl: "assets/views/artist.html"
        }).state("artist-no-id", {
            url: "/artist/:name",
            templateUrl: "assets/views/artist.html"
        }).state("album", {
            url: "/album/:id/:artistName/:name",
            templateUrl: "assets/views/album.html",
            controller: "AlbumController"
        }).state("album-no-artist", {
            url: "/album/:id/:name",
            templateUrl: "assets/views/album.html",
            controller: "AlbumController"
        }).state("track", {
            url: "/track/:id",
            controller: "TrackController"
        }).state("genre", {
            url: "/genre/:name",
            controller: "GenreController",
            templateUrl: "assets/views/genre.html"
        }).state("playlist", {
            url: "/playlist/:id",
            templateUrl: "assets/views/playlist.html"
        }).state("songs", {
            url: "/songs",
            templateUrl: "assets/views/songs.html"
        }).state("albums", {
            url: "/albums",
            templateUrl: "assets/views/albums.html",
            controller: "AlbumsController"
        }).state("artists", {
            url: "/artists",
            templateUrl: "assets/views/artists.html",
            controller: "ArtistsController"
        }).state("login", {
            url: "/login",
            views: {
                full: {
                    templateUrl: "assets/views/login.html",
                    controller: "LoginController"
                }
            }
        }).state("register", {
            url: "/register",
            views: {
                full: {
                    templateUrl: "assets/views/register.html",
                    controller: "RegisterController"
                }
            }
        }).state("admin", {
            url: "/admin",
            "abstract": !0,
            views: {
                full: {
                    templateUrl: "assets/views/admin/admin.html",
                    controller: "AdminController"
                }
            }
        }).state("admin.artists", {
            url: "/artists",
            templateUrl: "assets/views/admin/artists.html"
        }).state("admin.editArtist", {
            url: "/artists/:name/edit",
            templateUrl: "assets/views/admin/artist-modify.html"
        }).state("admin.newArtist", {
            url: "/artists/new",
            templateUrl: "assets/views/admin/artist-modify.html"
        }).state("admin.editAlbum", {
            url: "/albums/:id/edit",
            templateUrl: "assets/views/admin/album-modify.html"
        }).state("admin.newAlbum", {
            url: "/albums/new",
            templateUrl: "assets/views/admin/album-modify.html"
        }).state("admin.users", {
            url: "/users",
            templateUrl: "assets/views/admin/users.html"
        }).state("admin.tracks", {
            url: "/tracks",
            templateUrl: "assets/views/admin/tracks.html"
        }).state("admin.albums", {
            url: "/albums",
            templateUrl: "assets/views/admin/albums.html"
        }).state("admin.appearance", {
            url: "/appearance",
            templateUrl: "assets/views/admin/appearance.html"
        }).state("admin.translations", {
            url: "/translations",
            templateUrl: "assets/views/admin/translations.html"
        }).state("admin.analytics", {
            url: "/analytics",
            templateUrl: "assets/views/admin/analytics.html",
            controller: "AnalyticsController"
        }).state("admin.settings", {
            url: "/settings",
            templateUrl: "assets/views/admin/settings.html"
        }).state("admin.mail", {
            url: "/settings/mail",
            templateUrl: "assets/views/admin/mail.html"
        }).state("admin.ads", {
            url: "/ads",
            templateUrl: "assets/views/admin/admin-ads.html",
            controller: "SettingsController"
        })
    }]), angular.module("app").run(["$rootScope", "$state", "$location", "users", "utils", function(e, t, n, r, i) {
        e.$on("$stateChangeStart", function(a, o, s, l, u) {
            if (u)
                for (var c in u) u[c] = i.decodeUrlParam(u[c]);
            e.previousState = {
                name: l.name,
                params: u
            };
            var d = ["songs", "albums", "artists"],
                f = ["login", "register"];
            "custom" === i.getSetting("homepage") && f.push("home");
            var p = o.name.replace(/\..+?$/, "");
            if (t.get(p) || a.preventDefault(), i.getSetting("force_login", !1) && !r.current && -1 === f.indexOf(o.name) && (a.preventDefault(), t.go("login")), d.indexOf(o.name) > -1 && !r.current && (a.preventDefault(), t.go("login")), "login" != p && "register" != p || !r.current || (a.preventDefault(), t.go("songs")), "register" != p || i.getSetting("enableRegistration", !0) || (a.preventDefault(), t.go("login")), "admin" == p && (r.current && r.current.isAdmin || (a.preventDefault(), t.go("songs"))), "home" === p) {
                var h = i.getSetting("homepage", "default");
                "custom" === h ? o.templateUrl = i.getSetting("customHomePath") : "login" === h ? (a.preventDefault(), t.go("login")) : (a.preventDefault(), t.go(i.getSetting("primaryHomeSection", "popular-genres")))
            }
            window.ga && window.ga("send", "pageview", {
                page: n.path()
            })
        })
    }]), angular.module("app").controller("AlbumController", ["$rootScope", "$http", "$scope", "$stateParams", "utils", "player", function(e, t, n, r, i, a) {
        function o(e) {
            var t = 0;
            return e.tracks.forEach(function(n) {
                t += parseInt(n.duration), n.duration = i.secondsToMSS(n.duration / 1e3), n.image = e.image
            }), i.secondsToMSS(t / 1e3)
        }
        n.utils = i, i.showLoader(), n.player = a;
        var s = i.decodeUrlParam(r.name),
            l = i.decodeUrlParam(r.artistName);
        t.post("get-album", {
            artistName: l,
            albumName: s,
            id: r.id
        }).success(function(t) {
            n.album = t, n.totalLength = o(n.album), i.hideLoader(), n.albumReady = !0, e.autoplay && setTimeout(function() {
                n.playAllTracks(), e.autoplay = !1
            }, 500)
        }).error(function() {
            i.toState("404"), i.hideLoader()
        }), n.playAllTracks = function() {
            if (n.albumIsPlaying === !1) a.play();
            else {
                var t = angular.isObject(e.autoplay) ? e.autoplay.trackName : !0;
                a.loadQueue(n.album.tracks, t)
            }
            n.albumIsPlaying = !0
        }, n.pauseAllTracks = function() {
            n.albumIsPlaying = !1, a.pause()
        }
    }]), angular.module("app").controller("ArtistAboutController", ["$rootScope", "$scope", "$http", function(e, t, n) {
        function r() {
            if (t.artist.bio && !i()) {
                var e = JSON.parse(t.artist.bio);
                t.bio = e.bio, t.images = e.images
            } else t.aboutLoading = !0, n.post("artist/" + t.artist.id + "/get-bio", {
                name: t.artist.name
            }).success(function(e) {
                t.bio = e.bio, t.images = e.images, t.initiated = !0, t.aboutLoading = !1
            })
        }

        function i() {
            var e = new Date,
                n = e.getMonth() + 1,
                r = e.getDate(),
                i = e.getFullYear(),
                a = new Date(i, n, r),
                o = t.artist.updated_at.split(" ")[0].split("-");
            o = new Date(o[0], o[1], o[2]);
            var s = a - o;
            if (s > 0) {
                var l = Math.round(s / 864e5);
                if (l >= 6) return !0
            }
            return !1
        }
        t.$watch("tabs.active", function(e, n) {
            "about" !== e || t.initiated || r()
        })
    }]), angular.module("app").controller("ArtistController", ["$rootScope", "$http", "$scope", "$stateParams", "$timeout", "utils", "player", "userLibrary", function(e, t, n, r, i, a, o, s) {
        a.showLoader(), n.artist = !1, n.tracks = !1, n.artistReady = !1, n.showingMoreTopTracks = !1, n.albumSort = "-release_date", n.tabs = {
            active: "overview"
        }, t.post("get-artist?top-tracks=true", {
            id: r.id,
            name: r.name
        }).success(function(t) {
            n.artist = t, n.tracks = sortTracksByPopularity(getAllTracks(t.albums)).slice(0, 20), n.singles = extractSingles(n.artist);
            for (var r = 0; r < t.topTracks.length; r++) t.topTracks[r].duration = a.secondsToMSS(t.topTracks[r].duration / 1e3);
            n.topTracks = t.topTracks, a.hideLoader(), e.autoplay && waitUntilViewIsRendered(function() {
                n.playAllTracks(), e.autoplay = !1
            }), waitUntilViewIsRendered(function() {
                e.$emit("lazyImg:refresh"), n.$apply(function() {
                    n.artistReady = !0
                })
            })
        }).error(function() {
            a.toState("404"), a.hideLoader()
        }), n.openTab = function(e) {
            n.tabs.active = e
        }, n.playArtist = function(t) {
            e.autoplay = !0, a.toState("artist", {
                name: t.name,
                id: t.id
            })
        }, n.playTrack = function(e) {
            if (n.trackIsPlaying(e)) o.pause();
            else if (n.trackIsLoaded(e)) o.play();
            else
                for (var t = n.topTracks.concat(getAllTracks(n.filteredAlbums.concat(n.filteredSingles), !0)), r = 0; r < t.length; r++)
                    if (t[r].id == e.id) {
                        o.loadQueue(t, !0, r);
                        break
                    }
        }, n.sortAlbums = function(e) {
            n.albumSort = e
        }, n.addAlbumToLibrary = function(e) {
            s.addTracks(e.tracks)
        }, n.goToArtistPage = function(e) {
            a.toState("artist", {
                name: e.name,
                id: e.id
            })
        }, n.toggleTopTracksAmount = function() {
            n.showingMoreTopTracks = !n.showingMoreTopTracks, setTimeout(function() {
                e.$emit("lazyImg:refresh")
            }, 0)
        }, n.playAllTracks = function() {
            var e = n.topTracks.concat(getAllTracks(n.filteredAlbums, !0));
            o.loadQueue(e, !0)
        }, n.pauseAllTracks = function() {
            o.pause()
        }, n.isPlaying = function() {
            return o.isPlaying && o.currentTrack.artist == n.artist.name
        }, extractSingles = function(e) {
            for (var t = [], n = 0; n < e.albums.length; n++) e.albums[n].tracks.length && e.albums[n].tracks.length < 7 && (t.push(e.albums[n]), e.albums.splice(n, 1));
            return t
        }, getAllTracks = function(e, t) {
            for (var r = [], i = 0; i < e.length; i++) {
                var o = e[i];
                if (o)
                    for (var s = 0; s < o.tracks.length; s++) {
                        var l = o.tracks[s];
                        t || (l.duration = a.secondsToMSS(l.duration / 1e3), l.artist = n.artist.name, l.image = o.image), r.push(l)
                    }
            }
            return r
        }, sortTracksByPopularity = function(e) {
            return e.sort(function(e, t) {
                return e.spotify_popularity > t.spotify_popularity ? -1 : e.spotify_popularity < t.spotify_popularity ? 1 : 0
            }), e
        }, waitUntilViewIsRendered = function(e) {
            angular.isUndefined(n.filteredAlbums) || angular.isUndefined(n.topTracks) ? setTimeout(function() {
                waitUntilViewIsRendered(e)
            }, 10) : e()
        }
    }]), angular.module("app").directive("addToPlaylist", function() {
        return {
            restrict: "E",
            templateUrl: "assets/views/directives/add-to-playlist-context-menu.html",
            replace: !0,
            link: function(e, t) {
                t.on("click", function(e) {
                    (e.target.classList.contains("back") || e.target.parentNode.classList.contains("back")) && t.addClass("slide-out")
                })
            }
        }
    }), angular.module("app").controller("ContextMenuController", ["$rootScope", "$scope", "$stateParams", "$translate", "$timeout", "playlists", "contextMenu", "modal", "player", "userLibrary", "clipboard", "users", "utils", function(e, t, n, r, i, a, o, s, l, u, c, d, f) {
        function p() {
            return d.current ? !0 : (l.pause(), f.toState("login"), o.hide(), !1)
        }
        t.playlists = a, t.addToPlaylist = function(e) {
            p() && ("album" == o.context ? a.addTracks(o.item.tracks, e) : a.addTracks(o.item, e), o.hide(), alertify.delay(2e3).success(r.instant("addedToPlaylist")))
        }, t.startArtistRadio = function(e) {
            e || (e = o.item), f.toState("artist-radio", {
                name: e.name,
                id: e.id
            })
        }, t.playArtist = function() {
            f.stateIs("artist") ? o.$scope.playAllTracks() : (e.autoplay = !0, f.toState("artist", {
                name: o.item.name
            }))
        }, t.showShareModal = function(e) {
            e && (o.item = e), s.show("share", t)
        }, t.removeFromPlaylist = function() {
            p() && (a.removeTrack(o.item, n.id), o.hide())
        }, t.createPlaylist = function() {
            p() && (a.trackToAddToNewPlaylist = o.item, o.hide(), s.show("new-playlist", e.$new()))
        }, t.copySongLink = function() {
            c.copy(e.baseUrl + (f.getSetting("enablePushState") ? "" : "#/") + "track/" + o.item.id)
        }, t.copyAlbumLink = function() {
            var t = o.item.artist || o.$scope.artist;
            c.copy(e.baseUrl + (f.getSetting("enablePushState") ? "" : "#/") + "album/" + (o.item.id ? o.item.id + "/" : "") + t.name + "/" + f.encodeUrlParam(o.item.name))
        }, t.copyArtistLink = function(t) {
            t || (t = o.item), c.copy(e.baseUrl + (f.getSetting("enablePushState") ? "" : "#/") + "artist/" + (t.id ? t.id + "/" : "") + f.encodeUrlParam(t.name))
        }, t.addToYourMusic = function() {
            p() && ("album" == o.context ? u.addTracks(o.item.tracks) : u.addTracks(o.item), alertify.delay(2e3).success(r.instant("addedTracksToLibrary")))
        }, t.addToQueue = function(e) {
            e || (e = o.item), i(function() {
                if ("album" == o.context) {
                    for (var t = e.tracks.slice(), n = t.length - 1; n >= 0; n--) t[n].image = e.image;
                    l.addToQueue(t)
                } else "artist" == o.context ? f.stateIs("artists") && l.addToQueue(u.getArtistTracks(e.name)) : l.addToQueue(e)
            })
        }, t.removeFromQueue = function() {
            t.$apply(function() {
                l.removeFromQueue(o.item)
            })
        }
    }]), angular.module("app").directive("contextMenu", ["$rootScope", "contextMenu", "utils", function(e, t, n) {
        return {
            restrict: "A",
            link: function(r, i) {
                i.on("click", function(e) {
                    e.target.classList.contains("context-menu-item") && (e.stopPropagation(), e.preventDefault(), "addToPlaylist" === e.target.dataset.action ? i[0].querySelector(".add-to-playlist").classList.remove("slide-out") : (r[e.target.dataset.action](t.item), i.addClass("hidden")))
                }), i.on("contextmenu", function(e) {
                    e.preventDefault()
                }), i.css("max-height", window.innerHeight - 20), window.onresize = function() {
                    t.hide(), i.css("max-height", window.innerHeight - 20)
                }, angular.element(document).on("click", function(t) {
                    var r = t.which || t.button,
                        i = n.closest(t.target, "#context-menu") || n.closest(t.target, ".more-options");
                    1 !== r || i || e.$emit("contextmenu.closed")
                })
            }
        }
    }]), angular.module("app").directive("contextMenuItem", ["contextMenu", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                n.on("contextmenu", function(n) {
                    n.preventDefault(), n.stopPropagation();
                    var i = t.track || t.album || t.$eval(r.contextMenuContextItem) || t.artist;
                    e.show(n, i, r, t)
                })
            }
        }
    }]), angular.module("app").directive("moreOptionsMenu", ["$rootScope", "contextMenu", function(e, t) {
        return {
            restrict: "A",
            link: function(n, r, i) {
                var a = !1;
                document.getElementById("#context-menu"), r.on("click", function(e) {
                    if (e.preventDefault(), e.stopPropagation(), !a || t.open) {
                        var o = i.moreOptionsMenu || r[0].parentNode.getAttribute("context-menu-item") || "track",
                            s = r[0].getBoundingClientRect();
                        t.context = o, t.item = n.track || n.album || n.$eval(i.moreOptionsItem), t.attrs = i, t.$scope = n, t.generateMenu(o), t.positionMenu({
                            clientX: s.left,
                            clientY: s.top + s.height
                        }), a = !0, t.open = !1
                    } else t.hide(), a = !1
                }), e.$on("contextmenu.closed", function() {
                    a = !1
                })
            }
        }
    }]), angular.module("app").factory("contextMenu", ["$rootScope", "utils", "player", function(e, t, n) {
        var r = [{
                name: t.trans("play"),
                icon: "play",
                action: "playArtist",
                context: ["artist"]
            }, {
                name: t.trans("addToQueue"),
                icon: "list-add",
                action: "addToQueue",
                context: ["track", "queue", "album", "artist"]
            }, {
                name: t.trans("removeFromQueue"),
                icon: "trash",
                action: "removeFromQueue",
                context: ["queue"],
                skip: !0
            }, {
                name: t.trans("addToPlaylist"),
                icon: "note",
                action: "addToPlaylist",
                context: ["track", "queue", "album"]
            }, {
                name: t.trans("addToYourMusic"),
                icon: "cd",
                action: "addToYourMusic",
                context: ["track", "queue", "album"]
            }, {
                name: t.trans("copySongLink"),
                icon: "link",
                action: "copySongLink",
                context: ["track", "queue"]
            }, {
                name: t.trans("copyAlbumLink"),
                icon: "link",
                action: "copyAlbumLink",
                context: ["album"]
            }, {
                name: t.trans("startArtistRadio"),
                icon: "wifi",
                action: "startArtistRadio",
                context: ["artist"]
            }, {
                name: t.trans("copyArtistLink"),
                icon: "link",
                action: "copyArtistLink",
                context: ["artist"]
            }, {
                name: t.trans("share"),
                icon: "share",
                action: "showShareModal",
                context: ["track", "queue", "album", "artist"]
            }, {
                name: t.trans("removeFromPlaylist"),
                icon: "trash",
                action: "removeFromPlaylist",
                context: ["track"],
                state: "playlist",
                separator: !0
            }],
            i = {
                open: !1,
                context: "track",
                item: !1,
                attrs: {},
                show: function(e, t, n, r) {
                    this.item = t, this.context = n.contextMenuItem || "track", this.$scope = r, this.attrs = n, e.preventDefault(), this.generateMenu(this.context), this.positionMenu(e), this.open = !0
                },
                hide: function() {
                    document.getElementById("context-menu").classList.add("hidden"), this.open = !1;
                    var e = document.querySelector(".add-to-playlist");
                    e && e.classList.add("slide-out")
                },
                positionMenu: function(e) {
                    var t = document.getElementById("context-menu");
                    t.classList.remove("hidden");
                    var n = t.getBoundingClientRect(),
                        r = n.width + 4,
                        i = n.height + 20,
                        a = window.innerWidth,
                        o = window.innerHeight,
                        s = e.clientX,
                        l = e.clientY;
                    r > a - s ? t.style.left = a - r + 1 + "px" : t.style.left = s + 1 + "px", i > o - l ? t.style.top = o - i + 1 + "px" : t.style.top = l + 1 + "px"
                },
                generateMenu: function(e) {
                    for (var a = document.getElementById("context-menu"), o = a.querySelector(".body"), s = o.getElementsByTagName("li"); s[0];) s[0].parentNode.removeChild(s[0]);
                    populateHeader();
                    for (var l = 0; l < r.length; l++) {
                        var u = r[l];
                        if (!u.skip && -1 !== u.context.indexOf(e) && (!u.state || t.stateIs(u.state))) {
                            if ("addToQueue" === u.action && "queue" === e && n.isInQueue(i.item) && (u = getItemByAction("removeFromQueue")), "addToPlaylist" === u.action && t.stateIs("playlist") && i.$scope.playlist) {
                                for (var c = 0; c < i.$scope.playlist.tracks.length; c++)
                                    if (i.$scope.playlist.tracks[c].id == i.item.id) {
                                        var d = !0;
                                        break
                                    }
                                if (d) continue
                            }("removeFromPlaylist" !== u.action || i.$scope.playlist.is_owner) && createMenuItem(u)
                        }
                    }
                    a.classList.remove("hidden")
                }
            };
        return populateHeader = function() {
            var e = document.getElementById("context-menu"),
                t = e.querySelector(".image"),
                n = getHeaderImage(),
                r = i.item.name,
                a = getSubname(),
                o = document.createElement("img");
            for (o.src = n; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(o), e.querySelector(".name").textContent = r, e.querySelector(".sub-name").textContent = a
        }, getHeaderImage = function() {
            return i.item.album ? t.img(i.item.album.image, "album") : i.item.image ? t.img(i.item.image, "album") : i.item.image_small ? t.img(i.item.image_small, "artist") : t.img("", "album")
        }, getSubname = function() {
            return i.attrs.subName ? i.$scope.$eval(i.attrs.subName) : i.item.artist ? angular.isString(i.item.artist) ? i.item.artist : i.item.artist.name : i.item.album ? i.item.album.artist ? i.item.album.artist.name : i.item.artists.split("*|*")[0] : i.item.name ? i.item.name : void 0
        }, createMenuItem = function(e) {
            var t = document.querySelector("#context-menu > .body"),
                n = document.createElement("li");
            if (e.separator) {
                var r = document.createElement("li");
                r.className = "separator", t.insertBefore(r, null)
            }
            n.className = "context-menu-item", n.dataset.action = e.action;
            var i = document.createElement("i");
            i.className = "icon icon-" + e.icon;
            var a = document.createTextNode(e.name);
            n.appendChild(i), n.appendChild(a), t.appendChild(n)
        }, getItemByAction = function(e) {
            for (var t = 0; t < r.length; t++)
                if (r[t].action === e) return r[t]
        }, e.$on("contextmenu.closed", function() {
            i.hide()
        }), e.$on("$stateChangeSuccess", function() {
            i.hide()
        }), i
    }]), angular.module("app").directive("selectOnClick", function() {
        return {
            restrict: "A",
            link: function(e, t) {
                t.on("click", function() {
                    this.setSelectionRange(0, this.value.length)
                })
            }
        }
    }), angular.module("app").directive("shareIcons", ["$rootScope", "$compile", "utils", function(e, t, n) {
        function r(e, r) {
            for (var i = "", o = 0; o < a.length; o++) i += '<div class="social-icon ' + a[o] + '" data-service="' + a[o] + '" ed-tooltip="' + a[o] + '"></div>';
            t(r.html(i))(e), r.on("click", function(e) {
                if (e.target.classList.contains("social-icon")) {
                    var t = 575,
                        n = 400,
                        r = (window.innerWidth - t) / 2,
                        i = (window.innerHeight - n) / 2,
                        a = s[e.target.dataset.service](),
                        o = "status=1,width=" + t + ",height=" + n + ",top=" + i + ",left=" + r;
                    window.open(a, "share", o)
                }
            });
            var s = {
                base: e.makeShareableUrl(e.shareable),
                blogger: function() {
                    return "https://www.blogger.com/blog_this.pyra?t&u=" + this.base + "&n=" + e.shareable.name
                },
                stumbleupon: function() {
                    return "http://www.stumbleupon.com/submit?url=" + this.base
                },
                tumblr: function() {
                    var t = "https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&posttype=photo&title=&caption=";
                    return t + e.shareable.name + "&content=" + this.getImage() + "&url=" + this.formatUrl(this.base)
                },
                twitter: function() {
                    return "https://twitter.com/intent/tweet?url=" + this.formatUrl(this.base) + "&text=" + n.trans("share") + " " + e.shareable.name + " " + n.trans("on") + " " + n.getSetting("siteName")
                },
                facebook: function() {
                    return "https://www.facebook.com/sharer/sharer.php?u=" + this.formatUrl(this.base)
                },
                googleplus: function() {
                    return "https://plus.google.com/share?url=" + this.formatUrl(this.base)
                },
                pinterest: function() {
                    return "https://pinterest.com/pin/create/button/?url=" + this.base + "&media=" + this.getImage()
                },
                formatUrl: function(e) {
                    return encodeURIComponent(e.replace(/^\/\//, "http://"))
                },
                getImage: function() {
                    return "album" === e.type ? n.img(e.shareable.image, "album") : "playlist" === e.type ? e.shareable.tracks && e.shareable.tracks.length ? e.shareable.tracks[0].album.image : n.img(!1, "album") : "track" === e.type ? e.shareable.album ? e.shareable.album.image : n.img(!1, "album") : n.img(e.shareable.image_large)
                }
            }
        }
        var i = {
                restrict: "E",
                template: '<section class="social-icons"></section>',
                replace: !0,
                link: function(e, t) {
                    e.shareable ? r(e, t) : e.$on("shareable.ready", function() {
                        r(e, t)
                    })
                }
            },
            a = ["facebook", "twitter", "googleplus", "pinterest", "tumblr", "stumbleupon", "blogger"];
        return i
    }]), angular.module("app").controller("ShareModalController", ["$scope", "$rootScope", "$translate", "$http", "utils", "contextMenu", "clipboard", function(e, t, n, r, i, a, o) {
        e.utils = i, e.emails = [], e.shareable = e.$parent.shareable || a.item, e.makeShareableUrl = function(n) {
            var r = t.baseUrl + (i.getSetting("enablePushState") ? "" : "#/");
            return n.duration || n.identifier ? (r += "track/" + n.id, e.type = "track") : n.release_date && 0 === n.artist_id ? (r += "album/" + (n.id ? n.id + "/" : "") + i.encodeUrlParam(n.name), e.type = "album") : n.artist && n.artist.id ? (r += "album/" + (n.id ? n.id + "/" : "") + i.encodeUrlParam(n.artist.name) + "/" + i.encodeUrlParam(n.name), e.type = "album") : n.artist_id ? (r += "album/" + i.encodeUrlParam(n.tracks[0].artists[0]) + "/" + i.encodeUrlParam(n.name), e.type = "album") : angular.isUndefined(n.owner) ? (r += "artist/" + (n.id ? n.id + "/" : "") + i.encodeUrlParam(n.name), e.type = "artist") : (r += "playlist/" + n.id, e.type = "playlist"), r
        }, e.link = e.makeShareableUrl(e.shareable), e.copyLinkToClipboard = function() {
            o.copy(e.link)
        }, e.closeModal = function() {
            modal.hide()
        }, e.closeModalAndSendEmails = function() {
            if (e.emails.length) {
                i.showLoader();
                var t = {
                    emails: e.emails.map(function(e) {
                        return e.text
                    }),
                    link: e.link,
                    name: e.shareable.name,
                    message: e.emailMessage
                };
                r.post("send-links", t).success(function(e) {
                    alertify.delay(2e3).success(e), modal.hide()
                }).error(function() {
                    alertify.delay(2e3).error(n.instant("genericError"))
                })["finally"](function() {
                    i.hideLoader()
                })
            } else modal.hide()
        }
    }]), angular.module("app").controller("AppController", ["$rootScope", "$scope", "$state", "utils", "users", "search", function(e, t, n, r, i, a) {
        t.utils = r, t.users = i, t.currentState = n.current, t.search = a;
        var o = document.body.clientWidth;
        e.isPhone = 627 >= o, e.isTablet = 1024 >= o && o > 627;
        var s = r.getSetting("ad_slot_1"),
            l = r.getSetting("ad_slot_2"),
            u = r.getSetting("ad_slot_3"),
            c = r.getSetting("ad_slot_4"),
            d = r.getSetting("ad_slot_5");
        s && (t.ad1 = r.trustHtml(s)), l && (t.ad2 = r.trustHtml(l)), u && (t.ad3 = r.trustHtml(u)), c && (t.ad4 = r.trustHtml(c)), d && (t.ad5 = r.trustHtml(d)), t.getCurrentStateName = function() {
            var e = r.getCurrentStateName();
            return "phone-search" == e && (e = "search"), r.trans(e)
        }, t.shouldPlayerControlsBeHidden = function() {
            return r.stateIs(["admin", "login", "register"])
        }
    }]), angular.module("app").factory("localStorage", function() {
        return {
            get: function(e, t) {
                var n = JSON.parse(localStorage.getItem(e));
                return n ? n.value : t
            },
            set: function(e, t) {
                var n = {
                    value: t,
                    time: (new Date).getTime()
                };
                return localStorage.setItem(e, JSON.stringify(n))
            },
            remove: function(e) {
                return localStorage.removeItem(e)
            }
        }
    }), angular.module("app").controller("GenreController", ["$scope", "$rootScope", "$http", "$stateParams", "utils", function(e, t, n, r, i) {
        i.showLoader();
        var a = i.decodeUrlParam(r.name);
        e.page = 2, e.ajaxInProgress = !1, n.get("genres/" + a + "/paginate-artists").success(function(t) {
            e.genre = t.genre, e.artists = t.artists.data, i.hideLoader()
        }).error(function() {
            i.toState("404"), i.hideLoader()
        }), e.load = function() {
            e.ajaxInProgress || (e.ajaxInProgress = !0, i.showLoader(), e.query && (e.disableInfinateScroll = !1, e.page = 1), n.get("genres/" + a + "/paginate-artists", {
                params: {
                    page: e.page,
                    query: e.query
                }
            }).success(function(t) {
                e.query ? e.artists = t.artists.data : (e.artists = e.artists.concat(t.artists.data), e.page = t.artists.current_page + 1, (t.artists.total <= e.artists.length || !t.artists.next_page_url) && (e.disableInfinateScroll = !0)), e.ajaxInProgress = !1, i.hideLoader()
            }))
        }, e.playArtist = function(e) {
            t.autoplay = !0, i.toState("artist", {
                name: e.name,
                id: e.id
            })
        }
    }]), angular.module("app").controller("PlaylistModifyController", ["$scope", "$http", "modal", "playlists", "utils", "users", function(e, t, n, r, i, a) {
        e.playlists = r, e.params = {}, e.createNewPlaylist = function() {
            r.createNew(e.params.name).success(function() {
                e.closeModal()
            }).error(function(e) {
                n.showErrors(e)
            })
        }, e.openNewPlaylistModal = function() {
            return a.current ? void n.show("new-playlist", e) : i.toState("login")
        }, e.openRenamePlaylistModal = function() {
            e.params.name = e.playlist.name, e.params.description = e.playlist.description, n.show("rename-playlist", e)
        }, e.updatePlaylist = function() {
            var n = {
                name: e.params.name,
                description: e.params.description
            };
            t.put("playlist/" + e.playlist.id, n).success(function() {
                for (var t = 0; t < r.all.length; t++) r.all[t].id == e.playlist.id && (r.all[t].name = e.params.name, r.all[t].description = e.params.description, e.playlist.name = e.params.name, e.playlist.description = e.params.description);
                e.closeModal()
            }).error(function(t) {
                e.error = i.resolveErrors(t)
            })
        }, e.confirmDeletePlaylist = function(t) {
            n.confirm({
                title: "deleteForever",
                content: "confirmPlaylistDelete",
                subcontent: "confirmPlaylistDelete2",
                ok: "delete",
                onConfirm: e.deletePlaylist,
                onClose: e.closeModal,
                params: t
            })
        }, e.deletePlaylist = function(e) {
            t["delete"]("playlist/" + e.id).success(function() {
                for (var t = 0; t < r.all.length; t++) r.all[t].id == e.id && r.all.splice(t, 1);
                i.toState("songs")
            })
        }, e.closeModal = function() {
            e.params = {}, n.hide()
        }
    }]), angular.module("app").controller("PlaylistTracksController", ["$rootScope", "$scope", "$http", "$stateParams", "utils", "playlists", "player", "clipboard", "modal", function(e, t, n, r, i, a, o, s, l) {
        function u(e) {
            var t = 0;
            e.tracks.forEach(function(e) {
                t += e.ms_duration
            });
            var n = t / 1e3 / 60 << 0,
                r = t / 1e3 % 60;
            return n + " min " + Math.floor(r) + " sec"
        }
        i.showLoader(), t.uploadImage = function(e) {
            t.isPlaylistOwner && t.playlist.id && n.post("playlist/" + t.playlist.id + "/upload-image", e, {
                withCredentials: !1,
                headers: {
                    "Content-Type": void 0
                },
                transformRequest: angular.identity
            }).success(function(e) {
                t.playlist.image = e.image + "?" + i.randomString(5)
            }).error(function(e) {
                i.notify(i.resolveErrors(e), "error", 3e3)
            })
        }, a.getPlaylist(r.id).success(function(e) {
            t.playlist = e, t.isPlaylistOwner = e.is_owner, t.playlist.tracks.forEach(function(e) {
                e.ms_duration = e.duration, e.duration = i.secondsToMSS(e.duration / 1e3)
            }), t.totalLength = u(t.playlist), i.hideLoader(), t.playlistReady = !0
        }).error(function() {
            i.toState("404"), i.hideLoader()
        }), t.followPlaylist = function() {
            a.follow(t.playlist.id)
        }, t.unfollowPlaylist = function() {
            a.unfollow(t.playlist.id)
        }, t.playlistIsFollowed = function() {
            return t.playlist ? a.isFollowing(t.playlist.id) : void 0
        }, t.showShareModal = function() {
            t.shareable = t.playlist, l.show("share", t)
        }, t.copyPlaylistLink = function() {
            s.copy(e.baseUrl + (i.getSetting("enablePushState") ? "" : "#/") + "playlist/" + t.playlist.id)
        }, t.removeTrackFromPlaylist = function(e) {
            a.removeTrack(e, t.playlist)
        }, t.getImageForPlaylist = function() {
            return t.playlist && t.playlist.image ? t.playlist.image : t.playlist && t.playlist.tracks.length ? t.playlist.tracks[0].album.image : e.baseUrl + "assets/images/album-no-image.png"
        }, t.playAllTracks = function() {
            if (t.playlistIsPlaying === !1) o.play();
            else {
                var n = angular.isObject(e.autoplay) ? e.autoplay.trackName : !0;
                o.loadQueue(t.playlist.tracks, n)
            }
            t.playlistIsPlaying = !0
        }, t.pauseAllTracks = function() {
            t.playlistIsPlaying = !1, o.pause()
        };
        var c = e.$on("playlist.track.removed", function(e, n) {
                t.playlist.tracks.splice(t.playlist.tracks.indexOf(n), 1), t.totalLength = u(t.playlist)
            }),
            d = e.$on("playlist.updated", function(e, n) {
                angular.forEach(t.playlist, function(e, r) {
                    angular.isArray(t.playlist[r]) || angular.isUndefined(n[r]) || (t.playlist[r] = n[r])
                })
            });
        t.$on("$destroy", function() {
            c(), d()
        })
    }]), angular.module("app").factory("playlists", ["$rootScope", "$http", "users", "utils", function(e, t, n, r) {
        var i = {
            all: [],
            trackToAddToNewPlaylist: !1,
            loaded: !1,
            forUser: !1,
            follow: function(e) {
                return t.post("playlist/" + e + "/follow").success(function(e) {
                    i.all.push(e)
                })
            },
            unfollow: function(e) {
                return t.post("playlist/" + e + "/unfollow").success(function() {
                    for (var t = 0; t < i.all.length; t++)
                        if (i.all[t].id == e) {
                            i.all.splice(t, 1);
                            break
                        }
                })
            },
            isFollowing: function(e) {
                for (var t = 0; t < this.all.length; t++)
                    if (this.all[t].id == e) return !0;
                return !1
            },
            getPlaylist: function(e) {
                return t.get("get-playlist/" + e)
            },
            makePlaylistPrivate: function(n) {
                return t.put("playlist/" + n.id, {
                    "public": 0
                }).success(function(t) {
                    alertify.delay(2e3).success(r.trans("playlistToPrivate")), e.$emit("playlist.updated", t)
                })
            },
            makePlaylistPublic: function(n) {
                return t.put("playlist/" + n.id, {
                    "public": 1
                }).success(function(t) {
                    alertify.delay(2e3).success(r.trans("playlistToPublic")), e.$emit("playlist.updated", t)
                })
            },
            createNew: function(e) {
                return t.post("playlist", {
                    name: e
                }).success(function(e) {
                    i.all.push(e), i.trackToAddToNewPlaylist && i.addTracks(i.trackToAddToNewPlaylist, e)
                })
            },
            isTrackInPlaylist: function(e, t) {
                return t.tracks.indexOf(e) > -1
            },
            addTracks: function(e, n) {
                return angular.isArray(e) || (e = [e]), t.post("playlist/" + n.id + "/add-tracks", {
                    tracks: e
                })
            },
            removeTrack: function(n, r) {
                var i = angular.isObject(r) ? r.id : r;
                return t.post("playlist/" + i + "/remove-track", {
                    track_id: n.id
                }).success(function() {
                    e.$emit("playlist.track.removed", n)
                })
            },
            fetchAll: function() {
                t.get("playlist").success(function(e) {
                    i.all = e, i.loaded = !0, i.forUser = n.current.email
                })
            }
        };
        return n.current && !i.loaded && i.fetchAll(), e.$on("user.newCurrent", function() {
            i.loaded && i.forUser === n.current.email || i.fetchAll()
        }), i
    }]), angular.module("app").directive("reorderTracks", ["$http", function(e) {
        function t(e, t) {
            rows = e[0].querySelectorAll(".flex-table-row"), scope = t, angular.forEach(rows, function(e) {
                e.removeEventListener("dragstart", n, !1), e.addEventListener("dragstart", n, !1), e.removeEventListener("dragenter", i, !1), e.addEventListener("dragenter", i, !1), e.removeEventListener("dragover", r, !1), e.addEventListener("dragover", r, !1), e.removeEventListener("dragleave", a, !1), e.addEventListener("dragleave", a, !1), e.removeEventListener("drop", o, !1), e.addEventListener("drop", o, !1), e.removeEventListener("dragend", s, !1), e.addEventListener("dragend", s, !1), e.classList.contains("flex-table-header") || e.setAttribute("draggable", !0)
            })
        }

        function n(e) {
            this.classList.add("moving"), dragSrcEl = this, e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/html", this.innerHTML)
        }

        function r(e) {
            return e.preventDefault && e.preventDefault(), e.dataTransfer.dropEffect = "move", !1
        }

        function i() {
            this.classList.add("over")
        }

        function a() {
            this.classList.remove("over")
        }

        function o(t) {
            if (t.stopPropagation && t.stopPropagation(), dragSrcEl != this) {
                var n = scope.playlist.tracks.slice(),
                    r = l(),
                    i = {};
                u(dragSrcEl.getAttribute("trackId"), this.getAttribute("trackId"), r), angular.forEach(n, function(e) {
                    angular.forEach(r, function(t, n) {
                        e.id == t && (e.pivot.position = n + 1, r[n] = e, i[e.id] = e.pivot.position)
                    })
                }), scope.$apply(function() {
                    scope.playlist.tracks = r
                }), e.put("playlist/" + scope.playlist.id + "/update-order", {
                    orderedIds: i
                })
            }
            return !1
        }

        function s() {
            angular.forEach(rows, function(e) {
                e.classList.remove("over"), e.classList.remove("moving"), e.style.opacity = ""
            })
        }

        function l() {
            return ids = [], angular.forEach(document.querySelectorAll(".track-row"), function(e) {
                ids.push(e.getAttribute("trackId"))
            }), ids
        }

        function u(e, t, n) {
            var r = n.indexOf(e),
                i = n.indexOf(t) + 1;
            (i >= n.length || i > r) && i--, n.splice(i, 0, n.splice(r, 1)[0])
        }
        return {
            restrict: "A",
            link: function(e, n) {
                e.$watch("sortedTracks", function(r, i) {
                    r && r !== i && t(n, e)
                })
            }
        }
    }]), angular.module("app").controller("RadioController", ["$rootScope", "$scope", "$http", "$stateParams", "$timeout", "utils", "player", function(e, t, n, r, i, a, o) {
        function s(e, t) {
            for (var n = 0; n < t.albums.length; n++)
                for (var r = t.albums[n], i = 0; i < r.tracks.length; i++)
                    if (r.tracks[i].name === e.name) {
                        var a = r.tracks[i];
                        return a.image = r.image, a.image_large = t.image_large, a.artist = t.name, a.echo_nest_id = e.id, a
                    }
        }
        a.showLoader(!0), t.enableSteering = !1, t.radioPageIsReady = !1, o.ignoreNext = !0, t.likedTracks = [], t.currentPlaylistIndex = 0, t.oldQueue = o.queue.slice(), i(function() {
            o.queue = []
        }), n.post("radio/artist", {
            name: r.name,
            id: r.id
        }).success(function(e) {
            t.currentPlaylist = e, t.loadRadioItem(t.currentPlaylist[0])
        }), t.loadRadioItem = function(e) {
            return e.name ? void n.post("get-artist", {
                name: e.artist.name
            }).success(function(n) {
                var r = s(e, n);
                r ? (o.addToQueue(r, !0, !0), a.hideLoader(!0), t.radioPageIsReady = !0) : t.loadNextRadioItem()
            }) : alertify.delay(2e3).error(a.trans("radioNoMoreTracks"))
        }, t.loadNextRadioItem = function() {
            a.showLoader(!0), e.$emit("player.trackLoadingStarted"), o.pause(), t.currentPlaylistIndex++;
            var n = t.currentPlaylist[t.currentPlaylistIndex];
            return n ? void t.loadRadioItem(n) : (a.hideLoader(!0), alertify.delay(2e3).error(a.trans("radioNoMoreTracks")))
        }, t.moreLikeThis = function(e) {
            n.post("radio/artist/more-like-this", {
                session_id: t.sessionId,
                id: e.echo_nest_id
            }), t.likedTracks.push(e.name), alertify.delay(2e3).success(a.trans("improvedStation"))
        }, t.lessLikeThis = function(e) {
            a.showLoader(!0);
            var r = {
                session_id: t.sessionId,
                id: e.echo_nest_id
            };
            n.post("radio/artist/less-like-this", r).success(function() {
                t.loadNextRadioItem(), alertify.delay(2e3).success(a.trans("improvedStation"))
            })
        }, e.$on("player.playNext", function(e) {
            t.loadNextRadioItem()
        }), t.$on("$destroy", function() {
            o.ignoreNext = !1, o.queue = t.oldQueue
        })
    }]), angular.module("app").directive("allTrackArtists", ["utils", "search", function(e, t) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                artists: "="
            },
            template: '<div class="artists"><div class="artist" ng-repeat="name in artists" ng-click="toArtistPage(name, $event)">{{ name }}<span ng-if="!$last">,</span></div></div>',
            link: function(n) {
                n.utils = e, n.toArtistPage = function(n, r) {
                    r.preventDefault(), r.stopPropagation(), e.toState("artist-no-id", {
                        name: n
                    }), t.hidePanel()
                }
            }
        }
    }]), angular.module("app").directive("featuredArtists", ["utils", function(e) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                artist: "=",
                artists: "="
            },
            template: '<div class="featuring" ng-show="artists.length > 1"><span class="dash">-</span><div class="artist" ng-repeat="name in artists" ng-if="name !== artist.name" ui-sref="artist({ name: utils.encodeUrlParam(name) })">{{ name }}<span ng-if="!$last">,</span></div></div>',
            link: function(t) {
                t.utils = e
            }
        }
    }]), angular.module("app").controller("TrackController", ["$rootScope", "$http", "$scope", "$stateParams", "utils", function(e, t, n, r, i) {
        i.showLoader(), t.get("get-track/" + r.id).success(function(t) {
            e.autoplay = {
                trackName: t.name
            }, t.album.artist ? i.toState("album", {
                artistName: t.album.artist.name,
                name: t.album.name,
                id: t.album.id
            }) : i.toState("album-no-artist", {
                name: t.album.name,
                id: t.album.id
            })
        }).error(function() {
            i.toState("404"), i.hideLoader()
        })
    }]), angular.module("app").controller("PhoneSearchController", ["$scope", function(e) {}]), angular.module("app").controller("SearchPageController", ["$rootScope", "$http", "$scope", "$stateParams", "utils", function(e, t, n, r, i) {
        i.showLoader(), n.activeTab = "all", t.get("get-search-results/" + i.decodeUrlParam(r.query) + "?limit=20").success(function(e) {
            n.results = e;
            for (var t = 0; t < n.results.tracks.length; t++) n.results.tracks[t].duration = i.secondsToMSS(n.results.tracks[t].duration / 1e3);
            e.tracks.length || e.albums.length || e.artists.length || (n.noResults = !0)
        }).error(function() {
            n.noResults = !0
        })["finally"](function() {
            setTimeout(function() {
                n.query = r.query, i.hideLoader()
            }), n.searchPageReady = !0
        }), n.openTab = function(e) {
            n.activeTab = e
        }, n.playAlbum = function(t) {
            e.autoplay = !0, i.toState("album", {
                artistName: t.artist.name,
                name: t.name,
                id: t.id
            })
        }, n.playArtist = function(t) {
            e.autoplay = !0, i.toState("artist", {
                name: t.name,
                id: t.id
            })
        }, n.loadQueueAndPlayTrack = function(e, t) {
            n.trackIsPlaying(e) ? player.pause() : n.trackIsLoaded(e) ? player.play() : player.loadQueue(n.results.tracks, !0, t)
        }
    }]), angular.module("app").directive("searchPanel", ["search", function(e) {
        return {
            restrict: "E",
            templateUrl: "assets/views/directives/search-panel.html",
            replace: !0,
            scope: !0,
            link: function(t) {
                t.searchPanelNeeded = document.body.clientWidth >= 627, setTimeout(function() {
                    angular.element(document.querySelector(".search-panel-backdrop")).on("click", function(n) {
                        n.target.classList.contains("search-panel-backdrop") && t.$apply(function() {
                            e.hidePanel()
                        })
                    })
                })
            }
        }
    }]), angular.module("app").factory("search", ["$rootScope", "$http", "utils", function(e, t, n) {
        var r = {
            query: "",
            ajaxInProgress: !1,
            results: [],
            clearQuery: function() {
                this.query = "", this.results = []
            },
            getResults: function(e) {
                !e || e.length < 2 || (this.ajaxInProgress = !0, t.get("get-search-results/" + e + "?limit=3").success(function(e) {
                    r.results = e
                })["finally"](function() {
                    r.showPanel(), r.ajaxInProgress = !1
                }))
            },
            showPanel: function() {
                e.isPhone ? n.toState("phone-search") : (document.querySelector(".search-panel-backdrop").classList.remove("hidden"), requestAnimationFrame(function() {
                    document.querySelector(".search-panel").classList.add("out")
                }))
            },
            hidePanel: function(t) {
                "search" === n.getCurrentStateName() || t || (this.query = ""), e.isPhone || (document.querySelector(".search-panel").classList.remove("out"), setTimeout(function() {
                    document.querySelector(".search-panel-backdrop").classList.add("hidden")
                }, 150))
            },
            viewAllResults: function() {
                return !this.query || this.query.length < 2 ? void 0 : (this.hidePanel(!0), n.toState("search", {
                    query: this.query
                }))
            },
            goToArtistPage: function(e) {
                n.toState("artist", {
                    name: e.name,
                    id: e.id
                }).then(function() {
                    r.hidePanel(), r.clearQuery()
                })
            },
            goToPlaylistPage: function(e) {
                n.toState("playlist", {
                    id: e.id
                }).then(function() {
                    r.hidePanel(), r.clearQuery()
                })
            },
            goToUserPage: function(e) {
                n.toState("user", {
                    id: e.id
                }).then(function() {
                    r.hidePanel(), r.clearQuery()
                })
            },
            goToAlbumPage: function(e) {
                e.artist ? n.toState("album", {
                    name: e.name,
                    artistName: e.artist.name,
                    id: e.id
                }).then(function() {
                    r.hidePanel(), r.clearQuery()
                }) : n.toState("album-no-artist", {
                    name: e.name,
                    id: e.id
                }).then(function() {
                    r.hidePanel(), r.clearQuery()
                })
            },
            playTrack: function(t) {
                e.autoplay = {
                    trackName: t.name
                }, this.goToAlbumPage(t.album || {
                    name: t.album_name
                })
            }
        };
        return r
    }]), angular.module("app").controller("AlbumsController", ["$rootScope", "$scope", "$state", "$translate", "userLibrary", "utils", function(e, t, n, r, i, a) {
        t.library = i, t.params = {
            sort: "name"
        }, t.sortAlbums = function(e) {
            t.params.sort = e
        }, t.translate = function(e) {
            return "artist.name" === e && (e = "artist"), "-tracks.length" === e && (e = "duration"), r.instant(e.replace("-", ""))
        }, t.playAlbum = function(t) {
            e.autoplay = !0, a.toState("album", {
                artistName: t.artist.name,
                name: t.name,
                id: t.id
            })
        }
    }]), angular.module("app").controller("ArtistsController", ["$rootScope", "$translate", "$scope", "$state", "userLibrary", "utils", function(e, t, n, r, i, a) {
        function o(e) {
            i.loaded ? e() : setTimeout(function() {
                o(e)
            }, 100)
        }
        a.showLoader(), n.artistsSort = "-numberOfTracks", n.sortArtists = function(e) {
            n.artistsSort = e
        }, n.translate = function(e) {
            return e.indexOf("spotify_popularity") > -1 && (e = "popularity"), t.instant(e.replace("-", ""))
        }, n.playArtist = function(t) {
            e.autoplay = !0, a.toState("artist", {
                name: t.name,
                id: t.id
            })
        }, o(function() {
            for (var e = 0; e < i.artists.length; e++) {
                for (var t = i.artists[e], r = 0, o = 0; o < i.tracks.length; o++) i.tracks[o].album && i.tracks[o].album.artist ? i.tracks[o].album.artist.name == t.name && r++ : i.tracks[o].artists[0] == t.name && r++;
                t.numberOfTracks = r
            }
            n.artists = i.artists, a.hideLoader()
        })
    }]), angular.module("app").controller("PublicProfileController", ["$scope", "$stateParams", "$http", "users", "utils", "player", function(e, t, n, r, i, a) {
        e.users = r, e.selectedTab = "playlists", i.showLoader(), n.get("users/" + t.id).success(function(t) {
            e.user = t, e.profileReady = !0, i.hideLoader()
        }), r.loadCurrentUsersFollows(), e.selectTab = function(t) {
            e.selectedTab = t
        }, e.followUser = function(t) {
            r.current || i.toState("login"), r.follow(t || e.user)
        }, e.unfollowUser = function(t) {
            r.current || i.toState("login"), r.unfollow(t || e.user).success(function() {
                r.current && e.user.id == r.current.id && r.loadCurrentUsersFollows()
            })
        }, e.playPlaylist = function(e) {
            a.loadQueue(e.tracks, !0)
        }, e.getPlaylistImage = function(e) {
            for (var t = 0; t < e.tracks.length; t++)
                if (e.tracks[t].album && e.tracks[t].album.image) return e.tracks[t].album.image;
            return i.img(!1, "album")
        }, e.followingUser = function(e) {
            if (r.current.followed_users)
                for (var t = 0; t < r.current.followed_users.length; t++)
                    if (r.current.followed_users[t].id == e.id) return !0
        }, e.followingThisUser = function() {
            if (r.current.followed_users && e.user)
                for (var t = 0; t < r.current.followed_users.length; t++)
                    if (r.current.followed_users[t].id == e.user.id) return !0
        }
    }]), angular.module("app").controller("SongsController", ["$scope", "$translate", "userLibrary", "player", function(e, t, n, r) {
        e.library = n, e.params = {
            sort: "name"
        }, e.sortSongs = function(t) {
            e.params.sort = t
        }, e.translate = function(e) {
            return e = e.replace("-", ""), e.indexOf("spotify_popularity") > -1 && (e = "popularity"), "album.name" === e && (e = "albumName"), "album.artist.name" === e && (e = "artistName"), "pivot.created_at" === e && (e = "dateAdded"), t.instant(e)
        }
    }]), angular.module("app").factory("userLibrary", ["$rootScope", "$http", "users", "utils", function(e, t, n, r) {
        function i() {
            t.get("user-library/get-all").success(function(e) {
                a.tracks = e.tracks, a.albums = e.albums, a.artists = e.artists, a.loaded = !0, a.forUser = n.current.email
            })
        }
        var a = {
            loaded: !1,
            tracks: [],
            albums: [],
            artists: [],
            forUser: !1,
            addTracks: function(e) {
                angular.isArray(e) || (e = [e]);
                var n = e.map(function(e) {
                    return e.id
                });
                t.post("user-library/add-tracks", {
                    tracks: n
                }).success(function() {
                    a.tracks = a.tracks.concat(e)
                })
            },
            removeTracks: function(e) {
                angular.isArray(e) || (e = [e]);
                var n = e.map(function(e) {
                    return e.id
                });
                t.post("user-library/remove-tracks", {
                    tracks: n
                }).success(function() {
                    for (var e = 0; e < a.tracks.length; e++) n.indexOf(a.tracks[e].id) > -1 && a.tracks.splice(e, 1)
                })
            },
            has: function(e) {
                if (!e || !this.tracks) return !1;
                for (var t = 0; t < this.tracks.length; t++)
                    if (this.tracks[t].id == e.id) return !0;
                return !1
            },
            getArtistTracks: function(e) {
                var t = [];
                return this.tracks.forEach(function(n) {
                    n.artists.indexOf(e) > -1 && t.push(n)
                }), t
            }
        };
        return n.current && !a.loaded && i(), e.$on("user.newCurrent", function() {
            a.loaded && a.forUser === n.current.email || i()
        }), a
    }]), angular.module("app").controller("AdminAlbumsController", ["$scope", "$rootScope", "$state", "$http", "modal", "utils", function(e, t, n, r, i, a) {
        e.editAlbum = function(e) {
            n.go("admin.editAlbum", {
                id: e.id
            })
        }, e.updateAlbum = function() {
            r.put("album/" + e.selectedItem.id, e.selectedItem).success(function() {
                alertify.delay(2e3).success(a.trans("updatedAlbum")), e.paginate(e.params), e.closeModal()
            }).error(function(t) {
                e.setErrors(t)
            })
        }, e.getTotalNumberOfTracks = function(e) {
            for (var t = 0, n = 0; n < e.length; n++) t += e[n].tracks.length;
            return t
        }, e.paginate = function(t) {
            !e.ajaxInProgress && t && (e.ajaxInProgress = !0, a.showLoader(), r.get("album", {
                params: t
            }).success(function(t) {
                e.items = t.data, e.totalItems = t.total, e.ajaxInProgress = !1, a.hideLoader()
            }))
        }, e.paginate(e.params)
    }]), angular.module("app").controller("AdminArtistsController", ["$scope", "$rootScope", "$state", "$http", "modal", "utils", function(e, t, n, r, i, a) {
        e.editArtist = function(e) {
            n.go("admin.editArtist", {
                name: a.encodeUrlParam(e.name)
            })
        }, e.getTotalNumberOfTracks = function(e) {
            for (var t = 0, n = 0; n < e.length; n++) t += e[n].tracks.length;
            return t
        }, e.paginate = function(t) {
            !e.ajaxInProgress && t && (e.ajaxInProgress = !0, a.showLoader(), r.get("artist", {
                params: t
            }).success(function(t) {
                e.items = t.data, e.totalItems = t.total, e.ajaxInProgress = !1, a.hideLoader()
            }))
        }, e.paginate(e.params)
    }]), angular.module("app").controller("AdminController", ["$rootScope", "$scope", function(e, t) {
        t.currentPage = 1, t.itemsPerPage = 15, e.$on("$stateChangeSuccess", function() {
            t.selectedItems = [], t.currentPage = 1
        })
    }]), angular.module("app").controller("AdminMailController", ["$scope", "$http", "utils", function(e, t, n) {
        e.templateNames = [], t.get("mail/templates").success(function(t) {
            e.templates = t, angular.forEach(t, function(t, n) {
                e.templateNames.push(n)
            }), e.selectTemplate(e.templateNames[0])
        }), e.selectTemplate = function(t) {
            e.activeTemplate = e.templates[t], e.activeTemplateName = t
        }, e.saveTemplate = function() {
            t.post("mail/template/" + e.activeTemplateName, {
                content: e.activeTemplate
            }).success(function() {
                alertify.delay(2e3).success(n.trans("mailTemplateSaved"))
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }
    }]), angular.module("app").controller("AdminSongsController", ["$scope", "$rootScope", "$state", "$http", "modal", "utils", function(e, t, n, r, i, a) {
        e.showUpdateItemModal = function(t) {
            e.selectedItem = angular.copy(t), i.show("update-track", e)
        }, e.uploadTrack = function(t, n, r) {
            e.trackFile = t;
            var i = URL.createObjectURL(r),
                a = document.createElement("audio");
            angular.element(a).on("canplaythrough", function(t) {
                e.$apply(function() {
                    e.selectedItem.duration = 1e3 * t.currentTarget.duration
                }), URL.revokeObjectURL(i)
            }), a.src = i, e.$apply(function() {
                e.selectedItem.url = r.name
            })
        }, e.updateOrCreateTrack = function() {
            if (a.isDemo) return alertify.delay(2e3).error(a.trans("noDemoPermissions"));
            if (e.creatingTrack) var t = a.uploadFileAndData("track", e.trackFile, e.selectedItem, "post");
            else var t = a.uploadFileAndData("track/" + e.selectedItem.id, e.trackFile, e.selectedItem, "put");
            t.success(function(t) {
                e.creatingTrack ? (alertify.delay(2e3).success(a.trans("createdTrack")), e.album.tracks.push(t)) : alertify.delay(2e3).success(a.trans("updatedTrack")), e.trackFile = !1, e.closeModal(), e.paginate(e.params)
            }).error(function(t) {
                e.setErrors(t)
            })
        }, e.paginate = function(t) {
            !e.ajaxInProgress && t && (e.ajaxInProgress = !0, a.showLoader(), r.get("track", {
                params: t
            }).success(function(t) {
                e.items = t.data, e.totalItems = t.total, e.ajaxInProgress = !1, a.hideLoader()
            }))
        }, e.paginate(e.params)
    }]), angular.module("app").controller("AdminTableController", ["$scope", "$rootScope", "$state", "$http", "modal", function(e, t, n, r, i) {
        e = e.$parent, e.ajaxInProgress = !1, e.items = [], e.errors = [], e.params = {
            itemsPerPage: "10",
            page: 1
        }, e.selectedItems = [], e.isItemSelected = function(t) {
            return e.selectedItems.indexOf(t) > -1
        }, e.select = function(t) {
            var n = e.selectedItems.indexOf(t);
            n > -1 ? e.selectedItems.splice(n, 1) : e.selectedItems.push(t)
        }, e.toggleAllItems = function() {
            e.selectedItems.length === e.items.length ? e.selectedItems = [] : e.selectedItems = e.items.slice()
        }, e.deleteItems = function() {
            var t = n.current.name.replace("admin.", "");
            r.post("delete-" + t, {
                items: e.selectedItems
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            }).success(function() {
                e.paginate(e.params), e.selectedItems = []
            })
        }, e.$watchCollection("params", function(t) {
            e.paginate(t)
        }), e.closeModal = function() {
            i.hide()
        }, e.setErrors = function(t) {
            if (angular.isString(t)) return alertify.delay(2e3).error(t);
            for (var n in t) e.errors.push(t[n][0])
        }
    }]), angular.module("app").controller("AlbumModifyController", ["$scope", "$rootScope", "$state", "$stateParams", "$http", "modal", "utils", function(e, t, n, r, i, a, o) {
        function s(n) {
            function r() {
                var t = new jsmediatags.Reader(n).setTagsToRead(["title"]);
                t.read({
                    onSuccess: function(t) {
                        t.tags.title && e.selectedItem && (e.selectedItem.name = t.tags.title)
                    }
                })
            }
            window.jsmediatags ? r() : o.loadScript(t.baseUrl + "/assets/js/mediatags.min.js", function() {
                r()
            })
        }
        e.selectedTracks = [], e.selectedItem = {}, e.errors = [], e.album = {}, "admin.editArtist" === t.previousState.name && (e.album.artist = {
            name: t.previousState.params.name
        }), r.id && (o.showLoader(!0), i.post("get-album", {
            id: r.id
        }).success(function(t) {
            e.album = t
        })["finally"](function() {
            o.hideLoader()
        })), e.uploadImage = function(t, n) {
            o.uploadFileAndData("album/" + e.album.id + "/upload-image", t, n).success(function(t) {
                e.album.image = t.image + "?" + o.randomString(5)
            }).error(function(e) {
                o.notify(e, "error")
            })
        }, e.uploadTrack = function(t, n, r) {
            e.trackFile = t, s(r);
            var i = URL.createObjectURL(r),
                a = document.createElement("audio");
            angular.element(a).on("canplaythrough", function(t) {
                e.$apply(function() {
                    e.selectedItem.duration = 1e3 * t.currentTarget.duration
                }), URL.revokeObjectURL(i)
            }), a.src = i, e.$apply(function() {
                e.selectedItem.url = r.name
            })
        }, e.updateAlbum = function(t) {
            if (o.isDemo) setTimeout(function() {
                alertify.delay(2e3).error(o.trans("noDemoPermissions"))
            }, 300);
            else {
                if (e.album.id) var r = i.put("album/" + t.id, t);
                else var r = i.post("album", t);
                r.success(function(e) {
                    t.id ? o.notify(o.trans("updatedAlbum")) : (n.go("admin.editAlbum", {
                        id: e.id
                    }), o.notify(o.trans("createdAlbum")))
                }).error(function(e) {
                    alertify.delay(2e3).error(e)
                })
            }
        }, e.showUpdateTrackModal = function(t) {
            e.selectedItem = t, a.show("update-track", e)
        }, e.showNewTrackModal = function() {
            e.creatingTrack = !0, e.selectedItem = {
                album_name: e.album.name,
                number: e.album.tracks.length + 1,
                artists: e.album.artist.name,
                duration: 3e5,
                album_id: e.album.id,
                spotify_popularity: 50
            }, a.show("update-track", e)
        }, e.isTrackSelected = function(t) {
            return e.selectedTracks.indexOf(t) > -1
        }, e.selectTrack = function(t) {
            var n = e.selectedTracks.indexOf(t);
            n > -1 ? e.selectedTracks.splice(n, 1) : e.selectedTracks.push(t)
        }, e.toggleAllTracks = function() {
            e.selectedTracks.length === e.album.tracks.length ? e.selectedTracks = [] : e.selectedTracks = e.album.tracks.slice()
        }, e.updateOrCreateTrack = function() {
            if (o.isDemo) return alertify.delay(2e3).error(o.trans("noDemoPermissions"));
            if (e.creatingTrack) var t = o.uploadFileAndData("track", e.trackFile, e.selectedItem, "post");
            else var t = o.uploadFileAndData("track/" + e.selectedItem.id, e.trackFile, e.selectedItem, "put");
            t.success(function(t) {
                e.creatingTrack ? (alertify.delay(2e3).success(o.trans("createdTrack")), e.album.tracks.push(t)) : alertify.delay(2e3).success(o.trans("updatedTrack")), e.trackFile = !1, e.closeModal()
            }).error(function(t) {
                e.setErrors(t)
            })
        }, e.deleteTracks = function() {
            i.post("delete-tracks", {
                items: e.selectedTracks
            }).error(function(e) {
                o.delay.error(e, "error")
            }).success(function() {
                e.album.tracks = e.album.tracks.filter(function(t) {
                    return -1 === e.selectedTracks.indexOf(t)
                }), e.selectedTracks = {}
            })
        }, e.setErrors = function(t) {
            if (angular.isString(t)) return alertify.delay(2e3).error(t);
            for (var n in t) e.errors.push(t[n][0])
        }, e.closeModal = function() {
            a.hide(), e.creatingTrack = !1, e.selectedItem = {}
        }
    }]), angular.module("app").controller("AnalyticsController", ["$scope", "$http", function(e, t) {
        e.stats = {}, t.get("admin-stats").success(function(t) {
            e.stats = t
        })
    }]), angular.module("app").controller("AppearanceController", ["$scope", "$http", "modal", "utils", "sass", function(e, t, n, r, i) {
        function a() {
            var t = "";
            return angular.forEach(e.selectedStylesheet.variables, function(e) {
                e.forEach(function(e) {
                    t += "$" + e.name + ":" + e.value + ";"
                })
            }), t
        }

        function o() {
            r.showLoader(), r.loadScript(e.baseUrl + "assets/js/jscolor/jscolor.js"), r.loadScript(e.baseUrl + "assets/js/tinycolor.min.js"), t.get("available-stylesheets").success(function(t) {
                e.stylesheets = t.sheets;
                for (var n = r.getSetting("selected_sheet") || "original", a = 0; a < e.stylesheets.length; a++)
                    if (e.stylesheets[a].name === n) {
                        e.selectedStylesheet = e.stylesheets[a];
                        break
                    }
                i.initCompiler(t.files), e.descriptions = t.files.variables.descriptions, e.originalVars = t.files.variables.vars, r.hideLoader()
            })
        }

        function s() {
            var e = document.getElementById("main-stylesheet");
            e.href = e.href.split("?")[0] + "?id=" + (new Date).getMilliseconds()
        }
        e.sass = i, o(), e.confirmStylesheetDeletion = function() {
            return "original" === e.selectedStylesheet.name ? void alertify.okBtn(r.trans("gotIt")).alert(r.trans("cantDeleteOriginalSheet")) : void n.confirm({
                title: "deleteStylesheet",
                content: "confirmStylesheetDelete",
                subcontent: "confirmPlaylistDelete2",
                ok: "delete",
                onConfirm: e.deleteSelectedStylesheet,
                onClose: e.closeModal
            })
        }, e.confirmStylesheetReset = function() {
            n.confirm({
                title: "resetStylesheetVars",
                content: "confirmStylesheetVarsReset",
                subcontent: "confirmPlaylistDelete2",
                ok: "reset",
                onConfirm: e.resetSelectedStylesheetVariables,
                onClose: e.closeModal
            })
        }, e.deleteSelectedStylesheet = function() {
            t["delete"]("stylesheet/" + e.selectedStylesheet.name).success(function() {
                e.stylesheets.splice(e.stylesheets.indexOf(e.selectedStylesheet), 1), e.selectStylesheet(e.stylesheets[0]), alertify.delay(2e3).success(r.trans("stylesheetDeleteSuccess"))
            })
        }, e.resetSelectedStylesheetVariables = function() {
            t.post("stylesheet/" + e.selectedStylesheet.name + "/reset").success(function(t) {
                e.selectedStylesheet.variables = t.variables, e.selectedStylesheet.mainColors = t.mainColors, e.selectedStylesheet.customCss = "", s(), alertify.delay(2e3).success(r.trans("stylesheetResetSuccess"))
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.showRenameStylesheetModal = function() {
            return "original" === e.selectedStylesheet.name ? void alertify.okBtn(r.trans("gotIt")).alert(r.trans("cantRenameOriginalSheet")) : (e.newStylesheetName = e.selectedStylesheet.name, void n.show("rename-stylesheet", e))
        }, e.renameStylesheet = function() {
            t.put("rename-stylesheet/" + e.selectedStylesheet.name, {
                newName: e.newStylesheetName
            }).success(function() {
                e.selectedStylesheet.name = e.newStylesheetName, e.closeModal(), e.selectStylesheet(e.selectedStylesheet)
            })
        }, e.showStylesheetNameModal = function() {
            n.show("new-stylesheet", e)
        }, e.selectStylesheet = function(n) {
            e.selectedStylesheet = n, t.post("update-settings", {
                selected_sheet: "original" === n.name ? null : n.name
            })
        }, e.openCustomCssModal = function() {
            n.show("custom-css", e)
        }, e.updateStylesheet = function() {
            if (r.isDemo) return void alertify.delay(2e3).error(r.trans("noDemoPermissions"));
            r.showLoader(!0);
            var n = {
                variables: angular.toJson(e.selectedStylesheet.variables),
                name: e.selectedStylesheet.name,
                customCss: e.selectedStylesheet.customCss
            };
            i.compiler.writeFile("variables.scss", a()), e.selectedStylesheet.customCss && i.addCustomCssToCompiler(e.selectedStylesheet.customCss), i.compile(function(e) {
                return n.css = e.text, e.message ? (alertify.okBtn(r.trans("gotIt")).alert(r.trans("errorInCustomCss") + e.message), r.hideLoader()) : void t.put("update-stylesheet", n).success(function() {
                    s()
                })["finally"](function() {
                    r.hideLoader()
                })
            })
        }, e.createNewStylesheet = function() {
            e.creatingNewStylesheet || (e.creatingNewStylesheet = !0, t.post("create-new-stylesheet", {
                name: e.newStylesheetName
            }).success(function(t) {
                var n = e.stylesheets.push(t);
                e.selectStylesheet(e.stylesheets[n - 1]), e.closeModal()
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })["finally"](function() {
                e.creatingNewStylesheet = !1
            }))
        }, e.closeModal = function() {
            n.hide(), e.newStylesheetName = ""
        }, e.shouldBeSelect = function(e) {
            return "false" === e || "true" === e
        }, e.$on("$$destroy", function() {
            i.destroy()
        })
    }]), angular.module("app").controller("ArtistModifyController", ["$scope", "$rootScope", "$state", "$stateParams", "$http", "modal", "utils", function(e, t, n, r, i, a, o) {
        e.artist = {}, r.name && (o.showLoader(!0), i.post("get-artist", {
            name: o.decodeUrlParam(r.name),
            force: !0
        }).success(function(t) {
            if (e.artist = t, e.artist.genres && e.artist.genres.length) {
                var n = "";
                angular.forEach(e.artist.genres, function(e) {
                    n += e.name + ", "
                }), n = n.replace(/,\s*$/, ""), e.genres = n
            }
            if (e.artist.bio) {
                try {
                    var r = JSON.parse(e.artist.bio)
                } catch (i) {
                    var r = {}
                }
                e.bio = r.bio, r.images && (e.images = r.images.map(function(e) {
                    return e.url
                }).join("\n"))
            }
        })["finally"](function() {
            o.hideLoader()
        })), e.uploadImage = function(t, n) {
            e.artist.id && i.post("artist/" + e.artist.id + "/upload-image", t, {
                withCredentials: !1,
                headers: {
                    "Content-Type": void 0
                },
                transformRequest: angular.identity,
                params: n
            }).success(function(t) {
                e.artist[n.type] = t[n.type] + "?" + o.randomString(5)
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.updateArtist = function(t) {
            if (o.isDemo) setTimeout(function() {
                alertify.delay(2e3).error(o.trans("noDemoPermissions"))
            }, 300);
            else {
                var r = e.genres;
                if (r && (r = r.split(",").map(function(e) {
                        return e.trim()
                    })), t.genres = r, e.bio || e.images) {
                    var a = e.bio,
                        s = e.images.split("\n").map(function(e) {
                            return {
                                url: e
                            }
                        });
                    t.bio = JSON.stringify({
                        bio: a,
                        images: s
                    })
                } else t.bio = "";
                if (t.id) var l = i.put("artist/" + t.id, t);
                else var l = i.post("artist", t);
                l.success(function() {
                    t.id ? o.notify(o.trans("updatedArtist")) : (n.go("admin.editArtist", {
                        name: o.encodeUrlParam(t.name)
                    }), o.notify(o.trans("createdArtist")))
                }).error(function(e) {
                    o.notify(e, "error")
                })
            }
        }, e.deleteAlbum = function(t) {
            alertify.okBtn(o.trans("delete")), alertify.cancelBtn(o.trans("cancel")), alertify.confirm(o.trans("confirmAlbumDelete"), function() {
                return o.isDemo ? alertify.delay(2e3).error(o.trans("noDemoPermissions")) : void i.post("delete-albums", {
                    items: [t]
                }).error(function(e) {
                    alertify.delay(2e3).error(e)
                }).success(function(n) {
                    alertify.delay(2e3).success(n), e.artist.albums.splice(e.artist.albums.indexOf(t), 1)
                })
            }, function() {})
        }
    }]), angular.module("app").controller("SettingsController", ["$scope", "$http", "utils", function(e, t, n) {
        e.settings = [], e.logoUrl = n.getLogoUrl(), e.regularMailDrivers = ["smtp", "mail", "sendmail", "log"], t.get("settings").success(function(t) {
            e.settings = t.settings, e.info = t.info
        }), e.clearCache = function() {
            n.showLoader(), t.post("settings/clear-cache").success(function(e) {
                n.notify(e)
            }).error(function(e) {
                n.notify(e, "error")
            })["finally"](function() {
                n.hideLoader()
            })
        }, e.generateSitemap = function() {
            n.showLoader(), t.get("generate-sitemap").success(function(e) {
                n.notify(e)
            }).error(function(e) {
                n.notify(e, "error")
            })["finally"](function() {
                n.hideLoader()
            })
        }, e.uploadLogo = function(n) {
            if (n) var r = t.post("settings/upload-logo", n, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": void 0
                }
            });
            else var r = t.post("settings/upload-logo");
            r.success(function(t) {
                e.logoUrl = t + "?" + Math.random()
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.updateSettings = function() {
            return n.isDemo ? void alertify.delay(2e3).error("Sorry, you can't do that on demo site.") : void t.post("update-settings", e.settings).success(function(e) {
                alertify.delay(2e3).success(e)
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }
    }]), angular.module("app").controller("TranslationsController", ["$scope", "$http", "$translate", "utils", "modal", "$timeout", function(e, t, n, r, i, a) {
        r.showLoader();
        var o = "en";
        e.activeLocale = !1, t.get("translations").success(function(t) {
            e.translations = {}, e.translations[t.activeLocale] = formatLines(t.lines), e.locales = t.locales, a(function() {
                e.activeLocale = t.activeLocale
            })
        })["finally"](function() {
            r.hideLoader()
        }), e.confirmTranslationsReset = function() {
            i.confirm({
                title: "resetTranslations",
                content: "confirmLangReset",
                subcontent: "confirmPlaylistDelete2",
                ok: "reset",
                onConfirm: e.resetTranslations,
                onClose: e.closeModal
            })
        }, e.resetTranslations = function() {
            t.post("reset-translations", {
                locale: e.activeLocale
            }).success(function(t) {
                e.translations[e.activeLocale] = formatLines(t), alertify.delay(2e3).success(n.instant("translationsReset"))
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.saveTranslations = function() {
            var r = {};
            e.translations[e.activeLocale].forEach(function(e) {
                r[e.key] = e.trans.replace(/"/g, "'")
            }), t.post("update-translations", {
                lines: r,
                locale: e.activeLocale
            }).success(function() {
                alertify.delay(2e3).success(n.instant("updatedTranslations"))
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.changeLocale = function() {
            t.post("update-settings", {
                env: {
                    trans_locale: e.activeLocale
                }
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            }), e.translations[e.activeLocale] || (r.showLoader(),
                t.get("translation-lines/" + e.activeLocale).success(function(t) {
                    e.translations[e.activeLocale] = formatLines(t), r.hideLoader()
                }))
        }, e.deleteActiveLocale = function() {
            t["delete"]("locale/" + e.activeLocale).success(function() {
                e.locales.splice(e.locales.indexOf(e.activeLocale), 1), e.activeLocale = o, e.changeLocale()
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.createNewLocale = function(r) {
            r && t.post("new-locale", {
                name: r
            }).success(function() {
                e.activeLocale = r, e.locales.push(r), e.newLocaleName = "", e.changeLocale(), alertify.delay(2e3).success(n.instant("createdNewLocale"))
            }).error(function(e) {
                alertify.delay(2e3).error(e)
            })
        }, e.closeModal = function() {
            i.hide()
        }, formatLines = function(e) {
            var t = [];
            return angular.forEach(e, function(e, n) {
                t.push({
                    key: n,
                    trans: e
                })
            }), t
        }
    }]), angular.module("app").controller("UsersController", ["$scope", "$rootScope", "$state", "modal", "utils", "users", function(e, t, n, r, i, a) {
        e.users = a, e.deleteUsers = function() {
            return i.isDemo ? (alertify.delay(2e3).error("Sorry, you can't do that on demo site."), void(e.selectedItems = [])) : void a["delete"](e.selectedItems).success(function() {
                e.selectedItems = [], e.paginate(e.params)
            }).error(function(e) {
                alertify.delay(2e3).success(e)
            })
        }, e.showCreateUserModal = function() {
            r.show("new-user", e)
        }, e.showUpdateUserModal = function(t) {
            e.userModel = angular.copy(t), e.userModel.confirmed = String(e.userModel.confirmed), delete e.userModel.password, i.isDemo && (e.userModel.email = "Hidden on demo site"), r.show("update-user", e)
        }, e.updateUser = function() {
            a.updateAccountSettings(e.userModel, e.userModel.id).success(function() {
                alertify.delay(2e3).success(i.trans("updatedUser")), e.paginate(e.params)
            }).error(function(t) {
                e.setErrors(t)
            })
        }, e.createNewUser = function() {
            a.register(e.userModel).success(function() {
                e.closeModal(), alertify.delay(2e3).success(i.trans("createdNewUser")), e.paginate(e.params), e.errors = []
            }).error(function(t) {
                e.setErrors(t)
            })
        }, e.closeModal = function() {
            r.hide(), e.userModel = {}
        }, e.paginate = function(t) {
            e.usersAjaxInProgress || (e.usersAjaxInProgress = !0, i.showLoader(), a.paginate(t).success(function(t) {
                e.items = t.data, e.totalItems = t.total, e.usersAjaxInProgress = !1, i.hideLoader()
            }))
        }, e.paginate(e.params)
    }]), angular.module("app").directive("appearanceInput", ["sass", function(e) {
        return {
            restrict: "A",
            link: function(t, n) {
                var r = e.applyTransforms(t.variable.value, t.selectedStylesheet.variables),
                    i = tinycolor(r);
                if (i.isValid()) {
                    var a = angular.element('<div class="color-preview" style="background-color: ' + i.toString() + '"></div>');
                    n.parent().append(a);
                    var o = new jscolor.color(n[0], {
                        binding: !1,
                        adjust: !1,
                        required: !1,
                        hash: !0,
                        styleElement: a[0]
                    });
                    a.on("click", function() {
                        o.showPicker()
                    })
                }
            }
        }
    }]), angular.module("app").directive("ckEditor", ["utils", function(e) {
        function t(e, t, n) {
            CKEDITOR.config.basicEntities = !1, CKEDITOR.replace(t[0], {
                height: t.parent()[0].getBoundingClientRect().height - 145,
                skin: "bootstrapck",
                htmlEncodeOutput: !1,
                entities: !1
            }), CKEDITOR.instances.editor.on("change", function(t) {
                e[n.ckEditor] = CKEDITOR.instances.editor.getData()
            }), CKEDITOR.on("instanceLoaded", function() {
                angular.element(window).on("resize", function() {
                    CKEDITOR.instances.editor.resize("100%", t.parent()[0].getBoundingClientRect().height - 20)
                })
            }), e.$watch(n.ckEditor, function(e) {
                e && CKEDITOR.instances.editor.setData(e)
            }), e.$on("$destroy", function() {
                CKEDITOR.instances.editor.destroy()
            })
        }
        return {
            restrict: "A",
            link: function(n, r, i) {
                angular.isUndefined(window.CKEDITOR) ? e.loadScript(n.baseUrl + "assets/js/ckeditor/ckeditor.js", function() {
                    t.apply(this, [n, r, i])
                }) : t(n, r, i)
            }
        }
    }]), angular.module("app").directive("customCssEditor", ["utils", function(e) {
        function t(e) {
            setTimeout(function() {
                var t = ace.edit("editor");
                t.setTheme("ace/theme/tomorrow_night"), t.getSession().setMode("ace/mode/css"), t.setValue(e.selectedStylesheet.customCss, 1), t.on("blur", function() {
                    e.selectedStylesheet.customCss = t.getValue()
                })
            }, 100)
        }
        return {
            restrict: "A",
            link: function(n) {
                angular.isUndefined(window.ace) ? e.loadScript(n.baseUrl + "assets/js/ace/src-min/ace.js", function() {
                    t.apply(this, [n])
                }) : t(n)
            }
        }
    }]), angular.module("app").directive("edLoadAnalytics", ["$rootScope", "utils", function(e, t) {
        return {
            restrict: "A",
            compile: function() {
                function n() {
                    for (var e = document.querySelectorAll(".charts-row"), t = 0; t < e.length; t++) e[t].classList.remove("hidden");
                    for (var n = document.querySelectorAll("#embed-api-auth-container, .unauthorized-container"), r = 0; r < n.length; r++) n[r].classList.add("hidden")
                }

                function r() {
                    gapi.analytics.auth.authorize({
                        container: "embed-api-auth-container",
                        clientid: t.getSetting("env.google_id")
                    })
                }

                function i() {
                    function t(e) {
                        var t = moment(),
                            n = o({
                                ids: e,
                                dimensions: "ga:date,ga:nthDay",
                                metrics: "ga:sessions",
                                "start-date": moment(t).subtract(1, "day").day(0).format("YYYY-MM-DD"),
                                "end-date": moment(t).format("YYYY-MM-DD")
                            }),
                            r = o({
                                ids: e,
                                dimensions: "ga:date,ga:nthDay",
                                metrics: "ga:sessions",
                                "start-date": moment(t).subtract(1, "day").day(0).subtract(1, "week").format("YYYY-MM-DD"),
                                "end-date": moment(t).subtract(1, "day").day(6).subtract(1, "week").format("YYYY-MM-DD")
                            });
                        Promise.all([n, r]).then(function(e) {
                            var t = e[0].rows.map(function(e) {
                                    return +e[2]
                                }),
                                n = e[1].rows.map(function(e) {
                                    return +e[2]
                                }),
                                r = e[1].rows.map(function(e) {
                                    return +e[0]
                                });
                            r = r.map(function(e) {
                                return moment(e, "YYYYMMDD").format("ddd")
                            });
                            var i = {
                                labels: r,
                                datasets: [{
                                    label: "Last Week",
                                    fillColor: "rgba(220,220,220,0.5)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    pointStrokeColor: "#fff",
                                    data: n
                                }, {
                                    label: "This Week",
                                    fillColor: "rgba(151,187,205,0.5)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    pointStrokeColor: "#fff",
                                    data: t
                                }]
                            };
                            new Chart(s("this-vs-last-week")).Line(i), l("legend-1-container", i.datasets)
                        })
                    }

                    function r(e) {
                        var t = moment(),
                            n = o({
                                ids: e,
                                dimensions: "ga:date,ga:nthDay",
                                metrics: "ga:sessions",
                                "start-date": moment(t).startOf("month").format("YYYY-MM-DD"),
                                "end-date": moment(t).endOf("month").format("YYYY-MM-DD")
                            }),
                            r = o({
                                ids: e,
                                dimensions: "ga:date,ga:nthDay",
                                metrics: "ga:sessions",
                                "start-date": moment(t).subtract(1, "month").startOf("month").format("YYYY-MM-DD"),
                                "end-date": moment(t).subtract(1, "month").endOf("month").format("YYYY-MM-DD")
                            });
                        Promise.all([n, r]).then(function(e) {
                            var t = e[0].rows.map(function(e) {
                                    return +e[2]
                                }),
                                n = e[1].rows.map(function(e) {
                                    return +e[2]
                                }),
                                r = new Array(31).join().split(",").map(function(e, t) {
                                    return ++t
                                }),
                                i = {
                                    labels: r,
                                    datasets: [{
                                        label: "Last Month",
                                        fillColor: "rgba(220,220,220,0.5)",
                                        strokeColor: "rgba(220,220,220,1)",
                                        pointColor: "rgba(220,220,220,1)",
                                        pointStrokeColor: "#fff",
                                        data: n
                                    }, {
                                        label: "This Month",
                                        fillColor: "rgba(151,187,205,0.5)",
                                        strokeColor: "rgba(151,187,205,1)",
                                        pointColor: "rgba(151,187,205,1)",
                                        pointStrokeColor: "#fff",
                                        data: t
                                    }]
                                };
                            new Chart(s("chart-2-container")).Line(i), l("legend-2-container", i.datasets)
                        })
                    }

                    function i(e) {
                        o({
                            ids: e,
                            dimensions: "ga:browser",
                            metrics: "ga:pageviews",
                            sort: "-ga:pageviews",
                            "max-results": 5
                        }).then(function(e) {
                            var t = [],
                                n = ["#4D5360", "#949FB1", "#D4CCC5", "#E2EAE9", "#F7464A"];
                            e.rows.forEach(function(e, r) {
                                t.push({
                                    value: +e[1],
                                    color: n[r],
                                    label: e[0]
                                })
                            }), new Chart(s("chart-3-container")).Doughnut(t), l("legend-3-container", t)
                        })
                    }

                    function a(e) {
                        o({
                            ids: e,
                            dimensions: "ga:country",
                            metrics: "ga:sessions",
                            sort: "-ga:sessions",
                            "max-results": 5
                        }).then(function(e) {
                            var t = [],
                                n = ["#4D5360", "#949FB1", "#D4CCC5", "#E2EAE9", "#F7464A"];
                            e.rows.forEach(function(e, r) {
                                t.push({
                                    label: e[0],
                                    value: +e[1],
                                    color: n[r]
                                })
                            }), new Chart(s("chart-4-container")).Doughnut(t), l("legend-4-container", t)
                        })
                    }

                    function o(e) {
                        return new Promise(function(t, n) {
                            var r = new gapi.analytics.report.Data({
                                query: e
                            });
                            r.once("success", function(e) {
                                t(e)
                            }).once("error", function(e) {
                                n(e)
                            }).execute()
                        })
                    }

                    function s(e) {
                        var t = document.getElementById(e),
                            n = document.createElement("canvas"),
                            r = n.getContext("2d");
                        return t.innerHTML = "", n.width = t.offsetWidth, n.height = t.offsetHeight, t.appendChild(n), r
                    }

                    function l(e, t) {
                        var n = document.getElementById(e);
                        n.innerHTML = t.map(function(e) {
                            var t = e.color || e.fillColor,
                                n = e.label;
                            return '<li><i style="background:' + t + '"></i>' + n + "</li>"
                        }).join("")
                    }
                    gapi.analytics.auth.on("success", function() {
                        n()
                    });
                    var u = new gapi.analytics.ext.ActiveUsers({
                        container: "active-users-container",
                        pollingInterval: 5
                    });
                    u.once("success", function() {
                        var e;
                        this.container.firstChild, this.on("change", function(t) {
                            var n = this.container.firstChild,
                                r = t.delta > 0 ? "is-increasing" : "is-decreasing";
                            n.className += " " + r, clearTimeout(e), e = setTimeout(function() {
                                n.className = n.className.replace(/ is-(increasing|decreasing)/g, "")
                            }, 3e3)
                        })
                    });
                    var c = new gapi.analytics.ext.ViewSelector2({
                        container: "view-selector-container"
                    }).execute().on("error", function(e) {
                        $(".error").text(e.result.error.message)
                    });
                    c.on("viewChange", function(e) {
                        u.set(e).execute(), t(e.ids), r(e.ids), i(e.ids), a(e.ids)
                    }), Chart.defaults.global.animationSteps = 60, Chart.defaults.global.animationEasing = "easeInOutQuart", Chart.defaults.global.responsive = !0, Chart.defaults.global.maintainAspectRatio = !1, e.analyticsLoaded = !0
                }

                function a() {
                    ! function e(t, n, r) {
                        function i(o, s) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var l = "function" == typeof require && require;
                                    if (!s && l) return l(o, !0);
                                    if (a) return a(o, !0);
                                    var u = new Error("Cannot find module '" + o + "'");
                                    throw u.code = "MODULE_NOT_FOUND", u
                                }
                                var c = n[o] = {
                                    exports: {}
                                };
                                t[o][0].call(c.exports, function(e) {
                                    var n = t[o][1][e];
                                    return i(n ? n : e)
                                }, c, c.exports, e, t, n, r)
                            }
                            return n[o].exports
                        }
                        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
                        return i
                    }({
                        1: [function(e, t, n) {
                            var r = e("javascript-api-utils/lib/account-summaries");
                            gapi.analytics.ready(function() {
                                function e(e, t, n) {
                                    e.innerHTML = t.map(function(e) {
                                        var t = e.id == n ? "selected " : " ";
                                        return "<option " + t + 'value="' + e.id + '">' + e.name + "</option>"
                                    }).join("")
                                }

                                function t(e) {
                                    return e.ids || e.viewId ? {
                                        prop: "viewId",
                                        value: e.viewId || e.ids && e.ids.replace(/^ga:/, "")
                                    } : e.propertyId ? {
                                        prop: "propertyId",
                                        value: e.propertyId
                                    } : e.accountId ? {
                                        prop: "accountId",
                                        value: e.accountId
                                    } : void 0
                                }
                                gapi.analytics.createComponent("ViewSelector2", {
                                    execute: function() {
                                        return this.setup_(function() {
                                            this.updateAccounts_(), this.changed_ && (this.render_(), this.onChange_())
                                        }.bind(this)), this
                                    },
                                    set: function(e) {
                                        if (!!e.ids + !!e.viewId + !!e.propertyId + !!e.accountId > 1) throw new Error('You cannot specify more than one of the following options: "ids", "viewId", "accountId", "propertyId"');
                                        if (e.container && this.container) throw new Error("You cannot change containers once a view selector has been rendered on the page.");
                                        var t = this.get();
                                        return (t.ids != e.ids || t.viewId != e.viewId || t.propertyId != e.propertyId || t.accountId != e.accountId) && (t.ids = null, t.viewId = null, t.propertyId = null, t.accountId = null), gapi.analytics.Component.prototype.set.call(this, e)
                                    },
                                    setup_: function(e) {
                                        function t() {
                                            r.get().then(function(t) {
                                                n.summaries = t, n.accounts = n.summaries.all(), e()
                                            }, function(e) {
                                                n.emit("error", e)
                                            })
                                        }
                                        var n = this;
                                        gapi.analytics.auth.isAuthorized() ? t() : gapi.analytics.auth.on("success", t)
                                    },
                                    updateAccounts_: function() {
                                        var e, n, r, i = this.get(),
                                            a = t(i);
                                        if (a) switch (a.prop) {
                                            case "viewId":
                                                e = this.summaries.getProfile(a.value), n = this.summaries.getAccountByProfileId(a.value), r = this.summaries.getWebPropertyByProfileId(a.value);
                                                break;
                                            case "propertyId":
                                                r = this.summaries.getWebProperty(a.value), n = this.summaries.getAccountByWebPropertyId(a.value), e = r && r.views && r.views[0];
                                                break;
                                            case "accountId":
                                                n = this.summaries.getAccount(a.value), r = n && n.properties && n.properties[0], e = r && r.views && r.views[0]
                                        } else n = this.accounts[0], r = n && n.properties && n.properties[0], e = r && r.views && r.views[0];
                                        n || r || e ? (n != this.account || r != this.property || e != this.view) && (this.changed_ = {
                                            account: n && n != this.account,
                                            property: r && r != this.property,
                                            view: e && e != this.view
                                        }, this.account = n, this.properties = n.properties, this.property = r, this.views = r && r.views, this.view = e, this.ids = e && "ga:" + e.id) : this.emit("error", new Error("You do not have access to " + a.prop.slice(0, -2) + " : " + a.value))
                                    },
                                    render_: function() {
                                        var t = this.get();
                                        this.container = "string" == typeof t.container ? document.getElementById(t.container) : t.container, this.container.innerHTML = t.template || this.template;
                                        var n = this.container.querySelectorAll("select"),
                                            r = this.accounts,
                                            i = this.properties || [{
                                                name: "(Empty)",
                                                id: ""
                                            }],
                                            a = this.views || [{
                                                name: "(Empty)",
                                                id: ""
                                            }];
                                        e(n[0], r, this.account.id), e(n[1], i, this.property && this.property.id), e(n[2], a, this.view && this.view.id), n[0].onchange = this.onUserSelect_.bind(this, n[0], "accountId"), n[1].onchange = this.onUserSelect_.bind(this, n[1], "propertyId"), n[2].onchange = this.onUserSelect_.bind(this, n[2], "viewId")
                                    },
                                    onChange_: function() {
                                        var e = {
                                            account: this.account,
                                            property: this.property,
                                            view: this.view,
                                            ids: this.view && "ga:" + this.view.id
                                        };
                                        this.changed_ && (this.changed_.account && this.emit("accountChange", e), this.changed_.property && this.emit("propertyChange", e), this.changed_.view && (this.emit("viewChange", e), this.emit("idsChange", e), this.emit("change", e.ids))), this.changed_ = null
                                    },
                                    onUserSelect_: function(e, t) {
                                        var n = {};
                                        n[t] = e.value, this.set(n), this.execute()
                                    },
                                    template: '<div class="ViewSelector2">  <div class="ViewSelector2-item">    <label>Account</label>    <select class="FormField"></select>  </div>  <div class="ViewSelector2-item">    <label>Property</label>    <select class="FormField"></select>  </div>  <div class="ViewSelector2-item">    <label>View</label>    <select class="FormField"></select>  </div></div>'
                                })
                            })
                        }, {
                            "javascript-api-utils/lib/account-summaries": 3
                        }],
                        2: [function(e, t, n) {
                            function r(e) {
                                this.accounts_ = e, this.webProperties_ = [], this.profiles_ = [], this.accountsById_ = {}, this.webPropertiesById_ = this.propertiesById_ = {}, this.profilesById_ = this.viewsById_ = {};
                                for (var t, n = 0; t = this.accounts_[n]; n++)
                                    if (this.accountsById_[t.id] = {
                                            self: t
                                        }, t.webProperties) {
                                        i(t, "webProperties", "properties");
                                        for (var r, a = 0; r = t.webProperties[a]; a++)
                                            if (this.webProperties_.push(r), this.webPropertiesById_[r.id] = {
                                                    self: r,
                                                    parent: t
                                                }, r.profiles) {
                                                i(r, "profiles", "views");
                                                for (var o, s = 0; o = r.profiles[s]; s++) this.profiles_.push(o), this.profilesById_[o.id] = {
                                                    self: o,
                                                    parent: r,
                                                    grandParent: t
                                                }
                                            }
                                    }
                            }

                            function i(e, t, n) {
                                Object.defineProperty ? Object.defineProperty(e, n, {
                                    get: function() {
                                        return e[t]
                                    }
                                }) : e[n] = e[t]
                            }
                            r.prototype.all = function() {
                                return this.accounts_
                            }, i(r.prototype, "all", "allAccounts"), r.prototype.allWebProperties = function() {
                                return this.webProperties_
                            }, i(r.prototype, "allWebProperties", "allProperties"), r.prototype.allProfiles = function() {
                                return this.profiles_
                            }, i(r.prototype, "allProfiles", "allViews"), r.prototype.get = function(e) {
                                if (!!e.accountId + !!e.webPropertyId + !!e.propertyId + !!e.profileId + !!e.viewId > 1) throw new Error('get() only accepts an object with a single property: either "accountId", "webPropertyId", "propertyId", "profileId" or "viewId"');
                                return this.getProfile(e.profileId || e.viewId) || this.getWebProperty(e.webPropertyId || e.propertyId) || this.getAccount(e.accountId)
                            }, r.prototype.getAccount = function(e) {
                                return this.accountsById_[e] && this.accountsById_[e].self
                            }, r.prototype.getWebProperty = function(e) {
                                return this.webPropertiesById_[e] && this.webPropertiesById_[e].self
                            }, i(r.prototype, "getWebProperty", "getProperty"), r.prototype.getProfile = function(e) {
                                return this.profilesById_[e] && this.profilesById_[e].self
                            }, i(r.prototype, "getProfile", "getView"), r.prototype.getAccountByProfileId = function(e) {
                                return this.profilesById_[e] && this.profilesById_[e].grandParent
                            }, i(r.prototype, "getAccountByProfileId", "getAccountByViewId"), r.prototype.getWebPropertyByProfileId = function(e) {
                                return this.profilesById_[e] && this.profilesById_[e].parent
                            }, i(r.prototype, "getWebPropertyByProfileId", "getPropertyByViewId"), r.prototype.getAccountByWebPropertyId = function(e) {
                                return this.webPropertiesById_[e] && this.webPropertiesById_[e].parent
                            }, i(r.prototype, "getAccountByWebPropertyId", "getAccountByPropertyId"), t.exports = r
                        }, {}],
                        3: [function(e, t, n) {
                            function r() {
                                var e = gapi.client.request({
                                    path: o
                                }).then(function(e) {
                                    return e
                                });
                                return new e.constructor(function(t, n) {
                                    var r = [];
                                    e.then(function i(e) {
                                        var s = e.result;
                                        s.items ? r = r.concat(s.items) : n(new Error("You do not have any Google Analytics accounts. Go to http://google.com/analytics to sign up.")), s.startIndex + s.itemsPerPage <= s.totalResults ? gapi.client.request({
                                            path: o,
                                            params: {
                                                "start-index": s.startIndex + s.itemsPerPage
                                            }
                                        }).then(i) : t(new a(r))
                                    }).then(null, n)
                                })
                            }
                            var i, a = e("./account-summaries"),
                                o = "/analytics/v3/management/accountSummaries";
                            t.exports = {
                                get: function(e) {
                                    return e && (i = null), i || (i = r())
                                }
                            }
                        }, {
                            "./account-summaries": 2
                        }]
                    }, {}, [1])
                }

                function o() {
                    gapi.analytics.ready(function() {
                        gapi.analytics.createComponent("ActiveUsers", {
                            initialize: function() {
                                this.activeUsers = 0
                            },
                            execute: function() {
                                this.polling_ && this.stop(), this.render_(), gapi.analytics.auth.isAuthorized() ? this.getActiveUsers_() : gapi.analytics.auth.once("success", this.getActiveUsers_.bind(this))
                            },
                            stop: function() {
                                clearTimeout(this.timeout_), this.polling_ = !1, this.emit("stop", {
                                    activeUsers: this.activeUsers
                                })
                            },
                            render_: function() {
                                var e = this.get();
                                this.container = "string" == typeof e.container ? document.getElementById(e.container) : e.container, this.container.innerHTML = e.template || this.template, this.container.querySelector("b").innerHTML = this.activeUsers
                            },
                            getActiveUsers_: function() {
                                var e = this.get(),
                                    t = 1e3 * (e.pollingInterval || 5);
                                if (isNaN(t) || 5e3 > t) throw new Error("Frequency must be 5 seconds or more.");
                                this.polling_ = !0, gapi.client.analytics.data.realtime.get({
                                    ids: e.ids,
                                    metrics: "rt:activeUsers"
                                }).execute(function(e) {
                                    var n = e.totalResults ? +e.rows[0][0] : 0,
                                        r = this.activeUsers;
                                    this.emit("success", {
                                        activeUsers: this.activeUsers
                                    }), n != r && (this.activeUsers = n, this.onChange_(n - r)), (this.polling_ = !0) && (this.timeout_ = setTimeout(this.getActiveUsers_.bind(this), t))
                                }.bind(this))
                            },
                            onChange_: function(e) {
                                var t = this.container.querySelector("b");
                                t && (t.innerHTML = this.activeUsers), this.emit("change", {
                                    activeUsers: this.activeUsers,
                                    delta: e
                                }), e > 0 ? this.emit("increase", {
                                    activeUsers: this.activeUsers,
                                    delta: e
                                }) : this.emit("decrease", {
                                    activeUsers: this.activeUsers,
                                    delta: e
                                })
                            },
                            template: '<div class="ActiveUsers">Active Users: <b class="ActiveUsers-value"></b></div>'
                        })
                    })
                }
                t.loadScript(e.baseUrl + "assets/js/chart.min.js"), t.loadScript(e.baseUrl + "assets/js/moment.min.js"), e.analyticsLoaded ? (o(), a(), i(), n()) : (! function(e, t, n, r, i, a) {
                    r = e.gapi || (e.gapi = {}), r.analytics = {
                        q: [],
                        ready: function(e) {
                            this.q.push(e)
                        }
                    }, i = t.createElement(n), a = t.getElementsByTagName(n)[0], i.src = "https://apis.google.com/js/platform.js", a.parentNode.insertBefore(i, a), i.onload = function() {
                        r.load("analytics")
                    }
                }(window, document, "script"), gapi.analytics.ready(function() {
                    o(), a(), r(), i()
                }))
            }
        }
    }]), angular.module("app").directive("showAdminKeys", ["utils", function(e) {
        return {
            restrict: "A",
            compile: function(t) {
                t.on("click", function(n) {
                    if (e.isDemo) alertify.delay(2e3).error("Sorry, you can't do that on demo site.");
                    else {
                        for (var r = document.querySelectorAll('#keys [type="password"]'), i = 0; i < r.length; i++) r[i].setAttribute("type", "text");
                        t.hide()
                    }
                })
            }
        }
    }]), angular.module("app").factory("sass", ["$rootScope", function(e) {
        var t = {
            compiler: !1,
            importsFile: !1,
            applyTransforms: function(e, t) {
                var n = e || $scope.variable.value,
                    r = n.indexOf("darken") > -1,
                    i = n.indexOf("lighten") > -1;
                if (r || i) {
                    var a = n.match(/\((.+?),.*?([0-9]+)%\)/),
                        o = a[1],
                        s = n.match(/,.*?([0-9]+)%\)/)[2];
                    return o.indexOf("$") > -1 && (o = this.findVariableValue(t, o)), r ? tinycolor(o).darken(s).toString() : tinycolor(o).lighten(s).toString()
                }
                return n
            },
            findVariableValue: function(e, t) {
                t = t.replace("$", "");
                for (var n in e)
                    for (var r = 0; r < e[n].length; r++) {
                        var i = e[n][r];
                        if (i.name === t) return -1 === i.value.indexOf("$") ? i.value : this.findVariableValue(e, i.value)
                    }
            },
            compile: function(e) {
                this.compiler.compile(this.importsFile, function(n) {
                    e(n), t.removeCustomCssFromCompiler()
                })
            },
            addCustomCssToCompiler: function(e) {
                this.compiler.writeFile("custom-css.scss", e), this.importsFile += '@import "custom-css.scss";'
            },
            removeCustomCssFromCompiler: function() {
                this.compiler.removeFile("custom-css.scss"), this.importsFile = this.importsFile.replace('@import "custom-css.scss";', "")
            },
            initCompiler: function(t) {
                Sass.setWorkerUrl(e.baseUrl + "assets/js/sass.worker.js"), this.compiler = new Sass, this.compiler.writeFile(t.imports), this.importsFile = t.main
            }
        };
        return t
    }]), angular.module("app").controller("LoginController", ["$rootScope", "$scope", "$http", "$state", "users", "utils", "modal", function(e, t, n, r, i, a, o) {
        t.registrationEnabled = a.getSetting("enableRegistration", !0), t.credentials = {
            remember: !0
        }, t.passResetCredentials = {
            email: ""
        }, t.resetPasswordError = "", t.resetPassword = function() {
            a.showLoader(!0), n.post(e.baseUrl + "password/email", t.passResetCredentials).success(function(e) {
                alertify.delay(2e3).success(e), t.resetPasswordError = "", t.closePasswordResetModal()
            }).error(function(e) {
                t.resetPasswordError = e.email || e
            })["finally"](function() {
                a.hideLoader()
            })
        }, t.submit = function() {
            return t.loading = !0, i.login(t.credentials).success(function() {
                t.credentials = {}, a.toState(e.previousState.name || "songs", e.previousState.params)
            }).error(function(e) {
                t.errors = e
            })["finally"](function() {
                t.loading = !1
            })
        }, t.showPasswordResetModal = function() {
            o.show("reset-password", t)
        }, t.closePasswordResetModal = function() {
            t.passResetCredentials = {}, o.hide()
        }
    }]), angular.module("app").directive("authErrors", function() {
        return {
            restrict: "E",
            template: '<ul class="errors"></ul>',
            replace: !0,
            link: function(e, t) {
                document.querySelector("form"), e.$watch("errors", function(e) {
                    if (e) {
                        t.html("");
                        for (var n in e) t.append("<li>" + e[n] + "</li>")
                    }
                })
            }
        }
    }), angular.module("app").controller("RegisterController", ["$rootScope", "$scope", "$state", "users", "utils", function(e, t, n, r, i) {
        t.credentials = {}, t.submit = function() {
            return t.loading = !0, r.register(t.credentials).success(function() {
                i.getSetting("require_email_confirmation", !1) ? i.notify(i.trans("confirmEmailMessage"), "success", 6e3) : (t.credentials = {}, n.go("songs"))
            }).error(function(e) {
                t.errors = e
            })["finally"](function() {
                t.loading = !1
            })
        }
    }]), angular.module("app").controller("SocialLoginController", ["$rootScope", "$scope", "$http", "$state", "$translate", "users", "modal", "utils", function(e, t, n, r, i, a, o, s) {
        t.credentials = {}, t.loginWith = function(e) {
            var n = t.baseUrl + "auth/social/" + e,
                r = screen.width / 2 - 300,
                i = screen.height / 2 - 250;
            window.$tempScope = t, window.open(n, "Authenticate Account", "menubar=0, location=0, toolbar=0, titlebar=0, status=0, width=600, height=500, left=" + r + ", top=" + i)
        }, t.socialLoginCallback = function(e) {
            window.$tempScope = void 0, e ? (a.current = e, r.go(s.previousState || "songs")) : t.requestUserEmail()
        }, t.socialLoginCallbackError = function() {
            $mdToast.show($mdToast.simple({
                position: "bottom right"
            }).content(i.instant("genericSocialError")))
        }, t.createAndLoginUser = function() {
            n.post(e.baseUrl + "auth/social/request-email-callback", {
                email: t.credentials.email
            }).success(function(e) {
                t.goToDashboard(e)
            }).error(function(e) {
                1 === e.code && (t.closeModal(), t.requestUserPassword())
            })
        }, t.connectAccounts = function() {
            n.post(e.baseUrl + "auth/social/connect-accounts", {
                password: t.credentials.password
            }).success(function(e) {
                t.goToDashboard(e)
            }).error(function(e) {
                t.errorMessage = e
            })
        }, t.requestUserPassword = function() {
            o.show("request-password", t)
        }, t.requestUserEmail = function() {
            o.show("request-email", t)
        }, t.closeModal = function() {
            o.hide()
        }, t.goToDashboard = function(n) {
            a.current = n, e.tempUser = void 0, t.credentials = {}, t.errorMessage = void 0, t.closeModal(), r.go("songs")
        }
    }]), angular.module("app").factory("users", ["$http", "$rootScope", "$state", "utils", "modal", "player", function(e, t, n, r, i, a) {
        var o = {
            lastErrors: [],
            current: !1,
            accountSettings: {},
            changePasswordModel: {
                oldPassword: ""
            },
            follow: function(t) {
                return e.post("users/" + t.id + "/follow").success(function() {
                    o.current && o.current.followed_users.push(t)
                })
            },
            unfollow: function(t) {
                return e.post("users/" + t.id + "/unfollow").success(function() {
                    for (var e = 0; e < o.current.followed_users.length; e++) o.current.followed_users[e].id == t.id && o.current.followed_users.splice(e, 1)
                })
            },
            loadCurrentUsersFollows: function() {
                return this.current && !this.current.followers ? e.get("users/" + this.current.id + "/followed_users").success(function(e) {
                    o.current.followed_users = e
                }) : void 0
            },
            paginate: function(t) {
                return e.get("users", {
                    params: t
                })
            },
            login: function(t) {
                return e.post("auth/login", t).success(function(e) {
                    o.assignCurrentUser(e)
                })
            },
            register: function(t) {
                return e.post("auth/register", t).success(function(e) {
                    o.current || r.getSetting("require_email_confirmation", !1) || o.assignCurrentUser(e)
                })
            },
            assignCurrentUser: function(e) {
                e && (this.current = e, this.accountSettings.username = this.getUsername(), this.accountSettings.first_name = e.first_name, this.accountSettings.last_name = e.last_name, this.accountSettings.gender = e.gender, t.$emit("user.newCurrent"))
            },
            "delete": function(t) {
                return angular.isArray(t) ? e.post("users", {
                    users: t
                }) : e["delete"]("users/" + t.id)
            },
            changePassword: function() {
                e.post(t.baseUrl + "password/change", this.changePasswordModel).success(function(e) {
                    alertify.delay(2e3).success(e), o.closeModal()
                }).error(function(e) {
                    o.lastErrors = [], angular.forEach(e, function(e) {
                        angular.isArray(e) && (e = e[0]), o.lastErrors.push(e)
                    })
                })
            },
            logout: function() {
                return e.post("auth/logout").success(function() {
                    a.stop(), o.current = !1, n.go("login"), t.$emit("user.loggedOut"), alertify.delay(2e3).success(r.trans("logOutSuccess"))
                })
            },
            getUsername: function(e) {
                return e || (e = this.current), e && e.email ? e.username ? e.username : e.email.split("@")[0] : void 0
            },
            getNameOrEmail: function(e) {
                var t = "";
                return e || (e = this.current), e ? (e.first_name && (t = e.first_name), t && e.last_name && (t += " " + e.last_name), t ? t : e.email.split("@")[0]) : !1
            },
            getAvatar: function(e) {
                if (e || (e = this.current), e.avatar_url) {
                    if (-1 === e.avatar_url.indexOf("//")) {
                        var n = "/" == e.avatar_url.charAt(0) ? e.avatar_url.substr(1) : e.avatar_url;
                        return t.baseUrl + n
                    }
                    return e.avatar_url
                }
                return "male" !== e.gender && e.gender ? t.baseUrl + "assets/images/avatars/female.png" : t.baseUrl + "assets/images/avatars/male.png"
            },
            updateAccountSettings: function(n, i) {
                var a = n || this.accountSettings,
                    s = i || this.current.id;
                return e.put(t.baseUrl + "users/" + s, a).success(function(e) {
                    n || (alertify.delay(2e3).success(r.trans("profileUpdateSuccess")), o.closeModal(), o.current = e)
                }).error(function(e) {
                    o.lastErrors.push(r.resolveErrors(e))
                })
            },
            removeAvatar: function() {
                return e["delete"](t.baseUrl + "users/" + this.current.id + "/avatar").success(function(e) {
                    o.current.avatar_url = "", alertify.delay(2e3).success(e)
                })
            },
            showAccountSettingsModal: function(n, r) {
                var a = t.$new(!0);
                a.users = o, a.activeTab = r || "settings", a.upload = function(t) {
                    e.post("users/" + o.current.id + "/avatar", t, {
                        transformRequest: angular.identity,
                        headers: {
                            "Content-Type": void 0
                        }
                    }).success(function(e) {
                        o.current.avatar_url = e
                    }).error(function(e) {
                        o.lastErrors = [], angular.forEach(e, function(e) {
                            angular.isArray(e) && (e = e[0]), o.lastErrors.push(e)
                        })
                    })
                }, i.show("account-settings", a)
            },
            closeModal: function() {
                i.hide(), this.changePasswordModel = {}
            }
        };
        return o
    }]), angular.module("app").directive("adContainer", ["utils", function(utils) {
        return {
            restrict: "C",
            replace: !0,
            priority: 0,
            link: function($scope, el) {
                setTimeout(function() {
                    var html = el.html();
                    el.html("");
                    var id = utils.randomString(5);
                    el.attr("id", id);
                    var pattern = /<script\b[^>]*>([\s\S]*?)<\/script>/g,
                        content, adHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim();
                    for (adHtml && el.append(adHtml); content = pattern.exec(html);)
                        if (content[1]) {
                            var toEval = content[1].replace("document.write", "angular.element(document.getElementById('" + id + "')).append");
                            eval(toEval)
                        }
                    for (var pattern2 = /<script.*?src="(.*?)"/g, match; match = pattern2.exec(html);) match[1] && utils.loadScript(match[1]);
                    setTimeout(function() {
                        el.css("display", "flex")
                    }, 600)
                })
            }
        }
    }]), angular.module("app").directive("dropdown", function() {
        function e(e) {
            for (var t = document.querySelectorAll(".dropdown-menu"), n = 0; n < t.length; n++) e !== t[n] && t[n].classList.add("hidden")
        }
        return {
            restrict: "A",
            link: function(t, n) {
                var r = n[0].querySelector(".dropdown-menu");
                n.on("click", function() {
                    e(r), r.classList.toggle("hidden")
                })
            }
        }
    }), angular.module("app").directive("fileUpload", ["$http", "$parse", "utils", function(e, t, n) {
        return {
            restrict: "A",
            link: function(e, r, i) {
                r.on("click", function() {
                    if (!r.hasClass("disabled")) {
                        var a = angular.element('<input type="file" id="file-upload-input" style="visibility: hidden;" />');
                        document.body.appendChild(a[0]), a.on("change", function() {
                            var r = new FormData;
                            r.append("file", this.files[0]);
                            var a = t(i.fileUpload)(e);
                            a(r, t(i.params)(), this.files[0]), n.removeNode("#file-upload-input")
                        }), a[0].click()
                    }
                })
            }
        }
    }]), angular.module("app").directive("globalDropdownClose", function() {
        function e() {
            for (var e = document.querySelectorAll(".dropdown-menu"), t = 0; t < e.length; t++) e[t].classList.add("hidden")
        }
        return {
            restrict: "A",
            link: function(t, n) {
                n.on("click", function(t) {
                    t.target.classList.contains("dropdown-trigger") || t.target.classList.contains("dropdown-item") || t.target.classList.contains("icon-sort-alt-up") || e()
                })
            }
        }
    }), angular.module("app").directive("infiniteScroll", ["utils", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                var i = parseInt(r.threshold) || 0,
                    a = n[0],
                    o = e.throttle(function() {
                        !t.disableInfinateScroll && a.scrollTop + a.offsetHeight >= a.scrollHeight - i && t.$apply(r.infiniteScroll)
                    }, 300);
                n.bind("scroll", o)
            }
        }
    }]), angular.module("app").directive("modalBackdrop", ["modal", function(e) {
        return {
            restrict: "A",
            link: function(t, n) {
                n.on("click", function(t) {
                    e.hide()
                })
            }
        }
    }]), angular.module("app").directive("onEnter", function() {
        return function(e, t, n) {
            t.bind("keydown keypress", function(t) {
                13 === t.which && (e.$apply(n.onEnter), t.preventDefault())
            })
        }
    }), angular.module("app").directive("playingIcon", function() {
        return {
            restrict: "E",
            template: '<div class="playing-icon-container"><div class="playing-icon"><div class="one"></div><div class="two"></div><div class="three"></div></div></div>',
            replace: !0
        }
    }), angular.module("app").directive("prettyScrollbar", function() {
        return {
            restrict: "A",
            link: function(e, t) {
                Ps.initialize(t[0]), setTimeout(function() {
                    t.scrollTop() || (t.scrollTop(t.scrollTop() + 1), t.scrollTop(t.scrollTop() - 1))
                }, 350)
            }
        }
    }), angular.module("app").directive("sidebarToggler", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                t.on("click", function() {
                    if (n.sidebarToggler) var e = document.querySelector(n.sidebarToggler);
                    else var e = document.getElementsByClassName("togglable-sidebar")[0];
                    e.classList.toggle("closed")
                })
            }
        }
    }), angular.module("app").directive("sortableTableHeader", ["$timeout", "utils", function(e, t) {
        return {
            restrict: "A",
            link: function(n, r, i) {
                n.params || (n.params = {}), i.sortableTableHeader && e(function() {
                    n.params.sort = i.sortableTableHeader
                }), r.on("click", function(e) {
                    var r = t.closest(e.target, ".flex-table-row-item");
                    if (r) {
                        var i = r.getAttribute("sort-field");
                        i && n.$apply(function() {
                            n.params.sort === i ? (n.params.sort = "-" + i, t.removeNode(".sort-table-angle-icon"), angular.element(r).append('<i class="icon icon-angle-down sort-table-angle-icon"></i>')) : (n.params.sort = i, t.removeNode(".sort-table-angle-icon"), angular.element(r).append('<i class="icon icon-angle-up sort-table-angle-icon"></i>'))
                        })
                    }
                })
            }
        }
    }]), angular.module("app").factory("clipboard", ["$translate", function(e) {
        var t = {
            copy: function(t) {
                var n = document.createElement("input");
                n.value = t, document.body.appendChild(n), n.select();
                try {
                    var r = document.execCommand("copy")
                } catch (i) {
                    var r = !1
                }
                document.body.removeChild(n), r ? alertify.delay(2e3).success(e.instant("linkCopySuccess")) : alertify.delay(2e3).error(e.instant("linkCopyFail"))
            }
        };
        return t
    }]), angular.module("app").factory("modal", ["$rootScope", "$compile", "$templateRequest", function(e, t, n) {
        return modal = {
            openModal: !1,
            show: function(e, r) {
                n("assets/views/modals/" + e + ".html").then(function(e) {
                    modal.openModal = document.body.insertBefore(t(e)(r)[0], null), modal.openModal.classList.remove("hidden"), requestAnimationFrame(function() {
                        modal.openModal.querySelector(".modal-content").classList.add("scale-in")
                    });
                    var n = modal.openModal.querySelector('input[type="text"]');
                    setTimeout(function() {
                        n && n.focus()
                    }, 300)
                })
            },
            hide: function() {
                this.openModal && (this.openModal.querySelector(".modal-content").classList.remove("scale-in"), setTimeout(function() {
                    modal.openModal.classList.add("hidden"), modal.openModal.parentNode.removeChild(modal.openModal), modal.openModal = !1
                }, 200))
            },
            showErrors: function(e) {
                this.openModal = document.getElementById("playlist-name-modal");
                for (var t in e) this.openModal.querySelector(".modal-error").textContent = e[t]
            },
            confirm: function(n) {
                var r = '<div class="modal" id="confirm-modal"><div class="backdrop" modal-backdrop></div><div class="modal-content"><div class="modal-header"><h1>{{:: \'' + n.title + '\' | translate }}</h1><div ng-click="closeModal()" class="close-modal-icon"><i class="icon icon-cancel"></i></div></div><p>{{:: \'' + n.content + "' | translate }}</p>" + (n.subcontent ? "<strong>{{:: '" + n.subcontent + "' | translate }}</strong>" : "") + '<div class="buttons"><button ng-click="closeModal()" class="cancel">{{:: \'cancel\' | translate }}</button><button ng-click="confirm()" class="primary">{{:: \'' + n.ok + "' | translate }}</button></div></div></div>",
                    i = e.$new(!0);
                i.closeModal = n.onClose, i.confirm = function() {
                    n.onConfirm(n.params), n.onClose()
                }, this.openModal = document.body.insertBefore(t(r)(i)[0], null), requestAnimationFrame(function() {
                    modal.openModal.querySelector(".modal-content").classList.add("scale-in")
                })
            }
        }, modal
    }]), angular.module("app").factory("utils", ["$rootScope", "$translate", "$state", "$sce", "$http", function(e, t, n, r, i) {
        return {
            settings: {},
            albumUrl: function(t) {
                if (t) {
                    t.album && (t = t.album);
                    var n = e.baseUrl + (this.getSetting("enablePushState") ? "" : "#/") + "album/" + t.id + "/";
                    return t.artist_id && t.artist && (n += this.encodeUrlParam(t.artist.name) + "/"), n += this.encodeUrlParam(t.name)
                }
            },
            artistUrl: function(t) {
                if (t && (angular.isString(t) && (t = {
                        name: t
                    }), t.artist && (t = t.artist), "Various Artists" !== t.name)) {
                    var n = e.baseUrl + (this.getSetting("enablePushState") ? "" : "#/") + "artist/";
                    return n + (t.id ? t.id + "/" : "") + this.encodeUrlParam(t.name)
                }
            },
            trackUrl: function(t) {
                if (t) {
                    var n = e.baseUrl + (this.getSetting("enablePushState") ? "" : "#/") + "track/";
                    return n + t.id
                }
            },
            removeNode: function(e) {
                var t = document.querySelector(e);
                t && t.parentNode.removeChild(t)
            },
            closest: function(e, t) {
                var n;
                if (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function(e) {
                        return "function" == typeof document.body[e] ? (n = e, !0) : !1
                    }), e[n](t)) return e;
                for (; null !== e;) {
                    if (parent = e.parentElement, null !== parent && parent[n](t)) return parent;
                    e = parent
                }
                return null
            },
            notify: function(e, t, n) {
                t || (t = "success"), n || (n = 2e3), angular.isString(e) || angular.forEach(e, function(t) {
                    e = t
                }), alertify.delay(n)[t](e)
            },
            uploadFileAndData: function(e, t, n, r) {
                return r || (r = "post"), i[r](e, t, {
                    withCredentials: !1,
                    headers: {
                        "Content-Type": void 0
                    },
                    transformRequest: angular.identity,
                    params: n
                })
            },
            showLoader: function(e) {
                document.body.classList.add("loading"), e && document.body.classList.add("loading-with-overlay"), document.querySelector("#splash").style.display = "flex"
            },
            hideLoader: function() {
                document.body.classList.remove("loading"), document.body.classList.remove("loading-with-overlay"), document.querySelector("#splash").style.display = "none"
            },
            img: function(t, n) {
                var r = e.baseUrl + "assets/images/" + n + "-no-image.png";
                if (!t) return r;
                if (angular.isArray(t)) {
                    var i = t.filter(function(e) {
                        return e
                    });
                    return i.length ? i[0] : r
                }
                return t
            },
            loadScript: function(e, t) {
                var n = e.replace(/^.*[\\\/]/, ""),
                    r = !1;
                if (!document.getElementById(n)) {
                    var i = document.createElement("script");
                    i.src = e, i.id = n, t && (i.onload = i.onreadystatechange = function() {
                        r || this.readyState && "complete" != this.readyState || (r = !0, t())
                    }), document.body.appendChild(i)
                }
            },
            resolveErrors: function(e) {
                var t = "";
                return angular.isString(e) ? e : (angular.forEach(e, function(e) {
                    return angular.isString(e) ? (t = e, !1) : (t = e[0], !1)
                }), t)
            },
            secondsToMSS: function(e) {
                e = Math.floor(e);
                var t = Math.floor(e / 60),
                    n = e - 60 * t + "";
                return 0 == n && (n = "00"), n.length < 2 && (n = "0" + n), t + ":" + n
            },
            truncate: function(e, t) {
                return e && e.length > t ? e.substring(0, t) + "..." : e
            },
            humanReadableNumber: function(e) {
                return e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e
            },
            getCurrentStateName: function() {
                return n.current.name
            },
            dashesToSpaces: function(e) {
                return e.split("-").join(" ")
            },
            randomString: function(e) {
                return e || (e = 15), Math.random().toString(36).substr(2, e)
            },
            capitalize: function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            isLastfmGenericImage: function(e) {
                return "http://img2-ak.lst.fm/i/u/341b4331113c45308c991fb6598d8784.png" === e
            },
            trustHtml: function(e) {
                return r.trustAsHtml(e)
            },
            getLogoUrl: function(t) {
                t || (t = "light");
                var n = this.getSetting("logo_url");
                return n ? e.baseUrl + "assets/images/custom_logo_light.png" : e.baseUrl + "assets/images/logo_" + t + ".png"
            },
            toState: function(e, t) {
                if (t)
                    for (var r in t) t[r] = this.encodeUrlParam(t[r]);
                return n.go(e, t)
            },
            encodeUrlParam: function(e) {
                return e && angular.isString(e) ? e.replace("%", "%25").replace("+", "%2B").replace(/ /g, "+").replace("#", "%23") : e
            },
            decodeUrlParam: function(e) {
                if (!e || !angular.isString(e)) return e;
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (t) {
                    return e
                }
            },
            stateIs: function(e) {
                angular.isArray(e) || (e = [e]);
                for (var t = 0; t < e.length; t++)
                    if (n.includes(e[t])) return !0
            },
            trans: function(e, n) {
                return t.instant(e, n)
            },
            baseUrl: function() {
                return e.baseUrl
            },
            throttle: function(e, t, n) {
                var r, i, a, o = null,
                    s = 0;
                n || (n = {});
                var l = function() {
                    s = n.leading === !1 ? 0 : Date.now(), o = null, a = e.apply(r, i), o || (r = i = null)
                };
                return function() {
                    var u = Date.now();
                    s || n.leading !== !1 || (s = u);
                    var c = t - (u - s);
                    return r = this, i = arguments, 0 >= c || c > t ? (o && (clearTimeout(o), o = null), s = u, a = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(l, c)), a
                }
            },
            getAllSettings: function() {
                return this.settings
            },
            getSetting: function(e, t) {
                if (e.indexOf("env") > -1) var n = this.settings.env[e.split(".")[1]];
                else var n = this.settings[e];
                return "undefined" != typeof n && n.trim() || (n = t), "1" === n || "0" === n ? parseInt(n) : n
            },
            setAllSettings: function(e) {
                angular.isObject(e) && (this.settings = e)
            }
        }
    }]), angular.module("app").controller("NewReleasesController", ["$rootScope", "$scope", "$http", "utils", function(e, t, n, r) {
        r.showLoader(), n.get("albums/latest-releases").success(function(n) {
            t.albums = n, r.hideLoader(), setTimeout(function() {
                e.$emit("lazyImg:refresh")
            })
        }), t.playAlbum = function(t) {
            e.autoplay = !0, r.toState("album", {
                artistName: t.artist.name,
                name: t.name,
                id: t.id
            })
        }
    }]), angular.module("app").controller("PopularGenresController", ["$rootScope", "$scope", "$http", "utils", function(e, t, n, r) {
        r.showLoader();
        var i = "genres",
            a = r.getSetting("homepageGenres");
        a && (i = i + "?names=" + a), n.get(i).success(function(n) {
            t.genres = n, r.hideLoader(), setTimeout(function() {
                e.$emit("lazyImg:refresh")
            })
        }).error(function() {
            r.toState("404"), r.hideLoader()
        }), t.playArtist = function(t) {
            e.autoplay = !0, r.toState("artist", {
                name: t.name,
                id: t.id
            })
        }
    }]), angular.module("app").controller("TopAlbumsController", ["$rootScope", "$scope", "$http", "utils", function(e, t, n, r) {
        r.showLoader(), n.get("albums/top").success(function(n) {
            t.topAlbums = n, r.hideLoader(), setTimeout(function() {
                e.$emit("lazyImg:refresh")
            })
        }), t.playAlbum = function(t) {
            e.autoplay = !0, r.toState("album", {
                artistName: t.artist.name,
                name: t.name,
                id: t.id
            })
        }
    }]), angular.module("app").controller("TopSongsController", ["$rootScope", "$scope", "$http", "utils", function(e, t, n, r) {
        r.showLoader(), n.get("tracks/top").success(function(e) {
            e.forEach(function(e) {
                e.duration = r.secondsToMSS(e.duration / 1e3)
            }), t.topSongs = e, r.hideLoader()
        })
    }]), angular.module("app").directive("leftPanel", ["$rootScope", "player", "search", "users", function(e, t, n, r) {
        return {
            restrict: "E",
            templateUrl: "assets/views/directives/left-panel.html",
            replace: !0,
            scope: !0,
            link: function(i, a) {
                var o = a.find("input");
                i.player = t, i.search = n, i.users = r, o.on("focus", function() {
                    (n.query || n.results.length) && n.showPanel()
                }), e.isPhone && e.$on("$stateChangeStart", function() {
                    a.addClass("closed")
                })
            }
        }
    }]), angular.module("app").value("queuePanelStatus", {
        open: !0
    }).directive("rightPanel", ["$rootScope", "player", "queuePanelStatus", "localStorage", "utils", function(e, t, n, r, i) {
        return {
            restrict: "E",
            templateUrl: "assets/views/directives/right-panel.html",
            replace: !0,
            link: function(a) {
                n.open = document.body.clientWidth <= 1550 || i.getSetting("hide_queue") ? !1 : r.get("queuePanelOpen", !0), a.player = t, a.queuePanelStatus = n, a.$watchCollection("player.queue", function(t) {
                    t && t.length && setTimeout(function() {
                        e.$emit("lazyImg:refresh")
                    })
                })
            }
        }
    }]), angular.module("app").controller("ExternalPlayerControlsController", ["$scope", "player", "userLibrary", "utils", "users", function(e, t, n, r, i) {
        e.playTrack = function(n) {
            e.trackIsPlaying(n) ? t.pause() : e.trackIsLoaded(n) ? t.play() : t.loadTrack(n, !0)
        }, e.loadQueueAndPlayTrack = function(n, r, i) {
            i || (i = e.sortedTracks), e.trackIsPlaying(n) ? t.pause() : e.trackIsLoaded(n) ? t.play() : t.loadQueue(i, !0, r)
        }, e.trackSaved = function(e) {
            return n.has(e)
        }, e.trackIsPlaying = function(n) {
            return e.trackIsLoaded(n) && t.isPlaying
        }, e.trackIsLoaded = function(e) {
            return e.id ? t.currentTrack && t.currentTrack.id == e.id : t.currentTrack && t.currentTrack.name === e.name
        }, e.addTrack = function(e) {
            i.current || (t.pause(), r.toState("login")), n.addTracks(e)
        }, e.removeTrack = function(e) {
            i.current || r.toState("login"), n.removeTracks(e)
        }
    }]), angular.module("app").directive("lyricsContainer", ["player", function(e) {
        function t(e) {
            return e.target.classList.contains("backdrop") || e.target.classList.contains("close-lyrics-icon") || e.target.parentNode.classList.contains("close-lyrics-icon")
        }
        return {
            restrict: "A",
            link: function(n, r) {
                r.on("click", function(r) {
                    t(r) && n.$apply(function() {
                        e.toggleLyrics()
                    })
                })
            }
        }
    }]), angular.module("app").directive("playerControls", ["$rootScope", "$timeout", "player", "utils", "queuePanelStatus", "localStorage", function(e, t, n, r, i, a) {
        function o(t) {
            setTimeout(function() {
                g();
                var n = r.throttle(function() {
                    g()
                }, 300);
                angular.element(window).bind("resize", n), e.$on("player.loaded", function() {
                    if (!$) {
                        $ = !0;
                        var n = new Hammer(t[0]);
                        n.on("tap", l), m(), e.$on("player.trackLoadingStarted", function() {
                            f(!0)
                        }), e.$on("player.trackChanged", function() {
                            s(), d()
                        }), e.$on("player.trackStarted", function() {
                            c()
                        }), e.$on("player.trackPaused", function() {
                            u()
                        }), e.$on("player.trackStopped", function() {
                            f(!0)
                        })
                    }
                })
            }, 0)
        }

        function s() {
            var e = n.getDuration();
            e ? y.totalTime.textContent = r.secondsToMSS(e) : setTimeout(function() {
                s()
            }, 150)
        }

        function l(t) {
            t.target.classList.contains("toggle-play") ? e.$apply(function() {
                n.isPlaying ? u() : c()
            }) : t.target.classList.contains("next") ? e.$apply(function() {
                f(!0), n.playNext()
            }) : t.target.classList.contains("prev") ? e.$apply(function() {
                f(!0), n.playPrevious()
            }) : t.target.classList.contains("toggle-queue") ? (e.$apply(function() {
                i.open = !i.open
            }), setTimeout(function() {
                e.$emit("lazyImg:refresh")
            }, 310), a.set("queuePanelOpen", i.open)) : t.target.classList.contains("repeat") || t.target.parentNode.classList.contains("repeat") ? e.$apply(function() {
                n.toggleRepeat()
            }) : t.target.classList.contains("shuffle") ? e.$apply(function() {
                n.toggleShuffle()
            }) : t.target.classList.contains("lyrics") ? e.$apply(function() {
                n.toggleLyrics()
            }) : t.target.classList.contains("toggle-video") && e.$apply(function() {
                n.toggleVideo()
            })
        }

        function u() {
            n.pause(), f()
        }

        function c() {
            n.play(), d()
        }

        function d() {
            f(), v = setInterval(function() {
                var e = n.getCurrentTime() / n.getDuration() * 100;
                isNaN(e) && (e = 0), 0 >= e || (y.elapsed.style.width = e + "%", y.handle.style.left = e - y.handlePercent + "%", y.elapsedTime.textContent = r.secondsToMSS(n.getCurrentTime()))
            }, 120)
        }

        function f(e) {
            v && (clearInterval(v), v = !1, e && (y.elapsed.style.width = 0, y.handle.style.left = 0, y.elapsedTime.textContent = "0:00"))
        }

        function p(i, a) {
            a = n.getDuration(), a ? (n.pause(), n.unMute(), n.seekTo(i * a, !0), "SoundCloud" === r.getSetting("player_provider", "Youtube") ? t(function() {
                c()
            }, 100) : e.$apply(function() {
                c()
            })) : (n.playerBackend.isPlaying() || (n.playerBackend.mute(), n.playerBackend.play()), a = n.getDuration(), setTimeout(function() {
                p(i, a)
            }, 100))
        }

        function h(e, t) {
            var n = (e - y.box.left) / y.box.width,
                r = 100 * n;
            y.elapsed.style.width = r + "%", y.handle.style.left = r - y.handlePercent + "%", t && p(n)
        }

        function m() {
            var e = new Hammer(y.bar);
            e.on("tap", function(e) {
                f(), h(e.pointers[0].pageX, !0), d()
            }), e.on("panstart", function(e) {
                f()
            }), e.on("panleft", function(e) {
                h(e.pointers[0].pageX)
            }), e.on("panright", function(e) {
                h(e.pointers[0].pageX)
            }), e.on("panend", function(e) {
                h(e.pointers[0].pageX, !0), d()
            })
        }

        function g() {
            y.bar = document.querySelector(".progress-bar"), y.box = y.bar.getBoundingClientRect(), y.elapsed = document.querySelector(".elapsed"), y.handle = document.querySelector(".handle"), y.elapsedTime = document.querySelector(".elapsed-time"), y.totalTime = document.querySelector(".track-length"), y.playIcon = document.querySelector(".toggle-play"), y.handlePercent = y.handle.getBoundingClientRect().width / y.box.width * 100 / 2
        }
        var v = !1,
            y = {},
            $ = !1;
        return {
            restrict: "E",
            templateUrl: "assets/views/directives/player-controls.html",
            replace: !0,
            compile: o
        }
    }]), angular.module("app").directive("videoContainer", ["player", "utils", function(e, t) {
        function n(e) {
            return e.target.classList.contains("backdrop") || e.target.classList.contains("close-lyrics-icon") || e.target.parentNode.classList.contains("close-lyrics-icon")
        }

        function r(e) {
            return e.target.classList.contains("toggle-fullscreen") || e.target.parentNode.classList.contains("toggle-fullscreen")
        }

        function i(e) {
            return e.target.classList.contains("modal-inner-container")
        }
        return {
            restrict: "A",
            link: function(a, o) {
                o.on("click", function(o) {
                    return n(o) && a.$apply(function() {
                        return e.toggleVideo()
                    }), r(o) && t.getSetting("show_fullscreen_button") && a.$apply(function() {
                        return e.goFullScreen()
                    }), i(o) ? e.disableFullScreen() : void 0
                })
            }
        }
    }]),
    function(e) {
        e.module("app").directive("volumeControls", ["$rootScope", "player", "localStorage", "utils", function(t, n, r, i) {
            function a() {
                c.volumeIcon.classList.remove("icon-volume-up-1"), c.volumeIcon.classList.add("icon-volume-off-1"), c.volumeLevel.style.width = 0, c.volumeHandle.style.left = 0, n.mute()
            }

            function o() {
                c.volumeIcon.classList.remove("icon-volume-off-1"), c.volumeIcon.classList.add("icon-volume-up-1"), n.unMute()
            }

            function s(e) {
                var s, l;
                t.isPhone && u(), e ? (l = (e - c.volumeBox.left) / c.volumeBox.width, s = 100 * l) : s = r.get("youtubify-volume", i.getSetting("default_player_volume", 30)) / 100 * 100, 0 >= s && !n.isMuted ? a() : s > 0 && 100 >= s && (c.volumeLevel.style.width = s + "%", c.volumeHandle.style.left = s - c.handlePercent + "%", n.isMuted && o(), n.setVolume(s))
            }

            function l() {
                var e = new Hammer(c.volumeBar),
                    t = new Hammer(c.volumeIcon);
                t.on("tap", function() {
                    n.isMuted ? s() : a()
                }), e.on("tap", function(e) {
                    s(e.pointers[0].pageX)
                }), e.on("panleft", function(e) {
                    s(e.pointers[0].pageX)
                }), e.on("panright", function(e) {
                    s(e.pointers[0].pageX)
                })
            }

            function u() {
                c.volumeLevel = document.querySelector(".volume-level"), c.volumeBar = document.querySelector(".volume-bar"), c.volumeBox = c.volumeBar.getBoundingClientRect(), c.volumeHandle = document.querySelector(".volume-handle"), c.volumeIcon = document.querySelector(".volume"), c.handlePercent = c.volumeHandle.getBoundingClientRect().width / c.volumeBox.width * 100 / 2
            }
            var c = {},
                d = !1;
            return {
                restrict: "A",
                compile: function() {
                    setTimeout(function() {
                        u();
                        var n = i.throttle(function() {
                            u()
                        }, 300);
                        e.element(window).bind("resize", n), t.$on("player.loaded", function() {
                            d || (d = !0, s(), l())
                        })
                    })
                }
            }
        }])
    }(angular), angular.module("app").factory("html5Player", ["$rootScope", "localStorage", "utils", function(e, t, n) {
        var r = {
            frontPlayer: !1,
            html5Player: !1,
            bootstrapped: !1,
            play: function() {
                this.html5Player.play()
            },
            pause: function() {
                this.html5Player.pause()
            },
            seekTo: function(e) {
                this.html5Player.currentTime = e
            },
            loadVideo: function(e, t, n) {
                this.html5Player.src = e.url, t && this.play()
            },
            cueVideo: function(e, t, n) {
                this.html5Player.src = e.url, t && this.play()
            },
            getDuration: function() {
                return this.html5Player.seekable.end(0)
            },
            getCurrentTime: function() {
                return this.html5Player.currentTime
            },
            getVolume: function() {
                return this.html5Player.volume / 1e3
            },
            setVolume: function(e) {
                this.html5Player.volume = e / 100
            },
            mute: function() {
                this.html5Player.muted = !0
            },
            unMute: function() {
                this.html5Player.muted = !1
            },
            isPlaying: function() {
                return this.html5Player.currentTime > 0 && !this.html5Player.paused && !this.html5Player.ended
            },
            init: function(i) {
                this.bootstrapped || (this.frontPlayer = i, this.bootstrapped = !0, this.html5Player = document.createElement("video"), this.html5Player.id = "html5-player", angular.element(document.getElementsByClassName("video-inner-container")[0]).append(this.html5Player), this.frontPlayer.setVolume(t.get("youtubify-volume", 17)), r.frontPlayer.loadLastPlayerTrack(), setTimeout(function() {
                    e.$emit("player.loaded")
                }), angular.element(this.html5Player).on("ended", function() {
                    e.$apply(function() {
                        r.frontPlayer.playNext()
                    })
                }).on("loadedmetadata", function() {
                    e.$apply(function() {
                        r.frontPlayer.loadingTrack = !1
                    })
                }).on("playing", function() {
                    setTimeout(function() {
                        e.$emit("player.trackChanged")
                    })
                }).on("error", function(t) {
                    var i = r.frontPlayer.isPlaying;
                    n.notify(n.trans("couldntFindTrack"), "error"), r.frontPlayer.playNext(), r.frontPlayer.loadingTrack = !1, i || e.$apply(function() {
                        r.frontPlayer.stop()
                    })
                }))
            }
        };
        return r
    }]), angular.module("app").factory("player", ["$rootScope", "$http", "$timeout", "$injector", "localStorage", "utils", "html5Player", function(e, t, n, r, i, a, o) {
        function s(e) {
            e.url ? (v.stop(), o.bootstraped || o.init(v), v.playerBackend = o, document.getElementById("player").classList.add("hidden"), document.getElementById("html5-player").classList.remove("hidden")) : v.playerBackend[v.playerService] || (v.stop(), v.playerBackend = r.get(v.playerService), document.getElementById("player").classList.remove("hidden"), document.getElementById("html5-player").classList.add("hidden"))
        }

        function l(e, t) {
            for (var n = e.slice(t), r = [], i = 0; i < n.length; i++) r.push(formatTrackForQueue(n[i]));
            v.queue = r
        }

        function u(e) {
            if (!angular.isString(e)) return v.queue[0];
            for (var t = 0; t < v.queue.length; t++)
                if (v.queue[t].name == e) return v.queue[t];
            return v.queue[0]
        }

        function c(e) {
            v.isReady ? e() : setTimeout(function() {
                c(e)
            }, 100)
        }

        function d() {
            v.originalQueue = v.queue.slice();
            for (var e, t, n = v.queue.length; 0 !== n;) t = Math.floor(Math.random() * n), n -= 1, e = v.queue[n], v.queue[n] = v.queue[t], v.queue[t] = e
        }

        function f() {
            v.queue = i.get("queue", []), v.currentQueIndex = i.get("queue-index"), v.currentTrack = i.get("last-track"), v.isRepeating = i.get("isRepeating", !1), v.isRepeatingOne = i.get("isRepeatingOne", !1), v.isShuffling = i.get("isShuffling", !1), v.isShuffling && d(), v.isReady = !0
        }

        function p(e) {
            var n = e.name.replace("/", " "),
                r = e.artist.replace("/", " ");
            return t.get("search-audio/" + r + "/" + n)
        }

        function h(e, t) {
            if ("lyrics" === e) var n = "lyrics";
            else var n = "player";
            if (document.querySelector("." + n + "-container").classList.remove("hidden"), "lyrics" === e) {
                var r = angular.element(document.querySelector("#lyrics-panel"));
                r.html(t), setTimeout(function() {
                    r.scrollTop(r.scrollTop() + 1), r.scrollTop(r.scrollTop() - 1)
                }, 350)
            }
            requestAnimationFrame(function() {
                document.querySelector("." + n + "-container .modal-inner-container").classList.add("out")
            })
        }

        function m(e) {
            if ("lyrics" === e) var t = "lyrics";
            else var t = "player";
            document.querySelector("." + t + "-container .modal-inner-container").classList.remove("out"), setTimeout(function() {
                document.querySelector("." + t + "-container").classList.add("hidden")
            }, 150)
        }

        function g() {
            a.stateIs("admin") || (document.title = v.currentTrack.artist + " - " + v.currentTrack.name + " - " + a.getSetting("siteName"))
        }
        var v = {
            playerBackend: !1,
            isReady: !1,
            isPlaying: !1,
            isMuted: !1,
            isRepeating: !1,
            isRepeatingOne: !1,
            originalQueue: [],
            IsShuffling: !1,
            queue: [],
            currentQueIndex: !1,
            currentTrack: !1,
            isShowingLyrics: !1,
            ignoreNext: !1,
            play: function() {
                v.currentTrack && (this.isPlaying || (this.playerBackend.play(), v.isPlaying = !0, e.$emit("player.trackStarted")))
            },
            pause: function() {
                this.isPlaying && (this.playerBackend.pause(), this.isPlaying = !1, e.$emit("player.trackPaused"))
            },
            stop: function() {
                this.isPlaying && (this.playerBackend.pause(), this.isPlaying = !1, v.seekTo(0), e.$emit("player.trackStopped"))
            },
            playNext: function() {
                if (v.ignoreNext) return void e.$emit("player.playNext");
                if (this.queue) {
                    if (this.isRepeatingOne) return this.loadTrack(this.currentTrack, !0);
                    var t = this.queue[this.currentQueIndex + 1];
                    if (t) this.loadTrack(t, !0);
                    else {
                        if (this.isRepeating) return this.loadTrack(this.queue[0], !0);
                        v.stop()
                    }
                }
            },
            playPrevious: function() {
                if (this.queue) {
                    if (this.isRepeatingOne) return this.loadTrack(this.currentTrack, !0);
                    var e = this.queue[this.currentQueIndex - 1];
                    if (e) this.loadTrack(e, !0);
                    else {
                        if (this.isRepeating) return this.loadTrack(this.queue[this.queue.length - 1], !0);
                        v.stop()
                    }
                }
            },
            hasPrevious: function() {
                return !angular.isUndefined(this.queue[this.currentQueIndex - 1])
            },
            addToQueue: function(e, t, n) {
                angular.isArray(e) || (e = [e]), c(function() {
                    for (var r = 0; r < e.length; r++) {
                        var a = formatTrackForQueue(e[r]);
                        n ? (v.queue.push(a), t && v.loadTrack(v.queue[v.queue.length - 1], !0)) : (v.queue.splice(v.currentQueIndex + 1 + r, 0, a), t && (v.queue.length > 1 ? v.playNext() : v.loadTrack(v.queue[0], !0)))
                    }
                    i.set("queue", v.queue.slice(0, 20))
                })
            },
            removeFromQueue: function(e) {
                v.queue.splice(v.queue.indexOf(e), 1), i.set("queue", v.queue.slice(0, 20))
            },
            loadQueue: function(e, t, n) {
                c(function() {
                    l(e, n), v.loadTrack(u(t), t), i.set("queue", v.queue.slice(0, 20))
                })
            },
            isInQueue: function(e) {
                for (var t = 0; t < this.queue.length; t++)
                    if (this.queue[t].id == e.id) return !0
            },
            loadTrack: function(t, n) {
                v.loadingTrack = !0, e.$emit("player.trackLoadingStarted"), t.identifier || (t = formatTrackForQueue(t));
                var r = this.queue.indexOf(t);
                r > -1 && (this.currentQueIndex = r), this.currentTrack = t, s(t), !t.youtube_id && !t.url || a.isDemo ? p(t).success(function(e) {
                    e.id || (v.loadingTrack = !1, alertify.delay(3e3).error(a.trans("couldntFindTrack")), v.playNext()), t.youtube_id = e.id, n ? (v.playerBackend.loadVideo(t, n, "large"), v.play()) : v.playerBackend.cueVideo(t, n, "large")
                }) : n ? (v.playerBackend.loadVideo(t, n, "large"), v.play()) : v.playerBackend.cueVideo(t, n, "large"), g(), i.set("last-track", t), i.set("queue-index", this.currentQueIndex), i.set("queue", v.queue.slice(0, 20))
            },
            toggleTrack: function(e, t) {
                v.currentTrack.identifier == e.identifier ? v.isPlaying ? v.pause() : t && v.play() : v.loadTrack(e, t)
            },
            toggleRepeat: function() {
                this.isRepeating || this.isRepeatingOne ? this.isRepeating ? (this.isRepeating = !1, this.isRepeatingOne = !0) : this.isRepeatingOne && (this.isRepeatingOne = !1, this.isRepeating = !1) : this.isRepeating = !0, i.set("isRepeating", this.isRepeating), i.set("isRepeatingOne", this.isRepeatingOne)
            },
            toggleShuffle: function() {
                this.isShuffling ? (this.queue = this.originalQueue.slice(), this.isShuffling = !1) : (d(), this.isShuffling = !0), i.set("isShuffling", this.isShuffling)
            },
            toggleLyrics: function() {
                v.currentTrack && (this.isShowingVideo && (this.isShowingVideo = !1, m("video")), this.isShowingLyrics ? (this.isShowingLyrics = !1, m("lyrics")) : (a.showLoader(), t.post("get-lyrics", {
                    artist: v.currentTrack.artist,
                    track: v.currentTrack.name
                }).success(function(e) {
                    h("lyrics", e), v.isShowingLyrics = !0, a.hideLoader()
                }).error(function() {
                    alertify.delay(2500).error(a.trans("noLyricsFound")), a.hideLoader()
                })))
            },
            toggleVideo: function() {
                v.currentTrack && (this.isShowingLyrics && (this.isShowingLyrics = !1, m("lyrics")), this.isShowingVideo ? (this.isShowingVideo = !1, m("video")) : (v.play(), h("video"), v.isShowingVideo = !0))
            },
            loadLastPlayerTrack: function() {
                v.currentTrack ? v.loadTrack(v.currentTrack) : v.currentQueIndex && v.loadTrack(v.queue[v.currentQueIndex])
            },
            getVolume: function() {
                return this.playerBackend.getVolume()
            },
            setVolume: function(e) {
                return i.set("youtubify-volume", e), this.playerBackend.setVolume(e)
            },
            mute: function() {
                this.isMuted = !0, this.playerBackend.mute()
            },
            unMute: function() {
                this.isMuted = !1, this.playerBackend.unMute()
            },
            getDuration: function() {
                return this.playerBackend.getDuration()
            },
            getCurrentTime: function() {
                return this.playerBackend.getCurrentTime()
            },
            seekTo: function(e) {
                this.playerBackend.seekTo(e, !0)
            },
            goFullScreen: function() {
                if (this.playerBackend.html5Player) var e = document.getElementById("html5-player");
                else var e = document.getElementById("player");
                e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen()
            },
            disableFullScreen: function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            },
            init: function() {
                f(), this.playerService = a.getSetting("audio_search_provider", "youtube").toLowerCase() + "Player", this.playerBackend = r.get(this.playerService), this.playerBackend.init(this)
            }
        };
        return formatTrackForQueue = function(e) {
            var t = "";
            return angular.isUndefined(e.image) ? e.album && (t = e.album.image) : t = e.image, formatted = {
                id: e.id,
                identifier: a.randomString(5),
                youtube_id: e.youtube_id,
                name: e.name,
                image: t,
                image_large: e.image_large,
                artist: e.artist || e.artists[0] || e.album.artist.name,
                artists: e.artists,
                echo_nest_id: e.echo_nest_id,
                url: e.url
            }
        }, setTimeout(function() {
            v.init()
        }), v
    }]), angular.module("app").factory("soundcloudPlayer", ["$rootScope", "utils", "localStorage", function(e, t, n) {
        function r() {
            var r = (document.getElementById("player"), document.createElement("iframe"));
            r.onload = function() {
                i.soundcloudPlayer = SC.Widget(r), i.soundcloudPlayer.bind(SC.Widget.Events.READY, function() {
                    e.$apply(function() {
                        i.frontPlayer.loadLastPlayerTrack()
                    }), e.$apply(function() {
                        i.frontPlayer.loadingTrack = !1
                    }), i.frontPlayer.setVolume(n.get("youtubify-volume", 17)), e.$emit("player.loaded")
                }), i.soundcloudPlayer.bind(SC.Widget.Events.PLAY, function(t) {
                    i.playing = !0, e.$apply(function() {
                        i.frontPlayer.loadingTrack = !1
                    }), i.frontPlayer.setVolume(n.get("youtubify-volume", 17)), i.soundcloudPlayer.getDuration(function(t) {
                        i.duration = t, setTimeout(function() {
                            e.$emit("player.trackChanged")
                        })
                    })
                }), i.soundcloudPlayer.bind(SC.Widget.Events.PAUSE, function() {
                    i.playing = !1
                }), i.soundcloudPlayer.bind(SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    i.position = e.currentPosition
                }), i.soundcloudPlayer.bind(SC.Widget.Events.ERROR, function(n) {
                    alertify.delay(2500).error(t.trans("couldntFindTrack")), i.frontPlayer.playNext(), e.$apply(function() {
                        i.frontPlayer.stop()
                    })
                }), i.soundcloudPlayer.bind(SC.Widget.Events.FINISH, function() {
                    e.$apply(function() {
                        i.frontPlayer.playNext()
                    })
                })
            }, r.id = "soundcloud-iframe", r.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=0066cc", i.playerContainer = document.querySelector(".player-container"), i.playerContainer.style.cssText = "display: block !important;", document.body.appendChild(r), i.bootstraped = !0
        }
        var i = {
            frontPlayer: !1,
            soundcloudPlayer: !1,
            bootstraped: !1,
            soundcloudPlayerOptions: {
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_artwork: !1,
                show_comments: !1,
                show_playcount: !1,
                show_user: !1
            },
            duration: 0,
            playing: !1,
            position: 0,
            play: function() {
                i.soundcloudPlayer.play()
            },
            pause: function() {
                this.soundcloudPlayer.pause()
            },
            seekTo: function(e) {
                this.soundcloudPlayer.seekTo(1e3 * e)
            },
            loadVideo: function(e, t, n) {
                this.soundcloudPlayer.load(e.youtube_id, angular.merge(this.soundcloudPlayerOptions, {
                    auto_play: t
                }))
            },
            cueVideo: function(e, t, n) {
                this.soundcloudPlayer.load(e.youtube_id, angular.merge(this.soundcloudPlayerOptions, {
                    auto_play: t
                }))
            },
            getDuration: function() {
                return this.duration / 1e3
            },
            getCurrentTime: function() {
                return this.position / 1e3
            },
            getVolume: function() {
                this.soundcloudPlayer.getVolume(number)
            },
            setVolume: function(e) {
                this.soundcloudPlayer.setVolume(e / 100)
            },
            mute: function() {
                this.soundcloudPlayer.setVolume(0)
            },
            unMute: function() {
                this.soundcloudPlayer.setVolume(50)
            },
            isPlaying: function() {
                return this.playing
            },
            init: function(e) {
                this.frontPlayer = e, t.loadScript("https://w.soundcloud.com/player/api.js", r)
            }
        };
        return i
    }]), angular.module("app").factory("youtubePlayer", ["$rootScope", "$timeout", "utils", function(e, t, n) {
        var r = {
            frontPlayer: !1,
            youtubePlayer: !1,
            play: function() {
                this.youtubePlayer.playVideo()
            },
            pause: function() {
                this.youtubePlayer.pauseVideo()
            },
            seekTo: function(e) {
                this.youtubePlayer.seekTo(e, !0)
            },
            loadVideo: function(e, t, n) {
                this.youtubePlayer.loadVideoById(e.youtube_id, t, n)
            },
            cueVideo: function(e, t, n) {
                this.youtubePlayer.cueVideoById(e.youtube_id, t, n)
            },
            getDuration: function() {
                return this.youtubePlayer.getDuration()
            },
            getCurrentTime: function() {
                return this.youtubePlayer.getCurrentTime()
            },
            getVolume: function() {
                return this.youtubePlayer.getVolume(number)
            },
            setVolume: function(e) {
                this.youtubePlayer.setVolume(e)
            },
            mute: function() {
                this.youtubePlayer.mute()
            },
            unMute: function() {
                this.youtubePlayer.unMute()
            },
            isPlaying: function() {
                return 1 === this.youtubePlayer.getPlayerState()
            },
            init: function(i) {
                this.frontPlayer = i, n.loadScript("https://www.youtube.com/iframe_api"), window.onYouTubeIframeAPIReady = function() {
                    r.youtubePlayer = new YT.Player("player", {
                        playerVars: {
                            autoplay: 0,
                            rel: 0,
                            showinfo: 0,
                            egm: 0,
                            showsearch: 0,
                            controls: 0,
                            modestbranding: 1,
                            iv_load_policy: 3,
                            disablekb: 1,
                            version: 3
                        },
                        events: {
                            onReady: function() {
                                e.$apply(function() {
                                    r.frontPlayer.loadLastPlayerTrack()
                                }), e.$emit("player.loaded")
                            },
                            onError: function(t) {
                                (150 == t.data || 101 == t.data) && (alertify.delay(2500).error(n.trans("couldntFindTrack")), r.frontPlayer.playNext(), e.$apply(function() {
                                    r.frontPlayer.stop()
                                }))
                            },
                            onStateChange: function(n) {
                                n.data === YT.PlayerState.ENDED ? e.$apply(function() {
                                    r.frontPlayer.playNext()
                                }) : n.data === YT.PlayerState.CUED || n.data === YT.PlayerState.PLAYING ? (e.$apply(function() {
                                    r.frontPlayer.loadingTrack = !1
                                }), n.data === YT.PlayerState.PLAYING && t(function() {
                                    e.$emit("player.trackChanged"), r.frontPlayer.isPlaying || (r.frontPlayer.isPlaying = !0)
                                })) : n.data === YT.PlayerState.PAUSED && r.frontPlayer.isPlaying && e.$apply(function() {
                                    r.frontPlayer.isPlaying = !1
                                })
                            }
                        }
                    })
                }
            }
        };
        return r
    }]), angular.module("app").run(["$templateCache", function(e) {
        e.put("assets/views/directives/add-to-playlist-context-menu.html", '<div class="add-to-playlist scroll-container" pretty-scrollbar><div class=back><i class="icon icon-left-open-big"></i><div class=text>{{:: \'back\' | translate }}</div></div><div class=new-playlist ng-click=createPlaylist()><i class="icon icon-plus"></i><div class=text>{{:: \'newPlaylist\' | translate }}</div></div><div class=playlists><div class=playlist ng-repeat="playlist in playlists.all" ng-if=playlist.is_owner ng-click=addToPlaylist(playlist)><i class="icon icon-note"></i><div class=text>{{ playlist.name }}</div></div></div></div>'), e.put("assets/views/directives/left-panel.html", '<section id=left-panel class=togglable-sidebar ng-class="{ closed: isPhone }"><div ng-controller=PlaylistModifyController class=left-panel-inner><div class=content pretty-scrollbar><a ui-sref=home class="logo hidden-phone"><img ng-src="{{ utils.getLogoUrl(\'light\') }}" alt=logo></a><div class=search-bar><input type=text placeholder="{{:: \'search\' | translate }}..." ng-model=search.query ng-model-options="{ debounce: 400 }" ng-change=search.getResults(search.query) on-enter=search.viewAllResults()> <i class="icon icon-spin6 spin search-bar-spinner" ng-if=search.ajaxInProgress></i> <i class="icon icon-cancel-1 search-bar-clear" ng-click=search.clearQuery() ng-if="!search.ajaxInProgress && search.query.length"></i></div><div class=main-menu><div class=menu-item ui-sref=phone-search ui-sref-active=active ng-if=isPhone>{{:: \'search\' | translate }}</div><div class=menu-item ui-sref=top-albums ui-sref-active=active><i class="icon icon-thumbs-up"></i> {{:: \'popularAlbums\' | translate }}</div><div class=menu-item ui-sref=popular-genres ui-sref-active=active><i class="icon icon-tags"></i> {{:: \'popularGenres\' | translate }}</div><div class=menu-item ui-sref=top-songs ui-sref-active=active><i class="icon icon-fire"></i> {{:: \'top50\' | translate }}</div><div class=menu-item ui-sref=new-releases ui-sref-active=active><i class="icon icon-cd"></i> {{:: \'newReleases\' | translate }}</div></div><div class=divider></div><div class=current-user-widget ng-if=users.current><img ng-src="{{ users.getAvatar() }}"> <a class=user-email ui-sref=user({id:users.current.id})>{{ users.getUsername() }}</a><div class=dropdown-container dropdown><i class="icon icon-cog edit-profile dropdown-trigger"></i><div class="dropdown-menu hidden"><div class=dropdown-item ng-if=users.current.isAdmin ui-sref=admin.analytics><i class="icon icon-gauge"></i>{{:: \'adminArea\' | translate }}</div><div class=dropdown-item ng-click=users.showAccountSettingsModal($event)><i class="icon icon-pencil"></i> {{:: \'accountSettings\' | translate }}</div><div class=dropdown-item ng-click="users.showAccountSettingsModal($event, \'avatar\')"><i class="icon icon-emo-sunglasses"></i> {{:: \'changeAvatar\' | translate }}</div><div class=dropdown-item ng-click="users.showAccountSettingsModal($event, \'password\')"><i class="icon icon-lock"></i> {{:: \'changePassword\' | translate }}</div><div class=dropdown-item ng-click=users.logout()><i class="icon icon-login"></i> {{:: \'logOut\' | translate }}</div></div></div></div><div class=login-btns ng-if=!users.current><button class="primary login-btn" ui-sref=login>{{:: \'login\' | translate }}</button> <button class="cancel register-btn" ui-sref=register ng-if="utils.getSetting(\'enableRegistration\')">{{:: \'register\' | translate }}</button></div><div class=your-music><h2>{{:: \'yourMusic\' | translate }}</h2><div class=menu-item ui-sref=songs ui-sref-active=active><i class="icon icon-note"></i> {{:: \'songs\' | translate }}</div><div class=menu-item ui-sref=albums ui-sref-active=active><i class="icon icon-cd"></i> {{:: \'albums\' | translate }}</div><div class=menu-item ui-sref=artists ui-sref-active=active><i class="icon icon-mic"></i> {{:: \'artists\' | translate }}</div></div><div class=divider></div><div class=playlists-container><div class=playlists><h2>{{:: \'playlists\' | translate }} <i class="icon icon-plus" tooltips tooltip-title="{{:: \'newPlaylist\' | translate }}" ng-click=openNewPlaylistModal()></i></h2><div class=playlists-list><div class=menu-item ng-repeat="playlist in playlists.all" ui-sref=playlist({id:playlist.id}) ui-sref-active=active><i class="icon icon-note"></i> {{ playlist.name }}</div></div></div></div></div><div class=current-track ng-show=player.currentTrack ng-controller=ExternalPlayerControlsController><img ng-src="{{ utils.img(player.currentTrack.image, \'album\') }}"><div class=info><div class=track-name title="{{ player.currentTrack.name }}">{{ player.currentTrack.name }}</div><div class=artist-name><all-track-artists artists=player.currentTrack.artists></all-track-artists></div></div><div class=add-remove ng-class="{ saved: trackSaved(player.currentTrack) }"><i class="icon icon-plus add-track" ng-click=addTrack(player.currentTrack)></i> <i class="icon icon-cancel-1 remove-track" ng-click=removeTrack(player.currentTrack)></i> <i class="icon icon-ok track-added" ng-click=removeTrack(player.currentTrack)></i></div></div></div></section>'),
            e.put("assets/views/directives/player-controls.html", '<section id=player-controls><div class=buttons><i class="icon icon-to-start prev"></i> <i class="icon icon-play toggle-play" ng-if="!player.loadingTrack && !player.isPlaying"></i> <i class="icon icon-pause toggle-play" ng-if="!player.loadingTrack && player.isPlaying"></i> <i class="icon icon-spin2 track-loading spin" ng-if=player.loadingTrack></i> <i class="icon icon-to-end next"></i></div><div class=track-info ng-if=isPhone><div class=track-name>{{ player.currentTrack.name }}</div><div class=artist-name>{{ player.currentTrack.artist }}</div></div><div class=controls-toggler><i class="icon icon-dot-3" sidebar-toggler=.buttons.right></i></div><div class=progress-container><div class="elapsed-time hidden-phone">0:00</div><div class=progress-bar><div class=elapsed></div><div class=progress></div><div class=handle></div></div><div class="track-length hidden-phone">0:00</div></div><div class="lyrics hidden-phone" ng-class="{ \'showing-lyrics\': player.isShowingLyrics, disabled: !player.currentTrack }" ng-if="!utils.getSetting(\'hide_lyrics_button\')">{{:: \'lyrics\' | translate }}</div><div class="buttons right" ng-class="{ closed: isPhone }"><i class="icon icon-video toggle-video" ng-class="{ disabled: !player.currentTrack }" ng-if="!utils.getSetting(\'hide_video_button\')"></i> <i class="icon icon-menu toggle-queue"></i> <i class="icon icon-shuffle-1 shuffle" ng-class="{ shuffling: player.isShuffling }"></i><div class=repeat ng-class="{ \'repeating-one\': player.isRepeatingOne, repeating: player.isRepeating}"><i class="icon icon-loop"></i></div><div class=volume-container volume-controls><i class="icon icon-volume-up-1 volume"></i><div class=volume-bar><div class=volume-level></div><div class=volume-handle></div></div></div></div></section>'), e.put("assets/views/directives/right-panel.html", '<div id=right-panel ng-class="{ closed: !queuePanelStatus.open, \'player-visible\': utils.getSetting(\'show_youtube_player\') }"><section class=queue pretty-scrollbar lazy-img-container><div class=track ng-repeat="track in player.queue track by track.identifier" ng-class="{ playing: player.currentTrack.identifier === track.identifier && player.isPlaying }" context-menu-item=queue><div class=image ng-click="player.toggleTrack(track, true)"><img lazy-img="{{ utils.img(track.image, \'album\') }}" ng-src="{{ utils.img(false, \'album\') }}"><playing-icon></playing-icon><i class="icon icon-play"></i> <i class="icon icon-pause"></i></div><div class=info><div class=track-name>{{ track.name }}</div><div class=artist-name>{{ track.artist }}</div></div><i class="icon icon-dot-3 more-options" more-options-menu></i></div></section></div>'), e.put("assets/views/directives/search-panel.html", '<div class="search-panel-backdrop hidden" ng-if=searchPanelNeeded><div class=search-panel pretty-scrollbar><div class=view-all ng-click=search.viewAllResults()>{{:: \'viewAllResults\' | translate }} <i class="icon icon-right-open"></i></div><div class=result-container ng-if=search.results.artists.length><h2>{{:: \'artists\' | translate }}</h2><a class=media ng-repeat="artist in search.results.artists | orderBy:\'-spotify_popularity\' | limitTo:3" ng-click=search.goToArtistPage(artist)><img ng-src="{{ utils.img(artist.image_small, \'artist\') }}" class=media-image><div class=media-body><div class=media-text>{{ artist.name }}</div></div></a></div><div class=result-container ng-if=search.results.tracks.length><h2>{{:: \'songs\' | translate }}</h2><div class=track ng-repeat="track in search.results.tracks | orderBy:\'-spotify_popularity\' | limitTo:3" ng-click=search.playTrack(track)><div class=track-name>{{ track.name }}</div><div class=artist-name><all-track-artists artists=track.artists></all-track-artists></div></div></div><div class="result-container albums" ng-if=search.results.albums.length><h2>{{:: \'albums\' | translate }}</h2><div class=media ng-repeat="album in search.results.albums | orderBy:\'-spotify_popularity\' | limitTo:3"><img ng-src="{{ utils.img(album.image, \'album\') }}" class=media-image ng-click=search.goToAlbumPage(album)><div class=media-body><div class=media-text ng-click=search.goToAlbumPage(album)>{{ album.name }}</div><div class=media-subtext ng-click=search.goToArtistPage(album.artist)>{{ album.artist.name }}</div></div></div></div><div class="result-container playlists" ng-if=search.results.playlists.length><h2>{{:: \'playlists\' | translate }}</h2><div class=media ng-repeat="playlist in search.results.playlists | limitTo:3"><img ng-src="{{ utils.img(playlist.image, \'album\') }}" class=media-image ng-click=search.goToPlaylistPage(playlist)><div class=media-body><div class=media-text ng-click=search.goToPlaylistPage(playlist)>{{ playlist.name }}</div><div class=media-subtext ng-click=search.goToUserPage(playlist.owner)>{{ playlist.owner.username }}</div></div></div></div><div class="result-container users" ng-if=search.results.users.length><h2>{{:: \'users\' | translate }}</h2><div class=media ng-repeat="user in search.results.users | limitTo:3"><img ng-src="{{ users.getAvatar(user) }}" class=media-image ng-click=search.goToUserPage(user)><div class=media-body><div class=media-text ng-click=search.goToUserPage(user)>{{ users.getUsername(user) }}</div><div class=media-subtext>{{ user.followers_count }} {{:: \'followers\' | translate }}</div></div></div></div></div></div>')
    }]);