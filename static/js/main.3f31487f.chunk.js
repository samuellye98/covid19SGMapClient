(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){e.exports=a(74)},43:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),s=(a(43),a(35)),l=a(13),i=a(25),u=a.n(i),m=function(){return Object(l.usePromiseTracker)().promiseInProgress&&o.a.createElement("div",{style:{width:"100vw",backgroundColor:"black",height:"100vh",display:"flex",margin:"0 auto",justifyContent:"center",alignItems:"center",position:"absolute"}},o.a.createElement(u.a,{type:"Grid",color:"#00BFFF",height:80,width:80}))},p=a(36),d=a(26),b=a(27),f=a(14),h=a(37),g=a(34),v=a(28),y=a.n(v),C=[{name:"Case Number",selector:"caseNo",sortable:!0},{name:"Patient",selector:"patient",sortable:!0},{name:"Age",selector:"age",sortable:!0},{name:"Gender",selector:"gender",sortable:!0},{name:"Nationality",selector:"nationality",sortable:!0},{name:"Status",selector:"status",sortable:!0},{name:"Cluster",selector:"cluster",sortable:!0},{name:"Source of Infection",selector:"infectionSource",sortable:!0},{name:"Country of Origin",selector:"countryOfOrigin",sortable:!0},{name:"Symptomatic to Confirmation",selector:"symptomaticToConfirmation",sortable:!0},{name:"Days To Recover",selector:"daysToRecover",sortable:!0},{name:"Symptomatic At",selector:"symptomaticAt",sortable:!0},{name:"Displayed Symptoms?",selector:"displayedSymptoms",sortable:!0}],O=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={tableData:[]},n.updateTable=n.updateTable.bind(Object(f.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.mapData.length!==e.mapData.length&&this.updateTable()}},{key:"updateTable",value:function(){var e=this;0!==this.props.mapData.length&&this.props.mapData.features.map((function(t){var a;(a=e.state.tableData).push.apply(a,Object(p.a)(t.properties.cases))}))}},{key:"render",value:function(){return o.a.createElement(y.a,{title:"SG COVID-19 Clusters",columns:C,data:this.state.tableData,overflowY:!0})}}]),a}(n.Component),E=a(8),j=a.n(E),w=(a(71),a(72),{id:"clusters",source:"covid19sg",type:"circle",paint:{"circle-opacity":.75,"circle-stroke-width":["interpolate",["linear"],["get","numCases"],1,1,100,1.75],"circle-radius":["interpolate",["linear"],["get","numCases"],1,4,10,8,50,10,100,14,200,18,500,40],"circle-color":["interpolate",["linear"],["get","numCases"],1,"#ffffb2",10,"#fed976",20,"#feb24c",50,"#fd8d3c",100,"#fc4e2a",200,"#e31a1c",500,"#b10026"]}});j.a.accessToken="pk.eyJ1Ijoic2FtdWVsbHllOTgiLCJhIjoiY2s4dG01OTYzMDFxMDNpcHJzcDFxM2EzaCJ9.oAf0XgjGsvr3F9LZEw_L-Q";var k=function(){var e=Object(n.useRef)(null),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){Object(l.trackPromise)(fetch("https://covid19sgapi.herokuapp.com/").then((function(e){return e.json()})).then((function(e){c(e)})).catch(console.log))}),[]),Object(n.useEffect)((function(){if(0!==r.length){var t=new j.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[103.8198,1.3521],zoom:10.5});t.scrollZoom.disable(),t.addControl(new j.a.NavigationControl),t.addControl(new j.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),t.once("load",(function(){t.addSource("covid19sg",{type:"geojson",data:r}),t.addLayer(w)}));var a=new j.a.Popup({closeButton:!1,closeOnClick:!1});t.on("mousemove","clusters",(function(e){var n=e.features[0].properties,o=n.numCases,r=n.location;t.getCanvas().style.cursor="pointer";for(var c="<p>Cluster: <b>".concat(r,"</b></p>\n              <p>Cases: <b>").concat(o,"</b></p>\n              "),s=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-s[0])>180;)s[0]+=e.lngLat.lng>s[0]?360:-360;a.setLngLat(s).setHTML(c).addTo(t)})),t.on("mouseleave","clusters",(function(){t.getCanvas().style.cursor="",a.remove()}))}}),[r]),o.a.createElement("div",{className:"indexContainer"},o.a.createElement(m,null),o.a.createElement("div",{className:"mapContainer"},o.a.createElement("div",{className:"mapHeader"},o.a.createElement("h1",null,"Singapore COVID-19 Clusters")),o.a.createElement("div",{className:"mapBox",ref:e}),o.a.createElement(O,{mapData:r})))},D=a(32),T=a(6);function S(){return o.a.createElement("div",null,o.a.createElement(D.a,null,o.a.createElement(T.c,null,o.a.createElement(T.a,{exact:!0,path:"/",component:k}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);