// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
hoplon.core.do_BANG_;

hoplon.core.on_BANG_;

hoplon.core.$text;

hoplon.core.add_children_BANG_;
cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11528_SHARP_,p2__11529_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11528_SHARP_,p2__11529_SHARP_.getAttribute("static-id"),p2__11529_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args11530 = [];
var len__6044__auto___11535 = arguments.length;
var i__6045__auto___11536 = (0);
while(true){
if((i__6045__auto___11536 < len__6044__auto___11535)){
args11530.push((arguments[i__6045__auto___11536]));

var G__11537 = (i__6045__auto___11536 + (1));
i__6045__auto___11536 = G__11537;
continue;
} else {
}
break;
}

var G__11532 = args11530.length;
switch (G__11532) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11530.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__11533_11539 = init;
var G__11534_11540 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11533_11539,G__11534_11540) : f.call(null,G__11533_11539,G__11534_11540));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__11543 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,(0),null);
var more = cljs.core.nthnext(vec__11543,(1));
var vec__11544 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11544,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11544,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("9d9ce9faab1b4d62999e7fe2f637bb4b")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__4986__auto__ = (function (){var and__4974__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__4974__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var G__11545 = (i + (1));
var G__11546 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__11545;
ret = G__11546;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__11548 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11548) : hoplon.core.$text.call(null,G__11548));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__11559 = new$__$1;
var vec__11561 = G__11559;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11561,(0),null);
var xs = cljs.core.nthnext(vec__11561,(1));
var G__11560 = hoplon.core.child_vec(this$);
var vec__11562 = G__11560;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,(0),null);
var ks = cljs.core.nthnext(vec__11562,(1));
var kids = vec__11562;
var G__11559__$1 = G__11559;
var G__11560__$1 = G__11560;
while(true){
var vec__11563 = G__11559__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11563,(0),null);
var xs__$1 = cljs.core.nthnext(vec__11563,(1));
var vec__11564 = G__11560__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11564,(0),null);
var ks__$1 = cljs.core.nthnext(vec__11564,(1));
var kids__$1 = vec__11564;
if(cljs.core.truth_((function (){var or__4986__auto__ = x__$1;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return k__$1;
}
})())){
var G__11565 = xs__$1;
var G__11566 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
var n_11567 = hoplon.core.__GT_node(k__$1);
hoplon.core.removeChild.call(this$,n_11567);

jQuery(n_11567).remove();
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__11559__$1 = G__11565;
G__11560__$1 = G__11566;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_11570 = (function (){var G__11569 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11569) : cljs.core.atom.call(null,G__11569));
})();
this$__$1.hoplonKids = kids_11570;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_11570,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_11573 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_11574 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_11573) : cljs.core.deref.call(null,kids_11573)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_11573,i_11574,x__$1,this$__$1){
return (function (p1__11572_SHARP_,p2__11571_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11573,cljs.core.assoc,i_11574,p2__11571_SHARP_);
});})(kids_11573,i_11574,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11573,cljs.core.assoc,i_11574,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__11575_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__11575_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__11576_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__11576_SHARP_], 0)));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__11577_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11577_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11578 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_11579 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__11580 = (function (){var and__4974__auto__ = attr_11579;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_11579) : cljs.core.deref.call(null,attr_11579)),kk_11578);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11580)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_11579,cljs.core.assoc,kk_11578,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__11581_SHARP_){
return p1__11581_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__11582_SHARP_){
return p1__11582_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__11583_SHARP_){
return p1__11583_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__11584_SHARP_){
return p1__11584_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5642__auto__.call(null,this$,k,v));
} else {
var m__5642__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5642__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5642__auto__.call(null,this$,child));
} else {
var m__5642__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5642__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5642__auto__.call(null,this$,child));
} else {
var m__5642__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5642__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5642__auto__.call(null,this$,new$,existing));
} else {
var m__5642__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5642__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5642__auto__.call(null,this$,new$,existing));
} else {
var m__5642__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5642__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__11585_SHARP_){
return (p1__11585_SHARP_ instanceof Node);
}):(function (p1__11586_SHARP_){
try{return p1__11586_SHARP_.nodeType;
}catch (e11587){if((e11587 instanceof Error)){
var _ = e11587;
return null;
} else {
throw e11587;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11588_SHARP_){
try{return cljs.core.vector_QMARK_(p1__11588_SHARP_);
}catch (e11589){if((e11589 instanceof Error)){
var _ = e11589;
return null;
} else {
throw e11589;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11590_SHARP_){
try{return cljs.core.seq_QMARK_(p1__11590_SHARP_);
}catch (e11591){if((e11591 instanceof Error)){
var _ = e11591;
return null;
} else {
throw e11591;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args11592 = [];
var len__6044__auto___11596 = arguments.length;
var i__6045__auto___11597 = (0);
while(true){
if((i__6045__auto___11597 < len__6044__auto___11596)){
args11592.push((arguments[i__6045__auto___11597]));

var G__11598 = (i__6045__auto___11597 + (1));
i__6045__auto___11597 = G__11598;
continue;
} else {
}
break;
}

var G__11594 = args11592.length;
switch (G__11594) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11592.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11595){if((e11595 instanceof Error)){
var _ = e11595;
return not_found;
} else {
throw e11595;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args11600 = [];
var len__6044__auto___11603 = arguments.length;
var i__6045__auto___11604 = (0);
while(true){
if((i__6045__auto___11604 < len__6044__auto___11603)){
args11600.push((arguments[i__6045__auto___11604]));

var G__11605 = (i__6045__auto___11604 + (1));
i__6045__auto___11604 = G__11605;
continue;
} else {
}
break;
}

var G__11602 = args11600.length;
switch (G__11602) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11600.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__11615 = args;
var vec__11616 = G__11615;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11616,(0),null);
var args__$1 = cljs.core.nthnext(vec__11616,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11615__$1 = G__11615;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11617 = G__11615__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11617,(0),null);
var args__$2 = cljs.core.nthnext(vec__11617,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__11618 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__11615__$1,attr__$2,kids__$2,vec__11617,arg__$1,args__$2,attr,kids,G__11615,vec__11616,arg,args__$1){
return (function (p1__11607_SHARP_,p2__11608_SHARP_,p3__11609_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__11607_SHARP_,p2__11608_SHARP_,p3__11609_SHARP_);
});})(attr__$1,kids__$1,G__11615__$1,attr__$2,kids__$2,vec__11617,arg__$1,args__$2,attr,kids,G__11615,vec__11616,arg,args__$1))
,attr__$2,arg__$1);
var G__11619 = kids__$2;
var G__11620 = args__$2;
attr__$1 = G__11618;
kids__$1 = G__11619;
G__11615__$1 = G__11620;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11621 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__11622 = kids__$2;
var G__11623 = cljs.core.rest(args__$2);
attr__$1 = G__11621;
kids__$1 = G__11622;
G__11615__$1 = G__11623;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__11624 = attr__$2;
var G__11625 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11626 = args__$2;
attr__$1 = G__11624;
kids__$1 = G__11625;
G__11615__$1 = G__11626;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__11627 = attr__$2;
var G__11628 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11629 = args__$2;
attr__$1 = G__11627;
kids__$1 = G__11628;
G__11615__$1 = G__11629;
continue;
} else {
var G__11630 = attr__$2;
var G__11631 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__11632 = args__$2;
attr__$1 = G__11630;
kids__$1 = G__11631;
G__11615__$1 = G__11632;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__11634_SHARP_,p2__11633_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__11633_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11633_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11636){
var vec__11643 = p__11636;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(0),null);
var _ = cljs.core.nthnext(vec__11643,(1));
var kids = vec__11643;
var this$__$1 = this$;
var node_11649 = ((function (this$__$1,vec__11643,child_cell,_,kids){
return (function (p1__11635_SHARP_){
if(typeof p1__11635_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__11635_SHARP_) : hoplon.core.$text.call(null,p1__11635_SHARP_));
} else {
if(typeof p1__11635_SHARP_ === 'number'){
var G__11644 = [cljs.core.str(p1__11635_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11644) : hoplon.core.$text.call(null,G__11644));
} else {
return p1__11635_SHARP_;

}
}
});})(this$__$1,vec__11643,child_cell,_,kids))
;
var seq__11645_11650 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__11646_11651 = null;
var count__11647_11652 = (0);
var i__11648_11653 = (0);
while(true){
if((i__11648_11653 < count__11647_11652)){
var x_11654 = chunk__11646_11651.cljs$core$IIndexed$_nth$arity$2(null,i__11648_11653);
var temp__4425__auto___11655 = node_11649(x_11654);
if(cljs.core.truth_(temp__4425__auto___11655)){
var x_11656__$1 = temp__4425__auto___11655;
hoplon.core.append_child_BANG_(this$__$1,x_11656__$1);
} else {
}

var G__11657 = seq__11645_11650;
var G__11658 = chunk__11646_11651;
var G__11659 = count__11647_11652;
var G__11660 = (i__11648_11653 + (1));
seq__11645_11650 = G__11657;
chunk__11646_11651 = G__11658;
count__11647_11652 = G__11659;
i__11648_11653 = G__11660;
continue;
} else {
var temp__4425__auto___11661 = cljs.core.seq(seq__11645_11650);
if(temp__4425__auto___11661){
var seq__11645_11662__$1 = temp__4425__auto___11661;
if(cljs.core.chunked_seq_QMARK_(seq__11645_11662__$1)){
var c__5789__auto___11663 = cljs.core.chunk_first(seq__11645_11662__$1);
var G__11664 = cljs.core.chunk_rest(seq__11645_11662__$1);
var G__11665 = c__5789__auto___11663;
var G__11666 = cljs.core.count(c__5789__auto___11663);
var G__11667 = (0);
seq__11645_11650 = G__11664;
chunk__11646_11651 = G__11665;
count__11647_11652 = G__11666;
i__11648_11653 = G__11667;
continue;
} else {
var x_11668 = cljs.core.first(seq__11645_11662__$1);
var temp__4425__auto___11669__$1 = node_11649(x_11668);
if(cljs.core.truth_(temp__4425__auto___11669__$1)){
var x_11670__$1 = temp__4425__auto___11669__$1;
hoplon.core.append_child_BANG_(this$__$1,x_11670__$1);
} else {
}

var G__11671 = cljs.core.next(seq__11645_11662__$1);
var G__11672 = null;
var G__11673 = (0);
var G__11674 = (0);
seq__11645_11650 = G__11671;
chunk__11646_11651 = G__11672;
count__11647_11652 = G__11673;
i__11648_11653 = G__11674;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__11681__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11676 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,(1),null);
var G__11677 = this$;
hoplon.core.add_attributes_BANG_(G__11677,attr);

hoplon.core.add_children_BANG_(G__11677,kids);

return G__11677;
};
var G__11681 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11682__i = 0, G__11682__a = new Array(arguments.length -  1);
while (G__11682__i < G__11682__a.length) {G__11682__a[G__11682__i] = arguments[G__11682__i + 1]; ++G__11682__i;}
  args = new cljs.core.IndexedSeq(G__11682__a,0);
} 
return G__11681__delegate.call(this,self__,args);};
G__11681.cljs$lang$maxFixedArity = 1;
G__11681.cljs$lang$applyTo = (function (arglist__11683){
var self__ = cljs.core.first(arglist__11683);
var args = cljs.core.rest(arglist__11683);
return G__11681__delegate(self__,args);
});
G__11681.cljs$core$IFn$_invoke$arity$variadic = G__11681__delegate;
return G__11681;
})()
;

Element.prototype.apply = (function (self__,args11675){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11675)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11684__delegate = function (args){
var this$ = this;
var vec__11678 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(1),null);
var G__11679 = this$;
hoplon.core.add_attributes_BANG_(G__11679,attr);

hoplon.core.add_children_BANG_(G__11679,kids);

return G__11679;
};
var G__11684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11685__i = 0, G__11685__a = new Array(arguments.length -  0);
while (G__11685__i < G__11685__a.length) {G__11685__a[G__11685__i] = arguments[G__11685__i + 0]; ++G__11685__i;}
  args = new cljs.core.IndexedSeq(G__11685__a,0);
} 
return G__11684__delegate.call(this,args);};
G__11684.cljs$lang$maxFixedArity = 0;
G__11684.cljs$lang$applyTo = (function (arglist__11686){
var args = cljs.core.seq(arglist__11686);
return G__11684__delegate(args);
});
G__11684.cljs$core$IFn$_invoke$arity$variadic = G__11684__delegate;
return G__11684;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_11687__$1 = cljs.core.name(k);
var e_11688 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_11688.removeAttr(k_11687__$1);
} else {
e_11688.attr(k_11687__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11687__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e11680){if((e11680 instanceof Error)){
var _ = e11680;
return null;
} else {
throw e11680;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__11695__delegate = function (args){
var vec__11692 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__11693 = elem.hoplonKids;
var G__11694 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11693,G__11694) : cljs.core.reset_BANG_.call(null,G__11693,G__11694));
} else {
return null;
}
};
var G__11695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11696__i = 0, G__11696__a = new Array(arguments.length -  0);
while (G__11696__i < G__11696__a.length) {G__11696__a[G__11696__i] = arguments[G__11696__i + 0]; ++G__11696__i;}
  args = new cljs.core.IndexedSeq(G__11696__a,0);
} 
return G__11695__delegate.call(this,args);};
G__11695.cljs$lang$maxFixedArity = 0;
G__11695.cljs$lang$applyTo = (function (arglist__11697){
var args = cljs.core.seq(arglist__11697);
return G__11695__delegate(args);
});
G__11695.cljs$core$IFn$_invoke$arity$variadic = G__11695__delegate;
return G__11695;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__11698__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__11698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11699__i = 0, G__11699__a = new Array(arguments.length -  0);
while (G__11699__i < G__11699__a.length) {G__11699__a[G__11699__i] = arguments[G__11699__i + 0]; ++G__11699__i;}
  args = new cljs.core.IndexedSeq(G__11699__a,0);
} 
return G__11698__delegate.call(this,args);};
G__11698.cljs$lang$maxFixedArity = 0;
G__11698.cljs$lang$applyTo = (function (arglist__11700){
var args = cljs.core.seq(arglist__11700);
return G__11698__delegate(args);
});
G__11698.cljs$core$IFn$_invoke$arity$variadic = G__11698__delegate;
return G__11698;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11703 = arguments.length;
var i__6045__auto___11704 = (0);
while(true){
if((i__6045__auto___11704 < len__6044__auto___11703)){
args__6051__auto__.push((arguments[i__6045__auto___11704]));

var G__11705 = (i__6045__auto___11704 + (1));
i__6045__auto___11704 = G__11705;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__11702 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11701){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11701));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__11706_SHARP_){
return document.createTextNode(p1__11706_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11707_SHARP_){
return document.createComment(p1__11707_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__11708_SHARP_){
var e = (function (){var G__11709 = p1__11708_SHARP_.target;
return jQuery(G__11709);
})();
if(cljs.core.truth_((function (){var or__4986__auto__ = e.attr("action");
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__11708_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args11710 = [];
var len__6044__auto___11713 = arguments.length;
var i__6045__auto___11714 = (0);
while(true){
if((i__6045__auto___11714 < len__6044__auto___11713)){
args11710.push((arguments[i__6045__auto___11714]));

var G__11715 = (i__6045__auto___11714 + (1));
i__6045__auto___11714 = G__11715;
continue;
} else {
}
break;
}

var G__11712 = args11710.length;
switch (G__11712) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11710.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args11717 = [];
var len__6044__auto___11720 = arguments.length;
var i__6045__auto___11721 = (0);
while(true){
if((i__6045__auto___11721 < len__6044__auto___11720)){
args11717.push((arguments[i__6045__auto___11721]));

var G__11722 = (i__6045__auto___11721 + (1));
i__6045__auto___11721 = G__11722;
continue;
} else {
}
break;
}

var G__11719 = args11717.length;
switch (G__11719) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11717.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__5899__auto__ = (function (){var G__11724 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11724) : cljs.core.atom.call(null,G__11724));
})();
var prefer_table__5900__auto__ = (function (){var G__11725 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11725) : cljs.core.atom.call(null,G__11725));
})();
var method_cache__5901__auto__ = (function (){var G__11726 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11726) : cljs.core.atom.call(null,G__11726));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__11727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11727) : cljs.core.atom.call(null,G__11727));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__11728 = elem;
var G__11729 = cljs.core.cst$kw$attr;
var G__11730 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11728,G__11729,G__11730) : hoplon.core.do_BANG_.call(null,G__11728,G__11729,G__11730));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__11731__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__11731 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11732__i = 0, G__11732__a = new Array(arguments.length -  2);
while (G__11732__i < G__11732__a.length) {G__11732__a[G__11732__i] = arguments[G__11732__i + 2]; ++G__11732__i;}
  args = new cljs.core.IndexedSeq(G__11732__a,0);
} 
return G__11731__delegate.call(this,elem,_,args);};
G__11731.cljs$lang$maxFixedArity = 2;
G__11731.cljs$lang$applyTo = (function (arglist__11733){
var elem = cljs.core.first(arglist__11733);
arglist__11733 = cljs.core.next(arglist__11733);
var _ = cljs.core.first(arglist__11733);
var args = cljs.core.rest(arglist__11733);
return G__11731__delegate(elem,_,args);
});
G__11731.cljs$core$IFn$_invoke$arity$variadic = G__11731__delegate;
return G__11731;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11734 = cljs.core.seq(kvs);
var chunk__11735 = null;
var count__11736 = (0);
var i__11737 = (0);
while(true){
if((i__11737 < count__11736)){
var vec__11738 = chunk__11735.cljs$core$IIndexed$_nth$arity$2(null,i__11737);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(1),null);
var k_11740__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11740__$1);
} else {
e.attr(k_11740__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11740__$1:v));
}

var G__11741 = seq__11734;
var G__11742 = chunk__11735;
var G__11743 = count__11736;
var G__11744 = (i__11737 + (1));
seq__11734 = G__11741;
chunk__11735 = G__11742;
count__11736 = G__11743;
i__11737 = G__11744;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11734);
if(temp__4425__auto__){
var seq__11734__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11734__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11734__$1);
var G__11745 = cljs.core.chunk_rest(seq__11734__$1);
var G__11746 = c__5789__auto__;
var G__11747 = cljs.core.count(c__5789__auto__);
var G__11748 = (0);
seq__11734 = G__11745;
chunk__11735 = G__11746;
count__11736 = G__11747;
i__11737 = G__11748;
continue;
} else {
var vec__11739 = cljs.core.first(seq__11734__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11739,(1),null);
var k_11749__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11749__$1);
} else {
e.attr(k_11749__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11749__$1:v));
}

var G__11750 = cljs.core.next(seq__11734__$1);
var G__11751 = null;
var G__11752 = (0);
var G__11753 = (0);
seq__11734 = G__11750;
chunk__11735 = G__11751;
count__11736 = G__11752;
i__11737 = G__11753;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__11754_SHARP_){
return cljs.core.zipmap(p1__11754_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__11755 = cljs.core.seq(clmap);
var chunk__11756 = null;
var count__11757 = (0);
var i__11758 = (0);
while(true){
if((i__11758 < count__11757)){
var vec__11759 = chunk__11756.cljs$core$IIndexed$_nth$arity$2(null,i__11758);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11759,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11759,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11761 = seq__11755;
var G__11762 = chunk__11756;
var G__11763 = count__11757;
var G__11764 = (i__11758 + (1));
seq__11755 = G__11761;
chunk__11756 = G__11762;
count__11757 = G__11763;
i__11758 = G__11764;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11755);
if(temp__4425__auto__){
var seq__11755__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11755__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11755__$1);
var G__11765 = cljs.core.chunk_rest(seq__11755__$1);
var G__11766 = c__5789__auto__;
var G__11767 = cljs.core.count(c__5789__auto__);
var G__11768 = (0);
seq__11755 = G__11765;
chunk__11756 = G__11766;
count__11757 = G__11767;
i__11758 = G__11768;
continue;
} else {
var vec__11760 = cljs.core.first(seq__11755__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11760,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11760,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11769 = cljs.core.next(seq__11755__$1);
var G__11770 = null;
var G__11771 = (0);
var G__11772 = (0);
seq__11755 = G__11769;
chunk__11756 = G__11770;
count__11757 = G__11771;
i__11758 = G__11772;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11773 = cljs.core.seq(kvs);
var chunk__11774 = null;
var count__11775 = (0);
var i__11776 = (0);
while(true){
if((i__11776 < count__11775)){
var vec__11777 = chunk__11774.cljs$core$IIndexed$_nth$arity$2(null,i__11776);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11779 = seq__11773;
var G__11780 = chunk__11774;
var G__11781 = count__11775;
var G__11782 = (i__11776 + (1));
seq__11773 = G__11779;
chunk__11774 = G__11780;
count__11775 = G__11781;
i__11776 = G__11782;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11773);
if(temp__4425__auto__){
var seq__11773__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11773__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11773__$1);
var G__11783 = cljs.core.chunk_rest(seq__11773__$1);
var G__11784 = c__5789__auto__;
var G__11785 = cljs.core.count(c__5789__auto__);
var G__11786 = (0);
seq__11773 = G__11783;
chunk__11774 = G__11784;
count__11775 = G__11785;
i__11776 = G__11786;
continue;
} else {
var vec__11778 = cljs.core.first(seq__11773__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11787 = cljs.core.next(seq__11773__$1);
var G__11788 = null;
var G__11789 = (0);
var G__11790 = (0);
seq__11773 = G__11787;
chunk__11774 = G__11788;
count__11775 = G__11789;
i__11776 = G__11790;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__11791 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__11792 = (0);
return setTimeout(G__11791,G__11792);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__5899__auto__ = (function (){var G__11793 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11793) : cljs.core.atom.call(null,G__11793));
})();
var prefer_table__5900__auto__ = (function (){var G__11794 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11794) : cljs.core.atom.call(null,G__11794));
})();
var method_cache__5901__auto__ = (function (){var G__11795 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11795) : cljs.core.atom.call(null,G__11795));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__11796 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11796) : cljs.core.atom.call(null,G__11796));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__11797 = this$__$1.target;
return jQuery(G__11797);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__11812 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11812) : cljs.core.atom.call(null,G__11812));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__11813,G__11814){
return (G__11813.cljs$core$IFn$_invoke$arity$1 ? G__11813.cljs$core$IFn$_invoke$arity$1(G__11814) : G__11813.call(null,G__11814));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11798_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__11816,G__11817,G__11815){
return (G__11815.cljs$core$IFn$_invoke$arity$2 ? G__11815.cljs$core$IFn$_invoke$arity$2(G__11816,G__11817) : G__11815.call(null,G__11816,G__11817));
});})(on_deck,items_seq))
).call(null,items_seq,p1__11798_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11799_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__11799_SHARP_) : cljs.core.deref.call(null,p1__11799_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11799_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__11818 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__11819 = null;
var count__11820 = (0);
var i__11821 = (0);
while(true){
if((i__11821 < count__11820)){
var i = chunk__11819.cljs$core$IIndexed$_nth$arity$2(null,i__11821);
var e_11824 = (function (){var or__4986__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var G__11822 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11822) : tpl.call(null,G__11822));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_11824);

var G__11825 = seq__11818;
var G__11826 = chunk__11819;
var G__11827 = count__11820;
var G__11828 = (i__11821 + (1));
seq__11818 = G__11825;
chunk__11819 = G__11826;
count__11820 = G__11827;
i__11821 = G__11828;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11818);
if(temp__4425__auto__){
var seq__11818__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11818__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11818__$1);
var G__11829 = cljs.core.chunk_rest(seq__11818__$1);
var G__11830 = c__5789__auto__;
var G__11831 = cljs.core.count(c__5789__auto__);
var G__11832 = (0);
seq__11818 = G__11829;
chunk__11819 = G__11830;
count__11820 = G__11831;
i__11821 = G__11832;
continue;
} else {
var i = cljs.core.first(seq__11818__$1);
var e_11833 = (function (){var or__4986__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var G__11823 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11823) : tpl.call(null,G__11823));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_11833);

var G__11834 = cljs.core.next(seq__11818__$1);
var G__11835 = null;
var G__11836 = (0);
var G__11837 = (0);
seq__11818 = G__11834;
chunk__11819 = G__11835;
count__11820 = G__11836;
i__11821 = G__11837;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5889__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5889__auto__)){
var e_11838 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_11838);

var G__11839 = (_ + (1));
_ = G__11839;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11848 = arguments.length;
var i__6045__auto___11849 = (0);
while(true){
if((i__6045__auto___11849 < len__6044__auto___11848)){
args__6051__auto__.push((arguments[i__6045__auto___11849]));

var G__11850 = (i__6045__auto___11849 + (1));
i__6045__auto___11849 = G__11850;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11841){
var vec__11842 = p__11841;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__11842,default$){
return (function (G__11843,G__11845,G__11844){
var or__4986__auto__ = (function (){var and__4974__auto__ = (G__11843.cljs$core$IFn$_invoke$arity$1 ? G__11843.cljs$core$IFn$_invoke$arity$1(G__11844) : G__11843.call(null,G__11844));
if(cljs.core.truth_(and__4974__auto__)){
return G__11844;
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return G__11845;
}
});})(c,vec__11842,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11842,default$){
return (function (){
var G__11846 = c;
var G__11847 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11846,G__11847) : cljs.core.reset_BANG_.call(null,G__11846,G__11847));
});})(_,c,vec__11842,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11840){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11840));
});
