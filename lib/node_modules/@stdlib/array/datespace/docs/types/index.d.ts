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

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how sub-millisecond times should be rounded (default: 'floor' ).
	*/
	round?: 'floor' | 'round' | 'ceil';
}

/**
* Generates an array of linearly spaced dates.
*
* @param start - start time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param stop - stop time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param options - function options
* @param options.round - specifies how sub-millisecond times should be rounded: [ 'floor', 'ceil', 'round' ] (default: 'floor' )
* @throws must provide valid options
* @returns array of dates
*
* @example
* var stop = '2014-12-02T07:00:54.973Z';
* var start = new Date( stop ) - 60000;
*
* var arr = datespace( start, stop, 6 );
* // returns [...]
*
* @example
* // Equivalent of Math.ceil():
* var arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'ceil' } );
* // returns [...]
*
* // Equivalent of Math.round():
* var arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'round' } );
* // returns [...]
*/
declare function datespace( start: Date | number | string, stop: Date | number | string, options?: Options ): Array<Date>; // tslint-disable-line max-line-length

/**
* Generates an array of linearly spaced dates.
*
* @param start - start time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param stop - stop time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param length - output array length (default: 100)
* @param options - function options
* @param options.round - specifies how sub-millisecond times should be rounded: [ 'floor', 'ceil', 'round' ] (default: 'floor' )
* @throws length argument must a positive integer
* @throws must provide valid options
* @returns array of dates
*
* @example
* var stop = '2014-12-02T07:00:54.973Z';
* var start = new Date( stop ) - 60000;
*
* var arr = datespace( start, stop, 6 );
* // returns [...]
*
* @example
* // Equivalent of Math.ceil():
* var arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'ceil' } );
* // returns [...]
*
* // Equivalent of Math.round():
* var arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'round' } );
* // returns [...]
*/
declare function datespace( start: Date | number | string, stop: Date | number | string, length: number, options?: Options ): Array<Date>; // tslint-disable-line max-line-length


// EXPORTS //

export = datespace;
