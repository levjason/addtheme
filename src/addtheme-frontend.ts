
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { ThemeService } from '@theia/core/lib/browser/theming';




export function start(context: theia.PluginContext) {
     
    const themeService = ThemeService.get();
    const currentTheme = themeService.getCurrentTheme();
    console.log(currentTheme.label);


    console.log(theia.window.state);
}

export function stop() {

}
}