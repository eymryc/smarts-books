import React from 'react';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type CustomNavItem , type CustomMenuItemNavItem  } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: CustomNavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <SidebarGroupLabel className="uppercase">
            {item.title}
          </SidebarGroupLabel>
          <SidebarMenu>
            {item.menuItems.map((menuItem: CustomMenuItemNavItem) => (
              <SidebarMenuItem key={menuItem.title}>
                <SidebarMenuButton
                  asChild
                  isActive={menuItem.href === page.url}
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
