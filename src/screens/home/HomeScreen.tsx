import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import Row, { IRowProps } from "../Row";

import { imageRequests } from "../../Requests";


const Home: React.FC = (props: any) => {

  const categoryRows:IRowProps[] =[
      {
        title:"NETFLIX ORIGINALS",
        fetchUrl:imageRequests.fetchNetflixOriginals,
        isLargeRow :true,
      },
      {
        title:"Trending Now",
        fetchUrl:imageRequests.fetchTrending,
      },
      {
        title:"Top Rated",
        fetchUrl:imageRequests.fetchTopRated,
        isLargeRow :true,
      },
      {
        title : "Action Movies" ,
        fetchUrl : imageRequests.fetchActionMovies
      },
      {
        title:"Comedy Movies",
        fetchUrl : imageRequests.fetchComedyMovies
      },
      {
        title:"Horror Movies",
        fetchUrl:imageRequests.fetchHorrorMovies 
      },
      {
        title : "Romance Movies",
        fetchUrl : imageRequests.fetchRomanceMovies
      },
      {
        title :"Documentaries",
        fetchUrl :imageRequests.fetchDocumentaries
      }
  ]
  return (
    <React.Fragment>
      <Nav />
      <Banner />
      {
        categoryRows.map(categoryRow=> <Row key={categoryRow.title} {...categoryRow}/>)
      }
    
    </React.Fragment>
  );
};

export default Home;
