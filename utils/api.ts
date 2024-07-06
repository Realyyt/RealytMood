

const CreateUrl = (path)=>{
    return window.location.origin + path
}

 export const UpdateEntry = async (id , content)=>{
    const res = await fetch(new Request(CreateUrl(`/api/journal/${id}`),{
        method:"PATCH",
        body: JSON.stringify({content})
    }))

    if(res.ok){
        const data = await res.json()
        return data.data
    }
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