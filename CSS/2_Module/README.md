Content:
- Box Model
- Height and width
- The display property
- Properties worth to remember
- Pseudo clasess and elements

- Box model
----------------------- margin
------------------- border    |
------------- padding    |    |
-------- content    |    |    |
               |    |    |    | 

Important concepts:
Default margin to the body
Margin Collapsing
    bigger margin wins

There are tree cases where margin collapsing is important
1. Abjacent Siblings
2. A parent with children that have a margin
3. An empty element with margins


- Shorthand properties:
Simply properties that combine a value of multiple properties in a single one
ex:
    border-width: 2px;
    border-style: dashed | solid;
    border-color: orange

    Shorthand:
    border: 2px dashed orange;      /*Width style color*/


- Height and width:
block elements always will be 100% width of the container
Height of 100% means the whole PARENT not the page 

Box Sizing:
When we change width and height, we change the content

#product-overview {
    box-sizing: border-box;
}

- Adding Header:
Using <header> element and <nav> tag
and target them using the "header" selector

header {

}

or using a classs which is better
.main-header {

}


- Pseudo Classes & Pseudo Elements

Classes: Defines style of a special state of an element     :class name example :hover
Element: Defines style of a specific part of an element     : : element name example     ::after

Summary:

selector {
    property: value
}

Property examples:
    color
    background
    display
    padding
    border
    margin
    width
    height
    etc

More CSS Selectors:

<div class="class1 class2"></div> /*You can use multiple clases on one element  .class1 { ... } .class2 { ... } */
<a href="#" class="active"></a> /* a.active { ... }*/


Useful links:
Box model
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model

Display Property:
https://developer.mozilla.org/en-US/docs/Web/CSS/display

PseudoClasses
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

PseudoElements:
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

Float:
https://developer.mozilla.org/en-US/docs/Web/CSS/float

Positioning Theory:
 https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning

z-index
https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

Stacking context:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context