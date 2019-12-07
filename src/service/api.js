import axios from 'axios'
axios.defaults.baseURL = ''

const api = {
  async get(url, data) {
    try {
      let res = await axios.get(url, { params: data })
      res = res.data
      return new Promise((resolve) => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },

  async post(url, data) {
    try {
      let res = await axios.post(url, data)
      res = res.data
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(url, data) {
    try {
      let res = await axios.delete(url, data)
      res = res.data
      return new Promise((resolve) => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export default api
