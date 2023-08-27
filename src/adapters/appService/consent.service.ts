import { postWithPath } from './../api.http';

import { formatResponse, getWithPath } from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import { message } from 'antd';

export function useConsent() {
  return {
    async getAllWithdrawList(): Promise<any> {
      const data = await getWithPath(API.CONSENT.GET.WITHDRAW_LIST);
      return formatResponse(data);
    },

    async approveWithdrawRequest(requestId: number): Promise<any> {
      const {data} = await postWithPath(API.CONSENT.POST.WITHDRAW_APPROVE, {}, { request_id: requestId });
      if (data.is_completed) {
        message.success(`Duyệt yêu cầu thành công!`);
        setTimeout(() => window.location.reload(), 1500);
      } else {
        message.error('Duyệt yêu cầu thất bại!');
      }
      return formatResponse(data);
    },
  };
}
