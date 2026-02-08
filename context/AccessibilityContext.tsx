"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  focusIndicators: boolean;
  reducedMotion: boolean;
  largerCursor: boolean;
}

export const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  focusIndicators: false,
  reducedMotion: false,
  largerCursor: false,
};

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  toggleSetting: (key: keyof Omit<AccessibilitySettings, "fontSize">) => void;
  changeFontSize: (delta: number) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-settings");
    let initialSettings = defaultSettings;
    if (saved) {
      try {
        initialSettings = { ...defaultSettings, ...JSON.parse(saved) };
      } catch (error) {
        console.error("Error loading accessibility settings:", error);
      }
    }
    setSettings(initialSettings);
  }, []);

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const applySettings = (settingsToApply: AccessibilitySettings) => {
    const root = document.documentElement;

    root.style.setProperty(
      "--accessibility-font-scale",
      (settingsToApply.fontSize / 100).toString()
    );
    root.dataset.highContrast = String(settingsToApply.highContrast);
    root.dataset.enhancedFocus = String(settingsToApply.focusIndicators);
    root.dataset.reducedMotion = String(settingsToApply.reducedMotion);
    root.dataset.largeCursor = String(settingsToApply.largerCursor);
  };

  const updateSettings = useCallback(
    (newSettings: Partial<AccessibilitySettings>) => {
      setSettings((prev) => ({ ...prev, ...newSettings }));
    },
    []
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  const toggleSetting = useCallback(
    (key: keyof Omit<AccessibilitySettings, "fontSize">) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  const changeFontSize = useCallback((delta: number) => {
    setSettings((prev) => {
      const newSize = Math.max(80, Math.min(150, prev.fontSize + delta));
      return { ...prev, fontSize: newSize };
    });
  }, []);

  const value = {
    settings,
    updateSettings,
    resetSettings,
    toggleSetting,
    changeFontSize,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
