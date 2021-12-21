new Vue({
    el: '#app',
    data: {
        message: 'HelloWorld!!',
        // 三項演算子
        ok: true
    },
    methods: {
        reverseMessage: function () {
            this.message =
                this.message.split('').reverse().join('')
        },
        sayHi: function () {
            return 'Hi'
        }
    },
})