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