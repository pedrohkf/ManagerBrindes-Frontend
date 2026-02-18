'use client'

import { useState } from 'react';

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import logo from '@/public/icon/logo.png';
import { Button, ConfigProvider, Layout, Menu } from 'antd';
import Image from 'next/image';
import MenuIcon from '@/public/icon/menu-icon';
import { redirect } from 'next/navigation';

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemMarginBlock: 12,
                        itemHeight: 48,
                        padding: 20,
                        darkItemBg: "#E6DED6",
                        darkItemSelectedBg: "#A7927C",
                        darkItemColor: "#473734",
                        darkItemSelectedColor: "#473734",
                    },
                }
            }}
        >
            <Sider trigger={null} width={300} style={{ backgroundColor: "#E6DED6" }} collapsible collapsed={collapsed} className='h-screen p-7 flex flex-col'>
                <div className={`w-full flex justify-between pt-3 mb-15 ${collapsed ? 'flex-col' : 'flex-row'}`}>
                    <Image src={logo} width={25} height={25} alt='' />
                    <Button
                        onClick={() => setCollapsed(!collapsed)}
                        type='text'
                        icon={<MenuIcon />}>
                    </Button>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            extra: "",
                            icon: <UserOutlined />,
                            label: 'Pendências',
                            onClick: () => redirect("./pendentes")
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Produtos',
                            onClick: () => redirect("./products")
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Pedidos',
                            onClick: () => redirect("./orders")
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: 'Clientes',
                            onClick: () => redirect("./clients")
                        },
                    ]}
                />
            </Sider>
        </ConfigProvider>
    );
};
export default Sidebar
