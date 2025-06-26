'use server'

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Edit, Trash } from "lucide-react";
import { Grupos } from "@/models/grupos-produto";
import { DeleteButton } from "@/components/delete-button";


export async function GruposProdutoList() {
   const response = await fetch("http://localhost:3004/grupos", {

    cache: "no-store",
  })
    const grupo:Grupos[] = await response.json();
  return (
    <section className="mt-8 rounded-md border">
      <Table> 
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Subgrupos</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
      {grupo.map((grupo) => (
          <TableRow key={grupo.id}>
            <TableCell className="font-medium">{grupo.id}</TableCell>
            <TableCell>{grupo.nome}</TableCell>
            <TableCell>{grupo.subgrupo}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon">
                  <Edit />
                </Button>
                <DeleteButton/>
              </div>
            </TableCell>
          </TableRow>
        ))}

        </TableBody>
      </Table>
    </section>
  );
}
