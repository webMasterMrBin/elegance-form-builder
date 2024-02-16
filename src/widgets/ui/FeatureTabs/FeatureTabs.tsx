import React, { FC, useState } from 'react';
import cn from 'classnames';
import { TABS } from './constant';

const FeatureTabs: FC = () => {
  const [tabKey, setTabKey] = useState(TABS[0].key);

  const onClick = (key: string) => {
    setTabKey(key);
  };

  return (
    <div className={cn('flex h-[40px] min-w-[400px] bg-secondary')}>
      {TABS.map(({ key, name }) => (
        <div
          key={key}
          className={cn(
            'leading-[40px] px-[8px] cursor-pointer w-[60px] text-center hover:bg-menu-hover',
            tabKey === key && 'bg-menu-hover',
          )}
          onClick={() => onClick(key)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export { FeatureTabs };
