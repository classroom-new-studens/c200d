(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-032c0c38'],
    {
        0x138c: function (b, c, d) {
            'use strict';
            d('fe2e');
        },
        0x18cc: function (b, g, h) {
            'use strict';
            h['r'](g);
            var j = function () {
                    var J = this, K = J['$createElement'], L = J['WwNMnWmw']['_c'] || K;
                    return L('div', { 'wnWmN': 'clans' }, [
                        L('div', { 'wnWmN': 'pages-nav\x20text-2' }, [
                            L('div', {
                                'wnWmN': 'nav',
                                'class': { 'active': 'clans-champions-league' === J['$WwwnMWm']['name'] },
                                'on': {
                                    'click': function (M) {
                                        J['$WwnNwmM']['push']({ 'name': 'clans-champions-league' })['catch'](function (N) {
                                        });
                                    }
                                }
                            }, [J['_v'](WwwWnm('WMwWwNm'))]),
                            J['user'] && J['user']['wnMmWwWN'] ? L('div', {
                                'wnWmN': 'nav',
                                'class': { 'active': 'clans-my-clan' === J['$WwwnMWm']['name'] },
                                'on': {
                                    'click': function (M) {
                                        J['$WwnNwmM']['push']({ 'name': 'clans-my-clan' })['catch'](function (N) {
                                        });
                                    }
                                }
                            }, [J['_v'](WwwWnm('WMwWwNnm'))]) : J['user'] && J['user']['wMwnmWNW'] >= 0xa && !J['user']['wnMmWwWN'] ? L('wWMmWwn', {
                                'wnWmN': 'create-clan-btn',
                                'WwNMwW': { 'wWwnWMm': '' },
                                'on': {
                                    'click': function (M) {
                                        return J['$modal']['show']('create-clan');
                                    }
                                }
                            }, [J['_v'](WwwWnm('WMwWwNn'))]) : J['_e']()
                        ], 0x1),
                        L('modal', {
                            'WwNMwW': {
                                'name': 'create-clan',
                                'reset': !0x0,
                                'width': '100%',
                                'height': '100%',
                                'WwMNmw': { 'background': 'none' }
                            }
                        }, [L('wWMnmWwN')], 0x1),
                        L('router-view')
                    ], 0x1);
                }, k = [], q = h('5530'), w = h('2f62'), x = function () {
                    var J = this, K = J['$createElement'], L = J['WwNMnWmw']['_c'] || K;
                    return L('wWmNwWn', { 'WwNMwW': { 'wMwmWnW': 'create-clan' } }, [
                        L('wWMNWwmn', {
                            'wnWmN': 'input-styles',
                            'WwNMwW': {
                                'wMWwnmN': WwwWnm('WMwWwN'),
                                'wNnWwWm': '10'
                            },
                            'WwNnMWw': {
                                'value': J['name'],
                                'wwWMN': function (M) {
                                    J['name'] = 'string' === typeof M ? M['trim']() : M;
                                },
                                'expression': 'name'
                            }
                        }),
                        L('div', { 'wnWmN': 'input-wrapper' }, [
                            L('wWMNWwmn', {
                                'wnWmN': 'input-styles',
                                'WwNMwW': {
                                    'wMWwnmN': WwwWnm('WMwWw'),
                                    'wNnWwWm': '150'
                                },
                                'WwNnMWw': {
                                    'value': J['description'],
                                    'wwWMN': function (M) {
                                        J['description'] = 'string' === typeof M ? M['trim']() : M;
                                    },
                                    'expression': 'description'
                                }
                            }),
                            L('div', { 'wnWmN': 'necessary' }, [J['_v'](WwwWnm('WMwW'))])
                        ], 0x1),
                        L('div', { 'wnWmN': 'input-wrapper' }, [
                            L('wWMNWwmn', {
                                'wnWmN': 'input-styles',
                                'WwNMwW': { 'wMWwnmN': WwwWnm('WMmwnNwW') },
                                'WwNnMWw': {
                                    'value': J['wnWWmwMN'],
                                    'wwWMN': function (M) {
                                        J['wnWWmwMN'] = 'string' === typeof M ? M['trim']() : M;
                                    },
                                    'expression': 'wnWWmwMN'
                                }
                            }),
                            L('div', { 'wnWmN': 'necessary' }, [J['_v'](WwwWnm('WMwW'))])
                        ], 0x1),
                        L('wWMmWwn', {
                            'wnWmN': 'create-btn',
                            'WwNMwW': {
                                'wmWWnNwM': J['loading'],
                                'wWwnWMm': ''
                            },
                            'wwWMNWn': {
                                'click': function (M) {
                                    return J['wnwMWNHandler'](M);
                                }
                            }
                        }, [J['_v'](WwwWnm('WmNnwW'))])
                    ], 0x1);
                }, y = [], z = h('1da1'), A = (h('96cf'), h('ac1f'), h('466d'), h('b0c0'), h('a4d3'), h('e01a'), {
                    'data': function () {
                        return {
                            'name': '',
                            'description': '',
                            'wnWWmwMN': '',
                            'loading': !0x1
                        };
                    },
                    'wwnWN': {
                        'wnwMWNHandler': function () {
                            var J = this;
                            return Object(z['a'])(regeneratorRuntime['mark'](function K() {
                                return regeneratorRuntime['wrap'](function (L) {
                                    while (0x1)
                                        switch (L['prev'] = L['next']) {
                                        case 0x0:
                                            if (J['name']['match'](/^[A-Za-z0-9_.!@#$^&*()\[\]/\\|+-]*$/)) {
                                                L['next'] = 0x3;
                                                break;
                                            }
                                            return J['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WMmwnNw')
                                            }), L['abrupt']('return', '');
                                        case 0x3:
                                            if (!(J['name']['length'] < 0x4)) {
                                                L['next'] = 0x6;
                                                break;
                                            }
                                            return J['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WMmwnNWw')
                                            }), L['abrupt']('return', '');
                                        case 0x6:
                                            if (!J['wnWWmwMN'] || J['wnWWmwMN']['match'](/https(:)\/\/(?:www\.)?(discord\.(gg|com)|discordapp\.com)\/[a-zA-Z0-9]+/)) {
                                                L['next'] = 0x9;
                                                break;
                                            }
                                            return J['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WMmwnNW')
                                            }), L['abrupt']('return', '');
                                        case 0x9:
                                            return L['prev'] = 0x9, J['loading'] = !0x0, L['next'] = 0xd, J['$store']['dispatch']('clans/wnwMWN', {
                                                'name': J['name'],
                                                'description': J['description'],
                                                'wnWWmwMN': J['wnWWmwMN']
                                            });
                                        case 0xd:
                                            J['$modal']['hide']('create-clan'), L['next'] = 0x13;
                                            break;
                                        case 0x10:
                                            L['prev'] = 0x10, L['t0'] = L['catch'](0x9), console['error'](L['t0']);
                                        case 0x13:
                                            return L['prev'] = 0x13, J['loading'] = !0x1, L['finish'](0x13);
                                        case 0x16:
                                        case 'end':
                                            return L['stop']();
                                        }
                                }, K, null, [[
                                        0x9,
                                        0x10,
                                        0x13,
                                        0x16
                                    ]]);
                            }))();
                        }
                    }
                }), B = A, D = (h('cf14'), h('2877')), E = Object(D['a'])(B, x, y, !0x1, null, '1ee03406', null), F = E['exports'], G = {
                    'components': { 'wWMnmWwN': F },
                    'wwWmWnMN': Object(q['a'])({}, Object(w['e'])('user', ['user']))
                }, H = G, I = (h('5004'), Object(D['a'])(H, j, k, !0x1, null, '0d665f56', null));
            g['default'] = I['exports'];
        },
        'ab30': function (b, c, d) {
        },
        'cf14': function (b, c, d) {
            'use strict';
            d('ab30');
        },
        'fe2e': function (b, c, d) {
        }
    }
]);