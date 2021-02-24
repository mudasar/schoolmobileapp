import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({});


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (<AuthContext.Provider 
    value={{ user, 
        login: () => {
            const fakeUser = {username: 'mudasar'};
            setUser(fakeUser);
            AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        }, 
        logout: () => {
            AsyncStorage.removeItem('user');
        }
    }}
    >
        {children}
    </AuthContext.Provider>)
}