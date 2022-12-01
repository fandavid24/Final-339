const { createApp } = Vue

createApp({
  data() {
    return {
      term: '',
      origin: [],
      data: [],
      shown: [],
      genres: [{
        'genre': "ALL",
        'clicked': true
      }],
      shownGenres: new Set(),
      sort: [true, false, false]
    }
  },
  methods: {
    async searchArtist() {
      const res = await fetch('https://itunes.apple.com/search?entity=song&attribute=artistTerm&term=' + this.term)
      const { results } = await res.json()
      this.data = results
      this.shown = results
      this.origin = [...results]
      console.log(this.data)
      // console.log(genreFilter)
      // console.log(this.genres)
    },
    sortBy(index) {
      if (index == 0) {
        this.sort[0] = true
        this.sort[1] = false
        this.sort[2] = false
        this.data = [...this.origin]
        this.render()
      }
      else if (index == 1) {
        this.sort[0] = false
        this.sort[1] = true
        this.sort[2] = false
        this.data.sort((a, b) => {
          if (a['collectionName'] < b['collectionName']) { return -1 }
          if (a['collectionName'] > b['collectionName']) { return 1 }
          return 0
        })
        this.render()
      }
      else if (index == 2) {
        this.sort[0] = false
        this.sort[1] = false
        this.sort[2] = true
        this.data.sort((a, b) => {
          if (a['collectionPrice'] < b['collectionPrice']) { return -1 }
          if (a['collectionPrice'] > b['collectionPrice']) { return 1 }
          return 0
        })
        this.render()
      }
    },
    render() {
      this.shown = this.data
    }
  },
}).mount('#app')