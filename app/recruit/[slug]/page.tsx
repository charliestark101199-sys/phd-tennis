import PagePlaceholder from "@/components/PagePlaceholder";

type RecruitProfilePageProps = {
  params: {
    slug: string;
  };
};

export default function RecruitProfilePage({ params }: RecruitProfilePageProps) {
  return <PagePlaceholder title={`Public Recruit Profile: ${params.slug}`} />;
}
