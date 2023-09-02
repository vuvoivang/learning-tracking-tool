import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getWithPath, postWithPath } from '~/src/adapters/api.http';
import { setAuthInfo } from '~/src/adapters/redux/actions/auth';
import { setUserInfo } from '~/src/adapters/redux/actions/user';

import { ResponseData } from '~/src/constant';
import API from '~/src/constant/api';
import { ApiType } from '~/src/constant/new';
import { ILoginResponseData, ISessionData } from '~/src/domain/auth';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return {
    async loginByAccount(data: {
      username: string;
      password: string;
    }): Promise<ResponseData<ILoginResponseData>> {
      const resp = await postWithPath(`${API.AUTH.POST.LOGIN}`, data);
      if (resp.type === ApiType.SUCCESS) {
        const auth = resp.data;
        localStorage.setItem('token', auth.token);
        dispatch(setAuthInfo(auth));
        message.success(resp.message);
        navigate('/admin/web-article/list');
      } else {
        message.error(resp.message);
      }
      return resp;
    },
    async checkSession(): Promise<ISessionData> {
      const resp: ISessionData = (await getWithPath(
        `${API.AUTH.GET.SESSION}`,
        {}
      )) as any;
      if (resp.name) {
        dispatch(setUserInfo(resp));
      } else {
        throw new Error(JSON.stringify(resp));
      }
      return resp;
    },
    async logout(): Promise<void> {
      // const resp = await getWithPath(`${API.AUTH.GET.LOGOUT}`);
      dispatch(
        setAuthInfo({
          name: '',
          roles: [],
        })
      );
      localStorage.removeItem('token');
      navigate('/admin/login');
    },
  };
}
