import { getAbstractAtomicModElement } from "./Interface/AbstractAtomicModElement";
import BlankLineClass from "./BlankLine";

const NameBlock = getAbstractAtomicModElement('name');
const IdBlock = getAbstractAtomicModElement('id');
const LogBlock = getAbstractAtomicModElement('log');
const TitleBlock = getAbstractAtomicModElement('title');
const DescBlock = getAbstractAtomicModElement('desc');
const PictureBlock = getAbstractAtomicModElement('picture');
const IsTriggeredOnlyBlock = getAbstractAtomicModElement('is_triggered_only');
const FireOnlyOnce = getAbstractAtomicModElement('fire_only_once');
const CountryExistsBlock = getAbstractAtomicModElement('country_exists');
const getEffectFireBlock = (effectName) => getAbstractAtomicModElement(effectName);
const TriggersEffect = (effect) => getEffectFireBlock(typeof effect === 'string' ? effect : effect.scope)('yes');
const TransferStateBlock = getAbstractAtomicModElement('transfer_state');
const PuppetBlock = getAbstractAtomicModElement('puppet');
const NamespaceBlock = getAbstractAtomicModElement('add_namespace');
const SetDemilitarizedZone = getAbstractAtomicModElement('set_demilitarized_zone');
const BlankLine = () => new BlankLineClass();

export {
    NameBlock,
    IdBlock,
    LogBlock,
    TitleBlock,
    DescBlock,
    PictureBlock,
    IsTriggeredOnlyBlock,
    FireOnlyOnce,
    CountryExistsBlock,
    getEffectFireBlock,
    TriggersEffect,
    TransferStateBlock,
    PuppetBlock,
    NamespaceBlock,
    SetDemilitarizedZone,
    BlankLine,
};
