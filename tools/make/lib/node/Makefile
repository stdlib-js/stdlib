
# VARIABLES #

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json


# TARGETS #

# Install node module dependencies.
#
# This target installs package dependencies by executing [`npm install`][1]. Packages will be installed in a local `node_modules` directory relative to the project's `package.json` file.
#
# [1]: https://docs.npmjs.com/cli/install

install-node: $(ROOT_PACKAGE_JSON)
	$(QUIET) $(NPM) install

.PHONY: install-node


# Remove node module dependencies.
#
# This target cleans the `node_modules` directory by removing it entirely.

clean-node:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

.PHONY: clean-node
