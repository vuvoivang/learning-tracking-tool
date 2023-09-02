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
import { Comment } from "~/src/domain/comment";

export function useComment() {

  return {

    async createComment(body: {problemId: string; comment: string}): Promise<Comment> {
      const data = await postWithPath(
        `${API.COMMENT.POST.COMMENT}`,
        body,
        
      );
      if (data.type === ApiType.SUCCESS) {
        message.success(`Thêm bình luận thành công!`);
      } else {
        message.error(data.message);
      }
      return formatResponse(data);
    },

    async updateComment(body: {problemId: string; commentId: string; comment: string}): Promise<Comment> {
      const data = await putWithPath(
        `${API.COMMENT.PUT.COMMENT}`,
        body,
      );
      if (data.type === ApiType.SUCCESS) {
        message.success(`Chỉnh sửa bình luận thành công!`);
      } else {
        message.error(data.message);
      }
      return formatResponse(data);
    },
  };
}
