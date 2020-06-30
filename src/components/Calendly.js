import React from 'react';

const Calendly = () => {
  return ( 
    <div class="cal" style={{ height: "650px" }}>
      <iframe
        style={{overflow: "clip"}}
        src="http://calendly.com/Michael-Pichardo"
        width="600px"
        height="100%"
        frameborder="0"
        
      ></iframe>
    </div>
  );
};

export default Calendly;
