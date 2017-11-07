var logger = (function () {
    function logger(name, configuration) {
        this.name = name;
        this.configuration = configuration;
    }
    logger.prototype.log = function (level, strings) {
        strings.forEach(function (str) {
            console.log("\x1b[36m%s\x1b[0m", str);
        });
    };
    logger.prototype.info = function (strings) {
        strings.forEach(function (str) {
            console.log("\x1b[32m%s\x1b[0m", str);
        });
    };
    logger.prototype.warning = function (strings) {
        strings.forEach(function (str) {
            console.log("\x1b[33m%s\x1b[0m", str);
        });
    };
    logger.prototype.debug = function (strings) {
        strings.forEach(function (str) {
            console.log(str);
        });
    };
    logger.prototype.error = function (strings) {
        strings.forEach(function (str) {
            console.log("\x1b[31m%s\x1b[0m", str);
        });
    };
    return logger;
}());
var x = new logger('test', { console: true, file: true, colors: true, logLevel: true });
x.log(1, ['log test 1', 'log test 2']);
x.info(['info 1', 'info 2']);
x.debug(['debug 1', 'debug 2']);
x.warning(['warning 1', 'warning 2']);
x.error(['error 1', 'error 2']);
//# sourceMappingURL=logger.js.map