import { IdBlock, NameBlock } from "../Model/Entity/AtomicModElements";

describe('test file description', () => {
    it('prints name', () => {
        const MockPrintName = NameBlock('test_name');

        expect(MockPrintName.fileRepresentation).toEqual('name = test_name');
    });

    it('prints id', () => {
        const MockPrintId = IdBlock('test_id');
        expect(MockPrintId.fileRepresentation).toEqual('id = test_id');
    });
});
