import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type CustomNavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Home, User, Package, Book, FileText } from 'lucide-react';
import AppLogo from './app-logo';

const customNavItem: CustomNavItem[] = [
    {
        title: "Acceuil",
        menuItems: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: Home, 
            },
            {
                title: 'Profil',
                href: '/settings/profile',
                icon: User,
            },
        ],
    },
    {
        title: "Gestion",
        menuItems: [
            {
                title: 'Commandes',
                href: '/orders',
                icon: Package, 
            },
            {
                title: 'Livres',
                href: '/books',
                icon: Book, 
            },
        ],
    },
    {
        title: "Paramètres",
        menuItems: [
            {
                title: 'Genre de livre',
                href: '/book-gender',
                icon: FileText, 
            },
            {
                title: 'Type de livre',
                href: '/booK-type',
                icon: BookOpen, 
            },
        ],
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={customNavItem} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
