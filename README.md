[![npm version](https://badge.fury.io/js/ember-leaflet-pm.svg)](https://badge.fury.io/js/ember-leaflet-pm)

ember-leaflet-pm
==============================================================================

Use [leaflet-geoman](https://github.com/geoman-io/leaflet-geoman) ([used to be leaflet.pm](https://github.com/geoman-io/leaflet-geoman/issues/501)) in Ember with [ember-leaflet](https://ember-leaflet.com) to create and edit geometry layers.


Installation
------------------------------------------------------------------------------

```
ember install ember-leaflet-pm
```


Usage
------------------------------------------------------------------------------

```hbs
<LeafletMap … as |layers|>
  …
  <layers.pm-control />
</LeafletMap>
```

`LeafletPmControl` exposes all options of the [leaflet-geoman toolbar](https://github.com/geoman-io/leaflet-geoman#leaflet-geoman-toolbar). In addition the pm map events `pm:drawstart`, `pm:drawend` and `pm:create` are available on this component in the ususal ember-leaflet fashion (`@onPm:drawstart={{action "someAction"}}`). Language can be set with the `lang` property (`@lang="de"`).

If you want to be able to edit existing layers and work with the modified geometries (i.e. store them in your backend), use the `PmEnabledLayer` mixin on the required layer type. This brings support for the pm layer events like `pm:edit` or `pm:vertexadded` as well as the `pmIgnore` option.

For example:
```js
import MarkerLayer from 'ember-leaflet/components/marker-layer';
import PmEnabledLayer from 'ember-leaflet-pm/mixins/pm-enabled-layer';

export default MarkerLayer.extend(PmEnabledLayer);
```

```hbs
<LeafletMap … as |layers|>
  <layers.marker-layer-pm @location={{coordinates}} @onPm:edit={{action "featuredEdited"}} />
  <layers.pm-control />
</LeafletMap>
```

Directly interacting with leaflet-geoman is not supported, yet.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
