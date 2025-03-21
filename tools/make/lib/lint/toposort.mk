#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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

# RULES #

#/
# Lints the project by ensuring that the project can be topologically sorted.
#
# @example
# make lint-toposort
#/
lint-toposort: $(NODE_MODULES)
	$(QUIET) if $(MAKE) -f $(this_file) list-pkgs-toposort >/dev/null; then \
		echo 'Success'; \
	else \
		echo ''; \
		echo 'Failure. Unable to perform a topological sort. This is likely due to a'; \
		echo 'dependency cycle. Run `make list-pkgs-toposort` to investigate further.'; \
		echo ''; \
		exit 1; \
	fi

.PHONY: lint-toposort
