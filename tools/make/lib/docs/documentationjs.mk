
# VARIABLES #

# Define the path of the documentation.js executable:
DOCUMENTATIONJS ?= $(BIN)/documentation

# Define the path to JSDoc type definitions:
DOCUMENTATIONJS_TYPEDEF ?= $(TOOLS_DIR)/docs/jsdoc/typedefs/*.js

# Define the output directory for documentation.js:
DOCUMENTATIONJS_OUT ?= $(DOCS_DIR)/documentationjs

# Define the output directory for documentation.js JSON:
DOCUMENTATIONJS_JSON_OUT ?= $(DOCUMENTATIONJS_OUT)/json

# Define the output filepath for documentation.js JSON:
DOCUMENTATIONJS_JSON_PATH ?= $(DOCUMENTATIONJS_JSON_OUT)/documentationjs.json

# Define the output directory for documentation.js HTML documentation:
DOCUMENTATIONJS_HTML_OUT ?= $(DOCUMENTATIONJS_OUT)/static

# Define the output filepath for HTML documentation:
DOCUMENTATIONJS_HTML_PATH ?= $(DOCUMENTATIONJS_HTML_OUT)/index.html

# Define command-line options to be used when invoking the documentation.js executable to generate HTML documentation:
DOCUMENTATIONJS_HTML_FLAGS ?= --format html \
	--output $(DOCUMENTATIONJS_HTML_OUT)

# Define command-line options to be used when invoking the documentation.js executable to generate JSON:
DOCUMENTATIONJS_JSON_FLAGS ?= --format json


# TARGETS #

# Generate HTML documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments using [documentation.js][2].
#
# To install documentation.js:
#     $ npm install documentation
#
# [1]: http://usejsdoc.org/
# [2]: https://github.com/documentationjs/documentation

documentationjs-html: node_modules
	-rm -rf $(DOCUMENTATIONJS_HTML_OUT)
	mkdir -p $(DOCUMENTATIONJS_HTML_OUT)
	$(DOCUMENTATIONJS) $(DOCUMENTATIONJS_HTML_FLAGS) $(DOCUMENTATIONJS_TYPEDEF) $(SOURCES)


# Generate JSDoc JSON.
#
# This target generates JSDoc JSON from [JSDoc][1]-style comments.
#
# To install documentation.js:
#     $ npm install documentation
#
# [1]: http://usejsdoc.org/
# [2]: https://github.com/documentationjs/documentation

documentationjs-json: node_modules
	-rm -f $(DOCUMENTATIONJS_JSON_PATH)
	mkdir -p $(DOCUMENTATIONJS_JSON_OUT)
	$(DOCUMENTATIONJS) $(DOCUMENTATIONJS_JSON_FLAGS) $(DOCUMENTATIONJS_TYPEDEF) $(SOURCES) > $(DOCUMENTATIONJS_JSON_PATH)


# View HTML documentation.
#
# This target opens documentation.js HTML documentation in a local web browser.

view-documentationjs-html:
	$(OPEN) $(DOCUMENTATIONJS_HTML_PATH)


# Remove a documentation.js output directory.
#
# This target cleans up a documentation.js output directory by removing it entirely.

# FIXME: -rm -rf
clean-documentationjs:
	-rm -rf $(DOCUMENTATIONJS_OUT)


# Rebuild HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments using [documentation.js][2].
#
# To install documentation.js:
#     $ npm install documentation
#
# [1]: http://usejsdoc.org/
# [2]: https://github.com/documentationjs/documentation

rebuild-documentationjs-html:
	@$(MAKE) -f $(THIS_FILE) clean-documentationjs
	@$(MAKE) -f $(THIS_FILE) documentationjs-html


.PHONY: documentationjs-html documentationjs-json view-documentationjs-html rebuild-documentationjs-html clean-documentationjs

