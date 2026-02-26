"use client";

import { Menu} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { userService } from "@/services/user.service";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { getSession } from "@/actions/session.action";



interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
 
    signup: {
      title: string;
      url: string;
    };
  };

  // user:
    user?: {      
    name: string;
    email: string;
    role?: string;
    status?: string;
    image?: string;
    profileUrl?: string;
  } | null;

}

const  Navbar = ({
  logo = {
    url: "/",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemylxnegqoSCsTLUxtkhEcLj_GjmksiDNVg&s",
    alt: "logo",
    title: "SkillBridge",
  },
  menu = [
    { title: "Home", url: "/" },
 
    {
      title: "About",
      url: "/about",
    },
    {
      title: "How Work",
      url: "/howwork",
    },
    {
      title: "Tutor List",
      url: "/tutorList",
    },

  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Register", url: "/register" },
  },
  //  user = null, 
  className,
}: Navbar1Props) => {

const [user, setUser] = useState<Navbar1Props["user"] | null >(null);
const [loading, setLoading] = useState(true);
 const router = useRouter()

  // useEffect(() => {
  //   const fetchUser = async () => {
     
  //      const res = await fetch(`http://localhost:5000/user/me`,
  //       {
  //         credentials: "include",
  //          cache: "force-cache" 

  //        }
  //      )
            
  //             const data = await res.json();
  //             setUser(data.data)
  //   };

  //   fetchUser();
  // }, []);
  useEffect(() => {
    const fetchUser = async () => {
     
       const res = await getSession()
              setUser(res.data || null)
              setLoading(false);
    };

    fetchUser();
  }, []);


  
    
  console.log("user Value: ", user);

  const Logout = async () => {
  try {
    await authClient.signOut();
    router.replace("/login");
  } catch (err) {
    console.error(err);
  }
};


  if (loading) return null;
  


  return (
    <section className={cn("py-4", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert  h-28"
                alt={logo.alt}
                
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* <div className="flex gap-2">
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div> */}

        <div className="flex gap-2 items-center">
  <ModeToggle />

  {user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          {/* {user.image ? (
            <img src={user.image} className="h-6 w-6 rounded-full" alt={user.name} />
          ) : (
            <span className="h-6 w-6 rounded-full bg-gray-400" />
          )}
          {user.name} */}
          Profiles
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/userprofile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>

         {user && (
              <Link
                href={
                  user?.role === "Tutor"
                    ? "/tutor-dashboard"
                    : user?.role === "Student"
                    ? "/student-dashboard"
                    : "/admin-dashboard"
                }
              >
                Dashboard
              </Link>
            )}

        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Link href="/logout">Logout</Link> */}
          <Link href="" onClick={()=> Logout()}>Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <>
      <Button asChild variant="outline" size="sm">
        <Link href={auth.login.url}>{auth.login.title}</Link>
      </Button>
      <Button asChild size="sm">
        <Link href={auth.signup.url}>{auth.signup.title}</Link>
      </Button>
    </>
  )}
</div>


        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}>{item.title}</Link>
        
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {


  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};


export { Navbar };
