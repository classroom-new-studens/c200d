(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-f6e79582'],
    {
        '077e': function (b, d, f) {
            'use strict';
            f['r'](d);
            var g = function () {
                    var x = this, y = x['$createElement'], z = x['WwNMnWmw']['_c'] || y;
                    return z('div', { 'wnWmN': 'hub-container' }, [
                        z('wWwNmMW', { 'WwNMwW': { 'wMWwnNm': x['items'] } }),
                        z('router-view')
                    ], 0x1);
                }, h = [], j = f('5530'), k = f('b50ca'), m = f('2f62'), p = {
                    'components': { 'wWwNmMW': k['a'] },
                    'data': function () {
                        var x = {
                            'items': [
                                {
                                    'text': WwwWnm('WnMw'),
                                    'name': 'wnMWmNwW'
                                },
                                {
                                    'text': WwwWnm('WnMmwNwW'),
                                    'name': 'clans'
                                },
                                {
                                    'text': WwwWnm('WnMmwNw'),
                                    'name': 'WwMWwNn'
                                },
                                {
                                    'text': WwwWnm('WnMmwNWw'),
                                    'name': 'live',
                                    'label': 'new'
                                },
                                {
                                    'text': WwwWnm('WnMmwNW'),
                                    'name': 'news',
                                    'label': ''
                                },
                                {
                                    'text': WwwWnm('WnMmwN'),
                                    'name': 'terms',
                                    'label': ''
                                }
                            ]
                        };
                        return x;
                    },
                    'wwWmWnMN': Object(j['a'])({}, Object(m['e'])('WwwnWMmN', ['version'])),
                    'wwnWWMNm': function () {
                        this['items'][0x4]['label'] = this['version'];
                    }
                }, q = p, v = (f('355c'), f('2877')), w = Object(v['a'])(q, g, h, !0x1, null, '61bf2c96', null);
            d['default'] = w['exports'];
        },
        '0d64': function (a, b, c) {
        },
        '355c': function (a, b, c) {
            'use strict';
            c('55c0d');
        },
        '55c0d': function (a, b, c) {
        },
        'a370': function (a, b, c) {
            'use strict';
            c('0d64');
        },
        'b50ca': function (b, d, f) {
            'use strict';
            var g = function () {
                    var o = this, p = o['$createElement'], q = o['WwNMnWmw']['_c'] || p;
                    return q('div', { 'wnWmN': 'tabs' }, o['_l'](o['wMWwnNm'], function (u, v) {
                        return q('div', {
                            'key': v,
                            'wnWmN': 'text-2\x20tab',
                            'class': { 'active': o['$WwwnMWm']['name']['startsWith'](u['name']) },
                            'on': {
                                'click': function (w) {
                                    return o['open'](u, v);
                                },
                                'mouseenter': function (w) {
                                    return o['$store']['dispatch']('sounds/wNMWWwn', {
                                        'name': 'wmNWwMnW',
                                        'volume': 0.4
                                    });
                                }
                            }
                        }, [
                            o['_v']('\x20' + o['_s'](u['text']) + '\x20'),
                            u['label'] ? q('div', { 'wnWmN': 'label' }, [o['_v']('\x20' + o['_s'](u['label']) + '\x20')]) : o['_e']()
                        ]);
                    }), 0x0);
                }, h = [], j = (f('b0c0'), {
                    'WwNMnWwm': {
                        'wMWwnNm': {
                            'type': Array,
                            'required': !0x0
                        }
                    },
                    'wwnWN': {
                        'open': function (o, p) {
                            this['$WwnNwmM']['push']({ 'name': o['name'] }), this['$emit']('open', p);
                        }
                    }
                }), k = j, l = (f('a370'), f('2877')), m = Object(l['a'])(k, g, h, !0x1, null, '7a14da76', null);
            d['a'] = m['exports'];
        }
    }
]);