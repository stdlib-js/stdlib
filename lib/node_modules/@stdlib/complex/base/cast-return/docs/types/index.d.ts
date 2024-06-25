/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/complex';

/**
* Real or complex number.
*/
type RealOrComplex = number | ComplexLike;

/**
* Nullary function returning either a real or complex number.
*
* @returns result
*/
type Nullary = () => RealOrComplex;

/**
* Nullary function returning a complex number.
*
* @returns result
*/
type WrappedNullary = () => ComplexLike;

/**
* Unary function returning either a real or complex number.
*
* @param x - input value
* @returns result
*/
type Unary = ( x: any ) => RealOrComplex;

/**
* Unary function returning a complex number.
*
* @param x - input value
* @returns result
*/
type WrappedUnary = ( x: any ) => ComplexLike;

/**
* Binary function returning either a real or complex number.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type Binary = ( x: any, y: any ) => RealOrComplex;

/**
* Binary function returning a complex number.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type WrappedBinary = ( x: any, y: any ) => ComplexLike;

/**
* Ternary function returning either a real or complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
type Ternary = ( x: any, y: any, z: any ) => RealOrComplex;

/**
* Ternary function returning a complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
type WrappedTernary = ( x: any, y: any, z: any ) => ComplexLike;

/**
* Quaternary function returning either a real or complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
type Quaternary = ( x: any, y: any, z: any, w: any ) => RealOrComplex;

/**
* Quaternary function returning a complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
type WrappedQuaternary = ( x: any, y: any, z: any, w: any ) => ComplexLike;

/**
* Quinary function returning either a real or complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
type Quinary = ( x: any, y: any, z: any, w: any, v: any ) => RealOrComplex;

/**
* Quinary function returning a complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
type WrappedQuinary = ( x: any, y: any, z: any, w: any, v: any ) => ComplexLike;

/**
* An n-ary function returning either a real or complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param args - subsequent input values
* @returns result
*/
type Nary = ( x: any, y: any, z: any, w: any, v: any, ...args: Array<any> ) => RealOrComplex;

/**
* An n-ary function returning a complex number.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param args - subsequent input values
* @returns result
*/
type WrappedNary = ( x: any, y: any, z: any, w: any, v: any, ...args: Array<any> ) => ComplexLike;

/**
* Complex number constructor.
*
* @param re - real component
* @param im - imaginary component
* @returns complex number
*/
type Constructor = new( re: number, im: number ) => ComplexLike;

/**
* Wraps a nullary function and casts a function's return value to a complex number.
*
* @param fcn - nullary function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var randu = require( '@stdlib/random/base/randu' );
*
* var f = wrap( randu, 0, Complex64 );
*
* // ...
*
* var z = f();
* // returns <Complex64>
*
* var re = realf( z );
* // returns <number>
*
* var im = imagf( z );
* // returns <number>
*/
declare function wrap( fcn: Nullary, nargs: 0, ctor: Constructor ): WrappedNullary;

/**
* Wraps a unary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var identityf = require( '@stdlib/math/base/special/identityf' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var f = wrap( identityf, 1, Complex64 );
*
* // ...
*
* var z = f( 3.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Unary, nargs: 1, ctor: Constructor ): WrappedUnary;

/**
* Wraps a binary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var addf = require( '@stdlib/math/base/ops/addf' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var f = wrap( addf, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 7.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Binary, nargs: 2, ctor: Constructor ): WrappedBinary;

/**
* Wraps a ternary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* function add( x, y, z ) {
*     return x + y + z;
* }
*
* var f = wrap( add, 3, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 12.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Ternary, nargs: 3, ctor: Constructor ): WrappedTernary;

/**
* Wraps a quaternary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* function add( x, y, z, w ) {
*     return x + y + z + w;
* }
*
* var f = wrap( add, 4, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 18.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Quaternary, nargs: 4, ctor: Constructor ): WrappedQuaternary;

/**
* Wraps a quinary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* function add( x, y, z, w, v ) {
*     return x + y + z + w + v;
* }
*
* var f = wrap( add, 5, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 25.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Quinary, nargs: 5, ctor: Constructor ): WrappedQuinary;

/**
* Wraps an n-ary function and casts a function's return value to a complex number.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* function add( x, y, z, w, v, t ) {
*     return x + y + z + w + v + t;
* }
*
* var f = wrap( add, 6, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 33.0
*
* var im = imagf( z );
* // returns 0.0
*/
declare function wrap( fcn: Nary, nargs: number, ctor: Constructor ): WrappedNary;


// EXPORTS //

export = wrap;
