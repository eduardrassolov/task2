// TableCell.stories.tsx
import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import TableCell from '../../features/notes/table/TableCell';


const meta: Meta<typeof TableCell> = {
    title: 'Table/TableCell',
    component: TableCell,
    tags: ['autodocs'],
    argTypes: {
        iconNote: {
            control: { type: 'select' },
            options: ['idea.png', 'task.png', 'random.png', 'quote.png'],
        }
    },
    decorators: [
        (Story) => <div className="w-[250px] bg-gray-200">
            <Story />
        </div>
    ]
}

export default meta;
type Story = StoryObj<typeof TableCell>;

export const FirstCellInRow: Story = {
    args: {
        item: 'First cell in row',
        iconNote: 'idea.png',
        currIndex: 0,
    }
};
export const Cell: Story = {
    args: {
        item: 'Cell',
        currIndex: 1,
    }
};
