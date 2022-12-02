const { createApp } = Vue

createApp({
    data() {
        return {
            qT: 'quoteText goes here',
            qA: '',
            kanye: "Ball so hard that shit cray"
        }
    },
    methods: {
        async getQuote() {
            // const res = await fetch('https://itunes.apple.com/search?attribute=allArtistTerm&term=' + this.term)
            // const { results } = await res.json()
            const response = await fetch("https://api.goprogram.ai/inspiration");
            var data = await response.json();
            console.log(data);
            this.qT = data.quote
            this.qA = data.author
            const res = await fetch("https://api.kanye.rest");
            var ye = await res.json();
            console.log(ye);
            this.kanye = ye.quote


            // $.ajax({
            //     jsonp: "jsonp",
            //     dataType: "jsonp",
            //     url: "http://api.forismatic.com/api/1.0/",
            //     contentType: "application/jsonp",
            //     data: {
            //         lang: "en",
            //         method: "getQuote",
            //         format: 'jsonp'
            //     },
            //     success: function (data) {
            //         if (data.quoteAuthor == '') {
            //             data.quoteAuthor = "Unkown"
            //         }
            //         document.getElementById("quoteHere").innerHTML = "<q>" + data.quoteText + "</q>" + "<br> -" + data.quoteAuthor
            //     }
            // })
        },
    },
    beforeMount() {
        this.getQuote()
    },
}).mount('#qotd')