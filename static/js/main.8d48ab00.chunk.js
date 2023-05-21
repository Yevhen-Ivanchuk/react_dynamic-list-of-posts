(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s,a=n(9),c=n.n(a),i=n(11),r=n(2),o=n(1),l=(n(16),n(17),n(18),n(3)),d=n.n(l);!function(e){e.all="all",e.comment="comment"}(s||(s={}));var m=n(10),u=n(8),j=n.n(u),b="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return n&&(s.body=JSON.stringify(n),s.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(b+e,s)})).then((function(e){return e.json()}))}var x=function(e){return O(e)},f=function(e,t){return O(e,"POST",t)},p=function(e){return O(e,"DELETE")},v=function(){var e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/users");case 3:return t=e.sent,e.abrupt("return",t||null);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=n(0),g=function(e){var t=e.posts,n=e.onHandleSidebarButton,s=e.selectedId;return null!==t&&void 0!==t&&t.length?Object(N.jsxs)("div",{"data-cy":"PostsList",children:[Object(N.jsx)("p",{className:"title",children:"Posts:"}),Object(N.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"has-background-link-light",children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:" "})]})}),Object(N.jsx)("tbody",{children:t.map((function(e){return Object(N.jsxs)("tr",{"data-cy":"Post",children:[Object(N.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(N.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(N.jsx)("td",{className:"has-text-right is-vcentered",children:Object(N.jsx)("button",{type:"button","data-cy":"PostButton",className:d()("button","is-link",{"is-light":s!==e.id}),onClick:function(){return n(e)},children:s===e.id?"Close":"Open"})})]},e.id)}))})]})]}):Object(N.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})},y=(n(21),function(){return Object(N.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(N.jsx)("div",{className:"Loader__content"})})}),S=function(e){var t=e.comments,n=e.onHandleDeleteComment;return null!==t&&void 0!==t&&t.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:"title is-4",children:"Comments:"}),null===t||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(N.jsxs)("div",{className:"message-header",children:[Object(N.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(N.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(e.id)},children:"delete button"})]}),Object(N.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}):Object(N.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})},C=n(6);function w(e,t){var n=Object(o.useState)(e),s=Object(r.a)(n,2),a=s[0],c=s[1];return{value:a,onChange:function(e){c(e.target.value),t()},reset:function(){c("")}}}var k=function(e){var t=e.onHandleFormSubmit,n=e.canselDangerInput,a=e.postId,c=e.isLoadingNewComment,i=e.isWarningUpdate,r=e.isDangerSubmit,o=w("",n),l=w("",n),m=w("",n),u=r&&!o.value,j=r&&!l.value,b=r&&!m.value,h=function(e){if(e===s.all)o.reset(),l.reset(),m.reset();else m.reset()};return Object(N.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return t(e,h,o.value,l.value,m.value,a)},children:[Object(N.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(N.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",Object(C.a)({type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:d()("input",{"is-danger":u})},o)),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-user"})}),u&&Object(N.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(N.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),u&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(N.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(N.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",Object(C.a)({type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:d()("input",{"is-danger":j})},l)),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-envelope"})}),j&&Object(N.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(N.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),j&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(N.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("textarea",Object(C.a)({id:"comment-body",name:"body",placeholder:"Type comment here",className:d()("textarea",{"is-danger":b})},m))}),b&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(N.jsxs)("div",{className:"field is-grouped",children:[Object(N.jsxs)("div",{className:"control",children:[Object(N.jsx)("button",{type:"submit",className:d()("button","is-link",{"is-loading":c}),children:"Add"}),i&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Try again"})]}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return h(s.all)},children:"Clear"})})]})]})},I=function(e){var t=e.comments,n=e.postTitle,s=e.postBody,a=e.isWrongPostResponse,c=e.isPostLoading,i=e.postId,r=e.isCommentForm,o=e.isLoadingNewComment,l=e.isDangerSubmit,d=e.isWarningUpdate,m=e.onHandleFormSubmit,u=e.setIsCommentForm,j=e.canselDangerInput,b=e.onHandleDeleteComment;return Object(N.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(N.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(i,": ").concat(n)}),Object(N.jsx)("p",{"data-cy":"PostBody",children:s})]}),Object(N.jsxs)("div",{className:"block",children:[c&&Object(N.jsx)(y,{}),a&&Object(N.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!c&&!a&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{comments:t,onHandleDeleteComment:b}),!r&&Object(N.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return u(!0)},children:"Write a comment"})]})]}),r&&Object(N.jsx)(k,{isLoadingNewComment:o,isDangerSubmit:l,isWarningUpdate:d,postId:i,onHandleFormSubmit:m,canselDangerInput:j})]})})},E=function(e){var t=e.users,n=e.onHandleUserSelect,s=e.onHandleSelectButton,a=e.isActiveList,c=e.userName;return Object(N.jsxs)("div",{"data-cy":"UserSelector",className:d()("dropdown",{"is-active":a}),children:[Object(N.jsx)("div",{className:"dropdown-trigger",children:Object(N.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return s()},children:[Object(N.jsx)("span",{children:"".concat(c)}),Object(N.jsx)("span",{className:"icon is-small",children:Object(N.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(N.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(N.jsx)("div",{className:"dropdown-content",children:t&&t.map((function(e){return Object(N.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){return n(e.id,e.name)},children:e.name},e.id)}))})})]})},F=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)("Choose a user"),l=Object(r.a)(c,2),m=l[0],u=l[1],j=Object(o.useState)(null),b=Object(r.a)(j,2),h=b[0],O=b[1],S=Object(o.useState)(null),C=Object(r.a)(S,2),w=C[0],k=C[1],F=Object(o.useState)(!1),P=Object(r.a)(F,2),D=P[0],H=P[1],L=Object(o.useState)(!1),T=Object(r.a)(L,2),B=T[0],U=T[1],W=Object(o.useState)(!1),A=Object(r.a)(W,2),M=A[0],_=A[1],J=Object(o.useState)(null),q=Object(r.a)(J,2),R=q[0],G=q[1],Y=Object(o.useState)(null),z=Object(r.a)(Y,2),K=z[0],Q=z[1],V=Object(o.useState)(!1),X=Object(r.a)(V,2),Z=X[0],$=X[1],ee=Object(o.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],se=te[1],ae=Object(o.useState)(!1),ce=Object(r.a)(ae,2),ie=ce[0],re=ce[1],oe=Object(o.useState)(!1),le=Object(r.a)(oe,2),de=le[0],me=le[1],ue=Object(o.useState)(!1),je=Object(r.a)(ue,2),be=je[0],he=je[1],Oe=Object(o.useState)(!1),xe=Object(r.a)(Oe,2),fe=xe[0],pe=xe[1];Object(o.useEffect)((function(){v().then((function(e){return O(e)})).catch((function(){return U(!0)}))}),[]);return Object(N.jsx)("main",{className:"section",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"tile is-ancestor",children:[Object(N.jsx)("div",{className:"tile is-parent",children:Object(N.jsxs)("div",{className:"tile is-child box is-success",children:[Object(N.jsx)("div",{className:"block",children:Object(N.jsx)(E,{users:h,userName:m,isActiveList:M,onHandleUserSelect:function(e,t){a(e),u(t),H(!0),_(!1),B&&U(!1),function(e){return x("/posts?userId=".concat(e))}(e).then((function(e){return k(e)})).catch((function(){return U(!0)})).finally((function(){return H(!1)}))},onHandleSelectButton:function(){_((function(e){return!e}))}})}),Object(N.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!n&&Object(N.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),D&&Object(N.jsx)(y,{}),!D&&n&&!B&&Object(N.jsx)(g,{posts:w,onHandleSidebarButton:function(e){var t;G((function(t){return t===e?null:e})),se(!0),re(!1),(t=e.id,x("/comments?postId=".concat(t))).then((function(e){return Q(e)})).catch((function(){return $(!0)})).finally((function(){return se(!1)}))},selectedId:null===R||void 0===R?void 0:R.id}),B&&Object(N.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"})]})]})}),Object(N.jsx)("div",{"data-cy":"Sidebar",className:d()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":!!R}),children:Object(N.jsx)("div",{className:"tile is-child box is-success ",children:Object(N.jsx)(I,{comments:K,postTitle:null===R||void 0===R?void 0:R.title,postBody:null===R||void 0===R?void 0:R.body,postId:null===R||void 0===R?void 0:R.id,isWrongPostResponse:Z,isPostLoading:ne,isCommentForm:ie,isLoadingNewComment:de,isDangerSubmit:be,isWarningUpdate:fe,setIsCommentForm:re,onHandleFormSubmit:function(e,t,n,a,c,r){if(e.preventDefault(),n&&a&&c){me(!0);var o={postId:r,name:n,email:a,body:c};pe(!1),function(e){return f("/comments",e)}(o).then((function(e){return n=e,Q((function(e){return e?[].concat(Object(i.a)(e),[n]):[n]})),he(!1),void t(s.comment);var n})).catch((function(){return pe(!0)})).finally((function(){return me(!1)}))}else he(!0)},canselDangerInput:function(){he(!1)},onHandleDeleteComment:function(e){var t,n=K;Q((function(t){return t?null===t||void 0===t?void 0:t.filter((function(t){return t.id!==e})):t})),(t=e,p("/comments/".concat(t))).then().catch((function(){return Q(n)}))}})})})]})})})};c.a.render(Object(N.jsx)(F,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8d48ab00.chunk.js.map