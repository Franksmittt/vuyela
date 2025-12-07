import Header from '@/components/header';
import Footer from '@/components/footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* Note: main tag is in root layout, so we use div here */}
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}

