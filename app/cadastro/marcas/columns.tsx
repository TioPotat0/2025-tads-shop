'use client'
import { deletarMarca } from "@/actions/marcas-action";
import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { Marca } from "@/models/marcas";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Marca>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    id:"actions",
    header: "Ações",
    cell: ({row})=>{
        const marca = row.original;
        return (
            <>
            
             <div className="flex gap-2">
                  <Button size="icon" asChild>
                    <Link href={`/cadastro/marcas/editar/${marcas.id}`}><Edit /></Link>
                  
                  </Button>
                  <DeleteButton id={marca.id} />
            </div>
            
            </>
        )
    }
  }
]