/*!CK:536827374!*//*1401700394,178167327*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WUIBK"]); }

__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m){"use strict";var n=(function(o){var p=new g(m).setFiles({file:o}).setRelativeTo(l).setStatusElement(l).setAllowCrossOrigin(this.$FileUploadTarget0);p.subscribe('complete',function(q,r){this.onCompleteCallback(r);}.bind(this));p.send();}).bind(this);this.dragDropTarget=new i(l).setOnFilesDropCallback(function(o){o.length&&this.asyncProcess(o,function(p){p.length&&n(p);});}.bind(this));this.asyncProcess=function(o,p){p(o);};this.preprocess=function(o){return o;};this.onCompleteCallback=j;}k.prototype.setAllowCrossOrigin=function(l){"use strict";this.$FileUploadTarget0=l;return this;};k.prototype.setPreprocessor=function(l){"use strict";this.preprocess=l;return this;};k.prototype.setAsyncProcessor=function(l){"use strict";this.asyncProcess=l;return this;};k.prototype.onComplete=function(l){"use strict";this.onCompleteCallback=l;return this;};k.prototype.activate=function(){"use strict";if(!h.isSupported())return;this.dragDropTarget.setFileFilter(this.preprocess).enable();};e.exports=k;},null);
__d("ErrorDialog",["Dialog","emptyFunction"],function(a,b,c,d,e,f,g,h){var i={showAsyncError:function(j){try{return i.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function(j,k,l,m){return (new g()).setTitle(j).setBody(k).setButtons([g.OK]).setStackable(true).setModal(true).setHandler(l||h).setButtonsMessage(m||'').show();}};e.exports=i;},null);
__d("SinglePictureUploadTarget",["Bootloader","Dialog","ErrorDialog","FileUploadTarget","emptyFunction","htmlSpecialChars","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){"use strict";this.fileUploadTarget=new j(o,p);this.preprocessCallback=k;this.asyncPreprocessCallback=function(q,r){r(q);};this.oncompleteCallback=k;this.afterSuccessCallback=k;this.maxWidth=null;this.maxHeight=null;}n.prototype.setAllowCrossOrigin=function(o){"use strict";this.fileUploadTarget.setAllowCrossOrigin(o);return this;};n.prototype.setPreprocessCallback=function(o){"use strict";this.preprocessCallback=o;return this;};n.prototype.setAsyncPreprocessCallback=function(o){"use strict";this.asyncPreprocessCallback=o;return this;};n.prototype.setOncompleteCallback=function(o){"use strict";this.oncompleteCallback=o;return this;};n.prototype.setAfterSuccessCallback=function(o){"use strict";this.afterSuccessCallback=o;return this;};n.prototype.setMaximumDimensions=function(o,p){"use strict";this.maxWidth=o;this.maxHeight=p;return this;};n.prototype.activate=function(){"use strict";var o=function(s){return l(s.name);},p=(function(s){if(s.length>1){i.show("Upload error",m._("You can only select {max-photos} photos to upload to this album.  Only the first {max-photos} photo you selected will be uploaded.",{'max-photos':1}));s=[s[0]];}var t=s[0];if(!t.type.match(/^image\//)){i.show("Upload error",m._("We could not understand the contents of {filename}.  Make sure it is a jpg, gif, or png formatted image.",{filename:o(t)}));return [];}this.preprocessCallback(s);return s;}).bind(this),q=(function(s,t){var u=1024*1024*16,v=1024*1024*1,w=function(y){if(y.size>u){i.show("Upload error",m._("{filename} is too large. Please resize your photo to under\u003CBR>8000x8000 pixels and try again.",{filename:o(s[0])}));t([]);}else this.asyncPreprocessCallback([y],t);}.bind(this),x=s[0];if((x.size<v)||(!this.maxWidth&&!this.maxHeight)){w(x);}else g.loadModules(["ImageExif","ImageResizer"],function(y,z){if(!z.isSupported()){w(x);return;}var aa=new z(x,this.maxWidth,this.maxHeight);aa.subscribe('resized',function(ba,ca){if(ca.size>x.size){w(x);}else w(ca);}.bind(this));aa.subscribe('error',function(){w(x);}.bind(this));y.readFromFile(x,function(ba){ba&&aa.setOrientation(ba.Orientation);aa.resize();});});}).bind(this),r=(function(s){var t=s[0];this.oncompleteCallback(t);var u=t.getResponse().getPayload();if(t.isSuccess()){this.afterSuccessCallback(u);}else if(u&&u.__dialog){var v=new h();v.$SinglePictureUploadTarget1(u.__dialog);v.setButtons(h.OK).show();}else i.show(u.error.title,u.error.body);}).bind(this);return this.fileUploadTarget.onComplete(r).setPreprocessor(p).setAsyncProcessor(q).activate();};e.exports=n;},null);
__d("ProfilePOPAlbumEducationDialog",["AsyncRequest"],function(a,b,c,d,e,f,g){var h={listen:function(i,j){var k=i.getPopover().subscribe('show',function(){j.show();k.unsubscribe();new g('/ajax/profile/picture/record_seen_nux/').send();});}};e.exports=h;},null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","Event","HTML","TimelineProfilePicConfig","Run","$","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;s.init=function(t,u){"use strict";s.destroyInstance();r=new s(t||'fbProfileCover',u||'.profilePicThumb');};function s(t,u){"use strict";this.$TimelineProfilePic0=o(t);this.$TimelineProfilePic1=u;this.$TimelineProfilePic2=[g.subscribe(m.loading,this.startLoading.bind(this)),g.subscribe(m.success,this.onUploadSuccess.bind(this))];n.onBeforeUnload(this.onBeforeUnload.bind(this));n.onLeave(this.destroy.bind(this));}s.prototype.$TimelineProfilePic3=function(t){"use strict";this.$TimelineProfilePic4=t;h.conditionClass(this.$TimelineProfilePic0,'profilePicLoading',t);};s.prototype.destroy=function(){"use strict";this.$TimelineProfilePic2.forEach(function(t){t.unsubscribe();});this.$TimelineProfilePic2=[];r=null;};s.prototype.startLoading=function(t,u){"use strict";this.$TimelineProfilePic3(!!u.isLoading);};s.prototype.onUploadSuccess=function(t,u){"use strict";this.$TimelineProfilePic3(false);if(!u.newPic)return;var v=i.getCurrent();if(v)v.hide();var w=u.newPic;j.replace(j.find(this.$TimelineProfilePic0,this.$TimelineProfilePic1),typeof w==='string'?l(w):w);if(typeof(u.profileId)!==undefined&&typeof(u.headerPicURL)!==undefined){var x=p('profile_pic_header_'+u.profileId);if(x)x.src=u.headerPicURL;}var y=p('fbProfilePicSelector');if(y)h.removeClass(y,'fbTimelineNullProfilePicSelector');};s.prototype.onBeforeUnload=function(){"use strict";if(r===this&&this.$TimelineProfilePic4)return m.leavingMessage;};s.destroyInstance=function(){"use strict";r&&r.destroy();};s.addLoadingListener=function(t,u){"use strict";q(k.listen(t,u||'click',function(){g.inform(m.loading,{isLoading:1});}));};e.exports=s;},null);
__d("timeline-cover-dragdrop-edit",["SinglePictureUploadTarget","TimelineCover"],function(a,b,c,d,e,f,g,h){var i=function(){var m=h.getInstance();m.hideLoadingIndicator();},j=function(m){var n=h.getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},k=function(m){h.getInstance().showLoadingIndicator();},l=function(m,n,o,p){new g(m,n).setAllowCrossOrigin(true).setMaximumDimensions(o,p).setPreprocessCallback(k).setOncompleteCallback(i).setAfterSuccessCallback(j).activate();};f.initialize_timeline_cover_drop_target=l;},null);
__d("profile-pic-dragdrop-edit",["Arbiter","SinglePictureUploadTarget","TimelineProfilePic","TimelineProfilePicConfig"],function(a,b,c,d,e,f,g,h,i,j){f.initialize_profile_pic_drop_target=function(k,l,m){i.init();var n={files:null,callback:null};if(m){m.subscribe('confirm',function(){n.callback(n.files);g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);m.hide();});m.subscribe('cancel',function(){n.callback([]);m.hide();});}new h(k,l).setAllowCrossOrigin(true).setAsyncPreprocessCallback(function(o,p){if(!m){g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);p(o);}else{n={files:o,callback:p};m.show();}}).setOncompleteCallback(function(){g.inform(j.loading,{isLoading:0},g.BEHAVIOR_STATE);}).setAfterSuccessCallback(function(o){g.inform(j.success,{newPic:o.photo_node},g.BEHAVIOR_STATE);}).activate();};},null);
__d("CountButtonCountDEPRECATED",["ArbiterMixin","DOM","mixin"],function(a,b,c,d,e,f,g,h,i){var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o,p){"use strict";this._root=n;this._count=o;this._max=p;}m.prototype.getCount=function(){"use strict";return this._count;};m.prototype.setCount=function(n){"use strict";this._count=n;var o=this.getDisplayedValue();h.setContent(this._root,o);this.inform('change',{value:this._count,max:this._max,display:o});return this;};m.prototype.addCount=function(n){"use strict";this.setCount(this.getCount()+n);return this;};m.prototype.getDisplayedValue=function(n){"use strict";var o=(this._count>this._max)?'+':'';return Math.max(0,Math.min(this._count,this._max))+o;};e.exports=m;},null);
__d("CountButtonDEPRECATED",["CSS","cx"],function(a,b,c,d,e,f,g,h){var i={huge:"_4q9",large:"_9x",small:"_9w",hidden:"_9v"};function j(k,l){"use strict";this._root=k;this._counter=l;this._initEvents();}j.prototype._initEvents=function(){"use strict";this._counter.subscribe('change',this._counterChange.bind(this));};j.prototype._counterChange=function(k,l){"use strict";g.removeClass(this._root,i.huge);g.removeClass(this._root,i.large);g.removeClass(this._root,i.small);g.removeClass(this._root,i.hidden);var m=l.count>l.max;if(m&&l.max>9){g.addClass(this._root,i.huge);}else if(l.value>9||(m&&l.max>0)){g.addClass(this._root,i.large);}else if(l.value>0){g.addClass(this._root,i.small);}else g.addClass(this._root,i.hidden);};j.prototype.getCounter=function(){"use strict";return this._counter;};e.exports=j;},null);
__d("FreeformTokenizerBehavior",["Event","Input","Keys"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=l.matcher&&new RegExp(l.matcher,'i'),n=l.splitter&&new RegExp(l.splitter),o=l.tokenize_on_blur!==false,p=l.tokenize_on_paste!==false,q=l.split_on_check===true,r=l.select_on_comma!==false,s=l.select_on_space===true,t=l.never_submit===true;function u(event){var v=h.getValue(k.getInput()).trim();if(n&&event&&event.type=='paste'){v=v.split(n);}else if(n&&q){v=v.split(n);}else v=[v];var w=false;for(var x=0;x<v.length;x++){var y=v[x].trim();if(y&&(!m||m.test(y))){var z={uid:y,text:y,freeform:true};k.addToken(k.createToken(z));w=true;}}if(event&&w){k.getTypeahead().getCore().afterSelect();event.kill();}}k.subscribe('keydown',function(v,w){var event=w.event,x=g.getKeyCode(event);if(x==i.RETURN||(r&&x==i.COMMA)||(s&&x==i.SPACE)){var y=k.getTypeahead().getView();if(y.getSelection()){y.select();event.kill();}else u(event);}if(x==i.RETURN&&t)event.kill();});k.subscribe('paste',function(v,w){if(p)setTimeout(u.bind(null,w.event),20);});k.subscribe('blur',function(v,w){if(o)u();k.getTypeahead().getCore().reset();});}e.exports=j;},null);
__d("legacy:FreeformTokenizerBehavior",["FreeformTokenizerBehavior"],function(a,b,c,d,e,f,g){if(!a.TokenizerBehaviors)a.TokenizerBehaviors={};a.TokenizerBehaviors.freeform=g;},3);