export const getLocalData = (name: string):any  => {
    try{
        let localData = localStorage.getItem(name)
        if(!localData){
            return false
        }
        localData = JSON.parse(localData)
        return localData
    } catch (err) {
        console.log(err);
    }

}

export const setLocalData = (name: string, item: any)  => {
    try{
        localStorage.setItem(name, JSON.stringify(item))
    } catch (err) {
        console.log(err);
    }
}

