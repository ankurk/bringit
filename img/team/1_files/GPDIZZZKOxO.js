/*!CK:1165414158!*//*1401224687,178142543*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qfGyd"]); }

__d("CollectionSuggestionsTab",["CollectionsRecommendationViewportTracking","CSS","DOM","Event","ImageUtils","Parent","TimelineSection","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={},r={init:function(s,t){g.init({control:s.parentNode});r.attachOnImageLoad(i.scry(t.grid,"._57t")[0],function(v){r._setupShowQuestion(v,t.grid);});q[t.pageletID]={};r.update(t);var u=q[t.pageletID];u.collectionSize=t.collectionSize;u.showCollectionSize=t.showCollectionSize;u.collectionItemName=t.collectionItemName;},update:function(s){var t=q[s.pageletID];if(s.cursor){t.cursor=s.cursor;t.inProgress=false;}if(!s.grid)return;var u=i.scry(s.grid,"._57t");for(var v=0;v<u.length;v++)r.attachOnImageLoad(u[v],r._markAsLoaded);},increment:function(s){var t=q[s];t.collectionSize++;if(t.showCollectionSize&&t.collectionSize<1000){var u=i.create('div');h.addClass(u,"_5o7d");i.setContent(u,t.collectionSize);if(t.collectionItemName)i.appendContent(u,t.collectionItemName.cloneNode());setTimeout(function(){var v=l.byClass(u,"_5jvf");if(v)h.addClass(v,"_5wux");},1000);return u;}},getNext:function(s){var t=q[s];if(!t||t.inProgress)return;t.inProgress=true;var u=p(s),v=i.scry(u,"._3t3")[0];if(v)m.callWithSection(s,function(w){w.addContentLoader(v,t.cursor,true);});},attachOnImageLoad:function(s,t){var u=i.scry(s,'img')[0];if(!u)return;if(k.hasLoaded(u)){t(u);}else if(typeof u.onload==='function'){var v=u.onload;u.onload=function(){v();t(u);};}else u.onload=function(){t(u);};},_markAsLoaded:function(s){h.addClass(l.byClass(s,"_57t"),"_41to");},_setupShowQuestion:function(s,t){h.addClass(l.byClass(s,"_5jvf"),"_5lgy");var u=j.listen(t,'mouseenter',function(){u.remove();h.removeClass(i.find(t,"._5lgy"),"_5lgy");});}};e.exports=r;},null);
__d("CollectionSuggestionQuestionRowWrapper",["CollectionSuggestionsTab","CSS","DOM","Event","Parent","TimelineAppCollection","copyProperties","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=[],r=[];function s(t,u,v,w,x,y){"use strict";this.collectionToken=t;this.wantCollectionToken=y;this.itemID=u;this.pageletID=v;this.question=w;this.root=x.root;p([w.subscribe('answered',function(z,aa){if(aa==='yes'){return this.handleYesClick();}else if(aa==='no'){return this.handleNoClick();}else if(aa==='want')return this.handleWantClick();}.bind(this)),j.listen(x.collectionLink,'click',function(){l.clickTabNode(this.collectionToken);}.bind(this)),j.listen(x.wantCollectionLink,'click',function(){l.clickTabNode(this.wantCollectionToken);}.bind(this))]);}s.prototype.updateUI=function(t){"use strict";var u=k.byClass(this.root,"_5jvf");h.addClass(u,t);};s.prototype.handleYesClick=function(){"use strict";this.updateUI("_5ida");return this.handleAddClick(this.collectionToken);};s.prototype.handleWantClick=function(){"use strict";this.updateUI("_5lg_");return this.handleAddClick(this.wantCollectionToken);};s.prototype.handleAddClick=function(t){"use strict";var u={};if(!q[this.pageletID]){q[this.pageletID]=true;u.is_first=true;}u.ignored_item_ids=this.getIgnoredIDs(this.itemID);var v=k.byClass(this.root,"_5jvf"),w=i.scry(v,'img')[0].src,x=i.find(v,"._gx7"),y=x.href,z=x.text;l.addGenericPlaceholderToCollection(t,{entityID:this.itemID,imageSrc:w,link:y,title:z});var aa=g.increment(this.pageletID);if(aa){var ba=i.find(v,"._5ide");ba.appendChild(aa);}g.getNext(this.pageletID);return m(u,{collection_token:t});};s.prototype.handleNoClick=function(){"use strict";this.updateUI("_5idb");return {objectid:this.itemID,ignored_item_ids:this.getIgnoredIDs(this.itemID)};};s.prototype.getIgnoredIDs=function(t){"use strict";var u=k.byClass(this.root,"_5idn").parentNode,v=i.scry(u,"._5jvf"),w=r[this.collectionToken];r[this.collectionToken]=t;var x=[],y=false;for(var z=0;z<v.length;z++){var aa=Number(v[z].attributes['data-item'].value);if(w&&aa!=w&&!y)continue;y=true;if(aa===w)continue;if(t===aa)break;x.push(aa);}return x;};e.exports=s;},null);