(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{237:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(58);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,s=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){o=!0,s=i}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},299:function(e,n,t){e.exports={user:"NQZLumLFDAflgtoLZK0gt",ava:"_2Ld25nfAt9hEVet_E9aZs1"}},300:function(e,n,t){e.exports={pagination:"Pagination_pagination__1KkdA",currentPage:"Pagination_currentPage__1xwDU"}},301:function(e,n,t){e.exports={users:"_3rtiJ0Eard52R00rlLySYJ"}},313:function(e,n,t){"use strict";t.r(n);var r=t(34),o=t(35),s=t(37),c=t(36),a=t(0),i=t.n(a),u=t(29),l=t(80),f=t(16),g=t(299),d=t.n(g),p=t(2),j=function(e){var n=e.user,t=e.followingInProcess,r=e.follow,o=e.unfollow;return Object(p.jsxs)("div",{className:d.a.user,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:d.a.ava,children:Object(p.jsx)(f.b,{to:"/profile/"+n.id,children:Object(p.jsx)("img",{src:n.photos.small?n.photos.small:"https://www.wired.com/wp-content/uploads/2015/09/10093860866_803211264e_o.jpg",alt:"ava"})})}),Object(p.jsx)("div",{children:n.followed?Object(p.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"unfollow"}):Object(p.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"follow"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:n.name}),Object(p.jsx)("div",{children:n.status?n.status:"no status"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},b=t(237),h=t(300),P=t.n(h),O=function(e){for(var n=e.onChangePage,t=e.totalItems,r=e.countItemsOnPage,o=e.currentPage,s=e.portionSize,c=void 0===s?10:s,i=Math.ceil(t/r),u=[],l=1;l<=i;l++)u.push(l);var f=Math.ceil(i/c),g=Math.ceil(o/c),d=Object(a.useState)(g),j=Object(b.a)(d,2),h=j[0],O=j[1],v=(h-1)*c+1,w=(h-1)*c+c;return Object(p.jsxs)("div",{className:P.a.pagination,children:[h>1&&Object(p.jsx)("button",{onClick:function(){O(h-1)},children:"Prev"}),u.filter((function(e){return e>=v&&e<=w})).map((function(e){return Object(p.jsx)("span",{onClick:function(){n(e)},className:o===e&&P.a.currentPage,children:e})})),h<f&&Object(p.jsx)("button",{onClick:function(){O(h+1)},children:"Next"})]})},v=t(301),w=t.n(v),m=function(e){var n=e.onChangePage,t=e.totalUsers,r=e.countUsersOnPage,o=e.currentPage,s=e.users,c=e.followingInProcess,a=e.follow,i=e.unfollow;return Object(p.jsxs)("div",{className:w.a.users,children:[Object(p.jsx)(O,{onChangePage:n,totalItems:t,countItemsOnPage:r,currentPage:o}),s.map((function(e){return Object(p.jsx)(j,{user:e,followingInProcess:c,follow:a,unfollow:i},e.id)}))]})},x=t(52),U=t(22),y=function(e){return e.UsersPage.users},C=function(e){return e.UsersPage.totalUsers},I=function(e){return e.UsersPage.currentPage},_=function(e){return e.UsersPage.countUsersOnPage},k=function(e){return e.UsersPage.isFetching},N=function(e){return e.UsersPage.followingInProcess},S=function(e){Object(s.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=n.call.apply(n,[this].concat(s))).onChangePage=function(n){e.props.setCurretPage(n),e.props.getCurrentPageUsers(n,e.props.countUsersOnPage)},e.render=function(){return Object(p.jsx)(p.Fragment,{children:e.props.isFetching?Object(p.jsx)(x.a,{}):Object(p.jsx)(m,{currentPage:e.props.currentPage,totalUsers:e.props.totalUsers,countUsersOnPage:e.props.countUsersOnPage,onChangePage:e.onChangePage,users:e.props.users,follow:e.props.follow,unfollow:e.props.unfollow,followingInProcess:e.props.followingInProcess})})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentPageUsers(this.props.currentPage,this.props.countUsersOnPage)}}]),t}(i.a.Component);n.default=Object(U.d)(Object(u.b)((function(e){return{users:y(e),totalUsers:C(e),currentPage:I(e),countUsersOnPage:_(e),isFetching:k(e),followingInProcess:N(e)}}),{follow:l.b,unfollow:l.e,setCurretPage:l.d,getCurrentPageUsers:l.c}))(S)}}]);
//# sourceMappingURL=6.f8e65119.chunk.js.map