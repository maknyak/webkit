'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('styled-components'),
  t = require('prop-types'),
  r = require('./style.js'),
  n = require('react/jsx-runtime');
function s(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var u = s(e),
  d = s(t),
  i = u.default('div').withConfig({ componentId: 'sc-1k26kyv-0' })(
    ['', ''],
    function (e) {
      return e._css;
    }
  ),
  l = function (e) {
    var t = e.children,
      s = e.style;
    return n.jsx(i, { _css: [r.card, s], children: t });
  };
(l.propTypes = {
  children: d.default.node.isRequired,
  style: d.default.oneOfType([d.default.object, d.default.string]),
}),
  (l.defaultProps = { style: null }),
  (exports.Card = l);
