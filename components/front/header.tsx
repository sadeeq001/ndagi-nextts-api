"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Calendar,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  Hotel,
  Megaphone,
  Menu,
  MonitorSmartphone,
  Shield,
  Store,
  User,
  Users,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";

const features = [
    {
      icon: Calendar,
      title: "Reservation Management",
      description: "Efficiently manage guest bookings, availability, cancellations, and confirmations."
    },
    {
      icon: Hotel,
      title: "Room Management",
      description: "Organize room types, check-in/check-out, and ensure rooms are ready for guests."
    },
    {
      icon: User,
      title: "Guest Profiles & CRM",
      description: "Create detailed guest profiles to offer personalized services and marketing."
    },
    {
      icon: CreditCard,
      title: "Inventory Management",
      description: "Keep track of hotel supplies, including linens, toiletries, and consumables."
    },
    {
      icon: Store,
      title: "Point of Sale (POS)",
      description: "Handle sales transactions at your hotel’s restaurant, bar, or retail outlets."
    },
    {
      icon: CalendarCheck,
      title: "Events & Conferences",
      description: "Manage conference rooms, events, and meeting bookings efficiently."
    },
    {
      icon: MonitorSmartphone,
      title: "Mobile App",
      description: "Allow guests to book rooms, check in/out, and access hotel services through a mobile app."
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Schedule and manage hotel staff, payroll, and job assignments in real time."
    },
    {
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Launch targeted email campaigns, promotions, and loyalty programs to attract guests."
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Manage hotel security, including access control, surveillance, and key management."
    },
    {
      icon: Wrench,
      title: "Maintenance Management",
      description: "Track and manage maintenance requests for hotel rooms, facilities, and equipment."
    },
    {
      icon: CalendarDays,
      title: "Booking Engine",
      description: "Offer a seamless online booking experience for guests through a direct booking engine."
    }
  ];
  

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
      <div className="flex items-center space-x-4">

        <Logo title="header" />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[800px] p-4">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b">
                    <h4 className="text-lg font-medium">Features</h4>
                    <Link
                      href="/features"
                      className="text-sm text-green-500 hover:underline"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={`/feature/${feature.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                            <feature.icon className="h-6 w-6 text-green-500" />
                          </div>
                          <div>
                            <h5 className="font-medium mb-1 group-hover:text-green-500">
                              {feature.title}
                            </h5>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium mb-1">Get started</h4>
                        <p className="text-sm text-muted-foreground">
                          Their food sources have decreased, and their
                          numbers
                        </p>
                      </div>
                      <Button asChild variant="secondary">
                        <Link href="/contact-us">Get started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/#reservation" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Reservation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/#reviews" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Reviews
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost">
          <Link href={"/login"}>
            Sign In
          </Link>
        </Button>
        <Button>
          <Link href="/register">
            Sign Up
          </Link>
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full p-0">
          <SheetHeader className="border-b p-4">
            <SheetTitle className="text-left">Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col py-4">
            <Link
              href="/"
              className="px-4 py-2 text-lg font-medium hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <button
              className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
              onClick={() => setShowFeatures(!showFeatures)}
            >
              Features
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform",
                  showFeatures && "rotate-180"
                )}
              />
            </button>
            {showFeatures && (
              <div className="px-4 py-2 space-y-4">
                {features.map((feature, index) => (
                  <Link
                    key={index}
                    href={`/feature/${feature.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-start gap-4 py-2"
                    onClick={() => setOpen(false)}
                  >
                    <div className="p-2 bg-muted rounded-md">
                      <feature.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">{feature.title}</h5>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/#reservation"
              className="px-4 py-2 text-lg font-medium hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              Reservation
            </Link>
            <Link
              href="/#reviews"
              className="px-4 py-2 text-lg font-medium hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              reviews
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <Link href={"/login"}>
                  Sign In
                </Link>
              </Button>
              <Button className="w-full" onClick={() => setOpen(false)}>
                <Link href="/login">
                Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </header>
  );
}
