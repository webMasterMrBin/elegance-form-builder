import React, { FC, useState, useReducer } from 'react';
import cn from 'classnames';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { MENUS } from './constant';
import { useLocation, useNavigate } from 'react-router-dom';

/** 侧边栏菜单 */
const SidebarMenu: FC = () => {
  const { pathname = MENUS[0].route } = useLocation();
  const [menuKey, setMenuKey] = useState(pathname);
  const [isCollapse, toggleIsCollapse] = useReducer(state => !state, false);
  const navigate = useNavigate();

  const onClick = (route: string) => {
    setMenuKey(route);
    navigate(route);
  };

  return (
    <div className={cn('w-[80px] bg-primary transition-all', !isCollapse && 'sm:w-[150px]')}>
      <div className="justify-end pr-[10px] my-[10px] hidden sm:flex">
        {!isCollapse ? (
          <ChevronLeftCircle onClick={toggleIsCollapse} className="text-primary-foreground cursor-pointer" size={20} />
        ) : (
          <ChevronRightCircle onClick={toggleIsCollapse} className="text-primary-foreground cursor-pointer" size={20} />
        )}
      </div>

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
