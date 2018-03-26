"use strict";
import React from "react";
import $ from "jquery";


class EmbedFace extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <div className="fans-page">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FqualityAsesoresyconsultores%2F%3Fref%3Dts%26fref%3Dts&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1561539847294825"
                width="340" height="500"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowTransparency="true">
            </iframe>
        </div>
    )
  }

}
export {EmbedFace}
