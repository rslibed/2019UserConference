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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "ApplicationBase/support/itemUtils", "ApplicationBase/support/domHelper", "esri/core/watchUtils", "./Components/Screenshot/Screenshot", "esri/widgets/Home", "esri/widgets/Expand"], function (require, exports, itemUtils_1, domHelper_1, watchUtils, Screenshot, Home, Expand) {
    "use strict";
    var CSS = {
        loading: "configurable-application--loading"
    };
    var MapExample = /** @class */ (function () {
        function MapExample() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  ApplicationBase
            //----------------------------------
            this.base = null;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        MapExample.prototype.init = function (base) {
            var _this = this;
            if (!base) {
                console.error("ApplicationBase is not defined");
                return;
            }
            domHelper_1.setPageLocale(base.locale);
            domHelper_1.setPageDirection(base.direction);
            this.base = base;
            var config = base.config, results = base.results, settings = base.settings;
            var find = config.find, marker = config.marker;
            var webMapItems = results.webMapItems;
            var validWebMapItems = webMapItems.map(function (response) {
                return response.value;
            });
            var firstItem = validWebMapItems[0];
            if (!firstItem) {
                console.error("Could not load an item to display");
                return;
            }
            config.title = !config.title ? itemUtils_1.getItemTitle(firstItem) : "";
            domHelper_1.setPageTitle(config.title);
            var portalItem = this.base.results.applicationItem
                .value;
            var appProxies = portalItem && portalItem.applicationProxies
                ? portalItem.applicationProxies
                : null;
            var viewContainerNode = document.getElementById("viewContainer");
            var defaultViewProperties = itemUtils_1.getConfigViewProperties(config);
            validWebMapItems.forEach(function (item) {
                var viewNode = document.createElement("div");
                viewContainerNode.appendChild(viewNode);
                var container = {
                    container: viewNode
                };
                var viewProperties = __assign({}, defaultViewProperties, container);
                itemUtils_1.createMapFromItem({ item: item, appProxies: appProxies }).then(function (map) {
                    return itemUtils_1.createView(__assign({}, viewProperties, { map: map })).then(function (view) {
                        itemUtils_1.findQuery(find, view).then(function () { return itemUtils_1.goToMarker(marker, view); });
                        var screenshotEnabled = config.screenshotEnabled, screenshotPosition = config.screenshotPosition, enablePopupOption = config.enablePopupOption, includePopupInScreenshot = config.includePopupInScreenshot, homeEnabled = config.homeEnabled, homePosition = config.homePosition;
                        _this._handleHomeWidget(view, homeEnabled, homePosition);
                        _this._handleScreenshotWidget(view, screenshotEnabled, screenshotPosition, enablePopupOption, includePopupInScreenshot);
                    });
                });
            });
            document.body.classList.remove(CSS.loading);
        };
        MapExample.prototype._handleHomeWidget = function (view, homeEnabled, homePosition) {
            if (homeEnabled) {
                var home = new Home({
                    view: view
                });
                view.ui.add(home, homePosition);
            }
        };
        // _handleScreenshotWidget
        MapExample.prototype._handleScreenshotWidget = function (view, screenshotEnabled, screenshotPosition, enablePopupOption, includePopupInScreenshot) {
            if (screenshotEnabled) {
                var screenshot_1 = new Screenshot({
                    view: view,
                    enablePopupOption: enablePopupOption,
                    includePopupInScreenshot: includePopupInScreenshot
                });
                var screenshotExpand = new Expand({
                    view: view,
                    content: screenshot_1,
                    expanded: true
                });
                view.ui.add(screenshotExpand, screenshotPosition);
                watchUtils.whenFalse(screenshotExpand, "expanded", function () {
                    if (screenshot_1.screenshotModeIsActive) {
                        screenshot_1.screenshotModeIsActive = false;
                    }
                });
            }
        };
        return MapExample;
    }());
    return MapExample;
});
//# sourceMappingURL=Main.js.map