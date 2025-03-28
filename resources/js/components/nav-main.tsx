import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            {items.map((item) => (
                <React.Fragment key={item.title}> {/* Ajout d'une clé unique pour chaque élément */}
                    <SidebarGroupLabel className='uppercase'>
                        {item.title}
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {item.menuItems.map((menuItem) => (
                            <SidebarMenuItem key={menuItem.title}> {/* Ajout d'une clé unique pour chaque sous-élément */}
                                <SidebarMenuButton
                                    asChild
                                    isActive={menuItem.href === page.url}
                                    tooltip={{ children: menuItem.title }}
                                >
                                    <Link href={menuItem.href} prefetch>
                                        {menuItem.icon && <menuItem.icon />} {/* Correction de l'affichage de l'icône */}
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
