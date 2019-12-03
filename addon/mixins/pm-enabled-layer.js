import Mixin from '@ember/object/mixin';

export default Mixin.create({
  leafletEvents: Object.freeze([
    'pm:edit',
    'pm:vertexadded',
    'pm:vertexremoved',
    'pm:markerdragstart',
    'pm:markerdragend',
    'pm:snapdrag',
    'pm:snap',
    'pm:unsnap',
    'pm:intersect',
    'pm:centerplaced',
    'pm:dragstart',
    'pm:drag',
    'pm:dragend',
    'pm:cut'
  ]),
  leafletOptions: Object.freeze(['pmIgnore']),
});
