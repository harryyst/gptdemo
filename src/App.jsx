import logo from './logo.svg';
import './App.css';
import STRequest from './service/index.ts';
import { useState } from 'react';
import { getImgRequest,getEditImgRequest } from './service/img/index.ts';
import {getTextRequest} from './service/text/index.ts'
import test from './img/test.png'
import test1 from './img/test1.png'

function App() {
  const [imgString,setImgString] = useState('');
  const [textString,setTextString] = useState('');
  const [img,setImgs] = useState('');
  async function handleImgClick(){
    const res = await getImgRequest(imgString)
    console.log(res.data[0]);
    setImgs(res.data[0].url)
  }

  async function handleEditImgClick(){
    console.log(11111)
    const res = await getEditImgRequest(test,test1)
    console.log(res);
  }
  async function handleTextClick(){
    
    const res = await getTextRequest(textString)
    console.log(res)
    let website=res.choices[0].text.replaceAll('/n','')
   
    // website.forEach(item=>{
    //   const test = item.split('：')
    //   console.log(test);
    // })
    for(let i = 1;i<6;i++){
        website = website.replaceAll(`${i}. `,'').replaceAll('\n','')
    }
    website=website.split('{')
    console.log(website);

  }
  return (
    <div className="App">
      <input type="text" value={imgString} onChange={(e) => setImgString(e.target.value)}/>
      <div onClick={handleImgClick}>生成图片</div>
      <div onClick={handleEditImgClick}>合成图片 </div>
      <img src={img} alt="" />
      <input type="text" value={textString} onChange={(e) => setTextString(e.target.value)}/>

      <div onClick={handleTextClick}>ask me something</div>
    </div>
  );
}

export default App;
