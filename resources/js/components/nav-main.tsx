import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

// Définir les types correctement
interface MenuItem {
  title: string;
  href: string;
  icon?: React.ComponentType;
}

interface NavItem {
  title: string;
  menuItems: MenuItem[];
}

export function NavMain({ items = [] }: { items: NavItem[] }) {
  const { url } = usePage().props;
  
  return (
    <SidebarGroup className="px-2 py-0">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <SidebarGroupLabel className="uppercase">
            {item.title}
          </SidebarGroupLabel>
          <SidebarMenu>
            {item.menuItems.map((menuItem: MenuItem) => (
              <SidebarMenuItem key={menuItem.title}>
                <SidebarMenuButton
                  asChild
                  isActive={menuItem.href === url}
                  tooltip={{ content: menuItem.title }}
                >
                  <Link href={menuItem.href} prefetch>
                    {menuItem.icon && <menuItem.icon />}
                    <span>{menuItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </React.Fragment>
      ))}
    </SidebarGroup>
  );
}