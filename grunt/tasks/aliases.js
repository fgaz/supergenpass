/* Grunt task aliases */

module.exports = function(grunt) {

  grunt.registerTask(
    'default',
    [
      'jshint',
      'browserify',
      'uglify',
      'cssmin',
      'staticinline',
      'bookmarklet',
      'template',
      'clean',
      'qunit',
      'manifest',
      'checksum'
    ]
  );

};
