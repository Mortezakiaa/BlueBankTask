import { useRouter } from "next/navigation";

export default function useStepNavigate() {
  const router = useRouter();

  const nextStep = (step: string) => {
    router.push(step);
  };

  const prevStep = () => {
    router.back();
  };

  return { nextStep, prevStep };
}
