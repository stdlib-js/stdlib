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

import datespace = require( './index' );


// TESTS //

// The function returns an array of dates...
{
	const stop = '2014-12-02T07:00:54.973Z';
	const start = new Date( stop ).getTime() - 60000;
	datespace( start, stop ); // $ExpectType Date[]
	datespace( start, stop, 30 ); // $ExpectType Date[]
	datespace( start, stop, { 'round': 'floor' } ); // $ExpectType Date[]
	datespace( start, stop, 30, { 'round': 'floor' } ); // $ExpectType Date[]
}

// The function does not compile if provided values other `Date` objects, Unix timestamps, JavaScript timestamps, or date strings for the first two parameters...
{
	const stop = '2014-12-02T07:00:54.973Z';
	const start = new Date( stop ).getTime() - 60000;
	datespace( true, stop ); // $ExpectError
	datespace( false, stop ); // $ExpectError
	datespace( null, stop ); // $ExpectError
	datespace( [], stop ); // $ExpectError
	datespace( {}, stop ); // $ExpectError
	datespace( ( x: number ): number => x, stop ); // $ExpectError

	datespace( start, true ); // $ExpectError
	datespace( start, false ); // $ExpectError
	datespace( start, [] ); // $ExpectError
	datespace( start, {} ); // $ExpectError
	datespace( start, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a number or object for the third parameter...
{
	const stop = '2014-12-02T07:00:54.973Z';
	const start = new Date( stop ).getTime() - 60000;
	datespace( start, stop, true ); // $ExpectError
	datespace( start, stop, false ); // $ExpectError
	datespace( start, stop, '5' ); // $ExpectError
	datespace( start, stop, [] ); // $ExpectError
	datespace( start, stop, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `round` option which is not a recognized rounding procedure...
{
	const stop = '2014-12-02T07:00:54.973Z';
	const start = new Date( stop ).getTime() - 60000;
	datespace( start, stop, { 'round': 'abc' } ); // $ExpectError
	datespace( start, stop, { 'round': 123 } ); // $ExpectError
	datespace( start, stop, { 'round': null } ); // $ExpectError
	datespace( start, stop, { 'round': [] } ); // $ExpectError
	datespace( start, stop, { 'round': {} } ); // $ExpectError
	datespace( start, stop, { 'round': ( x: number ): number => x } ); // $ExpectError

	datespace( start, stop, 10, { 'round': 'abc' } ); // $ExpectError
	datespace( start, stop, 10, { 'round': 123 } ); // $ExpectError
	datespace( start, stop, 10, { 'round': null } ); // $ExpectError
	datespace( start, stop, 10, { 'round': [] } ); // $ExpectError
	datespace( start, stop, 10, { 'round': {} } ); // $ExpectError
	datespace( start, stop, 10, { 'round': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	datespace(); // $ExpectError
	datespace( new Date() ); // $ExpectError
}
