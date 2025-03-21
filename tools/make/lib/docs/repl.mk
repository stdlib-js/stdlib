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

# TARGETS #

# Generate REPL docs.
#
# This target generates REPL documentation.

repl-docs: repl-help repl-info repl-examples repl-signatures repl-typed-signatures repl-aliases repl-alias2pkg repl-pkg2alias repl-alias2related repl-alias2standalone repl-pkg2related repl-pkg2standalone repl-standalone2pkg $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/scripts/build.js"

.PHONY: repl-docs


# Generate REPL help.
#
# This target generates REPL help documentation.

repl-help: $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/help/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/help/scripts/build.js"

.PHONY: repl-help


# Generate abbreviated REPL help.
#
# This target generates abbreviated REPL help documentation.

repl-info: $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/info/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/info/scripts/build.js"

.PHONY: repl-info


# Aggregate REPL examples.
#
# This target aggregates REPL examples.

repl-examples: $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/code-blocks/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/code-blocks/scripts/build.js"

.PHONY: repl-examples


# Generate REPL alias signatures.
#
# This target generates REPL alias signatures.

repl-signatures: $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/signature/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/signature/scripts/build.js"

.PHONY: repl-signatures


# Generate REPL alias typed signatures.
#
# This target generates REPL alias typed signatures.

repl-typed-signatures: $(NODE_MODULES) $(SRC_DIR)/@stdlib/repl/typed-signature/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/repl/typed-signature/scripts/build.js"

.PHONY: repl-typed-signatures


# Aggregate REPL aliases.
#
# This target aggregates REPL aliases.

repl-aliases: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/aliases/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/aliases/scripts/build.js"

.PHONY: repl-aliases


# Build the mapping between REPL aliases and package names.
#
# This target rebuilds the REPL database.

repl-alias2pkg: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/alias2pkg/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/alias2pkg/scripts/build.js"

.PHONY: repl-alias2pkg


# Build the mapping between REPL package names and aliases.
#
# This target rebuilds the REPL database.

repl-pkg2alias: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/pkg2alias/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/pkg2alias/scripts/build.js"

.PHONY: repl-pkg2alias


# Build the mapping between REPL aliases and related aliases.
#
# This target rebuilds the REPL database.

repl-alias2related: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/alias2related/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/alias2related/scripts/build.js"

.PHONY: repl-alias2related


# Build the mapping between REPL package names and related packages.
#
# This target rebuilds the REPL database.

repl-pkg2related: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/pkg2related/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/pkg2related/scripts/build.js"

.PHONY: repl-pkg2related


# Build the mapping between REPL aliases and standalone package names.
#
# This target rebuilds the REPL database.

repl-alias2standalone: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/alias2standalone/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/alias2standalone/scripts/build.js"

.PHONY: repl-alias2standalone


# Build the mapping between REPL package names and standalone package names.
#
# This target rebuilds the REPL database.

repl-pkg2standalone: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/pkg2standalone/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/pkg2standalone/scripts/build.js"

.PHONY: repl-pkg2standalone


# Build the mapping between REPL standalone package names and internal package names.
#
# This target rebuilds the REPL database.

repl-standalone2pkg: $(NODE_MODULES) $(SRC_DIR)/@stdlib/namespace/standalone2pkg/scripts/build.js
	$(QUIET) $(NODE) "$(SRC_DIR)/@stdlib/namespace/standalone2pkg/scripts/build.js"

.PHONY: repl-standalone2pkg
