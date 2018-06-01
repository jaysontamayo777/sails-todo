/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a secure and effective way to get your app up
 * and running. Views are normally served from actions.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For details on available options for configuring server-side views, check out:
 * https://sailsjs.com/config/views
 *
 * For more background information on views and partials in Sails, check out:
 * https://sailsjs.com/docs/concepts/views
 */

module.exports.views = {

  /***************************************************************************
  *                                                                          *
  * Extension to use for your views. When calling `res.view()` in an action, *
  * you can leave this extension off. For example, calling                   *
  * `res.view('homepage')` will (using default settings) look for a          *
  * `views/homepage.ejs` file.                                               *
  *                                                                          *
  ***************************************************************************/

  extension: 'handlebars',
  layout: 'layouts/layout',
  getRenderFn: function(){
    var fs = require('fs');
    var cons = require('consolidate');
    var handlebars = require('handlebars');

    var partialsDir = __dirname + '/../views/partials';
    var filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function (filename) {
      var matches = /^([^.]+).handlebars$/.exec(filename);
      if (!matches) { return; }
      var name = matches[1];
      var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
      handlebars.registerPartial(name, template);
    });

    cons.requires.handlebars = handlebars;
    return cons.handlebars;
  }


  /***************************************************************************
  *                                                                          *
  * The path (relative to the views directory, and without extension) to     *
  * the default layout file to use, or `false` to disable layouts entirely.  *
  *                                                                          *
  * Note that layouts only work with the built-in EJS view engine!           *
  *                                                                          *
  ***************************************************************************/

};
