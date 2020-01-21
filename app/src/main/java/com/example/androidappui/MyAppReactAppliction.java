package com.example.androidappui;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

import java.util.ArrayList;
import java.util.List;

public class MyAppReactAppliction extends Application implements ReactApplication {

    private final ReactNativeHost mReactNamtiveHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            List<ReactPackage> packages = new ArrayList<>();
            packages.add(new MainReactPackage());
            packages.add(new RNGestureHandlerPackage());
            return packages;
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };



    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNamtiveHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this,false);
    }
}
