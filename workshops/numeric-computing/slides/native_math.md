# Native Math

---

# ES5

* max
* min
* random
* abs
* ceil
* floor
* round
* pow
* sqrt
* exp
* log (ln)
* sin
* cos
* tan
* asin
* acos
* atan
* atan2

---

# ES2015

* sign
* fround
* trunc
* cbrt
* expm1
* log10
* log1p
* log2
* hypot
* sinh
* cosh
* tanh
* asinh
* acosh
* atanh
* clz32
* imul

---

# Multi-value Support

``` javascript
var max = Math.max( 3, 1, 4, 1 );
// returns 4
```

---

# Array Support

``` javascript
var x = [ 3, 1, 4, 1 ];
var max = Math.max.apply( null, x );
// returns 4
```

---

# Performance

``` javascript
function max( x ) {
    var m;
    var i;
    m = x[ 0 ];
    for ( i = 1; i < x.length; i++ ) {
        if ( x[i] > m ) {
            m = x[ i ];
        }
    }
    return m;
}
```

(benchmark)

---

# ECMA-262

* Does not mandate specific Math algorithms (recommends libm).
* No required precision (speed vs accuracy).
* Implementation dependent (portability).


---

# Implementation Bugs

[V8 sin/cos](https://bugs.chromium.org/p/v8/issues/detail?id=3006)

[V8 trig fcns](https://bugs.chromium.org/p/chromium/issues/detail?id=320097)

[V8 not obeying IEEE 754-2008](https://bugs.chromium.org/p/v8/issues/detail?id=3089)

[Mozilla discussion on V8 sin/cos](https://bugzilla.mozilla.org/show_bug.cgi?id=967709#c33)

[V8 replaced a trig lookup table and then computes `tan` as `sin/cos`](https://github.com/v8/v8/commit/33b5db090258c2a2dc825659c3ad109bd02110c1)

[Browser math accuracy issues](https://github.com/kangax/compat-table/issues/392)

[ES6 accuracy of special functions](https://esdiscuss.org/topic/es6-accuracy-of-special-functions)

[V8 exp accuracy](https://bugs.chromium.org/p/v8/issues/detail?id=3468)

[Spreadsheet showing trig results across browsers](https://docs.google.com/spreadsheets/d/1t2jrptAvaQetDIYPD8GKc90Dni2dT3FuHgKKFF-eJHw/edit#gid=0)

[V8 pow accuracy](https://bugs.chromium.org/p/v8/issues/detail?id=3599)

[Mozilla pow accumulation of errors](https://bugzilla.mozilla.org/show_bug.cgi?id=618251)

[V8 hyperbolic trig accuracy](https://github.com/paulmillr/es6-shim/issues/334)

[TC39 testing of Math built-ins](https://github.com/tc39/test262/pull/269)

[ES6 shim accuracy issues](https://github.com/paulmillr/es6-shim/issues/314)

[V8 Math.random](https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.pxwdcvikc)

[Webkit switched to weak PRNG for speed](https://bugs.chromium.org/p/chromium/issues/detail?id=246054)

[V8 deopts if Math.floor provided -0](https://bugs.chromium.org/p/v8/issues/detail?id=2890)

[V8 deopts if Math.ceil provided 0](https://bugs.chromium.org/p/v8/issues/detail?id=4059)

[V8 Math.round returns wrong results](https://bugs.chromium.org/p/v8/issues/detail?id=958)

---

EOF

