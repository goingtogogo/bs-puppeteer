'use strict';

var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -980624836,
    "domcontentloaded"
  ],
  /* tuple */[
    -944268762,
    "load"
  ],
  /* tuple */[
    420745006,
    "networkidle0"
  ],
  /* tuple */[
    420745008,
    "networkidle2"
  ]
];

function loadEventToJs(param) {
  return Js_mapperRt.binarySearch(4, param, jsMapperConstantArray);
}

function loadEventFromJs(param) {
  return Js_mapperRt.revSearch(4, jsMapperConstantArray, param);
}

exports.loadEventToJs = loadEventToJs;
exports.loadEventFromJs = loadEventFromJs;
/* No side effect */
