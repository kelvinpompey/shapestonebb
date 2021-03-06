var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        },
        {
            "name": "async",
            "location": "libs/async",
            "main": "./lib/async"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        }
    ],
    "version": "0.2.13",
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        },
        {
            "name": "async",
            "location": "libs/async",
            "main": "./lib/async"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        },
        {
            "name": "async",
            "location": "libs/async",
            "main": "./lib/async"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}