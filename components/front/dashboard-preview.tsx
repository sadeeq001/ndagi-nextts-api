import * as React from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto">
        <Card className="w-full">
            <CardContent className="mt-4">
                <Image src="/images/dashboard-preview.jpg" width={ 2016 } height={ 1210 } alt="dashboard-preview" className="w-full rounded-lg" />
            </CardContent>
        </Card>
        </div>
    </div>
  )
}
