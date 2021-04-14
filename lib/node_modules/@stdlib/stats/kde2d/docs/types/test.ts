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

// tslint:disable:max-line-length

import kde2d = require( './index' );


// TESTS //

// The function returns an object with x, y, and z values...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y ); // $ExpectType Output
	kde2d( x, y, { 'n': 30 } ); // $ExpectType Output
	kde2d( x, y, { 'xMin': 0, 'xMax': 5 } ); // $ExpectType Output
	kde2d( x, y, { 'kernel': 'gaussian' } ); // $ExpectType Output
}

// The function does not compile if provided a first argument that is not an array of numbers...
{
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( 'abc', y ); // $ExpectError
	kde2d( true, y ); // $ExpectError
	kde2d( false, y ); // $ExpectError
	kde2d( null, y ); // $ExpectError
	kde2d( undefined, y ); // $ExpectError
	kde2d( 5, y ); // $ExpectError
	kde2d( {}, y ); // $ExpectError
	kde2d( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is not an array of numbers...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	kde2d( x, 'abc' ); // $ExpectError
	kde2d( x, true ); // $ExpectError
	kde2d( x, false ); // $ExpectError
	kde2d( x, null ); // $ExpectError
	kde2d( x, undefined ); // $ExpectError
	kde2d( x, 5 ); // $ExpectError
	kde2d( x, {} ); // $ExpectError
	kde2d( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, true ); // $ExpectError
	kde2d( x, y, false ); // $ExpectError
	kde2d( x, y, null ); // $ExpectError
	kde2d( x, y, 5 ); // $ExpectError
	kde2d( x, y, 'abc' ); // $ExpectError
	kde2d( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `h` option which is not a numeric array...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'h': 123 } ); // $ExpectError
	kde2d( x, y, { 'h': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'h': true } ); // $ExpectError
	kde2d( x, y, { 'h': false } ); // $ExpectError
	kde2d( x, y, { 'h': null } ); // $ExpectError
	kde2d( x, y, { 'h': [ 'a', 'b', 'c' ] } ); // $ExpectError
	kde2d( x, y, { 'h': {} } ); // $ExpectError
	kde2d( x, y, { 'h': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `n` option which is not a number...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'n': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'n': true } ); // $ExpectError
	kde2d( x, y, { 'n': false } ); // $ExpectError
	kde2d( x, y, { 'n': null } ); // $ExpectError
	kde2d( x, y, { 'n': [] } ); // $ExpectError
	kde2d( x, y, { 'n': {} } ); // $ExpectError
	kde2d( x, y, { 'n': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `xMin` option which is not a number...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'xMin': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'xMin': true } ); // $ExpectError
	kde2d( x, y, { 'xMin': false } ); // $ExpectError
	kde2d( x, y, { 'xMin': null } ); // $ExpectError
	kde2d( x, y, { 'xMin': [] } ); // $ExpectError
	kde2d( x, y, { 'xMin': {} } ); // $ExpectError
	kde2d( x, y, { 'xMin': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `xMax` option which is not a number...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'xMax': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'xMax': true } ); // $ExpectError
	kde2d( x, y, { 'xMax': false } ); // $ExpectError
	kde2d( x, y, { 'xMax': null } ); // $ExpectError
	kde2d( x, y, { 'xMax': [] } ); // $ExpectError
	kde2d( x, y, { 'xMax': {} } ); // $ExpectError
	kde2d( x, y, { 'xMax': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `yMin` option which is not a number...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'yMin': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'yMin': true } ); // $ExpectError
	kde2d( x, y, { 'yMin': false } ); // $ExpectError
	kde2d( x, y, { 'yMin': null } ); // $ExpectError
	kde2d( x, y, { 'yMin': [] } ); // $ExpectError
	kde2d( x, y, { 'yMin': {} } ); // $ExpectError
	kde2d( x, y, { 'yMin': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `yMax` option which is not a number...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'yMax': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'yMax': true } ); // $ExpectError
	kde2d( x, y, { 'yMax': false } ); // $ExpectError
	kde2d( x, y, { 'yMax': null } ); // $ExpectError
	kde2d( x, y, { 'yMax': [] } ); // $ExpectError
	kde2d( x, y, { 'yMax': {} } ); // $ExpectError
	kde2d( x, y, { 'yMax': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `kernel` option which is not a recognized kernel name or function...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x, y, { 'kernel': 'abc' } ); // $ExpectError
	kde2d( x, y, { 'kernel': 123 } ); // $ExpectError
	kde2d( x, y, { 'kernel': true } ); // $ExpectError
	kde2d( x, y, { 'kernel': false } ); // $ExpectError
	kde2d( x, y, { 'kernel': null } ); // $ExpectError
	kde2d( x, y, { 'kernel': [] } ); // $ExpectError
	kde2d( x, y, { 'kernel': {} } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	const y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	kde2d( x ); // $ExpectError
	kde2d( x, y, {}, {} ); // $ExpectError
}
