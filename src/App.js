import React from 'react';
import UserComponents  from './myComponents'


function App() {
  return(
    <div>
      <h1> 
        <img src="https://wildcodeschool.com/wp-content/uploads//2019/01/logo_pink_176x60.png" alt="WCS"/> User list</h1>

      <div class="container-fluid">
        <div class="row">
          <UserComponents
          image="https://robohash.org/laborumnecessitatibusdeleniti.bmp?size=200x200&amp;set=set1"
          name="Jada Foulks"
          email="jfoulks0@ifeng.com"
          />


          <UserComponents 
          image="https://robohash.org/earumdoloremquenecessitatibus.jpg?size=200x200&amp;set=set1"
          name="Saw Pridmore"
          email="spridmore1@liveinternet.ru"
          />

          <UserComponents
          image="https://robohash.org/omnisdolorsunt.bmp?size=200x200&amp;set=set1"
          name="Valerie Polley"
          email="vpolley2@eventbrite.com"
          />

          <UserComponents 
          image="https://robohash.org/quisnequeexplicabo.jpg?size=200x200&amp;set=set1"
          name="Bogey Strong"
          email="bstrong3@reference.com"
          />
          
          <UserComponents
          image="https://robohash.org/inventoreaspernaturfacilis.png?size=200x200&amp;set=set1"
          name="Claudelle Guislin"
          email="cguislin4@opera.com"
          />
         
          <UserComponents
          image="https://robohash.org/consequaturvoluptatepariatur.png?size=200x200&amp;set=set1"
          name="Mignon Bourges"
          email="mbourgeois5@elpais.com"
          />
          
          <UserComponents
          image="https://robohash.org/molestiaeillonon.bmp?size=200x200&amp;set=set1"
          name="Silvio Himpson"
          email="shimpson6@hatena.ne.jp"
          />
         
         <UserComponents
          image="https://robohash.org/pariaturnamfuga.bmp?size=200x200&amp;set=set1"
          name="Berry Sketchley"
          email="bsketchley7@gov.uk"
         />
        </div>
      </div>
    </div>
  );
}

export default App;
