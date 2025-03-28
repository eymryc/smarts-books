import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen ,  Home, User, Package, Book, FileText } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: "Acceuil",
        menuItems: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: Home, // Icône de la maison pour le Dashboard
            },
            {
                title: 'Profil',
                href: '/settings/profile',
                icon: User, // Icône d'utilisateur pour le profil
            },
        ],
    },
    {
        title: "Gestion",
        menuItems: [
            {
                title: 'Commandes',
                href: '/orders',
                icon: Package, // Icône de paquet pour la gestion des commandes
            },
            {
                title: 'Livres',
                href: '/books',
                icon: Book, // Icône de livre pour la gestion des livres
            },
        ],
    },
    {
        title: "Paramètres",
        menuItems: [
            {
                title: 'Genre de livre',
                href: '/book-gender',
                icon: FileText, // Icône de texte pour genre de livre
            },
            {
                title: 'Type de livre',
                href: '/booK-type',
                icon: BookOpen, // Icône d'engrenage pour les paramètres
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits',
    //     icon: BookOpen,
    // },
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
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
