import { message } from "antd";
import { useNavigate } from "react-router-dom";

import {
  deleteWithPath,
  formatResponse,
  getWithPath,
  postWithPath,
  putWithPath,
} from "~/src/adapters/api.http";
import API from "~/src/constant/api";
import { ApiType } from "~/src/constant/new";
import { Problem } from "~/src/domain/webArticle";

export function useProblem() {
  const navigate = useNavigate();

  return {
    async getAllProblems(params): Promise<Problem[]> {
      const data = await getWithPath(API.WEB_ARTICLE.GET.ALL, params);
      return formatResponse(data);
    },

    async createProblem(body): Promise<Problem> {
      const data = await postWithPath(
        `${API.WEB_ARTICLE.POST.CREATE_ARTICLE}`,
        {},
        body
      );
      if (data.type === ApiType.SUCCESS) {
        message.success(`Tạo mới bài toán thành công!`);
        navigate("/problems/list");
      } else {
        message.error(data.message);
      }
      return formatResponse(data);
    },

    async getDetailProblem(id: number): Promise<Problem> {
      const data = await getWithPath(
        `${API.WEB_ARTICLE.GET.DETAIL}/${id}`,
        {}
      );
      return formatResponse(data);
    },

    async updateProblem(body): Promise<Problem> {
      const data = await putWithPath(
        `${API.WEB_ARTICLE.PUT.UPDATE_ARTICLE}/${body?.id}`,
        {},
        body
      );
      if (data.type === ApiType.SUCCESS) {
        message.success(`Cập nhật bài toán thành công!`);
        navigate("/problems/list");
      } else {
        message.error(data.message);
      }
      return formatResponse(data);
    },

    async deleteProblem(id): Promise<Problem> {
      const data = await deleteWithPath(
        `${API.WEB_ARTICLE.PUT.UPDATE_ARTICLE}/${id}`,
        {},
      );
      if (data.type === ApiType.SUCCESS) {
        message.success(`Xoá bài toán thành công!`);
        navigate("/problems/list");
      } else {
        message.error(data.message);
      }
      return formatResponse(data);
    },
  };
}
