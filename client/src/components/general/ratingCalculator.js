export default (ingredientData, ingredientArray) => {

    let ingredients = ingredientArray

    let citrullineRating = 0

    if (ingredientArray[0][0] == 'citrulline' || 'citrullineMalate') {
        ingredients = ingredientArray.slice(1)

        const citrullineType = ingredientArray[0][0]
        const amount = ingredientArray[0][1]

        console.log(citrullineType)
        console.log(amount)
        console.log(amount / ingredientData[citrullineType])
       
            if (citrullineType == 'citrulline') {
              citrullineRating = (amount / ingredientData[citrullineType].dose)
            } else if (citrullineType == 'citrullineMalate') {
              citrullineRating = ((amount * (2/3)) / ingredientData[citrullineType].dose)
            } 
            
            citrullineRating > 1 ? citrullineRating = 1 : citrullineRating = citrullineRating 
    }



    const ratings = ingredients.map((ingredientArray) => {
        const ingredient = ingredientArray[0]
        const amount = ingredientArray[1]

        
        if (ingredientData[ingredient].dose == 1) {
            return(null)
        } else {
            if ((amount / ingredientData[ingredient].dose) > 1) {
            return(1)
            } else {
                return(amount / ingredientData[ingredient].dose)
            }
            
        }
    })
    const sum = 0
    const sumOfRatings = ratings.reduce(
        (accumulator, currentValue) => accumulator + currentValue, sum
    )

        console.log(ratings)

    const ratingOfRest = (sumOfRatings / ratings.filter(num => num !== null).length)

    console.log(`citrulline ${citrullineRating}  rest ${ratingOfRest}`)

    citrullineRating > 1 ? 1 : citrullineRating

    const citrullineWeight = 0.5

    const endRating = (citrullineRating * citrullineWeight) + (ratingOfRest * (1 - citrullineWeight))

    return(endRating)
}