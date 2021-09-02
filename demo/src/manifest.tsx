import React from 'react';
import { EyeOutlined, GiftOutlined, RobotOutlined} from '@ant-design/icons';
import CKBList from './demos/CKBList';
import LiteInsight from './demos/LiteInsight';
import SmartBoard from './demos/SmartBoard';
import ChartAdvisor from './demos/ChartAdvisor';

export interface Demo {
  id: string;
  name: string;
  contentComp: React.ReactNode; // TODO: ts type for ContentPage rc
  icon: React.ReactNode;
}

interface Manifest {
  demos: Demo[];
}

// set your manifest here:
const manifest: Manifest = {
  demos: [
    {
      id: 'CKBList',
      name: 'CKBList',
      contentComp: CKBList,
      icon: <EyeOutlined />,
    },
    {
      id: 'ChartAdvisor',
      name: 'ChartAdvisor',
      contentComp: ChartAdvisor,
      icon: <RobotOutlined />,
    },
    {
      id: 'LiteInsight',
      name: 'LiteInsight',
      contentComp: LiteInsight,
      icon: <GiftOutlined />,
    },
    {
      id: 'SmartBoard',
      name: 'SmartBoard',
      contentComp: SmartBoard,
      icon: <GiftOutlined />,
    },
  ],
};

export default manifest;