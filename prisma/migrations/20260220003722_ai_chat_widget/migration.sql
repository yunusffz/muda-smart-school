-- CreateTable
CREATE TABLE "ai_chat_settings" (
    "id" TEXT NOT NULL,
    "system_prompt" TEXT NOT NULL,
    "welcome_message" TEXT NOT NULL DEFAULT 'Halo! Saya asisten virtual SMK Muhammadiyah 2 Cibiru. Ada yang bisa saya bantu? 😊',
    "suggestions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_chat_settings_pkey" PRIMARY KEY ("id")
);
