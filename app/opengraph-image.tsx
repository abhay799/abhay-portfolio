// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt =
  "Abhay Kumar — AI/ML Engineer, Data Scientist and AI Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 1200,
          height: 630,
          background: "#07090d",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
            Abhay Kumar
          </div>
          <div style={{ fontSize: 28, color: "#00ffff", marginBottom: 24 }}>
            AI/ML Engineer · Data Scientist · AI Systems Builder
          </div>
          <div style={{ fontSize: 22, color: "#00ffff", letterSpacing: 0.5 }}>
            AI · Machine Learning · Data · Distributed Systems
          </div>
        </div>
        <div
          style={{
            width: 1000,
            height: 4,
            background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
            marginTop: 40,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}