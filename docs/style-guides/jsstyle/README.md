# JavaScript Style Guide

> _An opinionated style guide for writing JavaScript._

## Table of Contents

1.  [Introduction](#introduction)
2.  [General Principles](#general-principles)
3.  [Whitespace](#whitespace)
4.  [Semicolons](#semicolons)
5.  [Parentheses](#parentheses)
6.  [Variables](#variables)
7.  [Strings](#strings)
8.  [Arrays](#arrays)
9.  [Functions](#functions)
10. [Strict Mode](#strict-mode)
11. [Arguments](#arguments)
12. [Regular Expressions](#regular-expressions)
13. [Blocks](#blocks)
14. [Equality](#equality)
15. [Errors](#errors)
16. [Comments](#comments)
17. [Naming](#naming)
18. [This](#this)
19. [Classes](#classes)
20. [Setters and Getters](#setters-and-getters)
21. [Method Chaining](#method-chaining)
22. [Documentation](#documentation)
23. [Performance](#performance)
24. [Modularity](#modularity)
25. [Client-side JavaScript](#client-side-javascript)
26. [Dependencies](#dependencies)
27. [Additional Resources](#additional-resources)
28. [License](#license)

## Introduction

Always abide by the **Law of Code Style Consistency**, or, in other words, _when in Rome, do as the Romans do_. 

While the code base to which you want to contribute may be a horrific mess in terms of aesthetic appearance and style, style consistency takes precedence over personal preference and canon. The more consistent a code base is in terms of style, the more readers of the code can focus on what the code does rather than deciphering changes in style.

So, even if your peers commit various _faux pas_ outlined below, as long as you are contributing to their code base, abide by their conventions.

A code base--module, repository, application, library, etc--should always appear to have a single author and not be a schizophrenic franken-mess. This stated, for those opportunities where you are the primary author, you should lead by example and write clean, readable, and testable code.

Hopefully, most of the conventions outlined below will help enable you to do so.

## General Principles

-   Prefer standards to non-standards.
-   Do one thing and do one thing well.
-   Keep your code clean. Create feature branches for experimental development, extensive annotations, and/or alternative implementations.

<!-- <rule-set> -->

* * *

## Whitespace

<!-- <rule> -->

### Rule: Use tab indentation

##### Reason

[Tab indentation][tab-indentation] allows a developer to specify the space indentation equivalent in her editor. For example, in [Sublime Text][sublime-text], you can specify in your user preferences

```text
"tab_width": 4
```

##### Notes

-   Even if you must use spaces, **never** mix tabs and spaces. This is formatting hell, as a simple find-and-replace is useless in the face of such chaos.

##### Enforcement

This project contains an [`.editorconfig`][editorconfig] file to be used in conjunction with IDE and/or browser plugins.

-   [sublime text][sublime-text-editorconfig]
-   [atom][atom-editorconfig]
-   [chrome][chrome-editorconfig]

<!-- </rule> -->

<!-- <rule> -->

### Rule: Include a space before leading brace

##### Reason

Including `1` space before a leading brace improves readability.

##### Bad Example

<!-- eslint-disable space-before-blocks -->

```javascript
// Do not...
function query(){
    // Do something...
}
```

##### Good Example

```javascript
// Do...
function query() {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Include spaces around arguments

##### Reason

Including `1` space before and after arguments improves readability.

##### Bad Example

<!-- eslint-disable comma-spacing -->

```javascript
// Do not...
function test(arg1,arg2,arg3) {
    // Do something...
}
```

##### Good Example

```javascript
// Do...
function test( arg1, arg2, arg3 ) {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Include spaces around array indices

##### Reason

Including `1` space before and after `array` indices improves readability.

##### Bad Example

```javascript
// Do not...
var foo = bar[10];
```

##### Good Example

```javascript
// Do...
var foo = bar[ 10 ];
```

##### Notes

-   Use discretion when using spaces around `array` indices buried in braces.

    ```javascript
    // Okay:
    var foo = myFunction( ( a === b ) ? bar[0] : bar[1] );
    ```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Include spaces around operators

##### Reason

Including `1` space before and after operators improves readability.

##### Bad Example

```javascript
// Do not...
var a=1+1;
```

##### Good Example

```javascript
// Do...
var a = 1 + 1;
```

##### Notes

-   Use discretion when operators are contained within complex expressions and `string` concatenation.

    ```javascript
    // Okay...
    var str = 'This is a long string by '+firstName+' '+lastName+', which may keep going and going and...';

    // Okay...
    var n = ((x+y+z)*(t-w-v)) + 5;
    ```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: No spaces around unary operators

##### Reason

Immediate juxtaposition makes evident what is being affected.

##### Bad Example

<!-- eslint-disable space-unary-ops, no-plusplus -->

```javascript
// Do not...
x = ++ y;
z = z ++;
```

##### Good Example

<!-- eslint-disable no-plusplus -->

```javascript
// Do...
x = ++y;
z = z++;
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Include a space after comment marks

##### Reason

Including `1` space after comment marks improves readability.

##### Bad Example

<!-- eslint-disable spaced-comment -->

```javascript
// Do not...

//This is a single-line comment.

/*
*This is a mult-
*line comment.
*/
```

##### Good Example

```javascript
// Do...

// This is a single-line comment.

/*
* This is a multi-
* line comment.
*/
```

##### Enforcement

TODO

<!-- </rule> -->

<!-- <rule> -->

### Rule: No multi-line comment indentation

##### Reason

Some IDEs have a tendency to auto-indent based on the previous line, thus pushing all subsequent lines `1` character to the right.

##### Bad Example

```javascript
// Do not...

/*
 * This is a multi-line comment.
 * The comment continues and continues...
 * ...until it no longer does.
 */
```

##### Good Example

```javascript
// Do...

/*
* This is a multi-line comment.
* The comment continues and continues...
* ...until it no longer does.
*/
```

##### Enforcement

In general, hard to automatically enforce. Mostly enforced through code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Indent chained methods

##### Reason

Indentation improves readability.

##### Bad Example

```javascript
// Do not...
var svg = d3.select( '.main' ).append( 'svg:svg' ).attr( 'class', 'canvas' ).attr( 'data-id', Date.now() ).attr( 'width', 100 ).attr( 'height', 100 );
```

##### Good Example

```javascript
// Do...
var svg = d3.select( '.main' )
    .append( 'svg:svg' )
    .attr( 'class', 'canvas' )
    .attr( 'data-id', Date.now() )
    .attr( 'width', 100 )
    .attr( 'height', 100 );
```

##### Enforcement

Hard to automatically enforce. Mostly through code review. TODO: partial enforcement via lint rule.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No newlines between conditions

##### Reason

Newline is unnecessary.

##### Bad Example

```javascript
// Do not...
if ( foo === bar ) {
    // Do something...
}
else {
    // Do something different...
}
```

##### Good Example

```javascript
// Do...
if ( foo === bar ) {
    // Do something...
} else {
    // Do something different...
}
```

##### Notes

-   Use discretion when faced with multiple conditions.

    ```javascript
    // Do...
    if ( foo === bar ) {
        // Do something...
    } else if ( foo === beep ) {
        // Do something else...
    } else if ( bar === bar ) {
        // Do something more...
    } else {
        // Do something different...
    }

    // Okay...
    if ( foo === bar ) {
        // Do something...
    }
    else if ( foo === beep ) {
        // Do something else...
    }
    else if ( baz === bar ) {
        // Do something more...
    }
    else {
        // Do something different...
    }
    ```

-   Use discretion when documenting conditions.

    ```javascript
    // Okay...

    // `bar` can only equal `foo` when...
    if ( foo === bar ) {
        // Do something...
    }
    // `beep` can only equal `foo` when...
    else if ( foo === beep ) {
        // Do something else...
    }
    // This pathway should rarely be taken...
    else if ( baz === bar ) {
        // Do something more...
    }
    // `foo` equals `bap`
    else {
        // Do something different...
    }
    ```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No case indentation

##### Reason

Indenting the `case` keyword within `switch` statements results in excessive indentation.

##### Bad Example

<!-- eslint-disable indent -->

```javascript
// Do not...
switch ( foo ) {
    case 'bar':
        // Do something...
        break;
    case 'beep':
        // Do something...
        break;
    default:
        // Do something...
}
```

##### Good Example

```javascript
// Do...
switch ( foo ) {
case 'bar':
    // Do something...
    break;
case 'beep':
    // Do something...
    break;
default:
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule-set> -->

<!-- <rule-set> -->

* * *

## Semicolons

<!-- <rule> -->

### Rule: Use semicolons

##### Reason

While semicolons are [not required][ecma-262] in most cases due to [automatic semicolon insertion][ecma-262], prefer to be explicit in specifying when a statement ends. Additionally, in certain REPL environments, semicolons acquire special meaning; notably, they silence return value output.

##### Bad Example

<!-- eslint-disable semi -->

```javascript
// Do not...
var bar = foo()
```

##### Good Example

```javascript
// Do...
var bar = foo();
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Parentheses

<!-- <rule> -->

### Rule: Include around ternary test condition

##### Reason

Including parentheses around the test condition in ternary operators improves readability.

##### Bad Example

<!-- eslint-disable stdlib/ternary-condition-parentheses -->

```javascript
// Do not...
var foo = a === b ? a*3 : b/4;
```

##### Good Example

```javascript
// Do...
var foo = ( a === b ) ? a*3 : b/4;
```

##### Enforcement

TODO

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Variables

<!-- <rule> -->

### Rule: Declare variables at top of scope

##### Reason

Doing so makes variable hoisting explicit.

##### Bad Example

```javascript
// Do not...
function myFunction() {
    var foo = 3;

    if ( foo ) {
        // Do something...
    }
    var bar = foo * 5;
}
```

##### Good Example

```javascript
// Do...
function myFunction() {
    var foo = 3;
    var bar;

    if ( foo ) {
        // Do something...
    }
    bar = foo * 5;
}
```

##### Enforcement

TODO: ESLint rule (and code review)

<!-- </rule> -->

<!-- <rule> -->

### Rule: Declare variables separately

##### Reason

Adding, removing, and reordering variables is easier. Additionally, `git` diffs are cleaner.

##### Bad Example

<!-- eslint-disable one-var -->

```javascript
// Do not...
var boop = 'hello',
    beep = false,
    bar = null,
    foo = 3;
```

##### Good Example

```javascript
// Do...
var boop = 'hello';
var beep = false;
var bar = null;
var foo = 3;
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Declare variables on separate lines

##### Reason

Declaring variables on separate lines improves readability.

##### Bad Example

<!-- eslint-disable max-statements-per-line -->

```javascript
// Do not...
var beep; var boop;
var bop; var bap; var i;
```

##### Good Example

```javascript
// Do...
var beep;
var boop;
var bop;
var bap;
var i;
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Declare assigned variables first

##### Reason

Visual alignment and thus improved readability.

##### Bad Example

```javascript
// Do not...
var beep;
var foo = 3;
var boop;
var bar = null;
```

##### Good Example

```javascript
// Do...
var bar = null;
var foo = 3;
var beep;
var boop;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Order variable declarations based on character length

##### Reason

Visual alignment and thus improved readability.

##### Bad Example

```javascript
// Do not...
var a;
var foo;
var b;
var ii;
var bar;
```

##### Good Example

```javascript
// Do...
var foo;
var bar;
var ii;
var a;
var b;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Strings

<!-- <rule> -->

### Rule: Use single quotes

##### Reason

Reserve double quotes for in-string parenthetical references or quotes. Additionally, single quotes consume less visual space.

##### Bad Example

<!-- eslint-disable quotes -->

```javascript
// Do not...
var str = "Hello";
```

##### Good Example

```javascript
// Do...
var str = 'Hello';
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: No template strings

##### Reason

Immediate evaluation prevents a template being stored in a variable. Token syntax is fixed. Whitespace sensitivity causes alignment issues, especially within nested code blocks.

##### Notes

-   A function which performs string concatenation is equivalently effective.

##### Enforcement

TODO: ESLint rule. Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Arrays

<!-- <rule> -->

### Rule: Use literal syntax for empty array

##### Reason

Instantiation with the `new` operator is unnecessary.

##### Bad Example

<!-- eslint-disable no-array-constructor -->

```javascript
// Do not...
var arr = new Array();
```

##### Good Example

```javascript
// Do...
var arr = [];
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use new keyword when length is known

##### Reason

Allows compiler to pre-allocate memory.

##### Bad Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do not...
var arr = [];
var i;
for ( i = 0; i < 100; i++ ) {
    arr.push( Math.random() );
}
```

##### Good Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
var arr = new Array( 100 );
var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = Math.random();
}
```

##### Notes

-   Do **not** use the `new` operator if the `array` length is **very large** due to how compilers handle "fast" elements. Instead, to ensure "fast" elements,

    <!-- eslint-disable stdlib/no-builtin-math -->

    ```javascript
    var arr;
    var i;

    arr = [];
    for ( i = 0; i < 1e7; i++ ) {
        arr.push( Math.random() );
    }
    ```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use a for loop to convert array-like objects

##### Reason

More explicit and efficient. Additionally, passing the `arguments` object to any function leads to optimization hell.

##### Bad Example

```javascript
// Do not...
var args = Array.prototype.slice.call( arguments );
```

##### Good Example

```javascript
// Do...
var nargs = arguments.length;
var args = new Array( nargs );
var i;
for ( i = 0; i < nargs; i++ ) {
    args[ i ] = arguments[ i ];
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Copy approach depends on array length

##### Reason

When copying a small `array`, using `Array#slice()` incurs a function overhead which outweighs benefits. Thus, a `for` loop is more efficient. For larger `arrays`, function cost is comparable to or less than loop cost in addition to the runtime engine being able to optimize for copying large chunks of memory. 

##### Small Array Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
var arr = new Array( 10 );
var out = new Array( arr.length );
var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = Math.random();
}
// Copy...
for ( i = 0; i < arr.length; i++ ) {
    out[ i ] = arr[ i ];
}
```

##### Large Array Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
var arr = new Array( 10000 );
var out;
var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = Math.random();
}
// Copy...
out = arr.slice();
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Objects

<!-- <rule> -->

### Rule: Split properties over multiple lines

##### Reason

Splitting `object` properties over multiple lines improves readability.

##### Bad Example

<!-- eslint-disable object-curly-newline, no-restricted-syntax, object-property-newline, max-statements-per-line -->

```javascript
// Do not...
var obj = { 'a': null, 'b': 5, 'c': function c() { return true; }, 'd': ( foo === bar ) ? foo : bar };
```

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do...
var obj = {
    'a': null,
    'b': 5,
    'c': function c() {
        return true;
    },
    'd': ( foo === bar ) ? foo : bar
};
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No object value alignment

##### Reason

For complex `objects`, matching properties and their corresponding values becomes more difficult, thus hindering readability.

##### Bad Example

<!-- eslint-disable key-spacing -->

```javascript
// Do not...
var obj = {
    'prop'     : true,
    'attribute': 'foo',
    'name'     : 'bar'
};
```

##### Good Example

```javascript
// Do...
var obj = {
    'prop': true,
    'attribute': 'foo',
    'name': 'bar'
};
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No trailing comma

##### Reason

An object which includes a trailing comma is not valid JSON.

##### Bad Example

<!-- eslint-disable comma-dangle -->

```javascript
// Do not...
var obj = {
    'prop': true,
    'attribute': 'foo',
    'name': 'bar', // <= DON'T
};
```

##### Good Example

```javascript
// Do...
var obj = {
    'prop': true,
    'attribute': 'foo',
    'name': 'bar'
};
```

##### Enforcement

TODO: ESLint rule

<!-- <rule> -->

<!-- <rule> -->

### Rule: No object literal shorthand

##### Reason

Unnecessary syntactic sugar. In complex objects, shorthand notation decreases readability. Prefer making key-value pairs explicit.

##### Bad Example

<!-- eslint-disable object-property-newline, object-shorthand, object-curly-newline -->

```javascript
var foo = 'beep';
var x = true;
var y = 10;

var obj = { foo, 'baz': 'boop', x, y };
```

##### Good Example

```javascript
var foo = 'beep';
var x = true;
var y = 10;

var obj = {
    'foo': foo,
    'baz': 'boop',
    'x': x,
    'y': y
};
```

##### Enforcement

TODO: ESLint rule. Code review.

<!-- </rule> -->

<!-- <rule-set> -->

<!-- <rule-set> -->

* * *

## Functions

<!-- <rule> -->

### Rule: Declare functions using function statements

##### Reason

Declaring `functions` using [function statements][function-statements], rather than [function expressions][function-expressions], (1) avoids problems encountered due to [hoisting][hoisting] and (2) minimizes the use of anonymous `functions`.

##### Bad Example

<!-- eslint-disable func-style, func-names, no-restricted-syntax -->

```javascript
// Do not...
var beep = function () {
    console.log( 'boop' );
};
```

##### Good Example

```javascript
// Do...
function beep() {
    console.log( 'boop' );
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Declare functions at highest possible scope

##### Reason

Minimizes closures and helps to prevent nested callback hell.

##### Bad Example

```javascript
// Do not...
function beep() {
    boop();
    function boop() {
        // Do something...
    }
}
```

##### Good Example

```javascript
// Do...
function beep() {
    boop();
}

function boop() {
    // Do something...
}
```

##### Enforcement

Code review. Look for excessive indentation.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No declarations within loops or conditions

##### Reason

Declaring within loops and conditions may result in repeated function creation, and variables in the outer scope may change leading to subtle bugs.

##### Bad Example

<!-- eslint-disable no-restricted-syntax, block-scoped-var -->

```javascript
// Do not...
function beep( idx, clbk ) {
    clbk( 'beep'+idx );
}
for ( var i = 0; i < 10; i++ ) {
    beep( i, function bop( msg ) {
        console.log( msg );
    });
}
```

##### Good Example

```javascript
// Do...
function beep( idx, clbk ) {
    clbk( 'beep'+idx );
}
function bop( msg ) {
    console.log( msg );
}

for ( var i = 0; i < 10; i++ ) {
    beep( i, bop );
}
```

##### Bad Example

<!-- eslint-disable no-restricted-syntax, no-loop-func -->

```javascript
// Do not...
for ( var i = 0; i < 10; i++ ) {
    setTimeout( function onTimeout() {
        console.log( i );
    }, 1000 );
}
```

##### Good Example

```javascript
// Do...
function clbk( idx ) {
    return onTimeout;

    function onTimeout() {
        console.log( idx );
    }
}
for ( var i = 0; i < 10; i++ ) {
    setTimeout( clbk( i ), 1000 );
}
```

##### Bad Example

<!-- eslint-disable no-inner-declarations, stdlib/no-builtin-math -->

```javascript
// Do not...
var i = Math.random() * 20;
if ( i < 11 ) {
    bap();
    function bap() {
        // Do something...
    }
}
```

##### Good Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
function bap() {
    // Do something...
}
var i = Math.random() * 20;
if ( i < 11 ) {
    bap();
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Parentheses around immediately invoked function expressions

##### Reason

Makes a clear distinction between a `function` declaration and one that is immediately invoked.

##### Bad Example

<!-- eslint-skip -->

```javascript
// Do not...
function init() {
    // Do something...
}();
```

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do...
(function init() {
    // Do something...
})();
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Declare enclosed functions below return statement

##### Reason

Reduces noise when first attempting to understand implementation flow, especially if enclosed functions are documented.

##### Bad Example

<!-- eslint-disable no-use-before-define, stdlib/no-builtin-math -->

```javascript
// Don't...
function getEquation( a, b, c ) {
    /**
    * Computes a complex equation.
    *
    * @private
    * @param {number} e - dynamic value
    * @returns {number} equation output
    */
    function eqn( e ) {
        return e - d + ( 15 * a ) + ( Math.pow( b, 1 / c ) );
    }
    var d;

    a *= 3;
    b = a / 5;
    c = Math.pow( b, 3 );

    d = a + ( b / c );

    return eqn;
}
```

##### Good Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
function getEquation( a, b, c ) {
    var d;

    a *= 3;
    b = a / 5;
    c = Math.pow( b, 3 );

    d = a + ( b / c );

    return eqn;

    /**
    * Computes a complex equation.
    *
    * @private
    * @param {number} e - dynamic value
    * @returns {number} equation output
    */
    function eqn( e ) {
        return e - d + ( 15 * a ) + ( Math.pow( b, 1 / c ) );
    }
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use primitive expressions over functional counterparts

##### Reason

Function calls introduce additional overhead and, often, functional counterparts do not save space, a frequently cited benefit.

##### Bad Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do not...
var squared = arr.map( function square( value ) {
    return value * value;
});
```

##### Good Example

```javascript
var squared = new Array( arr.length );

// Do...
for ( var i = 0; i < arr.length; i++ ) {
    squared[ i ] = arr[ i ] * arr[ i ];
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No arrow functions

##### Reason

(1) They are not needed. (2) The syntax allows too much style variability.

<!-- eslint-disable arrow-body-style, no-restricted-syntax, func-style, arrow-parens, max-statements-per-line -->

```javascript
// No braces:
var f = x => x + 1;

// Some braces:
f = (x, y) => x + y;

// Some other braces:
f = x => { x += 20; return x.toString(); };

// Many braces:
f = (x, y) => { x += y; return x.toString(); };
```

(3) Implicit `returns` can lead to subtle bugs and require a constant mental model as to what is returned and when.

<!-- eslint-skip -->

```javascript
var y = x => x;
z = y( 10 );
// returns 10

y = x => { x };
z = y( 10 );
// returns undefined

y = ( x ) => { x };
z = y( 10 );
// returns undefined

y = ( x ) => x;
z = y( 10 );
// returns 10

y = ( x ) => { return x };
z = y( 10 );
// returns 10

y = x => return x;
z = y( 10 );
// => Uncaught SyntaxError: Unexpected token return
```

##### Bad Example

<!-- eslint-disable arrow-body-style, no-restricted-syntax, arrow-parens -->

```javascript
var squared = arr.map( x => x*x );
```

##### Good Example

```javascript
function square( x ) {
    return x * x;
}

var squared = arr.map( square );
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Error-first asynchronous callbacks

##### Reason

This follows the Node.js callback convention.

##### Good Example

```javascript
// Do...
function clbk( error, value ) {
    if ( error ) {
        return;
    }
    console.log( value );
}

function onResponse( error, response, body ) {
    if ( error ) {
        clbk( error );
        return;
    }
    clbk( null, body );
}

request({
    'method': 'GET',
    'uri': 'http://127.0.0.1'
}, onResponse );
```

##### Notes

-   If no errors, the `error` argument should be `null`.

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: No promises

##### Reason

Error handling in `promises` is ill-defined. These primitives originated primarily due to poor coding practices when using callbacks rather than out of existential need.

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Prefer closures and function factories

##### Reason

Avoids nested callback hell.

##### Bad Example

```javascript
// Do not...
function deferredComputation( value ) {
    return compute;
    function compute() {
        return cube();
        function cube() {
            var v;
            v = mult( value, value );
            v = mult( v, value );
            return v;
            function mult( x, y ) {
                return x * y;
            }
        }
    }
}
```

##### Good Example

```javascript
// Do...
function mult( x, y ) {
    return x * y;
}
function cube( value ) {
    var v;
    v = mult( value, value );
    v = mult( v, value );
    return v;
}
function deferred( value ) {
    return compute;

    function compute() {
        return cube( value );
    }
}
function deferredComputation( value ) {
    return deferred( value );
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Name all functions

##### Reason

Named `functions` are easier to find in stack traces and consequently debug.

##### Bad Example

<!-- eslint-disable no-restricted-syntax, func-names -->

```javascript
// Do not...

function beep( f ) {
    f();
}

beep( function () {
    console.log( 'boop' );
});
```

##### Good Example

```javascript
// Do...

function beep( f ) {
    f();
}
function boop() {
    console.log( 'boop' );
}

beep( boop );
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Strict Mode

<!-- <rule> -->

### Rule: Use strict mode

##### Reason

Writing JavaScript in [strict mode][strict-mode] discourages bad practices, avoids silent errors, and can result in better performance, as the compiler can make certain assumptions about the code.

##### Good Example

<!-- eslint-skip -->

```javascript
'use strict';

NaN = null; // throws an Error
```

##### Notes

-   Prefer [strict mode][strict-mode] for a whole script. If not possible, use [strict mode][strict-mode] for each available `function`.

    ```javascript
    function beep() {
        'use strict';

        delete Object.prototype; // throws an Error
    }
    ```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Arguments

<!-- <rule> -->

### Rule: Never pass the arguments variable to another function

##### Reason

Doing so automatically puts the `function` in optimization hell.

##### Bad Example

```javascript
// Do not...
function fcn() {
    var out = foo( arguments );
}
```

##### Good Example

```javascript
// Do...
function fcn() {
    var nargs = arguments.length;
    var args = new Array( nargs );
    var out;
    var i;

    for ( i = 0; i < nargs; i++ ) {
        args[ i ] = arguments[ i ];
    }
    out = foo( args );
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Reassign input arguments when using the arguments variable

##### Reason

Recycling variables when mentioning `arguments` in a `function` body prevents compiler optimization.

##### Bad Example

```javascript
// Do not...
function fcn( value, options ) {
    var err;
    if ( arguments.length < 2 ) {
        options = value;
    }
    err = validate( options );
    if ( err ) {
        throw err;
    }
    // ...
}
```

##### Good Example

```javascript
// Do...
function fcn( value, options ) {
    var opts;
    var err;

    if ( arguments.length < 2 ) {
        opts = value;
    } else {
        opts = options;
    }
    err = validate( opts );
    if ( err ) {
        throw err;
    }
    // ...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule-set> -->

<!-- <rule-set> -->

* * *

## Regular Expressions

<!-- <rule> -->

### Rule: Assign to variables

##### Reason

Ensures a regular expression is only created once and improves readability.

##### Bad Example

```javascript
// Do not...
function beep( str ) {
    if ( /\.+/.test( str ) ) {
        // Do something...
    }
}

beep();
```

##### Good Example

```javascript
// Do...
var RE = /\.+/;

function beep( str ) {
    if ( RE.test( str ) ) {
        // Do something...
    }
}

beep();
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Document regular expressions

##### Reason

Regular expressions are error prone and difficult to understand without thorough examination.

##### Good Example

<!-- eslint-disable no-useless-escape -->

```javascript
/**
* Matches parts of a regular expression string.
*
* Regular expression: `/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/`
*
* `/^\/`
*
* -   match a string that begins with a `/`
*
* `()`
*
* -   capture
*
* `(?:)+`
*
* -   capture, but do not remember, a group of characters which occur one or more times
*
* `\\\/`
*
* -   match the literal `\/`
*
* `|`
*
* -   OR
*
* `[^\/]`
*
* -   anything which is not the literal `\/`
*
* `\/`
*
* -   match the literal `/`
*
* `([imgy]*)`
*
* -   capture any characters matching `imgy` occurring zero or more times
*
* `$/`
*
* -   string end
*
* @constant
* @type {RegExp}
* @default /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/
*/
var RE = /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Blocks

<!-- <rule> -->

### Rule: Use curly braces

##### Reason

Not using them is a common source of bugs.

##### Bad Example

<!-- eslint-disable curly -->

```javascript
// Do not...
function beep() {
    if ( foo === bar ) return true;
}
```

##### Good Example

```javascript
// Do...
function beep() {
    if ( foo === bar ) {
        return true;
    }
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Place leading brace on same line

##### Reason

Avoids unnecessary newline character.

##### Bad Example

```javascript
// Do not...
if ( foo === bar )
{
    // Do something...
}

function query()
{
    // Do something...
}
```

##### Good Example

```javascript
// Do...
if ( foo === bar ) {
    // Do something...
}

function query() {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Early return

##### Reason

Doing so reduces code branching and indentation.

##### Bad Example

```javascript
// Do not...
function foo( value ) {
    var str;
    if ( value === 'bar' ) {
        str = 'Hello';
    } else {
        str = 'Goodbye';
    }
    return str;
}
```

##### Good Example

```javascript
// Do...
function foo( value ) {
    if ( value === 'bar' ) {
        return 'Hello';
    }
    return 'Goodbye';
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Early continue

##### Reason

Reduces code branching and indentation.

##### Bad Example

```javascript
// Do not...
for ( var i = 0; i < 10; i++ ) {
    if ( i !== 5 ) {
        // Do something...
    }
}
```

##### Good Example

```javascript
// Do...
for ( var i = 0; i < 10; i++ ) {
    if ( i === 5 ) {
        continue;
    }
    // Do something...
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Equality

<!-- <rule> -->

### Rule: Use strict equality

##### Reason

Not enforcing type equality is a source of bugs.

##### Bad Example

<!-- eslint-disable eqeqeq -->

```javascript
// Do not...
if ( foo != bar ) {
    // Do something...
}
```

##### Good Example

```javascript
// Do...
if ( foo === bar ) {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Errors

<!-- <rule> -->

### Rule: Provide descriptive error messages

##### Reason

Simplifies debugging.

##### Bad Example

```javascript
// Do not...
var err = new Error( '1' );
```

##### Good Example

```javascript
// Do...
var err = new TypeError( 'invalid argument. Window option must be a positive integer. Value: `' + value + '`.' );
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Fail fast

##### Reason

Throw and provide tailored `error` messages if expected conditions are not met. Doing so facilitates debugging and eases code maintenance (see [programmer errors](https://www.joyent.com/developers/node/design/errors)).

##### Bad Example

```javascript
// Don't...

/**
* Beep boop.
*
* @param {Function} clbk - callback
*/
function boop( clbk ) {
    clbk();
}
```

##### Good Example

```javascript
// Do...

/**
* Beep boop.
*
* @param {Function} clbk - callback
*/
function beep( clbk ) {
    if ( !arguments.length ) {
        throw new Error( 'insufficient input arguments. Must provide a callback function.' );
    }
    clbk();
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Perform dynamic type checking

##### Reason

For public facing APIs, dynamic type checking makes contracts explicit, facilitates testing, and helps mitigate the presence of subtle bugs.

##### Bad Example

```javascript
// Do not...
function bar( opts ) {
    // What happens if `opts` or `opts.ssl` are not objects???
    var key = opts.ssl.key;
}
```

##### Good Example

```javascript
// Do...
function foo( opts ) {
    if ( !isObject( opts ) ) {
        throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + opts + '`.' );
    }
}
```

##### Notes

-   When performing dynamic type checks, **always** include the invalid value in the `error` message. Doing so makes debugging and logging easier.

    ```javascript
    // Do...
    function bop( len ) {
        if ( !isPositiveInteger( len ) ) {
            throw new TypeError( 'invalid argument. Length must be a positive integer. Value: `' + len + '`.' );
        }
    }

    // Do not...
    function bap( len ) {
        if ( !isPositiveInteger( len ) ) {
            throw new Error( 'invalid value.' );
        }
    }
    ```

##### Enforcement

-   Unit tests
-   Code review

<!-- </rule> -->

<!-- <rule> -->

### Rule: Never trap uncaught exceptions

##### Reason

Not crashing upon encountering an [`uncaughtException`][uncaught-exception] leaves your application in an undefined state and can result in memory leaks.

##### Bad Example

```javascript
// DO NOT...
function onError( error ) {
    console.error( 'Caught exception. Err: %s', error.message );
}
process.on( 'uncaughtException', onError );
```

##### Okay Example

<!-- eslint-disable no-process-exit -->

```javascript
// Okay...
function onError( error ) {
    console.error( 'Caught exception. Err: %s', error.message );
    process.exit( 1 ); // <= THIS IS KEY!!!!
}
process.on( 'uncaughtException', onError );
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Error-first asynchronous callbacks

##### Reason

Designing asynchronous APIs in this fashion matches the [convention][errbacks] found in Node.js core. If no `error` occurs, the first parameter when invoking the callback should be `null`.

##### Bad Example

```javascript
// Do not...
function badAsync( clbk ) {
    setTimeout( done, 1000 );
    function done() {
        clbk( 'beep' );
    }
}
```

##### Good Example

```javascript
// Do...
function goodAsync( clbk ) {
    setTimeout( done, 1000 );
    function done() {
        clbk( null, 'beep' );
    }
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Return status codes

##### Reason

[Status codes][http-status-codes] provide information as to the cause and nature of an HTTP request error.

##### Bad Example

```javascript
// Do not...
response
    .send( 200 )
    .json({
        'success': false
    });
```

##### Good Example

```javascript
// Do...
response
    .status( 502 )
    .json({
        'status': 502,
        'message': 'unable to connect to remote database.'
    });
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Comments

<!-- <rule> -->

### Rule: Use multi-line comment syntax for multi-line comments

##### Reason

Fewer characters per line compared to using multiple single-line comment identifiers.

##### Bad Example

```javascript
// Do not...

// Beep boop.
//
// @param {number} x - first argument
// @param {number} y - second argument
function beep( x, y ) {
    // Do something...
}
```

##### Good Example

```javascript
// Do...

/**
* Beep boop.
*
* @param {number} x - first argument
* @param {number} y - second argument
*/
function beep( x, y ) {
    // Do something...
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use JSDoc

##### Reason

[JSDoc][jsdoc] provides structured source code documentation.

##### Bad Example

```javascript
// Do not...
function transform( str ) {
    return str + ' has been transformed.';
}
```

##### Good Example

```javascript
// Do...

/**
* String transformer.
*
* @param {string} str - string to be transformed.
* @returns {string} transformed string
*
* @example
* var out = transform( 'beep' );
* // returns 'beep has been transformed.'
*/
function transform( str ) {
    return str + ' has been transformed.';
}
```

##### Notes

-   Be sure to include parameters, parameter types, return types (if any), errors (if any can be thrown), and examples.
-   Use Markdown syntax for extended comments.

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: use single-line comment syntax for single-line comments

##### Reason

Fewer characters than using multi-line syntax for single-line comments.

##### Bad Example

```javascript
// Do not...

/* Set the default value to null. */
var foo = bar || null;
```

##### Good Example

```javascript
// Do...

// Set the default value to null.
var foo = bar || null;
```

##### Notes

-   In general, prefer placing the comment above the comment subject and place an empty line above the comment.

    <!-- eslint-disable stdlib/empty-line-before-comment -->

    ```javascript
    // Okay for short comments (sometimes)...
    var foo = bar || null; // bar can be `0`

    // Do not...
    var beep = 'beep';
    // Comment about `boop`...
    var boop = 'boop';
    // Comment about `bap`...
    var bap = 'bap';
    ```

##### Enforcement

Code review. TODO: ESLint rule (?).

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use annotations

##### Reason

Code annotations provide search identifiers.

##### FIXME

Use `// FIXME:` to annotate problems.

<!-- eslint-disable no-warning-comments -->

```javascript
function foo() {
    // FIXME: misses the case where value is 0. Want to check if value is not numeric.
    if ( !value ) {
        return false;
    }
}
```

##### TODO

Use `// TODO:` to annotate tasks.

<!-- eslint-disable no-warning-comments -->

```javascript
function Ctor() {
    // TODO: make `name` property value publicly accessible.
    this.name = 'foobar';

    return this;
}
```

##### HACK

Use `// HACK:` to annotate fragile/non-general solutions.

<!-- eslint-disable no-warning-comments -->

```javascript
// HACK: temporary fix; host and port should be abstracted to another module handling configuration.
var host = '127.0.0.1';
var port = 7331;
```

##### WARNING

Use `// WARNING:` to annotate possible gotchas/pitfalls.

<!-- eslint-disable no-warning-comments -->

```javascript
// WARNING: shared reference of a mutable object; possible side effects.
var a = b = {};
```

##### OPTIMIZE

Use `// OPTIMIZE:` to annotate code which needs optimizing.

<!-- eslint-disable no-warning-comments -->

```javascript
// OPTIMIZE: use a loop rather than recursion
function factorial( x ) {
    if ( x <= 1 ) {
        return 1;
    }
    return x * factorial( x-1 );
}
```

##### NOTE

Use `// NOTE:` to annotate questions, comments, or anything which does not fit under `TODO`, `FIXME`, `HACK`, `WARNING`, `OPTIMIZE` which should be brought to a user's attention.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// NOTE: consider optimizing this for large arrays (len > 64K).
var arr = new Array( len );
for ( var i = 0; i < len; i++ ) {
    arr[ i ] = Math.random();
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Naming

<!-- <rule> -->

### Rule: Use camelCase for variables

##### Reason

Standard JavaScript convention for `functions`, `objects`, instances, and variables.

##### Bad Example

```javascript
// Do not...
function testfunction() {
    // Do something...
}

var MyObject = {};

var reallylongvariablename = 0;
```

##### Good Example

```javascript
// Do...
function testFunction() {
    // Do something...
}

var myObject = {};

var myInstance = new Ctor();
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use PascalCase for constructors and classes

##### Reason

Standard JavaScript convention for constructors and classes.

##### Bad Example

```javascript
// Do not...
function roboRobot() {
    this.name = 'Boop';
    return this;
}

var robo = new roboRobot();
```

##### Good Example

```javascript
// Do...
function RoboRobot() {
    this.name = 'Beep';
    return this;
}

var robo = new RoboRobot();
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Prefix private properties with an underscore

##### Reason

Standard JavaScript convention when naming private properties.

##### Bad Example

```javascript
// Do not...
function Robot() {
    this.__private__ = true;
    this.private_ = true;
    return this;
}
```

##### Good Example

```javascript
// Do...
function Robot() {
    this._private = true;
    return this;
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Name all functions

##### Reason

Named `functions` are easier to find in stack traces and consequently debug.

##### Bad Example

<!-- eslint-disable no-restricted-syntax, func-names -->

```javascript
// Do not...
request({
    'method': 'GET',
    'uri': 'http://127.0.0.1'
}, function ( error, response, body ) {
    if ( error ) {
        throw error;
    }
    // Do something...
});
```

##### Good Example

```javascript
// Do...
function onResponse( error, response, body ) {
    if ( error ) {
        throw error;
    }
    // Do something...
}

request({
    'method': 'GET',
    'uri': 'http://127.0.0.1'
}, onResponse );
```

##### Bad Example

<!-- eslint-disable no-restricted-syntax, arrow-body-style, arrow-parens -->

```javascript
// Do not...
var arr = [ 1, 2, 3 ];
var out = arr.map( x => x * x );
```

##### Good Example

```javascript
// Do...
function square( x ) {
    return x * x;
}
var arr = [ 1, 2, 3 ];
var out = arr.map( square );
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### Rule: Use all CAPS for constants

##### Reason

Standard JavaScript convention when naming constants. Using all capital letters provides a visual identifier as to a variable's nature when reading source code.

##### Bad Example

```javascript
// Do not...
var value = 3.14;
```

##### Good Example

```javascript
// Do...
var VALUE = 3.14;
```

##### Bad Example

```javascript
// Do not...
const value = 3.14;
```

##### Good Example

```javascript
// Do...
const VALUE = 3.14;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## This

### Rule: Use self

##### Reason

Common JavaScript convention when caching a reference to `this`.

##### Good Example

```javascript
// Do...
function Robot( name ) {
    var self = this;
    if ( !(this instanceof Robot) ) {
        return new Robot( name );
    }
    this.name = name;
    this.greet = greet;

    return this;

    function greet() {
        return 'Hello! My name is ' + self.name + '.';
    }
}
```

##### Enforcement

TODO: ESLint rule (?)

<!-- </rule> -->

<!-- <rule> -->

### Rule: Avoid using bind

##### Reason

The use of `bind` incurs a significant performance penalty (TODO: ref). Appropriate use of closures can accomplish the same result without performance penalties.

##### Bad Example

```javascript
// Do not...
function greet() {
    return this.name;
}

function Robot() {
    var fcn;
    if ( !(this instanceof Robot) ) {
        return new Robot();
    }
    this.name = 'Beep';
    this.greet = greet.bind( this );
    return this;
}
```

##### Good Example

```javascript
// Do...
function greeting( ctx ) {
    return greet;

    function greet() {
        return 'Hello! My name is ' + ctx.name + '.';
    }
}

function Robot() {
    if ( !(this instanceof Robot) ) {
        return new Robot();
    }
    this.name = 'Beep';
    this.greet = greeting( this );
    return this;
}
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Classes

### Rule: Allow class instantiation without new operator

##### Reason

Allows class consumers to alias the class constructor.

##### Bad Example

```javascript
// Do not...
function Robot() {
    return this;
}

// Alias:
var createRobot = Robot;

var robo = createRobot(); // => fails
```

##### Good Example

```javascript
// Do...
function Robot() {
    if ( !(this instanceof Robot) ) {
        return new Robot();
    }
    return this;
}

// Alias:
var createRobot = Robot;

var robo = createRobot();
```

##### Enforcement

-   Unit tests
-   Code review

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Setters and Getters

<!-- <rule> -->

### Rule: Combine set/get into single method

##### Reason

Simplifies a class interface.

##### Bad Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do not...
Robot.prototype.setName = function set( name ) {
    if ( typeof name !== 'string' ) {
        throw new Error( 'invalid input value. Name must be a string. Value: `' + name + '`.' );
    }
    this._name = name;
    return this;
};

Robot.prototype.getName = function get() {
    return this._name;
};
```

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do...
Robot.prototype.name = function robotName( name ) {
    if ( !arguments.length ) {
        return this._name;
    }
    if ( typeof name !== 'string' ) {
        throw new Error( 'invalid input value. Name must be a string. Value: `' + name + '`.' );
    }
    this._name = name;
    return this;
};
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Perform dynamic type checking

##### Reason

While checks do incur computational cost, not providing such checks can entail a considerable drain on a developer's time. Subtle bugs can arise from using unexpected types. Be explicit in what you expect and write tests confirming your expectations. Your stringency helps other developers debug their own code.

##### Bad Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do not...
Stream.prototype.window = function streamWindow( win ) {
    if ( !arguments.length ) {
        return this._window;
    }
    this._window = win;
    return this;
};
```

##### Good Example

<!-- eslint-disable no-restricted-syntax, stdlib/no-builtin-math -->

```javascript
// Do...
Stream.prototype.window = function streamWindow( win ) {
    if ( !arguments.length ) {
        return this._window;
    }
    if ( typeof win !== 'number' || win !== win ) {
        throw new Error( 'invalid argument. Window size must be numeric. Value: `' + win + '`.' );
    }
    if ( Math.floor( win ) !== win || win <= 0 ) {
        throw new Error( 'invalid argument. Window size must be a positive integer. Value: `' + win + '`.' );
    }
    this._window = win;
    return this;
};
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Method Chaining

<!-- <rule> -->

### Rule: Create fluent interfaces by returning this context

##### Reason

Returning `this` enables method chaining and creates a [fluent interface][fluent-interface]. Such interfaces provide a terse syntax for describing flow.

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Robot() {
    if ( !(this instanceof Robot) ) {
        return new Robot();
    }
    this._name = '';
    this._color = 'black';
    return this;
}

Robot.prototype.name = function robotName( name ) {
    if ( !arguments.length ) {
        return this._name;
    }
    if ( typeof name !== 'string' ) {
        throw new Error( 'invalid input value.' );
    }
    this._name = name;
    return this;
};

Robot.prototype.color = function robotColor( color ) {
    if ( !arguments.length ) {
        return this._color;
    }
    if ( typeof color !== 'string' ) {
        throw new Error( 'invalid input value.' );
    }
    this._color = color;
    return this;
};

var robo = new Robot();

robo.name( 'Robo' )
    .color( 'pink' );
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Documentation

<!-- <rule> -->

### Rule: Always document source code

##### Reason

Code is read more often than it is written. Prefer too much documentation to too little.

##### Bad Example

<!-- eslint-disable valid-jsdoc -->

```javascript
// Do not...

/**
* Calculates auto-correlation.
*/
function autocorr( vector ) {
    // Calculate...
}
```

##### Good Example

<!-- eslint-disable valid-jsdoc -->

```javascript
// Do...

/**
* Calculate the auto-correlation of an input vector. To calculate the auto-correlation using an FFT, the data is padded to have length 2^n, where `n` is the next power of 2 greater than the vector length. For more details, consult [link][link].
*
* [link]: http://example.com
*
* @param {number[]} vector - 1d array
* @returns {number} auto-correlation
*
* @example
* var arr = [ 1, 6, 5, 4, 7, 2, 3, 1 ];
* var v = autocorr( arr );
*/
function autocorr( vector ) {
    // Calculate...
}
```

##### Notes

-   For client-side JavaScript, if you are concerned about file size, build/include a distributable file, stripped of comments and minified. Keep source code annotated.
-   **Always** include example/demo code that is easily runnable.
-   Do **not** claim that your code is self-documenting. Your code is not. **Period.**
-   Do **not** rely on tests as your **sole** source of documentation. While tests are documentation, annotating your source provides greater insight and a means to explain why you made particular design choices.
-   **Always** make your documentation **beautiful**. Take as much pride in your documentation as you do in your code.

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Performance

<!-- <rule> -->

### Rule: Prefer simplicity and readability

##### Reason

Performance optimization, particularly of the premature variety, often comes with the cost of obscuring implementation details and the presence of more bugs.

##### Bad Example

```javascript
// Do not...
var y = ( x >> 0 );

// Avoid using a bitshift unless you really need to. Possible subtle bug in the above is that `x` is converted to a signed 32-bit integer.
```

##### Good Example

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
// Do...
var y = Math.floor( x );
```

##### Notes

-   Take JSPerf tests with a grain of salt, as results can vary significantly from browser to browser and across browser versions.

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Modularity

### Rule: Do one thing, do one thing well

##### Reason

Testing, debugging, maintainability, composition, focused interfaces, and interchangeability.

##### Notes

-   Every file within a Node module should be **less than** `200` lines of code. The only exceptions are tests files, which are generally 2-3x the length of the files they test. If a file is longer than `200` lines, the code is undoubtedly too complex, not maintainable, hard to test, and needs to be refactored into smaller sub-modules. Ideally, an individual file should **never** be longer than `80` lines.
-   Prefer only **1** `function` per file. A file which contains fewer functions is easier to test, read, and maintain. This is particularly **true** for Node modules.
-   **Always** bear in mind the single responsibility principle.
-   **Always** strive for reusability.

##### Enforcement

-   Look for parts of an implementation which can be extracted into reusable components.
-   Code review 

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Client-side JavaScript

### Rule: Prefer native equivalents

##### Reason

Relying on monolithic libraries, such as jQuery, for DOM manipulation leads to code bloat. Often the functionality provided by such libraries can be accomplished using either native JavaScript [equivalents][native-dom-equivalents] or a small, focused library.

##### Bad Example

```javascript
// Do not...
var el = jQuery( '#main' );
```

##### Good Example

```javascript
// Do...
var el = document.querySelector( '#main' );
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Wrap in immediately invoked function expressions

##### Reason

Prevents variable leakage.

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do...
(function foo() {
    'use strict';

    var beep = 'boop';

    // ...
})();
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Namespace global variables

##### Reason

Helps minimize global variable name collisions.

##### Bad Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do not...
window.start = function start() {
    // Do something...
};
window.name = 'App';
```

##### Good Example

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Do...
var myApp = {};
myApp.name = 'App';
myApp.start = function start() {
    // Do something...
};

window.myApp = myApp;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

<!-- <rule-set> -->

* * *

## Dependencies

<!-- <rule> -->

### Rule: Avoid large dependencies

##### Reason

Often, more focused modules are available which can accomplish the same task. In general, be **explicit** in what you require.

##### Notes

-   In particular, avoid the following libraries:

    -   underscore
    -   lodash
    -   async

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### Rule: Vet any dependencies used

##### Reason

Any dependency you use becomes **your** responsibility. Demand the same level of robustness and correctness in your dependencies as you do in your code.

##### Notes

-   While GitHub stars and downloads are rough indicators, place more emphasis on the following:

    -   Code quality

        -   conciseness
        -   maintainability

    -   Documentation

        -   APIs
        -   examples

    -   Test cases

-   For most cases, do **not** place much weight on how recently the module was updated. Small, focused, well-written modules should not require much updating.

##### Enforcement

Code review.

<!-- </rule> -->

<!-- </rule-set> -->

* * *

## Additional Resources

-   [Airbnb JavaScript Style Guide][airbnb]
-   [Idiomatic.js][idiomatic-js]
-   [Popular Convention][popular-convention]
-   [JavaScript Quality Guide][quality-guide]
-   [Unix Philosophy][unix-philosophy]

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike License][license].

<section class="links">

[tab-indentation]: http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/

[sublime-text]: http://www.sublimetext.com/

[editorconfig]: http://editorconfig.org/

[sublime-text-editorconfig]: https://github.com/sindresorhus/editorconfig-sublime

[atom-editorconfig]: https://github.com/sindresorhus/atom-editorconfig

[chrome-editorconfig]: https://chrome.google.com/webstore/detail/github-editorconfig/bppnolhdpdfmmpeefopdbpmabdpoefjh?hl=en-US

[ecma-262]: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf

[function-statements]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

[function-expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

[hoisting]: https://github.com/buildfirst/buildfirst/tree/master/ch05/04_hoisting

[strict-mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

[uncaught-exception]: https://nodejs.org/api/process.html#process_event_uncaughtexception

[errbacks]: https://nodejs.org/api/fs.html

[http-status-codes]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

[jsdoc]: https://jsdoc.app/

[fluent-interface]: https://en.wikipedia.org/wiki/Fluent_interface

[native-dom-equivalents]: http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/

[airbnb]: https://github.com/airbnb/javascript

[idiomatic-js]: https://github.com/rwaldron/idiomatic.js/

[popular-convention]: http://sideeffect.kr/popularconvention/#javascript

[quality-guide]: https://github.com/bevacqua/js

[unix-philosophy]: http://www.catb.org/~esr/writings/taoup/html/ch01s06.html

[license]: https://creativecommons.org/licenses/by-sa/4.0/

</section>

<!-- /.links -->
