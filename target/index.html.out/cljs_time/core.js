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

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k10655,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__10657 = (((k10655 instanceof cljs.core.Keyword))?k10655.fqn:null);
switch (G__10657) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10655,else__5603__auto__);

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

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10654){
var self__ = this;
var G__10654__$1 = this;
return (new cljs.core.RecordIter((0),G__10654__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null),cljs.core._iterator(self__.__extmap)));
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

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__10654){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__10658 = cljs.core.keyword_identical_QMARK_;
var expr__10659 = k__5608__auto__;
if(cljs.core.truth_((pred__10658.cljs$core$IFn$_invoke$arity$2 ? pred__10658.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,expr__10659) : pred__10658.call(null,cljs.core.cst$kw$start,expr__10659)))){
return (new cljs_time.core.Interval(G__10654,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10658.cljs$core$IFn$_invoke$arity$2 ? pred__10658.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,expr__10659) : pred__10658.call(null,cljs.core.cst$kw$end,expr__10659)))){
return (new cljs_time.core.Interval(self__.start,G__10654,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__10654),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__10654){
var self__ = this;
var this__5599__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__10654,self__.__extmap,self__.__hash));
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

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__10656){
return (new cljs_time.core.Interval(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__10656),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__10656),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10656,cljs.core.cst$kw$start,cljs.core.array_seq([cljs.core.cst$kw$end], 0)),null));
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

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k10663,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__10665 = (((k10663 instanceof cljs.core.Keyword))?k10663.fqn:null);
switch (G__10665) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10663,else__5603__auto__);

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

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10662){
var self__ = this;
var G__10662__$1 = this;
return (new cljs.core.RecordIter((0),G__10662__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], null),cljs.core._iterator(self__.__extmap)));
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

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__10662){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__10666 = cljs.core.keyword_identical_QMARK_;
var expr__10667 = k__5608__auto__;
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$years,expr__10667)))){
return (new cljs_time.core.Period(G__10662,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$months,expr__10667)))){
return (new cljs_time.core.Period(self__.years,G__10662,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$weeks,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,G__10662,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$days,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__10662,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$hours,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__10662,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$minutes,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__10662,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$seconds,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__10662,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10666.cljs$core$IFn$_invoke$arity$2 ? pred__10666.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,expr__10667) : pred__10666.call(null,cljs.core.cst$kw$millis,expr__10667)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__10662,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__10662),null));
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

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__10662){
var self__ = this;
var this__5599__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__10662,self__.__extmap,self__.__hash));
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

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__10664){
return (new cljs_time.core.Period(cljs.core.cst$kw$years.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$months.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$weeks.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$days.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__10664),cljs.core.cst$kw$millis.cljs$core$IFn$_invoke$arity$1(G__10664),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10664,cljs.core.cst$kw$years,cljs.core.array_seq([cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], 0)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args10670 = [];
var len__6044__auto___10676 = arguments.length;
var i__6045__auto___10677 = (0);
while(true){
if((i__6045__auto___10677 < len__6044__auto___10676)){
args10670.push((arguments[i__6045__auto___10677]));

var G__10678 = (i__6045__auto___10677 + (1));
i__6045__auto___10677 = G__10678;
continue;
} else {
}
break;
}

var G__10675 = args10670.length;
switch (G__10675) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args10670.slice((2)),(0)));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq10671){
var G__10672 = cljs.core.first(seq10671);
var seq10671__$1 = cljs.core.next(seq10671);
var G__10673 = cljs.core.first(seq10671__$1);
var seq10671__$2 = cljs.core.next(seq10671__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__10672,G__10673,seq10671__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__10692_10708 = date__$1;
var G__10693_10709 = (function (){var G__10694 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(date__$1) : f.call(null,date__$1));
var G__10695 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__10694,G__10695) : op.call(null,G__10694,G__10695));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__10692_10708,G__10693_10709) : set_fn.call(null,G__10692_10708,G__10693_10709));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$millis,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__10680_SHARP_,p2__10681_SHARP_){
return p1__10680_SHARP_.setMilliseconds(p2__10681_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$seconds,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__10682_SHARP_,p2__10683_SHARP_){
return p1__10682_SHARP_.setSeconds(p2__10683_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$minutes,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__10684_SHARP_,p2__10685_SHARP_){
return p1__10684_SHARP_.setMinutes(p2__10685_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$hours,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__10686_SHARP_,p2__10687_SHARP_){
return p1__10686_SHARP_.setHours(p2__10687_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$days,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__10688_SHARP_,p2__10689_SHARP_){
return p1__10688_SHARP_.setDate(p2__10689_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$weeks,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__10696 = cljs_time.core.day(date__$1);
var G__10697 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__10696,G__10697) : op.call(null,G__10696,G__10697));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.cst$kw$months,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_10710 = (function (){var G__10698 = cljs_time.core.month(date__$1);
var G__10699 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__10698,G__10699) : op.call(null,G__10698,G__10699));
})();
var y_10711 = cljs_time.core.year(date__$1);
var y_10712__$1 = (((m_10710 > (0)))?(y_10711 + (((m_10710 - (1)) / (12)) | (0))):(((m_10710 < (0)))?(y_10711 + ((((m_10710 - (1)) / (12)) | (0)) - (1))):(((m_10710 === (0)))?(y_10711 - (1)):null)));
var m_10713__$1 = (((m_10710 > (12)))?(function (){var m__$1 = cljs.core.mod(m_10710,(12));
if((m__$1 === (0))){
return (12);
} else {
return m__$1;
}
})():(((m_10710 < (1)))?(m_10710 + (12)):m_10710
));
var ldom_10714 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_10712__$1,(m_10713__$1 - (1)),(1)))));
if((ldom_10714 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_10714);
} else {
}

date__$1.setMonth((m_10713__$1 - (1)));

date__$1.setYear(y_10712__$1);
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
var and__4974__auto____$1 = (function (){var G__10702 = (2);
var G__10703 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__10702,G__10703) : cljs_time.core._EQ_.call(null,G__10702,G__10703));
})();
if(cljs.core.truth_(and__4974__auto____$1)){
var G__10704 = (29);
var G__10705 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__10704,G__10705) : cljs_time.core._EQ_.call(null,G__10704,G__10705));
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

date__$1.setYear((function (){var G__10706 = cljs_time.core.year(date__$1);
var G__10707 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__10706,G__10707) : op.call(null,G__10706,G__10707));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__10717){
var vec__10718 = p__10717;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10718,(1),null);
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
cljs_time.core.utc = (function (){var G__10719 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"UTC",cljs.core.cst$kw$std_offset,(0),cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.cst$kw$transitions,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__10719);
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
var G__10721 = (new goog.date.UtcDateTime());
G__10721.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__10721;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__10723 = (new goog.date.DateTime());
G__10723.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__10723;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__10725 = datetime__$1;
G__10725.setHours((0));

G__10725.setMinutes((0));

G__10725.setSeconds((0));

G__10725.setMilliseconds((0));

return G__10725;
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
var G__10727 = (new goog.date.UtcDateTime());
G__10727.setTime((0));

return G__10727;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args10728 = [];
var len__6044__auto___10731 = arguments.length;
var i__6045__auto___10732 = (0);
while(true){
if((i__6045__auto___10732 < len__6044__auto___10731)){
args10728.push((arguments[i__6045__auto___10732]));

var G__10733 = (i__6045__auto___10732 + (1));
i__6045__auto___10732 = G__10733;
continue;
} else {
}
break;
}

var G__10730 = args10728.length;
switch (G__10730) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10728.length)].join('')));

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
var args10735 = [];
var len__6044__auto___10738 = arguments.length;
var i__6045__auto___10739 = (0);
while(true){
if((i__6045__auto___10739 < len__6044__auto___10738)){
args10735.push((arguments[i__6045__auto___10739]));

var G__10740 = (i__6045__auto___10739 + (1));
i__6045__auto___10739 = G__10740;
continue;
} else {
}
break;
}

var G__10737 = args10735.length;
switch (G__10737) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10735.length)].join('')));

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
var args10742 = [];
var len__6044__auto___10745 = arguments.length;
var i__6045__auto___10746 = (0);
while(true){
if((i__6045__auto___10746 < len__6044__auto___10745)){
args10742.push((arguments[i__6045__auto___10746]));

var G__10747 = (i__6045__auto___10746 + (1));
i__6045__auto___10746 = G__10747;
continue;
} else {
}
break;
}

var G__10744 = args10742.length;
switch (G__10744) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10742.length)].join('')));

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
var G__10750 = (new goog.date.Date());
G__10750.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__10750;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args10751 = [];
var len__6044__auto___10754 = arguments.length;
var i__6045__auto___10755 = (0);
while(true){
if((i__6045__auto___10755 < len__6044__auto___10754)){
args10751.push((arguments[i__6045__auto___10755]));

var G__10756 = (i__6045__auto___10755 + (1));
i__6045__auto___10755 = G__10756;
continue;
} else {
}
break;
}

var G__10753 = args10751.length;
switch (G__10753) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10751.length)].join('')));

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
var offset = (function (){var G__10759 = (new goog.date.DateTime());
G__10759.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__10759;
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
var args10760 = [];
var len__6044__auto___10763 = arguments.length;
var i__6045__auto___10764 = (0);
while(true){
if((i__6045__auto___10764 < len__6044__auto___10763)){
args10760.push((arguments[i__6045__auto___10764]));

var G__10765 = (i__6045__auto___10764 + (1));
i__6045__auto___10764 = G__10765;
continue;
} else {
}
break;
}

var G__10762 = args10760.length;
switch (G__10762) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10760.length)].join('')));

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
var args10767 = [];
var len__6044__auto___10770 = arguments.length;
var i__6045__auto___10771 = (0);
while(true){
if((i__6045__auto___10771 < len__6044__auto___10770)){
args10767.push((arguments[i__6045__auto___10771]));

var G__10772 = (i__6045__auto___10771 + (1));
i__6045__auto___10771 = G__10772;
continue;
} else {
}
break;
}

var G__10769 = args10767.length;
switch (G__10769) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10767.length)].join('')));

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
var args10774 = [];
var len__6044__auto___10777 = arguments.length;
var i__6045__auto___10778 = (0);
while(true){
if((i__6045__auto___10778 < len__6044__auto___10777)){
args10774.push((arguments[i__6045__auto___10778]));

var G__10779 = (i__6045__auto___10778 + (1));
i__6045__auto___10778 = G__10779;
continue;
} else {
}
break;
}

var G__10776 = args10774.length;
switch (G__10776) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10774.length)].join('')));

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
var args10781 = [];
var len__6044__auto___10784 = arguments.length;
var i__6045__auto___10785 = (0);
while(true){
if((i__6045__auto___10785 < len__6044__auto___10784)){
args10781.push((arguments[i__6045__auto___10785]));

var G__10786 = (i__6045__auto___10785 + (1));
i__6045__auto___10785 = G__10786;
continue;
} else {
}
break;
}

var G__10783 = args10781.length;
switch (G__10783) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10781.length)].join('')));

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
var args10788 = [];
var len__6044__auto___10791 = arguments.length;
var i__6045__auto___10792 = (0);
while(true){
if((i__6045__auto___10792 < len__6044__auto___10791)){
args10788.push((arguments[i__6045__auto___10792]));

var G__10793 = (i__6045__auto___10792 + (1));
i__6045__auto___10792 = G__10793;
continue;
} else {
}
break;
}

var G__10790 = args10788.length;
switch (G__10790) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10788.length)].join('')));

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
var args10795 = [];
var len__6044__auto___10798 = arguments.length;
var i__6045__auto___10799 = (0);
while(true){
if((i__6045__auto___10799 < len__6044__auto___10798)){
args10795.push((arguments[i__6045__auto___10799]));

var G__10800 = (i__6045__auto___10799 + (1));
i__6045__auto___10799 = G__10800;
continue;
} else {
}
break;
}

var G__10797 = args10795.length;
switch (G__10797) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10795.length)].join('')));

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
var args10802 = [];
var len__6044__auto___10805 = arguments.length;
var i__6045__auto___10806 = (0);
while(true){
if((i__6045__auto___10806 < len__6044__auto___10805)){
args10802.push((arguments[i__6045__auto___10806]));

var G__10807 = (i__6045__auto___10806 + (1));
i__6045__auto___10806 = G__10807;
continue;
} else {
}
break;
}

var G__10804 = args10802.length;
switch (G__10804) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10802.length)].join('')));

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
var args10809 = [];
var len__6044__auto___10812 = arguments.length;
var i__6045__auto___10813 = (0);
while(true){
if((i__6045__auto___10813 < len__6044__auto___10812)){
args10809.push((arguments[i__6045__auto___10813]));

var G__10814 = (i__6045__auto___10813 + (1));
i__6045__auto___10813 = G__10814;
continue;
} else {
}
break;
}

var G__10811 = args10809.length;
switch (G__10811) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10809.length)].join('')));

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
var args10816 = [];
var len__6044__auto___10822 = arguments.length;
var i__6045__auto___10823 = (0);
while(true){
if((i__6045__auto___10823 < len__6044__auto___10822)){
args10816.push((arguments[i__6045__auto___10823]));

var G__10824 = (i__6045__auto___10823 + (1));
i__6045__auto___10823 = G__10824;
continue;
} else {
}
break;
}

var G__10821 = args10816.length;
switch (G__10821) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args10816.slice((2)),(0)));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq10817){
var G__10818 = cljs.core.first(seq10817);
var seq10817__$1 = cljs.core.next(seq10817);
var G__10819 = cljs.core.first(seq10817__$1);
var seq10817__$2 = cljs.core.next(seq10817__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__10818,G__10819,seq10817__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args10826 = [];
var len__6044__auto___10832 = arguments.length;
var i__6045__auto___10833 = (0);
while(true){
if((i__6045__auto___10833 < len__6044__auto___10832)){
args10826.push((arguments[i__6045__auto___10833]));

var G__10834 = (i__6045__auto___10833 + (1));
i__6045__auto___10833 = G__10834;
continue;
} else {
}
break;
}

var G__10831 = args10826.length;
switch (G__10831) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6063__auto__ = (new cljs.core.IndexedSeq(args10826.slice((2)),(0)));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6063__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq10827){
var G__10828 = cljs.core.first(seq10827);
var seq10827__$1 = cljs.core.next(seq10827);
var G__10829 = cljs.core.first(seq10827__$1);
var seq10827__$2 = cljs.core.next(seq10827__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__10828,G__10829,seq10827__$2);
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
var args10836 = [];
var len__6044__auto___10839 = arguments.length;
var i__6045__auto___10840 = (0);
while(true){
if((i__6045__auto___10840 < len__6044__auto___10839)){
args10836.push((arguments[i__6045__auto___10840]));

var G__10841 = (i__6045__auto___10840 + (1));
i__6045__auto___10840 = G__10841;
continue;
} else {
}
break;
}

var G__10838 = args10836.length;
switch (G__10838) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10836.length)].join('')));

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
var args10843 = [];
var len__6044__auto___10846 = arguments.length;
var i__6045__auto___10847 = (0);
while(true){
if((i__6045__auto___10847 < len__6044__auto___10846)){
args10843.push((arguments[i__6045__auto___10847]));

var G__10848 = (i__6045__auto___10847 + (1));
i__6045__auto___10847 = G__10848;
continue;
} else {
}
break;
}

var G__10845 = args10843.length;
switch (G__10845) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10843.length)].join('')));

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
var len__6044__auto___10852 = arguments.length;
var i__6045__auto___10853 = (0);
while(true){
if((i__6045__auto___10853 < len__6044__auto___10852)){
args__6051__auto__.push((arguments[i__6045__auto___10853]));

var G__10854 = (i__6045__auto___10853 + (1));
i__6045__auto___10853 = G__10854;
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

cljs_time.core.extend.cljs$lang$applyTo = (function (seq10850){
var G__10851 = cljs.core.first(seq10850);
var seq10850__$1 = cljs.core.next(seq10850);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__10851,seq10850__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__10857){
var map__10860 = p__10857;
var map__10860__$1 = ((((!((map__10860 == null)))?((((map__10860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10860):map__10860);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10860__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10860__$1,cljs.core.cst$kw$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__10860,map__10860__$1,start,end){
return (function (p1__10856_SHARP_){
return cljs.core.not(cljs_time.core.after_QMARK_(p1__10856_SHARP_,end));
});})(map__10860,map__10860__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10860,map__10860__$1,start,end){
return (function (p1__10855_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__10855_SHARP_ + (1))));
});})(map__10860,map__10860__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10862_SHARP_){
return p1__10862_SHARP_.getNumberOfDaysInMonth();
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
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__10863){
var map__10866 = p__10863;
var map__10866__$1 = ((((!((map__10866 == null)))?((((map__10866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10866):map__10866);
var interval = map__10866__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10866__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10866__$1,cljs.core.cst$kw$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__10868){
var map__10871 = p__10868;
var map__10871__$1 = ((((!((map__10871 == null)))?((((map__10871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10871):map__10871);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10871__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10871__$1,cljs.core.cst$kw$end);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__10873){
var map__10874 = p__10873;
var map__10874__$1 = ((((!((map__10874 == null)))?((((map__10874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10874):map__10874);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10874__$1,cljs.core.cst$kw$years);
var map__10876 = this;
var map__10876__$1 = ((((!((map__10876 == null)))?((((map__10876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10876):map__10876);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10876__$1,cljs.core.cst$kw$years);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__10878){
var map__10879 = p__10878;
var map__10879__$1 = ((((!((map__10879 == null)))?((((map__10879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10879):map__10879);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10879__$1,cljs.core.cst$kw$years);
var map__10881 = this;
var map__10881__$1 = ((((!((map__10881 == null)))?((((map__10881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10881):map__10881);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10881__$1,cljs.core.cst$kw$years);
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

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__10883){
var map__10884 = p__10883;
var map__10884__$1 = ((((!((map__10884 == null)))?((((map__10884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10884):map__10884);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$years);
var map__10886 = this;
var map__10886__$1 = ((((!((map__10886 == null)))?((((map__10886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10886):map__10886);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10886__$1,cljs.core.cst$kw$years);
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

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__10888){
var map__10889 = p__10888;
var map__10889__$1 = ((((!((map__10889 == null)))?((((map__10889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10889):map__10889);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10889__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10889__$1,cljs.core.cst$kw$end);
var map__10891 = this;
var map__10891__$1 = ((((!((map__10891 == null)))?((((map__10891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10891):map__10891);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10891__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10891__$1,cljs.core.cst$kw$end);
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
var args10893 = [];
var len__6044__auto___10899 = arguments.length;
var i__6045__auto___10900 = (0);
while(true){
if((i__6045__auto___10900 < len__6044__auto___10899)){
args10893.push((arguments[i__6045__auto___10900]));

var G__10901 = (i__6045__auto___10900 + (1));
i__6045__auto___10900 = G__10901;
continue;
} else {
}
break;
}

var G__10895 = args10893.length;
switch (G__10895) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10893.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__10896,date){
var map__10897 = p__10896;
var map__10897__$1 = ((((!((map__10897 == null)))?((((map__10897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10897):map__10897);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10897__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10897__$1,cljs.core.cst$kw$end);
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
var args10903 = [];
var len__6044__auto___10912 = arguments.length;
var i__6045__auto___10913 = (0);
while(true){
if((i__6045__auto___10913 < len__6044__auto___10912)){
args10903.push((arguments[i__6045__auto___10913]));

var G__10914 = (i__6045__auto___10913 + (1));
i__6045__auto___10913 = G__10914;
continue;
} else {
}
break;
}

var G__10905 = args10903.length;
switch (G__10905) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10903.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__10906,p__10907){
var map__10908 = p__10906;
var map__10908__$1 = ((((!((map__10908 == null)))?((((map__10908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10908):map__10908);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10908__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10908__$1,cljs.core.cst$kw$end);
var map__10909 = p__10907;
var map__10909__$1 = ((((!((map__10909 == null)))?((((map__10909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10909):map__10909);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10909__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10909__$1,cljs.core.cst$kw$end);
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
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__10916,p__10917){
var map__10922 = p__10916;
var map__10922__$1 = ((((!((map__10922 == null)))?((((map__10922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10922):map__10922);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$end);
var map__10923 = p__10917;
var map__10923__$1 = ((((!((map__10923 == null)))?((((map__10923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10923):map__10923);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10923__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10923__$1,cljs.core.cst$kw$end);
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
var args10928 = [];
var len__6044__auto___10931 = arguments.length;
var i__6045__auto___10932 = (0);
while(true){
if((i__6045__auto___10932 < len__6044__auto___10931)){
args10928.push((arguments[i__6045__auto___10932]));

var G__10933 = (i__6045__auto___10932 + (1));
i__6045__auto___10932 = G__10933;
continue;
} else {
}
break;
}

var G__10930 = args10928.length;
switch (G__10930) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10928.length)].join('')));

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
var args10935 = [];
var len__6044__auto___10938 = arguments.length;
var i__6045__auto___10939 = (0);
while(true){
if((i__6045__auto___10939 < len__6044__auto___10938)){
args10935.push((arguments[i__6045__auto___10939]));

var G__10940 = (i__6045__auto___10939 + (1));
i__6045__auto___10939 = G__10940;
continue;
} else {
}
break;
}

var G__10937 = args10935.length;
switch (G__10937) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10935.length)].join('')));

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
var args10942 = [];
var len__6044__auto___10945 = arguments.length;
var i__6045__auto___10946 = (0);
while(true){
if((i__6045__auto___10946 < len__6044__auto___10945)){
args10942.push((arguments[i__6045__auto___10946]));

var G__10947 = (i__6045__auto___10946 + (1));
i__6045__auto___10946 = G__10947;
continue;
} else {
}
break;
}

var G__10944 = args10942.length;
switch (G__10944) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10942.length)].join('')));

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
cljs_time.core.__GT_period = (function (){var method_table__5899__auto__ = (function (){var G__10949 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10949) : cljs.core.atom.call(null,G__10949));
})();
var prefer_table__5900__auto__ = (function (){var G__10950 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10950) : cljs.core.atom.call(null,G__10950));
})();
var method_cache__5901__auto__ = (function (){var G__10951 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10951) : cljs.core.atom.call(null,G__10951));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__10952 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10952) : cljs.core.atom.call(null,G__10952));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__10953){
var map__10954 = p__10953;
var map__10954__$1 = ((((!((map__10954 == null)))?((((map__10954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10954):map__10954);
var interval = map__10954__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10954__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10954__$1,cljs.core.cst$kw$end);
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
var args10956 = [];
var len__6044__auto___10961 = arguments.length;
var i__6045__auto___10962 = (0);
while(true){
if((i__6045__auto___10962 < len__6044__auto___10961)){
args10956.push((arguments[i__6045__auto___10962]));

var G__10963 = (i__6045__auto___10962 + (1));
i__6045__auto___10962 = G__10963;
continue;
} else {
}
break;
}

var G__10958 = args10956.length;
switch (G__10958) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10956.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__10959 = (new goog.date.Date());
G__10959.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__10959;
})();
var G__10960 = (new goog.date.UtcDateTime((0)));
G__10960.setYear(midnight.getYear());

G__10960.setMonth(midnight.getMonth());

G__10960.setDate(midnight.getDate());

G__10960.setHours(hours);

G__10960.setMinutes(minutes);

G__10960.setSeconds(seconds);

G__10960.setMilliseconds(millis);

return G__10960;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_10966 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn(base_date_time.getTime());

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_10966;
}});
