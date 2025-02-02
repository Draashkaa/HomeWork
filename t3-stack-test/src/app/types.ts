import { SkillsProps } from "./components/skills/skills"
import { countriesData } from '../app/countries'
import { StaticImageData } from "next/image"

export type userInfo = {
    Capital: string,
    Languages: string,
    Population: string,
    Currency: string,
    back: string,
    country: string,
    change: string,
    avatarSrc:StaticImageData,
    CheckMarkSrc:StaticImageData,
    ClockSrc:StaticImageData,
    name:string,
    JobTitle:string,
    skills:Array<string>
    Joined:string,
}

export type countriesDataComponents = {
    Countries: React.FC<countriesData>
}

export type countriesData = {
    name: string,
    capital: string,
    languages: string[],
    population: number,
    flag: string,
    currency: string,
}


export type userCardComponents = {
    Skills: React.FC<SkillsProps>
}