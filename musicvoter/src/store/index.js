import { createStore } from 'vuex'

export default createStore({
  state: {
    musics: [],
    musicTotalVotes: [],
    musicsAndVotes: [],
    tmp: "temp veri"
  },
  mutations: {
    fetchMusics(state, data){
      state.musics = data
    },
    fetchTotalMusicVotes(state, data){
      state.musicTotalVotes = data
      for(var i=0; i<state.musicTotalVotes.length; i++)
      {
        var d = state.musics[i]
        d['totalVote'] = state.musicTotalVotes[i].totalVote
        state.musicsAndVotes.push(d)
      }

      this.commit('controlSort')
    },
    upVoteMusicVote(state, musicId){
      state.musicTotalVotes.map((musicVote) => musicVote.musicId == musicId ? musicVote.totalVote += 1 :  musicVote.totalVote = musicVote.totalVote)
      state.musicsAndVotes.map((musicAndVote) => musicAndVote.musicId == musicId ? musicAndVote.totalVote += 1 :  musicAndVote.totalVote = musicAndVote.totalVote)
      this.commit('controlSort')
    },
    downVoteMusicVote(state, musicId){
      state.musicTotalVotes.map((musicVote) => musicVote.musicId == musicId ? musicVote.totalVote -= 1 :  musicVote.totalVote = musicVote.totalVote)
      state.musicsAndVotes.map((musicAndVote) => musicAndVote.musicId == musicId ? musicAndVote.totalVote -= 1 :  musicAndVote.totalVote = musicAndVote.totalVote)

      this.commit('controlSort')

    },
    controlSort(state){
      state.musicsAndVotes.sort((a,b) => b.totalVote - a.totalVote)
    },
    changeTmp(state, val){
      state.tmp = val
    }


  },
  actions: {
    fetchMusics({commit, dispatch}){
      fetch('https://localhost:5001/api/music')
        .then(res => res.json())
        .then(data => {
          commit('fetchMusics', data)
          dispatch('fetchTotalMusicVotes')
        })
    },
    fetchTotalMusicVotes({commit}){
      fetch('https://localhost:5001/api/musictotalvote')
        .then(res => res.json())
        .then(data => {
          commit('fetchTotalMusicVotes', data)
        })
    },
    upVoteMusicVote({commit}, musicId){

      commit('upVoteMusicVote', musicId['musicId'])

      fetch('https://localhost:5001/api/musictotalvote', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.musicTotalVotes[musicId['musicId'] - 1])
      })
      .then(data => {
        console.log('Success:', data)
      })
      .catch(err => console.log(err.message))

    },
    downVoteMusicVote({commit}, musicId){
      commit('downVoteMusicVote', musicId['musicId'])

      fetch('https://localhost:5001/api/musictotalvote', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.musicTotalVotes[musicId['musicId'] - 1])
      })
      .then(data => {
        console.log('Success:', data)
      })
      .catch(err => console.log(err.message))
      
    },
    changeTmp({commit}){
      commit('changeTmp', 'yeni değer')
    }
  },
  modules: {
  }
})
