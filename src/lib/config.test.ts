import { formatDate } from './config'

describe('formatDate', () => {
  it('formats ISO date string to human readable form', () => {
    expect(formatDate('2024-05-01')).toBe('May 1, 2024')
  })
})
