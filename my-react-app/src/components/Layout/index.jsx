import { Layout as AntLayout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = AntLayout;

function Layout({ children }) {
  return (
    <AntLayout className={"h-screen"}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {/*<Menu.Item key="1">nav 1</Menu.Item>*/}
          {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
          {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
        </Menu>
      </Header>
      <AntLayout>
        <Sider width={200} className="site-layout-background ">
          <Menu
            mode="inline"
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Phần câu hỏi">
              <Menu.Item key="1">
                <Link to={"/questions/create"}>Thêm mới câu hỏi</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <AntLayout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="bg-white rounded p-12 ">{children}</Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}

export default Layout;
