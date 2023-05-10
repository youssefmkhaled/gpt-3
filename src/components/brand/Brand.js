import React from 'react'
import './brand.css'
import shopify from "../../assets/shopify.png"
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import dropbox from "../../assets/dropbox.png"
import atlassian from "../../assets/atlassian.png"

const Brand = () => {
  return (
    <div className='brand section__margin'>
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack}alt="" />
      </div>
      <div>
        <img src={atlassian}alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand