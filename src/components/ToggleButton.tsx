
import { useTheme } from '../context/ThemeContext'

const ToggleButton = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div>
        <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' :'light'} Mode </button>
    </div>
  )
}

export default ToggleButton