/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/object';

/**
* Real or complex number.
*/
type RealOrComplex = number | ComplexLike;

/**
* Nullary function.
*
* @returns result
*/
type Nullary = () => any;

/**
* Unary function accepting complex numbers.
*
* @param x - input value
* @returns result
*/
type Unary = ( x: ComplexLike ) => any;

/**
* Unary function accepting both real and complex numbers.
*
* @param x - input value
* @returns result
*/
type WrappedUnary = ( x: RealOrComplex ) => any;

/**
* Binary function accepting complex numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type Binary = ( x: ComplexLike, y: ComplexLike ) => any;

/**
* Binary function accepting both real and complex numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type WrappedBinary = ( x: RealOrComplex, y: RealOrComplex ) => any;

/**
* Ternary function accepting complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
type Ternary = ( x: ComplexLike, y: ComplexLike, z: ComplexLike ) => any;

/**
* Ternary function accepting both real and complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
type WrappedTernary = ( x: RealOrComplex, y: RealOrComplex, z: RealOrComplex ) => any; // tslint:disable-line:max-line-length

/**
* Quaternary function accepting complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
type Quaternary = ( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike ) => any; // tslint:disable-line:max-line-length

/**
* Quaternary function accepting both real and complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
type WrappedQuaternary = ( x: RealOrComplex, y: RealOrComplex, z: RealOrComplex, w: RealOrComplex ) => any; // tslint:disable-line:max-line-length

/**
* Quinary function accepting complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
type Quinary = ( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike, v: ComplexLike ) => any; // tslint:disable-line:max-line-length

/**
* Quinary function accepting both real and complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
type WrappedQuinary = ( x: RealOrComplex, y: RealOrComplex, z: RealOrComplex, w: RealOrComplex, v: RealOrComplex ) => any; // tslint:disable-line:max-line-length

/**
* An n-ary function accepting complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param args - subsequent input values
* @returns result
*/
type Nary = ( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike, v: ComplexLike, ...args: Array<ComplexLike> ) => any; // tslint:disable-line:max-line-length

/**
* An n-ary function accepting both real and complex numbers.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param args - subsequent input values
* @returns result
*/
type WrappedNary = ( x: RealOrComplex, y: RealOrComplex, z: RealOrComplex, w: RealOrComplex, v: RealOrComplex, ...args: Array<RealOrComplex> ) => any; // tslint:disable-line:max-line-length

/**
* Complex number constructor.
*
* @param re - real component
* @param im - imaginary component
* @returns complex number
*/
type Constructor = new( re: number, im: number ) => ComplexLike;

/**
* Wraps a nullary function accepting complex number arguments to support providing both real and complex numbers.
*
* @param fcn - nullary function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
* var randu = require( `@stdlib/random/base/randu` );
*
* function randComplex() {
*     return new Complex64( randu(), randu() );
* }
*
* var f = wrap( randComplex, 0, Complex64 );
*
* // ...
*
* var z = f();
* // returns <Complex64>
*
* var re = real( z );
* // returns <number>
*
* var im = imag( z );
* // returns <number>
*/
declare function wrap( fcn: Nullary, nargs: 0, ctor: Constructor ): Nullary;

/**
* Wraps a unary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var cidentityf = require( `@stdlib/math/base/special/cidentityf` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var f = wrap( cidentityf, 1, Complex64 );
*
* // ...
*
* var z = f( 3.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Unary, nargs: 1, ctor: Constructor ): WrappedUnary;

/**
* Wraps a binary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var cadd = require( `@stdlib/math/base/ops/cadd` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var f = wrap( cadd, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 7.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Binary, nargs: 2, ctor: Constructor ): WrappedBinary; // tslint:disable-line:max-line-length

/**
* Wraps a ternary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* function add( x, y, z ) {
*     var re = real( x ) + real( y ) + real( z );
*     var im = imag( x ) + imag( y ) + imag( z );
*     return new Complex64( re, im );
* }
*
* var f = wrap( add, 3, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 12.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Ternary, nargs: 3, ctor: Constructor ): WrappedTernary; // tslint:disable-line:max-line-length

/**
* Wraps a quaternary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* function add( x, y, z, w ) {
*     var re = real( x ) + real( y ) + real( z ) + real( w );
*     var im = imag( x ) + imag( y ) + imag( z ) + imag( w );
*     return new Complex64( re, im );
* }
*
* var f = wrap( add, 4, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 18.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Quaternary, nargs: 4, ctor: Constructor ): WrappedQuaternary; // tslint:disable-line:max-line-length

/**
* Wraps a quinary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* function add( x, y, z, w, v ) {
*     var re = real( x ) + real( y ) + real( z ) + real( w ) + real( v );
*     var im = imag( x ) + imag( y ) + imag( z ) + imag( w ) + imag( v );
*     return new Complex64( re, im );
* }
*
* var f = wrap( add, 5, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 25.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Quinary, nargs: 5, ctor: Constructor ): WrappedQuinary; // tslint:disable-line:max-line-length

/**
* Wraps an n-ary function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @param fcn - function to wrap
* @param nargs - number of arguments
* @param ctor - complex number constructor
* @throws {TypeError} second argument must be a nonnegative integer
* @returns wrapped function
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* function add( x, y, z, w, v, t ) {
*     var re = real( x ) + real( y ) + real( z ) + real( w ) + real( v ) + real( t );
*     var im = imag( x ) + imag( y ) + imag( z ) + imag( w ) + imag( v ) + imag( t );
*     return new Complex64( re, im );
* }
*
* var f = wrap( add, 6, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 33.0
*
* var im = imag( z );
* // returns 0.0
*/
declare function wrap( fcn: Nary, nargs: number, ctor: Constructor ): WrappedNary; // tslint:disable-line:max-line-length


// EXPORTS //

export = wrap;
