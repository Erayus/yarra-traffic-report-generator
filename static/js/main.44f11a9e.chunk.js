(this["webpackJsonpyarra-traffic-report-generator"]=this["webpackJsonpyarra-traffic-report-generator"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),c=a.n(l),o=a(16),i=(a(86),a(87),a(88),a(89),a(23)),s=a(24),u=a(27),m=a(25),d=a(28),p=a(21),f=a(26),h=(a(94),a(80)),v=a(71),g=a(72),E=a.n(g),b=function(e){var t={labels:e.labels,datasets:[{label:e.dataLabel,data:e.data,fill:!1,borderColor:"#0099CC"}]},a={title:{display:!0,text:e.title,fontSize:26,fontColor:"#3F729B"},legend:{position:"bottom"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Average Volume Per Day"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Month"}}]}};return r.a.createElement("div",{className:[E.a.LineChart,"z-depth-1","rounded"].join(" ")},r.a.createElement(v.Chart,{type:"line",data:t,options:a}))},y=a(6),_=function(e){console.log(e.dataSet);var t=Object.keys(e.dataSet[0]).map((function(e){return r.a.createElement("th",{key:e},e.replace(/_/g," ").toUpperCase())})),a=e.dataSet.map((function(e){return r.a.createElement("tr",{key:e.id},Object.keys(e).map((function(t){return r.a.createElement("td",{key:t,data:e[t]},e[t])})))}));return r.a.createElement("div",{className:"z-depth-1"},r.a.createElement(y.o,{className:"z-depth-1",striped:!0,scrollY:!0,maxHeight:"390px"},r.a.createElement(y.q,{color:"blue-gradient",textWhite:!0},r.a.createElement("tr",null,t)),r.a.createElement(y.p,null,a)))},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={dataSet:[],labels:[],data:[]},a.generateReportingData=function(e){var t=e.map((function(e){return{date_captured:a.dateConverter(e.date_captured),volume_per_day:e.volume_per_day}})).sort((function(e,t){return e.date_captured-t.date_captured})),n=a.aggregateData(t),r=a.generateFinalData(n),l=r.map((function(e){return e.date_captured})),c=r.map((function(e){return e.average_volume_per_day}));a.setState({dataSet:r,labels:l,data:c})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fullData.length>0&&this.generateReportingData(this.props.fullData)}},{key:"dateConverter",value:function(e){var t=e.split("-"),a=Object(h.a)(t,2),n=a[0],r=a[1];return new Date(+n,{Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[r])}},{key:"aggregateData",value:function(e){return e.reduce((function(e,t){var a=t.date_captured.getFullYear()+"-"+String(+t.date_captured.getMonth()+1);return e[a]=e[a]||{},e[a].sum_volume_per_day=e[a].sum_volume_per_day?+e[a].sum_volume_per_day+ +t.volume_per_day:+t.volume_per_day,e[a].no_of_records=++e[a].no_of_records||1,e}),{})}},{key:"generateFinalData",value:function(e){for(var t=[],a=0,n=0,r=Object.keys(e);n<r.length;n++){var l=r[n],c={id:++a,date_captured:l,average_volume_per_day:(e[l].sum_volume_per_day/e[l].no_of_records).toFixed(2)};t.push(c)}return t}},{key:"render",value:function(){var e=this.state.dataSet.length>0?r.a.createElement(_,{dataSet:this.state.dataSet}):null;return r.a.createElement("div",{className:""},r.a.createElement(y.e,null,r.a.createElement(y.n,{className:"justify-content-center mb-4"},r.a.createElement(y.d,{sm:"12",md:"8"},r.a.createElement("div",{className:"rounded z-depth-1 text-center pb-2"},r.a.createElement("div",{className:"py-3 text-white",style:{backgroundColor:"#33b5e5",fontSize:"20px"}},r.a.createElement("strong",null,"NUMBER OF RECORDS")),r.a.createElement("div",{className:"text-strong mt-3"},r.a.createElement("h2",null,r.a.createElement(y.f,{icon:"database"})," ",this.props.fullData.length))))),r.a.createElement(y.n,null,r.a.createElement(y.d,{md:"12",lg:"8",className:"my-3"},r.a.createElement(b,{title:"LINE CHART",dataLabel:"Average Daily Traffic Volume Captured Per Month",labels:this.state.labels,data:this.state.data})),r.a.createElement(y.d,{md:"12",lg:"4",className:"my-3"},e))))}},{key:"componentDidUpdate",value:function(){0===this.state.data.length&&this.generateReportingData(this.props.fullData)}}]),t}(n.Component),D=Object(f.b)((function(e){return{fullData:e.fullData}}))(N),x=a(77),k=a.n(x),S=a(34),j=a.n(S),C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.SideNav},r.a.createElement("div",{className:"pt-2",style:{height:"60px",borderBottom:"2px solid #212121"}},r.a.createElement("h2",{style:{fontFamily:"Teko, sans-serif",fontSize:"40px"}},"Erayus")),r.a.createElement("div",{className:j.a.Logo},r.a.createElement("img",{className:"mb-3",src:k.a,alt:"Logo",style:{width:"80%",fontWeight:"bolder"}})),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/",exact:!0,activeClassName:j.a.active},r.a.createElement(y.f,{icon:"chart-line",className:"mr-2"}),"Volume Per Day")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/speed-report",activeClassName:j.a.active},r.a.createElement(y.f,{fab:!0,icon:"cloudscale",className:"mr-2"}),"85th Percentile Speed"))))))},O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Coming soon!"))}}]),t}(n.Component),F=a(42),L=a.n(F),w=a(78),A=a.n(w),R=function(e){return r.a.createElement(y.i,{color:"elegant-color-dark",dark:!0,expand:"md",className:"mb-5"},r.a.createElement(y.k,null,r.a.createElement(y.j,null,r.a.createElement("strong",{className:"white-text pl-5",style:{fontSize:"30px",fontWeight:"bolder",fontFamily:"Heveltica"}},"Yarra Traffic Report Generator"))),r.a.createElement(y.k,{right:!0,className:A.a.RightNav},r.a.createElement(y.h,{style:{color:"white",background:"#4B515D",width:"150px",padding:"10px 0px"}},r.a.createElement(y.f,{far:!0,icon:"calendar-alt",className:"mr-1"})," ",L()().format("MMM Do YY"))))},M=a(79),T=a.n(M).a.create({baseURL:"https://data.gov.au/data/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%229e26683b-6b30-424e-ace7-59047d811d1c%22"}),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.get().then((function(t){var a=t.data.result.records;e.props.onFetchFullData(a)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(R,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/volume-report",component:D}),r.a.createElement(p.a,{path:"/speed-report",component:O}),r.a.createElement(p.a,{path:"/",component:D}))))}}]),t}(n.Component),U=Object(f.b)(null,(function(e){return{onFetchFullData:function(t){return e({type:"FETCH_FULLDATA",fullData:t})}}}))(z),Y=a(38);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B={fullData:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FULLDATA":return{fullData:t.fullData};default:return e}},J=Object(Y.b)(H),W=r.a.createElement(f.a,{store:J},r.a.createElement(o.a,null,r.a.createElement(U,null)));c.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,a){e.exports={SideNav:"SideNav_SideNav__3beYU",active:"SideNav_active__DkRxY"}},72:function(e,t,a){e.exports={LineChart:"LineChart_LineChart__2l9K5"}},77:function(e,t,a){e.exports=a.p+"static/media/erayus-logo.3b183138.png"},78:function(e,t,a){e.exports={RightNav:"TopNav_RightNav__25SpK"}},81:function(e,t,a){e.exports=a(173)},86:function(e,t,a){},94:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.44f11a9e.chunk.js.map