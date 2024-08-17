(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-c7ed3138'],
    {
        0x820: function (a, b, c) {
        },
        '24f9': function (b, g, j) {
            'use strict';
            j['r'](g);
            var k = function () {
                    var M = this, N = M['$createElement'], O = M['WwNMnWmw']['_c'] || N;
                    return O('div', { 'wnWmN': 'profile-cont' }, [O('div', { 'wnWmN': 'profile' }, [
                            O('div', { 'wnWmN': 'player-cont' }, [O('canvas', {
                                    'ref': 'wwNmMnWW',
                                    'wnWmN': 'player-canvas'
                                })]),
                            M['profile'] ? [
                                O('div', { 'wnWmN': 'you' }, [O('div', { 'wnWmN': 'you-head\x20text-2' }, [
                                        O('div', { 'wnWmN': 'levels' }, [M['_v'](M['_s'](M['profile'] ? M['profile']['wMwnmWNW'] : 0x1))]),
                                        O('div', { 'wnWmN': 'head-right' }, [
                                            M['profile'] && 'wMmWn' === M['profile']['wnMmWwN'] ? O('div', { 'wnWmN': 'banned' }, [M['_v'](WwwWnm('WmNnWww'))]) : M['profile'] ? O('div', { 'wnWmN': 'clan-tag' }, [M['_v'](M['_s'](M['profile']['wnMmWwWN']))]) : M['_e'](),
                                            M['profile'] && 'wMmWn' === M['profile']['wnMmWwN'] ? O('div', { 'wnWmN': 'nickname\x20banned' }, [M['_v'](M['_s'](M['profile'] ? M['profile']['wnMWWwm'] : WwwWnm('WmNnWMw')))]) : O('div', { 'wnWmN': 'nickname' }, [M['_v'](M['_s'](M['profile'] ? M['profile']['wnMWWwm'] : WwwWnm('WmNnWMw')) + '\x20')])
                                        ])
                                    ])]),
                                O('div', { 'wnWmN': 'content' }, [
                                    O('div', { 'wnWmN': 'top-medium' }, [
                                        O('div', { 'wnWmN': 'top' }, [
                                            O('div', { 'wnWmN': 'card\x20card-profile' }, [
                                                O('wWMnmwNW', {
                                                    'WwNMwW': {
                                                        'wMwmWnW': M['profile']['wWnmNwWM']['wnMWWwm'],
                                                        'wMwmnWNW': '3.5rem'
                                                    }
                                                }),
                                                O('wWmnwWM', { 'WwNMwW': { 'wWWnwN': '#' + M['profile']['wmNMW'] } }, [O('div', { 'wnWmN': 'value' }, [M['_v']('#' + M['_s'](M['profile']['wmNMW']))])])
                                            ], 0x1),
                                            O('div', { 'wnWmN': 'card\x20k-d' }, [
                                                O('div', { 'wnWmN': 'stat-name\x20text-2\x20klo' }, [
                                                    M['_v'](WwwWnm('WnmWwN')),
                                                    O('wWmnwWM', { 'WwNMwW': { 'wWWnw': WwwWnm('WnmWwwMN') } }, [O('span', { 'wnWmN': 'info-icon' }, [M['_v']('?')])])
                                                ], 0x1),
                                                O('div', { 'wnWmN': 'stat-value\x20stat-value-kd\x20text-2' }, [M['_v']('\x20' + M['_s'](M['profile']['wNWwWmn']) + '\x20')])
                                            ]),
                                            O('div', { 'wnWmN': 'card\x20progress' }, [
                                                O('div', { 'wnWmN': 'progress-text-cont' }, [
                                                    O('div', { 'wnWmN': 'progress-level' }, [
                                                        O('div', { 'wnWmN': 'progress-level-value\x20text-2' }, [M['_v'](M['_s'](M['profile']['wMwnmWNW']))]),
                                                        O('div', { 'wnWmN': 'progress-level-label\x20text-2' }, [M['_v'](WwwWnm('WmNnMW'))])
                                                    ]),
                                                    O('div', { 'wnWmN': 'progress-exp\x20text-2' }, [M['_v'](M['_s'](M['profile']['wWMnNwmW']) + '\x20/\x20' + M['_s'](M['profile']['wWMnNwm']))])
                                                ]),
                                                O('wWmwnW', {
                                                    'WwNMwW': {
                                                        'wnMWwmW': M['profile']['wWMnNwmW'],
                                                        'wmNWnW': M['profile']['wWMnNwm'],
                                                        'wWwnWMmN': ''
                                                    }
                                                })
                                            ], 0x1)
                                        ]),
                                        O('div', { 'wnWmN': 'medium' }, [O('div', { 'wnWmN': 'card\x20statistics' }, M['_l'](M['stats'], function (Q, R) {
                                                return O('div', {
                                                    'key': R,
                                                    'wnWmN': 'statistic'
                                                }, [
                                                    O('div', { 'wnWmN': 'stat-name\x20text-2' }, [M['_v'](M['_s'](M['wnMNmWwW'][R]))]),
                                                    O('div', { 'wnWmN': 'stat-value\x20text-2' }, [M['_v'](M['_s'](Q))])
                                                ]);
                                            }), 0x0)]),
                                        O('div', { 'wnWmN': 'card\x20bio\x20text-2' }, [
                                            M['_v']('\x20' + M['_s'](M['isMyProfile'] && M['user']['wNWwW'] ? M['user']['wNWwW'] : !M['isMyProfile'] && M['profile']['wNWwW'] ? M['profile']['wNWwW'] : 'This\x20user\x20has\x20no\x20bio.') + '\x20'),
                                            M['isMyProfile'] && M['user'] ? O('wWmWNMnw', {
                                                'wnWmN': 'edit',
                                                'WwNMwW': { 'wMwmWnW': '__edit__' },
                                                'wwWMNWn': {
                                                    'click': function (Q) {
                                                        return M['$modal']['show']('edit-bio');
                                                    }
                                                }
                                            }) : M['_e']()
                                        ], 0x1)
                                    ]),
                                    M['isMyProfile'] ? O('div', { 'wnWmN': 'bottom' }, [
                                        M['inCrazygames'] ? M['_e']() : O('wWMmWwn', {
                                            'wnWmN': 'button',
                                            'WwNMwW': {
                                                'wMWwnm': 'red',
                                                'wWwnWMm': ''
                                            },
                                            'on': { 'click': M['WwMWw'] }
                                        }, [M['_v'](WwwWnm('WnmWwwM'))]),
                                        O('modal', {
                                            'ref': 'modal',
                                            'WwNMwW': {
                                                'name': 'edit-bio',
                                                'reset': !0x0,
                                                'width': '100%',
                                                'height': '100%',
                                                'WwMNmw': { 'background': 'none' }
                                            }
                                        }, [O('wWnNwWMm')], 0x1)
                                    ], 0x1) : O('div', { 'wnWmN': 'bottom' }, [
                                        !M['user'] || M['user'] && ('wmNM' === M['user']['wmMWnNw'] || 'wMWWnNm' === M['user']['wmMWnNw']) ? O('wWMmWwn', {
                                            'wnWmN': 'btn-clan',
                                            'WwNMwW': {
                                                'wMWwnm': 'blue',
                                                'wWwnWMm': ''
                                            },
                                            'on': {
                                                'click': function (Q) {
                                                    M['user'] ? M['$store']['dispatch']('clans/wMNWmW', M['profile']['wmNMW']) : M['wNWWmMwn']();
                                                }
                                            }
                                        }, [M['_v'](WwwWnm('WnmWwwNM'))]) : M['_e'](),
                                        O('wWMmWwn', {
                                            'wnWmN': 'btn-friend',
                                            'WwNMwW': {
                                                'wMWwnm': 'blue',
                                                'wWwnWMm': ''
                                            },
                                            'on': {
                                                'click': function (Q) {
                                                    M['user'] ? M['$store']['dispatch']('user/wNMWWmw', M['profile']['wmNMW']) : M['wNWWmMwn']();
                                                }
                                            }
                                        }, [M['_v'](WwwWnm('WnmWwwN'))])
                                    ], 0x1)
                                ])
                            ] : M['profileLoaded'] || M['profile'] ? O('div', { 'wnWmN': 'not-found\x20text-1' }, [M['_v'](WwwWnm('WnmWww'))]) : O('div', { 'wnWmN': 'not-found\x20text-1' }, [M['_v']('LOADING...')])
                        ], 0x2)]);
                }, m = [], q = j('1da1'), w = j('5530'), x = (j('96cf'), j('043f')), y = j('b8b4'), z = j('2f62'), A = function () {
                    var M = this, N = M['$createElement'], O = M['WwNMnWmw']['_c'] || N;
                    return O('wWmNwWn', { 'WwNMwW': { 'wMwmWnW': 'edit-bio' } }, [O('div', { 'wnWmN': 'edit-bio-cont' }, [
                            O('div', { 'wnWmN': 'head\x20text-1' }, [M['_v'](WwwWnm('WnmWw'))]),
                            O('div', { 'wnWmN': 'description' }, [[M['_v'](WwwWnm('WnmWMwNw'))]], 0x2),
                            O('wWMNWwmn', {
                                'wnWmN': 'input-wrapper',
                                'WwNMwW': { 'placeholder': WwwWnm('WnmWMwN') },
                                'WwNnMWw': {
                                    'value': M['input'],
                                    'wwWMN': function (Q) {
                                        M['input'] = Q;
                                    },
                                    'expression': 'input'
                                }
                            }),
                            O('div', { 'wnWmN': 'btns' }, [O('wWMmWwn', {
                                    'wnWmN': 'send',
                                    'WwNMwW': {
                                        'wmWWnNwM': M['loading'],
                                        'wMWwnm': 'blue',
                                        'wWwnWMm': ''
                                    },
                                    'on': { 'click': M['send'] }
                                }, [M['_v'](WwwWnm('WnmWMwwN'))])], 0x1)
                        ], 0x1)]);
                }, B = [], D = {
                    'data': function () {
                        return {
                            'input': '',
                            'loading': !0x1
                        };
                    },
                    'wwWmWnMN': Object(w['a'])({}, Object(z['e'])('user', ['user'])),
                    'wwnWN': {
                        'send': function () {
                            var M = this;
                            return Object(q['a'])(regeneratorRuntime['mark'](function N() {
                                return regeneratorRuntime['wrap'](function (O) {
                                    while (0x1)
                                        switch (O['prev'] = O['next']) {
                                        case 0x0:
                                            if (!M['loading']) {
                                                O['next'] = 0x2;
                                                break;
                                            }
                                            return O['abrupt']('return');
                                        case 0x2:
                                            if (M['input']) {
                                                O['next'] = 0x5;
                                                break;
                                            }
                                            return M['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WnmWMww')
                                            }), O['abrupt']('return');
                                        case 0x5:
                                            if (!(M['input']['length'] < 0x1)) {
                                                O['next'] = 0x8;
                                                break;
                                            }
                                            return M['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WnmWMw')
                                            }), O['abrupt']('return');
                                        case 0x8:
                                            if (!(M['input']['length'] > 0x1e)) {
                                                O['next'] = 0xb;
                                                break;
                                            }
                                            return M['$notify']({
                                                'group': 'alert',
                                                'type': 'wMwnWWmN',
                                                'text': WwwWnm('WnmWMNww')
                                            }), O['abrupt']('return');
                                        case 0xb:
                                            return M['loading'] = !0x0, O['prev'] = 0xc, O['next'] = 0xf, M['$store']['dispatch']('user/wmwWWNMn', { 'wNWwW': M['input'] });
                                        case 0xf:
                                            O['next'] = 0x13;
                                            break;
                                        case 0x11:
                                            O['prev'] = 0x11, O['t0'] = O['catch'](0xc);
                                        case 0x13:
                                            M['$modal']['hide']('edit-bio'), M['loading'] = !0x1;
                                        case 0x15:
                                        case 'end':
                                            return O['stop']();
                                        }
                                }, N, null, [[
                                        0xc,
                                        0x11
                                    ]]);
                            }))();
                        }
                    }
                }, E = D, F = (j('6691'), j('2877')), G = Object(F['a'])(E, A, B, !0x1, null, '78216c00', null), H = G['exports'], J = {
                    'components': {
                        'wWmwnW': x['a'],
                        'wWnNwWMm': H
                    },
                    'wwWmWnMN': Object(w['a'])(Object(w['a'])(Object(w['a'])({}, Object(z['e'])('app', ['inCrazygames'])), Object(z['e'])('user', [
                        'profile',
                        'wmMNnWW',
                        'stats',
                        'user'
                    ])), {}, {
                        'isMyProfile': function () {
                            var M, N;
                            return (null === (M = this['profile']) || void 0x0 === M ? void 0x0 : M['wmNMW']) === (null === (N = this['user']) || void 0x0 === N ? void 0x0 : N['wmNMW']);
                        }
                    }),
                    'data': function () {
                        return {
                            'wnMNmWwW': {
                                'wMwnmWW': WwwWnm('WnmWMNw'),
                                'wnMNWmw': WwwWnm('WnmWMN'),
                                'wMwnmWWN': WwwWnm('WMwNWnm'),
                                'wMmWwW': WwwWnm('WnmWM'),
                                'wWWwmM': WwwWnm('WnmWNwMw'),
                                'wMmWwWnN': WwwWnm('WnmwWwNM'),
                                'wNWwWmMn': WwwWnm('WnmWNwM'),
                                'wMwnmW': WwwWnm('WMwmWnNw'),
                                'wmNMnWw': WwwWnm('WnmWNwwM')
                            },
                            'profileLoaded': !0x1
                        };
                    },
                    'wwnWNW': function () {
                        var M = this;
                        return Object(q['a'])(regeneratorRuntime['mark'](function N() {
                            var O;
                            return regeneratorRuntime['wrap'](function (Q) {
                                while (0x1)
                                    switch (Q['prev'] = Q['next']) {
                                    case 0x0:
                                        return O = M['$WwwnMWm']['WwMnWmNw']['id'], Q['next'] = 0x3, M['$store']['dispatch']('user/wWMnwNWm', O);
                                    case 0x3:
                                        M['profileLoaded'] = !0x0;
                                    case 0x4:
                                    case 'end':
                                        return Q['stop']();
                                    }
                            }, N);
                        }))();
                    },
                    'WwNmw': {
                        'user': function () {
                            this['user'] && this['profile'] && this['initPlayer']();
                        },
                        'profile': function () {
                            this['user'] && this['profile'] && this['initPlayer']();
                        }
                    },
                    'wwnWN': Object(w['a'])(Object(w['a'])({}, Object(z['b'])('user', ['WwMWw'])), {}, {
                        'initPlayer': function () {
                            this['WwMWwn'] = new y['a']({
                                'canvas': this['$refs']['wwNmMnWW'],
                                'wwNmMnWW': [[
                                        this['user']['wmNMW'],
                                        this['profile']['wWnmNwWM']['wnMWWwm'],
                                        this['profile']['wWmWwNn']['wMWWmnw']['wnMWWwm'],
                                        this['profile']['wWmWwNn']['wnMWWwm'],
                                        WwwWnm('WmwwNnW')
                                    ]]
                            });
                        },
                        'wNWWmMwn': function () {
                            this['$WwnNwmM']['push']({ 'name': WwwWnm('WmNnwM') });
                        }
                    }),
                    'wNmMWwWn': function () {
                        this['WwMWwn'] && this['WwMWwn']['wwNmWMWn'](), this['$store']['commit']('user/wnwWmMWN', null);
                    }
                }, K = J, L = (j('cf84'), Object(F['a'])(K, k, m, !0x1, null, '3c55e432', null));
            g['default'] = L['exports'];
        },
        0x1a23: function (a, b, c) {
            'use strict';
            c('9f933');
        },
        '9f933': function (a, b, c) {
        },
        'cf84': function (a, b, c) {
            'use strict';
            c('2080');
        }
    }
]);