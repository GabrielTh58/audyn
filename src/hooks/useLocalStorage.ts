import { useCallback } from 'react'

export default function useLocalStorage() {
    const setItem = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const getItem = useCallback((key: string) => {
        if(typeof window == "undefined") return
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const removeItem = useCallback((key: string) => {
        localStorage.removeItem(key)
    }, [])

    return { setItem, getItem, removeItem }
}