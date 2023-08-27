import React, { useEffect, useState } from 'react';
import { Button, Form, message, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import Loading from '~/src/ui/shared/loading';
import { usePartner } from '~/src/adapters/appService/partner.service';
import { useConsent } from '~/src/adapters/appService/consent.service';
import BaseTable from '~/src/ui/shared/tables';
import { columnTableWithdrawRequest } from './props';



function WithdrawRequestList() {
  const [withdrawRequests, setWithdrawRequests] = useState<any>([]);
  const [partners, setPartners] = useState<any>([]);

  const { getAllWithdrawList, approveWithdrawRequest } = useConsent();
  const { getAllPartner } = usePartner();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getAllWithdrawList().then((data) => {
      setWithdrawRequests(data);
    }).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllPartner().then((data) => {
      setPartners(data);
    }).finally(() => setLoading(false));
  }, []);

  const handleSubmit = (requestId: number) => {
    setLoading(true);
    approveWithdrawRequest(requestId).finally(() => setLoading(false));
  };

  const confirmDelete = (_: React.MouseEvent<HTMLElement> | undefined, requestId: number) => {
    handleSubmit(requestId);
  };

  const cancel = (e: React.MouseEvent<HTMLElement> | undefined) => {
  };

  const columnTableWithdrawRequestProps: any = [
    ...columnTableWithdrawRequest,
    {
      title: 'Approve',
      dataIndex: 'action',
      width: 60,
      // @ts-ignore
      render: (_, record) => {
        return (
          <Space size="small">
            <Popconfirm
              title="Approve the request?"
              onConfirm={(e: React.MouseEvent<HTMLElement> | undefined) => confirmDelete(e, record.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                // type="primary"
                danger
                icon={<DeleteOutlined />}
                style={{ color: '#df0d0d' }}
              />
            </Popconfirm>

          </Space>
        );
      },
    },
  ];

  const calcWithdrawRequests = withdrawRequests?.map((item: any) => ({
    ...item,
    partner_name: partners.find((partner: any) => partner.id === item.partner_id)?.name
  }));

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h6 className="cms-layout-title-medium mt-4 mb-4">
            {calcWithdrawRequests?.length} withdraw requests
          </h6>

          <BaseTable
            idKey="withdrawRequest"
            columns={columnTableWithdrawRequestProps}
            data={{ items: calcWithdrawRequests }}
            paginationProps={{
              defaultPageSize: 10,
              total: withdrawRequests?.length,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '20', '50'],
              position: ['bottomRight'],
            }}
          />
        </>

      )}
    </>
  );
}

export default WithdrawRequestList;
