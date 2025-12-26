import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Sync with current theme and listen for theme changes
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const handleStorage = (e) => {
      if (e.key === "theme") setIsDark(e.newValue === "dark");
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Night: stars & meteors */}
      {isDark && (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}

          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                width: meteor.size * 25 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
              }}
            />
          ))}
        </>
      )}

      {/* Day: subtle sun & moving clouds */}
      {!isDark && (
        <>
          <div className="sun pointer-events-none" style={{ top: "6%", right: "8%" }} />

          <div
            className="cloud animate-cloud-move-right animate-cloud-slow pointer-events-none"
            style={{ top: "18%", left: "-8%", width: "320px", height: "92px" }}
          >
            <span className="cloud-puff" style={{ width: "84px", height: "84px", left: "8px", top: "8px" }} />
            <span className="cloud-puff" style={{ width: "140px", height: "140px", left: "74px", top: "-24px" }} />
            <span className="cloud-puff" style={{ width: "74px", height: "74px", left: "210px", top: "22px" }} />
          </div>

          <div
            className="cloud animate-cloud-move-left animate-cloud-slow-2 pointer-events-none"
            style={{ top: "28%", left: "55%", width: "240px", height: "80px", opacity: 0.92 }}
          >
            <span className="cloud-puff" style={{ width: "70px", height: "70px", left: "6px", top: "12px" }} />
            <span className="cloud-puff" style={{ width: "120px", height: "120px", left: "68px", top: "-16px" }} />
            <span className="cloud-puff" style={{ width: "56px", height: "56px", left: "170px", top: "20px" }} />
          </div>

          <div
            className="cloud animate-cloud-move-right animate-cloud-slow pointer-events-none"
            style={{ top: "40%", left: "30%", width: "220px", height: "68px", opacity: 0.94 }}
          >
            <span className="cloud-puff" style={{ width: "64px", height: "64px", left: "8px", top: "12px" }} />
            <span className="cloud-puff" style={{ width: "110px", height: "110px", left: "64px", top: "-14px" }} />
            <span className="cloud-puff" style={{ width: "56px", height: "56px", left: "168px", top: "18px" }} />
          </div>

          {/* lower clouds for depth */}
          <div
            className="cloud animate-cloud-move-right-slow animate-cloud-slow pointer-events-none"
            style={{ top: "62%", left: "-12%", width: "360px", height: "96px", opacity: 0.9 }}
          >
            <span className="cloud-puff" style={{ width: "96px", height: "96px", left: "10px", top: "12px" }} />
            <span className="cloud-puff" style={{ width: "180px", height: "180px", left: "92px", top: "-32px" }} />
            <span className="cloud-puff" style={{ width: "88px", height: "88px", left: "240px", top: "24px" }} />
          </div>

          <div
            className="cloud animate-cloud-move-left-slow animate-cloud-slow pointer-events-none"
            style={{ top: "72%", left: "48%", width: "300px", height: "84px", opacity: 0.88 }}
          >
            <span className="cloud-puff" style={{ width: "76px", height: "76px", left: "8px", top: "14px" }} />
            <span className="cloud-puff" style={{ width: "140px", height: "140px", left: "80px", top: "-28px" }} />
            <span className="cloud-puff" style={{ width: "84px", height: "84px", left: "212px", top: "18px" }} />
          </div>
        </>
      )}
    </div>
  );
};