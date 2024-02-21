import React, { FC, useState } from 'react';
import { DragItem } from './DragItem';

/** 新增的组件区域容器 */ 
export const DragComponents: FC = () => {
  return (
    <div className="hidden sm:block sm:w-1/3 sm:max-w-[380px] sm:min-w-[320px] border-r border-solid border-border h-full overflow-y-auto">
      <div className="h-[48px] leading-[48px] text-center border-b border-solid border-border font-medium">
        Components
      </div>
      {/* <DragItem /> */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
          gridAutoRows: 'minmax(50px, auto)',
          gridGap: '20px',
        }}
      >
        <div>111</div>
        <div>222</div>
        <div>333</div>
        <div>444</div>
        <div>555</div>
      </div>
    </div>
  );
};

