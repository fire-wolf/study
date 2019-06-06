import axios from 'axios'
import Qs from 'qs'
import {baseUrl} from './index'

const getMenuList = params => { return axios.get(`${baseUrl}/getMenuList`, { params: params }).then(res => res.data); };


export default{
	getMenuList
}