import {act} from 'react-test-renderer';

initialstate = {
  isFetching: false,
  LogoutDetails: [],
  UserDetails: [],
  StainDetails: [],
  CaseStudyDetails: [],
  RegisterDetails: [],
  VersionDetails: [],
  EditProfileDetails: [],
  ForgotPasswordDetails: [],
  ChangePassword: [],
  getEditDetails: [],
  VideoDetails: [],
  GetSubscribeDetails: '',
  AppDetails: [],
  StainPagesDetails: [],
  StainPost: [],
  StainDefination: [],
  NotificationDetails: [],
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case 'User_Login_Request':
      return {...state, isFetching: true};
    case 'User_Login_Success':
      return {...state, isFetching: false, UserDetails: action.payload};
    case 'User_Login_Error':
      return {...state, isFetching: false};
    // SubScribe
    case 'User_SubScribeDetails_Request':
      return {...state, isFetching: true};
    case 'User_SubScribeDetails_Success':
      return {...state, isFetching: false, GetSubscribeDetails: action.payload};
    case 'User_SubScribeDetails_Error':
      return {...state, isFetching: false};

    case 'User_Stain_Request':
      return {...state, isFetching: true};
    case 'User_Stain_Success':
      return {...state, isFetching: false, StainDetails: action.payload};
    case 'User_Stain_Error':
      return {...state, isFetching: false};

    case 'User_CaseStudy_Request':
      return {...state, isFetching: true};
    case 'User_CaseStudy_Success':
      return {...state, isFetching: false, CaseStudyDetails: action.payload};
    case 'User_CaseStudy_Error':
      return {...state, isFetching: false};

    //App Details
    case 'User_App_Request':
      return {...state, isFetching: true};
    case 'User_App_Success':
      return {...state, isFetching: false, AppDetails: action.payload};
    case 'User_App_Error':
      return {...state, isFetching: false};

    case 'User_Video_Request':
      return {...state, isFetching: true};
    case 'User_Video_Success':
      return {...state, isFetching: false, VideoDetails: action.payload};
    case 'User_Video_Error':
      return {...state, isFetching: false};

    case 'User_Register_Request':
      return {...state, isFetching: true};
    case 'User_Register_Success':
      return {...state, isFetching: false, RegisterDetails: action.payload};
    case 'User_Register_Error':
      return {...state, isFetching: false};

    case 'User_Logout_Request':
      return {...state, isFetching: true};
    case 'User_Logout_Success':
      return {...state, isFetching: false, LogoutDetails: action.payload};
    case 'User_Logout_Error':
      return {...state, isFetching: false};

    case 'User_Forgot_Password_Request':
      return {...state, isFetching: true};
    case 'User_Forgot_Password_Success':
      return {
        ...state,
        isFetching: false,
        ForgotPasswordDetails: action.payload,
      };
    case 'User_Forgot_Password_Error':
      return {...state, isFetching: false};

    case 'User_Edit_Profile_Request':
      return {...state, isFetching: true};
    case 'User_Edit_Profile_Success':
      return {...state, isFetching: false, EditProfileDetails: action.payload};
    case 'User_Edit_Profile_Error':
      return {...state, isFetching: false};

    case 'User_Get_Edit_Profile_Request':
      return {...state, isFetching: true};
    case 'User_Get_Edit_Profile_Success':
      return {...state, isFetching: false, getEditDetails: action.payload};
    case 'User_Get_Edit_Profile_Error':
      return {...state, isFetching: false};

    case 'User_Change_Password_Request':
      return {...state, isFetching: true};
    case 'User_Change_Password_Success':
      return {...state, isFetching: false, ChangePassword: action.payload};
    case 'User_Change_Password_Error':
      return {...state, isFetching: false};

    case 'User_Version_Request':
      return {...state, isFetching: true};
    case 'User_Version_Success':
      return {...state, isFetching: false, VersionDetails: action.payload};
    case 'User_Version_Error':
      return {...state, isFetching: false};
    //comman Stain Pages
    case 'User_StainPages_Request':
      return {...state, isFetching: true};
    case 'User_StainPages_Success':
      return {...state, isFetching: false, StainPagesDetails: action.payload};
    case 'User_StainPages_Error':
      return {...state, isFetching: false};

    //comman Stain post
    case 'User_StainPost_Request':
      return {...state, isFetching: true};
    case 'User_StainPost_Success':
      return {...state, isFetching: false, StainPost: action.payload};
    case 'User_StainPost_Error':
      return {...state, isFetching: false};

    //comman Stain defination
    case 'User_StainDefination_Request':
      return {...state, isFetching: true};
    case 'User_StainDefination_Success':
      return {...state, isFetching: false, StainDefination: action.payload};
    case 'User_StainDefination_Error':
      return {...state, isFetching: false};

    case 'User_Notification_Request':
      return {...state, isFetching: true};
    case 'User_Notification_Success':
      return {...state, isFetching: false, NotificationDetails: action.payload};
    case 'User_Notification_Error':
      return {...state, isFetching: false};

    default:
      return state;
  }
};
