import { getAbstractScopedModElement } from "./Interface/AbstractScopedModElement";

const OptionBlock = getAbstractScopedModElement('option');
const IfBlock = getAbstractScopedModElement('if');
const LimitBlock = getAbstractScopedModElement('limit');
const getCountryScopedModElement = (countryCode) => getAbstractScopedModElement(countryCode);
const NotBlock = getAbstractScopedModElement('NOT');
const AndBlock = getAbstractScopedModElement('AND');
const OrBlock = getAbstractScopedModElement('OR');
const ElseIfBlock = getAbstractScopedModElement('else_if');
const ElseBlock = getAbstractScopedModElement('else');
const EventBlock = getAbstractScopedModElement('country_event');
const ImmediateBlock = getAbstractScopedModElement('immediate');

export {
    OptionBlock,
    IfBlock,
    LimitBlock,
    getCountryScopedModElement,
    NotBlock,
    AndBlock,
    OrBlock,
    ElseBlock,
    ElseIfBlock,
    EventBlock,
    ImmediateBlock
}
