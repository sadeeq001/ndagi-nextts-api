import { MonitorCogIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo({ title }: { title:string }) {
    return (
        <Link href={"/"} className="flex items-center space-x-2">
            <div className="bg-[rgb(20,164,76)] rounded-full p-1">
                <span className="text-white font-bold text-xl">
                    <MonitorCogIcon className="" />
                </span>
            </div>
            <span className="font-bold text-xl">NDEK <span className={ `${title==="header" ? `text-[#14a44c]` : `text-[#fff]` }` }>Tech</span></span>
        </Link>
    )
}
