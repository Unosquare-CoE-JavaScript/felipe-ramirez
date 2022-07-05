Content:
- Position property
- Fixed Navigation Bars with fixed
- Positioning elements with z-index
- Using "Absolute" and "relative" stand alone an combined
- sticky positioning
- The stacking context

Content: Background
Background property
Background images
Gradients
Filters

Content: Units and Sizes
- Which units can we use
- % and containing block
- "min-width" and "max-width"
- rem vs em
- vw and vh

<!-- ------------------------------------------------------------------------------------------ -->Positioning Elements:

position: static --> Default
Other values
1. absolute
2. relative
3. fixed
4. sticky (Not well supported, but still used)

or...change the position on the document flow with:

top
bottom
left
right

Depends on positioning context 
div
viewport
html
body
<...>

- Using Position to add a Background Image:

.background {
    position: fixed;
    width: 100%;
    height: 100% /*This uses the width and hegith of the image, not the viewport, so it's not the best solution.*/
}


- z-Index
Positioning element along z

z-index: 0; --> default
Could be positive or negative
But giving z-index on elements that have position:static, does not have any effect, ex: position: fixed, position: absolute, etc

.background {
    position: fixed; /*Adding fixed position the element outside the document, so it would be on top by default*/
    width: 100%;
    height: 100%;
    z-index: -1; 
}

- Absolute and relative Position: 
package__badge {
    position: absolute; /*it does not stuck on the viewport, this property depends on the closest ancester with position declared*/
    top: 50px;
    left: 200px;
}

package__badge {
   position: relative /*The context is the element itself, so it moves from the initial position.*/


- Sticky Position:

.parent .country {
    position: sticky;
    top: 20px /*As soon as the scroll reaches this distance, it will stick to the viewport (it fixed)*/
    /*It will stop being fixed, as soon as the bottom border of the parent element is reached*/
}


- Stacking Context:
    By adding fixed, each element has a stack

Summary:
Document flow:
Default positioning behaviour of html elements
Can be changed with "position"

Moving Elemnts: top ,bottom, etc...

Positioning Context:
Defines the anchor point for your position change
The viewport for fixed
Another element for absolute
the element itself for relative
the viewport and another element for sticky.

Stacking context: 
Created when applying fixed/sticky or absolute/relative in combination with z-index
Defines stacking behavour of child elements



<!-- ------------------------------------------------------------------------------------------ -->Images and Background Images

Content: 
Background property
Background images
Gradients
Filters

- Background size:

#property-overview {
    background-image: url('someurl.jpg');
    background-size: 100%; /*cover, contain*/
    background-position: 20px 50px 
                        /*first value position the value relating to the left, second value top, it defines how much will be 
                        cut at the top, left, bottom, that dont fit into the container, could be percentage or keywords like
                        center, top, left, etc
                        */
    background-repeat: no-repeat /*repeat-x, repeat-y*/
}

- Background Shorthand:
image
color
position
size
repeat
origin --> Set background positioning area
clip --> Defines whether background extends underneath border
attachment --> sets the scrolling behavior of the background image

.some-class {
    background-origin: border-box /*content-box (the content without border and any padding), padding-box (content
                                    including padding) */
    background-clip: border-box, padding-box, content-box
    background-attachment: fixed, scroll, local /*how scroll, not used often*/
}
Using shorthands
{
    background: url('someurl') left 10% bottom 20%/cover no-repeat border-box 
}

- Linear Gradients:

.some-class{
    background-image: linear-gradient(to left bottom, red 70%, blue, ...)  
                                        /*you can also defines a degree 30deg as a direction (first argument
                                                                    of the function */
}

- Radial Gradients:

.some-class{
    background-image: radial-gradient(circle at top, red, blue, ...)
}                                       /* by default it will be an elipsis*/

- Stacking multiple Backgrounds:
backgrund:  url(...) left 10% bottom 20%, linear-gradient(red, blue), "a color" ---> only 1 color could be added
Note: all backgrounds has to be separated by comma. 

- Filters:
<div></div>

div {
    background: brown;
    filter: blur(10px)
}


<!-- ------------------------------------------------------------------------------------------ -->Sizes and Units:
Content:
- Which units can we use
- % and containing block
- "min-width" and "max-width"
- rem vs em
- vw and vh

- Units:
Pixels (px)
Percentage (%)
root em (rem) 
em (em)
viewport height (vh)
viewport width (vw)

- Which properties can I use?
font-size
Padding
border
margin
width
height
top
bottom
left
right

- How is the size calculated?
Absolute lengths --> mostly ignore user settings (px, cm, mm, ...)
Viewport lengths --> Adjust to current viewport(vh, vw, vmin, vmax)
Font-Relative lenghts --> Adjunst to default font size (rem, em, ...)

Percentage(%) --> Special Case
    It depends on the ancesters relation and position: fixed, absolute or relative
    First Rule (fixed):
        element {
            position: fixed; /* This has an impact on how % works*/
        }
        If an element has property position: fixed, the viewport is the reference of % (The containing block is the viewport)
    Second rule (absolute):
        element {
            position: absolute
        }
        Now the reference for % will be the ancestor content + padding
    Third rule (relative or static):
        element {
            position: relative or default (static)
        }
        Now the reference for % will be just the ancestor content (not the padding) with display: block

- min-width, max-width:
    .class {
        width: 65%;
        max-width: 670px
        display: inline-block
    }

- rem and em:
Units calculated based on the font-size 
    Be careful with em
    rem uses the font-size default by the browser and multiplies it by the amount of rem
    {
        font-size: 1.1rem /*default font-size by 1.1, which is a better practice...*/
    }
    1rem is approximately 16px for medium font-size browser setting (the recommended one)


- vw and vh:
    .someclass {
        height: 100vh;
        width: 100vw
    }
    Refers to the size referenced to the viewport, no matter position property
    vmin, vmax depends on the largest or shortest value in the viewport.


- Choosing units:
    Property                    |   Recommended
    font-size(root element)     |   %
    font-size                   |   rem(em => children only)
    padding margin              |   rem
    border                      |   px
    width height                |   %   vw  vh
    max-width max-height        |   px
    top bottom left right       |   %
    


Useful Links:.
Background Property:
https://developer.mozilla.org/en-US/docs/Web/CSS/background

Filters:
 https://developer.mozilla.org/en-US/docs/Web/CSS/filter

SVG:
 https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS

Font size Properties and values:
https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
