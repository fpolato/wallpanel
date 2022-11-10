// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ItemType } from "src/app/classes/item-type";

export const environment = {
  production: false,
  screenSaverTimeSec: 60,
  meteo: {
    locationDescription: 'Monselice',
    latitude: 45.25,
    longitude: 11.74,
    timezone: 'Europe/Berlin',
    refreshRateMin: 60
  },
  items: [
    {
      type: ItemType.LIGHT,
      ohFeatureId: 'SwitchWHERE04_Switch',
      location: ''
    }
  ],
  model: [
    {
      id: 'esterno',
      name: 'Esterno'
    },
    {
      id: 'pTerra',
      name: 'Piano Terra',
      locations: [
        { id: 'pTerra_cucina', name: 'Cucina', items: [] },
        { id: 'pTerra_soggiorno', name: 'Soggiorno', items: [] },
        { id: 'pTerra_lavanderia', name: 'Lavanderia', items: [] },
        { id: 'pTerra_bagno', name: 'Bagno Giorno', items: [] },
        { id: 'pTerra_scale', name: 'Scale', items: [] }
      ]
    },
    {
      id: 'pPrimo',
      name: 'Primo Piano',
      locations: [
        { id: 'pPrimo_corridoio', name: 'Corridoio Scale', items: [] },
        { id: 'pPrimo_bagno', name: 'Bagno Notte', items: [] },
        {
          id: 'pPrimo_studio',
          name: 'Studio',
          items: [
            { ohFeatureId: 'SwitchWHERE04_Switch', type: ItemType.LIGHT, label: 'Luce' },
            { ohFeatureId: 'SwitchWHERE03_Switch', type: ItemType.LIGHT, label: 'Luce Ripostiglio' },
            { ohFeatureId: 'pPrimo_TermostatoStudio', type: ItemType.THERMO, label: 'Termostato' }
          ]
        },
        { id: 'pPrimo_cameraMedia', name: 'Camera Media', items: [] },
        { id: 'pPrimo_cameraGrande', name: 'Camera Grande', items: [] }
      ]
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
