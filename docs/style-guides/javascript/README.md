JavaScript Style Guide
===

> _An opinionated style guide for writing JavaScript._


## Table of Contents

1. [Intro](#intro)
1. [General Principles](#general-principles)
1. [Whitespace](#whitespace)
1. [Semicolons](#semicolons)
1. [Parentheses](#parentheses)
1. [Variables](#variables)
1. [Strings](#strings)
1. [Arrays](#arrays)
1. [Functions](#functions)
1. [Strict Mode](#strict-mode)
1. [Arguments](#arguments)
1. [Regular Expressions](#regular-expressions)
1. [Blocks](#blocks)
1. [Equality](#equality)
1. [Errors](#errors)
1. [Comments](#comments)
1. [Naming](#naming)
1. [This](#this)
1. [Classes](#classes)
1. [Setters and Getters](#setters-and-getters)
1. [Method Chaining](#method-chaining)
1. [Documentation](#documentation)
1. [Performance](#performance)
1. [Modularity](#modularity)
1. [Client-side JavaScript](#client-side-javascript)
1. [Dependencies](#dependencies)
1. [Versioning](#versioning)
1. [Additional Resources](#additional-resources)
1. [License](#license)


## Intro

Always abide by the __Law of Code Style Consistency__, or, in other words, _when in Rome, do as the Romans do_. 

While the code base to which you want to contribute may be a horrific mess in terms of aesthetic appearance and style, style consistency takes precedent over personal preference and canon. The more consistent a code base is in terms of style, the more readers of the code can focus on what the code does rather than deciphering changes in style.

So, even if your peers commit various _faux pas_ outlined below, as long as you are contributing to their code base, abide by their conventions.

A code base--module, repository, application, library, etc--should always appear to have a single author and not be a schizophrenic franken-mess. 
This stated, for those opportunities where you are the primary author, you should lead by example and write clean, readable, and testable code.

Hopefully, most of the conventions outlined below will help enable you to do so.


## General Principles

* Prefer standards to non-standards.
* Do one thing and do one thing well.
* Keep your code clean. Create feature branches for experimental development, extensive annotations, and/or alternative implementations.


<!-- <rule-set> -->

---

## Whitespace

<!-- <rule> -->

### R: Use tab indentation

##### Reason

Tab indentation allows the developer to specify the space indentation equivalent in her editor. For example, in [Sublime Text][sublime-text], you can specify in your user preferences

``` text
"tab_width": 4
```

##### Notes

* Even if you must use spaces, __never__ mix tabs and spaces. This is formatting hell, as a simple find-and-replace is useless in the face of such chaos.

##### Enforcement

This project contains an [`.editorconfig`][editorconfig] file to be used in conjunction with IDE and/or browser plugins.

* [sublime text][sublime-text-editorconfig]
* [atom][atom-editorconfig]
* [chrome][chrome-editorconfig]

<!-- </rule> -->

<!-- <rule> -->

### R: Include space before leading brace

##### Reason

Including `1` space before a leading brace improves readability.

##### Bad Example

``` javascript
// Do not...
function query(){
    // Do something...
}
```

##### Good Example

``` javascript
// Do...
function query() {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### R: Include spaces around arguments

##### Reason

Including `1` space before and after arguments improves readability.

##### Bad Example

``` javascript
// Do not...
function test(arg1,arg2,arg3) {
    // Do something...
}
```

##### Good Example

``` javascript
// Do...
function test( arg1, arg2, arg3 ) {
    // Do something...
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### R: Include spaces around array indices  

##### Reason

Including `1` space before and after `array` indices improves readability.


##### Bad Example

``` javascript
// Do not...
var foo = bar[10];
```

##### Good Example

``` javascript
// Do...
var foo = bar[ 10 ];
```

##### Notes

* Use discretion when using spaces around `array` indices buried in braces.

    ``` javascript
    // Okay:
    var foo = myFunction( ( a === b ) ? bar[0] : bar[1] ) );
    ```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### R: Include spaces around operators

##### Reason

Including `1` space before and after operators improves readability.

##### Bad Example

``` javascript
// Do not...
var a=1+1;
```

##### Good Example

``` javascript
// Do...
var a = 1 + 1;
```

##### Notes

* Use discretion when operators are contained within complex expressions and `string` concatenation.

    ``` javascript
    // Okay...
    var str = 'This is a long string by '+firstName+' '+lastName+', which may keep going and going and...';

    // Okay...
    var x = (x+y+z)*(t-w-v) + 5;
    ```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### R: No spaces around unary operators

##### Reason

Immediate juxtaposition makes evident what is being affected.

##### Bad Example

``` javascript
// Do not...
x = ++ y;
z = z ++;
```

##### Good Example

``` javascript
// Do...
x = ++y;
z = z++;
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- <rule> -->

### R: Include a space after comment marks

##### Reason

Including `1` space after comment marks improves readability.

##### Bad Example

``` javascript
// Do not...

//This is a single-line comment.

/**
*This is a mult-
*line comment.
*/
```

##### Good Example

``` javascript
// Do...

// This is a single-line comment.

/**
* This is a multi-
* line comment.
*/
```

##### Enforcement

TODO

<!-- </rule> -->

<!-- <rule> -->

### R: No multi-line comment indentation

##### Reason

Some IDEs have a tendency to auto-indent based on the previous line, thus pushing all subsequent lines `1` character to the right.

##### Bad Example

``` javascript
// Do not...

/**
 * This is a multi-line comment.
 * The comment continues and continues...
 * ...until it no longer does.
 */
```

##### Good Example

``` javascript
// Do...

/**
* This is a multi-line comment.
* The comment continues and continues...
* ...until it no longer does.
*/
```

##### Enforcement

In general, hard to automatically enforce. Mostly enforced through code review.

<!-- </rule> -->

<!-- <rule> -->

### R: Indent chained methods

##### Reason

Indentation improves readability.

##### Bad Example

``` javascript
// Do not...
var svg = d3.select( '.main' ).append( 'svg:svg' ).attr( 'class', 'canvas' ).attr( 'data-id', Date.now() ).attr( 'width', 100 ).attr( 'height', 100 );
```

##### Good Example

``` javascript
// Do...
var svg = d3.select( '.main' )
    .append( 'svg:svg' )
        .attr( 'class', 'canvas' )
        .attr( 'data-id', Date.now() )
        .attr( 'width', 100 )
        .attr( 'height', 100 );
```

##### Enforcement

Hard to automatically enforce. Mostly through code review.

<!-- </rule> -->

<!-- <rule> -->

### R: No newlines between conditions

##### Reason

Newline is unnecessary.

##### Bad Example

``` javascript
// Do not...
if ( foo === bar ) {
    // Do something...
}
else {
    // Do something different...
}
```

##### Good Example

``` javascript
// Do...
if ( foo === bar ) {
    // Do something...
} else {
    // Do something different...
}
```

##### Notes

* Use discretion when faced with multiple conditions.

    ``` javascript
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

* Use discretion when documenting conditions.

    ``` javascript
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

### R: No case indentation

##### Reason

Indenting the `case` keyword within `switch` statements results in excessive indentation.

##### Bad Example

``` javascript
// Do not...
switch( foo ) {
    case 'bar':
        // Do something...
        break;
    case 'beep';
        // Do something...
        break;
    default:
        // Do something...
}
```

##### Good Example

``` javascript
// Do...
switch( foo ) {
case 'bar':
    // Do something...
    break;
case 'beep';
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

---

## Semicolons

<!-- <rule> -->

### R: Use semicolons

##### Reason

While semicolons are [not required][ecma-262] in most cases due to [automatic semicolon insertion][ecma-262], prefer to be explicit in specifying when a statement ends. Additionally, in REPL environments, semicolons acquire special meaning; notably, silencing return value output.

##### Bad Example

``` javascript
// Do not...
if ( foo === bar ) {
    return true
}
```

##### Good Example

``` javascript
// Do...
if ( foo === bar ) {
    return true;
}
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->


<!-- <rule-set> -->

---

## Parentheses

<!-- <rule> -->

### R: Include within arithmetic operations

##### Reason

Including parentheses visually reinforces order of operations, leading to better readability and making the code more maintainable.

##### Bad Example

``` javascript
// Do not...
var a = b * c + 5;
```

##### Good Example

``` javascript
// Do...
var a = ( b * c ) + 5;
```

##### Enforcement

Code review.

<!-- </rule> -->

<!-- <rule> -->

### R: Include around ternary test condition

##### Reason

Including parentheses around the test condition in ternary operators improves readability.

##### Bad Example

``` javascript
// Do not...
var foo = a === b ? a*3 : b/4;
```

##### Good Example

``` javascript
// Do...
var foo = ( a === b ) ? a*3 : b/4;
```

<!-- </rule> -->

<!-- </rule-set> -->


<!-- <rule-set> -->

---

## Variables

<!-- <rule> -->

### R: Declare variables at top of scope

##### Reason

Doing so makes variable hoisting explicit.

##### Bad Example

``` javascript
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

``` javascript
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

### R: Declare assigned variables first

##### Reason

Visual alignment and thus improved readability.

##### Bad Example

``` javascript
// Do not...
var beep;
var foo = 3;
var boop;
var bar = null;
```

##### Good Example

``` javascript
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

### R: Declare variables separately

##### Reason

Adding, removing, and reordering variables is easier.

##### Bad Example

``` javascript
// Do not...
var boop = 'hello',
    beep = false,
    bar = null,
    foo = 3;
```

##### Good Example

``` javascript
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

### R: Declare variables on separate lines

##### Reason

Declaring variables on separate lines improves readability.

##### Bad Example

``` javascript
// Do not...
var beep; var boop;
var bop; var bap; var i;
```

##### Good Example

``` javascript
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

<!-- </rule-set> -->


<!-- <rule-set> -->
---

## Strings

<!-- <rule> -->

### R: Use single quotes

##### Reason

Reserve double quotes for in-string parenthetical reference or quotes. Additionally, single quotes consume less visual space.

##### Bad Example

``` javascript
// Do not...
var str = "Hello";
```

##### Good Example

``` javascript
// Do...
var str = 'Hello';
```

##### Enforcement

TODO: ESLint rule

<!-- </rule> -->

<!-- </rule-set> -->


<!-- <rule-set> -->

---

## Arrays

*   In general, use `array` literal syntax.

    ``` javascript
    // Do:
    var arr = [];

    // Don't:
    var arr = new Array();
    ```

*   Do instantiate a new `array` when you know the `array` length and the `array` length is [less than](https://github.com/thlorenz/v8-perf/blob/master/data-types.md#fast-elements) `64K` elements.

    ``` javascript
    // Do:
    var arr = new Array( 100 );
    for ( var i = 0; i < arr.length; i++ ) {
        arr[ i ] = Math.random();
    }

    // Don't:
    var arr = [];
    for ( var i = 0; i < 100; i++ ) {
        arr.push( Math.random() );
    }
    ```

*   To convert an array-like object to an `array`, use a `for` loop.

    ``` javascript
    // Do:
    var nargs = arguments.length,
        args = new Array( nargs );

    for ( var i = 0; i < nargs; i++ ) {
        args[ i ] = arguments[ i ];
    }

    // Don't:
    var args = Array.prototype.slice.call( arguments );
    ```

*   When copying an `array`, for small `arrays` use a `for` loop; for large `arrays`, use `Array#slice()`.

    ``` javascript
    var arr,
        out,
        i;

    // Small arrays...
    arr = new Array( 10 );
    out = new Array( arr.length );
    for ( i = 0; i < arr.length; i++ ) {
        out[ i ] = arr[ i ];
    }

    // Large arrays...
    arr = [];
    for ( i = 0; i < 1e6; i++ ) {
        arr[ i ] = Math.random();
    }
    out = arr.slice();
    ```


---
## Objects

*   Do split `object` properties over multiple lines.

    ``` javascript
    // Do:
    var obj;

    obj = {
        'a': null,
        'b': 5,
        'c': function() {
            return true;
        },
        'd': ( foo === bar ) ? foo : bar
    };

    // Don't:
    var obj = { 'a': null, 'b': 5, 'c': function() { return true; }, 'd': ( foo === bar ) ? foo : bar };
    ```

*   Do __not__ align `object` values.

    ``` javascript
    // Do:
    var obj = {
        'prop': true,
        'attribute': 'foo',
        'name': 'bar'
    };

    // Don't:
    var obj = {
        'prop'     : true,
        'attribute': 'foo',
        'name'     : 'bar'
    };
    ```

*   Do __not__ include a trailing comma.

    ``` javascript
    // Do:
    var obj = {
        'prop': true,
        'attribute': 'foo',
        'name': 'bar'
    };

    // Don't:
    var obj = {
        'prop': true,
        'attribute': 'foo',
        'name': 'bar', // <= DON'T
    };
    ```


---
## Functions

*   In general, do declare `functions` using [function statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), rather than [function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). This (1) avoids problems encountered due to [hoisting](https://github.com/buildfirst/buildfirst/tree/master/ch05/04_hoisting) and (2) minimizes the use of anonymous `functions`.

    ``` javascript
    // Do:
    function beep() {
        console.log( 'boop' );
    }

    // Don't:
    var beep = function() {
        console.log( 'boop' );
    }
    ```

*   Do minimize closures and declare `functions` at the highest possible scope.

    ``` javascript
    // Do:
    function beep() {
        boop();
    }

    function boop() {
        // Do something...
    }

    // Don't:
    function beep() {
        boop();
        function boop() {
            // Do something...
        }
    }
    ```

*   Do __not__ declare `functions` inside `for` loops and `conditions`.

    ``` javascript
    // Do:
    function beep( idx, clbk ) {
        clbk( 'beep'+i );
    }
    function bop( msg ) {
        console.log( msg );
    }

    for ( var i = 0; i < 10; i++ ) {
        beep( i, bop );
    }

    // Don't:
    for ( var i = 0; i < 10; i++ ) {
        beep( i, function bop( msg ) {
            console.log( msg );
        });
    }

    // Do:
    function onTimeout( idx ) {
        return function onTimeout() {
            console.log( idx );
        };
    }
    for ( var i = 0; i < 10; i++ ) {
        setTimeout( onTimeout( i ), 1000 );
    }

    // Don't:
    for ( var i = 0; i < 10; i++ ) {
        setTimeout( function onTimeout() {
            console.log( i );
        }, 1000 );
    }

    // Do:
    function bap() {
        // Do something...
    }
    if ( i < 11 ) {
        bap();
    }

    // Don't:
    if ( i < 11 ) {
        bap();
        function bap() {
            // Do something...
        }
    }
    ```


*   Do place parentheses around immediately invoked function expressions (IIFE). Make a clear distinction between a `function` declaration and one that is immediately invoked.

    ``` javascript
    // Do:
    (function init() {
        // Do something...
    })();

    // Don't:
    function init() {
        // Do something...
    }();
    ```

*   Do place enclosed `functions` below the `return` statement.

    ``` javascript
    // Do:
    function getEquation( a, b, c ) {
        var d;

        a = 3 * a;
        b = a / 5;
        c = Math.pow( b, 3 );

        d = a + ( b / c );

        return eqn;

        /**
        * FUNCTION: eqn( e )
        *   Computes a complex equation.
        *
        * @param {Number} e - dynamic value
        * @returns {Number} equation output
        */
        function eqn( e ) {
            return e - d + ( 15 * a ) + ( Math.pow( b, 1 / c ) );
        }
    } // end FUNCTION getEquation()
    ```

*   Prefer primitive expressions over their functional counterparts. Unnecessary `function` calls introduce additional overhead.

    ``` javascript
    var squared = new Array( arr.length );

    // Do:
    for ( var i = 0; i < arr.length; i++ ) {
        squared[ i ] = arr[ i ] * arr[ i ];
    }

    // Don't:
    squared = arr.map( function( value ) {
        return value * value;
    });
    ```

*   Asynchronous callbacks requiring error handling should have an `error` parameter as their first argument. If no errors, `error` should be set to `null`.

    ``` javascript
    // Do:
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

*   Prefer closures and `function` factories rather than nested `functions` and callbacks.

    ``` javascript
    // Do:
    function mult( x, y ) {
        return x * y;
    }
    function cube( value ) {
        var v;
        v = mult( value, value );
        v = mult( v, value );
        return v;
    }
    function compute( value ) {
        return function compute() {
            return cube( value );
        };
    }
    function deferredComputation( value ) {
        return compute( value );
    }

    // Don't:
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

---
## Strict Mode

*   __Always__ write JavaScript in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). Doing so discourages bad practices, avoids silent errors, and can result in better performance, as the compiler can make certain assumptions about the code.

    ``` javascript
    'use strict';

    NaN = null; // throws an Error
    ```

*   Prefer [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) for a whole script. If not possible, use [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) for each available `function`.

    ``` javascript
    function beep() {
        'use strict';
        delete Object.prototype; // throws an Error
    }
    ```


---
## Arguments

*   __Never__ pass the `arguments` variable to another `function`. Doing so automatically puts the `function` in optimization hell.

    ``` javascript
    // Do:
    function fcn() {
        var nargs = arguments.length,
            args = new Array( nargs ),
            out,
            i;

        for ( i = 0; i < nargs; i++ ) {
            args[ i ] = arguments[ i ];
        }
        out = foo( args );
    }

    // Don't:
    function fcn() {
        var out = foo( arguments );
    }
    ```

*   __Always__ reassign input arguments to new variables when mentioning `arguments` in a `function` body. Recycling variables when mentioning `arguments` in a `function` body prevents compiler optimization.

    ``` javascript
    // Do:
    function fcn( value, options ) {
        var opts,
            err;

        if ( arguments.length < 2 ) {
            opts = value;
        } else {
            opts = options;
        }
        err = validate( opts );
        if ( err ) {
            throw err
        }
        ...
    }

    // Don't:
    function fcn( value, options ) {
        var err;
        if ( arguments.length < 2 ) {
            options = value;
        }
        err = validate( options );
        if ( err ) {
            throw err
        }
        ...
    }
    ```



---
## Regular Expressions

*   Do assign regular expressions to variables rather than using them inline.

    ``` javascript
    // Do:
    var regex = /\.+/;

    beep();

    function beep( str ) {
        if ( regex.test( str ) ) {
            // Do something...
        }
    }

    // Don't:
    beep();

    function beep( str ) {
        if ( /\.+/.test( str ) ) {
            // Do something...
        }
    }
    ```

*   __Always__ document regular expressions.

    ``` javascript
    /**
    * REGEX: /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/
    *   Matches parts of a regular expression string.
    *
    *   /^\/
    *       -   match a string that begins with a /
    *   ()
    *       -   capture
    *   (?:)+
    *       -   capture, but do not remember, a group of characters which occur 1 or more times
    *   \\\/
    *       -   match the literal \/
    *   |
    *       -   OR
    *   [^\/]
    *       -   anything which is not the literal \/
    *   \/
    *       -   match the literal /
    *   ([imgy]*)
    *       -   capture any characters matching `imgy` occurring 0 or more times
    *   $/
    *       -   string end
    */
    var re = /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
    ```

---
## Blocks

*   __Always__ use curly braces. Not using them is a common source of bugs.

    ``` javascript
    // Do:
    if ( foo === bar ) {
        return true;
    }

    // Don't:
    if ( foo === bar ) return true;
    ```

*   __Always__ place the leading brace on the same line.

    ``` javascript
    // Do:
    if ( foo === bar ) {
        // Do something...
    }

    function query() {
        // Do something...
    }

    // Don't:
    if ( foo === bar )
    {
        // Do something...
    }

    function query()
    {
        // Do something...
    }
    ```

*   Do early `return`.

    ``` javascript
    // Do:
    function foo( value ) {
        if ( value === 'bar' ) {
            return 'Hello';
        }
        return 'Goodbye';
    }

    // Don't:
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

*   Do early `continue`.

    ``` javascript
    // Do:
    for ( var i = 0; i < 10; i++ ) {
        if ( i === 5 ) {
            continue;
        }
        // Do something...
    }

    // Don't:
    for ( var i = 0; i < 10; i++ ) {
        if ( i !== 5 ) {
            // Do something...
        }
    }
    ```

---
## Equality

*   __Always__ prefer `===` and `!==` to `==` and `!=`. Not enforcing type equality is a source of bugs.

    ``` javascript
    // Do:
    if ( foo === bar ) {
        // Do something...
    }

    // Don't:
    if ( foo != bar ) {
        // Do something...
    }
    ```

---
## Errors

*   __Always__ provide descriptive `error` messages.

    ``` javascript
    // Do:
    var err = new TypeError( 'invalid input argument. Window option must be a positive integer. Value: `' + value + '`.' );

    // Don't:
    var err = new Error( '1' );
    ```

*   __Always__ fail __fast__ (see [programmer errors](https://www.joyent.com/developers/node/design/errors)). A *library* should `throw` and provide tailored `error` messages if expected conditions are not met. Doing so facilitates debugging and eases code maintenance.

    ``` javascript
    // Do:
    /**
    * @api public
    */
    function beep( clbk ) {
        if ( !arguments.length ) {
            throw new Error( 'insufficient input arguments. Must provide a callback function.' );
        }
    }

    // Don't:
    /**
    * @api public
    */
    function boop( clbk ) {
        clbk();
    }
    ```

*   For public facing library APIs, __always__ [validate](https://github.com/validate-io/overview) input values. Doing so makes contracts explicit, facilitates testing, and helps mitigate the presence of subtle bugs.
    
    ``` javascript
    // Do:
    function foo( opts ) {
        if ( !isObject( opts ) ) {
            throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
        }
    }

    // Don't:
    function bar( opts ) {
        // What happens if `opts` or `opts.ssl` are not objects???
        var key = opts.ssl.key;
    }
    ```

*   When validating, __always__ include the invalid value in the `error` message. Doing so makes debugging and logging easier.

    ``` javascript
    // Do:
    function bop( len ) {
        if ( !isPositiveInteger( len ) ) {
            throw new TypeError( 'invalid input argument. Length must be a positive integer. Value: `' + len + '`.' );
        }
    }

    // Don't:
    function bap( len ) {
        if ( !isPositiveInteger( len ) ) {
            throw new Error( 'invalid value.' );
        }
    }
    ```

*   __Never__ trap [uncaught exceptions](https://nodejs.org/api/process.html#process_event_uncaughtexception) without crashing. Not crashing upon encountering an `uncaughtException` leaves your application in an undefined state and can result in memory leaks.

    ``` javascript
    // Okay:
    function onError( error ) {
        console.error( 'Caught exception. Err: %s', error.message );
        process.exit( 1 ); // <= THIS IS KEY!!!!
    }
    process.on( 'uncaughtException', onError );

    // DON'T:
    function onError( error ) {
        console.error( 'Caught exception. Err: %s', error.message );
    }
    process.on( 'uncaughtException', onError );
    ```

*   __Always__ designate the first argument for asynchronous function APIs as an `error` argument. If no `error` occurs, the value, if set, should be `null`. Designing asynchronous APIs in this fashion matches the [convention](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback) found in Node.js core.

    ``` javascript
    // Do:
    function goodAsync( clbk ) {
        setTimeout( done, 1000 );
        function done() {
            clbk( null, 'beep' );
        }
    }

    // Don't:
    function badAsync( clbk ) {
        setTimeout( done, 1000 );
        function done() {
            clbk( 'beep' );
        }
    }
    ``` 

*   __Always__ return appropriate [status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

    ``` javascript
    // Do:
    response
        .status( 502 )
        .json({
            'status': 502,
            'message': 'unable to connect to remote database.'
        });

    // Don't:
    response
        .send( 200 )
        .json({
            'success': false
        });
    ```




---
## Comments

*   Do use `/** Comments */` for mult-line comments.

    ``` javascript
    // Do:

    /**
    * FUNCTION: beep()
    *   Beep to go boop.
    */
    function beep() {
        // Do something...
    }

    // Don't:

    // FUNCTION: beep()
    //  Beep to go boop.
    function beep() {
        // Do something...
    }
    ```

*   Do use [JSDoc](http://usejsdoc.org/#Getting_Started) and do so for every `function`. Be sure to include descriptions, parameters, and other information.

    ``` javascript
    // Do:

    /**
    * FUNCTION: transform( str )
    *   String transformer.
    *
    * @param {String} str - string to be transformed.
    * @returns {String} transformed string
    */
    function transform( str ) {
        return str + ' has been transformed.';
    }

    // Don't:
    function transform( str ) {
        return str + ' has been transformed.';
    }
    ```

*   Do use `//` for single-line comments. Place the comment above the comment subject, and place an empty line above the comment.

    ``` javascript
    // Do:

    // Set the default value to null.
    var foo = bar || null;


    // Don't:
    var foo = bar || null; // set the default value to null.
    ```

*   Use `// FIXME:` to annotate problems.

    ``` javascript
    // FIXME: misses the case where value is 0. Want to check if value is not numeric.
    if ( !value ) {
        return false;
    }
    ```

*   Use `// TODO:` to annotate tasks.

    ``` javascript
    function Ctor() {

        // TODO: make `name` property value publicly accessible.
        this.name = 'foobar';

        return this;
    }
    ```

*   Use `// HACK:` to annotate fragile/non-general solutions.

    ``` javascript
    // HACK: temporary fix; host and port should be abstracted to another module.
    var host = '127.0.0.1',
        port = 7331;
    ```

*   Use `// WARNING:` to annotate possible gotchas/pitfalls.

    ``` javascript
    // WARNING: shared reference of a mutable object; possible side effects.
    var a = b = {};
    ```

*   Use `// NOTE:` to annotate questions, comments, or anything which does not fit under `TODO`/`FIXME`/`HACK`/`WARNING` which should be brought to a user's attention.

    ``` javascript
    // NOTE: consider optimizing this for large arrays (len > 64K).
    var arr = new Array( len );
    for ( var i = 0; i < len; i++ ) {
        arr[ i ] = Math.random();
    }
    ```

*   Consider commenting closing braces. Doing so helps lessen bracket hell when dealing with long code blocks.

    ``` javascript
    function longFunction() {
        
        // [0] Do first thing.
        firstThing();

        // [1] Do second thing.
        secondThing();

        // [2] Do third thing.
        thirdThing();

        // ...

        // [N-1] Do Nth thing.
        nthThing(); 

        return true;
    } // end FUNCTION longFunction()
    ```


---
## Naming

*   __Always__ use camelCase for `functions`, `objects`, instances, and variables.

    ``` javascript
    // Do:
    function testFunction() {
        // Do something...
    }

    var myObject = {};

    var myInstance = new Instance();


    // Don't:
    function testfunction() {
        // Do something...
    }

    var MyObject = {};

    var reallylongvariablename = 0;
    ```

*   __Always__ use PascalCase for constructors.

    ``` javascript
    // Do:
    function RoboRobot() {
        this.name = 'Beep';
        return this;
    }

    var robo = new RoboRobot();


    // Don't:
    function roboRobot() {
        this.name = 'Boop';
        return this;
    }

    var robo = new roboRobot();
    ```

*   __Always__ use a leading underscore when naming private properties.

    ``` javascript
    // Do:
    function Robot() {
        this._private = true;
        return this;
    }

    // Don't:
    function Robot() {
        this.__private__ = true;
        this.private_ = true;
        return this;
    }
    ```

*   __Always__ name all `functions`. Named `functions` are easier to find in stack traces and consequently debug.

    ``` javascript
    // Do:
    function onResponse( error, response, body ) {
        // Do something...
    }

    request({
        'method': 'GET',
        'uri': 'http://127.0.0.1'
    }, onResponse );

    // Don't:
    request({
        'method': 'GET',
        'uri': 'http://127.0.0.1'
    }, function( error, response, body ) {
        // Do something...
    });
    ```

*   Do name constants in all CAPS.

    ``` javascript
    // Do:
    var VALUE = 3.14;

    // Don't:
    var value = 3.14;
    ```


---
## This

*   When caching a reference to `this`, use `self`.

    ``` javascript
    // Do:
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

*   Avoid using `bind` (performance).

    ``` javascript
    // Do:
    function greet( ctx ) {
        return function greet() {
            return 'Hello! My name is ' + ctx.name + '.';
        };
    }

    function Robot() {
        if ( !(this instanceof Robot) ) {
            return new Robot();
        }
        this.name = 'Beep';
        this.greet = greet( this );
        return this;
    }

    // Don't:
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

---
## Classes

*   __Always__ allow for classes to be instantiated without the `new` operator.

    ``` javascript
    // Do:
    function Robot() {
        if ( !(this instanceof Robot) ) {
            return new Robot();
        }
        return this;
    }

    // Don't:
    function Robot() {
        return this;
    }
    ```

---
## Setters and Getters

*   Where appropriate, combine set/get into a single method.

    ``` javascript
    // Do:
    Robot.prototype.name = function( name ) {
        if ( !arguments.length ) {
            return this._name;
        }
        if ( typeof name !== 'string' ) {
            throw new Error( 'invalid input value. Name must be a string. Value: `' + name + '`.' );
        }
        this._name = name;
        return this;
    }

    // Don't:
    Robot.prototype.setName = function( name ) {
        if ( typeof name !== 'string' ) {
            throw new Error( 'invalid input value. Name must be a string. Value: `' + name + '`.' );
        }
        this._name = name;
        return this;
    }

    Robot.prototype.getName = function() {
        return this._name;
    }
    ```

*   For public libraries, do [type](https://github.com/validate-io) and [sanity](https://github.com/validate-io) check input arguments. While checks do incur computational cost, not providing such checks can entail a considerable drain on a developer's time. Subtle bugs can arise from using unexpected types. Be explicit in what you expect and write tests confirming your expectations. Your stringency helps other developers debug their own code.

    ``` javascript
    // Do:
    Stream.prototype.window = function( win ) {
        if ( !arguments.length ) {
            return this._window;
        }
        if ( typeof win !== 'number' ||  win !== win ) {
            throw new Error( 'invalid input argument. Window size must be numeric. Value: `' + win + '`.' );
        }
        if ( Math.floor( win ) !== win || win <= 0 ) {
            throw new Error( 'invalid input argument. Window size must be a positive integer. Value: `' + win + '`.' );
        }
        this._window = win;
        return this;
    }

    // Don't:
    Stream.prototype.window = function( win ) {
        if ( !arguments.length ) {
            return this._window;
        }
        this._window = win;
    }
    ```

---
## Method Chaining

*   Return `this` to enable method chaining and to create a [fluent interface](http://en.wikipedia.org/wiki/Fluent_interface).

    ``` javascript
    function Robot() {
        if ( !(this instanceof Robot) ) {
            return new Robot();
        }
        this._name = '';
        this._color = 'black';
        return this;
    }

    Robot.prototype.name = function( name ) {
        if ( !arguments.length ) {
            return this._name;
        }
        if ( typeof name !== 'string' ) {
            throw new Error( 'invalid input value.' );
        }
        this._name = name;
        return this;
    }

    Robot.prototype.color = function( color ) {
        if ( !arguments.length ) {
            return this._color;
        }
        if ( typeof color !== 'string' ) {
            throw new Error( 'invalid input value.' );
        }
        this._color = color;
        return this;
    }

    var robo = new Robot();

    robo.name( 'Robo' )
        .color( 'pink' );
    ```

---
## Documentation

*   __Always.__
*   Prefer too much to too little.

    ``` javascript
    // Do:

    /**
    * FUNCTION: autocorr( vector )
    *   Given an input data vector, calculate its auto-correlation. To calculate the auto-correlation using an FFT, the data is padded to have length 2^n, where `n` is the next power of 2 greater than the vector length. For more details, consult {@link http://example.com}.
    *
    * @param {Number[]} vector - 1d array
    * @returns {Number} auto-correlation
    */
    function autocorr( vector ) {
        // Calculate...
    }


    // Don't:
    /**
    * FUNCTION: autocorr( vector )
    *   Calculates auto-correlation.
    */
    function autocorr( vector ) {
        // Calculate...
    }
    ```

*   For client-side JavaScript, if you are concerned about file size, build/include a distributable file, stripped of comments and minified. Keep your source annotated.
*   __Always__ include example/demo code that is easily runnable.
*   Do __not__ claim that your code is self-documenting. Your code is not. __Period.__
*   Do __not__ rely on tests as your __sole__ source of documentation. While tests are documentation, annotating your source provides greater insight and a means to explain why you made particular design choices.
*   __Always__ make your documentation __beautiful__. Take as much pride in your documentation as you do in your code.


---
## Performance

*   Prefer simplicity and readability over performance optimization. For example,

    ``` javascript
    // Do:
    x = Math.floor( x );

    // Don't: (avoid using a bitshift unless you really need to)
    x >> 0;
    ``` 

*   Take JSPerf tests with a grain of salt, as results can vary significantly from browser to browser and across browser versions.


---
## Modularity

*   Every file within a Node module should be __less than__ `200` lines of code. The only exceptions are tests files, which are generally 2-3x the length of the files they test. If a file is longer than `200` lines, the code is undoubtedly too complex, not maintainable, hard to test, and needs to be refactored into smaller sub-modules. Ideally, an individual file should __never__ be longer than `80` lines.
*   Prefer only __1__ `function` per file. A file which contains fewer functions is easier to test, read, and maintain. This is particularly __true__ for Node modules.
*   __Always__ bear in mind the single responsibility principle.
*   __Always__ strive for reusability. 



---
## Client-side JavaScript

*   Forgo dependence on monolithic libraries, such as jQuery, and use native JavaScript [equivalents](http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/) for DOM manipulation. Relying on such libraries leads to code bloat.

    ``` javascript
    // Do:
    var el = document.querySelector( '#main' );

    // Don't:
    var el = $( '#main' );
    ```

*   __Always__ wrap client-side scripts in immediately invoked function expressions (IIFE). Doing so prevents variable leakage.

    ``` javascript
    // Do:
    (function() {
        'use strict';

        var beep = 'boop';
        ...
    })();
    ```

*   __Always__ namespace client-side global variables. Doing so helps minimize global variable name collisions.

    ``` javascript
    // Do:
    var myApp = {};
    myApp.name = 'App';
    myApp.start = function start(){};

    window.myApp = myApp;

    // Don't:
    window.start = function start(){};
    window.name = 'App';
    ```

---
## Dependencies

*   __Avoid__ using large (swiss-army knife type) dependencies when only a small subset of functionality is used. In particular, avoid the following libraries:
    *   underscore
    *   lodash
    *   async

    Often smaller, more focused modules are available which can accomplish the same tasks. In general, be __explicit__ in what you require.
*   __Always__ adequately vet any dependencies used. While Github stars and downloads are rough indicators, place more emphasis on the following:
    *   Code quality
        -   conciseness
        -   maintainability
    *   Documentation
        -   APIs
        -   examples
    *   Test cases

    For most cases, do __not__ place much weight on how recently the module was updated. Small, focused, well-written modules should not require much updating.
*   Consider maintaining [module](https://github.com/kgryte/awesome-node-modules) and [developer](https://github.com/kgryte/awesome-node-developers) whitelists relevant to the application domain.



---
## Versioning

*   When creating modules, __always__ use [semantic versioning](https://github.com/mojombo/semver/blob/master/semver.md) (semver) and adhere to its conventions: MAJOR.MINOR.PATCH.

    ``` javascript
    // Do:
    {
        "version": "1.23.5"
    }

    // Don't:
    // filename: script_hmm_takes_thingy_and_makes_another_thingy_2000-01-01_version12_updated.js
    ```


---

## Additional Resources

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
* [Popular Convention](http://sideeffect.kr/popularconvention/#javascript)
* [JavaScript Quality Guide](https://github.com/bevacqua/js)
* [Unix Philosophy](http://www.faqs.org/docs/artu/ch01s06.html)
* [Semantic Versioning](https://github.com/mojombo/semver/blob/master/semver.md)


## License

TODO 
