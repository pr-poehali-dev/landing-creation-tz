import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CallbackModal, LeadForm } from "@/components/gosash/shared";
import HeroSection from "@/components/gosash/HeroSection";
import TariffsFinanceAbout from "@/components/gosash/TariffsFinanceAbout";
import InstructorsToFooter from "@/components/gosash/InstructorsToFooter";

export default function Index() {
  const [showCallback, setShowCallback] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState("");
  const [showLeadModal, setShowLeadModal] = useState(false);

  const openTariffForm = (tariffName: string) => {
    setSelectedTariff(`Интересует тариф: ${tariffName}`);
    setShowLeadModal(true);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">

      {showCallback && <CallbackModal onClose={() => setShowCallback(false)} />}

      {showLeadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLeadModal(false)} />
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <button onClick={() => setShowLeadModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <Icon name="X" size={22} />
            </button>
            <LeadForm
              title="Записаться на обучение"
              subtitle="Заполните форму — мы перезвоним и ответим на все вопросы"
              defaultTariff={selectedTariff}
            />
          </div>
        </div>
      )}

      <HeroSection onCallbackOpen={() => setShowCallback(true)} />
      <TariffsFinanceAbout onTariffSelect={openTariffForm} />
      <InstructorsToFooter />
    </div>
  );
}
