import { useEffect, useState } from 'react';  // Importer useEffect et useState
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Books Orders',
        href: '/orders',
    },
];

// Fonction asynchrone pour récupérer les données
async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // Ajoute plus de données si nécessaire.
    ];
}

export default function Order() {
    const [data, setData] = useState<Payment[]>([]);  // État local pour stocker les données

    // Utiliser useEffect pour récupérer les données au montage du composant
    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);  // L'effet se déclenche une seule fois au montage du composant

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Books Orders" /> {/* Correction du titre */}
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </AppLayout>
    );
}
