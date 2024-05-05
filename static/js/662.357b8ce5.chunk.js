"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[662],{855:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(66852),i=n(44414);function s(e){let{children:t,type:n}=e;return(0,i.jsx)(r.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}s.defaultProps={type:"scale"}},87758:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(11942),i=n.n(r),s=n(9950),l=n(14650),o=n(16491),a=n(44414);const c=(0,s.forwardRef)(((e,t)=>{let{icon:n,width:r=20,sx:i,...s}=e;return(0,a.jsx)(o.A,{ref:t,component:l.In,className:"component-iconify",icon:n,sx:{width:r,height:r,...i},...s})}));c.propTypes={icon:i().oneOfType([i().element,i().string]),sx:i().object,width:i().number};const d=c},91094:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(9950),i=n(16491),s=n(14857),l=n(59254),o=n(97497);const a=(0,l.Ay)(i.A)((e=>{let{theme:t,ownerState:n}=e;const r="light"===t.palette.mode,i="filled"===n.variant,s="outlined"===n.variant,l="soft"===n.variant,a={..."default"===n.color&&{...i&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...s&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...l&&{color:t.palette.text.secondary,backgroundColor:(0,o.X4)(t.palette.grey[500],.16)}}},c={..."default"!==n.color&&{...i&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...s&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"2px solid ".concat(t.palette[n.color].main)},...l&&{color:t.palette[n.color][r?"dark":"light"],backgroundColor:(0,o.X4)(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...a,...c}}));var c=n(44414);const d=(0,r.forwardRef)(((e,t)=>{let{children:n,color:r="default",variant:l="soft",startIcon:o,endIcon:d,sx:h,...p}=e;const x=(0,s.A)(),m={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,c.jsxs)(a,{ref:t,component:"span",ownerState:{color:r,variant:l},sx:{...o&&{pl:.75},...d&&{pr:.75},...h},theme:x,...p,children:[o&&(0,c.jsxs)(i.A,{sx:{mr:.75,...m},children:[" ",o," "]}),n,d&&(0,c.jsxs)(i.A,{sx:{ml:.75,...m},children:[" ",d," "]})]})}))},53923:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(9950),i=n(16491),s=n(63344),l=n(59254),o=n(97497);const a=(0,l.Ay)("div")((()=>({flexGrow:1,height:"100%",overflow:"hidden"}))),c=(0,l.Ay)(s.A)((e=>{let{theme:t}=e;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,o.X4)(t.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-mask":{zIndex:"inherit"}}}));var d=n(44414);const h=(0,r.forwardRef)(((e,t)=>{let{children:n,sx:r,...s}=e;const l="undefined"===typeof navigator?"SSR":navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l)?(0,d.jsx)(i.A,{ref:t,sx:{overflow:"auto",...r},...s,children:n}):(0,d.jsx)(a,{children:(0,d.jsx)(c,{scrollableNodeProps:{ref:t},clickOnTrack:!1,sx:r,...s,children:n})})})),p=(0,r.memo)(h)},17662:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(9950),i=n(60899),s=n(82053),l=n(10226),o=n(39694),a=n(93230),c=n(3788),d=n(3198),h=n(855),p=n(48089),x=n(15769),m=n(34075),u=n(1320),g=n(6258),j=n(53923),A=n(46005),f=n(41397);const y=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],b=[...Array(24)].map(((e,t)=>{const n=t+1;return{id:A.Jb.string.uuid(),cover:"/assets/images/products/product_".concat(n,".jpg"),name:A.Jb.commerce.productName(),price:A.Jb.number.int({min:4,max:99,precision:.01}),description:A.Jb.commerce.productDescription(),priceSale:n%3?null:A.Jb.number.int({min:19,max:29,precision:.01}),quantity:(0,f.sample)([100,510,1003,305,402,8034,911,56,89,136]),colors:1===n&&y.slice(0,2)||2===n&&y.slice(1,3)||3===n&&y.slice(2,4)||4===n&&y.slice(3,6)||23===n&&y.slice(4,6)||24===n&&y.slice(5,6)||y,status:(0,f.sample)(["sale","new","refurbished"])}}));var v=n(16491),w=n(66310),k=n(21671),C=n(69780),S=n(9213),P=n(7251);const F={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function N(e,t,n){return e?Math.max(0,(1+e)*t-n):0}function W(e,t,n){return null===e[n]?1:null===t[n]||t[n]<e[n]?-1:t[n]>e[n]?1:0}function R(e,t){return"desc"===e?(e,n)=>W(e,n,t):(e,n)=>-W(e,n,t)}var D=n(44414);function I(e){let{order:t,orderBy:n,rowCount:r,headLabel:i,numSelected:s,onRequestSort:l,onSelectAllClick:o}=e;return(0,D.jsx)(C.A,{children:(0,D.jsxs)(S.A,{children:[(0,D.jsx)(k.A,{padding:"checkbox",children:(0,D.jsx)(w.A,{indeterminate:s>0&&s<r,checked:r>0&&s===r,onChange:o})}),i.map((e=>{return(0,D.jsx)(k.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:(0,D.jsxs)(P.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,e=>{l(e,r)}),children:[e.label,n===e.id?(0,D.jsx)(v.A,{sx:{...F},children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var O=n(25333),T=n(23266),q=n(72362),_=n(87758),z=n(91094);function B(e){let{selected:t,name:n,quantity:i,description:l,price:o,status:c,handleClick:d}=e;const[h,p]=(0,r.useState)(null),x=()=>{p(null)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(S.A,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,children:[(0,D.jsx)(k.A,{padding:"checkbox",children:(0,D.jsx)(w.A,{disableRipple:!0,checked:t,onChange:d})}),(0,D.jsx)(k.A,{component:"th",scope:"row",padding:"none",children:(0,D.jsx)(a.A,{direction:"row",alignItems:"center",spacing:2,children:(0,D.jsx)(s.A,{variant:"subtitle2",noWrap:!0,children:n})})}),(0,D.jsx)(k.A,{children:l}),(0,D.jsx)(k.A,{children:o}),(0,D.jsx)(k.A,{children:i}),(0,D.jsx)(k.A,{children:(0,D.jsx)(z.A,{color:("sale"===c?"warning":"refurbished"===c&&"info")||"success",children:c})}),(0,D.jsx)(k.A,{align:"right",children:(0,D.jsx)(O.A,{onClick:e=>{p(e.currentTarget)},children:(0,D.jsx)(_.A,{icon:"eva:more-vertical-fill"})})})]}),(0,D.jsxs)(q.Ay,{open:!!h,anchorEl:h,onClose:x,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[(0,D.jsxs)(T.A,{onClick:x,children:[(0,D.jsx)(_.A,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),(0,D.jsxs)(T.A,{onClick:x,sx:{color:"error.main"},children:[(0,D.jsx)(_.A,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}var E=n(2046),J=n(83239),L=n(83274);function H(e){let{numSelected:t,filterName:n,onFilterName:r}=e;return(0,D.jsxs)(J.A,{sx:{height:96,display:"flex",justifyContent:"space-between",p:e=>e.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?(0,D.jsxs)(s.A,{component:"div",variant:"subtitle1",children:[t," selected"]}):(0,D.jsx)(d.A,{value:n,onChange:r,placeholder:"Search products...",startAdornment:(0,D.jsx)(E.A,{position:"start",children:(0,D.jsx)(_.A,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?(0,D.jsx)(L.A,{title:"Delete",children:(0,D.jsx)(O.A,{children:(0,D.jsx)(_.A,{icon:"eva:trash-2-fill"})})}):(0,D.jsx)(L.A,{title:"Filter list",children:(0,D.jsx)(O.A,{children:(0,D.jsx)(_.A,{icon:"ic:round-filter-list"})})})]})}function M(e){let{emptyRows:t,height:n}=e;return t?(0,D.jsx)(S.A,{sx:{...n&&{height:n*t}},children:(0,D.jsx)(k.A,{colSpan:9})}):null}var X=n(2235);function Q(e){let{query:t}=e;return(0,D.jsx)(S.A,{children:(0,D.jsx)(k.A,{align:"center",colSpan:6,sx:{py:3},children:(0,D.jsxs)(X.A,{sx:{textAlign:"center"},children:[(0,D.jsx)(s.A,{variant:"h6",paragraph:!0,children:"Not found"}),(0,D.jsxs)(s.A,{variant:"body2",children:["No results found for \xa0",(0,D.jsxs)("strong",{children:['"',t,'"']}),".",(0,D.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})}function G(){const[e,t]=(0,r.useState)(0),[n,i]=(0,r.useState)("asc"),[s,l]=(0,r.useState)([]),[o,a]=(0,r.useState)("name"),[c,d]=(0,r.useState)(""),[h,A]=(0,r.useState)(8),f=function(e){let{inputData:t,comparator:n,filterName:r}=e;const i=t.map(((e,t)=>[e,t]));return i.sort(((e,t)=>{const r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t=i.map((e=>e[0])),r&&(t=t.filter((e=>-1!==e.name.toLowerCase().indexOf(r.toLowerCase())))),t}({inputData:b,comparator:R(n,o),filterName:c}),y=!f.length&&!!c;return(0,D.jsx)("div",{children:(0,D.jsxs)(p.A,{children:[(0,D.jsx)(H,{numSelected:s.length,filterName:c,onFilterName:e=>{t(0),d(e.target.value)}}),(0,D.jsx)(j.A,{children:(0,D.jsx)(u.A,{sx:{overflow:"unset"},children:(0,D.jsxs)(x.A,{sx:{minWidth:800},children:[(0,D.jsx)(I,{order:n,orderBy:o,rowCount:b.length,numSelected:s.length,onRequestSort:(e,t)=>{""!==t&&(i(o===t&&"asc"===n?"desc":"asc"),a(t))},onSelectAllClick:e=>{if(e.target.checked){const e=b.map((e=>e.name));l(e)}else l([])},headLabel:[{id:"name",label:"Product Name"},{id:"description",label:"Description"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"status",label:"Status"},{id:""}]}),(0,D.jsxs)(m.A,{children:[f.slice(e*h,e*h+h).map((e=>(0,D.jsx)(B,{name:e.name,customer:e.customer,description:e.description,price:e.price,status:e.status,quantity:e.quantity,company:e.company,selected:-1!==s.indexOf(e.name),handleClick:t=>((e,t)=>{const n=s.indexOf(t);let r=[];-1===n?r=r.concat(s,t):0===n?r=r.concat(s.slice(1)):n===s.length-1?r=r.concat(s.slice(0,-1)):n>0&&(r=r.concat(s.slice(0,n),s.slice(n+1))),l(r)})(0,e.name)},e.id))),(0,D.jsx)(M,{height:77,emptyRows:N(e,h,b.length)}),y&&(0,D.jsx)(Q,{query:c})]})]})})}),(0,D.jsx)(g.A,{page:e,component:"div",count:b.length,rowsPerPage:h,onPageChange:(e,n)=>{t(n)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{t(0),A(parseInt(e.target.value,10))}})]})})}const K=()=>{const[e,t]=(0,r.useState)(!1);return(0,D.jsxs)(i.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,D.jsx)(i.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,D.jsx)(s.A,{variant:"h5",children:"Products"})}),(0,D.jsx)(i.Ay,{item:!0,xs:12,md:2,children:(0,D.jsx)(h.A,{children:(0,D.jsx)(l.A,{disableElevation:!0,onClick:()=>t(!0),fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Add Product"})})}),(0,D.jsx)(i.Ay,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,D.jsx)(G,{})}),(0,D.jsx)(i.Ay,{item:!0,md:8,sx:{display:{sm:"none",md:"block",lg:"none"}}}),(0,D.jsx)(o.Ay,{anchor:"right",open:e,onClose:()=>t(!1),children:(0,D.jsx)("form",{style:{margin:18,marginTop:72,width:500},children:(0,D.jsxs)(i.Ay,{container:!0,spacing:3,children:[(0,D.jsx)(i.Ay,{item:!0,xs:12,children:(0,D.jsxs)(a.A,{spacing:1,children:[(0,D.jsx)(c.A,{htmlFor:"firstname-signup",children:"Product Name*"}),(0,D.jsx)(d.A,{id:"firstname-login",type:"firstname",name:"name",placeholder:"Nike Kicks 201",fullWidth:!0})]})}),(0,D.jsx)(i.Ay,{item:!0,xs:12,children:(0,D.jsxs)(a.A,{spacing:1,children:[(0,D.jsx)(c.A,{htmlFor:"firstname-signup",children:"Description*"}),(0,D.jsx)(d.A,{id:"firstname-login",type:"firstname",name:"name",placeholder:"White dress shows with Nike tick",fullWidth:!0})]})}),(0,D.jsx)(i.Ay,{item:!0,xs:6,children:(0,D.jsxs)(a.A,{spacing:1,children:[(0,D.jsx)(c.A,{htmlFor:"email-signup",children:"Price"}),(0,D.jsx)(d.A,{fullWidth:!0,id:"email-login",type:"email",name:"email",placeholder:"$600",inputProps:{}})]})}),(0,D.jsx)(i.Ay,{item:!0,xs:6,children:(0,D.jsxs)(a.A,{spacing:1,children:[(0,D.jsx)(c.A,{htmlFor:"company-signup",children:"Quantity"}),(0,D.jsx)(d.A,{fullWidth:!0,id:"company-signup",name:"number",placeholder:"10",inputProps:{}})]})}),(0,D.jsx)(i.Ay,{item:!0,xs:12,children:(0,D.jsx)(h.A,{children:(0,D.jsx)(l.A,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Add Product"})})})]})})})]})}}}]);