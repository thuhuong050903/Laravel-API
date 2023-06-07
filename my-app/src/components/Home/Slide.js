import React from "react";
const Slide = () =>{
    return (
        <div className="rev-slider">
            <div className="fullwidthbanner-container">
                <div className="fullwidthbanner">
                    <div className="bannercontainer">
                        <div className="banner">
                            <ul>
                                <li data-transition="boxfade" data-slotamount="20" className="active-revslide" >
                                    <div className="slotholder" data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="undefined" data-kenburns="undefined" data-easeme="undefined" data-bgfit="undefined" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined">
                                        <div className="tp-bgimg defaultimg" data-lazyload="undefined" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="source/assets/dest/images/thumbs/1.jpg" data-src="source/image/slide/" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tp-bannertimer"></div>
                </div>
            </div>
        </div>
    )
}
export default Slide;
