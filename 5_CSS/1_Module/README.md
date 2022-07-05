CSS:
Cascading Style Sheets:
HTML -> The structure of the page
CSS -> The Styling of the page

<!-- ------------------------------------------------------------------------------------------ -->How to add CSS to HTML
1) Inline styling
    <body>
        <main>
            <section style="background: red;"> /* Not recommended */
                <h1>whatever</h1>
            </section>
        </main>
    </body>

2) Using Style tag
    <head>
        <style>
            section {
                background: red;
            }
        </style>
    </head>

3) Creating a CSS file
    <head>
        <link rel="stylesheet" href="./cssFile.css"> /* Recommended way */
    </head>     

<!-- ------------------------------------------------------------------------------------------ -->Setting up CSS rules

- Google fonts:
adding styles to a tag:
You can use tools like google fonts, going to google fonts web page
h1 {
    color: white;
    font-family:  
}

- Selectors:
Elements => set equal style for these elements (ex: h1)
Classes => Set equal style fot elements within the same clase (ex: <h1 class="my-classs">whatever</h1> called as .myclass {} in css file)
Universal => (ex: * {}) Rarely used 
IDs => set style to one specific element (ex: <h1 id="my-id">whatever</h1> called as #my-id {} in css file)
Attributes => Set equal style to all elements with same attributes (ex: <button disabled> Click me </button> calling as [disabled] {} in css file)

- Cascading style and Specificity:
Cascading: multiple rules can apply to the same element
Specificity: Resolve conflicts arising form multiple rules

Highest specificity
Inline Styles
#ID selectors
.class
Tag and pseudo-elements 
Lowest Specificity

- Inheritance

body {
    font-family : 'sans-serif'
}

Elements inherite style from their parents and the parents of their parents ...
Inheritance has a very low specificity

- Combinators
To set a property directly inherited:
First way:

.section-title {
    font-family: inherit;
}

Second way:
#product-overview h1 {   /* Here we added #id and tag, which means I combine and set style just for h1 that is direct or indirect 
    color: white;                               children of an element with id #product-overview */
    font-family: 'Anton', sans-serif
}

In this case, the rule with more information (more specificity) wins over less info.

Allow us to be more clear and specific

1) Adjacent Subling =>
    div + p {
        color: red;    /*This means only p tags that are adjacent (direct) siblings of div's will have this style*/
    }
    Elements share the same parent
    Second element comes immediately after first element.

2) General Sibling
    div - o {
        color: red;     /*This means even if the elements are not adjacent, the second element (p) will style*/
    }
    Elements share the same parent
    Second element comes after first element but does not have to be directly after

3) Child
    div > p {
        color: red      /*Only the direct childs (Any paragraph that is direct child of div will style*/
    }
    Second element is a direct child of first element

4) Descendant
    div p {
        color: red;   /*In this case, a p somewhere under a div will style*/
    }
    Second element is a descendant of the first element

- Value Types

1) Pre-defined
    display: block;
    overflow: auto;
2)Colors:
    background:red;
    color: #FFF
3) Length, Sizes, Numbers:
    height: 100px;
    width: 20%
4) Functions:
    background: url(...);
    transform: scale(..);
    
Useful Links:
CSS Working Groups
https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

CSS Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Common CSS Properties
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

CSS Combinators:
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors

CSS Specificity:
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity


