import { useNavigate } from 'react-router-dom';

import { formatResponse, getWithPath } from '~/src/adapters/api.http';
import API from '~/src/constant/api';

export function usePartner() {
  return {
    async getAllPartner(): Promise<any> {
      const data = await getWithPath(API.PARTNER.GET.PARTNER);
      return formatResponse(data);
    },
  };
}
