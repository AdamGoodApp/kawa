import SwiftUI
import React
import React_RCTSwiftExtensions

@main
struct kawaApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  
  @State private var selectedTab: String = "Home"
  
  var body: some Scene {
    RCTMainWindow(moduleName: "kawa", devMenuSceneAnchor: .top) { rootView in
      rootView.ornament(attachmentAnchor: .scene(.leading)) {
        TabView(selection: $selectedTab) {
          Text("Home")
            .tabItem {
              Label("Home", systemImage: "house")
            }
            .tag("Home")
            .onAppear {
              sendReactNativeNavigationEvent(name: "Home")
            }
          
          Text("Settings")
            .tabItem {
              Label("Settings", systemImage: "gear")
            }
            .tag("Settings")
            .onAppear {
              sendReactNativeNavigationEvent(name: "Settings")
            }
        }
      }
    }
  }
  
  private func sendReactNativeNavigationEvent(name: String) {
    let eventName = "NavigationEvent"
    let eventBody: [String: Any] = ["navigate": name]
    
    if let bridge = delegate.bridge {
      bridge.eventDispatcher().sendAppEvent(withName: eventName, body: eventBody)
    }
  }
}
