import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PagePlaceholder title="Public Homepage" />
      <div className="flex items-center justify-center gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
      </div>
    </div>
  );
}
