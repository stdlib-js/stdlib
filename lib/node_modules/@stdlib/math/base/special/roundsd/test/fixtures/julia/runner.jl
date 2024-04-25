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

* `x`: domain
* `n`: number of significant figures
* `base`: base
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 2001 );
julia> gen( x, 4, 16, \"data.json\" );
```
"""
function gen( x, n, base, name )
	y = Array{Float64}( undef, length(x) )
	for i in eachindex(x)
		y[ i ] = round( x[ i ], sigdigits = n, base = base );
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

# Test values:
x = rand( 2001 ) .* 100.0;
gen( x, 4, 2, "base_2_sigfigs_4.json" );

x = rand( 2001 ) .* 100.0;
gen( x, 4, 16, "base_16_sigfigs_4.json" );
