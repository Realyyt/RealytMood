import Editor from "@/components/Editor"
import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id)=>{
        const user  = await getUserFromClerkID()
        const entry = await prisma.journalEntry.findUnique({
            where:{
                userId_id:{
                    userId:user.id,
                    id,
                }
            }
        })
        
        return entry
    }


const EntryPage =async  ({params})=>{
    
    const entry = await getEntry(params.id)
    return(
        <div className="w-full h-full grid grid-cols-3">
            <div className="col-span-2">
                <Editor entry={entry}/>
            </div>
            <div className="col-span-1">AI</div>
        </div>
    )
}

export default EntryPage