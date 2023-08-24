/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

type PoliticalParty = 'Democratic' | 'Republican' | 'Democratic-Republican' | 'Federalist' | 'National Union' | 'Whig' | 'Whig & Democratic' | 'none'; // tslint-disable-line max-line-length

type YearRange = [ number, number ];

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Name of president(s).
	*/
	name?: string | Array<string>;

	/**
	* Year(s).
	*/
	year?: number | Array<number>;

	/**
	* Year range.
	*/
	range?: YearRange;

	/**
	* Political party.
	*/
	party?: PoliticalParty | Array<PoliticalParty>;
}

/**
* Returns State of the Union addresses.
*
* @param options - options object
* @param options.name - name of president(s)
* @param options.year - year(s)
* @param options.range - year range
* @param options.party - political party
* @throws unrecognized property value
* @returns SOTU addresses
*
* @example
* var speeches = sotu();
* // returns <ObjectArray>
*
* @example
* var speeches = sotu({
*	'name': [ 'Franklin D Roosevelt', 'William J. Clinton' ]
* });
* // returns <ObjectArray>
*/
declare function sotu( options?: Options ): Array<Object>;


// EXPORTS //

export = sotu;
