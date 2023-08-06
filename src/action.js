
import { baseUrl } from "./base_url";

import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
   
    const formData = await request.formData()
 
    const newChai = {
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description')
    }
   
    await fetch(`${baseUrl}/cheese`, {

        method: 'POST',
        headers: {
           
            "Content-Type": "application/json"
        },
       
        body: JSON.stringify(newChai)
    })

    
    return redirect('/')
}

export const updateAction = async ({request, params}) => {

    const id = params.id
  
    const formData = await request.formData()
    
    const updatedChai = {
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description')
    }
    
    await fetch(`${baseUrl}/cheese/${id}`, {
       
        method: 'PUT',
       
        headers: {
            "Content-Type": "application/json"
        },
       
        body: JSON.stringify(updatedChai)
    })
   
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
   
    const id = params.id
    
    await fetch(`${baseUrl}/cheese/${id}`, {
      
        method: 'DELETE'
      
    })
    
    return redirect('/')
}