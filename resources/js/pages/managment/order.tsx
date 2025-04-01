import { useEffect, useState } from "react";
import { BooksRequest, columns } from "./columns";
import { DataTable } from "./data-table";
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Books Orders',
        href: '/orders',
    },
];



// async function getData(): Promise<BooksRequest[]> {
//     // Récupérer les données de l'API ici (simulé ici avec des données statiques)
//     return [
//         {
//             id: "m5gr84i9",
//             first_name: "John",
//             last_name: "Doe",
//             affiliation: "Company 1",
//             country: "USA",
//             city: "New York",
//             phone: "555-1234",
//             email: "john.doe@example.com",
//             book_title: "The Great Adventure",
//             publisher: "O'Reilly Media",
//             edition_number: "1st",
//             book_link: "https://example.com/book1",
//         },
//         {
//             id: "n8hk21j3",
//             first_name: "Jane",
//             last_name: "Smith",
//             affiliation: "Company 2",
//             country: "Canada",
//             city: "Toronto",
//             phone: "555-5678",
//             email: "jane.smith@example.com",
//             book_title: "Learning TypeScript",
//             publisher: "Packt Publishing",
//             edition_number: "2nd",
//             book_link: "https://example.com/book2",
//         },
//     ];
// }

export default function Order({ books }) {
    // const [data, setData] = useState<BooksRequest[]>([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await getData();
    //         setData(result);
    //     }
    //     fetchData();
    // }, []);  // Le tableau vide [] indique que l'effet ne sera exécuté qu'une seule fois après le premier rendu.

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Books Orders" /> {/* Correction du titre */}
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={books} />
            </div>
        </AppLayout>
    );
}
