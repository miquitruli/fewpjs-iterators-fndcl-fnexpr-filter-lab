    //1) returns all drivers that match the passed in name
    //2) returns matching drivers if case does not match but letters do
    //3) returns an empty array if there is no match
const findMatching = (array, string) => {
    return array.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

    //4) returns a driver if beginning provided letters match
    //5) does not return drivers if only middle or ending letters match
    //6) does not return drivers if only middle or ending letters match
const fuzzyMatch = (array, string) => {
    return array.filter(driver => driver.startsWith(string))
}
     
    //7) accesses the data structure to check if name matches
const matchName = (array, string) => {
    return array.filter(driver => driver.name === string)
}
    