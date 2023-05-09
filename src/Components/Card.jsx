import './Card.css'
import x from '../Records.json'
import { useState } from 'react'

export default function Card(){

    const [selectedoption2, setSelectedoption2]=useState('');
    const [selectedoption3, setSelectedoption3]=useState(0);
    const [selectedoption4, setSelectedoption4]=useState('');
    const [sortAscending,setSortAscending]=useState(null);
    const [searchdata,setSearchdata]=useState('');
    let data;
    const y = [...x].sort((a, b) => a.price - b.price);
    const revsortedata=[...x].sort((a, b) => b.price - a.price);
    function sorted(){
        if(sortAscending){
            data=y;
        }
        else{
            data=revsortedata;
        }
    }
    sorted();
    
    function sear(e){
          setSearchdata(e.target.value)
        }

function handleoptionchange2(e){
    if((selectedoption2==="shoe")||(selectedoption2==="shirt")||(selectedoption2==="pant")) {
        setSelectedoption2('');
    }
    else{
    setSelectedoption2(e.target.value);}

}
function handleoptionchange3(e){
    if((selectedoption3==="300")||(selectedoption3==="400")||(selectedoption3==="600")) {
        setSelectedoption3('');
    }
    else{
    setSelectedoption3(e.target.value);}
}

function handleoptionchange4(e){
    if((selectedoption4==="zara")||(selectedoption4==="adidas")||(selectedoption4==="reebook")) {
        setSelectedoption4('');
    }
    else{
    setSelectedoption4(e.target.value);}
}

 function reset()
    {
        setSelectedoption2('');
        setSelectedoption3('');
    }

    return(
        <>
         <nav>
  <div className="logo">

    <a href="">Logo</a>
  </div>
  <div class="search">
  <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={sear} />
</div>
</div>

  <ul>
 
    <li><a href="#">Home</a></li>
    
    <li><a href="##">About</a></li>
    
    <li><a href="###">Contact</a></li>
  </ul>
</nav>


        <div id="whole">
            <div id='col1'>
                <h4 id="center">Filter</h4>
                <button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? 'Sort by Price (Low to High)' : 'Sort by Price (High to Low)'}</button>
                <hr/><br/>
                <p>CATEGORY</p>
                <br/>
                <input type='checkbox' id="shoe" value="shoe" name="CATEGORY"    checked={selectedoption2 === 'shoe'} onChange={handleoptionchange2}/> <label htmlFor="shoe"> Shoe </label><br/>
                <input type='checkbox' id="shirt" value="shirt" name="CATEGORY"  checked={selectedoption2 === 'shirt'} onChange={handleoptionchange2}/> <label htmlFor="shirt">Shirt</label><br/>
                <input type='checkbox' id="pant" value="pant" name ="CATEGORY"   checked={selectedoption2 === 'pant'} onChange={handleoptionchange2} /> <label htmlFor="pant">Pant</label><br/>
                <br/>
                <p>PRICE</p>
                <br/>
                <input type='checkbox' id="300" value="300" name="PRICE"  checked={selectedoption3 === '300'} onChange={handleoptionchange3}/> <label htmlFor="300">more than 300</label><br/>
                <input type='checkbox' id="400" value="400" name="PRICE"  checked={selectedoption3 === '400'} onChange={handleoptionchange3}/> <label htmlFor="400">more than 400</label><br/>
                <input type='checkbox' id="600" value="600" name ="PRICE" checked={selectedoption3 === '600'} onChange={handleoptionchange3} /> <label htmlFor="600">more than 600</label><br/>
                <br/>
                <br/>
                <p>BRAND</p>
                <br/>
                <input type='checkbox' id="zara" value="zara" name="Brand"    checked={selectedoption4 === 'zara'} onChange={handleoptionchange4}/> <label htmlFor="zara"> Zara</label><br/>
                <input type='checkbox' id="adidas" value="adidas" name="Brand"  checked={selectedoption4 === 'adidas'} onChange={handleoptionchange4}/> <label htmlFor="adidas">Adidas</label><br/>
                <input type='checkbox' id="reebook" value="reebook" name ="Brand"   checked={selectedoption4 === 'reebook'} onChange={handleoptionchange4} /> <label htmlFor="reebook">reebook</label><br/>
                <br/>
                <button id="reset" onClick={reset}>Reset</button> &ensp;
               
        </div>
    <div id='col2a'>
    {data.filter((item)=>{return parseInt(selectedoption3)===0?item:item.price>=selectedoption3}).filter((item)=>{return selectedoption4===""?item:item.br.toLowerCase().includes(selectedoption4)}).filter((item)=>{return selectedoption2===""?item:item.category.toLowerCase().includes(selectedoption2)})
    .filter((item)=>{return searchdata.toLowerCase()===''?item:item.name.toLowerCase().includes(searchdata)}).map((item=>(
        
   <div id="col2" key={item.id}> 
   <div className="main" >
   <div className="card" >
   <div className="image">
      <img src={require(`../images${item.src}`)} height={`250px`} alt="photos"  />
   </div>
   <div className="title">
    <h1>
   Name : {item.name} <br/><br/>Brand : {item.br}<br/><br/> Category : {item.category} <br/><br/> Price : {item.price} <del id="red">{item.original}</del></h1>
   </div>
   <div className="des">
    <p></p>
   <button>Read More...</button>
   </div>
   </div>
   </div>
   </div>)))}
   <div>
    </div>
   </div>
   
 
</div> 
        </>
    )
}