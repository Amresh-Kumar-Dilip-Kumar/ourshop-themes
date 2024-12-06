import React from 'react'

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
    return (
        <Popover>
            <PopoverTrigger>
                <Button className='bg-[#FBBF24] text-[#1E3A8A]  hover:bg-[#F59E0B] font-medium'>User Account</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="text-[#1E3A8A] font-bold text-2xlleading-none">My Account</h4>
                        <p className="text-[#374151] text-sm text-muted-foreground">
                            Sign into your account to make the checkout process quicker!
                        </p>
                    </div>
                    <div className="grid gap-2 ">
                        <Button className='bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#1E40AF]'>Sign-up</Button>
                        <Button className='bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#1E40AF]'>Login</Button>

                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default function Header() {
    return (
        <section>
            <div className='flex items-center justify-around bg-[#8FC1E3] text-[#1E3A8A]  p-3'>
                <ul className='flex justify-center items-center gap-4'>
                    <li className='hover:text-[#2563EB]'>
                        <a href="/" >
                            Home
                        </a>
                    </li>

                    <li className='hover:text-[#2563EB]'>
                        <a href="/" >
                            Products
                        </a>
                    </li>

                    <li className='hover:text-[#2563EB]'>
                        <a href="/" >
                            Categories
                        </a>
                    </li>
                </ul>


                <PopoverDemo />

            </div>

        </section>
    )
}
