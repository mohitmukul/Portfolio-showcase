import {atom, selector}from "recoil"

export const Themeatom=atom({
    key:'theme-atom',
    default:true
})

export const acticeSections=atom({

    key:'active-Section',
    default:'all'

})

export const ThemeSelector=selector({
    key:'colorSelector',
    get:({get})=>{
        const currentTheme=get(Themeatom)

        if(currentTheme){
            return {
                bg:'bg-gray-900',
                text:'text-white',
                card:'bg-gray-800',
                Cardborder:'border-gray-700',
                accent: 'text-blue-400',
                subtext:'text-gray-400',
            }
        }else{
            return {
                  bg:'bg-gray-100',
                text:'text-gray-900',
                card:'bg-white',
                Cardborder:'border-gray-300',
                accent: 'text-blue-600',
                subtext:'text-gray-600',
            }
        }
    }
})