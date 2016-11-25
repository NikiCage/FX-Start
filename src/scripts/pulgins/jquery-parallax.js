
/*
 Plugin: jQuery Simple Parallax
 Version 0.1
 Author: Jason Hummel
 Twitter: @jhummel
 Author URL: http://www.wearechalk.com/
 Plugin URL: http://www.github.com/madebychalk/jQuery-Parallax

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html

 Inspired by jQuery Prallax by Ian Lunn
 https://github.com/IanLunn/jQuery-Parallax
 */

;(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery,window)}})(function(e,t){"use strict";var n,r,i,s,o=e(window),u=o.scrollTop(),a=o.height();o.on("resize",function(){a=o.height();n.notify()});o.on("scroll",function(){n.notify()});i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e=="x"?t:t&3|8;return n.toString(16)})};n=function(){var t={};return{subscribe:function(e,n){t[e]=n},remove:function(e){delete t[e]},each:function(n){e.each(t,function(e,t){n.apply(t)})},count:function(){var e=0,n;for(n in t){if(t.hasOwnProperty(n))e++}return e},remove_all:function(){this.each(function(){this.destroy()})},notify:function(){u=o.scrollTop();this.each(function(){this.check(u)})}}}();r=function(e,t){this.options=t;this.originalScrollTop=0;this.ypos=0;this.started=false;this.$el=e;this.guid=i();this.refresh();n.subscribe(this.guid,this)};r.prototype={_onScreen:function(){return!(this.top+this.height<u||this.top>u+a)},_getHeight:function(){return this.options.outerHeight?this.$el.outerHeight(true):this.$el.height()},refresh:function(){this.height=this._getHeight();this.top=this.$el.offset().top},start:function(t){this.originalScrollTop=t||window.scrollTop();this.ypos=parseInt(this.$el.css("backgroundPosition").split(" ")[1])||0;o.on("scroll.parallaxbg"+this.guid,e.proxy(this.update,this));this.started=true},stop:function(){o.off("scroll.parallaxbg"+this.guid,e.proxy(this.update,this));this.started=false},check:function(e){if(this._onScreen()){if(!this.started)this.start(e)}else{if(this.started){this.stop()}}},update:function(){this.$el.css("backgroundPosition",this.options.xpos+" "+(this.ypos+Math.round((this.originalScrollTop-u)*this.options.speed))+"px")},destroy:function(){n.remove(this.guid);this.$el.removeData("parallaxbg");this.$el.css("backgroundPosition","")}};e.fn.parallaxbg=function(t){var n=e.makeArray(arguments),i=n.slice(1);return this.each(function(){var s,o=e(this);s=o.data("parallaxbg");if(s){s[n[0]].apply(s,i)}else{t=e.extend({xpos:"50%",speed:.25,outerHeight:true},t);o.data("parallaxbg",new r(o,t))}})};e.Parallaxbg={destroy_all:function(){n.remove_all()},count:function(){return n.count()}}});