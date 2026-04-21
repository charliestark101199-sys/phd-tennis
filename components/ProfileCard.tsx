type ProfileCardProps = {
  name: string;
  graduationYear: number;
  utr: number;
  location: string;
  intendedMajor: string;
};

export default function ProfileCard({
  name,
  graduationYear,
  utr,
  location,
  intendedMajor
}: ProfileCardProps) {
  return (
    <article className="card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>{name}</h3>
      <p className="muted" style={{ margin: 0 }}>
        Class of {graduationYear} | UTR {utr}
      </p>
      <p className="muted" style={{ marginBottom: 0 }}>
        {location} | Intended major: {intendedMajor}
      </p>
    </article>
  );
}
