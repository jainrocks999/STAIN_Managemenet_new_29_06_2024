//Import NPM File

import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../../component/storage';
import Toast from 'react-native-simple-toast';

//Login
function* doLogin(action) {
  const data = new FormData();
  data.append('username', action.Username);
  data.append('password', action.Password);

  const res = yield call(Api.fetchDataByPOST, action.url, data);

  const formatRes = JSON.parse(res);

  //const id = JSON.stringify(formatRes.user_id);

  if (formatRes.status == 'true') {
    yield put({
      type: 'User_Login_Success',
      payload: formatRes,
    });

    // console.log('formatRes.lastname', formatRes);
    if (formatRes.url == '') {
      AsyncStorage.setItem(storage.Email, formatRes.email);
      AsyncStorage.setItem(storage.Name, formatRes.name);
      AsyncStorage.setItem(storage.UserId, id);
      AsyncStorage.setItem(storage.Lastname, formatRes.lastname);
      AsyncStorage.setItem(storage.Username, formatRes.username);

      Toast.show(formatRes.message);
      action.props.navigation.replace('Home');
    } else {
      AsyncStorage.setItem(storage.Url, formatRes.url);
    }
  } else {
    AsyncStorage.setItem(storage.Url, '');
    AsyncStorage.setItem(storage.Wrong, 'worng');

    Toast.show('Please Enter Valid Username and Password');
    yield put({
      type: 'User_Login_Error',
    });
  }
}

//Register
function* doRegister(action) {
  const data = new FormData();
  data.append('username', action.Email);
  data.append('email', action.Email);
  data.append('password', action.Password);
  data.append('name', action.Name);
  data.append('lastname', action.LastName);

  const res = yield call(Api.fetchDataByPOST, action.url, data);
  const formatRes = JSON.parse(res);
  if (formatRes.status == 200) {
    action.props.navigate('Login');
    Toast.show(formatRes.message);
    yield put({
      type: 'User_Register_Success',
      payload: formatRes,
    });
  } else {
    Toast.show(formatRes.message);
    yield put({
      type: 'User_Register_Error',
    });
  }
}
//getEditProfile()
function* doGetEditProfile(action) {
  const response = yield call(Api.fetchDataByPOSTValue, action.url);

  const formatedResponse = JSON.parse(response);

  if (formatedResponse.status == 'true') {
    AsyncStorage.setItem(storage.Email, formatedResponse.email);
    AsyncStorage.setItem(storage.Name, formatedResponse.name);
    AsyncStorage.setItem(storage.Lastname, formatedResponse.lastname);
    AsyncStorage.setItem(storage.Username, formatedResponse.username);
    yield put({
      type: 'User_Get_Edit_Profile_Success',
      payload: formatedResponse,
    });

    // Toast.show(formatedResponse.message);
  } else {
    Toast.show(formatedResponse.message);

    yield put({
      type: 'User_Get_Edit_Profile_Error',
    });
  }
}

//Getsubscribe
function* doGetSubScribe(action) {
  const response = yield call(Api.fetchDataByGETValue, action.url);

  const formatedResponse = JSON.parse(response);

  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_SubScribeDetails_Success',
      payload: formatedResponse,
    });
    // Toast.show(formatedResponse.message);
  } else {
    // Toast.show(formatedResponse.message);

    yield put({
      type: 'User_SubScribeDetails_Error',
    });
  }
}

//EditProfile
function* doEditProfile(action) {
  const data = new FormData();
  data.append('user_id', action.userId);
  data.append('username', action.username);
  data.append('name', action.name);
  data.append('lastname', action.lastname);
  data.append('email', action.email);
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  const formatedResponse = JSON.parse(response);
  if (formatedResponse.status == 200) {
    yield put({
      type: 'User_Edit_Profile_Success',
      payload: formatedResponse.data,
    });
    Toast.show(formatedResponse.message);
  } else {
    Toast.show(formatedResponse.message);

    yield put({
      type: 'User_Edit_Profile_Error',
    });
  }
}
function* doForgot(action) {
  const data = new FormData();
  data.append('email', action.email);
  const res = yield call(Api.fetchDataByPOST, action.url, data);

  const formatRes = JSON.parse(res);
  // if (res == '') {
  //   Toast.show('empty', formatRes);
  // }
  // else
  if (formatRes.status == 200) {
    yield put({
      type: 'User_Forgot_Password_Success',
      payload: formatRes,
    });
    // Toast.show('new password setted');
    Toast.show(formatRes.message);
  } else {
    Toast.show(formatRes.message);
    yield put({
      type: 'User_Forgot_Password_Error',
    });
  }
}

//List
function* doStain(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response);

  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_Stain_Success',
      payload: formatedResponse.data,
    });
  } else {
    yield put({
      type: 'User_Stain_Error',
    });
  }
}
//Pages
function* doStainPage(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response);
  // console.log('respo222::::', JSON.stringify(formatedResponse.data));

  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_StainPages_Success',
      payload: formatedResponse.data,
    });
  } else {
    yield put({
      type: 'User_StainPages_Error',
    });
  }
}

//PostPages
function* doStainPost(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  // const formatedResponse = JSON.parse(response);

  if (response.status == 'true') {
    yield put({
      type: 'User_StainPost_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'User_StainPost_Error',
    });
  }
}
//PostPages
function* doStainDefination(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  // const formatedResponse = JSON.parse(response);
  console.log('definition : ', response.data);
  if (response.status == 'true') {
    yield put({
      type: 'User_StainDefination_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'User_StainDefination_Error',
    });
  }
}

//CaseStudy
function* doCaseStudy(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  if (response.status == true) {
    yield put({
      type: 'User_CaseStudy_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'User_CaseStudy_Error',
    });
  }
}

//AppDetail
function* doAppDetail(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  if (response.status == true) {
    yield put({
      type: 'User_App_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'User_App_Error',
    });
  }
}

//Video
function* doVideo(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  if (response.status == true) {
    yield put({
      type: 'User_Video_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'User_Video_Error',
    });
  }
}

//Logout
function* doLogout(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response);
  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_Logout_Success',
      payload: formatedResponse.data,
    });
  }
}

//Version
function* doVersion(action) {
  const response = yield call(Api.fetchDataByGET, action.url);

  if (response == '') {
    yield put({
      type: 'User_Version_Success',
      payload: response,
    });
    AsyncStorage.setItem(storage.Android_Version, formatRes.android_version);
    AsyncStorage.setItem(storage.ios_Version, formatRes.ios_version);
  } else {
    yield put({
      type: 'User_Version_Error',
    });
  }
}
//Change_Password
function* doChangePassword(action) {
  const data = new FormData();
  data.append('userId', action.Id);
  data.append('oldpassword', action.Old);
  data.append('newpassword', action.New);
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  const formatedResponse = JSON.parse(response);
  if (formatedResponse.status == 200) {
    yield put({
      type: 'User_Change_Password_Success',
      payload: formatedResponse,
    });
    Toast.show(formatedResponse.message);
  } else {
    Toast.show(formatedResponse.message);
    yield put({
      type: 'User_Change_Password_Error',
    });
  }
}

//Notification
function* getNotifications(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response);

  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_Notification_Success',
      payload: formatedResponse.data,
    });
  } else {
    yield put({
      type: 'User_Notification_Error',
    });
  }
}
export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Stain_Request', doStain);
  yield takeEvery('User_CaseStudy_Request', doCaseStudy);
  yield takeEvery('User_App_Request', doAppDetail);
  yield takeEvery('User_Video_Request', doVideo);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_Logout_Request', doLogout);
  yield takeEvery('User_Version_Request', doVersion);
  yield takeEvery('User_Edit_Profile_Request', doEditProfile);
  yield takeEvery('User_Forgot_Password_Request', doForgot);
  yield takeEvery('User_Change_Password_Request', doChangePassword);
  yield takeEvery('User_Get_Edit_Profile_Request', doGetEditProfile);
  yield takeEvery('User_SubScribeDetails_Request', doGetSubScribe);
  yield takeEvery('User_StainPages_Request', doStainPage);
  yield takeEvery('User_StainPost_Request', doStainPost);
  yield takeEvery('User_StainDefination_Request', doStainDefination);
  yield takeEvery('User_Notification_Request', getNotifications);
}
