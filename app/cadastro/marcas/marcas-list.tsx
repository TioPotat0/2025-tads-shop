'use server'

import { deletarMarca } from "@/actions/marcas-action";
import { DeleteButton } from "@/components/delete-button";
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
import { Edit} from "lucide-react";
import Link from "next/link";

export async function MarcasList() {
 // await new Promise((resolve) => {setTimeout(resolve, 3000)}); 
  const response = await fetch(`${process.env.API_URL}/marcas`, {

    cache: "no-store",
  })
  const marcas:Marca[] = await response.json();
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
                  <Button size="icon" asChild>
                    <Link href={`/cadastro/marcas/editar/${marcas.id}`}><Edit /></Link>
                  
                  </Button>
                  
                     <DeleteButton id={marcas.id}/>
           
                
                </div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </section>
  );
}
