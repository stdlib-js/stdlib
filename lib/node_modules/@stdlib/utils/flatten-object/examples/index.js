/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

var Float64Array = require( '@stdlib/array/float64' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var flattenObject = require( './../lib' );

function noop() {
	// Do nothing...
}

var obj = {
	'a': {
		'b': {
			'beep': 'boop',
			'foo': 'bar'
		},
		'c': [ 1, 2, 3 ],
		'd': true,
		'e': null,
		'f': 3.14,
		'g': new Date(),
		'h': {
			'bip': 6,
			'bop': [ 4, 5, 6 ]
		},
		'i': [ null, true, {} ],
		'j': /.*/,
		'k': noop,
		'l': NaN,
		'm': [],
		'n': string2buffer( 'hello' ),
		'o': {
			'data': new Float64Array( 10 )
		},
		'p': {
			'1': {
				'2': {
					'3': {}
				}
			}
		}
	}
};

var out = flattenObject( obj, {
	'depth': 5,
	'copy': true,
	'flattenArrays': false,
	'delimiter': '-|-'
});
console.dir( out );
/* =>
	{
		'a-|-b-|-beep': 'boop',
		'a-|-b-|-foo': 'bar',
		'a-|-c': [1,2,3],
		'a-|-d': true,
		'a-|-e': null,
		'a-|-f': 3.14,
		'a-|-g': <Date>,
		'a-|-h-|-bip': 6,
		'a-|-h-|-bop': [4,5,6],
		'a-|-i': [null,true,{}],
		'a-|-j': <RegExp>,
		'a-|-k': <Function>,
		'a-|-l': NaN,
		'a-|-m': [],
		'a-|-n': <Buffer>,
		'a-|-o-|-data': <Float64Array>,
		'a-|-p-|-1-|-2-|-3': {}
	}
*/
