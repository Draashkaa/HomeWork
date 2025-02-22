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

import { SetStateAction } from "react";
import { Dispatch } from "react";

export type Cats = { 
    weight:{ 
        imperial:string; 
        metric:string; 
    }; 
    id:string; 
    name:string; 
    cfa_url:string; 
    vetstreet_url:string; 
    vcahospitals_url:string; 
    temperament:string; 
    origin: string; 
    country_codes:string; 
    country_code:string; 
    description:string; 
    life_span:string; 
    indoor:Number; 
    lap:Number; 
    alt_names:string; 
    adaptability: Number; 
    affection_level: Number; 
    child_friendly: Number; 
    dog_friendly: Number; 
    energy_level: Number; 
    grooming: Number; 
    health_issues: Number; 
    intelligence: Number; 
    shedding_level: Number; 
    social_needs: Number; 
    stranger_friendly: Number; 
    vocalisation: Number; 
    experimental: Number; 
    hairless: Number; 
    natural: Number; 
    rare: Number; 
    rex: Number; 
    suppressed_tail: Number; 
    short_legs: Number; 
    wikipedia_url: string; 
    hypoallergenic: Number; 
    reference_image_id: string; 
}

export type CatsCardProps = {

}