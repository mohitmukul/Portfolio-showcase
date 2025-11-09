import { useState } from "react";

export function useToggle(initialvalue=false) {

const [value,setValue]=useState(initialvalue);

function toggle(){
    setValue(c=>!c);
}
return [value,toggle]
 
}