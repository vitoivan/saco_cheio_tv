import React, { useContext, createContext } from 'react';

export interface IWindowProvider{
	windowWidth: number;
}

export const windowCTX = createContext({} as IWindowProvider);

export const WindowProvider = ({ children }) => {

	const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        window.onresize = (e) => {
			setWindowWidth(e.currentTarget.innerWidth)
		}
    }, [])


	return (
		<windowCTX.Provider value={{ windowWidth }}>
			{children}
		</windowCTX.Provider>
	)
}

export const useWindow = () => useContext(windowCTX);