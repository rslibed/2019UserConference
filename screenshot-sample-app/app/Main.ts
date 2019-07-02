/*
  Copyright 2017 Esri

  Licensed under the Apache License, Version 2.0 (the "License");

  you may not use this file except in compliance with the License.

  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS,

  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and

  limitations under the License.​
*/

import ApplicationBase = require("ApplicationBase/ApplicationBase");

import i18n = require("dojo/i18n!./nls/resources");

const CSS = {
  loading: "configurable-application--loading"
};

import {
  createMapFromItem,
  createView,
  getConfigViewProperties,
  getItemTitle,
  findQuery,
  goToMarker
} from "ApplicationBase/support/itemUtils";

import {
  setPageLocale,
  setPageDirection,
  setPageTitle
} from "ApplicationBase/support/domHelper";

import watchUtils = require("esri/core/watchUtils");

import Screenshot = require("./Components/Screenshot/Screenshot");

import Home = require("esri/widgets/Home");

import Expand = require("esri/widgets/Expand");

import {
  ApplicationConfig,
  ApplicationBaseSettings
} from "ApplicationBase/interfaces";

class MapExample {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  ApplicationBase
  //----------------------------------
  base: ApplicationBase = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  public init(base: ApplicationBase): void {
    if (!base) {
      console.error("ApplicationBase is not defined");
      return;
    }

    setPageLocale(base.locale);
    setPageDirection(base.direction);

    this.base = base;

    const { config, results, settings } = base;
    const { find, marker } = config;
    const { webMapItems } = results;

    const validWebMapItems = webMapItems.map(response => {
      return response.value;
    });

    const firstItem = validWebMapItems[0];

    if (!firstItem) {
      console.error("Could not load an item to display");
      return;
    }

    config.title = !config.title ? getItemTitle(firstItem) : "";
    setPageTitle(config.title);

    const portalItem: __esri.PortalItem = this.base.results.applicationItem
      .value;
    const appProxies =
      portalItem && portalItem.applicationProxies
        ? portalItem.applicationProxies
        : null;

    const viewContainerNode = document.getElementById("viewContainer");
    const defaultViewProperties = getConfigViewProperties(config);

    validWebMapItems.forEach(item => {
      const viewNode = document.createElement("div");
      viewContainerNode.appendChild(viewNode);

      const container = {
        container: viewNode
      };

      const viewProperties = {
        ...defaultViewProperties,
        ...container
      };

      createMapFromItem({ item, appProxies }).then(map =>
        createView({
          ...viewProperties,
          map
        }).then((view: __esri.MapView) => {
          findQuery(find, view).then(() => goToMarker(marker, view));

          const { screenshotEnabled, screenshotPosition, enablePopupOption, includePopupInScreenshot, homeEnabled, homePosition } = config;

          this._handleHomeWidget(view, homeEnabled, homePosition);

          this._handleScreenshotWidget(view, screenshotEnabled, screenshotPosition, enablePopupOption, includePopupInScreenshot);

        }



        )
      );
    });

    document.body.classList.remove(CSS.loading);
  }

  private _handleHomeWidget(view: __esri.MapView, homeEnabled: boolean, homePosition: string): void {
    if (homeEnabled) {
      const home = new Home({
        view
      });
      view.ui.add(home, homePosition);
    }
  }

  // _handleScreenshotWidget
  private _handleScreenshotWidget(view: __esri.MapView, screenshotEnabled: boolean, screenshotPosition: string, enablePopupOption: boolean, includePopupInScreenshot: boolean): void {
    if (screenshotEnabled) {
      const screenshot = new Screenshot({
        view,
        enablePopupOption,
        includePopupInScreenshot
      });

      const screenshotExpand = new Expand({
        view,
        content: screenshot,
        expanded: true
      });

      view.ui.add(screenshotExpand, screenshotPosition);

      watchUtils.whenFalse(screenshotExpand, "expanded", () => {
        if (screenshot.screenshotModeIsActive) {
          screenshot.screenshotModeIsActive = false;
        }
      });
    }
  }

}

export = MapExample;
