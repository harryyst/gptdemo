import STRequest from "../index.ts";

export function getTextRequest(textString){
    return STRequest.post({url:'/completions',data:{
        "model": "text-davinci-003",
        "prompt": generatePrompt(textString),
        "temperature": 0,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "logprobs": null,
        "max_tokens":1000,
        }})
}


function generatePrompt(textString){
    return `请告诉我5个跟${textString}有关的网站。

    {名字:,
    标题:,
    详细描述: ,
    网址:
    }`
}