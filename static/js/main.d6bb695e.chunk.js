(this["webpackJsonpgithub-rolodex"]=this["webpackJsonpgithub-rolodex"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/spinner.95364159.gif"},31:function(e,t,a){e.exports=a(70)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),l=a(6),i=a.n(l),o=a(13),u=a(7),m=a(8),p=a(10),h=a(9),d=a(11),f=a(5),b=a(1),E=a(14),g=a.n(E),_=(a(54),function(e){var t=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},t))}),v=(a(55),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({text:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.text?(e.props.searchUser(e.state.text),e.setState({text:""})):alert("please type something")},e.state={text:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showClear,a=e.clearUser;return r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"search__group"},r.a.createElement("input",{className:"search__group-input",type:"text",placeholder:"Search github users...",value:this.state.text,onChange:this.handleChange}),r.a.createElement("button",{className:"search__group-submit"},r.a.createElement("i",{className:"fas fa-search"})))),t&&r.a.createElement("button",{className:"search__clear-btn",onClick:a},"Clear"))}}]),t}(n.Component)),N=(a(56),function(e){var t=e.user,a=t.login,n=t.avatar_url;return r.a.createElement(f.b,{to:"/user/".concat(a),className:"card"},r.a.createElement("img",{className:"card__img",src:n,alt:a}),r.a.createElement("h2",{className:"card__user"},a),r.a.createElement("div",{className:"card__read-more"},"View profile"))}),x=(a(65),a(30)),w=a.n(x),j=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:"loading-spinner",src:w.a,alt:"loading..."}))},O=(a(66),function(e){var t=e.users;return e.loading?r.a.createElement(j,null):r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(N,{key:e.id,user:e})})))}),k=(a(67),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.match.params.login)}},{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.company,n=e.avatar_url,c=e.location,s=e.bio,l=e.blog,i=e.login,o=e.html_url,u=e.followers,m=e.following,p=e.public_repos,h=e.public_gists,d=e.hireable;return this.props.loading?r.a.createElement(j,null):r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"back-to-search"},r.a.createElement(f.b,{to:"/",className:"user__link"},r.a.createElement("i",{className:"fas fa-arrow-left"})," Go Back"),"Hireable:"," ",d?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"})),r.a.createElement("div",{className:"user__card"},r.a.createElement("div",{className:"user__card-avatar"},r.a.createElement("img",{className:"user__card-avatar-photo",src:n,alt:"{login}"}),r.a.createElement("h2",null,t),r.a.createElement("p",{className:"text-white"},"Location: ",c||"none")),r.a.createElement("div",{className:"user__card-info"},r.a.createElement("div",{className:"user__card-info-bio"},r.a.createElement("strong",{className:"text-white bio-title"},"Bio"),r.a.createElement("p",{className:"text-blur bio-profile"},null===s?"none":s)),r.a.createElement("div",{className:"user__card-info-username"},r.a.createElement("p",{className:"text-white"},"Username: ",i),r.a.createElement("p",{className:"text-white"},"Company: ",null===a?"none":a),r.a.createElement("p",{className:"text-white"},"Website: ",l||"none")),r.a.createElement("a",{className:"user__card-info-url",href:o},"Visit github profile"))),r.a.createElement("div",{className:"user__footer"},r.a.createElement("p",{className:"user__footer-followers"},"Followers: ",u),r.a.createElement("p",{className:"user__footer-following"},"Following: ",m),r.a.createElement("p",{className:"user__footer-repos"},"Public Repos: ",p),r.a.createElement("p",{className:"user__footer-gists"},"Public Gists: ",h)))}}]),t}(n.Component)),y=(a(68),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"About this application"),r.a.createElement("p",null,"This is an app that let you search github users"),r.a.createElement("p",null,"Built with React"),r.a.createElement("p",null,"Version: 1.0.0"),r.a.createElement(f.b,{className:"about__link",to:"/"},"Go back"))}),S=(a(69),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).getUser=function(){var t=Object(o.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,g.a.get("https://api.github.com/users/".concat(a,"?client_id=").concat("29266c3c481388858550","&client_secret=").concat("a46a46d982bee5fe01bd109daf0e312691c0cee3"));case 3:n=t.sent,console.log(n.data),e.setState({user:n.data,loading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchUser=function(){var t=Object(o.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,g.a.get("https://api.github.com/search/users?q=".concat(a,"&client_id=").concat("29266c3c481388858550","&client_secret=").concat("a46a46d982bee5fe01bd109daf0e312691c0cee3"));case 3:n=t.sent,e.setState({users:n.data.items,loading:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearUser=function(){return e.setState({users:[],loading:!1})},e.state={users:[],user:{},loading:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,g.a.get("https://api.github.com/users?client_id=".concat("29266c3c481388858550","&client_secret=").concat("a46a46d982bee5fe01bd109daf0e312691c0cee3"));case 3:t=e.sent,this.setState({users:t.data,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.user,c=t.users,s=t.loading;return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,{title:"GitHub RolodeX"}),r.a.createElement("div",{className:"container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(v,{searchUser:e.searchUser,clearUser:e.clearUser,showClear:c.length>0}),r.a.createElement(O,{loading:s,users:c}))}}),r.a.createElement(b.a,{exact:!0,path:"/about",component:y}),r.a.createElement(b.a,{exact:!0,path:"/user/:login",render:function(t){return r.a.createElement(k,Object.assign({},t,{getUser:e.getUser,user:a,loading:s}))}})))))}}]),t}(n.Component));s.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d6bb695e.chunk.js.map