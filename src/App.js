import React, { Component } from 'react';
import Header from './components/Header';
import SearchIcon from './components/SearchIcon';
import GraphIcon from './components/GraphIcon';
import LogIcon from './components/LogIcon';
import TruckIcon from './components/TruckIcon';
import ESprep from './components/ESprep';
import KibanaPrep from './components/KibanaPrep';
import Cards from './components/Cards';
import Beats from './components/Beats';
import Logstash from './components/Logstash';
import Quote from './components/Quote';
import elasticsearch from './img/elasticsearch.jpg';
import kibana from './img/kibana.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">     
        <Header />       
          <div className="container-fluid"> 
            <div className="row d-flex justify-content-center">           
              <SearchIcon />
              <GraphIcon />           
              <LogIcon />             
              <TruckIcon />            
              <Cards />    
            </div>                
          </div>
                    
          <div className="row mt-lg-5 pt-lg-3">                   
            <img src={ elasticsearch } className="es_pic img-fluid mt-5 ml-lg-5 pl-lg-5" style={{ "width": "800px", "height": "500px", "float": "right"}} />                
            <ESprep />             
          </div>     

          <div className="row mt-5 pb-5">
            <KibanaPrep />
            <img src={ kibana } className="kibana_pic img-fluid mt-5 mr-lg-5 pr-lg-5" style={{ "width": "800px", "height": "500px" }} />        
          </div> 

          <div className="col-lg-12">
            <Logstash />
          </div>

          <div clasName="col-lg-12">
            <Beats />             
          </div>        

          <div>
            <Quote />            
          </div>  
        </div>          
      );
    }
  }

export default App;





