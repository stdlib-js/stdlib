#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON

"""
    gen( x, y, name )

Generate fixture data and write to file.

# Arguments

* `x`: denominator domain
* `y`: numerator domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000.0, stop = 1000.0, length = 2001 );
julia> y = range( 0.0, stop = 1000.0, length = 1001 );
julia> gen( x, y, \"data.json\" );
```
"""
function gen( x, y, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = atan.( y[i], x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("y", y),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Random (x positive, y positive):
x = rand( 5001 ) .* 500.0;
y = rand( 5001 ) .* 500.0;
gen( x, y, "positive_positive.json" );

# Random (x negative, y positive):
x = -rand( 1001 ) .* 500.0;
y = rand( 1001 ) .* 500.0;
gen( x, y, "negative_positive.json" );

# Random (x negative, y negative):
x = -rand( 1001 ) .* 500.0;
y = -rand( 1001 ) .* 500.0;
gen( x, y, "negative_negative.json" );
