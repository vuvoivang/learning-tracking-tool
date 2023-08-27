import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  formatResponse,
  getWithPath,
  putWithPath,
} from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { ResponseData } from '~/src/constant';
import ROUTE from '~/src/constant/routes';
import { Bank } from '~/src/domain/bank';

export function useBank() {
  const navigate = useNavigate();

  return {
    async getBanks(): Promise<ResponseData<any>> {
      const data = await getWithPath(API.BANK.GET);
      return formatResponse(data);
    },

    async getBank(id: number): Promise<Bank> {
      const data = await getWithPath(`${API.BANK.PUT}/${id}`, {});
      return formatResponse(data);
    },

    async updateBank(body): Promise<Bank> {
      const data = await putWithPath(`${API.BANK.PUT}/${body?.id}`, {}, body);
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
