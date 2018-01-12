#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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
#/

# TARGETS #

# Compute npm archive size.
#
# This target computes size (in bytes) of the gzipped archive which would be published to npm.

stats-npm-tarball-size:
	$(QUIET) if [[ ! -e $(NPM_TARBALL) ]]; then \
		$(MAKE) -f $(this_file) npm-tarball; \
	fi
	$(QUIET) wc -c $(NPM_TARBALL) | awk '{print $$1 OFS "B"}'

.PHONY: stats-npm-tarball-size
