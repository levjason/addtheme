
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { ThemeService } from '@theia/core/lib/browser/theming';




export function start(context: theia.PluginContext) {



    const informationMessageTestCommand = {
        id: 'addtheme-example-generated',
        label: "Add a theme"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        const themeService = ThemeService.get();
        const currentTheme = themeService.getCurrentTheme();
        theia.window.showInformationMessage(currentTheme.label);
    }));
}

export function stop() {

}
