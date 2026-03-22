import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "CleanLabel | AI Food Scanner that detects hidden toxins in your food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const iconBuffer = await readFile(join(process.cwd(), "public", "icon.png"));
  const iconBase64 = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #10b981, transparent)",
        }}
      />

      {/* App icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="CleanLabel app icon"
        src={iconBase64}
        width="120"
        height="120"
        style={{
          borderRadius: "28px",
          marginBottom: "32px",
          boxShadow: "0 0 60px rgba(16,185,129,0.3)",
        }}
      />

      {/* Title */}
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 800,
          color: "white",
          letterSpacing: "-2px",
          marginBottom: "8px",
        }}
      >
        Clean
        <span style={{ color: "#34d399" }}>Label</span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: 500,
          color: "#9ca3af",
          marginBottom: "40px",
        }}
      >
        AI-Powered Food Scanner for iOS
      </div>

      {/* Feature pills */}
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        {["Detect Toxins", "Flag Seed Oils", "Spot Artificial Dyes"].map(
          (text) => (
            <div
              key={text}
              style={{
                padding: "10px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(16,185,129,0.3)",
                background: "rgba(16,185,129,0.08)",
                color: "#34d399",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {text}
            </div>
          ),
        )}
      </div>

      {/* Bottom URL */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          fontSize: "18px",
          color: "#4b5563",
          fontWeight: 500,
        }}
      >
        cleanlabelapp.sbs
      </div>
    </div>,
    { ...size },
  );
}
