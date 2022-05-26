(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"68ed":function(e,r,s){"use strict";s("f867")},"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"register-wrapper",attrs:{id:"registerBackground"}},[s("div",{staticClass:"form-wrapper"},[s("h1",{staticClass:"register-title"},[e._v("注册")]),s("p",{staticClass:"register-system"},[e._v(e._s(e.$config.siteName))]),s("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerFormRules,"label-width":"100px","hide-required-asterisk":""}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"用户名"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}})],1),s("el-form-item",{attrs:{prop:"telephone"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-mobile-phone",placeholder:"手机号"},model:{value:e.registerForm.telephone,callback:function(r){e.$set(e.registerForm,"telephone",r)},expression:"registerForm.telephone"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"密码","show-password":""},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),e.screenWidth>768?s("el-form-item",{staticStyle:{"user-select":"none"}},[s("drag-verify",{ref:"dragVerifyRef",attrs:{text:"请按住滑块拖动解锁",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check",handlerBg:"#F5F7FA",width:375,isPassing:e.isPassing},on:{"update:isPassing":[function(r){e.isPassing=r},e.updateIsPassing],"update:is-passing":function(r){e.isPassing=r}}})],1):e._e(),s("el-form-item",{staticClass:"registerButtonWrapper"},[s("el-button",{staticClass:"registerButton",attrs:{type:"primary",disabled:e.registerBtnDisabled,loading:e.registerBtnLoading},on:{click:function(r){return e.submitForm("registerForm")}}},[e._v("注册")])],1)],1)],1),e.screenWidth<=768?s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowDragVerify,expression:"isShowDragVerify"}],staticClass:"drag-verify-modal",on:{click:function(r){if(r.target!==r.currentTarget)return null;e.isShowDragVerify=!1}}},[s("drag-verify",{ref:"dragVerifyRef",attrs:{text:"请按住滑块拖动解锁",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check",handlerBg:"#F5F7FA",width:300,isPassing:e.isPassing},on:{"update:isPassing":[function(r){e.isPassing=r},e.updateIsPassing],"update:is-passing":function(r){e.isPassing=r}}})],1):e._e()])},i=[],n=(s("ac1f"),s("5319"),s("9afa")),a=s.n(n),o=s("e979"),c=s("7cd9"),g={color:"230, 162, 60",pointColor:"230, 162, 60",opacity:.5,count:99,zIndex:-1},l={name:"Register",components:{DragVerify:o["a"]},data:function(){return{registerForm:{telephone:"",username:"",password:""},registerFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:20,message:"长度在 5 到 20 个字符",trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号",trigger:"blur"}]},isShowDragVerify:!1,isPassing:!1,registerBtnDisabled:!0,registerBtnLoading:!1}},computed:{screenWidth:function(){return this.$store.state.common.screenWidth}},watch:{"registerForm.telephone":function(){this.resetVerifyPassing()},"registerForm.username":function(){this.resetVerifyPassing()},"registerForm.password":function(){this.resetVerifyPassing()}},created:function(){this.$nextTick((function(){var e=document.getElementById("registerBackground");new a.a(e,g)}))},mounted:function(){this.screenWidth<=768&&(this.registerBtnDisabled=!1)},methods:{resetVerifyPassing:function(){this.isPassing=!1,this.$refs.dragVerifyRef.reset(),this.screenWidth>768&&(this.registerBtnDisabled=!0)},updateIsPassing:function(e){var r=this;e?this.$refs.registerForm.validateField("telephone",(function(e){e?r.screenWidth>768&&(r.registerBtnDisabled=!0):r.screenWidth<=768?r.handleUserRegister("registerForm"):r.registerBtnDisabled=!1})):this.screenWidth>768&&(this.registerBtnDisabled=!0)},submitForm:function(e){var r=this;this.registerBtnLoading=!0,this.$refs[e].validate((function(s){if(!s)return r.$message.error("请完善信息！"),r.registerBtnLoading=!1,!1;r.screenWidth>768?r.handleUserRegister(e):(r.isShowDragVerify=!0,r.registerBtnLoading=!1)}))},handleUserRegister:function(e){var r=this;Object(c["a"])(this.registerForm).then((function(s){r.registerBtnLoading=!1,r.screenWidth<=768&&(r.isShowDragVerify=!1),s.success?(r.$notify({title:"成功",message:"注册成功！已跳转到登录页面",type:"success"}),r.$refs[e].resetFields(),r.$router.replace({path:"/login"})):r.$message.error(s.message)})).catch((function(){r.registerBtnLoading=!1,r.screenWidth<=768&&(r.isShowDragVerify=!1)}))}}},d=l,u=(s("68ed"),s("2877")),f=Object(u["a"])(d,t,i,!1,null,"212d939d",null);r["default"]=f.exports},f867:function(e,r,s){}}]);