"use client"

import { UpdateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({entry})=>{
    const [value , setValue]= useState(entry.content)
    const [loading, setLoading]= useState(false)
    const [analysis, setAnalysis] = useState(entry.analysis)
    
    const { mood, subject, negative, summary, color } = analysis;
    const AnalysisItems = [
      { name: "Summary", value: summary },
      { name: "Subject", value: subject },
      { name: "Mood", value: mood },
      { name: "Negative", value: negative ? "True" : "False" },
    ];
    

    useAutosave({
        data:value,
        onSave: async(_value)=>{
            setLoading(true)
            const data = await UpdateEntry(entry.id,_value)
            setAnalysis(data.analysis)
            setLoading(false)
        }
    })
    return (
      <div className="w-full h-full grid grid-cols-3">
        <div className="col-span-2">
          {loading && <div>...saving</div>}
          {!loading && <div>Saved</div>}
          <textarea
            className="w-full h-full p-8 text-xl outline-none "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="border-l border-black/10">
          <div className="py-10 col-span-1 " style={{ backgroundColor: color }}>
            <h2>Analysis</h2>
          </div>
          <div>
            <ul>
              {AnalysisItems.map((item) => (
                <li
                  key={item.name}
                  className=" px-2 py-4 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold border-t border-b border-black/10">
                    {item.name}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Editor;