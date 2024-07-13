
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement"
import { Home } from "../components/pages/Home ";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes =
  [
    {
      path: "", // `${url}` ����ꤷ�ƥѥ���ưŪ������
      exact: true,
      children: <Home />,
    },
    {
      path: "user_management", // �ͥ��Ȥ��줿�ѥ����ɲ�
      exact: false,
      children: <UserManagement />,
    },
    {
      path: "setting", // �ͥ��Ȥ��줿�ѥ����ɲ�
      exact: false,
      children: <Setting />,
    },
    {
      path: "*", // �ͥ��Ȥ��줿�ѥ����ɲ�
      exact: false,
      children: <Page404 />,
    },
  ];
