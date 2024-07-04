import path from "path"
import postcss from "postcss"

const CreateUrl = (path)=>{
    return window.location.origin + path
}

export const CreateEntry  = async ()=>{
    const res  = await fetch(new Request(CreateUrl("/api/journal"),{
        method:"POST"
    }))

    if (res.ok){
        const data = await res.json()
        return data.data
    }
}