'use server'

import { stringifyFormData } from "@/lib/helpers"
import { error } from "console"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.API_URL
const headers = {
  'Content-Type': 'application/json'
}

export type MarcaFormState = {
  nome: string

}

export async function criarMarca(prevState: MarcaFormState, formData: FormData) {
  let response = await fetch(`${API_URL}/marca`, {
    headers,
    method: 'POST',
    body: stringifyFormData(formData)

  })
  // console.log(await response.json())
  await new Promise((resolve) => { setTimeout(resolve, 3000) });
  return prevState
  redirect('/cadastro/marcas')
}
export async function deletarMarca(id: number) {
  let response = await fetch(`${API_URL}/marcas/${id}`, {
    method: 'DELETE',

  })
  if (response.status !== 204) {
    return {
      sucesso: false,
      mensagem: "Erro ao deletar marca"
    }
  }
  revalidatePath('/cadastro/marcas')
  return {
    sucesso: true,
    mensagem: "Marca deletada com sucesso"
  }

  
}