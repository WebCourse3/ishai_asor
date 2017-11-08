"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_js_1 = require("./colors.js");
var logger = (function () {
    function logger(name, configuration) {
        this.name = name;
        this.configuration = configuration;
    }
    logger.prototype.log = function (level, strings) {
        var options = {
            'debug': this.debug.bind(this),
            'info': this.info.bind(this),
            'warning': this.warning.bind(this),
            'error': this.error.bind(this)
        };
        var lvl = level || this.configuration.logLevel;
        options[lvl](strings);
    };
    logger.prototype.info = function (strings) {
        this.consolePrinter(colors_js_1.colorsTypes.green, strings);
    };
    logger.prototype.warning = function (strings) {
        this.consolePrinter(colors_js_1.colorsTypes.yellow, strings);
    };
    logger.prototype.debug = function (strings) {
        this.consolePrinter(colors_js_1.colorsTypes.white, strings);
    };
    logger.prototype.error = function (strings) {
        this.consolePrinter(colors_js_1.colorsTypes.red, strings);
    };
    logger.prototype.consolePrinter = function (colorType, strings) {
        var _this = this;
        if (this.configuration.console) {
            strings.forEach(function (x) {
                if (_this.configuration.colors) {
                    console.log(colorType, x);
                }
                else {
                    console.log(x);
                }
            });
        }
        if (this.configuration.file) {
            strings.forEach(function (str) {
                _this.printToFile(str);
            });
        }
    };
    logger.prototype.printToFile = function (log) {
        var fs = require('fs');
        fs.appendFile('log.txt', log + '\r\n', function (err) {
            if (err)
                throw err;
        });
    };
    return logger;
}());
var x = new logger('test', { console: true, file: true, colors: true, logLevel: 'debug' });
x.log('debug', ['log test 1', 'log test 2']);
x.info(['info 1', 'info 2']);
x.debug(['debug 1', 'debug 2']);
x.warning(['warning 1', 'warning 2']);
x.error(['error 1', 'error 2']);
//# sourceMappingURL=logger.js.map