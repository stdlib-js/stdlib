'use strict';

var SCALES = {
	'max-abs': require( './maxabs.js' ),
	'max': require( './max.js' ),
	'min-abs': require( './minabs.js' ),
	'min': require( './min.js' ),
	'mean-abs': require( './meanabs.js' ),
	'mean': require( './mean.js' ),
	'x': require( './x.js' ),
	'y': require( './y.js' )
};


// EXPORTS //

module.exports = SCALES;
