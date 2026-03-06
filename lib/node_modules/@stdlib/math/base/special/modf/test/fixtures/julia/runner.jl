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
    gen( x, name )

Generate fixture data and write to file.

# Arguments

* `x`: input values
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 1000 )*1000.0 - 500.0;
julia> gen( x, \"data.json\" );
```
"""
function gen( x, name )
	len = length( x );

	frac = Array{Float64}( undef, len );
	integral = Array{Float64}( undef, len );

	for i in eachindex(x)
		out = modf( x[i] );
		frac[ i ] = out[ 1 ];
		integral[ i ] = out[ 2 ];
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("frac", frac),
		("integral", integral)
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

# Generate normal values:
x = range( -1000, stop = 1000, length = 1003 );
gen( x, "medium.json" );

# Generate small values:
x = range( -1.0, stop = 1.0, length = 1003 );
gen( x, "small.json" );

# Generate subnormal values:
x = range( 1.0e-314, stop = 1.0e-315, length = 1003 );
gen( x, "subnormal.json" );

# Generate large values:
x = range( 2.0^21, stop = 2.0^51, length = 1003 );
gen( x, "large.json" );

# Generate huge values:
x = range( 1.0e299, stop = 1.0e301, length = 1003 );
gen( x, "huge.json" );
