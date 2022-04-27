/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
    docs: ['introduction', 'getting-started', 'development'],
    components: [
        'components',
        'window',
        'layout',
        {
            type: 'category',
            label: 'Component',
            collapsed: true,
            items: [
                'button',
                'combo-box',
                'label',
                'text-box',
                'list-box',
                'rich-list-box',
                'progress',
                'check-box',
                {
                    type: 'category',
                    label: 'CommonUi',
                    collapsed: false,
                    items: ['message-box', 'input', 'color-picker'],
                },
                'scroll-bar',
                'status-bar',
                'calendar',
                'date-picker',
                'knob',
                'hyper-link',
                'tab',
                'radio-box',
                'track-bar',
                'tree',
                'picture',
                'icon',
            ],
        },
        'custom-component',
        'theme',
        {
            type: 'category',
            label: 'Event',
            collapsed: true,
            items: ['keyboard', 'mouse'],
        },
        'clipboard',
    ],
};
