/**
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

/* eslint-disable new-cap */

'use strict';

var format = require( '@stdlib/string/format' );
var Bool = require( './../lib' );

var values = [
	'5',
	5,
	0,
	NaN,
	true,
	false,
	null,
	void 0,
	[],
	{}
];

var i;
for ( i = 0; i < values.length; i++ ) {
	console.log( format( '%s => %s', JSON.stringify( values[ i ] ), ( Bool( values[ i ] ) ) ? 'true' : 'false' ) );
}
