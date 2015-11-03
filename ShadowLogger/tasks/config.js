var config = {
	sourceFolder:'./src',
	testFolder:'./test',
	distFilder:'./dist',
	exampleFolder:'./example',
	distFileName:'shadowLogger.min.js',
	globs:{
		js:'**/*.js',
		test:'**/*.spec.js',
	 	css:'**/*.css',
		modules:'**/*.module.js'
	}
};
config.index = config.exampleFolder + '/' + 'index.html';
config.allModules = [config.sourceFolder + '/' + config.globs.modules, config.exampleFolder + '/' + config.globs.modules];
config.allJs =  [config.sourceFolder + '/' + config.globs.js, config.exampleFolder + '/' + config.globs.js,'!' + config.globs.modules];
module.exports = config;