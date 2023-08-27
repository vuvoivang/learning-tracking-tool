import { formatResponse, getWithPath } from '~/src/adapters/api.http';
import API from '~/src/constant/api';
import {
  IDataDownloadReportEkyc,
  IDataDownloadReportInsurance,
} from '~/src/domain/report';

export function useMobileReport() {
  return {
    async getReportInsurance(
      params: IDataDownloadReportInsurance
    ): Promise<any> {
      const data = await getWithPath(API.MOBILE_REPORT.GET.INSURANCE, params, {
        responseType: 'arraybuffer',
      });
      return data;
    },
    async getReportEkyc(params: IDataDownloadReportEkyc): Promise<any> {
      const data = await getWithPath(API.MOBILE_REPORT.GET.EKYC, params, {
        responseType: 'arraybuffer',
      });
      return data;
    },
  };
}
