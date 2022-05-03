import axios from "axios";

const uploadImage = async (file) => {
    if(!file) return

    try{
        const formData = new FormData()
        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const URL = 'https://api.cloudinary.com/v1_1/chals97/image/upload'

        const {data} = await axios.post(URL, formData)

        console.log(data);

        return data.secure_url
    
    } catch(e) {
        console.error('Error al cargar la imagen');
        console.log(e);
        return null
    }
}

export default uploadImage