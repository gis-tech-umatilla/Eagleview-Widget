System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],function(e,t){var s={},n={},i={},a={};return{setters:[function(e){s.jsx=e.jsx,s.jsxs=e.jsxs},function(e){n.React=e.React,n.css=e.css},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){a.TextInput=e.TextInput}],execute:function(){e((()=>{var e={244(e){"use strict";e.exports=n},386(e){"use strict";e.exports=s},321(e){"use strict";e.exports=a},298(e){"use strict";e.exports=i}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{CheckAPIKey:()=>c,__set_webpack_public_path__:()=>d,default:()=>h,validateLatLong:()=>l});var e=r(386),t=r(244),s=r(298),n=r(321),i=function(e,t,s,n){return new(s||(s=Promise))(function(i,a){function r(e){try{c(n.next(e))}catch(e){a(e)}}function o(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(r,o)}c((n=n.apply(e,t||[])).next())})};const a=()=>(0,e.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M9.00012 1.5C4.86012 1.5 1.50012 4.86 1.50012 9C1.50012 13.14 4.86012 16.5 9.00012 16.5C13.1401 16.5 16.5001 13.14 16.5001 9C16.5001 4.86 13.1401 1.5 9.00012 1.5ZM9.00012 15C5.69262 15 3.00012 12.3075 3.00012 9C3.00012 5.6925 5.69262 3 9.00012 3C12.3076 3 15.0001 5.6925 15.0001 9C15.0001 12.3075 12.3076 15 9.00012 15Z",fill:"#009AC5"}),(0,e.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.5305 6.53033C12.8233 6.82322 12.8233 7.2981 12.5305 7.59099L8.25012 11.8713L5.84479 9.46599C5.5519 9.1731 5.5519 8.69822 5.84479 8.40533C6.13769 8.11244 6.61256 8.11244 6.90545 8.40533L8.25012 9.75L11.4698 6.53033C11.7627 6.23744 12.2376 6.23744 12.5305 6.53033Z",fill:"#009AC5"})]}),c=e=>new Promise((t,s)=>{fetch("https://apicenter.eagleview.com/oauth2/v1/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json",APIKEY:e},body:new URLSearchParams({grant_type:"client_credentials"})}).then(e=>t(e)).catch(e=>s(e))}),l=e=>!/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)\s*[,\s]\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(e);class h extends t.React.PureComponent{constructor(){var e;super(...arguments),this.state={APIKeyError:!1,latLongError:!1,APISuccess:!1,latLongSuccess:!1,apiKey:this.props.config.apiKey||"",view:(e=this.props.config.view,e?`${e.lonLat.lat}, ${e.lonLat.lon}`:"")},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleAPIKeyCheck=e=>i(this,void 0,void 0,function*(){if(e){this.setState({APISuccess:!1});try{const t=yield c(e);200!==(null==t?void 0:t.status)?this.setState({APIKeyError:!0,APISuccess:!1}):(this.setState({APIKeyError:!1,APISuccess:!0,apiKey:e}),this.props.onSettingChange({id:this.props.id,config:this.props.config.set("apiKey",e)}))}catch(e){this.setState({APIKeyError:!0,APISuccess:!1})}}}),this.handleLatLongCheck=e=>{if(!e)return;this.setState({latLongSuccess:!1});if(l(e))this.setState({latLongError:!0,latLongSuccess:!1});else{this.setState({latLongError:!1,latLongSuccess:!0});const[t,s]=e.split(/[ ,]+/),n={lonLat:{lat:Number(t),lon:Number(s)}};this.props.onSettingChange({id:this.props.id,config:this.props.config.set("view",n)})}},this.handleOnChange=e=>{this.setState({[e.target.name]:e.target.value})}}render(){const i=t.css`
      .widget-setting-iv {
        .header {
          color: var(--neutral-charcoal-400, #c8cdd7);
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20.987px; /* 149.904% */
        }
        .caption {
          color: var(--neutral-charcoal-500, #b4bac7);
          font-size: 11px;
          font-style: normal;
          font-weight: 400;
          line-height: 20.987px; /* 190.787% */
        }
        .mb-14 {
          margin-bottom: 14px;
        }
        .w-100 {
          width: 100%;
        }
        .helper-text {
          color: red;
          float: left;
          margin-top: 2px;
        }
        .red-border {
          border: 1px solid red;
        }
        .input {
          height: 31px;
          border-radius: 2px;
          background: #181818;
          border: none;
          color: var(--neutral-nickel-100, #f6f7ff);
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px; /* 150% */
        }
      }
    `;return(0,e.jsx)("div",{css:i,children:(0,e.jsxs)("div",{className:"widget-setting-iv",children:[(0,e.jsx)(s.SettingSection,{title:(0,e.jsx)("span",{className:"header",children:"API Key"}),children:(0,e.jsx)(s.SettingRow,{children:(0,e.jsxs)("div",{className:"w-100",children:[(0,e.jsxs)("span",{className:"caption mb-14",children:["API keys can be accessed from "," ",(0,e.jsx)("a",{target:"blank",href:"https://apps.eagleview.com/LAYER_ADMIN/manage-credentials",children:"EagleView Cloud"})," "," within the Explorer Admin App"]}),(0,e.jsx)(n.TextInput,{className:this.state.APIKeyError&&"red-border",onAcceptValue:e=>this.handleAPIKeyCheck(e),onFocus:()=>this.setState({APIKeyError:!1}),placeholder:"Enter API Key",suffix:this.state.APISuccess&&(0,e.jsx)(a,{}),onChange:this.handleOnChange,value:this.state.apiKey,type:"password",name:"apiKey"}),this.state.APIKeyError&&(0,e.jsx)("label",{className:"helper-text",children:" Invalid API key "})]})})}),(0,e.jsx)(s.SettingSection,{title:(0,e.jsx)("span",{className:"header",children:"Starting Location"}),children:(0,e.jsx)(s.SettingRow,{children:(0,e.jsxs)("div",{className:"w-100",children:[(0,e.jsx)("label",{className:"caption mb-14",children:"Optional, overwrite starting location for EagleView Imagery"}),(0,e.jsx)(n.TextInput,{className:this.state.latLongError&&"red-border",onAcceptValue:e=>this.handleLatLongCheck(e),placeholder:"Enter Lat,Long",onFocus:()=>this.setState({latLongError:!1}),suffix:this.state.latLongSuccess&&(0,e.jsx)(a,{}),onChange:this.handleOnChange,value:this.state.view,name:"view"}),this.state.latLongError&&(0,e.jsxs)("label",{className:"helper-text",children:[" ","Invalid starting location"," "]})]})})}),(0,e.jsx)(s.SettingSection,{title:(0,e.jsx)("span",{className:"header",children:"Auto-synchronize map"}),children:(0,e.jsx)(s.SettingRow,{children:(0,e.jsxs)("div",{className:"w-100",children:[(0,e.jsx)("label",{className:"caption mb-14",children:"Optional, synchronize EagleView Imagery to the selected map below"}),(0,e.jsx)(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds})]})})})]})})}}function d(e){r.p=e}})(),o})())}}});