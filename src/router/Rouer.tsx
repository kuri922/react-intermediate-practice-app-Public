import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { StartPage } from "../components/pages/StartPage";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home/*" element={
          <Routes>
            {homeRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<HeaderLayout>{route.children} </HeaderLayout>} />

            ))}
          </Routes>
        } />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
