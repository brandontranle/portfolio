import React, { createContext, useContext, useState, useEffect } from "react";

interface MediaContextProps {
  isMobile: boolean;
}

const MediaContext = createContext<MediaContextProps | undefined>(undefined);

const MediaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const handleResize = () => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MediaContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
};
export { MediaProvider, useMedia };
