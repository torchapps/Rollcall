// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('goog.math');
goog.require('rollcall.data');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('cljs_time.format');
cljs.core.enable_console_print_BANG_();
hoplon.app_pages._index_DOT_html.papa = (function hoplon$app_pages$_index_DOT_html$papa(cell,url){
return Papa.parse(url,{"download": true, "header": true, "skipEmptyLines": true, "complete": (function (results){
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cell,data) : cljs.core.reset_BANG_.call(null,cell,data));
})});
});
hoplon.app_pages._index_DOT_html.date_formatter = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$date) : cljs_time.format.formatters.call(null,cljs.core.cst$kw$date));
hoplon.app_pages._index_DOT_html.percent = (function hoplon$app_pages$_index_DOT_html$percent(n){
return [cljs.core.str(n),cljs.core.str("%")].join('');
});
hoplon.app_pages._index_DOT_html.show_date_dialog = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.show_about_dialog = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.toggle_dialog = (function hoplon$app_pages$_index_DOT_html$toggle_dialog(dialog){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dialog,cljs.core.not);
});
hoplon.app_pages._index_DOT_html.members = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.app_pages._index_DOT_html.journals = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.app_pages._index_DOT_html.dates = javelin.core.formula((function (G__12442){
return G__12442;
})).call(null,rollcall.data.dates);
hoplon.app_pages._index_DOT_html.roll_call = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.app_pages._index_DOT_html.dates_by_year = javelin.core.formula((function (G__12448,G__12447,G__12449,G__12445,G__12444,G__12446){
var G__12456 = G__12445;
var G__12457 = (function (){var G__12460 = ((function (G__12456){
return (function (p1__12443_SHARP_){
var G__12462 = G__12448;
var G__12463 = cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__12443_SHARP_);
return (G__12447.cljs$core$IFn$_invoke$arity$2 ? G__12447.cljs$core$IFn$_invoke$arity$2(G__12462,G__12463) : G__12447.call(null,G__12462,G__12463));
});})(G__12456))
;
var G__12461 = G__12449;
return (G__12446.cljs$core$IFn$_invoke$arity$2 ? G__12446.cljs$core$IFn$_invoke$arity$2(G__12460,G__12461) : G__12446.call(null,G__12460,G__12461));
})();
return (G__12444.cljs$core$IFn$_invoke$arity$2 ? G__12444.cljs$core$IFn$_invoke$arity$2(G__12456,G__12457) : G__12444.call(null,G__12456,G__12457));
})).call(null,hoplon.app_pages._index_DOT_html.date_formatter,cljs_time.format.parse,hoplon.app_pages._index_DOT_html.dates,cljs_time.core.year,cljs.core.group_by,cljs.core.mapv);
hoplon.app_pages._index_DOT_html.papa(hoplon.app_pages._index_DOT_html.members,"members.csv");
hoplon.app_pages._index_DOT_html.papa(hoplon.app_pages._index_DOT_html.roll_call,"roll_call.csv");
hoplon.app_pages._index_DOT_html.id_attendance = javelin.core.formula((function (G__12465,G__12464){
return (G__12464.cljs$core$IFn$_invoke$arity$2 ? G__12464.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_id,G__12465) : G__12464.call(null,cljs.core.cst$kw$member_id,G__12465));
})).call(null,hoplon.app_pages._index_DOT_html.roll_call,cljs.core.group_by);
hoplon.app_pages._index_DOT_html.members_with_attendance = javelin.core.formula((function (G__12476,G__12472,G__12471,G__12473,G__12469,G__12470,G__12468,G__12475,G__12466,G__12467,G__12474){
var G__12494 = (function (member){
var session_dates = (function (){var G__12496 = (G__12466.cljs$core$IFn$_invoke$arity$2 ? G__12466.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$date,G__12468) : G__12466.call(null,cljs.core.cst$kw$date,G__12468));
return (G__12467.cljs$core$IFn$_invoke$arity$1 ? G__12467.cljs$core$IFn$_invoke$arity$1(G__12496) : G__12467.call(null,G__12496));
})();
var dates_attended = (function (){var G__12503 = (function (){var G__12506 = cljs.core.cst$kw$date;
var G__12507 = (function (){var G__12508 = G__12471;
var G__12509 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(member);
return (G__12470.cljs$core$IFn$_invoke$arity$2 ? G__12470.cljs$core$IFn$_invoke$arity$2(G__12508,G__12509) : G__12470.call(null,G__12508,G__12509));
})();
return (G__12466.cljs$core$IFn$_invoke$arity$2 ? G__12466.cljs$core$IFn$_invoke$arity$2(G__12506,G__12507) : G__12466.call(null,G__12506,G__12507));
})();
return (G__12469.cljs$core$IFn$_invoke$arity$1 ? G__12469.cljs$core$IFn$_invoke$arity$1(G__12503) : G__12469.call(null,G__12503));
})();
var date_earliest = (G__12472.cljs$core$IFn$_invoke$arity$1 ? G__12472.cljs$core$IFn$_invoke$arity$1(dates_attended) : G__12472.call(null,dates_attended));
var date_latest = (G__12473.cljs$core$IFn$_invoke$arity$1 ? G__12473.cljs$core$IFn$_invoke$arity$1(dates_attended) : G__12473.call(null,dates_attended));
var first_session_index = session_dates.indexOf(date_earliest);
var last_session_index = session_dates.indexOf(date_latest);
var term_length = ((last_session_index - first_session_index) + (1));
var presence_fraction = ((G__12474.cljs$core$IFn$_invoke$arity$1 ? G__12474.cljs$core$IFn$_invoke$arity$1(dates_attended) : G__12474.call(null,dates_attended)) / term_length);
var presence = (function (){var G__12510 = (presence_fraction * (100));
return Math.round(G__12510);
})();
var G__12511 = member;
var G__12512 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$dates_DASH_attended,dates_attended,cljs.core.cst$kw$date_DASH_earliest,date_earliest,cljs.core.cst$kw$date_DASH_latest,date_latest,cljs.core.cst$kw$term_DASH_length,term_length,cljs.core.cst$kw$presence,presence], null);
return (G__12475.cljs$core$IFn$_invoke$arity$2 ? G__12475.cljs$core$IFn$_invoke$arity$2(G__12511,G__12512) : G__12475.call(null,G__12511,G__12512));
});
var G__12495 = G__12476;
return (G__12466.cljs$core$IFn$_invoke$arity$2 ? G__12466.cljs$core$IFn$_invoke$arity$2(G__12494,G__12495) : G__12466.call(null,G__12494,G__12495));
})).call(null,hoplon.app_pages._index_DOT_html.members,cljs.core.first,hoplon.app_pages._index_DOT_html.id_attendance,cljs.core.last,cljs.core.sort,cljs.core.get,hoplon.app_pages._index_DOT_html.dates,cljs.core.merge,cljs.core.mapv,cljs.core.to_array,cljs.core.count);
hoplon.app_pages._index_DOT_html.id_member = javelin.core.formula((function (G__12514,G__12513){
return (G__12513.cljs$core$IFn$_invoke$arity$2 ? G__12513.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,G__12514) : G__12513.call(null,cljs.core.cst$kw$id,G__12514));
})).call(null,hoplon.app_pages._index_DOT_html.members_with_attendance,cljs.core.group_by);
hoplon.app_pages._index_DOT_html.date_members = javelin.core.formula((function (G__12517,G__12521,G__12518,G__12515,G__12519,G__12520,G__12516){
var G__12522 = (function (d){
return cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(d);
});
var G__12523 = (function (){var G__12527 = ((function (G__12522){
return (function (r){
var id = cljs.core.cst$kw$member_id.cljs$core$IFn$_invoke$arity$1(r);
var member = (function (){var G__12529 = (G__12518.cljs$core$IFn$_invoke$arity$2 ? G__12518.cljs$core$IFn$_invoke$arity$2(G__12519,id) : G__12518.call(null,G__12519,id));
return (G__12517.cljs$core$IFn$_invoke$arity$1 ? G__12517.cljs$core$IFn$_invoke$arity$1(G__12529) : G__12517.call(null,G__12529));
})();
var G__12530 = r;
var G__12531 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$member,member], null);
return (G__12520.cljs$core$IFn$_invoke$arity$2 ? G__12520.cljs$core$IFn$_invoke$arity$2(G__12530,G__12531) : G__12520.call(null,G__12530,G__12531));
});})(G__12522))
;
var G__12528 = G__12521;
return (G__12516.cljs$core$IFn$_invoke$arity$2 ? G__12516.cljs$core$IFn$_invoke$arity$2(G__12527,G__12528) : G__12516.call(null,G__12527,G__12528));
})();
return (G__12515.cljs$core$IFn$_invoke$arity$2 ? G__12515.cljs$core$IFn$_invoke$arity$2(G__12522,G__12523) : G__12515.call(null,G__12522,G__12523));
})).call(null,cljs.core.first,hoplon.app_pages._index_DOT_html.roll_call,cljs.core.get,cljs.core.group_by,hoplon.app_pages._index_DOT_html.id_member,cljs.core.merge,cljs.core.mapv);
hoplon.app_pages._index_DOT_html.selected_date = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.selected_member = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.selected_sort = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$full_name);
cljs.core.add_watch(hoplon.app_pages._index_DOT_html.members_with_attendance,cljs.core.cst$kw$first_DASH_member_DASH_selection_DASH_watch,(function (watch_key,watch_ref,old_state,new_state){
var G__12532 = hoplon.app_pages._index_DOT_html.selected_member;
var G__12533 = cljs.core.first(new_state);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12532,G__12533) : cljs.core.reset_BANG_.call(null,G__12532,G__12533));
}));
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.toolbar_item = (function() { 
var hoplon$app_pages$_index_DOT_html$toolbar_item__delegate = function (args__11776__auto__){
var vec__12550 = hoplon.core.parse_args(args__11776__auto__);
var map__12551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(0),null);
var map__12551__$1 = ((((!((map__12551 == null)))?((((map__12551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12551):map__12551);
var click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12551__$1,cljs.core.cst$kw$click);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12551__$1,cljs.core.cst$kw$class);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(1),null);
var G__12557 = cljs.core.cst$kw$class;
var G__12558 = javelin.core.formula(((function (G__12557,vec__12550,map__12551,map__12551__$1,click,class$,children){
return (function (G__12562,G__12563){
var G__12564 = G__12563;
var G__12565 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$toolbar_DASH_item,true], null);
return (G__12562.cljs$core$IFn$_invoke$arity$2 ? G__12562.cljs$core$IFn$_invoke$arity$2(G__12564,G__12565) : G__12562.call(null,G__12564,G__12565));
});})(G__12557,vec__12550,map__12551,map__12551__$1,click,class$,children))
).call(null,cljs.core.merge,class$);
var G__12559 = cljs.core.cst$kw$click;
var G__12560 = click;
var G__12561 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12557,G__12558,G__12559,G__12560,G__12561) : hoplon.core.div.call(null,G__12557,G__12558,G__12559,G__12560,G__12561));
};
var hoplon$app_pages$_index_DOT_html$toolbar_item = function (var_args){
var args__11776__auto__ = null;
if (arguments.length > 0) {
var G__12566__i = 0, G__12566__a = new Array(arguments.length -  0);
while (G__12566__i < G__12566__a.length) {G__12566__a[G__12566__i] = arguments[G__12566__i + 0]; ++G__12566__i;}
  args__11776__auto__ = new cljs.core.IndexedSeq(G__12566__a,0);
} 
return hoplon$app_pages$_index_DOT_html$toolbar_item__delegate.call(this,args__11776__auto__);};
hoplon$app_pages$_index_DOT_html$toolbar_item.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$toolbar_item.cljs$lang$applyTo = (function (arglist__12567){
var args__11776__auto__ = cljs.core.seq(arglist__12567);
return hoplon$app_pages$_index_DOT_html$toolbar_item__delegate(args__11776__auto__);
});
hoplon$app_pages$_index_DOT_html$toolbar_item.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$toolbar_item__delegate;
return hoplon$app_pages$_index_DOT_html$toolbar_item;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.spacer = (function() { 
var hoplon$app_pages$_index_DOT_html$spacer__delegate = function (args__11776__auto__){
var vec__12569 = hoplon.core.parse_args(args__11776__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(1),null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"spacer") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"spacer"));
};
var hoplon$app_pages$_index_DOT_html$spacer = function (var_args){
var args__11776__auto__ = null;
if (arguments.length > 0) {
var G__12570__i = 0, G__12570__a = new Array(arguments.length -  0);
while (G__12570__i < G__12570__a.length) {G__12570__a[G__12570__i] = arguments[G__12570__i + 0]; ++G__12570__i;}
  args__11776__auto__ = new cljs.core.IndexedSeq(G__12570__a,0);
} 
return hoplon$app_pages$_index_DOT_html$spacer__delegate.call(this,args__11776__auto__);};
hoplon$app_pages$_index_DOT_html$spacer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$spacer.cljs$lang$applyTo = (function (arglist__12571){
var args__11776__auto__ = cljs.core.seq(arglist__12571);
return hoplon$app_pages$_index_DOT_html$spacer__delegate(args__11776__auto__);
});
hoplon$app_pages$_index_DOT_html$spacer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$spacer__delegate;
return hoplon$app_pages$_index_DOT_html$spacer;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.dialog = (function() { 
var hoplon$app_pages$_index_DOT_html$dialog__delegate = function (args__11776__auto__){
var vec__12594 = hoplon.core.parse_args(args__11776__auto__);
var map__12595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(0),null);
var map__12595__$1 = ((((!((map__12595 == null)))?((((map__12595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12595):map__12595);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,cljs.core.cst$kw$open_QMARK_);
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,cljs.core.cst$kw$close);
var dialog_contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(1),null);
var G__12599 = cljs.core.cst$kw$class;
var G__12600 = javelin.core.formula(((function (G__12599,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents){
return (function (G__12604,G__12605){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dialog,true,cljs.core.cst$kw$anim_DASH_hidden,(G__12604.cljs$core$IFn$_invoke$arity$1 ? G__12604.cljs$core$IFn$_invoke$arity$1(G__12605) : G__12604.call(null,G__12605)),cljs.core.cst$kw$curtained,true], null);
});})(G__12599,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents))
).call(null,cljs.core.not,open_QMARK_);
var G__12601 = cljs.core.cst$kw$click;
var G__12602 = close;
var G__12603 = (function (){var G__12608 = cljs.core.cst$kw$class;
var G__12609 = javelin.core.formula(((function (G__12608,G__12599,G__12600,G__12601,G__12602,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents){
return (function (G__12613,G__12614){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dialog_DASH_contents,true,cljs.core.cst$kw$panel,true,cljs.core.cst$kw$anim_DASH_hidden,(G__12613.cljs$core$IFn$_invoke$arity$1 ? G__12613.cljs$core$IFn$_invoke$arity$1(G__12614) : G__12613.call(null,G__12614))], null);
});})(G__12608,G__12599,G__12600,G__12601,G__12602,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents))
).call(null,cljs.core.not,open_QMARK_);
var G__12610 = cljs.core.cst$kw$click;
var G__12611 = ((function (G__12608,G__12609,G__12610,G__12599,G__12600,G__12601,G__12602,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents){
return (function (p1__12572_SHARP_){
return p1__12572_SHARP_.stopImmediatePropagation();
});})(G__12608,G__12609,G__12610,G__12599,G__12600,G__12601,G__12602,vec__12594,map__12595,map__12595__$1,open_QMARK_,close,dialog_contents))
;
var G__12612 = dialog_contents;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12608,G__12609,G__12610,G__12611,G__12612) : hoplon.core.div.call(null,G__12608,G__12609,G__12610,G__12611,G__12612));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12599,G__12600,G__12601,G__12602,G__12603) : hoplon.core.div.call(null,G__12599,G__12600,G__12601,G__12602,G__12603));
};
var hoplon$app_pages$_index_DOT_html$dialog = function (var_args){
var args__11776__auto__ = null;
if (arguments.length > 0) {
var G__12615__i = 0, G__12615__a = new Array(arguments.length -  0);
while (G__12615__i < G__12615__a.length) {G__12615__a[G__12615__i] = arguments[G__12615__i + 0]; ++G__12615__i;}
  args__11776__auto__ = new cljs.core.IndexedSeq(G__12615__a,0);
} 
return hoplon$app_pages$_index_DOT_html$dialog__delegate.call(this,args__11776__auto__);};
hoplon$app_pages$_index_DOT_html$dialog.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$dialog.cljs$lang$applyTo = (function (arglist__12616){
var args__11776__auto__ = cljs.core.seq(arglist__12616);
return hoplon$app_pages$_index_DOT_html$dialog__delegate(args__11776__auto__);
});
hoplon$app_pages$_index_DOT_html$dialog.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$dialog__delegate;
return hoplon$app_pages$_index_DOT_html$dialog;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__12619 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,700",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,700",cljs.core.cst$kw$rel,"stylesheet"));
var G__12620 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"css/main.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"css/main.css",cljs.core.cst$kw$rel,"stylesheet"));
var G__12621 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__12619,G__12620,G__12621) : hoplon.core.head.call(null,G__12619,G__12620,G__12621));
})(),(function (){var G__13324 = (function (){var current_view = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$index);
var G__13345 = cljs.core.cst$kw$class;
var G__13346 = "panel fill";
var G__13347 = (function (){var G__13349 = cljs.core.cst$kw$class;
var G__13350 = "toolbar main";
var G__13351 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"toolbar-item","Rollcall") : hoplon.core.h1.call(null,cljs.core.cst$kw$class,"toolbar-item","Rollcall"));
var G__13352 = hoplon.app_pages._index_DOT_html.toolbar_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$click,((function (G__13349,G__13350,G__13351,G__13345,G__13346,current_view){
return (function (){
return hoplon.app_pages._index_DOT_html.toggle_dialog(hoplon.app_pages._index_DOT_html.show_about_dialog);
});})(G__13349,G__13350,G__13351,G__13345,G__13346,current_view))
,"About our data"], 0));
var G__13353 = hoplon.app_pages._index_DOT_html.spacer();
var G__13354 = (function (){var G__13358 = cljs.core.cst$kw$class;
var G__13359 = "toolbar-item";
var G__13360 = cljs.core.cst$kw$href;
var G__13361 = "http://torchapps.github.io";
var G__13362 = (function (){var G__13364 = cljs.core.cst$kw$css;
var G__13365 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"8px"], null);
var G__13366 = "Built by Torch";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__13364,G__13365,G__13366) : hoplon.core.div.call(null,G__13364,G__13365,G__13366));
})();
var G__13363 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-torch") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-torch"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$6(G__13358,G__13359,G__13360,G__13361,G__13362,G__13363) : hoplon.core.a.call(null,G__13358,G__13359,G__13360,G__13361,G__13362,G__13363));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__13349,G__13350,G__13351,G__13352,G__13353,G__13354) : hoplon.core.div.call(null,G__13349,G__13350,G__13351,G__13352,G__13353,G__13354));
})();
var G__13348 = (function (){var G__13511 = cljs.core.cst$kw$class;
var G__13512 = "panel-content split-view";
var G__13513 = (function (){var G__13580 = cljs.core.cst$kw$class;
var G__13581 = "minor view panel";
var G__13582 = (function (){var G__13614 = cljs.core.cst$kw$id;
var G__13615 = "member-list";
var G__13616 = cljs.core.cst$kw$class;
var G__13617 = "panel-content scrollable list-view";
var G__13618 = (function (){var members = javelin.core.formula(((function (G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13619,G__13621,G__13620){
return (G__13619.cljs$core$IFn$_invoke$arity$2 ? G__13619.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : G__13619.call(null,G__13620,G__13621));
});})(G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,cljs.core.sort_by,hoplon.app_pages._index_DOT_html.members_with_attendance,hoplon.app_pages._index_DOT_html.selected_sort);
return hoplon.core.loop_tpl_STAR_(members,((function (members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (item__11816__auto__){
var vec__13622 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (member){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [member], null);
});})(members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,item__11816__auto__));
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13622,(0),null);
var id = javelin.core.formula(((function (vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13623){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__13623);
});})(vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,member);
var selected_id = javelin.core.formula(((function (id,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13624){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__13624);
});})(id,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.selected_member);
var full_name = javelin.core.formula(((function (id,selected_id,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13625){
return cljs.core.cst$kw$full_name.cljs$core$IFn$_invoke$arity$1(G__13625);
});})(id,selected_id,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,member);
var G__13627 = cljs.core.cst$kw$id;
var G__13628 = javelin.core.formula(((function (G__13627,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13636){
return [cljs.core.str("member"),cljs.core.str(G__13636)].join('');
});})(G__13627,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,id);
var G__13629 = cljs.core.cst$kw$class;
var G__13630 = javelin.core.formula(((function (G__13627,G__13628,G__13629,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13637,G__13638,G__13639){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$testing,true,cljs.core.cst$kw$selected,(G__13637.cljs$core$IFn$_invoke$arity$2 ? G__13637.cljs$core$IFn$_invoke$arity$2(G__13638,G__13639) : G__13637.call(null,G__13638,G__13639))], null);
});})(G__13627,G__13628,G__13629,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,cljs.core._EQ_,selected_id,id);
var G__13631 = cljs.core.cst$kw$click;
var G__13632 = ((function (G__13627,G__13628,G__13629,G__13630,G__13631,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (){
var G__13640 = hoplon.app_pages._index_DOT_html.selected_member;
var G__13641 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(member) : cljs.core.deref.call(null,member));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13640,G__13641) : cljs.core.reset_BANG_.call(null,G__13640,G__13641));
});})(G__13627,G__13628,G__13629,G__13630,G__13631,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
;
var G__13633 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(full_name) : hoplon.core.div.call(null,full_name));
var G__13634 = hoplon.app_pages._index_DOT_html.spacer();
var G__13635 = (function (){var G__13645 = javelin.core.formula(((function (G__13627,G__13628,G__13629,G__13630,G__13631,G__13632,G__13633,G__13634,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13646,G__13647){
var G__13648 = cljs.core.cst$kw$presence.cljs$core$IFn$_invoke$arity$1(G__13647);
return (G__13646.cljs$core$IFn$_invoke$arity$1 ? G__13646.cljs$core$IFn$_invoke$arity$1(G__13648) : G__13646.call(null,G__13648));
});})(G__13627,G__13628,G__13629,G__13630,G__13631,G__13632,G__13633,G__13634,id,selected_id,full_name,vec__13622,member,members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.percent,member);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__13645) : hoplon.core.div.call(null,G__13645));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$9(G__13627,G__13628,G__13629,G__13630,G__13631,G__13632,G__13633,G__13634,G__13635) : hoplon.core.li.call(null,G__13627,G__13628,G__13629,G__13630,G__13631,G__13632,G__13633,G__13634,G__13635));
});})(members,G__13614,G__13615,G__13616,G__13617,G__13580,G__13581,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
);
})();
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$5(G__13614,G__13615,G__13616,G__13617,G__13618) : hoplon.core.ul.call(null,G__13614,G__13615,G__13616,G__13617,G__13618));
})();
var G__13583 = (function (){var G__13651 = cljs.core.cst$kw$class;
var G__13652 = "toolbar sort-toolbar";
var G__13653 = hoplon.app_pages._index_DOT_html.toolbar_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$click,((function (G__13651,G__13652,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.selected_sort,cljs.core.cst$kw$full_name) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.selected_sort,cljs.core.cst$kw$full_name));
});})(G__13651,G__13652,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
,cljs.core.cst$kw$class,javelin.core.formula(((function (G__13651,G__13652,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13655,G__13656){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,(G__13655.cljs$core$IFn$_invoke$arity$2 ? G__13655.cljs$core$IFn$_invoke$arity$2(G__13656,cljs.core.cst$kw$full_name) : G__13655.call(null,G__13656,cljs.core.cst$kw$full_name))], null);
});})(G__13651,G__13652,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,cljs.core._EQ_,hoplon.app_pages._index_DOT_html.selected_sort),"Alphabetical"], 0));
var G__13654 = hoplon.app_pages._index_DOT_html.toolbar_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$click,((function (G__13651,G__13652,G__13653,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.selected_sort,cljs.core.cst$kw$presence) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.selected_sort,cljs.core.cst$kw$presence));
});})(G__13651,G__13652,G__13653,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
,cljs.core.cst$kw$class,javelin.core.formula(((function (G__13651,G__13652,G__13653,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view){
return (function (G__13657,G__13658){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,(G__13657.cljs$core$IFn$_invoke$arity$2 ? G__13657.cljs$core$IFn$_invoke$arity$2(G__13658,cljs.core.cst$kw$presence) : G__13657.call(null,G__13658,cljs.core.cst$kw$presence))], null);
});})(G__13651,G__13652,G__13653,G__13580,G__13581,G__13582,G__13511,G__13512,G__13345,G__13346,G__13347,current_view))
).call(null,cljs.core._EQ_,hoplon.app_pages._index_DOT_html.selected_sort),"Attendance"], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13651,G__13652,G__13653,G__13654) : hoplon.core.div.call(null,G__13651,G__13652,G__13653,G__13654));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13580,G__13581,G__13582,G__13583) : hoplon.core.div.call(null,G__13580,G__13581,G__13582,G__13583));
})();
var G__13514 = (function (){var dates_attended = javelin.core.formula(((function (G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13661,G__13660,G__13662,G__13659){
var G__13663 = ((function (G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (p1__12617_SHARP_){
return (G__13660.cljs$core$IFn$_invoke$arity$2 ? G__13660.cljs$core$IFn$_invoke$arity$2(G__13661,p1__12617_SHARP_) : G__13660.call(null,G__13661,p1__12617_SHARP_));
});})(G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
;
var G__13664 = cljs.core.cst$kw$dates_DASH_attended.cljs$core$IFn$_invoke$arity$1(G__13662);
return (G__13659.cljs$core$IFn$_invoke$arity$2 ? G__13659.cljs$core$IFn$_invoke$arity$2(G__13663,G__13664) : G__13659.call(null,G__13663,G__13664));
});})(G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.date_formatter,cljs_time.format.parse,hoplon.app_pages._index_DOT_html.selected_member,cljs.core.mapv);
var presence = javelin.core.formula(((function (dates_attended,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13665,G__13666){
var G__13667 = cljs.core.cst$kw$presence.cljs$core$IFn$_invoke$arity$1(G__13666);
return (G__13665.cljs$core$IFn$_invoke$arity$1 ? G__13665.cljs$core$IFn$_invoke$arity$1(G__13667) : G__13665.call(null,G__13667));
});})(dates_attended,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.percent,hoplon.app_pages._index_DOT_html.selected_member);
var attendance = javelin.core.formula(((function (dates_attended,presence,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13668,G__13669){
return (G__13668.cljs$core$IFn$_invoke$arity$1 ? G__13668.cljs$core$IFn$_invoke$arity$1(G__13669) : G__13668.call(null,G__13669));
});})(dates_attended,presence,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,cljs.core.count,dates_attended);
var term_length = javelin.core.formula(((function (dates_attended,presence,attendance,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13670){
return cljs.core.cst$kw$term_DASH_length.cljs$core$IFn$_invoke$arity$1(G__13670);
});})(dates_attended,presence,attendance,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.selected_member);
var member_name = javelin.core.formula(((function (dates_attended,presence,attendance,term_length,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13671){
return cljs.core.cst$kw$full_name.cljs$core$IFn$_invoke$arity$1(G__13671);
});})(dates_attended,presence,attendance,term_length,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.selected_member);
var G__13849 = cljs.core.cst$kw$class;
var G__13850 = "major view scrollable";
var G__13851 = (function (){var G__13853 = cljs.core.cst$kw$class;
var G__13854 = javelin.core.formula(((function (G__13853,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13857){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padded,true,cljs.core.cst$kw$hidden,(G__13857 == null)], null);
});})(G__13853,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,hoplon.app_pages._index_DOT_html.selected_member);
var G__13855 = (function (){var G__13858 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"member-name",member_name) : hoplon.core.h1.call(null,cljs.core.cst$kw$class,"member-name",member_name));
var G__13859 = (function (){var G__13878 = cljs.core.cst$kw$class;
var G__13879 = "info-group";
var G__13880 = (function (){var G__13889 = cljs.core.cst$kw$class;
var G__13890 = "info";
var G__13891 = (function (){var G__13895 = cljs.core.cst$kw$class;
var G__13896 = "value";
var G__13897 = (function (){var t__11837__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__11837__auto__,G__13895,G__13896,G__13889,G__13890,G__13878,G__13879,G__13858,G__13853,G__13854,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13898,G__13899){
return G__13898.nodeValue = [cljs.core.str(G__13899)].join('');
});})(t__11837__auto__,G__13895,G__13896,G__13889,G__13890,G__13878,G__13879,G__13858,G__13853,G__13854,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,t__11837__auto__,presence);

return t__11837__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__13895,G__13896,G__13897) : hoplon.core.div.call(null,G__13895,G__13896,G__13897));
})();
var G__13892 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"desc","attendance") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"desc","attendance"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13889,G__13890,G__13891,G__13892) : hoplon.core.div.call(null,G__13889,G__13890,G__13891,G__13892));
})();
var G__13881 = (function (){var G__13909 = cljs.core.cst$kw$class;
var G__13910 = "info";
var G__13911 = (function (){var G__13916 = cljs.core.cst$kw$class;
var G__13917 = "value";
var G__13918 = (function (){var t__11837__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__11837__auto__,G__13916,G__13917,G__13909,G__13910,G__13878,G__13879,G__13880,G__13858,G__13853,G__13854,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__13919,G__13920,G__13921){
return G__13919.nodeValue = [cljs.core.str(G__13920),cljs.core.str(" of "),cljs.core.str(G__13921)].join('');
});})(t__11837__auto__,G__13916,G__13917,G__13909,G__13910,G__13878,G__13879,G__13880,G__13858,G__13853,G__13854,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,t__11837__auto__,attendance,term_length);

return t__11837__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__13916,G__13917,G__13918) : hoplon.core.div.call(null,G__13916,G__13917,G__13918));
})();
var G__13912 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"desc","sessions present in the roll call") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"desc","sessions present in the roll call"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13909,G__13910,G__13911,G__13912) : hoplon.core.div.call(null,G__13909,G__13910,G__13911,G__13912));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13878,G__13879,G__13880,G__13881) : hoplon.core.div.call(null,G__13878,G__13879,G__13880,G__13881));
})();
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$2(G__13858,G__13859) : hoplon.core.header.call(null,G__13858,G__13859));
})();
var G__13856 = (function (){var G__13974 = cljs.core.cst$kw$class;
var G__13975 = "sessions";
var G__13976 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.dates_by_year,((function (G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (item__11816__auto__){
var vec__13977 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (p__13978){
var vec__13979 = p__13978;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(0),null);
var year_dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,year_dates], null);
});})(G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,item__11816__auto__));
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(0),null);
var year_dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(1),null);
var G__13980 = cljs.core.cst$kw$class;
var G__13981 = "year";
var G__13982 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"year-header",year) : hoplon.core.h3.call(null,cljs.core.cst$kw$class,"year-header",year));
var G__13983 = (function (){var G__14005 = cljs.core.cst$kw$class;
var G__14006 = "dates";
var G__14007 = hoplon.core.loop_tpl_STAR_(year_dates,((function (G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (item__11816__auto____$1){
var vec__14008 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (date){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date], null);
});})(G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,item__11816__auto____$1));
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008,(0),null);
var formatted_date = javelin.core.formula(((function (vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__14010,G__14011,G__14009){
var G__14012 = (G__14010.cljs$core$IFn$_invoke$arity$1 ? G__14010.cljs$core$IFn$_invoke$arity$1("MMM d") : G__14010.call(null,"MMM d"));
var G__14013 = G__14011;
return (G__14009.cljs$core$IFn$_invoke$arity$2 ? G__14009.cljs$core$IFn$_invoke$arity$2(G__14012,G__14013) : G__14009.call(null,G__14012,G__14013));
});})(vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,cljs_time.format.formatter,date,cljs_time.format.unparse);
var was_present_QMARK_ = javelin.core.formula(((function (formatted_date,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__14016,G__14014,G__14017,G__14015){
var G__14018 = ((function (formatted_date,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (p1__12618_SHARP_){
return (G__14015.cljs$core$IFn$_invoke$arity$2 ? G__14015.cljs$core$IFn$_invoke$arity$2(p1__12618_SHARP_,G__14016) : G__14015.call(null,p1__12618_SHARP_,G__14016));
});})(formatted_date,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
;
var G__14019 = G__14017;
return (G__14014.cljs$core$IFn$_invoke$arity$2 ? G__14014.cljs$core$IFn$_invoke$arity$2(G__14018,G__14019) : G__14014.call(null,G__14018,G__14019));
});})(formatted_date,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,date,cljs.core.some,dates_attended,cljs_time.core._EQ_);
var G__14021 = cljs.core.cst$kw$class;
var G__14022 = javelin.core.formula(((function (G__14021,formatted_date,was_present_QMARK_,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (G__14026){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,true,cljs.core.cst$kw$present,G__14026], null);
});})(G__14021,formatted_date,was_present_QMARK_,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
).call(null,was_present_QMARK_);
var G__14023 = cljs.core.cst$kw$click;
var G__14024 = ((function (G__14021,G__14022,G__14023,formatted_date,was_present_QMARK_,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view){
return (function (){
var G__14027_14251 = hoplon.app_pages._index_DOT_html.selected_date;
var G__14028_14252 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(date) : cljs.core.deref.call(null,date));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14027_14251,G__14028_14252) : cljs.core.reset_BANG_.call(null,G__14027_14251,G__14028_14252));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.show_date_dialog,cljs.core.not);
});})(G__14021,G__14022,G__14023,formatted_date,was_present_QMARK_,vec__14008,date,G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
;
var G__14025 = formatted_date;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14021,G__14022,G__14023,G__14024,G__14025) : hoplon.core.div.call(null,G__14021,G__14022,G__14023,G__14024,G__14025));
});})(G__14005,G__14006,G__13980,G__13981,G__13982,vec__13977,year,year_dates,G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14005,G__14006,G__14007) : hoplon.core.div.call(null,G__14005,G__14006,G__14007));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13980,G__13981,G__13982,G__13983) : hoplon.core.div.call(null,G__13980,G__13981,G__13982,G__13983));
});})(G__13974,G__13975,G__13853,G__13854,G__13855,G__13849,G__13850,dates_attended,presence,attendance,term_length,member_name,G__13511,G__13512,G__13513,G__13345,G__13346,G__13347,current_view))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__13974,G__13975,G__13976) : hoplon.core.div.call(null,G__13974,G__13975,G__13976));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13853,G__13854,G__13855,G__13856) : hoplon.core.div.call(null,G__13853,G__13854,G__13855,G__13856));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__13849,G__13850,G__13851) : hoplon.core.div.call(null,G__13849,G__13850,G__13851));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13511,G__13512,G__13513,G__13514) : hoplon.core.div.call(null,G__13511,G__13512,G__13513,G__13514));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__13345,G__13346,G__13347,G__13348) : hoplon.core.div.call(null,G__13345,G__13346,G__13347,G__13348));
})();
var G__13325 = (function (){var title = javelin.core.formula(((function (G__13324){
return (function (G__14031,G__14030,G__14029){
if(cljs.core.truth_(G__14029)){
var G__14032 = (G__14031.cljs$core$IFn$_invoke$arity$1 ? G__14031.cljs$core$IFn$_invoke$arity$1("MMM d, YYYY") : G__14031.call(null,"MMM d, YYYY"));
var G__14033 = G__14029;
return (G__14030.cljs$core$IFn$_invoke$arity$2 ? G__14030.cljs$core$IFn$_invoke$arity$2(G__14032,G__14033) : G__14030.call(null,G__14032,G__14033));
} else {
return null;
}
});})(G__13324))
).call(null,cljs_time.format.formatter,cljs_time.format.unparse,hoplon.app_pages._index_DOT_html.selected_date);
var attendees = javelin.core.formula(((function (title,G__13324){
return (function (G__14039,G__14040,G__14036,G__14038,G__14037,G__14035,G__14034){
if(cljs.core.truth_(G__14034)){
var G__14043 = cljs.core.cst$kw$member;
var G__14044 = (function (){var G__14045 = G__14037;
var G__14046 = (G__14038.cljs$core$IFn$_invoke$arity$2 ? G__14038.cljs$core$IFn$_invoke$arity$2(G__14039,G__14034) : G__14038.call(null,G__14039,G__14034));
return (G__14036.cljs$core$IFn$_invoke$arity$2 ? G__14036.cljs$core$IFn$_invoke$arity$2(G__14045,G__14046) : G__14036.call(null,G__14045,G__14046));
})();
return (G__14035.cljs$core$IFn$_invoke$arity$2 ? G__14035.cljs$core$IFn$_invoke$arity$2(G__14043,G__14044) : G__14035.call(null,G__14043,G__14044));
} else {
return (G__14040.cljs$core$IFn$_invoke$arity$1 ? G__14040.cljs$core$IFn$_invoke$arity$1((400)) : G__14040.call(null,(400)));
}
});})(title,G__13324))
).call(null,hoplon.app_pages._index_DOT_html.date_formatter,cljs.core.range,cljs.core.get,cljs_time.format.unparse,hoplon.app_pages._index_DOT_html.date_members,cljs.core.mapv,hoplon.app_pages._index_DOT_html.selected_date);
var attendee_count = javelin.core.formula(((function (title,attendees,G__13324){
return (function (G__14048,G__14047){
return (G__14047.cljs$core$IFn$_invoke$arity$1 ? G__14047.cljs$core$IFn$_invoke$arity$1(G__14048) : G__14047.call(null,G__14048));
});})(title,attendees,G__13324))
).call(null,attendees,cljs.core.count);
var member_count = javelin.core.formula(((function (title,attendees,attendee_count,G__13324){
return (function (G__14050,G__14049){
return (G__14049.cljs$core$IFn$_invoke$arity$1 ? G__14049.cljs$core$IFn$_invoke$arity$1(G__14050) : G__14049.call(null,G__14050));
});})(title,attendees,attendee_count,G__13324))
).call(null,hoplon.app_pages._index_DOT_html.members,cljs.core.count);
var attendance_percent = javelin.core.formula(((function (title,attendees,attendee_count,member_count,G__13324){
return (function (G__14052,G__14051){
return ((100) * (G__14051 / G__14052));
});})(title,attendees,attendee_count,member_count,G__13324))
).call(null,member_count,attendee_count);
var formatted_attendance_percent = javelin.core.formula(((function (title,attendees,attendee_count,member_count,attendance_percent,G__13324){
return (function (G__14053,G__14054){
return (G__14053.cljs$core$IFn$_invoke$arity$2 ? G__14053.cljs$core$IFn$_invoke$arity$2("%.2f",G__14054) : G__14053.call(null,"%.2f",G__14054));
});})(title,attendees,attendee_count,member_count,attendance_percent,G__13324))
).call(null,goog.string.format,attendance_percent);
var close_date_dialog = ((function (title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,G__13324){
return (function (){
return hoplon.app_pages._index_DOT_html.toggle_dialog(hoplon.app_pages._index_DOT_html.show_date_dialog);
});})(title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,G__13324))
;
return hoplon.app_pages._index_DOT_html.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$open_QMARK_,hoplon.app_pages._index_DOT_html.show_date_dialog,cljs.core.cst$kw$close,close_date_dialog,(function (){var G__14055 = cljs.core.cst$kw$class;
var G__14056 = "toolbar date-toolbar accented";
var G__14057 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"toolbar-item",title) : hoplon.core.h1.call(null,cljs.core.cst$kw$class,"toolbar-item",title));
var G__14058 = hoplon.app_pages._index_DOT_html.spacer();
var G__14059 = (function (){var G__14067 = cljs.core.cst$kw$class;
var G__14068 = "toolbar-item";
var G__14069 = (function (){var G__14070 = cljs.core.cst$kw$class;
var G__14071 = "toolbar-icon";
var G__14072 = cljs.core.cst$kw$css;
var G__14073 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"18px"], null);
var G__14074 = cljs.core.cst$kw$click;
var G__14075 = close_date_dialog;
var G__14076 = "\u2715";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14070,G__14071,G__14072,G__14073,G__14074,G__14075,G__14076) : hoplon.core.div.call(null,G__14070,G__14071,G__14072,G__14073,G__14074,G__14075,G__14076));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14067,G__14068,G__14069) : hoplon.core.div.call(null,G__14067,G__14068,G__14069));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14055,G__14056,G__14057,G__14058,G__14059) : hoplon.core.div.call(null,G__14055,G__14056,G__14057,G__14058,G__14059));
})(),(function (){var G__14135 = cljs.core.cst$kw$class;
var G__14136 = "padded border-bottom";
var G__14137 = (function (){var G__14156 = cljs.core.cst$kw$class;
var G__14157 = "info-group";
var G__14158 = (function (){var G__14167 = cljs.core.cst$kw$class;
var G__14168 = "info";
var G__14169 = (function (){var G__14173 = cljs.core.cst$kw$class;
var G__14174 = "value";
var G__14175 = (function (){var t__11837__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__11837__auto__,G__14173,G__14174,G__14167,G__14168,G__14156,G__14157,G__14135,G__14136,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (G__14176,G__14177){
return G__14176.nodeValue = [cljs.core.str(G__14177),cljs.core.str("%")].join('');
});})(t__11837__auto__,G__14173,G__14174,G__14167,G__14168,G__14156,G__14157,G__14135,G__14136,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
).call(null,t__11837__auto__,formatted_attendance_percent);

return t__11837__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14173,G__14174,G__14175) : hoplon.core.div.call(null,G__14173,G__14174,G__14175));
})();
var G__14170 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"desc","attendance") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"desc","attendance"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14167,G__14168,G__14169,G__14170) : hoplon.core.div.call(null,G__14167,G__14168,G__14169,G__14170));
})();
var G__14159 = (function (){var G__14185 = cljs.core.cst$kw$class;
var G__14186 = "info";
var G__14187 = (function (){var G__14191 = cljs.core.cst$kw$class;
var G__14192 = "value";
var G__14193 = (function (){var t__11837__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__11837__auto__,G__14191,G__14192,G__14185,G__14186,G__14156,G__14157,G__14158,G__14135,G__14136,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (G__14194,G__14195){
return G__14194.nodeValue = [cljs.core.str(G__14195)].join('');
});})(t__11837__auto__,G__14191,G__14192,G__14185,G__14186,G__14156,G__14157,G__14158,G__14135,G__14136,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
).call(null,t__11837__auto__,member_count);

return t__11837__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14191,G__14192,G__14193) : hoplon.core.div.call(null,G__14191,G__14192,G__14193));
})();
var G__14188 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"desc","present") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"desc","present"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14185,G__14186,G__14187,G__14188) : hoplon.core.div.call(null,G__14185,G__14186,G__14187,G__14188));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14156,G__14157,G__14158,G__14159) : hoplon.core.div.call(null,G__14156,G__14157,G__14158,G__14159));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14135,G__14136,G__14137) : hoplon.core.div.call(null,G__14135,G__14136,G__14137));
})(),(function (){var G__14206 = cljs.core.cst$kw$class;
var G__14207 = "panel-content scrollable list-view";
var G__14208 = hoplon.core.loop_tpl_STAR_(attendees,((function (G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (item__11816__auto__){
var vec__14209 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (attendee){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attendee], null);
});})(G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
).call(null,item__11816__auto__));
var attendee = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14209,(0),null);
var attendee_name = javelin.core.formula(((function (vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (G__14210){
return cljs.core.cst$kw$full_name.cljs$core$IFn$_invoke$arity$1(G__14210);
});})(vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
).call(null,attendee);
var attendee_id = javelin.core.formula(((function (attendee_name,vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (G__14211){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__14211);
});})(attendee_name,vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
).call(null,attendee);
var G__14214 = cljs.core.cst$kw$click;
var G__14215 = ((function (G__14214,attendee_name,attendee_id,vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324){
return (function (){
var member_list = document.getElementById("member-list");
var member_list_item = document.getElementById([cljs.core.str("member"),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attendee_id) : cljs.core.deref.call(null,attendee_id)))].join(''));
var mli_top = member_list_item.offsetTop;
var G__14217_14253 = hoplon.app_pages._index_DOT_html.selected_member;
var G__14218_14254 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attendee) : cljs.core.deref.call(null,attendee));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14217_14253,G__14218_14254) : cljs.core.reset_BANG_.call(null,G__14217_14253,G__14218_14254));

(member_list["scrollTop"] = (mli_top - (64)));

return close_date_dialog();
});})(G__14214,attendee_name,attendee_id,vec__14209,attendee,G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
;
var G__14216 = attendee_name;
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(G__14214,G__14215,G__14216) : hoplon.core.li.call(null,G__14214,G__14215,G__14216));
});})(G__14206,G__14207,title,attendees,attendee_count,member_count,attendance_percent,formatted_attendance_percent,close_date_dialog,G__13324))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$3(G__14206,G__14207,G__14208) : hoplon.core.ul.call(null,G__14206,G__14207,G__14208));
})()], 0));
})();
var G__13326 = (function (){var close_about_dialog = ((function (G__13324,G__13325){
return (function (){
return hoplon.app_pages._index_DOT_html.toggle_dialog(hoplon.app_pages._index_DOT_html.show_about_dialog);
});})(G__13324,G__13325))
;
return hoplon.app_pages._index_DOT_html.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$open_QMARK_,hoplon.app_pages._index_DOT_html.show_about_dialog,cljs.core.cst$kw$close,close_about_dialog,(function (){var G__14219 = cljs.core.cst$kw$class;
var G__14220 = "toolbar accented";
var G__14221 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"toolbar-item","About our data") : hoplon.core.h1.call(null,cljs.core.cst$kw$class,"toolbar-item","About our data"));
var G__14222 = hoplon.app_pages._index_DOT_html.spacer();
var G__14223 = (function (){var G__14231 = cljs.core.cst$kw$class;
var G__14232 = "toolbar-item";
var G__14233 = (function (){var G__14234 = cljs.core.cst$kw$class;
var G__14235 = "toolbar-icon";
var G__14236 = cljs.core.cst$kw$css;
var G__14237 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"18px"], null);
var G__14238 = cljs.core.cst$kw$click;
var G__14239 = close_about_dialog;
var G__14240 = "\u2715";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14234,G__14235,G__14236,G__14237,G__14238,G__14239,G__14240) : hoplon.core.div.call(null,G__14234,G__14235,G__14236,G__14237,G__14238,G__14239,G__14240));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14231,G__14232,G__14233) : hoplon.core.div.call(null,G__14231,G__14232,G__14233));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14219,G__14220,G__14221,G__14222,G__14223) : hoplon.core.div.call(null,G__14219,G__14220,G__14221,G__14222,G__14223));
})(),(function (){var G__14241 = cljs.core.cst$kw$class;
var G__14242 = "panel-content scrollable padded";
var G__14243 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Our data is accurate as of Nov. 14, 2012") : hoplon.core.strong.call(null,"Our data is accurate as of Nov. 14, 2012"));
var G__14244 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Where do we get our data?") : hoplon.core.h2.call(null,"Where do we get our data?"));
var G__14245 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Most of the publicly available congress journals contain roll call sections. This is where we get our data. There are also attendance sections, however, which we have yet to finish importing.") : hoplon.core.p.call(null,"Most of the publicly available congress journals contain roll call sections. This is where we get our data. There are also attendance sections, however, which we have yet to finish importing."));
var G__14246 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Each roll call section can be pinpointed to a specific date, while attendance sections are tied to entire sessions/journals, which could span multiple days.") : hoplon.core.p.call(null,"Each roll call section can be pinpointed to a specific date, while attendance sections are tied to entire sessions/journals, which could span multiple days."));
var G__14247 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("What does this mean?") : hoplon.core.h2.call(null,"What does this mean?"));
var G__14248 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Technically, absence in our records is not equivalent to absence for the entire day of the corresponding roll call record. What it means is that during the time of the roll call, the person in question was not present. In general, quorum is dependent on the roll.") : hoplon.core.p.call(null,"Technically, absence in our records is not equivalent to absence for the entire day of the corresponding roll call record. What it means is that during the time of the roll call, the person in question was not present. In general, quorum is dependent on the roll."));
var G__14249 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("It is entirely possible that the person arrived late after the roll call, but as we cannot verify this at the moment, we currently do not make the distinction.") : hoplon.core.p.call(null,"It is entirely possible that the person arrived late after the roll call, but as we cannot verify this at the moment, we currently do not make the distinction."));
var G__14250 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"http://rollcall.ph/api/dump","Take a look at our raw data.") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://rollcall.ph/api/dump","Take a look at our raw data."));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__14241,G__14242,G__14243,G__14244,G__14245,G__14246,G__14247,G__14248,G__14249,G__14250) : hoplon.core.div.call(null,G__14241,G__14242,G__14243,G__14244,G__14245,G__14246,G__14247,G__14248,G__14249,G__14250));
})()], 0));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__13324,G__13325,G__13326) : hoplon.core.body.call(null,G__13324,G__13325,G__13326));
})()], 0));
