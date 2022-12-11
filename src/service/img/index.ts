import STRequest from "../index.ts";



export function getImgRequest(imgString:string){
    return STRequest.post({url:'/images/generations',data:{prompt:imgString,
        n:1,
        size:"1024x1024"}})
}

export function getEditImgRequest(img:any,mask:any){
    return STRequest.post({url:'/images/edits',data:{image:img,
        mask:mask,
        prompt:"a man inside of an women"}})
}