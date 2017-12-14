
# VARIABLES #

# Define the path of the [david][1] executable:
#
# To install david:
#     $ npm install david
#
# [1]: https://www.npmjs.com/package/david

DAVID ?= $(BIN_DIR)/david

# Define the path to a `package.json` for manually managed node module dependencies:
DAVID_PACKAGE_JSON ?= $(CONFIG_DIR)/david/.pkg.json

# Define the command-line options to use when invoking the `david` executable:
DAVID_FLAGS ?= \
	--ignore update-notifier \
	--ignore chai \
	--ignore debug


# TARGETS #

# Check JavaScript dependencies.
#
# This target checks JavaScript dependencies for updates and security vulnerabilities.

check-javascript-deps: check-javascript-deps-main check-javascript-deps-manual

.PHONY: check-javascript-deps


# Check JavaScript dependencies.
#
# This target checks JavaScript node module dependencies which are managed via `npm` for updates and security vulnerabilities.

check-javascript-deps-main: $(NODE_MODULES)
	$(QUIET) $(DAVID) $(DAVID_FLAGS) --package $(ROOT_PACKAGE_JSON)

.PHONY: check-javascript-deps-main


# Check JavaScript dependencies.
#
# This target checks JavaScript node module dependencies which are manually managed for updates and security vulnerabilities.

check-javascript-deps-manual: $(NODE_MODULES)
	$(QUIET) $(DAVID) $(DAVID_FLAGS) --package $(DAVID_PACKAGE_JSON)

.PHONY: check-javascript-deps-manual
