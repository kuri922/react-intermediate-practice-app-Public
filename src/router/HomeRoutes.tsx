
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement"
import { Home } from "../components/pages/Home ";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes =
  [
    {
      path: "", // `${url}` を指定してパスを動的に設定
      exact: true,
      children: <Home />,
    },
    {
      path: "user_management", // ネストされたパスを追加
      exact: false,
      children: <UserManagement />,
    },
    {
      path: "setting", // ネストされたパスを追加
      exact: false,
      children: <Setting />,
    },
    {
      path: "*", // ネストされたパスを追加
      exact: false,
      children: <Page404 />,
    },
  ];
