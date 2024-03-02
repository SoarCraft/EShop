import{m as D,a9 as h,v as T,j as e,L,ae as ue,t as E,aa as j,ab as p,r as A,p as $,T as g,b as f,aH as he,aI as z,B as i,aJ as xe,aK as B,af as J,D as K,o as k,g as Q,h as Z,i as ee,aj as X,k as ne,Q as se,aE as me,an as je,ao as pe,ar as Ce,ag as De,ah as Se,ai as Ie,ak as ve,I as W,R as Te,F as ge,aL as Ue,aM as He,c as Fe,n as Me,aN as Be,E as Le,a5 as Ge,a3 as Oe,a4 as qe,a6 as ze,a7 as _e,ac as fe,aO as Xe,au as We}from"./vendor-BRd9sncS.js";import{L as m,A as d,e as U,F as R,f as b,H as G,a as O,c as re,C as Ye,G as Je,M as $e}from"./index-CPdKjF50.js";import{H as Ke,O as Qe}from"./Columns-DfleldNQ.js";import{L as Ze}from"./Lazy-BSnUzjDz.js";const q=D({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"},ten:{flexBasis:"10%",flexGrow:0},page:{...R,alignItems:"center",justifyContent:"flex-end",paddingTop:E.spacingVerticalXL,columnGap:E.spacingHorizontalM},spin:{width:"4rem"}}),_=new m("Admin","Order"),en=[...Ke(_).slice(0,-1),h({columnId:"User",renderHeaderCell:()=>e.jsx(j,{className:q().ten,children:"User"}),renderCell(n){return e.jsx(p,{className:q().ten,children:n.User})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:q().two,children:"Action"}),renderCell(n){return e.jsx(p,{className:q().twoc,children:e.jsx(Qe,{OrderId:n.Id,ParentLog:_,Admin:!0})})}})];function nn(){const n=q(),{data:s}=T(()=>d.Order.Get.Count(),{onError:_.error}),r=Math.ceil((s||1)/30),{data:a,run:c}=T(l=>d.Order.Get.List(l,_),{defaultParams:[1],debounceWait:300,onError:_.error});return e.jsxs(e.Fragment,{children:[e.jsx(U,{Items:a,Columns:en}),e.jsxs("div",{className:n.page,children:[e.jsxs(L,{children:["Total ",s," Records"]}),e.jsx(ue,{min:1,max:r,defaultValue:1,className:n.spin,onChange:(l,t)=>{const o=parseInt(t.value||t.displayValue);!isNaN(o)&&o&&o<=r&&c(o)}}),e.jsx(L,{children:"/"}),e.jsx(L,{children:r})]})]})}const sn=D({body:{...R,alignItems:"center"},input:{flexGrow:1}}),te=new m("Admin","Product","Detail","Category");function rn({ProdId:n}){const[s,r]=A.useState(""),[a,{setTrue:c,setFalse:l}]=$();T(()=>d.Product.Get.Category(n),{onSuccess(P){P&&r(P)},onError:te.error});const{dispatch:t,dispatchToast:o}=b(te),{run:u}=d.Product.Patch.useCategory({onError(P,v){t({Message:"Failed Update Category",Request:v,Error:P})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Category Updated"})}),{intent:"success"}),l()}}),{run:y}=d.Product.Delete.useCategory({onError(P,v){t({Message:"Failed Detach Category",Request:v,Error:P})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Category Detached"})}),{intent:"success"}),l()}}),{data:x}=T(()=>G.Gallery.Get.Categories(),{onSuccess(P){S(P)},onError:te.error}),[C,S]=A.useState(x),[N,w]=A.useState(""),I=sn();return e.jsxs("div",{className:I.body,children:[e.jsx(L,{size:"large",disabled:!a,children:"Category"}),e.jsxs(he,{className:I.input,size:"large",disabled:!a,freeform:!0,placeholder:s||"Pending",appearance:"underline",onChange:P=>{const v=P.target.value.trim(),V=x?.filter(ke=>ke.toLowerCase().indexOf(v.toLowerCase())===0);S(V),v&&V&&V.length<1?w(v):w("")},onOptionSelect:(P,v)=>{const V=v.optionText;r(V),V&&x?.includes(V)?w(""):w(V)},children:[N&&e.jsxs(z,{text:N,children:['Create New "',N,'"']},N),C?.map(P=>e.jsx(z,{children:P},P)),C?.length===x?.length?e.jsx(z,{text:"",children:"Pending"},""):null]}),a?e.jsx(i,{appearance:"subtle",icon:e.jsx(xe,{}),onClick:()=>{s?u(n,s):y(n)}}):e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{}),onClick:c})]})}const tn=new m("Admin","Product","Detail","Combo","Delete");function an({ComboId:n,Refresh:s}){const{dispatch:r,dispatchToast:a}=b(tn),{run:c}=d.Product.Delete.useCombo({onError(l,t){r({Message:"Failed Delete Combo",Request:t,Error:l})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Combo Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(J,{}),onClick:()=>c(n)})}const on=[h({columnId:"Variant",renderHeaderCell:()=>e.jsx(j,{children:"Variant"}),renderCell(n){return e.jsx(p,{children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(j,{children:"Type"}),renderCell(n){return e.jsx(p,{children:e.jsx(he,{defaultValue:n.Current,defaultSelectedOptions:[n.Current],onOptionSelect:(s,r)=>n.Update(r.optionValue),children:n.Types.map((s,r)=>e.jsx(z,{children:s},r))})})}})],cn=D({body:{...R,justifyContent:"flex-end",alignItems:"center",columnGap:E.spacingVerticalM,marginTop:E.spacingHorizontalM}}),ae=new m("Admin","Product","Detail","Combo","Detail");function ln({Id:n,ProdId:s,Combo:r,Stock:a,Refresh:c}){const[l,{toggle:t}]=$(),[o,u]=A.useState(r),[y,x]=A.useState(a),{data:C}=T(()=>d.Product.Get.Variants(s,ae),{onError:ae.error}),{dispatch:S,dispatchToast:N}=b(ae),{run:w}=d.Product.Patch.useCombo({manual:!0,onError(I,P){S({Message:"Failed Update Combo",Request:P,Error:I})},onSuccess(){N(e.jsx(g,{children:e.jsx(f,{children:"Combo Updated"})}),{intent:"success"}),c(),t()}});return e.jsxs(K,{open:l,onOpenChange:t,children:[e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{})})}),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(ee,{action:e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(X,{})})}),children:"Combo Detail"}),e.jsxs(ne,{children:[e.jsx(U,{Items:C?.map(I=>({Current:o[I.Name],Update(P){o[I.Name]=P,u({...o})},...I})),Columns:on}),e.jsxs("div",{className:cn().body,children:[e.jsx(L,{children:"Stock"}),e.jsx(ue,{value:y,min:0,onChange:(I,P)=>{const v=parseInt(P.value||P.displayValue);isNaN(v)||v<0||x(v)}}),e.jsx(i,{appearance:"primary",onClick:()=>w(n,o,y),children:"Submit"})]})]})]})})]})}const dn=[h({columnId:"Variant",renderHeaderCell:()=>e.jsx(j,{children:"Variant"}),renderCell(n){return e.jsx(p,{children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(j,{children:"Type"}),renderCell(n){return e.jsx(p,{children:e.jsx(he,{onOptionSelect:(s,r)=>n.Update(r.optionValue),children:n.Types.map((s,r)=>e.jsx(z,{children:s},r))})})}})],un=D({body:{...R,justifyContent:"flex-end",alignItems:"center",columnGap:E.spacingVerticalM,marginTop:E.spacingHorizontalM}}),oe=new m("Admin","Product","Detail","Combo","NewCombo");function hn({ProdId:n,Refresh:s}){const[r,{toggle:a}]=$(),[c,l]=A.useState({}),[t,o]=A.useState(1),{data:u}=T(()=>d.Product.Get.Variants(n,oe),{onSuccess(S){for(const N of S)c[N.Name]="";l({...c})},onError:oe.error}),{dispatch:y,dispatchToast:x}=b(oe),{run:C}=d.Product.Post.useCombo({onError(S,N){y({Message:"Failed Create Combo",Request:N,Error:S})},onSuccess(){x(e.jsx(g,{children:e.jsx(f,{children:"Combo Created"})}),{intent:"success"}),s(),a()}});return e.jsxs(K,{open:r,onOpenChange:a,children:[e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(se,{}),children:"New Combo"})}),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(ee,{action:e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(X,{})})}),children:"New Combo"}),e.jsxs(ne,{children:[e.jsx(U,{Items:u?.map(S=>({Update(N){c[S.Name]=N,l({...c})},...S})),Columns:dn}),e.jsxs("div",{className:un().body,children:[e.jsx(L,{children:"Stock"}),e.jsx(ue,{value:t,min:0,onChange:(S,N)=>{const w=parseInt(N.value||N.displayValue);isNaN(w)||w<0||o(w)}}),e.jsx(i,{appearance:"primary",onClick:()=>C(n,c,t),children:"Create"})]})]})]})})]})}const H=D({body:{...R,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},five:{flexBasis:"5%",flexGrow:0}}),Pe=new m("Admin","Product","Detail","Combo"),xn=[h({columnId:"Id",renderHeaderCell:()=>e.jsx(j,{className:H().four,children:"Id"}),renderCell(n){return e.jsx(p,{className:H().four,children:n.Id})}}),h({columnId:"Combo",renderHeaderCell:()=>e.jsx(j,{children:"Combo"}),renderCell(n){return e.jsx(p,{children:Object.entries(n.Combo).reduce((s,r)=>`${s} ${r[0]} : ${r[1]} ;`,"")})}}),h({columnId:"Stock",renderHeaderCell:()=>e.jsx(j,{className:H().five,children:"Stock"}),renderCell(n){return e.jsx(p,{className:H().five,children:n.Stock})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:H().seven,children:"Action"}),renderCell(n){return e.jsxs(p,{className:H().seven,children:[e.jsx(ln,{...n}),e.jsx(an,{ComboId:n.Id,Refresh:n.Refresh})]})}})];function mn({ProdId:n}){const{data:s,run:r}=T(()=>G.Product.Get.ComboList(n,Pe),{onError:Pe.error});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:H().body,children:[e.jsx(me,{children:"Combo"}),e.jsx(hn,{ProdId:n,Refresh:r})]}),e.jsx(U,{Items:s?.map(a=>({ProdId:n,Refresh:r,...a})),Columns:xn})]})}const jn=new m("Admin","Product","Detail","Delete"),pn=D({root:{...O,rowGap:E.spacingHorizontalS}});function Cn({ProdId:n}){const{Nav:s}=re(),{dispatch:r,dispatchToast:a}=b(jn),{run:c,loading:l}=d.Product.Delete.useProduct({onError(o,u){r({Message:"Failed Delete Product",Request:u,Error:o})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Product Deleted"})}),{intent:"success"}),s("/Admin")}}),t=pn();return e.jsx("div",{children:e.jsxs(je,{withArrow:!0,children:[e.jsx(pe,{disableButtonEnhancement:!0,children:e.jsx(i,{children:"Delete Product"})}),e.jsxs(Ce,{className:t.root,children:["Are You Sure?",e.jsx(i,{disabled:l,appearance:"primary",onClick:()=>c(n),children:"Yes"})]})]})})}const gn=D({btn:{...R,columnGap:E.spacingVerticalS},drawer:{width:"1100px"}}),fn=new m("Admin","Product","Lexical");function Pn({ProdId:n}){const s=gn(),[r,{toggle:a,setTrue:c}]=$(),{data:l,run:t}=T(()=>G.Product.Get.Lexical(n)),{dispatch:o,dispatchToast:u}=b(fn),{run:y}=d.Product.Post.useLexical({onError(x,C){o({Message:"Failed Update Description",Request:C,Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Description Updated"})}),{intent:"success"}),t(),a()}});return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(i,{onClick:()=>c(),children:"Open Description Editor"})}),e.jsxs(De,{open:r,onOpenChange:a,position:"start",size:"large",modalType:"alert",className:s.drawer,children:[e.jsx(Se,{children:e.jsx(Ie,{action:e.jsxs("div",{className:s.btn,children:[e.jsx(i,{appearance:"primary",onClick:()=>y(n),children:"Save"}),e.jsx(i,{onClick:()=>a(),children:"Cancel"})]}),children:"Edit Product Description"})}),e.jsx(ve,{children:e.jsx(Ze,{State:l?.Description})})]})]})}const be=new m("Admin","Product","Detail","Name");function bn({ProdId:n}){const[s,r]=A.useState(""),[a,{setTrue:c,setFalse:l}]=$(),{Nav:t}=re();T(()=>d.Product.Get.Name(n),{onSuccess(x){r(x)},onError(x){t("Admin"),be.error(x)}});const{dispatch:o,dispatchToast:u}=b(be),{run:y}=d.Product.Patch.useName({onError(x,C){o({Message:"Failed Update Name",Request:C,Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Name Updated"})}),{intent:"success"}),l()}});return e.jsx(W,{size:"large",value:s,disabled:!a,appearance:"underline",onChange:(x,C)=>r(C.value),contentBefore:e.jsx(Te,{children:"Name"}),contentAfter:a?e.jsx(i,{appearance:"subtle",icon:e.jsx(xe,{}),onClick:()=>y(n,s)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{}),onClick:c})})}const ye=new m("Admin","Product","Detail","Photo","Edit","Caption");function yn({PhotoId:n}){const[s,r]=A.useState("");G.Product.Get.usePhoto(n,{onError:ye.error,onSuccess({Caption:o}){o&&r(o)}});const{dispatch:a,dispatchToast:c}=b(ye),{run:l,loading:t}=d.Product.Patch.useCaption(n,{onError(o,u){a({Message:"Failed Update Caption",Request:u,Error:o})},onSuccess(){c(e.jsx(g,{children:e.jsx(f,{children:"Caption Updated"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsx(ge,{label:"Caption",children:e.jsx(W,{value:s,placeholder:"Write some infomation here?",onChange:(o,u)=>r(u.value)})}),e.jsx(i,{disabled:t,onClick:()=>l(s),children:"Save Caption"})]})}const Nn=new m("Admin","Product","Detail","Photo","Edit","Delete");function wn(n){const{ProductId:s,PhotoId:r}=n,{dispatch:a,dispatchToast:c}=b(Nn),{run:l}=d.Product.Delete.usePhoto(n,{onError(t,o){a({Message:`Failed Delete Photo ${r} from Product ${s}`,Request:o,Error:t})},onSuccess(){c(e.jsx(g,{children:e.jsxs(f,{children:["Photo ",r," Deleted"]})}),{intent:"success"})}});return e.jsx(i,{appearance:"primary",onClick:()=>l(),children:"Delete"})}const Ne=new m("Admin","Product","Detail","Photo","Edit","Replace");function An({PhotoId:n,ProductId:s}){const{dispatch:r,dispatchToast:a}=b(Ne),{run:c,loading:l}=d.Product.Patch.usePhoto(n,Ne,{onBefore([t]){a(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",t.name," for Product ",s," to replace ",n]})}),{intent:"info"})},onError(t,o){r({Message:"Failed Update Photo",Request:o,Error:t})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Photo Updated"})}),{intent:"success"})}});return e.jsx(i,{disabled:l,onClick:()=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=()=>{t.files&&c(t.files[0])},t.click()},children:l?"Uploading...":"Replace"})}const En=D({box:{...R,columnGap:E.spacingHorizontalL},img:{...Ye,aspectRatio:"1",width:"50%"},cap:{...O,flexGrow:1,rowGap:E.spacingVerticalL}}),we=new m("Admin","Product","Detail","Photo","Edit");function Dn(n){const{PhotoId:s}=n,r=En(),{data:a}=G.Product.Get.usePhoto(s,{onError:we.error});return e.jsxs(K,{children:[e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{})})}),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(ee,{action:e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(X,{})})}),children:"Image Detail"}),e.jsxs(ne,{className:r.box,children:[e.jsx(Je,{shape:"rounded",className:r.img,Guid:a?.ObjectId,ParentLog:we}),e.jsxs("div",{className:r.cap,children:[e.jsx(yn,{...n}),e.jsx(An,{...n}),e.jsx(wn,{...n})]})]})]})})]})}function Sn({ParentLog:n,...s}){const{dispatch:r}=b(n),{run:a,loading:c}=d.Product.Post.useMovePhoto(s,{onError(l,t){r({Message:"Failed Update Order",Request:t,Error:l})}});return e.jsxs(e.Fragment,{children:[e.jsx(i,{disabled:c,appearance:"subtle",icon:e.jsx(Ue,{}),onClick:()=>a(!0)}),e.jsx(i,{disabled:c,appearance:"subtle",icon:e.jsx(He,{}),onClick:()=>a(!1)}),e.jsx(Dn,{...s})]})}const ce=D({f11:{flexBasis:"11%",flexGrow:0},box:{...R,justifyContent:"space-between"}}),M=new m("Admin","Product","Detail","Photo"),In=[$e(70,M,({PhotoId:n})=>{const{data:s}=G.Product.Get.usePhoto(n,{onError:M.error});return s?.ObjectId||""}),h({columnId:"Caption",renderHeaderCell:()=>e.jsx(j,{children:"Caption"}),renderCell({PhotoId:n}){const{data:s}=G.Product.Get.usePhoto(n,{onError:M.error});return e.jsx(p,{children:s?.Caption||"No Caption"})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:ce().f11,children:"Action"}),renderCell(n){return e.jsx(p,{className:ce().f11,children:e.jsx(Sn,{...n,ParentLog:M})})}})];function vn({ProdId:n}){const{data:s}=G.Product.Get.usePhotoList(n,{onError:M.error}),{dispatch:r,dispatchToast:a}=b(M),{run:c,loading:l}=d.Product.Post.usePhoto(n,M,{onBefore([t]){a(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",t.name," for Product ",n]})}),{intent:"info"})},onError(t,o){r({Message:"Failed Upload Photo",Request:o,Error:t})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Photo Uploaded"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:ce().box,children:[e.jsx(me,{children:"Photos"}),e.jsx(i,{disabled:l,appearance:"primary",icon:e.jsx(se,{}),onClick:()=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=()=>{t.files&&c(t.files[0])},t.click()},children:l?"Uploading...":"New Image"})]}),e.jsx(U,{Items:s?.map(t=>({PhotoId:t,ProductId:n})),Columns:In,getRowId:t=>t.PhotoId})]})}const Tn=new m("Admin","Product","Detail","Variant","Delete");function Gn({VariantId:n,Refresh:s}){const{dispatch:r,dispatchToast:a}=b(Tn),{run:c}=d.Product.Delete.useVariant({onError(l,t){r({Message:"Failed Delete Variant",Request:t,Error:l})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Variant Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(J,{}),onClick:()=>c(n)})}const $n=new m("Admin","Product","Detail","Variant","Edit","TypeDelete");function Rn({VariantId:n,Type:s,Refresh:r}){const{dispatch:a,dispatchToast:c}=b($n),{run:l}=d.Product.Delete.useType({onError(t,o){a({Message:"Failed Delete Type",Request:o,Error:t})},onSuccess(){c(e.jsx(g,{children:e.jsx(f,{children:"Type Deleted"})}),{intent:"success"}),r()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(J,{}),onClick:()=>l(n,s)})}const Vn=new m("Admin","Product","Detail","Variant","Edit","Name");function kn({Id:n,Name:s}){const[r,a]=A.useState(s),[c,{setTrue:l,setFalse:t}]=$(),{dispatch:o,dispatchToast:u}=b(Vn),{run:y}=d.Product.Patch.useVariantName({onError(x,C){o({Message:"Failed Update Variant Name",Request:C[0],Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Variant Name Updated"})}),{intent:"success"}),t()}});return e.jsx(W,{size:"large",value:r,disabled:!c,appearance:"underline",onChange:(x,C)=>a(C.value),contentBefore:e.jsx(Te,{children:"Name"}),contentAfter:c?e.jsx(i,{appearance:"subtle",icon:e.jsx(xe,{}),onClick:()=>y(n,r)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{}),onClick:l})})}const Un=D({body:{...O,rowGap:E.spacingVerticalM}}),Hn=new m("Admin","Product","Detail","Variant","Edit","Type");function Re({VariantId:n,Type:s,Refresh:r,New:a}){const c=Un(),[l,{toggle:t}]=$(),[o,u]=A.useState(s||""),{dispatch:y,dispatchToast:x}=b(Hn),C={manual:!0,onError(w,I){y({Message:`Failed ${a?"Create":"Update"} Type ${o}`,Request:I,Error:w})},onSuccess(w){x(e.jsxs(g,{children:[e.jsxs(f,{children:["Type ",a?"Created":"Updated"]}),e.jsxs(Fe,{children:[w," ",o]})]}),{intent:"success"}),r(),u(""),t()}},{run:S}=d.Product.Post.useType(C),{run:N}=d.Product.Patch.useType(C);return e.jsxs(je,{withArrow:!0,open:l,onOpenChange:t,children:[e.jsx(pe,{disableButtonEnhancement:!0,children:a?e.jsx(i,{icon:e.jsx(se,{}),appearance:"primary",children:"New Type"}):e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{})})}),e.jsxs(Ce,{className:c.body,children:[e.jsx(ge,{label:"Type Name",children:e.jsx(W,{value:o,onChange:(w,I)=>u(I.value)})}),e.jsx(i,{onClick:()=>a?S(n,o):N(n,s,o),children:"Submit"})]})]})}const le=D({body:{...O,rowGap:E.spacingVerticalM},twelve:{flexBasis:"12%",flexGrow:0}}),Fn=[h({columnId:"Name",renderHeaderCell:()=>e.jsx(j,{children:"Name"}),renderCell(n){return e.jsx(p,{children:n.Name})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:le().twelve,children:"Action"}),renderCell(n){return e.jsxs(p,{className:le().twelve,children:[e.jsx(Re,{VariantId:n.VariantId,Type:n.Name,Refresh:n.Refresh}),e.jsx(Rn,{VariantId:n.VariantId,Type:n.Name,Refresh:n.Refresh})]})}})];function Mn({Variant:n,Refresh:s}){return e.jsxs(K,{children:[e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(B,{})})}),e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx(ee,{action:e.jsx(k,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(X,{})})}),children:"Variant Detail"}),e.jsxs(ne,{className:le().body,children:[e.jsx(kn,{Id:n.Id,Name:n.Name}),e.jsx(U,{Items:n.Types.map((r,a)=>({Id:a,Name:r,VariantId:n.Id,Refresh:s})),Columns:Fn})]}),e.jsx(Me,{children:e.jsx(Re,{VariantId:n.Id,Refresh:s,New:!0})})]})})]})}const Bn=D({body:{...O,rowGap:E.spacingVerticalM}}),Ln=new m("Admin","Product","Detail","Variant","New");function On({ProdId:n,Refresh:s}){const r=Bn(),[a,{toggle:c}]=$(),[l,t]=A.useState(""),{dispatch:o,dispatchToast:u}=b(Ln),{run:y}=d.Product.Post.useVariant({onError(x,C){o({Message:"Failed Create Variant",Request:C,Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Variant Created"})}),{intent:"success"}),s(),t(""),c()}});return e.jsxs(je,{withArrow:!0,open:a,onOpenChange:c,children:[e.jsx(pe,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(se,{}),children:"New Variant"})}),e.jsxs(Ce,{className:r.body,children:[e.jsx(ge,{required:!0,label:"Variant Name",children:e.jsx(W,{value:l,onChange:(x,C)=>t(C.value)})}),e.jsx(i,{onClick:()=>y(n,l),children:"Add"})]})]})}const F=D({body:{...R,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},twelve:{flexBasis:"12%",flexGrow:0}}),Ae=new m("Admin","Product","Detail","Variant"),qn=[h({columnId:"Id",renderHeaderCell:()=>e.jsx(j,{className:F().four,children:"Id"}),renderCell(n){return e.jsx(p,{className:F().four,children:n.Id})}}),h({columnId:"Name",renderHeaderCell:()=>e.jsx(j,{className:F().twelve,children:"Name"}),renderCell(n){return e.jsx(p,{className:F().twelve,children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(j,{children:"Type"}),renderCell(n){return e.jsx(p,{children:n.Types.reduce((s,r)=>`${s} ${r} ;`,"")})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:F().seven,children:"Action"}),renderCell(n){return e.jsxs(p,{className:F().seven,children:[e.jsx(Mn,{Variant:n,Refresh:ie}),e.jsx(Gn,{VariantId:n.Id,Refresh:ie})]})}})];let ie;function zn({ProdId:n}){const s=F(),{data:r,run:a}=T(()=>d.Product.Get.Variants(n,Ae),{onError:Ae.error});return ie=a,e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s.body,children:[e.jsx(me,{children:"Variant"}),e.jsx(On,{ProdId:n,Refresh:a})]}),e.jsx(U,{Items:r,Columns:qn})]})}const _n=D({body:{...O,rowGap:E.spacingVerticalXL,paddingBottom:E.spacingVerticalXXXL}});function Xn({ProdId:n}){const s=_n(),[r,{setFalse:a,setTrue:c}]=$(),{Nav:l,Paths:t}=re(),o=parseInt(t.at(1));return A.useEffect(()=>{o===n?c():a()},[t]),e.jsxs(e.Fragment,{children:[e.jsx(i,{appearance:"subtle",icon:e.jsx(Be,{}),onClick:()=>{l("Admin",n),c()}}),e.jsxs(De,{open:r,position:"end",size:"large",modalType:"alert",children:[e.jsx(Se,{children:e.jsx(Ie,{action:e.jsx(i,{appearance:"subtle",icon:e.jsx(X,{}),onClick:()=>{l("Admin"),a()}}),children:"Product Detail"})}),e.jsxs(ve,{className:s.body,children:[e.jsx(bn,{ProdId:n}),e.jsx(rn,{ProdId:n}),e.jsx(vn,{ProdId:n}),e.jsx(zn,{ProdId:n}),e.jsx(mn,{ProdId:n}),e.jsx(Pn,{ProdId:n}),e.jsx(Cn,{ProdId:n})]})]})]})}const Y=new m("Admin","Product","Row");function Wn({item:n}){const[s,r]=A.useState(()=>({Id:n,Cover:"",Name:"Loading..."})),[a,{setTrue:c}]=$(),l=G.Product.Get;return Le(async()=>{const t=await l.Product(n).catch(Y.error);if(!t)return Y.warn(`Product ${n} Not Found`),c();let o={...s,Name:t.Name,Category:t.Category||"Pending"};r(o);const[u]=await l.PhotoList(n,!0);u||Y.warn(`Product ${n} has no photo`);const y=await l.Photo(u);r(o={...o,Cover:y.ObjectId});const x=await d.Product.Get.Count(n).catch(Y.error);x&&r({...o,...x})},[]),a?null:e.jsx(Ge,{children:({renderCell:t})=>t(s)},n)}const Ee=D({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"}}),Ve=new m("Admin","Product"),Yn=[$e(50,Ve,n=>n.Cover),h({columnId:"Product",renderHeaderCell:()=>e.jsx(j,{children:"Product"}),renderCell(n){return e.jsx(p,{children:e.jsx(fe,{children:n.Name})})}}),h({columnId:"Category",renderHeaderCell:()=>e.jsx(j,{children:"Category"}),renderCell(n){return e.jsx(p,{children:e.jsx(fe,{children:n.Category})})}}),h({columnId:"Variant",renderHeaderCell:()=>e.jsx(j,{children:"Variant"}),renderCell(n){return e.jsx(p,{children:n.Variant})}}),h({columnId:"Combo",renderHeaderCell:()=>e.jsx(j,{children:"Combo"}),renderCell(n){return e.jsx(p,{children:n.Combo})}}),h({columnId:"Stock",renderHeaderCell:()=>e.jsx(j,{children:"Stock"}),renderCell(n){return e.jsx(p,{children:n.Stock})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(j,{className:Ee().two,children:"Detail"}),renderCell(n){return e.jsx(p,{className:Ee().twoc,children:e.jsx(Xn,{ProdId:n.Id})})}})];function Jn(){const n=d.Product.Get.useList(Ve);return e.jsxs(Oe,{items:n?n.reverse():[],columns:Yn,children:[e.jsx(qe,{children:e.jsx(Ge,{children:({renderHeaderCell:s})=>s()})}),e.jsx(ze,{children:s=>e.jsx(Wn,{...s})}),!n&&e.jsx(_e,{size:48})]})}const Kn=new m("Admin","User","Delete");function Qn({UserId:n,Refresh:s}){const{dispatch:r,dispatchToast:a}=b(Kn),{run:c}=d.User.Delete.useUser({manual:!0,onError(l,t){r({Message:"Failed Delete User",Request:t,Error:l})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"User Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(J,{}),onClick:()=>c(n)})}const Zn=new m("Admin","User","Grant");function es({UserId:n,Admin:s,Refresh:r}){const{dispatch:a,dispatchToast:c}=b(Zn),{run:l}=d.User.Post.useAdmin({manual:!0,onError(o,u){a({Message:"Failed Grant Admin",Request:u,Error:o})},onSuccess(){c(e.jsx(g,{children:e.jsx(f,{children:"Admin Granted"})}),{intent:"success"}),r()}}),{run:t}=d.User.Delete.useAdmin({manual:!0,onError(o,u){a({Message:"Failed Revoke Admin",Request:u,Error:o})},onSuccess(){c(e.jsx(g,{children:e.jsx(f,{children:"Admin Revoked"})}),{intent:"success"}),r()}});return e.jsx(Xe,{checked:s,onChange:(o,u)=>{u.checked?l(n):t(n)}})}const ns=new m("Admin","User"),ss=[h({columnId:"Id",renderHeaderCell:()=>"Id",renderCell(n){return n.Id}}),h({columnId:"Name",renderHeaderCell:()=>"Real Name",renderCell(n){return n.Name}}),h({columnId:"Email",renderHeaderCell:()=>"E-Mail",renderCell(n){return n.EMail}}),h({columnId:"Admin",renderHeaderCell:()=>"Admin",renderCell(n){return e.jsx(es,{UserId:n.Id,Admin:n.Admin,Refresh:de})}}),h({columnId:"Delete",renderHeaderCell:()=>"Delete",renderCell(n){return e.jsx(Qn,{UserId:n.Id,Refresh:de})}})].map(({renderHeaderCell:n,renderCell:s,...r})=>({...r,renderHeaderCell:()=>e.jsx(j,{children:n()}),renderCell:a=>e.jsx(p,{children:s(a)})}));let de;function rs(){const{data:n,run:s}=T(()=>d.User.Get.List(),{onError:ns.error});return de=s,e.jsx(U,{Items:n,Columns:ss})}const ts=new m("Admin");function is(){const{Paths:n,Nav:s}=re(),r=n.at(1),a=A.useMemo(()=>{switch(r){case"Order":return e.jsx(nn,{});case"User":return e.jsx(rs,{});default:return e.jsx(Jn,{})}},[r]),{data:c}=G.User.Get.useMe(ts);return c?c.Admin?a:s("/"):e.jsx(We,{size:"huge",label:"Authenticating..."})}export{is as default};
