import { ImageResponse } from "next/og";

export const alt =
  "Sri Kanth V — AI/ML Engineer, Data & Analytics and Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0B1524 0%, #080B12 48%, #0A1424 100%)",
          color: "#E9EEFB",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
            background: "linear-gradient(90deg, #0F5BDC, #7AA9FF, #7C5CFF)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 58,
                height: 58,
                borderRadius: 14,
                border: "1px solid rgba(122,169,255,0.45)",
                background: "rgba(40,123,255,0.12)",
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#9CC0FF",
              }}
            >
              SKV
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 21, fontWeight: 600 }}>
                Sri Kanth V
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 12,
                  letterSpacing: 3,
                  color: "#78849C",
                  marginTop: 4,
                }}
              >
                AI / ML · FULL STACK
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 13,
              letterSpacing: 3,
              color: "#78849C",
            }}
          >
            PORTFOLIO / 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 21,
              letterSpacing: 4,
              color: "#7AA9FF",
            }}
          >
            AI/ML ENGINEER · ANALYTICS · FULL STACK DEVELOPER
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            <div>Building Intelligent</div>
            <div>Experiences Through Code.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 16, color: "#98A3B8" }}>
            github.com/Srikanth28202
          </div>
          <div style={{ display: "flex", fontSize: 16, color: "#98A3B8" }}>
            linkedin.com/in/sri-kanth-v-07a6a7269
          </div>
        </div>
      </div>
    ),
    size,
  );
}
