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
import { CardProduct } from '~/src/domain/cardProduct';
import ROUTE from '~/src/constant/routes';

export function useCard() {
  const navigate = useNavigate();

  return {
    async getCards(): Promise<ResponseData<any>> {
      return getWithPath(API.CARD.GET);
    },

    async createCard(body): Promise<CardProduct> {
      const data = await postWithPath(`${API.CARD.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.CARD.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async getCard(id: number): Promise<CardProduct> {
      const data = await getWithPath(`${API.CARD.PUT}/${id}`, {});
      return formatResponse(data);
    },

    async updateCard(body): Promise<CardProduct> {
      const data = await putWithPath(`${API.CARD.PUT}/${body?.id}`, {}, body);
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
