import { createStore } from 'vuex'

export default createStore({
  state: {
    musics: [],
    musicTotalVotes: [],
    tmp: "temp veri"
  },
  mutations: {
    fetchMusics(state, data){
      state.musics = data
    },
    fetchTotalMusicVotes(state, data){
      state.musicTotalVotes = data
    },
    upVoteMusicVote(state, musicId){
      state.musicTotalVotes[musicId].totalVote += 1
    },
    downVoteMusicVote(state, musicId){
      state.musicTotalVotes[musicId].totalVote -= 1

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
        })
      dispatch('fetchTotalMusicVotes')
    },
    fetchTotalMusicVotes({commit}){
      fetch('https://localhost:5001/api/musictotalvote')
        .then(res => res.json())
        .then(data => commit('fetchTotalMusicVotes', data))
    },
    upVoteMusicVote({commit}, musicId){

      commit('upVoteMusicVote', musicId['musicId'] - 1)

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
      commit('downVoteMusicVote', musicId['musicId'] -1)

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
