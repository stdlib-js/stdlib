'use strict';

var Plot = require( '@stdlib/plot/plot' );

// To create a `plot` instance:
var plot = new Plot();

// To set properties:
plot.x = [[1,2,3]];
plot.y = [[1,0,1]];
plot.xLabel = 'index';
plot.yLabel = 'value';
plot.title = 'Pretty plot';
plot.symbols = 'closed-circle';

// If provided an invalid property value, an `error` is thrown.
plot.x = null;
// throws <Error>
