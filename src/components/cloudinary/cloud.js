
// 1. Import classes
// ==================

import React from 'react'
// import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

function Widget() {
// ...
const openWidget = () => {
    // create the widget
    window.cloudinary.createUploadWidget(
        {
            cloudName: 'so-lit',
            uploadPreset: 'so-lit-pics',
        },
        (error, result) => {
            this.setState({
                imageUrl: result.info.secure_url,
                imageAlt: `An image of ${result.info.original_filename}`
            })
        },
    ).open(); // open up the widget after creation
};



    // Render the image in a React component.
    return (
        <div>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
           
            <button type="button" id="upload_widget" className="cloudinary-button btn widget-btn" 
                onClick={openWidget}
            > 
                Choose your Profile Picture!
            </button>
            <div class="col-12">
                
          {/* <label for="image">Product Image</label>
          <button type="button" id="upload_widget" class="cloudinary-button form-control  teal darken-4" name="image">Upload Image</button> */}
         
            </div>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script> 
            {/* <AdvancedImage cldImg={myImage} /> */}
        </div>
    )

};

export default Widget;