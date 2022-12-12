import './Slider.css'
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState  } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillStar } from 'react-icons/ai';
function Slider(props){
    const options={responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }},responsiveClass: true
    };
    let [flag,setflag]=useState(0);
let [topten, seTtop]=useState([ ]);
useEffect(()=>{
   return ()=>{
    // const info=async()=>{
    //     const data = await 
        axios
        .get("https://api.themoviedb.org/3/tv/popular?api_key=790392d65f15e65ab054f72d158f72c2&language=en-US&page=3")
        .then ((result)=>
        {console.log(result.data)
            seTtop(result.data.results);
            setflag(1)
            // console.log(topten);
        }
        )
        .catch((err) => {
            console.log(err);
          })
       
          ;
    //     console.log(data.data);
    //     seTtop(data.data);
    //     console.log(topten);
    // };
    
// info();
// console.log(topten);
}; },[flag])
console.log(topten);
    return (
<>
            {/* {topten.map((singlecompany) => (
           <h1>{singlecompany.name}</h1>
            )
            )
                
            } */}
             
    
<div className='container'>
<h3 className='title'> {props.category}</h3>
<OwlCarousel items={1} className='owl-theme'  margin={20} {...options}>
     { topten.slice(5,15).map((onecompany)=> {
        return(
        <div className='outer'>
           <div className="profile-card-4 text-center">
               <img src={"https://image.tmdb.org/t/p/original"+ onecompany.poster_path} class="img img-responsive center "></img>
               <div class="profile-content">
                   <div class="profile-name">{onecompany.name}
                   
                   </div>
                   <div class="profile-description">{onecompany.overview.slice(0,65)}...</div>
                   <div class="row">
                       <div class="col-xs-4">
                           <div class="profile-overview text-center">
                               <p>{onecompany.vote_average}<AiFillStar /></p>
                           </div>
                       </div>
                  
                   </div>
               </div>
           </div>
       
       
       </div>
        );
     }
            )
                
            }
             
             </OwlCarousel></div>
</>
    );
}
export default Slider;

    // {/* <div class='item'> 
    // <div className='inside'>
    //           <Cards />
    //     </div> 
        
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // <div class='item'>
    // <div className='inside'>
    //           <Cards />
    //     </div>
      
    // </div>
    // */}
