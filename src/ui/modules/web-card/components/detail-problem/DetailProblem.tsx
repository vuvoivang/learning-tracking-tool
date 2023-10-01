import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Form, Space, Avatar, Comment, Tooltip, Menu, MenuProps, Popconfirm } from 'antd';

import { useProblem } from '~/src/adapters/appService/problem.service';
import { useWebCategory } from '~/src/adapters/appService/webCategory.service';
import { Category } from '~/src/domain/category';
import FormBuilder from '~/src/ui/shared/forms';
import Loading from '~/src/ui/shared/loading';
import { Problem } from '~/src/domain/webArticle';
import { metaFormAddProblem, metaFormDescription } from './props';
import { formatDate, formatDateWithoutHour, formatNumber, formatStatus, getFirstLetterName } from '~/src/utils';
import { useSelector } from 'react-redux';
import { userSelector } from '~/src/adapters/redux/selectors/user';
import { AppstoreOutlined, MenuOutlined, SendOutlined } from '@ant-design/icons';
import { authSelector } from '~/src/adapters/redux/selectors/auth';
import Modal from 'antd/lib/modal/Modal';
import { useComment } from '~/src/adapters/appService/comment.service';

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
  const { getDetailProblem, createProblem, updateProblem, deleteProblem } =
    useProblem();
  const { createComment, updateComment } = useComment();

  const [loading, setLoading] = useState<boolean>(true);
  const [problem, setProblem] = useState<Problem>();

  const [categories, setCategories] = useState<Category[]>([]);
  const { name } = useSelector(userSelector);


  const handleSubmit = useCallback((values) => {

    setLoading(true);
    const dataSubmit = {
      ...problem,
      ...values,
    };
    if (id) {
      dataSubmit.id = id;
      updateProblem(dataSubmit).finally(() => {
        setLoading(false);
      });
    }
  }, [problem]);

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
  const isAdmin = localStorage.getItem('isAdmin') == "true";

  // const [openModalDelete, setOpenModalDelete] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);

  // const showModalDelete = () => {
  //   setOpenModalDelete(true);
  // };

  // const handleOk = () => {
  //   setConfirmLoading(true);
  //   setOpenModalDelete(false);
  // };

  // const handleCancel = () => {
  //   setOpenModalDelete(false);
  // };

  const handleDelete = () => {
    setLoading(true);
    if (id) {
      deleteProblem(id).finally(() => {
        setLoading(false);
      });
    }
  }

  const handleAddComment = () => {
    const content = document.getElementById('cmt-textarea')?.value || '';
    if (content) {
      createComment({
        comment: content,
        problemId: id
      }).then((res) => {
        const newProblem = { ...problem };
        newProblem.comments && newProblem.comments.push(res.data);
        setProblem(newProblem);
        document.getElementById('cmt-textarea')!.value = '';
      })
    }
  }
  const textAreRef = useRef();
  const cmtListRef = useRef();
  useEffect(() => {
    setTimeout(() => { // auto scroll to textarea when long list comment
      // console.log(cmtListRef.current, textAreRef.current)
      if (cmtListRef.current && textAreRef.current) {
        // console.log(textAreRef.current.getBoundingClientRect().top);
        cmtListRef.current.scrollTop = textAreRef.current.getBoundingClientRect().top;
      }
    }, 500)
  }, [])

  useEffect(() => {
    const prevTitle = document.title
    if(problem?.name) document.title = problem.name;
    return () => {
      document.title = prevTitle
    }
  }, [problem?.name])

  const isReadonlySolution = !isAdmin && problem?.status === 1;

  return (
    <div>
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
                  <div className='problem-content_left_statement'>
                    <h3 className='problem-content-name-zone'>Đề bài:</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: problem.description }}></div> */}
                    <FormBuilder meta={metaFormDescription()} />
                  </div>
                  <div>
                    <h3 className='problem-content-name-zone'>Bài làm:</h3>
                    <FormBuilder meta={metaFormAddProblem({isReadonlySolution})} />
                  </div>
                </div>
                <div className='problem-content_right'>
                  <div className='top'>
                    <Space align="end">

                      {!isReadonlySolution && <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
                        <Button className='save' type="primary" htmlType="submit"   >
                          {problem.solution ? "Lưu bài giải" : "Nộp bài"}
                        </Button>

                      </Form.Item>}
                      {isAdmin && <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
                        <Popconfirm
                          title={`Bạn có chắc muốn xoá bài toán này?`}
                          okText="Xoá"
                          cancelText="Huỷ"
                          onConfirm={handleDelete}
                        >
                          <Button type="primary" htmlType="button" danger>
                            Xoá bài toán
                          </Button>
                        </Popconfirm>

                      </Form.Item>}
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
                        <span>{problem?.status !== undefined && formatStatus(problem?.status)}</span>
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
                  <div className='comment-list' ref={cmtListRef}>
                    {problem.comments.map((item, idx) => <Comment
                      // actions={actions}
                      // className={idx % 2 === 0 ? 'my-comment' : 'other-comment'}
                      author={<p style={{ fontWeight: '400', color: '#000000', fontSize: 14 }}>{item.user}</p>}
                      avatar={<Avatar style={{
                        backgroundColor: item.user !== firstName ? `rgb(245, 106, 0)` : `rgb(0,72,245)`,
                        verticalAlign: 'middle'
                      }} alt="avatar">{getFirstLetterName(item.user)}</Avatar>}
                      content={
                        <div className='menu-click'>
                          <p style={{ wordBreak: 'break-all', wordWrap: "break-word" }}>
                            {item.content}
                          </p>
                          {/* <Menu onClick={() => { }} style={{ width: 256 }} mode="vertical" items={items} /> */}
                        </div>

                      }
                      datetime={
                        <p>
                          <span style={{ color: '#9c9d9f' }}>{formatDate(new Date(item.edited ? item.createDate : item.lastEditDate))}</span>
                          {item.edited && <span className="edited">Đã chỉnh sửa</span>}
                        </p>
                      }
                    />)}

                    <div className='send-comment-zone'>
                      <Avatar style={{
                        backgroundColor: `rgb(0,72,245)`,
                        verticalAlign: 'middle'
                      }} alt="avatar">{getFirstLetterName(firstName)}</Avatar>
                      <textarea ref={textAreRef} id="cmt-textarea" name="cmt-textarea" rows={2} cols={50} placeholder={"Gửi bình luận mới"} />
                      {/* <SendOutlined /> */}
                      <Tooltip title="Gửi bình luận">
                        <Button type="primary" shape="circle" icon={<SendOutlined />} htmlType='button' onClick={handleAddComment} />
                      </Tooltip>

                    </div>
                  </div>

                </div>
              </div></>}
          </Form>
        )}


      </div>
      {/* <Modal
        title="Xoá bài toán"
        okText="Xoá"
        cancelText="Huỷ"
        open={openModalDelete}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
      >
        <p>Bạn có chắc chắn muốn xoá bài toán {problem?.name}?</p>
      </Modal> */}
    </div>
  );
}

export default DetailProblem;
