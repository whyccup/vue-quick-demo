
import request from '@/api/request'

export function getAgentsList() {
  return request({
    url: `/agents`,
    method: 'get'
  })
}

export function getAgentsInfo(id) {
  return request({
    url: `/agents/${id}`,
    method: 'get'
  })
}

export function changeAgents(data) {
  return request({
    url: `/agents/${data.id}`,
    method: 'put',
    headers: {"Content-Type": "application/json"},
    data,
  })
}
