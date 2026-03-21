import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => (
  <>
    <PromoBar />
    <Navbar />
    <main className="min-h-[60vh] flex items-center justify-center" style={{ background: "hsl(var(--surface-tint))" }}>
      <div className="text-center px-6 py-24">
        <h1 className="font-display text-h1 text-brand-navy mb-4 text-balance">{title}</h1>
        <p className="font-body text-body text-brand-slate">Coming Soon</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PlaceholderPage;
