import Mixin from '@ember/object/mixin';

export default Mixin.create({
  leafletEvents: Object.freeze([
    'pm:edit',
    'pm:vertexadded',
    'pm:vertexremoved',
    'pm:markerdragstart',
    'pm:markerdragend',
    'pm:snap',
    'pm:unsnap',
    'pm:intersect',
    'pm:centerplaced'
  ]),
  leafletOptions: Object.freeze(['pmIgnore']),
});
