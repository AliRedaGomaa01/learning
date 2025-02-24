let Css = () => (
  <pre>
      {`

        # styling tips 
          * consider dark mode styling
          * use color variables for whole app
          * prepared templates save a lot of time  
          * NO WEBSITE PAGE WITHOUT ICONS 

        # basics
          * cascading ( [apply the inline then the last then default] & inherit from parent )
          * selectors 
            - simple ( element - class - id  ) 
            - attribute 
            - combinator ( group  ) 
            - pseudo 
              $ classes 
              $ elements  
        
        # Notes
          *  tr:nth-child(even) {background-color: #f2f2f2;} // for siblings only 
            - BUT tr:nth-type(even) {background-color: #f2f2f2;} // for whole document

        # outline-offset => space between border & outline
        # box model => element default box is ( border + padding + dimensions ) 
        
        # fonts : 
          * font: italic small-caps bold 12px/30px Georgia, serif; /* font-size/line-height */
          * use 2 fonts from two families not only one 
            - one of them is for special headings only ,, the other for rest of the site (ex. Merriweather , Georgia) 
            - more if website is big 
            - search for font pairing in web
            - google fonts ( perfect for headers ) 
              $ abril fatface
              $ ubuntu  
              $ cinzel
              $ spectral

        # property notes
          * text-shadow  &&& box-shadow
          * cursor
          * list-style-image: url('sqpurple.gif');
          * max & min width to adapt layout overflow
          * overflow-wrap => for long words

        # icons : 
          * <i> OR <svg>
          * fontawesome
          * bootstrap icons 
          * google icons

        # theme template & good designs & inspire 
          * live websites & competitors
          * behance – dribble – printerest 
          * https://www.w3schools.com/w3css/w3css_templates.asp
          * https://envato.com 
          * https://themeforest.net/
          * https://www.canva.com/
          * https://creativemarket.com/
          * https://www.templatemonster.com/
      `}
  </pre>
)

export default HtmlCss