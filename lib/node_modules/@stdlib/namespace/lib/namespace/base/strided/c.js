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
	'alias': 'base.strided.ccopy',
	'path': '@stdlib/blas/base/ccopy',
	'value': require( '@stdlib/blas/base/ccopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/cswap',
		'@stdlib/blas/base/zcopy',
		'@stdlib/blas/ccopy'
	]
});

ns.push({
	'alias': 'base.strided.cmap',
	'path': '@stdlib/strided/base/cmap',
	'value': require( '@stdlib/strided/base/cmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/zmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.cswap',
	'path': '@stdlib/blas/base/cswap',
	'value': require( '@stdlib/blas/base/cswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ccopy',
		'@stdlib/blas/base/zswap',
		'@stdlib/blas/cswap'
	]
});

ns.push({
	'alias': 'base.strided.cumax',
	'path': '@stdlib/stats/base/cumax',
	'value': require( '@stdlib/stats/base/cumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/curange',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/base/nancumax',
		'@stdlib/stats/base/scumax'
	]
});

ns.push({
	'alias': 'base.strided.cumaxabs',
	'path': '@stdlib/stats/base/cumaxabs',
	'value': require( '@stdlib/stats/base/cumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/base/curangeabs',
		'@stdlib/stats/strided/dcumaxabs',
		'@stdlib/stats/base/nancumaxabs',
		'@stdlib/stats/base/scumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.cumin',
	'path': '@stdlib/stats/base/cumin',
	'value': require( '@stdlib/stats/base/cumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/curange',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/nancumin',
		'@stdlib/stats/base/scumin'
	]
});

ns.push({
	'alias': 'base.strided.cuminabs',
	'path': '@stdlib/stats/base/cuminabs',
	'value': require( '@stdlib/stats/base/cuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/curangeabs',
		'@stdlib/stats/strided/dcuminabs',
		'@stdlib/stats/base/nancuminabs',
		'@stdlib/stats/base/scuminabs'
	]
});


// EXPORTS //

module.exports = ns;
