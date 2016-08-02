class Share {}

Share.install = () => {
    Vue.component("v-share", Vue.extend({
        // name: 'v-share',
        template: `<div>
            <input type="button" value="{{val_btn}}" @click="click_btn"/>
         </div>
        `,
        data: function() {
            return {
                val_btn: "哼哼哈嘿"
            }
        },
        methods: {
            click_btn: function() {
                alert("click_btn");
            }
        }
    }));
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Share);
}

// export default Share;