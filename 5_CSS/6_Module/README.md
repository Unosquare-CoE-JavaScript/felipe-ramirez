Transforming Elements with CSS Transforms

Content:
- Rotating Moviing Skewing and Scaling elements
- 3d Transformations

Transitions and animations
Content:
- Transitions
- Animations

Writing Future-Proof CSS Code
Content:
- Modern CSS


----------------------------------------------------------------------------------------

- Rotating Elements and Setting transform-origin

    Rotation
 .someclass {
    transform: rotateZ(450deg);         /*Rotate an element from center*/
    transform-origin: left top          /*defines the origin to the rotation values like %, px or whatever*/
 }
    Translation
 .someclass {
    transform: rotateZ(450deg) translateX(1rem) translateY(1rem)
 }

- Skew and Scale:

.someclass {
    transform: skew(20deg);         /*The image is skewed to the left*/
    transform: scaleX(2);         /*Increments the scale of an image ie*/
}

- Transformation Shorthands:
.someclass {
    transform: rotate(45dg) translate(3.5rem, -1rem) skew(20deg, 20deg) scale(2)
}

- Transformations in 3D

.someClass {
    transform: pespective(100px) rotateX(30deg) rotateZ(30deg) translateX(1rem) translateZ(10rem)
    
}

parent-element-class {
    perspective: 100px;
    perspetive-origin: right
}

<!-- ------------------------------------------------------------------------------------------ --> Transitions and animations

----------------------------------------------  Transitions:
- Property: transition

.modal {
    opacity: 0;  /*To test*/
    transformation: translateY(-3rem);
    transition: opacity 0.5s ease-out, transform  0.5s ease-out 1s,        
                        /* 1. which property, 2. time to transition, 3. velocity to start 4.Time to wait before start*/
    
}

.open {
    opacity: 1;
    transform: transalateY(0);
}

- Timing Functions:
go to easing functions on google to see the graphics available

------------------------------------------------    Animations:
They are transitions setting what happens on any phase of the transitions

@keyframes wiggle {         /*The name that you want to use*/
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(10deg)
    }
}

.class {
    animation: wiggle 200ms 3s 8 alternate forwards;         /*The name that I set before*/
}
wiggle is the name of the keyframe we created
timming values refer to the velocity 
8 means the amount of times we want to execute this transformation
forwards means the final state of the keyframe will be the final state of the element


More than two states:

@keyframes wiggle {       
    0% {
        transform: rotateZ(0);
    }
    50% {
        transform: rotateZ(-10deg)
    }
    100% {
        transform: rotateZ(10deg)
    }
}

- Using JS Animation Event Listeners:

var ctaButton = document.querySelector(".main-nav__item--cta")

ctaButton.addEventListener('animationStart', function (event) {
    console.log('animation started', event)
})
ctaButton.addEventListener('animationend', function (event) {
    console.log('animation end', event)
})
ctaButton.addEventListener('animationiteration', function (event) {
    console.log('animation iteration', event)
})

<!-- ------------------------------------------------------------------------------------------ --> Writing Future-proof CSS Code:


- CSS Modules and Their Working Groups:

Go to https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

- Using CSS Variables:

:root {
    --my-color: red;
}

.class {
    color: var(--my-color)
}

.anotherclass {
    color: var(--my-color, green)   /*The second value is used in case the first one is not defined*/
}

- Vendor Prefixes: Properties depends on the browser and how old is the version of the browser
.container {
    display: -webkit-box;
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
}
To decide which prefix to use, go to:
autoprefixer

- Detecting Browser Suppor with @supports

body {
    padding-top: 3.5rem
}

@supports (display: grid) {
    body {
        display: grid;
        padding-top: 0
    }
}

- Polyfills
Is a JS Package which enables certain CSS features in Browsers which would not support it otherwise

- Eliminating Cross-Browser Inconsistencies
Use Reset-library (Normalize.css)

- How to name CSS Classes:
Do                                  Don't  
use kebab-case                      use snakeCase
name by feature                     name by style

Block Element Modifier (BEM)

/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
A uniform and consistent way of naminmg your CSS Classes        /*
. BLOCK __ ELEMENT -- MODIFIER                                  /*
                                                                /*
Example:                                                        /*
                                                                /*
.menu-main__item--size-big                                      /*
/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

- Vanilla CSS vs CSS Frameworks:
1. Vanilla CSS
    Advantages
        full control
        No unnecessary code
        Name Classes as you like
    Disadvantages:
        Build everything from scratch
        Danger of bad code

2. Bootstrap (Component Frameworks)
    Advant:
        Rapid development
        Follow Best Practices
        No need to be an expert
    Disad:
        No or little control
        Unnecessary overhead code
        All websites look the same

3. Tailwind (Utility Frameworks)
    Advan:
        Faster Development (Not that fast as bootstrap)
        Follow Best Practices
        No expert knowledge needed
    Disad:
        Little control
        Unnecessar overhead code

<!-- ------------------------------------------------------------------------------------------ --> 

Useful Links:
CSS Transforms:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms

3D Transforms:
https://desandro.github.io/3dtransforms/

Transition-property:
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property

Transition-duration:
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration

Transition-timing-function
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function

Transition-delay
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay

General Transition:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

1) animation-name  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name => animation-name: wiggle; 

2) animation-duration  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) => animation-duration: 200ms; 

3) animation-timing-function  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) => animation-timing-function: ease-out; 

Possible timing function values are: ease-out , ease-in , linear , cubic-bezier()  and a couple of others. See the above link for more details.

4) animation-delay  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) => animation-delay: 1s; 

5) animation-iteration-count  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) => animation-iteration-count: 8; 

6) animation-direction  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) => animation-direction: alternate; 

7) animation-fill-mode  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) => animation-fill-mode: forwards; 

8) animation-play-state  (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) => animation-play-state: running; 

You can read the official MDN article on CSS animations here: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

CSS Modules & Working Groups: https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

Vendor Prefixes: https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix

Which Vendor Prefixes should you use? => http://shouldiprefix.com/

@supports: https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports

BEM in Detail: http://getbem.com/introduction/

An introduction to Bootstrap 4: https://academind.com/learn/css/bootstrap-4-tutorial/

CSS Polyfills: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills