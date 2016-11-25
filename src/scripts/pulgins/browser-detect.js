/** Browser Detection Script *********/
var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"Other";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string;this.versionSearchString=e[t].subString;if(n.indexOf(e[t].subString)!=-1){return e[t].identity}}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(t==-1)return;return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"}]}
BrowserDetect.init();
var browserName = BrowserDetect.browser.toLowerCase(),
    browserVersion = BrowserDetect.version,
    bodyTag = jQuery("body");
bodyTag.addClass(browserName +' '+ browserName +''+ browserVersion);
if(browserName == "explorer" && browserVersion <= 9) bodyTag.addClass('islteie9'); // is lower equal than IE9