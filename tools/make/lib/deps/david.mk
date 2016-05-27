
# VARIABLES #

# Define the path of the [david][1] executable:
#
# To install david:
#     $ npm install david
#
# [1]: https://www.npmjs.com/package/david

DAVID_BIN ?= $(BIN_DIR)/david

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json

# Define the command-line options to use when invoking the david executable:
DAVID_FLAGS ?= --package $(ROOT_PACKAGE_JSON)


# TARGETS #

# Check JavaScript dependencies.
#
# This target checks JavaScript dependencies for updates and security vulnerabilities.

check-javascript-deps: $(NODE_MODULES)
	$(DAVID_BIN) $(DAVID_FLAGS)

.PHONY: check-javascript-deps
