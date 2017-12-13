
# VARIABLES #

# Define the path of the [david][1] executable:
#
# To install david:
#     $ npm install david
#
# [1]: https://www.npmjs.com/package/david

DAVID ?= $(BIN_DIR)/david

# Define the command-line options to use when invoking the david executable:
DAVID_FLAGS ?= \
	--package $(ROOT_PACKAGE_JSON) \
	--ignore update-notifier \
	--ignore chai \
	--ignore debug


# TARGETS #

# Check JavaScript dependencies.
#
# This target checks JavaScript dependencies for updates and security vulnerabilities.

check-javascript-deps: $(NODE_MODULES)
	$(QUIET) $(DAVID) $(DAVID_FLAGS)

.PHONY: check-javascript-deps
