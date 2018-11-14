import { SharedModule } from './shared.module';

describe('SharedmModule', () => {
    let sharedModule: SharedModule;

    beforeEach(() => {
        sharedModule = new SharedModule();
    });

    it('should create an instance', () => {
        expect(sharedModule).toBeTruthy();
    });
});
