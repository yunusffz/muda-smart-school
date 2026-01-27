import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { SchoolProfileForm } from "./_components/SchoolProfileForm";
import { getSettingsMap } from "@/src/features/cms/services/school-settings";

const settingKeys = [
  "school_name",
  "school_tagline",
  "school_logo",
  "accreditation_grade",
  "vision_text",
  "missions",
  "address_line1",
  "address_line2",
  "address_line3",
  "postal_code",
  "maps_url",
];

export default async function SchoolProfilePage() {
  const settings = await getSettingsMap(settingKeys);

  let missions: string[] = [];
  try {
    missions = settings.missions ? JSON.parse(settings.missions) : [];
  } catch {
    missions = [];
  }

  const defaultValues = {
    school_name: settings.school_name || "",
    school_tagline: settings.school_tagline || "",
    school_logo: settings.school_logo || "",
    accreditation_grade: settings.accreditation_grade || "",
    vision_text: settings.vision_text || "",
    missions,
    address_line1: settings.address_line1 || "",
    address_line2: settings.address_line2 || "",
    address_line3: settings.address_line3 || "",
    postal_code: settings.postal_code || "",
    maps_url: settings.maps_url || "",
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Profil Sekolah"
        description="Kelola informasi profil sekolah"
      />
      <SchoolProfileForm defaultValues={defaultValues} />
    </div>
  );
}
