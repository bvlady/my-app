(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{291:function(t,e,s){t.exports={content:"ProfileInfo_content__2UiwA",descriptionBlock:"ProfileInfo_descriptionBlock__bWq4n",preloader:"ProfileInfo_preloader__2K8Hr",mainPhoto:"ProfileInfo_mainPhoto__1020S",contact:"ProfileInfo_contact__1LGfJ"}},292:function(t,e,s){t.exports={content:"Profile_content__1UUwC",cat:"Profile_cat__1oS50"}},293:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3IUhd",posts:"MyPosts_posts__NHUBT"}},294:function(t,e,s){t.exports={item:"Post_item__9EetR"}},296:function(t,e,s){"use strict";s.r(e);var o=s(3),c=s(35),n=s(36),i=s(38),r=s(37),a=s(0),j=s.n(a),l=s(292),u=s.n(l),b=s(97),d=s(291),p=s.n(d),h=s(66),f=s(1),O=function(t){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),o=s[0],c=s[1],n=Object(a.useState)(t.status),i=Object(b.a)(n,2),r=i[0],j=i[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!o&&Object(f.jsxs)("div",{className:p.a.content,children:[Object(f.jsx)("b",{children:"Status:"})," ",Object(f.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"------"})]}),o&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},value:r})})]})},x=s(107),m=s(46),v=s(129),P=s(48),g=s.n(P),k=Object(v.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,o=t.error;return Object(f.jsxs)("form",{onSubmit:e,children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"save"})}),o&&Object(f.jsx)("div",{className:g.a.formSummaryError,children:o}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Full name"}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Looking for a job"}),":",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"My professional skills"}),":",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)]}),"}",Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"About me"}),":",Object(m.c)("About me","aboutMe",[],m.b)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(f.jsx)("div",{className:p.a.contact,children:Object(f.jsxs)("b",{children:[t,": ",Object(m.c)(t,"contacts."+t,[],m.a)]})},t)}))]})]})})),_=function(t){var e=t.profile,s=t.isOwner,o=t.goToEditMode;return Object(f.jsxs)("div",{children:[s&&Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:o,children:"edit"})," "]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(f.jsx)(S,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},S=function(t){var e=t.contactTitle,s=t.contactValue;return Object(f.jsxs)("div",{className:p.a.contact,children:[Object(f.jsx)("b",{children:e}),": ",s]})},y=function(t){var e=t.profile,s=t.status,o=t.updateStatus,c=t.isOwner,n=t.savePhoto,i=t.saveProfile,r=Object(a.useState)(!1),j=Object(b.a)(r,2),l=j[0],u=j[1];if(!e)return Object(f.jsx)("div",{className:p.a.preloader,children:Object(f.jsx)(h.a,{})});return Object(f.jsx)("div",{className:p.a.content,children:Object(f.jsxs)("div",{className:p.a.descriptionBlock,children:[Object(f.jsx)("img",{src:e.photos.large||x.a,className:p.a.mainPhoto}),c&&Object(f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}}),l?Object(f.jsx)(k,{initialValues:e,profile:e,onSubmit:function(t){i(t).then((function(){u(!1)}))}}):Object(f.jsx)(_,{goToEditMode:function(){u(!0)},profile:e,isOwner:c}),Object(f.jsx)(O,{status:s,updateStatus:o})]})})},w=s(96),N=s(293),A=s.n(N),C=s(294),I=s.n(C),F=function(t){return Object(f.jsxs)("div",{className:I.a.item,children:[Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cameronavatar.jpg/200px-Cameronavatar.jpg"}),t.message,";",Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:" like"})," ",t.likeCount]})]})},M=s(89),T=s(64),U=Object(T.a)(10),B=function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(M.a,{name:"newPostText",component:m.b,placeholder:"Post message",validate:[T.b,U]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:" Add post"})})]})},J=(Object(v.a)({form:"ProfileAddNewPostForm"})(B),j.a.memo((function(t){var e=t.posts.map((function(t){return Object(f.jsx)(F,{message:t.message,likeCount:t.likesCount},t.id)}));return Object(f.jsxs)("div",{className:A.a.postsBlock,children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{children:" My posts "})}),Object(f.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(f.jsx)("div",{className:A.a.posts,children:e})]})})));B=Object(v.a)({form:"ProfileAddNewPostForm"})(B);var D=J,E=s(19),L=Object(E.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(w.a)(e))}}}))(D),V=function(t){return Object(f.jsxs)("div",{className:u.a.content,children:[Object(f.jsx)(y,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(f.jsx)(L,{store:t.store})]})},z=s(11),H=s(10),q=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)(V,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(H.d)(Object(E.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:w.d,getStatus:w.c,updateStatus:w.g,savePhoto:w.e,saveProfile:w.f}),z.g)(q)}}]);
//# sourceMappingURL=3.e0f57f56.chunk.js.map