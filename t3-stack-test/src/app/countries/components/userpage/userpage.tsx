import * as types from '../../../types'
import { Buttons } from '../buttons/buttons'
import { Countries } from '../countries/countries'

export interface UserpageProps{
    CountriesData: Array<types.countriesData>,
    UserPageComponents: types.userCardComponents,
    UserData: types.userInfo
}

export const Userpage: React.FC<UserpageProps> = (props) => {
  const {UserData, UserPageComponents, CountriesData} = {...props}
  const Skills = UserPageComponents.Skills
  return (
    <main>
    <Buttons UserData={UserData}/>
    <Countries  Countries={CountriesData}/>
    </main>  
  );
}