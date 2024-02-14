import React from 'react';
import { BookText, Workflow } from 'lucide-react';

const FORM_ROUTE = '/app/forms';

const FLOW_ROUTE = '/app/flows';

const MENUS = [
  {
    name: 'form',
    icon: <BookText className="mx-auto my-0 sm:m-0" size={16} />,
    route: FORM_ROUTE,
  },
  {
    name: 'flow',
    icon: <Workflow className="mx-auto my-0 sm:m-0" size={16} />,
    route: FLOW_ROUTE,
  },
];

export { MENUS, FORM_ROUTE, FLOW_ROUTE };
