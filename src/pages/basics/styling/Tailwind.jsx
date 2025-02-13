export default function Tailwind() {
  return (
    <pre>
      {`
        # place-items
        # flex  ( grow & shrink & wrap ) & grid ( rows & cols & span ) & order   
        # position & float & z-index 
        # font  (weight - size - upperCase ) & decoration 
        # colors  & gradient 
        # borders & rounded & outline  
        # between space and divide 
        # responsive => measure units - align - w & h - mobile first 
        # cursor - <html class=”scroll-smooth”>
        
        # img ( object-fit ) & background image 
          * ( cover or contain or auto ) 
          * ( top center right ) 
          * ( repeat -norepeat ) 
          * ( aspect-square ) 
          * (filters =>  blur - brightness - contract - grayscale )
        
        # transition & animate 
          * hover:color-red-200/20  transition transition-[100ms] 
          * translate-x-[10px] scale-[1.7]  rotate-[17deg]
          * animate-spin ( spin pulse ping bounce )  

        # shadow [x_y_blur_spread_color] 
          * shadow-[3px_3px_3px_0px_rgb(0,0,0,0.3),-3px_-3px_3px_0px_rgb(0,0,0,0.3)]

        # btns & forms 
          *  hover focus active group-hover  
          * placeholder:md-text-xl
        
        # special syntax
          * before:[css] hover:[css]  
          * color-[white_!important]
          * [&>*]:text-black [&_*]:text-black 
          * [combinator selectors]:[css_code]  ====>>> [&_*]:[color:black!important] 
          * min-[640px]:text-white md:text-white
          * dark:bg-white  **** <html class=”dark” >  tailwind config => darkMode: ‘class’  or activate it by system 

        # Directives & layers =>
          * base  => html original elements 
          * component => new custom classes 
          * utilities =>  override tailwind classes & use native raw css 
      
      `}
    </pre>
  );
}