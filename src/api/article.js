import request from '@/utils/request'

export function getArticles(page, size) {
  return request({
    url: '/articles',
    method: 'get',
    params: {
      page: page,
      size: size
    }
  })
}
