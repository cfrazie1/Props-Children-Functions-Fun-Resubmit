import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/App.css';


export default class BaseLayout extends Component {
 render() {
   return (

   <div>
     <Header/>
     {this.props.children}
     <div>This should house Header and Footer components and be able to house any children components.</div>
     <Footer/>
   </div>

   );
 }
}
