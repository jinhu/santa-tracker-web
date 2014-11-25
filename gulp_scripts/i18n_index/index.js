/* jshint node: true */

var dir = require('node-dir');
var through = require('through2');
var path = require('path');

module.exports = function replaceIndex(opts) {
  var stream = through.obj(function(file, enc, cb) {
    if (file.isNull()) return stream.push(file);
    if (file.isStream()) throw new Error('No support for streams');

    var src = file.contents.toString();

    for (var i = 0; i < opts.locales.length; i++) {
      var locale = opts.locales[i];
      // Replace imports.
      var replaced = src.replace(/_en\.html/mg, '_' + locale + '.html');

      var i18nfile = file.clone();
      // TODO: put in intl directory
      i18nfile.path = file.path.replace(/\.html$/, '_' + locale + '.html');
      i18nfile.contents = new Buffer(replaced);
      stream.push(i18nfile);
    }
    cb();
  });
  return stream;
}
