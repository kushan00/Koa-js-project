import axios from 'axios';


let promotionList = "http://localhost:5000/" + "Promotion/getAllPromotions";
let createNewPromotion = "http://localhost:5000/" + "Promotion/createPromotion";

export async function getAllPromotions() { 
    return await axios.get(promotionList);
}

export async function CreatePromotion(data) {
    const alldata = {
        PromotionName:data.PromotionName,
        discount:data.discount,
        dueTo:data.dueTo,
        month:data.month
    }

    console.log("url",createNewPromotion);
  
    return await axios.post(createNewPromotion,alldata);
}
