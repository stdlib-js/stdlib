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
using SpecialFunctions

"""
    gen( x, name )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000.0, stop = 1000.0, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( x, name )
	y = Array{Float64}( undef, length( x ) );
	for i in eachindex(x)
		if isinteger( x[i] )
			y[i] = lfactorial( Int64( x[i] ) );
		else
			y[i] = lgamma( x[i]+1 );
		end
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("expected", y)
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

# Positive small values:
x = range( 1.0, stop = 3.0, length = 1001 );
gen( x, "small_positive.json" );

# Positive medium values:
x = range( 3.0, stop = 20.0, length = 1001 );
gen( x, "medium_positive.json" );

# Large positive values:
x = collect( 500:25:5000 );
gen( x, "large_positive.json" );

# Very large positive values:
x = collect( 5000:50:10000 );
gen( x, "very_large_positive.json" );
