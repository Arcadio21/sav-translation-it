Hooks.once('init', () => {

	if (typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'sav-translation-it',
			lang: 'it',
			dir: 'compendium/it',
		});
	}
});


