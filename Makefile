brain-game:

start:
	node bin/brain-games.js

publish:
	npm publish --dry-ru

make lint:
	npx eslint .

brain-even:
	node bin/brain-even.js