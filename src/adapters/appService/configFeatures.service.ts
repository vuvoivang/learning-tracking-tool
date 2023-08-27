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
import { ConfigFeature } from '~/src/domain/config-feature';

function useConfigFeatures() {
  const navigate = useNavigate();

  return {
    async getConfigFeatures(params: {
      app_type: AppType;
      product_type_id: PRODUCT_TYPE_ID;
    }): Promise<ResponseData<ConfigFeature[]>> {
      return getWithPath(API.CONFIG_FEATURES.GET, params);
    },

    async createConfigFeature(body: ConfigFeature): Promise<ConfigFeature> {
      const data = await postWithPath(`${API.CONFIG_FEATURES.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.CONFIG_FEATURE.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async getConfigFeature(id: number): Promise<ConfigFeature> {
      const data = await getWithPath(`${API.CONFIG_FEATURES.GET}/${id}`, {});
      return formatResponse(data);
    },

    async updateConfigFeature(body: ConfigFeature): Promise<ConfigFeature> {
      const data = await putWithPath(
        `${API.CONFIG_FEATURES.PUT}/${body?.id}`,
        {},
        body
      );
      if (data.success) {
        message.success(`Cập nhật thành công!`);
        navigate(ROUTE.CONFIG_FEATURE.LIST);
      } else {
        message.error('Cập nhật thất bại!');
      }
      return formatResponse(data);
    },
  };
}

export default useConfigFeatures;
