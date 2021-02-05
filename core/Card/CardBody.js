'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('styled-components'),
  r = require('react'),
  t = require('prop-types'),
  u = require('./style.js'),
  n = require('react/jsx-runtime');
function s(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var o = s(e),
  d = s(t),
  i = o.default('div').withConfig({ componentId: 'sc-1g901x4-0' })(
    ['', ''],
    function (e) {
      return e._css;
    }
  ),
  l = r.memo(function (e) {
    var r = e.children,
      t = e.style;
    return n.jsx(i, { _css: [u.cardBody, t], children: r });
  });
(l.propTypes = {
  children: d.default.node.isRequired,
  style: d.default.oneOfType([d.default.object, d.default.string]),
}),
  (l.defaultProps = { style: null }),
  (exports.CardBody = l);
