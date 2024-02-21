import React, { FC } from 'react';
import { FeatureTabs, DragComponents } from 'src/widgets';

const Forms: FC = () => {
  return (
    <div className="flex-auto flex flex-col">
      <FeatureTabs />
      <div className="flex-grow">
        <DragComponents />
      </div>
    </div>
  )
}

export default Forms;