import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  formatResponse,
  getWithPath,
  postWithPath,
  putWithPath,
} from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { AppType, ResponseData } from '~/src/constant';
import { CardProduct } from '~/src/domain/cardProduct';
import ROUTE from '~/src/constant/routes';
import { BannerType } from '~/src/constant/banner';
import { Banner } from '~/src/domain/banner';

function useBanner() {
  const navigate = useNavigate();

  return {
    async getBanners(params: {
      banner_app_type: AppType;
      banner_type: BannerType;
    }): Promise<ResponseData<any>> {
      return getWithPath(API.BANNER.GET, params);
    },

    async createBanner(body): Promise<Banner> {
      const data = await postWithPath(`${API.BANNER.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.BANNER.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async getBanner(id: number): Promise<Banner> {
      const data = await getWithPath(`${API.BANNER.PUT}/${id}`, {});
      return formatResponse(data);
    },

    async updateBanner(body): Promise<Banner> {
      const data = await putWithPath(`${API.BANNER.PUT}/${body?.id}`, {}, body);
      if (data.success) {
        message.success(`Cập nhật thành công!`);
        navigate(ROUTE.BANNER.LIST);
      } else {
        message.error('Cập nhật thất bại!');
      }
      return formatResponse(data);
    },
  };
}

export default useBanner;
