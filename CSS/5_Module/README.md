Flexbox

Content:
- Flex Container
- Main Axis vs Cross Axis
- The flex Items

Content:
- CSS Grid
- Grid concept
- Grid vs Flexbox

-----------------------------------------Flexbox
Property

display: flex --> to create a flex container
Parents
flex-flow
justify-content
align-content
align-items

Children:
order
flex
align-self

- Flex-direction and flex-wrap:

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap
}

- align-items and justify-content and align-content

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center; /*center items on cross Axis*/
    justify-content: center /*center items on main Axis*/
    align-content: center /*allows to align items along the cross axis*/
}

- Order Property for a Flex Item:
{
    order: 0  or  1 or 2  /*The bigger number applied to the order, is the latest item to be shown in the flexbox container*/
}

- align-self and flex-grow and flex-shrink
align-self
.item-3{
    align-self: flex-start /*give its own align property just to one element*/
}
flex-grow
.item-3 {
    flex-grow: 0 /*Default value*/
    flex-grow: 1 /*The item increases its size on remaining space, this number gives the rate of growth*/
}
flex-shring
Opposite to flex-grow

- flex-basis vs width and height:
.item5 {
    flex-basis: 300px /*size depending on main axis or cross axis*/
}


<!-- ------------------------------------------------------------------------------------------ --> CSS Grid

Content:
- CSS Grid
- Grid concept
- Grid vs Flexbox

CSS Grid 
- Mozilla has an excellent tool to manage CSS grid

<div class="container">
    <div class="el1">Element1</div>
    <div class="el2">Element2</div>
    <div class="el3">Element3</div>
    <div class="el4">Element4</div>
</dv>

.container {
    display: grid;
    grid-template-columns: 200px 150px 20%  1fr   /*This is the width of each column*/
    grid-template-columns: repeat(4, 25%)         /*This will repeat the value 25% 4 times*/
    grid-template-rows: 5rem 2.5rem               /*This is the width of each row*/
    grid-template-rows: [row-1-start] minmax(10px,200px)  [row-1-end] /*First one defines minimum value and the second one, maximum value*/
                        /*This is the name of the row       this is the name of the second row*/ 
}       
.el1{}
.el2{
    grid-column-start: 1;
    grid-column-end: -1;        /*This will count from the end, so it will occupy the whole row*/
    grid-row-start: 2;
    grid-row-end: span 1
    z-index: 10
}
.el3{
    grid-column-start: 3;          
    grid-column-end: 5;         span 2 /*This value means this will occupy 2 spaces*/
    grid-row-start: 1;
    grid-row-end: 3;
}

- Shorthands

.el4{
    grid-column: 1 / -1         /*start value / end value*/
}

.el4{
    grid-area: 1 / 2 / span 3 /span 2       /*start row value / start column value / end row value   / end column value*/
}

- Working with GAPS

.container {
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    grid-gap: 10px 20px         /*shorthand for row gap and column gap in one value*/
}  

- Named Template Areas:
.container {
    grid-template-areas: "header header header header" 
                         "side  side main main"
                        "footer footer footer footer";      /*This will define like the grid in a "table"*/
}

.el3 {
    grid-area: header /*This is the name of an area*/
}

- Create Automatically Generated Grid Areas:

.container {
    grid-template-columns: repeat(4, [col-start] 25% [col-end])
}

.el1 {
    grid-column: col-start 2  / col-end 2
}

- Responsive Grids:

@media (max-width: 40rem) {
    .container {
        grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px, 200px)  /* Add more rows if necesary*/
        grid-template-areas: "header header header header" 
                            "side  side main main"                          /*If a new row is added, complete the area here*/
                            "footer footer footer footer";
    }
}

- Applying Autoflow:
.container {
    grid-auto-rows: 30rem /*This will be the default height for every row*/
}

- auto-fill & auto-fit
.container {
    grid-template-columns: repeat(auto-fill, 10rem)       /*Create columns automatically*/
    grid-template-columns: repeat(auto-fit, 10rem)       /*Create columns automatically and centers them*/
}

- CSS Grid Vs Flexbox
------------------------------------------------------------------------------
CSS Grid                            |           Css Flexbox
------------------------------------|-----------------------------------------
two-dimensional Positioning         |           One-dimensional Poisitioning


Useful Links:

Flexbox Theory:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

Flexbox Container:
https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container

CSS Grid:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

Css Grid 2
https://css-tricks.com/snippets/css/complete-guide-grid/