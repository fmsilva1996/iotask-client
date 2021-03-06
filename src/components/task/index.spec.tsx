import React from 'react'
import { render, screen } from '@testing-library/react'
import Task from './index'

test('renders without error', () => {
  render(<Task>Title</Task>)
  const taskElement = screen.getByText(/title/i)
  expect(taskElement).toBeInTheDocument()
})
