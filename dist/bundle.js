'use strict';

var mixin = function mixin(source, target) {
    for (var key in target) {
        if (target.hasOwnProperty(key)) {
            source[key] = target[key];
        }
    }
    return source;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Share = function Share() {
    classCallCheck(this, Share);
};

Share.install = function () {
    Vue.component("v-share", Vue.extend({
        // name: 'v-share',
        template: "<div>\n            <input type=\"button\" value=\"{{val_btn}}\" @click=\"click_btn\"/>\n         </div>\n        ",
        data: function data() {
            return {
                val_btn: "哼哼哈嘿"
            };
        },
        methods: {
            click_btn: function click_btn() {
                mixin({ a: 1 }, { b: 2 });
                alert("click_btn");
            }
        }
    }));
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Share);
}
//# sourceMappingURL=bundle.js.map
