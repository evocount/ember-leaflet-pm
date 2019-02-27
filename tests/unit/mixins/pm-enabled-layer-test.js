import EmberObject from '@ember/object';
import PmEnabledLayerMixin from 'ember-leaflet-pm/mixins/pm-enabled-layer';
import { module, test } from 'qunit';

module('Unit | Mixin | pm-enabled-layer', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let PmEnabledLayerObject = EmberObject.extend(PmEnabledLayerMixin);
    let subject = PmEnabledLayerObject.create();
    assert.ok(subject);
  });
});
