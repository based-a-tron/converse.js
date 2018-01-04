({
    baseUrl: "../",
    name: "almond",
    out: "../dist/converse-no-dependencies.min.js",
    include: ["converse"],
    exclude: [
        "awesomplete",
        "backbone.browserStorage",
        "backbone.overview",
        "moment",
        "strophe",
        "strophe.disco",
        "strophe.rsm",
        "strophe.vcard",
        "strophe.ping",
        "otr",
        "lodash",
        "lodash.converter",
        "lodash.noconflict",
        "es6-promise"
    ],
    paths: {
        "backbone.vdomview":        "builds/backbone.vdomview",
        "converse-bookmarks":       "builds/converse-bookmarks",
        "converse-chatboxes":       "builds/converse-chatboxes",
        "converse-chatview":        "builds/converse-chatview",
        "converse-controlbox":      "builds/converse-controlbox",
        "converse-core":            "builds/converse-core",
        "converse-disco":           "builds/converse-disco",
        "converse-dragresize":      "builds/converse-dragresize",
        "converse-headline":        "builds/converse-headline",
        "converse-fullscreen":      "builds/converse-fullscreen",
        "converse-mam":             "builds/converse-mam",
        "converse-minimize":        "builds/converse-minimize",
        "converse-muc":             "builds/converse-muc",
        "converse-muc-embedded":    "builds/converse-muc-embedded",
        "converse-notification":    "builds/converse-notification",
        "converse-otr":             "builds/converse-otr",
        "converse-ping":            "builds/converse-ping",
        "converse-register":        "builds/converse-register",
        "converse-roomslist":       "builds/converse-roomslist",
        "converse-rosterview":      "builds/converse-rosterview",
        "converse-singleton":       "builds/converse-singleton",
        "converse-vcard":           "builds/converse-vcard",
        "i18n":                     "builds/i18n",
        "utils":                    "builds/utils",
        "form-utils":               "builds/form-utils"
    },
    wrap: {
        startFile: "start.frag",
        endFile: "end-no-dependencies.frag"
    },
    mainConfigFile: "config.js"
});
