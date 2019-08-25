"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function useTempRecords(TTL) {
    if (TTL === void 0) { TTL = 100; }
    var _a = React.useState(new Map()), records = _a[0], setRecords = _a[1];
    var _timeoutIds = [];
    React.useEffect(function () {
        var cleanup = function () {
            if (_timeoutIds.length > 0) {
                _timeoutIds.forEach(function (id) { return clearTimeout(id); });
            }
        };
        return cleanup;
    }, []);
    var _remove = function (key) {
        records.delete(key);
        setRecords(function (prevRecords) {
            prevRecords.delete(key);
            return new Map(prevRecords);
        });
    };
    var getRecord = function (key) { return records.get(key); };
    var getTTL = function (options) { return (options && options.TTL) || TTL; };
    var addRecord = function (key, value, options) {
        if (value === void 0) { value = true; }
        setRecords(function (preRecords) {
            return new Map(preRecords).set(key, value);
        });
        _timeoutIds.push(window.setTimeout(function () { return _remove(key); }, getTTL(options)));
    };
    var hasRecords = function () { return records.size !== 0; };
    var hasRecord = function (key) {
        return records.has(key);
    };
    var allRecords = function () {
        return Array.from(records.entries());
    };
    return {
        addRecord: addRecord,
        hasRecord: hasRecord,
        removeRecord: _remove,
        allRecords: allRecords,
        getRecord: getRecord,
        hasRecords: hasRecords,
    };
}
exports.useTempRecords = useTempRecords;
//# sourceMappingURL=index.js.map