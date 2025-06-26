'use server'

import { redirect } from "next/navigation"

export async function criargrupos(formData:FormData){
  let response = await fetch('http://localhost:3004/grupos', {
    method: 'POST',
    body: JSON.stringify({
    nome: formData.get('nome'), subgrupo: formData.get('subgrupo')
    
   })
    })
    redirect('/cadastro/grupos-produto')
  }
export async function deletargrupos(formData:FormData) {
    let response = await fetch(`http://localhost:3004/grupos/${formData.get('id')}`, {
        method: 'DELETE',
        body: JSON.stringify({
        nome: formData.get('id')
   })
    })
      redirect('/cadastro/grupos-produto')
}