# Math Libraries

---

# History

---

# Sylvester (2007)

Vector and matrix library.

---

# jstat (2010)

Statistics.

---

# numeric (2011)

Math in the browser.

---

# science.js (2011)

D3 utilities.

---

# numbers (2012)

Basic math + calculus. 

---

# math.js (2013)

Basic math functionality + expression parser.

---

# Deep Learning

[brain (2010)](https://github.com/harthur/brain)

[ConvNetJS (2014)](https://github.com/karpathy/convnetjs)

---

# ...many more

>120 libraries and growing (as of July 2016).

---

# Shortcomings

---

# Poor algorithms

---

``` javascript
function mean( x ) {
    var sum = 0.0;
    var i;
    for ( i = 0; i < x.length; i++ ) {
        sum += x[ i ];
    }
    return sum / x.length;
}
```

---

``` javascript
function mean( x ) {
    var mu = 0.0;
    var d;
    var i;
    for ( i = 0; i < x.length; i++ ) {
        d = x[ i ] - mu;
        mu += d / i;    
    }
    return mu;
}
```

---

``` javascript
function factorial( n ) {
    var acc = 1;
    var i;
    for ( i = 2; i <= n; i++ ) {
        acc *= i;
    }
    return acc;
}
```

---

``` javascript
var TABLE = [...];
function factorial( n ) {
    return TABLE[ n ];
}
```

---

# Poor Data Structures

---

``` javascript
function transpose( A ) {
    var m = A.length;
    var n = A[ 0 ].length;
    var i;
    var j;
    var B;

    B = new Array( n );
    for ( i = 0; i < n; i++ ) {
        B[ i ] = new Array( m );
        for ( j = 0; j < m; j++ ) {
            B[ i ][ j ] = a[ j ][ i ];
        }
    }
    return B;
```

---

``` javascript
var A = [ 1, 2, 3, 4, 5, 6 ];
A.shape = [ 3, 2 ];
A.strides = [ 2, 1 ];
/*
      [ 1 2
  A =   3 4
        5 6 ]
*/

A_20 = A[ A.strides[0]*2 + A.strides[1]*0 ];
// returns 5

function transpose( A ) {
    A.strides = [ A.strides[1], A.strides[0] ];
    return A;
}

T = transpose( A );
/*
*     [ 1 3 5
  T =   2 4 6 ]
*/

T_11 = T[ T.strides[0]*1 + T.strides[1]*1 ];
// returns 4
```

---

# Poor Floating-Point Math

``` javascript
function isnan( v ) {
    return ( v === v );
}

function isEqual( x, y ) {
    if (
        isnan( x ) &&
        isnan( y )
    ) {
        return true
    }
    return ( x === y );
}
```

---

# What is equality?

``` javascript
var toBinaryString = require( '@stdlib/math/base/utils/float64-to-binary-string' );

var bits = toBinaryString( 4 );
// returns '0100000000010000000000000000000000000000000000000000000000000000'
```

---

# What is a NaN?

* IEEE 754
* Series of 64 bits (double)
* Exponent bits all 1s
* Sign bit either 1 or 0
* At least 1 significand bit must be a 1

---

# Non-Equal NaNs

``` javascript
var x = 0; // => '0 00000000000 0000000000000000000000000000000000000000000000000000'

var FLOAT64_VIEW1 = new Float64Array( 1 );
var UINT32_VIEW1 = new Uint32Array( FLOAT64_VIEW1.buffer );

FLOAT64_VIEW1[ 0 ] = x;

// Assume little endian...
var words = [ UINT32_VIEW1[1], UINT32_VIEW1[0] ];
// returns [ 0, 0 ]

var highWord = '0 11111111111 10000000000000000000';
highWord = parseInt( highWord.replace( /\s/g, '' ), 2 );
// returns 2146959360

var FLOAT64_VIEW2 = new Float64Array( 1 );
var UINT32_VIEW2 = new Uint32Array( FLOAT64_VIEW2.buffer );

UINT32_VIEW2[ 1 ] = highWord;
UINT32_VIEW2[ 0 ] = UINT32_VIEW1[ 0 ];

var x1 = FLOAT64_VIEW2[ 0 ];
// returns NaN

highWord = '0 11111111111 01010101010101010101';
highWord = parseInt( highWord.replace( /\s/g, '' ), 2 );
// returns 2146784597

UINT32_VIEW2[ 1 ] = highWord;
UINT32_VIEW2[ 0 ] = UINT32_VIEW1[ 0 ];

var x2 = FLOAT64_VIEW2[ 0 ];
// returns NaN
```

Are x1 and x2 equal?


---

# Summary

* Do due diligence => READ THE SOURCE!
* Most math libraries lack solid fundamentals.
* Still early days.
* ...but immense potential.

---

EOF
