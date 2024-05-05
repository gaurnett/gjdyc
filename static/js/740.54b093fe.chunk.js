"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[740],{74540:(e,i,t)=>{t.d(i,{A:()=>M});var n=t(9950),r=t(57528),a=t(98587),o=t(58168),s=t(72004),l=t(88283),d=t(74061);function c(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(e){return parseFloat(e)}var u=t(97497),m=t(59254),x=t(48283),g=t(80863),A=t(68483);function p(e){return(0,A.Ay)("MuiSkeleton",e)}(0,g.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var j,v,b,y,f=t(44414);const H=["animation","className","component","height","style","variant","width"];let S,w,L,B;const k=(0,l.i7)(S||(S=j||(j=(0,r.A)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),C=(0,l.i7)(w||(w=v||(v=(0,r.A)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=(0,m.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,i[t.variant],!1!==t.animation&&i[t.animation],t.hasChildren&&i.withChildren,t.hasChildren&&!t.width&&i.fitContent,t.hasChildren&&!t.height&&i.heightAuto]}})((e=>{let{theme:i,ownerState:t}=e;const n=c(i.shape.borderRadius)||"px",r=h(i.shape.borderRadius);return(0,o.A)({display:"block",backgroundColor:i.vars?i.vars.palette.Skeleton.bg:(0,u.X4)(i.palette.text.primary,"light"===i.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(n,"/").concat(Math.round(r/.6*10)/10).concat(n),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(i.vars||i).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(e=>{let{ownerState:i}=e;return"pulse"===i.animation&&(0,l.AH)(L||(L=b||(b=(0,r.A)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),k)}),(e=>{let{ownerState:i,theme:t}=e;return"wave"===i.animation&&(0,l.AH)(B||(B=y||(y=(0,r.A)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),C,(t.vars||t).palette.action.hover)})),F=n.forwardRef((function(e,i){const t=(0,x.A)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:r,component:l="span",height:c,style:h,variant:u="text",width:m}=t,g=(0,a.A)(t,H),A=(0,o.A)({},t,{animation:n,component:l,variant:u,hasChildren:Boolean(g.children)}),j=(e=>{const{classes:i,variant:t,animation:n,hasChildren:r,width:a,height:o}=e,s={root:["root",t,n,r&&"withChildren",r&&!a&&"fitContent",r&&!o&&"heightAuto"]};return(0,d.A)(s,p,i)})(A);return(0,f.jsx)(R,(0,o.A)({as:l,ref:i,className:(0,s.A)(j.root,r),ownerState:A},g,{style:(0,o.A)({width:m,height:c},h)}))}));var W=t(93230),q=t(60899),z=t(17436);const M=e=>{let{children:i}=e;const[t,r]=(0,n.useState)(!0);(0,n.useEffect)((()=>{r(!1)}),[]);const a=(0,f.jsx)(z.A,{title:(0,f.jsx)(F,{sx:{width:{xs:120,md:180}}}),secondary:(0,f.jsx)(F,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,f.jsxs)(W.A,{spacing:1,children:[(0,f.jsx)(F,{}),(0,f.jsx)(F,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,f.jsx)(F,{}),(0,f.jsx)(F,{})]})});return(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsxs)(q.Ay,{container:!0,spacing:3,children:[(0,f.jsx)(q.Ay,{item:!0,xs:12,md:6,children:a}),(0,f.jsx)(q.Ay,{item:!0,xs:12,md:6,children:a}),(0,f.jsx)(q.Ay,{item:!0,xs:12,md:6,children:a}),(0,f.jsx)(q.Ay,{item:!0,xs:12,md:6,children:a})]}),!t&&i]})}},60740:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var n=t(60899),r=t(93230),a=t(82053),o=t(52432),s=t(74745),l=t(36080),d=t(74540),c=t(17436),h=t(44414);const u=()=>(0,h.jsx)(d.A,{children:(0,h.jsxs)(n.Ay,{container:!0,spacing:3,children:[(0,h.jsx)(n.Ay,{item:!0,xs:12,lg:6,children:(0,h.jsxs)(r.A,{spacing:3,children:[(0,h.jsx)(c.A,{title:"Basic",codeHighlight:!0,children:(0,h.jsxs)(r.A,{spacing:.75,sx:{mt:-1.5},children:[(0,h.jsx)(a.A,{variant:"h1",children:"Inter"}),(0,h.jsx)(a.A,{variant:"h5",children:"Font Family"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Medium"}),(0,h.jsx)(a.A,{variant:"h6",children:"Bold"})]})]})}),(0,h.jsx)(c.A,{title:"Heading",codeHighlight:!0,children:(0,h.jsxs)(r.A,{spacing:2,children:[(0,h.jsx)(a.A,{variant:"h1",children:"H1 Heading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 38px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 46px"})]}),(0,h.jsx)(s.A,{}),(0,h.jsx)(a.A,{variant:"h2",children:"H2 Heading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 30px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 38px"})]}),(0,h.jsx)(s.A,{}),(0,h.jsx)(a.A,{variant:"h3",children:"H3 Heading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 24px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular & Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 32px"})]}),(0,h.jsx)(s.A,{}),(0,h.jsx)(a.A,{variant:"h4",children:"H4 Heading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 20px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 28px"})]}),(0,h.jsx)(s.A,{}),(0,h.jsx)(a.A,{variant:"h5",children:"H5 Heading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 16px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular & Medium & Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 24px"})]}),(0,h.jsx)(s.A,{}),(0,h.jsx)(a.A,{variant:"h6",children:"H6 Heading / Subheading"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 14px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,h.jsx)(c.A,{title:"Body 1",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 14px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,h.jsx)(c.A,{title:"Body 2",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,h.jsx)(c.A,{title:"Subtitle 1",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"subtitle1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 14px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Medium"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,h.jsx)(c.A,{title:"Subtitle 2",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"subtitle2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Medium"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,h.jsx)(c.A,{title:"Caption",codeHighlight:!0,children:(0,h.jsxs)(r.A,{spacing:1,children:[(0,h.jsx)(a.A,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})})]})}),(0,h.jsx)(n.Ay,{item:!0,xs:12,lg:6,children:(0,h.jsxs)(r.A,{spacing:3,children:[(0,h.jsx)(c.A,{title:"Alignment",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsx)(a.A,{variant:"body2",textAlign:"center",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsx)(a.A,{variant:"body2",textAlign:"right",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,h.jsx)(c.A,{title:"Gutter Bottom",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsx)(a.A,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,h.jsx)(c.A,{title:"Overline",codeHighlight:!0,children:(0,h.jsxs)(r.A,{spacing:1.5,children:[(0,h.jsx)(a.A,{variant:"overline",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,h.jsx)(c.A,{title:"Link",codeHighlight:!0,children:(0,h.jsxs)(r.A,{spacing:1.5,children:[(0,h.jsx)(l.A,{href:"#",children:"www.mantis.com"}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 12px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,h.jsx)(c.A,{title:"Colors",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"This is textPrimary text color."}),(0,h.jsx)(a.A,{variant:"h6",color:"textSecondary",gutterBottom:!0,children:"This is textSecondary text color."}),(0,h.jsx)(a.A,{variant:"h6",color:"primary",gutterBottom:!0,children:"This is primary text color."}),(0,h.jsx)(a.A,{variant:"h6",color:"secondary",gutterBottom:!0,children:"This is secondary text color."}),(0,h.jsx)(a.A,{variant:"h6",color:"success",gutterBottom:!0,children:"This is success text color."}),(0,h.jsx)(a.A,{variant:"h6",sx:{color:"warning.main"},gutterBottom:!0,children:"This is warning text color."}),(0,h.jsx)(a.A,{variant:"h6",color:"error",gutterBottom:!0,children:"This is error text color."})]})}),(0,h.jsx)(c.A,{title:"Paragraph",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 14px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Regular"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,h.jsx)(c.A,{title:"Font Style",codeHighlight:!0,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{variant:"body1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsx)(a.A,{variant:"subtitle1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,h.jsxs)(o.A,{"aria-label":"breadcrumb",children:[(0,h.jsx)(a.A,{variant:"h6",children:"Size: 14px"}),(0,h.jsx)(a.A,{variant:"h6",children:"Weight: Italic Regular & Italic Bold"}),(0,h.jsx)(a.A,{variant:"h6",children:"Line Height: 22px"})]})]})})]})})]})})},36080:(e,i,t)=>{t.d(i,{A:()=>w});var n=t(98587),r=t(58168),a=t(9950),o=t(72004),s=t(74061),l=t(61676),d=t(59254),c=t(48283),h=t(94106),u=t(31506),m=t(82053),x=t(80863),g=t(68483);function A(e){return(0,g.Ay)("MuiLink",e)}const p=(0,x.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var j=t(12703),v=t(99269);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>{let{theme:i,ownerState:t}=e;const n=(e=>b[e]||e)(t.color),r=(0,j.Yn)(i,"palette.".concat(n),!1)||t.color,a=(0,j.Yn)(i,"palette.".concat(n,"Channel"));return"vars"in i&&a?"rgba(".concat(a," / 0.4)"):(0,v.X4)(r,.4)};var f=t(44414);const H=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,d.Ay)(m.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,i["underline".concat((0,l.A)(t.underline))],"button"===t.component&&i.button]}})((e=>{let{theme:i,ownerState:t}=e;return(0,r.A)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,r.A)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:y({theme:i,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(p.focusVisible)]:{outline:"auto"}})})),w=a.forwardRef((function(e,i){const t=(0,c.A)({props:e,name:"MuiLink"}),{className:d,color:m="primary",component:x="a",onBlur:g,onFocus:p,TypographyClasses:j,underline:v="always",variant:y="inherit",sx:w}=t,L=(0,n.A)(t,H),{isFocusVisibleRef:B,onBlur:k,onFocus:C,ref:R}=(0,h.A)(),[F,W]=a.useState(!1),q=(0,u.A)(i,R),z=(0,r.A)({},t,{color:m,component:x,focusVisible:F,underline:v,variant:y}),M=(e=>{const{classes:i,component:t,focusVisible:n,underline:r}=e,a={root:["root","underline".concat((0,l.A)(r)),"button"===t&&"button",n&&"focusVisible"]};return(0,s.A)(a,A,i)})(z);return(0,f.jsx)(S,(0,r.A)({color:m,className:(0,o.A)(M.root,d),classes:j,component:x,onBlur:e=>{k(e),!1===B.current&&W(!1),g&&g(e)},onFocus:e=>{C(e),!0===B.current&&W(!0),p&&p(e)},ref:q,ownerState:z,variant:y,sx:[...Object.keys(b).includes(m)?[]:[{color:m}],...Array.isArray(w)?w:[w]]},L))}))}}]);