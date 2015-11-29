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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11874_SHARP_,p2__11875_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11874_SHARP_,p2__11875_SHARP_.getAttribute("static-id"),p2__11875_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args11876 = [];
var len__6044__auto___11881 = arguments.length;
var i__6045__auto___11882 = (0);
while(true){
if((i__6045__auto___11882 < len__6044__auto___11881)){
args11876.push((arguments[i__6045__auto___11882]));

var G__11883 = (i__6045__auto___11882 + (1));
i__6045__auto___11882 = G__11883;
continue;
} else {
}
break;
}

var G__11878 = args11876.length;
switch (G__11878) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11876.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__11879_11885 = init;
var G__11880_11886 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11879_11885,G__11880_11886) : f.call(null,G__11879_11885,G__11880_11886));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__11889 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11889,(0),null);
var more = cljs.core.nthnext(vec__11889,(1));
var vec__11890 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("c7ae30c19bbd42dfabd0e493c394766f")].join(''),f2], null)))));
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
var G__11891 = (i + (1));
var G__11892 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__11891;
ret = G__11892;
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
var G__11894 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11894) : hoplon.core.$text.call(null,G__11894));
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
var G__11905 = new$__$1;
var vec__11907 = G__11905;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(0),null);
var xs = cljs.core.nthnext(vec__11907,(1));
var G__11906 = hoplon.core.child_vec(this$);
var vec__11908 = G__11906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11908,(0),null);
var ks = cljs.core.nthnext(vec__11908,(1));
var kids = vec__11908;
var G__11905__$1 = G__11905;
var G__11906__$1 = G__11906;
while(true){
var vec__11909 = G__11905__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11909,(0),null);
var xs__$1 = cljs.core.nthnext(vec__11909,(1));
var vec__11910 = G__11906__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11910,(0),null);
var ks__$1 = cljs.core.nthnext(vec__11910,(1));
var kids__$1 = vec__11910;
if(cljs.core.truth_((function (){var or__4986__auto__ = x__$1;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return k__$1;
}
})())){
var G__11911 = xs__$1;
var G__11912 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
var n_11913 = hoplon.core.__GT_node(k__$1);
hoplon.core.removeChild.call(this$,n_11913);

jQuery(n_11913).remove();
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__11905__$1 = G__11911;
G__11906__$1 = G__11912;
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
var kids_11916 = (function (){var G__11915 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11915) : cljs.core.atom.call(null,G__11915));
})();
this$__$1.hoplonKids = kids_11916;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_11916,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_11919 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_11920 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_11919) : cljs.core.deref.call(null,kids_11919)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_11919,i_11920,x__$1,this$__$1){
return (function (p1__11918_SHARP_,p2__11917_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11919,cljs.core.assoc,i_11920,p2__11917_SHARP_);
});})(kids_11919,i_11920,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_11919,cljs.core.assoc,i_11920,x__$1);
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
return (function (p1__11921_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__11921_SHARP_));
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
return (function (p1__11922_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__11922_SHARP_], 0)));
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
return (function (p1__11923_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__11923_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_11924 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_11925 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__11926 = (function (){var and__4974__auto__ = attr_11925;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_11925) : cljs.core.deref.call(null,attr_11925)),kk_11924);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__11926)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_11925,cljs.core.assoc,kk_11924,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__11927_SHARP_){
return p1__11927_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__11928_SHARP_){
return p1__11928_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__11929_SHARP_){
return p1__11929_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__11930_SHARP_){
return p1__11930_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__11931_SHARP_){
return (p1__11931_SHARP_ instanceof Node);
}):(function (p1__11932_SHARP_){
try{return p1__11932_SHARP_.nodeType;
}catch (e11933){if((e11933 instanceof Error)){
var _ = e11933;
return null;
} else {
throw e11933;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11934_SHARP_){
try{return cljs.core.vector_QMARK_(p1__11934_SHARP_);
}catch (e11935){if((e11935 instanceof Error)){
var _ = e11935;
return null;
} else {
throw e11935;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11936_SHARP_){
try{return cljs.core.seq_QMARK_(p1__11936_SHARP_);
}catch (e11937){if((e11937 instanceof Error)){
var _ = e11937;
return null;
} else {
throw e11937;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args11938 = [];
var len__6044__auto___11942 = arguments.length;
var i__6045__auto___11943 = (0);
while(true){
if((i__6045__auto___11943 < len__6044__auto___11942)){
args11938.push((arguments[i__6045__auto___11943]));

var G__11944 = (i__6045__auto___11943 + (1));
i__6045__auto___11943 = G__11944;
continue;
} else {
}
break;
}

var G__11940 = args11938.length;
switch (G__11940) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11938.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11941){if((e11941 instanceof Error)){
var _ = e11941;
return not_found;
} else {
throw e11941;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args11946 = [];
var len__6044__auto___11949 = arguments.length;
var i__6045__auto___11950 = (0);
while(true){
if((i__6045__auto___11950 < len__6044__auto___11949)){
args11946.push((arguments[i__6045__auto___11950]));

var G__11951 = (i__6045__auto___11950 + (1));
i__6045__auto___11950 = G__11951;
continue;
} else {
}
break;
}

var G__11948 = args11946.length;
switch (G__11948) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11946.length)].join('')));

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
var G__11961 = args;
var vec__11962 = G__11961;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11962,(0),null);
var args__$1 = cljs.core.nthnext(vec__11962,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__11961__$1 = G__11961;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__11963 = G__11961__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11963,(0),null);
var args__$2 = cljs.core.nthnext(vec__11963,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__11964 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__11961__$1,attr__$2,kids__$2,vec__11963,arg__$1,args__$2,attr,kids,G__11961,vec__11962,arg,args__$1){
return (function (p1__11953_SHARP_,p2__11954_SHARP_,p3__11955_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__11953_SHARP_,p2__11954_SHARP_,p3__11955_SHARP_);
});})(attr__$1,kids__$1,G__11961__$1,attr__$2,kids__$2,vec__11963,arg__$1,args__$2,attr,kids,G__11961,vec__11962,arg,args__$1))
,attr__$2,arg__$1);
var G__11965 = kids__$2;
var G__11966 = args__$2;
attr__$1 = G__11964;
kids__$1 = G__11965;
G__11961__$1 = G__11966;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__11967 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__11968 = kids__$2;
var G__11969 = cljs.core.rest(args__$2);
attr__$1 = G__11967;
kids__$1 = G__11968;
G__11961__$1 = G__11969;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__11970 = attr__$2;
var G__11971 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11972 = args__$2;
attr__$1 = G__11970;
kids__$1 = G__11971;
G__11961__$1 = G__11972;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__11973 = attr__$2;
var G__11974 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__11975 = args__$2;
attr__$1 = G__11973;
kids__$1 = G__11974;
G__11961__$1 = G__11975;
continue;
} else {
var G__11976 = attr__$2;
var G__11977 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__11978 = args__$2;
attr__$1 = G__11976;
kids__$1 = G__11977;
G__11961__$1 = G__11978;
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
return (function (p1__11980_SHARP_,p2__11979_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__11979_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__11979_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__11982){
var vec__11989 = p__11982;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(0),null);
var _ = cljs.core.nthnext(vec__11989,(1));
var kids = vec__11989;
var this$__$1 = this$;
var node_11995 = ((function (this$__$1,vec__11989,child_cell,_,kids){
return (function (p1__11981_SHARP_){
if(typeof p1__11981_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__11981_SHARP_) : hoplon.core.$text.call(null,p1__11981_SHARP_));
} else {
if(typeof p1__11981_SHARP_ === 'number'){
var G__11990 = [cljs.core.str(p1__11981_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__11990) : hoplon.core.$text.call(null,G__11990));
} else {
return p1__11981_SHARP_;

}
}
});})(this$__$1,vec__11989,child_cell,_,kids))
;
var seq__11991_11996 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__11992_11997 = null;
var count__11993_11998 = (0);
var i__11994_11999 = (0);
while(true){
if((i__11994_11999 < count__11993_11998)){
var x_12000 = chunk__11992_11997.cljs$core$IIndexed$_nth$arity$2(null,i__11994_11999);
var temp__4425__auto___12001 = node_11995(x_12000);
if(cljs.core.truth_(temp__4425__auto___12001)){
var x_12002__$1 = temp__4425__auto___12001;
hoplon.core.append_child_BANG_(this$__$1,x_12002__$1);
} else {
}

var G__12003 = seq__11991_11996;
var G__12004 = chunk__11992_11997;
var G__12005 = count__11993_11998;
var G__12006 = (i__11994_11999 + (1));
seq__11991_11996 = G__12003;
chunk__11992_11997 = G__12004;
count__11993_11998 = G__12005;
i__11994_11999 = G__12006;
continue;
} else {
var temp__4425__auto___12007 = cljs.core.seq(seq__11991_11996);
if(temp__4425__auto___12007){
var seq__11991_12008__$1 = temp__4425__auto___12007;
if(cljs.core.chunked_seq_QMARK_(seq__11991_12008__$1)){
var c__5789__auto___12009 = cljs.core.chunk_first(seq__11991_12008__$1);
var G__12010 = cljs.core.chunk_rest(seq__11991_12008__$1);
var G__12011 = c__5789__auto___12009;
var G__12012 = cljs.core.count(c__5789__auto___12009);
var G__12013 = (0);
seq__11991_11996 = G__12010;
chunk__11992_11997 = G__12011;
count__11993_11998 = G__12012;
i__11994_11999 = G__12013;
continue;
} else {
var x_12014 = cljs.core.first(seq__11991_12008__$1);
var temp__4425__auto___12015__$1 = node_11995(x_12014);
if(cljs.core.truth_(temp__4425__auto___12015__$1)){
var x_12016__$1 = temp__4425__auto___12015__$1;
hoplon.core.append_child_BANG_(this$__$1,x_12016__$1);
} else {
}

var G__12017 = cljs.core.next(seq__11991_12008__$1);
var G__12018 = null;
var G__12019 = (0);
var G__12020 = (0);
seq__11991_11996 = G__12017;
chunk__11992_11997 = G__12018;
count__11993_11998 = G__12019;
i__11994_11999 = G__12020;
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
var G__12027__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12022 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(1),null);
var G__12023 = this$;
hoplon.core.add_attributes_BANG_(G__12023,attr);

hoplon.core.add_children_BANG_(G__12023,kids);

return G__12023;
};
var G__12027 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12028__i = 0, G__12028__a = new Array(arguments.length -  1);
while (G__12028__i < G__12028__a.length) {G__12028__a[G__12028__i] = arguments[G__12028__i + 1]; ++G__12028__i;}
  args = new cljs.core.IndexedSeq(G__12028__a,0);
} 
return G__12027__delegate.call(this,self__,args);};
G__12027.cljs$lang$maxFixedArity = 1;
G__12027.cljs$lang$applyTo = (function (arglist__12029){
var self__ = cljs.core.first(arglist__12029);
var args = cljs.core.rest(arglist__12029);
return G__12027__delegate(self__,args);
});
G__12027.cljs$core$IFn$_invoke$arity$variadic = G__12027__delegate;
return G__12027;
})()
;

Element.prototype.apply = (function (self__,args12021){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12021)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12030__delegate = function (args){
var this$ = this;
var vec__12024 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12024,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12024,(1),null);
var G__12025 = this$;
hoplon.core.add_attributes_BANG_(G__12025,attr);

hoplon.core.add_children_BANG_(G__12025,kids);

return G__12025;
};
var G__12030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12031__i = 0, G__12031__a = new Array(arguments.length -  0);
while (G__12031__i < G__12031__a.length) {G__12031__a[G__12031__i] = arguments[G__12031__i + 0]; ++G__12031__i;}
  args = new cljs.core.IndexedSeq(G__12031__a,0);
} 
return G__12030__delegate.call(this,args);};
G__12030.cljs$lang$maxFixedArity = 0;
G__12030.cljs$lang$applyTo = (function (arglist__12032){
var args = cljs.core.seq(arglist__12032);
return G__12030__delegate(args);
});
G__12030.cljs$core$IFn$_invoke$arity$variadic = G__12030__delegate;
return G__12030;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_12033__$1 = cljs.core.name(k);
var e_12034 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_12034.removeAttr(k_12033__$1);
} else {
e_12034.attr(k_12033__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12033__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e12026){if((e12026 instanceof Error)){
var _ = e12026;
return null;
} else {
throw e12026;

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
var G__12041__delegate = function (args){
var vec__12038 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__12039 = elem.hoplonKids;
var G__12040 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12039,G__12040) : cljs.core.reset_BANG_.call(null,G__12039,G__12040));
} else {
return null;
}
};
var G__12041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12042__i = 0, G__12042__a = new Array(arguments.length -  0);
while (G__12042__i < G__12042__a.length) {G__12042__a[G__12042__i] = arguments[G__12042__i + 0]; ++G__12042__i;}
  args = new cljs.core.IndexedSeq(G__12042__a,0);
} 
return G__12041__delegate.call(this,args);};
G__12041.cljs$lang$maxFixedArity = 0;
G__12041.cljs$lang$applyTo = (function (arglist__12043){
var args = cljs.core.seq(arglist__12043);
return G__12041__delegate(args);
});
G__12041.cljs$core$IFn$_invoke$arity$variadic = G__12041__delegate;
return G__12041;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__12044__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__12044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12045__i = 0, G__12045__a = new Array(arguments.length -  0);
while (G__12045__i < G__12045__a.length) {G__12045__a[G__12045__i] = arguments[G__12045__i + 0]; ++G__12045__i;}
  args = new cljs.core.IndexedSeq(G__12045__a,0);
} 
return G__12044__delegate.call(this,args);};
G__12044.cljs$lang$maxFixedArity = 0;
G__12044.cljs$lang$applyTo = (function (arglist__12046){
var args = cljs.core.seq(arglist__12046);
return G__12044__delegate(args);
});
G__12044.cljs$core$IFn$_invoke$arity$variadic = G__12044__delegate;
return G__12044;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__6051__auto__ = [];
var len__6044__auto___12049 = arguments.length;
var i__6045__auto___12050 = (0);
while(true){
if((i__6045__auto___12050 < len__6044__auto___12049)){
args__6051__auto__.push((arguments[i__6045__auto___12050]));

var G__12051 = (i__6045__auto___12050 + (1));
i__6045__auto___12050 = G__12051;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__12048 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq12047){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12047));
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
hoplon.core.$text = (function hoplon$core$$text(p1__12052_SHARP_){
return document.createTextNode(p1__12052_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__12053_SHARP_){
return document.createComment(p1__12053_SHARP_);
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
return jQuery("body").on("submit",(function (p1__12054_SHARP_){
var e = (function (){var G__12055 = p1__12054_SHARP_.target;
return jQuery(G__12055);
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
return p1__12054_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args12056 = [];
var len__6044__auto___12059 = arguments.length;
var i__6045__auto___12060 = (0);
while(true){
if((i__6045__auto___12060 < len__6044__auto___12059)){
args12056.push((arguments[i__6045__auto___12060]));

var G__12061 = (i__6045__auto___12060 + (1));
i__6045__auto___12060 = G__12061;
continue;
} else {
}
break;
}

var G__12058 = args12056.length;
switch (G__12058) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12056.length)].join('')));

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
var args12063 = [];
var len__6044__auto___12066 = arguments.length;
var i__6045__auto___12067 = (0);
while(true){
if((i__6045__auto___12067 < len__6044__auto___12066)){
args12063.push((arguments[i__6045__auto___12067]));

var G__12068 = (i__6045__auto___12067 + (1));
i__6045__auto___12067 = G__12068;
continue;
} else {
}
break;
}

var G__12065 = args12063.length;
switch (G__12065) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12063.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__5899__auto__ = (function (){var G__12070 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12070) : cljs.core.atom.call(null,G__12070));
})();
var prefer_table__5900__auto__ = (function (){var G__12071 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12071) : cljs.core.atom.call(null,G__12071));
})();
var method_cache__5901__auto__ = (function (){var G__12072 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12072) : cljs.core.atom.call(null,G__12072));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__12073 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12073) : cljs.core.atom.call(null,G__12073));
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
var G__12074 = elem;
var G__12075 = cljs.core.cst$kw$attr;
var G__12076 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12074,G__12075,G__12076) : hoplon.core.do_BANG_.call(null,G__12074,G__12075,G__12076));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__12077__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__12077 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12078__i = 0, G__12078__a = new Array(arguments.length -  2);
while (G__12078__i < G__12078__a.length) {G__12078__a[G__12078__i] = arguments[G__12078__i + 2]; ++G__12078__i;}
  args = new cljs.core.IndexedSeq(G__12078__a,0);
} 
return G__12077__delegate.call(this,elem,_,args);};
G__12077.cljs$lang$maxFixedArity = 2;
G__12077.cljs$lang$applyTo = (function (arglist__12079){
var elem = cljs.core.first(arglist__12079);
arglist__12079 = cljs.core.next(arglist__12079);
var _ = cljs.core.first(arglist__12079);
var args = cljs.core.rest(arglist__12079);
return G__12077__delegate(elem,_,args);
});
G__12077.cljs$core$IFn$_invoke$arity$variadic = G__12077__delegate;
return G__12077;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12080 = cljs.core.seq(kvs);
var chunk__12081 = null;
var count__12082 = (0);
var i__12083 = (0);
while(true){
if((i__12083 < count__12082)){
var vec__12084 = chunk__12081.cljs$core$IIndexed$_nth$arity$2(null,i__12083);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084,(1),null);
var k_12086__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12086__$1);
} else {
e.attr(k_12086__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12086__$1:v));
}

var G__12087 = seq__12080;
var G__12088 = chunk__12081;
var G__12089 = count__12082;
var G__12090 = (i__12083 + (1));
seq__12080 = G__12087;
chunk__12081 = G__12088;
count__12082 = G__12089;
i__12083 = G__12090;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12080);
if(temp__4425__auto__){
var seq__12080__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12080__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__12080__$1);
var G__12091 = cljs.core.chunk_rest(seq__12080__$1);
var G__12092 = c__5789__auto__;
var G__12093 = cljs.core.count(c__5789__auto__);
var G__12094 = (0);
seq__12080 = G__12091;
chunk__12081 = G__12092;
count__12082 = G__12093;
i__12083 = G__12094;
continue;
} else {
var vec__12085 = cljs.core.first(seq__12080__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12085,(1),null);
var k_12095__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12095__$1);
} else {
e.attr(k_12095__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12095__$1:v));
}

var G__12096 = cljs.core.next(seq__12080__$1);
var G__12097 = null;
var G__12098 = (0);
var G__12099 = (0);
seq__12080 = G__12096;
chunk__12081 = G__12097;
count__12082 = G__12098;
i__12083 = G__12099;
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
return (function (p1__12100_SHARP_){
return cljs.core.zipmap(p1__12100_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__12101 = cljs.core.seq(clmap);
var chunk__12102 = null;
var count__12103 = (0);
var i__12104 = (0);
while(true){
if((i__12104 < count__12103)){
var vec__12105 = chunk__12102.cljs$core$IIndexed$_nth$arity$2(null,i__12104);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12107 = seq__12101;
var G__12108 = chunk__12102;
var G__12109 = count__12103;
var G__12110 = (i__12104 + (1));
seq__12101 = G__12107;
chunk__12102 = G__12108;
count__12103 = G__12109;
i__12104 = G__12110;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12101);
if(temp__4425__auto__){
var seq__12101__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12101__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__12101__$1);
var G__12111 = cljs.core.chunk_rest(seq__12101__$1);
var G__12112 = c__5789__auto__;
var G__12113 = cljs.core.count(c__5789__auto__);
var G__12114 = (0);
seq__12101 = G__12111;
chunk__12102 = G__12112;
count__12103 = G__12113;
i__12104 = G__12114;
continue;
} else {
var vec__12106 = cljs.core.first(seq__12101__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12115 = cljs.core.next(seq__12101__$1);
var G__12116 = null;
var G__12117 = (0);
var G__12118 = (0);
seq__12101 = G__12115;
chunk__12102 = G__12116;
count__12103 = G__12117;
i__12104 = G__12118;
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
var seq__12119 = cljs.core.seq(kvs);
var chunk__12120 = null;
var count__12121 = (0);
var i__12122 = (0);
while(true){
if((i__12122 < count__12121)){
var vec__12123 = chunk__12120.cljs$core$IIndexed$_nth$arity$2(null,i__12122);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12123,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12125 = seq__12119;
var G__12126 = chunk__12120;
var G__12127 = count__12121;
var G__12128 = (i__12122 + (1));
seq__12119 = G__12125;
chunk__12120 = G__12126;
count__12121 = G__12127;
i__12122 = G__12128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12119);
if(temp__4425__auto__){
var seq__12119__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12119__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__12119__$1);
var G__12129 = cljs.core.chunk_rest(seq__12119__$1);
var G__12130 = c__5789__auto__;
var G__12131 = cljs.core.count(c__5789__auto__);
var G__12132 = (0);
seq__12119 = G__12129;
chunk__12120 = G__12130;
count__12121 = G__12131;
i__12122 = G__12132;
continue;
} else {
var vec__12124 = cljs.core.first(seq__12119__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12124,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12133 = cljs.core.next(seq__12119__$1);
var G__12134 = null;
var G__12135 = (0);
var G__12136 = (0);
seq__12119 = G__12133;
chunk__12120 = G__12134;
count__12121 = G__12135;
i__12122 = G__12136;
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
var G__12137 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__12138 = (0);
return setTimeout(G__12137,G__12138);
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
hoplon.core.on_BANG_ = (function (){var method_table__5899__auto__ = (function (){var G__12139 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12139) : cljs.core.atom.call(null,G__12139));
})();
var prefer_table__5900__auto__ = (function (){var G__12140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12140) : cljs.core.atom.call(null,G__12140));
})();
var method_cache__5901__auto__ = (function (){var G__12141 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12141) : cljs.core.atom.call(null,G__12141));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__12142 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12142) : cljs.core.atom.call(null,G__12142));
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
return (function (){var G__12143 = this$__$1.target;
return jQuery(G__12143);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__12158 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12158) : cljs.core.atom.call(null,G__12158));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__12159,G__12160){
return (G__12159.cljs$core$IFn$_invoke$arity$1 ? G__12159.cljs$core$IFn$_invoke$arity$1(G__12160) : G__12159.call(null,G__12160));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__12144_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__12162,G__12163,G__12161){
return (G__12161.cljs$core$IFn$_invoke$arity$2 ? G__12161.cljs$core$IFn$_invoke$arity$2(G__12162,G__12163) : G__12161.call(null,G__12162,G__12163));
});})(on_deck,items_seq))
).call(null,items_seq,p1__12144_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__12145_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__12145_SHARP_) : cljs.core.deref.call(null,p1__12145_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__12145_SHARP_,cljs.core.rest);

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
var seq__12164 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__12165 = null;
var count__12166 = (0);
var i__12167 = (0);
while(true){
if((i__12167 < count__12166)){
var i = chunk__12165.cljs$core$IIndexed$_nth$arity$2(null,i__12167);
var e_12170 = (function (){var or__4986__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var G__12168 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12168) : tpl.call(null,G__12168));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12170);

var G__12171 = seq__12164;
var G__12172 = chunk__12165;
var G__12173 = count__12166;
var G__12174 = (i__12167 + (1));
seq__12164 = G__12171;
chunk__12165 = G__12172;
count__12166 = G__12173;
i__12167 = G__12174;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12164);
if(temp__4425__auto__){
var seq__12164__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12164__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__12164__$1);
var G__12175 = cljs.core.chunk_rest(seq__12164__$1);
var G__12176 = c__5789__auto__;
var G__12177 = cljs.core.count(c__5789__auto__);
var G__12178 = (0);
seq__12164 = G__12175;
chunk__12165 = G__12176;
count__12166 = G__12177;
i__12167 = G__12178;
continue;
} else {
var i = cljs.core.first(seq__12164__$1);
var e_12179 = (function (){var or__4986__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var G__12169 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12169) : tpl.call(null,G__12169));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12179);

var G__12180 = cljs.core.next(seq__12164__$1);
var G__12181 = null;
var G__12182 = (0);
var G__12183 = (0);
seq__12164 = G__12180;
chunk__12165 = G__12181;
count__12166 = G__12182;
i__12167 = G__12183;
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
var e_12184 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_12184);

var G__12185 = (_ + (1));
_ = G__12185;
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
var len__6044__auto___12194 = arguments.length;
var i__6045__auto___12195 = (0);
while(true){
if((i__6045__auto___12195 < len__6044__auto___12194)){
args__6051__auto__.push((arguments[i__6045__auto___12195]));

var G__12196 = (i__6045__auto___12195 + (1));
i__6045__auto___12195 = G__12196;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__12187){
var vec__12188 = p__12187;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12188,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__12188,default$){
return (function (G__12189,G__12191,G__12190){
var or__4986__auto__ = (function (){var and__4974__auto__ = (G__12189.cljs$core$IFn$_invoke$arity$1 ? G__12189.cljs$core$IFn$_invoke$arity$1(G__12190) : G__12189.call(null,G__12190));
if(cljs.core.truth_(and__4974__auto__)){
return G__12190;
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return G__12191;
}
});})(c,vec__12188,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__12188,default$){
return (function (){
var G__12192 = c;
var G__12193 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12192,G__12193) : cljs.core.reset_BANG_.call(null,G__12192,G__12193));
});})(_,c,vec__12188,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq12186){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12186));
});
