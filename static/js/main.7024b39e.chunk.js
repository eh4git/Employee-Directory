(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(15),o=a.n(l),s=(a(22),a(23),a(2)),c=a(3),i=a(5),m=a(4),u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header App-header"},n.a.createElement("h1",null,"Employee Directory"))}}]),a}(r.Component);function d(e){return n.a.createElement("div",{className:"searchbox"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-6"},n.a.createElement("input",{className:"form-control",type:"search",placeholder:"Enter Name Here","aria-label":"Search",onChange:e.handleInputChange})))))}var h=a(16),p=a.n(h),f=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("ul",{className:"list-group"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",{className:"tableHead"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Picture"),n.a.createElement("th",{scope:"col",onClick:function(){e.props.handleSort("name")}},"Name (click to sort)"),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"Age"))),n.a.createElement("tbody",null,this.props.rowGenerate())))}}]),a}(r.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("tr",null,n.a.createElement("td",{"data-th":"Image",className:"align-middle"},n.a.createElement("img",{src:this.props.img,alt:"profile image for "+this.props.firstName+" "+this.props.lastName,className:"img-responsive"})),n.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},this.props.firstName," ",this.props.lastName),n.a.createElement("td",{"data-th":"Phone",className:"align-middle"},this.props.phone),n.a.createElement("td",{"data-th":"Email",className:"align-middle"},n.a.createElement("a",{href:"mailto:",target:"__blank"},this.props.email)),n.a.createElement("td",{"data-th":"DOB",className:"align-middle"},this.props.age))}}]),a}(r.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={search:"",users:[],order:"decend",filteredUsers:[]},e.rowGenerate=function(t){return e.state.filteredUsers.map((function(e){return n.a.createElement(v,{key:e.login.uuid,firstName:e.name.first,lastName:e.name.last,img:e.picture.large,email:e.email,phone:e.phone,age:e.dob.age})}))},e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"}),console.log(e.state.order);var a=e.state.filteredUsers.sort((function(a,r){return"ascend"===e.state.order?void 0===a[t]?1:void 0===r[t]?-1:"name"===t?a[t].first.localeCompare(r[t].first):"email"===t?a[t].email.localeCompare(r[t].first):a[t]-r[t]:void 0===a[t]?1:void 0===r[t]?-1:"name"===t?r[t].first.localeCompare(a[t].first):"email"===t?r[t].email.localeCompare(a[t].first):r[t]-a[t]}));e.setState({filteredUsers:a})},e.handleInputChange=function(t){console.log(t.target.value);var a=t.target.value,r=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:r})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){console.log("results",t),e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,{search:this.state.search,handleSort:this.handleSort,handleInputChange:this.handleInputChange}),n.a.createElement("div",{className:"data-area"},n.a.createElement(E,{handleSort:this.handleSort,rowGenerate:this.rowGenerate})))}}]),a}(r.Component);var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7024b39e.chunk.js.map