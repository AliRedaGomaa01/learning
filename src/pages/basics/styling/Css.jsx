let Css = () => (
  <pre>
      {`

# styling tips 
  * consider dark mode styling
  * use color variables for whole app
  * prepared templates save a lot of time  
  * NO WEBSITE PAGE WITHOUT ICONS 
  * use bootstrap with sass OR use tailwind ( don't use both )
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

# Units
  * absolute  ( px , cm , in )
    - pixel depends on screen resolution 
      $ low -> pixel = one device dot 
      $ high -> pixel = multiple device dots 
  * relative  ( em , rem , vw , vh , % relative to parent  )

# priority : 
  - !important keyword ( use rarely )
  - inline style  
  - css specificity => more specific = higher priority ex. #myDiv vs myParent div#myDiv.myDiv
  - latest

# CSS Math Functions
  - width: calc(100% - 100px);
  - width: max(50%, 300px);
  - 

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
  * text-shadow VS   box-shadow: 0 0 10px 5px lightblue, 0 0 15px 10px black;  
    // blur : pixeled background color   // spread : all area increase  
  * list-style-image: url('sqpurple.gif');
  * max & min width to adapt layout overflow
  * overflow-wrap => for long words
  * border radius : 15px/50px ;
  * white-space: nowrap;  overflow: hidden;  text-overflow: clip OR ellipsis; // loerom ...
  * word-break: keep-all; word-wrap: break-word; // for breaking long words 
  * writing-mode  //  vertical or horizontal 
  * font-stretch
  * transform : translate , scale , rotate , skew , 
    // transform-origin  // scaleX(-1) to reverse img in x direction
    - 3d => rotateZ()
  * clip-path: circle(50%); shape-outside: circle(45%); 
    // ex. circle  img with wrapped text
  * object-fit & object-position => to control aspect ratio of image & video
  * mask-image  ( gradient or SVG or PNG  )
  * column-count => divide text in div cross multi columns
  * resize => enable user to control box size like textarea
  * outline-offset => space between border & outline
  * img filters : 
    - filter: blur(2px)
    - brightness(150%)
    - contrast(0.5)
    - drop-shadow(8px 8px 10px gray)
    - opacity(0.3)
    - saturate(200%)
    - grayscale(0.5) // colors
    - hue-rotate(90deg)  // colors
    - invert(0.3) // colors
    - sepia() // colors
  
# css rules :
  - @font-face { }
  - @keyframes  { }
  - @media screen and (max-width: 600px) { }

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
  * search in google free web templates 
  * live websites & competitors  ( inspect & source code )
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

export default Css