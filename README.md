ember-leaflet-pm
==============================================================================

Use [leaflet.pm](https://github.com/codeofsumit/leaflet.pm) in Ember with [ember-leaflet](https://ember-leaflet.com) to create and edit geometry layers.


Installation
------------------------------------------------------------------------------

```
ember install ember-leaflet-pm
```


Usage
------------------------------------------------------------------------------

```hbs
<LeafletMap …>
  …
  <LeafletPmControl />
</LeafletMap>
```

`LeafletPmControl` exposes all options of the [leaflet.pm toolbar](https://github.com/codeofsumit/leaflet.pm#leafletpm-toolbar). In addition the pm map events `pm:drawstart`, `pm:drawend` and `pm:create` are available on this component in the ususal ember-leaflet fashion (`onPm:Create=(action "someAction")`).

If you want to be able to edit existing layers and work with the modified geometries (i.e. store them in your backend), use the `PmEnabledLayer` mixin on the required layer type. This brings support for the pm layer events like `pm:edit` or `pm:vertexadded` as well as the `pmIgnore` option.

For example:
```js
import MarkerLayer from 'ember-leaflet/components/marker-layer';
import PmEnabledLayer from 'ember-leaflet-pm/mixins/pm-enabled-layer';

export default MarkerLayer.extend(PmEnabledLayer);
```

```hhbs
<LeafletMap …>
  <MarkerLayerPm @location={{coordinates}} @onPm:edit={{action "featuredEdited"}} />
  <LeafletPmControl />
</LeafletMap>
```

Directly interacting with leaflet.pm is not supported, yet.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
