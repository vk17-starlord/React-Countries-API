import React ,{useContext,useState }from 'react';

export const ThemeContext =React.createContext();
export const ThemeUpdateContext =React.createContext(); 


 
export function ThemeProvider({children}){
    const [theme, setTheme] = useState('Dark');
    const themeToggler = () => {
    
      theme === 'Light' ? setTheme('Dark') : setTheme('Light')

    }
    console.log(theme)

return (
    <ThemeContext.Provider value={theme}>
     <ThemeUpdateContext.Provider value={themeToggler}>
     {children}
     </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
)

}