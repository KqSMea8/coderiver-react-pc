/**
 * 注释路由
 * title:Index Page
 * Routes:- ./src/pages/display/index.tsx
 *   - ./src/pages/display/index.tsx
 */

import React from 'react';
// import ButtonWithDefaultProps from './test/Button';
import Computed from './test/Computed';
import Link from 'umi/link';
import Redirect from 'umi/redirect';
import Button from '@material-ui/core/Button';

export default function() {
  // 留作权限验证判断跳转
  return <Redirect to={'/coderiver'} />;
}
