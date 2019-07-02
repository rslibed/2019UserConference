/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "dojo/i18n!../nls/Legend", "dojo/i18n!../../../../nls/resources", "dojox/gfx", "esri/widgets/Widget", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/core/watchUtils", "./InteractiveStyle/InteractiveStyleViewModel", "esri/core/Handles", "../support/styleUtils", "../relationshipRamp/RelationshipRamp"], function (require, exports, __extends, __decorate, i18n, i18nInteractiveLegend, gfx_1, Widget, decorators_1, widget_1, watchUtils, InteractiveStyleViewModel, Handles, styleUtils_1, RelationshipRamp) {
    "use strict";
    // import * as relationshipOnboardingImg from "../../relation";
    //----------------------------------
    //
    //  CSS classes
    //
    //----------------------------------
    var CSS = {
        widget: "esri-widget",
        base: "esri-legend esri-widget--panel",
        service: "esri-legend__service",
        label: "esri-legend__service-label",
        layer: "esri-legend__layer",
        groupLayer: "esri-legend__group-layer",
        groupLayerChild: "esri-legend__group-layer-child",
        layerTable: "esri-legend__layer-table",
        layerTableSizeRamp: "esri-legend__layer-table--size-ramp",
        layerChildTable: "esri-legend__layer-child-table",
        layerCaption: "esri-legend__layer-caption",
        layerBody: "esri-legend__layer-body",
        layerRow: "esri-legend__layer-row",
        layerCell: "esri-legend__layer-cell",
        layerInfo: "esri-legend__layer-cell esri-legend__layer-cell--info",
        imageryLayerStretchedImage: "esri-legend__imagery-layer-image--stretched",
        imageryLayerCellStretched: "esri-legend__imagery-layer-cell--stretched",
        imageryLayerInfoStretched: "esri-legend__imagery-layer-info--stretched",
        symbolContainer: "esri-legend__layer-cell esri-legend__layer-cell--symbols",
        symbol: "esri-legend__symbol",
        rampContainer: "esri-legend__ramps",
        sizeRamp: "esri-legend__size-ramp",
        colorRamp: "esri-legend__color-ramp",
        opacityRamp: "esri-legend__opacity-ramp",
        borderlessRamp: "esri-legend__borderless-ramp",
        rampTick: "esri-legend__ramp-tick",
        rampFirstTick: "esri-legend__ramp-tick-first",
        rampLastTick: "esri-legend__ramp-tick-last",
        rampLabelsContainer: "esri-legend__ramp-labels",
        rampLabel: "esri-legend__ramp-label",
        message: "esri-legend__message",
        // common
        header: "esri-widget__heading",
        hidden: "esri-hidden",
        calciteStyles: {
            btn: "btn",
            btnSmall: "btn-small",
            btnClear: "btn-clear",
            error: "icon-ui-error",
            close: "icon-ui-close",
            checkMark: "icon-ui-check-mark"
        },
        // interactive-legend
        interactiveLegend: "esri-interactive-legend",
        interactiveLayerInfo: "esri-interactive-legend__layer-cell esri-interactive-legend__layer-cell--info",
        interactiveLegendSizeRamp: "esri-interactive-legend__size-ramp",
        filterLayerRow: "esri-interactive-legend__filter-layer-row",
        selectedRow: "esri-interactive-legend--selected-row",
        loader: "esri-interactive-legend__loader",
        hoverStyles: "esri-interactive-legend--layer-row",
        legendElements: "esri-interactive-legend__legend-elements",
        offScreenScreenshot: "esri-interactive-legend__offscreen",
        interactiveLegendLayerCaption: "esri-interactive-legend__layer-caption",
        interactiveLegendLabel: "esri-interactive-legend__label",
        interactiveLegendLayer: "esri-interactive-legend__layer",
        interactiveLegendService: "esri-interactive-legend__service",
        interactiveLegendLayerRow: "esri-interactive-legend__ramp-layer-row",
        interactiveStyles: "esri-interactive-legend__interactive-styles",
        layerCaptionContainer: "esri-interactive-legend__layer-caption-container",
        interactiveLegendLayerTable: "esri-interactive-legend__layer-table",
        interactiveLegendHeaderContainer: "esri-interactive-legend__header-container",
        interactiveLegendTitleContainer: "esri-interactive-legend__title-container",
        interactiveLegendMainContainer: "esri-interactive-legend__main-container",
        interactiveLegendInfoContainer: "esri-interactive-legend__legend-info-container",
        interactiveLegendGrayButtonStyles: "esri-interactive-legend__gray-button-styles",
        interactiveLegendResetButton: "esri-interactive-legend__reset-button",
        interactiveLegendLayerRowContainer: "esri-interactive-legend__layer-row-container",
        interactiveLegendRemoveOutline: "esri-interactive-legend__remove-outline",
        interactiveRelationshipHeader: "esri-interactive-legend__relationship-header",
        interactiveLegendNoCaption: "esri-interactive-legend__no-caption",
        interactiveLegendButtonContainer: "esri-interactive-legend__button-container",
        updateExtentRelationshipStyles: "esri-interactive-legend__relationship-extent-styles",
        noCaptionUpdateExtentEnabled: "esri-interactive-legend__no-caption-update-extent",
        singleSymbol: "esri-interactive-legend__single-symbol",
        singleSymbolMargin: "esri-interactive-legend__single-symbol-margin",
        updateExtentStyles: "esri-interactive-legend__update-extent-styles",
        singleSymbolButtonContainer: "esri-interactive-legend__single-symbol-button-container",
        removeMarginBottom: "esri-interactive-legend__remove-margin-bottom",
        totalFeatureCount: "esri-interactive-legend__total-feature-count",
        featureCountContainerStyles: "esri-interactive-legend__total-feature-count-container",
        contentContainer: "esri-interactive-legend__content-container",
        featureCountContainer: "esri-interactive-legend__feature-count-container",
        selectedIndicatorContainer: "esri-interactive-legend--selected-indicator-container",
        extentButton: "esri-interactive-legend__extent-button",
        selectedIndicator: "esri-interactive-legend--selected-indicator",
        boxShadowSelected: "esri-interactive-legend--box-shadow-selected",
        notSelected: "esri-interactive-legend__filter-layer-row--not-selected",
        labelContainer: "esri-interactive-legend__label-container",
        relationshipElements: "esri-interactive-legend__relationship-elements",
        interactiveLegendRelationshipLayer: "esri-interactive-legend__relationship-layer",
        onboarding: {
            mainContainer: "esri-interactive-legend__onboarding-main-container",
            contentContainer: "esri-interactive-legend__onboarding-content-container",
            closeContainer: "esri-interactive-legend__onboarding-close-container",
            logoContainer: "esri-interactive-legend__onboarding-logo-container",
            titleContainer: "esri-interactive-legend__onboarding-title-container",
            infoContainer: "esri-interactive-legend__onboarding-info-container",
            imgPreviewContainer: "esri-interactive-legend__onboarding-img-preview-container",
            onboardingButtonContainer: "esri-interactive-legend__onboarding-button-container"
        }
    };
    var KEY = "esri-legend__", GRADIENT_WIDTH = 24;
    var InteractiveClassic = /** @class */ (function (_super) {
        __extends(InteractiveClassic, _super);
        //-------------------------------------------------------------------
        //
        //  Lifecycle methods
        //
        //-------------------------------------------------------------------
        function InteractiveClassic(params) {
            var _this = _super.call(this) || this;
            //----------------------------------
            //
            //  Variables
            //
            //----------------------------------
            _this._handles = new Handles();
            _this._interactiveLegendBase = null;
            _this._filterLayerRowContainerStyles = null;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            // activeLayerInfos
            _this.activeLayerInfos = null;
            // view
            _this.view = null;
            // filterMode
            _this.filterMode = null;
            // layerListViewModel
            _this.layerListViewModel = null;
            // searchExpressions
            _this.searchExpressions = null;
            // searchViewModel
            _this.searchViewModel = null;
            // selectedStyleDataCollection
            _this.selectedStyleDataCollection = null;
            // opacity
            _this.opacity = null;
            // grayScale
            _this.grayScale = null;
            // featureCountEnabled
            _this.featureCountEnabled = null;
            // updateExtentEnabled
            _this.updateExtentEnabled = null;
            // relationshipRampElements
            _this.relationshipRampElements = [];
            // viewModel
            _this.viewModel = new InteractiveStyleViewModel();
            // onboardingPanelEnabled
            _this.onboardingPanelEnabled = null;
            // offscreen
            _this.offscreen = null;
            // type
            _this.type = "classic";
            return _this;
        }
        InteractiveClassic.prototype.postInitialize = function () {
            var _this = this;
            this.own([
                watchUtils.on(this, "viewModel.interactiveStyleData.featureCount", "change", function () {
                    var featureCount = _this.get("viewModel.interactiveStyleData.featureCount");
                    featureCount.forEach(function (featureCountCollection) {
                        _this.own([
                            featureCountCollection.on("change", function () {
                                _this.scheduleRender();
                            })
                        ]);
                    });
                })
            ]);
        };
        InteractiveClassic.prototype.render = function () {
            var _this = this;
            var _a;
            var state = this.viewModel.state;
            var activeLayerInfos = this.activeLayerInfos, baseClasses = this.classes(CSS.base, CSS.interactiveLegend, CSS.widget), filteredLayers = activeLayerInfos &&
                activeLayerInfos
                    .toArray()
                    .map(function (activeLayerInfo, activeLayerInfoIndex) {
                    return _this._renderLegendForLayer(activeLayerInfo, activeLayerInfoIndex);
                })
                    .filter(function (layer) { return !!layer; });
            var offScreenScreenshot = (_a = {},
                _a[CSS.offScreenScreenshot] = this.offscreen,
                _a);
            return (widget_1.tsx("div", { bind: this, afterCreate: widget_1.storeNode, "data-node-ref": "_interactiveLegendBase", class: baseClasses }, this.onboardingPanelEnabled ? (this._renderOnboardingPanel()) : (widget_1.tsx("div", null, filteredLayers && filteredLayers.length ? (widget_1.tsx("div", { class: CSS.legendElements }, state === "loading" ? (widget_1.tsx("div", { class: CSS.loader })) : (widget_1.tsx("div", { class: this.classes(CSS.interactiveLegendMainContainer, offScreenScreenshot) }, filteredLayers)))) : (widget_1.tsx("div", { class: CSS.message }, i18n.noLegend))))));
        };
        InteractiveClassic.prototype.destroy = function () {
            this._handles.removeAll();
            this._handles.destroy();
            this._handles = null;
        };
        //--------------------------------------------------------------------------
        //
        //  Private methods
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Render methods
        //
        //--------------------------------------------------------------------------
        // _renderLegendForLayer
        InteractiveClassic.prototype._renderLegendForLayer = function (activeLayerInfo, activeLayerInfoIndex) {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var title = activeLayerInfo.title;
            var titleIsString = typeof title === "string"
                ? title.indexOf("Description") !== -1 ||
                    title.indexOf("Map Notes") !== -1
                : null;
            if (!activeLayerInfo.ready || titleIsString) {
                return null;
            }
            var hasChildren = !!activeLayerInfo.children.length;
            var key = "" + KEY + activeLayerInfo.layer.uid + "-version-" + activeLayerInfo.version;
            var featureLayerData = this._getFeatureLayerData(activeLayerInfo);
            var interactiveLegendLabel = (_a = {},
                _a[CSS.interactiveLegendLabel] = featureLayerData && featureLayerData.applyStyles,
                _a);
            var labelClasses = this.classes(CSS.header, CSS.label, interactiveLegendLabel);
            var titleContainer = (_b = {},
                _b[CSS.interactiveLegendTitleContainer] = featureLayerData && featureLayerData.applyStyles,
                _b);
            var totalFeatureCountArr = this.get("viewModel.interactiveStyleData.totalFeatureCount");
            var operationalItemIndex = this._getOperationalItemIndex(activeLayerInfo);
            var totalFeatureCountForLegend = totalFeatureCountArr[operationalItemIndex];
            var relationshipRamp = this.relationshipRampElements[operationalItemIndex];
            var relationshipFeatureCount = this.featureCountEnabled &&
                relationshipRamp &&
                relationshipRamp.twoDimensionRamp.hasOwnProperty("shape") &&
                relationshipRamp.twoDimensionRamp.shape.featureCount;
            var labelNode = activeLayerInfo.title ? (widget_1.tsx("div", { class: this.classes(titleContainer) },
                widget_1.tsx("h3", { class: labelClasses }, activeLayerInfo.title))) : null;
            if (hasChildren) {
                var layers = activeLayerInfo.children
                    .map(function (childActiveLayerInfo) {
                    return _this._renderLegendForLayer(childActiveLayerInfo, activeLayerInfoIndex);
                })
                    .toArray();
                var interactiveLegendService = (_c = {},
                    _c[CSS.interactiveLegendService] = featureLayerData && featureLayerData.applyStyles,
                    _c);
                var service = this.classes(CSS.service, CSS.groupLayer, interactiveLegendService);
                return (widget_1.tsx("div", { key: key, class: service },
                    labelNode,
                    layers));
            }
            else {
                var legendElements = activeLayerInfo.legendElements;
                if (legendElements && !legendElements.length) {
                    return null;
                }
                var operationalItemIndex_1 = this._getOperationalItemIndex(activeLayerInfo);
                var filteredElements = legendElements
                    .map(function (legendElement, legendElementIndex) {
                    return _this._renderLegendForElement(legendElement, activeLayerInfo.layer, legendElementIndex, activeLayerInfo, activeLayerInfoIndex, operationalItemIndex_1, legendElement.infos);
                })
                    .filter(function (element) { return !!element; });
                if (!filteredElements.length) {
                    return null;
                }
                var layerClasses = (_d = {},
                    _d[CSS.groupLayerChild] = !!activeLayerInfo.parent,
                    _d);
                var interactiveLegendService = (_e = {},
                    _e[CSS.interactiveLegendService] = featureLayerData && featureLayerData.applyStyles,
                    _e);
                var service = this.classes(CSS.service, layerClasses, interactiveLegendService);
                var isRelationship = activeLayerInfo.get("layer.renderer.authoringInfo.type") ===
                    "relationship";
                var interactiveLegendLayer = (_f = {},
                    _f[CSS.interactiveLegendLayer] = featureLayerData && featureLayerData.applyStyles,
                    _f[CSS.interactiveLegendRelationshipLayer] = isRelationship,
                    _f);
                var layer = this.classes(CSS.layer, interactiveLegendLayer);
                var interactiveStyles = (_g = {},
                    _g[CSS.interactiveStyles] = featureLayerData && featureLayerData.applyStyles,
                    _g);
                var labelContainer = (_h = {},
                    _h[CSS.labelContainer] = activeLayerInfo &&
                        activeLayerInfo.get("layer.renderer.authoringInfo.type") ===
                            "relationship",
                    _h);
                return (widget_1.tsx("div", { key: key, class: service },
                    widget_1.tsx("div", { class: this.classes(interactiveStyles) },
                        widget_1.tsx("div", { class: this.classes(labelContainer) },
                            labelNode,
                            this.featureCountEnabled &&
                                featureLayerData &&
                                featureLayerData.applyStyles ? (isNaN(relationshipFeatureCount) ? (widget_1.tsx("div", { class: CSS.featureCountContainerStyles },
                                widget_1.tsx("span", { class: CSS.totalFeatureCount }, totalFeatureCountForLegend ||
                                    totalFeatureCountForLegend === 0
                                    ? i18nInteractiveLegend.totalFeatureCount + ": " + totalFeatureCountForLegend
                                    : null))) : (widget_1.tsx("div", { class: CSS.featureCountContainerStyles },
                                widget_1.tsx("span", { class: CSS.totalFeatureCount }, relationshipFeatureCount ||
                                    relationshipFeatureCount === 0
                                    ? i18nInteractiveLegend.totalFeatureCount + ": " + relationshipFeatureCount
                                    : null)))) : null),
                        widget_1.tsx("div", { class: layer }, filteredElements))));
            }
        };
        // _renderLegendForElement
        InteractiveClassic.prototype._renderLegendForElement = function (legendElement, layer, legendElementIndex, activeLayerInfo, activeLayerInfoIndex, operationalItemIndex, legendElementInfos, isChild) {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var type = legendElement.type;
            var isColorRamp = type === "color-ramp", isOpacityRamp = type === "opacity-ramp", isSizeRamp = type === "size-ramp", isHeatRamp = type === "heatmap-ramp";
            var content = null;
            var selectedStyleData = this.selectedStyleDataCollection.getItemAt(operationalItemIndex);
            var field = selectedStyleData && selectedStyleData.get("field");
            var normalizationField = selectedStyleData &&
                selectedStyleData.get("normalizationField");
            // build symbol table or size ramp
            if (legendElement.type === "symbol-table" || isSizeRamp) {
                var rows = legendElement.infos
                    .map(function (info, legendInfoIndex) {
                    var elementInfo = _this._renderLegendForElementInfo(info, layer, isSizeRamp, legendElement.legendType, legendInfoIndex, field, legendElementIndex, legendElement, activeLayerInfo, activeLayerInfoIndex, operationalItemIndex, legendElementInfos, normalizationField);
                    return elementInfo;
                })
                    .filter(function (row) { return !!row; });
                var featureLayerView = this.viewModel.featureLayerViews.getItemAt(operationalItemIndex);
                var type_1 = featureLayerView &&
                    featureLayerView.get("layer.renderer.authoringInfo.type");
                var isSizeRampBody = (_a = {},
                    _a[CSS.interactiveLegendSizeRamp] = type_1 === "class-breaks-size" || isSizeRamp,
                    _a);
                if (rows.length) {
                    content = (widget_1.tsx("div", { class: this.classes(CSS.layerBody, isSizeRampBody) }, rows));
                }
            }
            else if (legendElement.type === "color-ramp" ||
                legendElement.type === "opacity-ramp" ||
                legendElement.type === "heatmap-ramp") {
                content = this._renderLegendForRamp(legendElement, activeLayerInfo);
            }
            else if (legendElement.type === "relationship-ramp") {
                var layerView = this.viewModel.featureLayerViews.getItemAt(operationalItemIndex)
                    ? this.viewModel.featureLayerViews.getItemAt(operationalItemIndex)
                    : null;
                if (!this.relationshipRampElements[operationalItemIndex] && layerView) {
                    this.relationshipRampElements[operationalItemIndex] = new RelationshipRamp({
                        legendElement: legendElement,
                        id: this.id,
                        view: this.view,
                        activeLayerInfos: this.activeLayerInfos,
                        layerView: layerView,
                        filterMode: this.filterMode,
                        opacity: this.opacity,
                        grayScale: this.grayScale,
                        searchViewModel: this.searchViewModel,
                        layerListViewModel: this.layerListViewModel,
                        featureCountEnabled: this.featureCountEnabled
                    });
                    var relationshipElement = this.relationshipRampElements[operationalItemIndex];
                    this._handles.add(watchUtils.watch(relationshipElement, "twoDimensionRamp.shape.featureCount", function () {
                        _this.scheduleRender();
                    }));
                }
                content = this.relationshipRampElements[operationalItemIndex]
                    ? this.relationshipRampElements[operationalItemIndex].render()
                    : null;
            }
            if (!content) {
                return null;
            }
            var titleObj = legendElement.title;
            var title = null;
            if (typeof titleObj === "string") {
                title = titleObj;
            }
            else if (titleObj) {
                var genTitle = styleUtils_1.getTitle(titleObj, isColorRamp || isOpacityRamp);
                if (styleUtils_1.isRendererTitle(titleObj, isColorRamp || isOpacityRamp) &&
                    titleObj.title) {
                    title = titleObj.title + " (" + genTitle + ")";
                }
                else {
                    title = genTitle;
                }
            }
            var featureLayerData = this._getFeatureLayerData(activeLayerInfo);
            var interactiveLegendLayerCaption = (_b = {},
                _b[CSS.interactiveLegendLayerCaption] = featureLayerData && featureLayerData.applyStyles,
                _b);
            var layerCaption = this.classes(CSS.layerCaption, interactiveLegendLayerCaption);
            var interactiveLegendLayerTable = (_c = {},
                _c[CSS.interactiveLegendLayerTable] = featureLayerData &&
                    featureLayerData.applyStyles &&
                    !(isColorRamp || isOpacityRamp || isSizeRamp || isHeatRamp),
                _c);
            var singleSymbolMargin = (_d = {},
                _d[CSS.singleSymbolMargin] = legendElementInfos && legendElementInfos.length === 1,
                _d);
            var layerTable = this.classes(CSS.layerTable, interactiveLegendLayerTable, singleSymbolMargin);
            var isRelationship = this._checkForRelationshipLegend(legendElement, operationalItemIndex);
            var resetButton = this.offscreen
                ? null
                : this._renderResetButton(featureLayerData, operationalItemIndex, legendElementInfos, legendElement);
            var zoomToButton = this.offscreen || !this.updateExtentEnabled
                ? null
                : this._renderZoomToButton(operationalItemIndex);
            var featureLayer = activeLayerInfo.layer;
            var predominanceType = featureLayer.get("renderer.authoringInfo.type");
            var isTypePredominance = predominanceType === "predominance";
            var singleSymbol = legendElementInfos && legendElementInfos.length === 1 && !field;
            var updateExtentStyles = (_e = {},
                _e[CSS.updateExtentStyles] = zoomToButton && legendElementInfos && legendElementInfos.length > 1,
                _e);
            var updateExtentRelationshipStyles = (_f = {},
                _f[CSS.updateExtentRelationshipStyles] = this.updateExtentEnabled,
                _f);
            var relationShipHeader = (_g = {},
                _g[CSS.interactiveRelationshipHeader] = isRelationship,
                _g);
            var hasField = (_h = {},
                _h[CSS.singleSymbolButtonContainer] = !field,
                _h);
            var removeMarginBottom = (_j = {},
                _j[CSS.removeMarginBottom] = !field && !isTypePredominance,
                _j);
            var allowInteractivity = this._checkForInteractivity(activeLayerInfo, legendElement, operationalItemIndex, featureLayerData, singleSymbol, isTypePredominance);
            var tableClass = isChild ? CSS.layerChildTable : layerTable, caption = title ||
                (legendElementInfos && legendElementInfos.length === 1 && !field) ? (allowInteractivity ? (legendElementInfos &&
                legendElementInfos.length === 1 &&
                !field &&
                !this.updateExtentEnabled ? null : (widget_1.tsx("div", { class: this.classes(CSS.interactiveLegendHeaderContainer, removeMarginBottom, relationShipHeader, updateExtentStyles, updateExtentRelationshipStyles) },
                title ? (widget_1.tsx("div", { key: "layer-caption", class: this.classes(layerCaption, CSS.layerCaptionContainer) }, title)) : null,
                allowInteractivity ? (!title &&
                    legendElementInfos &&
                    legendElementInfos.length > 1 ? (widget_1.tsx("div", { class: CSS.interactiveLegendNoCaption },
                    zoomToButton,
                    resetButton)) : legendElementInfos && legendElementInfos.length === 1 ? (widget_1.tsx("div", { class: this.classes(CSS.interactiveLegendButtonContainer, hasField) }, zoomToButton)) : (widget_1.tsx("div", { class: CSS.interactiveLegendButtonContainer },
                    zoomToButton,
                    resetButton))) : null))) : (widget_1.tsx("div", { class: layerCaption }, title))) : null;
            var tableClasses = (_k = {},
                _k[CSS.layerTableSizeRamp] = isSizeRamp || !isChild,
                _k);
            var noCaptionUpdateExtent = (_l = {},
                _l[CSS.noCaptionUpdateExtentEnabled] = this.updateExtentEnabled,
                _l);
            var relationshipStyles = (_m = {},
                _m[CSS.relationshipElements] = isRelationship,
                _m);
            return (widget_1.tsx("div", { class: this.classes(tableClass, tableClasses, relationshipStyles) },
                caption,
                (field && allowInteractivity && !caption) ||
                    (isTypePredominance && !isSizeRamp && !isOpacityRamp && !caption) ? (widget_1.tsx("div", null,
                    widget_1.tsx("div", { class: this.classes(CSS.interactiveLegendNoCaption, noCaptionUpdateExtent) },
                        zoomToButton,
                        resetButton))) : null,
                widget_1.tsx("div", { key: operationalItemIndex, class: CSS.contentContainer }, content)));
        };
        // _renderLegendForRamp
        InteractiveClassic.prototype._renderLegendForRamp = function (legendElement, activeLayerInfo) {
            var rampStops = legendElement.infos;
            var isOpacityRamp = legendElement.type === "opacity-ramp";
            var isHeatmapRamp = legendElement.type === "heatmap-ramp";
            var numGradients = rampStops.length - 1;
            var rampWidth = "100%";
            var rampHeight = 75;
            var rampDiv = document.createElement("div");
            var opacityRampClass = isOpacityRamp ? CSS.opacityRamp : "";
            rampDiv.className = CSS.colorRamp + " " + opacityRampClass;
            rampDiv.style.height = rampHeight + "px";
            var surface = gfx_1.createSurface(rampDiv, rampWidth, rampHeight);
            try {
                // TODO: When HeatmapRenderer is supported, stop offsets should not be adjusted.
                // equalIntervalStops will be true for sizeInfo, false for heatmap.
                // Heatmaps tend to have lots of colors, we don't want a giant color ramp.
                // Hence equalIntervalStops = false.
                if (!isHeatmapRamp) {
                    // Adjust the stop offsets so that we have stops at fixed/equal interval.
                    rampStops.forEach(function (stop, index) {
                        stop.offset = index / numGradients;
                    });
                }
                surface
                    .createRect({ x: 0, y: 0, width: rampWidth, height: rampHeight })
                    .setFill({
                    type: "linear",
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: rampHeight,
                    colors: rampStops
                })
                    .setStroke(null);
                if (legendElement.type === "color-ramp" ||
                    legendElement.type === "opacity-ramp") {
                    var overlayColor = legendElement.overlayColor;
                    if (overlayColor && overlayColor.a > 0) {
                        surface
                            .createRect({
                            x: 0,
                            y: 0,
                            width: rampWidth,
                            height: rampHeight
                        })
                            .setFill(overlayColor)
                            .setStroke(null);
                    }
                }
            }
            catch (e) {
                surface.clear();
                surface.destroy();
            }
            if (!surface) {
                return null;
            }
            var labelsContent = rampStops
                .filter(function (stop) { return !!stop.label; })
                .map(function (stop) { return (widget_1.tsx("div", { class: CSS.rampLabel }, isHeatmapRamp ? i18n[stop.label] : stop.label)); });
            var symbolContainerStyles = { width: GRADIENT_WIDTH + "px" }, rampLabelsContainerStyles = { height: rampHeight + "px" };
            return (widget_1.tsx("div", { class: CSS.layerRow },
                widget_1.tsx("div", { class: CSS.symbolContainer, styles: symbolContainerStyles },
                    widget_1.tsx("div", { class: CSS.rampContainer, bind: rampDiv, afterCreate: styleUtils_1.attachToNode })),
                widget_1.tsx("div", { class: CSS.layerInfo },
                    widget_1.tsx("div", { class: CSS.rampLabelsContainer, styles: rampLabelsContainerStyles }, labelsContent))));
        };
        // _renderLegendForElementInfo
        InteractiveClassic.prototype._renderLegendForElementInfo = function (elementInfo, layer, isSizeRamp, legendType, legendInfoIndex, field, legendElementIndex, legendElement, activeLayerInfo, activeLayerInfoIndex, operationalItemIndex, legendElementInfos, normalizationField) {
            var _this = this;
            var _a, _b, _c, _d;
            // nested
            if (elementInfo.type) {
                return this._renderLegendForElement(elementInfo, layer, legendElementIndex, activeLayerInfo, activeLayerInfoIndex, operationalItemIndex, legendElementInfos, true);
            }
            var content = null;
            var isStretched = styleUtils_1.isImageryStretchedLegend(layer, legendType);
            if (elementInfo.symbol && elementInfo.preview) {
                content = (widget_1.tsx("div", { class: CSS.symbol, bind: elementInfo.preview, afterCreate: styleUtils_1.attachToNode }));
            }
            else if (elementInfo.src) {
                content = this._renderImage(elementInfo, layer, isStretched);
            }
            if (!content) {
                return null;
            }
            var labelClasses = (_a = {},
                _a[CSS.imageryLayerInfoStretched] = isStretched,
                _a);
            var featureLayerView = this.viewModel.featureLayerViews.getItemAt(operationalItemIndex);
            var symbolClasses = (_b = {},
                _b[CSS.imageryLayerInfoStretched] = isStretched,
                _b[CSS.sizeRamp] = !isStretched && isSizeRamp,
                _b[CSS.interactiveLegendSizeRamp] = (featureLayerView &&
                    featureLayerView.get("layer.renderer.authoringInfo.type") ===
                        "class-breaks-size") ||
                    isSizeRamp,
                _b);
            var queryExpressionsCollection = this.get("viewModel.interactiveStyleData.queryExpressions");
            var queryExpressions = queryExpressionsCollection.getItemAt(operationalItemIndex);
            var selectedRow = null;
            var selectedInfoIndex = null;
            if (this.selectedStyleDataCollection.length > 0) {
                var featureLayerData_1 = this._getFeatureLayerData(activeLayerInfo);
                if (featureLayerData_1) {
                    var selectedIndex = featureLayerData_1.selectedInfoIndex[legendElementIndex];
                    selectedInfoIndex = selectedIndex ? selectedIndex : null;
                    var nonSelectedRowStyles = this.classes(CSS.layerRow, CSS.filterLayerRow, CSS.hoverStyles, CSS.notSelected);
                    var selectedRowStyles = this.classes(CSS.layerRow, CSS.filterLayerRow, CSS.hoverStyles, CSS.selectedRow);
                    if (legendElementInfos && legendElementInfos.length === 1) {
                        selectedRow =
                            (selectedInfoIndex && selectedInfoIndex.length === 0) ||
                                (selectedInfoIndex === null &&
                                    (queryExpressions && queryExpressions[0] !== "1=0"))
                                ? selectedRowStyles
                                : nonSelectedRowStyles;
                    }
                    else {
                        selectedRow = selectedInfoIndex
                            ? (featureLayerData_1.selectedInfoIndex &&
                                selectedInfoIndex.indexOf(legendInfoIndex) === -1 &&
                                selectedInfoIndex.length > 0) ||
                                (queryExpressions && queryExpressions[0] === "1=0")
                                ? nonSelectedRowStyles
                                : selectedRowStyles
                            : selectedRowStyles;
                    }
                }
            }
            var featureLayer = activeLayerInfo.layer;
            var isRelationship = this._checkForRelationshipLegend(legendElement, operationalItemIndex);
            var isPredominance = featureLayer.get("renderer.authoringInfo.type") === "predominance";
            var featureLayerData = this._getFeatureLayerData(activeLayerInfo);
            var singleSymbol = legendElementInfos && legendElementInfos.length === 1 && !field;
            var classifyDataCheckedColorRamp = this._colorRampCheck(activeLayerInfo);
            var classifyDataCheckedSizeRamp = featureLayerView &&
                featureLayerView.get("layer.renderer.authoringInfo.type") ===
                    "class-breaks-size";
            var isColorRamp = legendElement.type === "color-ramp";
            var classBreakInfos = featureLayerView &&
                featureLayerView.get("layer.renderer.classBreakInfos");
            var hasMoreThanOneClassBreak = featureLayerView && classBreakInfos && classBreakInfos.length > 1;
            var allowSelectStyles = classBreakInfos
                ? (!activeLayerInfo.layer.hasOwnProperty("sublayers") &&
                    activeLayerInfo.layer.type === "feature" &&
                    field &&
                    !isColorRamp &&
                    !isSizeRamp &&
                    hasMoreThanOneClassBreak &&
                    featureLayerData) ||
                    (isPredominance && !isSizeRamp) ||
                    classifyDataCheckedColorRamp ||
                    classifyDataCheckedSizeRamp ||
                    singleSymbol ||
                    isRelationship
                : (!activeLayerInfo.layer.hasOwnProperty("sublayers") &&
                    activeLayerInfo.layer.type === "feature" &&
                    field &&
                    !isColorRamp &&
                    !isSizeRamp &&
                    featureLayerData) ||
                    (isPredominance && !isSizeRamp) ||
                    classifyDataCheckedColorRamp ||
                    classifyDataCheckedSizeRamp ||
                    singleSymbol ||
                    isRelationship;
            var applySelect = allowSelectStyles ? selectedRow : null;
            if (featureLayerData && featureLayerData.applyStyles === null) {
                featureLayerData.applyStyles = applySelect ? true : false;
                this.scheduleRender();
            }
            if (allowSelectStyles) {
                if (this.featureCountEnabled) {
                    this.viewModel.queryFeatureCount(elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, isPredominance, legendElementIndex, legendElementInfos, normalizationField, true);
                }
            }
            // FEATURE COUNT VARIABLES
            var featureCountArrForLayer = this.get("viewModel.interactiveStyleData.featureCount");
            var featureCountArrForLegend = featureCountArrForLayer.getItemAt(operationalItemIndex);
            var featureCountArrForElementInfo = featureCountArrForLayer && featureCountArrForLegend
                ? featureCountArrForLegend.getItemAt(legendInfoIndex)
                : null;
            var singleSymbolStyles = (_c = {},
                _c[CSS.singleSymbol] = legendElementInfos && legendElementInfos.length === 1 && !field,
                _c);
            var removeScrollbarFlicker = this._removeScrollbarFlicker();
            if (applySelect && !isRelationship) {
                var selected = this._getSelectedValue(legendElementInfos, legendInfoIndex, selectedInfoIndex, featureLayerData, queryExpressions);
                var boxShadow = (_d = {},
                    _d[CSS.boxShadowSelected] = selected,
                    _d);
                return (widget_1.tsx("div", { style: removeScrollbarFlicker, class: CSS.interactiveLegendLayerRowContainer },
                    widget_1.tsx("div", { bind: this, class: (activeLayerInfo.layer.type === "feature" &&
                            (field && featureLayerData && !isSizeRamp)) ||
                            (isPredominance && !isSizeRamp) ||
                            singleSymbol
                            ? this.classes(applySelect, singleSymbolStyles, boxShadow)
                            : CSS.interactiveLegendRemoveOutline, onclick: function (event) {
                            if (allowSelectStyles) {
                                _this._handleFilterOption(event, elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, isPredominance, legendElementIndex, legendElementInfos, normalizationField);
                            }
                        }, onkeydown: function (event) {
                            if (allowSelectStyles) {
                                _this._handleFilterOption(event, elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, isPredominance, legendElementIndex, legendElementInfos, normalizationField);
                            }
                        }, tabIndex: activeLayerInfo.layer.type === "feature" &&
                            !this.offscreen &&
                            ((field && featureLayerData && !isSizeRamp) ||
                                (isPredominance && !isSizeRamp) ||
                                singleSymbol)
                            ? 0
                            : -1, "data-legend-index": "" + legendElementIndex, "data-child-index": "" + legendInfoIndex, "data-layer-id": "" + activeLayerInfo.layer.id },
                        widget_1.tsx("div", { class: CSS.selectedIndicatorContainer }, selected && !isSizeRamp ? (widget_1.tsx("div", { class: CSS.selectedIndicator })) : null),
                        widget_1.tsx("div", { class: CSS.interactiveLegendInfoContainer },
                            widget_1.tsx("div", { class: this.classes(CSS.symbolContainer, symbolClasses) }, content),
                            widget_1.tsx("div", { class: this.classes(CSS.layerInfo, labelClasses, CSS.interactiveLayerInfo) }, styleUtils_1.getTitle(elementInfo.label, false) || "")),
                        widget_1.tsx("div", { class: CSS.featureCountContainer }, selected && !isSizeRamp ? featureCountArrForElementInfo : null))));
            }
            else {
                return (widget_1.tsx("div", { class: CSS.layerRow },
                    widget_1.tsx("div", { class: this.classes(CSS.symbolContainer, symbolClasses) }, content),
                    widget_1.tsx("div", { class: this.classes(CSS.layerInfo, labelClasses) }, styleUtils_1.getTitle(elementInfo.label, false) || "")));
            }
        };
        // _renderImage
        InteractiveClassic.prototype._renderImage = function (elementInfo, layer, isStretched) {
            var _a;
            var label = elementInfo.label, src = elementInfo.src, opacity = elementInfo.opacity;
            var stretchedClasses = (_a = {},
                _a[CSS.imageryLayerStretchedImage] = isStretched,
                _a[CSS.symbol] = !isStretched,
                _a);
            var dynamicStyles = {
                opacity: "" + (opacity != null ? opacity : layer.opacity)
            };
            return (widget_1.tsx("img", { class: this.classes(stretchedClasses), styles: dynamicStyles, src: src, alt: label, border: 0, width: elementInfo.width, height: elementInfo.height }));
        };
        // _renderOnboardingPanel
        InteractiveClassic.prototype._renderOnboardingPanel = function () {
            var close = i18nInteractiveLegend.close, newInteractiveLegend = i18nInteractiveLegend.newInteractiveLegend, onboardingConfirmation = i18nInteractiveLegend.onboardingConfirmation, firstOnboardingWelcomeMessage = i18nInteractiveLegend.firstOnboardingWelcomeMessage, secondOnboardingWelcomeMessage = i18nInteractiveLegend.secondOnboardingWelcomeMessage, thirdOnboardingWelcomeMessage = i18nInteractiveLegend.thirdOnboardingWelcomeMessage;
            var relationshipTest = this.activeLayerInfos.filter(function (activeLayerInfo) {
                return (activeLayerInfo.get("layer.renderer.authoringInfo.type") ===
                    "relationship");
            });
            return (widget_1.tsx("div", { class: CSS.onboarding.mainContainer },
                widget_1.tsx("div", { key: "onboarding-panel", class: CSS.onboarding.contentContainer },
                    widget_1.tsx("div", { class: CSS.onboarding.closeContainer },
                        widget_1.tsx("span", { bind: this, onclick: this._disableOnboarding, onkeydown: this._disableOnboarding, tabIndex: 0, class: CSS.calciteStyles.close, title: close })),
                    widget_1.tsx("div", { class: CSS.onboarding.logoContainer }),
                    widget_1.tsx("div", { class: CSS.onboarding.titleContainer },
                        widget_1.tsx("h3", null, newInteractiveLegend)),
                    widget_1.tsx("div", { class: CSS.onboarding.infoContainer },
                        widget_1.tsx("p", null, firstOnboardingWelcomeMessage),
                        widget_1.tsx("p", null, secondOnboardingWelcomeMessage),
                        widget_1.tsx("p", null, thirdOnboardingWelcomeMessage))),
                widget_1.tsx("div", { class: CSS.onboarding.onboardingButtonContainer },
                    widget_1.tsx("button", { bind: this, onclick: this._disableOnboarding, onkeydown: this._disableOnboarding, tabIndex: 0, class: CSS.calciteStyles.btn, title: onboardingConfirmation }, onboardingConfirmation))));
        };
        // _renderResetButton
        InteractiveClassic.prototype._renderResetButton = function (featureLayerData, operationalItemIndex, legendElementInfos, legendElement) {
            var _this = this;
            var _a;
            var isRelationship = this._checkForRelationshipLegend(legendElement, operationalItemIndex);
            var disabled = null;
            if (isRelationship) {
                disabled = this._handleDisableForRelationship(operationalItemIndex);
            }
            else {
                disabled = this._handleDisableForShowAll(operationalItemIndex, legendElementInfos);
            }
            var grayStyles = (_a = {},
                _a[CSS.interactiveLegendGrayButtonStyles] = disabled,
                _a);
            return (widget_1.tsx("button", { bind: this, class: this.classes(CSS.interactiveLegendResetButton, CSS.calciteStyles.btn, CSS.calciteStyles.btnClear, CSS.calciteStyles.btnSmall, grayStyles), tabIndex: this.offscreen ? -1 : 0, disabled: disabled ? true : false, onclick: function (event) {
                    _this._resetLegendFilter(featureLayerData, operationalItemIndex);
                }, onkeydown: function (event) {
                    _this._resetLegendFilter(featureLayerData, operationalItemIndex);
                } }, i18nInteractiveLegend.showAll));
        };
        // _renderZoomToButton
        InteractiveClassic.prototype._renderZoomToButton = function (operationalItemIndex) {
            var _this = this;
            return (widget_1.tsx("button", { bind: this, class: this.classes(CSS.calciteStyles.btn, CSS.calciteStyles.btnClear, CSS.calciteStyles.btnSmall, CSS.extentButton), tabIndex: this.offscreen ? -1 : 0, onclick: function (event) {
                    _this.viewModel.updateExtentToAllFeatures(operationalItemIndex);
                }, onkeydown: function (event) {
                    _this.viewModel.updateExtentToAllFeatures(operationalItemIndex);
                } }, i18nInteractiveLegend.zoomTo));
        };
        //-------------------------------------------------------------------
        //
        //  Filter methods
        //
        //-------------------------------------------------------------------
        InteractiveClassic.prototype._handleFilterOption = function (event, elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, isPredominance, legendElementIndex, legendElementInfos, normalizationField) {
            if (this.filterMode === "featureFilter") {
                this._featureFilter(event, elementInfo, field, operationalItemIndex, legendInfoIndex, legendElement, isPredominance, legendElementInfos, normalizationField);
            }
            else if (this.filterMode === "mute") {
                this._featureMute(event, elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, legendElementInfos, isPredominance, normalizationField);
            }
            if (this.featureCountEnabled) {
                this.viewModel.updateTotalFeatureCount(operationalItemIndex, legendElementIndex);
                this.scheduleRender();
            }
        };
        //_filterFeatures
        InteractiveClassic.prototype._featureFilter = function (event, elementInfo, field, operationalItemIndex, legendInfoIndex, legendElement, isPredominance, legendElementInfos, normalizationField) {
            this._handleSelectedStyles(event, legendElementInfos);
            this.viewModel.applyFeatureFilter(elementInfo, field, operationalItemIndex, legendElement, legendInfoIndex, isPredominance, legendElementInfos, normalizationField);
        };
        // _muteFeatures
        InteractiveClassic.prototype._featureMute = function (event, elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, legendElementInfos, isPredominance, normalizationField) {
            this._handleSelectedStyles(event, legendElementInfos);
            this.viewModel.applyFeatureMute(elementInfo, field, legendInfoIndex, operationalItemIndex, legendElement, legendElementInfos, isPredominance, normalizationField);
        };
        // End of filter methods
        // _resetLegendFilter
        InteractiveClassic.prototype._resetLegendFilter = function (featureLayerData, operationalItemIndex) {
            this.viewModel.resetLegendFilter(featureLayerData, operationalItemIndex);
            if (this.featureCountEnabled) {
                this.viewModel.queryTotalFeatureCount(operationalItemIndex);
            }
        };
        // _disableOnboarding
        InteractiveClassic.prototype._disableOnboarding = function () {
            this.onboardingPanelEnabled = false;
            this.scheduleRender();
        };
        // _handleSelectedStyles
        InteractiveClassic.prototype._handleSelectedStyles = function (event, legendElementInfos) {
            var node = event.currentTarget;
            var legendElementInfoIndex = parseInt(node.getAttribute("data-child-index"));
            var legendElementIndex = parseInt(node.getAttribute("data-legend-index"));
            var activeLayerInfoId = node.getAttribute("data-layer-id");
            var featureLayerData = this.selectedStyleDataCollection.find(function (layerData) {
                return layerData ? layerData.layerItemId === activeLayerInfoId : null;
            });
            var legendElementChildArr = featureLayerData.selectedInfoIndex[legendElementIndex];
            if (Array.isArray(legendElementChildArr) &&
                legendElementChildArr.length >= 1) {
                legendElementChildArr.indexOf(legendElementInfoIndex) === -1
                    ? legendElementChildArr.push(legendElementInfoIndex)
                    : legendElementChildArr.splice(legendElementChildArr.indexOf(legendElementInfoIndex), 1);
            }
            else {
                featureLayerData.selectedInfoIndex[legendElementIndex] = [
                    legendElementInfoIndex
                ];
            }
        };
        // _removeScrollbarFlicker
        InteractiveClassic.prototype._removeScrollbarFlicker = function () {
            var intLegend = this._interactiveLegendBase;
            var layerRowContainer = document.querySelector("." + CSS.interactiveLegendLayerRowContainer);
            var clientHeight = intLegend.clientHeight;
            var maxHeight = intLegend
                ? parseFloat(getComputedStyle(intLegend).maxHeight)
                : null;
            var paddingBottom = layerRowContainer
                ? parseFloat(getComputedStyle(layerRowContainer).paddingBottom)
                : null;
            if (!this._filterLayerRowContainerStyles) {
                this._filterLayerRowContainerStyles = paddingBottom;
            }
            return this._filterLayerRowContainerStyles &&
                maxHeight < clientHeight + 5 &&
                maxHeight > clientHeight - 5
                ? "padding-bottom: " + (this._filterLayerRowContainerStyles + 2) + "px"
                : null;
        };
        // _handleDisableForRelationship
        InteractiveClassic.prototype._handleDisableForRelationship = function (operationalItemIndex) {
            var relationshipElement = this.relationshipRampElements[operationalItemIndex];
            if (relationshipElement &&
                relationshipElement.twoDimensionRamp &&
                relationshipElement.twoDimensionRamp.shape &&
                relationshipElement.twoDimensionRamp.shape.queryExpressions) {
                var numClasses = relationshipElement.twoDimensionRamp.shape.colorRampProperties.numClasses;
                var queryExpressions = relationshipElement.twoDimensionRamp.shape.queryExpressions;
                if (queryExpressions.length === 0) {
                    return true;
                }
                if (numClasses === 2) {
                    if (queryExpressions.length === 4) {
                        return true;
                    }
                }
                else if (numClasses === 3) {
                    if (queryExpressions.length === 9) {
                        return true;
                    }
                }
                else if (numClasses === 4) {
                    if (queryExpressions.length === 16) {
                        return true;
                    }
                }
            }
        };
        // _handleDisableForShowAll
        InteractiveClassic.prototype._handleDisableForShowAll = function (operationalItemIndex, legendElementInfos) {
            var queryExpressionCollection = this.get("viewModel.interactiveStyleData.queryExpressions");
            var queryExpressions = queryExpressionCollection.getItemAt(operationalItemIndex);
            var disabled = queryExpressions &&
                (queryExpressions.length === 0 ||
                    (queryExpressions.length ===
                        (legendElementInfos && legendElementInfos.length) &&
                        legendElementInfos.length > 1))
                ? true
                : false;
            return disabled;
        };
        // _checkForInteractivity
        InteractiveClassic.prototype._checkForInteractivity = function (activeLayerInfo, legendElement, operationalItemIndex, featureLayerData, singleSymbol, isTypePredominance) {
            var isRelationship = this._checkForRelationshipLegend(legendElement, operationalItemIndex);
            var classifyDataCheckedColorRamp = this._colorRampCheck(activeLayerInfo);
            var featureLayerView = this.viewModel.featureLayerViews.getItemAt(operationalItemIndex);
            var type = legendElement.type;
            var isOpacityRamp = type === "opacity-ramp", isSizeRamp = type === "size-ramp", isHeatRamp = type === "heatmap-ramp", isColorRamp = type === "color-ramp", classifyDataCheckedSizeRamp = featureLayerView &&
                featureLayerView.get("layer.renderer.authoringInfo.type") ===
                    "class-breaks-size";
            var classBreakInfos = featureLayerView &&
                featureLayerView.get("layer.renderer.classBreakInfos");
            var hasMoreThanOneClassBreak = featureLayerView && classBreakInfos && classBreakInfos.length > 1;
            var standardInteractivityCheck = !activeLayerInfo.get("layer.sublayers") &&
                activeLayerInfo.get("layer.type") === "feature" &&
                featureLayerData &&
                !isOpacityRamp &&
                !isHeatRamp &&
                !isSizeRamp &&
                !isColorRamp;
            return classBreakInfos
                ? (standardInteractivityCheck && hasMoreThanOneClassBreak) ||
                    (isTypePredominance && !isSizeRamp && !isOpacityRamp) ||
                    singleSymbol ||
                    isRelationship ||
                    classifyDataCheckedColorRamp ||
                    classifyDataCheckedSizeRamp
                : standardInteractivityCheck ||
                    (isTypePredominance && !isSizeRamp && !isOpacityRamp) ||
                    singleSymbol ||
                    isRelationship ||
                    classifyDataCheckedColorRamp ||
                    classifyDataCheckedSizeRamp;
        };
        // _checkForRelationshipLegend
        InteractiveClassic.prototype._checkForRelationshipLegend = function (legendElement, operationalItemIndex) {
            var featureLayerView = this.viewModel.featureLayerViews.getItemAt(operationalItemIndex);
            var authoringInfoType = featureLayerView &&
                featureLayerView.get("layer.renderer.authoringInfo.type");
            return (authoringInfoType === "relationship" && legendElement.type !== "size-ramp");
        };
        // _colorRampCheck
        InteractiveClassic.prototype._colorRampCheck = function (activeLayerInfo) {
            return (activeLayerInfo.get("layer.renderer.authoringInfo.type") ===
                "class-breaks-color");
        };
        // _getFeatureLayerData
        InteractiveClassic.prototype._getFeatureLayerData = function (activeLayerInfo) {
            var selectedStyleDataCollection = this.selectedStyleDataCollection;
            return selectedStyleDataCollection.length > 0
                ? selectedStyleDataCollection.find(function (data) {
                    return data ? activeLayerInfo.layer.id === data.layerItemId : null;
                })
                : null;
        };
        // _getOperationalItemIndex
        InteractiveClassic.prototype._getOperationalItemIndex = function (activeLayerInfo) {
            var itemIndex = null;
            this.layerListViewModel.operationalItems.forEach(function (operationalItem, operationalItemIndex) {
                if (operationalItem) {
                    var operationalItemLayer = operationalItem.layer;
                    if (operationalItemLayer.id === activeLayerInfo.layer.id) {
                        itemIndex = operationalItemIndex;
                    }
                }
            });
            return itemIndex;
        };
        // _getSelectedValue
        InteractiveClassic.prototype._getSelectedValue = function (legendElementInfos, legendInfoIndex, selectedInfoIndex, featureLayerData, queryExpressions) {
            if (legendElementInfos && legendElementInfos.length === 1) {
                if ((selectedInfoIndex && selectedInfoIndex.length === 0) ||
                    selectedInfoIndex === null) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (selectedInfoIndex) {
                if ((featureLayerData.selectedInfoIndex &&
                    selectedInfoIndex.indexOf(legendInfoIndex) === -1 &&
                    selectedInfoIndex.length > 0) ||
                    (queryExpressions && queryExpressions[0] === "1=0")) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        };
        __decorate([
            decorators_1.aliasOf("viewModel.activeLayerInfos"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "activeLayerInfos", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.view"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "view", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.filterMode"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "filterMode", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.layerListViewModel"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "layerListViewModel", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.searchExpressions"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "searchExpressions", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.searchViewModel"),
            decorators_1.property()
        ], InteractiveClassic.prototype, "searchViewModel", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.selectedStyleDataCollection"),
            widget_1.renderable()
        ], InteractiveClassic.prototype, "selectedStyleDataCollection", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.opacity"),
            widget_1.renderable()
        ], InteractiveClassic.prototype, "opacity", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.grayScale"),
            widget_1.renderable()
        ], InteractiveClassic.prototype, "grayScale", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.featureCountEnabled"),
            widget_1.renderable()
        ], InteractiveClassic.prototype, "featureCountEnabled", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.updateExtentEnabled"),
            widget_1.renderable()
        ], InteractiveClassic.prototype, "updateExtentEnabled", void 0);
        __decorate([
            decorators_1.property()
        ], InteractiveClassic.prototype, "relationshipRampElements", void 0);
        __decorate([
            widget_1.renderable(["viewModel.state"]),
            decorators_1.property({
                type: InteractiveStyleViewModel
            })
        ], InteractiveClassic.prototype, "viewModel", void 0);
        __decorate([
            decorators_1.property()
        ], InteractiveClassic.prototype, "onboardingPanelEnabled", void 0);
        __decorate([
            decorators_1.property()
        ], InteractiveClassic.prototype, "offscreen", void 0);
        __decorate([
            decorators_1.property({ readOnly: true })
        ], InteractiveClassic.prototype, "type", void 0);
        __decorate([
            widget_1.accessibleHandler()
        ], InteractiveClassic.prototype, "_handleFilterOption", null);
        __decorate([
            widget_1.accessibleHandler()
        ], InteractiveClassic.prototype, "_resetLegendFilter", null);
        __decorate([
            widget_1.accessibleHandler()
        ], InteractiveClassic.prototype, "_disableOnboarding", null);
        InteractiveClassic = __decorate([
            decorators_1.subclass("InteractiveClassic")
        ], InteractiveClassic);
        return InteractiveClassic;
    }(decorators_1.declared(Widget)));
    return InteractiveClassic;
});
//# sourceMappingURL=InteractiveClassic.js.map