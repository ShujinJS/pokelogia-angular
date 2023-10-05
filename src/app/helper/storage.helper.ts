export const storeConstants = {
    users: 'users',
    isLoggedIn: 'isLoggedIn',
    belt: 'belt',
}

export let storeDefault = {
    belt: [],
}

export function addToStore(storeName: string, storeData: object | undefined){
    localStorage.setItem(storeName, JSON.stringify(storeData))
}

export function getFromStore(storeName: string) {
    const store = localStorage.getItem(storeName)
    return store ? JSON.parse(store) : false
}

export function setStore(storeName: string, storeData: object) {
    localStorage.setItem(storeName, JSON.stringify(storeData))
}