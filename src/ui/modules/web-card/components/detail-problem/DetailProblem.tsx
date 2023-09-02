import React, { useCallback, useEffect, useState } from 'react';

import { Button, Form, Space, Avatar, Comment, Tooltip, Menu, MenuProps } from 'antd';

import { useProblem } from '~/src/adapters/appService/problem.service';
import { useWebCategory } from '~/src/adapters/appService/webCategory.service';
import { Category } from '~/src/domain/category';
import FormBuilder from '~/src/ui/shared/forms';
import Loading from '~/src/ui/shared/loading';
import { Problem } from '~/src/domain/webArticle';
import { metaFormAddProblem } from './props';
import { formatDate, formatDateWithoutHour, formatNumber, formatStatus, getFirstLetterName } from '~/src/utils';
import { useSelector } from 'react-redux';
import { userSelector } from '~/src/adapters/redux/selectors/user';
import { AppstoreOutlined, MenuOutlined, SendOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function DetailProblem({ id }) {
  const [form] = Form.useForm();
  const { getDetailProblem, createProblem: createWebArticle, updateProblem: updateWebArticle } =
    useProblem();
  const { getAllWebCategories } = useWebCategory();

  const [loading, setLoading] = useState<boolean>(true);
  const [problem, setProblem] = useState<Problem>();

  const [categories, setCategories] = useState<Category[]>([]);
  const { name } = useSelector(userSelector);


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
        setProblem(detailProblem);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    handleGetMetaData();
  }, [id]);


  const firstName = name.split(' ').pop();

  const items = [
    getItem('', 'comment-actions', <MenuOutlined />, [
      getItem('Chỉnh sửa', 'edit'),
      getItem('Xoá', 'delete'),
    ]),
  ]

  return (
    <div className="detail-problem">
      {loading && !problem ? (
        <Loading />
      ) : (
        <Form form={form} onFinish={handleSubmit} className="site-page-problem">
          {/* <FormBuilder meta={metaFormAddProblem()} />
          <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
            <Space>
              <Button type="primary" htmlType="submit" size="large">
                Lưu thông tin
              </Button>
            </Space>
          </Form.Item> */}
          {problem && <><h1 className='problem-content-name'>{problem.name}</h1>
            <div className='problem-content'>
              <div className='problem-content_left'>
                <div>
                  <h3 className='problem-content-name-zone'>Đề bài:</h3>
                  <div dangerouslySetInnerHTML={{ __html: problem.description }}></div>
                </div>
                <div>
                  <h3 className='problem-content-name-zone'>Bài làm:</h3>
                  <FormBuilder meta={metaFormAddProblem()} />
                </div>
              </div>
              <div className='problem-content_right'>
                <div className='top'>
                  <Space align="end">

                    <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
                      <Button className='save' type="primary" htmlType="submit"   >
                        Lưu thông tin
                      </Button>

                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 2, span: 18 }}>

                      <Button type="primary" htmlType="button" danger>
                        Xoá bài toán
                      </Button>
                    </Form.Item>
                  </Space>


                  <div className="info-zone">
                    <div className="row">
                      {/* <img width="20" height="20" src={ProblemSolved} /> */}
                      <span className="title">Độ khó: </span>
                      <span>{problem?.difficulty}</span>
                    </div>

                    <div className="row">
                      {/* <img width="20" height="20" src={ProblemSolved} /> */}
                      <span className="title">Tiền: </span>
                      <span>{problem?.price && formatNumber(problem?.price)} đ</span>
                    </div>

                    <div className="row">
                      {/* <img width="20" height="20" src={ProblemSolved} /> */}
                      <span className="title">Tình trạng: </span>
                      <span>{problem?.status && formatStatus(problem?.status)}</span>
                    </div>

                    <div className="row">

                      <span className="title">Ngày tạo: </span>
                      <span>{formatDateWithoutHour(new Date(problem.createDate))}</span>
                    </div>

                    {problem.finishedDate && <div className="row">

                      <span className="title">Ngày hoàn thành: </span>
                      <span>{formatDateWithoutHour(new Date(problem.finishedDate))}</span>
                    </div>}
                  </div>
                </div>
                <div className='comment-list'>
                  {problem.comments.map((item, idx) => <Comment
                    // actions={actions}
                    // className={idx % 2 === 0 ? 'my-comment' : 'other-comment'}
                    author={<p style={{ fontWeight: '400', color: '#000000', fontSize: 14 }}>{item.user}</p>}
                    avatar={<Avatar style={{
                      backgroundColor: item.user !== firstName ? `rgb(245, 106, 0)` : `rgb(0,72,245)`,
                      verticalAlign: 'middle'
                    }} alt="avatar">{getFirstLetterName(firstName)}</Avatar>}
                    content={
                      <div className='menu-click'>
                        <p>
                          {item.content}


                        </p>
                        <Menu onClick={() => { }} style={{ width: 256 }} mode="vertical" items={items} />
                      </div>

                    }
                    datetime={
                      <p>
                        <span style={{ color: '#9c9d9f' }}>{formatDate(new Date(item.createDate))}</span>
                        {item.edited && <span className="edited">Đã chỉnh sửa</span>}
                      </p>
                    }
                  />)}

                  <div className='send-comment-zone'>
                    <Avatar style={{
                      backgroundColor: `rgb(0,72,245)`,
                      verticalAlign: 'middle'
                    }} alt="avatar">{getFirstLetterName(firstName)}</Avatar>
                    <textarea id="cmt-textarea" name="cmt-textarea" rows={2} cols={50} placeholder={"Gửi bình luận mới"} />
                    {/* <SendOutlined /> */}
                    <Tooltip title="Gửi bình luận">
                      <Button type="primary" shape="circle" icon={<SendOutlined />} />
                    </Tooltip>

                  </div>
                </div>

              </div>
            </div></>}
        </Form>
      )}
    </div>
  );
}

export default DetailProblem;
