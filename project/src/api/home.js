/* 
  首页模块
*/
import request from '@/utils/request'

export function deviceList (data) {
  return request({
    url: '/Wxsite/Site/api',
    method: 'post',
    data:{
      api_name: 'siteList',
      ...data
    }
  })
}
//获取公告列表协议 getnotices.php
export function getnotices (data) {
  return request({
    url: '/getnotices.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//获取公告内容协议 notice.php?noticeid=100
export function notice (data) {
  return request({
    url: '/notice.php',
    method: 'post',
    data:{
      ...data
    }
  })
}
//获取首页内容
export function gethome (data) {
  return request({
    url: '/gethome.php',
    method: 'post',
    data:{
      ...data
    }
  })
}

//16、佣金提款 submittikuan.php
export function submittikuan (data) {
  return request({
    url: '/submittikuan.php ',
    method: 'post',
    data:{
      ...data
    }
  })
}


//14、（新）获取专家预测内容 getexppred.php 
export function getexppred (data) {
  return request({
    url: '/getexppred.php ',
    method: 'post',
    data:{
      ...data
    }
  })
}