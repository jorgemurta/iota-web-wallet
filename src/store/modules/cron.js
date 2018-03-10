import collect from 'collect.js'

export default {
  namespaced: true,
  state: {
    jobs: collect([])
  },
  mutations: {
    add (state, job) {
      let existingJob = state.jobs.firstWhere('key', job.key)

      if (existingJob) {
        existingJob.intervals.push(job.interval)
        return
      }

      state.jobs.push({
        key: job.key,
        intervals: [job.interval]
      })
    },
    remove (state, key) {
      let job = state.jobs.firstWhere('key', key)

      if (!job) {
        return
      }

      job.intervals.forEach((intervalId) => {
        clearInterval(intervalId)
      })

      state.jobs.forget(job)
    }
  },
  actions: {
    start ({commit}, {key, handler, every = 1}) {
      const interval = setInterval(handler, every * 1000)
      const job = {
        key,
        interval
      }
      commit('add', job)
    },

    stop ({commit}, key) {
      commit('remove', key)
    }
  }
}
