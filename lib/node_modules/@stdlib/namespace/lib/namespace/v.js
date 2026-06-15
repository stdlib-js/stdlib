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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'vartest',
	'path': '@stdlib/stats/vartest',
	'value': require( '@stdlib/stats/vartest' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/bartlett-test'
	]
});

ns.push({
	'alias': 'vector',
	'path': '@stdlib/ndarray/vector/ctor',
	'value': require( '@stdlib/ndarray/vector/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/vector/float64',
		'@stdlib/ndarray/vector/float32',
		'@stdlib/ndarray/vector/int16',
		'@stdlib/ndarray/vector/int32',
		'@stdlib/ndarray/vector/int8',
		'@stdlib/ndarray/vector/uint16',
		'@stdlib/ndarray/vector/uint32',
		'@stdlib/ndarray/vector/uint8',
		'@stdlib/ndarray/vector/uint8c',
		'@stdlib/ndarray/vector/complex128',
		'@stdlib/ndarray/vector/complex64',
		'@stdlib/ndarray/vector/bool',
		'@stdlib/ndarray/ctor'
	]
});


// EXPORTS //

module.exports = ns;
