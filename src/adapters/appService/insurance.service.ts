import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  formatResponse,
  getWithPath,
  postWithPath,
  putWithPath,
} from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { ResponseData } from '~/src/constant';
import { Insurance } from '~/src/domain/insurance';
import ROUTE from '~/src/constant/routes';

export function useInsurance() {
  const navigate = useNavigate();

  return {
    async getInsurance(): Promise<ResponseData<any>> {
      return getWithPath(API.INSURANCE.GET);
    },

    async create(body): Promise<Insurance> {
      const data = await postWithPath(`${API.INSURANCE.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.CARD.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async get(id: number): Promise<Insurance> {
      const data = await getWithPath(`${API.INSURANCE.PUT}/${id}`, {});
      return formatResponse(data);
    },

    async update(body): Promise<Insurance> {
      const data = await putWithPath(
        `${API.INSURANCE.PUT}/${body?.id}`,
        {},
        body
      );
      if (data.success) {
        message.success(`Cập nhật thành công!`);
        navigate(ROUTE.CARD.LIST);
      } else {
        message.error('Cập nhật thất bại!');
      }
      return formatResponse(data);
    },
  };
}
