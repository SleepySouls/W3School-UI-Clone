"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type MenuItem = {
  title: string
  items?: MenuItem[]
  href?: string
}

const menuItems: MenuItem[] = [
  {
    title: 'HTML',
    items: [
      { title: "Introduction to HTML", href: "/html/intro" },
      { title: "HTML Elements", href: "/html/elements" },
      { title: "HTML Attributes", href: "/html/attributes" },
      { title: "HTML Basic", href: "/html/basic" },
      { title: "HTML Formatting", href: "/html/formatting" },
      { title: "HTML Quotations", href: "/html/quotations" },
      { title: "HTML Comments", href: "/html/comments" },
      { title: "HTML Colors", href: "/html/colors" },
      { title: "HTML CSS", href: "/html/css" },
      { title: "HTML Favicon", href: "/html/favicon" },
      { title: "HTML Page Title", href: "/html/page-title" },
      { title: "HTML Tables", href: "/html/tables" },
      { title: "HTML Lists", href: "/html/lists" },
      { title: "HTML Block & Inline", href: "/html/block-inline" },
      { title: "HTML Div", href: "/html/div" },
    ],
  },
  {
    title: 'CSS',
    items: [
      { title: 'Introduction', href: '/css/intro' },
      { title: 'Selectors', href: '/css/selectors' },
      { title: 'Box Model', href: '/css/box-model' },
    ],
  },
  {
    title: 'JavaScript',
    items: [
      { title: 'Introduction', href: '/js/intro' },
      { title: 'Variables', href: '/js/variables' },
      { title: 'Functions', href: '/js/functions' },
    ],
  },
]

function MenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.items) {
    return (
      <div>
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-1">
            {item.items.map((subItem) => (
              <MenuItem key={subItem.title} item={subItem} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href || '#'} passHref>
      <Button variant="ghost" className="w-full justify-start">
        {item.title}
      </Button>
    </Link>
  )
}

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

