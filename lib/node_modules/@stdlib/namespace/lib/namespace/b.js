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

/* eslint-disable stdlib/require-order */

'use strict';

// MODULES //

var append = require( './append.js' );


// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'bartlettTest',
	'path': '@stdlib/stats/bartlett-test',
	'value': require( '@stdlib/stats/bartlett-test' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/vartest',
		'@stdlib/stats/levene-test'
	]
});

append( ns, require( './base' ) );

ns.push({
	'alias': 'bench',
	'path': '@stdlib/bench',
	'value': require( '@stdlib/bench' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/timeit'
	]
});

ns.push({
	'alias': 'BERNDT_CPS_WAGES_1985',
	'path': '@stdlib/datasets/berndt-cps-wages-1985',
	'value': require( '@stdlib/datasets/berndt-cps-wages-1985' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/berndt-cps-wages-1978'
	]
});

ns.push({
	'alias': 'bifurcate',
	'path': '@stdlib/utils/bifurcate',
	'value': require( '@stdlib/utils/bifurcate' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-own',
		'@stdlib/utils/group'
	]
});

ns.push({
	'alias': 'bifurcateBy',
	'path': '@stdlib/utils/bifurcate-by',
	'value': require( '@stdlib/utils/bifurcate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'bifurcateByAsync',
	'path': '@stdlib/utils/async/bifurcate-by',
	'value': require( '@stdlib/utils/async/bifurcate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/async/group-by'
	]
});

ns.push({
	'alias': 'bifurcateIn',
	'path': '@stdlib/utils/bifurcate-in',
	'value': require( '@stdlib/utils/bifurcate-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-own',
		'@stdlib/utils/group-in'
	]
});

ns.push({
	'alias': 'bifurcateOwn',
	'path': '@stdlib/utils/bifurcate-own',
	'value': require( '@stdlib/utils/bifurcate-own' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-in',
		'@stdlib/utils/group-own'
	]
});

ns.push({
	'alias': 'BigInt',
	'path': '@stdlib/bigint/ctor',
	'value': require( '@stdlib/bigint/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'binomialTest',
	'path': '@stdlib/stats/binomial-test',
	'value': require( '@stdlib/stats/binomial-test' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'Boolean',
	'path': '@stdlib/boolean/ctor',
	'value': require( '@stdlib/boolean/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'broadcastArray',
	'path': '@stdlib/ndarray/broadcast-array',
	'value': require( '@stdlib/ndarray/broadcast-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/maybe-broadcast-array'
	]
});

ns.push({
	'alias': 'Buffer',
	'path': '@stdlib/buffer/ctor',
	'value': require( '@stdlib/buffer/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer'
	]
});

ns.push({
	'alias': 'buffer2json',
	'path': '@stdlib/buffer/to-json',
	'value': require( '@stdlib/buffer/to-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/to-json',
		'@stdlib/buffer/reviver'
	]
});

ns.push({
	'alias': 'BYTE_ORDER',
	'path': '@stdlib/os/byte-order',
	'value': require( '@stdlib/os/byte-order' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-big-endian',
		'@stdlib/assert/is-little-endian'
	]
});


// EXPORTS //

module.exports = ns;
