CSS and JavaScript

Content:
- Manipulate Styles via JS
- Add and remove CSS classes via JS

Content:
- Responsive Design

Content:
- Text and Fonts
- Generic and font Families
- Using and importing font Families
- Font Properties
- Font shorthand
-------------------------------------------------------------------
- Adding a modal
<div class="backdrop"></div>
 <div class="modal">
    <h1 class="modal__title">Do you want to continue?</h1>
    <div class="modal__actions">
        <a href="start-hosting/index.html" class="modal__action">Yes!</a>
        <button class="modal__action modal__action--negative" type="button">No!</button>
    </div>
</div>

CSS:
see all in main.css file

JS
var backdrop = document.querySelect('.backdrop')
var modal = document.querySelect('.modal')
var selectPlanButton = document.querySelectAll('.plan button')


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

- Manipulating CSS classes via JS
    .open {
        display: block;
    }

    and Add this class whenever needs to show an element instead of change style.display from none to block and viceversa
    
    for (var i = 0; i < selectPlanButtons.length; i++) {
       selectPlanButtons[i].addEventListener('click', function () {
           <!-- modal.style.display = 'block';
           backdrop.style.display = 'block'; -->
           modal.classList.add('open') <!-- this adds a class to the classes of the element instead of rewrite it -->
       });
    }

    and for remove the class:
        modal.classList.remove('open')

<!-- ------------------------------------------------------------------------------------------ --> Responsive Design

- Responsive Design
On index.html
add
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Which tools do we have to add to a responsive design:

Viewport                                    |           Media Queries                       |
--------------------------------------------|-----------------------------------------------|
Adjust site to device viewport              |           change design depending on size     |   
No design changes                           |                                               |


1. Viewport:
    Adding meta tag
    name=viewport
    content=
    initial-scale
    maximum-scale
    minimum-scale
    user-scalable

- Mobile First  
2. Media Queries

@media (min-width: 40rem) {
    #product-overview h1 {
        font-size: 3rem
    }
}
/*Normally added at the end of the css file*/

- Breaking points for Responsive Design:
    mydevice.io
    Examples:
    768 px
    1000 px

- Logical Operators:
Examples:

    @media (min-width: 40rem)  and (min-height: 60rem){
        #product-overview h1 {
            font-size: 3rem
        }
    }

    @media (min-width: 40rem)  and (orientation: landscape){ /*Portrait is also a value to put here*/
        #product-overview h1 {
            font-size: 3rem
        }
    }

    @media (min-width: 40rem), (orientation: landscape){ /*comma indicates 'or' logical operator*/
        #product-overview h1 {
            font-size: 3rem
        }
    }

<!-- ------------------------------------------------------------------------------------------ --> Styling Form Elements:


Content:
Styling Inputs and Buttons
Validation Feedback Styles

Adding a Form:

<form action="index.html" class="signup-form">
    <label for="title">Title</label>
    <select id="title">
        <option value="mr">Mr.</option>
        <option value="ms">Ms.</option>
    </select>
    <label for="first-name">First name</label>
    <input type="text" id="first-name">
    <label for="last-name">Last name</label>
    <input type="text" id="last-name">
    <label for="email">E-Mail</label>
    <input type="email" id="email">
    <label for="password">Password</label>
    <input type="password" id="password">
    <input type="checkbox" id="agree-terms">
    <label for="agree-terms">Agree to
        <a href="#">Terms &amp; Conditions</a>
    </label>
    <button type="submit" class="button">Sign Up</button>
</form>

- Advanced Attribute Selectors:
[type] {
    color: red;
}
<input type="text">

[type = "email"] {
    color: red;
}
<input type="email">

[lang = "en-us"] {
    color: red
}
<p lang="en-us en-gb">Hi!</p>

[lang |="en"] {
    color: red;
}
<p lang="en-us">Hi!</p>

[href="#"]{
    color: red;
}
<a href="#all">Link</a>

[href$=".de"] {
    color: red;
}
<a href="ab.de">Link</a>

[src*="cdn"]{
    color: red;
}
<img src="i.cdn.com">

[src*="cdn" i]{
    color: red;
}
<img src="i.CDN.com">

- Example using combinators:

.signup-form input[id*="terms"],
.signup-form input[id*="terms] + label {
    display: inline-block
}

.singup-form input:not([type="checkbox"]),
signup-form select {
    border 1px solid #ccc;
    font: inherit
}

- Example Styling Checkbox:

.signup-form input[type="checkbox"]:checked {
    outline: none;
    background: green;
}

- Feedback Validation:
adding :valid and :invalid pseudoselectors
Adding a disabled class and defining it
To add a button:

button:focus {
    outline: none;
}

.button[disabled] {

}
<!-- ------------------------------------------------------------------------------------------ --> Fonts
Content:
- Text and Fonts
- Generic and font Families
- Using and importing font Families
- Font Properties
- Font shorthand


- Generic and font Families
Generic                                 Font Families
- serif                                 Times New Roman     Georgia
- sans-serif                            Helvetica           Verdana
- cursive                               Brush script        Mistral
- monospace                             Courier NEw         Licida Bright
- fantasy (not that usual)

- Browser Settings:
in Chrome:
    Preferences
    Costumise fonts
    Standard Font       Serif Font      Sans-serif font

What will be displayed:
Default by browser
or
CSS Generic Family
or
CSS Font Family (Not available in browsers)
We have 3 options to add Font Family to our Project
    1. Add to User's computer (Only local)
    2. Web fonts
    3. Retrieved from server

- Font Family Sintax:
    some-selector {
        font-family "Montserrat", sans-serif /*Font family, generic font (if the frist one is not found)*/
        font-family "Montserrat","Verdana",  sans-serif /*If first font Family is not found, it will look for the next and next and so on*/
    }

- Working with locally saved Fonts:
    go to cssfontstack

- Working with Google Fonts:
    go to google fonts
    standart using link <link href="googlefonturl" rel="stylesheet">
    Using @import on top of css file
    @import url('googlefonturl.com')

- Importing our Custom Fonts:
    Download font (ttf files)
    add to css file
    @font-face {
        font-family: "SomeNameThatYouLike";
        src: url('pathToTTFFiles.ttf')
        font-weight: 700 /*If you want to get different font-weight*/
    }

    and then you can use it where you want
    .someclass {
        font-family: "SomeNameThatYouLike"
    }

Other type of files that contains font types apart from ttf files
        - woff
        - eot (not supported)

- Font Properties:
        font-size
        font-variant: small-caps /*all small caracters converts to capital letters*/
        font-stretch: ultra-condensed
        letter-spacing: /*Lengths as values*/
        line-height:
        white-space: nowrap /*The entire text will be displayed in one line*/
                     pre, pre-wrap, pre-line   /*Another way to define it*/
        text-decoration: underline, overline, line-through, dotted, 
        text-shadow: 5px 5px

        font-display: swap, block, fallback, optional, auto /*Look up for more*/





Useful Links:

JavaScript Basics
https://academind.com/learn/javascript

JS CSS Styles:
 https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

Classlist
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

Absolute Lenghts:
https://www.w3.org/TR/css-values-3/#absolute-lengths

Devices Sizes:
https://bjango.com/articles/min-device-pixel-ratio/

Media Query Theory
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

Applying Media Queries
 https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

Web Safe Fonts:
https://www.cssfontstack.com/

Google Fonts:
https://fonts.google.com/

Line-height Property:
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height