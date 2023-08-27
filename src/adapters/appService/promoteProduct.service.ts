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
import { PromoteProduct } from '~/src/domain/promote-product';

function usePromoteProduct() {
  const navigate = useNavigate();

  return {
    async getPromoteProducts(params: {
      app_type: AppType;
      product_type_id: PRODUCT_TYPE_ID;
    }): Promise<ResponseData<PromoteProduct[]>> {
      return getWithPath(API.PROMOTE_PRODUCT.GET, params);
    },

    async createPromoteProduct(body: PromoteProduct): Promise<PromoteProduct> {
      const data = await postWithPath(`${API.PROMOTE_PRODUCT.POST}`, {}, body);
      if (data.success) {
        navigate(ROUTE.PROMOTE_PRODUCT.LIST);
      }
      return formatResponse(data);
    },

    async getPromoteProduct(id: number): Promise<PromoteProduct> {
      const data = await getWithPath(`${API.PROMOTE_PRODUCT.GET}/${id}`, {});
      return formatResponse(data);
    },

    async updatePromoteProduct(body: PromoteProduct): Promise<PromoteProduct> {
      const data = await putWithPath(
        `${API.PROMOTE_PRODUCT.PUT}/${body?.id}`,
        {},
        body
      );
      if (data.success) {
        navigate(ROUTE.PROMOTE_PRODUCT.LIST);
      }
      return formatResponse(data);
    },
  };
}

export default usePromoteProduct;
