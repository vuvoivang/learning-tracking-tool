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
import ROUTE from '~/src/constant/routes';
import { Loan } from '~/src/domain/loan';

export function useLoan() {
  const navigate = useNavigate();

  return {
    async getLoans(): Promise<ResponseData<any>> {
      return getWithPath(API.LOAN.GET);
    },

    async create(body): Promise<Loan> {
      const data = await postWithPath(`${API.LOAN.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.CARD.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async get(id: number): Promise<Loan> {
      const data = await getWithPath(`${API.LOAN.PUT}/${id}`, {});
      return formatResponse(data);
    },

    async update(body): Promise<Loan> {
      const data = await putWithPath(`${API.LOAN.PUT}/${body?.id}`, {}, body);
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
