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

import namedtypedtuple = require( './index' );


// TESTS //

// The function returns a factory function...
{
	namedtypedtuple( [ 'x', 'y' ] ); // $ExpectType Factory
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': 'int32' } ); // $ExpectType Factory
}

// The compiler throws an error if the function is provided a first argument that is not a string array...
{
	namedtypedtuple( 123, 1 ); // $ExpectError
	namedtypedtuple( true ); // $ExpectError
	namedtypedtuple( false ); // $ExpectError
	namedtypedtuple( null ); // $ExpectError
	namedtypedtuple( 'abc' ); // $ExpectError
	namedtypedtuple( {}, 2 ); // $ExpectError
	namedtypedtuple( ( x: number ): number => x ); // $ExpectError

	namedtypedtuple( 123, {} ); // $ExpectError
	namedtypedtuple( true, {} ); // $ExpectError
	namedtypedtuple( false, {} ); // $ExpectError
	namedtypedtuple( null, {} ); // $ExpectError
	namedtypedtuple( 'abc', {} ); // $ExpectError
	namedtypedtuple( {}, {} ); // $ExpectError
	namedtypedtuple( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a recognized data type...
{
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': 123 } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': 'abc' } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': null } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': [] } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': {} } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': true } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': false } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `name` option which is not a string...
{
	namedtypedtuple( [ 'x', 'y' ], { 'name': 123 } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': null } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': [] } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': {} } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': true } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': false } ); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], { 'name': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	namedtypedtuple(); // $ExpectError
	namedtypedtuple( [ 'x', 'y' ], {}, {} ); // $ExpectError
}

// The function returns a `factory` function that returns a tuple...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory( [ 1, 2 ] ); // $ExpectType Tuple
	factory( [ 1, 2 ], 'int16' ); // $ExpectType Tuple
	factory( new Int32Array( [ 1, 2 ] ), 'int16' ); // $ExpectType Tuple
	factory(); // $ExpectType Tuple
	factory( 'float32' ); // $ExpectType Tuple
}

// The function returns a `factory` function with a `from` method which returns a tuple...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory.from( [ 1, 2 ] ); // $ExpectType Tuple
	factory.from( [ 1, 2 ], ( x: number ): number => x * x ); // $ExpectType Tuple
	factory.from( [ 1, 2 ], ( x: number ): number => x * x, {} ); // $ExpectType Tuple
}

// The compiler throws an error if the `from` method of the `factory` function is provided a first argument which is not array-like...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory.from( true ); // $ExpectError
	factory.from( false ); // $ExpectError
	factory.from( 123 ); // $ExpectError
	factory.from( null ); // $ExpectError
	factory.from( {} ); // $ExpectError

	factory.from( true, ( x: number ): number => x * x ); // $ExpectError
	factory.from( false, ( x: number ): number => x * x ); // $ExpectError
	factory.from( 123, ( x: number ): number => x * x ); // $ExpectError
	factory.from( null, ( x: number ): number => x * x ); // $ExpectError
	factory.from( {}, ( x: number ): number => x * x ); // $ExpectError

	factory.from( true, ( x: number ): number => x * x, {} ); // $ExpectError
	factory.from( false, ( x: number ): number => x * x, {} ); // $ExpectError
	factory.from( 123, ( x: number ): number => x * x, {} ); // $ExpectError
	factory.from( null, ( x: number ): number => x * x, {} ); // $ExpectError
	factory.from( {}, ( x: number ): number => x * x, {} ); // $ExpectError
}

// The compiler throws an error if the `from` method of the `factory` function is provided a second argument which is not a function with a supported signature...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory.from( [ 1, 2 ], true ); // $ExpectError
	factory.from( [ 1, 2 ], false ); // $ExpectError
	factory.from( [ 1, 2 ], 123 ); // $ExpectError
	factory.from( [ 1, 2 ], null ); // $ExpectError
	factory.from( [ 1, 2 ], {} ); // $ExpectError
}

// The function returns a `factory` function with a `fromObject` method which returns a tuple...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	const obj = { 'x': 1.0, 'y': -1.0 };
	factory.fromObject( obj ); // $ExpectType Tuple
	factory.fromObject( obj, ( x: number ): number => x * x ); // $ExpectType Tuple
	factory.fromObject( obj, ( x: number ): number => x * x, {} ); // $ExpectType Tuple
}

// The compiler throws an error if the `fromObject` method of the `factory` function is provided a second argument which is not a function with a supported signature...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	const obj = { 'x': 1.0, 'y': -1.0 };
	factory.fromObject( obj, true ); // $ExpectError
	factory.fromObject( obj, false ); // $ExpectError
	factory.fromObject( obj, 123 ); // $ExpectError
	factory.fromObject( obj, null ); // $ExpectError
	factory.fromObject( obj, {} ); // $ExpectError
	factory.fromObject( obj, ( x: number, y: number ): number => x * y ); // $ExpectError
}

// The function returns a `factory` function with an `of` method which returns a tuple...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory.of( 1, 2 ); // $ExpectType Tuple
}

// The compiler throws an error if the `of` method of the `factory` function is provided arguments that are not numbers...
{
	const factory = namedtypedtuple( [ 'x', 'y' ] );
	factory.of( 'abc' ); // $ExpectError
	factory.of( true, false ); // $ExpectError
	factory.of( {}, [] ); // $ExpectError
	factory.of( null ); // $ExpectError
}
