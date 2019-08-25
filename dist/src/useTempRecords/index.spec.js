"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var React = require("react");
var enzyme_1 = require("enzyme");
var TestComp = function (_a) {
    var _b = _a.time, time = _b === void 0 ? 2000 : _b;
    var _c = _1.useTempRecords(time), allRecords = _c.allRecords, addRecord = _c.addRecord;
    return (React.createElement("div", { onClick: function () { return addRecord("gal_" + Math.random(), '123'); } }, allRecords().map(function (_, i) { return (React.createElement("span", { key: i })); })));
};
describe('useTempRecords', function () {
    it('should remove a record after the TTL has passed', function (done) {
        var wrapper = enzyme_1.mount(React.createElement(TestComp, null));
        wrapper.simulate('click');
        setTimeout(function () {
            wrapper.update();
            expect(wrapper.find('span')).toHaveLength(0);
            done();
        }, 3000);
    });
    it("should still dsplay the record if the TTl hasn't passed", function (done) {
        var wrapper = enzyme_1.mount(React.createElement(TestComp, { time: 4000 }));
        wrapper.simulate('click');
        wrapper.simulate('click');
        wrapper.simulate('click');
        setTimeout(function () {
            wrapper.update();
            expect(wrapper.find('span')).toHaveLength(3);
            done();
        }, 2000);
    });
});
//# sourceMappingURL=index.spec.js.map