export function addToStore(storeName: string, storeData: object | undefined){
    localStorage.setItem(storeName, JSON.stringify(storeData))
}

export function getFromStore(storeName: string) {
    const store = localStorage.getItem(storeName)
    return store ? JSON.parse(store) : []
}