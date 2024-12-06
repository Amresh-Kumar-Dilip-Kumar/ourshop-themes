import React from 'react'
import { Search, QrCode } from 'lucide-react';
// import { Button } from "@/components/ui/button"
import type { StoreType } from '../../ctx';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// // import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function DialogDemo({ store }: { store: StoreType }) {
    return (
        <Dialog>
            <DialogTrigger >
                <QrCode width="50px" height="50px" />

            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Shop Qr</DialogTitle>
                    <DialogDescription>
                        Scan to visit our shop
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center py-4">
                    <img
                        src={store.qr}
                        alt="QR Code"
                    // className="max-w-full max-h-64 object-contain"
                    />
                </div>


                <p className=" flex items-center justify-center  ">Scan to visit our shop</p>

            </DialogContent>
        </Dialog>
    )
}

export default function Navbar({ store: store }: { store: StoreType }) {
    return (
        <nav className="  flex justify-evenly items-center p-2   ">

            <img className="h-20 w-auto" src={store.logo} alt="Vegan Logo" />


            <div className="flex bg-[#687864] rounded-full w-[30vw] p-3 mx-8 cursor-pointer">
                < Search className='' />
                <input
                    type="text"
                    placeholder="Search for products, categories..."
                    className="mx-4 font-normal opacity-70 bg-[#687864] placeholder:text-[#EAEAEA] text-[#FFFFFF] outline-none w-full "
                />
            </div>

            <DialogDemo store={store} />




        </nav>
    )
}


