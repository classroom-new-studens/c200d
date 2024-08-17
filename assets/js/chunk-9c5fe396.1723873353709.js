(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-9c5fe396'],
    {
        '22a9': function (b, c, d) {
        },
        0x1adb: function (b, c, d) {
            'use strict';
            d('22a9');
        },
        '8a69': function (b, f, g) {
            'use strict';
            g['r'](f);
            var h = function () {
                    var z = this, A = z['$createElement'], B = z['WwNMnWmw']['_c'] || A;
                    return B('div', { 'wnWmN': 'news' }, [
                        B('div', { 'wnWmN': 'live-streams' }, [
                            B('div', { 'wnWmN': 'tv-cont' }, [B('iframe', {
                                    'style': {
                                        'width': '100%',
                                        'height': '100%'
                                    },
                                    'WwNMwW': {
                                        'src': z['focusUrl'],
                                        'frameborder': '0',
                                        'wWWwNn': 'true',
                                        'scrolling': 'no'
                                    }
                                })]),
                            B('div', { 'wnWmN': 'stream-list' }, [
                                B('div', { 'wnWmN': 'head' }, [
                                    z['_v'](WwwWnm('WnmWwMw')),
                                    B('wWmWNMnw', {
                                        'wnWmN': 'icon-twitch',
                                        'WwNMwW': { 'wMwmWnW': '__twitch__' }
                                    })
                                ], 0x1),
                                B('div', { 'wnWmN': 'list' }, [
                                    z['_l'](z['WwnNmwList'], function (C, D) {
                                        return B('div', {
                                            'key': D,
                                            'wnWmN': 'item',
                                            'WwNMwW': { 'target': '_blank' },
                                            'on': {
                                                'click': function (E) {
                                                    return z['wNWwmMW'](C['wNWwWnmM']);
                                                }
                                            }
                                        }, [
                                            B('img', {
                                                'wnWmN': 'avatar',
                                                'WwNMwW': {
                                                    'src': C['wMmWwnN'],
                                                    'alt': WwwWnm('WMwWwn')
                                                }
                                            }),
                                            B('div', { 'wnWmN': 'content' }, [
                                                B('div', { 'wnWmN': 'channel-name' }, [z['_v'](z['_s'](C['wnMWWwm']))]),
                                                B('div', { 'wnWmN': 'count' }, [z['_v'](z['_s'](C['wMwnNWW']) + WwwWnm('WnmWwM'))])
                                            ])
                                        ]);
                                    }),
                                    B('div', {
                                        'wnWmN': 'item',
                                        'WwNMwW': { 'target': '_blank' },
                                        'on': {
                                            'click': function (C) {
                                                z['wNWwmMW'](WwwWnm('WmMNWwnw'));
                                            }
                                        }
                                    }, [z['_v'](WwwWnm('WMwWwNmn'))])
                                ], 0x2)
                            ])
                        ]),
                        B('div', { 'wnWmN': 'card-list' }, [
                            B('div', { 'wnWmN': 'title' }, [
                                z['_v'](WwwWnm('WnmWwNMw')),
                                B('wWmnwWM', {
                                    'WwNMwW': {
                                        'wWWnwN': 'yo',
                                        'wWWnw': WwwWnm('WnmWwNM')
                                    }
                                }, [B('span', { 'wnWmN': 'info-icon' }, [z['_v']('?')])])
                            ], 0x1),
                            z['_l'](z['WwmMwList'], function (C, D) {
                                return B('div', {
                                    'key': D,
                                    'wnWmN': 'card'
                                }, [
                                    B('div', { 'wnWmN': 'img-cont' }, [B('iframe', {
                                            'wnWmN': 'image',
                                            'WwNMwW': {
                                                'src': WwwWnm('WmMNW') + C['wmNnWwMW'],
                                                'title': WwwWnm('WmMN'),
                                                'frameborder': '0',
                                                'allow': WwwWnm('WmMWwnNw'),
                                                'wWWwNn': ''
                                            }
                                        })]),
                                    B('div', { 'wnWmN': 'info' }, [
                                        B('h1', { 'wnWmN': 'head\x20text-2' }, [z['_v']('\x20' + z['_s'](C['wWwNMWnm']) + '\x20')]),
                                        B('div', { 'wnWmN': 'info-content' }, [B('div', { 'wnWmN': 'description' }, [
                                                B('div', { 'wnWmN': 'list\x20text-1\x20hello-text' }, [z['_v']('\x20' + z['_s'](C['wWWwmMn']) + '...\x20')]),
                                                B('div', { 'wnWmN': 'list\x20text-2' }, [B('div', { 'wnWmN': 'changelog-item' }, [
                                                        B('div', { 'wnWmN': 'changelog-date\x20item' }, [z['_v'](WwwWnm('WnmWwNwM') + z['_s'](C['wWNWmM']) + '\x20')]),
                                                        z['_v']('\x20' + z['_s'](C['wWNWmnMw']) + WwwWnm('WnmWwNw'))
                                                    ])])
                                            ])])
                                    ])
                                ]);
                            })
                        ], 0x2)
                    ]);
                }, j = [], k = g('1da1'), m = (g('96cf'), g('99af'), g('ba5f')), p = g('ec11'), q = g('a6a0'), v = {
                    'components': { 'wWMnmN': p['a'] },
                    'data': function () {
                        return {
                            'WwnNmwList': [],
                            'WwmMwList': [],
                            'focusUrl': null
                        };
                    },
                    'wwWmWnMN': {},
                    'wwnWNW': function () {
                        var z = this;
                        return Object(k['a'])(regeneratorRuntime['mark'](function A() {
                            var B, C, D;
                            return regeneratorRuntime['wrap'](function (E) {
                                while (0x1)
                                    switch (E['prev'] = E['next']) {
                                    case 0x0:
                                        return E['next'] = 0x2, m['a']['get']('/wMWWnmN/wmNnWMw');
                                    case 0x2:
                                        return B = E['sent'], C = B['data'], z['WwnNmwList'] = C['wNWwWnm']['sort'](function (F, G) {
                                            return G['wMwnNWW'] - F['wMwnNWW'];
                                        }), C['wMwnNW'] ? z['focusUrl'] = WwwWnm('WmMWwnN')['concat'](C['wMwnNW']['wnMWWwm'], WwwWnm('WmMWwnwN'))['concat'](WwwWnm('WmMnwWN'), '&')['concat'](q['O']) : z['focusUrl'] = WwwWnm('WmMWwnw')['concat'](WwwWnm('WmMnwWN'), '&')['concat'](q['O']), E['next'] = 0x8, m['a']['post']('/wMmWwWn');
                                    case 0x8:
                                        D = E['sent'], z['WwmMwList'] = D['data'];
                                    case 0xa:
                                    case 'end':
                                        return E['stop']();
                                    }
                            }, A);
                        }))();
                    },
                    'wwnWN': {
                        'wNWwmMW': function (z) {
                            window['open'](z, '_blank')['focus']();
                        }
                    }
                }, w = v, x = (g('6875'), g('2877')), y = Object(x['a'])(w, h, j, !0x1, null, '8eafabf4', null);
            f['default'] = y['exports'];
        }
    }
]);