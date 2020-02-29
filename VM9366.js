window._layerSlider = {
    globals: {youTubeIsReady: !1, vimeoIsReady: !1},
    GSAP: "undefined" != typeof LS_GSAP && LS_GSAP,
    pluginsLoaded: [],
    pluginsNotLoaded: [],
    pluginsBeingLoaded: [],
    plugins: {},
    slidersList: {},
    currentScript: document.currentScript,
    lsScript: jQuery('script[src*="layerslider.kreaturamedia.jquery.js"]')[0],
    scriptPath: "",
    pluginsPath: !1,
    showNotice: function (e, t, i, s) {
        var a, o, r = "string" == typeof e ? jQuery("#" + e).first() : e;
        switch (t) {
            case"jquery":
                o = "Multiple jQuery issue", a = 'It looks like that another plugin or your theme loads an extra copy of the jQuery library causing problems for LayerSlider to show your sliders. Please navigate on your WordPress admin area to the main page of LayerSlider and enable the "Put JS includes to body" option within the Troubleshooting & Advanced Settings box.';
                break;
            case"oldjquery":
                o = "Old jQuery issue", a = "It looks like you are using an old version (" + i + ") of the jQuery library. LayerSlider requires at least version " + s + ' or newer. Please update jQuery to 1.10.x or higher. Important: Please do not use the jQuery Updater plugin on WordPress . <a href="https://support.kreaturamedia.com/faq/4/layerslider-for-wordpress/#group-13&entry-60">You can read more about updating jQuery by clicking here.</a>'
        }
        jQuery('<div class="ls-notification"><i class="ls-notification-logo">!</i><strong>' + o + "</strong><span>" + a + "</span></div>").insertBefore(r)
    },
    removeSlider: function (e) {
        this.slidersList[e] = null, delete this.slidersList[e]
    },
    checkVersions: function (e, t) {
        for (var i = e.split("."), s = t.split("."), a = 0; a < i.length; ++a) {
            if (s.length == a) return !1;
            if (parseInt(i[a]) != parseInt(s[a])) return !(parseInt(i[a]) > parseInt(s[a]))
        }
        return i.length, s.length, !0
    }
}, Number.prototype.indexOf = function (e) {
    return ("" + this).indexOf(e)
}, function (e) {
    "use strict";
    window._layerSliders = {}, e.fn.layerSlider = function (i, s, a, o) {
        i = i || {};
        var r, n = "1.8.0", l = e.fn.jquery;
        if (window._layerSlider.checkVersions(n, l, n)) return (typeof i).match("object|undefined") ? this.each(function (s) {
            r = "LS" + Math.random().toString(36).substr(2, 9), e(this).data("lsSliderUID") || (window._layerSliders[r] = new t(this, e(this), i, r))
        }) : "data" === i ? window._layerSliders[this.data("lsSliderUID")] : "eventData" === i ? window._layerSliders[this.data("lsSliderUID")].api.eventData() : "defaultInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].defaults.init.options || !1 : "userInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].userInitOptions || !1 : "sliderInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].o || !1 : "originalMarkup" === i ? window._layerSliders[this.data("lsSliderUID")].originalMarkup || !1 : this.each(function (t) {
            var r = window._layerSliders[e(this).data("lsSliderUID")];
            r && r.api.methods(i, s, a, o), r = null
        });
        window._layerSlider.showNotice(e(this), "oldjquery", l, n)
    };
    var t = function (t, i, s, a) {
        i.data("lsSliderUID", a).attr("data-layerslider-uid", a);
        var o = this, r = o.gsap = window._layerSlider.GSAP ? window._layerSlider.GSAP : window;
        o.defaults = {
            init: {
                lsDataArraySplitChar: "|",
                dataKey: "_LS",
                controls: ["#start", "#stop", "#prev", "#next", "#replay", "#reverse", "#reverse-replay"],
                options: {
                    type: "responsive",
                    fullSizeMode: "normal",
                    fitScreenWidth: !0,
                    preventSliderClip: !0,
                    allowFullscreen: !0,
                    responsiveUnder: -1,
                    layersContainerWidth: -1,
                    layersContainerHeight: -1,
                    maxRatio: -1,
                    insertMethod: "prependTo",
                    insertSelector: null,
                    clipSlideTransition: !1,
                    slideBGSize: "cover",
                    slideBGPosition: "50% 50%",
                    preferBlendMode: !1,
                    autoStart: !0,
                    startInViewport: !0,
                    playByScroll: !1,
                    playByScrollSpeed: 1,
                    playByScrollStart: !1,
                    playByScrollSkipSlideBreaks: !1,
                    pauseOnHover: "slideshowOnly",
                    pauseLayers: !1,
                    firstSlide: 1,
                    sliderFadeInDuration: 350,
                    cycles: -1,
                    forceCycles: !0,
                    twoWaySlideshow: !1,
                    shuffleSlideshow: !1,
                    forceLayersOutDuration: 750,
                    skin: "v6",
                    skinsPath: "/layerslider/skins/",
                    globalBGColor: "transparent",
                    globalBGImage: !1,
                    globalBGRepeat: "no-repeat",
                    globalBGAttachment: "scroll",
                    globalBGSize: "auto",
                    globalBGPosition: "50% 50%",
                    navPrevNext: !0,
                    navStartStop: !0,
                    navButtons: !0,
                    keybNav: !0,
                    touchNav: !0,
                    hoverPrevNext: !0,
                    hoverBottomNav: !1,
                    showBarTimer: !1,
                    showCircleTimer: !0,
                    showSlideBarTimer: !1,
                    thumbnailNavigation: "hover",
                    tnContainerWidth: "60%",
                    tnWidth: 100,
                    tnHeight: 60,
                    tnActiveOpacity: 35,
                    tnInactiveOpacity: 100,
                    scrollModifier: 0,
                    autoPlayVideos: !0,
                    autoPauseSlideshow: "auto",
                    youtubePreview: "maxresdefault.jpg",
                    parallaxCenterDegree: 40,
                    parallaxSensitivity: 10,
                    parallaxCenterLayers: "center",
                    parallaxScrollReverse: !1,
                    yourLogo: !1,
                    yourLogoStyle: "left: -10px; top: -10px;",
                    yourLogoLink: !1,
                    yourLogoTarget: "_self",
                    optimizeForMobile: !0,
                    hideOnMobile: !1,
                    hideUnder: -1,
                    hideOver: -1,
                    slideOnSwipe: !0,
                    allowRestartOnResize: !1,
                    useSrcset: !0,
                    hashChange: !1,
                    staticImage: ""
                }
            }, slider: {errorText: "LayerSlider (UID: " + a + ") error:"}, slide: {
                keys: {
                    slidedelay: ["data", "duration"],
                    duration: ["data", "duration"],
                    timeshift: ["data", "timeShift"],
                    transition2d: ["data", "transition2d"],
                    transition3d: ["data", "transition3d"],
                    transitionorigami: ["data", "transitionorigami"],
                    customtransition2d: ["data", "customtransition2d"],
                    customtransition3d: ["data", "customtransition3d"],
                    transitionduration: ["data", "transitionDuration"],
                    backgroundsize: ["data", "backgroundSize"],
                    bgsize: ["data", "backgroundSize"],
                    backgroundposition: ["data", "backgroundPosition"],
                    bgposition: ["data", "backgroundPosition"],
                    backgroundcolor: ["data", "backgroundColor"],
                    bgcolor: ["data", "backgroundColor"],
                    thumbnail: ["data", "thumbnail"],
                    deeplink: ["data", "deeplink"],
                    overflow: ["data", "overflow"],
                    kenburnspan: ["kenBurns", "pan"],
                    kenburnszoom: ["kenBurns", "zoom"],
                    kenburnsrotation: ["kenBurns", "rotation"],
                    kenburnsrotate: ["kenBurns", "rotation"],
                    kenburnsscale: ["kenBurns", "scale"],
                    filterfrom: ["filter", "from"],
                    filterto: ["filter", "to"],
                    parallaxtype: ["parallax", "type"],
                    parallaxevent: ["parallax", "event"],
                    parallaxaxis: ["parallax", "axis"],
                    parallaxtransformorigin: ["parallax", "transformOrigin"],
                    parallaxdurationmove: ["parallax", "durationMove"],
                    parallaxdurationleave: ["parallax", "durationLeave"],
                    parallaxrotate: ["parallax", "rotation"],
                    parallaxrotation: ["parallax", "rotation"],
                    parallaxdistance: ["parallax", "distance"],
                    parallaxtransformperspective: ["parallax", "transformPerspective"],
                    globalhover: ["data", "globalhover"]
                },
                options: {
                    $link: !1,
                    index: -1,
                    data: {duration: -1, timeShift: 0, calculatedTimeShift: 0},
                    parallax: {},
                    kenBurns: {scale: 1.2},
                    filter: {}
                },
                registerPluginDefaults: function (e, t, i) {
                    o.defaults.slide.options.plugins || (o.defaults.slide.options.plugins = {}), o.defaults.slide.options.plugins[e] = t
                }
            }, layer: {
                keys: {
                    keyframe: ["is"],
                    responsive: ["is"],
                    position: ["settings"],
                    static: ["settings"],
                    mirrortransitions: ["settings"],
                    minfontsize: ["styleSettings"],
                    minmobilefontsize: ["styleSettings"],
                    overlay: ["styleSettings"],
                    autoplay: ["mediaSettings"],
                    controls: ["mediaSettings"],
                    showinfo: ["mediaSettings"],
                    fillmode: ["mediaSettings"],
                    thumbnail: ["mediaSettings"],
                    volume: ["mediaSettings"],
                    backgroundvideo: ["mediaSettings"],
                    fadein: ["opacity", "inLayerFromCSS"],
                    opacityin: ["opacity", "inLayerFromCSS"],
                    rotatein: ["rotation", "inLayerFromCSS"],
                    rotatexin: ["rotationX", "inLayerFromCSS"],
                    rotateyin: ["rotationY", "inLayerFromCSS"],
                    rotationin: ["rotation", "inLayerFromCSS"],
                    rotationxin: ["rotationX", "inLayerFromCSS"],
                    rotationyin: ["rotationY", "inLayerFromCSS"],
                    scalein: ["scale", "inLayerFromCSS"],
                    scalexin: ["scaleX", "inLayerFromCSS"],
                    scaleyin: ["scaleY", "inLayerFromCSS"],
                    skewxin: ["skewX", "inLayerFromCSS"],
                    skewyin: ["skewY", "inLayerFromCSS"],
                    bgcolorin: ["backgroundColor", "inLayerStyleFromCSS"],
                    colorin: ["color", "inLayerStyleFromCSS"],
                    radiusin: ["borderRadius", "inLayerStyleShouldBeConvertedFrom"],
                    widthin: ["width", "inLayerStyleShouldBeConvertedFrom"],
                    heightin: ["height", "inLayerStyleShouldBeConvertedFrom"],
                    filterin: ["filter", "inLayerStyleShouldBeConvertedFrom"],
                    rotate: ["rotation", "inLayerToCSS"],
                    rotatex: ["rotationX", "inLayerToCSS"],
                    rotatey: ["rotationY", "inLayerToCSS"],
                    rotation: ["rotation", "inLayerToCSS"],
                    rotationx: ["rotationX", "inLayerToCSS"],
                    rotationy: ["rotationY", "inLayerToCSS"],
                    scale: ["scale", "inLayerToCSS"],
                    scalex: ["scaleX", "inLayerToCSS"],
                    scaley: ["scaleY", "inLayerToCSS"],
                    skewx: ["skewX", "inLayerToCSS"],
                    skewy: ["skewY", "inLayerToCSS"],
                    transformoriginin: ["transformOrigin", "inLayerShouldBeConverted"],
                    offsetxin: ["x", "inLayerShouldBeConverted"],
                    offsetyin: ["y", "inLayerShouldBeConverted"],
                    clipin: ["clip", "inClipShouldBeConverted"],
                    delayin: ["startAt", "in"],
                    startatin: ["startAt", "in"],
                    instartat: ["startAt", "in"],
                    durationin: ["duration", "in"],
                    easein: ["ease", "in"],
                    easingin: ["ease", "in"],
                    transitionin: ["enabled", "in"],
                    textfadein: ["opacity", "textInNodesFrom"],
                    textopacityin: ["opacity", "textInNodesFrom"],
                    textrotatein: ["rotation", "textInNodesFrom"],
                    textrotatexin: ["rotationX", "textInNodesFrom"],
                    textrotateyin: ["rotationY", "textInNodesFrom"],
                    textrotationin: ["rotation", "textInNodesFrom"],
                    textrotationxin: ["rotationX", "textInNodesFrom"],
                    textrotationyin: ["rotationY", "textInNodesFrom"],
                    textscalein: ["scale", "textInNodesFrom"],
                    textscalexin: ["scaleX", "textInNodesFrom"],
                    textscaleyin: ["scaleY", "textInNodesFrom"],
                    textskewxin: ["skewX", "textInNodesFrom"],
                    textskewyin: ["skewY", "textInNodesFrom"],
                    texteasein: ["ease", "textInNodesTo"],
                    texteasingin: ["ease", "textInNodesTo"],
                    texttransformoriginin: ["transformOrigin", "textInShouldBeConverted"],
                    textoffsetxin: ["x", "textInShouldBeConverted"],
                    textoffsetyin: ["y", "textInShouldBeConverted"],
                    texttypein: ["type", "textIn"],
                    textshiftin: ["shiftNodes", "textIn"],
                    textdelayin: ["startAt", "textIn"],
                    textstartatin: ["startAt", "textIn"],
                    textinstartat: ["startAt", "textIn"],
                    textdurationin: ["duration", "textIn"],
                    texttransitionin: ["enabled", "textIn"],
                    fadeout: ["opacity", "outLayerToCSS"],
                    opacityout: ["opacity", "outLayerToCSS"],
                    rotateout: ["rotation", "outLayerToCSS"],
                    rotatexout: ["rotationX", "outLayerToCSS"],
                    rotateyout: ["rotationY", "outLayerToCSS"],
                    rotationout: ["rotation", "outLayerToCSS"],
                    rotationxout: ["rotationX", "outLayerToCSS"],
                    rotationyout: ["rotationY", "outLayerToCSS"],
                    scaleout: ["scale", "outLayerToCSS"],
                    scalexout: ["scaleX", "outLayerToCSS"],
                    scaleyout: ["scaleY", "outLayerToCSS"],
                    skewxout: ["skewX", "outLayerToCSS"],
                    skewyout: ["skewY", "outLayerToCSS"],
                    bgcolorout: ["backgroundColor", "outLayerStyleToCSS"],
                    colorout: ["color", "outLayerStyleToCSS"],
                    radiusout: ["borderRadius", "outLayerStyleShouldBeConvertedTo"],
                    widthout: ["width", "outLayerStyleShouldBeConvertedTo"],
                    heightout: ["height", "outLayerStyleShouldBeConvertedTo"],
                    filterout: ["filter", "outLayerStyleShouldBeConvertedTo"],
                    transformoriginout: ["transformOrigin", "outLayerShouldBeConverted"],
                    offsetxout: ["x", "outLayerShouldBeConverted"],
                    offsetyout: ["y", "outLayerShouldBeConverted"],
                    clipout: ["clip", "outClipShouldBeConverted"],
                    showuntil: ["showUntil", "out"],
                    startatout: ["startAt", "out"],
                    outstartat: ["startAt", "out"],
                    durationout: ["duration", "out"],
                    easeout: ["ease", "out"],
                    easingout: ["ease", "out"],
                    transitionout: ["enabled", "out"],
                    textfadeout: ["opacity", "textOutNodesTo"],
                    textopacityout: ["opacity", "textOutNodesTo"],
                    textrotateout: ["rotation", "textOutNodesTo"],
                    textrotatexout: ["rotationX", "textOutNodesTo"],
                    textrotateyout: ["rotationY", "textOutNodesTo"],
                    textrotationout: ["rotation", "textOutNodesTo"],
                    textrotationxout: ["rotationX", "textOutNodesTo"],
                    textrotationyout: ["rotationY", "textOutNodesTo"],
                    textscaleout: ["scale", "textOutNodesTo"],
                    textscalexout: ["scaleX", "textOutNodesTo"],
                    textscaleyout: ["scaleY", "textOutNodesTo"],
                    textskewxout: ["skewX", "textOutNodesTo"],
                    textskewyout: ["skewY", "textOutNodesTo"],
                    texteaseout: ["ease", "textOutNodesTo"],
                    texteasingout: ["ease", "textOutNodesTo"],
                    texttransformoriginout: ["transformOrigin", "textOutShouldBeConverted"],
                    textoffsetxout: ["x", "textOutShouldBeConverted"],
                    textoffsetyout: ["y", "textOutShouldBeConverted"],
                    texttypeout: ["type", "textOut"],
                    textshiftout: ["shiftNodes", "textOut"],
                    textdelayout: ["startAt", "textOut"],
                    textstartatout: ["startAt", "textOut"],
                    textoutstartat: ["startAt", "textOut"],
                    textdurationout: ["duration", "textOut"],
                    texttransitionout: ["enabled", "textOut"],
                    loopopacity: ["opacity", "loopToCSS"],
                    looprotate: ["rotation", "loopToCSS"],
                    looprotatex: ["rotationX", "loopToCSS"],
                    looprotatey: ["rotationY", "loopToCSS"],
                    looprotation: ["rotation", "loopToCSS"],
                    looprotationx: ["rotationX", "loopToCSS"],
                    looprotationy: ["rotationY", "loopToCSS"],
                    loopscale: ["scale", "loopToCSS"],
                    loopscalex: ["scaleX", "loopToCSS"],
                    loopscaley: ["scaleY", "loopToCSS"],
                    loopskewx: ["skewX", "loopToCSS"],
                    loopskewy: ["skewY", "loopToCSS"],
                    looptransformorigin: ["transformOrigin", "loopLayerShouldBeConverted"],
                    loopoffsetx: ["x", "loopLayerShouldBeConverted"],
                    loopoffsety: ["y", "loopLayerShouldBeConverted"],
                    loopfilter: ["filter", "loopLayerShouldBeConverted"],
                    loopclip: ["clip", "loopClipShouldBeConverted"],
                    loopdelay: ["startAt", "loop"],
                    loopstartat: ["startAt", "loop"],
                    loopduration: ["duration", "loop"],
                    loopcount: ["count", "loop"],
                    looprepeatdelay: ["repeatDelay", "loop"],
                    loopyoyo: ["yoyo", "loop"],
                    loopease: ["ease", "loop"],
                    loopeasing: ["ease", "loop"],
                    loop: ["enabled", "loop"],
                    hoveropacity: ["opacity", "hoverToCSS"],
                    hoverrotate: ["rotation", "hoverToCSS"],
                    hoverrotatex: ["rotationX", "hoverToCSS"],
                    hoverrotatey: ["rotationY", "hoverToCSS"],
                    hoverrotation: ["rotation", "hoverToCSS"],
                    hoverrotationx: ["rotationX", "hoverToCSS"],
                    hoverrotationy: ["rotationY", "hoverToCSS"],
                    hoverscale: ["scale", "hoverToCSS"],
                    hoverscalex: ["scaleX", "hoverToCSS"],
                    hoverscaley: ["scaleY", "hoverToCSS"],
                    hoverskewx: ["skewX", "hoverToCSS"],
                    hoverskewy: ["skewY", "hoverToCSS"],
                    hoverbgcolor: ["backgroundColor", "hoverToCSS"],
                    hovercolor: ["color", "hoverToCSS"],
                    hoverease: ["easeIn", "hover"],
                    hovereasing: ["easeIn", "hover"],
                    hovereasein: ["easeIn", "hover"],
                    hovereasingin: ["easeIn", "hover"],
                    hovereaseout: ["easeOut", "hover"],
                    hovereasingout: ["easeOut", "hover"],
                    hoverduration: ["durationIn", "hover"],
                    hoverdurationin: ["durationIn", "hover"],
                    hoverdurationout: ["durationOut", "hover"],
                    hoveralwaysontop: ["alwaysOnTop", "hover"],
                    hoveroffsetx: ["x", "hoverShouldBeConverted"],
                    hoveroffsety: ["y", "hoverShouldBeConverted"],
                    hoverfilter: ["filter", "hoverShouldBeConverted"],
                    hoverborderradius: ["borderRadius", "hoverShouldBeConverted"],
                    hoverradius: ["borderRadius", "hoverShouldBeConverted"],
                    hovertransformorigin: ["transformOrigin", "hoverShouldBeConverted"],
                    hover: ["enabled", "hover"],
                    kenburnspan: ["pan", "kenBurns"],
                    kenburnszoom: ["zoom", "kenBurns"],
                    kenburnsrotation: ["rotation", "kenBurns"],
                    kenburnsrotate: ["rotation", "kenBurns"],
                    kenburnsscale: ["scale", "kenBurns"],
                    parallaxlevel: ["level", "parallax"],
                    parallaxtype: ["type", "parallax"],
                    parallaxevent: ["event", "parallax"],
                    parallaxaxis: ["axis", "parallax"],
                    parallaxtransformorigin: ["transformOrigin", "parallax"],
                    parallaxdurationmove: ["durationMove", "parallax"],
                    parallaxdurationleave: ["durationLeave", "parallax"],
                    parallaxrotate: ["rotation", "parallax"],
                    parallaxrotation: ["rotation", "parallax"],
                    parallaxdistance: ["distance", "parallax"],
                    parallax: ["enabled", "parallax"],
                    transformperspective: ["layer", "transformPerspective"],
                    transformperspectivein: ["layer", "transformPerspective"],
                    transformperspectiveout: ["layer", "transformPerspective"],
                    texttransformperspective: ["text", "transformPerspective"],
                    texttransformperspectivein: ["text", "transformPerspective"],
                    texttransformperspectiveout: ["text", "transformPerspective"],
                    looptransformperspective: ["loop", "transformPerspective"],
                    hovertransformperspective: ["hover", "transformPerspective"],
                    parallaxtransformperspective: ["parallax", "transformPerspective"]
                },
                splitTypeKeys: ["chars_asc", "chars_desc", "chars_rand", "chars_center", "chars_edge", "words_asc", "words_desc", "words_rand", "words_center", "words_edge", "lines_asc", "lines_desc", "lines_rand", "lines_center", "lines_edge"],
                timelineHierarchy: {
                    transitioninstart: [1],
                    transitioninend: [2],
                    textinstart: [3, [1, 2, 6, 7, 8]],
                    textinend: [4],
                    allinend: [5],
                    loopstart: [6, [1, 2, 3, 4, 5]],
                    loopend: [7],
                    transitioninandloopend: [8],
                    textinandloopend: [9],
                    allinandloopend: [10],
                    textoutstart: [11, [2, 3, 4, 5, 6, 7, 8, 9, 10]],
                    textoutend: [12],
                    textoutandloopend: [13],
                    transitionoutstart: [14, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
                    transitionoutend: [15],
                    alloutend: [16],
                    alloutandloopend: [17]
                },
                properties: {
                    filter: function () {
                        return {
                            blur: 0,
                            brightness: 100,
                            contrast: 100,
                            grayscale: 0,
                            "hue-rotate": 0,
                            invert: 0,
                            saturate: 100,
                            sepia: 0
                        }
                    }
                },
                options: function (e, t) {
                    var i = {
                        is: {
                            slideBackground: !!e.is("img.ls-bg"),
                            backgroundVideo: !!e.is(".ls-bg-video"),
                            imageLayer: !!e.is("img.ls-layer"),
                            mediaLayer: !1,
                            textLayer: !1,
                            responsive: !0,
                            onSlide: t
                        },
                        should: {},
                        elements: {},
                        settings: {position: "relative", slideIn: t, slideOut: t},
                        styleSettings: {minfontsize: 0, minmobilefontsize: 0},
                        mediaSettings: {
                            controls: null,
                            autoplay: null,
                            showinfo: null,
                            fillmode: "cover",
                            thumbnail: null,
                            volume: null,
                            backgroundVideo: !1
                        },
                        timeline: {
                            transitioninstart: 0,
                            transitioninend: 0,
                            textinstart: 0,
                            textinend: 0,
                            allinend: function (e) {
                                return Math.max(this.transitioninend, this.textinend)
                            },
                            loopstart: 0,
                            loopend: 0,
                            transitioninandloopend: function (e) {
                                return 0 === this.loopend && e.loop.enabled && ("number" == typeof e.loop.startAt || -1 !== e.loop.startAt.indexOf("textinstart") && -1 !== e.loop.startAt.indexOf("textinend") && -1 !== e.loop.startAt.indexOf("allinend")) ? (this.loopstart = o.transitions.layers.timeline.getTiming(e, e.loop.startAt, "loopstart"), this.loopend = -1 !== e.loop.count && e.timeline.loopstart + (e.loop.repeat + 1) * e.loop.duration + e.loop.repeat * e.loop.repeatDelay) : o.debugMode && o.debug.add("warn", "layerTransition.infinite", e.self[0].tagName + "." + e.self.attr("class") + " [ " + e.self.html().substr(0, 30) + "... ]"), Math.max(this.transitioninend, this.loopend)
                            },
                            textinandloopend: function (e) {
                                return Math.max(this.textinend, this.loopend)
                            },
                            allinandloopend: function (e) {
                                return Math.max(this.allinend(), this.loopend)
                            },
                            textoutstart: 0,
                            textoutend: 0,
                            textoutandloopend: function (e) {
                                return Math.max(this.textoutend, this.loopend)
                            },
                            transitionoutstart: function (e) {
                                return Math.max(this.allinandloopend(), this.textoutend)
                            },
                            transitionoutend: 0,
                            alloutend: function (e) {
                                return Math.max(this.transitionoutend, this.textoutend, this.allinend())
                            },
                            alloutandloopend: function (e) {
                                return Math.max(this.transitionoutend, this.textoutandloopend(), this.allinend())
                            },
                            staticfrom: !1,
                            staticto: !1
                        },
                        transitionProperties: {
                            in: {
                                enabled: !0,
                                layerFrom: {autoCSS: !1, immediateRender: !1, css: {opacity: 0}},
                                layerTo: {
                                    autoCSS: !1,
                                    onStart: function () {
                                        o.transitions.layers.in.onStart(e)
                                    },
                                    onComplete: function () {
                                        o.transitions.layers.in.onComplete(e)
                                    },
                                    css: {
                                        display: "block",
                                        opacity: 1,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                },
                                layerStyleFrom: {autoCSS: !1, immediateRender: !1, css: {}},
                                layerStyleTo: {autoCSS: !1, css: {}},
                                clipFrom: {autoCSS: !1, immediateRender: !1, css: {}},
                                clipTo: {autoCSS: !1, css: {}},
                                layerShouldBeConverted: {transformOrigin: "50% 50% 0", x: 0, y: 0},
                                layerStyleShouldBeConvertedFrom: {},
                                layerStyleShouldBeConvertedTo: {},
                                clipShouldBeConverted: {},
                                startAt: 0,
                                duration: 1,
                                ease: "easeInOutQuint"
                            },
                            textIn: {
                                enabled: null,
                                nodesFrom: {cycle: {}, random: {}, opacity: 0},
                                nodesTo: {
                                    ease: "easeInOutQuint",
                                    css: {
                                        opacity: 1,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                },
                                shouldBeConverted: {cycle: {}, random: {}, transformOrigin: "50% 50% 0", x: 0, y: 0},
                                split: "",
                                shiftNodes: .05,
                                startAt: "transitioninend",
                                duration: 1
                            },
                            out: {
                                enabled: !0,
                                layerFrom: {autoCSS: !1, immediateRender: !1, css: {}},
                                layerTo: {
                                    autoCSS: !1,
                                    onStart: function () {
                                        o.transitions.layers.out.onStart(e)
                                    },
                                    onComplete: function () {
                                        o.transitions.layers.out.onComplete(e)
                                    },
                                    css: {
                                        opacity: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0
                                    }
                                },
                                layerStyleFrom: {autoCSS: !1, immediateRender: !1, css: {}},
                                layerStyleTo: {autoCSS: !1, css: {}},
                                clipFrom: {autoCSS: !1, immediateRender: !1, css: {}},
                                clipTo: {autoCSS: !1, css: {}},
                                layerShouldBeConverted: {x: 0, y: 0},
                                layerStyleShouldBeConvertedFrom: {},
                                layerStyleShouldBeConvertedTo: {},
                                clipShouldBeConverted: {},
                                startAt: "slidechangeonly",
                                duration: 1,
                                ease: "easeInOutQuint"
                            },
                            textOut: {
                                enabled: null,
                                nodesFrom: {immediateRender: !1, cycle: {}, opacity: 1},
                                nodesTo: {
                                    ease: "easeInOutQuint",
                                    immediateRender: !1,
                                    cycle: {},
                                    random: {},
                                    opacity: 0
                                },
                                shouldBeConverted: {cycle: {}, random: {}, x: 0, y: 0},
                                split: "",
                                startAt: "allinandloopend",
                                shiftNodes: .05,
                                duration: 1
                            },
                            loop: {
                                enabled: null,
                                from: {autoCSS: !1, immediateRender: !1, css: {}},
                                to: {autoCSS: !1, css: {}},
                                clipTo: {autoCSS: !1, immediateRender: !1, css: {}},
                                layerShouldBeConverted: {transformOrigin: "50% 50% 0", x: 0, y: 0},
                                clipShouldBeConverted: {},
                                ease: "linear",
                                startAt: "allinend",
                                repeatDelay: 0,
                                duration: 1,
                                count: 0,
                                yoyo: !1
                            },
                            hover: {
                                enabled: null,
                                from: {autoCSS: !1, immediateRender: !1, css: {}},
                                to: {autoCSS: !1, css: {}},
                                shouldBeConverted: {transformOrigin: "50% 50% 0"},
                                alwaysOnTop: !0,
                                easeIn: "easeInOutQuint",
                                durationIn: .5
                            },
                            parallax: {enabled: null},
                            kenBurns: {scale: 1.2},
                            clip: {enabled: !1, min: "0 0 0 0", max: "-9999 9999 9999 -9999"},
                            filter: {
                                values: {
                                    style: {},
                                    in: {},
                                    out: {},
                                    loop: {},
                                    hover: {},
                                    afterIn: {},
                                    afterLoop: {},
                                    bgFrom: {},
                                    bgTo: {}
                                }, transitions: {bg: null, in: null, out: null, loop: null, hover: null}
                            },
                            init: {wrapper: {autoCSS: !1, immediateRender: !1, css: {display: "block"}}},
                            transformPerspective: {layer: 500, text: 500, loop: 500, hover: 500},
                            reset: {
                                wrapperOnTimelineEnd: {autoCSS: !1, css: {opacity: 1, display: "none"}},
                                wrapperOnSlideChange: {
                                    autoCSS: !1,
                                    css: {
                                        x: 0,
                                        y: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        opacity: 1,
                                        display: "none"
                                    }
                                },
                                loopWrapperOnSlideChange: {
                                    autoCSS: !1,
                                    css: {
                                        x: 0,
                                        y: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        opacity: 1
                                    }
                                }
                            }
                        }
                    };
                    return {
                        is: i.is,
                        should: i.should,
                        elements: i.elements,
                        settings: i.settings,
                        styleSettings: i.styleSettings,
                        mediaSettings: i.mediaSettings,
                        mediaProperties: i.mediaProperties,
                        timeline: i.timeline,
                        in: i.transitionProperties.in,
                        inLayerFrom: i.transitionProperties.in.layerFrom,
                        inLayerFromCSS: i.transitionProperties.in.layerFrom.css,
                        inLayerStyleFrom: i.transitionProperties.in.layerStyleFrom,
                        inLayerStyleFromCSS: i.transitionProperties.in.layerStyleFrom.css,
                        inClipFrom: i.transitionProperties.in.clipFrom,
                        inClipFromCSS: i.transitionProperties.in.clipFrom.css,
                        inLayerTo: i.transitionProperties.in.layerTo,
                        inLayerToCSS: i.transitionProperties.in.layerTo.css,
                        inLayerStyleTo: i.transitionProperties.in.layerStyleTo,
                        inLayerStyleToCSS: i.transitionProperties.in.layerStyleTo.css,
                        inClipTo: i.transitionProperties.in.clipTo,
                        inClipToCSS: i.transitionProperties.in.clipTo.css,
                        inClipShouldBeConverted: i.transitionProperties.in.clipShouldBeConverted,
                        inLayerShouldBeConverted: i.transitionProperties.in.layerShouldBeConverted,
                        inLayerStyleShouldBeConvertedFrom: i.transitionProperties.in.layerStyleShouldBeConvertedFrom,
                        inLayerStyleShouldBeConvertedTo: i.transitionProperties.in.layerStyleShouldBeConvertedTo,
                        textIn: i.transitionProperties.textIn,
                        textInNodesFrom: i.transitionProperties.textIn.nodesFrom,
                        textInNodesTo: i.transitionProperties.textIn.nodesTo,
                        textInNodesToCSS: i.transitionProperties.textIn.nodesTo.css,
                        textInShouldBeConverted: i.transitionProperties.textIn.shouldBeConverted,
                        out: i.transitionProperties.out,
                        outLayerFrom: i.transitionProperties.out.layerFrom,
                        outLayerFromCSS: i.transitionProperties.out.layerFrom.css,
                        outLayerStyleFrom: i.transitionProperties.out.layerStyleFrom,
                        outLayerStyleFromCSS: i.transitionProperties.out.layerStyleFrom.css,
                        outLayerTo: i.transitionProperties.out.layerTo,
                        outLayerToCSS: i.transitionProperties.out.layerTo.css,
                        outLayerStyleTo: i.transitionProperties.out.layerStyleTo,
                        outLayerStyleToCSS: i.transitionProperties.out.layerStyleTo.css,
                        outClipTo: i.transitionProperties.out.clipTo,
                        outClipToCSS: i.transitionProperties.out.clipTo.css,
                        outClipShouldBeConverted: i.transitionProperties.out.clipShouldBeConverted,
                        outLayerShouldBeConverted: i.transitionProperties.out.layerShouldBeConverted,
                        outLayerStyleShouldBeConvertedFrom: i.transitionProperties.out.layerStyleShouldBeConvertedFrom,
                        outLayerStyleShouldBeConvertedTo: i.transitionProperties.out.layerStyleShouldBeConvertedTo,
                        textOut: i.transitionProperties.textOut,
                        textOutNodesFrom: i.transitionProperties.textOut.nodesFrom,
                        textOutNodesTo: i.transitionProperties.textOut.nodesTo,
                        textOutShouldBeConverted: i.transitionProperties.textOut.shouldBeConverted,
                        loop: i.transitionProperties.loop,
                        loopFrom: i.transitionProperties.loop.from,
                        loopFromCSS: i.transitionProperties.loop.from.css,
                        loopTo: i.transitionProperties.loop.to,
                        loopToCSS: i.transitionProperties.loop.to.css,
                        loopClipTo: i.transitionProperties.loop.clipTo,
                        loopClipToCSS: i.transitionProperties.loop.clipTo.css,
                        loopClipShouldBeConverted: i.transitionProperties.loop.clipShouldBeConverted,
                        loopLayerShouldBeConverted: i.transitionProperties.loop.layerShouldBeConverted,
                        hover: i.transitionProperties.hover,
                        hoverFrom: i.transitionProperties.hover.from,
                        hoverFromCSS: i.transitionProperties.hover.from.css,
                        hoverTo: i.transitionProperties.hover.to,
                        hoverToCSS: i.transitionProperties.hover.to.css,
                        hoverShouldBeConverted: i.transitionProperties.hover.shouldBeConverted,
                        parallax: i.transitionProperties.parallax,
                        kenBurns: i.transitionProperties.kenBurns,
                        clip: i.transitionProperties.clip,
                        filter: i.transitionProperties.filter,
                        transformPerspective: i.transitionProperties.transformPerspective,
                        init: i.transitionProperties.init,
                        reset: i.transitionProperties.reset
                    }
                }
            }
        }, o.slides = {
            count: 0, first: {}, prev: {}, current: {}, next: {}, init: function () {
                if (!document.body.contains(t)) return !1;
                for (var s = i.find("> .ls-layer, > .ls-slide"), a = 0, r = o.defaults.slide.keys, n = 0, l = s.length; n < l; n++) {
                    var d, u = e(s[n]), p = u[0].style, c = e.extend(!0, {}, o.defaults.slide.options);
                    if (o.slides.count++, u.removeClass("ls-layer").addClass("ls-slide").css({
                        width: o.slider.initial.originalWidth,
                        height: o.slider.initial.originalHeight
                    }).appendTo(o.slider.$hiddenWrapper), u.data("ls")) for (var h = u.data("ls").toLowerCase().split(";"), m = 0; m < h.length; m++) {
                        var f, g, v = h[m].split(":");
                        v[0] = e.trim(v[0]), v[1] = e.trim(v[1]), "" !== v[0] && (void 0 !== r[v[0]] ? (f = void 0 === r[v[0]][1] ? v[0] : r[v[0]][1], g = o.functions.convert.properties(v[1]), -1 === f.toLowerCase().indexOf("duration") && -1 === f.toLowerCase().indexOf("delay") && "timeShift" != f || (g /= 1e3), c[r[v[0]][0]] || (c[r[v[0]][0]] = {}), c[r[v[0]][0]][f] = g) : c.data[v[0]] = v[1])
                    }
                    if (c.plugins && !e.isEmptyObject(c.plugins)) for (var y in c.plugins) if (u.data("ls-plugin-" + y)) {
                        var b = u.data("ls-plugin-" + y).toLowerCase().split(";"), S = {};
                        for (var w in c.plugins[y]) S[w.toLowerCase()] = w;
                        for (var x = 0; x < b.length; x++) {
                            var T, C = b[x].split(":");
                            C[0] = e.trim(C[0]), "" !== C[0] && (T = o.functions.convert.properties(e.trim(C[1])), -1 === C[0].indexOf("duration") && -1 === C[0].indexOf("delay") || (T /= 1e3), S[C[0]] ? c.plugins[y][S[C[0]]] = T : c.plugins[y][C[0]] = T)
                        }
                    } else delete c.plugins[y];
                    if (u.children("a.ls-link").length && (c.data.$link = u.children("a.ls-link").first().css({zIndex: 5}).attr("data-ls-slide-link", a + 1).appendTo(o.slider.$layersWrapper), o.layers.set.smartLinks(c.data.$link)), c.data.$backgroundVideo = u.children('[data-ls*="backgroundvideo"]').first(), c.data.$backgroundVideo.length && (null !== c.data.$backgroundVideo.attr("data-ls").split("backgroundvideo")[1].split(";")[0].match(/(true|enabled|on|1)/i) ? (c.data.$backgroundVideo.addClass("ls-bg-video").css({
                        width: "auto",
                        height: "auto"
                    }).children("video, audio, iframe").css({
                        width: "100%",
                        height: "100%"
                    }), c.data.$backgroundVideo.append(e('<div class="ls-bg-video-overlay"></div>'))) : c.data.$backgroundVideo = !1), u.find("> .ls-bg").length && (c.data.$background = u.find("> .ls-bg").first()), !c.data.thumbnail) u.find("> .ls-tn").length ? d = u.find("> .ls-tn").first() : u.find("> .ls-bg").length && (d = u.find("> .ls-bg").first()), d ? (c.data.thumbnail = o.functions.getURL(d), c.data.tnAlt = o.functions.getALT(d)) : c.data.thumbnail = o.o.skinsPath + o.o.skin + "/nothumb.png";
                    (c.data.customtransition2d || c.data.customtransition3d) && "undefined" == typeof layerSliderCustomTransitions && (delete c.data.customtransition2d, delete c.data.customtransition3d, o.debugMode && o.debug.add("warn", "sliderInit.customTransitions", a + 1)), "visible" === p.overflow && (c.data.overflow = "visible"), c.data.backgroundColor || (c.data.backgroundColor = "" === u[0].style.backgroundColor ? "transparent" : u[0].style.backgroundColor), o.slides[++a] = {}, o.slides[a].data = e.extend(!0, {}, o.defaults.slide.options.data, c.data), o.slides[a].parallax = c.parallax, o.slides[a].kenBurns = c.kenBurns, o.slides[a].filter = c.filter, o.slides[a].index = a, o.slides[a].$layers = e(), o.slides[a].plugins = c.plugins, o.slider.thumbnails.push(c.data.thumbnail), o.layers.init(u, a)
                }
                o.debugMode && o.debug.groupEnd("sliderInit.style")
            }, set: {
                slideIndexes: function () {
                    var e = o.slides;
                    e.prev.index = e.current.index, e.current.index = e.next.index, e.next.index = o.slideshow.get.slideInSequence(o.slideshow.direction), e.set.slidesData(), o.slider.set.attributes()
                }, nextSlideIndex: function (e) {
                    var t = o.slides;
                    t.next.index = e, t.set.slidesData()
                }, slidesData: function () {
                    var t = o.slides;
                    t.prev = -1 !== t.prev.index ? e.extend(!0, {}, t[t.prev.index]) : {}, t.current = -1 !== t.current.index ? e.extend(!0, {}, t[t.current.index]) : {}, t.next = -1 !== t.next.index ? e.extend(!0, {}, t[t.next.index]) : {}
                }, firstSlide: function () {
                    var t = o.slides;
                    if (t.first.index = "random" === o.o.firstSlide ? o.o.firstSlide : Math.max(o.functions.convert.properties(o.o.firstSlide, !0), 1), o.o.shuffleSlideshow && o.slides.count > 2 ? o.o.twoWaySlideshow = !1 : o.o.shuffleSlideshow = !1, t.first.index = "random" == t.first.index ? Math.floor(Math.random() * o.slides.count + 1) : t.first.index, document.location.hash) for (var i = 1; i < t.count + 1; i++) t[i].data.deeplink == document.location.hash.split("#")[1] && (t.first.index = i);
                    t.first.index = t.first.index < 1 || t.first.index > o.slides.count ? 1 : t.first.index, o.o.shuffleSlideshow && "random" != o.o.firstSlide && (t.first.index = o.o.firstSlide), t.first.data = e.extend(!0, {}, t[t.first.index].data), o.o.playByScroll && o.slideshow.set.normalizedSequence(), o.debugMode && o.debug.options.firstSlide && (t.first.index = o.debug.options.firstSlide)
                }
            }, get: {
                deeplink: function (e) {
                    return e && o.slides[e] && o.slides[e].data && o.slides[e].data.deeplink ? o.slides[e].data.deeplink : null
                }
            }, slide: []
        }, o.layers = {
            $all: e(), getStyle: function (e, t) {
                return -1 != e.indexOf("%") ? parseFloat(e) * t : parseFloat(e)
            }, init: function (i, s) {
                if (!document.body.contains(t)) return !1;
                for (var a, r = i.find('.ls-bg, .ls-l, .ls-layer, *[class^="ls-s"]'), n = 0, l = r.length; n < l; n++) {
                    var d = e(r[n]), u = d[0], p = d.children();
                    if (-1 != d.attr("class").indexOf("ls-s")) {
                        var c = d.attr("class").split("ls-s")[1].split(" ")[0];
                        d.removeClass("ls-s" + c).addClass("ls-layer")
                    } else if (d.hasClass("ls-l")) d.removeClass("ls-l").addClass("ls-layer"); else if (!d.is(".ls-bg, .ls-layer")) {
                        d.remove();
                        continue
                    }
                    d.is("a") && 1 === p.length && ((u = (d = d.children().first())[0]).setAttribute("data-ls", u.parentNode.getAttribute("data-ls")), u.parentNode.removeAttribute("data-ls"), d.parent().removeClass("ls-layer"), d.addClass("ls-layer")), d.data(o.defaults.init.dataKey, new o.defaults.layer.options(d, s)), -1 !== d.attr("class").indexOf("ls-linkto-") && this.set.linkTo(d), d.parent().is("a") ? (a = d.parent(), this.set.smartLinks(a)) : a = d, o.slides[s].$layers = o.slides[s].$layers.add(a)
                }
            }, set: {
                smartLinks: function (t) {
                    var i = t.attr("href"), s = t.attr("target"), n = "";
                    if (s && -1 !== s.indexOf("ls-scroll")) {
                        switch (i) {
                            case"pagetop":
                                n = "Scroll to page top";
                                break;
                            case"pagebottom":
                                n = "Scroll to page bottom";
                                break;
                            case"slidertop":
                                n = "Scroll to the top of the slider";
                                break;
                            case"":
                            case"sliderbottom":
                                n = "Scroll to the bottom of the slider";
                                break;
                            default:
                                n = "Scroll to a specified location on the page"
                        }
                        o.layers.set.ariaLabel(t, n), t.on("click." + a, function (t) {
                            t.preventDefault();
                            var s, a = document.body.scrollHeight - o.device.viewportHeight;
                            if (i) switch (i) {
                                case"pagetop":
                                    s = 0;
                                    break;
                                case"pagebottom":
                                    s = o.device.docHeight - o.device.viewportHeight;
                                    break;
                                case"slidertop":
                                    s = o.slider.offsetTop;
                                    break;
                                case"":
                                case"sliderbottom":
                                    s = o.slider.offsetTop + o.slider.height;
                                    break;
                                default:
                                    s = e(i).first().length ? e(i).last().offset().top : o.slider.offsetTop + o.slider.height
                            }
                            s += o.o.scrollModifier, s = Math.min(s, a), s = Math.max(0, s), r.TweenMax.to("html, body", 1, {
                                scrollTop: s,
                                ease: r.Quint.easeInOut
                            })
                        })
                    }
                    if (-1 !== o.defaults.init.controls.indexOf(i) || i.match(/^\#[0-9]/)) {
                        var l = e.trim(i.toLowerCase().split("#")[1]), d = parseInt(l);
                        switch (l) {
                            case"prev":
                                n = "jump to the previous slide";
                                break;
                            case"next":
                                n = "jump to the next slide";
                                break;
                            case"start":
                                n = "start slideshow";
                                break;
                            case"stop":
                                n = "stop slideshow";
                                break;
                            case"replay":
                                n = "replay slide";
                                break;
                            case"reverse":
                                n = "reverse slide";
                                break;
                            case"reverse-replay":
                                n = "reverse, than replay slide";
                                break;
                            default:
                                "number" == typeof d && d == d && (n = "jump to slide " + d)
                        }
                        o.layers.set.ariaLabel(t, n), t.on("click." + a, function (e) {
                            if (e.preventDefault(), -1 !== ["prev", "next", "start", "stop"].indexOf(l)) o.navigation[l]("clicked"); else if ("number" == typeof d && d == d) o.slideshow.changeTo(d, !0, !0); else if (!o.slider.state.changingSlides) switch (l) {
                                case"replay":
                                    o.api.methods("replay");
                                    break;
                                case"reverse":
                                    o.api.methods("reverse");
                                    break;
                                case"reverse-replay":
                                    o.api.methods("reverse", !0)
                            }
                        })
                    }
                }, ariaLabel: function (e, t) {
                    e.attr("aria-label") || e.attr("aria-label", t)
                }, linkTo: function (t) {
                    for (var s = t.attr("class").split(" "), r = 1, n = 0; n < s.length; n++) -1 != s[n].indexOf("ls-linkto-") && (r = parseInt(s[n].split("ls-linkto-")[1]));
                    t.data(o.defaults.init.dataKey).settings.linkedToSlide = r, t.css({cursor: "pointer"}).on("click." + a, function (t) {
                        t.preventDefault(), i.layerSlider(e(this).data(o.defaults.init.dataKey).settings.linkedToSlide)
                    })
                }, wrappers: function (e, t, i) {
                    t.is.slideBackground || t.is.backgroundVideo ? (t.elements.$bgWrapper = e.closest(".ls-bg-wrap"), t.elements.$bgOuterWrapper = e.closest(".ls-bg-outer")) : (t.elements.$wrapper = e.closest(".ls-in-out"), t.elements.$wrapper.data(o.defaults.init.dataKey, {}), t.settings.wrapperData = t.elements.$wrapper.data(o.defaults.init.dataKey), t.elements.$clipWrapper = e.closest(".ls-clip"), t.elements.$clipWrapper.data(o.defaults.init.dataKey, {}), t.settings.clipWrapperData = t.elements.$clipWrapper.data(o.defaults.init.dataKey), t.elements.$loopWrapper = e.closest(".ls-loop"), t.elements.$loopWrapper.data(o.defaults.init.dataKey, {}), t.settings.loopWrapperData = t.elements.$loopWrapper.data(o.defaults.init.dataKey)), t.parallax.enabled && (t.elements.$parallaxWrapper = e.closest(".ls-parallax"), t.elements.$parallaxWrapper.data(o.defaults.init.dataKey, {parallax: {}}), t.settings.parallaxWrapperData = t.elements.$parallaxWrapper.data(o.defaults.init.dataKey), o.transitions.layers.parallax.addLayer(t.elements.$parallaxWrapper, t.settings.parallaxWrapperData.parallax, t, i)), t.hover.enabled && !o.slides[i].data.globalhover && o.transitions.layers.hover.set(e, t), o.browser.isSafari ? t.elements.$outerWrapper = e.closest(".ls-z") : t.elements.$outerWrapper = t.parallax.enabled ? t.elements.$parallaxWrapper : t.elements.$bgWrapper ? t.elements.$bgOuterWrapper : t.elements.$wrapper, t.elements.$outerWrapper.attr("data-slide-index", i)
                }, style: function (e) {
                    var t, i, s, a, r, n, l, d, u, p, c, h, m, f, g, v, y, b, S, w, x, T, C = e[0],
                        k = e.data(o.defaults.init.dataKey), I = C.style, O = o.layers, L = 0, $ = 0, B = !1,
                        P = C.getBoundingClientRect();
                    if (d = "" !== I.paddingLeft ? O.getStyle(I.paddingLeft, o.slider.initial.percW) : parseFloat(e.css("padding-left")), p = "" !== I.paddingRight ? O.getStyle(I.paddingRight, o.slider.initial.percW) : parseFloat(e.css("padding-right")), u = "" !== I.paddingTop ? O.getStyle(I.paddingTop, o.slider.initial.percH) : parseFloat(e.css("padding-top")), c = "" !== I.paddingBottom ? O.getStyle(I.paddingBottom, o.slider.initial.percH) : parseFloat(e.css("padding-bottom")), h = "" !== I.marginLeft ? O.getStyle(I.marginLeft, o.slider.initial.percW) : parseFloat(e.css("margin-left")), m = "" !== I.marginTop ? O.getStyle(I.marginTop, o.slider.initial.percH) : parseFloat(e.css("margin-top")), C.style.margin = "0", g = "" !== I.borderLeftWidth ? parseFloat(I.borderLeftWidth) : parseFloat(e.css("border-left-width")), y = "" !== I.borderRightWidth ? parseFloat(I.borderRightWidth) : parseFloat(e.css("border-right-width")), v = "" !== I.borderTopWidth ? parseFloat(I.borderTopWidth) : parseFloat(e.css("border-top-width")), b = "" !== I.borderBottomWidth ? parseFloat(I.borderBottomWidth) : parseFloat(e.css("border-bottom-width")), 1 === o.media.$allMediaLayers.filter(e).length || e.children("iframe").length) {
                        var W = e.children(), _ = W.attr("width") ? W.attr("width") : W.width(),
                            M = W.attr("height") ? W.attr("height") : W.height();
                        300 === parseInt(_) && 150 === parseInt(M) && (_ = 640, M = 360), "" !== C.style.width && "auto" !== C.style.width || e.css("width", _), "" !== C.style.height && "auto" !== C.style.height || e.css("height", M), "100%" === I.width && "100%" === I.height && (I.left = "50%", I.top = "50%", k.mediaSettings.fullsize = !0), B = _ / M, W.css({
                            width: "100%",
                            height: "100%"
                        })
                    }
                    var z = k.attributes;
                    e.is("img") && (S = (a = e.data("preloadedWidth")) / (r = e.data("preloadedHeight")), (!I.width && !I.height || "auto" === I.width && "auto" === I.height) && z && (z.width && z.height ? (-1 === z.width.indexOf("%") ? i = parseInt(z.width) : (L = parseInt(z.width), i = O.getStyle(z.width, o.slider.initial.percW)), -1 === z.height.indexOf("%") ? s = parseInt(z.height) : ($ = parseInt(z.height), s = O.getStyle(z.height, o.slider.initial.percH))) : z.maxWidth && (e[0].style.width = z.maxWidth + "px", i = z.maxWidth, s = e.height()))), x = P.width ? P.width : P.right - P.left, T = P.height ? P.height : P.bottom - P.top, i || (i = I.width, -1 !== I.width.indexOf("%") && (L = parseInt(I.width)), i = (i = "" !== i && "auto" !== i ? O.getStyle(i, o.slider.initial.percW) : x - d - p - g - y) || "auto"), s || (s = I.height, -1 !== I.height.indexOf("%") && ($ = parseInt(I.height)), s = (s = "" !== s && "auto" !== s ? O.getStyle(s, o.slider.initial.percH) : T - u - c - v - b) || "auto"), w = B || i / s, !e.is("img") || I.width || I.height || z && (!z || z.width || z.height) || a === i && r === s || (a !== i ? s = (i = a > 5 ? a : i) / (w = a > 5 ? S : w) : r !== s && (i = (s = r > 5 ? r : s) * (w = r > 5 ? r : w))), parseFloat(e.css("opacity")), n = g + d + i + p + y, l = v + u + s + c + b, t = "" !== I.clip && I.clip, I.clip = "", f = I.webkitFilter || I.filter;
                    var F = function (e) {
                        var t = e;
                        return e && -1 !== e.indexOf("px ") && (e = e.replace("px", "").split(" "), t = Math.round(parseInt(e[0]) / i * 100) + "%"), t
                    };
                    k.original = {
                        clip: t,
                        clipShouldBeConverted: !1,
                        left: I.left ? I.left : "0",
                        top: I.top ? I.top : "0",
                        width: Math.ceil(i),
                        height: Math.ceil(s),
                        percentWidth: L,
                        percentHeight: $,
                        outerWidth: n,
                        outerHeight: l,
                        styleWidth: I.width,
                        styleHeight: I.height,
                        ratio: w,
                        paddingLeft: d,
                        paddingTop: u,
                        paddingRight: p,
                        paddingBottom: c,
                        marginLeft: h,
                        marginTop: m,
                        borderLeftWidth: g,
                        borderTopWidth: v,
                        borderRightWidth: y,
                        borderBottomWidth: b,
                        borderRadius: F(e.css("borderTopLeftRadius")) + " " + F(e.css("borderTopRightRadius")) + " " + F(e.css("borderBottomRightRadius")) + " " + F(e.css("borderBottomLeftRadius")),
                        fontSize: parseFloat(e.css("font-size")),
                        lineHeight: e.css("line-height"),
                        letterSpacing: e.css("letter-spacing"),
                        color: e.css("color"),
                        zIndex: parseInt(e.css("z-index")) || "auto",
                        filter: f,
                        backgroundColor: e.css("background-color"),
                        dataLS: e.attr("data-ls") || "",
                        styles: e.attr("style") || ""
                    }, I.zIndex = "auto", k.responsive = {
                        left: I.left ? I.left : "0",
                        top: I.top ? I.top : "0",
                        width: i,
                        height: s
                    }
                }, properties: function (t, i, s) {
                    var a = t.data(o.defaults.init.dataKey);
                    t.data("ls");
                    if (a.is.textLayer = !t.is("img") && !a.is.mediaLayer, a.self = t, t.data("ls")) for (var n = o.defaults.layer.keys, l = t.data("ls").split(";"), d = t.data("ls").toLowerCase().split(";"), u = 0; u < d.length; u++) if (e.trim(d[u])) {
                        var p = d[u].indexOf(":"), c = [d[u].substring(0, p), d[u].substring(p + 1)], h = null,
                            m = null, f = null, g = null, v = null;
                        if ("" !== (h = e.trim(c[0]))) if (void 0 !== n[h = h.replace("split", "text")]) {
                            if (m = n[h][0], v = "overlay" === h ? e.trim(l[u].substring(p + 1)) : o.functions.convert.properties(e.trim(c[1])), c[1] && -1 !== c[1].indexOf("random") && (h.match(/(text)/) || (v = o.functions.convert.randomProperties(v, m)), a.should.update || (a.should.update = !0)), "number" == typeof v && m.match(/(duration|startat|shift|delay)/i) && (v /= 1e3), h.match(/(fade)(.+)/)) switch (v) {
                                case!0:
                                    v = 0;
                                    break;
                                case!1:
                                    v = 1
                            }
                            void 0 !== (g = n[h][1]) ? "" !== v ? "object" == typeof v ? h.match(/(text)/) ? g.match(/(converted)/i) ? a[g][m] = v : a[g].cycle[m] = v : (f = o.functions.convert.properties(e.trim(v[0])), o.debugMode && o.debug.add("warn", "layerInit.prop1", [h, v, f]), "number" == typeof f && m.match(/(duration|startat|shift|delay)/i) && (f /= 1e3), a[g][m] = f) : h.match(/(text)/) && -1 !== v.toString().indexOf("random") ? a[g].random[m] = v : a[g][m] = v : o.debugMode && o.debug.add("warn", "layerInit.prop2", h) : a[m][h] = v
                        } else "clip" === h ? (a.original.clip = c[1], a.original.clipShouldBeConverted = !0) : o.debugMode && o.debug.add("warn", "layerInit.prop4", h)
                    }
                    if (o.browser.isOld && (a.in.enabled = !0, a.textIn.enabled = !1, a.textOut.enabled = !1, a.textIn.type = null, a.textOut.type = null), a.in.enabled && (a.inLayerTo.ease = a.inLayerStyleTo.ease = a.inClipTo.ease = o.functions.convert.easing(a.in.ease)), void 0 !== a.inLayerStyleShouldBeConvertedFrom.borderRadius && (a.inLayerStyleShouldBeConvertedTo.borderRadius = a.original.borderRadius), void 0 !== a.outLayerStyleShouldBeConvertedTo.borderRadius && (a.outLayerStyleShouldBeConvertedFrom.borderRadius = a.original.borderRadius), a.inLayerStyleFromCSS.backgroundColor && (a.inLayerStyleToCSS.backgroundColor = a.original.backgroundColor), a.outLayerStyleToCSS.backgroundColor && (a.outLayerStyleFromCSS.backgroundColor = a.original.backgroundColor), a.inLayerStyleFromCSS.color && (a.inLayerStyleToCSS.color = a.original.color), a.outLayerStyleToCSS.color && (a.outLayerStyleFromCSS.color = a.original.color), void 0 !== a.inLayerStyleShouldBeConvertedFrom.width && (a.inLayerStyleShouldBeConvertedTo.width = a.original.width), void 0 !== a.outLayerStyleShouldBeConvertedTo.width && (a.outLayerStyleShouldBeConvertedFrom.width = a.original.width), void 0 !== a.inLayerStyleShouldBeConvertedFrom.height && (a.inLayerStyleShouldBeConvertedTo.height = a.original.height), void 0 !== a.outLayerStyleShouldBeConvertedTo.height && (a.outLayerStyleShouldBeConvertedFrom.height = a.original.height), void 0 !== a.out.showUntil && 0 !== a.out.showUntil && (a.out.startAt = "transitioninend + " + a.out.showUntil), -1 !== a.out.startAt.indexOf("slidechangeonly") && "slidechangeonly" !== a.out.startAt && (a.out.startAt = "slidechangeonly"), a.out.enabled && (a.outLayerTo.ease = a.outLayerStyleTo.ease = a.outClipTo.ease = o.functions.convert.easing(a.out.ease)), e.isNumeric(a.loop.count) && (a.loop.count > 0 || -1 === a.loop.count) && !1 !== a.loop.enabled ? (a.loop.enabled = !0, a.loopTo.ease = a.loopClipTo.ease = o.functions.convert.easing(a.loop.ease), -1 !== a.loop.count ? a.loop.yoyo ? a.loop.repeat = 2 * a.loop.count - 1 : a.loop.repeat = a.loop.count - 1 : a.loop.repeat = -1) : a.loop.enabled = !1, (!e.isEmptyObject(a.hoverToCSS) || a.hoverShouldBeConverted.x || a.hoverShouldBeConverted.y || a.hoverShouldBeConverted.borderRadius || a.hoverShouldBeConverted.filter) && !1 !== a.hover.enabled ? (a.hover.enabled = !0, a.hover.easeOut || (a.hover.easeOut = a.hover.easeIn), a.hover.easeIn = o.functions.convert.easing(a.hover.easeIn), a.hover.easeOut = o.functions.convert.easing(a.hover.easeOut, !0), a.hover.durationOut || (a.hover.durationOut = a.hover.durationIn), r.TweenMax.set(t[0], {
                        autoCSS: !1,
                        css: {transformPerspective: a.hoverShouldBeConverted.transformPerspective}
                    })) : a.hover.enabled = !1, a.parallax.level && e.isNumeric(a.parallax.level) && 0 !== a.parallax.level && !1 !== a.parallax.enabled ? a.parallax.enabled = !0 : a.parallax.enabled = !1, a.is.slideBackground) {
                        var y = {scale: 1, rotation: 0};
                        if (o.slides[i].kenBurns.zoom && (a.kenBurns = o.slides[i].kenBurns), a.kenBurns.zoom) {
                            switch (a.kenBurns.from = {}, a.kenBurns.to = {}, a.kenBurns.zoom) {
                                case"out":
                                    a.kenBurns.from.scale = a.kenBurns.scale || 1, a.kenBurns.from.rotation = a.kenBurns.rotation || 0, a.kenBurns.to = y;
                                    break;
                                case"in":
                                    a.kenBurns.from = y, a.kenBurns.to.scale = a.kenBurns.scale || 1, a.kenBurns.to.rotation = a.kenBurns.rotation || 0
                            }
                            delete a.kenBurns.scale, delete a.kenBurns.rotation
                        } else a.kenBurns.from = y, a.kenBurns.to = y;
                        e.isEmptyObject(o.slides[i].filter) || (o.slides[i].filter.from && (a.filter.values.bgFrom = o.transitions.layers.filters.convert(o.slides[i].filter.from)), o.slides[i].filter.to && (a.filter.values.bgTo = o.transitions.layers.filters.convert(o.slides[i].filter.to)))
                    }
                    if (a.textIn.type && -1 === o.defaults.layer.splitTypeKeys.indexOf(a.textIn.type) && (o.debugMode && o.debug.add("warn", "layerInit.splitType3a", [t[0].tagName, a.textIn.type]), delete a.textIn.type, delete a.textIn.ns, a.textIn.enabled = !1), a.textOut.type && -1 === o.defaults.layer.splitTypeKeys.indexOf(a.textOut.type) && (o.debugMode && o.debug.add("warn", "layerInit.splitType3b", [t[0].tagName, a.textOut.type]), delete a.textOut.type, delete a.textOut.ns, a.textOut.enabled = !1), a.textIn.type || a.textOut.type) {
                        var b = 0;
                        if (a.is.textLayer ? (a.textIn.type && (a.textIn.enabled = !0, a.textInNodesTo.ease = o.functions.convert.easing(a.textInNodesTo.ease), a.textIn.split = a.textIn.type.split("_")[0], t.children().length && o.debugMode && (b = 1)), a.textOut.type && (a.textOut.enabled = !0, a.textOutNodesTo.ease = o.functions.convert.easing(a.textOutNodesTo.ease)), a.textOut.enabled && a.textOut.type.split("_")[0] !== a.textIn.split && (a.textIn.split += ", " + a.textOut.type.split("_")[0], t.children().length && o.debugMode && (b = 1)), -1 !== a.textIn.split.indexOf("chars") && -1 === a.textIn.split.indexOf("words") && (a.textIn.split += ", words"), -1 !== a.textIn.split.indexOf("words") && -1 === a.textIn.split.indexOf("lines") && (a.textIn.split += ", lines")) : (delete a.textIn.type, delete a.textOut.type, delete a.textIn.ns, delete a.textOut.ns, o.debugMode && (b = 2)), o.debugMode && 0 !== b && i && !s) switch (b) {
                            case 1:
                                o.debug.add("warn", "layerInit.splitType1", [t.prop("nodeName"), i]);
                                break;
                            case 2:
                                o.debug.add("warn", "layerInit.splitType2", [i, t.prop("nodeName")])
                        }
                    }
                    if ((a.original.clip || a.inClipShouldBeConverted.clip || a.outClipShouldBeConverted.clip || a.loopClipShouldBeConverted.clip) && (a.clip.enabled = !0), a.in.enabled && a.inLayerToCSS.scale && (delete a.inLayerToCSS.scaleX, delete a.inLayerToCSS.scaleY), a.out.enabled && a.outLayerToCSS.scale && (delete a.outLayerToCSS.scaleX, delete a.outLayerToCSS.scaleY), a.inLayerStyleShouldBeConvertedFrom.filter && (a.filter.values.in = o.transitions.layers.filters.convert(a.inLayerStyleShouldBeConvertedFrom.filter)), a.filter.values.style = o.transitions.layers.filters.convert(a.original.filter), a.outLayerStyleShouldBeConvertedTo.filter && (a.filter.values.out = o.transitions.layers.filters.convert(a.outLayerStyleShouldBeConvertedTo.filter)), a.loopLayerShouldBeConverted.filter && (a.filter.values.loop = o.transitions.layers.filters.convert(a.loopLayerShouldBeConverted.filter)), a.hoverShouldBeConverted.filter && (a.filter.values.hover = o.transitions.layers.filters.convert(a.hoverShouldBeConverted.filter)), a.in.enabled || (a.in.duration = 0), a.textIn.enabled || (a.textIn.duration = 0), a.loop.enabled || (a.loop.duration = 0), a.textOut.enabled || (a.textOut.duration = 0), a.out.enabled || (a.out.duration = 0), t.attr("data-ls-slidein", i), void 0 !== a.settings.static && "none" !== a.settings.static) {
                        var S = parseInt(a.settings.static);
                        0 !== S && "forever" !== a.settings.static ? (t.attr("data-ls-slideout", S), a.settings.slideOut = S) : a.settings.slideOut = 0, a.is.static = !0, t.attr("data-ls-static", "1")
                    } else t.attr("data-ls-slideout", i);
                    if (a.is.mediaLayer) {
                        var w = t.children("video, audio").eq(0);
                        if (null !== a.mediaSettings.controls) switch (a.mediaSettings.controls) {
                            case!0:
                                w.prop("controls", !0), w.removeProp("nocontrols").removeAttr("nocontrols");
                                break;
                            case!1:
                                w.prop("controls", !1)
                        }
                        a.mediaSettings.volume && (a.mediaSettings.volume < 0 ? a.mediaSettings.volume = 0 : a.mediaSettings.volume > 100 && (a.mediaSettings.volume = 100)), a.is.backgroundVideo && (o.media.setBackgroundVideo(a, t), a.styleSettings.overlay && t.find(".ls-bg-video-overlay").css({backgroundImage: "url(" + a.styleSettings.overlay + ")"}))
                    }
                    a.styleSettings.minfontsize && (a.styleSettings.minfontsize = parseFloat(a.styleSettings.minfontsize)), a.styleSettings.minmobilefontsize && (a.styleSettings.minmobilefontsize = parseFloat(a.styleSettings.minmobilefontsize))
                }
            }, get: function (e) {
                var t = this.$all;
                if (e) {
                    var i = "in", s = "", a = "", r = ':not(".ls-bg")', n = ':not(".ls-bg-video")';
                    -1 == (e = e.toLowerCase()).indexOf("bgvideo") && -1 == e.indexOf("backgroundvideo") || (n = "", e = e.replace("bgvideo", "").replace("backgroundvideo", "")), -1 != e.indexOf("video") && (a += ", > video", e = e.replace("video", "")), -1 != e.indexOf("audio") && (a += ", > audio", e = e.replace("audio", "")), -1 != e.indexOf("html5") && (a += ", > video, > audio", e = e.replace("html5", "")), -1 != e.indexOf("youtube") && (a += ', > iframe[src*="youtube-nocookie.com"], > iframe[src*="youtube.com"], > iframe[src*="youtu.be"], > iframe[data-src*="youtube-nocookie.com"], > iframe[data-src*="youtube.com"], > iframe[data-src*="youtu.be"]', e = e.replace("youtube", "")), -1 != e.indexOf("vimeo") && (a += ', > iframe[src*="player.vimeo"], > iframe[data-src*="player.vimeo"]', e = e.replace("vimeo", "")), "," == a.charAt(0) && (a = a.substring(2, a.length)), -1 != e.indexOf("out") && (i = "out"), -1 == e.indexOf("img") && -1 == e.indexOf("image") || (s = "img"), -1 == e.indexOf("bg") && -1 == e.indexOf("background") && -1 == e.indexOf("bgonly") || (r = ""), t = -1 != e.indexOf("current") ? t.filter(s + "[data-ls-slide" + i + '="' + o.slides.current.index + '"]' + r + n) : -1 != e.indexOf("next") ? t.filter(s + "[data-ls-slide" + i + '="' + o.slides.next.index + '"]' + r + n) : t.filter(s + r + n), -1 != e.indexOf("notactive") && (t = t.filter(".ls-bg, .ls-bg-video, :hidden"), e = e.replace("notactive", "")), -1 != e.indexOf("active") && (t = t.filter(":visible:not(.ls-bg, .ls-bg-video)"), e = e.replace("active", "")), -1 != e.indexOf("notstatic") && (t = t.filter(':not([data-ls-static="1"])'), e = e.replace("notstatic", "")), -1 != e.indexOf("static") && (t = t.filter('[data-ls-static="1"]'), e = e.replace("static", "")), -1 != e.indexOf("bgonly") && (t = t.filter(".ls-bg"), e = e.replace("bgonly", "")), "" !== a && (t = t.find(a))
                }
                return t
            }, update: {
                data: function (t, i, s) {
                    var a, r, n;
                    switch (t instanceof jQuery || (t = e(t)), s && t.attr("data-ls", s).data("ls", s), a = (r = t.data(o.defaults.init.dataKey)).is.onSlide, n = r.original, i) {
                        default:
                        case"transitions":
                            r.settings.timelineIsCalculated = !1, o.layers.set.properties(t, a, !0);
                            break;
                        case"all":
                            t.data(o.defaults.init.dataKey, new o.defaults.layer.options(t, a)), (r = t.data(o.defaults.init.dataKey)).original = n, o.layers.set.properties(t, a, !0), o.layers.set.wrappers(t, r, a)
                    }
                }
            }, wrap: function (t, s) {
                if (!o.slides[t].wrapped && "wrapping" !== o.slides[t].wrapped) {
                    o.slides[t].wrapped = "wrapping";
                    var a = s ? 25 : 0, r = o.slides[t].$layers, n = r.length;
                    r.each(function (s, r) {
                        o.timeouts["slide-" + t + "-layer-" + s] = setTimeout(function () {
                            delete o.timeouts["slide-" + t + "-layer-" + s];
                            var a, l = e(r), d = l, u = "", p = !1, c = "";
                            l.hasClass("ls-hide-phone") && (c += " ls-hide-on-phone"), l.hasClass("ls-hide-tablet") && (c += " ls-hide-on-tablet"), l.hasClass("ls-hide-desktop") && (c += " ls-hide-on-desktop"), l.removeClass("ls-hide-phone ls-hide-tablet ls-hide-desktop"), d.is("a") && 1 === d.children().length && (p = !0, l = d.find(".ls-layer"));
                            var h = l.data(o.defaults.init.dataKey);
                            if (!h) return !0;
                            if (a = o.slider.$layersWrapper, h.is.backgroundVideo ? a = o.slider.$bgVideosWrapper : h.is.slideBackground && (a = o.slider.$slideBGWrapper), o.layers.set.style(l), o.layers.set.properties(l, t), h.textIn.split) {
                                var m = new SplitType(l[0], {split: h.textIn.split});
                                h.textIn.type && (h.textIn.ns = m[h.textIn.type.split("_")[0]]), h.textOut.type && (h.textOut.ns = m[h.textOut.type.split("_")[0]])
                            }
                            h.is.slideBackground || h.is.backgroundVideo ? u = '<div class="ls-wrapper ls-bg-outer"><div class="ls-wrapper ls-bg-wrap"></div></div>' : (h.clip.enabled && (u = '<div class="ls-wrapper ls-clip"></div>'), h.loop.enabled && (u = '<div class="ls-wrapper ls-loop">' + u + "</div>"), u = '<div class="ls-wrapper ls-in-out">' + u + "</div>"), h.parallax.enabled && (u = '<div class="ls-wrapper ls-parallax">' + u + "</div>"), o.browser.isSafari && (u = '<div class="ls-wrapper ls-z">' + u + "</div>"), "" !== u ? l.appendTo(a).wrap(u) : l.appendTo(a), !0 === p && d.addClass("ls-layer-link").appendTo(l.parent());
                            var f = {}, g = l.css("mix-blend-mode");
                            g && "normal" !== g && (f["mix-blend-mode"] = g, l.css("mix-blend-mode", "normal")), h.original.customZIndex = 1;
                            var v = parseInt(h.original.zIndex);
                            h.is.backgroundVideo ? f = {zIndex: h.original.customZIndex} : h.is.slideBackground ? f = {zIndex: h.original.customZIndex} : (v || (v = s + 101), f.zIndex = v, h.original.customZIndex = v), o.browser.isSafari && (f.transform = "translateZ(" + 3e3 * v + "px )"), o.layers.set.wrappers(l, h, t), h.elements.$outerWrapper.css(f).addClass(c), h.is.slideBackground && h.elements.$bgWrapper.css({backgroundColor: o.slides[t].data.backgroundColor}), o.layers.$all = o.layers.$all.add(l), o.slides[t].$layers = o.slides[t].$layers.not(d), s === n - 1 && (i.children(".ls-slide").eq(t - 1).empty(), o.slides[t].wrapped = !0)
                        }, a * (s + 1))
                    })
                }
            }
        }, o.slideshow = {
            direction: "next",
            nextLoop: 0,
            firstStart: !0,
            sequence: {normal: [], randomized: []},
            state: {running: !0, paused: !1, pausedByVideo: !1, pausedByHover: !1, pausedByLastCycle: !1},
            should: {change: !1, start: !1, stop: !1},
            isPaused: function () {
                return this.state.paused || this.state.pausedByVideo || this.state.pausedByHover
            },
            init: function () {
                1 == o.slides.count && (o.o.autoStart = !1, o.o.navPrevNext = !1, o.o.navStartStop = !1, o.o.navButtons = !1, o.o.cycles = -1, o.o.forceLoopNum = !1, o.o.autoPauseSlideshow = !0, o.o.firstSlide = 1, o.o.thumbnailNavigation = "disabled"), o.o.autoStart && 1 != o.slides.count || o.functions.setStates(this, {
                    running: !1,
                    paused: !0
                }), this.set.pauseOnHover(), this.set.sequences()
            },
            set: {
                pauseOnHover: function () {
                    o.o.pauseOnHover = !0 === o.o.pauseOnHover ? o.defaults.init.options.pauseOnHover : o.o.pauseOnHover, !1 !== o.o.pauseOnHover && i.on("mouseenter." + a, function () {
                        o.slider.state.inFullscreen || (o.functions.setStates(o.slideshow, {pausedByHover: !0}), "slideshowOnly" !== o.o.pauseOnHover && o.transitions.layers.timeline.pause())
                    }).on("mouseleave." + a, function () {
                        var t = 1;
                        o.transitions._slideTimeline && o.transitions._slideTimeline.duration() > o.transitions.layers.timeline.totalDuration && (t = o.transitions.layers.timeline.totalDuration / o.transitions._slideTimeline.duration()), o.functions.setStates(o.slideshow, {pausedByHover: !1}), e("body").hasClass("ls-unselectable") || "slideshowOnly" === o.o.pauseOnHover || o.o.pauseLayers && o.slideshow.isPaused() || o.transitions.layers.timeline.resume(), o.transitions._slideTimeline && o.transitions.layers.timeline.state.finished && o.transitions._slideTimeline.progress() < t && o.functions.setStates(o.transitions.layers.timeline, {finished: !1}), o.slideshow.start()
                    })
                }, sequences: function () {
                    for (var t = 0; t < o.slides.count; t++) o.slideshow.sequence.normal[t] = t + 1;
                    o.slideshow.sequence.randomized = o.functions.shuffleArray(e.merge([], o.slideshow.sequence.normal))
                }, normalizedSequence: function () {
                    var e = o.o.shuffleSlideshow ? "randomized" : "normal", t = o.slideshow.sequence[e],
                        i = o.slideshow.sequence[e].length, s = t.indexOf(o.slides.first.index);
                    o.slideshow.sequence.normalized = [];
                    for (var a = s; a < i; a++) o.slideshow.sequence.normalized.push(t[a]);
                    for (var r = 0; r < s; r++) o.slideshow.sequence.normalized.push(t[r])
                }, prevNext: function (e) {
                    switch (e) {
                        case"prev":
                            o.o.twoWaySlideshow && (o.slideshow.direction = "prev"), o.slideshow.changeTo(o.slideshow.get.slideInSequence("prev"), !0);
                            break;
                        case"next":
                            o.slideshow.direction = "next", o.slideshow.changeTo(o.slideshow.get.slideInSequence("next"), !0)
                    }
                }
            },
            get: {
                sequence: function () {
                    var e = "normal";
                    return o.o.playByScroll ? e = "normalized" : o.o.shuffleSlideshow && (e = "randomized"), e
                }, slideInSequence: function (e) {
                    var t = o.slideshow.sequence[this.sequence()], i = t.indexOf(o.slides.current.index);
                    switch (e) {
                        case"prev":
                            return 0 === i ? t[t.length - 1] : t[i - 1];
                        case"next":
                            return i === t.length - 1 ? t[0] : t[i + 1];
                        default:
                            return t[e]
                    }
                }, indexOfSlideInSequence: function (e) {
                    return o.slideshow.sequence[this.sequence()].indexOf(e)
                }
            },
            cycles: {
                set: function () {
                    o.o.cycles > 0 && (o.slideshow.curCycle = 1, o.slideshow.cycleSlideIndex = o.slideshow.get.indexOfSlideInSequence(o.slides.first.index))
                }, check: function (e) {
                    if (o.slideshow.get.indexOfSlideInSequence(e) === o.slideshow.cycleSlideIndex) return ++o.slideshow.curCycle === o.o.cycles + 1
                }
            },
            start: function (e) {
                !this.isPaused() && o.transitions._slideTimeline && o.transitions.layers.timeline.state.finished && this.changeTo(o.slides.next.index)
            },
            stop: function () {
                o.functions.setStates(this, {running: !1, paused: !0})
            },
            changeTo: function (s, a, r) {
                if (!document.body.contains(t)) return !1;
                if (o.slides.current.index === s) return !1;
                if (!this.firstStart && o.api.hasEvent("slideChangeWillStart")) {
                    var n = i.triggerHandler("slideChangeWillStart", o.api.eventData());
                    if (!1 === n) return;
                    e.isNumeric(n) && (s = parseInt(n))
                }
                s > o.slides.count || s < 1 ? o.debugMode && (o.debug.add("group", "slideshow"), o.debug.add("warn", "slideshow.invalidSlideIndex", [s, o.slides.count]), o.debug.groupEnd()) : o.slider.isBusy() || o.slideshow.state.pausedByVideo && !a ? !o.slider.state.preloadingImages && o.slider.state.animatingSlides && o.transitions._slideTransition && (o.slideshow.should.change = !0, o.transitions._slideTransition.progress(1), o.transitions._forceLayersOut && o.transitions._forceLayersOut.progress(1)) : (o.functions.setStates(o.transitions.layers.timeline, {finished: !1}), o.slideshow.should.change = !1, o.debugMode && o.debug.add("group", "slideshow"), a ? ("prev" === o.navigation.direction && o.o.twoWaySlideshow && (o.slideshow.direction = "prev"), o.debugMode && (o.debug.add("log", "slideshow.changedByUser", !1), o.o.twoWaySlideshow && o.debug.add("log", "slideshow.setdir", o.slideshow.direction))) : o.navigation.direction = o.slideshow.direction, o.transitions.timers.reverse(), o.media.stop(!0), o.slides.set.nextSlideIndex(s), o.debugMode && (o.debug.add("log", "slideshow.change", [o.slides.current.index, o.slides.next.index, o.slideshow.direction, o.navigation.direction]), o.debug.groupEnd()), o.functions.setStates(this, {pausedByVideo: !1}), o.functions.setStates(o.slider, {changingSlides: !0}), o.preload.imagesOfSlide(o.slides.next.index, function () {
                    o.transitions.start()
                }))
            },
            forceStop: function () {
                o.navigation.stop(), e.each(o.timeouts, function (e, t) {
                    clearTimeout(o.timeouts[e])
                }), o.transitions.timers.stop(), o.transitions._slideTimeline.stop(), o.functions.setStates(o.transitions.layers.timeline, {
                    stopped: !0,
                    running: !1
                }), i.find("*").stop(!0, !1).dequeue()
            },
            restart: function () {
                i.find("*").stop(), o.navigation.change(o.slides.current.index, o.slideshow.direction)
            }
        }, o.media = {
            errors: {},
            $allMediaLayers: e(),
            protocol: "http:",
            playingInCurSlide: 0,
            endedInCurSlide: 0,
            init: function () {
                -1 != document.location.href.indexOf("https:") && (this.protocol = "https:"), o.functions.setStates(o.slider, {
                    waitingForYouTube: !1,
                    waitingForVimeo: !1
                }), o.media.youtube.init(), o.media.vimeo.init(), o.media.html5.init()
            },
            youtube: {
                init: function () {
                    var t = 0;
                    this.$videos = o.slider.$hiddenWrapper.find('iframe[src*="youtube-nocookie.com"], iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[data-src*="youtube-nocookie.com"], iframe[data-src*="youtube.com"], iframe[data-src*="youtu.be"]').each(function () {
                        var i = e(this), s = i.parent(), a = s.data(o.defaults.init.dataKey),
                            r = (i.attr("src") || i.attr("data-src")).replace(/&amp;/g, "&").replace("autoplay=1", "autoplay=0").replace("?", "?smart=true&"),
                            n = {
                                $videoElement: i,
                                videoURL: (-1 === r.indexOf("http") ? o.media.protocol : "") + r + (-1 === r.indexOf("?") ? "?" : "&") + "wmode=opaque&html5=1&enablejsapi=1&version=3&rel=0",
                                videoThumbnailURL: o.media.protocol + "//img.youtube.com/vi/" + r.split("embed/")[1].split("?")[0] + "/" + o.o.youtubePreview
                            };
                        i.attr("id", "ls-youtube-" + ++t), a.mediaProperties = {
                            type: "youtube",
                            saved: n
                        }, o.media.setProperties(a), a.is.backgroundVideo && o.media.setBackgroundVideo(a, s), a.is.backgroundVideo || o.media.setMediaElements(s, i, n.videoURL, n.videoThumbnailURL, a)
                    }), o.media.$allMediaLayers = o.media.$allMediaLayers.add(this.$videos.parent()), this.$videos.length && (o.timeouts.loadYouTube = Math.floor(Date.now() / 1e3), window.YT || e("<script>").attr({
                        src: "https://www.youtube.com/iframe_api",
                        type: "text/javascript"
                    }).appendTo("head"), window.onYouTubeIframeAPIReady = function () {
                        window._layerSlider.globals.youTubeIsReady = !0
                    }, o.intervals.isYouTubeReady = setInterval(function () {
                        window.YT && 1 === window.YT.loaded || window._layerSlider.globals.youTubeIsReady || Math.floor(Date.now() / 1e3) - o.timeouts.loadYouTube > 3 ? (clearInterval(o.intervals.isYouTubeReady), delete o.intervals.isYouTubeReady, delete o.timeouts.loadYouTube, o.media.youtube.$videos.parent().each(function () {
                            var t = e(this), i = t.data(o.defaults.init.dataKey), s = i.mediaProperties.saved;
                            t.on("playMedia." + a + " click." + a, ".ls-vpcontainer", function () {
                                o.media.hideThumbnail(e(this)), o.media.checkSlideshowState(t, i), o.media.removeFromTimeline(t), o.media.youtube.play(t, s.$videoElement, s.videoURL, i)
                            }).on("playBackgroundVideo." + a, function () {
                                o.media.youtube.play(t, s.$videoElement, s.videoURL, i)
                            }).on("stopBackgroundVideo." + a, function () {
                                o.media.youtube.stop(t, s.$videoElement, i, !0)
                            }).on("preloadBackgroundVideo." + a, function () {
                                o.media.youtube.createPlayer(t, s.$videoElement, s.videoURL, i, !0)
                            })
                        }), o.functions.setStates(o.slider, {waitingForYouTube: !1})) : o.functions.setStates(o.slider, {waitingForYouTube: !0})
                    }, 25))
                }, createPlayer: function (e, t, i, s, a) {
                    if (null !== s.mediaSettings.showinfo) switch (i = i.replace("&showinfo=0", "").replace("&showinfo=1", ""), s.mediaSettings.showinfo) {
                        case!0:
                            i += "&showinfo=1";
                            break;
                        case!1:
                            i += "&showinfo=0"
                    }
                    if (null !== s.mediaSettings.controls) switch (i = i.replace("&controls=0", "").replace("&controls=1", ""), s.mediaSettings.controls) {
                        case!0:
                            i += "&controls=1";
                            break;
                        case!1:
                            i += "&controls=0"
                    }
                    t.attr("src", i), s.mediaProperties.player = new YT.Player(t[0], {
                        events: {
                            onReady: function () {
                                null !== s.mediaSettings.volume && s.mediaProperties.player.setVolume(s.mediaSettings.volume), a && !s.mediaProperties.shouldPlay || (s.mediaProperties.player.playVideo(), s.mediaProperties.shouldPlay = !1)
                            }, onStateChange: function (t) {
                                0 === t.data && (s.is.backgroundVideo ? s.mediaProperties.player.seekTo(0) : o.media.videoEnded(e, s))
                            }
                        }
                    })
                }, play: function (e, t, i, s) {
                    s.mediaProperties.player ? s.mediaProperties.player.playVideo ? s.mediaProperties.player.playVideo() : s.mediaProperties.shouldPlay = !0 : this.createPlayer(e, t, i, s)
                }, stop: function (e, t, i, s) {
                    i.mediaProperties.player && (i.mediaProperties.player.pauseVideo(), s && i.mediaProperties.player.seekTo(0), i.is.backgroundVideo || o.media.showThumbnail(e.find(".ls-vpcontainer")))
                }
            },
            vimeo: {
                init: function () {
                    var t = this.$videos = o.slider.$hiddenWrapper.find('iframe[src*="player.vimeo"], iframe[data-src*="player.vimeo"]');
                    if (t.length) {
                        o.timeouts.loadVimeo = Math.floor(Date.now() / 1e3), o.media.$allMediaLayers = o.media.$allMediaLayers.add(t.parent());
                        var i = 0;
                        e("<script>").attr({
                            src: o.media.protocol + "//f.vimeocdn.com/js/froogaloop2.min.js",
                            type: "text/javascript"
                        }).appendTo("head"), o.intervals.isVimeoReady = setInterval(function () {
                            o.functions.setStates(o.slider, {waitingForVimeo: !0}), (window.Froogaloop || Math.floor(Date.now() / 1e3) - o.timeouts.loadVimeo > 3) && (clearInterval(o.intervals.isVimeoReady), delete o.intervals.isVimeoReady, delete o.timeouts.loadVimeo, window._layerSlider.globals.vimeoIsReady = !0, s())
                        }, 25);
                        var s = function () {
                            o.media.vimeo.$videos.each(function () {
                                var t = e(this).attr("id", "ls-vimeo-" + ++i), s = t.parent(),
                                    r = s.data(o.defaults.init.dataKey),
                                    n = (t.attr("src") || t.attr("data-src")).replace(/&amp;/g, "&").replace("autoplay=1", "autoplay=0").replace("?", "?smart=true&"),
                                    l = -1 === n.indexOf("?") ? "?" : "&",
                                    d = -1 === n.indexOf("http") ? o.media.protocol : "",
                                    u = "wmode=opaque&api=1&player_id=ls-vimeo-" + i,
                                    p = o.media.protocol + "//vimeo.com/api/v2/video/" + n.split("video/")[1].split("?")[0] + ".json?callback=?",
                                    c = d + n + l + u;
                                r.mediaProperties = {
                                    type: "vimeo",
                                    saved: {}
                                }, o.media.setProperties(r), r.is.backgroundVideo && o.media.setBackgroundVideo(r, s), e.getJSON(p, function (e) {
                                    r.is.backgroundVideo || o.media.setMediaElements(s, t, c, e[0].thumbnail_large, r)
                                }), s.on("playMedia." + a + " click." + a, ".ls-vpcontainer", function () {
                                    o.media.hideThumbnail(e(this)), o.media.checkSlideshowState(s, r), o.media.removeFromTimeline(s), o.media.vimeo.play(s, t, c, r)
                                }).on("playBackgroundVideo." + a, function () {
                                    o.media.vimeo.play(s, t, c, r)
                                }).on("stopBackgroundVideo." + a, function () {
                                    o.media.vimeo.stop(s, t, r, !0)
                                }).on("preloadBackgroundVideo." + a, function () {
                                    o.media.vimeo.createPlayer(s, t, c, r, !0)
                                })
                            }), o.functions.setStates(o.slider, {waitingForVimeo: !1})
                        }
                    }
                }, createPlayer: function (e, t, i, s, a) {
                    if (null !== s.mediaSettings.showinfo) switch (i = i.replace("&title=0", "").replace("&title=1", "").replace("&byline=0", "").replace("&byline=1", "").replace("&portrait=0", "").replace("&portrait=1", ""), s.mediaSettings.showinfo) {
                        case!0:
                            i = i.replace("title=0", "title=1", "").replace("byline=0", "byline=1", "").replace("portrait=0", "portrait=1", "");
                            break;
                        case!1:
                            i = i.replace("title=1", "title=0", "").replace("byline=1", "byline=0", "").replace("portrait=1", "portrait=0", "")
                    }
                    t.attr("src", i);
                    var r = function () {
                        s.is.backgroundVideo ? s.mediaProperties.player.api("seekTo", 0).api("play") : o.media.videoEnded(e, s)
                    };
                    s.mediaProperties.player = $f(t[0]), s.mediaProperties.player.addEvent("ready", function () {
                        s.mediaProperties.player.addEvent("finish", r), null !== s.mediaSettings.volume && s.mediaProperties.player.api("setVolume", s.mediaSettings.volume / 100), a || s.mediaProperties.player.api("play")
                    })
                }, play: function (e, t, i, s) {
                    s.mediaProperties.player ? s.mediaProperties.player.api("play") : this.createPlayer(e, t, i, s)
                }, stop: function (e, t, i, s) {
                    i.mediaProperties.player && (i.mediaProperties.player.api("pause"), s && i.mediaProperties.player.api("seekTo", 0), i.is.backgroundVideo || o.media.showThumbnail(e.find(".ls-vpcontainer")))
                }
            },
            html5: {
                init: function () {
                    if (this.$elements = o.slider.$hiddenWrapper.find("video, audio"), o.media.$allMediaLayers = o.media.$allMediaLayers.add(this.$elements.parent()), this.$elements.length) {
                        var t = 0;
                        o.media.html5.$elements.each(function () {
                            var i = e(this).attr("id", "ls-html5-" + ++t), s = e(this).parent(),
                                r = s.data(o.defaults.init.dataKey);
                            if (r.mediaProperties = {
                                type: "html5",
                                saved: {}
                            }, o.media.setProperties(r), r.is.backgroundVideo && o.media.setBackgroundVideo(r, s), i.attr("autoplay")) {
                                var n = i.removeAttr("autoplay").clone(!0, !0);
                                i.remove(), i = n.appendTo(s), s.data("ls", s.data("ls") + " autoplay: true;")
                            }
                            r.is.backgroundVideo || o.media.setMediaElements(s, i, !1, !1, r), i.on("ended." + a, function () {
                                r.is.backgroundVideo ? (i[0].currentTime = 0, i[0].play()) : o.media.videoEnded(s, r)
                            }), s.on("playMedia." + a + " click." + a, ".ls-vpcontainer", function (t) {
                                o.media.hideThumbnail(e(this)), o.media.checkSlideshowState(s, r), o.media.removeFromTimeline(s), o.media.html5.play(s, i, r)
                            }).on("playBackgroundVideo." + a, function () {
                                o.media.html5.play(s, i, r)
                            }).on("stopBackgroundVideo." + a, function () {
                                o.media.html5.stop(s, i, r, !0)
                            })
                        })
                    }
                }, play: function (e, t, i) {
                    null === i.mediaSettings.volume || i.mediaProperties.volumeIsSet || (t[0].volume = i.mediaSettings.volume / 100, i.mediaProperties.volumeIsSet = !0), t[0].play()
                }, stop: function (e, t, i, s) {
                    t[0].pause(), s && (t[0].currentTime = 0), i.is.backgroundVideo || o.media.showThumbnail(e.find(".ls-vpcontainer"))
                }
            },
            setBackgroundVideo: function (t, i) {
                if (t.mediaSettings = {
                    controls: !1,
                    autoplay: !1,
                    showinfo: !1,
                    fillmode: "cover",
                    thumbnail: !1,
                    volume: t.mediaSettings.volume ? t.mediaSettings.volume : 0
                }, i.data("ls") && -1 !== i.data("ls").indexOf("poster:") && 0 == i.children(".ls-vpcontainer").length) {
                    var s = e("<div>").addClass("ls-vpcontainer").appendTo(i),
                        a = i.data("ls").split("poster:")[1].split(";")[0].trim();
                    e("<div>").appendTo(s).addClass("ls-videopreview").attr({style: "background-image: url(" + a + ")"})
                }
            },
            setProperties: function (e) {
                e.is.mediaLayer = !0
            },
            setMediaElements: function (t, i, s, a, r) {
                var n = e("<div>").addClass("ls-vpcontainer").appendTo(t);
                null === r.mediaSettings.autoplay && o.o.autoPlayVideos || r.mediaSettings.autoplay ? t.addClass("ls-autoplay") : e("<div>").appendTo(n).addClass("ls-playvideo"), t.data("ls") && -1 !== t.data("ls").indexOf("poster:") && (a = t.data("ls").split("poster:")[1].split(";")[0].trim()), i.is("iframe") ? e("<div>").appendTo(n).addClass("ls-videopreview").attr({style: "background-image: url(" + a + ")"}) : (a || void 0 === i.attr("poster") || (a = i.attr("poster"), i.removeAttr("poster")), a && e("<div>").appendTo(n).addClass("ls-videopreview").attr({style: "background-image: url(" + a + ")"}))
            },
            checkSlideshowState: function (e, t) {
                !t.is.static && o.o.autoPauseSlideshow && (o.functions.setStates(o.slideshow, {pausedByVideo: !0}), "auto" == o.o.autoPauseSlideshow && this.playingInCurSlide++)
            },
            hideThumbnail: function (e) {
                e.delay(o.transitions.media.defaults.delay).fadeOut(o.transitions.media.defaults.fadeOut)
            },
            showThumbnail: function (e) {
                e.fadeIn(o.transitions.media.defaults.fadeIn)
            },
            videoEnded: function (e, t) {
                "auto" != o.o.autoPauseSlideshow || t.is.backgroundVideo || (t.is.static || this.endedInCurSlide++, this.endedInCurSlide == this.playingInCurSlide && 0 !== this.playingInCurSlide && (o.functions.setStates(o.slideshow, {pausedByVideo: !1}), o.slideshow.remainingSlideDuration = 1, o.slideshow.start()))
            },
            playIfAllowed: function (e) {
                var t = e.data(o.defaults.init.dataKey);
                t.is.mediaLayer && (o.device.isMobile && (i.hasClass("ls-device-is-phone") && t.elements.$outerWrapper.hasClass("ls-hide-on-phone") || i.hasClass("ls-device-is-tablet") && t.elements.$outerWrapper.hasClass("ls-hide-on-tablet")) || (null === t.mediaSettings.autoplay && o.o.autoPlayVideos || t.mediaSettings.autoplay) && e.find(".ls-vpcontainer").trigger("playMedia"))
            },
            stop: function (t) {
                var i = this;
                t = void 0 === t || t, o.layers.get("current,out,youtube").each(function () {
                    var s = e(this), a = s.closest(".ls-layer"), r = a.data(o.defaults.init.dataKey);
                    i.youtube.stop(a, s, r, t)
                }), o.layers.get("current,out,vimeo").each(function () {
                    var s = e(this), a = s.closest(".ls-layer"), r = a.data(o.defaults.init.dataKey);
                    i.vimeo.stop(a, s, r, t)
                }), o.layers.get("current,out,html5").each(function () {
                    var s = e(this), a = s.closest(".ls-layer"), r = a.data(o.defaults.init.dataKey);
                    i.html5.stop(a, s, r, t)
                }), this.playingInCurSlide = 0, this.endedInCurSlide = 0
            },
            removeFromTimeline: function (e) {
                o.transitions._slideTimeline.kill(null, e.closest(".ls-in-out")[0])
            }
        }, o.yourLogo = {
            init: function () {
                o.o.yourLogo && (this.$element = e("<img>").addClass("ls-yourlogo").appendTo(i).attr("style", o.o.yourLogoStyle).css({
                    visibility: "hidden",
                    display: "bock"
                }).on("load." + a, function () {
                    var t = o.yourLogo.$element ? 500 : 0;
                    o.timeouts.yourLogo = setTimeout(function () {
                        delete o.timeouts.yourLogo, o.yourLogo.$element.data("originalWidth", o.yourLogo.$element.width()), o.yourLogo.$element.data("originalHeight", o.yourLogo.$element.height()), "auto" != o.yourLogo.$element.css("left") && o.yourLogo.$element.data("originalLeft", o.yourLogo.$element[0].style.left), "auto" != o.yourLogo.$element.css("right") && o.yourLogo.$element.data("originalRight", o.yourLogo.$element[0].style.right), "auto" != o.yourLogo.$element.css("top") && o.yourLogo.$element.data("originalTop", o.yourLogo.$element[0].style.top), "auto" != o.yourLogo.$element.css("bottom") && o.yourLogo.$element.data("originalBottom", o.yourLogo.$element[0].style.bottom), !1 !== o.o.yourLogoLink && e("<a>").appendTo(i).attr("href", o.o.yourLogoLink).attr("target", o.o.yourLogoTarget).css({
                            textDecoration: "none",
                            outline: "none"
                        }).append(o.yourLogo.$element), o.yourLogo.$element.css({
                            display: "none",
                            visibility: "visible"
                        }), o.yourLogo.resize()
                    }, t)
                }).attr("src", o.o.yourLogo))
            }, resize: function () {
                this.$element.css({
                    width: this.$element.data("originalWidth") * o.resize.ratio,
                    height: this.$element.data("originalHeight") * o.resize.ratio
                }), this.$element.fadeIn(300);
                var e = "auto", t = "auto", s = "auto", a = "auto";
                e = this.$element.data("originalLeft") && -1 != this.$element.data("originalLeft").indexOf("%") ? i.width() / 100 * parseFloat(this.$element.data("originalLeft")) - this.$element.width() / 2 + parseInt(i.css("padding-left")) : parseInt(this.$element.data("originalLeft")) * o.resize.ratio, t = this.$element.data("originalRight") && -1 != this.$element.data("originalRight").indexOf("%") ? i.width() / 100 * parseFloat(this.$element.data("originalRight")) - this.$element.width() / 2 + parseInt(i.css("padding-right")) : parseInt(this.$element.data("originalRight")) * o.resize.ratio, s = this.$element.data("originalTop") && -1 != this.$element.data("originalTop").indexOf("%") ? i.height() / 100 * parseFloat(this.$element.data("originalTop")) - this.$element.height() / 2 + parseInt(i.css("padding-top")) : parseInt(this.$element.data("originalTop")) * o.resize.ratio, a = this.$element.data("originalBottom") && -1 != this.$element.data("originalBottom").indexOf("%") ? i.height() / 100 * parseFloat(this.$element.data("originalBottom")) - this.$element.height() / 2 + parseInt(i.css("padding-bottom")) : parseInt(this.$element.data("originalBottom")) * o.resize.ratio, this.$element.css({
                    left: e,
                    right: t,
                    top: s,
                    bottom: a
                })
            }
        }, o.gui = {
            navigation: {
                init: function () {
                    o.o.navPrevNext && this.prevNext.init(), (o.o.navStartStop || o.o.navButtons) && this.bottom.init()
                }, prevNext: {
                    init: function () {
                        e('<a class="ls-gui-element ls-nav-prev" aria-label="jump to the previous slide" href="#" />').on("click." + a, function (e) {
                            e.preventDefault(), i.layerSlider("prev")
                        }).appendTo(i), e('<a class="ls-gui-element ls-nav-next" aria-label="jump to the next slide" href="#" />').on("click." + a, function (e) {
                            e.preventDefault(), i.layerSlider("next")
                        }).appendTo(i), o.o.hoverPrevNext && this.setHover()
                    }, setHover: function () {
                        i.find(".ls-nav-prev, .ls-nav-next").css({display: "none"}), i.on("mouseenter." + a, function () {
                            o.gui.navigation.forceHide || i.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeIn(300)
                        }).on("mouseleave." + a, function () {
                            i.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeOut(300)
                        })
                    }
                }, bottom: {
                    init: function () {
                        this.wrapper = e('<div class="ls-gui-element ls-bottom-nav-wrapper" />').appendTo(i), o.o.navButtons && "always" != o.o.thumbnailNavigation && this.bullets.init(), o.o.navStartStop ? this.createStartStop() : "always" != o.o.thumbnailNavigation && this.createSides(), o.o.hoverBottomNav && "always" != o.o.thumbnailNavigation && this.setHover(), "always" == o.o.thumbnailNavigation && (this.wrapper.addClass("ls-above-thumbnails"), this.thumbnails.init())
                    }, bullets: {
                        init: function () {
                            var t = this;
                            e('<span class="ls-bottom-slidebuttons" />').appendTo(i.find(".ls-bottom-nav-wrapper"));
                            for (var s = 0; s < o.slides.count; s++) {
                                var r = e('<a href="#" aria-label="jump to slide ' + (s + 1) + '" />').appendTo(i.find(".ls-bottom-slidebuttons")).data("index", s + 1).on("click." + a, function (t) {
                                    t.preventDefault(), i.layerSlider(e(this).data("index"))
                                });
                                "hover" == o.o.thumbnailNavigation && r.on("mouseenter." + a, function () {
                                    var s = e(this);
                                    i.find(".ls-thumbnail-hover-img").css({
                                        left: parseInt(t.hoverWrapper.css("padding-left")),
                                        top: parseInt(t.hoverWrapper.css("padding-top"))
                                    }), t.hoverImage.on("load." + a, function () {
                                        0 === e(this).width() ? t.hoverImage.css({
                                            position: "relative",
                                            margin: "0 auto",
                                            left: "auto"
                                        }) : t.hoverImage.css({
                                            position: "absolute",
                                            marginLeft: -e(this).width() / 2,
                                            left: "50%"
                                        }), t.hoverImage.css("display", "none").stop(!0, !0).fadeIn(250)
                                    }).attr("src", o.slides[s.data("index")].data.thumbnail), t.hoverWrapper.css({display: "block"}).stop().animate({left: e(this).position().left + (e(this).width() - t.hoverWrapper.outerWidth()) / 2}, 250), t.hoverWrapperInner.css({
                                        display: "none",
                                        visibility: "visible"
                                    }).stop().fadeIn(250)
                                }).on("mouseleave." + a, function () {
                                    t.hoverWrapperInner.stop().fadeOut(250, function () {
                                        t.hoverWrapper.css({visibility: "hidden", display: "block"})
                                    })
                                })
                            }
                            t.set.active(o.slides.first.index), "hover" == o.o.thumbnailNavigation && t.set.hover()
                        }, set: {
                            active: function (e) {
                                void 0 === e && (e = o.slides.current.index), e--, i.find(".ls-bottom-slidebuttons a").removeClass("ls-nav-active"), i.find(".ls-bottom-slidebuttons a:eq( " + e + " )").addClass("ls-nav-active")
                            }, hover: function () {
                                var t = o.gui.navigation.bottom.bullets,
                                    s = e('<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>').appendTo(i.find(".ls-bottom-slidebuttons"));
                                i.find(".ls-thumbnail-hover, .ls-thumbnail-hover-img").css({
                                    width: o.o.tnWidth,
                                    height: o.o.tnHeight
                                }), t.hoverWrapper = i.find(".ls-thumbnail-hover"), t.hoverImage = t.hoverWrapper.find("img").css({height: o.o.tnHeight}), t.hoverWrapperInner = i.find(".ls-thumbnail-hover-inner").css({
                                    visibility: "hidden",
                                    display: "block"
                                }), s.appendTo(i.find(".ls-bottom-slidebuttons"))
                            }
                        }
                    }, createStartStop: function () {
                        this.buttonStart = e('<a class="ls-nav-start" aria-label="start slideshow" href="#" />').on("click." + a, function (e) {
                            e.preventDefault(), i.layerSlider("start")
                        }).prependTo(i.find(".ls-bottom-nav-wrapper")), this.buttonStop = e('<a class="ls-nav-stop" aria-label="stop slideshow" href="#" />').on("click." + a, function (e) {
                            e.preventDefault(), i.layerSlider("stop")
                        }).appendTo(i.find(".ls-bottom-nav-wrapper")), o.o.autoStart ? this.setStartStop("start") : this.setStartStop("stop")
                    }, setStartStop: function (e) {
                        if (o.o.navStartStop) switch (e) {
                            case"start":
                                this.buttonStart.addClass("ls-nav-start-active"), this.buttonStop.removeClass("ls-nav-stop-active");
                                break;
                            case"stop":
                                this.buttonStart.removeClass("ls-nav-start-active"), this.buttonStop.addClass("ls-nav-stop-active")
                        }
                    }, createSides: function () {
                        e('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo(i.find(".ls-bottom-nav-wrapper")), e('<span class="ls-nav-sides ls-nav-sideright" />').appendTo(i.find(".ls-bottom-nav-wrapper"))
                    }, setHover: function () {
                        var e = this;
                        e.wrapper.css({display: "none"}), i.on("mouseenter." + a, function () {
                            o.gui.navigation.forceHide || e.wrapper.stop(!0, !0).fadeIn(300)
                        }).on("mouseleave." + a, function () {
                            e.wrapper.stop(!0, !0).fadeOut(300)
                        })
                    }, switchHelper: function (e) {
                        if (o.o.hoverBottomNav && !i.hasClass("ls-hover")) switch (e) {
                            case"on":
                                o.gui.navigation.bottom.thumbnails.wrapper.css({
                                    visibility: "hidden",
                                    display: "block"
                                });
                                break;
                            case"off":
                                o.gui.navigation.bottom.thumbnails.wrapper.css({visibility: "visible", display: "none"})
                        }
                    }, thumbnails: {
                        init: function () {
                            this.wrapper = e('<div class="ls-gui-element ls-thumbnail-wrapper"></div>').appendTo(i), e('<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>').appendTo(this.wrapper), this.$element = i.find(".ls-thumbnail-slide-container"), "ontouchstart" in window ? this.$element.addClass("ls-touchscroll") : this.$element.on("mouseenter." + a, function () {
                                e(this).addClass("ls-thumbnail-slide-hover")
                            }).on("mouseleave." + a, function () {
                                e(this).removeClass("ls-thumbnail-slide-hover"), o.gui.navigation.bottom.thumbnails.scroll()
                            }).on("mousemove." + a, function (t) {
                                var i = parseInt(t.pageX - e(this).offset().left) / e(this).width() * (e(this).width() - e(this).find(".ls-thumbnail-slide").width());
                                e(this).find(".ls-thumbnail-slide").stop().css({marginLeft: i})
                            });
                            for (var t = 0; t < o.slides.count; t++) {
                                var s = t + 1,
                                    r = e('<a href="#" class="ls-thumb-' + (t + 1) + '"  aria-label="jump to slide ' + (t + 1) + '"><img src="' + o.slides[s].data.thumbnail + '"></a>');
                                o.slides[s].data.tnAlt && r.find("img").attr("alt", o.slides[s].data.tnAlt), r.data("index", s).on("click." + a, function (t) {
                                    t.preventDefault(), i.layerSlider(e(this).data("index"))
                                }).appendTo(i.find(".ls-thumbnail-slide")), "ontouchstart" in window || r.on("mouseenter." + a, function () {
                                    e(this).children().stop().fadeTo(300, o.o.tnActiveOpacity / 100)
                                }).on("mouseleave." + a, function () {
                                    e(this).children().hasClass("ls-thumb-active") || e(this).children().stop().fadeTo(300, o.o.tnInactiveOpacity / 100)
                                })
                            }
                            o.gui.navigation.bottom.buttonStart && o.gui.navigation.bottom.buttonStop && (o.gui.navigation.bottom.wrapper = e('<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>').appendTo(i), o.gui.navigation.bottom.buttonStart.clone().on("click." + a, function (e) {
                                e.preventDefault(), i.layerSlider("start")
                            }).appendTo(o.gui.navigation.bottom.wrapper), o.gui.navigation.bottom.buttonStop.clone().on("click." + a, function (e) {
                                e.preventDefault(), i.layerSlider("stop")
                            }).appendTo(o.gui.navigation.bottom.wrapper)), o.o.hoverBottomNav && this.setHover()
                        }, setHover: function () {
                            var e = this;
                            e.wrapper.css("display", "none"), o.gui.navigation.bottom.wrapper && (o.gui.navigation.bottom.wrapper = "block" == o.gui.navigation.bottom.wrapper.css("display") ? o.gui.navigation.bottom.wrapper : i.find(".ls-above-thumbnails"), o.gui.navigation.bottom.wrapper.css("display", "none")), i.on("mouseenter." + a, function () {
                                i.addClass("ls-hover"), o.gui.navigation.forceHide || (e.wrapper.stop(!0, !0).fadeIn(300), o.gui.navigation.bottom.wrapper && o.gui.navigation.bottom.wrapper.stop(!0, !0).fadeIn(300))
                            }).on("mouseleave." + a, function () {
                                i.removeClass("ls-hover"), e.wrapper.stop(!0, !0).fadeOut(300), o.gui.navigation.bottom.wrapper && o.gui.navigation.bottom.wrapper.stop(!0, !0).fadeOut(300)
                            })
                        }, change: function (t) {
                            var s = t || o.slides.next.index;
                            i.find(".ls-thumbnail-slide a:not(.ls-thumb-" + s + " )").children().each(function () {
                                e(this).removeClass("ls-thumb-active").stop().fadeTo(750, o.o.tnInactiveOpacity / 100)
                            }), i.find(".ls-thumbnail-slide a.ls-thumb-" + s).children().addClass("ls-thumb-active").stop().fadeTo(750, o.o.tnActiveOpacity / 100)
                        }, scroll: function () {
                            if (!i.find(".ls-thumbnail-slide-container").hasClass("ls-thumbnail-slide-hover")) {
                                var e = !!i.find(".ls-thumb-active").length && i.find(".ls-thumb-active").parent();
                                if (e) {
                                    var t = e.position().left + e.width() / 2,
                                        s = i.find(".ls-thumbnail-slide-container").width() / 2 - t;
                                    s = (s = s < i.find(".ls-thumbnail-slide-container").width() - i.find(".ls-thumbnail-slide").width() ? i.find(".ls-thumbnail-slide-container").width() - i.find(".ls-thumbnail-slide").width() : s) > 0 ? 0 : s, i.find(".ls-thumbnail-slide").animate({marginLeft: s}, 600)
                                }
                            }
                        }, resize: function () {
                            o.gui.navigation.bottom.switchHelper("on");
                            var e = -1 == o.slider.initial.width.indexOf("%") ? parseInt(o.slider.initial.originalWidth) : i.width(),
                                t = i.find(".ls-thumbnail"),
                                s = -1 == o.o.tnContainerWidth.indexOf("%") ? parseInt(o.o.tnContainerWidth) : parseInt(e / 100 * parseInt(o.o.tnContainerWidth));
                            i.find(".ls-thumbnail-slide a").css({
                                width: parseInt(o.o.tnWidth * o.resize.ratio),
                                height: parseInt(o.o.tnHeight * o.resize.ratio)
                            }), i.find(".ls-thumbnail-slide a:last").css({margin: 0}), i.find(".ls-thumbnail-slide").css({height: parseInt(o.o.tnHeight * o.resize.ratio)}), t.css({width: s * Math.floor(100 * o.resize.ratio) / 100}), t.width() > i.find(".ls-thumbnail-slide").width() && t.css({width: i.find(".ls-thumbnail-slide").width()}), o.gui.navigation.bottom.switchHelper("off")
                        }
                    }
                }
            }, skin: {
                load: function () {
                    i.addClass("ls-" + o.o.skin);
                    var t, s = o.o.skinsPath + o.o.skin + "/skin.css", r = e("head").length ? e("head") : e("body");
                    e('link[href="' + s + '"]').length ? (t = e('link[href="' + s + '"]'), o.gui.skin.isLoaded || (o.gui.skin.isLoaded = !0, o.timeouts.skinLoad1 = setTimeout(function () {
                        delete o.timeouts.skinLoad1, o.slider.init()
                    }, 150))) : document.createStyleSheet ? (document.createStyleSheet(s), t = e('link[href="' + s + '"]')) : t = e('<link rel="stylesheet" href="' + s + '" type="text/css" />').appendTo(r), t.on("load." + a, function () {
                        o.gui.skin.isLoaded || (o.gui.skin.isLoaded = !0, o.timeouts.skinLoad2 = setTimeout(function () {
                            delete o.timeouts.skinLoad2, o.slider.init()
                        }, 150))
                    }), e(window).on("load." + a, function () {
                        o.gui.skin.isLoaded || (o.gui.skin.isLoaded = !0, o.timeouts.skinLoad3 = setTimeout(function () {
                            delete o.timeouts.skinLoad3, o.slider.init()
                        }, 150))
                    }), o.timeouts.skinLoad4 = setTimeout(function () {
                        o.gui.skin.isLoaded || (o.gui.skin.isLoaded = !0, delete o.timeouts.skinLoad4, o.slider.init())
                    }, 1e3)
                }
            }, shadow: {
                init: function () {
                    this.set(), this.resize()
                }, set: function () {
                    this.$element = e('<div class="ls-gui-element ls-shadow"></div>').appendTo(i), "block" != this.$element.css("display") || this.$element.find("img").length || (this.show = function () {
                        o.gui.shadow.$element.css({display: "none", visibility: "visible"}).fadeIn(500, function () {
                            o.gui.shadow.show = !1
                        })
                    }, this.image = e("<img>").attr("src", o.o.skinsPath + o.o.skin + "/shadow.png").appendTo(this.$element), this.btmMod = "number" == typeof parseInt(i.css("padding-bottom")) ? parseInt(i.css("padding-bottom")) : 0)
                }, resize: function () {
                    this.image && (this.image.height() > 0 ? this.btmMod > 0 ? this.$element.css({height: this.image.height() / 2}) : this.$element.css({
                        height: this.image.height(),
                        marginTop: -this.image.height() / 2
                    }) : o.timeouts.resizeShadow = setTimeout(function () {
                        delete o.timeouts.resizeShadow, o.gui.shadow.resize()
                    }, 50))
                }
            }, timers: {
                init: function () {
                    o.o.showBarTimer && this.bar.create(), o.o.showCircleTimer && this.circle.create();
                    var t = !1;
                    (t = o.o.showSlideBarTimer ? e("<div>").insertAfter(i) : e('[data-slidebar-for="' + i.attr("id") + '"], [data-slidebar-for="' + a + '"]')).length && (t.addClass("ls-gui-element"), this.slidebar.create(t))
                }, bar: {
                    create: function () {
                        this.$element = e("<div>").addClass("ls-gui-element ls-bar-timer").appendTo(i)
                    }
                }, circle: {
                    create: function () {
                        this.$element = e("<div>").addClass("ls-gui-element ls-circle-timer").appendTo(i), this.$element.append(e('<div class="ls-ct-center"></div><div class="ls-ct-left"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-right"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div>')), this.$element.data("original", {opacity: this.$element.css("opacity")})
                    }
                }, slidebar: {
                    $containerElement: [],
                    $element: [],
                    $progressBarElement: [],
                    $sliderContainerElement: [],
                    $sliderElement: [],
                    elementWidth: [],
                    containerElementWidth: [],
                    sliderContainerElementWidth: [],
                    create: function (t) {
                        var s, r = e(document), n = this, l = function (e, t) {
                            (s = (e.pageX ? e.pageX : o.device.touchX) - n.$element[t].offset().left - n.sliderContainerElementWidth[t] / 2) < 0 && (s = 0), s > n.containerElementWidth[t] - n.sliderContainerElementWidth[t] && (s = "calc( 100% - " + o.gui.timers.slidebar.sliderContainerElementWidth[t] + "px )"), n.$sliderContainerElement[t].css({left: s}), o.transitions._slideTimeline && o.transitions._slideTimeline.progress("string" == typeof s ? o.transitions.layers.timeline.progress : s / (n.containerElementWidth[t] - n.sliderContainerElementWidth[t]) * o.transitions.layers.timeline.progress)
                        };
                        e.each(t, function (t, i) {
                            n.$containerElement[t] = e(i).addClass("ls-slidebar-container " + a), n.$element[t] = e("<div>").addClass("ls-slidebar").appendTo(n.$containerElement[t]), n.$progressBarElement[t] = e("<div>").addClass("ls-progressbar").appendTo(n.$element[t]), n.$sliderContainerElement[t] = e("<div>").addClass("ls-slidebar-slider-container").appendTo(n.$containerElement[t]), n.$sliderElement[t] = e("<div>").addClass("ls-slidebar-slider").appendTo(n.$sliderContainerElement[t]), n.sliderContainerElementWidth[t] = n.$sliderContainerElement[t].width(), n.$sliderContainerElement[t].css({marginTop: -n.$sliderElement[t].outerHeight() / 2}), n.$containerElement[t].on("touchmove." + a, function (e) {
                                l(e, t)
                            }), n.$containerElement[t].on("mousedown." + a + " touchstart." + a, function (i) {
                                o.transitions.layers.timeline.pause(0), e("body").prop("unselectable", !0).addClass("ls-unselectable"), e(document).on("mousemove." + a, function (e) {
                                    l(e, t)
                                }), l(i, t)
                            }), r = r.add(n.$sliderElement[t])
                        }), r.on("mouseup." + a + "touchend." + a, function (t) {
                            e(t.target).closest(i).length || (o.transitions._slideTimeline && o.transitions.layers.timeline.state.finished && o.transitions._slideTimeline.progress() !== o.transitions.layers.timeline.progress && o.functions.setStates(o.transitions.layers.timeline, {finished: !1}), e(document).off("mousemove." + a), e("body").prop("unselectable", !1).removeClass("ls-unselectable"), o.o.pauseLayers && !o.slideshow.state.running || o.slider.isPaused || !o.transitions._slideTimeline || o.o.playByScroll || (!0 === o.transitions.layers.timeline.state.started ? o.transitions.layers.timeline.resume() : o.transitions.layers.timeline.play()))
                        })
                    }
                }
            }, loadingIndicator: {
                init: function () {
                    this.$element = e("<div>").css({display: "none"}).addClass("ls-gui-element ls-loading-container").appendTo(i), e("<div>").addClass("ls-loading-indicator").appendTo(this.$element)
                }, show: function () {
                    this.$element.delay(400).fadeIn(300)
                }, hide: function () {
                    this.$element.stop(!0, !0).fadeOut(300)
                }
            }
        }, o.navigation = {
            direction: "next", init: function () {
                o.slides.count > 1 && (this.set.keyboard(), this.set.touch())
            }, set: {
                keyboard: function () {
                    o.o.keybNav && e("body").on("keydown." + a, function (e) {
                        o.slider.isAnimating || o.slider.isPreloading || (37 == e.which ? o.navigation.prev() : 39 == e.which && o.navigation.next())
                    })
                }, touch: function () {
                    "ontouchstart" in window && o.o.touchNav && (o.slider.$innerWrapper.on("touchstart." + a, function (e) {
                        var t = e.touches ? e.touches : e.originalEvent.touches;
                        1 == t.length && (o.device.touchStartX = o.device.touchEndX = t[0].clientX)
                    }), o.slider.$innerWrapper.on("touchmove." + a, function (e) {
                        var t = e.touches ? e.touches : e.originalEvent.touches;
                        1 == t.length && (o.device.touchEndX = t[0].clientX), Math.abs(o.device.touchStartX - o.device.touchEndX) > 45 && e.preventDefault()
                    }), o.slider.$innerWrapper.on("touchend." + a, function (e) {
                        Math.abs(o.device.touchStartX - o.device.touchEndX) > 45 && (o.device.touchStartX - o.device.touchEndX > 0 ? i.layerSlider("touchNext") : i.layerSlider("touchPrev"))
                    }))
                }
            }, prev: function () {
                (!o.slider.isPopup || o.slider.isPopup && o.slider.state.popupIsVisible) && (this.direction = "prev", this.forceDirection = "prev", o.slideshow.set.prevNext("prev"))
            }, next: function () {
                (!o.slider.isPopup || o.slider.isPopup && o.slider.state.popupIsVisible) && (this.direction = "next", this.forceDirection = "next", o.slideshow.set.prevNext("next"))
            }, start: function () {
                o.functions.setStates(o.slideshow, {
                    running: !0,
                    paused: !1
                }), !0 === o.slideshow.state.pausedByLastCycle && o.functions.setStates(o.slideshow, {pausedByLastCycle: !1}), o.gui.navigation.bottom.setStartStop("start"), o.slideshow.state.pausedByHover || 1 !== o.transitions._slideTimeline.timeScale() && o.transitions.layers.timeline.resume(), o.slideshow.start()
            }, stop: function () {
                o.gui.navigation.bottom.setStartStop("stop"), o.o.pauseLayers && o.transitions.layers.timeline.pause(), o.slideshow.stop()
            }
        }, o.preload = {
            init: function () {
                o.slider.$hiddenWrapper.find(".ls-slide img").each(function () {
                    var t = e(this), i = t[0], s = {};
                    if (t.is(".ls-layer, .ls-bg")) {
                        if (i.getAttribute("width") && (s.width = i.getAttribute("width")), i.getAttribute("height") && (s.height = i.getAttribute("height")), i.sizes && (s.sizes = i.sizes), i.srcset && o.o.useSrcset) {
                            s.srcSet = i.srcset, s.curSrc = i.currentSrc;
                            var a = s.srcSet.split(",").map(function (t) {
                                return parseInt(e.trim(t).split(" ")[1])
                            });
                            s.maxWidth = Math.max.apply(null, a)
                        }
                        t.removeAttr("width").removeAttr("height").removeAttr("sizes").removeAttr("srcset"), e.isEmptyObject(s) || (t.data(o.defaults.init.dataKey).attributes = s)
                    }
                    t.data("lazy-src") && t.data("src", t.data("lazy-src")), t.data("src") ? s.curSrc && t.data("src", s.curSrc) : t.data("src", s.curSrc ? s.curSrc : i.src), t.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
                })
            }, imagesOfSlide: function (t, s) {
                if (!0 !== o.slides[t].wrapped) {
                    this.slideIndex = t, s ? (this.onCompleteCallback = s, o.functions.setStates(o.slider, {preloadingImages: !0}), o.gui.loadingIndicator.show()) : this.onCompleteCallback = !1, o.slider.canShow && i.css({visibility: "visible"}), this.preImages = [];
                    var a, r, n = this;
                    o.slider.$hiddenWrapper.find(".ls-slide:eq(" + (n.slideIndex - 1) + ") *").each(function () {
                        a = e(this), r = this;
                        var t = a.data(o.defaults.init.dataKey);
                        if (a.is("img")) {
                            a.data("src") && a.attr("src", a.data("src")), t && t.attributes && t.attributes.srcSet && o.o.useSrcset && (r.srcset = t.attributes.srcSet);
                            var i = r.src, s = !!(t && t.attributes && t.attributes.curSrc) && t.attributes.curSrc;
                            s && i !== s && a.is(".ls-bg") && (i = s, o.slides[n.slideIndex].data.$background.attr("src", i)), o.preload.preImages.push([i, a])
                        } else "none" !== a.css("background-image") && -1 !== a.css("background-image").indexOf("url") && o.preload.preImages.push([a.css("background-image").match(/url\((.*)\)/)[1].replace(/"/gi, ""), a])
                    }), o.transitions.firstSlide && o.o.globalBGImage && o.preload.preImages.push([o.o.globalBGImage, e()]), this.thumbnailsAreLoaded || this.thumbnails(), 0 === this.preImages.length ? this.onComplete() : this.start()
                } else o.slider.shouldResize && s && (o.resize.setLayers(o.layers.get("next, bg")), o.resize.layers(s))
            }, thumbnails: function () {
                for (var e = o.slider.thumbnails.filter(function (e, t, i) {
                    return i.indexOf(e) == t
                }), t = e.length, i = 0; i < t; i++) {
                    (new Image).src = e[i]
                }
                this.thumbnailsAreLoaded = !0
            }, start: function () {
                o.debugMode && (o.debug.add("group", "preload"), o.debug.add("log", "preload.info", this.slideIndex)), this.preloadedImagesCount = 0;
                for (var e, t = this, i = function () {
                    ++t.preloadedImagesCount == t.preImages.length && (o.debugMode && o.debug.groupEnd(), t.onComplete())
                }, s = function () {
                    o.debugMode && (e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length), o.debug.add("log", "preload.success", e)), this.originalLayer.data("preloadedWidth", this.width), this.originalLayer.data("preloadedHeight", this.height), i()
                }, a = function () {
                    o.debugMode && (e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length), o.debug.add("warn", "preload.fail", e)), i()
                }, r = 0; r < this.preImages.length; r++) {
                    var n = new Image;
                    n.addEventListener("error", a, !1), n.addEventListener("load", s, !1), n.src = this.preImages[r][0], n.originalLayer = this.preImages[r][1]
                }
            }, onComplete: function () {
                var t = this;
                this.onCompleteCallback ? (o.layers.wrap(this.slideIndex), function i() {
                    if (0 !== o.slides[t.slideIndex].$layers.length) o.timeouts.waitForWrap = setTimeout(i, 100); else {
                        delete o.timeouts.waitForWrap, o.functions.setStates(o.transitions.layers.parallax, {ready: !0}), e(".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper").css({visibility: "visible"}), o.slides[t.slideIndex].wrapped = !0;
                        var s = !(!window._layerSlider.globals.youTubeIsReady && o.layers.get("next,in,youtube,bgvideo").length),
                            a = !(!window._layerSlider.globals.vimeoIsReady && o.layers.get("next,in,vimeo,bgvideo").length),
                            r = function () {
                                o.gui.loadingIndicator.hide(), o.slider.shouldResize ? (o.resize.setLayers(o.layers.get("next, bg")), o.resize.layers(t.onCompleteCallback)) : t.onCompleteCallback()
                            };
                        s && a ? r() : o.intervals.waitForJSApisLoaded = setInterval(function () {
                            (s || window._layerSlider.globals.youTubeIsReady) && (a || window._layerSlider.globals.vimeoIsReady) && (clearInterval(o.intervals.waitForJSApisLoaded), delete o.intervals.waitForJSApisLoaded, r())
                        }, 50)
                    }
                }()) : o.layers.wrap(this.slideIndex, !0), o.functions.setStates(o.slider, {preloadingImages: !1})
            }
        }, o.resize = {
            setLayers: function (e) {
                this.$responsiveLayers = e.add(o.layers.get("active")), o.slides.next.data.$backgroundVideo.length && (this.$responsiveLayers = this.$responsiveLayers.add(o.slides.next.data.$backgroundVideo))
            }, all: function () {
                if (!document.body.contains(t)) return !1;
                o.api.hasEvent("sliderWillResize") && i.triggerHandler("sliderWillResize", o.api.eventData()), this.slider(), this.navigation(), this.layers(), this.yourLogo(), this.shadow(), this.timers(), o.transitions.layers.timeline.shouldRestart && o.o.allowRestartOnResize && (o.functions.resetSlideTimelines(), o.transitions.layers.timeline.create(!0)), o.api.hasEvent("sliderDidResize") && i.triggerHandler("sliderDidResize", o.api.eventData())
            }, viewport: function () {
                e(window).scrollTop(Math.round(o.slider.offsetTop) - (o.device.viewportHeight - o.slider.height) / 2)
            }, slider: function () {
                if (!document.body.contains(t)) return !1;
                var s,
                    a = o.slider.$parentWithNumericWidthValue ? o.slider.$parentWithNumericWidthValue : o.functions.getSliderClosestParentElementWidthNumericValueOfProperty("width"),
                    r = o.slider.initial,
                    n = o.slider.$parentWithNumericWidthValuePercent ? a.width() / 100 * o.slider.$parentWithNumericWidthValuePercent : a.width(),
                    l = r.type, d = 0 !== r.maxWidth ? r.maxWidth : n, u = "auto" === r.marginLeft ? 0 : r.marginLeft,
                    p = "auto" === r.marginRight ? 0 : r.marginRight;
                if (o.slider.state.inFullscreen ? i[0].style.maxWidth = "" : 0 !== r.maxWidth && (i[0].style.maxWidth = r.maxWidth + "px"), -1 !== d.indexOf("%") && (d = n / 100 * parseInt(d)), (n -= u + p) > d && d >= 0 && (n = d), o.o.fitScreenWidth && ("fullwidth" === l || "fullsize" === l && "fitheight" !== o.o.fullSizeMode && "fitwidth" !== o.o.fullSizeMode)) {
                    i.parent();
                    var c = a.offset().left, h = parseInt(a.css("padding-left")) || 0,
                        m = parseInt(a.css("border-left-width")) || 0;
                    i[0].style.maxWidth = "none", i[0].style.marginLeft = -(c + h + m) + "px", n = o.device.viewportWidth || e(window).width()
                }
                switch (n -= r.skinWidth, o.slider.state.inFullscreen && (n = o.device.width), l) {
                    case"responsive":
                        o.slider.state.inFullscreen ? (o.device.ratio > r.ratio ? this.ratio = o.device.height / r.height : this.ratio = o.device.width / r.width, n = Math.round(r.width * this.ratio), s = Math.round(r.height * this.ratio)) : (this.ratio = n / r.width, s = Math.round(r.height * this.ratio));
                        break;
                    case"fullwidth":
                        n < o.o.responsiveUnder ? (this.ratio = n / o.o.responsiveUnder, s = Math.round(r.height * this.ratio)) : o.slider.state.inFullscreen ? o.device.ratio > r.layersWidth / r.height ? (this.ratio = o.device.height / r.height, s = o.device.height) : (this.ratio = o.device.width / r.layersWidth, s = r.height * this.ratio) : (this.ratio = 1, s = r.height);
                        break;
                    case"fullsize":
                        switch (o.o.fullSizeMode.toLowerCase()) {
                            case"normal":
                                s = o.device.viewportHeight - r.skinHeight;
                                break;
                            case"hero":
                                s = o.device.viewportHeight - r.skinHeight, o.slider.state.inFullscreen || (s -= o.slider.heroTop ? o.slider.heroTop : o.slider.offsetTop);
                                break;
                            case"fitheight":
                                n = i.parent().width() - r.skinWidth, s = i.parent().height() - r.skinHeight;
                                break;
                            case"fitwidth":
                                n = i.parent().width() - r.skinWidth, s = o.device.viewportHeight - r.skinHeight
                        }
                        n / s < r.ratio ? this.ratio = n / r.layersWidth : this.ratio = s / r.layersHeight;
                        break;
                    case"fixed":
                    case"fixedsize":
                        this.ratio = 1, n = r.width, s = r.height, o.o.maxRatio = 1, t.style.maxWidth = "none"
                }
                this.ratio = o.o.maxRatio && o.o.maxRatio > 0 && this.ratio > o.o.maxRatio ? o.o.maxRatio : this.ratio, t.style.width = n + "px", t.style.height = s + "px", o.slider.width = n, o.slider.height = s;
                var f = i.offset();
                o.slider.offsetX = f.left, o.slider.offsetY = f.top, o.device.isMobile ? o.device.viewportWidth < 1025 && o.device.viewportWidth > 767 ? i.removeClass("ls-device-is-phone").addClass("ls-device-is-tablet") : o.device.viewportWidth < 768 && i.removeClass("ls-device-is-tablet").addClass("ls-device-is-phone") : i.removeClass("ls-device-is-phone ls-device-is-tablet").addClass("ls-device-is-desktop")
            }, borderRadius: function (t) {
                for (var i = ("" + t).split(" "), s = "", a = o.o.maxRatio && o.o.maxRatio > 0 && this.ratio > o.o.maxRatio ? o.o.maxRatio : this.ratio, r = 0, n = i.length; r < n; r++) -1 === i[r].indexOf("%") ? s += Math.ceil(parseInt(i[r]) * a) + "px " : s += i[r] + " ";
                return e.trim(s)
            }, layers: function (t) {
                if (this.$responsiveLayers) {
                    o.debugMode && o.debug.add("group", "resize");
                    var i = this.ratio, s = this.$responsiveLayers, a = o.slider.initial, r = o.slider.width,
                        n = o.slider.height, l = r / n, d = [], u = [], p = [], c = [], h = 0, m = 0,
                        f = "responsive" === a.type && -1 !== o.o.maxRatio ? a.width : a.layersWidth,
                        g = "responsive" === a.type && -1 !== o.o.maxRatio ? a.height : a.layersHeight;
                    "fullsize" === a.type || "fullwidth" === a.type || "responsive" === a.type ? (h = f > 0 ? (r - f * i) / 2 : 0, m = g > 0 ? (n - g * i) / 2 : 0) : (h = h < 0 ? 0 : h, m = m < 0 ? 0 : m);
                    for (var v = 0, y = s.length; v < y; v++) {
                        var b, S, w = e(s[v]), x = (s[v], w.data(o.defaults.init.dataKey)), T = x.original,
                            C = "fixed" === x.settings.position, k = C ? 0 : h, I = C ? 0 : m, O = {
                                width: C && 0 !== T.percentWidth ? r / 100 * T.percentWidth : T.width * i,
                                height: C && 0 !== T.percentHeight ? n / 100 * T.percentHeight : T.height * i,
                                paddingLeft: T.paddingLeft * i,
                                paddingTop: T.paddingTop * i,
                                paddingRight: T.paddingRight * i,
                                paddingBottom: T.paddingBottom * i,
                                borderLeftWidth: Math.ceil(T.borderLeftWidth * i),
                                borderTopWidth: Math.ceil(T.borderTopWidth * i),
                                borderRightWidth: Math.ceil(T.borderRightWidth * i),
                                borderBottomWidth: Math.ceil(T.borderBottomWidth * i),
                                borderRadius: this.borderRadius(T.borderRadius)
                            }, L = {marginLeft: T.marginLeft * i, marginTop: T.marginTop * i}, $ = {},
                            B = {borderRadius: O.borderRadius};
                        if (C && (T.percentHeight || T.percentWidth) && x.is.imageLayer && (T.percentHeight && !T.percentWidth && (O.width = T.width * (O.height / T.height)), T.percentWidth && !T.percentHeight && (O.height = T.height * (O.width / T.width))), ("number" == typeof T.width && T.width < 0 || "auto" == T.width) && o.debugMode && o.debug.add("warn", "resize.width", [v + 1, T.width]), ("number" == typeof T.height && T.height < 0 || "auto" == T.height) && o.debugMode && o.debug.add("warn", "resize.height", [v + 1, T.height]), x.is.textLayer && (O.fontSize = T.fontSize * i, o.device.isMobile && O.fontSize < x.styleSettings.minmobilefontsize ? O.fontSize = x.styleSettings.minmobilefontsize : O.fontSize < x.styleSettings.minfontsize && (O.fontSize = x.styleSettings.minfontsize), S = O.fontSize / T.fontSize, O.fontSize += "px", "normal" !== T.lineHeight && (O.lineHeight = parseFloat(T.lineHeight) * S + "px"), "normal" !== T.letterSpacing && (O.letterSpacing = parseFloat(T.letterSpacing) * S + "px")), x.is.slideBackground || x.is.backgroundVideo) if (x.is.slideBackground) {
                            var P = o.slides[x.is.onSlide].data.backgroundSize;
                            switch ((void 0 !== P && "inherit" !== P ? P : o.o.slideBGSize).replace("100% 100%", "stretch")) {
                                case"auto":
                                    break;
                                case"cover":
                                    T.ratio < l ? (O.width = r, O.height = O.width / T.ratio) : (O.height = n, O.width = O.height * T.ratio);
                                    break;
                                case"contain":
                                    T.ratio < l ? (O.height = n, O.width = O.height * T.ratio) : (O.width = r, O.height = O.width / T.ratio);
                                    break;
                                case"stretch":
                                    O.width = r, O.height = n
                            }
                            O.width = Math.round(O.width), O.height = Math.round(O.height);
                            var W = o.slides[x.is.onSlide].data.backgroundPosition;
                            switch ((b = void 0 !== W ? W.split(" ") : o.o.slideBGPosition.split(" "))[0]) {
                                case"left":
                                    O.x = 0;
                                    break;
                                case"center":
                                    O.x = (o.slider.width - O.width) / 2;
                                    break;
                                case"right":
                                    O.x = o.slider.width - O.width;
                                    break;
                                default:
                                    -1 !== b[0].indexOf("%") ? O.x = (o.slider.width - O.width) / 100 * parseInt(b[0]) : O.x = parseInt(b[0])
                            }
                            if (void 0 !== b[1]) switch (b[1]) {
                                case"top":
                                    O.y = 0;
                                    break;
                                case"center":
                                    O.y = (o.slider.height - O.height) / 2;
                                    break;
                                case"bottom":
                                    O.y = o.slider.height - O.height;
                                    break;
                                default:
                                    -1 !== b[1].indexOf("%") ? O.y = (o.slider.height - O.height) / 100 * parseInt(b[1]) : O.y = parseInt(b[1])
                            }
                            O.transform = "translateX(" + O.x + "px) translateY(" + O.y + "px)", O["-ms-transform"] = "translateX(" + O.x + "px) translateY(" + O.y + "px)", O["-webkit-transform"] = "translateX(" + O.x + "px) translateY(" + O.y + "px)"
                        } else x.is.backgroundVideo && (T.ratio < l ? (O.width = r, O.height = O.width / T.ratio) : (O.height = n, O.width = O.height * T.ratio), O.x = (o.slider.width - O.width) / 2, O.y = (o.slider.height - O.height) / 2, O.width = Math.round(O.width), O.height = Math.round(O.height), O.transform = "translateX(" + O.x + "px) translateY(" + O.y + "px)", O["-ms-transform"] = "translateX(" + O.x + "px) translateY(" + O.y + "px)", O["-webkit-transform"] = "translateX(" + O.x + "px) translateY(" + O.y + "px)"); else {
                            if (x.mediaSettings.fullsize) switch (x.mediaSettings.fillmode) {
                                default:
                                case"cover":
                                    T.ratio < l ? (O.width = r, O.height = O.width / T.ratio) : (O.height = n, O.width = O.height * T.ratio);
                                    break;
                                case"contain":
                                    T.ratio > l ? (O.width = r, O.height = O.width / T.ratio) : (O.height = n, O.width = O.height * T.ratio)
                            }
                            O.outerWidth = O.width + O.paddingLeft + O.paddingRight + O.borderLeftWidth + O.borderRightWidth, O.outerHeight = O.height + O.paddingTop + O.paddingBottom + O.borderTopWidth + O.borderBottomWidth, L.width = $.width = O.outerWidth, L.height = $.height = O.outerHeight, -1 != T.left.indexOf("%") ? "100%" === T.left ? O.left = 0 === k ? o.slider.width / 100 * parseFloat(T.left) - O.outerWidth : k + f * i / 100 * parseFloat(T.left) - O.outerWidth : "0%" === T.left ? O.left = 0 === k ? 0 : k : O.left = 0 === k ? o.slider.width / 100 * parseFloat(T.left) - O.outerWidth / 2 : k + f * i / 100 * parseFloat(T.left) - O.outerWidth / 2 : O.left = k + parseFloat(T.left) * i, L.left = O.left, -1 != T.top.indexOf("%") ? "100%" === T.top ? O.top = 0 === I ? o.slider.height / 100 * parseFloat(T.top) - O.outerHeight : I + g * i / 100 * parseFloat(T.top) - O.outerHeight : "0%" === T.top ? O.top = 0 === I ? 0 : I + 0 : O.top = 0 === I ? o.slider.height / 100 * parseFloat(T.top) - O.outerHeight / 2 : I + g * i / 100 * parseFloat(T.top) - O.outerHeight / 2 : O.top = I + parseFloat(T.top) * i, L.top = O.top
                        }
                        x.responsive = O, d[v] = O, x.is.slideBackground || x.is.backgroundVideo || (x.settings.wrapperData.responsive = L, u[v] = L, p[v] = $, c[v] = B)
                    }
                    for (var _ = 0, M = d.length; _ < M; _++) {
                        var z = e(s[_]), F = z.data(o.defaults.init.dataKey);
                        z.css(d[_]), F.is.slideBackground || F.is.backgroundVideo ? (F.is.slideBackground || F.is.backgroundVideo) && (F.elements.$bgOuterWrapper.css({
                            width: o.slider.width,
                            height: o.slider.height
                        }), F.elements.$outerWrapper.css({
                            width: o.slider.width,
                            height: o.slider.height
                        })) : (z.find(".split-item").css(c[_]), this.wrappers(z, F, u[_], p[_]))
                    }
                    void 0 !== t && t(), o.debugMode && o.debug.groupEnd("resize")
                }
            }, wrappers: function (e, t, i, s) {
                i && t.elements.$wrapper.css(i), s && t.loop.enabled && t.elements.$loopWrapper.css(s), r.TweenMax.set(t.elements.$wrapper[0], {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.layer * o.resize.ratio}
                }), t.loop.enabled && r.TweenMax.set(t.elements.$loopWrapper[0], {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.loop * o.resize.ratio}
                }), t.hover.enabled && r.TweenMax.set(e[0], {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.hover * o.resize.ratio}
                }), t.textIn.nodes && r.TweenMax.set(t.textIn.nodes, {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.text * o.resize.ratio}
                }), t.textOut.nodes && r.TweenMax.set(t.textOut.nodes, {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.text * o.resize.ratio}
                }), t.parallax.enabled && r.TweenMax.set(t.elements.$parallaxWrapper[0], {
                    autoCSS: !1,
                    css: {transformPerspective: t.transformPerspective.parallax * o.resize.ratio}
                })
            }, transformProperties: function (e, t, i, s) {
                if ("object" == typeof i.x) {
                    for (var a = [], r = 0; r < i.x.length; r++) "string" == typeof i.x[r] ? a[r] = this.getXY(e, i.x[r], "Width") : a[r] = i.x[r] * o.resize.ratio;
                    t.cycle.x = a
                } else "string" == typeof i.x ? t.x = this.getXY(e, i.x, "Width") : void 0 !== i.x && (t.x = i.x * o.resize.ratio);
                if ("object" == typeof i.y) {
                    for (var n = [], l = 0; l < i.y.length; l++) "string" == typeof i.y[l] ? n[l] = this.getXY(e, i.y[l], "Height") : n[l] = i.y[l] * o.resize.ratio;
                    t.cycle.y = n
                } else "string" == typeof i.y ? t.y = this.getXY(e, i.y, "Height") : void 0 !== i.y && (t.y = i.y * o.resize.ratio);
                if (s && (t = s), "object" == typeof i.transformOrigin) {
                    for (var d = [], u = 0; u < i.transformOrigin.length; u++) d[u] = o.functions.convert.transformOrigin(i.transformOrigin[u], e);
                    t.cycle.transformOrigin = d
                } else "string" == typeof i.transformOrigin && (t.transformOrigin = o.functions.convert.transformOrigin(i.transformOrigin, e))
            }, styleProperties: function (t, i) {
                void 0 !== i.width && (e.isNumeric(i.width) ? t.width = parseInt(i.width) * o.resize.ratio : "string" == typeof i.width && -1 !== i.width.indexOf("%") && (t.width = o.slider.width / 100 * parseInt(i.width))), void 0 !== i.height && (e.isNumeric(i.height) ? t.height = parseInt(i.height) * o.resize.ratio : "string" == typeof i.height && -1 !== i.height.indexOf("%") && (t.height = o.slider.height / 100 * parseInt(i.height))), i.borderRadius && (t.borderRadius = o.resize.borderRadius(i.borderRadius))
            }, clip: function (t, i, s) {
                i = e.trim(i.replace("rect(", "").replace(")", ""));
                for (var a, r = t.data(o.defaults.init.dataKey).responsive, n = Math.ceil(r.outerWidth), l = Math.ceil(r.outerHeight), d = -1 === i.indexOf(",") ? i.split(" ") : i.split(","), u = "", p = 0; p < d.length; p++) if (-1 !== d[p].indexOf("%")) switch (p) {
                    case 0:
                        u += parseInt(l / 100 * parseInt(d[p]) * 100) / 100 + "px ";
                        break;
                    case 1:
                        u += s ? parseInt(100 * (n - n / 100 * parseInt(d[p]))) / 100 + "px " : parseInt(n / 100 * parseInt(d[p]) * 100) / 100 + "px ";
                        break;
                    case 2:
                        u += s ? parseInt(100 * (l - l / 100 * parseInt(d[p]))) / 100 + "px " : parseInt(l / 100 * parseInt(d[p]) * 100) / 100 + "px ";
                        break;
                    case 3:
                        u += parseInt(n / 100 * parseInt(d[p]) * 100) / 100 + "px"
                } else switch (a = parseInt(d[p]) * o.resize.ratio, p) {
                    case 0:
                        u += a + "px ";
                        break;
                    case 1:
                        u += s ? n - a + " " : a + "px ";
                        break;
                    case 2:
                        u += s ? l - a + "px " : a + "px ";
                        break;
                    case 3:
                        u += a + "px"
                }
                return "rect(" + u + ")"
            }, getXY: function (e, t, i) {
                var s = 0, a = e.data(o.defaults.init.dataKey), r = a.original, n = a.responsive,
                    l = a.settings.wrapperData.responsive;
                if (r && n && l) switch (t) {
                    case"left":
                        s = -1 != r.left.indexOf("%") ? "100%" === r.left ? -n.left - n.outerWidth - l.marginLeft : -parseInt(r.left) / 100 * o.slider.width - n.outerWidth / 2 - l.marginLeft : -n.left - n.outerWidth - l.marginLeft;
                        break;
                    case"right":
                        s = -1 != r.left.indexOf("%") ? "100%" === r.left ? o.slider.width - n.left - l.marginLeft : (1 - parseInt(r.left) / 100) * o.slider.width + n.outerWidth / 2 - l.marginLeft : o.slider.width - n.left - l.marginLeft;
                        break;
                    case"top":
                        s = -1 != r.top.indexOf("%") ? "100%" === r.top ? -n.top - n.outerHeight - l.marginTop : -parseInt(r.top) / 100 * o.slider.height - n.outerHeight / 2 - l.marginTop : -n.top - n.outerHeight - l.marginTop;
                        break;
                    case"bottom":
                        s = -1 != r.top.indexOf("%") ? "100%" === r.top ? o.slider.height - n.top - l.marginTop : (1 - parseInt(r.top) / 100) * o.slider.height + n.outerHeight / 2 - l.marginTop : o.slider.height - n.top - l.marginTop;
                        break;
                    case"width":
                        s = n.outerWidth;
                        break;
                    case"-width":
                        s = -n.outerWidth;
                        break;
                    case"height":
                        s = n.outerHeight;
                        break;
                    case"-height":
                        s = -n.outerHeight;
                        break;
                    default:
                        s = -1 !== t.indexOf("%") ? n["outer" + i] / 100 * parseInt(t) : -1 !== t.indexOf("sw") ? parseInt(t.split("sw")[0]) / 100 * o.slider.width : -1 !== t.indexOf("sh") ? parseInt(t.split("lw")[0]) / 100 * o.slider.height : -1 !== t.indexOf("lw") ? n.outerWidth / 100 * parseInt(t.split("lw")[0]) : -1 !== t.indexOf("lh") ? n.outerHeight / 100 * parseInt(t.split("lj")[0]) : parseInt(t) * o.resize.ratio
                }
                return s
            }, navigation: function () {
                "always" == o.o.thumbnailNavigation && o.gui.navigation.bottom.thumbnails.resize()
            }, shadow: function () {
                o.gui.shadow.show && o.gui.shadow.show(), o.gui.shadow.$element && o.gui.shadow.resize()
            }, yourLogo: function () {
                o.yourLogo.$element && o.yourLogo.resize()
            }, timers: function () {
                if (o.gui.timers.slidebar.$containerElement.length > 0) for (var e = 0, t = o.gui.timers.slidebar.$containerElement.length; e < t; e++) o.gui.timers.slidebar.containerElementWidth[e] = o.gui.timers.slidebar.$containerElement[e].width(), o.gui.timers.slidebar.elementWidth[e] = o.gui.timers.slidebar.$element[e].width()
            }
        }, o.transitions = {
            firstSlide: !0, start: function () {
                if (!document.body.contains(t)) return !1;
                o.device.scroll.directionAtSlideTransitionStart = o.device.scroll.direction, "always" == o.o.thumbnailNavigation && (o.gui.navigation.bottom.thumbnails.change(), "ontouchstart" in window || o.gui.navigation.bottom.thumbnails.scroll()), this.layers.out.forced(), this.slide.init()
            }, slide: {
                $wrapper: e(), init: function () {
                    var t, i;
                    if (o.functions.setStates(o.slider, {animatingSlides: !0}), o.transitions.layers.parallax.reset(), o.slider.$layersWrapper.children('.ls-parallax[data-ls-parallax="active"]').each(function () {
                        e(this).find(".ls-layer").data(o.defaults.init.dataKey).settings.slideOut === o.slides.current.index && e(this).attr("data-ls-parallax", "disbaled")
                    }), o.transitions.curSlide = o.slides.current, o.transitions.nextSlide = o.slides.next, o.transitions._slideTransition = new r.TimelineMax({
                        paused: !0,
                        onComplete: function () {
                            o.transitions.slide.onComplete()
                        }
                    }), o.transitions.firstSlide) {
                        if (void 0 !== o.transitions.nextSlide.data.$background) {
                            var s = o.transitions.nextSlide.data.$background.data(o.defaults.init.dataKey),
                                a = s.kenBurns.zoom ? s.kenBurns.from.scale : 1,
                                n = s.kenBurns.zoom ? s.kenBurns.from.rotation : 0,
                                l = o.transitions.nextSlide.filter.from || "none";
                            o.transitions._slideTransition.set(o.transitions.nextSlide.data.$background[0], {
                                "-webkit-filter": l,
                                filter: l
                            }, 0), o.transitions._slideTransition.fromTo(o.transitions.nextSlide.data.$background.closest(".ls-bg-wrap")[0], o.o.sliderFadeInDuration, {
                                autoCSS: !1,
                                css: {scale: a, rotation: n, opacity: 0, display: "block"}
                            }, {autoCSS: !1, css: {opacity: 1}}, 0)
                        }
                        this.start(!0)
                    } else "undefined" == typeof layerSliderTransitions && "undefined" == typeof layerSliderCustomTransitions ? (this.start(!0), o.debugMode && o.debug.add("warn", "slideTransition.noSlideTransition", o.transitions.nextSlide.index)) : void 0 === o.transitions.curSlide.data.$background && void 0 === o.transitions.nextSlide.data.$background && "transparent" == o.transitions.curSlide.data.backgroundColor && "transparent" == o.transitions.nextSlide.data.backgroundColor ? this.start(!0) : ("x" === o.o.clipSlideTransition ? o.device.$overflowWrapper.addClass("ls-overflowx-hidden") : "y" === o.o.clipSlideTransition ? o.device.$overflowWrapper.addClass("ls-overflowy-hidden") : !0 === o.o.clipSlideTransition && o.device.$overflowWrapper.addClass("ls-overflow-hidden"), void 0 !== o.transitions.curSlide.data.$background && (t = o.transitions.curSlide.data.$background.closest(".ls-bg-wrap")[0]._gsTransform, (i = o.transitions.curSlide.data.$background.data(o.defaults.init.dataKey)).responsive.filter = o.transitions.curSlide.data.$background[0].style.filter, i.responsive.kbRotation = void 0 !== t ? " rotate(" + t.rotation + "deg)" : " rotate(0deg)", i.responsive.kbScale = void 0 !== t ? " scale(" + t.scaleX + ")" : " scale(1)"), o.transitions.slide.$wrapper = e("<div>").addClass("ls-slide-transition-wrapper").css({
                        width: o.slider.width,
                        height: o.slider.height
                    }), this.select.slideTransitionType())
                }, select: {
                    slideTransitionType: function () {
                        o.transitions.slide.normal.select.transitionType()
                    }
                }, start: function (e) {
                    var t, s = !(!o.slides.current.index || !o.slides.current.data.$backgroundVideo.length),
                        a = !(!o.slides.next.index || !o.slides.next.data.$backgroundVideo.length);
                    if (!o.slideshow.firstStart && o.api.hasEvent("slideChangeDidStart") && i.triggerHandler("slideChangeDidStart", o.api.eventData()), !e && (void 0 !== o.transitions.nextSlide.data.transitionDuration && o.transitions._slideTransition.duration(o.transitions.nextSlide.data.transitionDuration), o.debugMode && o.debug.options.transitionDuration && o.transitions._slideTransition.duration(o.debug.options.transitionDuration), o.transitions.layers.timeline.timeScaleModifier > .25)) {
                        var n = o.transitions._slideTransition.duration() / (.75 + o.transitions.layers.timeline.timeScaleModifier);
                        n = n < .5 ? .5 : n, o.transitions._slideTransition.duration(n)
                    }
                    var l, d = o.transitions._slideTransition.duration() / o.transitions._slideTransition.timeScale(),
                        u = d, p = o.transitions.nextSlide.data.timeShift;
                    p > 0 ? p = 0 : p < 0 && Math.abs(p) > d && (p = -d), o.transitions.nextSlide.data.calculatedTimeShift = p, l = o.transitions.firstSlide ? o.o.sliderFadeInDuration + .01 : (u + p) * o.transitions._slideTransition.timeScale(), (s || a) && o.transitions.media.changeBackgroundVideo(o.transitions.firstSlide, !(!s || !a)), o.transitions._slideTransition.call(function () {
                        !o.slideshow.firstStart && o.api.hasEvent("slideChangeWillComplete") && i.triggerHandler("slideChangeWillComplete", o.api.eventData()), o.slideshow.should.change || o.transitions.layers.timeline.prepare(), o.media.stop(!0), o.slides.set.slideIndexes(), o.o.hashChange && (document.location.hash = o.slides[o.slides.current.index].data.deeplink || "_no-deeplink-found_"), o.slideshow.start(), !o.transitions.firstSlide && o.slides.prev.index && o.slides.prev.data.$backgroundVideo.length && !o.slides.prev.data.$backgroundVideo.data(o.defaults.init.dataKey).mediaProperties.willBePaused && (o.slides.prev.data.$backgroundVideo.trigger("stopBackgroundVideo"), o.slides.prev.data.$backgroundVideo.data(o.defaults.init.dataKey).elements.$bgWrapper.css({display: "none"})), o.slideshow.should.change || o.slides.next.data.$backgroundVideo.length && !o.slides.next.data.$backgroundVideo.data(o.defaults.init.dataKey).mediaProperties.isPreloaded && (o.slides.next.data.$backgroundVideo.trigger("preloadBackgroundVideo"), o.slides.next.data.$backgroundVideo.data(o.defaults.init.dataKey).mediaProperties.isPreloaded = !0), o.transitions.firstSlide = !1
                    }, [], this, l), o.transitions._slideTransition.play(), void 0 !== o.transitions.curSlide.data && void 0 !== o.transitions.curSlide.data.$background && (t = o.transitions.curSlide.data.$background.data(o.defaults.init.dataKey), o.timeouts.applyBG = setTimeout(function () {
                        delete o.timeouts.applyBG, o.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(), t.kenBurns.zoom && r.TweenMax.set(o.transitions.curSlide.data.$background[0], {
                            autoCSS: !1,
                            css: t.kenBurns.from
                        })
                    }, 5))
                }, onComplete: function () {
                    var e;
                    void 0 !== o.transitions.nextSlide.data.$background && o.transitions.nextSlide.data.$background.closest(".ls-bg-wrap").show(), "transparent" !== o.transitions.nextSlide.data.backgroundColor ? o.slider.$innerWrapper.css("background-color", o.transitions.nextSlide.data.backgroundColor) : o.slider.$innerWrapper.css("background-color", o.o.globalBGColor), o.o.leaveOverflow || o.device.$overflowWrapper.removeClass("ls-overflowx-hidden ls-overflowy-hidden ls-overflow-hidden"), this.$wrapper && (this.$wrapper.html("").remove(), this.$wrapper = !1), o.gui.navigation.bottom.bullets.set.active(), o.o.cycles > 0 && (o.slideshow.hasOwnProperty("cycleSlideIndex") ? o.slideshow.cycles.check(o.transitions.nextSlide.index) && (o.navigation.stop(), o.functions.setStates(o.slideshow, {pausedByLastCycle: !0}), o.o.forceCycles && (o.slideshow.curCycle = 1)) : o.slideshow.cycles.set()), o.functions.setStates(o.slider, {
                        animatingSlides: !1,
                        changingSlides: !1
                    }), !o.slideshow.firstStart && o.api.hasEvent("slideChangeDidComplete") && i.triggerHandler("slideChangeDidComplete", o.api.eventData()), o.slideshow.firstStart = !1, !1 !== o.slideshow.should.change && o.navigation.forceDirection ? (void 0 !== o.transitions.curSlide.data && void 0 !== o.transitions.curSlide.data.$background && (e = o.transitions.curSlide.data.$background.data(o.defaults.init.dataKey), o.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(), e.kenBurns.zoom && r.TweenMax.set(o.transitions.curSlide.data.$background[0], {
                        autoCSS: !1,
                        css: e.kenBurns.from
                    })), o.slideshow.changeTo(o.slideshow.get.slideInSequence(o.navigation.forceDirection), !0)) : o.preload.imagesOfSlide(o.slides.next.index)
                }, normal: {
                    select: {
                        transitionType: function () {
                            if (o.o.slideTransition) o.transitions.slide.normal.setTransition(o.o.slideTransition.type, o.o.slideTransition.obj); else {
                                var e, t,
                                    i = !!o.transitions.nextSlide.data.transition2d && o.transitions.nextSlide.data.transition2d.toString().split(",");
                                o.device.touchPrev && o.o.slideOnSwipe ? (o.device.touchPrev = !1, this.transition("2d", "1")) : o.device.touchNext && o.o.slideOnSwipe ? (o.device.touchNext = !1, this.transition("2d", "1")) : o.slides.next.data.$background || i && (!i || -1 != i.indexOf("1") || -1 != i.indexOf("2") || -1 != i.indexOf("3") || -1 != i.indexOf("4")) ? o.browser.supports3D() && (o.transitions.nextSlide.data.transition3d || o.transitions.nextSlide.data.customtransition3d) ? o.transitions.nextSlide.data.transition3d && o.transitions.nextSlide.data.customtransition3d ? (e = Math.floor(2 * Math.random()), t = [["3d", o.transitions.nextSlide.data.transition3d], ["custom3d", o.transitions.nextSlide.data.customtransition3d]], this.transition(t[e][0], t[e][1])) : o.transitions.nextSlide.data.transition3d ? this.transition("3d", o.transitions.nextSlide.data.transition3d) : this.transition("custom3d", o.transitions.nextSlide.data.customtransition3d) : o.transitions.nextSlide.data.transition2d && o.transitions.nextSlide.data.customtransition2d ? (e = Math.floor(2 * Math.random()), t = [["2d", o.transitions.nextSlide.data.transition2d], ["custom2d", o.transitions.nextSlide.data.customtransition2d]], this.transition(t[e][0], t[e][1])) : o.transitions.nextSlide.data.transition2d ? this.transition("2d", o.transitions.nextSlide.data.transition2d) : o.transitions.nextSlide.data.customtransition2d ? this.transition("custom2d", o.transitions.nextSlide.data.customtransition2d) : this.transition("2d", "1") : this.transition("2d", "5")
                            }
                        }, transition: function (e, t) {
                            o.debugMode && o.debug.add("group", "slideTransition.info"), t += "";
                            var i, s = -1 == e.indexOf("custom") ? o.t : o.ct, a = "3d";
                            if (-1 != e.indexOf("2d") && (a = "2d"), -1 != t.indexOf("last")) i = s["t" + a].length - 1, "last"; else if (-1 != t.indexOf("all")) i = Math.floor(Math.random() * o.functions.countProp(s["t" + a])), "random from all"; else {
                                var r = t.split(","), n = r.length;
                                i = parseInt(r[Math.floor(Math.random() * n)]) - 1, "random from specified"
                            }
                            void 0 === s["t" + a][i] && (o.debugMode && o.debug.add("warn", "slideTransition.customTransition", [a.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"), i + 1]), s = o.t, e = a = "2d", i = 0), o.debugMode && o.debug.add("log", "slideTransition.info", [a.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"), i + 1, s["t" + a][i].name]), o.transitions.slide.normal.setTransition(a, s["t" + a][i])
                        }
                    }, setTransition: function (t, i) {
                        var s, a, n, l, d = e.extend(!0, {cols: 1, rows: 1}, i), u = typeof d.cols, p = typeof d.rows,
                            c = [], h = o.navigation.direction, m = 0, f = 0,
                            g = !!o.transitions.curSlide.data.$background && o.functions.getURL(o.transitions.curSlide.data.$background),
                            v = !!o.transitions.nextSlide.data.$background && o.functions.getURL(o.transitions.nextSlide.data.$background),
                            y = o.o.playByScroll && "up" === o.device.scroll.direction ? "to" : "from";
                        switch (u) {
                            case"number":
                                u = d.cols;
                                break;
                            case"string":
                                u = Math.floor(Math.random() * (parseInt(d.cols.split(",")[1]) - parseInt(d.cols.split(",")[0]) + 1)) + parseInt(d.cols.split(",")[0]);
                                break;
                            default:
                                u = Math.floor(Math.random() * (d.cols[1] - d.cols[0] + 1)) + d.cols[0]
                        }
                        switch (p) {
                            case"number":
                                p = d.rows;
                                break;
                            case"string":
                                p = Math.floor(Math.random() * (parseInt(d.rows.split(",")[1]) - parseInt(d.rows.split(",")[0]) + 1)) + parseInt(d.rows.split(",")[0]);
                                break;
                            default:
                                p = Math.floor(Math.random() * (d.rows[1] - d.rows[0] + 1)) + d.rows[0]
                        }
                        if (o.device.isMobile && o.o.optimizeForMobile ? (u >= 15 ? u = 7 : u >= 5 ? u = 4 : u >= 4 ? u = 3 : u > 2 && (u = 2), p >= 15 ? p = 7 : p >= 5 ? p = 4 : p >= 4 ? p = 3 : p > 2 && (p = 2), p > 2 && u > 2 && (p = 2, u > 4 && (u = 4))) : (u = u > 35 ? 35 : u, p = p > 35 ? 35 : p), o.debugMode && !o.o.slideTransition && (o.debug.add("log", "slideTransition.properties", [[u, p], u * p]), o.debug.groupEnd()), s = Math.floor(o.slider.width / u), a = Math.floor(o.slider.height / p), n = o.slider.width - s * u, l = o.slider.height - a * p, "prev" == h) {
                            d.tile && d.tile.sequence && (d.tile.sequence = {
                                random: "random",
                                forward: "reverse",
                                reverse: "forward",
                                "col-forward": "col-reverse",
                                "col-reverse": "col-forward"
                            }[d.tile.sequence]), e.each(["animation", "before", "after"], function (e, t) {
                                if (d[t] && d[t].transition) {
                                    var i = d[t].transition;
                                    i.rotateX && Math.abs(i.rotateX) > 44 && (i.rotateX *= -1), i.rotateY && Math.abs(i.rotateY) > 44 && (i.rotateY *= -1), i.rotate && (i.rotate *= -1)
                                }
                            })
                        }
                        for (var b = 0; b < u * p; b++) c.push(b);
                        switch (d.tile.sequence) {
                            case"reverse":
                                c.reverse();
                                break;
                            case"col-forward":
                                c = o.functions.sortArray(p, u, "forward");
                                break;
                            case"col-reverse":
                                c = o.functions.sortArray(p, u, "reverse");
                                break;
                            case"random":
                                c = o.functions.shuffleArray(c)
                        }
                        if ("transparent" === o.transitions.curSlide.data.backgroundColor && (o.transitions.curSlide.data.backgroundColor = o.o.globalBGColor), "transparent" === o.transitions.nextSlide.data.backgroundColor && (o.transitions.nextSlide.data.backgroundColor = o.o.globalBGColor), "2d" == t) {
                            var S = -1 != d.name.toLowerCase().indexOf("carousel"),
                                w = -1 != d.name.toLowerCase().indexOf("crossfad");
                            this.$curTiles = e("<div>").addClass("ls-curtiles").appendTo(o.transitions.slide.$wrapper), this.$nextTiles = e("<div>").addClass("ls-nexttiles").appendTo(o.transitions.slide.$wrapper)
                        }
                        for (var x = 0; x < u * p; x++) {
                            var T, C, k, I, O, L, $, B = (x + 1) % u == 0 ? n : 0, P = x > (p - 1) * u - 1 ? l : 0,
                                W = e("<div>").addClass("ls-slide-transition-tile").css({
                                    width: s + B,
                                    height: a + P
                                }).data("style", {width: s + B, height: a + P}).appendTo(o.transitions.slide.$wrapper);
                            c[x];
                            if (m = x % u == 0 ? m + 1 : m, f = x % u == 0 ? 1 : f + 1, "3d" == t) {
                                W.addClass("ls-3d-container");
                                var _, M, z, F, D, R, N, E = s + B, V = a + P, H = new r.TimelineMax;
                                N = Math.abs(Math.abs(f - u / 2 - .5) - u / 2 - .5) * Math.abs(Math.abs(m - p / 2 - .5) - p / 2 - .5), W.css({zIndex: N}), M = E / 2, z = V / 2, F = (_ = "horizontal" == d.animation.direction ? Math.abs(d.animation.transition.rotateY) > 90 && "large" != d.tile.depth ? Math.floor(E / 7) + B : E : Math.abs(d.animation.transition.rotateX) > 90 && "large" != d.tile.depth ? Math.floor(V / 7) + P : V) / 2, this.createCuboids("ls-3d-box", W, 0, 0, 0, 0, -F, 0, 0, M + "px " + z + "px 0px"), this.createCuboids("ls-3d-front", W.find(".ls-3d-box"), E, V, 0, 0, F, 0, 0), "vertical" == d.animation.direction && Math.abs(d.animation.transition.rotateX) > 90 ? this.createCuboids("ls-3d-back", W.find(".ls-3d-box"), E, V, 0, 0, -F, 180, 0) : this.createCuboids("ls-3d-back", W.find(".ls-3d-box"), E, V, 0, 0, -F, 0, 180), this.createCuboids("ls-3d-left", W.find(".ls-3d-box"), _, V, -F, 0, 0, 0, -90), this.createCuboids("ls-3d-right", W.find(".ls-3d-box"), _, V, E - F, 0, 0, 0, 90), this.createCuboids("ls-3d-top", W.find(".ls-3d-box"), E, _, 0, -F, 0, 90, 0), this.createCuboids("ls-3d-bottom", W.find(".ls-3d-box"), E, _, 0, V - F, 0, -90, 0), T = W.find(".ls-3d-front"), C = "horizontal" == d.animation.direction ? Math.abs(d.animation.transition.rotateY) > 90 ? W.find(".ls-3d-back") : d.animation.transition.rotateY > 0 ? W.find(".ls-3d-left") : W.find(".ls-3d-right") : Math.abs(d.animation.transition.rotateX) > 90 ? W.find(".ls-3d-back") : d.animation.transition.rotateX > 0 ? W.find(".ls-3d-bottom") : W.find(".ls-3d-top"), D = c[x] * d.tile.delay, R = o.transitions.slide.$wrapper.find(".ls-3d-container:eq( " + x + " ) .ls-3d-box"), d.before && d.before.transition ? (d.before.transition.delay = d.before.transition.delay ? (d.before.transition.delay + D) / 1e3 : D / 1e3, H.to(R[0], d.before.duration / 1e3, o.functions.convert.transition(d.before.transition, d.before.easing))) : d.animation.transition.delay = d.animation.transition.delay ? (d.animation.transition.delay + D) / 1e3 : D / 1e3, H.to(R[0], d.animation.duration / 1e3, o.functions.convert.transition(d.animation.transition, d.animation.easing)), d.after && (d.after.transition || (d.after.transition = {}), H.to(R[0], d.after.duration / 1e3, o.functions.convert.transition(d.after.transition, d.after.easing, "after"))), o.transitions._slideTransition.add(H, 0)
                            } else {
                                var A, X, Y, j, K, q, U, G, Q = "auto", Z = "auto", J = "auto", ee = "auto", te = 1,
                                    ie = 1, se = {};
                                switch (X = "random" == d.transition.direction ? (A = ["top", "bottom", "right", "left"])[Math.floor(Math.random() * A.length)] : d.transition.direction, -1 != d.name.toLowerCase().indexOf("mirror") && x % 2 == 0 && (h = "prev" == h ? "next" : "prev"), "prev" == h && (X = {
                                    top: "bottom",
                                    bottom: "top",
                                    left: "right",
                                    right: "left",
                                    topleft: "bottomright",
                                    topright: "bottomleft",
                                    bottomleft: "topright",
                                    bottomright: "topleft"
                                }[X]), X) {
                                    case"top":
                                        Q = J = -W.data("style").height, Z = ee = 0;
                                        break;
                                    case"bottom":
                                        Q = J = W.data("style").height, Z = ee = 0;
                                        break;
                                    case"left":
                                        Q = J = 0, Z = ee = -W.data("style").width;
                                        break;
                                    case"right":
                                        Q = J = 0, Z = ee = W.data("style").width;
                                        break;
                                    case"topleft":
                                        Q = W.data("style").height, J = 0, Z = W.data("style").width, ee = 0;
                                        break;
                                    case"topright":
                                        Q = W.data("style").height, J = 0, Z = -W.data("style").width, ee = 0;
                                        break;
                                    case"bottomleft":
                                        Q = -W.data("style").height, J = 0, Z = W.data("style").width, ee = 0;
                                        break;
                                    case"bottomright":
                                        Q = -W.data("style").height, J = 0, Z = -W.data("style").width, ee = 0
                                }
                                switch (this.scale2D = d.transition.scale ? d.transition.scale : 1, 1 == S && 1 != this.scale2D && (Q /= 2, J /= 2, Z /= 2, ee /= 2), d.transition.type) {
                                    case"fade":
                                        Q = J = Z = ee = 0, te = 0, ie = 1;
                                        break;
                                    case"mixed":
                                        te = 0, ie = 1, 1 == this.scale2D && (J = ee = 0)
                                }
                                if ((d.transition.rotate || d.transition.rotateX || d.transition.rotateY || 1 != this.scale2D) && "slide" != d.transition.type ? W.css({overflow: "visible"}) : W.css({overflow: "hidden"}), 1 == S ? this.$curTiles.css({overflow: "visible"}) : this.$curTiles.css({overflow: "hidden"}), !0 === w || "slide" == d.transition.type || !0 === S ? (Y = W.appendTo(this.$curTiles), j = W.clone().appendTo(this.$nextTiles), T = e("<div>").addClass("ls-curtile").appendTo(Y)) : j = W.appendTo(this.$nextTiles), C = e("<div>").addClass("ls-nexttile").appendTo(j), K = c[x] * d.tile.delay / 1e3, q = d.transition.rotate ? d.transition.rotate : 0, U = d.transition.rotateX ? d.transition.rotateX : 0, G = d.transition.rotateY ? d.transition.rotateY : 0, "prev" == h && (q = -q, U = -U, G = -G), o.transitions._slideTransition.fromTo(C[0], d.transition.duration / 1e3, {
                                    immediateRender: !1,
                                    autoCSS: !1,
                                    css: {
                                        x: -Z,
                                        y: -Q,
                                        display: "block",
                                        opacity: te,
                                        rotation: q,
                                        rotationX: U,
                                        rotationY: G,
                                        scale: this.scale2D
                                    }
                                }, {
                                    autoCSS: !1,
                                    css: {x: 0, y: 0, opacity: ie, rotation: 0, rotationX: 0, rotationY: 0, scale: 1},
                                    ease: o.functions.convert.easing(d.transition.easing)
                                }, K), 1 == w && (void 0 === o.transitions.nextSlide.data.$background || void 0 !== o.transitions.nextSlide.data.$background && (-1 != o.transitions.nextSlide.data.$background.attr("src").toLowerCase().indexOf("png") || o.transitions.nextSlide.data.$background.width() < o.slider.width || o.transitions.nextSlide.data.$background.height() < o.slider.height)) && (se.opacity = 0), ("slide" == d.transition.type || 1 == S) && -1 == d.name.toLowerCase().indexOf("mirror")) {
                                    var ae = 0;
                                    0 !== q && (ae = -q), se.x = ee, se.y = J, se.rotation = ae, se.scale = this.scale2D, se.opacity = te
                                }
                                void 0 !== T && o.transitions._slideTransition.to(T[0], d.transition.duration / 1e3, {
                                    autoCSS: !1,
                                    css: se,
                                    ease: o.functions.convert.easing(d.transition.easing)
                                }, K)
                            }
                            k = x % u * s, I = Math.floor(x / u) * a, void 0 !== o.transitions.curSlide.data.$background && (O = o.transitions.curSlide.data.$background.data(o.defaults.init.dataKey), "3d" === t || "2d" === t && (!0 === w || "slide" === d.transition.type || !0 === S) ? T.append(e("<img>").attr("src", g).css({
                                width: O.responsive.width,
                                height: O.responsive.height,
                                "-webkit-filter": O.responsive.filter,
                                filter: O.responsive.filter,
                                "-ms-transform": "translateX(" + (O.responsive.x - k) + "px) translateY(" + (O.responsive.y - I) + "px)" + O.responsive.kbRotation + O.responsive.kbScale,
                                "-webkit-transform": "translateX(" + (O.responsive.x - k) + "px) translateY(" + (O.responsive.y - I) + "px)" + O.responsive.kbRotation + O.responsive.kbScale,
                                transform: "translateX(" + (O.responsive.x - k) + "px) translateY(" + (O.responsive.y - I) + "px)" + O.responsive.kbRotation + O.responsive.kbScale
                            })) : 0 === this.$curTiles.children().length && this.$curTiles.css("background-color", o.transitions.curSlide.data.backgroundColor).append(e("<img>").attr("src", g).css({
                                width: O.responsive.width,
                                height: O.responsive.height,
                                "-webkit-filter": O.responsive.filter,
                                filter: O.responsive.filter,
                                "-ms-transform": "translateX(" + O.responsive.x + "px) translateY(" + O.responsive.y + "px)" + O.responsive.kbRotation + O.responsive.kbScale,
                                "-webkit-transform": "translateX(" + O.responsive.x + "px) translateY(" + O.responsive.y + "px)" + O.responsive.kbRotation + O.responsive.kbScale,
                                transform: "translateX(" + O.responsive.x + "px) translateY(" + O.responsive.y + "px)" + O.responsive.kbRotation + O.responsive.kbScale
                            }))), "transparent" === o.transitions.curSlide.data.backgroundColor || o.transitions.curSlide.data.$backgroundVideo.length || ("3d" === t || "2d" === t && (!0 === w || "slide" === d.transition.type || !0 === S) ? T.css("background-color", o.transitions.curSlide.data.backgroundColor) : 0 === this.$curTiles.children().length && this.$curTiles.css("background-color", o.transitions.curSlide.data.backgroundColor)), void 0 !== o.transitions.nextSlide.data.$background && ($ = (L = o.transitions.nextSlide.data.$background.data(o.defaults.init.dataKey)).kenBurns[y], C.append(e("<img>").attr("src", v).css({
                                width: L.responsive.width,
                                height: L.responsive.height,
                                "-webkit-filter": o.transitions.nextSlide.filter.from || "none",
                                filter: o.transitions.nextSlide.filter.from || "none",
                                "-ms-transform": "translateX(" + (L.responsive.x - k) + "px) translateY(" + (L.responsive.y - I) + "px) rotate(" + $.rotation + "deg) scale(" + $.scale + ")",
                                "-webkit-transform": "translateX(" + (L.responsive.x - k) + "px) translateY(" + (L.responsive.y - I) + "px) rotate(" + $.rotation + "deg) scale(" + $.scale + ")",
                                transform: "translateX(" + (L.responsive.x - k) + "px) translateY(" + (L.responsive.y - I) + "px) rotate(" + $.rotation + "deg) scale(" + $.scale + ")"
                            }))), "transparent" === o.transitions.nextSlide.data.backgroundColor || o.transitions.nextSlide.data.$backgroundVideo.length || C.css("background-color", o.transitions.nextSlide.data.backgroundColor)
                        }
                        o.transitions.slide.$wrapper.prependTo(o.o.preferBlendMode ? o.slider.$layersWrapper : o.slider.$innerWrapper), o.transitions.slide.start()
                    }, createCuboids: function (t, i, s, a, o, r, n, l, d, u) {
                        var p = "translate3d( " + o + "px, " + r + "px, " + n + "px)";
                        0 !== l && (p += "rotateX( " + l + "deg)"), 0 !== d && (p += "rotateY( " + d + "deg)");
                        var c = {width: s, height: a, transform: p, "-ms-transform": p, "-webkit-transform": p};
                        u && (c["transform-origin"] = u, c["-ms-transform-origin"] = u, c["-webkit-transform-origin"] = u), e("<div>").addClass(t).css(c).appendTo(i)
                    }
                }
            }, layers: {
                in: {
                    onStart: function (e) {
                        e.data(o.defaults.init.dataKey).hover.enabled && o.transitions.layers.hover.enable(e)
                    }, onComplete: function (e) {
                        o.media.playIfAllowed(e)
                    }
                }, out: {
                    forced: function () {
                        if (o.transitions._forceLayersOut) {
                            if (o.transitions._slideTimeline) {
                                var t, i, s = new r.TimelineMax({paused: !0, autoRemoveChildren: !0}), a = [],
                                    n = o.layers.get("current, in, static, active").add(o.layers.get("current, out, static, active")),
                                    l = o.layers.get("current, out, notstatic, active"),
                                    d = o.layers.get("current, out, active"), u = e().add(n).add(l);
                                u.each(function () {
                                    var r, n = e(this).data(o.defaults.init.dataKey);
                                    if (n.loop._timeline && (o.transitions._slideTimeline.remove(n.loop._timeline), n.loop._timeline.play()), n.is.static) {
                                        t = [n.elements.$wrapper[0]], n.elements.$clipWrapper && (t = t.concat(n.elements.$clipWrapper[0])), n.textIn.nodes && (t = t.concat(n.textIn.nodes));
                                        for (var l = 0; l < t.length; l++) a = a.concat(o.transitions._slideTimeline.getTweensOf(t[l], !0));
                                        for (var d = 0; d < a.length; d++) a[d].duration && 0 !== a[d].duration() && (i = a[d], r = i, s.add(r, 100 - r.duration() * r.progress()))
                                    }
                                }), d.each(function () {
                                    e(this).data(o.defaults.init.dataKey).should.reset = !0
                                }), s.play().seek(100), o.transitions._slideTimeline.eventCallback("onStart", null), o.transitions._slideTimeline.eventCallback("onComplete", null), o.transitions._slideTimeline.eventCallback("onReverseComplete", null), o.transitions._slideTimeline.eventCallback("onUpdate", null), o.transitions._slideTimeline.stop().clear()
                            }
                            o.transitions._forceLayersOut.play()
                        }
                        o.slider.$layersWrapper.find(".ls-link").css({display: "none"})
                    }, onStart: function (e) {
                    }, onComplete: function (e) {
                        var t = e.data(o.defaults.init.dataKey);
                        (o.slider.state.changingSlides || t.settings.slideOut !== o.slides.current.index) && o.transitions.layers.reset(e, t), t.hover.enabled && o.transitions.layers.hover.disable(e)
                    }
                }, reset: function (e, t) {
                    t.loop._timeline && (t.loop._timeline.stop().clear(), delete t.loop._timeline, r.TweenMax.set(t.elements.$loopWrapper[0], t.reset.loopWrapperOnSlideChange)), r.TweenMax.set(t.elements.$wrapper[0], t.reset.wrapperOnSlideChange), r.TweenMax.set(e[0], {
                        "-webkit-filter": "none",
                        filter: "none"
                    }), t.should.update && (t.textInNodesFrom.random = {}, t.textOutNodesTo.random = {}, o.layers.update.data(e)), t.should.reset = !1
                }, timeline: {
                    shouldRestart: !1, create: function (t) {
                        var s, n, l, d, u = t ? "current" : "next";
                        o.transitions.curNext = u, o.transitions.layers.timeline.shouldRestart = !1, o.transitions.layers.timeline.resetStates(), o.transitions._slideTimeline && (o.transitions._slideTimeline.pause().progress(0).kill().clear(!0), o.transitions._slideTimeline = null), o.transitions._slideTimeline = new r.TimelineMax({
                            paused: !0,
                            onStart: function () {
                                o.api.hasEvent("slideTimelineDidStart") && i.triggerHandler("slideTimelineDidStart", o.api.eventData())
                            },
                            onComplete: function () {
                                o.o.playByScroll && o.o.playByScrollSkipSlideBreaks && ("next" === o.slideshow.direction ? o.transitions.layers.timeline.scrollForward(!0) : o.transitions.layers.timeline.scrollBackwards(!0, !0))
                            },
                            onReverseComplete: function () {
                                o.api.hasEvent("slideTimelineDidReverseComplete") && i.triggerHandler("slideTimelineDidReverseComplete", o.api.eventData()), o.transitions.layers.timeline.shouldReplay && (o.transitions.layers.timeline.shouldRestart = !1, o.transitions._slideTimeline.play()), o.o.playByScroll && o.o.playByScrollSkipSlideBreaks && o.transitions.layers.timeline.scrollBackwards(!0, !1)
                            },
                            onUpdate: function (e) {
                                o.api.hasEvent("slideTimelineDidUpdate") && i.triggerHandler("slideTimelineDidUpdate", e)
                            },
                            onUpdateParams: ["{self}"]
                        }), this.totalDuration = 0, this.progress = 1, o.transitions._forceLayersOut = new r.TimelineMax({
                            paused: !0,
                            autoRemoveChildren: !0
                        }), s = o.layers.get(u + ", in, notactive"), n = o.layers.get(u + ", out, notstatic").add(o.layers.get(u + ", out, active, static")), l = o.layers.get(u + ", in, bgonly, notactive"), d = e().add(s).add(n).add(l), this.addLayers(s, "in", o.transitions._slideTimeline, o.transitions._forceLayersOut), this.addLayers(n, "out", o.transitions._slideTimeline, o.transitions._forceLayersOut), -1 !== o.slides[u].data.duration && o.slides[u].data.duration < this.totalDuration ? (this.progress = o.slides[u].data.duration / this.totalDuration, o.debugMode && o.debug.add("warn", "slideTimeline.duration", [o.slides[u].data.duration, this.totalDuration])) : o.transitions._slideTimeline.duration() > this.totalDuration && (this.progress = this.totalDuration / o.transitions._slideTimeline.duration()), -1 === o.slides[u].data.duration ? (o.slides[u].data.duration = this.totalDuration, o.slides[o.slides[u].index].data.duration = this.totalDuration) : this.totalDuration = o.slides[u].data.duration, this.addLayers(l, "in", o.transitions._slideTimeline, o.transitions._forceLayersOut), !0 === o.transitions.layers.timeline.shouldRestart && o.debugMode && o.debug.add("warn", "slideTimeline.restart", o.o.allowRestartOnResize ? "enabled" : "disabled");
                        for (var p = 0; p < d.length; p++) e(d[p]).data(o.defaults.init.dataKey).parallax.enabled && e(d[p]).data(o.defaults.init.dataKey).elements.$parallaxWrapper.attr("data-ls-parallax", "active");
                        if (o.transitions.layers.parallax.trigger(), o.api.hasEvent("slideTimelineDidCreate") && i.triggerHandler("slideTimelineDidCreate", {
                            slideTimeline: o.transitions._slideTimeline,
                            layersOnSlideTimeline: d,
                            slideTimelineDuration: this.totalDuration
                        }), o.transitions.timers.create(), o.transitions.timers.bar._transition && o.transitions._slideTimeline.add(o.transitions.timers.bar._transition.play(), 0), o.transitions.timers.circle._transition && o.transitions._slideTimeline.add(o.transitions.timers.circle._transition.play(), 0), o.transitions.timers.slidebar._transition && o.transitions._slideTimeline.add(o.transitions.timers.slidebar._transition.play(), 0), o.transitions._slideTimeline.call(function () {
                            if (!o.transitions._slideTimeline.reversed()) {
                                if (o.api.hasEvent("slideTimelineDidComplete") && !1 === i.triggerHandler("slideTimelineDidComplete", o.api.eventData())) return;
                                o.functions.setStates(o.transitions.layers.timeline, {finished: !0}), !o.slideshow.isPaused() && o.slideshow.state.running ? o.slideshow.changeTo(o.slides.next.index) : o.slideshow.state.pausedByLastCycle && o.transitions.timers.reverse()
                            }
                        }, [], this, o.slides[u].data.duration), o.slides.next.data.$link && o.slides.next.data.$link.css({display: "block"}), (!o.o.startInViewport || "inside" !== o.slider.positionToViewport && !o.o.playByScrollStart) && o.o.startInViewport || !(o.slider.isPopup && o.slider.state.popupIsVisible && o.slider.state.popupShouldStart) && o.slider.isPopup || (o.o.pauseLayers && o.slideshow.isPaused() && o.transitions._slideTimeline.timeScale(0), o.transitions.layers.timeline.play(), o.o.playByScroll && "up" === o.device.scroll.directionAtSlideTransitionStart && o.transitions._slideTimeline.progress(1)), i.trigger("mouseleave.globalhover" + a), i.off("mouseenter.globalhover" + a + " mouseleave.globalhover" + a + " mousemove.globalhover" + a), o.slides[u].data.globalhover) {
                            var c = o.layers.get(u + ",in,notactive").add(o.layers.get("static,active"));
                            i.on("mouseenter.globalhover" + a, function () {
                                c.each(function () {
                                    o.transitions.layers.hover.mouseEnter(e(this), e(this).data(o.defaults.init.dataKey))
                                })
                            }), i.on("mouseleave.globalhover" + a, function () {
                                c.each(function () {
                                    o.transitions.layers.hover.mouseLeave(e(this), e(this).data(o.defaults.init.dataKey))
                                })
                            }), i.on("mousemove.globalhover" + a, function () {
                                c.each(function () {
                                    o.transitions.layers.hover.mouseMove(e(this), e(this).data(o.defaults.init.dataKey))
                                })
                            })
                        }
                    }, prepare: function () {
                        o.slides.next.data.overflow && "hidden" !== o.slides.next.data.overflow ? (o.slider.$layersWrapper.addClass("ls-visible"), o.slider.$slideBGWrapper.addClass("ls-visible")) : (o.slider.$layersWrapper.removeClass("ls-visible"), o.slider.$slideBGWrapper.removeClass("ls-visible")), this.create()
                    }, getTiming: function (t, i, s, a) {
                        if ("number" == typeof i) return i;
                        i = i.toLowerCase();
                        var r, n, l, d, u, p = o.defaults.layer.timelineHierarchy, c = 0;
                        if (-1 !== i.indexOf("*") && (u = "*"), -1 !== i.indexOf("/") && (u = "/"), -1 !== i.indexOf("+") && (u = "+"), -1 !== i.indexOf("-") && (u = "-"), u) if (d = i.split(u), r = e.trim(d[0]), l = parseInt(e.trim(d[1])), p[r] && -1 !== p[s][1].indexOf(p[r][0])) if (n = "number" == typeof t.timeline[r] ? t.timeline[r] : t.timeline[r](t), a) c = l / 1e3; else switch (u) {
                            case"*":
                                c = n * l;
                                break;
                            case"/":
                                c = n / l;
                                break;
                            case"+":
                                c = n + l / 1e3;
                                break;
                            case"-":
                                c = n - l / 1e3
                        } else o.debugMode && (p[r] || o.debug.add("warn", "layerTransition.timing1", r), -1 === p[s][1].indexOf(p[r][0]) && o.debug.add("warn", "layerTransition.timing3", [r, p[r], s, p[s]])), ("+" === u || a) && (c = l / 1e3); else p[r = e.trim(i)] && -1 !== p[s][1].indexOf(p[r][0]) ? c = a ? 0 : "number" == typeof t.timeline[r] ? t.timeline[r] : t.timeline[r](t) : o.debugMode && (p[r] ? -1 === p[s][1].indexOf(p[r][0]) && o.debug.add("warn", "layerTransition.timing3", [r, p[r], s, p[s]]) : o.debug.add("warn", "layerTransition.timing1", r));
                        return (c != c || c < 0) && (o.debugMode && o.debug.add("warn", "layerTransition.timing2", [s, r, c]), c = 0), c
                    }, addLayers: function (t, i, s, a) {
                        for (var n = 0, l = t.length; n < l; n++) {
                            var d, u = e(t[n]), p = u.data(o.defaults.init.dataKey), c = p.elements.$wrapper,
                                h = p.elements.$clipWrapper, m = p.elements.$loopWrapper;
                            if (p.should.reset && o.transitions.layers.reset(u, p), u.hasClass("ls-bg")) p.kenBurns.zoom && s.fromTo(u.closest(".ls-bg-wrap"), o.transitions.nextSlide.data.duration + o.transitions.nextSlide.data.calculatedTimeShift, {
                                autoCSS: !1,
                                css: p.kenBurns.from
                            }, {
                                autoCSS: !1,
                                css: p.kenBurns.to,
                                ease: r.Quad.easeInOut
                            }, -o.transitions.nextSlide.data.calculatedTimeShift), e.isEmptyObject(p.filter.values.bgFrom) && e.isEmptyObject(p.filter.values.bgTo) || (p.filter.transitions.bg || (p.filter.transitions.bg = o.transitions.layers.filters.createTransition(p, "bg", p.filter.values.bgFrom, p.filter.values.bgTo)), s.to([{p: 0}, u[0]], o.transitions.nextSlide.data.duration, {
                                p: 1,
                                autoCSS: !1,
                                ease: r.Sine.easeInOut,
                                onUpdate: o.transitions.layers.filters.animate,
                                onUpdateParams: ["{self}", p.filter.transitions.bg]
                            }, 0)); else switch (i) {
                                case"in":
                                    if (p.in.enabled && (p.settings.timelineIsCalculated || ("number" != typeof p.in.startAt && (p.in.startAt = 0), p.timeline.transitioninstart = p.in.startAt, p.timeline.transitioninend = p.timeline.transitioninstart + p.in.duration), o.resize.transformProperties(u, p.inLayerFromCSS, p.inLayerShouldBeConverted), o.resize.styleProperties(p.inLayerStyleFromCSS, p.inLayerStyleShouldBeConvertedFrom), o.resize.styleProperties(p.inLayerStyleToCSS, p.inLayerStyleShouldBeConvertedTo), p.inLayerFromCSS.transformPerspective = p.transformPerspective.layer * o.resize.ratio, p.clip.enabled && (p.original.clip || (p.original.clip = p.clip.min, p.original.clipShouldBeConverted = !0), p.inClipShouldBeConverted.clip ? (p.inClipFromCSS.clip = o.resize.clip(u, p.inClipShouldBeConverted.clip, !0), p.inClipToCSS.clip = o.resize.clip(u, p.original.clip, p.original.clipShouldBeConverted), s.fromTo(h[0], p.in.duration, p.inClipFrom, p.inClipTo, p.timeline.transitioninstart)) : r.TweenMax.set(h[0], {clip: o.resize.clip(u, p.original.clip, p.original.clipShouldBeConverted)}), o.transitions.layers.timeline.shouldRestart = !0), e.isEmptyObject(p.filter.values.in) ? e.isEmptyObject(p.filter.values.out) || u.css("filter", p.original.filter) : (p.filter.transitions.in || (p.filter.transitions.in = o.transitions.layers.filters.createTransition(p, "in", p.filter.values.in, p.filter.values.style)), s.to([{p: 0}, u[0]], p.in.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: p.inLayerTo.ease,
                                        onUpdate: o.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", p.filter.transitions.in]
                                    }, p.timeline.transitioninstart)), s.fromTo(c[0], p.in.duration, p.inLayerFrom, p.inLayerTo, p.timeline.transitioninstart), s.fromTo(u[0], p.in.duration, p.inLayerStyleFrom, p.inLayerStyleTo, p.timeline.transitioninstart)), p.is.textLayer && ((p.textIn.type || p.textOut.type) && o.transitions.layers.splitType.resetNodes(u, p), p.textIn.enabled && (p.in.enabled || s.to(c[0], 0, e.extend(!0, {}, p.inLayerTo, p.init.wrapper), p.timeline.textinstart), p.textIn.nodes = o.transitions.layers.splitType.setNodesSequence(p.textIn.type.split("_"), p.textIn.ns), o.resize.transformProperties(u, p.textInNodesFrom, p.textInShouldBeConverted), p.textInNodesFrom.transformPerspective = p.transformPerspective.text * o.resize.ratio, e.isEmptyObject(p.textInShouldBeConverted.random) || o.transitions.layers.splitType.setRandomProperties(p, p.textInShouldBeConverted.random, p.textInNodesFrom), e.isEmptyObject(p.textInNodesFrom.random) || o.transitions.layers.splitType.setRandomProperties(p, p.textInNodesFrom.random, p.textInNodesFrom), delete p.textInNodesFrom.random, p.settings.timelineIsCalculated || (p.timeline.textinstart = this.getTiming(p, p.textIn.startAt, "textinstart"), p.timeline.textinend = p.timeline.textinstart + (p.textIn.nodes.length - 1) * p.textIn.shiftNodes + p.textIn.duration), s.staggerFromTo(p.textIn.nodes, p.textIn.duration, p.textInNodesFrom, p.textInNodesTo, p.textIn.shiftNodes, p.timeline.textinstart, function (e) {
                                        o.transitions.layers.in.onComplete(e)
                                    }, [u]))), p.is.keyframe && o.o.playByScroll && s.addPause(p.timeline.allinend(), function () {
                                        setTimeout(function () {
                                            delete o.timeouts.scroll, o.transitions.layers.timeline.timeScaleModifier = 0, o.device.scroll.timeout = 250
                                        }, 500)
                                    }), p.loop.enabled) {
                                        var f = new r.TimelineMax({
                                            repeat: p.loop.repeat,
                                            repeatDelay: p.loop.repeatDelay,
                                            yoyo: p.loop.yoyo,
                                            paused: !0
                                        });
                                        p.settings.timelineIsCalculated && !p.is.static || (p.timeline.loopstart = this.getTiming(p, p.loop.startAt, "loopstart"), p.timeline.loopend = -1 !== p.loop.count && p.timeline.loopstart + (p.loop.repeat + 1) * p.loop.duration + p.loop.repeat * p.loop.repeatDelay), p.loop._timeline = f, o.resize.transformProperties(u, p.loopToCSS, {
                                            x: p.loopLayerShouldBeConverted.x,
                                            y: p.loopLayerShouldBeConverted.y
                                        }), (p.loopToCSS.x && 0 !== p.loopToCSS.x || p.loopToCSS.y && 0 !== p.loopToCSS.y) && (o.transitions.layers.timeline.shouldRestart = !0), p.loopFromCSS.transformOrigin = o.functions.convert.transformOrigin(p.loopLayerShouldBeConverted.transformOrigin, u), p.loopFromCSS.transformPerspective = p.transformPerspective.loop * o.resize.ratio, e.isEmptyObject(p.filter.values.loop) || (p.filter.transitions.loop || (p.filter.transitions.loop = o.transitions.layers.filters.createTransition(p, "loop", e.isEmptyObject(p.filter.values.afterIn) ? p.filter.values.style : p.filter.values.afterIn, p.filter.values.loop)), f.to([{p: 0}, u[0]], p.loop.duration, {
                                            p: 1,
                                            autoCSS: !1,
                                            ease: p.loopTo.ease,
                                            onUpdate: o.transitions.layers.filters.animate,
                                            onUpdateParams: ["{self}", p.filter.transitions.loop]
                                        }, 0)), f.fromTo(m[0], p.loop.duration, p.loopFrom, p.loopTo, 0), p.loopClipShouldBeConverted.clip && (p.loopClipToCSS.clip = o.resize.clip(u, p.loopClipShouldBeConverted.clip, !0), f.to(h[0], p.loop.duration, p.loopClipTo, 0), o.transitions.layers.timeline.shouldRestart = !0), -1 !== p.loop.repeat && ("looplayers" === o.o.pauseOnHover || o.gui.timers.slidebar.$element || o.o.playByScroll) ? (s.add(f, p.timeline.loopstart), f.play()) : s.addCallback(function (e) {
                                            e.play()
                                        }, p.timeline.loopstart, [f])
                                    }
                                    p.is.static && (p.timeline.staticfrom = p.timeline.transitioninend, p.timeline.staticto = "100%", p.settings.timelineIsCalculated || (d = Math.max(p.timeline.allinandloopend(), 0), this.totalDuration = Math.max(this.totalDuration, d)));
                                    break;
                                case"out":
                                    p.is.textLayer && p.textOut.enabled && (p.textOut.nodes = o.transitions.layers.splitType.setNodesSequence(p.textOut.type.split("_"), p.textOut.ns), o.resize.transformProperties(u, p.textOutNodesTo, p.textOutShouldBeConverted, p.textOutNodesFrom), p.textOutNodesFrom.transformPerspective = p.transformPerspective.text * o.resize.ratio, e.isEmptyObject(p.textOutShouldBeConverted.random) || o.transitions.layers.splitType.setRandomProperties(p, p.textOutShouldBeConverted.random, p.textOutNodesTo), e.isEmptyObject(p.textOutNodesTo.random) || o.transitions.layers.splitType.setRandomProperties(p, p.textOutNodesTo.random, p.textOutNodesTo), delete p.textOutNodesTo.random, p.settings.timelineIsCalculated || (p.timeline.textoutstart = this.getTiming(p, p.textOut.startAt, "textoutstart"), p.timeline.textoutend = p.timeline.textoutstart + (p.textOut.nodes.length - 1) * p.textOut.shiftNodes + p.textOut.duration), p.clip.enabled && (void 0 === p.outClipShouldBeConverted.clip && s.to(h[0], 0, {
                                        immediateRender: !1,
                                        css: {clip: o.resize.clip(u, p.clip.max)}
                                    }, p.timeline.textoutstart), o.transitions.layers.timeline.shouldRestart = !0), s.staggerFromTo(p.textOut.nodes, p.textOut.duration, p.textOutNodesFrom, p.textOutNodesTo, p.textOut.shiftNodes, p.timeline.textoutstart)), o.resize.transformProperties(u, p.outLayerToCSS, p.outLayerShouldBeConverted, p.outLayerFromCSS), o.resize.styleProperties(p.outLayerStyleFromCSS, p.outLayerStyleShouldBeConvertedFrom), o.resize.styleProperties(p.outLayerStyleToCSS, p.outLayerStyleShouldBeConvertedTo), p.outLayerFromCSS.transformPerspective = p.transformPerspective.layer * o.resize.ratio, "slidechangeonly" !== p.out.startAt ? (p.settings.timelineIsCalculated && !p.is.static || (p.is.static ? (p.timeline.staticfrom = 0, p.timeline.transitionoutstart = this.getTiming(p, p.out.startAt, "transitionoutstart", !0), p.timeline.staticto = p.timeline.transitionoutstart) : p.timeline.transitionoutstart = Math.max(this.getTiming(p, p.out.startAt, "transitionoutstart"), p.timeline.transitioninend), p.timeline.transitionoutend = p.timeline.transitionoutstart + p.out.duration), p.clip.enabled && (void 0 === p.outClipShouldBeConverted.clip ? s.to(h[0], 0, {
                                        immediateRender: !1,
                                        css: {clip: o.resize.clip(u, p.clip.max)}
                                    }, p.timeline.transitionoutstart) : (p.outClipToCSS.clip = o.resize.clip(u, p.outClipShouldBeConverted.clip, !0), s.to(h[0], p.out.duration, p.outClipTo, p.timeline.transitionoutstart)), o.transitions.layers.timeline.shouldRestart = !0), e.isEmptyObject(p.filter.values.out) || (p.filter.transitions.out || (p.filter.transitions.out = o.transitions.layers.filters.createTransition(p, "out", e.isEmptyObject(p.filter.values.afterLoop) ? e.isEmptyObject(p.filter.values.afterIn) ? p.filter.values.style : p.filter.values.afterIn : p.filter.values.afterLoop, p.filter.values.out)), s.to([{p: 0}, u[0]], p.out.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: p.outLayerTo.ease,
                                        onUpdate: o.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", p.filter.transitions.out]
                                    }, p.timeline.transitionoutstart)), s.fromTo(c[0], p.out.duration, p.outLayerFrom, p.outLayerTo, p.timeline.transitionoutstart), s.fromTo(u[0], p.out.duration, p.outLayerStyleFrom, p.outLayerStyleTo, p.timeline.transitionoutstart), s.fromTo(c[0], 0, p.init.wrapper, p.reset.wrapperOnTimelineEnd, p.timeline.transitionoutend)) : (p.timeline.staticfrom = 0, p.timeline.staticto = "100%"), (!p.is.static || p.is.static && p.settings.slideOut === o.slides.next.index) && (a.fromTo(c[0], o.o.forceLayersOutDuration, p.outLayerFrom, p.outLayerTo, 0), a.fromTo(u[0], o.o.forceLayersOutDuration, p.outLayerStyleFrom, p.outLayerStyleTo, 0), p.clip.enabled && void 0 !== p.outClipShouldBeConverted.clip && (p.outClipToCSS.clip = o.resize.clip(u, p.outClipShouldBeConverted.clip, !0), a.to(h[0], o.o.forceLayersOutDuration, p.outClipTo, 0))), d = Math.max(p.timeline.alloutandloopend(), 0), this.totalDuration = Math.max(this.totalDuration, d), p.settings.timelineIsCalculated = !0
                            }
                        }
                    }, play: function () {
                        o.transitions._slideTimeline && (o.transitions._slideTimeline.play(), o.functions.setStates(this, {
                            started: !0,
                            running: !0,
                            stopped: !1,
                            paused: !1
                        }))
                    }, pause: function (t) {
                        t = e.isNumeric(t) ? t : .75;
                        o.transitions._slideTimeline && (r.TweenMax.to(o.transitions._slideTimeline, t, {timeScale: 0}), o.functions.setStates(this, {
                            paused: !0,
                            stopped: !1
                        }))
                    }, resume: function () {
                        o.transitions._slideTimeline && (r.TweenMax.to(o.transitions._slideTimeline, .75, {timeScale: 1}), o.functions.setStates(this, {
                            paused: !1,
                            stopped: !1
                        }))
                    }, reverse: function () {
                        o.transitions._slideTimeline && o.transitions._slideTimeline.reverse()
                    }, scrollForward: function (e) {
                        if (e || (this.play(), this.modifyTimeScale()), o.transitions._slideTimeline && !o.slider.isBusy() && (0 === o.transitions._slideTimeline.totalDuration() || 1 === o.transitions._slideTimeline.progress()) && "down" === o.device.scroll.direction) {
                            o.slideshow.direction = "next";
                            var t = o.slideshow.sequence.normalized;
                            t.indexOf(o.slides.current.index) === t.length - 1 ? (o.slider.positionToViewport = "under", o.device.scroll.enable(), o.slideshow.direction = "prev") : o.navigation.next()
                        }
                    }, scrollBackwards: function (e, t) {
                        (e && !t || (this.reverse(), this.modifyTimeScale()), o.transitions._slideTimeline) && (o.slider.isBusy() || 0 !== o.transitions._slideTimeline.totalDuration() && 0 !== o.transitions._slideTimeline.progress() || "up" !== o.device.scroll.direction || (o.slideshow.direction = "prev", 0 === o.slideshow.sequence.normalized.indexOf(o.slides.current.index) ? (o.slider.positionToViewport = "over", o.device.scroll.enable(), o.slideshow.direction = "next") : o.navigation.prev()))
                    }, modifyTimeScale: function () {
                        if (o.transitions._slideTimeline) {
                            r.TweenMax.to(o.transitions._slideTimeline, .25, {timeScale: 1 + this.timeScaleModifier})
                        }
                    }, resetStates: function () {
                        this.state = {started: !1, running: !1, paused: !1, stopped: !1, finished: !1}
                    }
                }, hover: {
                    enable: function (e) {
                        e.attr("data-ls-canhover", "1")
                    }, disable: function (e) {
                        e.attr("data-ls-canhover", "0")
                    }, set: function (e, t) {
                        t.elements.$wrapper.on("mouseenter." + a, function () {
                            o.transitions.layers.hover.mouseEnter(e, t)
                        }), t.elements.$wrapper.on("mouseleave." + a, function () {
                            o.transitions.layers.hover.mouseLeave(e, t)
                        }), t.elements.$wrapper.on("mousemove." + a, function () {
                            o.transitions.layers.hover.mouseMove(e, t)
                        })
                    }, createTimeline: function (t, i) {
                        if (i.hover._timeline = new r.TimelineMax({
                            paused: !0, onReverseComplete: function (e, t) {
                                t.hover._timeline._reversed && (t.hover._timeline.stop().clear(), delete t.hover._timeline)
                            }, onReverseCompleteParams: [t, i]
                        }), o.resize.transformProperties(t, i.hoverToCSS, i.hoverShouldBeConverted, i.hoverFromCSS), o.resize.styleProperties(i.hoverToCSS, i.hoverShouldBeConverted), i.hoverFromCSS.transformPerspective = i.transformPerspective.hover * o.resize.ratio, i.hover._tween = r.TweenMax.fromTo(t[0], i.hover.durationIn, i.hoverFrom, i.hoverTo), i.hover._timeline.add(i.hover._tween, 0), t.next().is(".ls-layer-link")) {
                            var s = t.next(), a = e.extend(!0, {}, i.hoverFrom, {
                                css: {
                                    opacity: 1,
                                    color: "transparent",
                                    background: "transparent",
                                    z: 0
                                }
                            }), n = e.extend(!0, {}, i.hoverTo, {
                                css: {
                                    opacity: 1,
                                    color: "transparent",
                                    background: "transparent",
                                    z: 0
                                }
                            });
                            i.hover._linkTween = r.TweenMax.fromTo(s[0], i.hover.durationIn, a, n), i.hover._timeline.add(i.hover._linkTween, 0)
                        } else i.hover._linkTween = null;
                        if (i.hover.alwaysOnTop) {
                            var l = {zIndex: 9999};
                            o.browser.isSafari && (l.transform = "translateZ(999999px)"), i.hover._timeline.to(i.elements.$outerWrapper[0], i.hover.durationIn, {
                                autoCSS: !1,
                                css: l
                            }, 0)
                        }
                        i.hover.reverseTimeScale = i.hover.durationIn / i.hover.durationOut == 1 ? 1 : i.hover.durationIn / i.hover.durationOut, this.hoverIn(t, i)
                    }, mouseEnter: function (e, t) {
                        "1" === e.attr("data-ls-canhover") && (e.attr("data-ls-hovered", 1), t.elements.$wrapper.off("mousemove." + a), t.hover._timeline ? (t.hover._timeline.play().stop().progress(0), this.hoverIn(e, t)) : this.createTimeline(e, t))
                    }, mouseLeave: function (e, t) {
                        t.hover._timeline && (t.hover._timeline.stop().progress(1), this.hoverOut(e, t)), e.removeAttr("data-ls-hovered")
                    }, mouseMove: function (e, t) {
                        e.attr("data-ls-hovered") || this.mouseEnter(e, t)
                    }, hoverIn: function (e, t) {
                        t.hover._tween.updateTo({ease: t.hover.easeIn}), t.hover._linkTween && t.hover._linkTween.updateTo({ease: t.hover.easeIn}), t.hover._timeline.play().timeScale(1)
                    }, hoverOut: function (e, t) {
                        t.hover._tween.updateTo({ease: t.hover.easeOut}), t.hover._linkTween && t.hover._linkTween.updateTo({ease: t.hover.easeOut}), t.hover._timeline.reverse().timeScale(t.hover.reverseTimeScale)
                    }
                }, parallax: {
                    defaultProperties: {
                        type: "2d",
                        event: "cursor",
                        x: !0,
                        y: !0,
                        rotation: 10,
                        distance: 10,
                        durationMove: 1.5,
                        durationLeave: 1.2,
                        transformOrigin: "50% 50% 0",
                        transformPerspective: 500
                    },
                    defaults: {scrollModifier: 5, centerLayers: "center", centerDegree: 40, sensitive: 10},
                    state: {enabled: !1, ready: !1},
                    wrappers: {cursor: {$2d: e(), $3d: e()}, scroll: {$2d: e(), $3d: e()}},
                    init: function () {
                        var t = this;
                        i.on("mouseenter." + a, function () {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.calculateTransformProperties()
                        }), i.on("mousemove." + a, function (e) {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.mouseMove(e)
                        }), i.on("mouseleave." + a, function () {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.reset()
                        }), o.device.isMobile && o.device.supportOrientation && (e(window).on("deviceorientation." + a, function () {
                            t.state.ready && t.deviceTurn(event)
                        }), e(window).on("orientationchange." + a, function () {
                            t.calculateTransformProperties()
                        })), e(window).on("scroll.parallax" + a + " touchmove.parallax" + a, function () {
                            (t.wrappers.scroll.$2d.length || t.wrappers.scroll.$3d.length) && t.scroll()
                        }), t.defaults.scrollModifier *= o.o.parallaxScrollReverse ? -1 : 1
                    },
                    addLayer: function (t, i, s, a) {
                        switch (this.state.enabled || (o.functions.setStates(this, {enabled: !0}), this.init()), e.extend(!0, i, this.defaultProperties, o.slides[a].parallax, s.parallax), s.transformPerspective.parallax ? i.transformPerspective = s.transformPerspective.parallax : s.transformPerspective.parallax = i.transformPerspective, i.event.match(/(cursor|scroll)/) || (i.event = "cursor"), i.type.match(/(2d,3d)/) && (i.type = "2d"), i.axis) {
                            case"none":
                                i.x = !1, i.y = !1;
                                break;
                            case"x":
                                i.y = !1;
                                break;
                            case"y":
                                i.x = !1
                        }
                        this.wrappers[i.event]["$" + i.type] = this.wrappers[i.event]["$" + i.type].add(t)
                    },
                    addShadow: function () {
                        var t = o.gui.shadow.$element,
                            i = o.slides.current && o.slides.current.parallax ? o.slides.current.index : o.slides.next.index;
                        if (o.slides[i].data.$background && o.slides[i].data.$background.data(o.defaults.init.dataKey).parallax.enabled && o.slides[i].data.overflow && "hidden" !== o.slides[i].data.overflow) {
                            var s, a = "50% -" + .25 * o.slider.height + "px 0",
                                n = o.slides[i].data.$background.data(o.defaults.init.dataKey).parallax;
                            s = void 0 !== n.rotation ? 2 * n.rotation : void 0 !== o.slides[i].parallax.rotation ? 2 * o.slides[i].parallax.rotation : 2 * this.defaultProperties.rotation, t.data(o.defaults.init.dataKey, {
                                parallax: e.extend(!0, {}, this.defaultProperties, o.slides[i].parallax, {
                                    level: n.level,
                                    transformOrigin: a,
                                    rotation: s
                                })
                            }), t.attr("data-ls-parallax", "active"), r.TweenMax.set(t[0], {
                                transformOrigin: a,
                                transformPerspective: t.data(o.defaults.init.dataKey).parallax.transformPerspective * o.resize.ratio
                            }), "3d" === o.slides[i].parallax.type || "3d" === n.type ? this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.add(t) : this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.add(t)
                        }
                        this.shadowIsChecked = !0
                    },
                    removeShadow: function () {
                        var e = o.gui.shadow.$element;
                        this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.not(e), this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.not(e), e.attr("data-ls-parallax", "disabled"), this.shadowIsChecked = !1
                    },
                    calculateTransformProperties: function () {
                        e().add(this.wrappers.cursor.$2d).add(this.wrappers.cursor.$3d).add(this.wrappers.scroll.$2d).add(this.wrappers.scroll.$3d).each(function () {
                            var t = e(this).data(o.defaults.init.dataKey).parallax;
                            r.TweenMax.set(e(this)[0], {
                                transformOrigin: o.functions.convert.transformOrigin(t.transformOrigin, e(this), o.slider.$layersWrapper),
                                transformPerspective: t.transformPerspective * o.resize.ratio
                            })
                        }), this.transformPropertiesCalculated = !0
                    },
                    deviceTurn: function (e) {
                        if (this.transformPropertiesCalculated) {
                            var t, i, s = window.orientation;
                            0 === s ? (t = 5 * -parseInt(e.gamma) * this.defaults.sensitive * o.resize.ratio, i = 5 * (this.defaults.centerDegree - parseInt(e.beta)) * this.defaults.sensitive * o.resize.ratio) : 90 === s ? (t = 5 * -parseInt(e.beta) * this.defaults.sensitive * o.resize.ratio, i = 5 * (parseInt(e.gamma) + this.defaults.centerDegree) * this.defaults.sensitive * o.resize.ratio) : (t = 5 * parseInt(e.beta) * this.defaults.sensitive * o.resize.ratio, i = 5 * (this.defaults.centerDegree - parseInt(e.gamma)) * this.defaults.sensitive * o.resize.ratio), this.animate2D(t, i, "cursor"), this.animate3D(t, i, "cursor")
                        } else this.calculateTransformProperties();
                        o.slider.state.animatingSlides || this.shadowIsChecked || !o.gui.shadow.$element || this.addShadow()
                    },
                    trigger: function () {
                        e(window).trigger("scroll.parallax" + a), e(window).trigger("touchmove.parallax" + a)
                    },
                    scroll: function () {
                        var e = (("top" === this.defaults.centerLayers ? o.device.winScrollTop : o.device.winScrollTop + (o.device.viewportHeight - o.slider.height) / 2) - o.slider.offsetTop) * o.resize.ratio * this.defaults.scrollModifier;
                        o.slider.state.inFullscreen && (e = 0), this.transformPropertiesCalculated || this.calculateTransformProperties(), this.animate2D(0, e, "scroll"), this.animate3D(0, e, "scroll")
                    },
                    mouseMove: function (e) {
                        if (this.transformPropertiesCalculated) {
                            o.slider.state.animatingSlides || this.shadowIsChecked || !o.gui.shadow.$element || this.addShadow();
                            var t = o.slider.offsetLeft + o.slider.width / 2,
                                i = o.slider.offsetTop + o.slider.height / 2, s = e.pageX - t, a = e.pageY - i;
                            this.animate2D(s, a, "cursor"), this.animate3D(s, a, "cursor")
                        } else this.calculateTransformProperties()
                    },
                    animate2D: function (t, i, s) {
                        this.wrappers[s].$2d.each(function () {
                            var s = e(this);
                            if ("active" === s.attr("data-ls-parallax")) {
                                var a = s.data(o.defaults.init.dataKey).parallax,
                                    n = a.x ? -t * (a.distance / 2e3) * parseInt(a.level) : 0,
                                    l = a.y ? -i * (a.distance / 2e3) * parseInt(a.level) : 0;
                                r.TweenMax.to(s[0], a.durationMove, {x: n, y: l})
                            }
                        })
                    },
                    animate3D: function (t, i, s) {
                        this.wrappers[s].$3d.each(function () {
                            var s = e(this);
                            if ("active" === s.attr("data-ls-parallax")) {
                                var a, n, l, d, u = s.data(o.defaults.init.dataKey).parallax;
                                u.x ? (n = -t / (4e3 / u.rotation), l = -t * (u.distance / 2e3) * parseInt(u.level)) : (n = 0, l = 0), u.y ? (a = i / (4e3 / u.rotation), d = -i * (u.distance / 2e3) * parseInt(u.level)) : (a = 0, d = 0), r.TweenMax.to(s[0], u.durationMove, {
                                    rotationX: a,
                                    rotationY: n,
                                    x: l,
                                    y: d
                                })
                            }
                        })
                    },
                    reset: function () {
                        e().add(this.wrappers.cursor.$2d).add(this.wrappers.cursor.$3d).each(function () {
                            var t = e(this);
                            "active" === t.attr("data-ls-parallax") ? r.TweenMax.to(t[0], e(this).data(o.defaults.init.dataKey).parallax.durationLeave, {
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                rotationY: 0
                            }) : r.TweenMax.set(t[0], {x: 0, y: 0, rotationX: 0, rotationY: 0})
                        }), o.gui.shadow.$element && this.removeShadow(), this.transformPropertiesCalculated = !1
                    }
                }, filters: {
                    createTransition: function (e, t, i, s) {
                        var a, r = new o.defaults.layer.properties.filter, n = {};
                        for (a in r) switch (t) {
                            case"in":
                                n[a] = [r[a], r[a]], n[a][0] = i.hasOwnProperty(a) ? i[a] : s.hasOwnProperty(a) ? s[a] : r[a], n[a][1] = s.hasOwnProperty(a) ? s[a] : r[a], e.filter.values.afterIn[a] = n[a][1];
                                break;
                            case"hover":
                            case"loop":
                            case"out":
                                n[a] = [], n[a][0] = i.hasOwnProperty(a) ? i[a] : r[a], n[a][1] = s.hasOwnProperty(a) ? s[a] : i.hasOwnProperty(a) && i[a] !== r[a] ? i[a] : r[a], "loop" === t && !0 !== e.loop.yoyo && -1 !== e.loop.count && (e.filter.values.afterLoop[a] = n[a][1]);
                                break;
                            case"bg":
                                n[a] = [r[a], r[a]], i.hasOwnProperty(a) && (n[a][0] = i[a]), s.hasOwnProperty(a) && (n[a][1] = s[a])
                        }
                        return n
                    }, convert: function (e) {
                        for (var t, i, s, a = {}, o = /(blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia)/i, r = 0, n = (e = e.split(" ")).length; r < n; r++) (t = (s = e[r].split("("))[0]).match(o) && (i = parseInt(s[1]), a[t] = i);
                        return a
                    }, animate: function (e, t) {
                        var i = 100 * e.target[0].p;
                        if ("object" == typeof t) {
                            var s = "";
                            for (var a in t) if ("object" == typeof t[a] && 2 === t[a].length) switch (a) {
                                case"blur":
                                    s += " blur( " + (t[a][0] < t[a][1] ? t[a][0] + Math.abs(t[a][0] - t[a][1]) / 100 * i : t[a][0] - Math.abs(t[a][0] - t[a][1]) / 100 * i) + "px )";
                                    break;
                                case"hue-rotate":
                                    s += " hue-rotate( " + (t[a][0] < t[a][1] ? t[a][0] + Math.abs(t[a][0] - t[a][1]) / 100 * i : t[a][0] - Math.abs(t[a][0] - t[a][1]) / 100 * i) + "deg )";
                                    break;
                                default:
                                    s += " " + a + "( " + (t[a][0] < t[a][1] ? t[a][0] + Math.abs(t[a][0] - t[a][1]) / 100 * i : t[a][0] - Math.abs(t[a][0] - t[a][1]) / 100 * i) + "% )"
                            }
                            r.TweenMax.set(e.target, {"-webkit-filter": s, filter: s})
                        }
                    }
                }, splitType: {
                    setNodesSequence: function (e, t) {
                        var i = t;
                        if ("desc" == e[1]) i = t.slice(0).reverse(); else if ("rand" == e[1]) i = t.slice(0).sort(function () {
                            return .5 - Math.random()
                        }); else if ("center" == e[1]) {
                            var s, a = Math.floor(t.length / 2);
                            for (i = [t[a]], s = 1; s <= a; s++) i.push(t[a - s], t[a + s]);
                            i.length = t.length
                        } else if ("edge" == e[1]) {
                            var o, r = Math.floor(t.length / 2);
                            for (i = [t[0]], o = 1; o <= r; o++) i.push(t[t.length - o], t[o]);
                            i.length = t.length
                        }
                        return i
                    }, resetNodes: function (t, i) {
                        e(".char, .word, .line", t).add(i.elements.$wrapper).css({
                            transform: "none",
                            opacity: 1
                        }).each(function () {
                            delete this._gsTransform
                        })
                    }, setRandomProperties: function (e, t, i) {
                        for (var s in t) {
                            for (var a = [], r = 0, n = e.textIn.nodes.length; r < n; r++) a[r] = o.functions.convert.randomProperties(t[s], s);
                            delete i[s], i.cycle[s] = a
                        }
                        t = null
                    }
                }
            }, media: {
                defaults: {delay: 500, fadeIn: 500, fadeOut: 750}, changeBackgroundVideo: function (e, t) {
                    if (o.slides.current.index && o.slides.current.data.$backgroundVideo.length) {
                        var s = o.slides.current.data.$backgroundVideo,
                            a = s.data(o.defaults.init.dataKey).elements.$bgWrapper;
                        t && (s.data(o.defaults.init.dataKey).mediaProperties.willBePaused = !0, a.fadeOut(o.transitions.media.defaults.fadeOut, function () {
                            s.trigger("stopBackgroundVideo"), s.data(o.defaults.init.dataKey).mediaProperties.willBePaused = !1
                        }))
                    }
                    if (o.slides.next.data.$backgroundVideo.length) {
                        var r = o.slides.next.data.$backgroundVideo,
                            n = r.data(o.defaults.init.dataKey).elements.$bgWrapper,
                            l = r.data(o.defaults.init.dataKey).elements.$bgOuterWrapper;
                        o.device.isMobile && (i.hasClass("ls-device-is-phone") && l.hasClass("ls-hide-on-phone") || i.hasClass("ls-device-is-tablet") && l.hasClass("ls-hide-on-tablet")) || setTimeout(function () {
                            r.trigger("playBackgroundVideo")
                        }, e ? 50 : 0), e || t ? n.fadeIn(o.transitions.media.defaults.fadeOut) : n.css({display: "block"}), r.data(o.defaults.init.dataKey).mediaProperties.isPreloaded = !0
                    }
                }
            }, timers: {
                defaults: {fadeInDuration: .35, reverseDuration: .3}, create: function (e) {
                    this.curNext = e || "next", this.reset(), o.gui.timers.bar.$element && this.bar.createTransition(), o.gui.timers.circle.$element && this.circle.createTransition(), o.gui.timers.slidebar.$element && this.slidebar.createTransition()
                }, reverse: function () {
                    if (o.slides.current && o.slides.current.data && o.transitions._slideTimeline) {
                        var e = o.transitions._slideTimeline.progress(),
                            t = o.slides.current.data.duration * e / this.defaults.reverseDuration;
                        o.gui.timers.bar.$element && this.bar._transition && (o.transitions._slideTimeline.remove(o.transitions.timers.bar._transition), this.bar._transition.reverse().timeScale(t)), o.gui.timers.circle.$element && this.circle._transition && (o.transitions._slideTimeline.remove(o.transitions.timers.circle._transition), this.circle._transition.reverse().timeScale(t)), o.gui.timers.slidebar.$element && this.slidebar._transition && (o.transitions._slideTimeline.remove(o.transitions.timers.slidebar._transition), this.slidebar._transition.reverse().timeScale(t))
                    }
                }, reset: function () {
                    o.gui.timers.bar.$element && this.bar._transition && this.bar.reset(), o.gui.timers.circle.$element && this.circle._transition && this.circle.reset(), o.gui.timers.slidebar.$element && this.slidebar._transition && this.slidebar.reset()
                }, bar: {
                    reset: function () {
                        this._transition && (this._transition.kill(), this._transition = !1)
                    }, createTransition: function () {
                        this._transition = r.TweenMax.fromTo(o.gui.timers.bar.$element[0], o.slides[o.transitions.curNext].data.duration, {
                            autoCSS: !1,
                            paused: !0,
                            css: {width: 0}
                        }, {
                            autoCSS: !1, css: {}, ease: r.Linear.easeNone, onReverseComplete: function () {
                                o.transitions.timers.bar._transition = !1
                            }, onComplete: function (e) {
                                e.target.style.width = "100%", e.target.style.width = "calc( 100% - " + o.slider.initial.skinWidth + "px )"
                            }, onCompleteParams: ["{self}"], onUpdate: function (e) {
                                e.target.style.width = Math.min(o.slider.width, o.slider.width * e.progress()) + "px"
                            }, onUpdateParams: ["{self}"]
                        })
                    }
                }, circle: {
                    reset: function () {
                        this._transition && (o.gui.timers.circle.$element.stop(!0, !0), this._transition.kill(), this._transition = !1)
                    }, createTransition: function () {
                        var e = o.gui.timers.circle.$element.find(".ls-ct-right .ls-ct-rotate")[0],
                            t = o.gui.timers.circle.$element.find(".ls-ct-left .ls-ct-rotate")[0],
                            i = o.slides[o.transitions.curNext].data.duration;
                        this._transition = new r.TimelineMax({paused: !0}).fromTo(o.gui.timers.circle.$element[0], o.transitions.timers.defaults.fadeInDuration, {
                            autoCSS: !1,
                            immediateRender: !0,
                            css: {opacity: 0, display: "block"}
                        }, {
                            autoCSS: !1,
                            css: {opacity: o.gui.timers.circle.$element.data("original").opacity}
                        }).fromTo(e, i / 2, {autoCSS: !1, css: {rotation: 0}}, {
                            autoCSS: !1,
                            css: {rotation: 180},
                            ease: r.Linear.easeNone
                        }, 0).fromTo(t, i / 2, {autoCSS: !1, css: {rotation: 0}}, {
                            autoCSS: !1,
                            css: {rotation: 180},
                            ease: r.Linear.easeNone
                        }, i / 2)
                    }
                }, slidebar: {
                    reset: function () {
                        this._transition && (this._transition.kill(), this._transition = !1)
                    }, createTransition: function () {
                        var t = this;
                        t._transition = new r.TimelineMax({
                            paused: !0, onReverseComplete: function () {
                                o.transitions.timers.slidebar._transition = !1
                            }
                        }), e.each(o.gui.timers.slidebar.$sliderContainerElement, function (e, i) {
                            t._transition.add(r.TweenMax.fromTo(o.gui.timers.slidebar.$sliderContainerElement[e][0], o.slides[o.transitions.curNext].data.duration, {
                                autoCSS: !1,
                                css: {left: 0}
                            }, {
                                autoCSS: !1, css: {}, ease: r.Linear.easeNone, onComplete: function (t) {
                                    t.target.style.left = "calc( 100% - " + o.gui.timers.slidebar.sliderContainerElementWidth[e] + "px )"
                                }, onCompleteParams: ["{self}"], onUpdate: function (t) {
                                    t.target.style.left = (o.gui.timers.slidebar.containerElementWidth[e] - o.gui.timers.slidebar.sliderContainerElementWidth[e]) * t.progress() + "px"
                                }, onUpdateParams: ["{self}"]
                            }), 0), t._transition.add(r.TweenMax.fromTo(o.gui.timers.slidebar.$progressBarElement[e][0], o.slides[o.transitions.curNext].data.duration, {
                                autoCSS: !1,
                                css: {width: 0}
                            }, {
                                autoCSS: !1, css: {}, ease: r.Linear.easeNone, onComplete: function (e) {
                                    e.target.style.width = "100%"
                                }, onCompleteParams: ["{self}"], onUpdate: function (t) {
                                    t.target.style.width = o.gui.timers.slidebar.elementWidth[e] * t.progress() + "px"
                                }, onUpdateParams: ["{self}"]
                            }), 0)
                        })
                    }
                }
            }
        }, o.plugins = {
            load: function () {
                if (o.o.plugins && 0 !== o.o.plugins.length) {
                    var t = o.o.plugins[0], i = "object" == typeof t ? t.namespace : t;
                    if (window._layerSlider.plugins[i]) o.plugins.init(i, t, !0), o.plugins.load(); else if (o.browser.usesFileProtocol || "object" != typeof t) o.browser.usesFileProtocol ? (window.console && (console.error(o.defaults.slider.errorText, "Cannot load plugins on file:// protocol."), console.info("Please include the plugin files manually.")), o.o.plugins.splice(0, 1), o.plugins.load()) : (window.console && (console.error(o.defaults.slider.errorText, "Plugin files are missing!"), console.info('Plugin "' + i + '" has been added in slider init options, but the source files are not found on page.')), o.o.plugins.splice(0, 1), o.plugins.load()); else {
                        if (-1 !== window._layerSlider.pluginsBeingLoaded.indexOf(i)) return void o.plugins.checkLoaded(i);
                        -1 === window._layerSlider.pluginsLoaded.indexOf(i) && -1 === window._layerSlider.pluginsNotLoaded.indexOf(i) ? (window._layerSlider.pluginsBeingLoaded.push(i), e.ajax({
                            url: -1 === t.js.indexOf("http://") && -1 === t.js.indexOf("https://") ? (window._layerSlider.pluginsPath ? window._layerSlider.pluginsPath : window._layerSlider.scriptPath + "/../plugins/") + t.js : t.js,
                            dataType: "script",
                            success: function () {
                                o.plugins.init(t.namespace, t, !0), window._layerSlider.pluginsLoaded.push(i)
                            },
                            error: function (e, t, s) {
                                window.console && (console.error(o.defaults.slider.errorText, i, "plugin has not been loaded!"), console.error("Additional error info:", s)), window._layerSlider.pluginsNotLoaded.push(i)
                            },
                            complete: function () {
                                window._layerSlider.pluginsBeingLoaded.splice(window._layerSlider.pluginsBeingLoaded.indexOf(i), 1), o.plugins.load()
                            }
                        })) : (o[i] || -1 !== window._layerSlider.pluginsNotLoaded.indexOf(i) ? o.o.plugins.splice(0, 1) : o.plugins.init(i, t), o.plugins.load())
                    }
                } else o.slider.check.initialized()
            }, init: function (t, s, r) {
                o.initializedPlugins[t] = new window._layerSlider.plugins[t](o, i, a, s.settings), window._layerSlider.checkVersions(o.initializedPlugins[t].pluginData.requiredLSVersion, o.plugin.version) ? (s.css && r && e('<link rel="stylesheet" href="' + (-1 === s.css.indexOf("http://") && -1 === s.css.indexOf("https://") ? (window._layerSlider.pluginsPath ? window._layerSlider.pluginsPath : window._layerSlider.scriptPath + "/../plugins/") + s.css : s.css) + '">').appendTo("head"), o.initializedPlugins[t].init && o.initializedPlugins[t].init()) : window.console && console.error(o.defaults.slider.errorText, t, "plugin has not been loaded! Required LayerSlider version:", o.initializedPlugins[t].pluginData.requiredLSVersion, "(you have:", o.plugin.version + ")"), o.o.plugins.splice(0, 1)
            }, checkLoaded: function (e) {
                o.intervals.pluginLoaded = setInterval(function () {
                    -1 === window._layerSlider.pluginsLoaded.indexOf(e) && -1 === window._layerSlider.pluginsNotLoaded.indexOf(e) || -1 !== window._layerSlider.pluginsBeingLoaded.indexOf(e) || (clearInterval(o.intervals.pluginLoaded), delete o.intervals.pluginLoaded, o.plugins.load())
                }, 100)
            }
        }, o.slider = {
            shouldResize: !0,
            thumbnails: [],
            state: {preloadingImages: !1, changingSlides: !1, animatingSlides: !1},
            isPaused: !1,
            isBusy: function () {
                return this.state.preloadingImages || this.state.changingSlides || this.state.animatingSlides
            },
            load: function () {
                if (!document.body.contains(t)) return !1;
                o.api.hasEvent("sliderWillLoad") && i.triggerHandler("sliderWillLoad"), o.slider.set.global()
            },
            set: {
                global: function () {
                    if (o.originalMarkup = i[0].outerHTML, o.userInitOptions = o.functions.convert.properties(o.functions.convert.oldProperties(s)), o.meta = {}, o.o = e.extend(!0, {}, o.defaults.init.options, o.userInitOptions), o.o.forceLayersOutDuration /= 1e3, o.o.forceLayersOutDuration = o.o.forceLayersOutDuration > 0 ? o.o.forceLayersOutDuration : .75, o.o.sliderFadeInDuration /= 1e3, window.console && !0 !== o.o.hideWelcomeMessage && !0 !== window._layerSlider.hideWelcomeMessage) {
                        window._layerSlider.hideWelcomeMessage = !0;
                        var t = window.console.info ? "info" : "log";
                        console[t]("LayerSlider", "v" + o.plugin.version, "initialized"), console[t]("Find updates and docs @ https://layerslider.kreaturamedia.com/")
                    }
                    var a = {namespace: "debug", js: "debug/layerslider.debug.js", css: "debug/layerslider.debug.css"};
                    -1 !== document.location.hash.indexOf("debug") && window.console && (-1 !== document.location.hash.indexOf("url=") && (window._layerSlider.pluginsPath = document.location.hash.split("url=")[1].split("&")[0], a.js = window._layerSlider.pluginsPath + "debug/layerslider.debug.js", a.css = window._layerSlider.pluginsPath + "debug/layerslider.debug.css"), "object" == typeof o.o.plugins ? o.o.plugins.push(a) : o.o.plugins = [a]), (window._layerSlider.currentScript || window._layerSlider.lsScript) && (window._layerSlider.scriptPath = (window._layerSlider.currentScript || window._layerSlider.lsScript).src.replace(/\\/g, "/").replace(/\/[^\/]*$/, "")), "object" == typeof o.o.plugins ? o.plugins.load() : o.slider.check.initialized()
                }, styles: function () {
                    var s, r, n, l, d, u, p, c, h, m, f, g, v, y, b, S, w, x, T, C, k, I, O = o.slider, L = i.parent(),
                        $ = t.style, B = window.getComputedStyle(t, null), P = parseInt(t.clientWidth),
                        W = parseInt(t.clientHeight), _ = parseInt(L.width()), M = parseInt(L.height()),
                        z = o.o.layersContainerWidth, F = o.o.layersContainerHeight, D = o.o.type.toLowerCase();
                    switch (o.debugMode && o.debug.add("group", "sliderInit.style"), o.o.width ? s = -1 == o.o.width.indexOf("%") ? parseInt(o.o.width) : o.o.width : $.width ? s = -1 == $.width.indexOf("%") ? parseInt($.width) : $.width : z > 0 ? (s = z, o.debugMode && o.debug.add("warn", "sliderInit.noWidth", z)) : (s = P, o.debugMode && o.debug.add("warn", "sliderInit.noWidth2", P)), n = s, o.o.height ? r = -1 == o.o.height.indexOf("%") ? parseInt(o.o.height) : o.o.height : $.height ? r = -1 == $.height.indexOf("%") ? parseInt($.height) : $.height : F > 0 ? (r = F, o.debugMode && o.debug.add("warn", "sliderInit.noHeight", F)) : (r = W, o.debugMode && o.debug.add("warn", "sliderInit.noHeight2", M)), l = r, d = "" !== $.maxWidth ? -1 === $.maxWidth.indexOf("%") ? parseInt($.maxWidth) : $.maxWidth : 0, void 0 === o.userInitOptions.type && (z > 0 && F > 0 || "100%" === s && "100%" === r ? D = "fullsize" : z <= 0 && F <= 0 && (o.o.responsiveUnder <= 0 || o.o.responsiveUnder > 0 && o.o.sliderVersion) ? D = void 0 !== o.o.responsive && !1 === o.o.responsive ? "fixedsize" : "responsive" : o.o.responsiveUnder > 0 && (D = "fullwidth")), D) {
                        case"fullwidth":
                            -1 !== s.indexOf("%") && (o.debugMode && o.debug.add("warn", "sliderInit.percWidth", [D, s, P]), s = P), z <= 0 && (z = s, o.debugMode && o.debug.add("warn", "sliderInit.conWidth", [D, s])), o.o.responsiveUnder <= 0 && (o.o.responsiveUnder = z, o.debugMode && o.debug.add("warn", "sliderInit.fullwidth", z)), -1 !== r.indexOf("%") && (p = M / (100 / parseInt(r)), o.debugMode && o.debug.add("warn", "sliderInit.fullwidth2", [D, r, p]), r = p), F <= 0 && (F = r);
                            break;
                        case"fullsize":
                            -1 !== s.indexOf("%") && (u = z > 0 ? z : _, o.debugMode && o.debug.add("warn", "sliderInit.fullsize", [D, s, u, _, z]), s = u), z <= 0 && (z = s, o.debugMode && o.debug.add("warn", "sliderInit.conWidth", [D, s])), -1 !== r.indexOf("%") && (p = F > 0 ? F : e(window).height() / (100 / parseInt(r)), o.debugMode && o.debug.add("warn", "sliderInit.fullsize2", [D, r, p, e(window).height(), F]), r = p), F <= 0 && (F = r, o.debugMode && o.debug.add("warn", "sliderInit.conHeight", [D, r]));
                            break;
                        case"fixedsize":
                            break;
                        default:
                            o.userInitOptions.type = o.o.type = D = "responsive", o.o.responsiveUnder = -1, -1 !== s.indexOf("%") && (s = P, o.debugMode && o.debug.add("warn", "sliderInit.percWidth", [D, s, P])), -1 !== r.indexOf("%") && (s = W, o.debugMode && o.debug.add("warn", "sliderInit.responsive", [D, r, W])), o.debugMode && z > 0 && o.debug.add("warn", "sliderInit.conWidth2", [D, z]), o.debugMode && F > 0 && o.debug.add("warn", "sliderInit.conHeight2", [D, F])
                    }
                    i.addClass("ls-container ls-" + D), i.parent().addClass("ls-direction-fix"), o.o.preventSliderClip && o.o.fitScreenWidth && ("fullwidth" === D || "fullsize" === D && "fitheight" !== o.o.fullSizeMode) && i.parents(":not(body, html)").each(function () {
                        e(this).addClass("ls-overflow-visible")
                    }), o.userInitOptions.slideBGSize || "responsive" !== D || !o.userInitOptions.hasOwnProperty("sliderVersion") || o.userInitOptions.sliderVersion || (o.o.slideBGSize = "auto", o.debugMode && o.debug.add("warn", "sliderInit.bgCover", D)), o.o.slideBGSize = o.o.slideBGSize.replace("100% 100%", "stretch"), c = z > 0 ? z : s, h = F > 0 ? F : r, "auto" === (g = t.style.marginLeft) ? m = "auto" : "" === g ? m = parseInt(B.getPropertyValue("margin-left")) : m = parseInt(t.style.marginLeft), "auto" === (v = t.style.marginRight) ? f = "auto" : "" === v ? f = parseInt(B.getPropertyValue("margin-right")) : f = parseInt(t.style.marginRight), m === f && ("" === g && "" === v && (y = m, m = "auto", f = "auto"), i.css({
                        marginLeft: "auto",
                        marginRight: "auto"
                    })), b = "" !== $.paddingLeft ? parseInt($.paddingLeft) : parseInt(i.css("padding-left")), w = "" !== $.paddingRight ? parseInt($.paddingRight) : parseInt(i.css("padding-right")), S = "" !== $.paddingTop ? parseInt($.paddingTop) : parseInt(i.css("padding-top")), x = "" !== $.paddingBottom ? parseInt($.paddingBottom) : parseInt(i.css("padding-bottom")), T = "" !== $.borderLeftWidth ? parseInt($.borderLeftWidth) : parseInt(i.css("border-left-width")), k = "" !== $.borderRightWidth ? parseInt($.borderRightWidth) : parseInt(i.css("border-right-width")), C = "" !== $.borderTopWidth ? parseInt($.borderTopWidth) : parseInt(i.css("border-top-width")), I = "" !== $.borderBottomWidth ? parseInt($.borderBottomWidth) : parseInt(i.css("border-bottom-width")), O.initial = {
                        type: D,
                        width: s,
                        height: r,
                        originalWidth: n,
                        originalHeight: l,
                        percW: s / 100,
                        percH: r / 100,
                        layersWidth: z,
                        layersHeight: F,
                        ratio: c / h,
                        maxWidth: d,
                        marginLeft: m,
                        marginRight: f,
                        paddingLeft: b,
                        paddingTop: S,
                        paddingRight: w,
                        paddingBottom: x,
                        borderLeftWidth: T,
                        borderTopWidth: C,
                        borderRightWidth: k,
                        borderBottomWidth: I,
                        skinWidth: b + w + T + k,
                        skinHeight: S + x + C + I
                    }, o.debugMode && (o.debug.add("log", "sliderInit.style", [s, r, n, l, z, F, parseInt(c / h * 100) / 100, d > 0 ? d : void 0, [m, f]]), y && o.debug.add("warn", "sliderInit.margin", y)), e("html").attr("id") ? e("body").attr("id") || e("body").attr("id", "ls-global") : e("html").attr("id", "ls-global"), "static" !== $.position && "absolute" !== $.position && (t.style.position = "relative"), o.o.insertSelector && i[o.o.insertMethod](o.o.insertSelector), o.slider.$hiddenWrapper = e('<div class="ls-wp-container fitvidsignore ls-hidden" data-layerslider-uid="' + a + '"></div>').addClass(i.attr("class")).prependTo("body"), o.slider.$innerWrapper = e('<div class="ls-inner"></div>'), o.slider.$layersWrapper = e('<div class="ls-layers"></div>').appendTo(o.slider.$innerWrapper), o.slider.$bgVideosWrapper = e('<div class="ls-background-videos"></div>').appendTo(o.slider.$layersWrapper), o.slider.$slideBGWrapper = e('<div class="ls-slide-backgrounds"></div>').appendTo(o.slider.$layersWrapper), o.slider.$innerWrapper.appendTo(i), !0 === o.o.hideOnMobile && o.device.isMobile ? (i.addClass("ls-forcehide"), i.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"), o.o.autoStart = !1) : o.slider.check.showHide(), o.o.globalBGImage && o.slider.$innerWrapper.css({
                        backgroundImage: "url( " + o.o.globalBGImage + " )",
                        backgroundRepeat: o.o.globalBGRepeat,
                        backgroundAttachment: o.o.globalBGAttachment,
                        backgroundSize: o.o.globalBGSize,
                        backgroundPosition: o.o.globalBGPosition
                    }), o.slider.$innerWrapper.css({backgroundColor: o.o.globalBGColor}), "transparent" == o.o.globalBGColor && !1 === o.o.globalBGImage && o.slider.$innerWrapper.css({background: "none transparent"})
                }, options: function () {
                    if (e("html").find('meta[content*="WordPress"]').length && (o.meta.wpVersion = e("html").find('meta[content*="WordPress"]').attr("content").split("WordPress")[1]), e("html").find('script[src*="layerslider"]').length && -1 != e("html").find('script[src*="layerslider"]').attr("src").indexOf("?") && (o.meta.lswpVersion = e("html").find('script[src*="layerslider"]').attr("src").split("?")[1].split("=")[1]), "undefined" != typeof layerSliderTransitions && (o.t = e.extend({}, layerSliderTransitions)), "undefined" != typeof layerSliderCustomTransitions && (o.ct = e.extend({}, layerSliderCustomTransitions)), o.debugMode && ("undefined" != typeof layerCustomSliderTransitions ? (o.debug.add("log", "sliderInit.customTransitions", !1), "undefined" == typeof layerSliderTransitions && o.debug.add("warn", "sliderInit.slideTransitions")) : "undefined" == typeof layerSliderTransitions && o.debug.add("warn", "sliderInit.noSlideTransitions")), "number" == typeof o.o.parallaxCenterDegree && (o.transitions.layers.parallax.defaults.centerDegree = o.o.parallaxCenterDegree), "number" == typeof o.o.parallaxSensitivity && (o.transitions.layers.parallax.defaults.sensitive = o.o.parallaxSensitivity), o.o.parallaxCenterLayers && (o.transitions.layers.parallax.defaults.centerLayers = o.o.parallaxCenterLayers), o.o.playByScroll && (o.o.cycles = -1, o.o.startInViewport = !0, o.o.pauseOnHover = !1, o.o.autoStart = !1), o.o.startInViewport) {
                        if (o.slider.positionToViewport = o.device.winScrollTop > o.slider.offsetTop - (o.device.viewportHeight - o.slider.height) / 2 ? "under" : "over", o.o.playByScroll) {
                            var t, i, s, r = !0, n = 4 * o.o.playByScrollSpeed;
                            o.device.scroll.timeout = 250, o.transitions.layers.timeline.timeScaleModifier = 0, e(document).on("wheel." + a + " touchmove." + a, function (e) {
                                o.device.isMobile ? ((t = e.originalEvent.touches[0].clientY) > i ? o.device.scroll.direction = "up" : t < i && (o.device.scroll.direction = "down"), s = i - t, i = t) : (e.originalEvent.deltaY > 0 ? o.device.scroll.direction = "down" : o.device.scroll.direction = "up", s = e.originalEvent.deltaY), 0 !== Math.abs(s) && (o.device.scroll.lastDirection ? o.device.scroll.lastDirection !== o.device.scroll.direction && (o.device.scroll.lastDirection = o.device.scroll.direction, o.transitions.layers.timeline.timeScaleModifier = 0) : o.device.scroll.lastDirection = o.device.scroll.direction, "inside" === o.slider.positionToViewport && (o.resize.viewport(), s >= 0 ? o.transitions.layers.timeline.scrollForward() : o.transitions.layers.timeline.scrollBackwards(), r && (clearTimeout(o.timeouts.scroll), r = !1, o.transitions.layers.timeline.timeScaleModifier = o.transitions.layers.timeline.timeScaleModifier < n ? o.transitions.layers.timeline.timeScaleModifier + .25 : n, o.timeouts.scroll2 = setTimeout(function () {
                                    delete o.timeouts.scroll2, r = !0, o.device.scroll.timeout = o.device.scroll.timeout > 50 ? o.device.scroll.timeout - 50 : 50
                                }, o.device.scroll.timeout))))
                            })
                        }
                        e(window).on("scroll." + a, function () {
                            o.slider.check.positionToViewport()
                        }), o.timeouts.checkPosition = setTimeout(function () {
                            o.slider.check.positionToViewport()
                        }, 25)
                    }
                    o.slider.canShow = !0
                }, attributes: function () {
                    i.attr("data-current-slide", o.slides.current.index)
                }
            },
            check: {
                initialized: function () {
                    o.debugMode && o.debug.add("log", "sliderInit.info", [o.plugin.version, o.plugin.releaseDate, o.userInitOptions.sliderVersion || "n/a or slider version is pre 6.0.0", i.attr("id"), a, e.fn.jquery, o.meta.lswpVersion, o.meta.wpVersion], !0), o.slider.initialized || (o.slider.initialized = !0, this.skins())
                }, skins: function () {
                    o.o.skin && "" !== o.o.skin && o.o.skinsPath && "" !== o.o.skinsPath ? o.gui.skin.load() : o.slider.init()
                }, showHide: function () {
                    o.device.isMobile && !1 !== o.o.hideOnMobile || (o.device.viewportWidth < o.o.hideUnder || o.device.viewportWidth > o.o.hideOver && o.o.hideOver > 0 ? o.slider.hide() : o.slider.show())
                }, positionToViewport: function () {
                    if (delete o.timeouts.checkPosition, o.o.playByScroll) {
                        if (o.device.scroll.direction) ("down" === o.device.scroll.direction ? o.device.winScrollTop : o.slider.offsetTop - (o.device.viewportHeight - o.slider.height) / 2) > ("down" === o.device.scroll.direction ? o.slider.offsetTop - (o.device.viewportHeight - o.slider.height) / 2 : o.device.winScrollTop) && ("up" === o.device.scroll.direction && "under" === o.slider.positionToViewport || "down" === o.device.scroll.direction && "over" === o.slider.positionToViewport) && (o.slider.positionToViewport = "inside", o.resize.viewport(), o.device.scroll.disable())
                    } else {
                        var t = o.device.winScrollTop + o.device.viewportHeight / 2,
                            i = o.slider.offsetTop + o.slider.height / 2;
                        (Math.abs(t - i) < o.device.viewportHeight / 2 || o.device.winScrollTop < o.slider.offsetTop && o.device.winScrollTop + o.device.viewportHeight > o.slider.offsetTop + o.slider.height) && (o.slider.positionToViewport = "inside", e(window).off("scroll." + a), o.debugMode && o.debug.add("log", "slideshow.inviewport", !1), o.transitions._slideTimeline && o.transitions.layers.timeline.play())
                    }
                }
            },
            init: function () {
                clearTimeout(o.timeouts.skinLoad1), clearTimeout(o.timeouts.skinLoad2), clearTimeout(o.timeouts.skinLoad3), clearTimeout(o.timeouts.skinLoad4), o.device.setBasicEvents(), o.slider.set.styles(), o.slider.set.options(), o.slides.init(), o.device.fullscreen.set(), o.media.init(), o.gui.timers.init(), o.gui.loadingIndicator.init(), o.preload.init(), o.gui.shadow.init(), o.navigation.init(), o.slideshow.init(), o.slides.set.firstSlide(), o.gui.navigation.init(), o.resize.slider(), o.yourLogo.init(), e(window).on("resize." + a, function () {
                    o.slider.check.showHide(), "inside" === o.slider.positionToViewport && o.o.playByScroll && o.resize.viewport(), o.slider.shouldResize && o.resize.all()
                }), o.debugMode && (e(window).off(".debug" + a), e(window).on("resize.debug" + a, function () {
                    o.debug.add("log", "resize.window", o.device.viewportWidth, !0)
                })), e(window).on("orientationchange." + a, function () {
                    o.device.getDimensions(), o.resize.all()
                }), o.device.getDimensions(), e(window).trigger("resize." + a), e(window).trigger("orientationchange." + a), o.api.hasEvent("sliderDidLoad") && i.triggerHandler("sliderDidLoad", o.api.eventData()), o.functions.setStates(o.slider, {isLoaded: !0}), o.slider.state.shouldBeDestroyed ? o.api.methods("destroy") : o.slideshow.changeTo(o.slides.first.index)
            },
            hide: function () {
                i.addClass("ls-forcehide"), i.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide")
            },
            show: function () {
                i.removeClass("ls-forcehide"), i.closest(".ls-wp-fullwidth-container").removeClass("ls-forcehide")
            }
        }, o.functions = {
            convert: {
                transformOrigin: function (t, i, s) {
                    var a = e.trim(t), r = a.split(" "), n = "", l = ["Left", "Top"],
                        d = [o.slider.width, o.slider.height];
                    a = a.replace("sliderleft", "0").replace("sliderright", "100%").replace("slidercenter", "50%").replace("slidermiddle", "50%").replace("slidertop", "0").replace("sliderbottom", "100%").replace("left", "0").replace("right", "100%").replace("center", "50%").replace("middle", "50%").replace("top", "0").replace("bottom", "100%").split(" ");
                    for (var u = 0; u < a.length; u++) if (-1 !== r[u].indexOf("slider")) {
                        o.transitions.layers.timeline.shouldRestart = !0;
                        var p = i.data(o.defaults.init.dataKey).elements.$wrapper[0].style;
                        n += u < 2 ? d[u] / (100 / parseInt(a[u])) - parseInt(p[l[u].toLowerCase()]) - parseInt(p["margin" + l[u]]) + "px " : "0px"
                    } else {
                        if (u < 2 && i && s) switch (u) {
                            case 0:
                                d = s.width();
                                break;
                            case 1:
                                d = s.height()
                        }
                        -1 !== a[u].indexOf("%") ? n += u < 2 && i && s ? d / (100 / parseInt(a[u])) + "px " : a[u] + " " : n += parseInt(a[u]) * o.resize.ratio + "px "
                    }
                    return e.trim(n)
                }, easing: function (e, t) {
                    var i, s, a;
                    return "string" == typeof e ? (-1 !== (e = e.toLowerCase()).indexOf("swing") || -1 !== e.indexOf("linear") ? i = r.Linear.easeNone : (s = e.match(/(easeinout|easein|easeout)(.+)/)[2], a = r[s.charAt(0).toUpperCase() + s.slice(1)], -1 !== e.indexOf("easeinout") ? i = a.easeInOut : -1 !== e.indexOf("easeout") ? i = t ? a.easeIn : a.easeOut : -1 !== e.indexOf("easein") && (i = t ? a.easeOut : a.easeIn)), i) : e
                }, transition: function (t, i, s, a) {
                    var r = e.extend({}, t);
                    return e.each({rotate: "rotation", rotateX: "rotationX", rotateY: "rotationY"}, function (e, t) {
                        e in r && (r[t] = r[e], delete r[e])
                    }), "after" === s ? r.scaleX = r.scaleY = r.scaleZ = 1 : r.scale3d !== a && (r.scaleX = r.scaleY = r.scaleZ = r.scale3d, delete r.scale3d), r.delay && (r.delay = "after" === s ? r.delay / 1e3 : r.delay), void 0 === i && (i = "easeInOutQuart"), r.ease = o.functions.convert.easing(i), r
                }, randomProperties: function (e, t) {
                    if (e && -1 !== e.indexOf("(") && -1 !== e.indexOf(",") && -1 !== e.indexOf(")")) {
                        var i = e.split("(")[1].split(")")[0].split(","), s = 1;
                        return i[0] = parseFloat(i[0]), i[1] = parseFloat(i[1]), -1 !== t.indexOf("scale") && (s = 100, i[0] *= s, i[1] *= s), Math.floor(Math.random() * (i[1] - i[0] + 1) + i[0]) / s
                    }
                    return e
                }, properties: function (e, t) {
                    if ("string" == typeof e) return o.functions.convert._properties(e, t);
                    if ("object" == typeof e) {
                        for (var i in e) e[i] = o.functions.convert._properties(e[i], t);
                        return e
                    }
                    return e
                }, _properties: function (t, i) {
                    if ("enable" == t || "enabled" == t || "true" == t) return !0;
                    if ("disable" == t || "disabled" == t || "false" == t) return !1;
                    if ("string" == typeof t && -1 !== t.indexOf(o.defaults.init.lsDataArraySplitChar)) {
                        for (var s = t.split(o.defaults.init.lsDataArraySplitChar), a = [], r = 0; r < s.length; r++) a[r] = e.isNumeric(s[r]) ? parseFloat(e.trim(s[r])) : e.trim(s[r]);
                        return a
                    }
                    return i ? "" + parseInt(t) == "NaN" ? 0 : parseInt(t) : e.isNumeric(t) ? parseFloat(t) : t
                }, oldProperties: function (t) {
                    return e.each({
                        firstLayer: "firstSlide",
                        loops: "cycles",
                        forceLoopNum: "forceCycles",
                        layersContainer: "layersContainerWidth",
                        sublayerContainer: "layersContainerWidth",
                        randomSlideshow: "shuffleSlideshow"
                    }, function (e, i) {
                        e in t && (t[i] = t[e], delete t[e])
                    }), t
                }
            }, getSliderClosestParentElementWidthNumericValueOfProperty: function (t) {
                for (var s, a = i.parents(), r = a.length, n = 100, l = 0; l < r; l++) if ("auto" !== (s = window.getComputedStyle(a[l]).getPropertyValue(t))) {
                    if (-1 !== s.indexOf("px")) return o.slider.$parentWithNumericWidthValue = e(a[l]), e(a[l]);
                    -1 !== s.indexOf("%") && (n = n / 100 * parseInt(s), o.slider.$parentWithNumericWidthValuePercent = n)
                }
            }, sortArray: function (e, t, i) {
                var s = [];
                if ("forward" == i) for (var a = 0; a < e; a++) for (var o = 0; o < t; o++) s.push(a + o * e); else for (var r = e - 1; r > -1; r--) for (var n = t - 1; n > -1; n--) s.push(r + n * e);
                return s
            }, shuffleArray: function (e) {
                for (var t, i, s = e.length; 0 !== s;) i = Math.floor(Math.random() * s), t = e[s -= 1], e[s] = e[i], e[i] = t;
                return e
            }, countProp: function (e) {
                var t = 0;
                for (var i in e) e.hasOwnProperty(i) && ++t;
                return t
            }, getURL: function (e) {
                return e[0].currentSrc ? e[0].currentSrc : e.data("src ") ? e.data("src ") : e.attr("src")
            }, getALT: function (e) {
                return !!e.attr("alt") && e.attr("alt")
            }, setStates: function (e, t, s) {
                if (e && e.state) {
                    var a = o.slideshow.isPaused();
                    if (s) e.state[t] = s; else for (var r in t) e.state[r] = t[r];
                    var n = o.slideshow.isPaused();
                    e == o.slideshow && (o.api.hasEvent("slideshowStateDidChange") && i.triggerHandler("slideshowStateDidChange", o.api.eventData()), n != a && (n ? o.api.hasEvent("slideshowDidPause") && i.triggerHandler("slideshowDidPause", o.api.eventData()) : o.api.hasEvent("slideshowDidResume") && i.triggerHandler("slideshowDidResume", o.api.eventData())))
                }
            }, clearTimers: function () {
                for (var e in o.timeouts) clearTimeout(o.timeouts[e]), delete o.timeouts[e];
                for (var t in o.intervals) clearInterval(o.intervals[t]), delete o.intervals[t]
            }, clearTimelines: function () {
                o.transitions._slideTimeline && (o.transitions._slideTimeline.pause().clear().kill(), delete o.transitions._slideTimeline), o.transitions._forceLayersOut && (o.transitions._forceLayersOut.kill(), delete o.transitions._forceLayersOut), o.transitions._slideTransition && (o.transitions._slideTransition.pause().clear().kill(), delete o.transitions._slideTransition), r.TweenMax.killTweensOf(i.find(".ls-bg, .ls-layer, .ls-wrapper, .ls-curtile, .ls-nexttile").get())
            }, resetSlideTimelines: function () {
                o.transitions._slideTimeline && (o.transitions._slideTimeline.pause().progress(0).clear().kill(), delete o.transitions._slideTimeline), o.transitions._forceLayersOut && (o.transitions._forceLayersOut.pause().progress(1).clear().kill(), delete o.transitions._forceLayersOut), i.find(".ls-layer:not(.ls-bg-video)").each(function () {
                    var t = e(this).data(o.defaults.init.dataKey);
                    t.loop._timeline && (t.loop._timeline.stop().clear(), delete t.loop._timeline, r.TweenMax.set(t.elements.$loopWrapper[0], t.reset.loopWrapperOnSlideChange)), r.TweenMax.set(t.elements.$wrapper[0], t.reset.wrapperOnSlideChange)
                })
            }, clearEvents: function () {
                e(window).add("body").add(i).add(i.find("*")).add("." + a).off("." + a + " .debug" + a + " .parallax" + a + " .setter" + a), i.off()
            }
        }, o.device = {
            $overflowWrapper: e("body").length ? e("body") : e("html"),
            isMobile: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|webOS|Windows Phone|mobi|opera mini|nexus 7)/i),
            supportOrientation: !!window.DeviceOrientationEvent,
            scroll: {
                keys: [32, 33, 34, 35, 36, 37, 38, 39, 40], disable: function () {
                    window.addEventListener && window.addEventListener("DOMMouseScroll", this.preventDefault, !1), window.onwheel = this.preventdefault, window.onmousewheel = document.onmousewheel = this.preventDefault, window.ontouchmove = this.preventDefault, document.onkeydown = this.preventDefaultForScrollKeys
                }, enable: function () {
                    window.removeEventListener && window.removeEventListener("DOMMouseScroll", this.preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
                }, preventDefault: function (e) {
                    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                }, preventDefaultForScrollKeys: function (e) {
                    if (-1 !== o.device.scroll.keys.indexOf(e.keyCode)) return o.device.scroll.preventDefault(e), !1
                }
            },
            removeSelection: function () {
                window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
            },
            fullscreen: {
                enter: function () {
                    "fullsize" == o.slider.initial.type && "hero" == o.o.fullSizeMode && (o.slider.heroTop = o.slider.offsetTop), o.functions.setStates(o.slider, {inFullscreen: !0}), e("body, html").addClass("ls-fullscreen"), o.slider.fullscreenWrapper.requestFullscreen(), i.trigger("mouseleave"), o.device.removeSelection()
                }, exit: function () {
                    o.functions.setStates(o.slider, {inFullscreen: !1}), o.resize.all(), e("body, html").removeClass("ls-fullscreen"), o.device.removeSelection()
                }, toggle: function () {
                    o.device.fullscreen.element() ? (o.device.fullscreen.exit(), document.exitFullscreen()) : o.device.fullscreen.enter()
                }, set: function () {
                    o.o.allowFullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && (i.wrap('<div class="ls-fullscreen-wrapper"></div>'), o.slider.$fullscreenWrapper = i.closest(".ls-fullscreen-wrapper"), o.slider.fullscreenWrapper = o.slider.$fullscreenWrapper[0], o.slider.fullscreenWrapper.requestFullscreen = o.slider.fullscreenWrapper.requestFullscreen || o.slider.fullscreenWrapper.webkitRequestFullscreen || o.slider.fullscreenWrapper.mozRequestFullScreen || o.slider.fullscreenWrapper.msRequestFullscreen, document.exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen, e(document).on("fullscreenchange." + a + " webkitfullscreenchange." + a + " mozfullscreenchange." + a + " msfullscreenchange." + a, function () {
                        o.device.fullscreen.element() || o.device.fullscreen.exit()
                    }), o.slider.$fullscreenWrapper.on("dblclick." + a, function () {
                        o.device.fullscreen.toggle()
                    }))
                }, element: function () {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                }
            },
            getDimensions: function () {
                this.width = screen.width, this.height = screen.height, this.viewportWidth = e(window).width(), this.viewportHeight = e(window).height(), this.docWidth = e(document).width(), this.docHeight = e(document).height(), this.winScrollTop = e(window).scrollTop(), this.winScrollLeft = e(window).scrollLeft(), this.ratio = this.width / this.height, o.slider.offsetTop = i.offset().top, o.slider.offsetLeft = i.offset().left
            },
            setBasicEvents: function () {
                var t, s = this;
                e(window).on("resize.setter" + a, function () {
                    s.viewportWidth = e(window).width(), s.viewportHeight = e(window).height(), s.ratio = s.width / s.height, o.slider.offsetTop = i.offset().top, o.slider.offsetLeft = i.offset().left
                }), e(window).on("scroll.setter" + a, function () {
                    s.winScrollTop = e(window).scrollTop(), s.winScrollLeft = e(window).scrollLeft(), o.slider.offsetTop = i.offset().top, o.slider.offsetLeft = i.offset().left
                }), e(window).on("touchmove", function (e) {
                    s.winScrollTop = window.pageYOffset, s.winScrollLeft = window.pageXOffset, 1 == (t = e.touches ? e.touches : e.originalEvent.touches).length && (s.touchX = t[0].clientX)
                })
            }
        }, o.api = {
            hasEvent: function (i, s) {
                var a = e._data(s || t, "events");
                return !(!a || !a[i])
            }, methods: function (t, s, r, n) {
                if (!o.slider.isBusy()) if ("number" == typeof t) t > 0 && t < o.slides.count + 1 && t != o.slides.current.index && o.slideshow.changeTo(t, !0, !0); else switch (t) {
                    case"touchPrev":
                        o.device.touchPrev = !0;
                    case"previousSlide":
                    case"prev":
                        o.navigation.prev();
                        break;
                    case"touchNext":
                        o.device.touchNext = !0;
                    case"nextSlide":
                    case"next":
                        o.navigation.next();
                        break;
                    case"startSlideshow":
                    case"start":
                        o.navigation.start()
                }
                switch (t) {
                    case"openPopup":
                        o.initializedPlugins.popup && o.initializedPlugins.popup.events.show();
                        break;
                    case"closePopup":
                        o.initializedPlugins.popup && o.initializedPlugins.popup.events.hide();
                        break;
                    case"updateLayerData":
                        s && o.layers.update.data(s, r, n);
                        break;
                    case"redrawSlider":
                    case"redraw":
                        o.resize.all();
                        break;
                    case"replaySlide":
                    case"replay":
                        o.transitions._slideTimeline && (o.transitions._slideTimeline.progress(0), o.transitions._slideTimeline.play());
                        break;
                    case"reverseSlide":
                    case"reverse":
                        o.transitions._slideTimeline && (o.transitions._slideTimeline.reversed() ? o.transitions._slideTimeline.play() : o.transitions._slideTimeline.reverse(), s && (o.transitions.layers.timeline.shouldReplay = !0));
                        break;
                    case"stopSlideshow":
                    case"stop":
                        o.navigation.stop();
                        break;
                    case"pauseSlider":
                    case"pause":
                        o.transitions._slideTimeline && o.transitions._slideTimeline.stop(), o.transitions._slideTransition && o.transitions._slideTransition.stop(), o.media.stop(!1);
                        break;
                    case"resumePopup":
                        o.layers.get("active").each(function () {
                            o.media.playIfAllowed(e(this))
                        });
                    case"resumeSlider":
                    case"resume":
                        o.transitions._slideTimeline && (o.transitions._slideTimeline.timeScale() < .001 && o.transitions.layers.timeline.resume(), o.transitions._slideTimeline.play()), o.transitions._slideTransition && o.transitions._slideTransition.play();
                        break;
                    case"toggleSlider":
                    case"toggle":
                        o.slider.isPaused ? (i.layerSlider("resume"), o.slider.isPaused = !1) : (i.layerSlider("pause"), o.slider.isPaused = !0);
                        break;
                    case"reset":
                    case"resetSlider":
                        break;
                    case"resetSlide":
                    case"resetCurrentSlide":
                        o.transitions._slideTimeline && (o.transitions._slideTimeline.progress(0), o.transitions._slideTimeline.stop()), o.media.stop(!0);
                        break;
                    case"destroy":
                    case"kill":
                        if (o.slider.state.isLoaded) {
                            if (o.functions.clearTimers(), o.functions.clearTimelines(), o.layers.$all.removeData(), o.api.hasEvent("sliderDidDestroy") && i.triggerHandler("sliderDidDestroy"), o.slider.state.sholudBeRemoved || s) {
                                if (o.slider.$hiddenWrapper.remove(), o.gui.timers.slidebar.$containerElement) for (var l = 0; l < o.gui.timers.slidebar.$containerElement.length; l++) o.gui.timers.slidebar.$containerElement[l] instanceof jQuery && o.gui.timers.slidebar.$containerElement[l].remove();
                                o.api.hasEvent("sliderDidRemove") && i.triggerHandler("sliderDidRemove"), i.parent(".ls-fullscreen-wrapper").remove()
                            }
                            o.functions.clearEvents(), window._layerSlider.removeSlider(a)
                        } else o.functions.setStates(o.slider, {shouldBeDestroyed: !0, sholudBeRemoved: s || !1});
                        o.slider.positionToViewport = "under", o.device.scroll.enable()
                }
            }, eventData: function () {
                return {
                    data: o,
                    userData: o.o,
                    uid: a,
                    target: t,
                    slider: i,
                    state: o.slider.state,
                    isBusy: o.slider.isBusy(),
                    api: function (e) {
                        i.layerSlider(e)
                    },
                    slides: {
                        first: {
                            index: o.slides.first.index,
                            deeplink: o.slides.get.deeplink(o.slides.first.index),
                            data: o.slides.first.data
                        },
                        prev: {
                            index: o.slides.prev.index,
                            deeplink: o.slides.get.deeplink(o.slides.prev.index),
                            data: o.slides.prev.data
                        },
                        current: {
                            index: o.slides.current.index || o.slides.first.index,
                            deeplink: o.slides.get.deeplink(o.slides.current.index),
                            layersIn: o.layers.get("current,in"),
                            layersOut: o.layers.get("current,out"),
                            timeline: o.transitions._slideTimeline,
                            data: o.slides.current.data
                        },
                        next: {
                            index: o.slides.next.index,
                            deeplink: o.slides.get.deeplink(o.slides.next.index),
                            layersIn: o.layers.get("next,in"),
                            layersOut: o.layers.get("next,out"),
                            data: o.slides.next.data
                        },
                        count: o.slides.count
                    },
                    slideChangeTimeline: o.transitions._slideTransition,
                    slideshow: {
                        state: o.slideshow.state,
                        sequence: o.slideshow.sequence,
                        direction: o.slideshow.direction,
                        isPaused: o.slideshow.isPaused()
                    },
                    cycles: {max: o.o.cycles, current: o.slideshow.curCycle}
                }
            }
        }, o.browser = {
            isSafari: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Safari)/i) && !navigator.userAgent.match(/(Opera|Chrome|Edge)/i),
            usesFileProtocol: -1 !== document.location.href.indexOf("file://"),
            supports3D: function () {
                for (var t = e("<div>"), s = !1, a = !1, o = ["perspective", "OPerspective", "msPerspective", "MozPerspective", "WebkitPerspective"], r = ["transformStyle", "OTransformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle"], n = o.length - 1; n >= 0; n--) s = s || void 0 !== t[0].style[o[n]];
                for (var l = r.length - 1; l >= 0; l--) t.css("transform-style", "preserve-3d"), a = a || "preserve-3d" == t[0].style[r[l]];
                return s && void 0 !== t[0].style[o[4]] && (t.attr("id", "ls-test3d").appendTo(i), s = 3 === t[0].offsetHeight && 9 === t[0].offsetLeft, t.remove()), s && a
            },
            isOld: -1 !== navigator.userAgent.indexOf("rident/5")
        }, o.initializedPlugins = {}, o.timeouts = {}, o.intervals = {}, o.debug = {options: {}}, o.plugin = {
            version: "6.7.1",
            releaseDate: "2018. 03. 05."
        }, o.slider.load()
    }
}(jQuery);