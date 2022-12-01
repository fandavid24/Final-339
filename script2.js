const { createApp } = Vue

createApp({
    data() {
        return {
            qT: 'quoteText goes here',
            qA: '',
        }
    },
    methods: {
        async getQuote() {
            // const res = fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en', { mode: 'no-cors' })
            // console.log(res)
            $.ajax({
                jsonp: "jsonp",
                dataType: "jsonp",
                url: "http://api.forismatic.com/api/1.0/",
                contentType: "application/jsonp",
                data: {
                    lang: "en",
                    method: "getQuote",
                    format: 'jsonp'
                },
                success: function (data) {
                    document.getElementById("quoteHere").innerHTML = "<q>" + data.quoteText + "</q>" + "<br> -" + data.quoteAuthor
                }
            })
        },
    },
    beforeMount() {
        this.getQuote()
    },
}).mount('#qotd')