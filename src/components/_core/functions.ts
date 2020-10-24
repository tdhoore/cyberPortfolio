export const genImageName = (startName:string) => {
    return {
        baseName: startName.substring(0, startName.indexOf(".")),
        extention :startName.substring(startName.indexOf("."), startName.length)
    }
};