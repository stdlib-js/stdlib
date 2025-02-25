/* eslint-disable max-lines */

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
	'alias': 'base.strided.nanmax',
	'path': '@stdlib/stats/base/nanmax',
	'value': require( '@stdlib/stats/base/nanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxabs',
	'path': '@stdlib/stats/base/nanmaxabs',
	'value': require( '@stdlib/stats/base/nanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxBy',
	'path': '@stdlib/stats/base/nanmax-by',
	'value': require( '@stdlib/stats/base/nanmax-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmean',
	'path': '@stdlib/stats/base/nanmean',
	'value': require( '@stdlib/stats/base/nanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanors',
	'path': '@stdlib/stats/base/nanmeanors',
	'value': require( '@stdlib/stats/base/nanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanpn',
	'path': '@stdlib/stats/base/nanmeanpn',
	'value': require( '@stdlib/stats/base/nanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanwd',
	'path': '@stdlib/stats/base/nanmeanwd',
	'value': require( '@stdlib/stats/base/nanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.nanmin',
	'path': '@stdlib/stats/base/nanmin',
	'value': require( '@stdlib/stats/base/nanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanminabs',
	'path': '@stdlib/stats/base/nanminabs',
	'value': require( '@stdlib/stats/base/nanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.nanminBy',
	'path': '@stdlib/stats/base/nanmin-by',
	'value': require( '@stdlib/stats/base/nanmin-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmax',
	'path': '@stdlib/stats/base/nanmskmax',
	'value': require( '@stdlib/stats/base/nanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmin',
	'path': '@stdlib/stats/base/nanmskmin',
	'value': require( '@stdlib/stats/base/nanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskrange',
	'path': '@stdlib/stats/base/nanmskrange',
	'value': require( '@stdlib/stats/base/nanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskrange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrange',
	'path': '@stdlib/stats/base/nanrange',
	'value': require( '@stdlib/stats/base/nanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrangeBy',
	'path': '@stdlib/stats/base/nanrange-by',
	'value': require( '@stdlib/stats/base/nanrange-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/range-by',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanstdev',
	'path': '@stdlib/stats/base/nanstdev',
	'value': require( '@stdlib/stats/base/nanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/mskstdev',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevch',
	'path': '@stdlib/stats/base/nanstdevch',
	'value': require( '@stdlib/stats/base/nanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevpn',
	'path': '@stdlib/stats/base/nanstdevpn',
	'value': require( '@stdlib/stats/base/nanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevtk',
	'path': '@stdlib/stats/base/nanstdevtk',
	'value': require( '@stdlib/stats/base/nanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevwd',
	'path': '@stdlib/stats/base/nanstdevwd',
	'value': require( '@stdlib/stats/base/nanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevyc',
	'path': '@stdlib/stats/base/nanstdevyc',
	'value': require( '@stdlib/stats/base/nanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.nanvariance',
	'path': '@stdlib/stats/base/nanvariance',
	'value': require( '@stdlib/stats/base/nanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancech',
	'path': '@stdlib/stats/base/nanvariancech',
	'value': require( '@stdlib/stats/base/nanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancepn',
	'path': '@stdlib/stats/base/nanvariancepn',
	'value': require( '@stdlib/stats/base/nanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancetk',
	'path': '@stdlib/stats/base/nanvariancetk',
	'value': require( '@stdlib/stats/base/nanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancewd',
	'path': '@stdlib/stats/base/nanvariancewd',
	'value': require( '@stdlib/stats/base/nanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.nanvarianceyc',
	'path': '@stdlib/stats/base/nanvarianceyc',
	'value': require( '@stdlib/stats/base/nanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.nullary',
	'path': '@stdlib/strided/base/nullary',
	'value': require( '@stdlib/strided/base/nullary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});


// EXPORTS //

module.exports = ns;
