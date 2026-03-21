interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const InfoCard = ({ icon, title, body }: InfoCardProps) => (
  <div className="bg-brand-sky rounded-card border border-blue-200 p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="font-display text-h4 text-brand-navy mb-2">{title}</h3>
    <p className="font-body text-body-sm text-brand-slate">{body}</p>
  </div>
);

export default InfoCard;
