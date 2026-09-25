// app/icon.tsx
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 64,
          height: 64,
          background: "#07090d",
          alignItems: "center",
          justifyContent: "center",
          color: "#00ffff",
          fontWeight: 700,
          fontSize: 48,
          fontFamily: "system-ui, sans-serif",
          border: "2px solid #00ffff",
          borderRadius: "12px",
        }}
      >
        AK
      </div>
    ),
    {
      width: 64,
      height: 64,
    }
  );
}