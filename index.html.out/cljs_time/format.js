// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__12201_SHARP_){
return p1__12201_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__12202_SHARP_){
return (p1__12202_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__12203_SHARP_){
return p1__12203_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__12204_SHARP_){
var hr = cljs.core.mod(p1__12204_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__12205_SHARP_){
if((p1__12205_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__12206_SHARP_){
if((p1__12206_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__12207_SHARP_){
return p1__12207_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__12208_SHARP_){
return p1__12208_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__12209_SHARP_){
return p1__12209_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__12210_SHARP_){
return p1__12210_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__12211_SHARP_){
return p1__12211_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__12212_SHARP_){
return p1__12212_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__12213_SHARP_){
return p1__12213_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12225_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__12225_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12229_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((function (){var G__12230 = (doy(p1__12229_SHARP_) / (7));
return Math.ceil(G__12230);
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12220_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__12231 = (M(p1__12220_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__12231) : cljs_time.format.months.call(null,G__12231));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12227_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__12227_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12228_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__12228_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12216_SHARP_){
var G__12232 = dow(p1__12216_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__12232) : cljs_time.format.days.call(null,G__12232));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12223_SHARP_){
return cljs.core.mod(y(p1__12223_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12226_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__12226_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12219_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__12219_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12217_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__12233 = dow(p1__12217_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__12233) : cljs_time.format.days.call(null,G__12233));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12214_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__12214_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12224_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__12224_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12215_SHARP_){
var d__$1 = d(p1__12215_SHARP_);
return [cljs.core.str(d__$1),cljs.core.str((function (){var G__12234 = d__$1;
switch (G__12234) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12218_SHARP_){
var G__12235 = dow(p1__12218_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__12235) : cljs_time.format.days.call(null,G__12235));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12222_SHARP_){
return cljs.core.mod(y(p1__12222_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__12221_SHARP_){
var G__12236 = (M(p1__12221_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__12236) : cljs_time.format.months.call(null,G__12236));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__12247 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12247,(3),null);
if(cljs.core.truth_((function (){var and__4974__auto__ = sign;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = hh;
if(cljs.core.truth_(and__4974__auto____$1)){
return mm;
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
var sign_12255__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__12248_12256 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_12255__$1,vec__12247,_,sign,hh,mm){
return (function (p1__12238_SHARP_){
return parseInt(p1__12238_SHARP_,(10));
});})(sign_12255__$1,vec__12247,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_12257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12248_12256,(0),null);
var mm_12258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12248_12256,(1),null);
var adjusted_12259 = (function (){var G__12251 = (function (){var G__12253 = d;
var G__12254 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_12257__$1);
return (sign_12255__$1.cljs$core$IFn$_invoke$arity$2 ? sign_12255__$1.cljs$core$IFn$_invoke$arity$2(G__12253,G__12254) : sign_12255__$1.call(null,G__12253,G__12254));
})();
var G__12252 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_12258__$1);
return (sign_12255__$1.cljs$core$IFn$_invoke$arity$2 ? sign_12255__$1.cljs$core$IFn$_invoke$arity$2(G__12251,G__12252) : sign_12255__$1.call(null,G__12251,G__12252));
})();
d.setTime(adjusted_12259.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__12260_SHARP_){
return parseInt(p1__12260_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__12261_SHARP_,p2__12262_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12261_SHARP_,kw,parse_int(p2__12262_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.cst$kw$years);
var d = assoc_fn(cljs.core.cst$kw$days);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__12263_SHARP_,p2__12264_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12263_SHARP_,cljs.core.cst$kw$months,(parse_int(p2__12264_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__12265_SHARP_,p2__12266_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12265_SHARP_,cljs.core.cst$kw$hours,cljs.core.mod(parse_int(p2__12266_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__12273,x){
var map__12274 = p__12273;
var map__12274__$1 = ((((!((map__12274 == null)))?((((map__12274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12274):map__12274);
var date = map__12274__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12274__$1,cljs.core.cst$kw$hours);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.cst$kw$hours,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.cst$kw$hours);
var m = assoc_fn(cljs.core.cst$kw$minutes);
var s = assoc_fn(cljs.core.cst$kw$seconds);
var S = assoc_fn(cljs.core.cst$kw$millis);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__12268_SHARP_,p2__12267_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(p2__12267_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__12268_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__12269_SHARP_,p2__12270_SHARP_){
return M(p1__12269_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,p2__12270_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__12276__delegate = function (x,args){
return x;
};
var G__12276 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__12277__i = 0, G__12277__a = new Array(arguments.length -  1);
while (G__12277__i < G__12277__a.length) {G__12277__a[G__12277__i] = arguments[G__12277__i + 1]; ++G__12277__i;}
  args = new cljs.core.IndexedSeq(G__12277__a,0);
} 
return G__12276__delegate.call(this,x,args);};
G__12276.cljs$lang$maxFixedArity = 1;
G__12276.cljs$lang$applyTo = (function (arglist__12278){
var x = cljs.core.first(arglist__12278);
var args = cljs.core.rest(arglist__12278);
return G__12276__delegate(x,args);
});
G__12276.cljs$core$IFn$_invoke$arity$variadic = G__12276__delegate;
return G__12276;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__12271_SHARP_,p2__12272_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12271_SHARP_,cljs.core.cst$kw$time_DASH_zone,p2__12272_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(function (p1__12279_SHARP_,p2__12280_SHARP_){
return p1__12279_SHARP_.setYear(p2__12280_SHARP_);
}),cljs.core.cst$kw$months,(function (p1__12281_SHARP_,p2__12282_SHARP_){
return p1__12281_SHARP_.setMonth(p2__12282_SHARP_);
}),cljs.core.cst$kw$days,(function (p1__12283_SHARP_,p2__12284_SHARP_){
return p1__12283_SHARP_.setDate(p2__12284_SHARP_);
}),cljs.core.cst$kw$hours,(function (p1__12285_SHARP_,p2__12286_SHARP_){
return p1__12285_SHARP_.setHours(p2__12286_SHARP_);
}),cljs.core.cst$kw$minutes,(function (p1__12287_SHARP_,p2__12288_SHARP_){
return p1__12287_SHARP_.setMinutes(p2__12288_SHARP_);
}),cljs.core.cst$kw$seconds,(function (p1__12289_SHARP_,p2__12290_SHARP_){
return p1__12289_SHARP_.setSeconds(p2__12290_SHARP_);
}),cljs.core.cst$kw$millis,(function (p1__12291_SHARP_,p2__12292_SHARP_){
return p1__12291_SHARP_.setMilliseconds(p2__12292_SHARP_);
}),cljs.core.cst$kw$time_DASH_zone,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern([cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern(cljs_time.format.old_string_replace(cljs_time.format.old_string_replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__12293_SHARP_){
return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__12293_SHARP_) : cljs_time.format.date_parsers.call(null,p1__12293_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__12307__delegate = function (date,p__12301){
var vec__12302 = p__12301;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12302,(0),null);
var a = (function (){var G__12303 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12303) : cljs.core.atom.call(null,G__12303));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace(fmts,/'([^']+)'/,((function (a,vec__12302,formatter_overrides){
return (function (x,s){
if((cljs.core.seq(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.last(x)))){
var map__12304 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var map__12304__$1 = ((((!((map__12304 == null)))?((((map__12304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12304):map__12304);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12304__$1,cljs.core.cst$kw$c);
var k = [cljs.core.str("&&&&"),cljs.core.str(c)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace,k], null),cljs.core.constantly(s));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c], null),cljs.core.inc);

return k;
} else {
return x;
}
});})(a,vec__12302,formatter_overrides))
),cljs.core.re_pattern((function (){var G__12306 = cljs_time.format.date_format_pattern.source;
var G__12306__$1 = (cljs.core.truth_(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a))))?[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)))))),cljs.core.str(")|"),cljs.core.str(G__12306)].join(''):G__12306);
return G__12306__$1;
})()),((function (a,vec__12302,formatter_overrides){
return (function (p1__12294_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([formatters,formatter_overrides,cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)))], 0)).call(null,p1__12294_SHARP_).call(null,date);
});})(a,vec__12302,formatter_overrides))
], null);
};
var G__12307 = function (date,var_args){
var p__12301 = null;
if (arguments.length > 1) {
var G__12308__i = 0, G__12308__a = new Array(arguments.length -  1);
while (G__12308__i < G__12308__a.length) {G__12308__a[G__12308__i] = arguments[G__12308__i + 1]; ++G__12308__i;}
  p__12301 = new cljs.core.IndexedSeq(G__12308__a,0);
} 
return G__12307__delegate.call(this,date,p__12301);};
G__12307.cljs$lang$maxFixedArity = 1;
G__12307.cljs$lang$applyTo = (function (arglist__12309){
var date = cljs.core.first(arglist__12309);
var p__12301 = cljs.core.rest(arglist__12309);
return G__12307__delegate(date,p__12301);
});
G__12307.cljs$core$IFn$_invoke$arity$variadic = G__12307__delegate;
return G__12307;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var args12310 = [];
var len__6044__auto___12313 = arguments.length;
var i__6045__auto___12314 = (0);
while(true){
if((i__6045__auto___12314 < len__6044__auto___12313)){
args12310.push((arguments[i__6045__auto___12314]));

var G__12315 = (i__6045__auto___12314 + (1));
i__6045__auto___12314 = G__12315;
continue;
} else {
}
break;
}

var G__12312 = args12310.length;
switch (G__12312) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12310.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;
cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$not_DASH_implemented,cljs.core.cst$kw$message,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
if(typeof cljs_time.format.date_map !== 'undefined'){
} else {
cljs_time.format.date_map = (function (){var method_table__5899__auto__ = (function (){var G__12317 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12317) : cljs.core.atom.call(null,G__12317));
})();
var prefer_table__5900__auto__ = (function (){var G__12318 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12318) : cljs.core.atom.call(null,G__12318));
})();
var method_cache__5901__auto__ = (function (){var G__12319 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12319) : cljs.core.atom.call(null,G__12319));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__12320 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12320) : cljs.core.atom.call(null,G__12320));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.format","date-map"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0),cljs.core.cst$kw$time_DASH_zone,null], null);
}));
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor,p__12323,s){
var map__12330 = p__12323;
var map__12330__$1 = ((((!((map__12330 == null)))?((((map__12330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12330):map__12330);
var fmt = map__12330__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12330__$1,cljs.core.cst$kw$format_DASH_str);
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12330__$1,cljs.core.cst$kw$default_DASH_year);
if(cljs.core.seq(s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$s)], 0)))].join('')));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year){
return (function (p__12332){
var vec__12333 = p__12332;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12333,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12333,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(parse_fn,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year))
,(parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(s) : parse_fn.call(null,s))));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(d) : cljs_time.format.date_map.call(null,d)),cljs.core.cst$kw$years,(function (){var or__4986__auto__ = default_year;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year){
return (function (p1__12321_SHARP_,p2__12322_SHARP_){
return (p1__12321_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__12321_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__12322_SHARP_) : p1__12321_SHARP_.call(null,d,p2__12322_SHARP_));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year){
return (function (date,p__12334){
var vec__12335 = p__12334;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12335,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12335,(1),null);
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__12330,map__12330__$1,fmt,format_str,default_year))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$parser_DASH_no_DASH_match], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var args12336 = [];
var len__6044__auto___12349 = arguments.length;
var i__6045__auto___12350 = (0);
while(true){
if((i__6045__auto___12350 < len__6044__auto___12349)){
args12336.push((arguments[i__6045__auto___12350]));

var G__12351 = (i__6045__auto___12350 + (1));
i__6045__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var G__12338 = args12336.length;
switch (G__12338) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12336.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__5758__auto__ = (function cljs_time$format$iter__12339(s__12340){
return (new cljs.core.LazySeq(null,(function (){
var s__12340__$1 = s__12340;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12340__$1);
if(temp__4425__auto__){
var s__12340__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12340__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__12340__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__12342 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__12341 = (0);
while(true){
if((i__12341 < size__5757__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__12341);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12347){var _ = e12347;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__12342,d);

var G__12353 = (i__12341 + (1));
i__12341 = G__12353;
continue;
} else {
var G__12354 = (i__12341 + (1));
i__12341 = G__12354;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12342),cljs_time$format$iter__12339(cljs.core.chunk_rest(s__12340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12342),null);
}
} else {
var f = cljs.core.first(s__12340__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12348){var _ = e12348;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__12339(cljs.core.rest(s__12340__$2)));
} else {
var G__12355 = cljs.core.rest(s__12340__$2);
s__12340__$1 = G__12355;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;
/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var args12356 = [];
var len__6044__auto___12369 = arguments.length;
var i__6045__auto___12370 = (0);
while(true){
if((i__6045__auto___12370 < len__6044__auto___12369)){
args12356.push((arguments[i__6045__auto___12370]));

var G__12371 = (i__6045__auto___12370 + (1));
i__6045__auto___12370 = G__12371;
continue;
} else {
}
break;
}

var G__12358 = args12356.length;
switch (G__12358) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12356.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__5758__auto__ = (function cljs_time$format$iter__12359(s__12360){
return (new cljs.core.LazySeq(null,(function (){
var s__12360__$1 = s__12360;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12360__$1);
if(temp__4425__auto__){
var s__12360__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12360__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__12360__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__12362 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__12361 = (0);
while(true){
if((i__12361 < size__5757__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__12361);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12367){if((e12367 instanceof Error)){
var _ = e12367;
return null;
} else {
throw e12367;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__12362,d);

var G__12373 = (i__12361 + (1));
i__12361 = G__12373;
continue;
} else {
var G__12374 = (i__12361 + (1));
i__12361 = G__12374;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12362),cljs_time$format$iter__12359(cljs.core.chunk_rest(s__12360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12362),null);
}
} else {
var f = cljs.core.first(s__12360__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12368){if((e12368 instanceof Error)){
var _ = e12368;
return null;
} else {
throw e12368;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__12359(cljs.core.rest(s__12360__$2)));
} else {
var G__12375 = cljs.core.rest(s__12360__$2);
s__12360__$1 = G__12375;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;
/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var args12376 = [];
var len__6044__auto___12389 = arguments.length;
var i__6045__auto___12390 = (0);
while(true){
if((i__6045__auto___12390 < len__6044__auto___12389)){
args12376.push((arguments[i__6045__auto___12390]));

var G__12391 = (i__6045__auto___12390 + (1));
i__6045__auto___12390 = G__12391;
continue;
} else {
}
break;
}

var G__12378 = args12376.length;
switch (G__12378) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12376.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__5758__auto__ = (function cljs_time$format$iter__12379(s__12380){
return (new cljs.core.LazySeq(null,(function (){
var s__12380__$1 = s__12380;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12380__$1);
if(temp__4425__auto__){
var s__12380__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12380__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__12380__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__12382 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__12381 = (0);
while(true){
if((i__12381 < size__5757__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__12381);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12387){if((e12387 instanceof Error)){
var _ = e12387;
return null;
} else {
throw e12387;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__12382,d);

var G__12393 = (i__12381 + (1));
i__12381 = G__12393;
continue;
} else {
var G__12394 = (i__12381 + (1));
i__12381 = G__12394;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12382),cljs_time$format$iter__12379(cljs.core.chunk_rest(s__12380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12382),null);
}
} else {
var f = cljs.core.first(s__12380__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12388){if((e12388 instanceof Error)){
var _ = e12388;
return null;
} else {
throw e12388;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__12379(cljs.core.rest(s__12380__$2)));
} else {
var G__12395 = cljs.core.rest(s__12380__$2);
s__12380__$1 = G__12395;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;
/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__12396,dt){
var map__12399 = p__12396;
var map__12399__$1 = ((((!((map__12399 == null)))?((((map__12399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12399):map__12399);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$dt))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$goog$date$DateTime,cljs.core.cst$sym$dt)], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt));
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__12401,dt){
var map__12404 = p__12401;
var map__12404__$1 = ((((!((map__12404 == null)))?((((map__12404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12404):map__12404);
var fmt = map__12404__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$dt))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$goog$date$DateTime,cljs.core.cst$sym$dt)], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__12406,dt){
var map__12409 = p__12406;
var map__12409__$1 = ((((!((map__12409 == null)))?((((map__12409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12409):map__12409);
var fmt = map__12409__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12409__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12409__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$dt))], 0)))].join('')));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$goog$date$Date,cljs.core.cst$sym$dt)], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var args12411 = [];
var len__6044__auto___12418 = arguments.length;
var i__6045__auto___12419 = (0);
while(true){
if((i__6045__auto___12419 < len__6044__auto___12418)){
args12411.push((arguments[i__6045__auto___12419]));

var G__12420 = (i__6045__auto___12419 + (1));
i__6045__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var G__12413 = args12411.length;
switch (G__12413) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12411.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__12414 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__12415 = null;
var count__12416 = (0);
var i__12417 = (0);
while(true){
if((i__12417 < count__12416)){
var p = chunk__12415.cljs$core$IIndexed$_nth$arity$2(null,i__12417);
var fmt_12422 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_12422,dt)], 0))], 0));

var G__12423 = seq__12414;
var G__12424 = chunk__12415;
var G__12425 = count__12416;
var G__12426 = (i__12417 + (1));
seq__12414 = G__12423;
chunk__12415 = G__12424;
count__12416 = G__12425;
i__12417 = G__12426;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12414);
if(temp__4425__auto__){
var seq__12414__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12414__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__12414__$1);
var G__12427 = cljs.core.chunk_rest(seq__12414__$1);
var G__12428 = c__5789__auto__;
var G__12429 = cljs.core.count(c__5789__auto__);
var G__12430 = (0);
seq__12414 = G__12427;
chunk__12415 = G__12428;
count__12416 = G__12429;
i__12417 = G__12430;
continue;
} else {
var p = cljs.core.first(seq__12414__$1);
var fmt_12431 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_12431,dt)], 0))], 0));

var G__12432 = cljs.core.next(seq__12414__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__12414 = G__12432;
chunk__12415 = G__12433;
count__12416 = G__12434;
i__12417 = G__12435;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__5641__auto__ = (((instant == null))?null:instant);
var m__5642__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__5642__auto__.call(null,instant));
} else {
var m__5642__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__5642__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__12437 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__12437);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__12438 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);
switch (G__12438) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)))].join('')));

}
});
