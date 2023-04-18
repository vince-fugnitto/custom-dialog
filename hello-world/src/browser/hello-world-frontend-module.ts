import { HelloWorldCommandContribution } from './hello-world-contribution';
import { CommandContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomDialog } from './custom-dialog';
import { DialogProps } from '@theia/core/lib/browser';

export default new ContainerModule(bind => {
    bind(DialogProps).toConstantValue({ title: 'Hello World Title' });
    bind(CustomDialog).toSelf().inSingletonScope();
    bind(CommandContribution).to(HelloWorldCommandContribution);
});
