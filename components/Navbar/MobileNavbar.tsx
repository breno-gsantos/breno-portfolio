import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {FaBars} from 'react-icons/fa'
import { linksData } from "./Navbar"
import Link from "next/link"

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white dark:text-black"><FaBars className='w-7 h-7' /></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full justify-center">
        <SheetHeader>
            <ul className="flex flex-col items-center gap-y-20">
                {linksData.map(({href, label}) => (
                    <li key={href} className="text-4xl">
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
