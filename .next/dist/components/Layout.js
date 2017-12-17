'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\office-projects\\CryptoKitties\\components\\Layout.js';


var Layout = function Layout() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      children = _ref.children,
      isHomePage = _ref.isHomePage;

  return _react2.default.createElement(_react.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('meta', { charSet: 'UTF-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'CryptoKitties | Collect and breed digital cats!'), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, maximum-scale=1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { href: '../static/sass/main.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), isHomePage && _react2.default.createElement('div', { className: 'Container Container--half', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'Header', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { className: 'Header-home active', 'aria-current': 'true', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('div', { className: 'Header-logoWrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('div', { className: 'Header-logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement('h1', { className: 'Header-wordmark', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'CryptoKitties')), _react2.default.createElement('nav', { className: 'Header-navigation', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('a', {
    className: 'Header-navigation-item',
    'aria-current': 'false',
    href: '/sign-in',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Sign in'), _react2.default.createElement(_link2.default, { href: './marketplace', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('a', { className: 'Header-navigation-item', 'aria-current': 'false', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Marketplace'))))), !isHomePage && _react2.default.createElement('div', { className: 'Container Container--full', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('div', { className: 'Header', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('a', { className: 'Header-home', 'aria-current': 'false', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', { className: 'Header-logoWrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('div', { className: 'Header-logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement('h1', { className: 'Header-wordmark', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'CryptoKitties'))), _react2.default.createElement('div', { className: 'Header-networkStatus', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('nav', { className: 'Header-navigation', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement('a', {
    className: 'Header-navigation-item',
    'aria-current': 'false',
    href: '/sign-in',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, 'Sign in'), _react2.default.createElement('a', {
    className: 'Header-navigation-item Header-navigation-item--active',
    'aria-current': 'true',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'Marketplace')))), _react2.default.createElement('main', { className: 'Main', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, children), _react2.default.createElement('footer', { className: 'Footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('div', { className: 'Container Container--lg', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('div', { className: 'Footer-primary', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('div', { className: 'Footer-nav Footer-nav--primary', __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement('ul', { className: 'Footer-nav-items', __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--mykitties',
    'aria-current': 'false',
    href: '/my-kitties',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, 'My Kitties')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--activity',
    'aria-current': 'false',
    href: '/activity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'Activity')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--marketplace',
    'aria-current': 'false',
    href: '/marketplace',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, 'Marketplace')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--faq',
    'aria-current': 'false',
    href: '/faq',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, 'FAQs')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--help',
    'aria-current': 'false',
    href: '/help',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, 'Help & Support')))), _react2.default.createElement('div', { className: 'Footer-nav Footer-nav--secondary', __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, _react2.default.createElement('ul', { className: 'Footer-nav-items', __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--about',
    'aria-current': 'false',
    href: '/about',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, 'About')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--press',
    'aria-current': 'false',
    href: '/press',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, 'Press')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--technical-details',
    'aria-current': 'false',
    href: '/Technical-details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, 'Tech details')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--white-pa-purr',
    href: 'https://www.dropbox.com/s/a5h3zso545wuqkm/CryptoKitties_WhitePapurr_V2.pdf?dl=0',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, 'White Pa-purr')))), _react2.default.createElement('div', { className: 'Footer-nav Footer-nav--social', __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, _react2.default.createElement('ul', { className: 'Footer-nav-items', __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--facebook',
    href: 'https://www.facebook.com/CryptoKitties/',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    }
  }, 'Facebook')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--reddit',
    href: 'https://www.reddit.com/r/CryptoKitties/',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, 'Reddit')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--twitter',
    href: 'https://twitter.com/cryptokitties',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    }
  }, 'Twitter')), _react2.default.createElement('li', { className: 'Footer-nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-nav-link Footer-nav-link--discord',
    href: 'https://discord.gg/3GvT66U',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  }, 'Discord')))), _react2.default.createElement('div', { className: 'Footer-primary-az', __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, 'Pick of the litter at', _react2.default.createElement('a', {
    href: 'https://www.axiomzen.co/',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, 'Axiom Zen'), _react2.default.createElement('img', { src: '../static/icons/paw.svg', alt: 'Purrrrr', __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  }))), _react2.default.createElement('div', { className: 'Footer-secondary', __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, _react2.default.createElement('a', {
    className: 'Footer-secondary-link',
    'aria-current': 'false',
    href: '/terms-of-use',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    }
  }, 'Terms of use'), _react2.default.createElement('a', {
    className: 'Footer-secondary-link',
    'aria-current': 'false',
    href: '/privacy-policy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    }
  }, 'Privacy policy')))), _react2.default.createElement('a', {
    className: 'FloatingSupportLink',
    href: 'https://discord.gg/3GvT66U',
    target: '_blank',
    rel: 'noopener noreferrer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    }
  }, _react2.default.createElement('img', {
    className: 'FloatingSupportLink-icon FloatingSupportLink-icon--message',
    src: '../static/icons/icon-message.svg',
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    }
  }), _react2.default.createElement('img', {
    className: 'FloatingSupportLink-icon FloatingSupportLink-icon--plane',
    src: '../static/icons/icon-discord-white.svg',
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    }
  }), _react2.default.createElement('div', { className: 'FloatingSupportLink-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    }
  }, 'Talk to us on', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    }
  }), _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    }
  }, 'Discord')))));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiSGVhZCIsIkxpbmsiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBO2lGQUFBLEFBQTRCO01BQTVCLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsa0JBQWIsQUFBYTs7eUJBQzFCLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsNkNBQ1EsU0FBTixBQUFjO2dCQUFkO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFDQTtVQUFBLEFBQ08sQUFDTDthQUZGLEFBRVU7O2dCQUZWO2tCQUhGLEFBR0UsQUFLQTtBQUxBO0FBQ0UsOENBSUksTUFBTixBQUFXLDJCQUEwQixLQUFyQyxBQUF5QztnQkFBekM7a0JBVEosQUFDRSxBQVFFLEFBRUQ7QUFGQztxQ0FHQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsc0JBQXFCLGdCQUFsQyxBQUErQyxRQUFPLE1BQXRELEFBQTJEO2dCQUEzRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7NENBQ08sV0FBTCxBQUFlO2dCQUFmO2tCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7dUJBRUYsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFB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QUwsQUFBUywyQkFBMEIsS0FBbkMsQUFBdUM7Z0JBQXZDO2tCQXBKTixBQUNFLEFBdUlFLEFBWUUsQUFHSjtBQUhJO3dCQUdKLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQSxBQUNZLEFBQ1Y7b0JBRkYsQUFFZSxBQUNiO1VBSEYsQUFHTzs7Z0JBSFA7a0JBQUE7QUFBQTtBQUNFLEtBRkosQUFDRSxBQU9BLGlDQUFBLGNBQUE7ZUFBQSxBQUNZLEFBQ1Y7b0JBRkYsQUFFZSxBQUNiO1VBSEYsQUFHTzs7Z0JBSFA7a0JBQUE7QUFBQTtBQUNFLEtBdk9WLEFBc0VFLEFBQ0UsQUF1SkUsQUFRRSxBQVVOLHNDQUFBLGNBQUE7ZUFBQSxBQUNZLEFBQ1Y7VUFGRixBQUVPLEFBQ0w7WUFIRixBQUdTLEFBQ1A7U0FKRixBQUlNOztnQkFKTjtrQkFBQSxBQU1FO0FBTkY7QUFDRTtlQUtBLEFBQ1ksQUFDVjtTQUZGLEFBRU0sQUFDSjtTQUhGOztnQkFBQTtrQkFORixBQU1FLEFBS0E7QUFMQTtBQUNFO2VBSUYsQUFDWSxBQUNWO1NBRkYsQUFFTSxBQUNKO1NBSEY7O2dCQUFBO2tCQVhGLEFBV0UsQUFLQTtBQUxBO0FBQ0Usc0JBSUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBR0U7O2dCQUFBO2tCQUhGLEFBR0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBdFFLLEFBQ2IsQUFnUEUsQUFnQkUsQUFDRSxBQUlFO0FBdFFWLEFBNlFBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJFOi9vZmZpY2UtcHJvamVjdHMvQ3J5cHRvS2l0dGllcyJ9