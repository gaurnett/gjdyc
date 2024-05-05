"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[532],{30532:(n,t,e)=>{e.r(t),e.d(t,{default:()=>h});var a=e(59254),i=e(74540),r=e(17436),o=e(44414);const s=(0,a.Ay)("iframe")((()=>({height:"calc(100vh - 210px)",border:"none"}))),h=()=>(0,o.jsx)(i.A,{children:(0,o.jsx)(r.A,{title:"Ant Icons",children:(0,o.jsx)(s,{title:"Ant Icon",width:"100%",src:"https://ant.design/components/icon/"})})})},74540:(n,t,e)=>{e.d(t,{A:()=>I});var a=e(9950),i=e(57528),r=e(98587),o=e(58168),s=e(72004),h=e(88283),l=e(74061);function d(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(n){return parseFloat(n)}var m=e(97497),u=e(59254),p=e(48283),g=e(80863),f=e(68483);function A(n){return(0,f.Ay)("MuiSkeleton",n)}(0,g.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,v,w,b,y=e(44414);const j=["animation","className","component","height","style","variant","width"];let k,C,S,R;const _=(0,h.i7)(k||(k=x||(x=(0,i.A)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,h.i7)(C||(C=v||(v=(0,i.A)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),X=(0,u.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((n=>{let{theme:t,ownerState:e}=n;const a=d(t.shape.borderRadius)||"px",i=c(t.shape.borderRadius);return(0,o.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,m.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(n=>{let{ownerState:t}=n;return"pulse"===t.animation&&(0,h.AH)(S||(S=w||(w=(0,i.A)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),_)}),(n=>{let{ownerState:t,theme:e}=n;return"wave"===t.animation&&(0,h.AH)(R||(R=b||(b=(0,i.A)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(e.vars||e).palette.action.hover)})),F=a.forwardRef((function(n,t){const e=(0,p.A)({props:n,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:h="span",height:d,style:c,variant:m="text",width:u}=e,g=(0,r.A)(e,j),f=(0,o.A)({},e,{animation:a,component:h,variant:m,hasChildren:Boolean(g.children)}),x=(n=>{const{classes:t,variant:e,animation:a,hasChildren:i,width:r,height:o}=n,s={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.A)(s,A,t)})(f);return(0,y.jsx)(X,(0,o.A)({as:h,ref:t,className:(0,s.A)(x.root,i),ownerState:f},g,{style:(0,o.A)({width:u,height:d},c)}))}));var N=e(93230),B=e(60899),H=e(17436);const I=n=>{let{children:t}=n;const[e,i]=(0,a.useState)(!0);(0,a.useEffect)((()=>{i(!1)}),[]);const r=(0,y.jsx)(H.A,{title:(0,y.jsx)(F,{sx:{width:{xs:120,md:180}}}),secondary:(0,y.jsx)(F,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,y.jsxs)(N.A,{spacing:1,children:[(0,y.jsx)(F,{}),(0,y.jsx)(F,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,y.jsx)(F,{}),(0,y.jsx)(F,{})]})});return(0,y.jsxs)(y.Fragment,{children:[e&&(0,y.jsxs)(B.Ay,{container:!0,spacing:3,children:[(0,y.jsx)(B.Ay,{item:!0,xs:12,md:6,children:r}),(0,y.jsx)(B.Ay,{item:!0,xs:12,md:6,children:r}),(0,y.jsx)(B.Ay,{item:!0,xs:12,md:6,children:r}),(0,y.jsx)(B.Ay,{item:!0,xs:12,md:6,children:r})]}),!e&&t]})}}}]);