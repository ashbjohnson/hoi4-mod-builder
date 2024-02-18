import { BlankLine, CountryExistsBlock, DescBlock, TriggersEffect, IdBlock, NameBlock, PictureBlock, TitleBlock, getEffectFireBlock } from "../Model/Entity/AtomicModElements";
import { getAbstractScopedModElement } from "../Model/Entity/Interface/AbstractScopedModElement";
import { EventBlock, IfBlock, LimitBlock, OptionBlock, getCountryScopedModElement } from "../Model/Entity/ScopedModElements";

describe('test scoped elements', () => {
    it('prints country-level elements', () => {
        const ElementBlockClass = getCountryScopedModElement('RUS');
        const ElementBlock = new ElementBlockClass([
            new IdBlock('test_id'),
            new NameBlock('test_name'),
        ]);

        expect(ElementBlock.getFileRepresentation()).toEqual(
`RUS = {
    id = test_id
    name = test_name
}`
        );
    });

    it('prints compound event', () => {
        const MockEventBlock = new EventBlock([
            new IdBlock('event.1'),
            new TitleBlock('event.1.t'),
            new DescBlock('event.1.desc'),
            new PictureBlock('GFX_event_1_image'),
            new BlankLine(),
            new OptionBlock([
                new NameBlock('event.1.a'),
                new IfBlock([
                    new LimitBlock([
                        new CountryExistsBlock('GEO'),
                        new CountryExistsBlock('AZR'),
                    ]),
                    new (getCountryScopedModElement('GEO'))([
                        new (getEffectFireBlock('econ_join_sphere_RUS'))('yes'),
                    ]),
                ]),
            ]),
        ]);

        expect(MockEventBlock.getFileRepresentation()).toEqual(
`country_event = {
    id = event.1
    title = event.1.t
    desc = event.1.desc
    picture = GFX_event_1_image

    option = {
        name = event.1.a
        if = {
            limit = {
                country_exists = GEO
                country_exists = AZR
            }
            GEO = {
                econ_join_sphere_RUS = yes
            }
        }
    }
}`);
    });

    it('can pull data from other places', () => {
        const MockEffect = new (getAbstractScopedModElement('mock_effect'))([]);
        const MockCountryScopedEffect = new (getCountryScopedModElement('RUS'))([
            TriggersEffect(MockEffect),
        ]);

        expect(MockCountryScopedEffect.getFileRepresentation()).toEqual(
`RUS = {
    mock_effect = yes
}`
        );
    });
});
