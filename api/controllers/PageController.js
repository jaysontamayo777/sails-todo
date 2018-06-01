/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  homepage: function(req, res, next) {
    return res.render('pages/homepage', {layout: 'layouts/layout'});
  }
};
