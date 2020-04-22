import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends Component {
    render() {
        return (
            <StickyFooter
    bottomThreshold={0}
    normalStyles={{
    backgroundColor: "#999999",
    padding: '1rem',
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
  <h4 className="footer"> All rights reserved for SPAZIO Workin' Spaces ltd. </h4> 
</StickyFooter>
        );
    }
}

export default Footer;