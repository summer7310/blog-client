webpackJsonp([1],{"7jZz":function(t,e,n){n("vu0M"),n("aTqf"),t.exports=n("M4k0")},"8bIQ":function(t,e,n){"use strict";var r={components:{BaseInput:n("loia").a},props:{value:{type:String,default:""},type:{type:String,default:"input"},errMsg:{type:String,default:""},onBlur:{type:Function,required:!0},onFocus:{type:Function,required:!0},placeholder:{type:String,default:""}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.wrap},[n("BaseInput",{attrs:{value:t.value,type:t.type,placeholder:t.placeholder},on:{input:function(e){t.$emit("input",e)}},nativeOn:{focus:function(e){return t.onFocus(e)},blur:function(e){return t.onBlur(e)}}}),t._v(" "),n("span",{class:t.$style.errShow},[t._v(t._s(t.errMsg))])],1)},staticRenderFns:[]};var i=n("Z0/y")(r,s,!1,function(t){this.$style=n("fbb7")},null,null);e.a=i.exports},AVQ2:function(t,e){t.exports={inner:"_2NP450QKs-YorIRcykjXpf_0",avatar:"rL4JBa9FRH7Qe9H03_DJG_0"}},BJu4:function(t,e){t.exports={button:"_3wbJuAzqK6zoS9qxLSBHnY_0"}},DbuR:function(t,e){t.exports={wrap:"_2syOha5l2tDQ0430mx84a4_0",header:"_1uwQ3y1u6RJ7--hCg5ESzB_0",active:"_5R7njlVEAYt0B0xKVlsdA_0"}},F5HE:function(t,e,n){"use strict";var r={components:{ButtonAntiColor:n("VbK8").a},props:{text:{type:String,required:!0},onClick:{type:Function,required:!0}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.buttonBox},[n("ButtonAntiColor",{nativeOn:{click:function(e){return t.onClick(e)}}},[t._v(t._s(t.text))])],1)},staticRenderFns:[]};var i=n("Z0/y")(r,s,!1,function(t){this.$style=n("PENM")},null,null);e.a=i.exports},FT1x:function(t,e){t.exports={input:"tIIuZOPjtNbT2XRi5XFoZ_0"}},Fxtc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("8bIQ"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),this._v(" "),e("path",{attrs:{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}})])},staticRenderFns:[]},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z",fill:"none"}}),this._v(" "),e("path",{attrs:{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}})])},staticRenderFns:[]},o={components:{SVGVisibility:n("Z0/y")(null,s,!1,null,null,null).exports,SVGVisibilityOff:n("Z0/y")(null,i,!1,null,null,null).exports},props:{value:{type:String,required:!0},placeholder:{type:String,default:""}},data:function(){return{doShowPassword:!0}},methods:{togglePassword:function(){this.doShowPassword=!this.doShowPassword}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.doShowPassword?n("div",{class:t.$style.wrap},[n("input",{class:t.$style.input,attrs:{placeholder:t.placeholder,type:"password"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),t._v(" "),n("SVGVisibility",{class:t.$style.svg,nativeOn:{click:function(e){return t.togglePassword(e)}}})],1):n("div",{class:t.$style.wrap},[n("input",{class:t.$style.input,attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),t._v(" "),n("SVGVisibilityOff",{class:t.$style.svg,nativeOn:{click:function(e){return t.togglePassword(e)}}})],1)},staticRenderFns:[]};var u=n("Z0/y")(o,a,!1,function(t){this.$style=n("bq8o")},null,null).exports,l=n("/Zam"),c=n("wpB1"),p=n("ZX8o"),h=n("F5HE"),f=n("gnxq"),d={components:{AuthSign:p.a,BaseButton:l.a,AuthSignFooter:h.a,InputWithTest:r.a,InputPassword:u},data:function(){return{username:"",password:"",usernameErrMsg:void 0}},methods:{onRouterClick:function(){var t=this.$route.params.parentPath;t?this.$router.push({name:"signin_by_phonenumber",params:{parentPath:t}}):this.$router.push({name:"signin_by_phonenumber"})},onSubmit:function(t){var e=this;if(t.preventDefault(),""===this.usernameErrMsg){var n=this.username,r=this.password;this.$store.dispatch(f.f,{username:n,password:r}).then(function(){e.clearItemsValue(),e.$router.push(e.$route.params.parentPath||"/")})}},testUsername:function(){var t=this.username.trim();return this.usernameErrMsg="",Object(c.a)(t)?(this.usernameErrMsg="用户名不得为空",!1):Object(c.c)(t)?void 0:(this.usernameErrMsg="用户名只能是一个汉字",!1)},clearItemsValue:function(){this.username="",this.password=""}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthSign",{attrs:{signinURL:"signin_by_username"}},[n("form",{on:{submit:t.onSubmit}},[n("InputWithTest",{attrs:{errMsg:t.usernameErrMsg,onBlur:t.testUsername,onFocus:function(){t.usernameErrMsg=""},placeholder:"用户名只能是一个汉字"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("InputPassword",{attrs:{placeholder:"密码不能超过20位"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("BaseButton",{attrs:{type:"submit"}},[t._v("登  录")]),t._v(" "),n("AuthSignFooter",{attrs:{onClick:t.onRouterClick,text:"短信验证码登录"}})],1)])},staticRenderFns:[]},m=n("Z0/y")(d,v,!1,null,null,null);e.default=m.exports},HzJ8:function(t,e,n){t.exports={default:n("7jZz"),__esModule:!0}},KH7x:function(t,e,n){"use strict";e.__esModule=!0;var r=i(n("MGgt")),s=i(n("HzJ8"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=(0,s.default)(t);!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},M4k0:function(t,e,n){var r=n("scub"),s=n("hoFe");t.exports=n("lNjp").getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},MGgt:function(t,e,n){t.exports={default:n("o+vE"),__esModule:!0}},Mu8x:function(t,e){t.exports={screen:"_3wFQ0kAjGQI0rS3l3BRIoY_0",main:"_12FP2-AR4F-Zbz_3RdJERH_0",input:"Nz1CR2HUcRWqh2DBFnf5z_0"}},NuTe:function(t,e,n){var r=n("5cF6"),s=n("vSke")("iterator"),i=n("khS8");t.exports=n("lNjp").isIterable=function(t){var e=Object(t);return void 0!==e[s]||"@@iterator"in e||i.hasOwnProperty(r(e))}},PENM:function(t,e){t.exports={buttonBox:"_2d-Mr0uM4NxhTVb-48NX3l_0"}},SnfV:function(t,e,n){"use strict";var r=n("iLYs"),s=n("MlLD"),i=n("8bIQ"),o=n("tpMr"),a=n("gnxq"),u={components:{BaseFullScreen:r.a,BaseMask:s.a,InputWithTest:i.a,ButtonBox:o.a},props:{value:{type:String,default:""},displayed:{type:Boolean,required:!0},cleanTheEnvironment:{type:Function,required:!0}},data:function(){return{errMsg:""}},methods:{testEnter:function(){var t=this.value.trim();t.match(/^$/)?this.errMsg="验证码不得为空":t.match(/^\d{6}$/)?this.errMsg="":this.errMsg="必须是6位数字"},onSubmit:function(){var t=this;""===this.errMsg&&this.$store.dispatch(a.a,{verificationCode:this.value}).then(function(){t.cleanTheEnvironment()})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseFullScreen",{directives:[{name:"show",rawName:"v-show",value:t.displayed,expression:"displayed"}],class:t.$style.screen},[n("BaseMask"),t._v(" "),n("main",{class:t.$style.main},[n("InputWithTest",{class:t.$style.input,attrs:{value:t.value,errMsg:t.errMsg,onBlur:t.testEnter,onFocus:function(){t.errMsg=""},type:"number",placeholder:"验证码"},on:{input:function(e){t.$emit("input",e)}}}),t._v(" "),n("ButtonBox",{attrs:{onConfirmClick:t.onSubmit}})],1)],1)},staticRenderFns:[]};var c=n("Z0/y")(u,l,!1,function(t){this.$style=n("Mu8x")},null,null);e.a=c.exports},VbK8:function(t,e,n){"use strict";var r={components:{BaseButton:n("/Zam").a}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("BaseButton",{class:this.$style.button},[this._t("default")],2)},staticRenderFns:[]};var i=n("Z0/y")(r,s,!1,function(t){this.$style=n("BJu4")},null,null);e.a=i.exports},ZX8o:function(t,e,n){"use strict";var r={props:{signinURL:{type:String,default:"signin_by_username"}},computed:{parentPath:function(){var t=this.$route.params.parentPath;return t||""}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$style.wrap},[n("header",{class:t.$style.header},[n("router-link",{attrs:{"active-class":t.$style.active,to:{name:""+t.signinURL,params:{parentPath:t.parentPath}}}},[t._v("登 录")]),t._v(" "),n("router-link",{attrs:{"active-class":t.$style.active,to:{name:"signup",params:{parentPath:t.parentPath}}}},[t._v("注 册")])],1),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var i=n("Z0/y")(r,s,!1,function(t){this.$style=n("DbuR")},null,null);e.a=i.exports},bq8o:function(t,e){t.exports={wrap:"_2XE-RDYoHHd2T9RinUmovA_0",input:"xTjOPNqz1zBQxmEA5lgvX_0",svg:"_2X1suzyX6WOAVNc-oOenbe_0"}},fbb7:function(t,e){t.exports={wrap:"nqMpNpxXBoaGOUQxNXbU8_0",errShow:"_3ylglHI_7ASkYw5BlOlYIv_0"}},gcvW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("8bIQ"),s=n("/Zam"),i=n("wpB1"),o=n("ZX8o"),a=n("F5HE"),u=n("SnfV"),l=n("gnxq"),c={components:{AuthSign:o.a,AuthSignFooter:a.a,AuthVerificate:u.a,BaseButton:s.a,InputWithTest:r.a},data:function(){return{phoneNumber:"",phoneNumberErrMsg:void 0,verificationCode:void 0,doShowVerificateBox:!1}},methods:{onRouterClick:function(){var t=this.$route.params.parentPath;t?this.$router.push({name:"signin_by_username",params:{parentPath:t}}):this.$router.push({name:"signin_by_username"})},onSubmit:function(t){var e=this;if(t.preventDefault(),""===this.phoneNumberErrMsg){var n=this.phoneNumber;this.$store.dispatch(l.e,{phoneNumber:n}).then(function(){e.phoneNumber="",e.doShowVerificateBox=!0})}},testphoneNumber:function(){var t=this.phoneNumber.trim();return this.phoneErrMsg="",Object(i.a)(t)?(this.phoneErrMsg="手机号不得为空",!1):Object(i.d)(t)?void 0:(this.phoneErrMsg="请输入正确的手机号",!1)},cleanVeficatedEnvironment:function(){this.doShowVerificateBox=!1,this.verificationCode=void 0,console.log(this.$route),this.$router.push(this.$route.params.parentPath||"/")}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthSign",{attrs:{signinURL:"signin_by_phonenumber"}},[n("AuthVerificate",{attrs:{displayed:t.doShowVerificateBox,cleanTheEnvironment:t.cleanVeficatedEnvironment},model:{value:t.verificationCode,callback:function(e){t.verificationCode=e},expression:"verificationCode"}}),t._v(" "),n("form",{on:{submit:t.onSubmit}},[n("InputWithTest",{attrs:{errMsg:t.phoneNumberErrMsg,onBlur:t.testphoneNumber,onFocus:function(){t.phoneNumberErrMsg=""},placeholder:"请输入11位手机号",type:"number"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}}),t._v(" "),n("BaseButton",{attrs:{type:"submit"}},[t._v("登  录")]),t._v(" "),n("AuthSignFooter",{attrs:{onClick:t.onRouterClick,text:"用户名密码登录"}})],1)],1)},staticRenderFns:[]},h=n("Z0/y")(c,p,!1,null,null,null);e.default=h.exports},loia:function(t,e,n){"use strict";var r={props:{value:{type:String,default:""}}},s={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{class:t.$style.input,domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}})},staticRenderFns:[]};var i=n("Z0/y")(r,s,!1,function(t){this.$style=n("FT1x")},null,null);e.a=i.exports},nxQ5:function(t,e){t.exports={box:"_3A-AwUaRsC0UNNmZpbDdHm_0"}},"o+vE":function(t,e,n){n("vu0M"),n("aTqf"),t.exports=n("NuTe")},tpMr:function(t,e,n){"use strict";var r=n("/Zam"),s=n("VbK8"),i={components:{BaseButton:r.a,ButtonAntiColor:s.a},props:{onConfirmClick:{type:Function,required:!0},textForConfirm:{type:String,default:"确定"},textForCancle:{type:String,default:"取消"}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.box},[n("BaseButton",{nativeOn:{click:function(e){return t.onConfirmClick(e)}}},[t._v(t._s(t.textForConfirm))]),t._v(" "),n("ButtonAntiColor",{nativeOn:{click:function(e){t.$router.go(-1)}}},[t._v(t._s(t.textForCancle))])],1)},staticRenderFns:[]};var a=n("Z0/y")(i,o,!1,function(t){this.$style=n("nxQ5")},null,null);e.a=a.exports},wpB1:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o});var r=function(t){return String(t).match(/^$/)},s=function(t){return!!String(t).match(/^(13\d|14[579]|15[0-35-9]|17[0135-8]|18\d)\d{8}$/)},i=function(t){return!!String(t).match(/^[\u4e00-\u9fa5]$/)},o=function(t){return!!String(t).match(/^.{1,20}$/)}},"x+iw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("KH7x"),s=n.n(r),i=n("8bIQ"),o=n("/Zam"),a=n("wpB1"),u=n("ZX8o"),l=n("F5HE"),c=n("SnfV"),p=n("iLYs"),h=n("MlLD"),f=n("VbO5"),d={components:{BaseFullScreen:p.a,BaseMask:h.a,BaseAvatar:f.a},props:{onExit:{type:Function,required:!0}},computed:{users:function(){return this.$store.state.auth.users}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseFullScreen",{nativeOn:{click:function(e){return t.onExit(e)}}},[n("BaseMask"),t._v(" "),t.users?n("nav",{class:t.$style.inner},t._l(t.users,function(e,r){return n("BaseAvatar",{key:r,class:t.$style.avatar},[t._v("\n      "+t._s(e.username)+"\n    ")])})):t._e()],1)},staticRenderFns:[]};var m=n("Z0/y")(d,v,!1,function(t){this.$style=n("AVQ2")},null,null).exports,_=n("gnxq"),y=[{title:"phoneNumber",text:"手机号",placeholder:"请输入11位手机号",type:"number"},{title:"username",text:"用户名",placeholder:"用户名只能是一个汉字"},{title:"password",text:"密码",placeholder:"密码不能超过20位"}];y.forEach(function(t,e){t.id=e,t.value="",t.errMsg=void 0});var g={components:{AuthSign:u.a,AuthSignFooter:l.a,AuthVerificate:c.a,UserList:m,BaseButton:o.a,InputWithTest:i.a},data:function(){return{inputDatas:y,IsThereNoError:!1,verificationCode:void 0,doShowVerificateBox:!1,doShowUserList:!1}},methods:{onSignupSubmit:function(t){var e=this;if(t.preventDefault(),this.IsThereNoError){var n=s()(this.inputDatas,3),r=n[0].value,i=n[1].value,o=n[2].value;this.$store.dispatch(_.h,{phoneNumber:r,username:i,password:o}).then(function(){e.clearItemsValue(),e.doShowVerificateBox=!0})}},onItemBlur:function(t){this.testEnter(t),this.testError()},cleanVeficatedEnvironment:function(){this.doShowVerificateBox=!1,this.verificationCode=void 0,this.$router.push(this.$route.params.parentPath||"/")},clearItemsValue:function(){this.inputDatas.forEach(function(t){t.value=""})},testEnter:function(t){var e=t.value.trim();if(Object(a.a)(e))return t.errMsg=t.text+"不得为空",!1;switch(t.errMsg="",t.title){case"phoneNumber":Object(a.d)(e)||(t.errMsg=t.placeholder);break;case"username":Object(a.c)(e)||(t.errMsg=t.placeholder);break;case"password":default:Object(a.b)(e)||(t.errMsg=t.placeholder)}},testError:function(){this.IsThereNoError=this.inputDatas.every(function(t){return""===t.errMsg})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthSign",[n("AuthVerificate",{attrs:{displayed:t.doShowVerificateBox,cleanTheEnvironment:t.cleanVeficatedEnvironment},model:{value:t.verificationCode,callback:function(e){t.verificationCode=e},expression:"verificationCode"}}),t._v(" "),n("form",{on:{submit:t.onSignupSubmit}},[t._l(t.inputDatas,function(e){return n("InputWithTest",{key:e.id,attrs:{type:e.type||"text",placeholder:e.placeholder,errMsg:e.errMsg,value:e.value,onBlur:function(){t.onItemBlur(e)},onFocus:function(){e.errMsg=""}},on:{input:function(t){e.value=t}}})}),t._v(" "),n("BaseButton",{attrs:{type:"submit"}},[t._v("注  册")]),t._v(" "),n("AuthSignFooter",{attrs:{onClick:function(){t.doShowUserList=!0},text:"查看已注册过的用户名"}}),t._v(" "),n("UserList",{directives:[{name:"show",rawName:"v-show",value:t.doShowUserList,expression:"doShowUserList"}],attrs:{onExit:function(){t.doShowUserList=!1}}})],2)],1)},staticRenderFns:[]},x=n("Z0/y")(g,b,!1,null,null,null);e.default=x.exports}});
//# sourceMappingURL=1.68ad32a586d590b6f648.js.map