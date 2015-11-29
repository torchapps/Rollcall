deploy:
	boot prod
	git subtree push --prefix target origin gh-pages
