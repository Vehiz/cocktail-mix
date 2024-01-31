import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from '../components/CocktailCard'

const CocktailList = ({drinks}) => {
    if(!drinks){
        return (
            <h3 style={{ textAlign: 'center'}}>no matching cocktails found...</h3>
        )
    }
    const formattedDrinks = drinks.map((item)=>{
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        }
    })
    // console.log(formattedDrinks, 'herererr')
  return (
    <Wrapper>
        {formattedDrinks.map((item)=>{
            return <CocktailCard key ={item.id} {...item}/>
        })}
    </Wrapper>
  )
}

export default CocktailList