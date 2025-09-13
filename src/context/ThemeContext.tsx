import { createContext, useContext, useEffect, useState, ReactNode } from "react"


type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme:Theme,
    toggleTheme:()=>void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider:React.FC <{children: ReactNode}> = ({children}) =>{

    const [theme, setTheme] = useState<Theme>('light')

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme  === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error('use Theme must be used within a theme provider')
    }

    return context
}