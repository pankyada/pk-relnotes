import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  documentationSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/configuration'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['features/overview'],
    },
  ],
  releaseSidebar: [
    {
      type: 'category',
      label: '2024',
      items: ['releases/2024/overview'],
      collapsed: false,
    },
    {
      type: 'category',
      label: '2023',
      items: ['releases/2023/overview'],
    },
  ],
};

export default sidebars;