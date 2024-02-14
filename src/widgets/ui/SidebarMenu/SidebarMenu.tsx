import React, { FC, useState } from 'react';
import cn from 'classnames';
import { MENUS } from './constant';
import { useLocation, useNavigate } from 'react-router-dom';

const SidebarMenu: FC = () => {
  const { pathname = MENUS[0].route } = useLocation();
  const [menuKey, setMenuKey] = useState(pathname);
  const navigate = useNavigate();

  const onClick = (route: string) => {
    setMenuKey(route);
    navigate(route);
  };

  return (
    <div className="w-[80px] sm:w-[150px] bg-primary">
      {MENUS.map(({ name, icon, route }) => (
        <div
          key={route}
          className={cn(
            'sm:flex sm:h-10 sm:leading-10',
            'text-center p-2 m-0 items-center text-primary-foreground mb-2 cursor-pointer hover:bg-menu-hover hover:text-secondary-foreground',
            menuKey === route && 'bg-menu-active text-secondary-foreground',
          )}
          onClick={() => onClick(route)}
        >
          {icon}
          <span className="sm:ml-2">{name}</span>
        </div>
      ))}
    </div>
  );
};

export { SidebarMenu };
