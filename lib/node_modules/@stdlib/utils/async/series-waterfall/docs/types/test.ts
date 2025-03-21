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

import waterfall = require( './index' );

const foo = ( next: Function ) => {
	next( null, 'beep' );
};

const bar = ( str: string, next: Function ) => {
	if ( str === void 0 ) {
		throw new Error( '`str` is missing.' );
	}
	next();
};

const done = ( error: Error | null ) => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function returns void...
{
	waterfall( [ foo, bar ], done ); // $ExpectType void
	waterfall( [ foo, bar ], done, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of functions...
{
	waterfall( 2, done ); // $ExpectError
	waterfall( false, done ); // $ExpectError
	waterfall( true, done ); // $ExpectError
	waterfall( 'abc', done ); // $ExpectError
	waterfall( {}, done ); // $ExpectError
	waterfall( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second callback argument which is not a function having a supported signature...
{
	waterfall( [ foo, bar ], 2 ); // $ExpectError
	waterfall( [ foo, bar ], false ); // $ExpectError
	waterfall( [ foo, bar ], true ); // $ExpectError
	waterfall( [ foo, bar ], 'abc' ); // $ExpectError
	waterfall( [ foo, bar ], {} ); // $ExpectError
	waterfall( [ foo, bar ], [] ); // $ExpectError
	waterfall( [ foo, bar ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	waterfall(); // $ExpectError
	waterfall( [ foo, bar ] ); // $ExpectError
	waterfall( [ foo, bar ], done, {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	waterfall.factory( [ foo, bar ], done ); // $ExpectType WaterfallFunction
	waterfall.factory( [ foo, bar ], done, {} ); // $ExpectType WaterfallFunction
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of functions...
{
	waterfall.factory( 2, done ); // $ExpectError
	waterfall.factory( false, done ); // $ExpectError
	waterfall.factory( true, done ); // $ExpectError
	waterfall.factory( 'abc', done ); // $ExpectError
	waterfall.factory( {}, done ); // $ExpectError
	waterfall.factory( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not a function having a supported signature...
{
	waterfall.factory( [ foo, bar ], 2 ); // $ExpectError
	waterfall.factory( [ foo, bar ], false ); // $ExpectError
	waterfall.factory( [ foo, bar ], true ); // $ExpectError
	waterfall.factory( [ foo, bar ], 'abc' ); // $ExpectError
	waterfall.factory( [ foo, bar ], {} ); // $ExpectError
	waterfall.factory( [ foo, bar ], [] ); // $ExpectError
	waterfall.factory( [ foo, bar ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	waterfall.factory(); // $ExpectError
	waterfall.factory( [ foo, bar ] ); // $ExpectError
	waterfall.factory( [ foo, bar ], done, {}, {} ); // $ExpectError
}
