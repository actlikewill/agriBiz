(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/agribiz.logo.41764122.svg"},30:function(e,a,t){e.exports=t.p+"static/media/bg.aee0d9d4.svg"},41:function(e,a,t){e.exports=t(68)},46:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),i=(t(46),t(5)),o=t(6),s=t(8),m=t(7),u=t(9),d=t(78),p=t(29),E=t.n(p),b=t(30),f=t.n(b),g=t(12),h=Object(g.a)();function v(e){h.push(e)}var N=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.showForm,t=e.toggleForm;return l.a.createElement("form",{onSubmit:function(){return v("/profile")},className:""},l.a.createElement("div",{className:"login-input login-heading"},l.a.createElement("h1",{className:"login-form-heading"},a),l.a.createElement("p",{className:"create-account-text"},"or ",l.a.createElement("a",{onClick:t,className:"create-account-link",href:"#"},"create an account."))),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Username"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Password"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("button",{className:"login-button",placeholder:"Password",type:"submit"},"LOGIN")),l.a.createElement("a",{className:"create-account-link",href:"#"},"Forgot your password?"))}}]),a}(n.Component),x=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.showForm,t=e.toggleForm;return l.a.createElement("form",{className:""},l.a.createElement("div",{className:"login-input login-heading"},l.a.createElement("h1",{className:"login-form-heading"},a),l.a.createElement("p",{className:"create-account-text"},"or ",l.a.createElement("a",{onClick:t,className:"create-account-link",href:"#"},"login to my account."))),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Email"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Username"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Password"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("input",{placeholder:"Repeat Password"})),l.a.createElement("div",{className:"login-input"},l.a.createElement("button",{className:"login-button",placeholder:"Password",type:"submit"},"SIGN ME UP")))}}]),a}(n.Component),w={backgroundImage:"url(".concat(f.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).toggleForm=function(){document.getElementById("show-form");var e="Sign In"===t.state.showForm?"Sign Up":"Sign In";t.setState({showForm:e})},t.linkLabel=function(){return"Sign In"===t.state.showForm?"Sign Up":"Sign In"},t.state={showForm:"Sign In"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.showForm;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bx--grid--full-width login-main",style:w},l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col-lg-11 bx--col-md-8 left item"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:E.a,alt:"agribiz-logo"}))),l.a.createElement("div",{className:"bx--col-lg-5 bx--col-md-8 right item animate-in"},l.a.createElement("div",{className:"welcome"},l.a.createElement("div",{className:"bx--row login-top-links"},l.a.createElement("div",{className:"sign-up-link"},l.a.createElement("a",{onClick:this.toggleForm,href:"#"},this.linkLabel()))),l.a.createElement("div",{className:"bx--row login-form"},l.a.createElement("div",{className:"login-form-container",id:"show-form"},"Sign Up"===e?l.a.createElement(x,{showForm:this.state.showForm,toggleForm:this.toggleForm}):l.a.createElement(N,{showForm:this.state.showForm,toggleForm:this.toggleForm}))))))))}}]),a}(n.Component),j=t(33),y=t.n(j),k=t(32),C=t.n(k),F=t(71),S=t(80),P=t(81),M=t(72),T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{"aria-label":"Header"},l.a.createElement(S.a,{href:"/",prefix:"Agribiz"}),l.a.createElement(P.a,null,l.a.createElement(M.a,{"aria-label":"User",onClick:function(){return v("/profile")}},l.a.createElement(C.a,null)),l.a.createElement(M.a,{"aria-label":"App Switcher"},l.a.createElement(y.a,null)))))},I=function(){return l.a.createElement("div",{className:"footer"})},B=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(T,null),e,l.a.createElement(I,null))}}]),a}(n.Component),D=t(77),U=t(74),z=t(75),L=t(69),A=t(76),G=t(35),J=t.n(G),R=t(36),W=t.n(R),H=t(37),K=t.n(H),Y=t(18),_=t(73),V=t(79),$=t(40),q=t(34),Q=function(e,a,t){var l=Object(n.useState)(e),r=Object(Y.a)(l,2),c=r[0],i=r[1];Object(n.useEffect)(function(){i(e)},[e]);return{value:c,onChange:function(e){var a=e.target;i(a.value)},name:a,onClick:t}},X={firstName:"Joe",secondName:"Mkulima",lastName:"Mkarimu"},Z=function(e){var a=e.openModal,t=Object(n.useState)(X),r=Object(Y.a)(t,2),c=r[0],i=(r[1],Q(c&&c.firstName,"firstName",a)),o=Q(c&&c.secondName,"secondName",a),s=Q(c&&c.lastName,"lastName",a);return l.a.createElement(_.a,{onSubmit:function(e){e.preventDefault(),console.log(function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=a.map(function(e){return Object(q.a)({},e.name,e.value)});return Object.assign.apply(Object,[{}].concat(Object($.a)(n)))}(i,o,s))}},l.a.createElement("div",{className:"bx--grid bx--grid--full-width"},l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"Personal Information")),l.a.createElement("div",{className:"bx--row profile-details-input"},l.a.createElement("div",{className:"bx--col-lg input-class"},l.a.createElement(V.a,Object.assign({},i,{onClick:function(){return a()},labelText:"First Name:",id:"first-name"}))),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,Object.assign({},o,{labelText:"Second Name:",id:"second-name"}))),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,Object.assign({},s,{labelText:"Last Name:",id:"last-name"})))),l.a.createElement("div",{className:"bx--row profile-details-input"},l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"ID/Passport Number:",id:"id-number"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Gender:",id:"gender"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Date of Birth:",id:"d-o-b"}))),l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"Contact Information")),l.a.createElement("div",{className:"bx--row profile-details-input"},l.a.createElement("div",{className:"bx--col-lg input-class"},l.a.createElement(V.a,{labelText:"Phone Number:",id:"id-number"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Mobile Number:",id:"gender"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Email",id:"d-o-b"}))),l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"Account Information")),l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"username input bx-col-4"},l.a.createElement(V.a,{labelText:"Username: ",id:"user-name"}))),l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"username input bx-col-4"},l.a.createElement(V.a,{labelText:"Current Email: ",id:"user-name"})))))},ee=t(23),ae={overflow:"scroll",height:"50%",width:"50%"},te=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(ee.Map,{google:this.props.google,zoom:8,style:ae,initialCenter:{lat:.0236,lng:37.9062}})}}]),a}(n.Component),ne=Object(ee.GoogleApiWrapper)({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/agriBiz"}).APIKEY})(te),le=function(){return l.a.createElement("div",{className:"bx--grid bx--grid--full-width"},l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"Farm Details")),l.a.createElement("div",{className:"bx--row profile-details-input"},l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Farm Location",id:"first-name"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Main Crop:",id:"second-name"})),l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement(V.a,{labelText:"Route:",id:"last-name"}))),l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"Farm Location")),l.a.createElement(ne,null))},re=function(){return l.a.createElement("div",{className:"bx--grid bx--grid--full-width"},l.a.createElement("div",{className:"profile-details-heading"},l.a.createElement("h1",null,"My Subscriptions")))},ce=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).renderProfileHeader=function(){return l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col-lg-12 bx--offset-lg-4"},l.a.createElement("h1",null,"John Mkulima"),l.a.createElement("h5",null,"Uasin Gishu")))},t.renderProfileButtons=function(){var e=function(){return{onChange:function(e){t.setState({profileDetailTab:e.name})}}},a=function(){return{}}();return l.a.createElement(D.a,Object.assign({},e(),{className:"profile-buttons"}),l.a.createElement(U.a,Object.assign({name:"personal",text:"Personal","data-target":".personal"},a)),l.a.createElement(U.a,Object.assign({name:"farm",text:"Farm","data-target":".farm"},a)),l.a.createElement(U.a,Object.assign({name:"subscriptions",text:"Subscriptions","data-target":".subscriptions"},a)))},t.renderProfileSideBar=function(){return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"profile-avatar"},l.a.createElement("img",{alt:"avatar",src:"https://i2.wp.com/www.ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png"})),l.a.createElement("div",{className:"profile-summary"},l.a.createElement("div",{className:"profile-summary-item"},l.a.createElement("span",null,l.a.createElement(J.a,{className:"profile-summary-icon"})),"johnmkulima@email.com"),l.a.createElement("div",{className:"profile-summary-separator"}),l.a.createElement("div",{className:"profile-summary-item"},l.a.createElement("span",null,l.a.createElement(W.a,{className:"profile-summary-icon"})),"+254 724 000 112"),l.a.createElement("div",{className:"profile-summary-separator"}),l.a.createElement("div",{className:"profile-summary-item"},l.a.createElement("span",null,l.a.createElement(K.a,{className:"profile-summary-icon"})),"Uasin Gishu")))},t.openModal=function(){t.setState(function(){return{showModal:!0}})},t.closeModal=function(){t.setState(function(){return{showModal:!1}})},t.renderProfileDetails=function(){var e=t.state.profileDetailTab;return l.a.createElement("div",{className:"bx--col-lg"},l.a.createElement("div",{hidden:"personal"!==e,className:"personal"},l.a.createElement(Z,{openModal:t.openModal})),l.a.createElement("div",{hidden:"farm"!==e,className:"farm"},l.a.createElement(le,null)),l.a.createElement("div",{hidden:"subscriptions"!==e,className:"subscriptions"},l.a.createElement(re,null)))},t.notificationProps=function(){return{kind:"success",lowContrast:!1,role:"alert",title:"Welcome to your Profile.",subtitle:"You can edit any entry simply by clicking on it.",iconDescription:"close",caption:"",hideCloseButton:!1,onCloseButtonClick:function(){console.log("close notification")}}},t.state={profileDetailTab:"personal",showModal:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showModal;return l.a.createElement(z.a,{className:"profile-wrapper"},l.a.createElement(A.a,Object.assign({className:"toast"},this.notificationProps())),l.a.createElement("div",{className:"bx--grid--full-width"},l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col profile-header"},this.renderProfileHeader())),l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col-lg-4  bx--col-md-4 profile profile-sidebar"},this.renderProfileSideBar()),l.a.createElement("div",{className:"bx--col-lg-12 bx--col-md-4 profile profile-content"},l.a.createElement("div",{className:"bx--row profile-content-tabs"},this.renderProfileButtons()),l.a.createElement("div",{className:"bx--row profile-content-details"},this.renderProfileDetails()))),l.a.createElement("div",{className:"animation-wrapper"},a?l.a.createElement("div",{className:"confirm-edit-wrapper"},l.a.createElement("div",{className:"confirm-edit"},l.a.createElement(L.a,{className:"profile-discard-changes-button",onClick:function(){return e.closeModal()},size:"normal"},"Discard Changes"),l.a.createElement(L.a,{className:"profile-keep-changes-button",size:"normal"},"Keep Changes"))):null)))}}]),a}(n.Component),ie=function(){return l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:O}),l.a.createElement(B,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/profile",component:ce}))))},oe=(t(67),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.b,{history:h},l.a.createElement(ie,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.8a78f98b.chunk.js.map