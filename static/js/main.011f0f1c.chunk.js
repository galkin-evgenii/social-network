(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(82),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"35b32bc7-c48b-411e-ac15-98f2b5bd9466"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please, profileAPI object"),u.getUsers(e)}},c={follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={login:function(){return a.get("auth/me")},setLogin:function(e,t,n){return a.post("/auth/login",{email:e,password:t,rememberMe:n})},Logout:function(){return a.delete("/auth/login")}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}}},137:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(44),c=n.n(s),i=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,306)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},u=n(34),o=n(35),l=n(37),d=n(36),f=(n(137),n(5)),p=n(16),b=n(29),j=n(3),h=n(26),O="my-app/app/SET-INIT",g={isInitializated:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{isInitializated:!0});default:return e}},v=n(22),x=n(72),w=n(59),y={},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return e},_=n(80),I=n(83),C=n(79),N=Object(v.c)({ProfilePage:w.b,DialogsPage:x.b,SidebarPage:P,UsersPage:_.a,Auth:h.a,form:C.a,App:m}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,S=Object(v.e)(N,k(Object(v.a)(I.a)));window.store=S;var E=S,T=n(53),A=n.n(T),L=n(2),z=function(e){return Object(L.jsxs)("header",{className:A.a.header,children:[Object(L.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"}),Object(L.jsx)("div",{className:A.a.loginBlock,children:e.isAuth?Object(L.jsxs)("div",{children:[Object(L.jsxs)("span",{children:[e.login," | "]}),Object(L.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(L.jsx)(p.b,{to:"/login",children:"Login"})})]})},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsx)(z,Object(j.a)({},this.props))}}]),n}(a.a.Component),F=Object(b.b)((function(e){return{isAuth:e.Auth.isAuth,login:e.Auth.login}}),{logout:h.d})(U),M=n(8),D=n.n(M),R=function(){return Object(L.jsxs)("nav",{className:D.a.nav,children:[Object(L.jsx)("div",{className:D.a.item,children:Object(L.jsx)(p.b,{to:"/profile",activeClassName:D.a.active,children:"Profile"})}),Object(L.jsx)("div",{className:"".concat(D.a.item," ").concat(D.a.active),children:Object(L.jsx)(p.b,{to:"/dialogs",activeClassName:D.a.active,children:"Message"})}),Object(L.jsx)("div",{className:D.a.item,children:Object(L.jsx)(p.b,{to:"/users",activeClassName:D.a.active,children:"Users"})}),Object(L.jsx)("div",{className:D.a.item,children:Object(L.jsx)(p.b,{to:"/news",activeClassName:D.a.active,children:"News"})}),Object(L.jsx)("div",{className:D.a.item,children:Object(L.jsx)(p.b,{to:"/music",activeClassName:D.a.active,children:"Misic"})}),Object(L.jsx)("div",{className:D.a.item,children:Object(L.jsx)(p.b,{to:"/settings",activeClassName:D.a.active,children:"Settings"})})]})},B=n(85),H=n.n(B),V=function(){return Object(L.jsx)("footer",{className:H.a.footer,children:Object(L.jsx)("div",{children:"REACT 2021"})})},Y=n(52),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,312))})),J=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),W=a.a.lazy((function(){return n.e(6).then(n.bind(null,313))})),X=a.a.lazy((function(){return n.e(9).then(n.bind(null,307))})),q=a.a.lazy((function(){return n.e(8).then(n.bind(null,308))})),K=a.a.lazy((function(){return n.e(10).then(n.bind(null,309))})),Q=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,310))})),Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.isInitializated?Object(L.jsxs)("div",{className:"app-wrapper",children:[Object(L.jsx)(F,{}),Object(L.jsx)(R,{}),Object(L.jsx)("div",{className:"app-wrapper-content",children:Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)(Y.a,{}),children:Object(L.jsxs)(f.d,{children:[Object(L.jsx)(f.b,{path:"/dialogs",render:function(){return Object(L.jsx)(G,{})}}),Object(L.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(L.jsx)(J,{})}}),Object(L.jsx)(f.b,{path:"/users",render:function(){return Object(L.jsx)(W,{})}}),Object(L.jsx)(f.b,{path:"/news",component:X}),Object(L.jsx)(f.b,{path:"/music",component:q}),Object(L.jsx)(f.b,{path:"/settings",component:K}),Object(L.jsx)(f.b,{path:"/login",component:Q})]})})}),Object(L.jsx)(V,{})]}):Object(L.jsx)(Y.a,{})}}]),n}(a.a.Component),$=Object(v.d)(Object(b.b)((function(e){return{isInitializated:e.App.isInitializated}}),{initializeApp:function(){return function(e){e(Object(h.b)()).then((function(){e({type:O})}))}}}))(Z),ee=function(e){return Object(L.jsx)(p.a,{basename:"/social-network",children:Object(L.jsx)(b.a,{store:E,children:Object(L.jsx)($,{})})})};c.a.render(Object(L.jsx)(ee,{}),document.getElementById("root")),i()},23:function(e,t,n){e.exports={loading:"Preloader_loading__1hIkh",dot:"Preloader_dot__qiUzq",wave:"Preloader_wave__WyWyJ"}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b}));var r=n(7),a=n.n(r),s=n(17),c=n(3),i=n(10),u=n(45),o="my-app/auth/SET-USER-DATA",l={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},d=function(e,t,n,r){return{type:o,data:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.login();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.email,u=r.login,t(d(s,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.setLogin(e,t,n);case 2:0===(c=r.sent).data.resultCode?s(f()):s(Object(u.a)("Login",{_error:c.data.messages[0]}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.Logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),t.data);default:return e}}},52:function(e,t,n){"use strict";n(0);var r=n(23),a=n.n(r),s=n(2);t.a=function(){return Object(s.jsxs)("div",{class:a.a.loading,children:[Object(s.jsx)("div",{class:a.a.dot}),Object(s.jsx)("div",{class:a.a.dot}),Object(s.jsx)("div",{class:a.a.dot}),Object(s.jsx)("div",{class:a.a.dot}),Object(s.jsx)("div",{class:a.a.dot})]})}},53:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(7),a=n.n(r),s=n(17),c=n(27),i=n(3),u=n(10),o="my-app/profile/ADD-POST",l="my-app/profile/SET-PROFILE",d="my-app/profile/SET-STATUS",f="my-app/profile/DELETE-POST",p={posts:[{id:1,message:"How are you",likesCount:12},{id:2,message:"My first post",likesCount:1}],status:"",profile:null},b=function(e){return{type:o,newPostText:e}},j=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:return r=t.sent,t.abrupt("return",n((a=r.data,{type:l,profile:a})));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(j(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(j(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.newPostText,likesCount:0}])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(27),a=n(3),s="my-app/dialogs/ADD-MESSAGE",c={dialogs:[{id:1,name:"Evgeniy"},{id:2,name:"Misha"},{id:3,name:"Serezha"},{id:4,name:"Pasha"},{id:5,name:"Evgen"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessageText:""},i=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{newMessageText:"",messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.newMessageText}])});default:return e}}},8:function(e,t,n){e.exports={nav:"Nav_nav__3gICw",item:"Nav_item__96rLj",active:"Nav_active__XSt-p"}},80:function(e,t,n){"use strict";n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return P})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return I}));var r=n(7),a=n.n(r),s=n(17),c=n(27),i=n(3),u=n(10),o=function(e,t,n,r){return e.map((function(e){return e[n]==t?Object(i.a)(Object(i.a)({},e),r):e}))},l="my-app/users/follow",d="my-app/users/unfollow",f="my-app/users/set-users",p="my-app/users/set-currnet-page",b="my-app/users/set-total-users-count",j="my-app/users/set-fetching",h="my-app/users/TOOGLE-FOLLOWING-IN-PROCESS",O={users:[],totalUsers:0,countUsersOnPage:100,currentPage:1,isFetching:!1,followingInProcess:[]},g=function(e){return{type:d,userId:e}},m=function(e){return{type:l,userId:e}},v=function(e,t){return{type:h,isFetching:e,userId:t}},x=function(e){return{type:j,isFetching:e}},w=function(e){return{type:p,currentPage:e}},y=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(v(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=function(e){return function(t){y(t,e,u.b.follow.bind(u.b),g)}},_=function(e){return function(t){y(t,e,u.b.unfollow.bind(u.b),m)}},I=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.d.getUsers(e,t);case 3:s=n.sent,r(x(!1)),r((c=s.items,{type:f,users:c})),r((a=s.totalCount,{type:b,totalUsersCount:a}));case 7:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case p:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsers:t.totalUsersCount});case j:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(c.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!==t.userId}))});default:return e}}},85:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}}},[[226,2,3]]]);
//# sourceMappingURL=main.011f0f1c.chunk.js.map