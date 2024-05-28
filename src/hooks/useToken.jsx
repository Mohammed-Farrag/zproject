/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { auth } from "../firebase"

export const useToken = () => {
    
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))
    const { currentUser } = auth;
    useEffect(() => {
        if (currentUser) {
            const t = JSON.parse(localStorage.getItem('token'));
            setToken(t);
        }
    }, [currentUser])
    return { token, setToken };
}

