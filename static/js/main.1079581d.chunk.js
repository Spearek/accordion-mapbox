(this["webpackJsonpreact-accordion-mapbox"]=this["webpackJsonpreact-accordion-mapbox"]||[]).push([[0],{29:function(e,a,t){e.exports=t(48)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),c=t(15),r=t.n(c),o=(t(34),t(35),t(36),t(20)),i=t(11),d=(t(37),t(50)),u=t(51),m=t(53),s=t(52),p=t(17),E=function(e){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("i",{className:"now-ui-icons location_map-big"})),l.a.createElement("td",null,e.longitude),l.a.createElement("td",null,e.latitude),l.a.createElement("td",null,l.a.createElement("i",{className:"now-ui-icons ui-1_simple-remove",onClick:e.removeMarker})))},f=function(e){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"D\u0142ugo\u015b\u0107"),l.a.createElement("th",null,"Szeroko\u015b\u0107"),l.a.createElement("th",null,"Usu\u0144"))),l.a.createElement("tbody",null,e.data.map((function(a){return l.a.createElement(E,{key:a.id,latitude:a.latitude,longitude:a.longitude,removeMarker:e.removeMarker.bind(void 0,a.id)})}))))},b=function(e){var a=function(a,t){var n=Object(i.a)(t.lngLat,2),l=n[0],c=n[1];e.dragMarker(a,l,c)};return l.a.createElement("div",null,e.data.map((function(e){return l.a.createElement(p.a,{key:e.id,longitude:e.longitude,latitude:e.latitude,offsetLeft:-10,offsetTop:-10,draggable:!0,onDragEnd:a.bind(void 0,e.id)},l.a.createElement("i",{className:"now-ui-icons location_pin"}))})))};var h=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({latitude:52.0628,longitude:19.7923,zoom:5.1}),E=Object(i.a)(r,2),h=E[0],v=E[1],g=Object(n.useState)([]),w=Object(i.a)(g,2),k=w[0],O=w[1],j=function(e){t.includes(e)?c(t.filter((function(a){return a!==e}))):c([].concat(Object(o.a)(t),[e]))};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"acordeon"},l.a.createElement("div",{"aria-multiselectable":!0,id:"accordion",role:"tablist"},l.a.createElement(d.a,{className:"no-transition"},l.a.createElement(u.a,{className:"card-collapse",id:"headingOne",role:"tab"},l.a.createElement("h5",{className:"mb-0 panel-title"},l.a.createElement("a",{"aria-expanded":t.includes(1),className:"collapsed","data-parent":"#accordion",href:"#pablo",id:"collapseOne",onClick:function(e){e.preventDefault(),j(1)}},"Mapa"))),l.a.createElement(m.a,{isOpen:t.includes(1)},l.a.createElement(s.a,null,l.a.createElement(p.b,Object.assign({},h,{width:"70vw",height:"60vh",mapboxApiAccessToken:"pk.eyJ1Ijoic3BlYXJlayIsImEiOiJjazhsdmhzMWswNmc5M21vMjhrZXpxMmwzIn0.0ZcL6pbb5Wk1h7PL4KvrFw",mapStyle:"mapbox://styles/spearek/ck8lxcwd913fv1inxw2wl5ia8",onViewportChange:v,onClick:function(e){var a=e.timeStamp,t=Object(i.a)(e.lngLat,2),n=t[0],l=t[1];O((function(e){return[].concat(Object(o.a)(e),[{longitude:n,latitude:l,id:a}])}))}}),l.a.createElement(b,{data:k,dragMarker:function(e,a,t){var n=k.findIndex((function(a){return a.id===e})),l=Object(o.a)(k);l[n]={id:e,longitude:a,latitude:t},O(l)}})))),l.a.createElement(u.a,{className:"card-collapse",id:"headingTwo",role:"tab"},l.a.createElement("h5",{className:"mb-0 panel-title"},l.a.createElement("a",{"aria-controls":"collapseTwo","aria-expanded":t.includes(2),className:"collapsed","data-parent":"#accordion",href:"#pablo",id:"collapseTwo",onClick:function(e){e.preventDefault(),j(2)}},"Dodane miejsca"))),l.a.createElement(m.a,{isOpen:t.includes(2)},l.a.createElement(s.a,null,l.a.createElement(f,{data:k,removeMarker:function(e){var a=k.filter((function(a){return a.id!==e}));O(a)}})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1079581d.chunk.js.map