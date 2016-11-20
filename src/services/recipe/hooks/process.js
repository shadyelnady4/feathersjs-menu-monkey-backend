'use strict';

// src/services/recipe/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    hook.data = Object.assign({}, hook.data, {
      createdAt: new Date().getTime(),
    });
  };
};