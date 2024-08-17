(window['wMmNnWW'] = window['wMmNnWW'] || [])['push']([
    ['chunk-41ad521e'],
    {
        '0d64': function (a, b, c) {
        },
        '8ba5': function (a, b, c) {
            'use strict';
            c('bd87');
        },
        'a370': function (a, b, c) {
            'use strict';
            c('0d64');
        },
        'b50ca': function (b, d, f) {
            'use strict';
            var g = function () {
                    var o = this, p = o['$createElement'], q = o['WwNMnWmw']['_c'] || p;
                    return q('div', { 'wnWmN': 'tabs' }, o['_l'](o['wMWwnNm'], function (v, w) {
                        return q('div', {
                            'key': w,
                            'wnWmN': 'text-2\x20tab',
                            'class': { 'active': o['$WwwnMWm']['name']['startsWith'](v['name']) },
                            'on': {
                                'click': function (x) {
                                    return o['open'](v, w);
                                },
                                'mouseenter': function (x) {
                                    return o['$store']['dispatch']('sounds/wNMWWwn', {
                                        'name': 'wmNWwMnW',
                                        'volume': 0.4
                                    });
                                }
                            }
                        }, [
                            o['_v']('\x20' + o['_s'](v['text']) + '\x20'),
                            v['label'] ? q('div', { 'wnWmN': 'label' }, [o['_v']('\x20' + o['_s'](v['label']) + '\x20')]) : o['_e']()
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
        },
        'bd87': function (a, b, c) {
        },
        'ee1f': function (b, d, f) {
            'use strict';
            f['r'](d);
            var g = function () {
                    var q = this, v = q['$createElement'], w = q['WwNMnWmw']['_c'] || v;
                    return w('div', { 'wnWmN': 'quests-container' }, [
                        w('wWwNmMW', { 'WwNMwW': { 'wMWwnNm': q['items'] } }),
                        w('router-view')
                    ], 0x1);
                }, h = [], j = f('b50ca'), k = {
                    'components': { 'wWwNmMW': j['a'] },
                    'data': function () {
                        return {
                            'items': [{
                                    'text': WwwWnm('WnwWMwm'),
                                    'name': 'WwnmMNw'
                                }]
                        };
                    }
                }, l = k, m = (f('8ba5'), f('2877')), p = Object(m['a'])(l, g, h, !0x1, null, 'e51afd36', null);
            d['default'] = p['exports'];
        }
    }
]);