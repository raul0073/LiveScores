export const getCountryFlag = async (code: string) => {
    let flag = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
    await flag.json()
    return flag
}