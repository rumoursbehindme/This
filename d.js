// Compiled using marko@5.21.9 - DO NOT EDIT
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = require("marko/src/runtime/html/index.js");

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");

var _styleValue = _interopRequireDefault(require("marko/src/runtime/helpers/style-value.js"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "temp.marko",
      _marko_template = (0, _index.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  const name = "Frank";
  const aname = "Rj";
  out.w("<div class=container>");
  {
    out.w("<h1>");
    out.w("Hello ");
    out.w((0, _escapeXml.x)(input.name));
    out.w("!");
    out.w("</h1>");
    out.w("<h3>");
    out.w("Hello ");
    out.w((0, _escapeXml.x)(input.aname));
    out.w("</h3>");
    const colors = ["red", "green", "blue"];

    if (colors.length) {
      out.w("<ul>");
      {
        let _keyValue = 0;

        for (const color of colors) {
          const _keyScope = `[${_keyValue++}]`;
          out.w(`<li${(0, _attr.default)("style", (0, _styleValue.default)({
            color: color
          }))}>`);
          out.w((0, _escapeXml.x)(color));
          out.w("</li>");
        }
      }
      out.w("</ul>");
    } else {
      out.w("<div>");
      out.w("No colors!");
      out.w("</div>");
    }
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);