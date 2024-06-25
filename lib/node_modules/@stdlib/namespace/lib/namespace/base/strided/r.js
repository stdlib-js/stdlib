/**
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

'use strict';

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.range',
	'path': '@stdlib/stats/base/range',
	'value': require( '@stdlib/stats/base/range' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.rangeBy',
	'path': '@stdlib/stats/base/range-by',
	'value': require( '@stdlib/stats/base/range-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanrange-by',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.reinterpretComplex',
	'path': '@stdlib/strided/base/reinterpret-complex',
	'value': require( '@stdlib/strided/base/reinterpret-complex' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/reinterpret-complex128',
		'@stdlib/strided/base/reinterpret-complex64'
	]
});

ns.push({
	'alias': 'base.strided.reinterpretComplex64',
	'path': '@stdlib/strided/base/reinterpret-complex64',
	'value': require( '@stdlib/strided/base/reinterpret-complex64' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/reinterpret-complex',
		'@stdlib/strided/base/reinterpret-complex128'
	]
});

ns.push({
	'alias': 'base.strided.reinterpretComplex128',
	'path': '@stdlib/strided/base/reinterpret-complex128',
	'value': require( '@stdlib/strided/base/reinterpret-complex128' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/reinterpret-complex',
		'@stdlib/strided/base/reinterpret-complex64'
	]
});


// EXPORTS //

module.exports = ns;
