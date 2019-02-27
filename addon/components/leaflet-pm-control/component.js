import { classify } from '@ember/string';
import { run } from '@ember/runloop';
import { computed } from '@ember-decorators/object';
import BaseLayer from 'ember-leaflet/components/base-layer';

class LeafletPmControl extends BaseLayer {
  leafletOptions = [
    'position',
    'drawMarker',
    'drawPolyline',
    'drawRectangle',
    'drawPolygon',
    'drawCircle',
    'editMode',
    'drawMode',
    'cutPolygon',
    'removalMode'
  ];

  leafletMapEvents = [
    'pm:create',
    'pm:drawstart',
    'pm:drawend'
  ];

  addToContainer() {
      this.parentComponent._layer.pm.addControls(this._layer);
  }

  removeFromContainer() {
      this.parentComponent._layer.pm.removeControls();
  }

  createLayer() {
    return this.options;
  }

  // taken and adapted from ember-leaflet/components/base-layer
  @computed('leafletMapEvents')
  get usedLeafletMapEvents() {
    return this.leafletMapEvents.filter(eventName => {
      let methodName = `_${eventName}`;
      let actionName = `on${classify(eventName)}`;
      return this.get(methodName) !== undefined || this.get(actionName) !== undefined;
    });
  }

  _addMapEventListeners() {
    let map = this.parentComponent._layer;
    this._mapEventHandlers = {};
    this.usedLeafletMapEvents.forEach(eventName => {

      let actionName = `on${classify(eventName)}`;
      let methodName = `_${eventName}`;
      // create an event handler that runs the function inside an event loop.
      this._mapEventHandlers[eventName] = function(e) {
        run(() => {
          // try to invoke/send an action for this event
          this.invokeAction(actionName, e);
          // allow classes to add custom logic on events as well
          if (typeof this[methodName] === 'function') {
            run(this, this[methodName], e);
          }
        });
      };

      map.addEventListener(eventName, this._mapEventHandlers[eventName], this);
    });
  }

  _removeMapEventListeners() {
    let map = this.parentComponent._layer;
    if (this._mapEventHandlers) {
      this.usedLeafletMapEvents.forEach(eventName => {
        map.removeEventListener(eventName, this._mapEventHandlers[eventName], this);
        delete this._mapEventHandlers[eventName];
      });
    }
  }

  didCreateLayer() {
    super.didCreateLayer(...arguments);

    this._addMapEventListeners();
  }

  willDestroyLayer() {
    super.willDestroyLayer(...arguments);

    this._removeMapEventListeners();
  }
}

export default LeafletPmControl;
