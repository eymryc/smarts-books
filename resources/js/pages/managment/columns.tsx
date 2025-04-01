"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BooksRequest = {
   id: string;
   first_name: string;
   last_name: string;
   affiliation: string;
   country: string;
   city: string;
   phone: string;
   email: string;
   book_title: string;
   publisher: string;
   edition_number: string;
   book_link: string;
}

export const columns: ColumnDef<BooksRequest>[] = [
   {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
   {
      accessorKey: "last_name",
      header: ({ column }) => {
         return (
           <Button
             variant="ghost"
             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
           >
             NOM
             <ArrowUpDown className="ml-2 h-4 w-4" />
           </Button>
         )
       },
  },
   {
      accessorKey: "first_name",
      header: "PRÉNOM(S)",
  },
  {
      accessorKey: "affiliation",
      header: "AFFILIATION",
  },
  {
      accessorKey: "country",
      header: "PAYS",
  },
  {
      accessorKey: "city",
      header: "VILLE",
  },
  {
      accessorKey: "phone",
      header: "TÉLÉPHONE",
  },
  {
      accessorKey: "email",
      header: "EMAIL",
  },
  {
      accessorKey: "book_title",
      header: "INTITULÉ DE L'OUVRAGE",
  },
  {
      accessorKey: "publisher",
      header: "MAISON D'ÉDITION",
  },
  {
      accessorKey: "edition_number",
      header: "NUMÉRO D'DITION",
  },
  {
      accessorKey: "book_link",
      header: "LIEN D'OUVRAGE",
  },
]
