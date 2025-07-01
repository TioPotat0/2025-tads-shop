'use server'

import { redirect } from "next/navigation"

const API_URL = process.env.API_URL

export async function criargrupos(formData:FormData){
  let response = await fetch(`${process.env.API_URL}/subgrupo`, {
    method: 'POST',
    body: JSON.stringify({
    nome: formData.get('nome'), subgrupo: formData.get('subgrupo')
    
   })
    })
    redirect('/cadastro/grupos-produto')
  }
export async function deletargrupos(formData:FormData) {
    let response = await fetch(`${process.env.API_URL}/marca/${formData.get('id')}`, {
        method: 'DELETE',
        body: JSON.stringify({
        nome: formData.get('id')
   })
    })
      redirect('/cadastro/grupos-produto')
}