// 1. Import classes
// ==================

import React from 'react'
// import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

function Widget() {

    Cloudinary.openUploadWidget({
        cloudName: "my-cloud-name", uploadPreset: "preset1"
    }, (error, result) => { });

    // var imgurl = "";
    // var myWidget = Cloudinary.createUploadWidget({
    //     cloudName: 'so-lit',
    //     uploadPreset: 'so-lit-pics'
    // }, (error, result) => {
    //     if (!error && result && result.event === "success") {
    //         console.log('Done! Here is the image info: ', result.info);

    //         // console.log("ak ", result.info.secure_url);
    //         // imgurl = result.info.secure_url;
    //     }
    // }
    // )

// const openWidget = () => {
    //     //     // e.preventDefault();
    //     myWidget();
    // };

// Import any actions required for transformations.
// import { fill } from "@cloudinary/url-gen/actions/resize";

// const App = () => {


//     // 2. Set your cloud name
//     //========================

//     // Create a Cloudinary instance and set your cloud name.
//     const cld = new Cloudinary({
//         cloud: {
//             cloudName: 'so-lit'
//         }
//     });


//     // 3. Get your image
//     //===================

//     // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
//     const myImage = cld.image('docs/models');


//     // 4. Transform your image
//     //=========================

//     // Resize to 250 x 250 pixels using the 'fill' crop mode.
//     myImage.resize(fill().width(250).height(250));


    // 5. Deliver your image
    // =========================

    // Render the image in a React component.
    return (
        <div>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
            <h1>Cloudinary for So Lit!</h1>
            <button id="upload_widget" class="cloudinary-button" 
                // onClick={openWidget}
            > 
                Choose your Profile Picture!
            </button>

            
            <div class="col-12">
                <label for="image">Product Image</label>
                <button type="button" id="upload_widget" class="cloudinary-button form-control  teal darken-4" name="image">Upload Image</button>

            </div>

            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script> 
            {/* <AdvancedImage cldImg={myImage} /> */}
        </div>
    )

};

export default Widget;