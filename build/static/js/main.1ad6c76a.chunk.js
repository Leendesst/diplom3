(this.webpackJsonpckservice=this.webpackJsonpckservice||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a,r=n(1),i=n.n(r),c=n(35),s=n.n(c),o=(n(73),n(2)),u=n(5),l=n(3),d=n(4),j=n(6),b=n(9),h=n(24),p=n(8),O=n(0),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.location.pathname,a=e.children;return Object(O.jsx)(h.b,{className:t===n?"activated":null,to:t,children:a})}}]),n}(r.Component),f=Object(p.g)(v),m=n.p+"static/media/logo.146bda1b.png",x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={openMenu:!1},a.toggleMenu=a.toggleMenu.bind(Object(b.a)(a)),a.hideMenu=a.hideMenu.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"toggleMenu",value:function(){this.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{openMenu:!e.openMenu})}))}},{key:"hideMenu",value:function(){this.setState({openMenu:!1})}},{key:"render",value:function(){var e=this.state.openMenu;return Object(O.jsx)("header",{className:"app-header",children:Object(O.jsxs)("div",{className:"app-header__wrapper",children:[Object(O.jsx)("div",{className:"app-header__logo",children:Object(O.jsx)(h.b,{to:"/works",children:Object(O.jsx)("img",{src:m,alt:"logo"})})}),Object(O.jsxs)("button",{className:"app-header__menu__button"+(e?" activated":""),onClick:this.toggleMenu,children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]}),Object(O.jsxs)("nav",{className:"app-header__menu"+(e?" activated":""),onClick:this.hideMenu,children:[Object(O.jsx)(f,{to:"/works",children:Object(O.jsx)("span",{children:"\u041d\u0430\u0448\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(O.jsx)(f,{to:"/services",children:Object(O.jsx)("span",{children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(O.jsx)(f,{to:"/request",children:Object(O.jsx)("span",{children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}),Object(O.jsx)(f,{to:"/about",children:Object(O.jsx)("span",{children:"\u041e \u043d\u0430\u0441"})})]})]})})}}]),n}(r.Component),g=n.p+"static/media/vk.7998cd57.svg",k=n.p+"static/media/watsapp.bf8ee4a3.svg",_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a.mapref=i.a.createRef(),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("footer",{className:"app-footer",children:[Object(O.jsxs)("div",{className:"app-footer__social",children:["\u041c\u044b \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445:",Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://vk.com/ck_service_ptz",children:Object(O.jsx)("img",{src:g,alt:"VK"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=79110502929",children:Object(O.jsx)("img",{src:k,alt:"WatsApp"})})})]})]}),Object(O.jsx)("a",{className:"app-footer__phone",href:"tel:+79110502929",children:"+79110502929"})]})}}]),n}(r.Component),y=n(22),w="WORKS-LOADED-APPEND",C={data:{}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),t.value)});default:return e}},A=n(23),I="LOADING-SET-FLAG",S="LOADING-CLR-FLAG",D="LOAD_WORKS",E="LOAD_SERVICES",F="LOAD_SUBSCRIBE",M={falgs:(a={},Object(A.a)(a,D,!1),Object(A.a)(a,E,!1),Object(A.a)(a,F,!1),a)},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case I:return Object(j.a)(Object(j.a)({},e),{},{falgs:Object(j.a)(Object(j.a)({},e.falgs),{},Object(A.a)({},t.name,!0))});case S:return Object(j.a)(Object(j.a)({},e),{},{falgs:Object(j.a)(Object(j.a)({},e.falgs),{},Object(A.a)({},t.name,!1))});default:return e}},R=function(e){return{type:I,name:e}},V=function(e){return{type:S,name:e}},T=n(68),P=n(11),W=n.n(P),K=n(20),U=n(31),q=n.n(U),B=n(38),G=n(66),J="SERVICES-LOADED-APPEND",Y={data:{}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case J:return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),t.value)});default:return e}},H=Object(B.b)({works:N,services:z,indicators:L}),Z=Object(B.c)(H,Object(B.a)(G.a)),Q=void 0,X=Z.dispatch;q.a.interceptors.request.use((function(e){return e.headers.Accept="application/json",e.headers["Content-Type"]="application/json; charset=utf-8",e.baseURL="/api/",e}));var $=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e,a,r){var i;return Object(o.a)(this,n),(i=t.call(this,"APIError")).code=e,i.params=a,i.source=r,i}return n}(Object(T.a)(Error)),ee=function(){var e=Object(K.a)(W.a.mark((function e(t,n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new $(0,{},t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),te=function(e,t){return function(e){return Object(K.a)(W.a.mark((function t(){var n,a,r,i=arguments;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(console.log("API call ",e),n=i.length,a=new Array(n),r=0;r<n;r++)a[r]=i[r];return t.next=4,e.apply(Q,a);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))}(function(e,t){return Object(K.a)(W.a.mark((function n(){var a,r,i,c=arguments;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X(R(t));case 3:for(a=c.length,r=new Array(a),i=0;i<a;i++)r[i]=c[i];return n.next=6,e.apply(Q,r);case 6:return n.abrupt("return",n.sent);case 7:return n.prev=7,n.next=10,X(V(t));case 10:return n.finish(7);case 11:case"end":return n.stop()}}),n,null,[[0,,7,11]])})))}(function(e,t,n){var a=function(){var n=Object(K.a)(W.a.mark((function n(){var r,i,c,s=arguments;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=s.length,i=new Array(r),c=0;c<r;c++)i[c]=s[c];return n.prev=1,n.next=4,e.call.apply(e,[Q].concat(i));case 4:return n.abrupt("return",n.sent);case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t.call(Q,n.t0,Object(K.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.bind.apply(a,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return a}(e,ee),t))},ne={loadNews:function(){var e=Object(K.a)(W.a.mark((function e(){var t,n,a,r=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=t.from,e.next=3,q.a.get("/works",n?{data:{from:n}}:{data:{}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),loadServices:function(){var e=Object(K.a)(W.a.mark((function e(){var t,n,a,r=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=t.from,e.next=3,q.a.get("/services",n?{data:{from:n}}:{data:{}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),subscribe:function(){var e=Object(K.a)(W.a.mark((function e(t){var n,a,r,i,c,s,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.phone,r=t.auto_mark,i=t.auto_vin,c=t.auto_number,s=t.works,e.next=3,q.a.post("/subscribe",{name:n,phone:a,auto_mark:r,auto_vin:i,auto_number:c,works:s});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae={loadNews:te(ne.loadNews,D),loadServices:te(ne.loadServices,E),subscribe:te(ne.subscribe,F)},re=n(37),ie=n(19),ce=n.n(ie),se=n(67),oe=n.n(se),ue=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(oe.a,{items:this.props.images.map((function(e){return{original:e,thumbnail:e}}))})}}]),n}(r.Component),le=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"toReact",value:function(){return Object(O.jsx)("b",{children:this.getComponents()})}}]),n}(ie.Tag);ce.a.registerTag("b",le);var de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"toReact",value:function(){return Object(O.jsx)("i",{children:this.getComponents()})}}]),n}(ie.Tag);ce.a.registerTag("i",de);var je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"toReact",value:function(){var e=this.getContent(!0).split("|");return console.log(e),Object(O.jsx)(ue,{images:e})}}]),n}(ie.Tag);ce.a.registerTag("images",je);var be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"toReact",value:function(){return Object(O.jsx)("br",{})}}]),n}(ie.Tag);ce.a.registerTag("__br__",be);var he=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.code,t=void 0===e?"":e;return Object(O.jsx)("p",{children:ce.a.toReact(t.replaceAll("\n","[__br__][/__br__]"))})}}]),n}(r.Component),pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.error,a=void 0!==n&&n;return Object(O.jsx)("div",{className:"loading__message".concat(a?" error":""),children:Object(O.jsx)("span",{children:t})})}}]),n}(r.Component),Oe=n(17),ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.text,a=e.date;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"works__item__head",children:[Object(O.jsx)("span",{className:"works__item__head__title",children:t}),Object(O.jsx)("span",{className:"works__item__head__date",children:a})]}),Object(O.jsx)("div",{className:"works__item__body",children:Object(O.jsx)(he,{code:n})})]})}}]),n}(r.Component),fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=void 0===t?{}:t,a=e.loading,r=void 0===a||a,i=e.error,c=void 0!==i&&i,s=Object.entries(n).length>0;return Object(O.jsxs)("div",{className:"works",children:[r&&Object(O.jsx)(pe,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),!r&&s&&(c?Object(O.jsx)(pe,{error:!0,children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442"}):Object.entries(n).map((function(e,t){var n=Object(re.a)(e,2),a=n[0],r=n[1],i=r.title,c=r.text,s=r.date;return Object(O.jsx)(Oe.Animated,{className:"works__item",animationInDelay:100*t,animationInDuration:500,animationIn:"fadeInUp",isVisible:!0,children:Object(O.jsx)(ve,{title:i,text:c,date:s})},a)}))),!r&&!s&&Object(O.jsx)(pe,{children:"\u0422\u0443\u0442 \u0435\u0449\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"})]})}}]),n}(r.Component),me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={itemsRef:{},itemsState:{},loadingError:!1},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){}},{key:"componentDidMount",value:function(){var e=this,t=this.props.works,n=t.loading,a=t.data;!n&&Object.keys(a).length<1&&(this.setState({loadingError:!1}),ae.loadNews().then((function(t){var n={};t.data.forEach((function(e){n[e.id]=e})),e.props.worksLoadedAppend(n)})).catch((function(t){e.setState({loadingError:!0}),e.props.worksLoadedAppend(null)})))}},{key:"render",value:function(){var e=this.props,t=e.works.data,n=e.indicators.LOAD_WORKS,a=void 0!==n&&n,r=this.state.loadingError;return console.log(t,a),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(fe,{items:{1:{date:"2022-05-21 12:00:00",id:2,text:"\u0411\u044b\u043b \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u043f\u043e \u043a\u0443\u0437\u043e\u0432\u043d\u043e\u043c\u0443 \u0440\u0435\u043c\u043e\u043d\u0442\u0443.\n\u0411\u044b\u043b\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0430 \u043f\u043e\u043b\u043d\u0430\u044f \u043f\u043e\u043a\u0440\u0430\u0441\u043a\u0430 \u043a\u0443\u0437\u043e\u0432\u0430, \u043f\u0435\u0440\u0435\u0432\u0430\u0440\u043a\u0430 \u0434\u043d\u0438\u0449\u0430 \u0438 \u043f\u043e\u0440\u043e\u0433\u043e\u0432 \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439.\n[images]https://ck-service.ru/assets/nFrsI4eksKyY.jpg|https://ck-service.ru/assets/vAT5tdHLk0eO.jpg|https://ck-service.ru/assets/FTQcK79iv3Zl.jpg|https://ck-service.ru/assets/LFaVfmi33zAd.jpg|https://ck-service.ru/assets/5VHFC19VLuyG.jpg|https://ck-service.ru/assets/iBfYdNkDMLe3.jpg|https://ck-service.ru/assets/qvaclKZnhAYn.jpg[/images]",title:"\u041a\u0443\u0437\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 Mercedes W203"},2:{date:"2022-04-17 12:00:00",id:1,text:"\u041f\u043e\u0441\u043b\u0435 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0434\u0442\u043f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0431\u044b\u043b \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430 3 \u0434\u043d\u044f.\n\u041f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u044b\u043b\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b, \u043e\u0442\u0433\u0440\u0443\u043d\u0442\u043e\u0432\u0430\u043d\u044b \u0438 \u043f\u043e\u043a\u0440\u0430\u0448\u0435\u043d\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0445\u043e\u0440\u043e\u0448\u0438\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438.\n[images]https://ck-service.ru/assets/ilnKJzMmD3E.jpg|https://ck-service.ru/assets/rXZjD6ANtgg.jpg|https://ck-service.ru/assets/RHt3iImo7kw.jpg|https://ck-service.ru/assets/oJW3ShoyCBA.jpg|https://ck-service.ru/assets/iqcxhjV_KY4.jpg[/images]",title:"\u041a\u0443\u0437\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0160koda Octavia"}},loading:a,error:r})})}}]),n}(r.Component),xe=Object(y.b)((function(e){return{works:e.works,indicators:e.indicators.falgs}}),(function(e){return{worksLoadedAppend:function(t){return e({type:w,value:t})}}}))(me),ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?null:t,a=e.text,r=void 0===a?null:a,i=e.image,c=void 0===i?null:i;return console.log(this.props),Object(O.jsxs)(O.Fragment,{children:[!!c&&Object(O.jsx)("div",{className:"services__item__image",children:Object(O.jsx)("img",{src:c,alt:" "})}),Object(O.jsxs)("div",{className:"services__item__content",children:[Object(O.jsx)("h2",{children:n}),Object(O.jsx)("p",{children:Object(O.jsx)(he,{code:r})})]})]})}}]),n}(r.Component),ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=void 0===t?{}:t,a=e.loading,r=void 0===a||a,i=e.error,c=void 0!==i&&i,s=Object.entries(n).length>0;return Object(O.jsxs)("div",{className:"services",children:[r&&Object(O.jsx)(pe,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),!r&&s&&(c?Object(O.jsx)(pe,{error:!0,children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442"}):Object.entries(n).map((function(e,t){var n=Object(re.a)(e,2),a=(n[0],n[1]),r=a.title,i=a.text,c=a.image;return Object(O.jsx)(Oe.Animated,{className:"services__item",animationInDelay:100*t,animationInDuration:500,animationIn:"fadeInUp",isVisible:!0,children:Object(O.jsx)(ge,{title:r,text:i,image:c})},t)}))),!r&&!s&&Object(O.jsx)(pe,{children:"\u0422\u0443\u0442 \u0435\u0449\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"})]})}}]),n}(r.Component),_e=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={itemsRef:{},itemsState:{},loadingError:!1},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){}},{key:"componentDidMount",value:function(){var e=this,t=this.props.services,n=t.loading,a=t.data;!n&&Object.keys(a).length<1&&(this.setState({loadingError:!1}),ae.loadServices().then((function(t){var n={};t.data.forEach((function(e){n[e.id]=e})),e.props.servicesLoadedAppend(n)})).catch((function(t){e.setState({loadingError:!0})})))}},{key:"render",value:function(){var e=this.props,t=e.services.data,n=void 0===t?{}:t,a=e.indicators.LOAD_SERVICES,r=void 0!==a&&a,i=this.state.loadingError;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ke,{items:n,loading:r,error:i})})}}]),n}(r.Component),ye=Object(y.b)((function(e){return{services:e.services,indicators:e.indicators.falgs}}),(function(e){return{servicesLoadedAppend:function(t){return e({type:J,value:t})}}}))(_e),we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Oe.Animated,{className:"request__form",style:{maxWidth:"100%"},animationInDelay:0,animationInDuration:500,animationIn:"fadeInUp",isVisible:!0,children:Object(O.jsxs)("span",{className:"about",children:[Object(O.jsx)("p",{children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f CKService \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u0443\u0436\u0435 \u043d\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0433\u043e\u0434, \u0437\u0430 \u044d\u0442\u043e\u0442 \u043d\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u044b \u0443\u0441\u043f\u0435\u043b\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0442\u044c \u0441\u043e\u0442\u043d\u0438 \u043c\u0430\u0448\u0438\u043d \u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0445 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0431\u043e\u043b\u0435\u0435 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u043c\u0438."}),Object(O.jsx)("p",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0430 \u043a\u0443\u0437\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b 1 \u0433\u043e\u0434."}),Object(O.jsx)("p",{children:"\u0420\u0435\u043c\u043e\u043d\u0442 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447! \u041c\u044b \u0441\u0430\u043c\u0438 \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u0432\u0441\u0435."}),Object(O.jsx)("p",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u0432\u0441\u0435 \u0432\u0438\u0434\u044b \u0440\u0430\u0431\u043e\u0442, \u0441\u0440\u043e\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c."}),Object(O.jsx)("p",{children:"\u0417\u0430\u043a\u0430\u0436\u0435\u043c \u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0438, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0432\u0430\u0448 \u0430\u0432\u0442\u043e \u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438, \u0432\u044b\u0435\u0437\u0436\u0430\u0435\u043c \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0430\u0448 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u043d\u0430 \u0445\u043e\u0434\u0443. \u0421\u0442\u043e\u044f\u043d\u043a\u0430 \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e!"}),Object(O.jsx)("p",{children:"\u041e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u043c \u0440\u0435\u043c\u043e\u043d\u0442 \u043f\u043e \u0444\u043e\u0442\u043e \u0432 WhatsApp \u0438\u043b\u0438 Viber!"}),Object(O.jsx)("p",{children:"\u041f\u0440\u0438 \u0440\u0435\u043c\u043e\u043d\u0442\u0435 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u0441\u043a\u0438\u0434\u043a\u0430 5% \u043d\u0430 \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(O.jsx)("p",{children:"\u041b\u044e\u0431\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b."}),Object(O.jsx)("p",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043f\u043e \u0431\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u043e\u043c\u0443 \u0438 \u043d\u0430\u043b\u0438\u0447\u043d\u043e\u043c\u0443 \u0440\u0430\u0441\u0447\u0435\u0442\u0443, \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u044b \u0441 \u044e\u0440\u043b\u0438\u0446\u0430\u043c\u0438 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u043c\u0438."})]})})})}}]),n}(r.Component),Ce=function(e){return e?e.length<6?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.":e.length>1e3&&"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 1000 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.":"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e."},Ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:"",valid:!0,error:""},a.onTextChanged=a.onTextChanged.bind(Object(b.a)(a)),a.validate=a.validate.bind(Object(b.a)(a)),a.hideError=a.hideError.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"isValid",value:function(){return!this.props.validator||!1===this.props.validator(this.state.value)}},{key:"value",value:function(){return this.state.value}},{key:"onTextChanged",value:function(e){this.props.onChange&&this.props.onChange(e.target.value),this.setState({value:e.target.value})}},{key:"hideError",value:function(){this.setState({valid:!0})}},{key:"validate",value:function(){var e=this.props.validator?this.props.validator:Ce;this.setState((function(t){var n=e(t.value);return Object(j.a)(Object(j.a)({},t),{},{valid:!1===n,error:!1===n?t.error:n})}))}},{key:"render",value:function(){var e=this.props,t=e.type,n=void 0===t?"text":t,a=e.name,r=e.title,i=this.state,c=i.value,s=i.valid,o=i.error;return console.log("valid",a,s),Object(O.jsxs)("div",{className:"input__container",children:[Object(O.jsx)("input",{type:n,id:a,placeholder:r,value:c,onFocus:this.hideError,onBlur:this.validate,onChange:this.onTextChanged}),Object(O.jsx)("label",{htmlFor:a,children:r}),Object(O.jsx)(Oe.Animated,{className:"input__error__container",animationInDelay:0,animationInDuration:250,animationOutDuration:250,animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!s,children:Object(O.jsx)("div",{className:"input__error",children:Object(O.jsx)("span",{children:o})})})]})}}]),n}(r.Component),Ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:"",valid:!0,error:""},a.onTextChanged=a.onTextChanged.bind(Object(b.a)(a)),a.validate=a.validate.bind(Object(b.a)(a)),a.hideError=a.hideError.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"hideError",value:function(){this.setState({valid:!0})}},{key:"isValid",value:function(){return!this.props.validator||!1===this.props.validator(this.state.value)}},{key:"value",value:function(){return this.state.value}},{key:"validate",value:function(){var e=this.props.validator?this.props.validator:Ce;this.setState((function(t){var n=e(t.value);return Object(j.a)(Object(j.a)({},t),{},{valid:!1===n,error:!1===n?t.error:n})}))}},{key:"onTextChanged",value:function(e){this.props.onChange&&this.props.onChange(e.target.value),this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.type,n=void 0===t?"text":t,a=e.name,r=e.title,i=this.state,c=i.value,s=i.valid,o=i.error;return console.log("valid",a,s),Object(O.jsxs)("div",{className:"input__container",children:[Object(O.jsx)("textarea",{type:n,id:a,placeholder:r,value:c,onFocus:this.hideError,onBlur:this.validate,onChange:this.onTextChanged}),Object(O.jsx)("label",{htmlFor:a,children:r}),Object(O.jsx)(Oe.Animated,{className:"input__error__container",animationInDelay:0,animationInDuration:250,animationOutDuration:250,animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!s,children:Object(O.jsx)("div",{className:"input__error",children:Object(O.jsx)("span",{children:o})})})]})}}]),n}(r.Component),Ie=(r.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onClick,a=e.enabled,r=void 0===a||a;return console.log("enabled",r),Object(O.jsx)("button",{className:"button",disabled:!r,onClick:r?n:null,children:t})}}]),n}(r.Component)),Se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={validated:!1,send_number:0,send_success:!1},a.onSelectMark=a.onSelectMark.bind(Object(b.a)(a)),a.onSelectModel=a.onSelectModel.bind(Object(b.a)(a)),a.sendForm=a.sendForm.bind(Object(b.a)(a)),a.testForm=a.testForm.bind(Object(b.a)(a)),a.fieldName=Object(r.createRef)(),a.fieldPhone=Object(r.createRef)(),a.fieldAutoMark=Object(r.createRef)(),a.fieldAutoVIN=Object(r.createRef)(),a.fieldAutoNumber=Object(r.createRef)(),a.fieldWorks=Object(r.createRef)(),a}return Object(u.a)(n,[{key:"onSelectMark",value:function(e,t){this.setState({selectedMark:e})}},{key:"onSelectModel",value:function(e,t){this.setState({selectedModel:e})}},{key:"testForm",value:function(){var e=[this.fieldName,this.fieldPhone,this.fieldAutoMark,this.fieldAutoVIN,this.fieldAutoNumber,this.fieldWorks];this.setState({validated:!e.find((function(e){return!(e.current&&e.current.isValid())}))})}},{key:"sendForm",value:function(){var e=this,t={name:this.fieldName.current.value(),phone:this.fieldPhone.current.value(),auto_mark:this.fieldAutoMark.current.value(),auto_vin:this.fieldAutoVIN.current.value(),auto_number:this.fieldAutoNumber.current.value(),works:this.fieldWorks.current.value()};ae.subscribe(t).then((function(t){var n=t.data.id;e.setState({send_number:n,send_success:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.validated,n=e.send_success,a=e.send_number,r=void 0===a?0:a,i=this.props.indicators.LOAD_SERVICES,c=void 0!==i&&i;return n?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Oe.Animated,{className:"request__form",animationInDelay:0,animationInDuration:500,animationIn:"fadeInUp",isVisible:!0,children:Object(O.jsxs)("div",{className:"forms",children:["\u0412\u0430\u0448\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e. \u0415\u043c\u0443 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d \u043d\u043e\u043c\u0435\u0440 ",Object(O.jsxs)("b",{children:["#",r]}),". \u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442, \u043e\u0436\u0438\u0434\u0430\u0439\u0442\u0435."]})})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Oe.Animated,{className:"request__form",animationInDelay:0,animationInDuration:500,animationIn:"fadeInUp",isVisible:!0,children:Object(O.jsxs)("div",{className:"forms",children:[Object(O.jsx)(Ne,{ref:this.fieldName,name:"name",title:"\u0418\u043c\u044f",onChange:this.testForm}),Object(O.jsx)(Ne,{ref:this.fieldPhone,name:"phone",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",onChange:this.testForm}),Object(O.jsx)(Ne,{ref:this.fieldAutoMark,name:"auto_mark",title:"\u041c\u0430\u0440\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",onChange:this.testForm}),Object(O.jsx)(Ne,{ref:this.fieldAutoVIN,name:"auto_vin",title:"VIN-\u043d\u043e\u043c\u0435\u0440",validator:function(){return!1},onChange:this.testForm}),Object(O.jsx)(Ne,{ref:this.fieldAutoNumber,name:"auto_number",title:"\u041d\u043e\u043c\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",validator:function(){return!1},onChange:this.testForm}),Object(O.jsx)(Ae,{ref:this.fieldWorks,name:"works",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442",validator:function(e){return e?e.length<6?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.":e.length>1e3&&"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 1000 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.":"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e."},onChange:this.testForm}),Object(O.jsx)(Ie,{enabled:!c&&t,onClick:this.sendForm,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})}}]),n}(r.Component),De=Object(y.b)((function(e){return{services:e.services,indicators:e.indicators.falgs}}),(function(e){return{}}))(Se),Ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsx)("section",{className:"app-wrapper",children:Object(O.jsx)("div",{className:"app-content",children:Object(O.jsxs)(p.d,{children:[Object(O.jsx)(p.b,{exact:!0,path:"/works",children:Object(O.jsx)(xe,{})}),Object(O.jsx)(p.b,{exact:!0,path:"/services",children:Object(O.jsx)(ye,{})}),Object(O.jsx)(p.b,{exact:!0,path:"/about",children:Object(O.jsx)(we,{})}),Object(O.jsx)(p.b,{exact:!0,path:"/request",children:Object(O.jsx)(De,{})}),Object(O.jsx)(p.b,{children:Object(O.jsx)(p.a,{to:"/works"})})]})})}),Object(O.jsx)(_,{})]})}}]),n}(r.Component),Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(y.a,{store:Z,children:Object(O.jsx)(h.a,{children:Object(O.jsx)(Ee,{})})})}),document.getElementById("root")),Fe()},73:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.1ad6c76a.chunk.js.map