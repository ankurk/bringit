/*!CK:597502132!*//*1401224320,178187597*/

if (self.CavalryLogger) { CavalryLogger.start_js(["OiquX"]); }

__d("cancelAnimationFrame",[],function(a,b,c,d,e,f){var g=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=g;},null);
__d("StarGridReorder",["Arbiter","AsyncRequest","CSS","DOM","Event","Locale","Rect","Run","SimpleDrag","StarGrid","StarGridLayout","Style","SubscriptionsHandler","Vector","cancelAnimationFrame","requestAnimationFrame"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=15,x=50,y=80,z=1,aa={getOrder:function(ba){return ba.map(function(ca){return ca.getAttribute('data-reorderid');});},addDragListener:function(ba,ca){if(!ba.hasChildNodes())return;var da=new q({isStarred:p.isStarred,renderNonStarred:p.renderNonStarred,renderStarred:p.renderStarred,isFixed:p.isFixed}),ea=l.isRTL()?'margin-right':'margin-left',fa,ga,ha,ia=m.getElementBounds(ba),ja=false,ka=da.canonicalize(p.getElements(ba)),la,ma,na=new s();n.onLeave(na.release.bind(na));function oa(pa){var qa=new o(pa);qa.setMinDragDistance(w);var ra,sa;function ta(){if(!ha)return;var ya=m.getViewportBounds(),za=ha.y-ya.t,ab=ya.b-ha.y,bb=new t(0,0);if(za<ab&&za<x){bb.y=-x+za;}else if(ab<x)bb.y=x-ab;bb.y=ua(bb.y);if(ja)ia=m.getElementBounds(ba);if(bb.y){if(ha.y+bb.y>ia.b)bb=new t(0,Math.max(ia.b-ha.y,0));bb.scrollElementBy(document.body);sa=sa.add(bb);xa(sa);ha=ha.add(bb);}ra=v(ta);}function ua(ya){if(ya>=0){ya=Math.min(ya,x);}else ya=Math.max(ya,-x);return Math.floor(Math.pow(ya/x*y,z));}var va=false,wa=j.scry(pa,'a[rel="theater"]');wa.forEach(function(ya){na.addSubscriptions(k.listen(ya,'click',function(event){if(va)event.kill();}));});qa.subscribe('mousedown',function(ya,event){va=false;ga=t.getEventPosition(event);fa=ga.sub(new t(r.get(pa,ea),r.get(pa,'margin-top')));});qa.subscribe('start',function(ya,event){if(event.button!==0)return;va=true;if(ma)i.removeClass(ma,'fbPhotoStarGridAbove');i.addClass(pa,'fbPhotoStarGridDrag');i.addClass(pa,'fbPhotoStarGridAbove');ma=pa;ra=v(ta);});qa.subscribe('update',function(ya,event){if(!va)return;var za=t.getEventPosition(event);ha=za;if(l.isRTL())za.x=2*ga.x-za.x;za=za.sub(fa);la=da.reorder(ka,pa,Math.floor((za.x+p.getSize(ba)/2)/p.getSize(ba)),Math.floor((za.y+p.getSize(ba)/2)/p.getSize(ba)));sa=za;p.layoutGrid(ba,la);xa(za);});function xa(ya){r.set(pa,'margin-top',ya.y+'px');r.set(pa,ea,ya.x+'px');}qa.subscribe('end',function(ya,event){if(!va)return;u(ra);i.removeClass(pa,'fbPhotoStarGridDrag');p.layoutGrid(ba,la);new h(ca).setData({order:aa.getOrder(la)}).setErrorHandler(function(za){ka=za;p.layoutGrid(ba,la);}.bind(this,ka)).send();ka=la;});}ka.forEach(oa);na.addSubscriptions(g.subscribe('StarGrid/UPDATE',function(pa,qa){var ra=da.canonicalize(p.getElements(qa));ra.forEach(function(sa){if(ka.indexOf(sa)===-1)oa(sa);});ka=ra;ja=true;}));}};e.exports=aa;},null);