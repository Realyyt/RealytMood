import {auth, currentUser} from "@clerk/nextjs/server"
import {prisma} from "@/utils/db"
import { redirect } from "next/navigation"
import UserLoader  from "./loading"

const createNewUser = async () => {
  const user = await currentUser();
  console.log(user);

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user!.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect("/journal");
};

 const  NewUser = async ()=>{
    await createNewUser()
   
    return(
        <div>
            <UserLoader/>
        </div>
    )
 }
 export default NewUser;