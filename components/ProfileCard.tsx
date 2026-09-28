import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="portrait-wrap" aria-label="Profile photo">
      <div className="portrait-glow" />
      <div className="portrait-card">
        <Image
          src="/profile.jpg"
          alt="Muhammad Saqib Rafique"
          width={720}
          height={720}
          priority
          className="portrait"
        />
      </div>
    </div>
  );
}
