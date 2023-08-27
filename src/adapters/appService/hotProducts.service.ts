import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  formatResponse,
  getWithPath,
  postWithPath,
  putWithPath,
} from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { AppType, PRODUCT_TYPE_ID, ResponseData } from '~/src/constant';
import ROUTE from '~/src/constant/routes';
import { HotProduct } from '~/src/domain/hot-product';

function useHotProducts() {
  const navigate = useNavigate();

  return {
    async getHotProducts(params: {
      app_type: AppType;
      product_type_id: PRODUCT_TYPE_ID;
    }): Promise<ResponseData<HotProduct[]>> {
      return getWithPath(API.HOT_PRODUCTS.GET, params);
    },

    async createHotProduct(body: HotProduct): Promise<HotProduct> {
      const data = await postWithPath(`${API.HOT_PRODUCTS.POST}`, {}, body);
      if (data.success) {
        navigate(ROUTE.HOT_PRODUCT.LIST);
      }
      return formatResponse(data);
    },

    async getHotProduct(id: number): Promise<HotProduct> {
      const data = await getWithPath(`${API.HOT_PRODUCTS.GET}/${id}`, {});
      return formatResponse(data);
    },

    async updateHotProduct(body: HotProduct): Promise<HotProduct> {
      const data = await putWithPath(
        `${API.HOT_PRODUCTS.PUT}/${body?.id}`,
        {},
        body
      );
      if (data.success) {
        navigate(ROUTE.HOT_PRODUCT.LIST);
      }
      return formatResponse(data);
    },
  };
}

export default useHotProducts;
