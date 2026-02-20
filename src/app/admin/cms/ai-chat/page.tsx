import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { AiChatForm } from "./_components/AiChatForm";
import { getAiChatSetting } from "@/src/features/cms/services/ai-chat";

export default async function AiChatSettingPage() {
  const setting = await getAiChatSetting();

  const defaultValues = {
    systemPrompt: setting.systemPrompt,
    welcomeMessage: setting.welcomeMessage,
    suggestions: setting.suggestions,
    isActive: setting.isActive,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pengaturan AI Chat"
        description="Kelola konteks, pesan sambutan, dan saran pertanyaan untuk asisten virtual"
      />
      <AiChatForm defaultValues={defaultValues} />
    </div>
  );
}
