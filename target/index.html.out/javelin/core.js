// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
javelin.core.Cell;

javelin.core.cell_QMARK_;

javelin.core.cell;

javelin.core.input_QMARK_;

javelin.core.lens_QMARK_;
javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__11023 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__11021_SHARP_,p2__11022_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11021_SHARP_,p2__11022_SHARP_,p2__11022_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__11023;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e11025){if((e11025 instanceof Error)){
var _ = e11025;
return null;
} else {
throw e11025;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__11028 = c;
javelin.core.add_sync_BANG_(G__11028);

return G__11028;
} else {
var G__11029 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__11029));

return G__11029;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11038 = arguments.length;
var i__6045__auto___11039 = (0);
while(true){
if((i__6045__auto___11039 < len__6044__auto___11038)){
args__6051__auto__.push((arguments[i__6045__auto___11039]));

var G__11040 = (i__6045__auto___11039 + (1));
i__6045__auto___11039 = G__11040;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11032){
var vec__11033 = p__11032;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11033,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11034 = cljs.core.seq(srcs);
var chunk__11035 = null;
var count__11036 = (0);
var i__11037 = (0);
while(true){
if((i__11037 < count__11036)){
var src = chunk__11035.cljs$core$IIndexed$_nth$arity$2(null,i__11037);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11041 = seq__11034;
var G__11042 = chunk__11035;
var G__11043 = count__11036;
var G__11044 = (i__11037 + (1));
seq__11034 = G__11041;
chunk__11035 = G__11042;
count__11036 = G__11043;
i__11037 = G__11044;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11034);
if(temp__4425__auto__){
var seq__11034__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11034__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11034__$1);
var G__11045 = cljs.core.chunk_rest(seq__11034__$1);
var G__11046 = c__5789__auto__;
var G__11047 = cljs.core.count(c__5789__auto__);
var G__11048 = (0);
seq__11034 = G__11045;
chunk__11035 = G__11046;
count__11036 = G__11047;
i__11037 = G__11048;
continue;
} else {
var src = cljs.core.first(seq__11034__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11049 = cljs.core.next(seq__11034__$1);
var G__11050 = null;
var G__11051 = (0);
var G__11052 = (0);
seq__11034 = G__11049;
chunk__11035 = G__11050;
count__11036 = G__11051;
i__11037 = G__11052;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq11030){
var G__11031 = cljs.core.first(seq11030);
var seq11030__$1 = cljs.core.next(seq11030);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11031,seq11030__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11071 = arguments.length;
var i__6045__auto___11072 = (0);
while(true){
if((i__6045__auto___11072 < len__6044__auto___11071)){
args__6051__auto__.push((arguments[i__6045__auto___11072]));

var G__11073 = (i__6045__auto___11072 + (1));
i__6045__auto___11072 = G__11073;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11057){
var vec__11058 = p__11057;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11058,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11058,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__11059_11074 = cljs.core.seq(this$.sources);
var chunk__11060_11075 = null;
var count__11061_11076 = (0);
var i__11062_11077 = (0);
while(true){
if((i__11062_11077 < count__11061_11076)){
var source_11078 = chunk__11060_11075.cljs$core$IIndexed$_nth$arity$2(null,i__11062_11077);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11078) : javelin.core.cell_QMARK_.call(null,source_11078)))){
source_11078.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11078.sinks,this$);

if((source_11078.rank > this$.rank)){
var seq__11063_11079 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11059_11074,chunk__11060_11075,count__11061_11076,i__11062_11077,source_11078,vec__11058,f,sources){
return (function (p1__11053_SHARP_){
return p1__11053_SHARP_.sinks;
});})(seq__11059_11074,chunk__11060_11075,count__11061_11076,i__11062_11077,source_11078,vec__11058,f,sources))
,source_11078));
var chunk__11064_11080 = null;
var count__11065_11081 = (0);
var i__11066_11082 = (0);
while(true){
if((i__11066_11082 < count__11065_11081)){
var dep_11083 = chunk__11064_11080.cljs$core$IIndexed$_nth$arity$2(null,i__11066_11082);
dep_11083.rank = javelin.core.next_rank();

var G__11084 = seq__11063_11079;
var G__11085 = chunk__11064_11080;
var G__11086 = count__11065_11081;
var G__11087 = (i__11066_11082 + (1));
seq__11063_11079 = G__11084;
chunk__11064_11080 = G__11085;
count__11065_11081 = G__11086;
i__11066_11082 = G__11087;
continue;
} else {
var temp__4425__auto___11088 = cljs.core.seq(seq__11063_11079);
if(temp__4425__auto___11088){
var seq__11063_11089__$1 = temp__4425__auto___11088;
if(cljs.core.chunked_seq_QMARK_(seq__11063_11089__$1)){
var c__5789__auto___11090 = cljs.core.chunk_first(seq__11063_11089__$1);
var G__11091 = cljs.core.chunk_rest(seq__11063_11089__$1);
var G__11092 = c__5789__auto___11090;
var G__11093 = cljs.core.count(c__5789__auto___11090);
var G__11094 = (0);
seq__11063_11079 = G__11091;
chunk__11064_11080 = G__11092;
count__11065_11081 = G__11093;
i__11066_11082 = G__11094;
continue;
} else {
var dep_11095 = cljs.core.first(seq__11063_11089__$1);
dep_11095.rank = javelin.core.next_rank();

var G__11096 = cljs.core.next(seq__11063_11089__$1);
var G__11097 = null;
var G__11098 = (0);
var G__11099 = (0);
seq__11063_11079 = G__11096;
chunk__11064_11080 = G__11097;
count__11065_11081 = G__11098;
i__11066_11082 = G__11099;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__11100 = seq__11059_11074;
var G__11101 = chunk__11060_11075;
var G__11102 = count__11061_11076;
var G__11103 = (i__11062_11077 + (1));
seq__11059_11074 = G__11100;
chunk__11060_11075 = G__11101;
count__11061_11076 = G__11102;
i__11062_11077 = G__11103;
continue;
} else {
var temp__4425__auto___11104 = cljs.core.seq(seq__11059_11074);
if(temp__4425__auto___11104){
var seq__11059_11105__$1 = temp__4425__auto___11104;
if(cljs.core.chunked_seq_QMARK_(seq__11059_11105__$1)){
var c__5789__auto___11106 = cljs.core.chunk_first(seq__11059_11105__$1);
var G__11107 = cljs.core.chunk_rest(seq__11059_11105__$1);
var G__11108 = c__5789__auto___11106;
var G__11109 = cljs.core.count(c__5789__auto___11106);
var G__11110 = (0);
seq__11059_11074 = G__11107;
chunk__11060_11075 = G__11108;
count__11061_11076 = G__11109;
i__11062_11077 = G__11110;
continue;
} else {
var source_11111 = cljs.core.first(seq__11059_11105__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11111) : javelin.core.cell_QMARK_.call(null,source_11111)))){
source_11111.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11111.sinks,this$);

if((source_11111.rank > this$.rank)){
var seq__11067_11112 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11059_11074,chunk__11060_11075,count__11061_11076,i__11062_11077,source_11111,seq__11059_11105__$1,temp__4425__auto___11104,vec__11058,f,sources){
return (function (p1__11053_SHARP_){
return p1__11053_SHARP_.sinks;
});})(seq__11059_11074,chunk__11060_11075,count__11061_11076,i__11062_11077,source_11111,seq__11059_11105__$1,temp__4425__auto___11104,vec__11058,f,sources))
,source_11111));
var chunk__11068_11113 = null;
var count__11069_11114 = (0);
var i__11070_11115 = (0);
while(true){
if((i__11070_11115 < count__11069_11114)){
var dep_11116 = chunk__11068_11113.cljs$core$IIndexed$_nth$arity$2(null,i__11070_11115);
dep_11116.rank = javelin.core.next_rank();

var G__11117 = seq__11067_11112;
var G__11118 = chunk__11068_11113;
var G__11119 = count__11069_11114;
var G__11120 = (i__11070_11115 + (1));
seq__11067_11112 = G__11117;
chunk__11068_11113 = G__11118;
count__11069_11114 = G__11119;
i__11070_11115 = G__11120;
continue;
} else {
var temp__4425__auto___11121__$1 = cljs.core.seq(seq__11067_11112);
if(temp__4425__auto___11121__$1){
var seq__11067_11122__$1 = temp__4425__auto___11121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11067_11122__$1)){
var c__5789__auto___11123 = cljs.core.chunk_first(seq__11067_11122__$1);
var G__11124 = cljs.core.chunk_rest(seq__11067_11122__$1);
var G__11125 = c__5789__auto___11123;
var G__11126 = cljs.core.count(c__5789__auto___11123);
var G__11127 = (0);
seq__11067_11112 = G__11124;
chunk__11068_11113 = G__11125;
count__11069_11114 = G__11126;
i__11070_11115 = G__11127;
continue;
} else {
var dep_11128 = cljs.core.first(seq__11067_11122__$1);
dep_11128.rank = javelin.core.next_rank();

var G__11129 = cljs.core.next(seq__11067_11122__$1);
var G__11130 = null;
var G__11131 = (0);
var G__11132 = (0);
seq__11067_11112 = G__11129;
chunk__11068_11113 = G__11130;
count__11069_11114 = G__11131;
i__11070_11115 = G__11132;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__11133 = cljs.core.next(seq__11059_11105__$1);
var G__11134 = null;
var G__11135 = (0);
var G__11136 = (0);
seq__11059_11074 = G__11133;
chunk__11060_11075 = G__11134;
count__11061_11076 = G__11135;
i__11062_11077 = G__11136;
continue;
}
} else {
}
}
break;
}

var compute_11137 = ((function (vec__11058,f,sources){
return (function (p1__11054_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__11054_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__11054_SHARP_)));
});})(vec__11058,f,sources))
;
this$.thunk = ((function (compute_11137,vec__11058,f,sources){
return (function (){
return this$.state = compute_11137(this$.sources);
});})(compute_11137,vec__11058,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq11055){
var G__11056 = cljs.core.first(seq11055);
var seq11055__$1 = cljs.core.next(seq11055);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11056,seq11055__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__11139 = this$__$1;
var G__11140 = (function (){var G__11141 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11141) : f.call(null,G__11141));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11139,G__11140) : cljs.core.reset_BANG_.call(null,G__11139,G__11140));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__11144 = this$__$1;
var G__11145 = (function (){var G__11146 = this$__$1.state;
var G__11147 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11146,G__11147) : f.call(null,G__11146,G__11147));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11144,G__11145) : cljs.core.reset_BANG_.call(null,G__11144,G__11145));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__11151 = this$__$1;
var G__11152 = (function (){var G__11153 = this$__$1.state;
var G__11154 = a;
var G__11155 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11153,G__11154,G__11155) : f.call(null,G__11153,G__11154,G__11155));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11151,G__11152) : cljs.core.reset_BANG_.call(null,G__11151,G__11152));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__11156 = this$__$1;
var G__11157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11156,G__11157) : cljs.core.reset_BANG_.call(null,G__11156,G__11157));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__11158 = cljs.core.seq(self__.watches);
var chunk__11159 = null;
var count__11160 = (0);
var i__11161 = (0);
while(true){
if((i__11161 < count__11160)){
var vec__11162 = chunk__11159.cljs$core$IIndexed$_nth$arity$2(null,i__11161);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__11164 = seq__11158;
var G__11165 = chunk__11159;
var G__11166 = count__11160;
var G__11167 = (i__11161 + (1));
seq__11158 = G__11164;
chunk__11159 = G__11165;
count__11160 = G__11166;
i__11161 = G__11167;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11158);
if(temp__4425__auto__){
var seq__11158__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11158__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11158__$1);
var G__11168 = cljs.core.chunk_rest(seq__11158__$1);
var G__11169 = c__5789__auto__;
var G__11170 = cljs.core.count(c__5789__auto__);
var G__11171 = (0);
seq__11158 = G__11168;
chunk__11159 = G__11169;
count__11160 = G__11170;
i__11161 = G__11171;
continue;
} else {
var vec__11163 = cljs.core.first(seq__11158__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11163,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11163,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__11172 = cljs.core.next(seq__11158__$1);
var G__11173 = null;
var G__11174 = (0);
var G__11175 = (0);
seq__11158 = G__11172;
chunk__11159 = G__11173;
count__11160 = G__11174;
i__11161 = G__11175;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__4974__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__4974__auto__)){
return c.thunk;
} else {
return and__4974__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4974__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__4974__auto__)){
return c.update;
} else {
return and__4974__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4974__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__4974__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__11176__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__11176 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__11177__i = 0, G__11177__a = new Array(arguments.length -  0);
while (G__11177__i < G__11177__a.length) {G__11177__a[G__11177__i] = arguments[G__11177__i + 0]; ++G__11177__i;}
  sources = new cljs.core.IndexedSeq(G__11177__a,0);
} 
return G__11176__delegate.call(this,sources);};
G__11176.cljs$lang$maxFixedArity = 0;
G__11176.cljs$lang$applyTo = (function (arglist__11178){
var sources = cljs.core.seq(arglist__11178);
return G__11176__delegate(sources);
});
G__11176.cljs$core$IFn$_invoke$arity$variadic = G__11176__delegate;
return G__11176;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args11179 = [];
var len__6044__auto___11187 = arguments.length;
var i__6045__auto___11188 = (0);
while(true){
if((i__6045__auto___11188 < len__6044__auto___11187)){
args11179.push((arguments[i__6045__auto___11188]));

var G__11189 = (i__6045__auto___11188 + (1));
i__6045__auto___11188 = G__11189;
continue;
} else {
}
break;
}

var G__11183 = args11179.length;
switch (G__11183) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args11179.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6063__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__11184){
var map__11185 = p__11184;
var map__11185__$1 = ((((!((map__11185 == null)))?((((map__11185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11185):map__11185);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11185__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq11180){
var G__11181 = cljs.core.first(seq11180);
var seq11180__$1 = cljs.core.next(seq11180);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__11181,seq11180__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__11191_SHARP_){
var _STAR_tx_STAR_11195 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__11196 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11196) : cljs.core.atom.call(null,G__11196));
})();

try{return (p1__11191_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__11191_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__11191_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11195;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_11197 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11197;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11205 = arguments.length;
var i__6045__auto___11206 = (0);
while(true){
if((i__6045__auto___11206 < len__6044__auto___11205)){
args__6051__auto__.push((arguments[i__6045__auto___11206]));

var G__11207 = (i__6045__auto___11206 + (1));
i__6045__auto___11206 = G__11207;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__11204 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11204) : cljs.core.atom.call(null,G__11204));
})();
var tag_neq = ((function (olds){
return (function (p1__11198_SHARP_,p2__11199_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__11198_SHARP_,p2__11199_SHARP_),p2__11199_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__11201_SHARP_,p2__11200_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__11201_SHARP_,p2__11200_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__11208__delegate = function (rest__11202_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__11202_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__11202_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__11202_SHARP_));

return news;
};
var G__11208 = function (var_args){
var rest__11202_SHARP_ = null;
if (arguments.length > 0) {
var G__11209__i = 0, G__11209__a = new Array(arguments.length -  0);
while (G__11209__i < G__11209__a.length) {G__11209__a[G__11209__i] = arguments[G__11209__i + 0]; ++G__11209__i;}
  rest__11202_SHARP_ = new cljs.core.IndexedSeq(G__11209__a,0);
} 
return G__11208__delegate.call(this,rest__11202_SHARP_);};
G__11208.cljs$lang$maxFixedArity = 0;
G__11208.cljs$lang$applyTo = (function (arglist__11210){
var rest__11202_SHARP_ = cljs.core.seq(arglist__11210);
return G__11208__delegate(rest__11202_SHARP_);
});
G__11208.cljs$core$IFn$_invoke$arity$variadic = G__11208__delegate;
return G__11208;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq11203){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11203));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__11211_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__11211_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__11212_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__11212_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__11219_11225 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__11220_11226 = null;
var count__11221_11227 = (0);
var i__11222_11228 = (0);
while(true){
if((i__11222_11228 < count__11221_11227)){
var i_11229 = chunk__11220_11226.cljs$core$IIndexed$_nth$arity$2(null,i__11222_11228);
var G__11223_11230 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_11229) : ith_item__$1.call(null,i_11229));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11223_11230) : f__$1.call(null,G__11223_11230));

var G__11231 = seq__11219_11225;
var G__11232 = chunk__11220_11226;
var G__11233 = count__11221_11227;
var G__11234 = (i__11222_11228 + (1));
seq__11219_11225 = G__11231;
chunk__11220_11226 = G__11232;
count__11221_11227 = G__11233;
i__11222_11228 = G__11234;
continue;
} else {
var temp__4425__auto___11235 = cljs.core.seq(seq__11219_11225);
if(temp__4425__auto___11235){
var seq__11219_11236__$1 = temp__4425__auto___11235;
if(cljs.core.chunked_seq_QMARK_(seq__11219_11236__$1)){
var c__5789__auto___11237 = cljs.core.chunk_first(seq__11219_11236__$1);
var G__11238 = cljs.core.chunk_rest(seq__11219_11236__$1);
var G__11239 = c__5789__auto___11237;
var G__11240 = cljs.core.count(c__5789__auto___11237);
var G__11241 = (0);
seq__11219_11225 = G__11238;
chunk__11220_11226 = G__11239;
count__11221_11227 = G__11240;
i__11222_11228 = G__11241;
continue;
} else {
var i_11242 = cljs.core.first(seq__11219_11236__$1);
var G__11224_11243 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_11242) : ith_item__$1.call(null,i_11242));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11224_11243) : f__$1.call(null,G__11224_11243));

var G__11244 = cljs.core.next(seq__11219_11236__$1);
var G__11245 = null;
var G__11246 = (0);
var G__11247 = (0);
seq__11219_11225 = G__11244;
chunk__11220_11226 = G__11245;
count__11221_11227 = G__11246;
i__11222_11228 = G__11247;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
