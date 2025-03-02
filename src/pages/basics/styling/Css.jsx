let Css = () => (
  <pre>
      {`

        # styling tips 
          * consider dark mode styling
          * use color variables for whole app
          * prepared templates save a lot of time  
          * NO WEBSITE PAGE WITHOUT ICONS 
          * RGBA => opacity for background color only 
            - but opacity for element & its content   

        # basics
          * cascading ( [apply the inline then the last then default] & inherit from parent )
          * css can reduce using imperative js styling like =>  a:hover &&& <a onMouseOver="">
          * selectors 
            - simple ( element - class - id  ) 
            - attribute a[target="_blank"] element[attribute*=value]
            - combinator ( group ',' &  Descendant ' ' &   Child combinator '>'  & [immediately after only] sibling combinator '+' &  [all after] sibling combinator '~'  ) 
            - pseudo 
              $ classes 
              $ elements

            - pseudo class ( virtual states (( describe )) the element ( :hover :root  ) )  
              $ input:focus :disabled :invalid
              $ :not('.anySelector')  :has('.anySelector') 	.bothUlOl:is(ul, ol) .bothUlOl:where(ul, ol)
              $ :first-child => the first sibling of this type
              $ :lang(ar) && :dir(rtl)
              $ .secondInsideParent:nth-child(2) && .secondInsideDocument:nth-of-type(2)

            - pseudo element ( select specific (( content ))  inside an element ( ::before{ content:"" } ::after ) )
            - not all properties applied on it ( only : color , ... ) 
              $ ::first-line ::first-letter
        
        # Notes
          *  tr:nth-child(even) {background-color: #f2f2f2;} // for siblings only 
            - BUT tr:nth-type(even) {background-color: #f2f2f2;} // for whole document
          * outline-offset => space between border & outline
          * box model => element default box is ( border + padding + dimensions ) 
          * layout manipulate using 
            $ margin auto
            $ dir 
            $ position 
            $ inline-block 
            $ float 
            $ flex 
            $ grid 
        
        # property notes
          * text-shadow  &&& box-shadow
          * cursor
          * list-style-image: url('sqpurple.gif');
          * max & min width to adapt layout overflow
          * overflow-wrap => for long words
          
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

        # icons : 
          * <i> OR <svg>
          * fontawesome
          * bootstrap icons 
          * google icons

        # theme template & good designs & inspire 
          * live websites & competitors
          * behance - dribble - printerest 
          * https://www.w3schools.com/w3css/w3css_templates.asp
          * https://envato.com 
          * https://themeforest.net/
          * https://www.canva.com/
          * https://creativemarket.com/
          * https://www.templatemonster.com/
          
        # examples
          *  .center {
                height: 200px;
                position: relative;
                border: 3px solid green;
              }

              .center p {
                margin: 0;
                position: absolute;
                top: 50%; // 50% of its parent container 
                left: 50%;
                transform: translate(-50%, -50%); // 50% of its dimensions
              }
      `}
  </pre>
)

export default HtmlCss