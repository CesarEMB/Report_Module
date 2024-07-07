import { savedDocument } from "../api/document"
import { WEB_URL } from "../config"
import  QRCode  from "qrcode"

const useSavedDocument = () => {

    const back_up = async (documentData: object) => {
        try {
            const saved = await savedDocument(documentData)
            const res = await createQr(saved.data._id); 
            return res 
        } catch (error) {
            console.log(error)
        }
    }

    const createQr = async (id:string) => {
        const newQR = await QRCode.toDataURL(`${WEB_URL}/recover/${id}`)
        return newQR;
    }


    return {
        back_up
    }
}

export { useSavedDocument }