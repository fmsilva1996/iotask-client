import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Task, TaskProps } from './index'

export default {
  title: 'Task',
  component: Task,
} as Meta

const Template: Story<TaskProps> = () => <Task>Example Task</Task>

export const Default = Template.bind({})
