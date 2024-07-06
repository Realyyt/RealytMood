"use client"

import { UpdateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({entry})=>{
    const [value , setValue]= useState(entry.content)
    const [loading, setLoading]= useState(false)

    useAutosave({
        data:value,
        onSave: async(_value)=>{
            setLoading(true)
            const updated = await UpdateEntry(entry.id,_value)
            setLoading(false)
        }
    })
    return(
        <div className="w-full h-full">
            {loading && (<div>...saving</div>)}   
            {!loading && (<div>Saved</div>)}
            <textarea className="w-full h-full p-8 text-xl" value ={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
    )
}

export default Editor;