import type { Meta, StoryObj } from '@storybook/angular';
import { Table } from './table';

const meta: Meta<Table> = {
  title: 'Design System/Table',
  component: Table,
  argTypes: {

  headerMode: {
    control: 'select',
    options: ['default', 'search-sort'],
  },

  expandableHeader: {
    control: 'boolean',
  },

showSearch: {
    control: 'boolean',
  },

  showSort: {
    control: 'boolean',
  },
},

};

export default meta;

type Story = StoryObj<Table>;
const columns = [
  { key: 'link', label: 'Link' },
  { key: 'date', label: 'Date' },
  { key: 'v1', label: 'Value 1' },
  { key: 'v2', label: 'Value 2' },
  { key: 'status', label: 'Status' },
];
const headerColumns =[ { key: 'c1', label: 'Labels' },
  { key: 'c2', label: 'Date' },
  { key: 'c3', label: 'Labels' },
  { key: 'c4', label: 'Date' },
  { key: 'c5', label: 'Labels' },
  { key: 'c6', label: 'Labels' },
  { key: 'c7', label: 'Labels' },
  { key: 'c8', label: 'Labels' }, 
  { key: 'c9', label: 'Status' },]

const rows = [
  {
    id: 1,
    link: 'Link',
    date: '12/01/2025',
    v1: 'Value 1',
    v2: 'Value 2',
    status: 'Bad 1',
  },
  {
    id: 2,
    link: 'Link',
    date: '12/02/2025',
    v1: 'Value 1',
    v2: 'Value 2',
    status: 'Bad 1',
  },
];

export const Header: Story = {
  args: {
    variant: 'header',

    columns: headerColumns,

    headerMode: 'default',

    expandableHeader: true,
    showSearch: true,

    showSort: true,

  },

  argTypes: {

    headerMode: {
      control: { type: 'radio' },
      options: ['default', 'search-sort'],
    },

    headerExpanded: {
      control: 'boolean',
      if: { arg: 'headerMode', eq: 'search-sort' },
    },

  },
};
export const Accordion: Story = {
  args: {
    variant: 'accordion',

    rows: [
      {
        id: 1,
        link: 'Link',
        date: 'MM/DD/YYYY',
        v1: 'Value 1',
        v2: 'Value 2',
        status: 'Bad 1',
        expanded: false,
      },
    ],
  },
};
export const WithButtons: Story = {
  args: {
    variant: 'buttons',
    rows: [
      {
        id: 1,
        link: 'Link',
        date: 'MM/DD/YYYY',
        v1: 'Value 1',
        v2: 'Value 2',
        status: 'Bad 1',
      },
    ],
  },
};
export const WithMenu: Story = {
  args: {
    variant: 'menu',

    rows: [
      {
        id: 1,
        link: 'Link',
        date: 'MM/DD/YYYY',
        v1: 'Value 1',
        v2: 'Value 2',
        status: 'Bad 1',
      },
    ],
  },
};
