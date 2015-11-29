// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.i18n.TimeZone');
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.year[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.month[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.day[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.hour[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.minute[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.sec[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.second[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.milli[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5642__auto__.call(null,this$,that));
} else {
var m__5642__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5642__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5642__auto__.call(null,this$,that));
} else {
var m__5642__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5642__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.plus_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5642__auto__.call(null,this$,period));
} else {
var m__5642__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5642__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.minus_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5642__auto__.call(null,this$,period));
} else {
var m__5642__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5642__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_days[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_months[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (cljs_time.core.in_years[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto__.call(null,this$));
} else {
var m__5642__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5642__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5600__auto__,k__5601__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5600__auto____$1,k__5601__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k11887,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__11889 = (((k11887 instanceof cljs.core.Keyword))?k11887.fqn:null);
switch (G__11889) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11887,else__5603__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5614__auto__,writer__5615__auto__,opts__5616__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
var pr_pair__5617__auto__ = ((function (this__5614__auto____$1){
return (function (keyval__5618__auto__){
return cljs.core.pr_sequential_writer(writer__5615__auto__,cljs.core.pr_writer,""," ","",opts__5616__auto__,keyval__5618__auto__);
});})(this__5614__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5615__auto__,pr_pair__5617__auto__,"#cljs-time.core.Interval{",", ","}",opts__5616__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11886){
var self__ = this;
var G__11886__$1 = this;
return (new cljs.core.RecordIter((0),G__11886__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5594__auto__){
var self__ = this;
var this__5594__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5604__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5595__auto__){
var self__ = this;
var this__5595__auto____$1 = this;
var h__5421__auto__ = self__.__hash;
if(!((h__5421__auto__ == null))){
return h__5421__auto__;
} else {
var h__5421__auto____$1 = cljs.core.hash_imap(this__5595__auto____$1);
self__.__hash = h__5421__auto____$1;

return h__5421__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5596__auto__,other__5597__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = other__5597__auto__;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (this__5596__auto____$1.constructor === other__5597__auto__.constructor);
if(and__4974__auto____$1){
return cljs.core.equiv_map(this__5596__auto____$1,other__5597__auto__);
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5609__auto__,k__5610__auto__){
var self__ = this;
var this__5609__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null), null),k__5610__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5609__auto____$1),self__.__meta),k__5610__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5610__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__11886){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__11890 = cljs.core.keyword_identical_QMARK_;
var expr__11891 = k__5608__auto__;
if(cljs.core.truth_((pred__11890.cljs$core$IFn$_invoke$arity$2 ? pred__11890.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,expr__11891) : pred__11890.call(null,cljs.core.cst$kw$start,expr__11891)))){
return (new cljs_time.core.Interval(G__11886,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11890.cljs$core$IFn$_invoke$arity$2 ? pred__11890.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,expr__11891) : pred__11890.call(null,cljs.core.cst$kw$end,expr__11891)))){
return (new cljs_time.core.Interval(self__.start,G__11886,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__11886),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__11886){
var self__ = this;
var this__5599__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__11886,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5605__auto__,entry__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5606__auto__)){
return cljs.core._assoc(this__5605__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5605__auto____$1,entry__5606__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__5634__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__5634__auto__,writer__5635__auto__){
return cljs.core._write(writer__5635__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__11888){
return (new cljs_time.core.Interval(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__11888),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__11888),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11888,cljs.core.cst$kw$start,cljs.core.array_seq([cljs.core.cst$kw$end], 0)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.cst$sym$start),cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.cst$sym$end))], 0)))].join('')));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5600__auto__,k__5601__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5600__auto____$1,k__5601__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k11895,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__11897 = (((k11895 instanceof cljs.core.Keyword))?k11895.fqn:null);
switch (G__11897) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11895,else__5603__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5614__auto__,writer__5615__auto__,opts__5616__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
var pr_pair__5617__auto__ = ((function (this__5614__auto____$1){
return (function (keyval__5618__auto__){
return cljs.core.pr_sequential_writer(writer__5615__auto__,cljs.core.pr_writer,""," ","",opts__5616__auto__,keyval__5618__auto__);
});})(this__5614__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5615__auto__,pr_pair__5617__auto__,"#cljs-time.core.Period{",", ","}",opts__5616__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11894){
var self__ = this;
var G__11894__$1 = this;
return (new cljs.core.RecordIter((0),G__11894__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5594__auto__){
var self__ = this;
var this__5594__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5604__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5595__auto__){
var self__ = this;
var this__5595__auto____$1 = this;
var h__5421__auto__ = self__.__hash;
if(!((h__5421__auto__ == null))){
return h__5421__auto__;
} else {
var h__5421__auto____$1 = cljs.core.hash_imap(this__5595__auto____$1);
self__.__hash = h__5421__auto____$1;

return h__5421__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5596__auto__,other__5597__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = other__5597__auto__;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (this__5596__auto____$1.constructor === other__5597__auto__.constructor);
if(and__4974__auto____$1){
return cljs.core.equiv_map(this__5596__auto____$1,other__5597__auto__);
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5609__auto__,k__5610__auto__){
var self__ = this;
var this__5609__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$seconds,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$minutes,null,cljs.core.cst$kw$weeks,null,cljs.core.cst$kw$millis,null], null), null),k__5610__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5609__auto____$1),self__.__meta),k__5610__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5610__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__11894){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__11898 = cljs.core.keyword_identical_QMARK_;
var expr__11899 = k__5608__auto__;
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$years,expr__11899)))){
return (new cljs_time.core.Period(G__11894,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$months,expr__11899)))){
return (new cljs_time.core.Period(self__.years,G__11894,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$weeks,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,G__11894,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$days,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__11894,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$hours,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__11894,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$minutes,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__11894,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$seconds,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__11894,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11898.cljs$core$IFn$_invoke$arity$2 ? pred__11898.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,expr__11899) : pred__11898.call(null,cljs.core.cst$kw$millis,expr__11899)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__11894,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__11894),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__11894){
var self__ = this;
var this__5599__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__11894,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5605__auto__,entry__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5606__auto__)){
return cljs.core._assoc(this__5605__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5605__auto____$1,entry__5606__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$years,cljs.core.cst$sym$months,cljs.core.cst$sym$weeks,cljs.core.cst$sym$days,cljs.core.cst$sym$hours,cljs.core.cst$sym$minutes,cljs.core.cst$sym$seconds,cljs.core.cst$sym$millis], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__5634__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__5634__auto__,writer__5635__auto__){
return cljs.core._write(writer__5635__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__11896){
return (new cljs_time.core.Period(cljs.core.cst$kw$years.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$months.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$weeks.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$days.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__11896),cljs.core.cst$kw$millis.cljs$core$IFn$_invoke$arity$1(G__11896),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11896,cljs.core.cst$kw$years,cljs.core.array_seq([cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], 0)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args11902 = [];
var len__6044__auto___11908 = arguments.length;
var i__6045__auto___11909 = (0);
while(true){
if((i__6045__auto___11909 < len__6044__auto___11908)){
args11902.push((arguments[i__6045__auto___11909]));

var G__11910 = (i__6045__auto___11909 + (1));
i__6045__auto___11909 = G__11910;
continue;
} else {
}
break;
}

var G__11907 = args11902.length;
switch (G__11907) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args11902.slice((2)),(0)));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq11903){
var G__11904 = cljs.core.first(seq11903);
var seq11903__$1 = cljs.core.next(seq11903);
var G__11905 = cljs.core.first(seq11903__$1);
var seq11903__$2 = cljs.core.next(seq11903__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__11904,G__11905,seq11903__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__11924_11940 = date__$1;
var G__11925_11941 = (function (){var G__11926 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(date__$1) : f.call(null,date__$1));
var G__11927 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__11926,G__11927) : op.call(null,G__11926,G__11927));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__11924_11940,G__11925_11941) : set_fn.call(null,G__11924_11940,G__11925_11941));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$millis,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__11912_SHARP_,p2__11913_SHARP_){
return p1__11912_SHARP_.setMilliseconds(p2__11913_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$seconds,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__11914_SHARP_,p2__11915_SHARP_){
return p1__11914_SHARP_.setSeconds(p2__11915_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$minutes,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__11916_SHARP_,p2__11917_SHARP_){
return p1__11916_SHARP_.setMinutes(p2__11917_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$hours,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__11918_SHARP_,p2__11919_SHARP_){
return p1__11918_SHARP_.setHours(p2__11919_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$days,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__11920_SHARP_,p2__11921_SHARP_){
return p1__11920_SHARP_.setDate(p2__11921_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$weeks,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__11928 = cljs_time.core.day(date__$1);
var G__11929 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__11928,G__11929) : op.call(null,G__11928,G__11929));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.cst$kw$months,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_11942 = (function (){var G__11930 = cljs_time.core.month(date__$1);
var G__11931 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__11930,G__11931) : op.call(null,G__11930,G__11931));
})();
var y_11943 = cljs_time.core.year(date__$1);
var y_11944__$1 = (((m_11942 > (0)))?(y_11943 + (((m_11942 - (1)) / (12)) | (0))):(((m_11942 < (0)))?(y_11943 + ((((m_11942 - (1)) / (12)) | (0)) - (1))):(((m_11942 === (0)))?(y_11943 - (1)):null)));
var m_11945__$1 = (((m_11942 > (12)))?(function (){var m__$1 = cljs.core.mod(m_11942,(12));
if((m__$1 === (0))){
return (12);
} else {
return m__$1;
}
})():(((m_11942 < (1)))?(m_11942 + (12)):m_11942
));
var ldom_11946 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_11944__$1,(m_11945__$1 - (1)),(1)))));
if((ldom_11946 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_11946);
} else {
}

date__$1.setMonth((m_11945__$1 - (1)));

date__$1.setYear(y_11944__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.cst$kw$years,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__4974__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (function (){var G__11934 = (2);
var G__11935 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__11934,G__11935) : cljs_time.core._EQ_.call(null,G__11934,G__11935));
})();
if(cljs.core.truth_(and__4974__auto____$1)){
var G__11936 = (29);
var G__11937 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__11936,G__11937) : cljs_time.core._EQ_.call(null,G__11936,G__11937));
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__11938 = cljs_time.core.year(date__$1);
var G__11939 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__11938,G__11939) : op.call(null,G__11938,G__11939));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__11949){
var vec__11950 = p__11949;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(1),null);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k) : cljs_time.core.periods.call(null,k)).call(null,operator,d,v);
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});
cljs_time.core.utc = (function (){var G__11951 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"UTC",cljs.core.cst$kw$std_offset,(0),cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.cst$kw$transitions,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__11951);
})();
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return Date.now();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return (Date.now() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__11953 = (new goog.date.UtcDateTime());
G__11953.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__11953;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__11955 = (new goog.date.DateTime());
G__11955.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__11955;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__11957 = datetime__$1;
G__11957.setHours((0));

G__11957.setMinutes((0));

G__11957.setSeconds((0));

G__11957.setMilliseconds((0));

return G__11957;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__11959 = (new goog.date.UtcDateTime());
G__11959.setTime((0));

return G__11959;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args11960 = [];
var len__6044__auto___11963 = arguments.length;
var i__6045__auto___11964 = (0);
while(true){
if((i__6045__auto___11964 < len__6044__auto___11963)){
args11960.push((arguments[i__6045__auto___11964]));

var G__11965 = (i__6045__auto___11964 + (1));
i__6045__auto___11964 = G__11965;
continue;
} else {
}
break;
}

var G__11962 = args11960.length;
switch (G__11962) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11960.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args11967 = [];
var len__6044__auto___11970 = arguments.length;
var i__6045__auto___11971 = (0);
while(true){
if((i__6045__auto___11971 < len__6044__auto___11970)){
args11967.push((arguments[i__6045__auto___11971]));

var G__11972 = (i__6045__auto___11971 + (1));
i__6045__auto___11971 = G__11972;
continue;
} else {
}
break;
}

var G__11969 = args11967.length;
switch (G__11969) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11967.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args11974 = [];
var len__6044__auto___11977 = arguments.length;
var i__6045__auto___11978 = (0);
while(true){
if((i__6045__auto___11978 < len__6044__auto___11977)){
args11974.push((arguments[i__6045__auto___11978]));

var G__11979 = (i__6045__auto___11978 + (1));
i__6045__auto___11978 = G__11979;
continue;
} else {
}
break;
}

var G__11976 = args11974.length;
switch (G__11976) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11974.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 *   local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__11982 = (new goog.date.Date());
G__11982.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__11982;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args11983 = [];
var len__6044__auto___11986 = arguments.length;
var i__6045__auto___11987 = (0);
while(true){
if((i__6045__auto___11987 < len__6044__auto___11986)){
args11983.push((arguments[i__6045__auto___11987]));

var G__11988 = (i__6045__auto___11987 + (1));
i__6045__auto___11987 = G__11988;
continue;
} else {
}
break;
}

var G__11985 = args11983.length;
switch (G__11985) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11983.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.cst$kw$_DASH_:cljs.core.cst$kw$_PLUS_);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,tz_name,cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__4986__auto__ = minutes;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.cst$kw$rules,"-",cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$core_SLASH_time_DASH_zone], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;
/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__11991 = (new goog.date.DateTime());
G__11991.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__11991;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args11992 = [];
var len__6044__auto___11995 = arguments.length;
var i__6045__auto___11996 = (0);
while(true){
if((i__6045__auto___11996 < len__6044__auto___11995)){
args11992.push((arguments[i__6045__auto___11996]));

var G__11997 = (i__6045__auto___11996 + (1));
i__6045__auto___11996 = G__11997;
continue;
} else {
}
break;
}

var G__11994 = args11992.length;
switch (G__11994) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11992.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args11999 = [];
var len__6044__auto___12002 = arguments.length;
var i__6045__auto___12003 = (0);
while(true){
if((i__6045__auto___12003 < len__6044__auto___12002)){
args11999.push((arguments[i__6045__auto___12003]));

var G__12004 = (i__6045__auto___12003 + (1));
i__6045__auto___12003 = G__12004;
continue;
} else {
}
break;
}

var G__12001 = args11999.length;
switch (G__12001) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11999.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args12006 = [];
var len__6044__auto___12009 = arguments.length;
var i__6045__auto___12010 = (0);
while(true){
if((i__6045__auto___12010 < len__6044__auto___12009)){
args12006.push((arguments[i__6045__auto___12010]));

var G__12011 = (i__6045__auto___12010 + (1));
i__6045__auto___12010 = G__12011;
continue;
} else {
}
break;
}

var G__12008 = args12006.length;
switch (G__12008) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12006.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args12013 = [];
var len__6044__auto___12016 = arguments.length;
var i__6045__auto___12017 = (0);
while(true){
if((i__6045__auto___12017 < len__6044__auto___12016)){
args12013.push((arguments[i__6045__auto___12017]));

var G__12018 = (i__6045__auto___12017 + (1));
i__6045__auto___12017 = G__12018;
continue;
} else {
}
break;
}

var G__12015 = args12013.length;
switch (G__12015) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12013.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args12020 = [];
var len__6044__auto___12023 = arguments.length;
var i__6045__auto___12024 = (0);
while(true){
if((i__6045__auto___12024 < len__6044__auto___12023)){
args12020.push((arguments[i__6045__auto___12024]));

var G__12025 = (i__6045__auto___12024 + (1));
i__6045__auto___12024 = G__12025;
continue;
} else {
}
break;
}

var G__12022 = args12020.length;
switch (G__12022) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12020.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args12027 = [];
var len__6044__auto___12030 = arguments.length;
var i__6045__auto___12031 = (0);
while(true){
if((i__6045__auto___12031 < len__6044__auto___12030)){
args12027.push((arguments[i__6045__auto___12031]));

var G__12032 = (i__6045__auto___12031 + (1));
i__6045__auto___12031 = G__12032;
continue;
} else {
}
break;
}

var G__12029 = args12027.length;
switch (G__12029) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12027.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args12034 = [];
var len__6044__auto___12037 = arguments.length;
var i__6045__auto___12038 = (0);
while(true){
if((i__6045__auto___12038 < len__6044__auto___12037)){
args12034.push((arguments[i__6045__auto___12038]));

var G__12039 = (i__6045__auto___12038 + (1));
i__6045__auto___12038 = G__12039;
continue;
} else {
}
break;
}

var G__12036 = args12034.length;
switch (G__12036) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12034.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args12041 = [];
var len__6044__auto___12044 = arguments.length;
var i__6045__auto___12045 = (0);
while(true){
if((i__6045__auto___12045 < len__6044__auto___12044)){
args12041.push((arguments[i__6045__auto___12045]));

var G__12046 = (i__6045__auto___12045 + (1));
i__6045__auto___12045 = G__12046;
continue;
} else {
}
break;
}

var G__12043 = args12041.length;
switch (G__12043) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12041.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;
/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args12048 = [];
var len__6044__auto___12054 = arguments.length;
var i__6045__auto___12055 = (0);
while(true){
if((i__6045__auto___12055 < len__6044__auto___12054)){
args12048.push((arguments[i__6045__auto___12055]));

var G__12056 = (i__6045__auto___12055 + (1));
i__6045__auto___12055 = G__12056;
continue;
} else {
}
break;
}

var G__12053 = args12048.length;
switch (G__12053) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args12048.slice((2)),(0)));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq12049){
var G__12050 = cljs.core.first(seq12049);
var seq12049__$1 = cljs.core.next(seq12049);
var G__12051 = cljs.core.first(seq12049__$1);
var seq12049__$2 = cljs.core.next(seq12049__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__12050,G__12051,seq12049__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args12058 = [];
var len__6044__auto___12064 = arguments.length;
var i__6045__auto___12065 = (0);
while(true){
if((i__6045__auto___12065 < len__6044__auto___12064)){
args12058.push((arguments[i__6045__auto___12065]));

var G__12066 = (i__6045__auto___12065 + (1));
i__6045__auto___12065 = G__12066;
continue;
} else {
}
break;
}

var G__12063 = args12058.length;
switch (G__12063) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args12058.slice((2)),(0)));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq12059){
var G__12060 = cljs.core.first(seq12059);
var seq12059__$1 = cljs.core.next(seq12059);
var G__12061 = cljs.core.first(seq12059__$1);
var seq12059__$2 = cljs.core.next(seq12059__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__12060,G__12061,seq12059__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args12068 = [];
var len__6044__auto___12071 = arguments.length;
var i__6045__auto___12072 = (0);
while(true){
if((i__6045__auto___12072 < len__6044__auto___12071)){
args12068.push((arguments[i__6045__auto___12072]));

var G__12073 = (i__6045__auto___12072 + (1));
i__6045__auto___12072 = G__12073;
continue;
} else {
}
break;
}

var G__12070 = args12068.length;
switch (G__12070) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12068.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args12075 = [];
var len__6044__auto___12078 = arguments.length;
var i__6045__auto___12079 = (0);
while(true){
if((i__6045__auto___12079 < len__6044__auto___12078)){
args12075.push((arguments[i__6045__auto___12079]));

var G__12080 = (i__6045__auto___12079 + (1));
i__6045__auto___12079 = G__12080;
continue;
} else {
}
break;
}

var G__12077 = args12075.length;
switch (G__12077) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12075.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__6051__auto__ = [];
var len__6044__auto___12084 = arguments.length;
var i__6045__auto___12085 = (0);
while(true){
if((i__6045__auto___12085 < len__6044__auto___12084)){
args__6051__auto__.push((arguments[i__6045__auto___12085]));

var G__12086 = (i__6045__auto___12085 + (1));
i__6045__auto___12085 = G__12086;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.cst$kw$end,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq12082){
var G__12083 = cljs.core.first(seq12082);
var seq12082__$1 = cljs.core.next(seq12082);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__12083,seq12082__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__12089){
var map__12092 = p__12089;
var map__12092__$1 = ((((!((map__12092 == null)))?((((map__12092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12092):map__12092);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12092__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12092__$1,cljs.core.cst$kw$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__12092,map__12092__$1,start,end){
return (function (p1__12088_SHARP_){
return cljs.core.not(cljs_time.core.after_QMARK_(p1__12088_SHARP_,end));
});})(map__12092,map__12092__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__12092,map__12092__$1,start,end){
return (function (p1__12087_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__12087_SHARP_ + (1))));
});})(map__12092,map__12092__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12094_SHARP_){
return p1__12094_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__12095){
var map__12098 = p__12095;
var map__12098__$1 = ((((!((map__12098 == null)))?((((map__12098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12098):map__12098);
var interval = map__12098__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12098__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12098__$1,cljs.core.cst$kw$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__12100){
var map__12103 = p__12100;
var map__12103__$1 = ((((!((map__12103 == null)))?((((map__12103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12103):map__12103);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12103__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12103__$1,cljs.core.cst$kw$end);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__4974__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sm,(2)) : cljs_time.core._EQ_.call(null,sm,(2)));
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sd,(29)) : cljs_time.core._EQ_.call(null,sd,(29)));
if(cljs.core.truth_(and__4974__auto____$1)){
var and__4974__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(em,(2)) : cljs_time.core._EQ_.call(null,em,(2)));
if(cljs.core.truth_(and__4974__auto____$2)){
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(ed,(28)) : cljs_time.core._EQ_.call(null,ed,(28)));
} else {
return and__4974__auto____$2;
}
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__12105){
var map__12106 = p__12105;
var map__12106__$1 = ((((!((map__12106 == null)))?((((map__12106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12106):map__12106);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,cljs.core.cst$kw$years);
var map__12108 = this;
var map__12108__$1 = ((((!((map__12108 == null)))?((((map__12108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12108):map__12108);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12108__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$months,cljs.core.cst$kw$millis);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$years,cljs.core.cst$kw$millis);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__12110){
var map__12111 = p__12110;
var map__12111__$1 = ((((!((map__12111 == null)))?((((map__12111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12111):map__12111);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12111__$1,cljs.core.cst$kw$years);
var map__12113 = this;
var map__12113__$1 = ((((!((map__12113 == null)))?((((map__12113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12113):map__12113);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12113__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__4986__auto__ = years__$1;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__12115){
var map__12116 = p__12115;
var map__12116__$1 = ((((!((map__12116 == null)))?((((map__12116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12116):map__12116);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12116__$1,cljs.core.cst$kw$years);
var map__12118 = this;
var map__12118__$1 = ((((!((map__12118 == null)))?((((map__12118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12118):map__12118);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__12120){
var map__12121 = p__12120;
var map__12121__$1 = ((((!((map__12121 == null)))?((((map__12121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12121):map__12121);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$end);
var map__12123 = this;
var map__12123__$1 = ((((!((map__12123 == null)))?((((map__12123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12123):map__12123);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12123__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12123__$1,cljs.core.cst$kw$end);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args12125 = [];
var len__6044__auto___12131 = arguments.length;
var i__6045__auto___12132 = (0);
while(true){
if((i__6045__auto___12132 < len__6044__auto___12131)){
args12125.push((arguments[i__6045__auto___12132]));

var G__12133 = (i__6045__auto___12132 + (1));
i__6045__auto___12132 = G__12133;
continue;
} else {
}
break;
}

var G__12127 = args12125.length;
switch (G__12127) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12125.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__12128,date){
var map__12129 = p__12128;
var map__12129__$1 = ((((!((map__12129 == null)))?((((map__12129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12129):map__12129);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12129__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12129__$1,cljs.core.cst$kw$end);
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__4986__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,date) : cljs_time.core._EQ_.call(null,start,date));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var and__4974__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__4974__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__4974__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args12135 = [];
var len__6044__auto___12144 = arguments.length;
var i__6045__auto___12145 = (0);
while(true){
if((i__6045__auto___12145 < len__6044__auto___12144)){
args12135.push((arguments[i__6045__auto___12145]));

var G__12146 = (i__6045__auto___12145 + (1));
i__6045__auto___12145 = G__12146;
continue;
} else {
}
break;
}

var G__12137 = args12135.length;
switch (G__12137) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12135.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__12138,p__12139){
var map__12140 = p__12138;
var map__12140__$1 = ((((!((map__12140 == null)))?((((map__12140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12140):map__12140);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12140__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12140__$1,cljs.core.cst$kw$end);
var map__12141 = p__12139;
var map__12141__$1 = ((((!((map__12141 == null)))?((((map__12141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12141):map__12141);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12141__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12141__$1,cljs.core.cst$kw$end);
var and__4974__auto__ = cljs.core.not((function (){var or__4986__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
})());
if(and__4974__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__4974__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__4986__auto__ = (function (){var and__4974__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__4974__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
var or__4986__auto____$1 = (function (){var and__4974__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__4974__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto____$1)){
return or__4986__auto____$1;
} else {
var or__4986__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__4986__auto____$2)){
return or__4986__auto____$2;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_b,end_a) : cljs_time.core._EQ_.call(null,start_b,end_a));
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__12148,p__12149){
var map__12154 = p__12148;
var map__12154__$1 = ((((!((map__12154 == null)))?((((map__12154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12154):map__12154);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12154__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12154__$1,cljs.core.cst$kw$end);
var map__12155 = p__12149;
var map__12155__$1 = ((((!((map__12155 == null)))?((((map__12155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12155):map__12155);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12155__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12155__$1,cljs.core.cst$kw$end);
var or__4986__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__4974__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__4974__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$years,val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$months,val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$weeks,val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$days,val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$hours,val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$minutes,val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$seconds,val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args12160 = [];
var len__6044__auto___12163 = arguments.length;
var i__6045__auto___12164 = (0);
while(true){
if((i__6045__auto___12164 < len__6044__auto___12163)){
args12160.push((arguments[i__6045__auto___12164]));

var G__12165 = (i__6045__auto___12164 + (1));
i__6045__auto___12164 = G__12165;
continue;
} else {
}
break;
}

var G__12162 = args12160.length;
switch (G__12162) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12160.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args12167 = [];
var len__6044__auto___12170 = arguments.length;
var i__6045__auto___12171 = (0);
while(true){
if((i__6045__auto___12171 < len__6044__auto___12170)){
args12167.push((arguments[i__6045__auto___12171]));

var G__12172 = (i__6045__auto___12171 + (1));
i__6045__auto___12171 = G__12172;
continue;
} else {
}
break;
}

var G__12169 = args12167.length;
switch (G__12169) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12167.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args12174 = [];
var len__6044__auto___12177 = arguments.length;
var i__6045__auto___12178 = (0);
while(true){
if((i__6045__auto___12178 < len__6044__auto___12177)){
args12174.push((arguments[i__6045__auto___12178]));

var G__12179 = (i__6045__auto___12178 + (1));
i__6045__auto___12178 = G__12179;
continue;
} else {
}
break;
}

var G__12176 = args12174.length;
switch (G__12176) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12174.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;
if(typeof cljs_time.core.__GT_period !== 'undefined'){
} else {
cljs_time.core.__GT_period = (function (){var method_table__5899__auto__ = (function (){var G__12181 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12181) : cljs.core.atom.call(null,G__12181));
})();
var prefer_table__5900__auto__ = (function (){var G__12182 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12182) : cljs.core.atom.call(null,G__12182));
})();
var method_cache__5901__auto__ = (function (){var G__12183 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12183) : cljs.core.atom.call(null,G__12183));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__12184 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12184) : cljs.core.atom.call(null,G__12184));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__12185){
var map__12186 = p__12185;
var map__12186__$1 = ((((!((map__12186 == null)))?((((map__12186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12186):map__12186);
var interval = map__12186__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,cljs.core.cst$kw$end);
var years = cljs_time.core.in_years(interval);
var start_year = cljs_time.core.year(start);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval);
var months = (cljs.core.count(days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days(interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$years,years,cljs.core.array_seq([cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args12188 = [];
var len__6044__auto___12193 = arguments.length;
var i__6045__auto___12194 = (0);
while(true){
if((i__6045__auto___12194 < len__6044__auto___12193)){
args12188.push((arguments[i__6045__auto___12194]));

var G__12195 = (i__6045__auto___12194 + (1));
i__6045__auto___12194 = G__12195;
continue;
} else {
}
break;
}

var G__12190 = args12188.length;
switch (G__12190) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12188.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__12191 = (new goog.date.Date());
G__12191.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__12191;
})();
var G__12192 = (new goog.date.UtcDateTime((0)));
G__12192.setYear(midnight.getYear());

G__12192.setMonth(midnight.getMonth());

G__12192.setDate(midnight.getDate());

G__12192.setHours(hours);

G__12192.setMinutes(minutes);

G__12192.setSeconds(seconds);

G__12192.setMilliseconds(millis);

return G__12192;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_12198 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn(base_date_time.getTime());

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_12198;
}});
