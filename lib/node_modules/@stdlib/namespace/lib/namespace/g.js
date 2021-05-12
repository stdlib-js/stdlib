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

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'GAMMA_LANCZOS_G',
	'path': '@stdlib/constants/float64/gamma-lanczos-g',
	'value': require( '@stdlib/constants/float64/gamma-lanczos-g' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'gdot',
	'path': '@stdlib/blas/gdot',
	'value': require( '@stdlib/blas/gdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gdot',
		'@stdlib/blas/ddot',
		'@stdlib/blas/sdot'
	]
});

ns.push({
	'alias': 'getegid',
	'path': '@stdlib/process/getegid',
	'value': require( '@stdlib/process/getegid' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/geteuid',
		'@stdlib/process/getgid',
		'@stdlib/process/getuid',
		'@stdlib/process/setegid',
		'@stdlib/process/seteuid',
		'@stdlib/process/setuid'
	]
});

ns.push({
	'alias': 'geteuid',
	'path': '@stdlib/process/geteuid',
	'value': require( '@stdlib/process/geteuid' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/getegid',
		'@stdlib/process/getgid',
		'@stdlib/process/getuid',
		'@stdlib/process/setegid',
		'@stdlib/process/seteuid',
		'@stdlib/process/setuid'
	]
});

ns.push({
	'alias': 'getgid',
	'path': '@stdlib/process/getgid',
	'value': require( '@stdlib/process/getgid' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/getegid',
		'@stdlib/process/geteuid',
		'@stdlib/process/getuid',
		'@stdlib/process/setegid',
		'@stdlib/process/seteuid',
		'@stdlib/process/setuid'
	]
});

ns.push({
	'alias': 'getGlobal',
	'path': '@stdlib/utils/global',
	'value': require( '@stdlib/utils/global' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'getPrototypeOf',
	'path': '@stdlib/utils/get-prototype-of',
	'value': require( '@stdlib/utils/get-prototype-of' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-prototype-of'
	]
});

ns.push({
	'alias': 'getuid',
	'path': '@stdlib/process/getuid',
	'value': require( '@stdlib/process/getuid' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/getegid',
		'@stdlib/process/geteuid',
		'@stdlib/process/getgid',
		'@stdlib/process/setegid',
		'@stdlib/process/seteuid',
		'@stdlib/process/setuid'
	]
});

ns.push({
	'alias': 'GLAISHER',
	'path': '@stdlib/constants/float64/glaisher-kinkelin',
	'value': require( '@stdlib/constants/float64/glaisher-kinkelin' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'group',
	'path': '@stdlib/utils/group',
	'value': require( '@stdlib/utils/group' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/count-by',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'groupBy',
	'path': '@stdlib/utils/group-by',
	'value': require( '@stdlib/utils/group-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/count-by',
		'@stdlib/utils/group'
	]
});

ns.push({
	'alias': 'groupByAsync',
	'path': '@stdlib/utils/async/group-by',
	'value': require( '@stdlib/utils/async/group-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/bifurcate-by',
		'@stdlib/utils/async/count-by',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'groupIn',
	'path': '@stdlib/utils/group-in',
	'value': require( '@stdlib/utils/group-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-in',
		'@stdlib/utils/count-in',
		'@stdlib/utils/group-by',
		'@stdlib/utils/group-own'
	]
});

ns.push({
	'alias': 'groupOwn',
	'path': '@stdlib/utils/group-own',
	'value': require( '@stdlib/utils/group-own' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-own',
		'@stdlib/utils/count-own',
		'@stdlib/utils/group',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'gswap',
	'path': '@stdlib/blas/gswap',
	'value': require( '@stdlib/blas/gswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/dcopy',
		'@stdlib/blas/dswap',
		'@stdlib/blas/sswap'
	]
});


// EXPORTS //

module.exports = ns;
