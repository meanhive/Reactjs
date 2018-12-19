import { serverCall } from '../../modules/ServerCall'

export const getProfile = (id) => (dispatch, getState) => {
  if (!getState().token.token) return
  const token = getState().token.token
  let url=`/users/${token.user_id}`
  if(id){
    url=`/users/${id}`
  }
  dispatch(fetchProfileBegin())
    return serverCall({
      method:'get',
      url:url
    }).request
    .then( res => {
      dispatch(fetchProfileSuccess(res))
    })
    .catch(err=>{
      dispatch(fetchProfileFail(err))
    })
}
const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN
});

const fetchProfileSuccess = res => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: res
});

const fetchProfileFail = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: { error }
});
export const FETCH_PROFILE_BEGIN = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const getProfiles = (id_array) => (dispatch, getState) => {
  dispatch(fetchProfilesBegin())
  id_array.map(id=>{
    const url=`/users/${id}`
    return serverCall({
      method:'get',
      url:url
    }).request
    .then( res => {
      dispatch(fetchProfilesSuccess(res))
    })
    .catch(err=>{
      dispatch(fetchProfilesFail(err))
    })
  })
    
}
const fetchProfilesBegin = () => ({
  type: FETCH_PROFILES_BEGIN
});

const fetchProfilesSuccess = res => ({
  type: FETCH_PROFILES_SUCCESS,
  payload: res
});

const fetchProfilesFail = error => ({
  type: FETCH_PROFILES_FAILURE,
  payload: { error }
});
export const FETCH_PROFILES_BEGIN = 'FETCH_PROFILES_BEGIN';
export const FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS';
export const FETCH_PROFILES_FAILURE = 'FETCH_PROFILES_FAILURE';
