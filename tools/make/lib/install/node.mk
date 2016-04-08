
# VARIABLES #

# Define the command for `npm`:
NPM ?= npm


# TARGETS #

# Install node module dependencies.
#
# This target installs package dependencies by executing [`npm install`][1]. Packages will be installed in a local `node_modules` directory relative to the project's `package.json` file.
#
# [1]: https://docs.npmjs.com/cli/install

install-node: package.json
	$(NPM) install


# Remove node module dependencies.
#
# This target cleans the `node_modules` directory by removing it entirely.

clean-node:
	-rm -rf $(NODE_MODULES)


.PHONY: install-node clean-node
