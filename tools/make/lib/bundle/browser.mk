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

# Define the command for listing distributable bundle package directories:
DIST_PKG_DIRS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/bundle_dirs.js

# Define the command for listing build scripts for generating distributable bundles:
DIST_BUILD_SCRIPTS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/bundle_scripts.js

# Define the command for updating distributable package versions:
DIST_UPDATE_VERSIONS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/update_versions.js

# Define the command for verifying distributable package versions:
DIST_VERIFY_VERSIONS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/verify_versions.js


# RULES #

#/
# Generates distributable bundles.
#
# @example
# make dist-bundles
#/
dist-bundles: $(NODE_MODULES) clean-dist
	$(QUIET) echo 'Generating distributable bundles...'
	$(QUIET) $(DIST_BUILD_SCRIPTS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running build script: $$file"; \
		NODE_PATH="$(NODE_PATH)" \
		$(NODE) $$file || exit 1; \
	done
	$(QUIET) for file in $(DIST_DIR)/*/build/*.min.js; do \
		echo "Compressing file: $$file"; \
		$(GZIP) "$$file" -9 -c > "$$file".gz; \
	done

.PHONY: dist-bundles

#/
# Publishes distributable bundles to the npm package registry.
#
# @example
# make publish-dist-bundles
#/
publish-dist-bundles: $(NODE_MODULES) dist-bundles
	$(QUIET) $(DIST_UPDATE_VERSIONS)
	$(QUIET) $(DIST_VERIFY_VERSIONS)
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "Publishing package: $$pkg"; \
		cd $$pkg; \
		$(NPM) publish --access public || exit 1; \
	done

.PHONY: publish-dist-bundles

#/
# Removes distributable bundle build artifacts.
#
# @example
# make clean-dist
#/
clean-dist:
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "Removing build artifacts for package: $$pkg"; \
		rm -rf $$pkg/build || exit 1; \
	done

.PHONY: clean-dist
