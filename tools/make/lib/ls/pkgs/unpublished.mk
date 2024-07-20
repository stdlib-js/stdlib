#/
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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
# Prints a list of all unpublished standalone packages.
#
# @param {string} [LIST_PKGS_STANDALONES_DIR] - absolute path of the directory from which to search for packages (default: source directory)
#
# @example
# make list-pkgs-unpublished
#
# @example
# make list-pkgs-unpublished LIST_PKGS_STANDALONES_DIR="$PWD/lib/node_modules/\@stdlib/utils"
#/
list-pkgs-unpublished:
	$(QUIET) pkgs=$$(make --no-print-directory list-pkgs-standalones | tr '\n' ' '); \
	unpublished_pkgs=""; \
	for pkg in $$pkgs; do \
		if [ "$${pkg#*_tools}" != "$$pkg" ]; then \
			continue; \
		fi; \
		if ! npm show $$pkg version >/dev/null 2>&1; then \
			unpublished_pkgs="$$unpublished_pkgs $$pkg"; \
		fi; \
	done; \
	echo "$$unpublished_pkgs"

.PHONY: list-pkgs-unpublished