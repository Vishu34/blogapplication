
import Navbar from "@/components/setting/Veritcalnavbar/page"
import { Box } from "@mui/material"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SettingLayout({ children }) {
  return (
   <>

<Box className="  space-y-5 p-2 md:p-0 md:space-y-0 md:flex  md:mx-5 lg:mx-16 my-10 text-gray-600 ">
<Navbar/>
    {
        children
    }
</Box>
   </>
  )
}
