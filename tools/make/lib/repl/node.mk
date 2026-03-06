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

# Define the path of the executable:
STDLIB ?= $(LOCAL_BIN_DIR)/cli

# Define the command to launch the REPL:
REPL ?= repl

# Define any command-line options to use when invoking the executable:
REPL_FLAGS ?=

# Define the path of the directory in which to run the REPL:
REPL_DIR ?= $(ROOT_DIR)


# TARGETS #

# Start a Node.js REPL environment.
#
# This target starts a Node.js REPL environment.

repl-node: $(NODE_MODULES) $(STDLIB)
	$(QUIET) cd $(REPL_DIR); \
	NODE_ENV="$(NODE_ENV_REPL)" \
	NODE_PATH="$(NODE_PATH_REPL)" \
	$(NODE) $(NODE_FLAGS_REPL) $(STDLIB) $(REPL) -- $(REPL_FLAGS)

.PHONY: repl-node
