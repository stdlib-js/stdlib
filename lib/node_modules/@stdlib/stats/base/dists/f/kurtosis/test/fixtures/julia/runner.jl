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

import Distributions: kurtosis, FDist
import JSON

"""
	gen( d1, d2, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `d1`: numerator degrees of freedom
* `d2`: denominator degrees of freedom
* `name::AbstractString`: output filename

# Examples

``` julia
julia> d1 = rand( 1000 ) .* 10.0;
julia> d2 = rand( 1000 ) .* 10.0;
julia> gen( d1, d2, \"data.json\" );
```
"""
function gen( d1, d2, name )
	z = Array{Float64}( undef, length(d1) );
	for i in eachindex(d1)
		z[ i ] = kurtosis( FDist( d1[i], d2[i] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("d1", d1),
		("d2", d2),
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

# Generate fixtures:
d1 = ( rand( 100 ) .* 10.0 ) .+ 2.0;
d2 = ( rand( 100 ) .* 10.0 ) .+ 8.5;
gen( d1, d2, "data.json" );

