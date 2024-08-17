(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-d1ff2506'],
    {
        '6e1f': function (a, b, c) {
            'use strict';
            c('8660');
        },
        0x1d91: function (a, b, c) {
            'use strict';
            c('f597');
        },
        0x21d4: function (a, b, c) {
        },
        '906e': function (a, b, c) {
            a['exports'] = c['p'] + 'assets/img/__chest-2__.2de0a07c.webp';
        },
        '97a4': function (a, b, c) {
            a['exports'] = c['p'] + 'assets/img/__guns-champions__.32d4377c.webp';
        },
        'a1da': function (a, b, c) {
            a['exports'] = c['p'] + 'assets/img/__champions-bg__.d4554716.svg';
        },
        'aaf0': function (j, k, q) {
            'use strict';
            q['r'](k);
            var w = function () {
                    var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                    return Z('div', { 'wnWmN': 'champions-container' }, [
                        Z('div', { 'wnWmN': 'background' }, [
                            Z('div', { 'wnWmN': 'img-grad' }, [
                                Z('img', {
                                    'wnWmN': 'bg-gradient',
                                    'WwNMwW': {
                                        'src': q('a1da'),
                                        'alt': WwwWnm('WnmWNww')
                                    }
                                }),
                                Z('div', { 'wnWmN': 'reset-time' }, [
                                    Z('wWmWNMnw', {
                                        'wnWmN': 'time',
                                        'WwNMwW': { 'wMwmWnW': '__clock__' }
                                    }),
                                    X['_v'](WwwWnm('WnmWNw') + X['_s'](X['resetTime']) + '\x20')
                                ], 0x1),
                                Z('img', {
                                    'wnWmN': 'gun-img',
                                    'WwNMwW': {
                                        'src': q('97a4'),
                                        'alt': WwwWnm('WmnwwM')
                                    }
                                })
                            ]),
                            X['_m'](0x0),
                            Z('img', {
                                'wnWmN': 'cup',
                                'WwNMwW': {
                                    'src': q('c466'),
                                    'alt': WwwWnm('WnmWNMww')
                                }
                            })
                        ]),
                        Z('wWmNWMw', { 'on': { 'set-reset-time': X['setResetTime'] } }),
                        Z('wWNmnw')
                    ], 0x1);
                }, y = [function () {
                        var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                        return Z('div', { 'wnWmN': 'chests' }, [
                            Z('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': q('60e1'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            }),
                            Z('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': q('906e'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            }),
                            Z('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': q('ab45'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            })
                        ]);
                    }], z = function () {
                    var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                    return Z('div', { 'wnWmN': 'champions-list' }, [
                        X['user'] && !X['user']['wnMmWwWN'] ? Z('div', { 'wnWmN': 'right-cont' }, [X['user']['wMwnmWNW'] < 0xa ? Z('div', { 'wnWmN': 'req-lvl-create-clan' }, [X['_v'](WwwWnm('WnmWNMw'))]) : X['_e']()]) : X['_e'](),
                        X['_m'](0x0),
                        Z('div', { 'wnWmN': 'lists' }, X['_l'](0x3, function (a0) {
                            return Z('div', {
                                'key': a0,
                                'wnWmN': 'list'
                            }, [Z('div', { 'wnWmN': 'items-container' }, [
                                    Z('div', {
                                        'wnWmN': 'line-place',
                                        'style': { 'background': X['WwMWwmN'][a0 - 0x1] }
                                    }),
                                    Z('div', { 'wnWmN': 'items' }, X['_l'](X['rank'][a0 - 0x1], function (a1) {
                                        return Z('div', {
                                            'key': a1,
                                            'wnWmN': 'item'
                                        }, [X['list'][X['getKey'](a0, a1)] ? [
                                                X['_v']('\x20' + X['_s'](X['list'][X['getKey'](a0, a1)]['wnMWWwm']) + '\x20'),
                                                Z('div', { 'wnWmN': 'stats' }, [
                                                    Z('div', { 'wnWmN': 'stat' }, [X['_v'](X['_s'](Math['ceil'](X['list'][X['getKey'](a0, a1)]['wMmWwWnN'])))]),
                                                    Z('div', { 'wnWmN': 'stat\x20stat-s' }, [X['_v'](X['_s'](X['list'][X['getKey'](a0, a1)]['wWNmwWnM']))])
                                                ])
                                            ] : [X['_v']('\x20~\x20')]], 0x2);
                                    }), 0x0)
                                ])]);
                        }), 0x0)
                    ]);
                }, B = [function () {
                        var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                        return Z('div', { 'wnWmN': 'champions-header' }, [
                            Z('div', { 'wnWmN': 'leaders' }, [X['_v'](WwwWnm('WnmWNM'))]),
                            Z('div', { 'wnWmN': 'list-labels' }, [
                                Z('div', { 'wnWmN': 'label' }, [X['_v'](WwwWnm('WnmwWwNM'))]),
                                Z('div', { 'wnWmN': 'label' }, [X['_v'](WwwWnm('WnmWN'))])
                            ])
                        ]);
                    }], D = q('5530'), E = q('1da1'), G = (q('96cf'), q('2f62')), H = q('ba5f'), I = {
                    'data': function () {
                        return {
                            'list': [],
                            'WwMWwmN': [
                                'linear-gradient(88.44deg,\x20#FDBB2F\x200%,\x20#FDDC2F\x2099.33%)',
                                'linear-gradient(85.5deg,\x20#AB16EA\x202.68%,\x20#D660FF\x20100%)',
                                'linear-gradient(85.36deg,\x20#2F83FD\x201.99%,\x20#5FC5FF\x2094.56%)'
                            ],
                            'rank': [
                                0x3,
                                0x5,
                                0x1e
                            ],
                            'WwnWmN': [
                                0x0,
                                0x3,
                                0x8
                            ]
                        };
                    },
                    'wwnWWMNm': function () {
                        var X = this;
                        return Object(E['a'])(regeneratorRuntime['mark'](function Y() {
                            var Z, a0;
                            return regeneratorRuntime['wrap'](function (a1) {
                                while (0x1)
                                    switch (a1['prev'] = a1['next']) {
                                    case 0x0:
                                        return a1['prev'] = 0x0, a1['next'] = 0x3, H['a']['get']('/wWNWmMw/wWMnNwWm');
                                    case 0x3:
                                        Z = a1['sent'], a0 = Z['data'], X['$emit']('set-reset-time', a0['wWnN']), X['list'] = a0['wmNnWM'], a1['next'] = 0xc;
                                        break;
                                    case 0x9:
                                        a1['prev'] = 0x9, a1['t0'] = a1['catch'](0x0), console['error'](a1['t0']);
                                    case 0xc:
                                    case 'end':
                                        return a1['stop']();
                                    }
                            }, Y, null, [[
                                    0x0,
                                    0x9
                                ]]);
                        }))();
                    },
                    'wwWmWnMN': Object(D['a'])({}, Object(G['e'])('user', ['user'])),
                    'wwnWN': {
                        'getKey': function (X, Y) {
                            return this['WwnWmN'][X - 0x1] + Y - 0x1;
                        }
                    }
                }, J = I, K = (q('6e1f'), q('2877')), L = Object(K['a'])(J, z, B, !0x1, null, '41980319', null), M = L['exports'], N = function () {
                    var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                    return Z('div', { 'wnWmN': 'awards-cont' }, [
                        X['_m'](0x0),
                        Z('div', { 'wnWmN': 'cards' }, X['_l'](X['cards'], function (a0, a1) {
                            return Z('div', {
                                'key': a1,
                                'wnWmN': 'card'
                            }, [
                                Z('div', {
                                    'wnWmN': 'card-head',
                                    'style': { 'background': a0['color'] }
                                }, [
                                    X['_v'](WwwWnm('WnmW')),
                                    Z('div', { 'wnWmN': 'places' }, [X['_v'](X['_s'](a0['places']))])
                                ]),
                                Z('div', { 'wnWmN': 'awards-label' }, [X['_v'](WwwWnm('WnmMWww'))]),
                                Z('div', { 'wnWmN': 'card-list' }, X['_l'](a0['list'], function (a2, a3) {
                                    return Z('div', {
                                        'key': a3,
                                        'wnWmN': 'item',
                                        'style': { 'color': a2['color'] }
                                    }, [
                                        X['_v']('\x20-\x20' + X['_s'](a2['text']) + '\x20'),
                                        a2['coin'] ? Z('wWmWNMnw', {
                                            'wnWmN': 'coin',
                                            'WwNMwW': { 'wMwmWnW': '__coin__' }
                                        }) : X['_e'](),
                                        a2['chest'] ? Z('img', {
                                            'wnWmN': 'chest',
                                            'WwNMwW': {
                                                'src': a2['chest'],
                                                'alt': WwwWnm('WmnwwM')
                                            }
                                        }) : X['_e']()
                                    ], 0x1);
                                }), 0x0)
                            ]);
                        }), 0x0)
                    ]);
                }, P = [function () {
                        var X = this, Y = X['$createElement'], Z = X['WwNMnWmw']['_c'] || Y;
                        return Z('div', { 'wnWmN': 'header' }, [
                            X['_v'](WwwWnm('WnMwmNwW')),
                            Z('div', { 'wnWmN': 'circle' })
                        ]);
                    }], Q = {
                    'data': function () {
                        return {
                            'cards': [
                                {
                                    'places': '1-3',
                                    'list': [
                                        {
                                            'text': WwwWnm('WnMwmNw'),
                                            'color': '',
                                            'coin': !0x1,
                                            'chest': q('ab45')
                                        },
                                        {
                                            'text': WwwWnm('WnMwmNWw'),
                                            'color': '',
                                            'coin': !0x0,
                                            'chest': ''
                                        },
                                        {
                                            'text': WwwWnm('WnMwmNW'),
                                            'color': '#FDD830',
                                            'coin': !0x1,
                                            'chest': ''
                                        }
                                    ],
                                    'color': 'linear-gradient(88.44deg,\x20#FDBB2F\x200%,\x20#FDDC2F\x2099.33%)'
                                },
                                {
                                    'places': '4-8',
                                    'list': [
                                        {
                                            'text': WwwWnm('WnMwmN'),
                                            'color': '',
                                            'coin': !0x1,
                                            'chest': q('906e')
                                        },
                                        {
                                            'text': WwwWnm('WnMwmwNW'),
                                            'color': '',
                                            'coin': !0x0,
                                            'chest': ''
                                        },
                                        {
                                            'text': WwwWnm('WnMwmwN'),
                                            'color': '#FDD830',
                                            'coin': !0x1,
                                            'chest': ''
                                        }
                                    ],
                                    'color': 'linear-gradient(85.5deg,\x20#AB16EA\x202.68%,\x20#D660FF\x20100%)'
                                },
                                {
                                    'places': '9-39',
                                    'list': [
                                        {
                                            'text': WwwWnm('WnMwmwWN'),
                                            'color': '',
                                            'coin': !0x1,
                                            'chest': q('60e1')
                                        },
                                        {
                                            'text': WwwWnm('WnMwmwW'),
                                            'color': '',
                                            'coin': !0x0,
                                            'chest': ''
                                        },
                                        {
                                            'text': WwwWnm('WnMwmw'),
                                            'color': '#FDD830',
                                            'coin': !0x1,
                                            'chest': ''
                                        }
                                    ],
                                    'color': 'linear-gradient(85.36deg,\x20#2F83FD\x201.99%,\x20#5FC5FF\x2094.56%)'
                                }
                            ]
                        };
                    }
                }, R = Q, S = (q('fdf5'), Object(K['a'])(R, N, P, !0x1, null, '6dda7997', null)), T = S['exports'], U = {
                    'components': {
                        'wWmNWMw': M,
                        'wWNmnw': T
                    },
                    'data': function () {
                        return { 'resetTime': '' };
                    },
                    'wwnWN': {
                        'setResetTime': function (X) {
                            var Y = Math['floor'](X / 0x3e8 / 0x3c / 0x3c / 0x18);
                            0x1 === Y ? this['resetTime'] = WwwWnm('WnMwmWNw') : Y ? this['resetTime'] = Y + WwwWnm('WnMwmWN') : 0x0 === Y && (this['resetTime'] = WwwWnm('WnMwmWwN'));
                        }
                    }
                }, V = U, W = (q('7569'), Object(K['a'])(V, w, y, !0x1, null, '617be78b', null));
            k['default'] = W['exports'];
        },
        'ab45': function (a, b, c) {
            a['exports'] = c['p'] + 'assets/img/__chest-3__.ea3b713c.webp';
        },
        'c466': function (a, b, c) {
            a['exports'] = c['p'] + 'assets/img/__cup__.7da17b4a.png';
        },
        'f597': function (a, b, c) {
        },
        'f84c': function (a, b, c) {
        },
        'fdf5': function (a, b, c) {
            'use strict';
            c('f84c');
        }
    }
]);