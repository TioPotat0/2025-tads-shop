export function stringifyFormData(formData: FormData){
   const  formatedData = Object.fromEntries(formData.entries());
   return JSON.stringify(formatedData);  
}