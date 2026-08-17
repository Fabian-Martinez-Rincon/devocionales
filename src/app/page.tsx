import BankSection from "@/components/BankSection";
import Cronograma from "@/components/Cronograma";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Cronograma />
      <BankSection />
      <Footer />
    </main>
  );
}
