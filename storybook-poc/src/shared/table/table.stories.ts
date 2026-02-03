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
const headerColumns = [{ key: 'c1', label: 'Labels' },
{ key: 'c2', label: 'Date' },
{ key: 'c3', label: 'Labels' },
{ key: 'c4', label: 'Date' },
{ key: 'c5', label: 'Labels' },
{ key: 'c6', label: 'Labels' },
{ key: 'c7', label: 'Labels' },
{ key: 'c8', label: 'Labels' },
{ key: 'c9', label: 'Status' },]
/* ----- Table Header ----- */
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
/* ----- Table with accordion ----- */
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
/* ----- Table with buttons ----- */
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
/* ----- Table with menu ----- */
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