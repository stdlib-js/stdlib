#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# VARIABLES #

# Define the path of the linter executable:
PACKAGE_JSON_LINTER ?= $(TOOLS_PKGS_DIR)/lint/pkg-json/bin/cli

# Define the command-line options to be used when invoking the executable:
PACKAGE_JSON_LINTER_FLAGS ?=


# RULES #

# Lint package.json.
#
# This target lints package.json files.

lint-pkg-json:
	$(QUIET) $(MAKE_EXECUTABLE) $(PACKAGE_JSON_LINTER)
	$(QUIET) $(PACKAGE_JSON_LINTER) $(PACKAGE_JSON_LINTER_FLAGS) $(ROOT_DIR)

.PHONY: lint-pkg-json
