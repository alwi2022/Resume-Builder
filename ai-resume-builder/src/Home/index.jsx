import Header from "@/components/custom/Header";
import { UserButton } from "@clerk/clerk-react";


export default function Home(){
    return (
   <div>
    <Header/>
    Home Page
       <UserButton/>
   </div>
    );
}