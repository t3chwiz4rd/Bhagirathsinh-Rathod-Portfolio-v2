'use client';

import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/common/mode-toggler';

type NavItem = {
  title: string;
  url: string;
  isActive: boolean;
};

const sections: Omit<NavItem, 'isActive'>[] = [
  { title: 'Home', url: '#home' },
  { title: 'About', url: '#about' },
  { title: 'Education', url: '#education' },
  { title: 'Projects', url: '#project' },
  { title: 'Experience', url: '#experience' },
  { title: 'Contact', url: '#contact' },
];

export function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(
    sections.map((item, i) => ({
      ...item,
      isActive: false,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const updated = sections.map((item) => {
        const el = document.querySelector(item.url);
        if (!el) return { ...item, isActive: false };

        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.clientHeight;
        const isActive = scrollY >= top - 100 && scrollY < bottom - 100;

        return { ...item, isActive };
      });

      const hasChanged = updated.some(
        (item, i) => item.isActive !== navItems[i]?.isActive
      );
      if (hasChanged) setNavItems(updated);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="sticky top-5 z-50 mx-auto max-w-fit rounded-full bg-background/40 px-4 py-1.5 backdrop-blur flex items-center gap-2 h-10"
    >
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink asChild className="rounded-full hover:rounded-full">
                <Link
                  href={item.url}
                   onClick={() => {
                    setNavItems((prev) =>
                      prev.map((nav) => ({
                        ...nav,
                        isActive: nav.url === item.url,
                      }))
                    );
                  }}
                  className={`relative px-4 py-2 text-sm transition-colors hover:bg-background/0 focus:bg-background/0 hover:underline hover:underline-offset-4 hover:decoration-3 ${item.isActive ? "underline underline-offset-4 decoration-3" : ""}`}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Toggle */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col space-y-4 mt-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-lg font-medium hover:text-primary transition-colors"
                // onClick={() => setIsOpen(false)}
                 onClick={() => {
                  setIsOpen(false)
                  setNavItems((prev) =>
                    prev.map((nav) => ({
                      ...nav,
                      isActive: nav.url === item.url,
                    }))
                  );
                }}
              >
                {item.title}
              </Link>
            ))}
            {/* <div className="pt-4">
              <ModeToggle />
            </div> */}
          </div>
        </SheetContent>
      </Sheet>

      {/* Theme Toggle - always visible */}
        <ModeToggle />
    </motion.header>
  );
}
