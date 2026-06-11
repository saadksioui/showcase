"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mount, setMount] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme: string | undefined = theme === "system" ? systemTheme : theme;

  useEffect((): void => {
    setMount(true);
  }, []);

  const handleThemeChange = (checked: boolean): void => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="text-black dark:text-white" />
      <Switch
        defaultChecked={currentTheme === "dark"}
        onCheckedChange={handleThemeChange}
        checked={currentTheme === "dark"}
        disabled={!mount}
      />
      <Moon className="text-black dark:text-white" />
    </div>
  );
};

export default ThemeSwitch;
