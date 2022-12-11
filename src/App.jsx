import logo from './logo.svg';
import './App.css';
import STRequest from './service/index.ts';
import { useState } from 'react';
import { getImgRequest,getEditImgRequest } from './service/img/index.ts';
import test from './img/test.png'
import test1 from './img/test1.png'

function App() {
  const [imgString,setImgString] = useState('');

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
  return (
    <div className="App">
      <input type="text" value={imgString} onChange={(e) => setImgString(e.target.value)}/>
      <div onClick={handleImgClick}>生成图片</div>
      <div onClick={handleEditImgClick}>合成图片 </div>
      <img src={img} alt="" />

    </div>
  );
}

export default App;
