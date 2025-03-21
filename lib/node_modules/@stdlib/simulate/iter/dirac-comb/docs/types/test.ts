/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import iterDiracComb = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterDiracComb(); // $ExpectType Iterator
	iterDiracComb( {} ); // $ExpectType Iterator
	iterDiracComb( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterDiracComb( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `wavelength` option which is not a number...
{
	iterDiracComb( { 'wavelength': '5' } ); // $ExpectError
	iterDiracComb( { 'wavelength': true } ); // $ExpectError
	iterDiracComb( { 'wavelength': false } ); // $ExpectError
	iterDiracComb( { 'wavelength': null } ); // $ExpectError
	iterDiracComb( { 'wavelength': [] } ); // $ExpectError
	iterDiracComb( { 'wavelength': {} } ); // $ExpectError
	iterDiracComb( { 'wavelength': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterDiracComb( { 'amplitude': '5' } ); // $ExpectError
	iterDiracComb( { 'amplitude': true } ); // $ExpectError
	iterDiracComb( { 'amplitude': false } ); // $ExpectError
	iterDiracComb( { 'amplitude': null } ); // $ExpectError
	iterDiracComb( { 'amplitude': [] } ); // $ExpectError
	iterDiracComb( { 'amplitude': {} } ); // $ExpectError
	iterDiracComb( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterDiracComb( { 'offset': '5' } ); // $ExpectError
	iterDiracComb( { 'offset': true } ); // $ExpectError
	iterDiracComb( { 'offset': false } ); // $ExpectError
	iterDiracComb( { 'offset': null } ); // $ExpectError
	iterDiracComb( { 'offset': [] } ); // $ExpectError
	iterDiracComb( { 'offset': {} } ); // $ExpectError
	iterDiracComb( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterDiracComb( { 'iter': '5' } ); // $ExpectError
	iterDiracComb( { 'iter': true } ); // $ExpectError
	iterDiracComb( { 'iter': false } ); // $ExpectError
	iterDiracComb( { 'iter': null } ); // $ExpectError
	iterDiracComb( { 'iter': [] } ); // $ExpectError
	iterDiracComb( { 'iter': {} } ); // $ExpectError
	iterDiracComb( { 'iter': ( x: number ): number => x } ); // $ExpectError
}
