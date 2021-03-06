import qs from 'qs'
import { blogMutations } from './enums'
import { clientApi } from '@/core/services/client'

export const actions = {
  async fetchData({ state, commit }) {
    const response = await clientApi.get(
      'blogs?' + qs.stringify(state.query, { arrayFormat: 'repeat' })
    )
    commit(blogMutations.SET.DATA, response.data.data, { root: true })
    // Fix total later
    commit(blogMutations.SET.TOTAL, response.data.total, { root: true })
    return response.data
  },
  async fetchMoreData() {
    const response = await clientApi.get('/blogs')
    return response
  },
  async fetchSingle(_, id) {
    const response = await clientApi.get('/blogs/' + id)
    return response
  },
  async submitSingle(_, form) {
    const response = await clientApi.post('/blogs', form)
    return response
  },
  async updateSingle(_, { id, form }) {
    const response = await clientApi.put('/blogs/' + id, form)
    return response
  },
  async deleteSingle(_, id) {
    const response = await clientApi.delete('/blogs/' + id)
    return response
  },
}
