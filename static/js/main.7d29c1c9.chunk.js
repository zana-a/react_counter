(this["webpackJsonpreact-counter"]=this["webpackJsonpreact-counter"]||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(48),a=n.n(c),o=n(11),s=n(22),l=n(24),i=n(23),j=n(102),u=n(104),d=n(105),b=n(98),h=n(106),O=n(107),x=n(89),f=n(90),m=n(2),v=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).render=function(){var t=e.props,n=t.onResetAll,r=t.onDeleteAll,c=t.data;return Object(m.jsx)(j.a,{position:"fixed",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{flex:1,children:Object(m.jsx)(b.a,{badgeContent:c.counters.length,color:"secondary",children:Object(m.jsx)(h.a,{variant:"h6",component:"div",children:"React Counter"})})}),Object(m.jsx)(O.a,{variant:"contained",style:{backgroundColor:"orange",marginRight:"1rem"},onClick:function(){return n()},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(O.a,{variant:"contained",style:{backgroundColor:"red"},onClick:function(){return r()},children:Object(m.jsx)(f.a,{})})]})})},e}return n}(r.Component),p=v,g=n(108),D=n(109),y=n(100),C=n(110),R=n(111),k=n(91),A=n(92),w=(n(93),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).render=function(){var t=e.props,n=t.data,r=t.onIncrement,c=t.onDecrement,a=t.onReset,o=t.onDelete,s=0===n.value?"default":"primary";return Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(D.a,{children:[Object(m.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"div",children:n.id}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(y.a,{label:n.value,color:s}),Object(m.jsx)(C.a,{variant:"contained",onClick:function(){return c(n)},children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(C.a,{variant:"contained",onClick:function(){return r(n)},children:Object(m.jsx)(A.a,{})})]})]}),Object(m.jsxs)(R.a,{children:[Object(m.jsx)(O.a,{size:"small",onClick:function(){return o(n)},style:{color:"red"},children:"Delete"}),Object(m.jsx)(O.a,{size:"small",onClick:function(){return a(n)},children:"Reset"})]})]})},e}return n}(r.Component)),I=w,S=n(101),B=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).render=function(){var t=e.props,n=t.onIncrement,r=t.onDecrement,c=t.onReset,a=t.onDelete,o=t.data;return Object(m.jsx)(S.a,{container:!0,spacing:2,children:0===o.counters.length?Object(m.jsx)(S.a,{item:!0,xs:12,children:Object(m.jsx)(g.a,{children:Object(m.jsx)(D.a,{children:Object(m.jsx)(h.a,{children:"No entries. Please add one."})})})}):o.counters.map((function(e){return Object(m.jsx)(S.a,{item:!0,md:6,children:Object(m.jsx)(I,{data:e,onIncrement:n,onDecrement:r,onReset:c,onDelete:a})},e.id)}))})},e}return n}(r.Component),N=B,z=n(112),J=n(113),E=n(114),P=n(95),T=n(97),q=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleIncrement=function(t){var n=Object(o.a)(e.state.counters),r=n.indexOf(t);n[r].value+=1,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(o.a)(e.state.counters),r=n.indexOf(t);0!==n[r].value&&(n[r].value-=1),e.setState({counters:n})},e.handleReset=function(t){var n=Object(o.a)(e.state.counters),r=n.indexOf(t);n[r].value=0,e.setState({counters:n})},e.handleResetAll=function(){var t=Object(o.a)(e.state.counters);t.map((function(e){return e.value=0})),e.setState({counters:t})},e.handleDeleteAll=function(){var t=Object(o.a)(e.state.counters);t=[],e.setState({counters:t})},e.handleDelete=function(t){var n=Object(o.a)(e.state.counters);n=n.filter((function(e){return e.id!==t.id})),e.setState({counters:n})},e.handleNew=function(){var t=Object(o.a)(e.state.counters);t.push({id:Object(T.a)(),value:0}),e.setState({counters:t})},e.render=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(z.a,{}),Object(m.jsx)(p,{onResetAll:e.handleResetAll,onDeleteAll:e.handleDeleteAll,data:e.state}),Object(m.jsx)(J.a,{style:{marginTop:"6rem",marginBottom:"2rem"},children:Object(m.jsx)(N,{onReset:e.handleReset,onDelete:e.handleDelete,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,data:e.state})}),Object(m.jsx)(d.a,{style:{position:"fixed",right:0,bottom:0},padding:"1rem",children:Object(m.jsx)(E.a,{color:"primary",onClick:function(){return e.handleNew()},children:Object(m.jsx)(P.a,{})})})]})},e.state={counters:[]},e}return n}(r.Component);a.a.render(Object(m.jsx)(q,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7d29c1c9.chunk.js.map