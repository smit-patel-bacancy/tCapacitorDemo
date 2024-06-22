package com.example.app;

import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Zoom")
public class ZoomPlugin extends Plugin {
    @Override
    public void load() {
        this.bridge.getWebView().getSettings().setBuiltInZoomControls(true);
        // disables zoom in/zoom out buttons in the webview, to only allow pinch to zoom
        this.bridge.getWebView().getSettings().setDisplayZoomControls(false);
    }
}