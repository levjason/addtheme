
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { ThemeService } from '@theia/core/lib/browser/theming';
import { injectable, inject } from 'inversify';

export function start(context: theia.PluginContext) {
    console.log(theia.window.state);
}

export function stop() {

}
