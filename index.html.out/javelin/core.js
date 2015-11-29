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

var G__11422 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__11420_SHARP_,p2__11421_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11420_SHARP_,p2__11421_SHARP_,p2__11421_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__11422;
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
}catch (e11424){if((e11424 instanceof Error)){
var _ = e11424;
return null;
} else {
throw e11424;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__11427 = c;
javelin.core.add_sync_BANG_(G__11427);

return G__11427;
} else {
var G__11428 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__11428));

return G__11428;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11437 = arguments.length;
var i__6045__auto___11438 = (0);
while(true){
if((i__6045__auto___11438 < len__6044__auto___11437)){
args__6051__auto__.push((arguments[i__6045__auto___11438]));

var G__11439 = (i__6045__auto___11438 + (1));
i__6045__auto___11438 = G__11439;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11431){
var vec__11432 = p__11431;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11432,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11433 = cljs.core.seq(srcs);
var chunk__11434 = null;
var count__11435 = (0);
var i__11436 = (0);
while(true){
if((i__11436 < count__11435)){
var src = chunk__11434.cljs$core$IIndexed$_nth$arity$2(null,i__11436);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11440 = seq__11433;
var G__11441 = chunk__11434;
var G__11442 = count__11435;
var G__11443 = (i__11436 + (1));
seq__11433 = G__11440;
chunk__11434 = G__11441;
count__11435 = G__11442;
i__11436 = G__11443;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11433);
if(temp__4425__auto__){
var seq__11433__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11433__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11433__$1);
var G__11444 = cljs.core.chunk_rest(seq__11433__$1);
var G__11445 = c__5789__auto__;
var G__11446 = cljs.core.count(c__5789__auto__);
var G__11447 = (0);
seq__11433 = G__11444;
chunk__11434 = G__11445;
count__11435 = G__11446;
i__11436 = G__11447;
continue;
} else {
var src = cljs.core.first(seq__11433__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11448 = cljs.core.next(seq__11433__$1);
var G__11449 = null;
var G__11450 = (0);
var G__11451 = (0);
seq__11433 = G__11448;
chunk__11434 = G__11449;
count__11435 = G__11450;
i__11436 = G__11451;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq11429){
var G__11430 = cljs.core.first(seq11429);
var seq11429__$1 = cljs.core.next(seq11429);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11430,seq11429__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11470 = arguments.length;
var i__6045__auto___11471 = (0);
while(true){
if((i__6045__auto___11471 < len__6044__auto___11470)){
args__6051__auto__.push((arguments[i__6045__auto___11471]));

var G__11472 = (i__6045__auto___11471 + (1));
i__6045__auto___11471 = G__11472;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11456){
var vec__11457 = p__11456;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11457,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11457,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__11458_11473 = cljs.core.seq(this$.sources);
var chunk__11459_11474 = null;
var count__11460_11475 = (0);
var i__11461_11476 = (0);
while(true){
if((i__11461_11476 < count__11460_11475)){
var source_11477 = chunk__11459_11474.cljs$core$IIndexed$_nth$arity$2(null,i__11461_11476);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11477) : javelin.core.cell_QMARK_.call(null,source_11477)))){
source_11477.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11477.sinks,this$);

if((source_11477.rank > this$.rank)){
var seq__11462_11478 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11458_11473,chunk__11459_11474,count__11460_11475,i__11461_11476,source_11477,vec__11457,f,sources){
return (function (p1__11452_SHARP_){
return p1__11452_SHARP_.sinks;
});})(seq__11458_11473,chunk__11459_11474,count__11460_11475,i__11461_11476,source_11477,vec__11457,f,sources))
,source_11477));
var chunk__11463_11479 = null;
var count__11464_11480 = (0);
var i__11465_11481 = (0);
while(true){
if((i__11465_11481 < count__11464_11480)){
var dep_11482 = chunk__11463_11479.cljs$core$IIndexed$_nth$arity$2(null,i__11465_11481);
dep_11482.rank = javelin.core.next_rank();

var G__11483 = seq__11462_11478;
var G__11484 = chunk__11463_11479;
var G__11485 = count__11464_11480;
var G__11486 = (i__11465_11481 + (1));
seq__11462_11478 = G__11483;
chunk__11463_11479 = G__11484;
count__11464_11480 = G__11485;
i__11465_11481 = G__11486;
continue;
} else {
var temp__4425__auto___11487 = cljs.core.seq(seq__11462_11478);
if(temp__4425__auto___11487){
var seq__11462_11488__$1 = temp__4425__auto___11487;
if(cljs.core.chunked_seq_QMARK_(seq__11462_11488__$1)){
var c__5789__auto___11489 = cljs.core.chunk_first(seq__11462_11488__$1);
var G__11490 = cljs.core.chunk_rest(seq__11462_11488__$1);
var G__11491 = c__5789__auto___11489;
var G__11492 = cljs.core.count(c__5789__auto___11489);
var G__11493 = (0);
seq__11462_11478 = G__11490;
chunk__11463_11479 = G__11491;
count__11464_11480 = G__11492;
i__11465_11481 = G__11493;
continue;
} else {
var dep_11494 = cljs.core.first(seq__11462_11488__$1);
dep_11494.rank = javelin.core.next_rank();

var G__11495 = cljs.core.next(seq__11462_11488__$1);
var G__11496 = null;
var G__11497 = (0);
var G__11498 = (0);
seq__11462_11478 = G__11495;
chunk__11463_11479 = G__11496;
count__11464_11480 = G__11497;
i__11465_11481 = G__11498;
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

var G__11499 = seq__11458_11473;
var G__11500 = chunk__11459_11474;
var G__11501 = count__11460_11475;
var G__11502 = (i__11461_11476 + (1));
seq__11458_11473 = G__11499;
chunk__11459_11474 = G__11500;
count__11460_11475 = G__11501;
i__11461_11476 = G__11502;
continue;
} else {
var temp__4425__auto___11503 = cljs.core.seq(seq__11458_11473);
if(temp__4425__auto___11503){
var seq__11458_11504__$1 = temp__4425__auto___11503;
if(cljs.core.chunked_seq_QMARK_(seq__11458_11504__$1)){
var c__5789__auto___11505 = cljs.core.chunk_first(seq__11458_11504__$1);
var G__11506 = cljs.core.chunk_rest(seq__11458_11504__$1);
var G__11507 = c__5789__auto___11505;
var G__11508 = cljs.core.count(c__5789__auto___11505);
var G__11509 = (0);
seq__11458_11473 = G__11506;
chunk__11459_11474 = G__11507;
count__11460_11475 = G__11508;
i__11461_11476 = G__11509;
continue;
} else {
var source_11510 = cljs.core.first(seq__11458_11504__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_11510) : javelin.core.cell_QMARK_.call(null,source_11510)))){
source_11510.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11510.sinks,this$);

if((source_11510.rank > this$.rank)){
var seq__11466_11511 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__11458_11473,chunk__11459_11474,count__11460_11475,i__11461_11476,source_11510,seq__11458_11504__$1,temp__4425__auto___11503,vec__11457,f,sources){
return (function (p1__11452_SHARP_){
return p1__11452_SHARP_.sinks;
});})(seq__11458_11473,chunk__11459_11474,count__11460_11475,i__11461_11476,source_11510,seq__11458_11504__$1,temp__4425__auto___11503,vec__11457,f,sources))
,source_11510));
var chunk__11467_11512 = null;
var count__11468_11513 = (0);
var i__11469_11514 = (0);
while(true){
if((i__11469_11514 < count__11468_11513)){
var dep_11515 = chunk__11467_11512.cljs$core$IIndexed$_nth$arity$2(null,i__11469_11514);
dep_11515.rank = javelin.core.next_rank();

var G__11516 = seq__11466_11511;
var G__11517 = chunk__11467_11512;
var G__11518 = count__11468_11513;
var G__11519 = (i__11469_11514 + (1));
seq__11466_11511 = G__11516;
chunk__11467_11512 = G__11517;
count__11468_11513 = G__11518;
i__11469_11514 = G__11519;
continue;
} else {
var temp__4425__auto___11520__$1 = cljs.core.seq(seq__11466_11511);
if(temp__4425__auto___11520__$1){
var seq__11466_11521__$1 = temp__4425__auto___11520__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11466_11521__$1)){
var c__5789__auto___11522 = cljs.core.chunk_first(seq__11466_11521__$1);
var G__11523 = cljs.core.chunk_rest(seq__11466_11521__$1);
var G__11524 = c__5789__auto___11522;
var G__11525 = cljs.core.count(c__5789__auto___11522);
var G__11526 = (0);
seq__11466_11511 = G__11523;
chunk__11467_11512 = G__11524;
count__11468_11513 = G__11525;
i__11469_11514 = G__11526;
continue;
} else {
var dep_11527 = cljs.core.first(seq__11466_11521__$1);
dep_11527.rank = javelin.core.next_rank();

var G__11528 = cljs.core.next(seq__11466_11521__$1);
var G__11529 = null;
var G__11530 = (0);
var G__11531 = (0);
seq__11466_11511 = G__11528;
chunk__11467_11512 = G__11529;
count__11468_11513 = G__11530;
i__11469_11514 = G__11531;
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

var G__11532 = cljs.core.next(seq__11458_11504__$1);
var G__11533 = null;
var G__11534 = (0);
var G__11535 = (0);
seq__11458_11473 = G__11532;
chunk__11459_11474 = G__11533;
count__11460_11475 = G__11534;
i__11461_11476 = G__11535;
continue;
}
} else {
}
}
break;
}

var compute_11536 = ((function (vec__11457,f,sources){
return (function (p1__11453_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__11453_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__11453_SHARP_)));
});})(vec__11457,f,sources))
;
this$.thunk = ((function (compute_11536,vec__11457,f,sources){
return (function (){
return this$.state = compute_11536(this$.sources);
});})(compute_11536,vec__11457,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq11454){
var G__11455 = cljs.core.first(seq11454);
var seq11454__$1 = cljs.core.next(seq11454);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11455,seq11454__$1);
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
var G__11538 = this$__$1;
var G__11539 = (function (){var G__11540 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11540) : f.call(null,G__11540));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11538,G__11539) : cljs.core.reset_BANG_.call(null,G__11538,G__11539));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__11543 = this$__$1;
var G__11544 = (function (){var G__11545 = this$__$1.state;
var G__11546 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11545,G__11546) : f.call(null,G__11545,G__11546));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11543,G__11544) : cljs.core.reset_BANG_.call(null,G__11543,G__11544));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__11550 = this$__$1;
var G__11551 = (function (){var G__11552 = this$__$1.state;
var G__11553 = a;
var G__11554 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11552,G__11553,G__11554) : f.call(null,G__11552,G__11553,G__11554));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11550,G__11551) : cljs.core.reset_BANG_.call(null,G__11550,G__11551));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__11555 = this$__$1;
var G__11556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11555,G__11556) : cljs.core.reset_BANG_.call(null,G__11555,G__11556));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__11557 = cljs.core.seq(self__.watches);
var chunk__11558 = null;
var count__11559 = (0);
var i__11560 = (0);
while(true){
if((i__11560 < count__11559)){
var vec__11561 = chunk__11558.cljs$core$IIndexed$_nth$arity$2(null,i__11560);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11561,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11561,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__11563 = seq__11557;
var G__11564 = chunk__11558;
var G__11565 = count__11559;
var G__11566 = (i__11560 + (1));
seq__11557 = G__11563;
chunk__11558 = G__11564;
count__11559 = G__11565;
i__11560 = G__11566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11557);
if(temp__4425__auto__){
var seq__11557__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11557__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11557__$1);
var G__11567 = cljs.core.chunk_rest(seq__11557__$1);
var G__11568 = c__5789__auto__;
var G__11569 = cljs.core.count(c__5789__auto__);
var G__11570 = (0);
seq__11557 = G__11567;
chunk__11558 = G__11568;
count__11559 = G__11569;
i__11560 = G__11570;
continue;
} else {
var vec__11562 = cljs.core.first(seq__11557__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__11571 = cljs.core.next(seq__11557__$1);
var G__11572 = null;
var G__11573 = (0);
var G__11574 = (0);
seq__11557 = G__11571;
chunk__11558 = G__11572;
count__11559 = G__11573;
i__11560 = G__11574;
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
var G__11575__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__11575 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__11576__i = 0, G__11576__a = new Array(arguments.length -  0);
while (G__11576__i < G__11576__a.length) {G__11576__a[G__11576__i] = arguments[G__11576__i + 0]; ++G__11576__i;}
  sources = new cljs.core.IndexedSeq(G__11576__a,0);
} 
return G__11575__delegate.call(this,sources);};
G__11575.cljs$lang$maxFixedArity = 0;
G__11575.cljs$lang$applyTo = (function (arglist__11577){
var sources = cljs.core.seq(arglist__11577);
return G__11575__delegate(sources);
});
G__11575.cljs$core$IFn$_invoke$arity$variadic = G__11575__delegate;
return G__11575;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args11578 = [];
var len__6044__auto___11586 = arguments.length;
var i__6045__auto___11587 = (0);
while(true){
if((i__6045__auto___11587 < len__6044__auto___11586)){
args11578.push((arguments[i__6045__auto___11587]));

var G__11588 = (i__6045__auto___11587 + (1));
i__6045__auto___11587 = G__11588;
continue;
} else {
}
break;
}

var G__11582 = args11578.length;
switch (G__11582) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args11578.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6063__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__11583){
var map__11584 = p__11583;
var map__11584__$1 = ((((!((map__11584 == null)))?((((map__11584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11584):map__11584);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11584__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq11579){
var G__11580 = cljs.core.first(seq11579);
var seq11579__$1 = cljs.core.next(seq11579);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__11580,seq11579__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__11590_SHARP_){
var _STAR_tx_STAR_11594 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__11595 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11595) : cljs.core.atom.call(null,G__11595));
})();

try{return (p1__11590_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__11590_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__11590_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11594;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_11596 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_11596;
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
var len__6044__auto___11604 = arguments.length;
var i__6045__auto___11605 = (0);
while(true){
if((i__6045__auto___11605 < len__6044__auto___11604)){
args__6051__auto__.push((arguments[i__6045__auto___11605]));

var G__11606 = (i__6045__auto___11605 + (1));
i__6045__auto___11605 = G__11606;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__11603 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11603) : cljs.core.atom.call(null,G__11603));
})();
var tag_neq = ((function (olds){
return (function (p1__11597_SHARP_,p2__11598_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__11597_SHARP_,p2__11598_SHARP_),p2__11598_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__11600_SHARP_,p2__11599_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__11600_SHARP_,p2__11599_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__11607__delegate = function (rest__11601_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__11601_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__11601_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__11601_SHARP_));

return news;
};
var G__11607 = function (var_args){
var rest__11601_SHARP_ = null;
if (arguments.length > 0) {
var G__11608__i = 0, G__11608__a = new Array(arguments.length -  0);
while (G__11608__i < G__11608__a.length) {G__11608__a[G__11608__i] = arguments[G__11608__i + 0]; ++G__11608__i;}
  rest__11601_SHARP_ = new cljs.core.IndexedSeq(G__11608__a,0);
} 
return G__11607__delegate.call(this,rest__11601_SHARP_);};
G__11607.cljs$lang$maxFixedArity = 0;
G__11607.cljs$lang$applyTo = (function (arglist__11609){
var rest__11601_SHARP_ = cljs.core.seq(arglist__11609);
return G__11607__delegate(rest__11601_SHARP_);
});
G__11607.cljs$core$IFn$_invoke$arity$variadic = G__11607__delegate;
return G__11607;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq11602){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11602));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__11610_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__11610_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__11611_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__11611_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__11618_11624 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__11619_11625 = null;
var count__11620_11626 = (0);
var i__11621_11627 = (0);
while(true){
if((i__11621_11627 < count__11620_11626)){
var i_11628 = chunk__11619_11625.cljs$core$IIndexed$_nth$arity$2(null,i__11621_11627);
var G__11622_11629 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_11628) : ith_item__$1.call(null,i_11628));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11622_11629) : f__$1.call(null,G__11622_11629));

var G__11630 = seq__11618_11624;
var G__11631 = chunk__11619_11625;
var G__11632 = count__11620_11626;
var G__11633 = (i__11621_11627 + (1));
seq__11618_11624 = G__11630;
chunk__11619_11625 = G__11631;
count__11620_11626 = G__11632;
i__11621_11627 = G__11633;
continue;
} else {
var temp__4425__auto___11634 = cljs.core.seq(seq__11618_11624);
if(temp__4425__auto___11634){
var seq__11618_11635__$1 = temp__4425__auto___11634;
if(cljs.core.chunked_seq_QMARK_(seq__11618_11635__$1)){
var c__5789__auto___11636 = cljs.core.chunk_first(seq__11618_11635__$1);
var G__11637 = cljs.core.chunk_rest(seq__11618_11635__$1);
var G__11638 = c__5789__auto___11636;
var G__11639 = cljs.core.count(c__5789__auto___11636);
var G__11640 = (0);
seq__11618_11624 = G__11637;
chunk__11619_11625 = G__11638;
count__11620_11626 = G__11639;
i__11621_11627 = G__11640;
continue;
} else {
var i_11641 = cljs.core.first(seq__11618_11635__$1);
var G__11623_11642 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_11641) : ith_item__$1.call(null,i_11641));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11623_11642) : f__$1.call(null,G__11623_11642));

var G__11643 = cljs.core.next(seq__11618_11635__$1);
var G__11644 = null;
var G__11645 = (0);
var G__11646 = (0);
seq__11618_11624 = G__11643;
chunk__11619_11625 = G__11644;
count__11620_11626 = G__11645;
i__11621_11627 = G__11646;
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
