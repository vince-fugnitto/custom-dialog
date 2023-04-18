import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { CustomDialog } from './custom-dialog';

export const HelloWorldCommand: Command = {
    id: 'HelloWorld.command',
    label: 'Say Hello'
};

@injectable()
export class HelloWorldCommandContribution implements CommandContribution {

    @inject(CustomDialog)
    protected customDialog: CustomDialog;

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand({
            id: 'hello-world-dialog',
            label: 'Hello World Dialog'
        }, {
            execute: async () => {
                this.customDialog.open();
            }
        });
    }
}
