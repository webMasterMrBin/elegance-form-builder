import React, { FC } from 'react';
import { SidebarMenu } from 'src/widgets';
import { BrowserRouter } from 'react-router-dom';
import { RouteProvider } from './RouteProvider';

const Provider: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <div className="flex h-dvh">
        <SidebarMenu />
        <RouteProvider />
      </div>
    </BrowserRouter>
  );
};

export { Provider };
