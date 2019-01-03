!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Class=e()}}(function(){return function o(s,a,u){function p(t,e){if(!a[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return p(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)p(u[e]);return p}({1:[function(e,t,r){"use strict";var _=e("./annotation.js"),m=!1;var h=function(){};Object.defineProperty(h,"$class",{enumerable:!1,value:h}),Object.defineProperty(h,"$map",{enumerable:!1,value:{attributes:{},methods:{},computedProperties:{}}}),Object.defineProperty(h,"$extend",{enumerable:!1,value:function(e){var s=this,r=JSON.parse(JSON.stringify(s.$map)),n=function(){if(!m){for(var e in Object.defineProperty(this,"$class",{enumerable:!1,value:n}),Object.defineProperty(this,"$map",{enumerable:!1,value:r}),Object.defineProperty(this,"$data",{enumerable:!1,value:{}}),r.computedProperties)Object.defineProperty(this,e,{enumerable:!0,configurable:!1,get:void 0!==r.computedProperties[e].get?function(e){return function(){return this[e].apply(this,arguments)}}(r.computedProperties[e].get):void 0,set:void 0!==r.computedProperties[e].set?function(e){return function(){return this[e].apply(this,arguments)}}(r.computedProperties[e].set):void 0});for(var t in r.methods)this[t]=this[t].bind(this);return this.__init__&&this.__init__.apply(this,arguments),this}};n.prototype=function(e){m=!0;var t=new e;return m=!1,t}(this.$class);var t,i,o,a,u,p,l=(e=e||{}).__preBuild__||s.prototype.__preBuild__;if(l&&l(e,n,s),e.__include__)for(a=e.__include__.length-1;0<=a;a--){for(t in u=e.__include__[a])"__classvars__"!=t&&void 0===e[t]&&(e[t]=u[t]);if(u.__classvars__)for(t in e.__classvars__||(e.__classvars__={}),u.__classvars__)void 0===e.__classvars__[t]&&(e.__classvars__[t]=u.__classvars__[t])}for(t in e||{})if("__include__"!=t&&"__classvars__"!=t)if("function"==typeof e[t]){for(var c in i=void 0,r.methods[t]={annotations:{}},0===t.indexOf("get")?(i=t.slice(3,4).toLowerCase()+t.slice(4,t.length),r.computedProperties[i]||(r.computedProperties[i]={annotations:{}}),r.computedProperties[i].get=t):0===t.indexOf("set")?(i=t.slice(3,4).toLowerCase()+t.slice(4,t.length),r.computedProperties[i]||(r.computedProperties[i]={annotations:{}}),r.computedProperties[i].set=t):0===t.indexOf("has")?(i=t.slice(3,4).toLowerCase()+t.slice(4,t.length),r.computedProperties[i]||(r.computedProperties[i]={annotations:{}}),r.computedProperties[i].get=t):0===t.indexOf("is")&&(i=t.slice(2,3).toLowerCase()+t.slice(3,t.length),r.computedProperties[i]||(r.computedProperties[i]={annotations:{}}),r.computedProperties[i].get=t),o=_(e[t]))r.methods[t].annotations[c]=o[c],i&&(r.computedProperties[i].annotations[c]=o[c]);p=e[t],Boolean(p.toString().match(/.*(\$super|\$name|\$computedPropertyName).*/))?n.prototype[t]=function(n,i,o){return function(){var e=this.$super,t=this.$name,r=this.$computedPropertyName;this.$super=s.prototype[i],this.$name=i,this.$computedPropertyName=o;try{return n.apply(this,arguments)}finally{e?this.$super=e:delete this.$super,t?this.$name=t:delete this.$name,r?this.$computedPropertyName=r:delete this.$computedPropertyName}}}(e[t],t,i):n.prototype[t]=e[t]}else r.attributes[t]=!0,n.prototype[t]=e[t];var f=Object.getOwnPropertyNames(s);for(f=f.filter(function(e){return-1==["caller","callee","arguments","$class","$extend","$map"].indexOf(e)}),a=0;a<f.length;a++)void 0===n[f[a]]&&(n[f[a]]=s[f[a]]);if(e.__classvars__)for(t in e.__classvars__)n[t]=e.__classvars__[t];Object.defineProperty(n,"$class",{enumerable:!1,value:n}),Object.defineProperty(n,"$extend",{enumerable:!1,value:h.$extend}),Object.defineProperty(n,"$map",{enumerable:!1,value:r});var d=e.__postBuild__||s.prototype.__postBuild__;return d&&d(e,n,s),n}}),t.exports=h},{"./annotation.js":2}],2:[function(e,t,r){"use strict";t.exports=function(e){for(var t,r,n,i,o=function(e){for(var t,r,n,i=[],o=!1,s=!1,a=0;a<e.length;a++)if(n=e[a],o)s?(r+="\\"==n?"\\":"n"==n?"\n":"r"==n?"\r":"t"==n?"\t":n==t?t:"\\"+n,s=!1):"\\"==n?s=!0:n==t?(i.push(r),o=!1):r+=n;else{if('"'!=n&&"'"!=n){if(-1<[" "," ","\n","\r",";"].indexOf(n))continue;break}s=!(o=!0),t=n,r=""}return i}(function(e){for(var t,r=0,n=0;n<e.length;n++)if("("==(t=e[n]))++r;else if(")"==t)--r;else if("{"==t&&0===r){e=e.slice(n+1);break}return e=(e=(e=e.replace(/\/\*(.|\r|\n)*?\*\//g,"")).replace(/\/\/.*?\r?\n/g,"\n")).replace(/\s*\r?\n\s*/g,"")}(e.toString())),s={},a=0;a<o.length;a++)0===(t=o[a].trim()).indexOf("@")&&(r=t.slice(1,-1<t.indexOf(" ")?t.indexOf(" "):t.length),n=!0,-1<t.indexOf(" ")&&(n=(n=t.slice(t.indexOf(" ")+1,t.length)).trim(),n="true"==(i=n)||"false"!=i&&("null"==i?null:"undefined"==i?void 0:i.match(/^([0-9]+\.?|[0-9]*\.[0-9]+)$/)?parseFloat(i):i)),s[r]=n);return s}},{}]},{},[1])(1)});

var ChannelSetting = Class.$extend({
    __init__: function(channel) {
        this.channel = channel;
        this.bankselectcourse = null;
        this.bankselectfine = null;
        this.programchange = null;
        this.ccs = null;
    }
});

var CCSetting = Class.$extend({
    __init__: function(number, value) {
        this.number = number;
        this.value = value;
    }
});

channel1 = new ChannelSetting(1);
channel2 = new ChannelSetting(2);
channel3 = new ChannelSetting(3);
channel4 = new ChannelSetting(4);
channel5 = new ChannelSetting(5);
channel6 = new ChannelSetting(6);
channel7 = new ChannelSetting(7);
channel8 = new ChannelSetting(8);
channel9 = new ChannelSetting(9);
channel10 = new ChannelSetting(10);
channel11 = new ChannelSetting(11);
channel12 = new ChannelSetting(12);
channel13 = new ChannelSetting(13);
channel14 = new ChannelSetting(14);
channel15 = new ChannelSetting(15);
channel16 = new ChannelSetting(16);

var settings = {};
var storedSettings = null;
for (i = 1; i <= 16; i++) {
    settings["channel" + i] = {
        "bankselectcourse": null,
        "bankselectfine": null,
        "programchange": null,
        "channel": i,
        "ccs": []
    };
}

WebMidi.enable(function (err) {
    if (err) {
        $("#container").html("<p>WebMidi could not be enabled.</p>")
    } else {
        init();
    }
});

function init() {
    displayInputNames();
    displayOutputNames();
    createListeners();
}

function updateSettingsDisplay() {
    $("#settings").text(JSON.stringify(settings, null, 1));
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function sendPCtoOutput(output, channel, programchange, bankselectcoarse, bankselectfine) {
    if (programchange != undefined) {
        output.sendControlChange(0, bankselectcoarse, channel);
        output.sendControlChange(32, bankselectfine, channel);
        output.sendProgramChange(programchange, channel);
    }

}

function sendStoredSettingsToAllOuts() {
    WebMidi.outputs.forEach(output => {
        for (var key in storedSettings) {
            var bankselectcourse = 0;
            var bankselectfine = 0;
            var programchange = undefined;
            var channel = storedSettings[key]["channel"];

            if (settings[key]["bankselectcourse"] != null) {
                bankselectcourse = storedSettings[key]["bankselectcourse"];
            };

            if (settings[key]["bankselectfine"] != null) {
                bankselectfine = storedSettings[key]["bankselectfine"];
            };

            if (settings[key]["programchange"] != null) {
                programchange = storedSettings[key]["programchange"];
            };
            sendPCtoOutput(output, channel, programchange, bankselectcourse, bankselectfine);
        }
    });
}

function displayOutputNames() {
    htmlStr = "MIDI Outputs found:<ul>";
    WebMidi.outputs.forEach(output => {
        htmlStr = htmlStr + `<li>${output.name}</li>`;
    });
    htmlStr = htmlStr + "</ul>";
    $("#outputs_found").html(htmlStr);
}

function displayInputNames() {
    htmlStr = "MIDI Inputs found:<ul>";
    WebMidi.inputs.forEach(input => {
        htmlStr = htmlStr + `<li>${input.name}</li>`;
    });
    htmlStr = htmlStr + "</ul>";
    $("#inputs_found").html(htmlStr);
}

function updateSettingsGrid() {
    for (i = 1; i <= 16; i++) {
        $(`#bankselectcoarse_${i}`).text(settings["channel" + i]["bankselectcourse"]);
        $(`#bankselectfine_${i}`).text(settings["channel" + i]["bankselectfine"]);
        $(`#pc_${i}`).text(settings["channel" + i]["programchange"]);
    }
}

function updateStoredSettingsGrid() {
    for (i = 1; i <= 16; i++) {
        $(`#stored_bankselectcoarse_${i}`).text(storedSettings["channel" + i]["bankselectcourse"]);
        $(`#stored_bankselectfine_${i}`).text(storedSettings["channel" + i]["bankselectfine"]);
        $(`#stored_pc_${i}`).text(storedSettings["channel" + i]["programchange"]);
    }
}

function createListeners() {
    WebMidi.inputs.forEach(input => {

        // Listen to control change message on all channels
        input.addListener("controlchange", "all", function (e) {
            switch (e.controller.name) {
                case "bankselectcoarse":

                    console.log(`Updating MSB for ch: ${e.channel} to ${e.value}`);
                    $(`#bankselectcoarse_${e.channel}`).text(e.value);
                    settings["channel" + e.channel]["bankselectcourse"] = e.value;
                    updateSettingsDisplay();
                    break;
                case "bankselectfine":

                    console.log(`Updating LSB for ch: ${e.channel} to ${e.value}`);
                    $(`#bankselectfine_${e.channel}`).text(e.value);
                    settings["channel" + e.channel]["bankselectfine"] = e.value;
                    updateSettingsDisplay();
                    break;
                default:
                    console.log("Received 'controlchange' message.", e);
                    settings["channel" + e.channel]["ccs"][e.controller.number] = e.value;
            }
        });

        input.addListener("programchange", "all", function (e) {
            $(`#pc_${e.channel}`).text(e.value);
            settings["channel" + e.channel]["programchange"] = e.value;
            updateSettingsDisplay();
            console.log(`Updating PC for ch: ${e.channel} to ${e.value}`);
        });
    });
}

$(document).ready(function () {
    $('#settingsButton').click(function () {
        if ($('#settings').css('visibility') == 'hidden')
            $('#settings').css('visibility', 'visible');
        else
            $('#settings').css('visibility', 'hidden');
    });

    $('#storebtn').click(function () {
        storedSettings = JSON.parse(JSON.stringify(settings));
        $('#restorebtn').css('visibility', 'visible');
        $('#storedSettingsTable').css('display', 'block');
        updateStoredSettingsGrid();
    });

    $('#restorebtn').click(function () {
        sendStoredSettingsToAllOuts();
        settings = JSON.parse(JSON.stringify(storedSettings));
        updateSettingsGrid();
    });
});


