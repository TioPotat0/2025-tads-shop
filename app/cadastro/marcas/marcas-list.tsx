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
import { Marca } from "@/models/marcas";
import { Edit, Trash } from "lucide-react";

type MarcasListProps = {
  marcas: Marca[]
}





export function MarcasList({ marcas }: MarcasListProps) {

  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marcas.map((marcas) => (
            <TableRow key={marcas.id}>
              <TableCell className="font-medium">{marcas.id}</TableCell>
              <TableCell>{marcas.nome}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="icon">
                    <Edit />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Trash />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </section>
  );
}
