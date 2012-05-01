test:
	PORT=3000 NODE_ENV=testing node index.js; ./node_modules/.bin/mocha --reporter list
	
.PHONY: test
