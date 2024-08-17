(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-6e664348'],
    {
        '1e3d': function (b, c, d) {
            b['exports'] = d['p'] + 'assets/img/__3__.e02aa7cf.webp';
        },
        '2f89': function (b, c, d) {
            'use strict';
            d('cd0d');
        },
        '698f': function (b, f, g) {
            'use strict';
            g['r'](f);
            var j = function () {
                    var D = this, E = D['$createElement'], F = D['WwNMnWmw']['_c'] || E;
                    return F('div', { 'wnWmN': 'leaderboard-cont' }, [
                        D['_m'](0x0),
                        F('div', { 'wnWmN': 'leaders' }, [
                            0x0 !== D['leaders']['length'] ? F('div', { 'wnWmN': 'head-leaders\x20text-2' }, D['_l'](D['leaders'], function (G, H) {
                                return F('div', {
                                    'key': H,
                                    'wnWmN': 'head'
                                }, [G ? [
                                        F('div', { 'wnWmN': 'lvl-leader' }, [D['_v'](D['_s'](G['lvl']))]),
                                        F('div', {
                                            'wnWmN': 'cont-name',
                                            'on': {
                                                'click': function (I) {
                                                    return D['$WwnNwmM']['push']({
                                                        'name': 'profile-id',
                                                        'WwMnWmNw': { 'id': G['id'] }
                                                    });
                                                }
                                            }
                                        }, [
                                            'wMmWn' === G['WwwNMnWm'] ? F('div', { 'wnWmN': 'banned' }, [D['_v'](WwwWnm('WmNnWww'))]) : F('div', { 'wnWmN': 'clan-tag' }, [D['_v'](D['_s'](G['WwwNWnm']))]),
                                            'wMmWn' === G['WwwNMnWm'] ? F('div', { 'wnWmN': 'nickname\x20banned' }, [D['_v'](D['_s'](G['name']))]) : F('div', { 'wnWmN': 'nickname' }, [D['_v'](D['_s'](G['name']) + '\x20')])
                                        ])
                                    ] : D['_e']()], 0x2);
                            }), 0x0) : D['_e'](),
                            F('div', { 'wnWmN': 'background-leaders' }),
                            F('img', {
                                'wnWmN': 'bg-light',
                                'WwNMwW': {
                                    'src': g('1e3d'),
                                    'alt': WwwWnm('WMwmnNw')
                                }
                            }),
                            F('canvas', {
                                'ref': 'wwNmMnWW',
                                'wnWmN': 'leaders-canvas'
                            })
                        ]),
                        F('div', { 'wnWmN': 'info-awards' }, [
                            D['_m'](0x1),
                            F('div', { 'wnWmN': 'reset' }, [D['_v'](WwwWnm('WnmMN') + D['_s'](D['resetTime']))]),
                            D['_m'](0x2)
                        ]),
                        F('div', { 'wnWmN': 'list-champions' }, [F('wWmWwMnN', {
                                'wnWmN': 'list-players',
                                'WwNMwW': {
                                    'wMWwnmN': D['lists'][D['wNnWwmMW']]['label'],
                                    'wMWwnmWN': D['lists'][D['wNnWwmMW']]['names'],
                                    'wMwmWn': D['wwNmMnWWLeaderboard'],
                                    'wmWWMwNn': ''
                                }
                            })], 0x1)
                    ]);
                }, k = [
                    function () {
                        var D = this, E = D['$createElement'], F = D['WwNMnWmw']['_c'] || E;
                        return F('div', { 'wnWmN': 'label-top' }, [
                            F('div', { 'wnWmN': 'label-primary' }, [D['_v'](WwwWnm('WnmMWwNw'))]),
                            F('div', { 'wnWmN': 'label-name' }, [D['_v'](WwwWnm('WnmMWwN'))]),
                            F('img', {
                                'wnWmN': 'champion',
                                'WwNMwW': {
                                    'src': g('c466'),
                                    'alt': WwwWnm('WnmMWwwN')
                                }
                            })
                        ]);
                    },
                    function () {
                        var D = this, E = D['$createElement'], F = D['WwNMnWmw']['_c'] || E;
                        return F('div', { 'wnWmN': 'awards-label' }, [
                            F('span', { 'wnWmN': 'awards-span' }, [D['_v'](WwwWnm('WnmMWww'))]),
                            D['_v'](WwwWnm('WnmMWw'))
                        ]);
                    },
                    function () {
                        var D = this, E = D['$createElement'], F = D['WwNMnWmw']['_c'] || E;
                        return F('div', { 'wnWmN': 'awards-imgs' }, [
                            F('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': g('60e1'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            }),
                            F('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': g('906e'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            }),
                            F('img', {
                                'wnWmN': 'award-img',
                                'WwNMwW': {
                                    'src': g('ab45'),
                                    'alt': WwwWnm('WmnwwM')
                                }
                            })
                        ]);
                    }
                ], o = g('ade3'), q = g('1da1'), v = (g('96cf'), g('d81d'), g('d3b7'), g('3ca3'), g('ddb0'), g('404c')), w = g('b8b4'), x = g('ba5f'), y = g('2ef0'), z = {
                    'components': { 'wWmWwMnN': v['a'] },
                    'data': function () {
                        return {
                            'wNnWwmMW': 0x0,
                            'tabs': ['today'],
                            'leaders': [],
                            'lists': [{
                                    'label': WwwWnm('WnmMWwN'),
                                    'names': [
                                        WwwWnm('WnmwWwNM'),
                                        WwwWnm('WnmMWNww')
                                    ]
                                }],
                            'resetTime': '',
                            'wwNmMnWWLeaderboard': [
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x19,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('ab45')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0xf,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('ab45')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x19,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('906e')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0xf,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0xa,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                },
                                {
                                    'name': '~',
                                    'items': {
                                        'star': {
                                            'value': '~',
                                            'width': '64px'
                                        },
                                        'chest': {
                                            'value': 0x5,
                                            'width': '64px'
                                        }
                                    },
                                    'wwNWnWMm': g('60e1')
                                }
                            ]
                        };
                    },
                    'wwnWNW': function () {
                        var D = this;
                        return Object(q['a'])(regeneratorRuntime['mark'](function E() {
                            var F, G, H, I, J;
                            return regeneratorRuntime['wrap'](function (K) {
                                while (0x1)
                                    switch (K['prev'] = K['next']) {
                                    case 0x0:
                                        return D['wwNmMnWW'] = [], K['prev'] = 0x1, K['next'] = 0x4, x['a']['get']('/wWNWmMw/wnMNWmwW');
                                    case 0x4:
                                        if (F = K['sent'], G = F['data'], H = Math['floor'](G['wWnN'] / 0x3e8 / 0x3c / 0x3c), I = Math['floor'](G['wWnN'] / 0x3e8 / 0x3c - 0x3c * H), D['resetTime'] = H ? H + WwwWnm('WnmMNWw') + I + WwwWnm('WnmMWNw') : I + WwwWnm('WnmMWNw'), 0x0 !== G['wmNnWM']['length']) {
                                            K['next'] = 0xb;
                                            break;
                                        }
                                        return K['abrupt']('return', '');
                                    case 0xb:
                                        D['wwNmMnWWLeaderboard'] = Object(y['map'])(G['wmNnWM'], function (L, M) {
                                            return {
                                                'name': L['wnMWWwm'],
                                                'WwMWwm': L['wMWWnmNw'],
                                                'items': {
                                                    'star': {
                                                        'value': L['wMmWwWnN'],
                                                        'width': '6'
                                                    },
                                                    'chest': D['wwNmMnWWLeaderboard'][M]['items']['chest']
                                                },
                                                'wwNWnWMm': D['wwNmMnWWLeaderboard'][M]['wwNWnWMm']
                                            };
                                        }), J = [
                                            WwwWnm('WmMwWnwN'),
                                            WwwWnm('WmMwWnw'),
                                            WwwWnm('WmMwWn')
                                        ]['map']((function () {
                                            var L = Object(q['a'])(regeneratorRuntime['mark'](function M(N, O) {
                                                var P, Q;
                                                return regeneratorRuntime['wrap'](function (R) {
                                                    while (0x1)
                                                        switch (R['prev'] = R['next']) {
                                                        case 0x0:
                                                            if (!D['wwNmMnWWLeaderboard'][O]) {
                                                                R['next'] = 0xe;
                                                                break;
                                                            }
                                                            return R['prev'] = 0x1, R['next'] = 0x4, x['a']['post']('/wnMWW/wWwNMn', Object(o['a'])({}, 'wNwM', D['wwNmMnWWLeaderboard'][O]['WwMWwm']));
                                                        case 0x4:
                                                            P = R['sent'], Q = P['data'], D['wwNmMnWW'][O] = [
                                                                Q['wmNMW'],
                                                                Q['wWnmNwWM']['wnMWWwm'],
                                                                Q['wWmWwNn']['wMWWmnw']['wnMWWwm'],
                                                                '_' === Q['wWmWwNn']['wnMWWwm'][0x0] ? Q['wWmWwNn']['wMWWmnw']['wnMWWwm'] : Q['wWmWwNn']['wnMWWwm'],
                                                                N
                                                            ], 0x1 === O ? O = 0x2 : 0x2 === O && (O = 0x1), D['$set'](D['leaders'], O, {
                                                                'lvl': Q['wMwnmWNW'],
                                                                'name': Q['wnMWWwm'],
                                                                'WwwNWnm': Q['wnMmWwWN'],
                                                                'id': Q['wmNMW']
                                                            }), R['next'] = 0xe;
                                                            break;
                                                        case 0xb:
                                                            R['prev'] = 0xb, R['t0'] = R['catch'](0x1), console['error'](R['t0']);
                                                        case 0xe:
                                                        case 'end':
                                                            return R['stop']();
                                                        }
                                                }, M, null, [[
                                                        0x1,
                                                        0xb
                                                    ]]);
                                            }));
                                            return function (N, O) {
                                                return L['apply'](this, arguments);
                                            };
                                        }())), Promise['all'](J)['then'](function () {
                                            D['wwNmMnWW'] = new w['a']({
                                                'canvas': D['$refs']['wwNmMnWW'],
                                                'wwNmMnWW': D['wwNmMnWW']
                                            });
                                        }), K['next'] = 0x13;
                                        break;
                                    case 0x10:
                                        K['prev'] = 0x10, K['t0'] = K['catch'](0x1), console['error'](K['t0']);
                                    case 0x13:
                                    case 'end':
                                        return K['stop']();
                                    }
                            }, E, null, [[
                                    0x1,
                                    0x10
                                ]]);
                        }))();
                    },
                    'wNmMWwWn': function () {
                        this['wwNmMnWW']['wwNmWMWn'] && this['wwNmMnWW']['wwNmWMWn']();
                    }
                }, A = z, B = (g('2f89'), g('2877')), C = Object(B['a'])(A, j, k, !0x1, null, '92e661e6', null);
            f['default'] = C['exports'];
        },
        '906e': function (b, c, d) {
            b['exports'] = d['p'] + 'assets/img/__chest-2__.2de0a07c.webp';
        },
        'ab45': function (b, c, d) {
            b['exports'] = d['p'] + 'assets/img/__chest-3__.ea3b713c.webp';
        },
        'c466': function (b, c, d) {
            b['exports'] = d['p'] + 'assets/img/__cup__.7da17b4a.png';
        },
        'cd0d': function (b, c, d) {
        }
    }
]);