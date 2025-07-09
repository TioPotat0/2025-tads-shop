import { MarcasForm } from "../../marcas-form";


async function buscarMarca(id: string) {
  const response = await fetch(`${process.env.API_URL}/marcas/${id}`,{
    cache: "no-store"
  })
  return await response.json();
}
export default async function PageEditarMarca({params}:{params:Promise<{id:string}>}) {
    const { id } = await params;
    const marca = await buscarMarca(id);

  return (
    <section className="p-8">
        <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar Marcas {id}</h1>
        </div>
         </div>
         <MarcasForm marca={marca}/>
    </section>
  );
} 