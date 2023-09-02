import React, { useCallback, useEffect, useState } from 'react';

import { Button, Form, Space } from 'antd';

import { useProblem } from '~/src/adapters/appService/problem.service';
import { useWebCategory } from '~/src/adapters/appService/webCategory.service';
import { Category } from '~/src/domain/category';
import { metaFormAddProblem } from '~/src/ui/modules/web-article/components/form-add-article/props';
import FormBuilder from '~/src/ui/shared/forms';
import Loading from '~/src/ui/shared/loading';

function FormAddArticle({ id }) {
  const [form] = Form.useForm();
  const { getDetailProblem, createProblem: createWebArticle, updateProblem: updateWebArticle } =
    useProblem();
  const { getAllWebCategories } = useWebCategory();

  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSubmit = useCallback((values) => {
    setLoading(true);
    const dataSubmit = {
      ...values,
    };
    if (id) {
      dataSubmit.id = id;
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
        form.setFieldsValue(detailProblem);
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
          <FormBuilder meta={metaFormAddProblem()} />
          <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
            <Space>
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
