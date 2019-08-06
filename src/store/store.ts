import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { ITagsViewState } from './modules/tags-view'
import { IPermissionState } from './modules/permission'
Vue.use(Vuex);

export interface IRootState {
  app: IAppState
  user: IUserState
  tagsView: ITagsViewState
  permission: IPermissionState
}


export default new  Vuex.Store<IRootState>({})