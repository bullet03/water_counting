import { DrinkTypes } from '../consts/drinkTypes';

export const getDrinkNameFromType = (type: DrinkTypes) => {
    switch(type) {
        case DrinkTypes.COFFEE:
            return 'кофе'
        case DrinkTypes.TEA: 
            return 'чай'
        case DrinkTypes.WATER:
            return 'вода'
        default: 
            return 'вода'
    }
};
