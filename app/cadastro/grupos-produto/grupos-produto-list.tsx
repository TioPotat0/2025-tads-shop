"use client";

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
 const response = await fetch("http://localhost:3002/grupos-produto", {

    cache: "no-store",
  })
    const grupos:Grupos[] = await response.json();

export function GruposProdutoList() {
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
      {grupos.map((grupos) => (
          <TableRow key={grupos.id}>
            <TableCell className="font-medium">{grupos.id}</TableCell>
            <TableCell>{grupos.nome}</TableCell>
            <TableCell>{grupos.subGrupos}</TableCell>
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
