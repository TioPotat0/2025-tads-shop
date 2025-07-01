'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { deletarMarca } from "@/actions/marcas-action";
import { Trash } from "lucide-react";

type DeleteButtonProps = {
  id: number;

}

export function DeleteButton({id}: DeleteButtonProps) {

  const handleDelete = async () => {
    deletarMarca(id)
  }
    return(
         <AlertDialog>  
      <AlertDialogTrigger asChild>
        
       <Button size="icon" variant="destructive">
                
                  
                  

                    <Trash />
                  </Button>
                  
                  
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você está excluindo um item, você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Se você excluir este item, não poderá desfazer essa ação. Esta ação é permanente e não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" size="icon" onClick={handleDelete}>Excluir</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}