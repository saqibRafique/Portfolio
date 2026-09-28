import Image from "next/image";

export function ProfileCard() {
  return (
    <aside className="hero-profile" aria-label="Professional profile">
      <div className="profile-frame">
        <div className="profile-orbit profile-orbit-one" />
        <div className="profile-orbit profile-orbit-two" />
        <div className="profile-photo-shell">
          <Image
            src="/profile.jpg"
            alt="Muhammad Saqib Rafique"
            width={720}
            height={900}
            priority
            className="portrait"
          />
          <div className="profile-photo-shade" />
        </div>

        <div className="profile-card profile-card-top">
          <span>Current focus</span>
          <strong>Frontend architecture</strong>
        </div>

        <div className="profile-card profile-card-bottom">
          <span>Engineering scope</span>
          <strong>Products · Platforms · AI</strong>
        </div>
      </div>

      <div className="profile-signature">
        <span className="profile-status-dot" />
        <div>
          <strong>Muhammad Saqib Rafique</strong>
          <span>Principal Software Engineer</span>
        </div>
      </div>
    </aside>
  );
}
