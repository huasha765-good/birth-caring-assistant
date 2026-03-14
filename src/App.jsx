import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 修改点1：换成 BrowserRouter，并引入 Navigate 组件用于重定向
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* 修改点2：使用 BrowserRouter (去掉 URL 里的 # 号) */}
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          {/* 修改点3：新增“自动导航”。如果访问根路径 /，自动跳转到 navItems 里的第一个页面 */}
          <Route path="/" element={<Navigate to={navItems[0].to} replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
