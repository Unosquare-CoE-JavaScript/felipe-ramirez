SASS
Content:

- What is SASS / SCSS:
Syntactically Awesome Style Sheets
Does not run in the browser
Exends CSS during Development

- SASS Features
.   Nested Rules
.   Helper Functions
.   Inherintance
.   Mixins
.   Partials
.   Conditions and loops
.   Variables


To Install SASS
https://sass-lang.com/install

Create a .sass file

html
    font-size: 94.75%

body
    font-family: Arial, sanss-serif

or scss file

html {
    font-size: 94.75%;                  /*This extensions support ; and {}*/
}

- Nesting Selectors:
    .class {
        margin: 1rem

        .subclass {
            margin: 0.2rem
        }

        .another-subclass {
            background-color: black
        }

        .class:hover {
            property: value
        }
    }

To run the project using scss files, go to the terminal

run: sass main.scss main.css        /*command origin file --> final file*/
    This generate a css file to be read by the browser


run sass --wathc main.scss:main.css
    This automatically recompile the scss file an create the css file


- Nested Properties
.container {
    flex-direction: column;
    flex-wrap: nowrap
}
Using SCSS
.container {
    flex: {
        direction: column;
        wrap: nowrap;
    }
}

- Variables
at the top of the file define variables:

$main-color: red;
$another-variable: value

.class {
    background-color: $main-color
}

- Storing Lists and Maps in variables

$border-default: 0.05rem solid $main-color      /*This stores a list of values*/
$colors: (main: red, secondary: $main-color);     /*This is a map, key and value are stored*/

To get a value:
map-get($colors, main)


- Better Imports and Partials

name a file like: _variables.scss (This is a partial)
put the variables
and import into the main file
@import "_variables.scss"

- Improving Media Queries:

html {
    font-size: 94.75%;

    @media (min-width: 40rem) {         /*This is nesting the media query closer to the element*/
        font-size: 125%
    }
}

- Inheritance:

    .sass-section {
        some properties to share
    }

    .sass-introduction {
        @extend .sass-section;      /*this is the way it will inherit the properties to share*/
        margin: 1rem
    }

- Mixins:

.container{
    display: -webkit...;
    display: flex
}
.another-class {
    display: -webkit...;
    display: flex
}

To not to repeat properties in 2 or more elements, create a mixin

@mixin display-flex () {
    display: -webkit---;
    display:flex
}

.container {
    @include display-flex()
}

.another-class {
    @include display-flex()
}

You can also use arguments

@mixin name-of-mixin($width) {
    @content
}

.class {
    @includes name-of-mixin(40rem) {
        font-size-125%
    }
}

- Ampersand Operator:

.documentation-link{

    &:hover,
    &:active {

    }
}


