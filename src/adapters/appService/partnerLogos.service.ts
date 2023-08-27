import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  formatResponse,
  getWithPath,
  postWithPath,
  putWithPath,
} from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { AppType, LOGO_TYPE, ResponseData } from '~/src/constant';
import ROUTE from '~/src/constant/routes';
import { PartnerLogo } from '~/src/domain/partner-logo';

function usePartnerLogos() {
  const navigate = useNavigate();

  return {
    async getPartnerLogos(params: {
      app_type: AppType;
      logo_type: LOGO_TYPE;
    }): Promise<ResponseData<PartnerLogo[]>> {
      return getWithPath(API.PARTNER_LOGOS.GET, params);
    },

    async createPartnerLogo(body: PartnerLogo): Promise<PartnerLogo> {
      const data = await postWithPath(`${API.PARTNER_LOGOS.POST}`, {}, body);
      if (data.success) {
        message.success(`Tạo mới thành công!`);
        navigate(ROUTE.PARTNER_LOGO.LIST);
      } else {
        message.error('Tạo mới thất bại!');
      }
      return formatResponse(data);
    },

    async getPartnerLogo(id: number): Promise<PartnerLogo> {
      const data = await getWithPath(`${API.PARTNER_LOGOS.GET}/${id}`, {});
      return formatResponse(data);
    },

    async updateHotProduct(body: PartnerLogo): Promise<PartnerLogo> {
      const data = await putWithPath(
        `${API.PARTNER_LOGOS.PUT}/${body?.id}`,
        {},
        body
      );
      if (data.success) {
        message.success(`Cập nhật thành công!`);
        navigate(ROUTE.PARTNER_LOGO.LIST);
      } else {
        message.error('Cập nhật thất bại!');
      }
      return formatResponse(data);
    },
  };
}

export default usePartnerLogos;
