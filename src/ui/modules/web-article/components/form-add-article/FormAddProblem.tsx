import React, { useCallback, useEffect, useState } from 'react';

import { Button, Form, Space } from 'antd';

import { useProblem } from '~/src/adapters/appService/problem.service';
import { useWebCategory } from '~/src/adapters/appService/webCategory.service';
import { Category } from '~/src/domain/category';
import { metaFormAddProblem } from '~/src/ui/modules/web-article/components/form-add-article/props';
import FormBuilder from '~/src/ui/shared/forms';
import Loading from '~/src/ui/shared/loading';
import moment from 'moment';

const DELIMITER_END_DESC = "##__END_DESCRIPTION__##";

function FormAddArticle({ id }) {
  const [form] = Form.useForm();
  const { getDetailProblem, createProblem: createWebArticle, updateProblem: updateWebArticle } =
    useProblem();
  const { getAllWebCategories } = useWebCategory();

  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSubmit = useCallback((values) => {
    // setLoading(true);
    const attachments = values.attachments ? JSON.stringify(values.attachments.filter((item => !item.status || item.status === "done")).map((({ name, url, uid, type }) => ({ name, url, uid, type })))) : "";
    const dataSubmit = {
      ...values,
      description: `${values.description}${DELIMITER_END_DESC}${attachments}`
    };
    delete dataSubmit.attachments;
    if (id) {
      dataSubmit.id = id;
      // const body = {...dataSubmit, createDate: moment.utc(dataSubmit.createDate), finishedDate: dataSubmit.finishedDate ? moment.utc(dataSubmit.finishedDate) : undefined};
      updateWebArticle(dataSubmit).then((res) => {
        setLoading(false);
      });
    } else {
      createWebArticle(dataSubmit).then((res) => {
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleGetMetaData = async () => {
      // const categoryData = await getAllWebCategories();
      // setCategories(categoryData);
      if (id) {
        const detailProblem = await getDetailProblem(id);
        // form.setFieldsValue({ ...detailProblem, createDate: moment.utc(detailProblem.createDate), finishedDate: detailProblem.finishedDate ? moment.utc(detailProblem.finishedDate) : undefined });
        const [description, attachments] = (detailProblem.description || "").split(DELIMITER_END_DESC);

        if (attachments?.length > 0) {
          form.setFieldValue("attachments", JSON.parse(attachments));
        } else form.setFieldValue("attachments", []);
        form.setFieldsValue({ ...detailProblem, createDate: moment(detailProblem.createDate), finishedDate: detailProblem.finishedDate ? moment(detailProblem.finishedDate) : undefined, description });

        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    handleGetMetaData();
  }, [id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Form form={form} onFinish={handleSubmit} className="site-page-content">
          <FormBuilder meta={metaFormAddProblem({ isEdit: !!id })} />
          <Form.Item className='button-submit' wrapperCol={{ offset: 2, span: 2 }}>
            <Space align="center">
              <Button type="primary" htmlType="submit" size="large">
                Lưu thông tin
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}
    </>
  );
}

export default FormAddArticle;
