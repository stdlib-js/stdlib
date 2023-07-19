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

var merge = require( './../lib' );

var target = {
	'a': 'beep',
	'b': 'boop',
	'c': {
		'c1': 'woot',
		'c2': false,
		'c3': {
			'c3a': [ 1, 2 ],
			'c3b': null
		}
	},
	'd': [ 1, 2, 3 ]
};

var source = {
	'b': 3.141592653589793,
	'c': {
		'c1': 'bap',
		'c3': {
			'c3b': 5,
			'c3c': 'bop'
		},
		'c4': 1337,
		'c5': new Date()
	},
	'd': [ 4, 5, 6 ],
	'e': true
};

var out = merge( {}, target, source );

console.dir( out );
/* =>
    {
        'a': 'beep',
        'b': 3.141592653589793,
        'c': {
            'c1': 'bap',
            'c2': false,
            'c3': {
                'c3a': [ 1, 2 ],
                'c3b': 5,
                'c3c': 'bop'
            },
            'c4': 1337,
            'c5': <Date>
        },
        'd': [ 4, 5, 6 ],
        'e': true
    }
*/
