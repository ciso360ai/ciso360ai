import{ref as e,onMounted as t,nextTick as r,onUnmounted as n,computed as a,resolveComponent as o,openBlock as i,createBlock as s,withCtx as l,createVNode as c,unref as p}from"vue";import{useApi as d}from"@directus/extensions-sdk";
/*! RapiDoc 9.3.3 | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */(()=>{var e,t,r={448:(e,t,r)=>{const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new Map;class i{constructor(e,t){if(this._$cssResult$=!0,t!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=o.get(this.cssText);return n&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=e=>new i("string"==typeof e?e:e+"",a),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new i(r,a)},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return s(t)})(e):e;var p;const d=window.trustedTypes,u=d?d.emptyScript:"",h=window.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},m=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this._$Eh(r,t);void 0!==n&&(this._$Eu.set(n,r),e.push(n))})),e}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const a=this[e];this[t]=n,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=y){var n,a;const o=this.constructor._$Eh(e,r);if(void 0!==o&&!0===r.reflect){const i=(null!==(a=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==a?a:f.toAttribute)(t,r.type);this._$Ei=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Ei=null}}_$AK(e,t){var r,n,a;const o=this.constructor,i=o._$Eu.get(e);if(void 0!==i&&this._$Ei!==i){const e=o.getPropertyOptions(i),s=e.converter,l=null!==(a=null!==(n=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==a?a:f.fromAttribute;this._$Ei=i,this[i]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:g}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.3.0");const b=globalThis.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,k=`<${$}>`,S=document,A=(e="")=>S.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,j=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,P=/"/g,R=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),D=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),N=new WeakMap,z=S.createTreeWalker(S,129,null,!1);class q{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,o=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const r=e.length-1,n=[];let a,o=2===t?"<svg>":"",i=T;for(let t=0;t<r;t++){const r=e[t];let s,l,c=-1,p=0;for(;p<r.length&&(i.lastIndex=p,l=i.exec(r),null!==l);)p=i.lastIndex,i===T?"!--"===l[1]?i=C:void 0!==l[1]?i=j:void 0!==l[2]?(R.test(l[2])&&(a=RegExp("</"+l[2],"g")),i=_):void 0!==l[3]&&(i=_):i===_?">"===l[0]?(i=null!=a?a:T,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,s=l[1],i=void 0===l[3]?_:'"'===l[3]?P:I):i===P||i===I?i=_:i===C||i===j?i=T:(i=_,a=void 0);const d=i===_&&e[t+1].startsWith("/>")?" ":"";o+=i===T?r+k:c>=0?(n.push(s),r.slice(0,c)+"$lit$"+r.slice(c)+w+d):r+w+(-2===c?(n.push(void 0),t):d)}const s=o+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(s):s,n]})(e,t);if(this.el=q.createElement(l,r),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=z.nextNode())&&s.length<i;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const r=c[o++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?G:"@"===t[1]?K:H})}else s.push({type:6,index:a})}for(const t of e)n.removeAttribute(t)}if(R.test(n.tagName)){const e=n.textContent.split(w),t=e.length-1;if(t>0){n.textContent=b?b.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],A()),z.nextNode(),s.push({type:2,index:++a});n.append(e[t],A())}}}else if(8===n.nodeType)if(n.data===$)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)s.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){const r=S.createElement("template");return r.innerHTML=e,r}}function B(e,t,r=e,n){var a,o,i,s;if(t===D)return t;let l=void 0!==n?null===(a=r._$Cl)||void 0===a?void 0:a[n]:r._$Cu;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,n)),void 0!==n?(null!==(i=(s=r)._$Cl)&&void 0!==i?i:s._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(t=B(e,l._$AS(e,t.values),l,n)),t}class U{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(r,!0);z.currentNode=a;let o=z.nextNode(),i=0,s=0,l=n[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new M(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new J(o,this,e)),this.v.push(t),l=n[++s]}i!==(null==l?void 0:l.index)&&(o=z.nextNode(),i++)}return a}m(e){let t=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class M{constructor(e,t,r,n){var a;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),E(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==D&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return O(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==F&&E(this._$AH)?this._$AA.nextSibling.data=e:this.k(S.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.m(r);else{const e=new U(a,this),t=e.p(this.options);e.m(r),this.k(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new q(e)),t}S(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const a of e)n===t.length?t.push(r=new M(this.A(A()),this.A(A()),this,this.options)):r=t[n],r._$AI(a),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class H{constructor(e,t,r,n,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const a=this.strings;let o=!1;if(void 0===a)e=B(this,e,t,0),o=!E(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const n=e;let i,s;for(e=a[0],i=0;i<a.length-1;i++)s=B(this,n[r+i],t,i),s===D&&(s=this._$AH[i]),o||(o=!E(s)||s!==this._$AH[i]),s===F?e=F:e!==F&&(e+=(null!=s?s:"")+a[i+1]),this._$AH[i]=s}o&&!n&&this.C(e)}C(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends H{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===F?void 0:e}}const V=b?b.emptyScript:"";class G extends H{constructor(){super(...arguments),this.type=4}C(e){e&&e!==F?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class K extends H{constructor(e,t,r,n,a){super(e,t,r,n,a),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=B(this,e,t,0))&&void 0!==r?r:F)===D)return;const n=this._$AH,a=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==F&&(n===F||a);a&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Y=window.litHtmlPolyfillSupport;var Z,Q;null==Y||Y(q,M),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.0");class X extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,r)=>{var n,a;const o=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let i=o._$litPart$;if(void 0===i){const e=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;o._$litPart$=i=new M(t.insertBefore(A(),e),e,void 0,null!=r?r:{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return D}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0");let te={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const re=/[&<>"']/,ne=/[&<>"']/g,ae=/[<>"']|&(?!#?\w+;)/,oe=/[<>"']|&(?!#?\w+;)/g,ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},se=e=>ie[e];function le(e,t){if(t){if(re.test(e))return e.replace(ne,se)}else if(ae.test(e))return e.replace(oe,se);return e}const ce=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function pe(e){return e.replace(ce,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const de=/(^|[^\[])\^/g;function ue(e,t){e="string"==typeof e?e:e.source,t=t||"";const r={replace:(t,n)=>(n=(n=n.source||n).replace(de,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}const he=/[^\w:]/g,fe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function me(e,t,r){if(e){let t;try{t=decodeURIComponent(pe(r)).replace(he,"").toLowerCase()}catch(e){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}t&&!fe.test(r)&&(r=function(e,t){ye[" "+e]||(ge.test(e)?ye[" "+e]=e+"/":ye[" "+e]=ke(e,"/",!0));const r=-1===(e=ye[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(ve,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(be,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const ye={},ge=/^[^:]+:\/*[^/]*$/,ve=/^([^:]+:)[\s\S]*$/,be=/^([^:]+:\/*[^/]*)[\s\S]*$/,xe={exec:function(){}};function we(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function $e(e,t){const r=e.replace(/\|/g,((e,t,r)=>{let n=!1,a=t;for(;--a>=0&&"\\"===r[a];)n=!n;return n?"|":" |"})).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function ke(e,t,r){const n=e.length;if(0===n)return"";let a=0;for(;a<n;){const o=e.charAt(n-a-1);if(o!==t||r){if(o===t||!r)break;a++}else a++}return e.slice(0,n-a)}function Se(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ae(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function Ee(e,t,r,n){const a=t.href,o=t.title?le(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;const e={type:"link",raw:r,href:a,title:o,text:i,tokens:n.inlineTokens(i,[])};return n.state.inLink=!1,e}return{type:"image",raw:r,href:a,title:o,text:le(i)}}class Oe{constructor(e){this.options=e||te}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:ke(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/);if(null===r)return t;const n=r[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[r]=t;return r.length>=n.length?e.slice(n.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=ke(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const r={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,a,o,i,s,l,c,p,d,u,h,f=t[1].trim();const m=f.length>1,y={type:"list",raw:"",ordered:m,start:m?+f.slice(0,-1):"",loose:!1,items:[]};f=m?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=m?f:"[*+-]");const g=new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(o=2,u=c.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,u=c.slice(o),o+=t[1].length),s=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){const t=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),a=new RegExp(`^( {0,${Math.min(3,o-1)}})(\`\`\`|~~~)`);for(;e&&(d=e.split("\n",1)[0],c=d,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!a.test(c))&&!this.rules.block.heading.test(c)&&!t.test(c)&&!n.test(e);){if(c.search(/[^ ]/)>=o||!c.trim())u+="\n"+c.slice(o);else{if(s)break;u+="\n"+c}s||c.trim()||(s=!0),r+=d+"\n",e=e.substring(d.length+1)}}y.loose||(l?y.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(u),n&&(a="[ ] "!==n[0],u=u.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:r,task:!!n,checked:a,loose:!1,text:u}),y.raw+=r}y.items[y.items.length-1].raw=r.trimRight(),y.items[y.items.length-1].text=u.trimRight(),y.raw=y.raw.trimRight();const v=y.items.length;for(i=0;i<v;i++){this.lexer.state.top=!1,y.items[i].tokens=this.lexer.blockTokens(y.items[i].text,[]);const e=y.items[i].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let r=0;for(const e of t)if("\n"===e&&(r+=1),r>1)return!0;return!1}));!y.loose&&e.length&&t&&(y.loose=!0,y.items[i].loose=!0)}return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):le(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:$e(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,a,o,i=e.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(i=e.rows.length,r=0;r<i;r++)e.rows[r]=$e(e.rows[r],e.header.length).map((e=>({text:e})));for(i=e.header.length,n=0;n<i;n++)e.header[n].tokens=[],this.lexer.inline(e.header[n].text,e.header[n].tokens);for(i=e.rows.length,n=0;n<i;n++)for(o=e.rows[n],a=0;a<o.length;a++)o[a].tokens=[],this.lexer.inline(o[a].text,o[a].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:le(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):le(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=ke(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const r=e.length;let n=0,a=0;for(;a<r;a++)if("\\"===e[a])a++;else if(e[a]===t[0])n++;else if(e[a]===t[1]&&(n--,n<0))return a;return-1}(t[2],"()");if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Ee(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:n?n.replace(this.rules.inline._escapes,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return Ee(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n)return;if(n[3]&&r.match(/[\p{L}\p{N}]/u))return;const a=n[1]||n[2]||"";if(!a||a&&(""===r||this.rules.inline.punctuation.exec(r))){const r=n[0].length-1;let a,o,i=r,s=0;const l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(a=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!a)continue;if(o=a.length,n[3]||n[4]){i+=o;continue}if((n[5]||n[6])&&r%3&&!((r+o)%3)){s+=o;continue}if(i-=o,i>0)continue;if(o=Math.min(o,o+i+s),Math.min(r,o)%2){const t=e.slice(1,r+n.index+o);return{type:"em",raw:e.slice(0,r+n.index+o+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,r+n.index+o-1);return{type:"strong",raw:e.slice(0,r+n.index+o+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return r&&n&&(e=e.substring(1,e.length-1)),e=le(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let e,n;return"@"===r[2]?(e=le(this.options.mangle?t(r[1]):r[1]),n="mailto:"+e):(e=le(r[1]),n=e),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])e=le(this.options.mangle?t(r[0]):r[0]),n="mailto:"+e;else{let t;do{t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(t!==r[0]);e=le(r[0]),n="www."===r[1]?"http://"+e:e}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):le(r[0]):r[0]:le(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const Te={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Te.def=ue(Te.def).replace("label",Te._label).replace("title",Te._title).getRegex(),Te.bullet=/(?:[*+-]|\d{1,9}[.)])/,Te.listItemStart=ue(/^( *)(bull) */).replace("bull",Te.bullet).getRegex(),Te.list=ue(Te.list).replace(/bull/g,Te.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Te.def.source+")").getRegex(),Te._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Te._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Te.html=ue(Te.html,"i").replace("comment",Te._comment).replace("tag",Te._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Te.paragraph=ue(Te._paragraph).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex(),Te.blockquote=ue(Te.blockquote).replace("paragraph",Te.paragraph).getRegex(),Te.normal=we({},Te),Te.gfm=we({},Te.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Te.gfm.table=ue(Te.gfm.table).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex(),Te.gfm.paragraph=ue(Te._paragraph).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Te.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex(),Te.pedantic=we({},Te.normal,{html:ue("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Te._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xe,paragraph:ue(Te.normal._paragraph).replace("hr",Te.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Te.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Ce={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function je(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function _e(e){let t,r,n="";const a=e.length;for(t=0;t<a;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}Ce._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Ce.punctuation=ue(Ce.punctuation).replace(/punctuation/g,Ce._punctuation).getRegex(),Ce.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Ce.escapedEmSt=/\\\*|\\_/g,Ce._comment=ue(Te._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Ce.emStrong.lDelim=ue(Ce.emStrong.lDelim).replace(/punct/g,Ce._punctuation).getRegex(),Ce.emStrong.rDelimAst=ue(Ce.emStrong.rDelimAst,"g").replace(/punct/g,Ce._punctuation).getRegex(),Ce.emStrong.rDelimUnd=ue(Ce.emStrong.rDelimUnd,"g").replace(/punct/g,Ce._punctuation).getRegex(),Ce._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Ce._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Ce._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Ce.autolink=ue(Ce.autolink).replace("scheme",Ce._scheme).replace("email",Ce._email).getRegex(),Ce._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Ce.tag=ue(Ce.tag).replace("comment",Ce._comment).replace("attribute",Ce._attribute).getRegex(),Ce._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ce._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Ce._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Ce.link=ue(Ce.link).replace("label",Ce._label).replace("href",Ce._href).replace("title",Ce._title).getRegex(),Ce.reflink=ue(Ce.reflink).replace("label",Ce._label).replace("ref",Te._label).getRegex(),Ce.nolink=ue(Ce.nolink).replace("ref",Te._label).getRegex(),Ce.reflinkSearch=ue(Ce.reflinkSearch,"g").replace("reflink",Ce.reflink).replace("nolink",Ce.nolink).getRegex(),Ce.normal=we({},Ce),Ce.pedantic=we({},Ce.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ue(/^!?\[(label)\]\((.*?)\)/).replace("label",Ce._label).getRegex(),reflink:ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ce._label).getRegex()}),Ce.gfm=we({},Ce.normal,{escape:ue(Ce.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Ce.gfm.url=ue(Ce.gfm.url,"i").replace("email",Ce.gfm._extended_email).getRegex(),Ce.breaks=we({},Ce.gfm,{br:ue(Ce.br).replace("{2,}","*").getRegex(),text:ue(Ce.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Ie{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||te,this.options.tokenizer=this.options.tokenizer||new Oe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Te.normal,inline:Ce.normal};this.options.pedantic?(t.block=Te.pedantic,t.inline=Ce.pedantic):this.options.gfm&&(t.block=Te.gfm,this.options.breaks?t.inline=Ce.breaks:t.inline=Ce.gfm),this.tokenizer.rules=t}static get rules(){return{block:Te,inline:Ce}}static lex(e,t){return new Ie(t).lex(e)}static lexInline(e,t){return new Ie(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,a,o;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,r)=>t+"    ".repeat(r.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(a=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startBlock.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(a)))n=t[t.length-1],o&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),o=a.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,a,o,i,s,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,o.index)+"["+Ae("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,o.index)+"["+Ae("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,o.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(i||(s=""),i=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,s))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,_e))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,_e))){if(a=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startInline.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(a,je))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(s=r.raw.slice(-1)),i=!0,n=t[t.length-1],n&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class Pe{constructor(e){this.options=e||te}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+le(n,!0)+'">'+(r?e:le(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:le(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){const n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=me(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+le(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(null===(e=me(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class Re{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Le{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do{n++,r=e+"-"+n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class De{constructor(e){this.options=e||te,this.options.renderer=this.options.renderer||new Pe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Re,this.slugger=new Le}static parse(e,t){return new De(t).parse(e)}static parseInline(e,t){return new De(t).parseInline(e)}parse(e,t=!0){let r,n,a,o,i,s,l,c,p,d,u,h,f,m,y,g,v,b,x,w="";const $=e.length;for(r=0;r<$;r++)if(d=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(x=this.options.extensions.renderers[d.type].call({parser:this},d),!1!==x||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)))w+=x||"";else switch(d.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(d.tokens),d.depth,pe(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(d.text,d.lang,d.escaped);continue;case"table":for(c="",l="",o=d.header.length,n=0;n<o;n++)l+=this.renderer.tablecell(this.parseInline(d.header[n].tokens),{header:!0,align:d.align[n]});for(c+=this.renderer.tablerow(l),p="",o=d.rows.length,n=0;n<o;n++){for(s=d.rows[n],l="",i=s.length,a=0;a<i;a++)l+=this.renderer.tablecell(this.parseInline(s[a].tokens),{header:!1,align:d.align[a]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(d.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(u=d.ordered,h=d.start,f=d.loose,o=d.items.length,p="",n=0;n<o;n++)y=d.items[n],g=y.checked,v=y.task,m="",y.task&&(b=this.renderer.checkbox(g),f?y.tokens.length>0&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=b+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=b+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(y.tokens,f),p+=this.renderer.listitem(m,v,g);w+=this.renderer.list(p,u,h);continue;case"html":w+=this.renderer.html(d.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case"text":for(p=d.tokens?this.parseInline(d.tokens):d.text;r+1<$&&"text"===e[r+1].type;)d=e[++r],p+="\n"+(d.tokens?this.parseInline(d.tokens):d.text);w+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,a,o="";const i=e.length;for(r=0;r<i;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(a=this.options.extensions.renderers[n.type].call({parser:this},n),!1!==a||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))o+=a||"";else switch(n.type){case"escape":case"text":o+=t.text(n.text);break;case"html":o+=t.html(n.text);break;case"link":o+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":o+=t.image(n.href,n.title,n.text);break;case"strong":o+=t.strong(this.parseInline(n.tokens,t));break;case"em":o+=t.em(this.parseInline(n.tokens,t));break;case"codespan":o+=t.codespan(n.text);break;case"br":o+=t.br();break;case"del":o+=t.del(this.parseInline(n.tokens,t));break;default:{const e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return o}}function Fe(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(r=t,t=null),Se(t=we({},Fe.defaults,t||{})),r){const n=t.highlight;let a;try{a=Ie.lex(e,t)}catch(e){return r(e)}const o=function(e){let o;if(!e)try{t.walkTokens&&Fe.walkTokens(a,t.walkTokens),o=De.parse(a,t)}catch(t){e=t}return t.highlight=n,e?r(e):r(null,o)};if(!n||n.length<3)return o();if(delete t.highlight,!a.length)return o();let i=0;return Fe.walkTokens(a,(function(e){"code"===e.type&&(i++,setTimeout((()=>{n(e.text,e.lang,(function(t,r){if(t)return o(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),i--,0===i&&o()}))}),0))})),void(0===i&&o())}try{const r=Ie.lex(e,t);return t.walkTokens&&Fe.walkTokens(r,t.walkTokens),De.parse(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+le(e.message+"",!0)+"</pre>";throw e}}Fe.options=Fe.setOptions=function(e){var t;return we(Fe.defaults,e),t=Fe.defaults,te=t,Fe},Fe.getDefaults=function(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},Fe.defaults=te,Fe.use=function(...e){const t=we({},...e),r=Fe.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach((e=>{if(e.extensions&&(n=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=r.renderers?r.renderers[e.name]:null;r.renderers[e.name]=t?function(...r){let n=e.renderer.apply(this,r);return!1===n&&(n=t.apply(this,r)),n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");r[e.level]?r[e.level].unshift(e.tokenizer):r[e.level]=[e.tokenizer],e.start&&("block"===e.level?r.startBlock?r.startBlock.push(e.start):r.startBlock=[e.start]:"inline"===e.level&&(r.startInline?r.startInline.push(e.start):r.startInline=[e.start]))}e.childTokens&&(r.childTokens[e.name]=e.childTokens)}))),e.renderer){const r=Fe.defaults.renderer||new Pe;for(const t in e.renderer){const n=r[t];r[t]=(...a)=>{let o=e.renderer[t].apply(r,a);return!1===o&&(o=n.apply(r,a)),o}}t.renderer=r}if(e.tokenizer){const r=Fe.defaults.tokenizer||new Oe;for(const t in e.tokenizer){const n=r[t];r[t]=(...a)=>{let o=e.tokenizer[t].apply(r,a);return!1===o&&(o=n.apply(r,a)),o}}t.tokenizer=r}if(e.walkTokens){const r=Fe.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),r&&r.call(this,t)}}n&&(t.extensions=r),Fe.setOptions(t)}))},Fe.walkTokens=function(e,t){for(const r of e)switch(t.call(Fe,r),r.type){case"table":for(const e of r.header)Fe.walkTokens(e.tokens,t);for(const e of r.rows)for(const r of e)Fe.walkTokens(r.tokens,t);break;case"list":Fe.walkTokens(r.items,t);break;default:Fe.defaults.extensions&&Fe.defaults.extensions.childTokens&&Fe.defaults.extensions.childTokens[r.type]?Fe.defaults.extensions.childTokens[r.type].forEach((function(e){Fe.walkTokens(r[e],t)})):r.tokens&&Fe.walkTokens(r.tokens,t)}},Fe.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");Se(t=we({},Fe.defaults,t||{}));try{const r=Ie.lexInline(e,t);return t.walkTokens&&Fe.walkTokens(r,t.walkTokens),De.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+le(e.message+"",!0)+"</pre>";throw e}},Fe.Parser=De,Fe.parser=De.parse,Fe.Renderer=Pe,Fe.TextRenderer=Re,Fe.Lexer=Ie,Fe.lexer=Ie.lex,Fe.Tokenizer=Oe,Fe.Slugger=Le,Fe.parse=Fe,Fe.options,Fe.setOptions,Fe.use,Fe.walkTokens,Fe.parseInline,De.parse,Ie.lex;var Ne=r(660),ze=r.n(Ne);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);const qe=l`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,Be=l`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,Ue=l`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,Me=l`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,He=l`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,We=l`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,Ve=l`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`,Ge=l`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,Ke=l`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,Je=l`

`,Ye=/[\s#:?&={}]/g,Ze="_rapidoc_api_key";function Qe(e){return new Promise((t=>setTimeout(t,e)))}function Xe(e,t){const r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout((()=>{r.innerText="Copy"}),5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(n)}function et(e,t,r="includes"){return"includes"===r?`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(`${t.method} ${t.path}`)}function tt(e,t=new Set){return e?(Object.keys(e).forEach((r=>{var n;if(t.add(r),e[r].properties)tt(e[r].properties,t);else if(null!==(n=e[r].items)&&void 0!==n&&n.properties){var a;tt(null===(a=e[r].items)||void 0===a?void 0:a.properties,t)}})),t):t}function rt(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function nt(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}var at=function(e){return e&&e.Math==Math&&e},ot=at("object"==typeof globalThis&&globalThis)||at("object"==typeof window&&window)||at("object"==typeof self&&self)||at("object"==typeof ot&&ot)||function(){return this}()||Function("return this")(),it=function(e){try{return!!e()}catch(e){return!0}},st=!it((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),lt=st,ct=Function.prototype,pt=ct.apply,dt=ct.call,ut="object"==typeof Reflect&&Reflect.apply||(lt?dt.bind(pt):function(){return dt.apply(pt,arguments)}),ht=st,ft=Function.prototype,mt=ft.bind,yt=ft.call,gt=ht&&mt.bind(yt,yt),vt=ht?function(e){return e&&gt(e)}:function(e){return e&&function(){return yt.apply(e,arguments)}},bt=function(e){return"function"==typeof e},xt={},wt=!it((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),$t=st,kt=Function.prototype.call,St=$t?kt.bind(kt):function(){return kt.apply(kt,arguments)},At={},Et={}.propertyIsEnumerable,Ot=Object.getOwnPropertyDescriptor,Tt=Ot&&!Et.call({1:2},1);At.f=Tt?function(e){var t=Ot(this,e);return!!t&&t.enumerable}:Et;var Ct,jt,_t=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},It=vt,Pt=It({}.toString),Rt=It("".slice),Lt=function(e){return Rt(Pt(e),8,-1)},Dt=vt,Ft=it,Nt=Lt,zt=ot.Object,qt=Dt("".split),Bt=Ft((function(){return!zt("z").propertyIsEnumerable(0)}))?function(e){return"String"==Nt(e)?qt(e,""):zt(e)}:zt,Ut=ot.TypeError,Mt=function(e){if(null==e)throw Ut("Can't call method on "+e);return e},Ht=Bt,Wt=Mt,Vt=function(e){return Ht(Wt(e))},Gt=bt,Kt=function(e){return"object"==typeof e?null!==e:Gt(e)},Jt={},Yt=Jt,Zt=ot,Qt=bt,Xt=function(e){return Qt(e)?e:void 0},er=function(e,t){return arguments.length<2?Xt(Yt[e])||Xt(Zt[e]):Yt[e]&&Yt[e][t]||Zt[e]&&Zt[e][t]},tr=vt({}.isPrototypeOf),rr=er("navigator","userAgent")||"",nr=ot,ar=rr,or=nr.process,ir=nr.Deno,sr=or&&or.versions||ir&&ir.version,lr=sr&&sr.v8;lr&&(jt=(Ct=lr.split("."))[0]>0&&Ct[0]<4?1:+(Ct[0]+Ct[1])),!jt&&ar&&(!(Ct=ar.match(/Edge\/(\d+)/))||Ct[1]>=74)&&(Ct=ar.match(/Chrome\/(\d+)/))&&(jt=+Ct[1]);var cr=jt,pr=cr,dr=it,ur=!!Object.getOwnPropertySymbols&&!dr((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&pr&&pr<41})),hr=ur&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,fr=er,mr=bt,yr=tr,gr=hr,vr=ot.Object,br=gr?function(e){return"symbol"==typeof e}:function(e){var t=fr("Symbol");return mr(t)&&yr(t.prototype,vr(e))},xr=ot.String,wr=function(e){try{return xr(e)}catch(e){return"Object"}},$r=bt,kr=wr,Sr=ot.TypeError,Ar=function(e){if($r(e))return e;throw Sr(kr(e)+" is not a function")},Er=Ar,Or=function(e,t){var r=e[t];return null==r?void 0:Er(r)},Tr=St,Cr=bt,jr=Kt,_r=ot.TypeError,Ir={exports:{}},Pr=ot,Rr=Object.defineProperty,Lr="__core-js_shared__",Dr=ot[Lr]||function(e,t){try{Rr(Pr,e,{value:t,configurable:!0,writable:!0})}catch(r){Pr[e]=t}return t}(Lr,{}),Fr=Dr;(Ir.exports=function(e,t){return Fr[e]||(Fr[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Nr=Mt,zr=ot.Object,qr=function(e){return zr(Nr(e))},Br=qr,Ur=vt({}.hasOwnProperty),Mr=Object.hasOwn||function(e,t){return Ur(Br(e),t)},Hr=vt,Wr=0,Vr=Math.random(),Gr=Hr(1..toString),Kr=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Gr(++Wr+Vr,36)},Jr=ot,Yr=Ir.exports,Zr=Mr,Qr=Kr,Xr=ur,en=hr,tn=Yr("wks"),rn=Jr.Symbol,nn=rn&&rn.for,an=en?rn:rn&&rn.withoutSetter||Qr,on=function(e){if(!Zr(tn,e)||!Xr&&"string"!=typeof tn[e]){var t="Symbol."+e;Xr&&Zr(rn,e)?tn[e]=rn[e]:tn[e]=en&&nn?nn(t):an(t)}return tn[e]},sn=St,ln=Kt,cn=br,pn=Or,dn=on,un=ot.TypeError,hn=dn("toPrimitive"),fn=function(e,t){if(!ln(e)||cn(e))return e;var r,n=pn(e,hn);if(n){if(void 0===t&&(t="default"),r=sn(n,e,t),!ln(r)||cn(r))return r;throw un("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var r,n;if("string"===t&&Cr(r=e.toString)&&!jr(n=Tr(r,e)))return n;if(Cr(r=e.valueOf)&&!jr(n=Tr(r,e)))return n;if("string"!==t&&Cr(r=e.toString)&&!jr(n=Tr(r,e)))return n;throw _r("Can't convert object to primitive value")}(e,t)},mn=br,yn=function(e){var t=fn(e,"string");return mn(t)?t:t+""},gn=Kt,vn=ot.document,bn=gn(vn)&&gn(vn.createElement),xn=function(e){return bn?vn.createElement(e):{}},wn=xn,$n=!wt&&!it((function(){return 7!=Object.defineProperty(wn("div"),"a",{get:function(){return 7}}).a})),kn=wt,Sn=St,An=At,En=_t,On=Vt,Tn=yn,Cn=Mr,jn=$n,_n=Object.getOwnPropertyDescriptor;xt.f=kn?_n:function(e,t){if(e=On(e),t=Tn(t),jn)try{return _n(e,t)}catch(e){}if(Cn(e,t))return En(!Sn(An.f,e,t),e[t])};var In=it,Pn=bt,Rn=/#|\.prototype\./,Ln=function(e,t){var r=Fn[Dn(e)];return r==zn||r!=Nn&&(Pn(t)?In(t):!!t)},Dn=Ln.normalize=function(e){return String(e).replace(Rn,".").toLowerCase()},Fn=Ln.data={},Nn=Ln.NATIVE="N",zn=Ln.POLYFILL="P",qn=Ln,Bn=Ar,Un=st,Mn=vt(vt.bind),Hn=function(e,t){return Bn(e),void 0===t?e:Un?Mn(e,t):function(){return e.apply(t,arguments)}},Wn={},Vn=wt&&it((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Gn=ot,Kn=Kt,Jn=Gn.String,Yn=Gn.TypeError,Zn=function(e){if(Kn(e))return e;throw Yn(Jn(e)+" is not an object")},Qn=wt,Xn=$n,ea=Vn,ta=Zn,ra=yn,na=ot.TypeError,aa=Object.defineProperty,oa=Object.getOwnPropertyDescriptor;Wn.f=Qn?ea?function(e,t,r){if(ta(e),t=ra(t),ta(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=oa(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return aa(e,t,r)}:aa:function(e,t,r){if(ta(e),t=ra(t),ta(r),Xn)try{return aa(e,t,r)}catch(e){}if("get"in r||"set"in r)throw na("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var ia=Wn,sa=_t,la=wt?function(e,t,r){return ia.f(e,t,sa(1,r))}:function(e,t,r){return e[t]=r,e},ca=ot,pa=ut,da=vt,ua=bt,ha=xt.f,fa=qn,ma=Jt,ya=Hn,ga=la,va=Mr,ba=function(e){var t=function(r,n,a){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,a)}return pa(e,this,arguments)};return t.prototype=e.prototype,t},xa=function(e,t){var r,n,a,o,i,s,l,c,p=e.target,d=e.global,u=e.stat,h=e.proto,f=d?ca:u?ca[p]:(ca[p]||{}).prototype,m=d?ma:ma[p]||ga(ma,p,{})[p],y=m.prototype;for(a in t)r=!fa(d?a:p+(u?".":"#")+a,e.forced)&&f&&va(f,a),i=m[a],r&&(s=e.noTargetGet?(c=ha(f,a))&&c.value:f[a]),o=r&&s?s:t[a],r&&typeof i==typeof o||(l=e.bind&&r?ya(o,ca):e.wrap&&r?ba(o):h&&ua(o)?da(o):o,(e.sham||o&&o.sham||i&&i.sham)&&ga(l,"sham",!0),ga(m,a,l),h&&(va(ma,n=p+"Prototype")||ga(ma,n,{}),ga(ma[n],a,o),e.real&&y&&!y[a]&&ga(y,a,o)))},wa=Math.ceil,$a=Math.floor,ka=function(e){var t=+e;return t!=t||0===t?0:(t>0?$a:wa)(t)},Sa=ka,Aa=Math.max,Ea=Math.min,Oa=function(e,t){var r=Sa(e);return r<0?Aa(r+t,0):Ea(r,t)},Ta=ka,Ca=Math.min,ja=function(e){return e>0?Ca(Ta(e),9007199254740991):0},_a=ja,Ia=function(e){return _a(e.length)},Pa=Vt,Ra=Oa,La=Ia,Da=function(e){return function(t,r,n){var a,o=Pa(t),i=La(o),s=Ra(n,i);if(e&&r!=r){for(;i>s;)if((a=o[s++])!=a)return!0}else for(;i>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Fa={includes:Da(!0),indexOf:Da(!1)},Na={},za=Mr,qa=Vt,Ba=Fa.indexOf,Ua=Na,Ma=vt([].push),Ha=function(e,t){var r,n=qa(e),a=0,o=[];for(r in n)!za(Ua,r)&&za(n,r)&&Ma(o,r);for(;t.length>a;)za(n,r=t[a++])&&(~Ba(o,r)||Ma(o,r));return o},Wa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Va=Ha,Ga=Wa,Ka=Object.keys||function(e){return Va(e,Ga)},Ja=qr,Ya=Ka;xa({target:"Object",stat:!0,forced:it((function(){Ya(1)}))},{keys:function(e){return Ya(Ja(e))}});var Za=Jt.Object.keys,Qa=Za,Xa=Lt,eo=Array.isArray||function(e){return"Array"==Xa(e)},to={};to[on("toStringTag")]="z";var ro="[object z]"===String(to),no=ot,ao=ro,oo=bt,io=Lt,so=on("toStringTag"),lo=no.Object,co="Arguments"==io(function(){return arguments}()),po=ao?io:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=lo(e),so))?r:co?io(t):"Object"==(n=io(t))&&oo(t.callee)?"Arguments":n},uo=po,ho=ot.String,fo=function(e){if("Symbol"===uo(e))throw TypeError("Cannot convert a Symbol value to a string");return ho(e)},mo={},yo=wt,go=Vn,vo=Wn,bo=Zn,xo=Vt,wo=Ka;mo.f=yo&&!go?Object.defineProperties:function(e,t){bo(e);for(var r,n=xo(t),a=wo(t),o=a.length,i=0;o>i;)vo.f(e,r=a[i++],n[r]);return e};var $o,ko=er("document","documentElement"),So=Ir.exports,Ao=Kr,Eo=So("keys"),Oo=function(e){return Eo[e]||(Eo[e]=Ao(e))},To=Zn,Co=mo,jo=Wa,_o=Na,Io=ko,Po=xn,Ro=Oo("IE_PROTO"),Lo=function(){},Do=function(e){return"<script>"+e+"<\/script>"},Fo=function(e){e.write(Do("")),e.close();var t=e.parentWindow.Object;return e=null,t},No=function(){try{$o=new ActiveXObject("htmlfile")}catch(e){}var e,t;No="undefined"!=typeof document?document.domain&&$o?Fo($o):((t=Po("iframe")).style.display="none",Io.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Do("document.F=Object")),e.close(),e.F):Fo($o);for(var r=jo.length;r--;)delete No.prototype[jo[r]];return No()};_o[Ro]=!0;var zo=Object.create||function(e,t){var r;return null!==e?(Lo.prototype=To(e),r=new Lo,Lo.prototype=null,r[Ro]=e):r=No(),void 0===t?r:Co.f(r,t)},qo={},Bo=Ha,Uo=Wa.concat("length","prototype");qo.f=Object.getOwnPropertyNames||function(e){return Bo(e,Uo)};var Mo={},Ho=yn,Wo=Wn,Vo=_t,Go=function(e,t,r){var n=Ho(t);n in e?Wo.f(e,n,Vo(0,r)):e[n]=r},Ko=Oa,Jo=Ia,Yo=Go,Zo=ot.Array,Qo=Math.max,Xo=function(e,t,r){for(var n=Jo(e),a=Ko(t,n),o=Ko(void 0===r?n:r,n),i=Zo(Qo(o-a,0)),s=0;a<o;a++,s++)Yo(i,s,e[a]);return i.length=s,i},ei=Lt,ti=Vt,ri=qo.f,ni=Xo,ai="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Mo.f=function(e){return ai&&"Window"==ei(e)?function(e){try{return ri(e)}catch(e){return ni(ai)}}(e):ri(ti(e))};var oi={};oi.f=Object.getOwnPropertySymbols;var ii=vt([].slice),si=la,li=function(e,t,r,n){n&&n.enumerable?e[t]=r:si(e,t,r)},ci={},pi=on;ci.f=pi;var di=Jt,ui=Mr,hi=ci,fi=Wn.f,mi=function(e){var t=di.Symbol||(di.Symbol={});ui(t,e)||fi(t,e,{value:hi.f(e)})},yi=po,gi=ro?{}.toString:function(){return"[object "+yi(this)+"]"},vi=ro,bi=Wn.f,xi=la,wi=Mr,$i=gi,ki=on("toStringTag"),Si=function(e,t,r,n){if(e){var a=r?e:e.prototype;wi(a,ki)||bi(a,ki,{configurable:!0,value:t}),n&&!vi&&xi(a,"toString",$i)}},Ai=bt,Ei=Dr,Oi=vt(Function.toString);Ai(Ei.inspectSource)||(Ei.inspectSource=function(e){return Oi(e)});var Ti,Ci,ji,_i=Ei.inspectSource,Ii=bt,Pi=_i,Ri=ot.WeakMap,Li=Ii(Ri)&&/native code/.test(Pi(Ri)),Di=Li,Fi=ot,Ni=vt,zi=Kt,qi=la,Bi=Mr,Ui=Dr,Mi=Oo,Hi=Na,Wi="Object already initialized",Vi=Fi.TypeError,Gi=Fi.WeakMap;if(Di||Ui.state){var Ki=Ui.state||(Ui.state=new Gi),Ji=Ni(Ki.get),Yi=Ni(Ki.has),Zi=Ni(Ki.set);Ti=function(e,t){if(Yi(Ki,e))throw new Vi(Wi);return t.facade=e,Zi(Ki,e,t),t},Ci=function(e){return Ji(Ki,e)||{}},ji=function(e){return Yi(Ki,e)}}else{var Qi=Mi("state");Hi[Qi]=!0,Ti=function(e,t){if(Bi(e,Qi))throw new Vi(Wi);return t.facade=e,qi(e,Qi,t),t},Ci=function(e){return Bi(e,Qi)?e[Qi]:{}},ji=function(e){return Bi(e,Qi)}}var Xi={set:Ti,get:Ci,has:ji,enforce:function(e){return ji(e)?Ci(e):Ti(e,{})},getterFor:function(e){return function(t){var r;if(!zi(t)||(r=Ci(t)).type!==e)throw Vi("Incompatible receiver, "+e+" required");return r}}},es=vt,ts=it,rs=bt,ns=po,as=_i,os=function(){},is=[],ss=er("Reflect","construct"),ls=/^\s*(?:class|function)\b/,cs=es(ls.exec),ps=!ls.exec(os),ds=function(e){if(!rs(e))return!1;try{return ss(os,is,e),!0}catch(e){return!1}},us=function(e){if(!rs(e))return!1;switch(ns(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ps||!!cs(ls,as(e))}catch(e){return!0}};us.sham=!0;var hs=!ss||ts((function(){var e;return ds(ds.call)||!ds(Object)||!ds((function(){e=!0}))||e}))?us:ds,fs=ot,ms=eo,ys=hs,gs=Kt,vs=on("species"),bs=fs.Array,xs=function(e,t){return new(function(e){var t;return ms(e)&&(t=e.constructor,(ys(t)&&(t===bs||ms(t.prototype))||gs(t)&&null===(t=t[vs]))&&(t=void 0)),void 0===t?bs:t}(e))(0===t?0:t)},ws=Hn,$s=Bt,ks=qr,Ss=Ia,As=xs,Es=vt([].push),Os=function(e){var t=1==e,r=2==e,n=3==e,a=4==e,o=6==e,i=7==e,s=5==e||o;return function(l,c,p,d){for(var u,h,f=ks(l),m=$s(f),y=ws(c,p),g=Ss(m),v=0,b=d||As,x=t?b(l,g):r||i?b(l,0):void 0;g>v;v++)if((s||v in m)&&(h=y(u=m[v],v,f),e))if(t)x[v]=h;else if(h)switch(e){case 3:return!0;case 5:return u;case 6:return v;case 2:Es(x,u)}else switch(e){case 4:return!1;case 7:Es(x,u)}return o?-1:n||a?a:x}},Ts={forEach:Os(0),map:Os(1),filter:Os(2),some:Os(3),every:Os(4),find:Os(5),findIndex:Os(6),filterReject:Os(7)},Cs=xa,js=ot,_s=er,Is=ut,Ps=St,Rs=vt,Ls=wt,Ds=ur,Fs=it,Ns=Mr,zs=eo,qs=bt,Bs=Kt,Us=tr,Ms=br,Hs=Zn,Ws=qr,Vs=Vt,Gs=yn,Ks=fo,Js=_t,Ys=zo,Zs=Ka,Qs=qo,Xs=Mo,el=oi,tl=xt,rl=Wn,nl=mo,al=At,ol=ii,il=li,sl=Ir.exports,ll=Na,cl=Kr,pl=on,dl=ci,ul=mi,hl=Si,fl=Xi,ml=Ts.forEach,yl=Oo("hidden"),gl="Symbol",vl=pl("toPrimitive"),bl=fl.set,xl=fl.getterFor(gl),wl=Object.prototype,$l=js.Symbol,kl=$l&&$l.prototype,Sl=js.TypeError,Al=js.QObject,El=_s("JSON","stringify"),Ol=tl.f,Tl=rl.f,Cl=Xs.f,jl=al.f,_l=Rs([].push),Il=sl("symbols"),Pl=sl("op-symbols"),Rl=sl("string-to-symbol-registry"),Ll=sl("symbol-to-string-registry"),Dl=sl("wks"),Fl=!Al||!Al.prototype||!Al.prototype.findChild,Nl=Ls&&Fs((function(){return 7!=Ys(Tl({},"a",{get:function(){return Tl(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Ol(wl,t);n&&delete wl[t],Tl(e,t,r),n&&e!==wl&&Tl(wl,t,n)}:Tl,zl=function(e,t){var r=Il[e]=Ys(kl);return bl(r,{type:gl,tag:e,description:t}),Ls||(r.description=t),r},ql=function(e,t,r){e===wl&&ql(Pl,t,r),Hs(e);var n=Gs(t);return Hs(r),Ns(Il,n)?(r.enumerable?(Ns(e,yl)&&e[yl][n]&&(e[yl][n]=!1),r=Ys(r,{enumerable:Js(0,!1)})):(Ns(e,yl)||Tl(e,yl,Js(1,{})),e[yl][n]=!0),Nl(e,n,r)):Tl(e,n,r)},Bl=function(e,t){Hs(e);var r=Vs(t),n=Zs(r).concat(Wl(r));return ml(n,(function(t){Ls&&!Ps(Ul,r,t)||ql(e,t,r[t])})),e},Ul=function(e){var t=Gs(e),r=Ps(jl,this,t);return!(this===wl&&Ns(Il,t)&&!Ns(Pl,t))&&(!(r||!Ns(this,t)||!Ns(Il,t)||Ns(this,yl)&&this[yl][t])||r)},Ml=function(e,t){var r=Vs(e),n=Gs(t);if(r!==wl||!Ns(Il,n)||Ns(Pl,n)){var a=Ol(r,n);return!a||!Ns(Il,n)||Ns(r,yl)&&r[yl][n]||(a.enumerable=!0),a}},Hl=function(e){var t=Cl(Vs(e)),r=[];return ml(t,(function(e){Ns(Il,e)||Ns(ll,e)||_l(r,e)})),r},Wl=function(e){var t=e===wl,r=Cl(t?Pl:Vs(e)),n=[];return ml(r,(function(e){!Ns(Il,e)||t&&!Ns(wl,e)||_l(n,Il[e])})),n};if(Ds||(il(kl=($l=function(){if(Us(kl,this))throw Sl("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?Ks(arguments[0]):void 0,t=cl(e),r=function(e){this===wl&&Ps(r,Pl,e),Ns(this,yl)&&Ns(this[yl],t)&&(this[yl][t]=!1),Nl(this,t,Js(1,e))};return Ls&&Fl&&Nl(wl,t,{configurable:!0,set:r}),zl(t,e)}).prototype,"toString",(function(){return xl(this).tag})),il($l,"withoutSetter",(function(e){return zl(cl(e),e)})),al.f=Ul,rl.f=ql,nl.f=Bl,tl.f=Ml,Qs.f=Xs.f=Hl,el.f=Wl,dl.f=function(e){return zl(pl(e),e)},Ls&&Tl(kl,"description",{configurable:!0,get:function(){return xl(this).description}})),Cs({global:!0,wrap:!0,forced:!Ds,sham:!Ds},{Symbol:$l}),ml(Zs(Dl),(function(e){ul(e)})),Cs({target:gl,stat:!0,forced:!Ds},{for:function(e){var t=Ks(e);if(Ns(Rl,t))return Rl[t];var r=$l(t);return Rl[t]=r,Ll[r]=t,r},keyFor:function(e){if(!Ms(e))throw Sl(e+" is not a symbol");if(Ns(Ll,e))return Ll[e]},useSetter:function(){Fl=!0},useSimple:function(){Fl=!1}}),Cs({target:"Object",stat:!0,forced:!Ds,sham:!Ls},{create:function(e,t){return void 0===t?Ys(e):Bl(Ys(e),t)},defineProperty:ql,defineProperties:Bl,getOwnPropertyDescriptor:Ml}),Cs({target:"Object",stat:!0,forced:!Ds},{getOwnPropertyNames:Hl,getOwnPropertySymbols:Wl}),Cs({target:"Object",stat:!0,forced:Fs((function(){el.f(1)}))},{getOwnPropertySymbols:function(e){return el.f(Ws(e))}}),El&&Cs({target:"JSON",stat:!0,forced:!Ds||Fs((function(){var e=$l();return"[null]"!=El([e])||"{}"!=El({a:e})||"{}"!=El(Object(e))}))},{stringify:function(e,t,r){var n=ol(arguments),a=t;if((Bs(t)||void 0!==e)&&!Ms(e))return zs(t)||(t=function(e,t){if(qs(a)&&(t=Ps(a,this,e,t)),!Ms(t))return t}),n[1]=t,Is(El,null,n)}}),!kl[vl]){var Vl=kl.valueOf;il(kl,vl,(function(e){return Ps(Vl,this)}))}hl($l,gl),ll[yl]=!0;var Gl=Jt.Object.getOwnPropertySymbols,Kl=it,Jl=cr,Yl=on("species"),Zl=function(e){return Jl>=51||!Kl((function(){var t=[];return(t.constructor={})[Yl]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Ql=Ts.filter;xa({target:"Array",proto:!0,forced:!Zl("filter")},{filter:function(e){return Ql(this,e,arguments.length>1?arguments[1]:void 0)}});var Xl=Jt,ec=function(e){return Xl[e+"Prototype"]},tc=ec("Array").filter,rc=tr,nc=tc,ac=Array.prototype,oc=function(e){var t=e.filter;return e===ac||rc(ac,e)&&t===ac.filter?nc:t},ic=oc,sc={exports:{}},lc=xa,cc=it,pc=Vt,dc=xt.f,uc=wt,hc=cc((function(){dc(1)}));lc({target:"Object",stat:!0,forced:!uc||hc,sham:!uc},{getOwnPropertyDescriptor:function(e,t){return dc(pc(e),t)}});var fc=Jt.Object,mc=sc.exports=function(e,t){return fc.getOwnPropertyDescriptor(e,t)};fc.getOwnPropertyDescriptor.sham&&(mc.sham=!0);var yc,gc,vc,bc=sc.exports,xc={},wc=wt,$c=Mr,kc=Function.prototype,Sc=wc&&Object.getOwnPropertyDescriptor,Ac=$c(kc,"name"),Ec={EXISTS:Ac,PROPER:Ac&&"something"===function(){}.name,CONFIGURABLE:Ac&&(!wc||wc&&Sc(kc,"name").configurable)},Oc=!it((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),Tc=ot,Cc=Mr,jc=bt,_c=qr,Ic=Oc,Pc=Oo("IE_PROTO"),Rc=Tc.Object,Lc=Rc.prototype,Dc=Ic?Rc.getPrototypeOf:function(e){var t=_c(e);if(Cc(t,Pc))return t[Pc];var r=t.constructor;return jc(r)&&t instanceof r?r.prototype:t instanceof Rc?Lc:null},Fc=it,Nc=bt,zc=zo,qc=Dc,Bc=li,Uc=on("iterator"),Mc=!1;[].keys&&("next"in(vc=[].keys())?(gc=qc(qc(vc)))!==Object.prototype&&(yc=gc):Mc=!0);var Hc=null==yc||Fc((function(){var e={};return yc[Uc].call(e)!==e}));Nc((yc=Hc?{}:zc(yc))[Uc])||Bc(yc,Uc,(function(){return this}));var Wc={IteratorPrototype:yc,BUGGY_SAFARI_ITERATORS:Mc},Vc=Wc.IteratorPrototype,Gc=zo,Kc=_t,Jc=Si,Yc=xc,Zc=function(){return this},Qc=function(e,t,r,n){var a=t+" Iterator";return e.prototype=Gc(Vc,{next:Kc(+!n,r)}),Jc(e,a,!1,!0),Yc[a]=Zc,e},Xc=ot,ep=bt,tp=Xc.String,rp=Xc.TypeError,np=vt,ap=Zn,op=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=np(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return ap(r),function(e){if("object"==typeof e||ep(e))return e;throw rp("Can't set "+tp(e)+" as a prototype")}(n),t?e(r,n):r.__proto__=n,r}}():void 0),ip=xa,sp=St,lp=Qc,cp=Dc,pp=Si,dp=li,up=xc,hp=Ec.PROPER,fp=Wc.BUGGY_SAFARI_ITERATORS,mp=on("iterator"),yp="keys",gp="values",vp="entries",bp=function(){return this},xp=function(e,t,r,n,a,o,i){lp(r,t,n);var s,l,c,p=function(e){if(e===a&&m)return m;if(!fp&&e in h)return h[e];switch(e){case yp:case gp:case vp:return function(){return new r(this,e)}}return function(){return new r(this)}},d=t+" Iterator",u=!1,h=e.prototype,f=h[mp]||h["@@iterator"]||a&&h[a],m=!fp&&f||p(a),y="Array"==t&&h.entries||f;if(y&&(s=cp(y.call(new e)))!==Object.prototype&&s.next&&(pp(s,d,!0,!0),up[d]=bp),hp&&a==gp&&f&&f.name!==gp&&(u=!0,m=function(){return sp(f,this)}),a)if(l={values:p(gp),keys:o?m:p(yp),entries:p(vp)},i)for(c in l)(fp||u||!(c in h))&&dp(h,c,l[c]);else ip({target:t,proto:!0,forced:fp||u},l);return i&&h[mp]!==m&&dp(h,mp,m,{name:a}),up[t]=m,l},wp=Vt,$p=xc,kp=Xi;Wn.f;var Sp=xp,Ap="Array Iterator",Ep=kp.set,Op=kp.getterFor(Ap);Sp(Array,"Array",(function(e,t){Ep(this,{type:Ap,target:wp(e),index:0,kind:t})}),(function(){var e=Op(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),$p.Arguments=$p.Array;var Tp=ot,Cp=po,jp=la,_p=xc,Ip=on("toStringTag");for(var Pp in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Rp=Tp[Pp],Lp=Rp&&Rp.prototype;Lp&&Cp(Lp)!==Ip&&jp(Lp,Ip,Pp),_p[Pp]=_p.Array}var Dp=it,Fp=function(e,t){var r=[][e];return!!r&&Dp((function(){r.call(null,t||function(){return 1},1)}))},Np=Ts.forEach,zp=Fp("forEach")?[].forEach:function(e){return Np(this,e,arguments.length>1?arguments[1]:void 0)};xa({target:"Array",proto:!0,forced:[].forEach!=zp},{forEach:zp});var qp=ec("Array").forEach,Bp=po,Up=Mr,Mp=tr,Hp=qp,Wp=Array.prototype,Vp={DOMTokenList:!0,NodeList:!0},Gp=function(e){var t=e.forEach;return e===Wp||Mp(Wp,e)&&t===Wp.forEach||Up(Vp,Bp(e))?Hp:t},Kp=er,Jp=qo,Yp=oi,Zp=Zn,Qp=vt([].concat),Xp=Kp("Reflect","ownKeys")||function(e){var t=Jp.f(Zp(e)),r=Yp.f;return r?Qp(t,r(e)):t},ed=Xp,td=Vt,rd=xt,nd=Go;xa({target:"Object",stat:!0,sham:!wt},{getOwnPropertyDescriptors:function(e){for(var t,r,n=td(e),a=rd.f,o=ed(n),i={},s=0;o.length>s;)void 0!==(r=a(n,t=o[s++]))&&nd(i,t,r);return i}});var ad=Jt.Object.getOwnPropertyDescriptors,od={exports:{}},id=xa,sd=wt,ld=mo.f;id({target:"Object",stat:!0,forced:Object.defineProperties!==ld,sham:!sd},{defineProperties:ld});var cd=Jt.Object,pd=od.exports=function(e,t){return cd.defineProperties(e,t)};cd.defineProperties.sham&&(pd.sham=!0);var dd=od.exports,ud={exports:{}},hd=xa,fd=wt,md=Wn.f;hd({target:"Object",stat:!0,forced:Object.defineProperty!==md,sham:!fd},{defineProperty:md});var yd=Jt.Object,gd=ud.exports=function(e,t,r){return yd.defineProperty(e,t,r)};yd.defineProperty.sham&&(gd.sham=!0);var vd=ud.exports;function bd(e,t,r){return t in e?vd(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xd(e,t){var r=Qa(e);if(Gl){var n=Gl(e);t&&(n=ic(n).call(n,(function(t){return bc(e,t).enumerable}))),r.push.apply(r,n)}return r}function wd(e){for(var t=1;t<arguments.length;t++){var r,n,a=null!=arguments[t]?arguments[t]:{};t%2?Gp(r=xd(Object(a),!0)).call(r,(function(t){bd(e,t,a[t])})):ad?dd(e,ad(a)):Gp(n=xd(Object(a))).call(n,(function(t){vd(e,t,bc(a,t))}))}return e}var $d=wt,kd=vt,Sd=St,Ad=it,Ed=Ka,Od=oi,Td=At,Cd=qr,jd=Bt,_d=Object.assign,Id=Object.defineProperty,Pd=kd([].concat),Rd=!_d||Ad((function(){if($d&&1!==_d({b:1},_d(Id({},"a",{enumerable:!0,get:function(){Id(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=_d({},e)[r]||Ed(_d({},t)).join("")!=n}))?function(e,t){for(var r=Cd(e),n=arguments.length,a=1,o=Od.f,i=Td.f;n>a;)for(var s,l=jd(arguments[a++]),c=o?Pd(Ed(l),o(l)):Ed(l),p=c.length,d=0;p>d;)s=c[d++],$d&&!Sd(i,l,s)||(r[s]=l[s]);return r}:_d;xa({target:"Object",stat:!0,forced:Object.assign!==Rd},{assign:Rd});var Ld=Jt.Object.assign,Dd=Kt,Fd=Lt,Nd=on("match"),zd=ot.TypeError,qd=function(e){if(function(e){var t;return Dd(e)&&(void 0!==(t=e[Nd])?!!t:"RegExp"==Fd(e))}(e))throw zd("The method doesn't accept regular expressions");return e},Bd=on("match"),Ud=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[Bd]=!1,"/./"[e](t)}catch(e){}}return!1},Md=xa,Hd=vt,Wd=ja,Vd=fo,Gd=qd,Kd=Mt,Jd=Ud,Yd=Hd("".startsWith),Zd=Hd("".slice),Qd=Math.min;Md({target:"String",proto:!0,forced:!Jd("startsWith")},{startsWith:function(e){var t=Vd(Kd(this));Gd(e);var r=Wd(Qd(arguments.length>1?arguments[1]:void 0,t.length)),n=Vd(e);return Yd?Yd(t,n,r):Zd(t,r,r+n.length)===n}});var Xd=ec("String").startsWith,eu=tr,tu=Xd,ru=String.prototype,nu=function(e){var t=e.startsWith;return"string"==typeof e||e===ru||eu(ru,e)&&t===ru.startsWith?tu:t},au={},ou={exports:{}};!function(e,t){!function(n){var a=t&&!t.nodeType&&t,o=e&&!e.nodeType&&e,i="object"==typeof r.g&&r.g;i.global!==i&&i.window!==i&&i.self!==i||(n=i);var s,l,c=2147483647,p=36,d=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,y=String.fromCharCode;function g(e){throw RangeError(f[e])}function v(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function b(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+v((e=e.replace(h,".")).split("."),t).join(".")}function x(e){for(var t,r,n=[],a=0,o=e.length;a<o;)(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<o?56320==(64512&(r=e.charCodeAt(a++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),a--):n.push(t);return n}function w(e){return v(e,(function(e){var t="";return e>65535&&(t+=y((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+y(e)})).join("")}function $(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,r){var n=0;for(e=r?m(e/700):e>>1,e+=m(e/t);e>455;n+=p)e=m(e/35);return m(n+36*e/(e+38))}function S(e){var t,r,n,a,o,i,s,l,d,u,h,f=[],y=e.length,v=0,b=128,x=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&g("not-basic"),f.push(e.charCodeAt(n));for(a=r>0?r+1:0;a<y;){for(o=v,i=1,s=p;a>=y&&g("invalid-input"),((l=(h=e.charCodeAt(a++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:p)>=p||l>m((c-v)/i))&&g("overflow"),v+=l*i,!(l<(d=s<=x?1:s>=x+26?26:s-x));s+=p)i>m(c/(u=p-d))&&g("overflow"),i*=u;x=k(v-o,t=f.length+1,0==o),m(v/t)>c-b&&g("overflow"),b+=m(v/t),v%=t,f.splice(v++,0,b)}return w(f)}function A(e){var t,r,n,a,o,i,s,l,d,u,h,f,v,b,w,S=[];for(f=(e=x(e)).length,t=128,r=0,o=72,i=0;i<f;++i)(h=e[i])<128&&S.push(y(h));for(n=a=S.length,a&&S.push("-");n<f;){for(s=c,i=0;i<f;++i)(h=e[i])>=t&&h<s&&(s=h);for(s-t>m((c-r)/(v=n+1))&&g("overflow"),r+=(s-t)*v,t=s,i=0;i<f;++i)if((h=e[i])<t&&++r>c&&g("overflow"),h==t){for(l=r,d=p;!(l<(u=d<=o?1:d>=o+26?26:d-o));d+=p)w=l-u,b=p-u,S.push(y($(u+w%b,0))),l=m(w/b);S.push(y($(l,0))),o=k(r,v,n==a),r=0,++n}++r,++t}return S.join("")}if(s={version:"1.3.2",ucs2:{decode:x,encode:w},decode:S,encode:A,toASCII:function(e){return b(e,(function(e){return u.test(e)?"xn--"+A(e):e}))},toUnicode:function(e){return b(e,(function(e){return d.test(e)?S(e.slice(4).toLowerCase()):e}))}},a&&o)if(e.exports==a)o.exports=s;else for(l in s)s.hasOwnProperty(l)&&(a[l]=s[l]);else n.punycode=s}(this)}(ou,ou.exports);var iu={};function su(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var lu=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};iu.decode=iu.parse=function(e,t,r,n){t=t||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var o=/\+/g;e=e.split(t);var i=1e3;n&&"number"==typeof n.maxKeys&&(i=n.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var l=0;l<s;++l){var c,p,d,u,h=e[l].replace(o,"%20"),f=h.indexOf(r);f>=0?(c=h.substr(0,f),p=h.substr(f+1)):(c=h,p=""),d=decodeURIComponent(c),u=decodeURIComponent(p),su(a,d)?Array.isArray(a[d])?a[d].push(u):a[d]=[a[d],u]:a[d]=u}return a},iu.encode=iu.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(n){var a=encodeURIComponent(lu(n))+r;return Array.isArray(e[n])?e[n].map((function(e){return a+encodeURIComponent(lu(e))})).join(t):a+encodeURIComponent(lu(e[n]))})).join(t):n?encodeURIComponent(lu(n))+r+encodeURIComponent(lu(e)):""};var cu=ou.exports,pu=function(e){return"string"==typeof e},du=function(e){return"object"==typeof e&&null!==e},uu=function(e){return null===e},hu=function(e){return null==e};function fu(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}au.parse=Tu,au.resolve=function(e,t){return Tu(e,!1,!0).resolve(t)},au.resolveObject=function(e,t){return e?Tu(e,!1,!0).resolveObject(t):t},au.format=function(e){return pu(e)&&(e=Tu(e)),e instanceof fu?e.format():fu.prototype.format.call(e)},au.Url=fu;var mu=/^([a-z0-9.+-]+:)/i,yu=/:[0-9]*$/,gu=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,vu=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),bu=["'"].concat(vu),xu=["%","/","?",";","#"].concat(bu),wu=["/","?","#"],$u=/^[+a-z0-9A-Z_-]{0,63}$/,ku=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Su={javascript:!0,"javascript:":!0},Au={javascript:!0,"javascript:":!0},Eu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Ou=iu;function Tu(e,t,r){if(e&&du(e)&&e instanceof fu)return e;var n=new fu;return n.parse(e,t,r),n}fu.prototype.parse=function(e,t,r){if(!pu(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),a=-1!==n&&n<e.indexOf("#")?"?":"#",o=e.split(a);o[0]=o[0].replace(/\\/g,"/");var i=e=o.join(a);if(i=i.trim(),!r&&1===e.split("#").length){var s=gu.exec(i);if(s)return this.path=i,this.href=i,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?Ou.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=mu.exec(i);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,i=i.substr(l.length)}if(r||l||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===i.substr(0,2);!p||l&&Au[l]||(i=i.substr(2),this.slashes=!0)}if(!Au[l]&&(p||l&&!Eu[l])){for(var d,u,h=-1,f=0;f<wu.length;f++)-1!==(m=i.indexOf(wu[f]))&&(-1===h||m<h)&&(h=m);for(-1!==(u=-1===h?i.lastIndexOf("@"):i.lastIndexOf("@",h))&&(d=i.slice(0,u),i=i.slice(u+1),this.auth=decodeURIComponent(d)),h=-1,f=0;f<xu.length;f++){var m;-1!==(m=i.indexOf(xu[f]))&&(-1===h||m<h)&&(h=m)}-1===h&&(h=i.length),this.host=i.slice(0,h),i=i.slice(h),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var g=this.hostname.split(/\./),v=(f=0,g.length);f<v;f++){var b=g[f];if(b&&!b.match($u)){for(var x="",w=0,$=b.length;w<$;w++)b.charCodeAt(w)>127?x+="x":x+=b[w];if(!x.match($u)){var k=g.slice(0,f),S=g.slice(f+1),A=b.match(ku);A&&(k.push(A[1]),S.unshift(A[2])),S.length&&(i="/"+S.join(".")+i),this.hostname=k.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=cu.toASCII(this.hostname));var E=this.port?":"+this.port:"",O=this.hostname||"";this.host=O+E,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!Su[c])for(f=0,v=bu.length;f<v;f++){var T=bu[f];if(-1!==i.indexOf(T)){var C=encodeURIComponent(T);C===T&&(C=escape(T)),i=i.split(T).join(C)}}var j=i.indexOf("#");-1!==j&&(this.hash=i.substr(j),i=i.slice(0,j));var _=i.indexOf("?");if(-1!==_?(this.search=i.substr(_),this.query=i.substr(_+1),t&&(this.query=Ou.parse(this.query)),i=i.slice(0,_)):t&&(this.search="",this.query={}),i&&(this.pathname=i),Eu[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){E=this.pathname||"";var I=this.search||"";this.path=E+I}return this.href=this.format(),this},fu.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",a=!1,o="";this.host?a=e+this.host:this.hostname&&(a=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&du(this.query)&&Object.keys(this.query).length&&(o=Ou.stringify(this.query));var i=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||Eu[t])&&!1!==a?(a="//"+(a||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):a||(a=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),t+a+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+n},fu.prototype.resolve=function(e){return this.resolveObject(Tu(e,!1,!0)).format()},fu.prototype.resolveObject=function(e){if(pu(e)){var t=new fu;t.parse(e,!1,!0),e=t}for(var r=new fu,n=Object.keys(this),a=0;a<n.length;a++){var o=n[a];r[o]=this[o]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),s=0;s<i.length;s++){var l=i[s];"protocol"!==l&&(r[l]=e[l])}return Eu[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!Eu[e.protocol]){for(var c=Object.keys(e),p=0;p<c.length;p++){var d=c[p];r[d]=e[d]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||Au[e.protocol])r.pathname=e.pathname;else{for(var u=(e.pathname||"").split("/");u.length&&!(e.host=u.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==u[0]&&u.unshift(""),u.length<2&&u.unshift(""),r.pathname=u.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var h=r.pathname||"",f=r.search||"";r.path=h+f}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),g=y||m||r.host&&e.pathname,v=g,b=r.pathname&&r.pathname.split("/")||[],x=(u=e.pathname&&e.pathname.split("/")||[],r.protocol&&!Eu[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===u[0]?u[0]=e.host:u.unshift(e.host)),e.host=null),g=g&&(""===u[0]||""===b[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,b=u;else if(u.length)b||(b=[]),b.pop(),b=b.concat(u),r.search=e.search,r.query=e.query;else if(!hu(e.search))return x&&(r.hostname=r.host=b.shift(),(A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift())),r.search=e.search,r.query=e.query,uu(r.pathname)&&uu(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var w=b.slice(-1)[0],$=(r.host||e.host||b.length>1)&&("."===w||".."===w)||""===w,k=0,S=b.length;S>=0;S--)"."===(w=b[S])?b.splice(S,1):".."===w?(b.splice(S,1),k++):k&&(b.splice(S,1),k--);if(!g&&!v)for(;k--;k)b.unshift("..");!g||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),$&&"/"!==b.join("/").substr(-1)&&b.push("");var A,E=""===b[0]||b[0]&&"/"===b[0].charAt(0);return x&&(r.hostname=r.host=E?"":b.length?b.shift():"",(A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift())),(g=g||r.host&&b.length)&&!E&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),uu(r.pathname)&&uu(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},fu.prototype.parseHost=function(){var e=this.host,t=yu.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Cu=xa,ju=ot,_u=it,Iu=eo,Pu=Kt,Ru=qr,Lu=Ia,Du=Go,Fu=xs,Nu=Zl,zu=cr,qu=on("isConcatSpreadable"),Bu=9007199254740991,Uu="Maximum allowed index exceeded",Mu=ju.TypeError,Hu=zu>=51||!_u((function(){var e=[];return e[qu]=!1,e.concat()[0]!==e})),Wu=Nu("concat"),Vu=function(e){if(!Pu(e))return!1;var t=e[qu];return void 0!==t?!!t:Iu(e)};Cu({target:"Array",proto:!0,forced:!Hu||!Wu},{concat:function(e){var t,r,n,a,o,i=Ru(this),s=Fu(i,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(Vu(o=-1===t?i:arguments[t])){if(l+(a=Lu(o))>Bu)throw Mu(Uu);for(r=0;r<a;r++,l++)r in o&&Du(s,l,o[r])}else{if(l>=Bu)throw Mu(Uu);Du(s,l++,o)}return s.length=l,s}}),mi("asyncIterator"),mi("hasInstance"),mi("isConcatSpreadable"),mi("iterator"),mi("match"),mi("matchAll"),mi("replace"),mi("search"),mi("species"),mi("split"),mi("toPrimitive"),mi("toStringTag"),mi("unscopables"),Si(ot.JSON,"JSON",!0);var Gu=Jt.Symbol;mi("asyncDispose"),mi("dispose"),mi("matcher"),mi("metadata"),mi("observable"),mi("patternMatch"),mi("replaceAll");var Ku=Gu,Ju=vt,Yu=ka,Zu=fo,Qu=Mt,Xu=Ju("".charAt),eh=Ju("".charCodeAt),th=Ju("".slice),rh=function(e){return function(t,r){var n,a,o=Zu(Qu(t)),i=Yu(r),s=o.length;return i<0||i>=s?e?"":void 0:(n=eh(o,i))<55296||n>56319||i+1===s||(a=eh(o,i+1))<56320||a>57343?e?Xu(o,i):n:e?th(o,i,i+2):a-56320+(n-55296<<10)+65536}},nh=(rh(!1),rh(!0)),ah=fo,oh=Xi,ih=xp,sh="String Iterator",lh=oh.set,ch=oh.getterFor(sh);ih(String,"String",(function(e){lh(this,{type:sh,string:ah(e),index:0})}),(function(){var e,t=ch(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=nh(r,n),t.index+=e.length,{value:e,done:!1})}));var ph=po,dh=Or,uh=xc,hh=on("iterator"),fh=function(e){if(null!=e)return dh(e,hh)||dh(e,"@@iterator")||uh[ph(e)]},mh=fh;xa({target:"Array",stat:!0},{isArray:eo});var yh=Jt.Array.isArray,gh=xa,vh=ot,bh=eo,xh=hs,wh=Kt,$h=Oa,kh=Ia,Sh=Vt,Ah=Go,Eh=on,Oh=ii,Th=Zl("slice"),Ch=Eh("species"),jh=vh.Array,_h=Math.max;gh({target:"Array",proto:!0,forced:!Th},{slice:function(e,t){var r,n,a,o=Sh(this),i=kh(o),s=$h(e,i),l=$h(void 0===t?i:t,i);if(bh(o)&&(r=o.constructor,(xh(r)&&(r===jh||bh(r.prototype))||wh(r)&&null===(r=r[Ch]))&&(r=void 0),r===jh||void 0===r))return Oh(o,s,l);for(n=new(void 0===r?jh:r)(_h(l-s,0)),a=0;s<l;s++,a++)s in o&&Ah(n,a,o[s]);return n.length=a,n}});var Ih=ec("Array").slice,Ph=tr,Rh=Ih,Lh=Array.prototype,Dh=function(e){var t=e.slice;return e===Lh||Ph(Lh,e)&&t===Lh.slice?Rh:t},Fh=Dh,Nh=St,zh=Zn,qh=Or,Bh=function(e,t,r){var n,a;zh(e);try{if(!(n=qh(e,"return"))){if("throw"===t)throw r;return r}n=Nh(n,e)}catch(e){a=!0,n=e}if("throw"===t)throw r;if(a)throw n;return zh(n),r},Uh=Zn,Mh=Bh,Hh=xc,Wh=on("iterator"),Vh=Array.prototype,Gh=function(e){return void 0!==e&&(Hh.Array===e||Vh[Wh]===e)},Kh=St,Jh=Ar,Yh=Zn,Zh=wr,Qh=fh,Xh=ot.TypeError,ef=function(e,t){var r=arguments.length<2?Qh(e):t;if(Jh(r))return Yh(Kh(r,e));throw Xh(Zh(e)+" is not iterable")},tf=Hn,rf=St,nf=qr,af=function(e,t,r,n){try{return n?t(Uh(r)[0],r[1]):t(r)}catch(t){Mh(e,"throw",t)}},of=Gh,sf=hs,lf=Ia,cf=Go,pf=ef,df=fh,uf=ot.Array,hf=on("iterator"),ff=!1;try{var mf=0,yf={next:function(){return{done:!!mf++}},return:function(){ff=!0}};yf[hf]=function(){return this},Array.from(yf,(function(){throw 2}))}catch(e){}var gf=function(e,t){if(!t&&!ff)return!1;var r=!1;try{var n={};n[hf]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r};xa({target:"Array",stat:!0,forced:!gf((function(e){Array.from(e)}))},{from:function(e){var t=nf(e),r=sf(this),n=arguments.length,a=n>1?arguments[1]:void 0,o=void 0!==a;o&&(a=tf(a,n>2?arguments[2]:void 0));var i,s,l,c,p,d,u=df(t),h=0;if(!u||this==uf&&of(u))for(i=lf(t),s=r?new this(i):uf(i);i>h;h++)d=o?a(t[h],h):t[h],cf(s,h,d);else for(p=(c=pf(t,u)).next,s=r?new this:[];!(l=rf(p,c)).done;h++)d=o?af(c,a,[l.value,h],!0):l.value,cf(s,h,d);return s.length=h,s}});var vf=Jt.Array.from,bf=vf;function xf(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function wf(e,t){var r;if(e){if("string"==typeof e)return xf(e,t);var n=Fh(r=Object.prototype.toString.call(e)).call(r,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?bf(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xf(e,t):void 0}}function $f(e,t){var r=void 0!==Ku&&mh(e)||e["@@iterator"];if(!r){if(yh(e)||(r=wf(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}var kf=ci.f("iterator");function Sf(e){return(Sf="function"==typeof Ku&&"symbol"==typeof kf?function(e){return typeof e}:function(e){return e&&"function"==typeof Ku&&e.constructor===Ku&&e!==Ku.prototype?"symbol":typeof e})(e)}function Af(e,t){return function(e){if(yh(e))return e}(e)||function(e,t){var r=null==e?null:void 0!==Ku&&mh(e)||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||wf(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ef=Mr,Of=Xp,Tf=xt,Cf=Wn,jf=vt("".replace),_f=String(Error("zxcasd").stack),If=/\n\s*at [^:]*:[^\n]*/,Pf=If.test(_f),Rf=Kt,Lf=la,Df=Hn,Ff=St,Nf=Zn,zf=wr,qf=Gh,Bf=Ia,Uf=tr,Mf=ef,Hf=fh,Wf=Bh,Vf=ot.TypeError,Gf=function(e,t){this.stopped=e,this.result=t},Kf=Gf.prototype,Jf=function(e,t,r){var n,a,o,i,s,l,c,p=r&&r.that,d=!(!r||!r.AS_ENTRIES),u=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),f=Df(t,p),m=function(e){return n&&Wf(n,"normal",e),new Gf(!0,e)},y=function(e){return d?(Nf(e),h?f(e[0],e[1],m):f(e[0],e[1])):h?f(e,m):f(e)};if(u)n=e;else{if(!(a=Hf(e)))throw Vf(zf(e)+" is not iterable");if(qf(a)){for(o=0,i=Bf(e);i>o;o++)if((s=y(e[o]))&&Uf(Kf,s))return s;return new Gf(!1)}n=Mf(e,a)}for(l=n.next;!(c=Ff(l,n)).done;){try{s=y(c.value)}catch(e){Wf(n,"throw",e)}if("object"==typeof s&&s&&Uf(Kf,s))return s}return new Gf(!1)},Yf=fo,Zf=_t,Qf=!it((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",Zf(1,7)),7!==e.stack)})),Xf=xa,em=ot,tm=tr,rm=Dc,nm=op,am=zo,om=la,im=_t,sm=Jf,lm=Qf,cm=on("toStringTag"),pm=em.Error,dm=[].push,um=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,a=tm(hm,this);nm?r=nm(new pm,a?rm(this):hm):(r=a?this:am(hm),om(r,cm,"Error")),void 0!==t&&om(r,"message",function(e,t){return void 0===e?arguments.length<2?"":t:Yf(e)}(t)),lm&&om(r,"stack",function(e,t){if(Pf&&"string"==typeof e)for(;t--;)e=jf(e,If,"");return e}(r.stack,1)),function(e,t){Rf(t)&&"cause"in t&&Lf(e,"cause",t.cause)}(r,n);var o=[];return sm(e,dm,{that:o}),om(r,"errors",o),r};nm?nm(um,pm):function(e,t,r){for(var n=Of(t),a=Cf.f,o=Tf.f,i=0;i<n.length;i++){var s=n[i];Ef(e,s)||r&&Ef(r,s)||a(e,s,o(t,s))}}(um,pm,{name:!0});var hm=um.prototype=am(pm.prototype,{constructor:im(1,um),message:im(1,""),name:im(1,"AggregateError")});Xf({global:!0},{AggregateError:um});var fm,mm,ym,gm,vm=ot.Promise,bm=li,xm=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:bm(e,n,t[n],r);return e},wm=er,$m=Wn,km=wt,Sm=on("species"),Am=tr,Em=ot.TypeError,Om=function(e,t){if(Am(t,e))return e;throw Em("Incorrect invocation")},Tm=hs,Cm=wr,jm=ot.TypeError,_m=Zn,Im=on("species"),Pm=function(e,t){var r,n=_m(e).constructor;return void 0===n||null==(r=_m(n)[Im])?t:function(e){if(Tm(e))return e;throw jm(Cm(e)+" is not a constructor")}(r)},Rm=ot.TypeError,Lm=function(e,t){if(e<t)throw Rm("Not enough arguments");return e},Dm=/(?:ipad|iphone|ipod).*applewebkit/i.test(rr),Fm="process"==Lt(ot.process),Nm=ot,zm=ut,qm=Hn,Bm=bt,Um=Mr,Mm=it,Hm=ko,Wm=ii,Vm=xn,Gm=Lm,Km=Dm,Jm=Fm,Ym=Nm.setImmediate,Zm=Nm.clearImmediate,Qm=Nm.process,Xm=Nm.Dispatch,ey=Nm.Function,ty=Nm.MessageChannel,ry=Nm.String,ny=0,ay={};try{fm=Nm.location}catch(e){}var oy=function(e){if(Um(ay,e)){var t=ay[e];delete ay[e],t()}},iy=function(e){return function(){oy(e)}},sy=function(e){oy(e.data)},ly=function(e){Nm.postMessage(ry(e),fm.protocol+"//"+fm.host)};Ym&&Zm||(Ym=function(e){Gm(arguments.length,1);var t=Bm(e)?e:ey(e),r=Wm(arguments,1);return ay[++ny]=function(){zm(t,void 0,r)},mm(ny),ny},Zm=function(e){delete ay[e]},Jm?mm=function(e){Qm.nextTick(iy(e))}:Xm&&Xm.now?mm=function(e){Xm.now(iy(e))}:ty&&!Km?(gm=(ym=new ty).port2,ym.port1.onmessage=sy,mm=qm(gm.postMessage,gm)):Nm.addEventListener&&Bm(Nm.postMessage)&&!Nm.importScripts&&fm&&"file:"!==fm.protocol&&!Mm(ly)?(mm=ly,Nm.addEventListener("message",sy,!1)):mm="onreadystatechange"in Vm("script")?function(e){Hm.appendChild(Vm("script")).onreadystatechange=function(){Hm.removeChild(this),oy(e)}}:function(e){setTimeout(iy(e),0)});var cy,py,dy,uy,hy,fy,my,yy,gy={set:Ym,clear:Zm},vy=ot,by=/ipad|iphone|ipod/i.test(rr)&&void 0!==vy.Pebble,xy=/web0s(?!.*chrome)/i.test(rr),wy=ot,$y=Hn,ky=xt.f,Sy=gy.set,Ay=Dm,Ey=by,Oy=xy,Ty=Fm,Cy=wy.MutationObserver||wy.WebKitMutationObserver,jy=wy.document,_y=wy.process,Iy=wy.Promise,Py=ky(wy,"queueMicrotask"),Ry=Py&&Py.value;Ry||(cy=function(){var e,t;for(Ty&&(e=_y.domain)&&e.exit();py;){t=py.fn,py=py.next;try{t()}catch(e){throw py?uy():dy=void 0,e}}dy=void 0,e&&e.enter()},Ay||Ty||Oy||!Cy||!jy?!Ey&&Iy&&Iy.resolve?((my=Iy.resolve(void 0)).constructor=Iy,yy=$y(my.then,my),uy=function(){yy(cy)}):Ty?uy=function(){_y.nextTick(cy)}:(Sy=$y(Sy,wy),uy=function(){Sy(cy)}):(hy=!0,fy=jy.createTextNode(""),new Cy(cy).observe(fy,{characterData:!0}),uy=function(){fy.data=hy=!hy}));var Ly=Ry||function(e){var t={fn:e,next:void 0};dy&&(dy.next=t),py||(py=t,uy()),dy=t},Dy={},Fy=Ar,Ny=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=Fy(t),this.reject=Fy(r)};Dy.f=function(e){return new Ny(e)};var zy=Zn,qy=Kt,By=Dy,Uy=function(e,t){if(zy(e),qy(t)&&t.constructor===e)return t;var r=By.f(e);return(0,r.resolve)(t),r.promise},My=ot,Hy=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},Wy=function(){this.head=null,this.tail=null};Wy.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var Vy,Gy,Ky,Jy="object"==typeof window,Yy=xa,Zy=ot,Qy=er,Xy=St,eg=vm,tg=xm,rg=Si,ng=Ar,ag=bt,og=Kt,ig=Om,sg=_i,lg=Jf,cg=gf,pg=Pm,dg=gy.set,ug=Ly,hg=Uy,fg=Dy,mg=Hy,yg=Wy,gg=Xi,vg=qn,bg=Jy,xg=Fm,wg=cr,$g=on("species"),kg="Promise",Sg=gg.getterFor(kg),Ag=gg.set,Eg=gg.getterFor(kg),Og=eg&&eg.prototype,Tg=eg,Cg=Og,jg=Zy.TypeError,_g=Zy.document,Ig=Zy.process,Pg=fg.f,Rg=Pg,Lg=!!(_g&&_g.createEvent&&Zy.dispatchEvent),Dg=ag(Zy.PromiseRejectionEvent),Fg="unhandledrejection",Ng=vg(kg,(function(){var e=sg(Tg),t=e!==String(Tg);if(!t&&66===wg)return!0;if(!Cg.finally)return!0;if(wg>=51&&/native code/.test(e))return!1;var r=new Tg((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))};return(r.constructor={})[$g]=n,!(r.then((function(){}))instanceof n)||!t&&bg&&!Dg})),zg=Ng||!cg((function(e){Tg.all(e).catch((function(){}))})),qg=function(e){var t;return!(!og(e)||!ag(t=e.then))&&t},Bg=function(e,t){var r,n,a,o=t.value,i=1==t.state,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,p=e.domain;try{s?(i||(2===t.rejection&&Vg(t),t.rejection=1),!0===s?r=o:(p&&p.enter(),r=s(o),p&&(p.exit(),a=!0)),r===e.promise?c(jg("Promise-chain cycle")):(n=qg(r))?Xy(n,r,l,c):l(r)):c(o)}catch(e){p&&!a&&p.exit(),c(e)}},Ug=function(e,t){e.notified||(e.notified=!0,ug((function(){for(var r,n=e.reactions;r=n.get();)Bg(r,e);e.notified=!1,t&&!e.rejection&&Hg(e)})))},Mg=function(e,t,r){var n,a;Lg?((n=_g.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),Zy.dispatchEvent(n)):n={promise:t,reason:r},!Dg&&(a=Zy["on"+e])?a(n):e===Fg&&function(e,t){var r=My.console;r&&r.error&&(1==arguments.length?r.error(e):r.error(e,t))}("Unhandled promise rejection",r)},Hg=function(e){Xy(dg,Zy,(function(){var t,r=e.facade,n=e.value;if(Wg(e)&&(t=mg((function(){xg?Ig.emit("unhandledRejection",n,r):Mg(Fg,r,n)})),e.rejection=xg||Wg(e)?2:1,t.error))throw t.value}))},Wg=function(e){return 1!==e.rejection&&!e.parent},Vg=function(e){Xy(dg,Zy,(function(){var t=e.facade;xg?Ig.emit("rejectionHandled",t):Mg("rejectionhandled",t,e.value)}))},Gg=function(e,t,r){return function(n){e(t,n,r)}},Kg=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,Ug(e,!0))},Jg=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw jg("Promise can't be resolved itself");var n=qg(t);n?ug((function(){var r={done:!1};try{Xy(n,t,Gg(Jg,r,e),Gg(Kg,r,e))}catch(t){Kg(r,t,e)}})):(e.value=t,e.state=1,Ug(e,!1))}catch(t){Kg({done:!1},t,e)}}};Ng&&(Cg=(Tg=function(e){ig(this,Cg),ng(e),Xy(Vy,this);var t=Sg(this);try{e(Gg(Jg,t),Gg(Kg,t))}catch(e){Kg(t,e)}}).prototype,(Vy=function(e){Ag(this,{type:kg,done:!1,notified:!1,parent:!1,reactions:new yg,rejection:!1,state:0,value:void 0})}).prototype=tg(Cg,{then:function(e,t){var r=Eg(this),n=Pg(pg(this,Tg));return r.parent=!0,n.ok=!ag(e)||e,n.fail=ag(t)&&t,n.domain=xg?Ig.domain:void 0,0==r.state?r.reactions.add(n):ug((function(){Bg(n,r)})),n.promise},catch:function(e){return this.then(void 0,e)}}),Gy=function(){var e=new Vy,t=Sg(e);this.promise=e,this.resolve=Gg(Jg,t),this.reject=Gg(Kg,t)},fg.f=Pg=function(e){return e===Tg||e===Ky?new Gy(e):Rg(e)}),Yy({global:!0,wrap:!0,forced:Ng},{Promise:Tg}),rg(Tg,kg,!1,!0),function(e){var t=wm(e),r=$m.f;km&&t&&!t[Sm]&&r(t,Sm,{configurable:!0,get:function(){return this}})}(kg),Ky=Qy(kg),Yy({target:kg,stat:!0,forced:Ng},{reject:function(e){var t=Pg(this);return Xy(t.reject,void 0,e),t.promise}}),Yy({target:kg,stat:!0,forced:!0},{resolve:function(e){return hg(this===Ky?Tg:this,e)}}),Yy({target:kg,stat:!0,forced:zg},{all:function(e){var t=this,r=Pg(t),n=r.resolve,a=r.reject,o=mg((function(){var r=ng(t.resolve),o=[],i=0,s=1;lg(e,(function(e){var l=i++,c=!1;s++,Xy(r,t,e).then((function(e){c||(c=!0,o[l]=e,--s||n(o))}),a)})),--s||n(o)}));return o.error&&a(o.value),r.promise},race:function(e){var t=this,r=Pg(t),n=r.reject,a=mg((function(){var a=ng(t.resolve);lg(e,(function(e){Xy(a,t,e).then(r.resolve,n)}))}));return a.error&&n(a.value),r.promise}});var Yg=St,Zg=Ar,Qg=Dy,Xg=Hy,ev=Jf;xa({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=Qg.f(t),n=r.resolve,a=r.reject,o=Xg((function(){var r=Zg(t.resolve),a=[],o=0,i=1;ev(e,(function(e){var s=o++,l=!1;i++,Yg(r,t,e).then((function(e){l||(l=!0,a[s]={status:"fulfilled",value:e},--i||n(a))}),(function(e){l||(l=!0,a[s]={status:"rejected",reason:e},--i||n(a))}))})),--i||n(a)}));return o.error&&a(o.value),r.promise}});var tv=Ar,rv=er,nv=St,av=Dy,ov=Hy,iv=Jf,sv="No one promise resolved";xa({target:"Promise",stat:!0},{any:function(e){var t=this,r=rv("AggregateError"),n=av.f(t),a=n.resolve,o=n.reject,i=ov((function(){var n=tv(t.resolve),i=[],s=0,l=1,c=!1;iv(e,(function(e){var p=s++,d=!1;l++,nv(n,t,e).then((function(e){d||c||(c=!0,a(e))}),(function(e){d||c||(d=!0,i[p]=e,--l||o(new r(i,sv)))}))})),--l||o(new r(i,sv))}));return i.error&&o(i.value),n.promise}});var lv=vm,cv=er,pv=bt,dv=Pm,uv=Uy;xa({target:"Promise",proto:!0,real:!0,forced:!!lv&&it((function(){lv.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=dv(this,cv("Promise")),r=pv(e);return this.then(r?function(r){return uv(t,e()).then((function(){return r}))}:e,r?function(r){return uv(t,e()).then((function(){throw r}))}:e)}});var hv=Jt.Promise,fv=hv,mv=Dy,yv=Hy;xa({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=mv.f(this),r=yv(e);return(r.error?t.reject:t.resolve)(r.value),t.promise}});var gv=fv;function vv(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):gv.resolve(l).then(n,a)}function bv(e){return function(){var t=this,r=arguments;return new gv((function(n,a){var o=e.apply(t,r);function i(e){vv(o,n,a,i,s,"next",e)}function s(e){vv(o,n,a,i,s,"throw",e)}i(void 0)}))}}var xv={exports:{}};!function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=function(e,t,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=A(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=p(e,t,r);if("normal"===l.type){if(n=r.done?f:u,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",u="suspendedYield",h="executing",f="completed",m={};function y(){}function g(){}function v(){}var b={};l(b,o,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&n.call(w,o)&&(b=w);var $=v.prototype=y.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(a,o,i,s){var l=p(e[a],e,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function A(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=p(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return g.prototype=v,l($,"constructor",v),l(v,"constructor",g),g.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},k(S.prototype),l(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k($),l($,s,"Generator"),l($,o,(function(){return this})),l($,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}(xv);var wv=xv.exports,$v=Fa.includes;xa({target:"Array",proto:!0},{includes:function(e){return $v(this,e,arguments.length>1?arguments[1]:void 0)}});var kv=ec("Array").includes,Sv=xa,Av=qd,Ev=Mt,Ov=fo,Tv=Ud,Cv=vt("".indexOf);Sv({target:"String",proto:!0,forced:!Tv("includes")},{includes:function(e){return!!~Cv(Ov(Ev(this)),Ov(Av(e)),arguments.length>1?arguments[1]:void 0)}});var jv=ec("String").includes,_v=tr,Iv=kv,Pv=jv,Rv=Array.prototype,Lv=String.prototype,Dv=function(e){var t=e.includes;return e===Rv||_v(Rv,e)&&t===Rv.includes?Iv:"string"==typeof e||e===Lv||_v(Lv,e)&&t===Lv.includes?Pv:t},Fv=ec("Array").entries,Nv=po,zv=Mr,qv=tr,Bv=Fv,Uv=Array.prototype,Mv={DOMTokenList:!0,NodeList:!0},Hv=function(e){var t=e.entries;return e===Uv||qv(Uv,e)&&t===Uv.entries||zv(Mv,Nv(e))?Bv:t},Wv=vf,Vv=xa,Gv=er,Kv=ut,Jv=vt,Yv=it,Zv=ot.Array,Qv=Gv("JSON","stringify"),Xv=Jv(/./.exec),eb=Jv("".charAt),tb=Jv("".charCodeAt),rb=Jv("".replace),nb=Jv(1..toString),ab=/[\uD800-\uDFFF]/g,ob=/^[\uD800-\uDBFF]$/,ib=/^[\uDC00-\uDFFF]$/,sb=function(e,t,r){var n=eb(r,t-1),a=eb(r,t+1);return Xv(ob,e)&&!Xv(ib,a)||Xv(ib,e)&&!Xv(ob,n)?"\\u"+nb(tb(e,0),16):e},lb=Yv((function(){return'"\\udf06\\ud834"'!==Qv("\udf06\ud834")||'"\\udead"'!==Qv("\udead")}));Qv&&Vv({target:"JSON",stat:!0,forced:lb},{stringify:function(e,t,r){for(var n=0,a=arguments.length,o=Zv(a);n<a;n++)o[n]=arguments[n];var i=Kv(Qv,null,o);return"string"==typeof i?rb(i,ab,sb):i}});var cb=Jt,pb=ut;cb.JSON||(cb.JSON={stringify:JSON.stringify});var db=function(e,t,r){return pb(cb.JSON.stringify,null,arguments)},ub=Ts.map;xa({target:"Array",proto:!0,forced:!Zl("map")},{map:function(e){return ub(this,e,arguments.length>1?arguments[1]:void 0)}});var hb=ec("Array").map,fb=tr,mb=hb,yb=Array.prototype,gb=function(e){var t=e.map;return e===yb||fb(yb,e)&&t===yb.map?mb:t},vb=Za,bb=ec("Array").concat,xb=tr,wb=bb,$b=Array.prototype,kb=function(e){var t=e.concat;return e===$b||xb($b,e)&&t===$b.concat?wb:t},Sb=wt,Ab=vt,Eb=Ka,Ob=Vt,Tb=Ab(At.f),Cb=Ab([].push),jb=function(e){return function(t){for(var r,n=Ob(t),a=Eb(n),o=a.length,i=0,s=[];o>i;)r=a[i++],Sb&&!Tb(n,r)||Cb(s,e?[r,n[r]]:n[r]);return s}},_b=[jb(!0),jb(!1)][0];xa({target:"Object",stat:!0},{entries:function(e){return _b(e)}});var Ib=Jt.Object.entries,Pb=oc;!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,a="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i&&a&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=f(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=c(e),t=p(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[c(e)]},u.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},u.prototype.set=function(e,t){this.map[c(e)]=p(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),d(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),d(e)},n&&(u.prototype[Symbol.iterator]=u.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=function(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),a=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(a))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},g.call(b.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var $=[301,302,303,307,308];w.redirect=function(e,t){if(-1===$.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function k(e,r){return new Promise((function(n,o){var i=new b(e,r);if(i.signal&&i.signal.aborted)return o(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var a=r.join(":").trim();t.append(n,a)}})),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var a="response"in s?s.response:s.responseText;n(new w(a,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new t.DOMException("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&a&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",l)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}k.polyfill=!0,e.fetch||(e.fetch=k,e.Headers=u,e.Request=b,e.Response=w),t.Headers=u,t.Request=b,t.Response=w,t.fetch=k,Object.defineProperty(t,"__esModule",{value:!0})}({})}("undefined"!=typeof self?self:globalThis);var Rb,Lb="undefined"!=typeof Symbol&&Symbol,Db=Array.prototype.slice,Fb=Object.prototype.toString,Nb=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==Fb.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,n=Db.call(arguments,1),a=Math.max(0,t.length-n.length),o=[],i=0;i<a;i++)o.push("$"+i);if(r=Function("binder","return function ("+o.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var a=t.apply(this,n.concat(Db.call(arguments)));return Object(a)===a?a:this}return t.apply(e,n.concat(Db.call(arguments)))})),t.prototype){var s=function(){};s.prototype=t.prototype,r.prototype=new s,s.prototype=null}return r},zb=Nb.call(Function.call,Object.prototype.hasOwnProperty),qb=SyntaxError,Bb=Function,Ub=TypeError,Mb=function(e){try{return Bb('"use strict"; return ('+e+").constructor;")()}catch(e){}},Hb=Object.getOwnPropertyDescriptor;if(Hb)try{Hb({},"")}catch(a){Hb=null}var Wb=function(){throw new Ub},Vb=Hb?function(){try{return Wb}catch(e){try{return Hb(arguments,"callee").get}catch(e){return Wb}}}():Wb,Gb="function"==typeof Lb&&"function"==typeof Symbol&&"symbol"==typeof Lb("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var a=Object.getOwnPropertyDescriptor(e,t);if(42!==a.value||!0!==a.enumerable)return!1}return!0}(),Kb=Object.getPrototypeOf||function(e){return e.__proto__},Jb={},Yb="undefined"==typeof Uint8Array?Rb:Kb(Uint8Array),Zb={"%AggregateError%":"undefined"==typeof AggregateError?Rb:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?Rb:ArrayBuffer,"%ArrayIteratorPrototype%":Gb?Kb([][Symbol.iterator]()):Rb,"%AsyncFromSyncIteratorPrototype%":Rb,"%AsyncFunction%":Jb,"%AsyncGenerator%":Jb,"%AsyncGeneratorFunction%":Jb,"%AsyncIteratorPrototype%":Jb,"%Atomics%":"undefined"==typeof Atomics?Rb:Atomics,"%BigInt%":"undefined"==typeof BigInt?Rb:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?Rb:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?Rb:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?Rb:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?Rb:FinalizationRegistry,"%Function%":Bb,"%GeneratorFunction%":Jb,"%Int8Array%":"undefined"==typeof Int8Array?Rb:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?Rb:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?Rb:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Gb?Kb(Kb([][Symbol.iterator]())):Rb,"%JSON%":"object"==typeof JSON?JSON:Rb,"%Map%":"undefined"==typeof Map?Rb:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&Gb?Kb((new Map)[Symbol.iterator]()):Rb,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?Rb:Promise,"%Proxy%":"undefined"==typeof Proxy?Rb:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?Rb:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?Rb:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&Gb?Kb((new Set)[Symbol.iterator]()):Rb,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?Rb:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Gb?Kb(""[Symbol.iterator]()):Rb,"%Symbol%":Gb?Symbol:Rb,"%SyntaxError%":qb,"%ThrowTypeError%":Vb,"%TypedArray%":Yb,"%TypeError%":Ub,"%Uint8Array%":"undefined"==typeof Uint8Array?Rb:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?Rb:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?Rb:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?Rb:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?Rb:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?Rb:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?Rb:WeakSet},Qb=function e(t){var r;if("%AsyncFunction%"===t)r=Mb("async function () {}");else if("%GeneratorFunction%"===t)r=Mb("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=Mb("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var a=e("%AsyncGenerator%");a&&(r=Kb(a.prototype))}return Zb[t]=r,r},Xb={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ex=Nb,tx=zb,rx=ex.call(Function.call,Array.prototype.concat),nx=ex.call(Function.apply,Array.prototype.splice),ax=ex.call(Function.call,String.prototype.replace),ox=ex.call(Function.call,String.prototype.slice),ix=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,sx=/\\(\\)?/g,lx=function(e,t){var r,n=e;if(tx(Xb,n)&&(n="%"+(r=Xb[n])[0]+"%"),tx(Zb,n)){var a=Zb[n];if(a===Jb&&(a=Qb(n)),void 0===a&&!t)throw new Ub("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:a}}throw new qb("intrinsic "+e+" does not exist!")},cx=function(e,t){if("string"!=typeof e||0===e.length)throw new Ub("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new Ub('"allowMissing" argument must be a boolean');var r=function(e){var t=ox(e,0,1),r=ox(e,-1);if("%"===t&&"%"!==r)throw new qb("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new qb("invalid intrinsic syntax, expected opening `%`");var n=[];return ax(e,ix,(function(e,t,r,a){n[n.length]=r?ax(a,sx,"$1"):t||e})),n}(e),n=r.length>0?r[0]:"",a=lx("%"+n+"%",t),o=a.name,i=a.value,s=!1,l=a.alias;l&&(n=l[0],nx(r,rx([0,1],l)));for(var c=1,p=!0;c<r.length;c+=1){var d=r[c],u=ox(d,0,1),h=ox(d,-1);if(('"'===u||"'"===u||"`"===u||'"'===h||"'"===h||"`"===h)&&u!==h)throw new qb("property names with quotes must have matching quotes");if("constructor"!==d&&p||(s=!0),tx(Zb,o="%"+(n+="."+d)+"%"))i=Zb[o];else if(null!=i){if(!(d in i)){if(!t)throw new Ub("base intrinsic for "+e+" exists, but the property is not available.");return}if(Hb&&c+1>=r.length){var f=Hb(i,d);i=(p=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:i[d]}else p=tx(i,d),i=i[d];p&&!s&&(Zb[o]=i)}}return i},px={exports:{}};!function(e){var t=Nb,r=cx,n=r("%Function.prototype.apply%"),a=r("%Function.prototype.call%"),o=r("%Reflect.apply%",!0)||t.call(a,n),i=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch(e){s=null}e.exports=function(e){var r=o(t,a,arguments);i&&s&&(i(r,"length").configurable&&s(r,"length",{value:1+l(0,e.length-(arguments.length-1))}));return r};var c=function(){return o(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c}(px);var dx=cx,ux=px.exports,hx=ux(dx("String.prototype.indexOf")),fx=function(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),mx="function"==typeof Map&&Map.prototype,yx=Object.getOwnPropertyDescriptor&&mx?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,gx=mx&&yx&&"function"==typeof yx.get?yx.get:null,vx=mx&&Map.prototype.forEach,bx="function"==typeof Set&&Set.prototype,xx=Object.getOwnPropertyDescriptor&&bx?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,wx=bx&&xx&&"function"==typeof xx.get?xx.get:null,$x=bx&&Set.prototype.forEach,kx="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,Sx="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,Ax="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,Ex=Boolean.prototype.valueOf,Ox=Object.prototype.toString,Tx=Function.prototype.toString,Cx=String.prototype.match,jx=String.prototype.slice,_x=String.prototype.replace,Ix=String.prototype.toUpperCase,Px=String.prototype.toLowerCase,Rx=RegExp.prototype.test,Lx=Array.prototype.concat,Dx=Array.prototype.join,Fx=Array.prototype.slice,Nx=Math.floor,zx="function"==typeof BigInt?BigInt.prototype.valueOf:null,qx=Object.getOwnPropertySymbols,Bx="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,Ux="function"==typeof Symbol&&"object"==typeof Symbol.iterator,Mx="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,Hx=Object.prototype.propertyIsEnumerable,Wx=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Vx(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||Rx.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-Nx(-e):Nx(e);if(n!==e){var a=String(n),o=jx.call(t,a.length+1);return _x.call(a,r,"$&_")+"."+_x.call(_x.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _x.call(t,r,"$&_")}var Gx=fx.custom,Kx=Gx&&Qx(Gx)?Gx:null;function Jx(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function Yx(e){return _x.call(String(e),/"/g,"&quot;")}function Zx(e){return!("[object Array]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}function Qx(e){if(Ux)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!Bx)return!1;try{return Bx.call(e),!0}catch(e){}return!1}var Xx=Object.prototype.hasOwnProperty||function(e){return e in this};function ew(e,t){return Xx.call(e,t)}function tw(e){return Ox.call(e)}function rw(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function nw(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return nw(jx.call(e,0,t.maxStringLength),t)+n}return Jx(_x.call(_x.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,aw),"single",t)}function aw(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+Ix.call(t.toString(16))}function ow(e){return"Object("+e+")"}function iw(e){return e+" { ? }"}function sw(e,t,r,n){return e+" ("+t+") {"+(n?lw(r,n):Dx.call(r,", "))+"}"}function lw(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+Dx.call(e,","+r)+"\n"+t.prev}function cw(e,t){var r=Zx(e),n=[];if(r){n.length=e.length;for(var a=0;a<e.length;a++)n[a]=ew(e,a)?t(e[a],e):""}var o,i="function"==typeof qx?qx(e):[];if(Ux){o={};for(var s=0;s<i.length;s++)o["$"+i[s]]=i[s]}for(var l in e)ew(e,l)&&(r&&String(Number(l))===l&&l<e.length||Ux&&o["$"+l]instanceof Symbol||(Rx.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if("function"==typeof qx)for(var c=0;c<i.length;c++)Hx.call(e,i[c])&&n.push("["+t(i[c])+"]: "+t(e[i[c]],e));return n}var pw=cx,dw=function(e,t){var r=dx(e,!!t);return"function"==typeof r&&hx(e,".prototype.")>-1?ux(r):r},uw=function e(t,r,n,a){var o=r||{};if(ew(o,"quoteStyle")&&"single"!==o.quoteStyle&&"double"!==o.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ew(o,"maxStringLength")&&("number"==typeof o.maxStringLength?o.maxStringLength<0&&o.maxStringLength!==1/0:null!==o.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=!ew(o,"customInspect")||o.customInspect;if("boolean"!=typeof i&&"symbol"!==i)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ew(o,"indent")&&null!==o.indent&&"\t"!==o.indent&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ew(o,"numericSeparator")&&"boolean"!=typeof o.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=o.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return nw(t,o);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var l=String(t);return s?Vx(t,l):l}if("bigint"==typeof t){var c=String(t)+"n";return s?Vx(t,c):c}var p=void 0===o.depth?5:o.depth;if(void 0===n&&(n=0),n>=p&&p>0&&"object"==typeof t)return Zx(t)?"[Array]":"[Object]";var d=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=Dx.call(Array(e.indent+1)," ")}return{base:r,prev:Dx.call(Array(t+1),r)}}(o,n);if(void 0===a)a=[];else if(rw(a,t)>=0)return"[Circular]";function u(t,r,i){if(r&&(a=Fx.call(a)).push(r),i){var s={depth:o.depth};return ew(o,"quoteStyle")&&(s.quoteStyle=o.quoteStyle),e(t,s,n+1,a)}return e(t,o,n+1,a)}if("function"==typeof t){var h=function(e){if(e.name)return e.name;var t=Cx.call(Tx.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),f=cw(t,u);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(f.length>0?" { "+Dx.call(f,", ")+" }":"")}if(Qx(t)){var m=Ux?_x.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):Bx.call(t);return"object"!=typeof t||Ux?m:ow(m)}if(function(e){return!(!e||"object"!=typeof e)&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)}(t)){for(var y="<"+Px.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)y+=" "+g[v].name+"="+Jx(Yx(g[v].value),"double",o);return y+=">",t.childNodes&&t.childNodes.length&&(y+="..."),y+"</"+Px.call(String(t.nodeName))+">"}if(Zx(t)){if(0===t.length)return"[]";var b=cw(t,u);return d&&!function(e){for(var t=0;t<e.length;t++)if(rw(e[t],"\n")>=0)return!1;return!0}(b)?"["+lw(b,d)+"]":"[ "+Dx.call(b,", ")+" ]"}if(function(e){return!("[object Error]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t)){var x=cw(t,u);return"cause"in t&&!Hx.call(t,"cause")?"{ ["+String(t)+"] "+Dx.call(Lx.call("[cause]: "+u(t.cause),x),", ")+" }":0===x.length?"["+String(t)+"]":"{ ["+String(t)+"] "+Dx.call(x,", ")+" }"}if("object"==typeof t&&i){if(Kx&&"function"==typeof t[Kx])return t[Kx]();if("symbol"!==i&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!gx||!e||"object"!=typeof e)return!1;try{gx.call(e);try{wx.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var w=[];return vx.call(t,(function(e,r){w.push(u(r,t,!0)+" => "+u(e,t))})),sw("Map",gx.call(t),w,d)}if(function(e){if(!wx||!e||"object"!=typeof e)return!1;try{wx.call(e);try{gx.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var $=[];return $x.call(t,(function(e){$.push(u(e,t))})),sw("Set",wx.call(t),$,d)}if(function(e){if(!kx||!e||"object"!=typeof e)return!1;try{kx.call(e,kx);try{Sx.call(e,Sx)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return iw("WeakMap");if(function(e){if(!Sx||!e||"object"!=typeof e)return!1;try{Sx.call(e,Sx);try{kx.call(e,kx)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return iw("WeakSet");if(function(e){if(!Ax||!e||"object"!=typeof e)return!1;try{return Ax.call(e),!0}catch(e){}return!1}(t))return iw("WeakRef");if(function(e){return!("[object Number]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t))return ow(u(Number(t)));if(function(e){if(!e||"object"!=typeof e||!zx)return!1;try{return zx.call(e),!0}catch(e){}return!1}(t))return ow(u(zx.call(t)));if(function(e){return!("[object Boolean]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t))return ow(Ex.call(t));if(function(e){return!("[object String]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t))return ow(u(String(t)));if(!function(e){return!("[object Date]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t)&&!function(e){return!("[object RegExp]"!==tw(e)||Mx&&"object"==typeof e&&Mx in e)}(t)){var k=cw(t,u),S=Wx?Wx(t)===Object.prototype:t instanceof Object||t.constructor===Object,A=t instanceof Object?"":"null prototype",E=!S&&Mx&&Object(t)===t&&Mx in t?jx.call(tw(t),8,-1):A?"Object":"",O=(S||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(E||A?"["+Dx.call(Lx.call([],E||[],A||[]),": ")+"] ":"");return 0===k.length?O+"{}":d?O+"{"+lw(k,d)+"}":O+"{ "+Dx.call(k,", ")+" }"}return String(t)},hw=pw("%TypeError%"),fw=pw("%WeakMap%",!0),mw=pw("%Map%",!0),yw=dw("WeakMap.prototype.get",!0),gw=dw("WeakMap.prototype.set",!0),vw=dw("WeakMap.prototype.has",!0),bw=dw("Map.prototype.get",!0),xw=dw("Map.prototype.set",!0),ww=dw("Map.prototype.has",!0),$w=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},kw=String.prototype.replace,Sw=/%20/g,Aw="RFC3986",Ew={default:Aw,formatters:{RFC1738:function(e){return kw.call(e,Sw,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:Aw},Ow=Ew,Tw=Object.prototype.hasOwnProperty,Cw=Array.isArray,jw=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),_w=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},Iw={arrayToObject:_w,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],o=a.obj[a.prop],i=Object.keys(o),s=0;s<i.length;++s){var l=i[s],c=o[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:o,prop:l}),r.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(Cw(r)){for(var n=[],a=0;a<r.length;++a)void 0!==r[a]&&n.push(r[a]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,n,a){if(0===e.length)return e;var o=e;if("symbol"==typeof e?o=Symbol.prototype.toString.call(e):"string"!=typeof e&&(o=String(e)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",s=0;s<o.length;++s){var l=o.charCodeAt(s);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||a===Ow.RFC1738&&(40===l||41===l)?i+=o.charAt(s):l<128?i+=jw[l]:l<2048?i+=jw[192|l>>6]+jw[128|63&l]:l<55296||l>=57344?i+=jw[224|l>>12]+jw[128|l>>6&63]+jw[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(s)),i+=jw[240|l>>18]+jw[128|l>>12&63]+jw[128|l>>6&63]+jw[128|63&l])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(Cw(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Cw(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!Tw.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return Cw(t)&&!Cw(r)&&(a=_w(t,n)),Cw(t)&&Cw(r)?(r.forEach((function(r,a){if(Tw.call(t,a)){var o=t[a];o&&"object"==typeof o&&r&&"object"==typeof r?t[a]=e(o,r,n):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var o=r[a];return Tw.call(t,a)?t[a]=e(t[a],o,n):t[a]=o,t}),a)}},Pw=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new hw("Side channel does not contain "+uw(e))},get:function(n){if(fw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return yw(e,n)}else if(mw){if(t)return bw(t,n)}else if(r)return function(e,t){var r=$w(e,t);return r&&r.value}(r,n)},has:function(n){if(fw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return vw(e,n)}else if(mw){if(t)return ww(t,n)}else if(r)return function(e,t){return!!$w(e,t)}(r,n);return!1},set:function(n,a){fw&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new fw),gw(e,n,a)):mw?(t||(t=new mw),xw(t,n,a)):(r||(r={key:{},next:null}),function(e,t,r){var n=$w(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}}(r,n,a))}};return n},Rw=Iw,Lw=Ew,Dw=Object.prototype.hasOwnProperty,Fw={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Nw=Array.isArray,zw=String.prototype.split,qw=Array.prototype.push,Bw=function(e,t){qw.apply(e,Nw(t)?t:[t])},Uw=Date.prototype.toISOString,Mw=Lw.default,Hw={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Rw.encode,encodeValuesOnly:!1,format:Mw,formatter:Lw.formatters[Mw],indices:!1,serializeDate:function(e){return Uw.call(e)},skipNulls:!1,strictNullHandling:!1},Ww={},Vw=function e(t,r,n,a,o,i,s,l,c,p,d,u,h,f,m){for(var y=t,g=m,v=0,b=!1;void 0!==(g=g.get(Ww))&&!b;){var x=g.get(t);if(v+=1,void 0!==x){if(x===v)throw new RangeError("Cyclic object value");b=!0}void 0===g.get(Ww)&&(v=0)}if("function"==typeof s?y=s(r,y):y instanceof Date?y=p(y):"comma"===n&&Nw(y)&&(y=Rw.maybeMap(y,(function(e){return e instanceof Date?p(e):e}))),null===y){if(a)return i&&!h?i(r,Hw.encoder,f,"key",d):r;y=""}if(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==typeof e||"bigint"==typeof e}(y)||Rw.isBuffer(y)){if(i){var w=h?r:i(r,Hw.encoder,f,"key",d);if("comma"===n&&h){for(var $=zw.call(String(y),","),k="",S=0;S<$.length;++S)k+=(0===S?"":",")+u(i($[S],Hw.encoder,f,"value",d));return[u(w)+"="+k]}return[u(w)+"="+u(i(y,Hw.encoder,f,"value",d))]}return[u(r)+"="+u(String(y))]}var A,E=[];if(void 0===y)return E;if("comma"===n&&Nw(y))A=[{value:y.length>0?y.join(",")||null:void 0}];else if(Nw(s))A=s;else{var O=Object.keys(y);A=l?O.sort(l):O}for(var T=0;T<A.length;++T){var C=A[T],j="object"==typeof C&&void 0!==C.value?C.value:y[C];if(!o||null!==j){var _=Nw(y)?"function"==typeof n?n(r,C):r:r+(c?"."+C:"["+C+"]");m.set(t,v);var I=Pw();I.set(Ww,m),Bw(E,e(j,_,n,a,o,i,s,l,c,p,d,u,h,f,I))}}return E},Gw=Iw,Kw=Object.prototype.hasOwnProperty,Jw=Array.isArray,Yw={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:Gw.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Zw=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},Qw=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},Xw=function(e,t,r,n){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(a),s=i?a.slice(0,i.index):a,l=[];if(s){if(!r.plainObjects&&Kw.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&null!==(i=o.exec(a))&&c<r.depth;){if(c+=1,!r.plainObjects&&Kw.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+a.slice(i.index)+"]"),function(e,t,r,n){for(var a=n?t:Qw(t,r),o=e.length-1;o>=0;--o){var i,s=e[o];if("[]"===s&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&s!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=a:"__proto__"!==l&&(i[l]=a):i={0:a}}a=i}return a}(l,t,r,n)}},e$={formats:Ew,parse:function(e,t){var r=function(e){if(!e)return Yw;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?Yw.charset:e.charset;return{allowDots:void 0===e.allowDots?Yw.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:Yw.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:Yw.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:Yw.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Yw.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:Yw.comma,decoder:"function"==typeof e.decoder?e.decoder:Yw.decoder,delimiter:"string"==typeof e.delimiter||Gw.isRegExp(e.delimiter)?e.delimiter:Yw.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:Yw.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:Yw.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:Yw.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:Yw.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Yw.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?function(e,t){var r,n={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,o=t.parameterLimit===1/0?void 0:t.parameterLimit,i=a.split(t.delimiter,o),s=-1,l=t.charset;if(t.charsetSentinel)for(r=0;r<i.length;++r)0===i[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[r]?l="utf-8":"utf8=%26%2310003%3B"===i[r]&&(l="iso-8859-1"),s=r,r=i.length);for(r=0;r<i.length;++r)if(r!==s){var c,p,d=i[r],u=d.indexOf("]="),h=-1===u?d.indexOf("="):u+1;-1===h?(c=t.decoder(d,Yw.decoder,l,"key"),p=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,h),Yw.decoder,l,"key"),p=Gw.maybeMap(Qw(d.slice(h+1),t),(function(e){return t.decoder(e,Yw.decoder,l,"value")}))),p&&t.interpretNumericEntities&&"iso-8859-1"===l&&(p=Zw(p)),d.indexOf("[]=")>-1&&(p=Jw(p)?[p]:p),Kw.call(n,c)?n[c]=Gw.combine(n[c],p):n[c]=p}return n}(e,r):e,a=r.plainObjects?Object.create(null):{},o=Object.keys(n),i=0;i<o.length;++i){var s=o[i],l=Xw(s,n[s],r,"string"==typeof e);a=Gw.merge(a,l,r)}return!0===r.allowSparse?a:Gw.compact(a)},stringify:function(e,t){var r,n=e,a=function(e){if(!e)return Hw;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||Hw.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=Lw.default;if(void 0!==e.format){if(!Dw.call(Lw.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=Lw.formatters[r],a=Hw.filter;return("function"==typeof e.filter||Nw(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:Hw.addQueryPrefix,allowDots:void 0===e.allowDots?Hw.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Hw.charsetSentinel,delimiter:void 0===e.delimiter?Hw.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:Hw.encode,encoder:"function"==typeof e.encoder?e.encoder:Hw.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:Hw.encodeValuesOnly,filter:a,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:Hw.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:Hw.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Hw.strictNullHandling}}(t);"function"==typeof a.filter?n=(0,a.filter)("",n):Nw(a.filter)&&(r=a.filter);var o,i=[];if("object"!=typeof n||null===n)return"";o=t&&t.arrayFormat in Fw?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=Fw[o];r||(r=Object.keys(n)),a.sort&&r.sort(a.sort);for(var l=Pw(),c=0;c<r.length;++c){var p=r[c];a.skipNulls&&null===n[p]||Bw(i,Vw(n[p],p,s,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,l))}var d=i.join(a.delimiter),u=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&("iso-8859-1"===a.charset?u+="utf8=%26%2310003%3B&":u+="utf8=%E2%9C%93&"),d.length>0?u+d:""}};function t$(e){return null==e}var r$={isNothing:t$,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:t$(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,a,o;if(t)for(r=0,n=(o=Object.keys(t)).length;r<n;r+=1)e[a=o[r]]=t[a];return e}};function n$(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function a$(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=n$(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}a$.prototype=Object.create(Error.prototype),a$.prototype.constructor=a$,a$.prototype.toString=function(e){return this.name+": "+n$(this,e)};var o$=a$;function i$(e,t,r,n,a){var o="",i="",s=Math.floor(a/2)-1;return n-t>s&&(t=n-s+(o=" ... ").length),r-n>s&&(r=n+s-(i=" ...").length),{str:o+e.slice(t,r).replace(/\t/g,"→")+i,pos:n-t+o.length}}function s$(e,t){return r$.repeat(" ",t-e.length)+e}var l$=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,a=[0],o=[],i=-1;r=n.exec(e.buffer);)o.push(r.index),a.push(r.index+r[0].length),e.position<=r.index&&i<0&&(i=a.length-2);i<0&&(i=a.length-1);var s,l,c="",p=Math.min(e.line+t.linesAfter,o.length).toString().length,d=t.maxLength-(t.indent+p+3);for(s=1;s<=t.linesBefore&&!(i-s<0);s++)l=i$(e.buffer,a[i-s],o[i-s],e.position-(a[i]-a[i-s]),d),c=r$.repeat(" ",t.indent)+s$((e.line-s+1).toString(),p)+" | "+l.str+"\n"+c;for(l=i$(e.buffer,a[i],o[i],e.position,d),c+=r$.repeat(" ",t.indent)+s$((e.line+1).toString(),p)+" | "+l.str+"\n",c+=r$.repeat("-",t.indent+p+3+l.pos)+"^\n",s=1;s<=t.linesAfter&&!(i+s>=o.length);s++)l=i$(e.buffer,a[i+s],o[i+s],e.position-(a[i]-a[i+s]),d),c+=r$.repeat(" ",t.indent)+s$((e.line+s+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")},c$=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],p$=["scalar","sequence","mapping"],d$=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===c$.indexOf(t))throw new o$('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(r){e[r].forEach((function(e){t[String(e)]=r}))})),t}(t.styleAliases||null),-1===p$.indexOf(this.kind))throw new o$('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function u$(e,t){var r=[];return e[t].forEach((function(e){var t=r.length;r.forEach((function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)})),r[t]=e})),r}function h$(e){return this.extend(e)}h$.prototype.extend=function(e){var t=[],r=[];if(e instanceof d$)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new o$("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof d$))throw new o$("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new o$("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new o$("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof d$))throw new o$("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var n=Object.create(h$.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=u$(n,"implicit"),n.compiledExplicit=u$(n,"explicit"),n.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(n.compiledImplicit,n.compiledExplicit),n};var f$=h$,m$=new d$("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),y$=new d$("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),g$=new d$("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),v$=new f$({explicit:[m$,y$,g$]}),b$=new d$("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),x$=new d$("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function w$(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function $$(e){return 48<=e&&e<=55}function k$(e){return 48<=e&&e<=57}var S$=new d$("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r=e.length,n=0,a=!1;if(!r)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===r)return!0;if("b"===(t=e[++n])){for(n++;n<r;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;a=!0}return a&&"_"!==t}if("x"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!w$(e.charCodeAt(n)))return!1;a=!0}return a&&"_"!==t}if("o"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!$$(e.charCodeAt(n)))return!1;a=!0}return a&&"_"!==t}}if("_"===t)return!1;for(;n<r;n++)if("_"!==(t=e[n])){if(!k$(e.charCodeAt(n)))return!1;a=!0}return!(!a||"_"===t)},construct:function(e){var t,r=e,n=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2);if("x"===r[1])return n*parseInt(r.slice(2),16);if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!r$.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),A$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),E$=/^[-+]?[0-9]+e/,O$=new d$("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!A$.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r;return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||r$.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r$.isNegativeZero(e))return"-0.0";return r=e.toString(10),E$.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),T$=v$.extend({implicit:[b$,x$,S$,O$]}),C$=T$,j$=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_$=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),I$=new d$("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==j$.exec(e)||null!==_$.exec(e))},construct:function(e){var t,r,n,a,o,i,s,l,c=0,p=null;if(null===(t=j$.exec(e))&&(t=_$.exec(e)),null===t)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(r,n,a));if(o=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(p=-p)),l=new Date(Date.UTC(r,n,a,o,i,s,c)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),P$=new d$("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),R$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",L$=new d$("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=0,a=e.length,o=R$;for(r=0;r<a;r++)if(!((t=o.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),a=n.length,o=R$,i=0,s=[];for(t=0;t<a;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|o.indexOf(n.charAt(t));return 0==(r=a%4*6)?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):18===r?(s.push(i>>10&255),s.push(i>>2&255)):12===r&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",a=0,o=e.length,i=R$;for(t=0;t<o;t++)t%3==0&&t&&(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]),a=(a<<8)+e[t];return 0==(r=o%3)?(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]):2===r?(n+=i[a>>10&63],n+=i[a>>4&63],n+=i[a<<2&63],n+=i[64]):1===r&&(n+=i[a>>2&63],n+=i[a<<4&63],n+=i[64],n+=i[64]),n}}),D$=Object.prototype.hasOwnProperty,F$=Object.prototype.toString,N$=new d$("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,a,o,i=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],o=!1,"[object Object]"!==F$.call(n))return!1;for(a in n)if(D$.call(n,a)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==i.indexOf(a))return!1;i.push(a)}return!0},construct:function(e){return null!==e?e:[]}}),z$=Object.prototype.toString,q$=new d$("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1){if(n=i[t],"[object Object]"!==z$.call(n))return!1;if(1!==(a=Object.keys(n)).length)return!1;o[t]=[a[0],n[a[0]]]}return!0},construct:function(e){if(null===e)return[];var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1)n=i[t],a=Object.keys(n),o[t]=[a[0],n[a[0]]];return o}}),B$=Object.prototype.hasOwnProperty,U$=new d$("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,r=e;for(t in r)if(B$.call(r,t)&&null!==r[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),M$=C$.extend({implicit:[I$,P$],explicit:[L$,N$,q$,U$]}),H$=Object.prototype.hasOwnProperty,W$=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,V$=/[\x85\u2028\u2029]/,G$=/[,\[\]\{\}]/,K$=/^(?:!|!!|![a-z\-]+!)$/i,J$=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Y$(e){return Object.prototype.toString.call(e)}function Z$(e){return 10===e||13===e}function Q$(e){return 9===e||32===e}function X$(e){return 9===e||32===e||10===e||13===e}function ek(e){return 44===e||91===e||93===e||123===e||125===e}function tk(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function rk(e){return 120===e?2:117===e?4:85===e?8:0}function nk(e){return 48<=e&&e<=57?e-48:-1}function ak(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ok(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var ik=new Array(256),sk=new Array(256),lk=0;lk<256;lk++)ik[lk]=ak(lk)?1:0,sk[lk]=ak(lk);function ck(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||M$,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function pk(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=l$(r),new o$(t,r)}function dk(e,t){throw pk(e,t)}function uk(e,t){e.onWarning&&e.onWarning.call(null,pk(e,t))}var hk={YAML:function(e,t,r){var n,a,o;null!==e.version&&dk(e,"duplication of %YAML directive"),1!==r.length&&dk(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&dk(e,"ill-formed argument of the YAML directive"),a=parseInt(n[1],10),o=parseInt(n[2],10),1!==a&&dk(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&uk(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,a;2!==r.length&&dk(e,"TAG directive accepts exactly two arguments"),n=r[0],a=r[1],K$.test(n)||dk(e,"ill-formed tag handle (first argument) of the TAG directive"),H$.call(e.tagMap,n)&&dk(e,'there is a previously declared suffix for "'+n+'" tag handle'),J$.test(a)||dk(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch(t){dk(e,"tag prefix is malformed: "+a)}e.tagMap[n]=a}};function fk(e,t,r,n){var a,o,i,s;if(t<r){if(s=e.input.slice(t,r),n)for(a=0,o=s.length;a<o;a+=1)9===(i=s.charCodeAt(a))||32<=i&&i<=1114111||dk(e,"expected valid JSON character");else W$.test(s)&&dk(e,"the stream contains non-printable characters");e.result+=s}}function mk(e,t,r,n){var a,o,i,s;for(r$.isObject(r)||dk(e,"cannot merge mappings; the provided source object is unacceptable"),i=0,s=(a=Object.keys(r)).length;i<s;i+=1)o=a[i],H$.call(t,o)||(t[o]=r[o],n[o]=!0)}function yk(e,t,r,n,a,o,i,s,l){var c,p;if(Array.isArray(a))for(c=0,p=(a=Array.prototype.slice.call(a)).length;c<p;c+=1)Array.isArray(a[c])&&dk(e,"nested arrays are not supported inside keys"),"object"==typeof a&&"[object Object]"===Y$(a[c])&&(a[c]="[object Object]");if("object"==typeof a&&"[object Object]"===Y$(a)&&(a="[object Object]"),a=String(a),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(o))for(c=0,p=o.length;c<p;c+=1)mk(e,t,o[c],r);else mk(e,t,o,r);else e.json||H$.call(r,a)||!H$.call(t,a)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,dk(e,"duplicated mapping key")),"__proto__"===a?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[a]=o,delete r[a];return t}function gk(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):dk(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function vk(e,t,r){for(var n=0,a=e.input.charCodeAt(e.position);0!==a;){for(;Q$(a);)9===a&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&35===a)do{a=e.input.charCodeAt(++e.position)}while(10!==a&&13!==a&&0!==a);if(!Z$(a))break;for(gk(e),a=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&uk(e,"deficient indentation"),n}function bk(e){var t,r=e.position;return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!X$(t)))}function xk(e,t){1===t?e.result+=" ":t>1&&(e.result+=r$.repeat("\n",t-1))}function wk(e,t){var r,n,a=e.tag,o=e.anchor,i=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,dk(e,"tab characters must not be used in indentation")),45===n)&&X$(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,vk(e,!0,-1)&&e.lineIndent<=t)i.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,Sk(e,t,3,!1,!0),i.push(e.result),vk(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)dk(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=a,e.anchor=o,e.kind="sequence",e.result=i,!0)}function $k(e){var t,r,n,a,o=!1,i=!1;if(33!==(a=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&dk(e,"duplication of a tag property"),60===(a=e.input.charCodeAt(++e.position))?(o=!0,a=e.input.charCodeAt(++e.position)):33===a?(i=!0,r="!!",a=e.input.charCodeAt(++e.position)):r="!",t=e.position,o){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&62!==a);e.position<e.length?(n=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):dk(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!X$(a);)33===a&&(i?dk(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),K$.test(r)||dk(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),G$.test(n)&&dk(e,"tag suffix cannot contain flow indicator characters")}n&&!J$.test(n)&&dk(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){dk(e,"tag name is malformed: "+n)}return o?e.tag=n:H$.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:dk(e,'undeclared tag handle "'+r+'"'),!0}function kk(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&dk(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!X$(r)&&!ek(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&dk(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Sk(e,t,r,n,a){var o,i,s,l,c,p,d,u,h,f=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=i=s=4===r||3===r,n&&vk(e,!0,-1)&&(m=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),1===f)for(;$k(e)||kk(e);)vk(e,!0,-1)?(m=!0,s=o,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):s=!1;if(s&&(s=m||a),1!==f&&4!==r||(u=1===r||2===r?t:t+1,h=e.position-e.lineStart,1===f?s&&(wk(e,h)||function(e,t,r){var n,a,o,i,s,l,c,p=e.tag,d=e.anchor,u={},h=Object.create(null),f=null,m=null,y=null,g=!1,v=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=u),c=e.input.charCodeAt(e.position);0!==c;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,dk(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),o=e.line,63!==c&&58!==c||!X$(n)){if(i=e.line,s=e.lineStart,l=e.position,!Sk(e,r,2,!1,!0))break;if(e.line===o){for(c=e.input.charCodeAt(e.position);Q$(c);)c=e.input.charCodeAt(++e.position);if(58===c)X$(c=e.input.charCodeAt(++e.position))||dk(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(yk(e,u,h,f,m,null,i,s,l),f=m=y=null),v=!0,g=!1,a=!1,f=e.tag,m=e.result;else{if(!v)return e.tag=p,e.anchor=d,!0;dk(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=p,e.anchor=d,!0;dk(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&(yk(e,u,h,f,m,null,i,s,l),f=m=y=null),v=!0,g=!0,a=!0):g?(g=!1,a=!0):dk(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===o||e.lineIndent>t)&&(g&&(i=e.line,s=e.lineStart,l=e.position),Sk(e,t,4,!0,a)&&(g?m=e.result:y=e.result),g||(yk(e,u,h,f,m,y,i,s,l),f=m=y=null),vk(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==c)dk(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&yk(e,u,h,f,m,null,i,s,l),v&&(e.tag=p,e.anchor=d,e.kind="mapping",e.result=u),v}(e,h,u))||function(e,t){var r,n,a,o,i,s,l,c,p,d,u,h,f=!0,m=e.tag,y=e.anchor,g=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))i=93,c=!1,o=[];else{if(123!==h)return!1;i=125,c=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),h=e.input.charCodeAt(++e.position);0!==h;){if(vk(e,!0,t),(h=e.input.charCodeAt(e.position))===i)return e.position++,e.tag=m,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=o,!0;f?44===h&&dk(e,"expected the node content, but found ','"):dk(e,"missed comma between flow collection entries"),u=null,s=l=!1,63===h&&X$(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,vk(e,!0,t)),r=e.line,n=e.lineStart,a=e.position,Sk(e,t,1,!1,!0),d=e.tag,p=e.result,vk(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),vk(e,!0,t),Sk(e,t,1,!1,!0),u=e.result),c?yk(e,o,g,d,p,u,r,n,a):s?o.push(yk(e,null,g,d,p,u,r,n,a)):o.push(p),vk(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(f=!0,h=e.input.charCodeAt(++e.position)):f=!1}dk(e,"unexpected end of the stream within a flow collection")}(e,u)?y=!0:(i&&function(e,t){var r,n,a,o,i=1,s=!1,l=!1,c=t,p=0,d=!1;if(124===(o=e.input.charCodeAt(e.position)))n=!1;else{if(62!==o)return!1;n=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)1===i?i=43===o?3:2:dk(e,"repeat of a chomping mode identifier");else{if(!((a=nk(o))>=0))break;0===a?dk(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?dk(e,"repeat of an indentation width identifier"):(c=t+a-1,l=!0)}if(Q$(o)){do{o=e.input.charCodeAt(++e.position)}while(Q$(o));if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!Z$(o)&&0!==o)}for(;0!==o;){for(gk(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),Z$(o))p++;else{if(e.lineIndent<c){3===i?e.result+=r$.repeat("\n",s?1+p:p):1===i&&s&&(e.result+="\n");break}for(n?Q$(o)?(d=!0,e.result+=r$.repeat("\n",s?1+p:p)):d?(d=!1,e.result+=r$.repeat("\n",p+1)):0===p?s&&(e.result+=" "):e.result+=r$.repeat("\n",p):e.result+=r$.repeat("\n",s?1+p:p),s=!0,l=!0,p=0,r=e.position;!Z$(o)&&0!==o;)o=e.input.charCodeAt(++e.position);fk(e,r,e.position,!1)}}return!0}(e,u)||function(e,t){var r,n,a;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=a=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(fk(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,a=e.position}else Z$(r)?(fk(e,n,a,!0),xk(e,vk(e,!1,t)),n=a=e.position):e.position===e.lineStart&&bk(e)?dk(e,"unexpected end of the document within a single quoted scalar"):(e.position++,a=e.position);dk(e,"unexpected end of the stream within a single quoted scalar")}(e,u)||function(e,t){var r,n,a,o,i,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return fk(e,r,e.position,!0),e.position++,!0;if(92===s){if(fk(e,r,e.position,!0),Z$(s=e.input.charCodeAt(++e.position)))vk(e,!1,t);else if(s<256&&ik[s])e.result+=sk[s],e.position++;else if((i=rk(s))>0){for(a=i,o=0;a>0;a--)(i=tk(s=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+i:dk(e,"expected hexadecimal character");e.result+=ok(o),e.position++}else dk(e,"unknown escape sequence");r=n=e.position}else Z$(s)?(fk(e,r,n,!0),xk(e,vk(e,!1,t)),r=n=e.position):e.position===e.lineStart&&bk(e)?dk(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}dk(e,"unexpected end of the stream within a double quoted scalar")}(e,u)?y=!0:function(e){var t,r,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!X$(n)&&!ek(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&dk(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),H$.call(e.anchorMap,r)||dk(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],vk(e,!0,-1),!0}(e)?(y=!0,null===e.tag&&null===e.anchor||dk(e,"alias node should not have any properties")):function(e,t,r){var n,a,o,i,s,l,c,p,d=e.kind,u=e.result;if(X$(p=e.input.charCodeAt(e.position))||ek(p)||35===p||38===p||42===p||33===p||124===p||62===p||39===p||34===p||37===p||64===p||96===p)return!1;if((63===p||45===p)&&(X$(n=e.input.charCodeAt(e.position+1))||r&&ek(n)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,i=!1;0!==p;){if(58===p){if(X$(n=e.input.charCodeAt(e.position+1))||r&&ek(n))break}else if(35===p){if(X$(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&bk(e)||r&&ek(p))break;if(Z$(p)){if(s=e.line,l=e.lineStart,c=e.lineIndent,vk(e,!1,-1),e.lineIndent>=t){i=!0,p=e.input.charCodeAt(e.position);continue}e.position=o,e.line=s,e.lineStart=l,e.lineIndent=c;break}}i&&(fk(e,a,o,!1),xk(e,e.line-s),a=o=e.position,i=!1),Q$(p)||(o=e.position+1),p=e.input.charCodeAt(++e.position)}return fk(e,a,o,!1),!!e.result||(e.kind=d,e.result=u,!1)}(e,u,1===r)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===f&&(y=s&&wk(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&dk(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((d=e.implicitTypes[l]).resolve(e.result)){e.result=d.construct(e.result),e.tag=d.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(H$.call(e.typeMap[e.kind||"fallback"],e.tag))d=e.typeMap[e.kind||"fallback"][e.tag];else for(d=null,l=0,c=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){d=p[l];break}d||dk(e,"unknown tag !<"+e.tag+">"),null!==e.result&&d.kind!==e.kind&&dk(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+d.kind+'", not "'+e.kind+'"'),d.resolve(e.result,e.tag)?(e.result=d.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):dk(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function Ak(e){var t,r,n,a,o=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(a=e.input.charCodeAt(e.position))&&(vk(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==a));){for(i=!0,a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!X$(a);)a=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&dk(e,"directive name must not be less than one character in length");0!==a;){for(;Q$(a);)a=e.input.charCodeAt(++e.position);if(35===a){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&!Z$(a));break}if(Z$(a))break;for(t=e.position;0!==a&&!X$(a);)a=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==a&&gk(e),H$.call(hk,r)?hk[r](e,r,n):uk(e,'unknown document directive "'+r+'"')}vk(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,vk(e,!0,-1)):i&&dk(e,"directives end mark is expected"),Sk(e,e.lineIndent-1,4,!1,!0),vk(e,!0,-1),e.checkLineBreaks&&V$.test(e.input.slice(o,e.position))&&uk(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&bk(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,vk(e,!0,-1)):e.position<e.length-1&&dk(e,"end of the stream or a document separator is expected")}function Ek(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new ck(e,t),n=e.indexOf("\0");for(-1!==n&&(r.position=n,dk(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Ak(r);return r.documents}var Ok={loadAll:function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=Ek(e,r);if("function"!=typeof t)return n;for(var a=0,o=n.length;a<o;a+=1)t(n[a])},load:function(e,t){var r=Ek(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new o$("expected a single document in the stream, but found more")}}},Tk=Object.prototype.toString,Ck=Object.prototype.hasOwnProperty,jk=65279,_k={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Ik=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Pk=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Rk(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new o$("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+r$.repeat("0",n-t.length)+t}function Lk(e){this.schema=e.schema||M$,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=r$.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,a,o,i,s,l;if(null===t)return{};for(r={},a=0,o=(n=Object.keys(t)).length;a<o;a+=1)i=n[a],s=String(t[i]),"!!"===i.slice(0,2)&&(i="tag:yaml.org,2002:"+i.slice(2)),(l=e.compiledTypeMap.fallback[i])&&Ck.call(l.styleAliases,s)&&(s=l.styleAliases[s]),r[i]=s;return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Dk(e,t){for(var r,n=r$.repeat(" ",t),a=0,o=-1,i="",s=e.length;a<s;)-1===(o=e.indexOf("\n",a))?(r=e.slice(a),a=s):(r=e.slice(a,o+1),a=o+1),r.length&&"\n"!==r&&(i+=n),i+=r;return i}function Fk(e,t){return"\n"+r$.repeat(" ",e.indent*t)}function Nk(e){return 32===e||9===e}function zk(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==jk||65536<=e&&e<=1114111}function qk(e){return zk(e)&&e!==jk&&13!==e&&10!==e}function Bk(e,t,r){var n=qk(e),a=n&&!Nk(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!a)||qk(t)&&!Nk(t)&&35===e||58===t&&a}function Uk(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Mk(e){return/^\n* /.test(e)}function Hk(e,t,r,n,a){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Ik.indexOf(t)||Pk.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,r),i=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(function(e,t,r,n,a,o,i,s){var l,c=0,p=null,d=!1,u=!1,h=-1!==n,f=-1,m=function(e){return zk(e)&&e!==jk&&!Nk(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(Uk(e,0))&&function(e){return!Nk(e)&&58!==e}(Uk(e,e.length-1));if(t||i)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!zk(c=Uk(e,l)))return 5;m=m&&Bk(c,p,s),p=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=Uk(e,l)))d=!0,h&&(u=u||l-f-1>n&&" "!==e[f+1],f=l);else if(!zk(c))return 5;m=m&&Bk(c,p,s),p=c}u=u||h&&l-f-1>n&&" "!==e[f+1]}return d||u?r>9&&Mk(e)?5:i?2===o?5:2:u?4:3:!m||i||a(e)?2===o?5:2:1}(t,s,e.indent,i,(function(t){return function(e,t){var r,n;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!n,a)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Wk(t,e.indent)+Vk(Dk(t,o));case 4:return">"+Wk(t,e.indent)+Vk(Dk(function(e,t){for(var r,n,a,o=/(\n+)([^\n]*)/g,i=(a=-1!==(a=e.indexOf("\n"))?a:e.length,o.lastIndex=a,Gk(e.slice(0,a),t)),s="\n"===e[0]||" "===e[0];n=o.exec(e);){var l=n[1],c=n[2];r=" "===c[0],i+=l+(s||r||""===c?"":"\n")+Gk(c,t),s=r}return i}(t,i),o));case 5:return'"'+function(e){for(var t,r="",n=0,a=0;a<e.length;n>=65536?a+=2:a++)n=Uk(e,a),!(t=_k[n])&&zk(n)?(r+=e[a],n>=65536&&(r+=e[a+1])):r+=t||Rk(n);return r}(t)+'"';default:throw new o$("impossible error: invalid scalar style")}}()}function Wk(e,t){var r=Mk(e)?String(t):"",n="\n"===e[e.length-1];return r+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function Vk(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Gk(e,t){if(""===e||" "===e[0])return e;for(var r,n,a=/ [^ ]/g,o=0,i=0,s=0,l="";r=a.exec(e);)(s=r.index)-o>t&&(n=i>o?i:s,l+="\n"+e.slice(o,n),o=n+1),i=s;return l+="\n",e.length-o>t&&i>o?l+=e.slice(o,i)+"\n"+e.slice(i+1):l+=e.slice(o),l.slice(1)}function Kk(e,t,r,n){var a,o,i,s="",l=e.tag;for(a=0,o=r.length;a<o;a+=1)i=r[a],e.replacer&&(i=e.replacer.call(r,String(a),i)),(Yk(e,t+1,i,!0,!0,!1,!0)||void 0===i&&Yk(e,t+1,null,!0,!0,!1,!0))&&(n&&""===s||(s+=Fk(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function Jk(e,t,r){var n,a,o,i,s,l;for(o=0,i=(a=r?e.explicitTypes:e.implicitTypes).length;o<i;o+=1)if(((s=a[o]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===Tk.call(s.represent))n=s.represent(t,l);else{if(!Ck.call(s.represent,l))throw new o$("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function Yk(e,t,r,n,a,o,i){e.tag=null,e.dump=r,Jk(e,r,!1)||Jk(e,r,!0);var s,l=Tk.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var p,d,u="[object Object]"===l||"[object Array]"===l;if(u&&(d=-1!==(p=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||d||2!==e.indent&&t>0)&&(a=!1),d&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(u&&d&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(function(e,t,r,n){var a,o,i,s,l,c,p="",d=e.tag,u=Object.keys(r);if(!0===e.sortKeys)u.sort();else if("function"==typeof e.sortKeys)u.sort(e.sortKeys);else if(e.sortKeys)throw new o$("sortKeys must be a boolean or a function");for(a=0,o=u.length;a<o;a+=1)c="",n&&""===p||(c+=Fk(e,t)),s=r[i=u[a]],e.replacer&&(s=e.replacer.call(r,i,s)),Yk(e,t+1,i,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=Fk(e,t)),Yk(e,t+1,s,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump));e.tag=d,e.dump=p||"{}"}(e,t,e.dump,a),d&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,a,o,i,s,l="",c=e.tag,p=Object.keys(r);for(n=0,a=p.length;n<a;n+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),i=r[o=p[n]],e.replacer&&(i=e.replacer.call(r,o,i)),Yk(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Yk(e,t,i,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),d&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!i&&t>0?Kk(e,t-1,e.dump,a):Kk(e,t,e.dump,a),d&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,a,o,i="",s=e.tag;for(n=0,a=r.length;n<a;n+=1)o=r[n],e.replacer&&(o=e.replacer.call(r,String(n),o)),(Yk(e,t,o,!1,!1)||void 0===o&&Yk(e,t,null,!1,!1))&&(""!==i&&(i+=","+(e.condenseFlow?"":" ")),i+=e.dump);e.tag=s,e.dump="["+i+"]"}(e,t,e.dump),d&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new o$("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&Hk(e,e.dump,t,o,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function Zk(e,t){var r,n,a=[],o=[];for(Qk(e,a,o),r=0,n=o.length;r<n;r+=1)t.duplicates.push(a[o[r]]);t.usedDuplicates=new Array(n)}function Qk(e,t,r){var n,a,o;if(null!==e&&"object"==typeof e)if(-1!==(a=t.indexOf(e)))-1===r.indexOf(a)&&r.push(a);else if(t.push(e),Array.isArray(e))for(a=0,o=e.length;a<o;a+=1)Qk(e[a],t,r);else for(a=0,o=(n=Object.keys(e)).length;a<o;a+=1)Qk(e[n[a]],t,r)}function Xk(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var eS={Type:d$,Schema:f$,FAILSAFE_SCHEMA:v$,JSON_SCHEMA:T$,CORE_SCHEMA:C$,DEFAULT_SCHEMA:M$,load:Ok.load,loadAll:Ok.loadAll,dump:function(e,t){var r=new Lk(t=t||{});r.noRefs||Zk(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),Yk(r,0,n,!0,!0)?r.dump+"\n":""},YAMLException:o$,types:{binary:L$,float:O$,map:g$,null:b$,pairs:q$,set:U$,timestamp:I$,bool:x$,int:S$,merge:P$,omap:N$,seq:y$,str:m$},safeLoad:Xk("safeLoad","load"),safeLoadAll:Xk("safeLoadAll","loadAll"),safeDump:Xk("safeDump","dump")};const tS="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window,{FormData:rS,Blob:nS,File:aS}=tS;function oS(e){return function(e){if(yh(e))return xf(e)}(e)||function(e){if(void 0!==Ku&&null!=mh(e)||null!=e["@@iterator"])return bf(e)}(e)||wf(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var iS=Dh,sS=function(e){return":/?#[]@!$&'()*+,;=".indexOf(e)>-1},lS=function(e){return/^[a-z0-9\-._~]+$/i.test(e)};function cS(e){var t,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).escape,n=arguments.length>2?arguments[2]:void 0;return"number"==typeof e&&(e=e.toString()),"string"==typeof e&&e.length&&r?n?JSON.parse(e):gb(t=oS(e)).call(t,(function(e){var t,n;if(lS(e))return e;if(sS(e)&&"unsafe"===r)return e;var a=new TextEncoder;return gb(t=gb(n=Wv(a.encode(e))).call(n,(function(e){var t;return iS(t="0".concat(e.toString(16).toUpperCase())).call(t,-2)}))).call(t,(function(e){return"%".concat(e)})).join("")})).join(""):e}function pS(e){var t=e.value;return Array.isArray(t)?function(e){var t=e.key,r=e.value,n=e.style,a=e.explode,o=e.escape,i=function(e){return cS(e,{escape:o})};if("simple"===n)return gb(r).call(r,(function(e){return i(e)})).join(",");if("label"===n)return".".concat(gb(r).call(r,(function(e){return i(e)})).join("."));if("matrix"===n)return gb(r).call(r,(function(e){return i(e)})).reduce((function(e,r){var n,o,i;return!e||a?kb(o=kb(i="".concat(e||"",";")).call(i,t,"=")).call(o,r):kb(n="".concat(e,",")).call(n,r)}),"");if("form"===n){var s=a?"&".concat(t,"="):",";return gb(r).call(r,(function(e){return i(e)})).join(s)}if("spaceDelimited"===n){var l=a?"".concat(t,"="):"";return gb(r).call(r,(function(e){return i(e)})).join(" ".concat(l))}if("pipeDelimited"===n){var c=a?"".concat(t,"="):"";return gb(r).call(r,(function(e){return i(e)})).join("|".concat(c))}}(e):"object"===Sf(t)?function(e){var t=e.key,r=e.value,n=e.style,a=e.explode,o=e.escape,i=function(e){return cS(e,{escape:o})},s=vb(r);return"simple"===n?s.reduce((function(e,t){var n,o,s,l=i(r[t]),c=a?"=":",",p=e?"".concat(e,","):"";return kb(n=kb(o=kb(s="".concat(p)).call(s,t)).call(o,c)).call(n,l)}),""):"label"===n?s.reduce((function(e,t){var n,o,s,l=i(r[t]),c=a?"=":".",p=e?"".concat(e,"."):".";return kb(n=kb(o=kb(s="".concat(p)).call(s,t)).call(o,c)).call(n,l)}),""):"matrix"===n&&a?s.reduce((function(e,t){var n,a,o=i(r[t]),s=e?"".concat(e,";"):";";return kb(n=kb(a="".concat(s)).call(a,t,"=")).call(n,o)}),""):"matrix"===n?s.reduce((function(e,n){var a,o,s=i(r[n]),l=e?"".concat(e,","):";".concat(t,"=");return kb(a=kb(o="".concat(l)).call(o,n,",")).call(a,s)}),""):"form"===n?s.reduce((function(e,t){var n,o,s,l,c=i(r[t]),p=e?kb(n="".concat(e)).call(n,a?"&":","):"",d=a?"=":",";return kb(o=kb(s=kb(l="".concat(p)).call(l,t)).call(s,d)).call(o,c)}),""):void 0}(e):function(e){var t,r=e.key,n=e.value,a=e.style,o=e.escape,i=function(e){return cS(e,{escape:o})};return"simple"===a?i(n):"label"===a?".".concat(i(n)):"matrix"===a?kb(t=";".concat(r,"=")).call(t,i(n)):"form"===a||"deepObject"===a?i(n):void 0}(e)}var dS=function(e,t){t.body=e},uS={serializeRes:yS,mergeInQueryOrForm:AS};function hS(e){return fS.apply(this,arguments)}function fS(){return(fS=bv(wv.mark((function e(t){var r,n,a,o,i,s=arguments;return wv.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.length>1&&void 0!==s[1]?s[1]:{},"object"===Sf(t)&&(t=(r=t).url),r.headers=r.headers||{},uS.mergeInQueryOrForm(r),r.headers&&vb(r.headers).forEach((function(e){var t=r.headers[e];"string"==typeof t&&(r.headers[e]=t.replace(/\n+/g," "))})),!r.requestInterceptor){e.next=12;break}return e.next=8,r.requestInterceptor(r);case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0=r;case 11:r=e.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof rS&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),e.prev=14,e.next=17,(r.userFetch||fetch)(r.url,r);case 17:return a=e.sent,e.next=20,uS.serializeRes(a,t,r);case 20:if(a=e.sent,!r.responseInterceptor){e.next=28;break}return e.next=24,r.responseInterceptor(a);case 24:if(e.t1=e.sent,e.t1){e.next=27;break}e.t1=a;case 27:a=e.t1;case 28:e.next=39;break;case 30:if(e.prev=30,e.t2=e.catch(14),a){e.next=34;break}throw e.t2;case 34:throw(o=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,o.statusCode=a.status,o.responseError=e.t2,o;case 39:if(a.ok){e.next=45;break}throw(i=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,i.statusCode=a.status,i.response=a,i;case 45:return e.abrupt("return",a);case 46:case"end":return e.stop()}}),e,null,[[14,30]])})))).apply(this,arguments)}var mS=function(){return/(json|xml|yaml|text)\b/.test(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")};function yS(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).loadSpec,n=void 0!==r&&r,a={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:gS(e.headers)},o=a.headers["content-type"],i=n||mS(o);return(i?e.text:e.blob||e.buffer).call(e).then((function(e){if(a.text=e,a.data=e,i)try{var t=function(e,t){return t&&(0===t.indexOf("application/json")||t.indexOf("+json")>0)?JSON.parse(e):eS.load(e)}(e,o);a.body=t,a.obj=t}catch(e){a.parseError=e}return a}))}function gS(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"!=typeof Hv(e)?{}:Wv(Hv(e).call(e)).reduce((function(e,t){var r=Af(t,2),n=r[0],a=r[1];return e[n]=function(e){return Dv(e).call(e,", ")?e.split(", "):e}(a),e}),{})}function vS(e,t){return t||"undefined"==typeof navigator||(t=navigator),t&&"ReactNative"===t.product?!(!e||"object"!==Sf(e)||"string"!=typeof e.uri):void 0!==aS&&e instanceof aS||void 0!==nS&&e instanceof nS||!!ArrayBuffer.isView(e)||null!==e&&"object"===Sf(e)&&"function"==typeof e.pipe}function bS(e,t){return Array.isArray(e)&&e.some((function(e){return vS(e,t)}))}var xS={form:",",spaceDelimited:"%20",pipeDelimited:"|"},wS={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function $S(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.collectionFormat,a=t.allowEmptyValue,o=t.serializationOption,i=t.encoding,s="object"!==Sf(t)||Array.isArray(t)?t:t.value,l=r?function(e){return e.toString()}:function(e){return encodeURIComponent(e)},c=l(e);return void 0===s&&a?[[c,""]]:vS(s)||bS(s)?[[c,s]]:o?kS(e,s,r,o):i?[Sf(i.style),Sf(i.explode),Sf(i.allowReserved)].some((function(e){return"undefined"!==e}))?kS(e,s,r,{style:i.style,explode:i.explode,allowReserved:i.allowReserved}):i.contentType?"application/json"===i.contentType?[[c,l("string"==typeof s?s:db(s))]]:[[c,l(s.toString())]]:"object"!==Sf(s)?[[c,l(s)]]:Array.isArray(s)&&s.every((function(e){return"object"!==Sf(e)}))?[[c,gb(s).call(s,l).join(",")]]:[[c,l(db(s))]]:"object"!==Sf(s)?[[c,l(s)]]:Array.isArray(s)?"multi"===n?[[c,gb(s).call(s,l)]]:[[c,gb(s).call(s,l).join(wS[n||"csv"])]]:[[c,""]]}function kS(e,t,r,n){var a,o,i,s=n.style||"form",l=void 0===n.explode?"form"===s:n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),p=function(e){return cS(e,{escape:c})},d=r?function(e){return e}:function(e){return cS(e,{escape:c})};return"object"!==Sf(t)?[[d(e),p(t)]]:Array.isArray(t)?l?[[d(e),gb(t).call(t,p)]]:[[d(e),gb(t).call(t,p).join(xS[s])]]:"deepObject"===s?gb(o=vb(t)).call(o,(function(r){var n;return[d(kb(n="".concat(e,"[")).call(n,r,"]")),p(t[r])]})):l?gb(i=vb(t)).call(i,(function(e){return[d(e),p(t[e])]})):[[d(e),gb(a=vb(t)).call(a,(function(e){var r;return[kb(r="".concat(d(e),",")).call(r,p(t[e]))]})).join(",")]]}function SS(e){var t=vb(e).reduce((function(t,r){var n,a=$f($S(r,e[r]));try{for(a.s();!(n=a.n()).done;){var o=Af(n.value,2),i=o[0],s=o[1];t[i]=s}}catch(e){a.e(e)}finally{a.f()}return t}),{});return e$.stringify(t,{encode:!1,indices:!1})||""}function AS(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,r=void 0===t?"":t,n=e.query,a=e.form;if(a){var o=vb(a).some((function(e){var t=a[e].value;return vS(t)||bS(t)})),i=e.headers["content-type"]||e.headers["Content-Type"];if(o||/multipart\/form-data/i.test(i)){var s=function(e){return Ib(e).reduce((function(e,t){var r,n=Af(t,2),a=$f($S(n[0],n[1],!0));try{for(a.s();!(r=a.n()).done;){var o=Af(r.value,2),i=o[0],s=o[1];if(Array.isArray(s)){var l,c=$f(s);try{for(c.s();!(l=c.n()).done;){var p=l.value;if(ArrayBuffer.isView(p)){var d=new nS([p]);e.append(i,d)}else e.append(i,p)}}catch(e){c.e(e)}finally{c.f()}}else if(ArrayBuffer.isView(s)){var u=new nS([s]);e.append(i,u)}else e.append(i,s)}}catch(e){a.e(e)}finally{a.f()}return e}),new rS)}(e.form);dS(s,e)}else e.body=SS(a);delete e.form}if(n){var l=Af(r.split("?"),2),c=l[0],p=l[1],d="";if(p){var u=e$.parse(p);vb(n).forEach((function(e){return delete u[e]})),d=e$.stringify(u,{encode:!0})}var h=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=Pb(t).call(t,(function(e){return e})).join("&");return n?"?".concat(n):""}(d,SS(n));e.url=c+h,delete e.query}return e}function ES(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function OS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),vd(e,n.key,n)}}function TS(e,t,r){return t&&OS(e.prototype,t),r&&OS(e,r),vd(e,"prototype",{writable:!1}),e}var CS=xa,jS=Ts.find,_S=!0;"find"in[]&&Array(1).find((function(){_S=!1})),CS({target:"Array",proto:!0,forced:_S},{find:function(e){return jS(this,e,arguments.length>1?arguments[1]:void 0)}});var IS=ec("Array").find,PS=tr,RS=IS,LS=Array.prototype,DS=hv,FS=xa,NS=ot,zS=Oa,qS=ka,BS=Ia,US=qr,MS=xs,HS=Go,WS=Zl("splice"),VS=NS.TypeError,GS=Math.max,KS=Math.min;FS({target:"Array",proto:!0,forced:!WS},{splice:function(e,t){var r,n,a,o,i,s,l=US(this),c=BS(l),p=zS(e,c),d=arguments.length;if(0===d?r=n=0:1===d?(r=0,n=c-p):(r=d-2,n=KS(GS(qS(t),0),c-p)),c+r-n>9007199254740991)throw VS("Maximum allowed length exceeded");for(a=MS(l,n),o=0;o<n;o++)(i=p+o)in l&&HS(a,o,l[i]);if(a.length=n,r<n){for(o=p;o<c-n;o++)s=o+r,(i=o+n)in l?l[s]=l[i]:delete l[s];for(o=c;o>c-n+r;o--)delete l[o-1]}else if(r>n)for(o=c-n;o>p;o--)s=o+r-1,(i=o+n-1)in l?l[s]=l[i]:delete l[s];for(o=0;o<r;o++)l[o+p]=arguments[o+2];return l.length=c-n+r,a}});var JS,YS=ec("Array").splice,ZS=tr,QS=YS,XS=Array.prototype,eA=globalThis&&globalThis.__extends||(JS=function(e,t){return(JS=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}JS(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),tA=Object.prototype.hasOwnProperty;function rA(e,t){return tA.call(e,t)}function nA(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);for(var n in t=[],e)rA(e,n)&&t.push(n);return t}function aA(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function oA(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function iA(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function sA(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function lA(e){if(void 0===e)return!0;if(e)if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(lA(e[t]))return!0}else if("object"==typeof e){var n=nA(e),a=n.length;for(t=0;t<a;t++)if(lA(e[n[t]]))return!0}return!1}function cA(e,t){var r=[e];for(var n in t){var a="object"==typeof t[n]?JSON.stringify(t[n],null,2):t[n];void 0!==a&&r.push(n+": "+a)}return r.join("\n")}var pA=function(e){function t(t,r,n,a,o){var i=this.constructor,s=e.call(this,cA(t,{name:r,index:n,operation:a,tree:o}))||this;return s.name=r,s.index=n,s.operation=a,s.tree=o,Object.setPrototypeOf(s,i.prototype),s.message=cA(t,{name:r,index:n,operation:a,tree:o}),s}return eA(t,e),t}(Error),dA=pA,uA=aA,hA={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=mA(r,this.path);n&&(n=aA(n));var a=yA(r,{op:"remove",path:this.from}).removed;return yA(r,{op:"add",path:this.path,value:a}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=mA(r,this.from);return yA(r,{op:"add",path:this.path,value:aA(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:xA(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},fA={add:function(e,t,r){return oA(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:hA.move,copy:hA.copy,test:hA.test,_get:hA._get};function mA(e,t){if(""==t)return e;var r={op:"_get",path:t};return yA(e,r),r.value}function yA(e,t,r,n,a,o){if(void 0===r&&(r=!1),void 0===n&&(n=!0),void 0===a&&(a=!0),void 0===o&&(o=0),r&&("function"==typeof r?r(t,0,e,t.path):vA(t,0)),""===t.path){var i={newDocument:e};if("add"===t.op)return i.newDocument=t.value,i;if("replace"===t.op)return i.newDocument=t.value,i.removed=e,i;if("move"===t.op||"copy"===t.op)return i.newDocument=mA(e,t.from),"move"===t.op&&(i.removed=e),i;if("test"===t.op){if(i.test=xA(e,t.value),!1===i.test)throw new dA("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i.newDocument=e,i}if("remove"===t.op)return i.removed=e,i.newDocument=null,i;if("_get"===t.op)return t.value=e,i;if(r)throw new dA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",o,t,e);return i}n||(e=aA(e));var s=(t.path||"").split("/"),l=e,c=1,p=s.length,d=void 0,u=void 0,h=void 0;for(h="function"==typeof r?r:vA;;){if((u=s[c])&&-1!=u.indexOf("~")&&(u=sA(u)),a&&"__proto__"==u)throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&void 0===d&&(void 0===l[u]?d=s.slice(0,c).join("/"):c==p-1&&(d=t.path),void 0!==d&&h(t,0,e,d)),c++,Array.isArray(l)){if("-"===u)u=l.length;else{if(r&&!oA(u))throw new dA("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",o,t,e);oA(u)&&(u=~~u)}if(c>=p){if(r&&"add"===t.op&&u>l.length)throw new dA("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",o,t,e);if(!1===(i=fA[t.op].call(t,l,u,e)).test)throw new dA("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}}else if(c>=p){if(!1===(i=hA[t.op].call(t,l,u,e)).test)throw new dA("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}if(l=l[u],r&&c<p&&(!l||"object"!=typeof l))throw new dA("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",o,t,e)}}function gA(e,t,r,n,a){if(void 0===n&&(n=!0),void 0===a&&(a=!0),r&&!Array.isArray(t))throw new dA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=aA(e));for(var o=new Array(t.length),i=0,s=t.length;i<s;i++)o[i]=yA(e,t[i],r,!0,a,i),e=o[i].newDocument;return o.newDocument=e,o}function vA(e,t,r,n){if("object"!=typeof e||null===e||Array.isArray(e))throw new dA("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!hA[e.op])throw new dA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if("string"!=typeof e.path)throw new dA("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new dA('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new dA("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new dA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&lA(e.value))throw new dA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r)if("add"==e.op){var a=e.path.split("/").length,o=n.split("/").length;if(a!==o+1&&a!==o)throw new dA("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==n)throw new dA("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if("move"===e.op||"copy"===e.op){var i=bA([{op:"_get",path:e.from,value:void 0}],r);if(i&&"OPERATION_PATH_UNRESOLVABLE"===i.name)throw new dA("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}function bA(e,t,r){try{if(!Array.isArray(e))throw new dA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)gA(aA(t),aA(e),r||!0);else{r=r||vA;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(e){if(e instanceof dA)return e;throw e}}function xA(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var r,n,a,o=Array.isArray(e),i=Array.isArray(t);if(o&&i){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!xA(e[r],t[r]))return!1;return!0}if(o!=i)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;0!=r--;)if(!xA(e[a=s[r]],t[a]))return!1;return!0}return e!=e&&t!=t}var wA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:dA,deepClone:uA,getValueByPointer:mA,applyOperation:yA,applyPatch:gA,applyReducer:function(e,t,r){var n=yA(e,t);if(!1===n.test)throw new dA("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:vA,validate:bA,_areEquals:xA}),$A=new WeakMap,kA=function(e){this.observers=new Map,this.obj=e},SA=function(e,t){this.callback=e,this.observer=t};function AA(e,t){void 0===t&&(t=!1);var r=$A.get(e.object);EA(r.value,e.object,e.patches,"",t),e.patches.length&&gA(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function EA(e,t,r,n,a){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var o=nA(t),i=nA(e),s=!1,l=i.length-1;l>=0;l--){var c=e[d=i[l]];if(!rA(t,d)||void 0===t[d]&&void 0!==c&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(a&&r.push({op:"test",path:n+"/"+iA(d),value:aA(c)}),r.push({op:"remove",path:n+"/"+iA(d)}),s=!0):(a&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var p=t[d];"object"==typeof c&&null!=c&&"object"==typeof p&&null!=p&&Array.isArray(c)===Array.isArray(p)?EA(c,p,r,n+"/"+iA(d),a):c!==p&&(a&&r.push({op:"test",path:n+"/"+iA(d),value:aA(c)}),r.push({op:"replace",path:n+"/"+iA(d),value:aA(p)}))}}if(s||o.length!=i.length)for(l=0;l<o.length;l++){var d;rA(e,d=o[l])||void 0===t[d]||r.push({op:"add",path:n+"/"+iA(d),value:aA(t[d])})}}}var OA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:function(e,t){t.unobserve()},observe:function(e,t){var r,n=function(e){return $A.get(e)}(e);if(n){var a=function(e,t){return e.observers.get(t)}(n,t);r=a&&a.observer}else n=new kA(e),$A.set(e,n);if(r)return r;if(r={},n.value=aA(e),t){r.callback=t,r.next=null;var o=function(){AA(r)},i=function(){clearTimeout(r.next),r.next=setTimeout(o)};"undefined"!=typeof window&&(window.addEventListener("mouseup",i),window.addEventListener("keyup",i),window.addEventListener("mousedown",i),window.addEventListener("keydown",i),window.addEventListener("change",i))}return r.patches=[],r.object=e,r.unobserve=function(){AA(r),clearTimeout(r.next),function(e,t){e.observers.delete(t.callback)}(n,r),"undefined"!=typeof window&&(window.removeEventListener("mouseup",i),window.removeEventListener("keyup",i),window.removeEventListener("mousedown",i),window.removeEventListener("keydown",i),window.removeEventListener("change",i))},n.observers.set(t,new SA(t,r)),r},generate:AA,compare:function(e,t,r){void 0===r&&(r=!1);var n=[];return EA(e,t,n,"",r),n}});Object.assign({},wA,OA,{JsonPatchError:pA,deepClone:aA,escapePathComponent:iA,unescapePathComponent:sA});var TA=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===CA}(e)}(e)},CA="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function jA(e,t){return!1!==t.clone&&t.isMergeableObject(e)?RA((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function _A(e,t,r){return e.concat(t).map((function(e){return jA(e,r)}))}function IA(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function PA(e,t){try{return t in e}catch(e){return!1}}function RA(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||_A,r.isMergeableObject=r.isMergeableObject||TA,r.cloneUnlessOtherwiseSpecified=jA;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&IA(e).forEach((function(t){n[t]=jA(e[t],r)})),IA(t).forEach((function(a){(function(e,t){return PA(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(PA(e,a)&&r.isMergeableObject(t[a])?n[a]=function(e,t){if(!t.customMerge)return RA;var r=t.customMerge(e);return"function"==typeof r?r:RA}(a,r)(e[a],t[a],r):n[a]=jA(t[a],r))})),n}(e,t,r):jA(t,r)}RA.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return RA(e,r,t)}),{})};var LA=RA,DA={add:function(e,t){return{op:"add",path:e,value:t}},replace:NA,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce((function(e,t){return void 0!==t&&e?e[t]:e}),e)},applyPatch:function(e,t,r){if(r=r||{},"merge"===(t=wd(wd({},t),{},{path:t.path&&FA(t.path)})).op){var n=ZA(e,t.path);Ld(n,t.value),gA(e,[NA(t.path,n)])}else if("mergeDeep"===t.op){var a=ZA(e,t.path),o=LA(a,t.value);e=gA(e,[NA(t.path,o)]).newDocument}else if("add"===t.op&&""===t.path&&WA(t.value)){var i=vb(t.value).reduce((function(e,r){return e.push({op:"add",path:"/".concat(FA(r)),value:t.value[r]}),e}),[]);gA(e,i)}else if("replace"===t.op&&""===t.path){var s=t.value;r.allowMetaPatches&&t.meta&&JA(t)&&(Array.isArray(t.value)||WA(t.value))&&(s=wd(wd({},s),t.meta)),e=s}else if(gA(e,[t]),r.allowMetaPatches&&t.meta&&JA(t)&&(Array.isArray(t.value)||WA(t.value))){var l=wd(wd({},ZA(e,t.path)),t.meta);gA(e,[NA(t.path,l)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:MA,fullyNormalizeArray:function(e){return HA(MA(UA(e)))},normalizeArray:UA,isPromise:function(e){return WA(e)&&VA(e.then)},forEachNew:function(e,t){try{return zA(e,BA,t)}catch(e){return e}},forEachNewPrimitive:function(e,t){try{return zA(e,qA,t)}catch(e){return e}},isJsonPatch:GA,isContextPatch:function(e){return YA(e)&&"context"===e.type},isPatch:YA,isMutation:KA,isAdditiveMutation:JA,isGenerator:function(e){return"[object GeneratorFunction]"===Object.prototype.toString.call(e)},isFunction:VA,isObject:WA,isError:function(e){return e instanceof Error}};function FA(e){return Array.isArray(e)?e.length<1?"":"/".concat(gb(e).call(e,(function(e){return(e+"").replace(/~/g,"~0").replace(/\//g,"~1")})).join("/")):e}function NA(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function zA(e,t,r){var n;return HA(MA(gb(n=Pb(e).call(e,JA)).call(n,(function(e){return t(e.value,r,e.path)}))||[]))}function qA(e,t,r){return r=r||[],Array.isArray(e)?gb(e).call(e,(function(e,n){return qA(e,t,kb(r).call(r,n))})):WA(e)?gb(n=vb(e)).call(n,(function(n){return qA(e[n],t,kb(r).call(r,n))})):t(e,r[r.length-1],r);var n}function BA(e,t,r){var n=[];if((r=r||[]).length>0){var a=t(e,r[r.length-1],r);a&&(n=kb(n).call(n,a))}if(Array.isArray(e)){var o=gb(e).call(e,(function(e,n){return BA(e,t,kb(r).call(r,n))}));o&&(n=kb(n).call(n,o))}else if(WA(e)){var i,s=gb(i=vb(e)).call(i,(function(n){return BA(e[n],t,kb(r).call(r,n))}));s&&(n=kb(n).call(n,s))}return MA(n)}function UA(e){return Array.isArray(e)?e:[e]}function MA(e){var t;return kb(t=[]).apply(t,oS(gb(e).call(e,(function(e){return Array.isArray(e)?MA(e):e}))))}function HA(e){return Pb(e).call(e,(function(e){return void 0!==e}))}function WA(e){return e&&"object"===Sf(e)}function VA(e){return e&&"function"==typeof e}function GA(e){if(YA(e)){var t=e.op;return"add"===t||"remove"===t||"replace"===t}return!1}function KA(e){return GA(e)||YA(e)&&"mutation"===e.type}function JA(e){return KA(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function YA(e){return e&&"object"===Sf(e)}function ZA(e,t){try{return mA(e,t)}catch(e){return console.error(e),{}}}var QA={exports:{}},XA=it((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})),eE=it,tE=Kt,rE=Lt,nE=XA,aE=Object.isExtensible,oE=eE((function(){aE(1)}))||nE?function(e){return!!tE(e)&&(!nE||"ArrayBuffer"!=rE(e))&&(!aE||aE(e))}:aE,iE=!it((function(){return Object.isExtensible(Object.preventExtensions({}))})),sE=xa,lE=vt,cE=Na,pE=Kt,dE=Mr,uE=Wn.f,hE=qo,fE=Mo,mE=oE,yE=iE,gE=!1,vE=Kr("meta"),bE=0,xE=function(e){uE(e,vE,{value:{objectID:"O"+bE++,weakData:{}}})},wE=QA.exports={enable:function(){wE.enable=function(){},gE=!0;var e=hE.f,t=lE([].splice),r={};r[vE]=1,e(r).length&&(hE.f=function(r){for(var n=e(r),a=0,o=n.length;a<o;a++)if(n[a]===vE){t(n,a,1);break}return n},sE({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:fE.f}))},fastKey:function(e,t){if(!pE(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!dE(e,vE)){if(!mE(e))return"F";if(!t)return"E";xE(e)}return e[vE].objectID},getWeakData:function(e,t){if(!dE(e,vE)){if(!mE(e))return!0;if(!t)return!1;xE(e)}return e[vE].weakData},onFreeze:function(e){return yE&&gE&&mE(e)&&!dE(e,vE)&&xE(e),e}};cE[vE]=!0;var $E=xa,kE=ot,SE=QA.exports,AE=it,EE=la,OE=Jf,TE=Om,CE=bt,jE=Kt,_E=Si,IE=Wn.f,PE=Ts.forEach,RE=wt,LE=Xi.set,DE=Xi.getterFor,FE=vt,NE=xm,zE=QA.exports.getWeakData,qE=Zn,BE=Kt,UE=Om,ME=Jf,HE=Mr,WE=Xi.set,VE=Xi.getterFor,GE=Ts.find,KE=Ts.findIndex,JE=FE([].splice),YE=0,ZE=function(e){return e.frozen||(e.frozen=new QE)},QE=function(){this.entries=[]},XE=function(e,t){return GE(e.entries,(function(e){return e[0]===t}))};QE.prototype={get:function(e){var t=XE(this,e);if(t)return t[1]},has:function(e){return!!XE(this,e)},set:function(e,t){var r=XE(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=KE(this.entries,(function(t){return t[0]===e}));return~t&&JE(this.entries,t,1),!!~t}};var eO,tO={getConstructor:function(e,t,r,n){var a=e((function(e,a){UE(e,o),WE(e,{type:t,id:YE++,frozen:void 0}),null!=a&&ME(a,e[n],{that:e,AS_ENTRIES:r})})),o=a.prototype,i=VE(t),s=function(e,t,r){var n=i(e),a=zE(qE(t),!0);return!0===a?ZE(n).set(t,r):a[n.id]=r,e};return NE(o,{delete:function(e){var t=i(this);if(!BE(e))return!1;var r=zE(e);return!0===r?ZE(t).delete(e):r&&HE(r,t.id)&&delete r[t.id]},has:function(e){var t=i(this);if(!BE(e))return!1;var r=zE(e);return!0===r?ZE(t).has(e):r&&HE(r,t.id)}}),NE(o,r?{get:function(e){var t=i(this);if(BE(e)){var r=zE(e);return!0===r?ZE(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return s(this,e,t)}}:{add:function(e){return s(this,e,!0)}}),a}},rO=ot,nO=vt,aO=xm,oO=QA.exports,iO=tO,sO=Kt,lO=oE,cO=Xi.enforce,pO=Li,dO=!rO.ActiveXObject&&"ActiveXObject"in rO,uO=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},hO=function(e,t,r){var n,a=-1!==e.indexOf("Map"),o=-1!==e.indexOf("Weak"),i=a?"set":"add",s=kE[e],l=s&&s.prototype,c={};if(RE&&CE(s)&&(o||l.forEach&&!AE((function(){(new s).entries().next()})))){var p=(n=t((function(t,r){LE(TE(t,p),{type:e,collection:new s}),null!=r&&OE(r,t[i],{that:t,AS_ENTRIES:a})}))).prototype,d=DE(e);PE(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(e){var t="add"==e||"set"==e;!(e in l)||o&&"clear"==e||EE(p,e,(function(r,n){var a=d(this).collection;if(!t&&o&&!jE(r))return"get"==e&&void 0;var i=a[e](0===r?0:r,n);return t?this:i}))})),o||IE(p,"size",{configurable:!0,get:function(){return d(this).collection.size}})}else n=r.getConstructor(t,e,a,i),SE.enable();return _E(n,e,!1,!0),c[e]=n,$E({global:!0,forced:!0},c),o||r.setStrong(n,e,a),n}("WeakMap",uO,iO);if(pO&&dO){eO=iO.getConstructor(uO,"WeakMap",!0),oO.enable();var fO=hO.prototype,mO=nO(fO.delete),yO=nO(fO.has),gO=nO(fO.get),vO=nO(fO.set);aO(fO,{delete:function(e){if(sO(e)&&!lO(e)){var t=cO(this);return t.frozen||(t.frozen=new eO),mO(this,e)||t.frozen.delete(e)}return mO(this,e)},has:function(e){if(sO(e)&&!lO(e)){var t=cO(this);return t.frozen||(t.frozen=new eO),yO(this,e)||t.frozen.has(e)}return yO(this,e)},get:function(e){if(sO(e)&&!lO(e)){var t=cO(this);return t.frozen||(t.frozen=new eO),yO(this,e)?gO(this,e):t.frozen.get(e)}return gO(this,e)},set:function(e,t){if(sO(e)&&!lO(e)){var r=cO(this);r.frozen||(r.frozen=new eO),yO(this,e)?vO(this,e,t):r.frozen.set(e,t)}else vO(this,e,t);return this}})}var bO=Jt.WeakMap,xO=it,wO=on("iterator"),$O=!xO((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[wO]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host})),kO=Xo,SO=Math.floor,AO=function(e,t){var r=e.length,n=SO(r/2);return r<8?EO(e,t):OO(e,AO(kO(e,0,n),t),AO(kO(e,n),t),t)},EO=function(e,t){for(var r,n,a=e.length,o=1;o<a;){for(n=o,r=e[o];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==o++&&(e[n]=r)}return e},OO=function(e,t,r,n){for(var a=t.length,o=r.length,i=0,s=0;i<a||s<o;)e[i+s]=i<a&&s<o?n(t[i],r[s])<=0?t[i++]:r[s++]:i<a?t[i++]:r[s++];return e},TO=xa,CO=ot,jO=er,_O=St,IO=vt,PO=$O,RO=li,LO=xm,DO=Si,FO=Qc,NO=Xi,zO=Om,qO=bt,BO=Mr,UO=Hn,MO=po,HO=Zn,WO=Kt,VO=fo,GO=zo,KO=_t,JO=ef,YO=fh,ZO=Lm,QO=AO,XO=on("iterator"),eT="URLSearchParams",tT="URLSearchParamsIterator",rT=NO.set,nT=NO.getterFor(eT),aT=NO.getterFor(tT),oT=jO("fetch"),iT=jO("Request"),sT=jO("Headers"),lT=iT&&iT.prototype,cT=sT&&sT.prototype,pT=CO.RegExp,dT=CO.TypeError,uT=CO.decodeURIComponent,hT=CO.encodeURIComponent,fT=IO("".charAt),mT=IO([].join),yT=IO([].push),gT=IO("".replace),vT=IO([].shift),bT=IO([].splice),xT=IO("".split),wT=IO("".slice),$T=/\+/g,kT=Array(4),ST=function(e){return kT[e-1]||(kT[e-1]=pT("((?:%[\\da-f]{2}){"+e+"})","gi"))},AT=function(e){try{return uT(e)}catch(t){return e}},ET=function(e){var t=gT(e,$T," "),r=4;try{return uT(t)}catch(e){for(;r;)t=gT(t,ST(r--),AT);return t}},OT=/[!'()~]|%20/g,TT={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},CT=function(e){return TT[e]},jT=function(e){return gT(hT(e),OT,CT)},_T=FO((function(e,t){rT(this,{type:tT,iterator:JO(nT(e).entries),kind:t})}),"Iterator",(function(){var e=aT(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),IT=function(e){this.entries=[],this.url=null,void 0!==e&&(WO(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===fT(e,0)?wT(e,1):e:VO(e)))};IT.prototype={type:eT,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,o,i,s,l=YO(e);if(l)for(r=(t=JO(e,l)).next;!(n=_O(r,t)).done;){if(o=(a=JO(HO(n.value))).next,(i=_O(o,a)).done||(s=_O(o,a)).done||!_O(o,a).done)throw dT("Expected sequence with length 2");yT(this.entries,{key:VO(i.value),value:VO(s.value)})}else for(var c in e)BO(e,c)&&yT(this.entries,{key:c,value:VO(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=xT(e,"&"),a=0;a<n.length;)(t=n[a++]).length&&(r=xT(t,"="),yT(this.entries,{key:ET(vT(r)),value:ET(mT(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],yT(r,jT(e.key)+"="+jT(e.value));return mT(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var PT=function(){zO(this,RT),rT(this,new IT(arguments.length>0?arguments[0]:void 0))},RT=PT.prototype;if(LO(RT,{append:function(e,t){ZO(arguments.length,2);var r=nT(this);yT(r.entries,{key:VO(e),value:VO(t)}),r.updateURL()},delete:function(e){ZO(arguments.length,1);for(var t=nT(this),r=t.entries,n=VO(e),a=0;a<r.length;)r[a].key===n?bT(r,a,1):a++;t.updateURL()},get:function(e){ZO(arguments.length,1);for(var t=nT(this).entries,r=VO(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){ZO(arguments.length,1);for(var t=nT(this).entries,r=VO(e),n=[],a=0;a<t.length;a++)t[a].key===r&&yT(n,t[a].value);return n},has:function(e){ZO(arguments.length,1);for(var t=nT(this).entries,r=VO(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){ZO(arguments.length,1);for(var r,n=nT(this),a=n.entries,o=!1,i=VO(e),s=VO(t),l=0;l<a.length;l++)(r=a[l]).key===i&&(o?bT(a,l--,1):(o=!0,r.value=s));o||yT(a,{key:i,value:s}),n.updateURL()},sort:function(){var e=nT(this);QO(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,r=nT(this).entries,n=UO(e,arguments.length>1?arguments[1]:void 0),a=0;a<r.length;)n((t=r[a++]).value,t.key,this)},keys:function(){return new _T(this,"keys")},values:function(){return new _T(this,"values")},entries:function(){return new _T(this,"entries")}},{enumerable:!0}),RO(RT,XO,RT.entries,{name:"entries"}),RO(RT,"toString",(function(){return nT(this).serialize()}),{enumerable:!0}),DO(PT,eT),TO({global:!0,forced:!PO},{URLSearchParams:PT}),!PO&&qO(sT)){var LT=IO(cT.has),DT=IO(cT.set),FT=function(e){if(WO(e)){var t,r=e.body;if(MO(r)===eT)return t=e.headers?new sT(e.headers):new sT,LT(t,"content-type")||DT(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),GO(e,{body:KO(0,VO(r)),headers:KO(0,t)})}return e};if(qO(oT)&&TO({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return oT(e,arguments.length>1?FT(arguments[1]):{})}}),qO(iT)){var NT=function(e){return zO(this,lT),new iT(e,arguments.length>1?FT(arguments[1]):{})};lT.constructor=NT,NT.prototype=lT,TO({global:!0,forced:!0},{Request:NT})}}var zT=Jt.URLSearchParams;function qT(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this.message=r[0],t&&t.apply(this,r)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var BT={exports:{}},UT=BT.exports=function(e){return new MT(e)};function MT(e){this.value=e}function HT(e,t,r){var n=[],a=[],o=!0;return function e(i){var s=r?WT(i):i,l={},c=!0,p={node:s,node_:i,path:[].concat(n),parent:a[a.length-1],parents:a,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(c=!1)},delete:function(e){delete p.parent.node[p.key],e&&(c=!1)},remove:function(e){KT(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(c=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){o=!1},block:function(){c=!1}};if(!o)return p;function d(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=VT(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<a.length;e++)if(a[e].node_===i){p.circular=a[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}d();var u=t.call(p,p.node);return void 0!==u&&p.update&&p.update(u),l.before&&l.before.call(p,p.node),c?("object"!=typeof p.node||null===p.node||p.circular||(a.push(p),d(),JT(p.keys,(function(t,a){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var o=e(p.node[t]);r&&YT.call(p.node,t)&&(p.node[t]=o.node),o.isLast=a==p.keys.length-1,o.isFirst=0==a,l.post&&l.post.call(p,o),n.pop()})),a.pop()),l.after&&l.after.call(p,p.node),p):p}(e).node}function WT(e){if("object"==typeof e&&null!==e){var t;if(KT(e))t=[];else if("[object Date]"===GT(e))t=new Date(e.getTime?e.getTime():e);else if(function(e){return"[object RegExp]"===GT(e)}(e))t=new RegExp(e);else if(function(e){return"[object Error]"===GT(e)}(e))t={message:e.message};else if(function(e){return"[object Boolean]"===GT(e)}(e))t=new Boolean(e);else if(function(e){return"[object Number]"===GT(e)}(e))t=new Number(e);else if(function(e){return"[object String]"===GT(e)}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return JT(VT(e),(function(r){t[r]=e[r]})),t}return e}MT.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!YT.call(t,n)){t=void 0;break}t=t[n]}return t},MT.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!YT.call(t,n))return!1;t=t[n]}return!0},MT.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var a=e[n];YT.call(r,a)||(r[a]={}),r=r[a]}return r[e[n]]=t,t},MT.prototype.map=function(e){return HT(this.value,e,!0)},MT.prototype.forEach=function(e){return this.value=HT(this.value,e,!1),this.value},MT.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach((function(t){this.isRoot&&r||(n=e.call(this,n,t))})),n},MT.prototype.paths=function(){var e=[];return this.forEach((function(t){e.push(this.path)})),e},MT.prototype.nodes=function(){var e=[];return this.forEach((function(t){e.push(this.node)})),e},MT.prototype.clone=function(){var e=[],t=[];return function r(n){for(var a=0;a<e.length;a++)if(e[a]===n)return t[a];if("object"==typeof n&&null!==n){var o=WT(n);return e.push(n),t.push(o),JT(VT(n),(function(e){o[e]=r(n[e])})),e.pop(),t.pop(),o}return n}(this.value)};var VT=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function GT(e){return Object.prototype.toString.call(e)}var KT=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},JT=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};JT(VT(MT.prototype),(function(e){UT[e]=function(t){var r=[].slice.call(arguments,1),n=new MT(t);return n[e].apply(n,r)}}));var YT=Object.hasOwnProperty||function(e,t){return t in e},ZT=BT.exports,QT=["properties"],XT=["properties"],eC=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],tC=["schema/example","items/example"];function rC(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return QT.indexOf(t)>-1&&-1===XT.indexOf(r)||eC.indexOf(n)>-1||tC.some((function(e){return n.indexOf(e)>-1}))}function nC(e,t){var r,n=Af(e.split("#"),2),a=n[0],o=n[1],i=au.resolve(a||"",t||"");return o?kb(r="".concat(i,"#")).call(r,o):i}var aC="application/json, application/yaml",oC=/^([a-z]+:\/\/|\/\/)/i,iC=qT("JSONRefError",(function(e,t,r){this.originalError=r,Ld(this,t||{})})),sC={},lC=new bO,cC=[function(e){return"paths"===e[0]&&"responses"===e[3]&&"examples"===e[5]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"example"===e[7]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"example"===e[4]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"example"===e[5]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"examples"===e[4]&&"value"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"examples"===e[5]&&"value"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[4]&&"example"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]}],pC=Ld({key:"$ref",plugin:function(e,t,r,n){var a=n.getInstance(),o=iS(r).call(r,0,-1);if(!rC(o)&&!function(e){return cC.some((function(t){return t(e)}))}(o)){var i=n.getContext(r).baseDoc;if("string"!=typeof e)return new iC("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:i,fullPath:r});var s,l,c,p=hC(e),d=p[0],u=p[1]||"";try{s=i||d?dC(d,i):null}catch(t){return uC(t,{pointer:u,$ref:e,basePath:s,fullPath:r})}if(function(e,t,r,n){var a,o,i=lC.get(n);i||(i={},lC.set(n,i));var s=function(e){return 0===e.length?"":"/".concat(gb(e).call(e,bC).join("/"))}(r),l=kb(a="".concat(t||"<specmap-base>","#")).call(a,e),c=s.replace(/allOf\/\d+\/?/g,"");if(t===n.contextTree.get([]).baseDoc&&xC(c,e))return!0;var p="";if(r.some((function(e){var t;return p=kb(t="".concat(p,"/")).call(t,bC(e)),i[p]&&i[p].some((function(e){return xC(e,l)||xC(l,e)}))})))return!0;i[c]=kb(o=i[c]||[]).call(o,l)}(u,s,o,n)&&!a.useCircularStructures){var h=nC(e,s);return e===h?null:DA.replace(r,h)}if(null==s?(c=gC(u),void 0===(l=n.get(c))&&(l=new iC("Could not resolve reference: ".concat(e),{pointer:u,$ref:e,baseDoc:i,fullPath:r}))):l=null!=(l=fC(s,u)).__value?l.__value:l.catch((function(t){throw uC(t,{pointer:u,$ref:e,baseDoc:i,fullPath:r})})),l instanceof Error)return[DA.remove(r),l];var f=nC(e,s),m=DA.replace(o,l,{$$ref:f});if(s&&s!==i)return[m,DA.context(o,{baseDoc:s})];try{if(!function(e,t){var r=[e];return t.path.reduce((function(e,t){return r.push(e[t]),e[t]}),e),function e(t){return DA.isObject(t)&&(r.indexOf(t)>=0||vb(t).some((function(r){return e(t[r])})))}(t.value)}(n.state,m)||a.useCircularStructures)return m}catch(e){return null}}}},{docCache:sC,absoluteify:dC,clearCache:function(e){void 0!==e?delete sC[e]:vb(sC).forEach((function(e){delete sC[e]}))},JSONRefError:iC,wrapError:uC,getDoc:mC,split:hC,extractFromDoc:fC,fetchJSON:function(e){return fetch(e,{headers:{Accept:aC},loadSpec:!0}).then((function(e){return e.text()})).then((function(e){return eS.load(e)}))},extract:yC,jsonPointerToArray:gC,unescapeJsonPointerToken:vC});function dC(e,t){if(!oC.test(e)){var r;if(!t)throw new iC(kb(r="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(r,t,"'"));return au.resolve(t,e)}return e}function uC(e,t){var r,n;return r=e&&e.response&&e.response.body?kb(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):e.message,new iC("Could not resolve reference: ".concat(r),t,e)}function hC(e){return(e+"").split("#")}function fC(e,t){var r=sC[e];if(r&&!DA.isPromise(r))try{var n=yC(t,r);return Ld(DS.resolve(n),{__value:n})}catch(e){return DS.reject(e)}return mC(e).then((function(e){return yC(t,e)}))}function mC(e){var t=sC[e];return t?DA.isPromise(t)?t:DS.resolve(t):(sC[e]=pC.fetchJSON(e).then((function(t){return sC[e]=t,t})),sC[e])}function yC(e,t){var r=gC(e);if(r.length<1)return t;var n=DA.getIn(t,r);if(void 0===n)throw new iC("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return n}function gC(e){var t;if("string"!=typeof e)throw new TypeError("Expected a string, got a ".concat(Sf(e)));return"/"===e[0]&&(e=e.substr(1)),""===e?[]:gb(t=e.split("/")).call(t,vC)}function vC(e){return"string"!=typeof e?e:new zT("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function bC(e){var t,r=new zT([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return iS(t=r.toString()).call(t,1)}function xC(e,t){if(function(e){return!e||"/"===e||"#"===e}(t))return!0;var r=e.charAt(t.length),n=iS(t).call(t,-1);return 0===e.indexOf(t)&&(!r||"/"===r||"#"===r)&&"#"!==n}var wC={key:"allOf",plugin:function(e,t,r,n,a){if(!a.meta||!a.meta.$$ref){var o=iS(r).call(r,0,-1);if(!rC(o)){if(!Array.isArray(e)){var i=new TypeError("allOf must be an array");return i.fullPath=r,i}var s=!1,l=a.value;if(o.forEach((function(e){l&&(l=l[e])})),l=wd({},l),0!==vb(l).length){delete l.allOf;var c,p,d=[];return d.push(n.replace(o,{})),e.forEach((function(e,t){if(!n.isObject(e)){if(s)return null;s=!0;var a=new TypeError("Elements in allOf must be objects");return a.fullPath=r,d.push(a)}d.push(n.mergeDeep(o,e));var i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.specmap,a=r.getBaseUrlForNodePath,o=void 0===a?function(e){var r;return n.getContext(kb(r=[]).call(r,oS(t),oS(e))).baseDoc}:a,i=r.targetKeys,s=void 0===i?["$ref","$$ref"]:i,l=[];return ZT(e).forEach((function(){if(Dv(s).call(s,this.key)&&"string"==typeof this.node){var e=this.path,r=kb(t).call(t,this.path),a=nC(this.node,o(e));l.push(n.replace(r,a))}})),l}(e,iS(r).call(r,0,-1),{getBaseUrlForNodePath:function(e){var a;return n.getContext(kb(a=[]).call(a,oS(r),[t],oS(e))).baseDoc},specmap:n});d.push.apply(d,oS(i))})),l.example&&d.push(n.remove(kb(c=[]).call(c,o,"example"))),d.push(n.mergeDeep(o,l)),l.$$ref||d.push(n.remove(kb(p=[]).call(p,o,"$$ref"))),d}}}}},$C={key:"parameters",plugin:function(e,t,r,n){if(Array.isArray(e)&&e.length){var a=Ld([],e),o=iS(r).call(r,0,-1),i=wd({},DA.getIn(n.spec,o));return e.forEach((function(e,t){try{a[t].default=n.parameterMacro(i,e)}catch(e){var o=new Error(e);return o.fullPath=r,o}})),DA.replace(r,a)}return DA.replace(r,e)}},kC={key:"properties",plugin:function(e,t,r,n){var a=wd({},e);for(var o in e)try{a[o].default=n.modelPropertyMacro(a[o])}catch(e){var i=new Error(e);return i.fullPath=r,i}return DA.replace(r,a)}},SC=function(){function e(t){ES(this,e),this.root=AC(t||{})}return TS(e,[{key:"set",value:function(e,t){var r=this.getParent(e,!0);if(r){var n=e[e.length-1],a=r.children;a[n]?EC(a[n],t,r):a[n]=AC(t,r)}else EC(this.root,t,null)}},{key:"get",value:function(e){if((e=e||[]).length<1)return this.root.value;for(var t,r,n=this.root,a=0;a<e.length&&(r=e[a],(t=n.children)[r]);a+=1)n=t[r];return n&&n.protoValue}},{key:"getParent",value:function(e,t){return!e||e.length<1?null:e.length<2?this.root:iS(e).call(e,0,-1).reduce((function(e,r){if(!e)return e;var n=e.children;return!n[r]&&t&&(n[r]=AC(null,e)),n[r]}),this.root)}}]),e}();function AC(e,t){return EC({children:{}},e,t)}function EC(e,t,r){return e.value=t||{},e.protoValue=r?wd(wd({},r.protoValue),e.value):e.value,vb(e.children).forEach((function(t){var r=e.children[t];e.children[t]=EC(r,r.value,e)})),e}var OC=function(){},TC=function(){function e(t){var r,n,a=this;ES(this,e),Ld(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new SC,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:Ld(Object.create(this),DA,{getInstance:function(){return a}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=Pb(r=gb(n=this.plugins).call(n,this.wrapPlugin.bind(this))).call(r,DA.isFunction),this.patches.push(DA.add([],this.spec)),this.patches.push(DA.context([],this.context)),this.updatePatches(this.patches)}return TS(e,[{key:"debug",value:function(e){if(this.debugLevel===e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];(t=console).log.apply(t,n)}}},{key:"verbose",value:function(e){if("verbose"===this.debugLevel){for(var t,r,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];(t=console).log.apply(t,kb(r=["[".concat(e,"]   ")]).call(r,a))}}},{key:"wrapPlugin",value:function(e,t){var r,n,a,o=this.pathDiscriminator,i=null;return e[this.pluginProp]?(i=e,r=e[this.pluginProp]):DA.isFunction(e)?r=e:DA.isObject(e)&&(n=e,a=function(e,t){return!Array.isArray(e)||e.every((function(e,r){return e===t[r]}))},r=wv.mark((function e(t,r){var i,s,l,c,p,d;return wv.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=function(e,t,l){var c,p,u,h,f,m,y,g,v,b,x,w,$;return wv.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(DA.isObject(e)){i.next=6;break}if(n.key!==t[t.length-1]){i.next=4;break}return i.next=4,n.plugin(e,n.key,t,r);case 4:i.next=30;break;case 6:c=t.length-1,p=t[c],u=t.indexOf("properties"),h="properties"===p&&c===u,f=r.allowMetaPatches&&s[e.$$ref],m=0,y=vb(e);case 12:if(!(m<y.length)){i.next=30;break}if(g=y[m],v=e[g],b=kb(t).call(t,g),x=DA.isObject(v),w=e.$$ref,f){i.next=22;break}if(!x){i.next=22;break}return r.allowMetaPatches&&w&&(s[w]=!0),i.delegateYield(d(v,b,l),"t0",22);case 22:if(h||g!==n.key){i.next=27;break}if($=a(o,t),o&&!$){i.next=27;break}return i.next=27,n.plugin(v,g,b,r,l);case 27:m++,i.next=12;break;case 30:case"end":return i.stop()}}),i)},i=wv.mark(d),s={},l=$f(Pb(t).call(t,DA.isAdditiveMutation)),e.prev=4,l.s();case 6:if((c=l.n()).done){e.next=11;break}return p=c.value,e.delegateYield(d(p.value,p.path,p),"t0",9);case 9:e.next=6;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),l.e(e.t1);case 16:return e.prev=16,l.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])}))),Ld(r.bind(i),{pluginName:e.name||t,isGenerator:DA.isGenerator(r)})}},{key:"nextPlugin",value:function(){var e,t=this;return function(e){var t=e.find;return e===LS||PS(LS,e)&&t===LS.find?RS:t}(e=this.wrappedPlugins).call(e,(function(e){return t.getMutationsForPlugin(e).length>0}))}},{key:"nextPromisedPatch",value:function(){var e;if(this.promisedPatches.length>0)return DS.race(gb(e=this.promisedPatches).call(e,(function(e){return e.value})))}},{key:"getPluginHistory",value:function(e){var t=this.constructor.getPluginName(e);return this.pluginHistory[t]||[]}},{key:"getPluginRunCount",value:function(e){return this.getPluginHistory(e).length}},{key:"getPluginHistoryTip",value:function(e){var t=this.getPluginHistory(e);return t&&t[t.length-1]||{}}},{key:"getPluginMutationIndex",value:function(e){var t=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof t?-1:t}},{key:"updatePluginHistory",value:function(e,t){var r=this.constructor.getPluginName(e);this.pluginHistory[r]=this.pluginHistory[r]||[],this.pluginHistory[r].push(t)}},{key:"updatePatches",value:function(e){var t=this;DA.normalizeArray(e).forEach((function(e){if(e instanceof Error)t.errors.push(e);else try{if(!DA.isObject(e))return void t.debug("updatePatches","Got a non-object patch",e);if(t.showDebug&&t.allPatches.push(e),DA.isPromise(e.value))return t.promisedPatches.push(e),void t.promisedPatchThen(e);if(DA.isContextPatch(e))return void t.setContext(e.path,e.value);if(DA.isMutation(e))return void t.updateMutations(e)}catch(e){console.error(e),t.errors.push(e)}}))}},{key:"updateMutations",value:function(e){"object"===Sf(e.value)&&!Array.isArray(e.value)&&this.allowMetaPatches&&(e.value=wd({},e.value));var t=DA.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches});t&&(this.mutations.push(e),this.state=t)}},{key:"removePromisedPatch",value:function(e){var t,r=this.promisedPatches.indexOf(e);r<0?this.debug("Tried to remove a promisedPatch that isn't there!"):function(e){var t=e.splice;return e===XS||ZS(XS,e)&&t===XS.splice?QS:t}(t=this.promisedPatches).call(t,r,1)}},{key:"promisedPatchThen",value:function(e){var t=this;return e.value=e.value.then((function(r){var n=wd(wd({},e),{},{value:r});t.removePromisedPatch(e),t.updatePatches(n)})).catch((function(r){t.removePromisedPatch(e),t.updatePatches(r)})),e.value}},{key:"getMutations",value:function(e,t){var r;return e=e||0,"number"!=typeof t&&(t=this.mutations.length),iS(r=this.mutations).call(r,e,t)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(e){var t=this.getPluginMutationIndex(e);return this.getMutations(t+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(e){return DA.getIn(this.state,e)}},{key:"_getContext",value:function(e){return this.contextTree.get(e)}},{key:"setContext",value:function(e,t){return this.contextTree.set(e,t)}},{key:"_hasRun",value:function(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}},{key:"dispatch",value:function(){var e,t=this,r=this,n=this.nextPlugin();if(!n){var a=this.nextPromisedPatch();if(a)return a.then((function(){return t.dispatch()})).catch((function(){return t.dispatch()}));var o={spec:this.state,errors:this.errors};return this.showDebug&&(o.patches=this.allPatches),DS.resolve(o)}if(r.pluginCount=r.pluginCount||{},r.pluginCount[n]=(r.pluginCount[n]||0)+1,r.pluginCount[n]>100)return DS.resolve({spec:r.state,errors:kb(e=r.errors).call(e,new Error("We've reached a hard limit of ".concat(100," plugin runs")))});if(n!==this.currentPlugin&&this.promisedPatches.length){var i,s=gb(i=this.promisedPatches).call(i,(function(e){return e.value}));return DS.all(gb(s).call(s,(function(e){return e.then(OC,OC)}))).then((function(){return t.dispatch()}))}return function(){r.currentPlugin=n;var e=r.getCurrentMutations(),t=r.mutations.length-1;try{if(n.isGenerator){var a,o=$f(n(e,r.getLib()));try{for(o.s();!(a=o.n()).done;)l(a.value)}catch(e){o.e(e)}finally{o.f()}}else l(n(e,r.getLib()))}catch(e){console.error(e),l([Ld(Object.create(e),{plugin:n})])}finally{r.updatePluginHistory(n,{mutationIndex:t})}return r.dispatch()}();function l(e){e&&(e=DA.fullyNormalizeArray(e),r.updatePatches(e,n))}}}],[{key:"getPluginName",value:function(e){return e.pluginName}},{key:"getPatchesOfType",value:function(e,t){return Pb(e).call(e,t)}}]),e}(),CC={refs:pC,allOf:wC,parameters:$C,properties:kC},jC=function(e){return String.prototype.toLowerCase.call(e)},_C=function(e){return e.replace(/[^\w]/gi,"_")};function IC(e){var t=e.openapi;return!!t&&nu(t).call(t,"3")}function PC(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).v2OperationIdCompatibilityMode;return e&&"object"===Sf(e)?(e.operationId||"").replace(/\s/g,"").length?_C(e.operationId):function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.v2OperationIdCompatibilityMode;if(a){var o,i,s=kb(o="".concat(t.toLowerCase(),"_")).call(o,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return(s=s||kb(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return kb(r="".concat(jC(t))).call(r,_C(e))}(t,r,{v2OperationIdCompatibilityMode:n}):null}function RC(e,t){var r;return kb(r="".concat(jC(t),"-")).call(r,e)}function LC(e,t,r){if(!e||"object"!==Sf(e)||!e.paths||"object"!==Sf(e.paths))return null;var n=e.paths;for(var a in n)for(var o in n[a])if("PARAMETERS"!==o.toUpperCase()){var i=n[a][o];if(i&&"object"===Sf(i)){var s={spec:e,pathName:a,method:o.toUpperCase(),operation:i},l=t(s);if(r&&l)return s}}}function DC(e){var t=e.spec,r=t.paths,n={};if(!r||t.$$normalized)return e;for(var a in r){var o,i=r[a];if(null!=i&&Dv(o=["object","function"]).call(o,Sf(i))){var s=i.parameters,l=function(e){var r,o=i[e];if(null==o||!Dv(r=["object","function"]).call(r,Sf(o)))return"continue";var l=PC(o,a,e);if(l){n[l]?n[l].push(o):n[l]=[o];var c=n[l];if(c.length>1)c.forEach((function(e,t){var r;e.__originalOperationId=e.__originalOperationId||e.operationId,e.operationId=kb(r="".concat(l)).call(r,t+1)}));else if(void 0!==o.operationId){var p=c[0];p.__originalOperationId=p.__originalOperationId||o.operationId,p.operationId=l}}if("parameters"!==e){var d=[],u={};for(var h in t)"produces"!==h&&"consumes"!==h&&"security"!==h||(u[h]=t[h],d.push(u));if(s&&(u.parameters=s,d.push(u)),d.length){var f,m=$f(d);try{for(m.s();!(f=m.n()).done;){var y=f.value;for(var g in y)if(o[g]){if("parameters"===g){var v,b=$f(y[g]);try{var x=function(){var e=v.value;o[g].some((function(t){return t.name&&t.name===e.name||t.$ref&&t.$ref===e.$ref||t.$$ref&&t.$$ref===e.$$ref||t===e}))||o[g].push(e)};for(b.s();!(v=b.n()).done;)x()}catch(e){b.e(e)}finally{b.f()}}}else o[g]=y[g]}}catch(e){m.e(e)}finally{m.f()}}}};for(var c in i)l(c)}}return t.$$normalized=!0,e}function FC(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.requestInterceptor,n=t.responseInterceptor,a=e.withCredentials?"include":"same-origin";return function(t){return e({url:t,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:aC},credentials:a}).then((function(e){return e.body}))}}function NC(e){var t=e.fetch,r=e.spec,n=e.url,a=e.mode,o=e.allowMetaPatches,i=void 0===o||o,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,p=e.requestInterceptor,d=e.responseInterceptor,u=e.skipNormalization,h=e.useCircularStructures,f=e.http,m=e.baseDoc;return m=m||n,f=t||f||hS,r?y(r):FC(f,{requestInterceptor:p,responseInterceptor:d})(m).then(y);function y(e){m&&(CC.refs.docCache[m]=e),CC.refs.fetchJSON=FC(f,{requestInterceptor:p,responseInterceptor:d});var t,r=[CC.refs];return"function"==typeof c&&r.push(CC.parameters),"function"==typeof l&&r.push(CC.properties),"strict"!==a&&r.push(CC.allOf),(t={spec:e,context:{baseDoc:m},plugins:r,allowMetaPatches:i,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:h},new TC(t).dispatch()).then(u?function(){var e=bv(wv.mark((function e(t){return wv.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():DC)}}var zC=Array.isArray,qC="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,BC="object"==typeof self&&self&&self.Object===Object&&self,UC=qC||BC||Function("return this")(),MC=UC.Symbol,HC=MC,WC=Object.prototype,VC=WC.hasOwnProperty,GC=WC.toString,KC=HC?HC.toStringTag:void 0,JC=Object.prototype.toString,YC=function(e){var t=VC.call(e,KC),r=e[KC];try{e[KC]=void 0;var n=!0}catch(e){}var a=GC.call(e);return n&&(t?e[KC]=r:delete e[KC]),a},ZC=MC?MC.toStringTag:void 0,QC=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ZC&&ZC in Object(e)?YC(e):function(e){return JC.call(e)}(e)},XC=QC,ej=function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==XC(e)},tj=zC,rj=ej,nj=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,aj=/^\w*$/,oj=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ij=QC,sj=oj,lj=UC["__core-js_shared__"],cj=function(){var e=/[^.]+$/.exec(lj&&lj.keys&&lj.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),pj=Function.prototype.toString,dj=function(e){if(!sj(e))return!1;var t=ij(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},uj=function(e){return!!cj&&cj in e},hj=oj,fj=/^\[object .+?Constructor\]$/,mj=Function.prototype,yj=Object.prototype,gj=mj.toString,vj=yj.hasOwnProperty,bj=RegExp("^"+gj.call(vj).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xj=function(e){return!(!hj(e)||uj(e))&&(dj(e)?bj:fj).test(function(e){if(null!=e){try{return pj.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))},wj=function(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xj(r)?r:void 0},$j=wj(Object,"create"),kj=$j,Sj=$j,Aj=Object.prototype.hasOwnProperty,Ej=$j,Oj=Object.prototype.hasOwnProperty,Tj=$j,Cj=function(){this.__data__=kj?kj(null):{},this.size=0},jj=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_j=function(e){var t=this.__data__;if(Sj){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Aj.call(t,e)?t[e]:void 0};function Ij(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ij.prototype.clear=Cj,Ij.prototype.delete=jj,Ij.prototype.get=_j,Ij.prototype.has=function(e){var t=this.__data__;return Ej?void 0!==t[e]:Oj.call(t,e)},Ij.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tj&&void 0===t?"__lodash_hash_undefined__":t,this};var Pj=Ij,Rj=function(e,t){return e===t||e!=e&&t!=t},Lj=function(e,t){for(var r=e.length;r--;)if(Rj(e[r][0],t))return r;return-1},Dj=Lj,Fj=Array.prototype.splice,Nj=Lj,zj=Lj,qj=Lj,Bj=function(){this.__data__=[],this.size=0};function Uj(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Uj.prototype.clear=Bj,Uj.prototype.delete=function(e){var t=this.__data__,r=Dj(t,e);return!(r<0||(r==t.length-1?t.pop():Fj.call(t,r,1),--this.size,0))},Uj.prototype.get=function(e){var t=this.__data__,r=Nj(t,e);return r<0?void 0:t[r][1]},Uj.prototype.has=function(e){return zj(this.__data__,e)>-1},Uj.prototype.set=function(e,t){var r=this.__data__,n=qj(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var Mj=Uj,Hj=wj(UC,"Map"),Wj=Pj,Vj=Mj,Gj=Hj,Kj=function(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map},Jj=Kj,Yj=Kj,Zj=Kj,Qj=Kj;function Xj(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xj.prototype.clear=function(){this.size=0,this.__data__={hash:new Wj,map:new(Gj||Vj),string:new Wj}},Xj.prototype.delete=function(e){var t=Jj(this,e).delete(e);return this.size-=t?1:0,t},Xj.prototype.get=function(e){return Yj(this,e).get(e)},Xj.prototype.has=function(e){return Zj(this,e).has(e)},Xj.prototype.set=function(e,t){var r=Qj(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};var e_=Xj;function t_(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(t_.Cache||e_),r}t_.Cache=e_;var r_=t_,n_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a_=/\\(\\)?/g,o_=function(e){var t=r_((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(n_,(function(e,r,n,a){t.push(n?a.replace(a_,"$1"):r||e)})),t}),(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}(),i_=zC,s_=ej,l_=MC?MC.prototype:void 0,c_=l_?l_.toString:void 0,p_=function e(t){if("string"==typeof t)return t;if(i_(t))return function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}(t,e)+"";if(s_(t))return c_?c_.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},d_=zC,u_=function(e,t){if(tj(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!rj(e))||aj.test(e)||!nj.test(e)||null!=t&&e in Object(t)},h_=o_,f_=ej,m_=function(e,t){return d_(e)?e:u_(e,t)?[e]:h_(function(e){return null==e?"":p_(e)}(e))},y_=function(e){if("string"==typeof e||f_(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},g_=function(e,t,r){var n=null==e?void 0:function(e,t){for(var r=0,n=(t=m_(t,e)).length;null!=e&&r<n;)e=e[y_(t[r++])];return r&&r==n?e:void 0}(e,t);return void 0===n?r:n};function v_(){return(v_=bv(wv.mark((function e(t,r){var n,a,o,i,s,l,c,p,d,u,h,f,m=arguments;return wv.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(n=m.length>2&&void 0!==m[2]?m[2]:{}).returnEntireTree,o=n.baseDoc,i=n.requestInterceptor,s=n.responseInterceptor,l=n.parameterMacro,c=n.modelPropertyMacro,p=n.useCircularStructures,d={pathDiscriminator:r,baseDoc:o,requestInterceptor:i,responseInterceptor:s,parameterMacro:l,modelPropertyMacro:c,useCircularStructures:p},u=DC({spec:t}),h=u.spec,e.next=6,NC(wd(wd({},d),{},{spec:h,allowMetaPatches:!0,skipNormalization:!0}));case 6:return f=e.sent,!a&&Array.isArray(r)&&r.length&&(f.spec=g_(f.spec,r)||null),e.abrupt("return",f);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b_=function(){return null},x_=function(e){var t=e.spec,r=e.cb,n=void 0===r?b_:r,a=e.defaultTag,o=void 0===a?"default":a,i=e.v2OperationIdCompatibilityMode,s={},l={};return LC(t,(function(e){var r,a=e.pathName,c=e.method,p=e.operation;(p.tags?(r=p.tags,Array.isArray(r)?r:[r]):[o]).forEach((function(e){if("string"==typeof e){l[e]=l[e]||{};var r,o=l[e],d=PC(p,a,c,{v2OperationIdCompatibilityMode:i}),u=n({spec:t,pathName:a,method:c,operation:p,operationId:d});if(s[d])s[d]+=1,o[kb(r="".concat(d)).call(r,s[d])]=u;else if(void 0!==o[d]){var h,f,m=s[d]||1;s[d]=m+1,o[kb(h="".concat(d)).call(h,s[d])]=u;var y=o[d];delete o[d],o[kb(f="".concat(d)).call(f,m)]=y}else o[d]=u}}))})),l},w_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,a=t.operationId;return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.requestInterceptor,s=e.responseInterceptor,l=e.userFetch;return e.execute(wd({spec:e.spec,requestInterceptor:i,responseInterceptor:s,userFetch:l,pathName:r,method:n,parameters:t,operationId:a},o))}}},$_=xa,k_=Fa.indexOf,S_=Fp,A_=vt([].indexOf),E_=!!A_&&1/A_([1],1,-0)<0,O_=S_("indexOf");$_({target:"Array",proto:!0,forced:E_||!O_},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return E_?A_(this,e,t)||0:k_(this,e,t)}});var T_=ec("Array").indexOf,C_=tr,j_=T_,__=Array.prototype,I_=function(e){var t=e.indexOf;return e===__||C_(__,e)&&t===__.indexOf?j_:t};var P_=function(e,t,r){var n=r||{},a=n.encode||D_;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!L_.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!L_.test(o))throw new TypeError("argument val is invalid");var i=e+"="+o;if(null!=n.maxAge){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!L_.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!L_.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){var l=n.expires;if(!function(e){return"[object Date]"===R_.call(e)||e instanceof Date}(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.priority)switch("string"==typeof n.priority?n.priority.toLowerCase():n.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i},R_=Object.prototype.toString,L_=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function D_(e){return encodeURIComponent(e)}function F_(e){return"[object Object]"===Object.prototype.toString.call(e)}function N_(e){var t,r;return!1!==F_(e)&&(void 0===(t=e.constructor)||!1!==F_(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}var z_={body:function(e){var t=e.req,r=e.value;t.body=r},header:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},void 0!==n&&(t.headers[r.name]=n)},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},!1===r&&"boolean"===n.type&&(r="false"),0===r&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&void 0!==r){var a=n.name;t.query[a]=t.query[a]||{},t.query[a].allowEmptyValue=!0}},path:function(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.split("{".concat(n.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,n=e.parameter;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function q_(e,t){return Dv(t).call(t,"application/json")?"string"==typeof e?e:db(e):e.toString()}var B_=["accept","authorization","content-type"],U_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",path:function(e){var t=e.req,r=e.value,n=e.parameter,a=n.name,o=n.style,i=n.explode,s=n.content;if(s){var l=vb(s)[0];t.url=t.url.split("{".concat(a,"}")).join(cS(q_(r,l),{escape:!0}))}else{var c=pS({key:n.name,value:r,style:o||"simple",explode:i||!1,escape:!0});t.url=t.url.split("{".concat(a,"}")).join(c)}},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},n.content){var a=vb(n.content)[0];t.query[n.name]=q_(r,a)}else if(!1===r&&(r="false"),0===r&&(r="0"),r){var o=n.style,i=n.explode,s=n.allowReserved;t.query[n.name]={value:r,serializationOption:{style:o,explode:i,allowReserved:s}}}else if(n.allowEmptyValue&&void 0!==r){var l=n.name;t.query[l]=t.query[l]||{},t.query[l].allowEmptyValue=!0}},header:function(e){var t=e.req,r=e.parameter,n=e.value;if(t.headers=t.headers||{},!(B_.indexOf(r.name.toLowerCase())>-1))if(r.content){var a=vb(r.content)[0];t.headers[r.name]=q_(n,a)}else void 0!==n&&(t.headers[r.name]=pS({key:r.name,value:n,style:r.style||"simple",explode:void 0!==r.explode&&r.explode,escape:!1}))},cookie:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{};var a=Sf(n);if(r.content){var o,i=vb(r.content)[0];t.headers.Cookie=kb(o="".concat(r.name,"=")).call(o,q_(n,i))}else if("undefined"!==a){var s="object"===a&&!Array.isArray(n)&&r.explode?"":"".concat(r.name,"=");t.headers.Cookie=s+pS({key:r.name,value:n,escape:!1,style:r.style||"form",explode:void 0!==r.explode&&r.explode})}}});xa({global:!0},{globalThis:ot});var M_=(void 0!==ot?ot:"undefined"!=typeof self?self:window).btoa;var H_=["http","fetch","spec","operationId","pathName","method","parameters","securities"],W_=function(e){return Array.isArray(e)?e:[]},V_=qT("OperationNotFoundError",(function(e,t,r){this.originalError=r,Ld(this,t||{})})),G_={buildRequest:K_};function K_(e){var t,r,n=e.spec,a=e.operationId,o=e.responseContentType,i=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,p=e.userFetch,d=e.server,u=e.serverVariables,h=e.http,f=e.signal,m=e.parameters,y=e.parameterBuilders,g=IC(n);y||(y=g?U_:z_);var v={url:"",credentials:h&&h.withCredentials?"include":"same-origin",headers:{},cookies:{}};f&&(v.signal=f),s&&(v.requestInterceptor=s),l&&(v.responseInterceptor=l),p&&(v.userFetch=p);var b=function(e,t){return e&&e.paths?function(e,t){return LC(e,t,!0)||null}(e,(function(e){var r=e.pathName,n=e.method,a=e.operation;if(!a||"object"!==Sf(a))return!1;var o=a.operationId;return[PC(a,r,n),RC(r,n),o].some((function(e){return e&&e===t}))})):null}(n,a);if(!b)throw new V_("Operation ".concat(a," not found"));var x=b.operation,w=void 0===x?{}:x,$=b.method,k=b.pathName;if(v.url+=Y_({spec:n,scheme:i,contextUrl:c,server:d,serverVariables:u,pathName:k,method:$}),!a)return delete v.cookies,v;v.url+=k,v.method="".concat($).toUpperCase(),m=m||{};var S=n.paths[k]||{};o&&(v.headers.accept=o);var A=function(e){var t={};e.forEach((function(e){t[e.in]||(t[e.in]={}),t[e.in][e.name]=e}));var r=[];return vb(t).forEach((function(e){vb(t[e]).forEach((function(n){r.push(t[e][n])}))})),r}(kb(t=kb(r=[]).call(r,W_(w.parameters))).call(t,W_(S.parameters)));A.forEach((function(e){var t,r,a=y[e.in];if("body"===e.in&&e.schema&&e.schema.properties&&(t=m),void 0===(t=e&&e.name&&m[e.name]))t=e&&e.name&&m[kb(r="".concat(e.in,".")).call(r,e.name)];else if(function(e,t){return Pb(t).call(t,(function(t){return t.name===e}))}(e.name,A).length>1){var o;console.warn(kb(o="Parameter '".concat(e.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(o,e.name,"' and the passed-in parameter values did not define an 'in' value."))}if(null!==t){if(void 0!==e.default&&void 0===t&&(t=e.default),void 0===t&&e.required&&!e.allowEmptyValue)throw new Error("Required parameter ".concat(e.name," is not provided"));if(g&&e.schema&&"object"===e.schema.type&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){throw new Error("Could not parse object parameter value string as JSON")}a&&a({req:v,parameter:e,value:t,operation:w,spec:n})}}));var E=wd(wd({},e),{},{operation:w});if((v=g?function(e,t){var r=e.operation,n=e.requestBody,a=e.securities,o=e.spec,i=e.attachContentTypeForEmptyPayload,s=e.requestContentType;t=function(e){var t=e.request,r=e.securities,n=void 0===r?{}:r,a=e.operation,o=void 0===a?{}:a,i=e.spec,s=wd({},t),l=n.authorized,c=void 0===l?{}:l,p=o.security||i.security||[],d=c&&!!vb(c).length,u=g_(i,["components","securitySchemes"])||{};return s.headers=s.headers||{},s.query=s.query||{},vb(n).length&&d&&p&&(!Array.isArray(o.security)||o.security.length)?(p.forEach((function(e){vb(e).forEach((function(e){var t=c[e],r=u[e];if(t){var n=t.value||t,a=r.type;if(t)if("apiKey"===a)"query"===r.in&&(s.query[r.name]=n),"header"===r.in&&(s.headers[r.name]=n),"cookie"===r.in&&(s.cookies[r.name]=n);else if("http"===a){if(/^basic$/i.test(r.scheme)){var o,i=n.username||"",l=n.password||"",p=M_(kb(o="".concat(i,":")).call(o,l));s.headers.Authorization="Basic ".concat(p)}/^bearer$/i.test(r.scheme)&&(s.headers.Authorization="Bearer ".concat(n))}else if("oauth2"===a||"openIdConnect"===a){var d,h=t.token||{},f=h[r["x-tokenName"]||"access_token"],m=h.token_type;m&&"bearer"!==m.toLowerCase()||(m="Bearer"),s.headers.Authorization=kb(d="".concat(m," ")).call(d,f)}}}))})),s):t}({request:t,securities:a,operation:r,spec:o});var l=r.requestBody||{},c=vb(l.content||{}),p=s&&c.indexOf(s)>-1;if(n||i){if(s&&p)t.headers["Content-Type"]=s;else if(!s){var d=c[0];d&&(t.headers["Content-Type"]=d,s=d)}}else s&&p&&(t.headers["Content-Type"]=s);if(!e.responseContentType&&r.responses){var u,h=Pb(u=Ib(r.responses)).call(u,(function(e){var t=Af(e,2),r=t[0],n=t[1],a=parseInt(r,10);return a>=200&&a<300&&N_(n.content)})).reduce((function(e,t){var r=Af(t,2)[1];return kb(e).call(e,vb(r.content))}),[]);h.length>0&&(t.headers.accept=h.join(", "))}if(n)if(s){if(c.indexOf(s)>-1)if("application/x-www-form-urlencoded"===s||"multipart/form-data"===s)if("object"===Sf(n)){var f=(l.content[s]||{}).encoding||{};t.form={},vb(n).forEach((function(e){t.form[e]={value:n[e],encoding:f[e]||{}}}))}else t.form=n;else t.body=n}else t.body=n;return t}(E,v):function(e,t){var r,n,a=e.spec,o=e.operation,i=e.securities,s=e.requestContentType,l=e.responseContentType,c=e.attachContentTypeForEmptyPayload;if((t=function(e){var t=e.request,r=e.securities,n=void 0===r?{}:r,a=e.operation,o=void 0===a?{}:a,i=e.spec,s=wd({},t),l=n.authorized,c=void 0===l?{}:l,p=n.specSecurity,d=void 0===p?[]:p,u=o.security||d,h=c&&!!vb(c).length,f=i.securityDefinitions;return s.headers=s.headers||{},s.query=s.query||{},vb(n).length&&h&&u&&(!Array.isArray(o.security)||o.security.length)?(u.forEach((function(e){vb(e).forEach((function(e){var t=c[e];if(t){var r=t.token,n=t.value||t,a=f[e],o=a.type,i=a["x-tokenName"]||"access_token",l=r&&r[i],p=r&&r.token_type;if(t)if("apiKey"===o){var d="query"===a.in?"query":"headers";s[d]=s[d]||{},s[d][a.name]=n}else if("basic"===o)if(n.header)s.headers.authorization=n.header;else{var u,h=n.username||"",m=n.password||"";n.base64=M_(kb(u="".concat(h,":")).call(u,m)),s.headers.authorization="Basic ".concat(n.base64)}else if("oauth2"===o&&l){var y;p=p&&"bearer"!==p.toLowerCase()?p:"Bearer",s.headers.authorization=kb(y="".concat(p," ")).call(y,l)}}}))})),s):t}({request:t,securities:i,operation:o,spec:a})).body||t.form||c)if(s)t.headers["Content-Type"]=s;else if(Array.isArray(o.consumes)){var p=Af(o.consumes,1);t.headers["Content-Type"]=p[0]}else if(Array.isArray(a.consumes)){var d=Af(a.consumes,1);t.headers["Content-Type"]=d[0]}else o.parameters&&Pb(r=o.parameters).call(r,(function(e){return"file"===e.type})).length?t.headers["Content-Type"]="multipart/form-data":o.parameters&&Pb(n=o.parameters).call(n,(function(e){return"formData"===e.in})).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(s){var u,h,f=o.parameters&&Pb(u=o.parameters).call(u,(function(e){return"body"===e.in})).length>0,m=o.parameters&&Pb(h=o.parameters).call(h,(function(e){return"formData"===e.in})).length>0;(f||m)&&(t.headers["Content-Type"]=s)}return!l&&Array.isArray(o.produces)&&o.produces.length>0&&(t.headers.accept=o.produces.join(", ")),t}(E,v)).cookies&&vb(v.cookies).length){var O=vb(v.cookies).reduce((function(e,t){var r=v.cookies[t];return e+(e?"&":"")+P_(t,r)}),"");v.headers.Cookie=O}return v.cookies&&delete v.cookies,AS(v),v}var J_=function(e){return e?e.replace(/\W/g,""):null};function Y_(e){return IC(e.spec)?function(e){var t=e.spec,r=e.pathName,n=e.method,a=e.server,o=e.contextUrl,i=e.serverVariables,s=void 0===i?{}:i,l=g_(t,["paths",r,(n||"").toLowerCase(),"servers"])||g_(t,["paths",r,"servers"])||g_(t,["servers"]),c="",p=null;if(a&&l&&l.length){var d=gb(l).call(l,(function(e){return e.url}));d.indexOf(a)>-1&&(c=a,p=l[d.indexOf(a)])}if(!c&&l&&l.length){c=l[0].url;var u=Af(l,1);p=u[0]}return c.indexOf("{")>-1&&function(e){for(var t,r=[],n=/{([^}]+)}/g;t=n.exec(e);)r.push(t[1]);return r}(c).forEach((function(e){if(p.variables&&p.variables[e]){var t=p.variables[e],r=s[e]||t.default,n=new RegExp("{".concat(e,"}"),"g");c=c.replace(n,r)}})),function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=r&&n?au.parse(au.resolve(n,r)):au.parse(r),o=au.parse(n),i=J_(a.protocol)||J_(o.protocol)||"",s=a.host||o.host,l=a.pathname||"";return"/"===(e=i&&s?kb(t="".concat(i,"://")).call(t,s+l):l)[e.length-1]?iS(e).call(e,0,-1):e}(c,o)}(e):function(e){var t,r,n=e.spec,a=e.scheme,o=e.contextUrl,i=void 0===o?"":o,s=au.parse(i),l=Array.isArray(n.schemes)?n.schemes[0]:null,c=a||l||J_(s.protocol)||"http",p=n.host||s.host||"",d=n.basePath||"";return"/"===(t=c&&p?kb(r="".concat(c,"://")).call(r,p+d):d)[t.length-1]?iS(t).call(t,0,-1):t}(e)}function Z_(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e?r.url=e:r=e,!(this instanceof Z_))return new Z_(r);Ld(this,r);var n=this.resolve().then((function(){return t.disableInterfaces||Ld(t,Z_.makeApisTagOperation(t)),t}));return n.client=this,n}function Q_(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}Z_.http=hS,Z_.makeHttp=function(e,t,r){return r=r||function(e){return e},t=t||function(e){return e},function(n){return"string"==typeof n&&(n={url:n}),uS.mergeInQueryOrForm(n),n=t(n),r(e(n))}}.bind(null,Z_.http),Z_.resolve=NC,Z_.resolveSubtree=function(e,t){return v_.apply(this,arguments)},Z_.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,a=e.operationId,o=e.pathName,i=e.method,s=e.parameters,l=e.securities,c=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Qa(e);for(n=0;n<o.length;n++)r=o[n],I_(t).call(t,r)>=0||(a[r]=e[r]);return a}(e,t);if(Gl){var o=Gl(e);for(n=0;n<o.length;n++)r=o[n],I_(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,H_),p=t||r||hS;o&&i&&!a&&(a=RC(o,i));var d=G_.buildRequest(wd({spec:n,operationId:a,parameters:s,securities:l,http:p},c));return d.body&&(N_(d.body)||Array.isArray(d.body))&&(d.body=db(d.body)),p(d)},Z_.serializeRes=yS,Z_.serializeHeaders=gS,Z_.clearCache=function(){CC.refs.clearCache()},Z_.makeApisTagOperation=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=w_(e);return{apis:x_({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},Z_.buildRequest=K_,Z_.helpers={opId:PC},Z_.getBaseUrl=Y_,Z_.prototype={http:hS,execute:function(e){return this.applyDefaults(),Z_.execute(wd({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:"string"==typeof this.url?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Z_.resolve(wd({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},t)).then((function(t){return e.originalSpec=e.spec,e.spec=t.spec,e.errors=t.errors,e}))}},Z_.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&nu(t).call(t,"http")){var r=au.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}};var X_={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(0===e.length)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:Q_,sanitiseAll:function(e){return Q_(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,((e,t)=>t.toUpperCase()))},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map((n=>({[n]:e(t[n],r)}))))}};function eI(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}var tI={getDefaultState:eI,walkSchema:function e(t,r,n,a){if(void 0===n.depth&&(n=eI()),null==t)return t;if(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&1===t.allOf.length&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&1===t.anyOf.length&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf&&Array.isArray(t.oneOf)&&1===t.oneOf.length&&delete(t={...t.oneOf[0],...t}).oneOf),a(t,r,n),n.seen.has(t))return t;if("object"==typeof t&&null!==t&&n.seen.set(t,!0),n.top=!1,n.depth++,void 0!==t.items&&(n.property="items",e(t.items,t,n,a)),t.additionalItems&&"object"==typeof t.additionalItems&&(n.property="additionalItems",e(t.additionalItems,t,n,a)),t.additionalProperties&&"object"==typeof t.additionalProperties&&(n.property="additionalProperties",e(t.additionalProperties,t,n,a)),t.properties)for(const r in t.properties){const o=t.properties[r];n.property=`properties/${r}`,e(o,t,n,a)}if(t.patternProperties)for(const r in t.patternProperties){const o=t.patternProperties[r];n.property=`patternProperties/${r}`,e(o,t,n,a)}if(t.allOf)for(const r in t.allOf){const o=t.allOf[r];n.property=`allOf/${r}`,e(o,t,n,a)}if(t.anyOf)for(const r in t.anyOf){const o=t.anyOf[r];n.property=`anyOf/${r}`,e(o,t,n,a)}if(t.oneOf)for(const r in t.oneOf){const o=t.oneOf[r];n.property=`oneOf/${r}`,e(o,t,n,a)}return t.not&&(n.property="not",e(t.not,t,n,a)),n.depth--,t}};function rI(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),"object"!=typeof e)return;const n=t.path;for(const a in e){if(t.key=a,t.path=`${t.path}/${encodeURIComponent(a)}`,t.identityPath=t.seen.get(e[a]),t.identity=void 0!==t.identityPath,e.hasOwnProperty(a)&&r(e,a,t),"object"==typeof e[a]&&!t.identity){t.identityDetection&&!Array.isArray(e[a])&&null!==e[a]&&t.seen.set(e[a],t.path);const n={};n.parent=e,n.path=t.path,n.depth=t.depth?t.depth+1:1,n.pkey=a,n.payload=t.payload,n.seen=t.seen,n.identity=!1,n.identityDetection=t.identityDetection,rI(e[a],n,r)}t.path=n}}let nI;function aI(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function oI(e,t){tI.walkSchema(e,{},{},((e,r)=>{!function(e){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(const t in e.discriminator.mapping){const r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patches++,r.warnings.push("(Patchable) schema type must not be an array"),0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(const t of e.type){const r={};if("null"===t)e.nullable=!0;else{r.type=t;for(const t of X_.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&(r.patches++,r.warnings.push("Lost properties from oneOf")),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),e.allowEmptyValue&&(delete e.allowEmptyValue,r.patches++,r.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(e,r,t)}))}function iI(e){for(const t in e)for(const r in e[t]){const n=X_.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function sI(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){const r={};let n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),"string"==typeof e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function lI(e){return e&&!e["x-s2o-delete"]}function cI(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}"array"===e.type?("ssv"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):"pipes"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const t of X_.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(const t of X_.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}function pI(e,t,r,n,a,o,i){const s={};let l,c=!0;t&&t.consumes&&"string"==typeof t.consumes&&(t.consumes=[t.consumes],i.patches++,i.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(o.consumes)||delete o.consumes;const p=((t?t.consumes:null)||o.consumes||[]).filter(X_.uniqueOnly);if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(e.type="string",i.patches++,i.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),"file"===e.type&&(e["x-s2o-originalType"]=e.type,l=e.type),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(delete e.collectionFormat,i.patches++,i.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":i.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":i.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),"multi"===t&&(e.explode=!0),"tsv"===t&&(i.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)i.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&i.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,rI(e.schema.items,null,((r,n)=>{"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&i.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete r[n])})));for(const t of X_.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&oI(e.schema,i),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,s.content={};let t="application/x-www-form-urlencoded";if(p.length&&p.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),s.content[t]={},e.schema)s.content[t].schema=e.schema;else{s.content[t].schema={},s.content[t].schema.type="object",s.content[t].schema.properties={},s.content[t].schema.properties[e.name]={};const r=s.content[t].schema,n=s.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(const t of X_.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),s.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==l&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),aI(e,n)}}else e&&"file"===e.type&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",aI(e,s));if(e&&"body"===e.in){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?X_.sanitiseAll(t.operationId):"")+X_.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),p.length||p.push("application/json");for(const t of p)s.content[t]={},s.content[t].schema=X_.clone(e.schema||{}),oI(s.content[t].schema,i);aI(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const e=t.operationId||a;i.warnings.push(`Operation ${e} has multiple requestBodies`)}else t.requestBody||(t=function(e,t){const r={};for(const n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,i),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=X_.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const t of X_.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(e.required=!0,i.patches++,i.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${a}]`))}return t}function dI(e,t,r,n,a){if(!e)return!1;if(e.description||"object"!=typeof e||Array.isArray(e)||(a.patches++,a.warnings.push("(Patchable) response.description is mandatory")),void 0!==e.schema){oI(e.schema,a),r&&r.produces&&"string"==typeof r.produces&&(r.produces=[r.produces],a.patches++,a.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;const t=((r?r.produces:null)||n.produces||[]).filter(X_.uniqueOnly);t.length||t.push("*/*"),e.content={};for(const r of t){if(e.content[r]={},e.content[r].schema=X_.clone(e.schema),e.examples&&e.examples[r]){const t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(const t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(const t in e.headers)"status code"===t.toLowerCase()?(delete e.headers[t],a.patches++,a.warnings.push('(Patchable) "Status Code" is not a valid header')):cI(e.headers[t],a)}function uI(e,t,r,n,a){for(const o in e){const i=e[o];i&&i["x-trace"]&&"object"==typeof i["x-trace"]&&(i.trace=i["x-trace"],delete i["x-trace"]),i&&i["x-summary"]&&"string"==typeof i["x-summary"]&&(i.summary=i["x-summary"],delete i["x-summary"]),i&&i["x-description"]&&"string"==typeof i["x-description"]&&(i.description=i["x-description"],delete i["x-description"]),i&&i["x-servers"]&&Array.isArray(i["x-servers"])&&(i.servers=i["x-servers"],delete i["x-servers"]);for(const e in i)if(X_.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let s=i[e];if(s&&s.parameters&&Array.isArray(s.parameters)){if(i.parameters)for(const t of i.parameters)s.parameters.find((e=>e.name===t.name&&e.in===t.in))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(s=pI(t,s,i,e,o,a,r));for(const t of s.parameters)s=pI(t,s,i,e,`${e}: ${o}`,a,r);s.parameters&&(s.parameters=s.parameters.filter(lI))}if(s&&s.security&&iI(s.security),"object"==typeof s){if(!s.responses){const e={description:"Default response"};s.responses={default:e}}for(const e in s.responses)dI(s.responses[e],0,s,a,r)}if(s&&s["x-servers"]&&Array.isArray(s["x-servers"]))s.servers=s["x-servers"],delete s["x-servers"];else if(s&&s.schemes&&s.schemes.length)for(const e of s.schemes)if((!a.schemes||a.schemes.indexOf(e)<0)&&(s.servers||(s.servers=[]),Array.isArray(a.servers)))for(const e of a.servers){const t=X_.clone(e);s.servers.push(t)}if(s){if(delete s.consumes,delete s.produces,delete s.schemes,s["x-ms-examples"]){for(const e in s["x-ms-examples"]){const t=s["x-ms-examples"][e],r=X_.sanitiseAll(e);if(t.parameters)for(const r in t.parameters){const n=t.parameters[r];for(const t of(s.parameters||[]).concat(i.parameters||[]))t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(const n in t.responses){if(t.responses[n].headers)for(const e in t.responses[n].headers){const r=t.responses[n].headers[e];for(const t in s.responses[n].headers)t===e&&(s.responses[n].headers[t].example=r)}if(t.responses[n].body&&(a.components.examples[r]={value:X_.clone(t.responses[n].body)},s.responses[n]&&s.responses[n].content))for(const t in s.responses[n].content){const a=s.responses[n].content[t];a.examples||(a.examples={}),a.examples[e]={$ref:`#/components/examples/${r}`}}}}delete s["x-ms-examples"]}if(s.parameters&&0===s.parameters.length&&delete s.parameters,s.requestBody){const r=s.operationId?X_.sanitiseAll(s.operationId):X_.camelize(X_.sanitiseAll(e+o)),a=X_.sanitise(s.requestBody["x-s2o-name"]||r||"");delete s.requestBody["x-s2o-name"];const i=JSON.stringify(s.requestBody),l=X_.createHash(i);if(!n[l]){const e={};e.name=a,e.body=s.requestBody,e.refs=[],n[l]=e}const c=`#/${t}/${encodeURIComponent(o)}/${e}/requestBody`;n[l].refs.push(c)}}}if(i&&i.parameters){for(const e in i.parameters)pI(i.parameters[e],null,i,null,o,a,r);Array.isArray(i.parameters)&&(i.parameters=i.parameters.filter(lI))}}}function hI(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,((t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e):e}function fI(e,t){void 0!==e.info&&null!==e.info||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),("object"!=typeof e.info||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(void 0===e.info.title&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),void 0===e.info.version?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):"string"!=typeof e.info.version&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function mI(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function yI(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=X_.circularClone(e),fI(t.openapi,t),mI(t.openapi,t),t;if("2.0"!==e.swagger)return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=X_.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,rI(t.openapi,{},((e,t,r)=>{null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]})),e.host)(e.schemes||[]).forEach((r=>{const n={},a=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${a}`,hI(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)}));else if(e.basePath){const r={};r.url=e.basePath,hI(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const a=n.url.match(/\{\w+\}/g);for(const e in r.parameters){const t=r.parameters[e];e.startsWith("x-")||(delete t.required,delete t.type,delete t.in,void 0===t.default&&(t.enum?t.default=t.enum[0]:t.default="none"),t.name||(t.name=a[e].replace("{","").replace("}","")),n.variables[t.name]=t,delete t.name)}t.openapi.servers||(t.openapi.servers=[]),!1===r.useSchemePrefix?t.openapi.servers.push(n):e.schemes.forEach((e=>{t.openapi.servers.push({...n,url:`${e}://${n.url}`})})),delete t.openapi["x-ms-parameterized-host"]}return fI(t.openapi,t),mI(t.openapi,t),"string"==typeof t.openapi.consumes&&(t.openapi.consumes=[t.openapi.consumes]),"string"==typeof t.openapi.produces&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(e){const t=e.openapi,r={};nI={schemas:{}},t.security&&iI(t.security);for(const r in t.components.securitySchemes){const n=X_.sanitise(r);if(r!==n){if(t.components.securitySchemes[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised securityScheme name ${n}`,pointer:`/components/securitySchemes/${n}`}),e;t.components.securitySchemes[n]=t.components.securitySchemes[r],delete t.components.securitySchemes[r]}sI(t.components.securitySchemes[n],e)}for(const r in t.components.schemas){const n=X_.sanitiseAll(r);let a="";if(r!==n){for(;t.components.schemas[n+a];)a=a?++a:2;t.components.schemas[n+a]=t.components.schemas[r],delete t.components.schemas[r]}nI.schemas[r]=n+a,oI(t.components.schemas[`${n}${a}`],e)}for(const r in t.components.parameters){const n=X_.sanitise(r);if(r!==n){if(t.components.parameters[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised parameter name ${n}`,pointer:`/components/parameters/${n}`}),e;t.components.parameters[n]=t.components.parameters[r],delete t.components.parameters[r]}pI(t.components.parameters[n],null,null,null,n,t,e)}for(const r in t.components.responses){const n=X_.sanitise(r);if(r!==n){if(t.components.responses[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised response name ${n}`,pointer:`/components/responses/${n}`}),e;t.components.responses[n]=t.components.responses[r],delete t.components.responses[r]}const a=t.components.responses[n];if(dI(a,0,null,t,e),a.headers)for(const t in a.headers)"status code"===t.toLowerCase()?(delete a.headers[t],e.patches++,e.warnings.push('(Patchable) "Status Code" is not a valid header')):cI(a.headers[t],e)}for(const e in t.components.requestBodies){const n=t.components.requestBodies[e],a=JSON.stringify(n),o=X_.createHash(a),i={};i.name=e,i.body=n,i.refs=[],r[o]=i}uI(t.paths,"paths",e,r,t),t["x-ms-paths"]&&uI(t["x-ms-paths"],"x-ms-paths",e,r,t);for(const e in t.components.parameters)t.components.parameters[e]["x-s2o-delete"]&&delete t.components.parameters[e];return delete t.consumes,delete t.produces,delete t.schemes,t.components.requestBodies={},t.components.responses&&0===Object.keys(t.components.responses).length&&delete t.components.responses,t.components.parameters&&0===Object.keys(t.components.parameters).length&&delete t.components.parameters,t.components.examples&&0===Object.keys(t.components.examples).length&&delete t.components.examples,t.components.requestBodies&&0===Object.keys(t.components.requestBodies).length&&delete t.components.requestBodies,t.components.securitySchemes&&0===Object.keys(t.components.securitySchemes).length&&delete t.components.securitySchemes,t.components.headers&&0===Object.keys(t.components.headers).length&&delete t.components.headers,t.components.schemas&&0===Object.keys(t.components.schemas).length&&delete t.components.schemas,t.components&&0===Object.keys(t.components).length&&delete t.components,e}(t)}function gI(e){return e.ok&&e.text&&e.parseError&&"YAMLException"===e.parseError.name&&(!e.headers["content-type"]||e.headers["content-type"].match("text/plain"))&&(e.body=e.text),e}var vI=function(e){return new Promise((async t=>{try{const r=await Z_.resolve(e,gI);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const e=yI(r.spec);e.errors&&e.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=e.errors),e.warnings&&e.warnings.length>0&&(r.warnings=e.warnings),r.resolvedSpec=r.spec,r.spec=e.openapi,t(r)}}catch(e){t(e)}}))};async function bI(e,t=!1,r=!1,n="",a="",o="",i="",s=""){var l,c;let p;try{var d,u;let t;if(this.requestUpdate(),t="string"==typeof e?await vI({url:e,allowMetaPatches:!1}):await vI({spec:e,allowMetaPatches:!1}),await Qe(0),null!==(d=t.resolvedSpec)&&void 0!==d&&d.jsonSchemaViewer&&null!==(u=t.resolvedSpec)&&void 0!==u&&u.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));const e=Object.entries(t.resolvedSpec.schemaAndExamples).map((e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(Ye,"-"),...e[1]})));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}var h,f,m,y;if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!==(h=t.response)&&void 0!==h&&h.url?`${null===(f=t.response)||void 0===f?void 0:f.url} ┃ ${null===(m=t.response)||void 0===m?void 0:m.status}  ${null===(y=t.response)||void 0===y?void 0:y.statusText}`:"Unable to load the Spec",version:" "},tags:[]};p=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:p}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}const g=function(e,t,r=!1,n=!1){const a=["get","put","post","delete","patch","head","options"],o=e.tags&&Array.isArray(e.tags)?e.tags.map((e=>({show:!0,elementId:`tag--${e.name.replace(Ye,"-")}`,name:e.name,description:e.description||"",headers:e.description?xI(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]}))):[],i=e.paths||{};if(e.webhooks)for(const[t,r]of Object.entries(e.webhooks))r._type="webhook",i[t]=r;for(const t in i){const n=i[t].parameters,s={servers:i[t].servers||[],parameters:i[t].parameters||[]},l="webhook"===i[t]._type;a.forEach((a=>{if(i[t][a]){const i=e.paths[t][a],c=i.tags||[];if(0===c.length)if(r){const e=t.replace(/^\/+|\/+$/g,""),r=e.indexOf("/");-1===r?c.push(e):c.push(e.substr(0,r))}else c.push("General ⦂");c.forEach((r=>{let c,p;var d,u;e.tags&&(p=e.tags.find((e=>e.name.toLowerCase()===r.toLowerCase()))),c=o.find((e=>e.name===r)),c||(c={show:!0,elementId:`tag--${r.replace(Ye,"-")}`,name:r,description:(null===(d=p)||void 0===d?void 0:d.description)||"",headers:null!==(u=p)&&void 0!==u&&u.description?xI(p.description):[],paths:[],expanded:!p||!1!==p["x-tag-expanded"]},o.push(c));let h=(i.summary||i.description||`${a.toUpperCase()} ${t}`).trim();h.length>100&&([h]=h.split(/[.|!|?]\s|[\r?\n]/));let f=[];if(f=n?i.parameters?n.filter((e=>{if(!i.parameters.some((t=>e.name===t.name&&e.in===t.in)))return e})).concat(i.parameters):n.slice(0):i.parameters?i.parameters.slice(0):[],i.callbacks)for(const[e,t]of Object.entries(i.callbacks)){const r=Object.entries(t).filter((e=>"object"==typeof e[1]))||[];i.callbacks[e]=Object.fromEntries(r)}c.paths.push({show:!0,expanded:!1,isWebhook:l,expandedAtLeastOnce:!1,summary:i.summary||"",description:i.description||"",shortSummary:h,method:a,path:t,operationId:i.operationId,elementId:`${a}-${t.replace(Ye,"-")}`,servers:i.servers?s.servers.concat(i.servers):s.servers,parameters:f,requestBody:i.requestBody,responses:i.responses,callbacks:i.callbacks,deprecated:i.deprecated,security:i.security,xBadges:i["x-badges"]||void 0,xCodeSamples:i["x-codeSamples"]||i["x-code-samples"]||""})}))}}))}const s=o.filter((e=>e.paths&&e.paths.length>0));return s.forEach((e=>{"method"===t?e.paths.sort(((e,t)=>a.indexOf(e.method).toString().localeCompare(a.indexOf(t.method)))):"summary"===t?e.paths.sort(((e,t)=>e.shortSummary.localeCompare(t.shortSummary))):"path"===t&&e.paths.sort(((e,t)=>e.path.localeCompare(t.path))),e.firstPathId=e.paths[0].elementId})),n?s.sort(((e,t)=>e.name.localeCompare(t.name))):s}(p,n,t,r),v=function(e){if(!e.components)return[];const t=[];for(const r in e.components){const n=[];for(const t in e.components[r]){const a={show:!0,id:`${r.toLowerCase()}-${t.toLowerCase()}`.replace(Ye,"-"),name:t,component:e.components[r][t]};n.push(a)}let a=r,o=r;switch(r){case"schemas":o="Schemas",a="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":o="Responses",a="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":o="Parameters",a="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":o="Examples",a="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":o="Request Bodies",a="Describes common request bodies that are used across the API operations.";break;case"headers":o="Headers",a='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":o="Security Schemes",a="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":o="Links",a="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":o="Callbacks",a="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:o=r,a=r}const i={show:!0,name:o,description:a,subComponents:n};t.push(i)}return t||[]}(p),b=null!==(l=p.info)&&void 0!==l&&l.description?xI(p.info.description):[],x=[];if(null!==(c=p.components)&&void 0!==c&&c.securitySchemes){const e=new Set;Object.entries(p.components.securitySchemes).forEach((t=>{if(!e.has(t[0])){e.add(t[0]);const r={securitySchemeId:t[0],...t[1]};r.value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),x.push(r)}}))}a&&o&&i&&x.push({securitySchemeId:Ze,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:a,in:o,value:i,finalKeyValue:i}),x.forEach((e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type||"None"}));let w=[];return p.servers&&Array.isArray(p.servers)?(p.servers.forEach((e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach((e=>{const r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""})),e.computedUrl=t})),s&&p.servers.push({url:s,computedUrl:s})):s?p.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?p.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:p.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],w=p.servers,{specLoadError:!1,isSpecLoading:!1,info:p.info,infoDescriptionHeaders:b,tags:g,components:v,externalDocs:p.externalDocs,securitySchemes:x,servers:w}}function xI(e){return Fe.lexer(e).filter((e=>"heading"===e.type&&e.depth<=2))||[]}const wI=e=>(...t)=>({_$litDirective$:e,values:t});class $I{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class kI extends $I{constructor(e){if(super(e),this.it=F,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||null==e)return this.ft=void 0,this.it=e;if(e===D)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}kI.directiveName="unsafeHTML",kI.resultType=1;const SI=wI(kI),AI="rapidoc";function EI(e,t="",r="",n=""){var a,o;const i=null===(a=this.resolvedSpec.securitySchemes)||void 0===a?void 0:a.find((t=>t.securitySchemeId===e));if(!i)return!1;let s="";if("basic"===(null===(o=i.scheme)||void 0===o?void 0:o.toLowerCase()))t&&(s=`Basic ${btoa(`${t}:${r}`)}`);else if(n){var l;i.value=n,s=`${"bearer"===(null===(l=i.scheme)||void 0===l?void 0:l.toLowerCase())?"Bearer ":""}${n}`}return!!s&&(i.finalKeyValue=s,this.requestUpdate(),!0)}function OI(){var e;null===(e=this.resolvedSpec.securitySchemes)||void 0===e||e.forEach((e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""})),this.requestUpdate()}function TI(){return JSON.parse(localStorage.getItem(AI))||{}}function CI(e){localStorage.setItem(AI,JSON.stringify(e))}function jI(){const e=TI.call(this);Object.values(e).forEach((e=>{EI.call(this,e.securitySchemeId,e.username,e.password,e.value)}))}function _I(e){let t="";const r=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){const t=n.querySelector(".api-key-user").value.trim(),r=n.querySelector(".api-key-password").value.trim();EI.call(this,e,t,r)}else t=n.querySelector(".api-key-input").value.trim(),EI.call(this,e,"","",t);if("true"===this.persistAuth){const t=TI.call(this);t[e]=r,CI.call(this,t)}}}}function II(e,t,r="Bearer"){this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e)).finalKeyValue=`${"bearer"===r.toLowerCase()?"Bearer":"mac"===r.toLowerCase()?"MAC":r} ${t}`,this.requestUpdate()}async function PI(e,t,r,n,a,o,i,s,l="header",c=null,p=null,d=null){const u=s?s.querySelector(".oauth-resp-display"):void 0,h=new URLSearchParams,f=new Headers;h.append("grant_type",a),"client_credentials"!==a&&"password"!==a&&h.append("redirect_uri",n),o&&(h.append("code",o),h.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),"header"===l?f.set("Authorization",`Basic ${btoa(`${t}:${r}`)}`):(h.append("client_id",t),h.append("client_secret",r)),"password"===a&&(h.append("username",p),h.append("password",d)),c&&h.append("scope",c);try{const t=await fetch(e,{method:"POST",headers:f,body:h}),r=await t.json();if(!t.ok)return u&&(u.innerHTML=`<span style="color:var(--red)">${r.error_description||r.error_description||"Unable to get access token"}</span>`),!1;if(r.token_type&&r.access_token)return II.call(this,i,r.access_token,r.token_type),u&&(u.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch(e){return u&&(u.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function RI(e,t,r,n,a,o,i,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?PI.call(this,r,n,a,o,i,e.data.code,l,c,s):"token"===e.data.responseType&&II.call(this,l,e.data.access_token,e.data.token_type)))}async function LI(e,t,r,n,a){const o=a.target.closest(".oauth-flow"),i=o.querySelector(".oauth-client-id")?o.querySelector(".oauth-client-id").value.trim():"",s=o.querySelector(".oauth-client-secret")?o.querySelector(".oauth-client-secret").value.trim():"",l=o.querySelector(".api-key-user")?o.querySelector(".api-key-user").value.trim():"",c=o.querySelector(".api-key-password")?o.querySelector(".api-key-password").value.trim():"",p=o.querySelector(".oauth-send-client-secret-in")?o.querySelector(".oauth-send-client-secret-in").value.trim():"header",d=[...o.querySelectorAll(".scope-checkbox:checked")],u=o.querySelector(`#${e}-pkce`),h=`${Math.random().toString(36)}random`.slice(2,9),f=`${Math.random().toString(36)}random`.slice(2,9),m=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let y,g="",v="";if([...o.parentNode.querySelectorAll(".oauth-resp-display")].forEach((e=>{e.innerHTML=""})),"authorizationCode"===t||"implicit"===t){const a=new URL(r);"authorizationCode"===t?(g="authorization_code",v="code"):"implicit"===t&&(v="token");const l=new URLSearchParams(a.search),c=d.map((e=>e.value)).join(" ");c&&l.set("scope",c),l.set("client_id",i),l.set("redirect_uri",m.toString()),l.set("response_type",v),l.set("state",h),l.set("nonce",f),u&&u.checked&&(l.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),a.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout((()=>{y=window.open(a.toString()),y?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",(t=>RI.call(this,t,y,n,i,s,m.toString(),g,p,e,o)),{once:!0})):console.error(`RapiDoc: Unable to open ${a.toString()} in a new window`)}),10)}else if("clientCredentials"===t){g="client_credentials";const t=d.map((e=>e.value)).join(" ");PI.call(this,n,i,s,m.toString(),g,"",e,o,p,t)}else if("password"===t){g="password";const t=d.map((e=>e.value)).join(" ");PI.call(this,n,i,s,m.toString(),g,"",e,o,p,t,l,c)}}function DI(e,t,r,n,a,o=[],i="header"){let{authorizationUrl:s,tokenUrl:l,refreshUrl:c}=a;const p=e=>e.indexOf("://")>0||0===e.indexOf("//");let d;return c&&!p(c)&&(c=`${this.selectedServer.computedUrl}/${c.replace(/^\//,"")}`),l&&!p(l)&&(l=`${this.selectedServer.computedUrl}/${l.replace(/^\//,"")}`),s&&!p(s)&&(s=`${this.selectedServer.computedUrl}/${s.replace(/^\//,"")}`),d="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,L`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${d}</div>
      ${s?L`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${s} </span></div>`:""}
      ${l?L`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${c?L`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?L`
          ${a.scopes?L`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(a.scopes).map(((t,r)=>L`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${r}" ?checked="${o.includes(t[0])}" value="${t[0]}">
                    <label for="${n}${e}${r}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${t[0]}</span>
                        ${t[0]!==t[1]?` - ${t[1]||""}`:""}
                    </label>
                  </div>
                `))}
              </div>
            `:""}
          ${"password"===e?L`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${"authorizationCode"===e?L`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?L`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?L`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' .selected = ${"header"===i} > Authorization Header </option>
                      <option value = 'request-body' .selected = ${"request-body"===i}> Request Body </option>
                    </select>`:""}`:""}
            ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?L`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${t=>{LI.call(this,n,e,s,l,t)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function FI(e){var t;const r=null===(t=this.resolvedSpec.securitySchemes)||void 0===t?void 0:t.find((t=>t.securitySchemeId===e));if(r.user="",r.password="",r.value="",r.finalKeyValue="","true"===this.persistAuth){const e=TI.call(this);delete e[r.securitySchemeId],CI.call(this,e)}this.requestUpdate()}function NI(){var e;if(!this.resolvedSpec)return"";const t=null===(e=this.resolvedSpec.securitySchemes)||void 0===e?void 0:e.filter((e=>e.finalKeyValue));return t?L`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?L`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{OI.call(this)}}>CLEAR ALL API KEYS</button>`:L`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?L`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map((e=>L`
            <tr id="security-scheme-${e.securitySchemeId}" class="${e.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${e.typeDisplay}</span>
                  ${e.finalKeyValue?L`
                      <span class='blue-text'>  ${e.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{FI.call(this,e.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${e.description?L`
                    <div class="m-markdown">
                      ${SI(Fe(e.description||""))}
                    </div>`:""}

                ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?L`
                    <div style="margin-bottom:5px">
                      ${"apikey"===e.type.toLowerCase()?L`Send <code>${e.name}</code> in <code>${e.in}</code>`:L`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${"cookie"!==e.in?L`
                          <input type = "text" value = "${e.value}" class="${e.type} ${e.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${t=>{_I.call(this,e.securitySchemeId,t)}}">
                            ${e.finalKeyValue?"UPDATE":"SET"}
                          </button>`:L`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?L`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${e.user}" placeholder="username" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${e.password}" placeholder="password" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${t=>{_I.call(this,e.securitySchemeId,t)}}"
                        part = "btn btn-outline"
                      >
                        ${e.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${"oauth2"===e.type.toLowerCase()?L`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(e.flows).map((t=>DI.call(this,t,e["x-client-id"],e["x-client-secret"],e.securitySchemeId,e.flows[t],e["x-default-scopes"],e["x-receive-token-in"])))}
                  </td>
                </tr>
                `:""}
          `))}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function zI(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return e.forEach((e=>{const r=[],n=[];0===Object.keys(e).length?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(e).forEach((t=>{let a="";const o=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===t));e[t]&&Array.isArray(e[t])&&(a=e[t].join(", ")),o&&(n.push(o.typeDisplay),r.push({...o,scopes:a}))})),t.push({securityTypes:n.length>1?`${n[0]} + ${n.length-1} more`:n[0],securityDefs:r}))})),L`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map(((e,t)=>L`

          ${e.securityTypes?L`
              ${0!==t?L`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${"true"===this.updateRoute&&"true"===this.allowAuthentication?L`<a part="anchor anchor-operation-security" href="#auth"> ${e.securityTypes} </a>`:L`${e.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${e.securityDefs.length>1?L`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${e.securityDefs.map(((t,r)=>{const n=L`${""!==t.scopes?L`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${t.scopes.split(",").map(((e,t)=>L`${0===t?"":"┃"}<span>${e}</span>`))}
                            </div>
                          </div>`:""}`;return L`
                      ${"oauth2"===t.type?L`
                          <div>
                            ${e.securityDefs.length>1?L`<b>${r+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${t.securitySchemeId}</span> in <b>Authorization header</b>
                            ${n}
                          </div>`:"http"===t.type?L`
                            <div>
                              ${e.securityDefs.length>1?L`<b>${r+1}.</b> &nbsp;`:L`Requires`}
                              ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${n}
                            </div>`:L`
                            <div>
                              ${e.securityDefs.length>1?L`<b>${r+1}.</b> &nbsp;`:L`Requires`}
                              Token in <b>${t.name} ${t.in}</b>
                              ${n}
                            </div>`}`}))}
                  </div>
                </div>
              </div>
            `:""}
        `))}
      </div>
    `}return""}function qI(e){return L`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(!e.target.classList.contains("tab-btn"))return;const t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],n=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach((e=>e.classList[e.dataset.tab===t?"add":"remove"]("active"))),n.forEach((e=>{e.style.display=e.dataset.tab===t?"block":"none"}))}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map(((e,t)=>L`<button class="tab-btn ${0===t?"active":""}" data-tab = '${e.lang}${t}'> ${e.label||e.lang} </button>`))}
    </div>
    ${e.map(((e,t)=>{var r,n,a;return L`
      <div class="tab-content m-markdown" style= "display:${0===t?"block":"none"}" data-tab = '${e.lang}${t}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{Xe(e.source,t)}}'> Copy </button>
        <pre><code class="language">${ze().languages[null===(r=e.lang)||void 0===r?void 0:r.toLowerCase()]?SI(ze().highlight(e.source,ze().languages[null===(n=e.lang)||void 0===n?void 0:n.toLowerCase()],null===(a=e.lang)||void 0===a?void 0:a.toLowerCase())):e.source}</code></pre>
      </div>`}))}
  </section>`}function BI(e){return L`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map((e=>L`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${e[0]}
        ${Object.entries(e[1]).map((e=>L`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(e[1]).map((t=>{var r,n,a;return L`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${t[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${t[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${e[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${t[0]||""}", 
                      path = "${e[0]||""}" 
                      .parameters = "${(null===(r=t[1])||void 0===r?void 0:r.parameters)||""}" 
                      .request_body = "${(null===(n=t[1])||void 0===n?void 0:n.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":"true"}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${null===(a=t[1])||void 0===a?void 0:a.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":"true"}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `}))}
            </div>  
          </div>  
        `))}
      </div>  
    `))}
  `}const UI={},MI=wI(class extends $I{constructor(){super(...arguments),this.nt=UI}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return D}else if(this.nt===t)return D;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),HI={},WI=wI(class extends $I{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===D||t===F)return t;const r=e.element,n=e.name;if(3===e.type){if(t===r[n])return D}else if(4===e.type){if(!!t===r.hasAttribute(n))return D}else if(1===e.type&&r.getAttribute(n)===t+"")return D;return((e,t=HI)=>{e._$AH=t})(e),t}});var VI=r(131),GI=r.n(VI);const KI=l`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function JI(e){if(!e)return;let t="",r="";if(e.$ref){const r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(2===e.length?" or ":"┃"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="┃null")):t=0===Object.keys(e).length?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:null!=e.default?`${e.default}`:"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===n.type?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==n.type&&"any"!==n.type||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("┃"):"","array"===t&&e.items){var a,o,i;const t=null===(a=e.items)||void 0===a?void 0:a.type,r=void 0!==(null===(o=e.items)||void 0===o?void 0:o.default)?e.items.default:"";n.arrayType=`${e.type} of ${Array.isArray(t)?t.join(""):t}`,n.default=r,n.allowedValues=Array.isArray(null===(i=e.items)||void 0===i?void 0:i.enum)?e.items.enum.join("┃"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"┃":""}Max ${e.maximum}`:`${r?"┃":""}Less than ${e.exclusiveMaximum}`),void 0!==e.multipleOf&&(r+=`${r?"┃":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=`${r?"┃":""}${e.minLength} to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"┃":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function YI(e){return"boolean"==typeof e?{Example:{value:`${e}`}}:""===e?{Example:{value:""}}:e?{Example:{value:e}}:e}function ZI(e,t="string"){if(!e)return{exampleVal:"",exampleList:[]};if(e.constructor===Object){const t=Object.values(e);return{exampleVal:t.length>0?"boolean"==typeof t[0].value||"number"==typeof t[0].value?t[0].value.toString():t[0].value:"",exampleList:Object.values(e).map((e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?e.value.toString():e.value,summary:e.summary,description:e.description})))}}if(Array.isArray(e)||(e=e?[e]:[]),0===e.length)return{exampleVal:"",exampleList:[]};if("array"===t){const[t]=e;return{exampleVal:t,exampleList:e.map((e=>({value:e})))}}return{exampleVal:e[0].toString(),exampleList:e.map((e=>({value:e.toString()})))}}function QI(e){const t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),n=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),a=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?n||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=a?t:a%t==0?a:Math.ceil(a/t)*t:a}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){const t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),n=t||(r>6?6:r||void 0);return n?"A".repeat(n):"string"}{const t=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),`4000-8${t.substr(13,3)}`,t.substr(16,12)].join("-");default:return""}}}return"?"}function XI(e,t=1){const r="  ".repeat(t);let n="";if(1===t&&"object"!=typeof e)return`\n${r}${e.toString()}`;for(const a in e)n=Array.isArray(e[a])||"object"==typeof e[a]?`${n}\n${r}<${a}> ${XI(e[a],t+1)}\n${r}</${a}>`:`${n}\n${r}<${a}> ${e[a].toString()} </${a}>`;return n}function eP(e,t){"object"==typeof t&&null!==t&&(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description))}function tP(e){if("object"==typeof e&&null!==e){delete e["::TITLE"],delete e["::DESCRIPTION"];for(const t in e)tP(e[t])}}function rP(e,t,r){for(const n in t)t[n][r]=e}function nP(e,t,r){let n=0;const a={};for(const o in e){for(const i in r)if(a[`example-${n}`]={...e[o]},a[`example-${n}`][t]=r[i],n++,n>=10)break;if(n>=10)break}return a}function aP(e,t={}){let r={};if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items)return e.allOf[0].$ref?"{  }":e.allOf[0].readOnly&&t.includeReadOnly?QI(e.allOf[0]):void 0;e.allOf.forEach((e=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=aP(e,t);Object.assign(n,r)}else if("array"===e.type||e.items){const r=[aP(e,t)];Object.assign(n,r)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`;n[t]=QI(e)}}})),r=n}else if(e.oneOf){const n={};if(e.properties)for(const t in e.properties)n[t]=QI(e.properties[t]);if(e.oneOf.length>0){let a=0;for(const o in e.oneOf){const i=aP(e.oneOf[o],t);for(const t in i){let s;if(Object.keys(n).length>0){if(null===i[t]||"object"!=typeof i[t])continue;s=Object.assign(i[t],n)}else s=i[t];r[`example-${a}`]=s,eP(e.oneOf[o],r[`example-${a}`]),a++}}}}else if(e.anyOf){let n;if("object"===e.type||e.properties){n={"example-0":{}};for(const r in e.properties){if(e.example){n=e;break}e.properties[r].deprecated&&!t.includeDeprecated||e.properties[r].readOnly&&!t.includeReadOnly||e.properties[r].writeOnly&&!t.includeWriteOnly||(n=nP(n,r,aP(e.properties[r],t)))}}let a=0;for(const o in e.anyOf){const i=aP(e.anyOf[o],t);for(const t in i){if(void 0!==n)for(const e in n)r[`example-${a}`]={...n[e],...i[t]};else r[`example-${a}`]=i[t];eP(e.anyOf[o],r[`example-${a}`]),a++}}}else if("object"===e.type||e.properties)if(r["example-0"]={},eP(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const p in e.properties){var n,a,o,i,s,l,c;if((null===(n=e.properties[p])||void 0===n||!n.deprecated||t.includeDeprecated)&&(null===(a=e.properties[p])||void 0===a||!a.readOnly||t.includeReadOnly)&&(null===(o=e.properties[p])||void 0===o||!o.writeOnly||t.includeWriteOnly))if("array"===(null===(i=e.properties[p])||void 0===i?void 0:i.type)||null!==(s=e.properties[p])&&void 0!==s&&s.items)if(e.properties[p].example)rP(e.properties[p].example,r,p);else if(null!==(l=e.properties[p])&&void 0!==l&&null!==(c=l.items)&&void 0!==c&&c.example)rP([e.properties[p].items.example],r,p);else{const n=aP(e.properties[p].items,t),a=[];for(const e in n)a[e]=[n[e]];r=nP(r,p,a)}else r=nP(r,p,aP(e.properties[p],t))}else{if("array"!==e.type&&!e.items)return{"example-0":QI(e)};var p;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if(null!==(p=e.items)&&void 0!==p&&p.example)r["example-0"]=[e.items.example];else{const n=aP(e.items,t);let a=0;for(const t in n)r[`example-${a}`]=[n[t]],eP(e.items,r[`example-${a}`]),a++}else r["example-0"]=[]}return r}}function oP(e,t=0){var r;let n="";if(e.title&&(n=`**${e.title}:** `),e.description&&(n=`${n} ${e.description} ${e.minItems||e.maxItems?'<span class="more-content">⤵</span><br/>':""}`),e.minItems&&(n=`${n} **Min Items:** ${e.minItems}`),e.maxItems&&(n=`${n} **Max Items:** ${e.maxItems}`),t>0&&null!==(r=e.items)&&void 0!==r&&r.description){let t="";e.items.minProperties&&(t=`**Min Properties:** ${e.items.minProperties}`),e.items.maxProperties&&(t=`${t} **Max Properties:** ${e.items.maxProperties}`),n=`${n} ⮕ ${t} [ ${e.items.description} ] `}return n}function iP(e,t,r=0,n=""){if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items)return`${JI(e.allOf[0]).html}`;e.allOf.map(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const a=(e.anyOf||e.oneOf)&&t>0?t:"",o=iP(e,{},r+1,a);Object.assign(n,o)}else if("array"===e.type||e.items){const t=iP(e,{},r+1);Object.assign(n,t)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`,r=JI(e);n[t]=`${r.html}`}}})),t=n}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=iP(e.properties[n],{},r+1):t[n]=iP(e.properties[n],{},r+1)}const a={},o=e.anyOf?"anyOf":"oneOf";e[o].forEach(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=iP(e,{});a[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,a["::type"]="xxx-of-option"}else if("array"===e.type||e.items){const r=iP(e,{});a[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,a["::type"]="xxx-of-array"}else{const r=`::OPTION~${t+1}${e.title?`~${e.title}`:""}`;a[r]=`${JI(e).html}`,a["::type"]="xxx-of-option"}})),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=a,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){const n=JSON.parse(JSON.stringify(e)),i=[],s=[];let l;var a;if(n.type.forEach((e=>{var t,r;e.match(/integer|number|string|null|boolean/g)?i.push(e):"array"===e&&"string"==typeof(null===(t=n.items)||void 0===t?void 0:t.type)&&null!==(r=n.items)&&void 0!==r&&r.type.match(/integer|number|string|null|boolean/g)?"string"===n.items.type&&n.items.format?i.push(`[${n.items.format}]`):i.push(`[${n.items.type}]`):s.push(e)})),i.length>0&&(n.type=i.join(2===i.length?" or ":"┃"),l=JI(n),0===s.length))return`${(null===(a=l)||void 0===a?void 0:a.html)||""}`;if(s.length>0){var o;t["::type"]="xxx-of";const a={"::type":"xxx-of-option"};s.forEach(((t,o)=>{if("null"===t)a[`::OPTION~${o+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${t},`)){n.type=Array.isArray(t)?t.join("┃"):t;const e=JI(n);a[`::OPTION~${o+1}`]=e.html}else if("object"===t){const t={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=iP(e.properties[n],{},r+1):t[n]=iP(e.properties[n],{},r+1);a[`::OPTION~${o+1}`]=t}else"array"===t&&(a[`::OPTION~${o+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":iP(e.items,{},r+1)})})),a[`::OPTION~${s.length+1}`]=(null===(o=l)||void 0===o?void 0:o.html)||"",t["::ONE~OF"]=a}}else if("object"===e.type||e.properties){t["::title"]=e.title||"",t["::description"]=oP(e,r),t["::type"]="object",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="object or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=iP(e.properties[n],{},r+1):t[n]=iP(e.properties[n],{},r+1);e.additionalProperties&&(t["<any-key>"]=iP(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){const t=JI(e);return null!=t&&t.html?`${t.html}`:""}var i;t["::title"]=e.title||"",t["::description"]=oP(e,r),t["::type"]="array",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="array or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",null!==(i=e.items)&&void 0!==i&&i.items&&(t["::array-type"]=e.items.items.type),t["::props"]=iP(e.items,{},r+1)}return t}}function sP(e,t,r="",n="",a=!0,o=!0,i="json",s=!1){const l=[];if(r)for(const e in r){let n="",a="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===i)n="string"==typeof r[e].value?r[e].value:JSON.stringify(r[e].value,void 0,2),a="text";else if(n=r[e].value,"string"==typeof r[e].value)try{const t=r[e].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');n=JSON.parse(t),a="json"}catch(t){a="text",n=r[e].value}}else n=r[e].value,a="text";l.push({exampleId:e,exampleSummary:r[e].summary||e,exampleDescription:r[e].description||"",exampleType:t,exampleValue:n,exampleFormat:a})}else if(n){let e="",r="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===i)e="string"==typeof n?n:JSON.stringify(n,void 0,2),r="text";else if("object"==typeof n)e=n,r="json";else if("string"==typeof n)try{e=JSON.parse(n),r="json"}catch(t){r="text",e=n}}else e=n,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===s)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:null!=t&&t.toLowerCase().includes("json")&&"object"==typeof e.example?"json":"text"});else if(null!=t&&t.toLowerCase().includes("json")||null!=t&&t.toLowerCase().includes("text")||null!=t&&t.toLowerCase().includes("*/*")||null!=t&&t.toLowerCase().includes("xml")){let r="",n="",s="",c="";null!=t&&t.toLowerCase().includes("xml")?(r=e.xml&&e.xml.name?`<${e.xml.name}>`:"<root>",n=e.xml&&e.xml.name?`</${e.xml.name}>`:"</root>",s="text"):s=i;const p=aP(e,{includeReadOnly:a,includeWriteOnly:o,deprecated:!0});let d=0;for(const e in p){if(!p[e])continue;const a=p[e]["::TITLE"]||"Example "+ ++d,o=p[e]["::DESCRIPTION"]||"";tP(p[e]),c=null!=t&&t.toLowerCase().includes("xml")?`${r}${XI(p[e])}\n${n}`:"text"===i?JSON.stringify(p[e],null,2):p[e],l.push({exampleId:e,exampleSummary:a,exampleDescription:o,exampleType:t,exampleFormat:s,exampleValue:c})}}else null!=t&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function lP(e){return"application/json"===e?"json":"application/xml"===e?"xml":null}function cP(e){if(e.schema)return[e.schema,null,null];if(e.content)for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,lP(t),e.content[t]];return[null,null,null]}customElements.define("json-tree",class extends X{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[qe,KI,Be,l`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,Je]}render(){return L`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e=>{Xe(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(null===e)return L`<div class="null" style="display:inline;">null</div>`;if("object"==typeof e&&e instanceof Date==0){const r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?L`${Array.isArray(e)?"[ ],":"{ },"}`:L`
      <div class="open-bracket expanded ${"array"===r?"array":"object"} " @click="${this.toggleExpand}" > ${"array"===r?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map(((t,n,a)=>L`
          <div class="item"> 
            ${"pure_object"===r?L`"${t}":`:""}
            ${this.generateTree(e[t],n===a.length-1)}
          </div>`))}
      </div>
      <div class="close-bracket">${"array"===r?"]":"}"}${t?"":","}</div>
      `}return"string"==typeof e||e instanceof Date?L`<span class="${typeof e}">"${e}"</span>${t?"":","}`:L`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});const pP=l`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key {
  overflow:hidden;
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;function dP(e){const t=new Fe.Renderer;return t.heading=(t,r,n,a)=>`<h${r} class="observe-me" id="${e}--${a.slug(n)}">${t}</h${r}>`,t}function uP(e,t=""){var r,n,a;const o=new Set;for(const t in e.responses)for(const r in null===(i=e.responses[t])||void 0===i?void 0:i.content){var i;o.add(r.trim())}const s=[...o].join(", "),l=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],c=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===Ze&&"-"!==e.value));c&&l.push(c);const p=e.xCodeSamples?qI.call(this,e.xCodeSamples):"";return L`
    ${"read"===this.renderStyle?L`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${"focused"===this.renderStyle&&"General ⦂"!==t?L`<h3 class="upper" style="font-weight:bold" part="section-operation-tag"> ${t} </h3>`:""}
      ${e.deprecated?L`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${L`
        ${e.xBadges&&(null===(r=e.xBadges)||void 0===r?void 0:r.length)>0?L`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map((e=>L`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
        ${e.isWebhook?L`<span part="section-operation-webhook style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:L`
            <div class='mono-font part="section-operation-webhook-method" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
              <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?L`<div class="m-markdown"> ${SI(Fe(e.description))}</div>`:""}
      ${zI.call(this,e.security)}
      ${p}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${l}"
          .servers = "${e.servers}"
          server-url = "${(null===(n=e.servers)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${s}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?BI.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function hP(){return this.resolvedSpec?L`
  ${this.resolvedSpec.tags.map((e=>L`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${SI(`\n          <div class="m-markdown regular-font">\n          ${Fe(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:dP(e.elementId)}:void 0)}\n        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map((e=>uP.call(this,e,"BBB")))}
    </section>
    `))}
`:""}function fP(e){return L`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${"table"===this.schemaStyle?L`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${iP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree> `:L`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${iP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}function mP(e,t){return-1!==e.id.indexOf("schemas-")?fP.call(this,e):L`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${L`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?L`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function yP(){return this.resolvedSpec?L`
  ${this.resolvedSpec.components.map((e=>L`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${SI(`<div class='m-markdown regular-font'>${Fe(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter((e=>!1!==e.expanded)).map((t=>mP.call(this,t,e.name)))}
    </div>
    `))}
`:""}function gP(){const e=new Fe.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="overview--${n.slug(r)}">${e}</h${t}>`,e}function vP(){var e,t,r,n;return L`
    <section id="overview" part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}">
      ${null!==(e=this.resolvedSpec)&&void 0!==e&&e.info?L`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?L`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${null!==(t=this.resolvedSpec.info.contact)&&void 0!==t&&t.email?L`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${null!==(r=this.resolvedSpec.info.contact)&&void 0!==r&&r.url?L`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?L`<span>License: 
                ${this.resolvedSpec.info.license.url?L`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?L`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&"true"===this.allowSpecFileDownload?L`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${e=>{rt(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${null!==(n=this.specUrl)&&void 0!==n&&n.trim().toLowerCase().endsWith("json")?L`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e=>{nt(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?L`${SI(`\n                <div class="m-markdown regular-font">\n                ${Fe(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:gP()}:void 0)}\n              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function bP(e){var t;const r=null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.find((t=>t.url===e));return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function xP(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach((e=>{const t=new RegExp(`{${e.dataset.var}}`,"g");n=n.replace(t,e.value)})),t.computedUrl=n,this.requestUpdate()}function wP(){return this.selectedServer&&this.selectedServer.variables?L`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map((e=>L`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?L`
            <select
              data-var = "${e[0]}"
              @input = ${e=>{xP.call(this,e,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map((t=>e[1].default===t[1]?L`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:L`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`))}
            </select>`:L`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${e=>{xP.call(this,e,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?L`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${SI(Fe(e[1].description))} </span></td></tr>`:""}
      `))}
    </table>
    `:""}function $P(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":L`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&0!==(null===(e=this.resolvedSpec.servers)||void 0===e?void 0:e.length)?L`
          ${null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.map(((e,t)=>L`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${t}'
              value = '${e.url}'
              @change = ${()=>{bP.call(this,e.url)}}
              .checked = '${this.selectedServer.url===e.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${t}'>
                ${e.url} ${e.description?L`- <span class='regular-font'>${e.description} </span>`:""}
              </label>
            <br/>
          `))}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${(null===(r=this.selectedServer)||void 0===r?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${wP.call(this)}
  </section>`}function kP(e,t="toggle"){const r=null==e?void 0:e.closest(".nav-bar-tag-and-paths");if(r){const e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function SP(e){kP(e.target,"toggle")}function AP(e,t="expand-all"){!function(e,t="expand-all"){const r=[...e.querySelectorAll(".nav-bar-tag-and-paths")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}(e.target.closest(".nav-scroll"),t)}function EP(){var e,t,r,n;return!this.resolvedSpec||this.resolvedSpec.specLoadError?L`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:L`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":L`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}" part="section-navbar-search">
          ${"false"===this.allowSearch?"":L`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?L`
                  <button @click = '${this.onClearSearch}' class="m-btn thin-border" style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;" part="btn btn-outline btn-clear-filter">
                    CLEAR
                  </button>`:""}
            `}
          ${"false"===this.allowAdvancedSearch||this.matchPaths?"":L`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px; padding:6px 8px; width:75px" @click="${this.onShowSearchModalClicked}">
                SEARCH
              </button>
            `}
        </div>
      `}
    ${L`<nav class='nav-scroll' part="section-navbar-scroll">
      ${"false"!==this.showInfo&&this.resolvedSpec.info?L`
          ${"true"===this.infoDescriptionHeadingsInNavBar?L`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?L`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
                    ${(null===(e=this.resolvedSpec.info)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.trim())||"Overview"}
                  </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map((e=>L`
                  <div 
                    class='nav-bar-h${e.depth}' 
                    id="link-overview--${(new Fe.Slugger).slug(e.text)}"  
                    data-content-id='overview--${(new Fe.Slugger).slug(e.text)}' 
                    @click='${e=>this.scrollToEventTarget(e,!1)}'
                  >
                    ${e.text}
                  </div>`))}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?L`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:L`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
            ${(null===(r=this.resolvedSpec.info)||void 0===r||null===(n=r.title)||void 0===n?void 0:n.trim())||"Overview"} 
              </div>`}
        `:""}
    
      ${"false"===this.allowServerSelection?"":L`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e=>this.scrollToEventTarget(e,!1)}'> API Servers </div>`}
      ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?L`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e=>this.scrollToEventTarget(e,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${"focused"===this.renderStyle?L`
              <div @click="${e=>{AP.call(this,e,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e=>{AP.call(this,e,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter((e=>e.paths.filter((e=>et(this.matchPaths,e,this.matchType))).length)).map((e=>L`
          <div class='nav-bar-tag-and-paths ${e.expanded?"expanded":"collapsed"}'>
            ${"General ⦂"===e.name?L`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:L`
                <div 
                  class='nav-bar-tag' 
                  id="link-${e.elementId}" 
                  data-content-id='${e.elementId}'
                  data-first-path-id='${e.firstPathId}'
                  @click='${e=>{"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?SP.call(this,e):this.scrollToEventTarget(e,!1)}}'
                >
                  <div>${e.name}</div>
                  <div class="nav-bar-tag-icon" @click="${e=>{"focused"===this.renderStyle&&"show-description"===this.onNavTagClick&&SP.call(this,e)}}">
                  </div>
                </div>
              `}
            ${"true"===this.infoDescriptionHeadingsInNavBar?L`
                ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":L`
                    <div class='tag-headers'>
                      ${e.headers.map((t=>L`
                      <div 
                        class='nav-bar-h${t.depth}' 
                        id="link-${e.elementId}--${(new Fe.Slugger).slug(t.text)}"  
                        data-content-id='${e.elementId}--${(new Fe.Slugger).slug(t.text)}' 
                        @click='${e=>this.scrollToEventTarget(e,!1)}'
                      > ${t.text}</div>`))}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter((e=>!this.matchPaths||et(this.matchPaths,e,this.matchType))).map((e=>L`
              <div 
                class='nav-bar-path
                ${"true"===this.usePathInNavBar?"small-font":""}'
                data-content-id='${e.elementId}'
                id='link-${e.elementId}'
                @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
              >
                <span style = "display:flex; align-items:start; ${e.deprecated?"filter:opacity(0.5)":""}">
                  ${L`<span class="nav-method ${this.showMethodInNavBar} ${e.method}">
                      ${"as-colored-block"===this.showMethodInNavBar?e.method.substring(0,3).toUpperCase():e.method.toUpperCase()}
                    </span>`}
                  ${e.isWebhook?L`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${"true"===this.usePathInNavBar?L`<span class='mono-font'>${e.path}</span>`:e.summary||e.shortSummary}
                </span>
              </div>`))}
            </div>
          </div>
        `))}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?L`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map((e=>e.subComponents.length?L`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}' 
                @click='${e=>this.scrollToEventTarget(e,!1)}'>
                ${e.name}
              </div>
              ${e.subComponents.filter((e=>!1!==e.expanded)).map((e=>L`
                <div class='nav-bar-path' data-content-id='cmp--${e.id}' id='link-cmp--${e.id}' @click='${e=>this.scrollToEventTarget(e,!1)}'>
                  <span> ${e.name} </span>
                </div>`))}`:""))}`:""}
    </nav>`}
</nav>
`}function OP(e){const t=new Fe.Renderer;return t.heading=(t,r,n,a)=>`<h${r} class="observe-me" id="${e}--${a.slug(n)}">${t}</h${r}>`,t}function TP(e){return L`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function CP(){var e;if("true"===this.showInfo)return TP(vP.call(this));const t=this.resolvedSpec.tags[0],r=null===(e=this.resolvedSpec.tags[0])||void 0===e?void 0:e.paths[0];return TP(t&&r?uP.call(this,r,t.name):"")}function jP(e){return L`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?L`
        <div class="m-markdown">
          ${SI(`\n            <div class="m-markdown regular-font">\n              ${Fe(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:OP(e.elementId)}:void 0)}\n            </div>`)}
        </div>`:""}
  `}function _P(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,a=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=vP.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=NI.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=$P.call(this);else if("operations-top"===e)t=L`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=yP.call(this);else if(e.startsWith("tag--")){const r=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find((e=>e.elementId===r)),t=n?TP.call(this,jP.call(this,n)):CP.call(this)}else{for(a=0;a<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[a],r=this.resolvedSpec.tags[a].paths.find((t=>`${t.elementId}`===e)),!r);a+=1);r?(kP(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=TP.call(this,uP.call(this,r,n.name))):t=CP.call(this)}return t}function IP(e){if(e.expanded)e.expanded=!1,"true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${"#"===this.routePrefix?"":`${this.routePrefix}`}`);else if(e.expanded=!0,"true"===this.updateRoute){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${t}`)}this.requestUpdate()}function PP(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}function RP(e,t="expand-all"){PP.call(this,e.target.closest(".operations-root"),t)}function LP(e,t=!1){return L`
  <summary @click="${t=>{IP.call(this,e,t)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?L`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?L`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?L`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function DP(e){var t;const r=new Set;for(const t in e.responses)for(const a in null===(n=e.responses[t])||void 0===n?void 0:n.content){var n;r.add(a.trim())}const a=[...r].join(", "),o=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],i=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===Ze&&"-"!==e.value));i&&o.push(i);const s=e.xCodeSamples?qI(e.xCodeSamples):"";return L`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?L`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?L`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&(null===(t=e.xBadges)||void 0===t?void 0:t.length)>0?L`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map((e=>L`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
          </div>
          `:""}

      ${e.description?L`<div part="section-endpoint-body-description" class="m-markdown"> ${SI(Fe(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${zI.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${o}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${a}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

          ${e.callbacks?BI.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        webhook = "${e.isWebhook}"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
        schema-hide-write-only = "${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
        textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
        schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </api-response>
    </div>
  </div>`}function FP(e=!0,t=!0,r=!1){return this.resolvedSpec?L`
    ${e?L`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e=>RP(e,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e=>RP(e,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map((e=>L`
      ${t?L` 
          <div class='regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}">
              <div id='${e.elementId}' class="sub-title tag" style="color:var(--primary-color)">${e.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${e.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${SI(Fe(e.description||""))}
              </div>
              ${e.paths.filter((e=>!this.matchPaths||et(this.matchPaths,e,this.matchType))).map((e=>L`
                <section part="section-endpoint" id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
                  ${LP.call(this,e,r)}      
                  ${r||e.expanded?DP.call(this,e):""}
                </section>`))}
            </div>
          </div>`:L`
          <div class='section-tag-body'>
          ${e.paths.filter((e=>!this.matchPaths||et(this.matchPaths,e,this.matchType))).map((e=>L`
            <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
              ${LP.call(this,e,r)}      
              ${r||e.expanded?DP.call(this,e):""}
            </section>`))}
          </div>
        `}
  `))}`:""}function NP(){return L`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${"height:36px;width:36px;margin-left:5px",L`
  <div style=${"height:36px;width:36px;margin-left:5px"}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":L`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${"false"===this.allowSpecFileLoad?"":L`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":L`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":L`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`}customElements.define("schema-tree",class extends X{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[qe,pP,KI,l`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,Je]}render(){var e,t,r;return L`
      <div class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?L`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?L`<span part="schema-description" class='m-markdown'> ${SI(Fe(this.data["::description"]||""))}</span>`:""}
        ${this.data?L`
            ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:L`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return L`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?L`<span class='mono-font'> [ ] </span>`:"object"===t?L`<span class='mono-font'> { } </span>`:L`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(0===Object.keys(e).length)return L`<span class="key object">${n}:{ }</span>`;let c="",p="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const e=n.split("~");c=e[1],p=e[2]}else c=n;const d=400-12*i;let u="",h="";const f=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?o:o+1,m="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?i:i+1;if("object"===e["::type"])"array"===t?(u=o<this.schemaExpandLevel?L`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:L`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,h="}]"):(u=o<this.schemaExpandLevel?L`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:L`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,h="}");else if("array"===e["::type"])if("array"===t){const e="object"!==r?r:"";u=o<this.schemaExpandLevel?L`<span class="open-bracket array-of-array" data-array-type="${e}" @click="${this.toggleObjectExpand}">[[ ${e} </span>`:L`<span class="open-bracket array-of-array"  data-array-type="${e}" @click="${this.toggleObjectExpand}">[[...]]</span>`,h="]]"}else u=o<this.schemaExpandLevel?L`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:L`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,h="]";var y;if("object"==typeof e)return L`
        <div class="tr ${o<this.schemaExpandLevel||null!==(y=e["::type"])&&void 0!==y&&y.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${d}px'>
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?L`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${p}</span>`:"::props"===c||"::ARRAY~OF"===c?"":o>0?L`<span class="key-label" title="${"readonly"===s?"Read-Only":"writeonly"===s?"Write-Only":""}">
                      ${e["::deprecated"]?"✗":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?L`<span style="color:var(--red)">*</span>`:""}${"readonly"===s?L` 🆁`:"writeonly"===s?L` 🆆`:s}:
                    </span>`:""}
            ${"xxx-of"===e["::type"]&&"array"===t?L`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${u}
          </div>
          <div class='td key-descr m-markdown-small'>${SI(Fe(a||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;'>
          ${Array.isArray(e)&&e[0]?L`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",f,m,e[0]["::readwrite"])}`:L`
              ${Object.keys(e).map((t=>L`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?L`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":L`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
              `))}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":L`<div class='close-bracket'> ${h} </div>`}
      `;const[g,v,b,x,w,$,k,S,A]=e.split("~|~");if("🆁"===v&&"true"===this.schemaHideReadOnly)return;if("🆆"===v&&"true"===this.schemaHideWriteOnly)return;const E=g.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let O="",T="";return"array"===t?"readonly"===s?(O="🆁",T="Read-Only"):"writeonly"===s&&(O="🆆",T="Write-Only"):"🆁"===v?(O="🆁",T="Read-Only"):"🆆"===v&&(O="🆆",T="Write-Only"),L`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='min-width:${d}px'>
          ${A?L`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?L`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?L`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${p}</span>`:L`<span class="key-label">${c}:</span>`}
          <span class="${E}" title="${T}"> 
            ${"array"===t?`[${g}]`:`${g}`}
            ${O}
          </span>
        </div>
        <div class='td key-descr'>
          ${"array"===t?L`<span class="m-markdown-small">${SI(Fe(a))}</span>`:""}
          ${k?L`<span class="m-markdown-small">
              ${SI(Fe(`${S?`**${S}:**`:""} ${k} ${b||x||w||$?'<span class="more-content">⤵</span>':""}`))}
              </span>`:S?L`${S} ${b||x||w||$?L`<span class="more-content">⤵</span>`:""}`:""}
          ${b?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${b}</div>`:""}
          ${x?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${$?L`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends X{render(){let e="";return Array.isArray(this.value)&&(e=L`${this.value.filter((e=>""!==e.trim())).map((e=>L`<span class='tag'>${e}</span>`))}`),L`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${e=>this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter((e=>""!==e.trim()))),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter((e=>""!==e.trim())):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[l`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends X{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},webhook:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[Me,Be,qe,Ue,KI,Ve,We,l`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,Je]}render(){return L`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${MI([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("path")))}
        ${MI([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("query")))}
        ${this.requestBodyTemplate()}
        ${MI([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("header")))}
        ${MI([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("cookie")))}
        ${"false"===this.allowTry?"":L`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}async saveExampleState(){"focused"===this.renderStyle&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.dataset.user_example=e.value})),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.dataset.user_example=e.value})),this.requestUpdate())}async updateExamplesFromDataAttr(){"focused"===this.renderStyle&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example})),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example})),this.requestUpdate())}renderExample(e,t,r){var n,a;return L`
      ${"array"===t?"[":""}
      <a
        part="anchor anchor-param-example"
        class="${"true"===this.allowTry?"":"inactive-link"}"
        data-example-type="${"array"===t?t:"string"}"
        data-example="${e.value&&Array.isArray(e.value)?null===(n=e.value)||void 0===n?void 0:n.join("~|~"):e.value||""}"
        @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.exampleType?t.value=e.target.dataset.example.split("~|~"):t.value=e.target.dataset.example)}}"
      >
        ${e.value&&Array.isArray(e.value)?null===(a=e.value)||void 0===a?void 0:a.join(", "):e.value||"∅"}
      </a>
      ${"array"===t?"] ":""}
    `}renderShortFormatExamples(e,t,r){return L`${e.map(((e,n)=>L`
      ${0===n?"":"┃"}
      ${this.renderExample(e,t,r)}`))}`}renderLongFormatExamples(e,t,r){return L` <ul style="list-style-type: disclosure-closed;">
      ${e.map((e=>{var n,a;return L`
          <li>
            ${this.renderExample(e,t,r)}
            ${(null===(n=e.summary)||void 0===n?void 0:n.length)>0?L`<span>&lpar;${e.summary}&rpar;</span>`:""}
            ${(null===(a=e.description)||void 0===a?void 0:a.length)>0?L`<p>${SI(Fe(e.description))}</p>`:""}
          </li>
        `}))}
    </ul>`}exampleListTemplate(e,t,r=[]){return L` ${r.length>0?L`<span style="font-weight:bold">Examples: </span>
          ${n=r,n.some((e=>{var t,r;return(null===(t=e.summary)||void 0===t?void 0:t.length)>0||(null===(r=e.description)||void 0===r?void 0:r.length)>0}))?this.renderLongFormatExamples(r,t,e):this.renderShortFormatExamples(r,t,e)}`:""}`;var n}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter((t=>t.in===e)):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");const n=[];for(const r of t){const[t,a,o]=cP(r);if(!t)continue;const i=JI(t);if(!i)continue;const s=iP(t,{});let l="form",c=!0,p=!1;"query"===e&&(r.style&&"form spaceDelimited pipeDelimited".includes(r.style)?l=r.style:a&&(l=a),"boolean"==typeof r.explode&&(c=r.explode),"boolean"==typeof r.allowReserved&&(p=r.allowReserved));const d=ZI(r.examples||YI(r.example)||YI(null==o?void 0:o.example)||(null==o?void 0:o.examples)||i.examples||YI(i.example),i.type);d.exampleVal||"object"!==i.type||(d.exampleVal=sP(t,a||"json","","","true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,!0,"text")[0].exampleValue);const u="read focused".includes(this.renderStyle)?"200px":"160px";n.push(L`
      <tr title="${r.deprecated?"Deprecated":""}"> 
        <td rowspan="${"true"===this.allowTry?"1":"2"}" style="width:${u}; min-width:100px;">
          <div class="param-name ${r.deprecated?"deprecated":""}" >
            ${r.deprecated?L`<span style='color:var(--red);'>✗</span>`:""}
            ${r.required?L`<span style='color:var(--red)'>*</span>`:""}
            ${r.name}
          </div>
          <div class="param-type">
            ${"array"===i.type?`${i.arrayType}`:`${i.format?i.format:i.type}`}
          </div>
        </td>  
        ${"true"===this.allowTry?L`
            <td style="min-width:100px;" colspan="${i.default||i.constrain||i.allowedValues||i.pattern?"1":"2"}">
              ${"array"===i.type?L`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${r.name}"
                    data-example = "${Array.isArray(d.exampleVal)?d.exampleVal.join("~|~"):d.exampleVal}"
                    data-param-serialize-style = "${l}"
                    data-param-serialize-explode = "${c}"
                    data-param-allow-reserved = "${p}"
                    data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${"no"===r["x-fill-example"]?[]:WI("true"===this.fillRequestFieldsWithExample?Array.isArray(d.exampleVal)?d.exampleVal:[d.exampleVal]:[])}"
                  >
                  </tag-input>`:"object"===i.type?L`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e=>{if("button"===e.target.tagName.toLowerCase()){const t={...this.activeParameterSchemaTabs};t[r.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t}}}">
                        <button class="tab-btn ${"example"===this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${"example"!==this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${"example"===this.activeParameterSchemaTabs[r.name]?L`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${r.name}"
                            data-example = "${d.exampleVal}"
                            data-param-serialize-style = "${l}"
                            data-param-serialize-explode = "${c}"
                            data-param-allow-reserved = "${p}"
                            data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                            spellcheck = "false"
                            .textContent="${"no"===r["x-fill-example"]?"":WI("true"===this.fillRequestFieldsWithExample?d.exampleVal:"")}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:L`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${s}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>`:L`
                    <input type="${"password"===i.format?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${r.name}" 
                      data-example="${Array.isArray(d.exampleVal)?d.exampleVal.join("~|~"):d.exampleVal}"
                      data-param-allow-reserved = "${p}"
                      data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${"no"===r["x-fill-example"]?"":WI("true"===this.fillRequestFieldsWithExample?d.exampleVal:"")}"
                    />`}
            </td>`:""}
        ${i.default||i.constrain||i.allowedValues||i.pattern?L`
            <td colspan="${"true"===this.allowTry?"1":"2"}">
              <div class="param-constraint">
                ${i.default?L`<span style="font-weight:bold">Default: </span>${i.default}<br/>`:""}
                ${i.pattern?L`<span style="font-weight:bold">Pattern: </span>${i.pattern}<br/>`:""}
                ${i.constrain?L`${i.constrain}<br/>`:""}
                ${i.allowedValues&&i.allowedValues.split("┃").map(((e,t)=>L`
                  ${t>0?"┃":L`<span style="font-weight:bold">Allowed: </span>`}
                  ${L`
                    <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                      data-type="${"array"===i.type?i.type:"string"}"
                      data-enum="${e.trim()}"
                      @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                    >${e}</a>`}`))}
              </div>
            </td>`:L`<td></td>`}
      </tr>
      <tr>
        ${"true"===this.allowTry?L`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${SI(Fe(r.description||""))}</span>
          ${this.exampleListTemplate.call(this,r.name,i.type,d.exampleList)}
        </td>
      </tr>
    `)}return L`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}async beforerNavigationFocusedMode(){}async afterNavigationFocusedMode(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.updateExamplesFromDataAttr(),this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout((e=>{const t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText}),0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout((e=>{const t=e.closest(".request-body-container").querySelector(".request-body-param");t&&(e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText)}),0,t)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",n="",a="";const o=[],{content:i}=this.request_body;for(const e in i)o.push({mimeType:e,schema:i[e].schema,example:i[e].example,examples:i[e].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=e);return e=1===o.length?"":L`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e=>this.onMimeTypeChange(e)}'>
          ${o.map((e=>L`
            <option value = '${e.mimeType}' ?selected = '${e.mimeType===this.selectedRequestBodyType}'>
              ${e.mimeType}
            </option> `))}
        </select>
      `,o.forEach((e=>{let o,i=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))e.mimeType===this.selectedRequestBodyType&&(i=sP(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=i.length>0?i[0].exampleId:""),a=L`
            ${a}
            <div class = 'example-panel border-top pad-top-8'>
              ${1===i.length?"":L`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e=>this.onSelectExample(e)}'>
                    ${i.map((e=>L`<option value="${e.exampleId}" ?selected=${e.exampleId===this.selectedRequestBodyExample} > 
                      ${e.exampleSummary.length>80?e.exampleId:e.exampleSummary?e.exampleSummary:e.exampleId} 
                    </option>`))}
                  </select>
                `}
              ${i.filter((e=>e.exampleId===this.selectedRequestBodyExample)).map((t=>L`
                <div class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${t.exampleId}'>
                  ${t.exampleSummary&&t.exampleSummary.length>80?L`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                  ${t.exampleDescription?L`<div class="m-markdown-small" style="padding: 4px 0"> ${SI(Fe(t.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    data-example = "${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                    data-example-format = "${t.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                  ></textarea>
                </div>  
              `))}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){const t=sP(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=L`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${e.mimeType}" spellcheck="false" />
            </div>  
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(o=iP(e.schema,{}),"table"===this.schemaStyle?n=L`
            ${n}
            <schema-table
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${o}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:"tree"===this.schemaStyle&&(n=L`
            ${n}
            <schema-tree
              class = "${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data = "${o}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))})),L`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?L`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?L`<div class="m-markdown" style="margin-bottom:12px">${SI(Fe(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?L`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
                <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${L`<div class="tab-content col" style="display:${"example"===this.activeSchemaTab?"block":"none"};"> ${a}</div>`}
              ${L`<div class="tab-content col" style="display:${"example"===this.activeSchemaTab?"none":"block"};"> ${n}</div>`}
            </div>`:L`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const a=iP(t,{}),o=sP(t,"json",t.examples,t.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);return L`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e=>{if(e.target.classList.contains("v-tab-btn")){const{tab:t}=e.target.dataset;if(t){const r=e.target.closest(".tab-panel"),n=r.querySelector(`.v-tab-btn[data-tab="${t}"]`),a=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],o=r.querySelector(`.tab-content[data-tab="${t}"]`),i=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)];n.classList.add("active"),o.style.display="block",a.forEach((e=>{e.classList.remove("active")})),i.forEach((e=>{e.style.display="none"}))}}"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
          <button class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${L`
        <div class="tab-content col" data-tab = 'example' style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${(null===(n=o[0])||void 0===n?void 0:n.exampleValue)||""}"
            .textContent = "${"true"===this.fillRequestFieldsWithExample?o[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${L`
        <div class="tab-content col" data-tab = 'schema' style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${a}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const r in e.properties){var a,o;const i=e.properties[r];if(i.readOnly)continue;const s=i.examples||i.example||"",l=i.type,c=JI(i),p="read focused".includes(this.renderStyle)?"200px":"160px",d=ZI(c.examples||c.example,c.type);n.push(L`
        <tr title="${i.deprecated?"Deprecated":""}"> 
          <td style="width:${p}; min-width:100px;">
            <div class="param-name ${i.deprecated?"deprecated":""}">
              ${r}${null!==(a=e.required)&&void 0!==a&&a.includes(r)||i.required?L`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${c.type}</div>
          </td>  
          <td 
            style="${"object"===l?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;" 
            colspan="${"object"===l?2:1}">
            ${"array"===l?"binary"===(null===(o=i.items)||void 0===o?void 0:o.format)?L`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e=>this.onAddRemoveFileInput(e,r,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${r}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:L`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${r}"
                    data-example = "${Array.isArray(s)?s.join("~|~"):s}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(s)?Array.isArray(s[0])?s[0]:[s[0]]:[s]}"
                  >
                  </tag-input>
                `:L`
                ${"object"===l?this.formDataParamAsObjectTemplate.call(this,r,i,t):L`
                    ${"true"===this.allowTry?L`<input
                          .value = "${"true"===this.fillRequestFieldsWithExample?d.exampleVal:""}"
                          spellcheck = "false"
                          type = "${"binary"===i.format?"file":"password"===i.format?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${r}"
                          data-example = "${Array.isArray(s)?s[0]:s}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${"object"===l?"":L`
              <td>
                ${c.default||c.constrain||c.allowedValues||c.pattern?L`
                    <div class="param-constraint">
                      ${c.default?L`<span style="font-weight:bold">Default: </span>${c.default}<br/>`:""}
                      ${c.pattern?L`<span style="font-weight:bold">Pattern: </span>${c.pattern}<br/>`:""}
                      ${c.constrain?L`${c.constrain}<br/>`:""}
                      ${c.allowedValues&&c.allowedValues.split("┃").map(((e,t)=>L`
                        ${t>0?"┃":L`<span style="font-weight:bold">Allowed: </span>`}
                        ${L`
                          <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                            data-type="${"array"===c.type?c.type:"string"}"
                            data-enum="${e.trim()}"
                            @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                          > 
                            ${e} 
                          </a>`}`))}
                    </div>`:""}
              </td>`}
        </tr>
        ${"object"===l?"":L`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${SI(Fe(i.description||""))}</span>
                ${this.exampleListTemplate.call(this,r,c.type,d.exampleList)}
              </td>
            </tr>
          `}`)}return L`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return L`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?L`<span class="m-markdown-small">${SI(Fe(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){let e="",t="";if(!this.responseIsBlob)if(this.responseHeaders.includes("application/x-ndjson")){e="json";const r=this.responseText.split("\n").map((t=>ze().highlight(t,ze().languages[e],e))).join("\n");t=L`<code>${SI(r)}</code>`}else this.responseHeaders.includes("json")?(e="json",t=L`<code>${SI(ze().highlight(this.responseText,ze().languages[e],e))}</code>`):this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?(e="html",t=L`<code>${SI(ze().highlight(this.responseText,ze().languages[e],e))}</code>`):(e="text",t=L`<code>${this.responseText}</code>`);return L`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}">
          <button class="tab-btn ${"response"===this.activeResponseTab?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${"curl"===this.activeResponseTab?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?L`
            <div class="tab-content col" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e=>{rt(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType?L`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e=>{nt(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:L`
            <div class="tab-content col m-markdown" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e=>{Xe(this.responseText,e)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${t}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${"headers"===this.activeResponseTab?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{Xe(this.responseHeaders,e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${SI(ze().highlight(this.responseHeaders,ze().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1; display:${"curl"===this.activeResponseTab?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{Xe(this.curlSyntax.replace(/\\$/,""),e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${SI(ze().highlight(this.curlSyntax.trim().replace(/\\$/,""),ze().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=L`
        <select style="min-width:100px;" @change='${e=>{this.serverUrl=e.target.value}}'>
          ${this.servers.map((e=>L`<option value = "${e.url}"> ${e.url} - ${e.description} </option>`))}
        </select>
      `);const n=L`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?L`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return L`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${(null===(e=this.security)||void 0===e?void 0:e.length)>0?L`
              ${this.api_keys.length>0?L`<div style="color:var(--blue); overflow:hidden;"> 
                    ${1===this.api_keys.length?`${null===(t=this.api_keys[0])||void 0===t?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:L`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:L`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?L`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)}))}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.value=""}))}async onTryClick(e){var t;const r=e.target;let n,a,o="",i="",s="",l="";const c=null===(t=this.closest(".expanded-req-resp-container, .req-resp-container"))||void 0===t?void 0:t.getElementsByTagName("api-response")[0],p=null==c?void 0:c.selectedMimeType,d=e.target.closest(".request-panel"),u=[...d.querySelectorAll("[data-ptype='path']")],h=[...d.querySelectorAll("[data-ptype='query']")],f=[...d.querySelectorAll("[data-ptype='query-object']")],m=[...d.querySelectorAll("[data-ptype='header']")],y=d.querySelector(".request-body-container");n=this.path;const g={method:this.method.toUpperCase()};u.map((e=>{n=n.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))}));const v=new Map,b=[];h.length>0&&h.forEach((e=>{const t=new URLSearchParams;if("true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"false"===e.dataset.array)""!==e.value&&t.append(e.dataset.pname,e.value);else{const{paramSerializeStyle:r,paramSerializeExplode:n}=e.dataset;let a=e.value&&Array.isArray(e.value)?e.value:[];a=Array.isArray(a)?a.filter((e=>""!==e)):[],a.length>0&&("spaceDelimited"===r?t.append(e.dataset.pname,a.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===r?t.append(e.dataset.pname,a.join("|").replace(/^\||\|$/g,"")):"true"===n?a.forEach((r=>{t.append(e.dataset.pname,r)})):t.append(e.dataset.pname,a.join(",").replace(/^,|,$/g,"")))}t.toString()&&v.set(e.dataset.pname,t)})),f.length>0&&f.map((e=>{const t=new URLSearchParams;try{let r={};const{paramSerializeStyle:n,paramSerializeExplode:a}=e.dataset;if(r=Object.assign(r,JSON.parse(e.value.replace(/\s+/g," "))),"true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"json xml".includes(n))"json"===n?t.append(e.dataset.pname,JSON.stringify(r)):"xml"===n&&t.append(e.dataset.pname,XI(r));else for(const e in r)"object"==typeof r[e]?Array.isArray(r[e])&&("spaceDelimited"===n?t.append(e,r[e].join(" ")):"pipeDelimited"===n?t.append(e,r[e].join("|")):"true"===a?r[e].forEach((r=>{t.append(e,r)})):t.append(e,r[e])):t.append(e,r[e])}catch(t){console.log("RapiDoc: unable to parse %s into object",e.value)}t.toString()&&v.set(e.dataset.pname,t)}));let x="";v.size&&(x="?",v.forEach(((e,t)=>{b.includes(t)?(x+=`${t}=`,x+=e.getAll(t).join(`&${t}=`),x+="&"):x+=`${e.toString()}&`})),x=x.slice(0,-1)),n=`${n}${x}`,this.api_keys.filter((e=>"query"===e.in)).forEach((e=>{n=`${n}${n.includes("?")?"&":"?"}${e.name}=${encodeURIComponent(e.finalKeyValue)}`})),n=`${this.serverUrl.replace(/\/$/,"")}${n}`,a=!1===n.startsWith("http")?new URL(n,window.location.href).href:n,o=`curl -X ${this.method.toUpperCase()} "${a}" \\\n`;const w=new Headers;if(p?(w.append("Accept",p),i+=` -H "Accept: ${p}" \\\n`):this.accept&&(w.append("Accept",this.accept),i+=` -H "Accept: ${this.accept}" \\\n`),this.api_keys.filter((e=>"header"===e.in)).forEach((e=>{w.append(e.name,e.finalKeyValue),i+=` -H "${e.name}: ${e.finalKeyValue}" \\\n`})),m.map((e=>{e.value&&(w.append(e.dataset.pname,e.value),i+=` -H "${e.dataset.pname}: ${e.value}" \\\n`)})),y){const t=y.dataset.selectedRequestBodyType;if(t.includes("form-urlencoded")){const t=d.querySelector("[data-ptype='dynamic-form']");if(t){const r=t.value,n=new URLSearchParams;let a,o=!0;if(r)try{a=JSON.parse(r)}catch(e){o=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else o=!1;if(o){for(const e in a)n.append(e,JSON.stringify(a[e]));g.body=n,s=` -d ${n.toString()} \\\n`}}else{const e=[...d.querySelectorAll("[data-ptype='form-urlencode']")],t=new URLSearchParams;e.filter((e=>"file"!==e.type)).forEach((e=>{if("false"===e.dataset.array)e.value&&t.append(e.dataset.pname,e.value);else{const r=e.value&&Array.isArray(e.value)?e.value.join(","):"";t.append(e.dataset.pname,r)}})),g.body=t,s=` -d ${t.toString()} \\\n`}}else if(t.includes("form-data")){const e=new FormData;[...d.querySelectorAll("[data-ptype='form-data']")].forEach((t=>{"false"===t.dataset.array?"file"===t.type&&t.files[0]?(e.append(t.dataset.pname,t.files[0],t.files[0].name),l+=` -F "${t.dataset.pname}=@${t.files[0].name}" \\\n`):t.value&&(e.append(t.dataset.pname,t.value),l+=` -F "${t.dataset.pname}=${t.value}" \\\n`):t.value&&Array.isArray(t.value)&&(t.value.forEach((e=>{l=`${l} -F "${t.dataset.pname}[]=${e}" \\\n`})),e.append(t.dataset.pname,t.value.join(",")))})),g.body=e}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(t)){const e=d.querySelector(".request-body-param-file");null!=e&&e.files[0]&&(g.body=e.files[0],s=` --data-binary @${e.files[0].name} \\\n`)}else if(t.includes("json")||t.includes("xml")||t.includes("text")){const r=d.querySelector(".request-body-param-user-input");if(null!=r&&r.value){if(g.body=r.value,t.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(r.value))}' \\\n`}catch(e){}s||(s=` -d '${r.value.replace(/'/g,"'\"'\"'")}' \\\n`)}}t.includes("form-data")||w.append("Content-Type",t),i+=` -H "Content-Type: ${t}" \\\n`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=`${o}${i}${s}${l}`,this.fetchCredentials&&(g.credentials=this.fetchCredentials);const $=new AbortController,{signal:k}=$;g.headers=w;const S=new Request(n,g);let A,E;this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:S,controller:$}}));try{let e,t,n;r.disabled=!0,this.responseText="⌛",this.responseMessage="",this.requestUpdate();const a=performance.now();A=await fetch(S,{signal:k});const o=performance.now();E=A.clone(),r.disabled=!1,this.responseMessage=L`${A.statusText?`${A.statusText}:${A.status}`:A.status} <div style="color:var(--light-fg)"> Took ${Math.round(o-a)} milliseconds </div>`,this.responseUrl=A.url;const i={};A.headers.forEach(((e,t)=>{i[t]=e,this.responseHeaders=`${this.responseHeaders}${t}: ${e}\n`}));const s=A.headers.get("content-type");if(0===(await A.clone().text()).length)this.responseText="";else if(s){if("application/x-ndjson"===s)this.responseText=await A.text();else if(s.includes("json"))if(/charset=[^"']+/.test(s)){const e=s.split("charset=")[1],r=await A.arrayBuffer();try{n=new TextDecoder(e).decode(r)}catch{n=new TextDecoder("utf-8").decode(r)}try{t=JSON.parse(n),this.responseText=JSON.stringify(t,null,2)}catch{this.responseText=n}}else t=await A.json(),this.responseText=JSON.stringify(t,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(s)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test(s)?(this.responseIsBlob=!0,this.responseBlobType="view"):(n=await A.text(),s.includes("xml")?this.responseText=GI()(n,{textNodesOnSameLine:!0,indentor:"  "}):this.responseText=n);if(this.responseIsBlob){const t=A.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/"|'/g,""):"filename",e=await A.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else n=await A.text(),this.responseText=n;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:S,response:E,responseHeaders:i,responseBody:t||n||e,responseStatus:E.ok}}))}catch(e){r.disabled=!1,"AbortError"===e.name?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:e,request:S}})),this.responseMessage="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:S}})),this.responseMessage=`${e.message} (CORS or Network Issue)`)}this.requestUpdate()}onAddRemoveFileInput(e,t,r){if("button"!==e.target.tagName.toLowerCase())return;if(e.target.classList.contains("file-input-remove-btn"))return void e.target.closest(".input-set").remove();const n=e.target.closest(".file-input-container"),a=document.createElement("div");a.setAttribute("class","input-set row");const o=document.createElement("input");o.type="file",o.style="width:200px; margin-top:2px;",o.setAttribute("data-pname",t),o.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),o.setAttribute("data-array","false"),o.setAttribute("data-file-array","true");const i=document.createElement("button");i.setAttribute("class","file-input-remove-btn"),i.innerHTML="&#x2715;",a.appendChild(o),a.appendChild(i),n.insertBefore(a,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends X{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[qe,pP,l`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,Je]}render(){var e,t,r;return L`
      <div class="table ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?L`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?L`<span part="schema-description" class='m-markdown'> ${SI(Fe(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?L`
              ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l,c;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return L`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(o+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?L`<span class='mono-font'> [ ] </span>`:"object"===t?L`<span class='mono-font'> { } </span>`:L`<span class='mono-font'> schema undefined </span>`}
      </div>`;const p=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?o:o+1,d="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?i:i+1,u=16*d;if(0===Object.keys(e).length)return L`<span class="td key object" style='padding-left:${u}px'>${n}</span>`;let h="",f="",m=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))h=n.replace("::","").replace("~"," "),m=!0;else if(n.startsWith("::OPTION")){const e=n.split("~");h=e[1],f=e[2]}else h=n;let y="";if("object"===e["::type"]?y="array"===t?"array of object":e["::dataTypeLabel"]||e["::type"]:"array"===e["::type"]&&(y="array"===t?"array of array "+("object"!==r?`of ${r}`:""):e["::dataTypeLabel"]||e["::type"]),"object"==typeof e)return L`
        ${p>=0&&n?L`
            <div class='tr ${p<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${h}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${u}px'>
                ${h||f?L`
                    <span 
                      class='obj-toggle ${p<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${h}'
                      @click= ${e=>this.toggleObjectExpand(e,h)} 
                    >
                      ${o<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?L`<span class="xxx-of-key" style="margin-left:-6px">${h}</span><span class="${m?"xxx-of-key":"xxx-of-descr"}">${f}</span>`:h.endsWith("*")?L`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${h.substring(0,h.length-1)}</span><span style='color:var(--red);'>*</span>`:L`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${"::props"===h?"":h}</span>`}
                ${"xxx-of"===e["::type"]&&"array"===t?L`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${"readonly"===e["::readwrite"]?"Read-Only":"writeonly"===e["::readwrite"]?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":y}
                ${"readonly"===e["::readwrite"]?" 🆁":"writeonly"===e["::readwrite"]?" 🆆":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${SI(Fe(a||""))}</div>
            </div>`:L`
              ${"array"===e["::type"]&&"array"===t?L`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${r&&"object"!==r?`${t} of ${r}`:t}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?L`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",p,d,"")}`:L`
            ${Object.keys(e).map((t=>L`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?L`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,d,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":L`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,d,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
            `))}
          `}
        <div>
      `;const[g,v,b,x,w,$,k,S,A]=e.split("~|~");if("🆁"===v&&"true"===this.schemaHideReadOnly)return;if("🆆"===v&&"true"===this.schemaHideWriteOnly)return;const E=g.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let O="";return O="array"===t?L` 
        <div class='td key-type ${E}' title="${"readonly"===s?"Read-Only":"writeonly"===v?"Write-Only":""}">
          [${g}] ${"readonly"===s?"🆁":"writeonly"===s?"🆆":""}
        </div>`:L` 
        <div class='td key-type ${E}' title="${"🆁"===v?"Read-Only":"🆆"===v?"Write-Only":""}">
          ${g} ${v}
        </div>`,L`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='padding-left:${u}px'>
          ${A?L`<span style='color:var(--red);'>✗</span>`:""}
          ${null!==(c=h)&&void 0!==c&&c.endsWith("*")?L`
              <span class="key-label">${h.substring(0,h.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?L`<span class='xxx-of-key'>${h}</span><span class="xxx-of-descr">${f}</span>`:L`${h?L`<span class="key-label"> ${h}</span>`:L`<span class="xxx-of-descr">${S}</span>`}`}
        </div>
        ${O}
        <div class='td key-descr' @click="${()=>{this.schemaDescriptionExpanded="true"}}">
          ${"array"===t?L`<span class="m-markdown-small">${SI(Fe(a))}</span>`:""}
          ${k?L`<span class="m-markdown-small">
              ${SI(Fe(`${S?`**${S}:**`:""} ${k} ${b||x||w||$?'<span  class="more-content">⤵</span>':""}`))}
              </span>`:S?L`${S} ${b||x||w||$?L`<span class="more-content">⤵</span>`:""}`:""}
          ${b?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${b}</div>`:""}
          ${x?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${$?L`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}}),customElements.define("api-response",class extends X{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},webhook:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[qe,Ue,Ve,Me,Be,KI,l`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,Je]}render(){return L`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const a={};for(const r in null===(e=this.responses[n])||void 0===e?void 0:e.content){var e,t;const o=this.responses[n].content[r];this.selectedMimeType||(this.selectedMimeType=r);const i=iP(o.schema,{}),s=sP(o.schema,r,o.examples,o.example,"true"!==this.callback&&"true"!==this.webhook,"true"===this.callback||"true"===this.webhook,r.includes("json")?"json":"text");a[r]={description:this.responses[n].description,examples:s,selectedExample:(null===(t=s[0])||void 0===t?void 0:t.exampleId)||"",schemaTree:i}}const o=[];for(const e in null===(r=this.responses[n])||void 0===r?void 0:r.headers){var r;o.push({name:e,...this.responses[n].headers[e]})}this.headersForEachRespStatus[n]=o,this.mimeResponsesForEachStatus[n]=a}return L`
      ${Object.keys(this.responses).length>1?L`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map((e=>L`
            ${"$$ref"===e?"":L`
                <button 
                  @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===e?"primary":""}'
                  part="btn ${this.selectedStatus===e?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${e} 
                </button>`}`))}`:L`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map((e=>{var t,r;return L`
        <div style = 'display: ${e===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${SI(Fe((null===(t=this.responses[e])||void 0===t?void 0:t.description)||""))}</span>
            ${this.headersForEachRespStatus[e]&&(null===(r=this.headersForEachRespStatus[e])||void 0===r?void 0:r.length)>0?L`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
          </div>
          ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":L`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}" >
                  <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?L`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[e])[0]} </span>`:L`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                </div>
                ${"example"===this.activeSchemaTab?L`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`:L`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`}))}
    `}responseHeaderListTemplate(e){return L`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map((e=>L`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${SI(Fe(e.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.example||""}
            </td>
          </tr>
        `))}
    </table>`}mimeTypeDropdownTemplate(e){return L`
      <select @change="${e=>{this.selectedMimeType=e.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map((e=>L`<option value='${e}' ?selected = '${e===this.selectedMimeType}'> ${e} </option>`))}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"}))}mimeExampleTemplate(e){return e?L`
      ${1===e.examples.length?L`
          ${"json"===e.examples[0].exampleFormat?L`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?L`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?L`<div class="m-markdown-small" style="padding: 4px 0"> ${SI(Fe(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:L`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?L`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?L`<div class="m-markdown-small" style="padding: 4px 0"> ${SI(Fe(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:L`
          <span class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${e=>this.onSelectExample(e)}'>
              ${e.examples.map((t=>L`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`))}
            </select>
            ${e.examples.map((t=>L`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?L`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?L`<div class="m-markdown-small"  style="padding: 4px 0"> ${SI(Fe(t.exampleDescription||""))} </div>`:""}
                ${"json"===t.exampleFormat?L`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:L`<pre>${t.exampleValue}</pre>`}
              </div>  
            `))}
          </span>  
        `}
    `:L`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?L`
      ${"table"===this.schemaStyle?L`
          <schema-table
            render-style = "${this.renderStyle}"
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree> `:L`
          <schema-tree
            render-style = "${this.renderStyle}"
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`:L`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const zP=l`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function qP(){var e;return document.addEventListener("close",(()=>{this.showAdvancedSearchDialog=!1})),document.addEventListener("open",this.onOpenSearchDialog),L`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e=>this.onAdvancedSearch(e,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${null===(e=this.advancedSearchMatches)||void 0===e?void 0:e.map((e=>L`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${e.elementId}'
        tabindex = '0'
        @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
      > 
        <span class="upper bold-text method-fg ${e.method}">${e.method}</span> 
        <span>${e.path}</span>
        <span class="regular-font gray-text">${e.summary}</span>
      </div>
    `))}
    </dialog-box>
  `}customElements.define("dialog-box",class extends X{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[zP]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&this.onClose()}))}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e&&(this.show=r,"true"===r&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return L`
    ${"true"===this.show?L`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const BP={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(0===e.indexOf("#")&&(e=e.slice(1,7)),3!==e.length&&4!==e.length||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return.299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function UP(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function MP(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:"dark"===e?"#f76b39":"#ff591e",a=BP.color.invert(n),o=BP.color.opacity(n,"0.8");if("dark"===e){const e=t.bg1?t.bg1:"#2a2b2c",i=t.fg1?t.fg1:"#bbb",s=t.bg2?t.bg2:BP.color.brightness(e,5),l=t.bg3?t.bg3:BP.color.brightness(e,17),c=t.bg3?t.bg3:BP.color.brightness(e,35),p=t.fg2?t.fg2:BP.color.brightness(i,-15),d=t.fg3?t.fg3:BP.color.brightness(i,-20),u=t.fg3?t.fg3:BP.color.brightness(i,-65),h=t.inlineCodeFg?t.inlineCodeFg:"#aaa",f="#bbb",m="#eee",y=t.headerColor?t.headerColor:BP.color.brightness(e,10),g=t.navBgColor?t.navBgColor:BP.color.brightness(e,10);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:i,fg2:p,fg3:d,lightFg:u,inlineCodeFg:h,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:f,selectionFg:m,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:BP.color.opacity(BP.color.invert(g),"0.50"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:BP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:BP.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:BP.color.brightness(n,25),headerColor:y,headerColorInvert:BP.color.invert(y),headerColorDarker:BP.color.brightness(y,-20),headerColorBorder:BP.color.brightness(y,10),borderColor:t.borderColor||BP.color.brightness(e,20),lightBorderColor:t.lightBorderColor||BP.color.brightness(e,15),codeBorderColor:t.codeBorderColor||BP.color.brightness(e,30),inputBg:t.inputBg||BP.color.brightness(e,-5),placeHolder:t.placeHolder||BP.color.opacity(i,"0.3"),hoverColor:t.hoverColor||BP.color.brightness(e,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:BP.color.brightness(e,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||BP.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||BP.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||BP.color.brightness(e,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||BP.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||BP.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||BP.color.opacity(BP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const e=t.bg1?t.bg1:"#fafbfc",i=t.fg1?t.fg1:"#444444",s=t.bg2?t.bg2:BP.color.brightness(e,-5),l=t.bg3?t.bg3:BP.color.brightness(e,-15),c=t.bg3?t.bg3:BP.color.brightness(e,-45),p=t.fg2?t.fg2:BP.color.brightness(i,17),d=t.fg3?t.fg3:BP.color.brightness(i,30),u=t.fg3?t.fg3:BP.color.brightness(i,70),h=t.inlineCodeFg?t.inlineCodeFg:"brown",f="#444",m="#eee",y=t.headerColor?t.headerColor:BP.color.brightness(e,-180),g=t.navBgColor?t.navBgColor:BP.color.brightness(e,-200);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:i,fg2:p,fg3:d,lightFg:u,inlineCodeFg:h,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:f,selectionFg:m,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:BP.color.opacity(BP.color.invert(g),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:BP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:BP.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:BP.color.brightness(n,25),headerColor:y,headerColorInvert:BP.color.invert(y),headerColorDarker:BP.color.brightness(y,-20),headerColorBorder:BP.color.brightness(y,10),borderColor:t.borderColor||BP.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||BP.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||BP.color.brightness(e,10),placeHolder:t.placeHolder||BP.color.brightness(u,20),hoverColor:t.hoverColor||BP.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||BP.color.opacity(BP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return L`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
    --font-size-mono: ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
    --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function HP(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";"true"===this.persistAuth&&jI.call(this);const a={bg1:UP(this.bgColor)?this.bgColor:"",fg1:UP(this.textColor)?this.textColor:"",headerColor:UP(this.headerColor)?this.headerColor:"",primaryColor:UP(this.primaryColor)?this.primaryColor:"",navBgColor:UP(this.navBgColor)?this.navBgColor:"",navTextColor:UP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:UP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:UP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:UP(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?L`
        ${"dark"===this.theme?MP.call(this,"dark",a):MP.call(this,"light",a)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:L`
      ${"dark"===this.theme?MP.call(this,"dark",a):MP.call(this,"light",a)}
      <!-- Header -->
      ${NP.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?L`
      ${"dark"===this.theme?MP.call(this,"dark",a):MP.call(this,"light",a)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:L`
    ${"dark"===this.theme?MP.call(this,"dark",a):MP.call(this,"light",a)}

    <!-- Header -->
    ${"false"===this.showHeader?"":NP.call(this)}
    
    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":qP.call(this)}

    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection} >
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":EP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?L`<div class="loader"></div>`:L`
              ${!0===this.loadFailed?L`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:L`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                  ${"focused"===this.renderStyle?L`${_P.call(this)}`:L`
                      ${"true"===this.showInfo?vP.call(this):""}
                      ${"true"===this.allowServerSelection?$P.call(this):""}
                      ${"true"===this.allowAuthentication?NI.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${"read"===this.renderStyle?hP.call(this):FP.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("rapi-doc",class extends X{constructor(){super();const e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver((e=>{this.onIntersect(e)}),e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[qe,Be,Ue,Me,He,We,Ve,Ge,Ke,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${s("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,Je]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"default, never,".includes(`${this.schemaHideReadOnly},`)||(this.schemaHideReadOnly="default"),this.schemaHideWriteOnly&&"default, never,".includes(`${this.schemaHideWriteOnly},`)||(this.schemaHideWriteOnly="default"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="400px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Fe.setOptions({highlight:(e,t)=>ze().languages[t]?ze().highlight(e,ze().languages[t],t):e}),window.addEventListener("hashchange",(()=>{const e=new RegExp(`^${this.routePrefix}`,"i"),t=window.location.hash.replace(e,"");this.scrollTo(t)}),!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const e=new Fe.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="${n.slug(r)}">${e}</h${t}>`,e}render(){const e=document.querySelector(`link[href*="${this.cssFile}"]`);return e&&this.shadowRoot.appendChild(e.cloneNode()),HP.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach((e=>{this.intersectionObserver.observe(e)}))}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)}),0),"render-style"===e&&("read"===r?window.setTimeout((()=>{this.observeExpandedContent()}),100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",a="",o="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,a=this.getAttribute("api-key-location"),o=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(a=r,n=this.getAttribute("api-key-name"),o=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(o=r,a=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===Ze));e?(e.name=n,e.in=a,e.value=o,e.finalKeyValue=o):this.resolvedSpec.securitySchemes.push({securitySchemeId:Ze,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:a,value:o,finalKeyValue:o}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const t=e.target.files[0],r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach((e=>e.paths.filter((t=>{this.matchPaths&&et(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})))),this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!1,this.matchPaths&&!function(e,t){return t.name.toLowerCase().includes(e.toLowerCase())}(this.matchPaths,e)||(e.expanded=!0)})))),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!0}))))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){const t=e.detail.querySelector("input");await Qe(0),t&&t.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const t=await bI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}}async afterSpecParsedAndValidated(e){var t;for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const r=new CustomEvent("spec-loaded",{detail:e});if(this.dispatchEvent(r),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await Qe(100),this.observeExpandedContent()),null===(t=window.location.hash)||void 0===t?void 0:t.substring(1)){const e=new RegExp(`^${this.routePrefix}`,"i"),t=window.location.hash.replace(e,"");"view"===this.renderStyle?this.expandAndGotoOperation(t,!0,!0):this.scrollTo(t)}else if("focused"===this.renderStyle&&!this.gotoPath){var n;const e=this.showInfo?"overview":null===(n=this.resolvedSpec.tags[0])||void 0===n?void 0:n.paths[0];this.scrollTo(e)}}expandAndGotoOperation(e,t=!0){if(!this.resolvedSpec)return;let r=!0;const n=-1===e.indexOf("#")?e:e.substring(1);if(n.startsWith("overview")||"servers"===n||"auth"===n)r=!1;else for(let t=0;t<(null===(a=this.resolvedSpec.tags)||void 0===a?void 0:a.length);t++){var a,o;const n=this.resolvedSpec.tags[t],i=null===(o=n.paths)||void 0===o?void 0:o.find((t=>t.elementId===e));i&&(i.expanded&&n.expanded?r=!1:(i.expanded=!0,n.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout((()=>{const e=this.shadowRoot.getElementById(n);e&&(e.scrollIntoView({behavior:"auto",block:"start"}),"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${n}`))}),r?150:0))}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var t,r,n,a;return!("overview"!==e||!this.showInfo)||!("servers"!==e||!this.allowServerSelection)||!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null===(n=this.resolvedSpec)||void 0===n||null===(a=n.tags)||void 0===a?void 0:a.find((t=>t.elementId===e)):null===(t=this.resolvedSpec)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.find((t=>t.paths.find((t=>t.elementId===e)))))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>0){const t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),r=this.shadowRoot.getElementById(`link-${e.target.id}`);r&&("true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix||"#"}${e.target.id}`),r.scrollIntoView({behavior:"auto",block:"center"}),r.classList.add("active")),t&&t.classList.remove("active")}}))}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(e,t=!0){const r=e.currentTarget;if(r.dataset.contentId){if(this.isIntersectionObserverActive=!1,"focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.beforerNavigationFocusedMode()}this.scrollTo(r.dataset.contentId,!0,t),setTimeout((()=>{this.isIntersectionObserverActive=!0}),300)}}async scrollTo(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;const n=this.shadowRoot.getElementById(e);if(n?(t=!0,n.scrollIntoView({behavior:"auto",block:"start"})):t=!1,t){if("focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.afterNavigationFocusedMode();const t=this.shadowRoot.querySelector("api-response");t&&t.resetSelection()}"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${e}`);const t=this.shadowRoot.getElementById(`link-${e}`);if(t){r&&t.scrollIntoView({behavior:"auto",block:"center"}),await Qe(0);const e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&e.classList.remove("active"),t.classList.add("active")}}}}setHttpUserNameAndPassword(e,t,r){return EI.call(this,e,t,r)}setApiKey(e,t){return EI.call(this,e,"","",t)}removeAllSecurityKeys(){return OI.call(this)}setApiServer(e){return bP.call(this,e)}onAdvancedSearch(e,t){const r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{let e;e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]");const t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map((e=>e.id));this.advancedSearchMatches=function(e,t,r=[]){if(!e.trim()||0===r.length)return;const n=[];return t.forEach((t=>{t.paths.forEach((t=>{let a="";var o;if(r.includes("search-api-path")&&(a=t.path),r.includes("search-api-descr")&&(a=`${a} ${t.summary||t.description||""}`),r.includes("search-api-params")&&(a=`${a} ${(null===(o=t.parameters)||void 0===o?void 0:o.map((e=>e.name)).join(" "))||""}`),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(const r in null===(i=t.requestBody)||void 0===i?void 0:i.content){var i,s,l;null!==(s=t.requestBody.content[r].schema)&&void 0!==s&&s.properties&&(e=tt(null===(l=t.requestBody.content[r].schema)||void 0===l?void 0:l.properties)),a=`${a} ${[...e].join(" ")}`}}r.includes("search-api-resp-descr")&&(a=`${a} ${Object.values(t.responses).map((e=>e.description||"")).join(" ")}`),a.toLowerCase().includes(e.trim().toLowerCase())&&n.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})}))})),n}(e.value,this.resolvedSpec.tags,t)}),t)}}),customElements.define("rapi-doc-mini",class extends X{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[qe,Be,Ue,Me,He,We,Ve,Ge,Ke,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),Fe.setOptions({highlight:(e,t)=>ze().languages[t]?ze().highlight(e,ze().languages[t],t):e})}render(){return HP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",a="",o="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,a=this.getAttribute("api-key-location"),o=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(a=r,n=this.getAttribute("api-key-name"),o=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(o=r,a=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===Ze));e?(e.name=n,e.in=a,e.value=o,e.finalKeyValue=o):this.resolvedSpec.securitySchemes.push({apiKeyId:Ze,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:a,value:o,finalKeyValue:o}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await bI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}setHttpUserNameAndPassword(e,t,r){return EI.call(this,e,t,r)}setApiKey(e,t){return EI.call(this,e,"","",t)}removeAllSecurityKeys(){return OI.call(this)}setApiServer(e){return bP.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class WP extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",(e=>this.receiveStorage(e)),!0)}receiveAuthParms(){let e={};if(document.location.search){const t=new URLSearchParams(document.location.search);e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}}else window.location.hash&&(e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"});window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){if(window.parent&&"rapidoc-oauth-data"===e.key){const t=JSON.parse(e.newValue);window.parent.postMessage(t,this.target)}}parseQueryString(e,t){const r=e.split("&");for(let e=0;e<r.length;e++){const n=r[e].split("=");if(decodeURIComponent(n[0])===t)return decodeURIComponent(n[1])}}}function VP(){return L`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map((e=>L`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
        > 
          ${e.name}
        </div>`))}
    </nav>  
  </nav>
  `}function GP(){return L`
    ${"true"===this.showInfo?vP.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map((e=>{var t;const r=sP(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=null===(t=r[0])||void 0===t?void 0:t.exampleId,L`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${SI(Fe(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${iP(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?L`<select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t,e)}'>
                    ${r.map((t=>L`
                      <option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample}> 
                        ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                      </option>`))}
                  </select>`:L`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map((t=>L`
                <json-tree 
                  .data = "${t.exampleValue}"
                  data-example = "${t.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`))}
            </div>
          </div>
        </section>`}))}
    </div>
  `}function KP(e=!1){if(!this.resolvedSpec)return"";const t={bg1:UP(this.bgColor)?this.bgColor:"",fg1:UP(this.textColor)?this.textColor:"",headerColor:UP(this.headerColor)?this.headerColor:"",primaryColor:UP(this.primaryColor)?this.primaryColor:"",navBgColor:UP(this.navBgColor)?this.navBgColor:"",navTextColor:UP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:UP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:UP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:UP(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?L`
        ${"dark"===this.theme?MP.call(this,"dark",t):MP.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:L`
      ${"dark"===this.theme?MP.call(this,"dark",t):MP.call(this,"light",t)}
      <!-- Header -->
      ${NP.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?L`
      ${"dark"===this.theme?MP.call(this,"dark",t):MP.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:L`
    ${"dark"===this.theme?MP.call(this,"dark",t):MP.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":NP.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${VP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?L`<div class="loader"></div>`:L`
              ${!0===this.loadFailed?L`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:L`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                    ${GP.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",WP),customElements.define("json-schema-viewer",class extends X{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[qe,Be,Ue,Me,He,We,Ve,Ge,Ke,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),Fe.setOptions({highlight:(e,t)=>ze().languages[t]?ze().highlight(e,ze().languages[t],t):e})}render(){return KP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await bI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"}))}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},874:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,i=0;i<a.length;i++)o[a[i]]=e.languages.bash[a[i]];e.languages.shell=e.languages.bash}(Prism)},16:()=>{!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+t[+r]+")"}))}function r(e,r,n){return RegExp(t(e,r),n||"")}function n(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",o="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var c=l(o),p=RegExp(l(a+" "+o+" "+i+" "+s)),d=l(o+" "+i+" "+s),u=l(a+" "+o+" "+s),h=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=n(/\((?:[^()]|<<self>>)*\)/.source,2),m=/@?\b[A-Za-z_]\w*\b/.source,y=t(/<<0>>(?:\s*<<1>>)?/.source,[m,h]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[d,y]),v=/\[\s*(?:,\s*)*\]/.source,b=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,v]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,f,v]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),$=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,g,v]),k={keyword:p,punctuation:/[<>()?,.:[\]]/},S=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,E=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,$]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,y]),lookbehind:!0,inside:k},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:k},{pattern:r(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[b]),lookbehind:!0,inside:k},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[$,u,m]),inside:k}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:k},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[$,g]),inside:k,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[$]),lookbehind:!0,inside:k,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,h]),inside:{function:r(/^<<0>>/.source,[m]),generic:{pattern:RegExp(h),alias:"class-name",inside:k}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,y,m,$,p.source,f,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,f]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp($),greedy:!0,inside:k},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var O=A+"|"+S,T=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[O]),C=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),j=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,_=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,C]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[j,_]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[j]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[C]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var I=/:[^}\r\n]+/.source,P=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),R=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,I]),L=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[O]),2),D=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[L,I]);function F(t,n){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,I]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[R]),lookbehind:!0,greedy:!0,inside:F(R,P)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[D]),lookbehind:!0,greedy:!0,inside:F(D,L)}],char:{pattern:RegExp(S),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)},251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r,n=e.languages,a={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},o={"application/json":!0,"application/xml":!0};function i(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-]))"}for(var s in a)if(a[s]){r=r||{};var l=o[s]?i(s):s;r[s.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:a[s]}}r&&e.languages.insertBefore("http","header",r)}(Prism)},503:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:n.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:n.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:n.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+r.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<value>>/g,(function(){return e}));return RegExp(r,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return n}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<key>>/g,(function(){return"(?:"+a+"|"+o+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(o),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},660:(e,t,r)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var n,o;switch(r=r||{},a.util.type(t)){case"Object":if(o=a.util.objId(t),r[o])return r[o];for(var i in n={},r[o]=n,t)t.hasOwnProperty(i)&&(n[i]=e(t[i],r));return n;case"Array":return o=a.util.objId(t),r[o]?r[o]:(n=[],r[o]=n,t.forEach((function(t,a){n[a]=e(t,r)})),n);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var n="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(n))return!1;e=e.parentElement}return!!r}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var r=a.util.clone(a.languages[e]);for(var n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){var o=(n=n||a.languages)[e],i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l]);r.hasOwnProperty(s)||(i[s]=o[s])}var c=n[e];return n[e]=i,a.languages.DFS(a.languages,(function(t,r){r===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,r,n,o){o=o||{};var i=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],n||s);var l=t[s],c=a.util.type(l);"Object"!==c||o[i(l)]?"Array"!==c||o[i(l)]||(o[i(l)]=!0,e(l,r,s,o)):(o[i(l)]=!0,e(l,r,null,o))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),a.hooks.run("before-all-elements-highlight",n);for(var o,i=0;o=n.elements[i++];)a.highlightElement(o,!0===t,n.callback)},highlightElement:function(t,r,n){var o=a.util.getLanguage(t),i=a.languages[o];a.util.setLanguage(t,o);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&a.util.setLanguage(s,o);var l={element:t,language:o,grammar:i,code:t.textContent};function c(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),n&&n.call(l.element)}if(a.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return a.hooks.run("complete",l),void(n&&n.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(a.highlight(l.code,l.grammar,l.language));else c(a.util.encode(l.code))},highlight:function(e,t,r){var n={code:e,grammar:t,language:r};if(a.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=a.tokenize(n.code,n.grammar),a.hooks.run("after-tokenize",n),o.stringify(a.util.encode(n.tokens),n.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}var a=new l;return c(a,a.head,e),s(e,a,t,a.head,0),function(e){for(var t=[],r=e.head.next;r!==e.tail;)t.push(r.value),r=r.next;return t}(a)},hooks:{all:{},add:function(e,t){var r=a.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=a.hooks.all[e];if(r&&r.length)for(var n,o=0;n=r[o++];)n(t)}},Token:o};function o(e,t,r,n){this.type=e,this.content=t,this.alias=r,this.length=0|(n||"").length}function i(e,t,r,n){e.lastIndex=t;var a=e.exec(r);if(a&&n&&a[1]){var o=a[1].length;a.index+=o,a[0]=a[0].slice(o)}return a}function s(e,t,r,n,l,d){for(var u in r)if(r.hasOwnProperty(u)&&r[u]){var h=r[u];h=Array.isArray(h)?h:[h];for(var f=0;f<h.length;++f){if(d&&d.cause==u+","+f)return;var m=h[f],y=m.inside,g=!!m.lookbehind,v=!!m.greedy,b=m.alias;if(v&&!m.pattern.global){var x=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}for(var w=m.pattern||m,$=n.next,k=l;$!==t.tail&&!(d&&k>=d.reach);k+=$.value.length,$=$.next){var S=$.value;if(t.length>e.length)return;if(!(S instanceof o)){var A,E=1;if(v){if(!(A=i(w,k,e,g))||A.index>=e.length)break;var O=A.index,T=A.index+A[0].length,C=k;for(C+=$.value.length;O>=C;)C+=($=$.next).value.length;if(k=C-=$.value.length,$.value instanceof o)continue;for(var j=$;j!==t.tail&&(C<T||"string"==typeof j.value);j=j.next)E++,C+=j.value.length;E--,S=e.slice(k,C),A.index-=k}else if(!(A=i(w,0,S,g)))continue;O=A.index;var _=A[0],I=S.slice(0,O),P=S.slice(O+_.length),R=k+S.length;d&&R>d.reach&&(d.reach=R);var L=$.prev;if(I&&(L=c(t,L,I),k+=I.length),p(t,L,E),$=c(t,L,new o(u,y?a.tokenize(_,y):_,b,_)),P&&c(t,$,P),E>1){var D={cause:u+","+f,reach:R};s(e,t,r,$.prev,k,D),d&&D.reach>d.reach&&(d.reach=D.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var n=t.next,a={value:r,prev:t,next:n};return t.next=a,n.prev=a,e.length++,a}function p(e,t,r){for(var n=t.next,a=0;a<r&&n!==e.tail;a++)n=n.next;t.next=n,n.prev=t,e.length-=a}if(e.Prism=a,o.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,r)})),n}var o={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(o.classes,i):o.classes.push(i)),a.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),n=r.language,o=r.code,i=r.immediateClose;e.postMessage(a.highlight(o,a.languages[n],n)),i&&e.close()}),!1),a):a;var d=a.util.currentScript();function u(){a.manual||a.highlightAll()}if(d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&d&&d.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==r.g&&(r.g.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';n.hooks.add("before-highlightall",(function(e){e.selector+=", "+r})),n.hooks.add("before-sanity-check",(function(a){var o=a.element;if(o.matches(r)){a.code="",o.setAttribute(t,"loading");var i=o.appendChild(document.createElement("CODE"));i.textContent="Loading…";var s=o.getAttribute("data-src"),l=a.language;if("none"===l){var c=(/\.(\w+)$/.exec(s)||[,"none"])[1];l=e[c]||c}n.util.setLanguage(i,l),n.util.setLanguage(o,l);var p=n.plugins.autoloader;p&&p.loadLanguages(l),function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):n.status>=400?r("✖ Error "+n.status+" while fetching file: "+n.statusText):r("✖ Error: File does not exist or is empty"))},n.send(null)}(s,(function(e){o.setAttribute(t,"loaded");var r=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var r=Number(t[1]),n=t[2],a=t[3];return n?a?[r,Number(a)]:[r,void 0]:[r,r]}}(o.getAttribute("data-range"));if(r){var a=e.split(/\r\n?|\n/g),s=r[0],l=null==r[1]?a.length:r[1];s<0&&(s+=a.length),s=Math.max(0,Math.min(s-1,a.length)),l<0&&(l+=a.length),l=Math.max(0,Math.min(l,a.length)),e=a.slice(s,l).join("\n"),o.hasAttribute("data-start")||o.setAttribute("data-start",String(s+1))}i.textContent=e,n.highlightElement(i)}),(function(e){o.setAttribute(t,"failed"),i.textContent=e}))}})),n.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(r),o=0;t=a[o++];)n.highlightElement(t)}};var a=!1;n.fileHighlight=function(){a||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),a=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},464:e=>{var t,r="";e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("expected a string");if(1===n)return e;if(2===n)return e+e;var a=e.length*n;if(t!==e||void 0===t)t=e,r="";else if(r.length>=a)return r.substr(0,a);for(;a>r.length&&n>1;)1&n&&(r+=e),n>>=1,e+=e;return r=(r+=e).substr(0,a)}},131:(e,t,r)=>{var n=r(464),a=function(e){return/<\/+[^>]+>/.test(e)},o=function(e){return/<[^>]+\/>/.test(e)};function i(e){return e.split(/(<\/?[^>]+>)/g).filter((function(e){return""!==e.trim()})).map((function(e){return{value:e,type:s(e)}}))}function s(e){return a(e)?"ClosingTag":function(e){return function(e){return/<[^>!]+>/.test(e)}(e)&&!a(e)&&!o(e)}(e)?"OpeningTag":o(e)?"SelfClosingTag":"Text"}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.indentor,a=t.textNodesOnSameLine,o=0,s=[];r=r||"    ";var l=i(e).map((function(e,t,i){var l=e.value,c=e.type;"ClosingTag"===c&&o--;var p=n(r,o),d=p+l;if("OpeningTag"===c&&o++,a){var u=i[t-1],h=i[t-2];"ClosingTag"===c&&"Text"===u.type&&"OpeningTag"===h.type&&(d=""+p+h.value+u.value+l,s.push(t-2,t-1))}return d}));return s.forEach((function(e){return l[e]=null})),l.filter((function(e){return!!e})).join("\n")}}},n={};function a(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var o=n[e]={exports:{}};try{var i={id:e,module:o,factory:r[e],require:a};a.i.forEach((function(e){e(i)})),o=i.module,i.factory.call(o.exports,o,o.exports,i.require)}catch(e){throw o.error=e,e}return o.exports}a.m=r,a.c=n,a.i=[],a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.hu=e=>e+"."+a.h()+".hot-update.js",a.hmrF=()=>"main."+a.h()+".hot-update.json",a.h=()=>"86e05890ecd1b58be1fc",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",a.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[n];var u=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},(()=>{var e,t,r,n={},o=a.c,i=[],s=[],l="idle",c=0,p=[];function d(e){l=e;for(var t=[],r=0;r<s.length;r++)t[r]=s[r].call(null,e);return Promise.all(t)}function u(){0==--c&&d("ready").then((function(){if(0===c){var e=p;p=[];for(var t=0;t<e.length;t++)e[t]()}}))}function h(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return d("check").then(a.hmrM).then((function(r){return r?d("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(a.hmrC).reduce((function(e,o){return a.hmrC[o](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):d("ready").then((function(){return n}))},0===c?t():new Promise((function(e){p.push((function(){e(t())}))}));var t}))})):d(y()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")})):m(e)}function m(e){e=e||{},y();var n=t.map((function(t){return t(e)}));t=void 0;var a=n.map((function(e){return e.error})).filter(Boolean);if(a.length>0)return d("abort").then((function(){throw a[0]}));var o=d("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var i,s=d("apply"),l=function(e){i||(i=e)},c=[];return n.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([o,s]).then((function(){return i?d("fail").then((function(){throw i})):r?m(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):d("idle").then((function(){return c}))}))}function y(){if(r)return t||(t=[]),Object.keys(a.hmrI).forEach((function(e){r.forEach((function(r){a.hmrI[e](r,t)}))})),r=void 0,!0}a.hmrD=n,a.i.push((function(p){var m,y,g,v,b=p.module,x=function(t,r){var n=o[r];if(!n)return t;var a=function(a){if(n.hot.active){if(o[a]){var s=o[a].parents;-1===s.indexOf(r)&&s.push(r)}else i=[r],e=a;-1===n.children.indexOf(a)&&n.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+r),i=[];return t(a)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(a,p,s(p));return a.e=function(e){return function(e){switch(l){case"ready":d("prepare");case"prepare":return c++,e.then(u,u),e;default:return e}}(t.e(e))},a}(p.require,p.id);b.hot=(m=p.id,y=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=y.parents.slice(),e=g?void 0:m,a(m)},active:!0,accept:function(e,t,r){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=t||function(){},v._acceptedErrorHandlers[e[n]]=r;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,t)})),d("ready");break;case"ready":Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:h,apply:f,status:function(e){if(!e)return l;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:n[m]},e=void 0,v),b.parents=i,b.children=[],i=[],p.require=x})),a.hmrC={},a.hmrI={}})(),a.p="",(()=>{var e,t,r,n,o,i=a.hmrS_jsonp=a.hmrS_jsonp||{179:0},s={};function l(t,r){return e=r,new Promise(((e,r)=>{s[t]=e;var n=a.p+a.hu(t),o=new Error;a.l(n,(e=>{if(s[t]){s[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r(o)}}))}))}function c(e){function s(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,s=o.chain,c=a.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var p=0;p<c.parents.length;p++){var d=c.parents[p],u=a.c[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(u.hot._acceptedDependencies[i]?(r[d]||(r[d]=[]),l(r[d],[i])):(delete r[d],t.push(d),n.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}a.f&&delete a.f.jsonpHmr,t=void 0;var c={},p=[],d={},u=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in r)if(a.o(r,h)){var f,m=r[h],y=!1,g=!1,v=!1,b="";switch((f=m?s(h):{type:"disposed",moduleId:h}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(f),e.ignoreUnaccepted||(y=new Error("Aborted because "+h+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(f),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(y)return{error:y};if(g)for(h in d[h]=m,l(p,f.outdatedModules),f.outdatedDependencies)a.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),l(c[h],f.outdatedDependencies[h]));v&&(l(p,[f.moduleId]),d[h]=u)}r=void 0;for(var x,w=[],$=0;$<p.length;$++){var k=p[$],S=a.c[k];S&&(S.hot._selfAccepted||S.hot._main)&&d[k]!==u&&!S.hot._selfInvalidated&&w.push({module:k,require:S.hot._requireSelf,errorHandler:S.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=p.slice();r.length>0;){var o=r.pop(),s=a.c[o];if(s){var l={},d=s.hot._disposeHandlers;for($=0;$<d.length;$++)d[$].call(null,l);for(a.hmrD[o]=l,s.hot.active=!1,delete a.c[o],delete c[o],$=0;$<s.children.length;$++){var u=a.c[s.children[$]];u&&(e=u.parents.indexOf(o))>=0&&u.parents.splice(e,1)}}}for(var h in c)if(a.o(c,h)&&(s=a.c[h]))for(x=c[h],$=0;$<x.length;$++)t=x[$],(e=s.children.indexOf(t))>=0&&s.children.splice(e,1)},apply:function(t){for(var r in d)a.o(d,r)&&(a.m[r]=d[r]);for(var n=0;n<o.length;n++)o[n](a);for(var i in c)if(a.o(c,i)){var s=a.c[i];if(s){x=c[i];for(var l=[],u=[],h=[],f=0;f<x.length;f++){var m=x[f],y=s.hot._acceptedDependencies[m],g=s.hot._acceptedErrorHandlers[m];if(y){if(-1!==l.indexOf(y))continue;l.push(y),u.push(g),h.push(m)}}for(var v=0;v<l.length;v++)try{l[v].call(null,x)}catch(r){if("function"==typeof u[v])try{u[v](r,{moduleId:i,dependencyId:h[v]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:h[v],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:h[v],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<w.length;b++){var $=w[b],k=$.module;try{$.require(k)}catch(r){if("function"==typeof $.errorHandler)try{$.errorHandler(r,{moduleId:k,module:a.c[k]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||t(r)}}return p}}}self.webpackHotUpdaterapidoc=(t,n,i)=>{for(var l in n)a.o(n,l)&&(r[l]=n[l],e&&e.push(l));i&&o.push(i),s[t]&&(s[t](),s[t]=void 0)},a.hmrI.jsonp=function(e,t){r||(r={},o=[],n=[],t.push(c)),a.o(r,e)||(r[e]=a.m[e])},a.hmrC.jsonp=function(e,s,p,d,u,h){u.push(c),t={},n=s,r=p.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],e.forEach((function(e){a.o(i,e)&&void 0!==i[e]?(d.push(l(e,h)),t[e]=!0):t[e]=!1})),a.f&&(a.f.jsonpHmr=function(e,r){t&&a.o(t,e)&&!t[e]&&(r.push(l(e)),t[e]=!0)})},a.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(a.p+a.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),a(448)})();var u={__name:"module",setup(u){const h=d(),f=e(null);e("");const m=e("");let y;function g(){m.value=h.defaults.headers.common.Authorization}t((async()=>{const{data:e}=await h.get("/server/specs/oas");y=setInterval(g,1e4),g(),r((()=>{delete e.paths["/extensions/displays"],delete e.paths["/extensions/interfaces"],delete e.paths["/extensions/layouts"],delete e.paths["/extensions/modules"],f.value.loadSpec(e)}))})),n((()=>{clearInterval(y)}));const v=window.matchMedia("(prefers-color-scheme: dark)"),b=e(v.matches?"dark":"light");v.addEventListener("change",(e=>{b.value=e.matches?"dark":"light"}));const x=a((()=>"dark"===b.value?{bg:"#161b22",text:"#ffffff",primary:"#8866ff",navBg:"#21262e",navText:"#ffffff"}:{bg:"#ffffff",text:"#21262e",primary:"#8866ff",navBg:"#f0f4f9",navText:"#161b22"}));return(e,t)=>{const r=o("rapi-doc"),n=o("private-view");return i(),s(n,{title:"API Explorer","small-header":"",class:"api-explorer"},{default:l((()=>[c(r,{ref_key:"container",ref:f,"allow-try":"true","render-style":"read",style:{height:"100%",width:"100%"},"show-header":"false",theme:b.value,"bg-color":p(x).bg,"primary-color":p(x).primary,"nav-bg-color":p(x).navBg,"nav-text-color":p(x).navText,"api-key-name":"Authorization","api-key-location":"header","api-key-value":m.value},null,8,["theme","bg-color","primary-color","nav-bg-color","nav-text-color","api-key-value"])])),_:1})}}},h=[],f=[];!function(e,t){if(e&&"undefined"!=typeof document){var r,n=!0===t.prepend?"prepend":"append",a=!0===t.singleTag,o="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(a){var i=h.indexOf(o);-1===i&&(i=h.push(o)-1,f[i]={}),r=f[i]&&f[i][n]?f[i][n]:f[i][n]=s()}else r=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var r=Object.keys(t.attributes),a=0;a<r.length;a++)e.setAttribute(r[a],t.attributes[r[a]]);var i="prepend"===n?"afterbegin":"beforeend";return o.insertAdjacentElement(i,e),e}}("\n.api-explorer #navigation .module-nav, .api-explorer #sidebar {\n  display: none !important;\n}\n",{}),u.__file="src/module.vue";var m={id:"api-explorer",name:"API Explorer",icon:"api",routes:[{path:"",component:u}]};export{m as default};
