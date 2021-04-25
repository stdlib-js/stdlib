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

import funseqAsync = require( './index' );

/**
* First function.
*
* @param x - result
* @param next - invoked upon function completion
*/
const a = ( x: number, next: Function ): void => {
	next( null, x * 2 );
};

/**
* Second function.
*
* @param x - result
* @param next - invoked upon function completion
*/
const b = ( x: number, next: Function ): void => {
	next( null, x + 3 );
};

/**
* Third function.
*
* @param x - result
* @param next - invoked upon function completion
*/
const c = ( x: number, next: Function ): void => {
	next( null, x / 5 );
};


// TESTS //

// The function returns a pipeline function...
{
	funseqAsync( a, b, c ); // $ExpectType PipelineFunction
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	funseqAsync( '5' ); // $ExpectError
	funseqAsync( 5 ); // $ExpectError
	funseqAsync( true ); // $ExpectError
	funseqAsync( false ); // $ExpectError
	funseqAsync( null ); // $ExpectError
	funseqAsync( undefined ); // $ExpectError
	funseqAsync( [ 1, 2, 3 ] ); // $ExpectError
	funseqAsync( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided another argument which is not a function...
{
	funseqAsync( a, '5' ); // $ExpectError
	funseqAsync( a, true ); // $ExpectError
	funseqAsync( a, false ); // $ExpectError
	funseqAsync( a, null ); // $ExpectError
	funseqAsync( a, [] ); // $ExpectError
	funseqAsync( a, {} ); // $ExpectError

	funseqAsync( a, b, '5' ); // $ExpectError
	funseqAsync( a, b, true ); // $ExpectError
	funseqAsync( a, b, false ); // $ExpectError
	funseqAsync( a, b, null ); // $ExpectError
	funseqAsync( a, b, [] ); // $ExpectError
	funseqAsync( a, b, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	funseqAsync(); // $ExpectError
	funseqAsync( a ); // $ExpectError
}
