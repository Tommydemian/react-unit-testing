import {screen, render} from '@testing-library/react'
import App from './App'

it('should hace hello world', () => {
    render(<App/>)
    const message = screen.queryByText('Vite')
    expect(message).toBeDefined()
})