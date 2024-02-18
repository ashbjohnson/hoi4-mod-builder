import { BlankLine, CountryExistsBlock, DescBlock, TriggersEffect, IdBlock, NameBlock, PictureBlock, TitleBlock } from "../Model/Entity/AtomicModElements";
import { Effect, EventBlock, IfBlock, LimitBlock, OptionBlock, getCountryScopedModElement } from "../Model/Entity/ScopedModElements";

describe('test scoped elements', () => {
    it('prints country-level elements', () => {
        const ElementBlock = getCountryScopedModElement('RUS')([
            IdBlock('test_id'),
            NameBlock('test_name'),
        ]);

        expect(ElementBlock.getFileRepresentation()).toEqual(
`RUS = {
    id = test_id
    name = test_name
}`
        );
    });

    it('prints compound event', () => {
        const MockEventBlock = EventBlock([
            IdBlock('event.1'),
            TitleBlock('event.1.t'),
            DescBlock('event.1.desc'),
            PictureBlock('GFX_event_1_image'),
            BlankLine(),
            OptionBlock([
                NameBlock('event.1.a'),
                IfBlock([
                    LimitBlock([
                        CountryExistsBlock('GEO'),
                        CountryExistsBlock('AZR'),
                    ]),
                    getCountryScopedModElement('GEO')([
                        TriggersEffect('econ_join_sphere_RUS'),
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
        const MockEffect = Effect('mock_effect')([]);
        const MockCountryScopedEffect = getCountryScopedModElement('RUS')([
            TriggersEffect(MockEffect),
        ]);

        expect(MockCountryScopedEffect.getFileRepresentation()).toEqual(
`RUS = {
    mock_effect = yes
}`
        );
    });
});
