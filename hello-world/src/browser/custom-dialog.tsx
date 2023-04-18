import * as React from 'react';
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog';
import { DialogProps } from '@theia/core/lib/browser/dialogs';
import { inject, injectable } from '@theia/core/shared/inversify';
import { Message } from '@theia/core/lib/browser/widgets/widget';

import { FileDialogService } from '@theia/filesystem/lib/browser/file-dialog/file-dialog-service';

@injectable()
export class CustomDialog extends ReactDialog<void> {

    @inject(FileDialogService) fileDialogService: FileDialogService;

    constructor(@inject(DialogProps) props: DialogProps) {
        super(props);
    }

    protected async onClick(): Promise<void> {
        const uri = await this.fileDialogService.showOpenDialog({
            title: 'select File',
            canSelectFiles: false,
            canSelectFolders: true,
            openLabel: 'select',
        });
        console.log('select', uri);
    }

    protected render(): React.ReactNode {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={() => this.onClick()} >Import</button>
            </div>
        );
    }

    get value(): undefined { return undefined; }

    protected override onAfterAttach(msg: Message): void {
        super.onAfterAttach(msg);
        this.update();
    }

}