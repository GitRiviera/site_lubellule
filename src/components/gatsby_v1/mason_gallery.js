import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Masonry from 'react-masonry-component';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import GalleryOne from '../components/gallery_1'
import GalleryTwo from '../components/gallery_2'




const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 300,
    itemSelector: '.grid-item'
};
const imagesLoadedOptions = {
    background: '.my-bg-image-el'
}



function Image(props){

switch(props.galleryId){
  case "gallery_1":
      return(
        <GalleryOne/>
      )
    break;
    case "gallery_2":
      return(
        <GalleryTwo/>
      )
      break;
    }
}


function MasonGallery(){
  return(
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center">
      <Tab eventKey="home" title="Home">
        <GalleryTab galleryId="gallery_1"/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <GalleryTab galleryId="gallery_2"/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <div>TUTu</div>
      </Tab>
    </Tabs>
    )
}



function GalleryTab(props){
      return(

    <Masonry options={masonryOptions} className="blue-bd ">
        <Image galleryId={props.galleryId} className="red-bd"/>
    </Masonry>

      )
  }






export default MasonGallery
